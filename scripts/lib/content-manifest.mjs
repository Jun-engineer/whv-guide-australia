/**
 * Shared helpers for the content-registry build scripts.
 *
 * These run under Node (build / CI time) only — never bundled into the app.
 * The app consumes the *generated* output (lib/content/manifest.generated.ts),
 * so no YAML parsing happens at runtime.
 */
import { readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";
import { parse } from "yaml";

export const HUB_IDS = [
  "start-here",
  "visa",
  "preparation",
  "arrival",
  "money",
  "tax",
  "jobs",
  "qualifications",
  "farm",
  "gig-work",
  "housing",
  "transport",
  "health",
  "daily-life",
  "english",
  "area",
  "travel",
  "community",
  "return-home",
  "news",
  "tools",
];

export const STATUS_VALUES = [
  "planned",
  "draft",
  "review",
  "published",
  "merged",
  "archived",
  "existing",
];

export const PRIORITY_VALUES = ["P0", "P1", "P2", "P3", "keep"];

export const TYPE_VALUES = [
  "article",
  "interactive-tool",
  "download",
  "news-template",
];

/** Parse the manifest YAML into a normalized object. */
export function loadManifest(manifestPath) {
  const raw = readFileSync(manifestPath, "utf8");
  const doc = parse(raw);

  const hubs = (doc.hubs ?? []).map((h) => ({
    id: h.id,
    label: h.label,
    route: h.route,
    navGroup: h.nav_group,
  }));

  const normalizeItem = (item) => ({
    slug: item.slug,
    title: item.title,
    hub: item.hub,
    status: item.status,
    type: item.type,
    priority: item.priority,
    path: item.path,
    intent: item.intent,
    brief: item.brief,
    update: item.update,
    mergedInto: item.merged_into,
  });

  return {
    meta: {
      manifestVersion: doc.manifest_version,
      generatedAt: doc.generated_at,
      siteName: doc.site?.name,
      baseUrl: doc.site?.base_url,
      contentLanguage: doc.site?.content_language,
      defaultArticleRoute: doc.site?.default_article_route,
    },
    hubs,
    existing: (doc.existing_articles ?? []).map(normalizeItem),
    planned: (doc.planned_content ?? []).map(normalizeItem),
  };
}

/**
 * Read and concatenate the article category modules under
 * lib/content/articles/ (excluding index.ts and types.ts). These files contain
 * only article objects, so their combined text is safe to scan for slugs and
 * relatedSlugs without picking up forum/report data.
 */
export function readArticleModulesText(articlesDir) {
  const files = readdirSync(articlesDir)
    .filter((f) => f.endsWith(".ts") && f !== "index.ts" && f !== "types.ts")
    .sort();
  return files
    .map((f) => readFileSync(resolve(articlesDir, f), "utf8"))
    .join("\n");
}

/**
 * Extract article slugs from the article category modules' combined text.
 * Used to reconcile the manifest against the real code.
 */
export function extractArticleSlugs(articleModulesText) {
  const slugs = [];
  const re = /\bslug:\s*"([^"]+)"/g;
  let m;
  while ((m = re.exec(articleModulesText)) !== null) {
    slugs.push(m[1]);
  }
  return slugs;
}

/**
 * Validate the manifest for integrity and cannibalization risks.
 * @returns {{ errors: string[], warnings: string[] }}
 */
