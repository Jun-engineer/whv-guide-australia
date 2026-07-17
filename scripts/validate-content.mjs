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
  readArticleModulesText,
  validateContent,
} from "./lib/content-manifest.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const { hubs, existing, planned } = loadManifest(
  resolve(ROOT, "whv-guide-content-plan/content-manifest.yaml"),
);
const articleModulesText = readArticleModulesText(
  resolve(ROOT, "lib/content/articles"),
);
const codeSlugs = extractArticleSlugs(articleModulesText);

// Parse the app-level redirect table (lib/content/redirects.ts) so build-time
// validation can confirm every redirect target is a live published article and
// that no redirect chains or shadowed live pages exist.
const redirectsText = readFileSync(
  resolve(ROOT, "lib/content/redirects.ts"),
  "utf8",
);
const redirects = [];
const redirectRe =
  /from:\s*"([^"]+)"\s*,\s*to:\s*"([^"]+)"/g;
let rm;
while ((rm = redirectRe.exec(redirectsText)) !== null) {
  redirects.push({ from: rm[1], to: rm[2] });
}

const { errors, warnings } = validateContent({
  hubs,
  existing,
  planned,
  codeSlugs,
  redirects,
});

// Internal-link integrity: every relatedSlugs entry must resolve to a real
// article slug, a registered redirect source, or a catalogued slug in the
// manifest (a planned article that will exist once published). Truly unknown
// slugs (typos) are errors; forward-references to catalogued-but-not-yet-
// published articles are allowed because getRelatedArticles() safely skips
// any slug that is not yet a live article at runtime.
const slugSet = new Set(codeSlugs);
const redirectFromSet = new Set(redirects.map((r) => r.from));
const manifestSlugSet = new Set(
  [...existing, ...planned].map((item) => item.slug),
);
const relatedRe = /relatedSlugs:\s*\[([^\]]*)\]/g;
let rel;
const brokenLinks = new Set();
while ((rel = relatedRe.exec(articleModulesText)) !== null) {
  const refs = rel[1]
    .split(",")
    .map((s) => s.trim().replace(/^["']|["']$/g, ""))
    .filter(Boolean);
  for (const ref of refs) {
    if (
      !slugSet.has(ref) &&
      !redirectFromSet.has(ref) &&
      !manifestSlugSet.has(ref)
    ) {
      brokenLinks.add(ref);
    }
  }
}
for (const ref of brokenLinks) {
  errors.push(`relatedSlugs references unknown article slug: "${ref}"`);
}

for (const w of warnings) console.warn(`⚠️  ${w}`);
for (const e of errors) console.error(`❌ ${e}`);

console.log(
  `\nContent validation: ${existing.length} existing + ${planned.length} planned` +
    ` = ${existing.length + planned.length} items, ${hubs.length} hubs.` +
    ` ${errors.length} error(s), ${warnings.length} warning(s).`,
);

if (errors.length > 0) process.exit(1);
