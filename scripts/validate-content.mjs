/**
 * CLI: validate content-manifest.yaml at build / CI time.
 * Exits non-zero on hard errors (duplicate slugs/titles, invalid enums, hub
 * references, or planned/live slug collisions).
 *
 * Run: npm run validate:content
 */
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

const { hubs, existing, planned } = loadManifest(
  resolve(ROOT, "whv-guide-content-plan/content-manifest.yaml"),
);
const codeSlugs = extractArticleSlugs(
  readFileSync(resolve(ROOT, "lib/mockData.ts"), "utf8"),
);

const { errors, warnings } = validateContent({
  hubs,
  existing,
  planned,
  codeSlugs,
});

for (const w of warnings) console.warn(`⚠️  ${w}`);
for (const e of errors) console.error(`❌ ${e}`);

console.log(
  `\nContent validation: ${existing.length} existing + ${planned.length} planned` +
    ` = ${existing.length + planned.length} items, ${hubs.length} hubs.` +
    ` ${errors.length} error(s), ${warnings.length} warning(s).`,
);

if (errors.length > 0) process.exit(1);