export function validateContent({ hubs, existing, planned, codeSlugs = [], redirects = [] }) {
  const errors = [];
  const warnings = [];
  const all = [...existing, ...planned];
  const hubIdSet = new Set(hubs.map((h) => h.id));

  // Enum + shape checks.
  for (const item of all) {
    if (!item.slug) errors.push(`Entry missing slug: ${JSON.stringify(item)}`);
    if (!item.title) errors.push(`[${item.slug}] missing title`);
    if (!hubIdSet.has(item.hub)) {
      errors.push(`[${item.slug}] references unknown hub "${item.hub}"`);
    }
    if (!STATUS_VALUES.includes(item.status)) {
      errors.push(`[${item.slug}] invalid status "${item.status}"`);
    }
    if (!PRIORITY_VALUES.includes(item.priority)) {
      errors.push(`[${item.slug}] invalid priority "${item.priority}"`);
    }
    if (!TYPE_VALUES.includes(item.type)) {
      errors.push(`[${item.slug}] invalid type "${item.type}"`);
    }
    const expectedPath = `/guides/${item.slug}`;
    if (item.type === "article" && item.path && item.path !== expectedPath) {
      warnings.push(
        `[${item.slug}] path "${item.path}" != expected "${expectedPath}"`,
      );
    }
  }

  // Duplicate slug detection (hard error).
  const slugCount = new Map();
  for (const item of all) {
    slugCount.set(item.slug, (slugCount.get(item.slug) ?? 0) + 1);
  }
  for (const [slug, count] of slugCount) {
    if (count > 1) errors.push(`Duplicate slug in manifest: "${slug}" (${count}×)`);
  }

  // Duplicate title detection (hard error — indicates copy/paste mistakes).
  const titleCount = new Map();
  for (const item of all) {
    const key = (item.title ?? "").trim();
    if (!key) continue;
    titleCount.set(key, (titleCount.get(key) ?? 0) + 1);
  }
  for (const [title, count] of titleCount) {
    if (count > 1) errors.push(`Duplicate title in manifest: "${title}" (${count}×)`);
  }

  // Search-intent cannibalization within a hub (warning only — Phase B triage).
  const intentByHub = new Map();
  for (const item of planned) {
    if (!item.intent) continue;
    const key = `${item.hub}::${item.intent}`;
    if (!intentByHub.has(key)) intentByHub.set(key, []);
    intentByHub.get(key).push(item.slug);
  }
  for (const [key, slugs] of intentByHub) {
    if (slugs.length > 1) {
      warnings.push(
        `Possible cannibalization (${key}): ${slugs.join(", ")}`,
      );
    }
  }

  // Reconcile manifest "existing" entries against real code slugs.
  if (codeSlugs.length > 0) {
    const codeSet = new Set(codeSlugs);
    const existingSet = new Set(existing.map((e) => e.slug));
    // A code slug is considered "registered" if it appears in existing_articles
    // or as a planned entry that has already been published.
    const publishedPlanned = new Set(
      planned.filter((p) => p.status === "published").map((p) => p.slug),
    );
    for (const item of existing) {
      if (!codeSet.has(item.slug)) {
        warnings.push(
          `Manifest lists "${item.slug}" as existing, but no article body found in code.`,
        );
      }
    }
    for (const slug of codeSlugs) {
      if (!existingSet.has(slug) && !publishedPlanned.has(slug)) {
        warnings.push(
          `Article "${slug}" exists in code but is missing from manifest existing_articles.`,
        );
      }
    }
    // A planned slug must never collide with a live article slug. Entries that
    // have been reconciled (published/existing/merged) are expected to match.
    const reconciledStatuses = new Set(["published", "existing", "merged"]);
    for (const item of planned) {
      if (codeSet.has(item.slug) && !reconciledStatuses.has(item.status)) {
        errors.push(
          `Planned slug "${item.slug}" collides with a live published article.`,
        );
      }
    }

    // Merged entries must point to a live published article (redirect target).
    for (const item of all) {
      if (item.status !== "merged") continue;
      if (!item.mergedInto) {
        errors.push(`[${item.slug}] status "merged" but no merged_into target.`);
        continue;
      }
      if (!codeSet.has(item.mergedInto)) {
        errors.push(
          `[${item.slug}] merged_into "${item.mergedInto}" is not a live published article.`,
        );
      }
      const mergedTarget = all.find((x) => x.slug === item.mergedInto);
      if (mergedTarget && mergedTarget.status === "merged") {
        errors.push(
          `[${item.slug}] merged_into "${item.mergedInto}" is itself merged (chain not allowed).`,
        );
      }
    }

    // Validate the app-level redirect table (lib/content/redirects.ts).
    if (redirects.length > 0) {
      const fromSet = new Set(redirects.map((r) => r.from));
      for (const r of redirects) {
        if (!codeSet.has(r.to)) {
          errors.push(
            `Redirect "${r.from}" → "${r.to}": target is not a live published article.`,
          );
        }
        if (codeSet.has(r.from)) {
          errors.push(
            `Redirect "${r.from}" → "${r.to}": source shadows a live published article.`,
          );
        }
        if (fromSet.has(r.to)) {
          errors.push(
            `Redirect chain detected: "${r.from}" → "${r.to}" (target is also a redirect source).`,
          );
        }
      }
    }
  }

  return { errors, warnings };
}
