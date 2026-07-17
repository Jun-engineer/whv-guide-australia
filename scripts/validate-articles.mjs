/**
 * CLI: validate the split article data modules under lib/content/articles/.
 *
 * Detects:
 *   - duplicate slugs
 *   - duplicate paths (/guides/<slug>)
 *   - missing required fields
 *   - invalid category references (article.category must match its module and
 *     be a declared ArticleCategory)
 *   - the same article being exported more than once
 *   - duplicate/missing entries in the ARTICLE_ORDER list in index.ts
 *
 * Run: npm run validate:articles
 * Exits non-zero on any hard error.
 */
import { readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve, basename } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const ARTICLES_DIR = resolve(ROOT, "lib/content/articles");

const REQUIRED_FIELDS = [
  "id",
  "title",
  "slug",
  "category",
  "description",
  "content",
  "steps",
  "relatedSlugs",
  "updatedAt",
  "published",
];

const errors = [];
const warnings = [];

/** Extract top-level object literals from an array-bearing module's text. */
function extractObjects(text) {
  const objs = [];
  let depth = 0;
  let start = -1;
  let inStr = false;
  let strCh = "";
  let esc = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inStr) {
      if (esc) esc = false;
      else if (c === "\\") esc = true;
      else if (c === strCh) inStr = false;
      continue;
    }
    if (c === '"' || c === "'" || c === "`") {
      inStr = true;
      strCh = c;
      continue;
    }
    if (c === "{") {
      if (depth === 0) start = i;
      depth++;
    } else if (c === "}") {
      depth--;
      if (depth === 0) objs.push(text.slice(start, i + 1));
    }
  }
  return objs;
}

const field = (obj, name) =>
  obj.match(new RegExp(`\\n {4}${name}:`)) ? true : false;
const readValue = (obj, name) => {
  const m = obj.match(new RegExp(`\\n {4}${name}: "([^"]+)"`));
  return m ? m[1] : undefined;
};

// Read declared ArticleCategory union from the central type module.
const typeText = readFileSync(resolve(ROOT, "types/article.ts"), "utf8");
const catUnionMatch = typeText.match(
  /export type ArticleCategory =([\s\S]*?);/,
);
const declaredCategories = new Set(
  (catUnionMatch ? catUnionMatch[1] : "")
    .split("|")
    .map((s) => s.trim().replace(/^"|"$/g, ""))
    .filter(Boolean),
);

const files = readdirSync(ARTICLES_DIR)
  .filter((f) => f.endsWith(".ts") && f !== "index.ts" && f !== "types.ts")
  .sort();

const slugCounts = new Map();
const idCounts = new Map();
const categoryCounts = new Map();
let total = 0;

for (const file of files) {
  const fileCategory = basename(file, ".ts");
  if (!declaredCategories.has(fileCategory)) {
    errors.push(`${file}: filename is not a declared ArticleCategory`);
  }
  const text = readFileSync(resolve(ARTICLES_DIR, file), "utf8");
  const arrStart = text.indexOf("Article[] = [");
  const objs = extractObjects(arrStart === -1 ? text : text.slice(arrStart));
  for (const obj of objs) {
    total++;
    const slug = readValue(obj, "slug");
    const id = readValue(obj, "id");
    const category = readValue(obj, "category");

    for (const f of REQUIRED_FIELDS) {
      if (!field(obj, f)) {
        errors.push(`[${slug ?? "?"}] (${file}) missing required field "${f}"`);
      }
    }
    if (slug) slugCounts.set(slug, (slugCounts.get(slug) ?? 0) + 1);
    if (id) idCounts.set(id, (idCounts.get(id) ?? 0) + 1);
    if (category) {
      categoryCounts.set(category, (categoryCounts.get(category) ?? 0) + 1);
      if (!declaredCategories.has(category)) {
        errors.push(`[${slug}] invalid category "${category}"`);
      }
      if (category !== fileCategory) {
        errors.push(
          `[${slug}] category "${category}" does not match module ${file}`,
        );
      }
    }
  }
}

// Duplicate slugs (== duplicate /guides/<slug> paths) and ids.
for (const [slug, n] of slugCounts) {
  if (n > 1) errors.push(`duplicate slug/path exported ${n}x: "${slug}"`);
}
for (const [id, n] of idCounts) {
  if (n > 1) errors.push(`duplicate article id exported ${n}x: "${id}"`);
}

// index.ts checks: each category array spread exactly once; ARTICLE_ORDER sane.
const indexText = readFileSync(resolve(ARTICLES_DIR, "index.ts"), "utf8");
const groupsMatch = indexText.match(
  /categoryArticleGroups: Article\[\]\[\] = \[([\s\S]*?)\];/,
);
if (groupsMatch) {
  const names = [...groupsMatch[1].matchAll(/(\w+Articles)\b/g)].map((m) => m[1]);
  const seen = new Map();
  for (const n of names) seen.set(n, (seen.get(n) ?? 0) + 1);
  for (const [n, c] of seen) {
    if (c > 1) errors.push(`index.ts: ${n} spread ${c}x (exported more than once)`);
  }
  if (names.length !== files.length) {
    errors.push(
      `index.ts combines ${names.length} category arrays but ${files.length} modules exist`,
    );
  }
} else {
  errors.push("index.ts: categoryArticleGroups not found");
}

const orderMatch = indexText.match(/ARTICLE_ORDER: string\[\] = \[([\s\S]*?)\];/);
if (orderMatch) {
  const orderSlugs = [...orderMatch[1].matchAll(/"([^"]+)"/g)].map((m) => m[1]);
  const orderSeen = new Map();
  for (const s of orderSlugs) orderSeen.set(s, (orderSeen.get(s) ?? 0) + 1);
  for (const [s, c] of orderSeen) {
    if (c > 1) errors.push(`ARTICLE_ORDER: duplicate entry "${s}" (${c}x)`);
  }
  for (const s of orderSlugs) {
    if (!slugCounts.has(s)) {
      errors.push(`ARTICLE_ORDER references unknown slug "${s}"`);
    }
  }
  const missing = [...slugCounts.keys()].filter((s) => !orderSeen.has(s));
  if (missing.length) {
    warnings.push(
      `ARTICLE_ORDER omits ${missing.length} slug(s) (will append at end): ${missing.join(", ")}`,
    );
  }
} else {
  errors.push("index.ts: ARTICLE_ORDER not found");
}

// Report.
const uniqueSlugs = slugCounts.size;
const duplicateSlugs = [...slugCounts.values()].filter((n) => n > 1).length;
console.log("Article data validation");
console.log(`  modules:         ${files.length}`);
console.log(`  total articles:  ${total}`);
console.log(`  unique slugs:    ${uniqueSlugs}`);
console.log(`  duplicate slugs: ${duplicateSlugs}`);
console.log("  category counts:");
for (const [cat, n] of [...categoryCounts.entries()].sort((a, b) => b[1] - a[1])) {
  console.log(`    ${cat}: ${n}`);
}

for (const w of warnings) console.warn(`WARN: ${w}`);
if (errors.length) {
  console.error(`\n${errors.length} error(s):`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log("\nOK: no article data errors.");
