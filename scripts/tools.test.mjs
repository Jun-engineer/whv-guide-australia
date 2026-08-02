/**
 * Unit tests for the tools calculation/filter logic.
 * Run: node --test scripts/tools.test.mjs
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import {
  computeProgress,
  countCompleted,
  itemMatchesFacets,
  filterItems,
} from "../lib/tools/logic/checklist.mjs";
import {
  isValidIsoDate,
  countWorkDays,
  summarizeWorkDays,
  SECOND_VISA_TARGET_DAYS,
} from "../lib/tools/logic/second-visa.mjs";
import {
  normalizePostcode,
  isValidPostcode,
  findPostcodeRegion,
  checkPostcode,
} from "../lib/tools/logic/postcode.mjs";
import { monthInSeason, normalizeQuery, filterSeasons } from "../lib/tools/logic/season.mjs";
import { toAmount, toWholeNumber, computeBudget } from "../lib/tools/logic/budget.mjs";

// ---- checklist.mjs -------------------------------------------------------

test("computeProgress: normal case", () => {
  assert.deepEqual(computeProgress(4, 1), {
    total: 4,
    completed: 1,
    remaining: 3,
    percent: 25,
  });
});

test("computeProgress: empty list yields 0% (no division by zero)", () => {
  assert.deepEqual(computeProgress(0, 0), {
    total: 0,
    completed: 0,
    remaining: 0,
    percent: 0,
  });
});

test("computeProgress: clamps completed above total and below zero", () => {
  assert.equal(computeProgress(3, 9).percent, 100);
  assert.equal(computeProgress(3, 9).completed, 3);
  assert.equal(computeProgress(3, -2).completed, 0);
});

test("countCompleted: counts only ids present in the completed set", () => {
  const items = [{ id: "a" }, { id: "b" }, { id: "c" }];
  assert.equal(countCompleted(items, new Set(["a", "c", "x"])), 2);
  assert.equal(countCompleted(items, ["b"]), 1);
  assert.equal(countCompleted(items, []), 0);
});

test("itemMatchesFacets: universal item (no facets) always matches", () => {
  assert.equal(itemMatchesFacets({ id: "x" }, { climate: "tropical" }), true);
});

test("itemMatchesFacets: constrained item matches only allowed value", () => {
  const item = { id: "coat", facets: { climate: ["cool"] } };
  assert.equal(itemMatchesFacets(item, { climate: "cool" }), true);
  assert.equal(itemMatchesFacets(item, { climate: "tropical" }), false);
});

test("itemMatchesFacets: 'all' or empty disables the facet", () => {
  const item = { id: "coat", facets: { climate: ["cool"] } };
  assert.equal(itemMatchesFacets(item, { climate: "all" }), true);
  assert.equal(itemMatchesFacets(item, { climate: "" }), true);
});

test("filterItems: filters across multiple facets (AND semantics)", () => {
  const items = [
    { id: "sunscreen", facets: { climate: ["tropical", "temperate"] } },
    { id: "coat", facets: { climate: ["cool"] } },
    { id: "boots", facets: { job: ["farm"] } },
    { id: "passport" }, // universal
  ];
  const result = filterItems(items, { climate: "tropical", job: "farm" });
  const ids = result.map((i) => i.id).sort();
  // sunscreen (tropical ok, no job constraint), boots (no climate constraint, farm ok), passport (universal)
  assert.deepEqual(ids, ["boots", "passport", "sunscreen"]);
});

// ---- second-visa.mjs -----------------------------------------------------

test("isValidIsoDate: accepts real dates, rejects malformed and impossible", () => {
  assert.equal(isValidIsoDate("2026-08-02"), true);
  assert.equal(isValidIsoDate("2026-02-29"), false); // 2026 not a leap year
  assert.equal(isValidIsoDate("2024-02-29"), true); // leap year
  assert.equal(isValidIsoDate("2026-13-01"), false);
  assert.equal(isValidIsoDate("2026-8-2"), false);
  assert.equal(isValidIsoDate(""), false);
  assert.equal(isValidIsoDate(20260802), false);
});

test("countWorkDays: counts distinct valid dates only (dedupes, skips invalid)", () => {
  const records = [
    { date: "2026-08-01" },
    { date: "2026-08-01" }, // duplicate → counts once
    { date: "2026-08-02" },
    { date: "not-a-date" }, // skipped
    {},
  ];
  assert.equal(countWorkDays(records), 2);
});

test("summarizeWorkDays: computes remaining, percent and evidence coverage", () => {
  const records = [
    { date: "2026-08-01", hasEvidence: true },
    { date: "2026-08-02", hasEvidence: false },
    { date: "2026-08-02", hasEvidence: true }, // same day, deduped
  ];
  const s = summarizeWorkDays(records);
  assert.equal(s.target, SECOND_VISA_TARGET_DAYS);
  assert.equal(s.worked, 2);
  assert.equal(s.remaining, 86);
  assert.equal(s.reached, false);
  assert.equal(s.evidenceDays, 2); // both days have at least one evidence record
  assert.equal(s.evidencePercent, 100);
});

test("summarizeWorkDays: empty input is safe", () => {
  const s = summarizeWorkDays([]);
  assert.equal(s.worked, 0);
  assert.equal(s.remaining, SECOND_VISA_TARGET_DAYS);
  assert.equal(s.percent, 0);
  assert.equal(s.evidencePercent, 0);
});

test("summarizeWorkDays: reaching the target caps percent at 100", () => {
  const records = Array.from({ length: 90 }, (_, i) => {
    const day = String((i % 28) + 1).padStart(2, "0");
    const month = String((Math.floor(i / 28) % 12) + 1).padStart(2, "0");
    return { date: `2026-${month}-${day}`, hasEvidence: true };
  });
  const s = summarizeWorkDays(records);
  assert.ok(s.worked >= SECOND_VISA_TARGET_DAYS);
  assert.equal(s.reached, true);
  assert.equal(s.percent, 100);
});

// ---- postcode.mjs --------------------------------------------------------

const POSTCODE_REGIONS = [
  { state: "QLD", stateLabel: "QLD", ranges: [[4655, 4655], [4670, 4680]] },
  { state: "NT", stateLabel: "NT", ranges: [[800, 899]] },
];

test("normalizePostcode: pads NT postcodes and trims, rejects junk", () => {
  assert.equal(normalizePostcode("4655"), "4655");
  assert.equal(normalizePostcode(" 4655 "), "4655");
  assert.equal(normalizePostcode("810"), "0810");
  assert.equal(normalizePostcode(810), "0810");
  assert.equal(normalizePostcode("46A5"), null);
  assert.equal(normalizePostcode("46555"), null);
  assert.equal(normalizePostcode(""), null);
});

test("isValidPostcode: accepts plausible AU range only", () => {
  assert.equal(isValidPostcode("4655"), true);
  assert.equal(isValidPostcode("0810"), true);
  assert.equal(isValidPostcode("0100"), false); // below 200
  assert.equal(isValidPostcode("abcd"), false);
});

test("findPostcodeRegion: matches within inclusive ranges", () => {
  assert.deepEqual(findPostcodeRegion("4655", POSTCODE_REGIONS), { state: "QLD", stateLabel: "QLD" });
  assert.deepEqual(findPostcodeRegion("4675", POSTCODE_REGIONS), { state: "QLD", stateLabel: "QLD" });
  assert.deepEqual(findPostcodeRegion("810", POSTCODE_REGIONS), { state: "NT", stateLabel: "NT" });
  assert.equal(findPostcodeRegion("3000", POSTCODE_REGIONS), null);
});

test("checkPostcode: reports validity and regional membership", () => {
  assert.deepEqual(checkPostcode("4655", POSTCODE_REGIONS), {
    valid: true,
    postcode: "4655",
    inRegional: true,
    region: { state: "QLD", stateLabel: "QLD" },
  });
  assert.deepEqual(checkPostcode("3000", POSTCODE_REGIONS), {
    valid: true,
    postcode: "3000",
    inRegional: false,
    region: null,
  });
  assert.deepEqual(checkPostcode("bad", POSTCODE_REGIONS), {
    valid: false,
    postcode: null,
    inRegional: false,
    region: null,
  });
});

// ---- season.mjs ----------------------------------------------------------

const SEASON_ENTRIES = [
  { id: "a", cropLabel: "いちご", state: "QLD", keywords: ["strawberry"], months: [6, 7, 8] },
  { id: "b", cropLabel: "ぶどう", state: "VIC", keywords: ["grape"], months: [2, 3, 4] },
  { id: "c", cropLabel: "マンゴー", state: "QLD", keywords: ["mango"], months: [10, 11, 12] },
];

test("monthInSeason: checks membership and rejects out-of-range months", () => {
  assert.equal(monthInSeason({ months: [6, 7, 8] }, 7), true);
  assert.equal(monthInSeason({ months: [6, 7, 8] }, 9), false);
  assert.equal(monthInSeason({ months: [6] }, 0), false);
  assert.equal(monthInSeason({ months: [6] }, 13), false);
});

test("normalizeQuery: lowercases and trims", () => {
  assert.equal(normalizeQuery("  Grape "), "grape");
  assert.equal(normalizeQuery(42), "");
});

test("filterSeasons: 'all'/empty filters are ignored", () => {
  assert.equal(filterSeasons(SEASON_ENTRIES, {}).length, 3);
  assert.equal(filterSeasons(SEASON_ENTRIES, { state: "all", month: "all" }).length, 3);
});

test("filterSeasons: combines state, month and crop text (AND)", () => {
  assert.deepEqual(
    filterSeasons(SEASON_ENTRIES, { state: "QLD" }).map((e) => e.id),
    ["a", "c"],
  );
  assert.deepEqual(
    filterSeasons(SEASON_ENTRIES, { month: 7 }).map((e) => e.id),
    ["a"],
  );
  assert.deepEqual(
    filterSeasons(SEASON_ENTRIES, { crop: "grape" }).map((e) => e.id),
    ["b"],
  );
  assert.deepEqual(
    filterSeasons(SEASON_ENTRIES, { state: "QLD", month: 11 }).map((e) => e.id),
    ["c"],
  );
});

// ---- budget.mjs ----------------------------------------------------------

test("toAmount: coerces to non-negative finite numbers", () => {
  assert.equal(toAmount("250"), 250);
  assert.equal(toAmount(250), 250);
  assert.equal(toAmount("-5"), 0);
  assert.equal(toAmount("abc"), 0);
  assert.equal(toAmount(undefined), 0);
});

test("toWholeNumber: floors to non-negative integer", () => {
  assert.equal(toWholeNumber("8.9"), 8);
  assert.equal(toWholeNumber(-3), 0);
});

test("computeBudget: sums weekly and derives monthly", () => {
  const r = computeBudget({ rent: 200, transport: 30, food: 90, phone: 10, other: 20 });
  assert.equal(r.weekly, 350);
  assert.equal(r.monthly, Math.round(350 * (52 / 12)));
  assert.equal(r.requiredSavings, 0);
});

test("computeBudget: required savings = weekly * weeks + upfront", () => {
  const r = computeBudget({ rent: 200, food: 100, noIncomeWeeks: 8, upfront: 2000 });
  assert.equal(r.weekly, 300);
  assert.equal(r.noIncomeWeeks, 8);
  assert.equal(r.requiredSavings, 300 * 8 + 2000);
});

test("computeBudget: ignores invalid/negative inputs safely", () => {
  const r = computeBudget({ rent: "abc", food: -50, noIncomeWeeks: "x", upfront: "" });
  assert.equal(r.weekly, 0);
  assert.equal(r.requiredSavings, 0);
});
