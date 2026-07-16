/**
 * Tests for the content-manifest validation logic.
 * Run: npm run test:content   (node --test)
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import {
  loadManifest,
  extractArticleSlugs,
  validateContent,
} from "./lib/content-manifest.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

function load() {
  const { hubs, existing, planned } = loadManifest(
    resolve(ROOT, "whv-guide-content-plan/content-manifest.yaml"),
  );
  const codeSlugs = extractArticleSlugs(
    readFileSync(resolve(ROOT, "lib/mockData.ts"), "utf8"),
  );
  return { hubs, existing, planned, codeSlugs };
}

test("real manifest has no hard errors", () => {
  const { hubs, existing, planned, codeSlugs } = load();
  const { errors } = validateContent({ hubs, existing, planned, codeSlugs });
  assert.deepEqual(errors, [], `unexpected errors:\n${errors.join("\n")}`);
});

test("every entry maps to a known hub", () => {
  const { hubs, existing, planned } = load();
  const ids = new Set(hubs.map((h) => h.id));
  for (const item of [...existing, ...planned]) {
    assert.ok(ids.has(item.hub), `unknown hub for ${item.slug}: ${item.hub}`);
  }
});

test("planned entries never collide with live article slugs", () => {
  const { planned, codeSlugs } = load();
  const live = new Set(codeSlugs);
  const reconciled = new Set(["published", "existing", "merged"]);
  for (const item of planned) {
    if (reconciled.has(item.status)) continue;
    assert.ok(!live.has(item.slug), `planned slug collides with live: ${item.slug}`);
  }
});

test("duplicate slug injection is detected", () => {
  const { hubs, existing, planned } = load();
  const dup = planned[0];
  const { errors } = validateContent({
    hubs,
    existing,
    planned: [...planned, { ...dup }],
  });
  assert.ok(
    errors.some((e) => e.includes("Duplicate slug")),
    "expected duplicate-slug error to be reported",
  );
});

test("unknown hub injection is detected", () => {
  const { hubs, existing, planned } = load();
  const { errors } = validateContent({
    hubs,
    existing,
    planned: [
      ...planned,
      { slug: "x-test", title: "t", hub: "no-such-hub", status: "planned", type: "article", priority: "P1", path: "/guides/x-test" },
    ],
  });
  assert.ok(
    errors.some((e) => e.includes("unknown hub")),
    "expected unknown-hub error to be reported",
  );
});
