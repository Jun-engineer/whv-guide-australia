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
