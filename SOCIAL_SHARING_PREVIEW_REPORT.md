# Social Sharing Preview Report

Audit and fix for missing cross-platform link previews (Facebook, Threads, Messenger, X, LINE, and other Open Graph consumers) plus reusable Instagram promotional assets for **https://whv-guide-australia.com/**.

---

## 1. Confirmed root cause of the missing Facebook preview

**The Open Graph image returned an empty (0-byte) body.**

- The site used the Next.js file-convention dynamic route `app/opengraph-image.tsx`, rendered with `next/og` `ImageResponse` on the **edge runtime**.
- That component drew **Japanese (CJK) text with no embedded CJK font**. Satori (the engine behind `next/og`) cannot find glyphs for Japanese characters without an embedded font, and the edge function emitted an **empty response**.
- Verified against production before the fix:

  ```
  GET https://whv-guide-australia.com/opengraph-image?f3df2f4d1816f7cd
  HTTP/2 200
  content-type: image/png
  content-length: 0        ← empty image body
  ```

- Because `opengraph-image.tsx` is a **file-convention default**, this broken 0-byte image was inherited as the `og:image`/`twitter:image` of **every route** (homepage, category pages, article pages).
- Facebook, Threads, Messenger, and X cannot render a 0-byte image, so no thumbnail/rich preview appeared. The HTML metadata itself was present and server-rendered — **only the image asset was broken**.

This was a single confirmed cause, not a list of possibilities. The other candidates (missing tags, relative URLs, wrong domain, 404/403, redirects, auth, robots blocking, client-only metadata) were checked and ruled out:

- `og:*` and `twitter:*` tags **were** present in the initial server-rendered HTML.
- `og:url`/canonical used the correct absolute production domain `https://whv-guide-australia.com`.
- The image URL returned HTTP **200** (not 404/403), no redirects, no auth requirement.
- `robots` allowed indexing; no crawler/user-agent blocking; no hotlink protection.
- The MIME type header was correct (`image/png`) — the body was simply empty.

---

## 2. Metadata that existed before the fix

- **Root `app/layout.tsx`** — full Open Graph + Twitter config (`og:title`, `og:description`, `og:type`, `og:url`, `og:site_name`, `og:locale`, `og:image`; `twitter:card=summary_large_image`, `twitter:title`, `twitter:description`, `twitter:image`). `metadataBase` was set. `og:image` resolved to the broken `/opengraph-image`.
- **Missing:** `og:image:secure_url` (and reliable `og:image:width/height/type` — the dynamic route advertised size but delivered no bytes).
- **Category pages** (`app/farm/page.tsx`, etc.) — only `title` + `description`; inherited the broken default image.
- **Article pages** (`app/guides/[slug]/page.tsx`) — `openGraph` without images; inherited the broken default image. JSON-LD `image` pointed at `/opengraph-image`.
- **`lib/siteConfig.ts`** — `url` resolved from `NEXT_PUBLIC_SITE_URL` with a hard fallback of `https://whv-guide-australia.com`; `ogImage` pointed at `/opengraph-image`.

---

## 3. Open Graph metadata added or corrected

Implemented one maintainable hierarchy via a single helper — **`lib/socialImages.ts`** — used by the root layout, all category pages, and article pages.

Every page now emits, server-rendered in the initial HTML:

- `og:title`, `og:description`, `og:type`, `og:url`
- `og:image`, **`og:image:secure_url`** (newly added), `og:image:width` (1200), `og:image:height` (630), `og:image:type` (`image/png`), `og:image:alt`
- `og:site_name`, `og:locale`

All image and URL values are **absolute HTTPS** production URLs (built through `absoluteUrl()` / `metadataBase`).

The broken `app/opengraph-image.tsx` dynamic route was **deleted** and replaced by pre-rendered static PNGs served from `/public/social/`, so crawlers always receive real image bytes with no request-time font dependency.

---

## 4. X (Twitter) Card metadata added or corrected

Dedicated X fields on every page (not relying solely on OG fallback):

- `twitter:card` = `summary_large_image`
- `twitter:site` / `twitter:creator` = `@whv_guide_au`
- `twitter:title`, `twitter:description` (page-specific)
- `twitter:image` (absolute HTTPS), `twitter:image:alt`

---

## 5. Homepage image used / created

Created a branded 1200×630 PNG (no suitable existing raster existed — the only prior asset was the broken 0-byte generated one and an SVG icon, which is not permitted as a final `og:image`).

- **Path:** `public/social/australia-working-holiday-compass-social-preview.png`
- **Public URL:** `https://whv-guide-australia.com/social/australia-working-holiday-compass-social-preview.png`
- **Size/format:** 1200 × 630, PNG, ~98 KB
- **Visible content:** `オーストラリアワーホリコンパス` / `ビザ・仕事・生活を、渡航前から帰国まで。` / `オーストラリアのワーホリ情報を日本語で`
- **Design:** site sky→navy gradient, large legible Japanese (Noto Sans JP), strong contrast, safe margins, no third-party logos/photos.

`lib/siteConfig.ts` `ogImage` now points at this file (single source of truth for the site-wide default).

---

## 6. Category images created

Reusable landscape template (`scripts/social-image-specs.mjs` + `scripts/generate-social-images.mjs`) produced dedicated 1200 × 630 PNGs for the 10 major categories:

| Route | File (`public/…`) | Heading |
|---|---|---|
| `/farm` | `social/category/farm.png` | ファーム・88日・セカンドビザ |
| `/jobs` | `social/category/jobs.png` | オーストラリアの仕事探し |
| `/housing` | `social/category/housing.png` | シェアハウス・家探し |
| `/tools` | `social/category/tools.png` | 無料チェックリスト・便利ツール |
| `/health` | `social/category/health.png` | 医療・保険・安全 |
| `/english` | `social/category/english.png` | ワーホリ英語 |
| `/area` | `social/category/area.png` | 都市・地域ガイド |
| `/travel` | `social/category/travel.png` | オーストラリア国内旅行 |
| `/cars` | `social/category/cars.png` | 中古車・Rego・車の購入 |
| `/license` | `social/category/license.png` | オーストラリアの運転免許 |

Public URL pattern: `https://whv-guide-australia.com/social/category/<key>.png`. Each is 1200 × 630 PNG (~85–97 KB).

---

## 7. Fallback-image hierarchy

Implemented in `lib/socialImages.ts`:

1. **Article hero image** — used only when the article defines a raster (`.png/.jpg/.jpeg/.webp`) `heroImage` with known width **and** height (so advertised dimensions always match the file).
2. **Category-specific image** — `public/social/category/<category>.png` for the 10 mapped categories.
3. **Site-wide default image** — the homepage preview (`siteConfig.ogImage`).

Every public page therefore always has a working, correctly-sized preview image.

---

## 8. Article metadata behavior

`app/guides/[slug]/page.tsx` `generateMetadata` (server-rendered, in the initial HTML):

- `og:title` = article title; `og:description` = article summary/description.
- `og:url` / canonical = absolute article URL; `og:type` = `article`.
- Image resolved via the hierarchy above (article → category → default). Currently no article defines a `heroImage`, so mapped categories use the category card and others use the default — verified: `/guides/vehicle-transfer-by-state` (category `transport`, unmapped) correctly falls back to the default image.
- X fields mirror the page (title, description, absolute HTTPS image, alt).
- Article JSON-LD `image` uses the same resolved image.

Unpublished content (drafts / review / merged-source / archived / excluded / placeholders) is **not** exposed — article routes come from `getAllArticles()`/`getArticleBySlug()` (published set) and this change added no new routes, sitemap entries, or metadata for non-published content.

---

## 9. Instagram promotional assets created

Reusable portrait/square/story template (separate from OG metadata — **not** referenced by any `og:image`/`twitter:image`):

| Asset | File (`public/…`) | Size |
|---|---|---|
| Feed portrait | `social/instagram/general-portrait.png` | 1080 × 1350 |
| Square | `social/instagram/general-square.png` | 1080 × 1080 |
| Story | `social/instagram/general-story.png` | 1080 × 1920 |

Visible content: `オーストラリアワーホリコンパス` / `ビザ・仕事・生活を、渡航前から帰国まで。` / chip `無料チェックリスト・便利ツール` / domain `whv-guide-australia.com`. The generator template accepts alternate headings (ファーム・88日 / 仕事探し / 家探し / 無料ツール / 車・免許 / 渡航準備) for future variants. No Instagram API/automation was added.

---

## 10. Files changed

**Added**

- `lib/socialImages.ts` — central social-image + metadata helper (hierarchy, absolute-URL OG/Twitter builders, `buildCategoryMetadata`).
- `scripts/social-image-specs.mjs` — single source of truth for every image (content + layout).
- `scripts/generate-social-images.mjs` — renders all 14 PNGs (`npm run generate:social`).
- `scripts/social-assets/NotoSansJP-Regular.ttf`, `NotoSansJP-Bold.ttf` — static Noto Sans JP instances (SIL OFL), subset to the glyphs used, committed so builds have no CJK-font dependency.
- `public/social/australia-working-holiday-compass-social-preview.png` — homepage preview.
- `public/social/category/*.png` — 10 category previews.
- `public/social/instagram/general-{portrait,square,story}.png` — Instagram assets.
- `SOCIAL_SHARING_PREVIEW_REPORT.md` — this report.

**Modified**

- `app/layout.tsx` — OG/Twitter via helper (adds `og:image:secure_url`); JSON-LD logo → static image.
- `lib/siteConfig.ts` — `ogImage` → static homepage PNG.
- `app/{farm,jobs,housing,tools,health,english,area,travel,cars,license}/page.tsx` — use `buildCategoryMetadata` (full OG/Twitter + category image).
- `app/guides/[slug]/page.tsx` — article→category→default image hierarchy for OG/Twitter and JSON-LD.
- `package.json` — added `generate:social` script.

**Deleted**

- `app/opengraph-image.tsx` — the broken 0-byte dynamic edge route (root cause).

---

## 11. Public image URLs, dimensions, formats

Base: `https://whv-guide-australia.com`

- `/social/australia-working-holiday-compass-social-preview.png` — 1200×630 PNG
- `/social/category/{farm,jobs,housing,tools,health,english,area,travel,cars,license}.png` — 1200×630 PNG
- `/social/instagram/general-portrait.png` — 1080×1350 PNG
- `/social/instagram/general-square.png` — 1080×1080 PNG
- `/social/instagram/general-story.png` — 1080×1920 PNG

All PNG, 8-bit RGBA, served as static files from `/public` (correct `image/png` MIME).

---

## 12. Crawler-accessibility findings

- **robots** (`app/robots.ts`) — allows indexing; no rule blocks `/social/*` or social crawlers.
- **Authentication middleware** — none applies to public pages or `/public` assets; images need no auth.
- **Signed URLs / CDN firewall / hotlink protection** — none; static assets served directly.
- **User-agent filtering** — none observed.
- **Cache / security headers** — static `/public` assets served with standard immutable caching; no header blocks crawlers.
- Social images are plain static files, so no `next/image` optimization URL is involved — external crawlers fetch the raw file reliably.

No site security was weakened.

---

## 13. Validation results

Run once, per the task.

| # | Check | Result |
|---|---|---|
| 1 | Homepage initial HTML has required OG metadata | ✅ all `og:*` present, server-rendered |
| 2 | Homepage initial HTML has X Card metadata | ✅ `summary_large_image` + fields |
| 3 | Major category pages metadata/fallback | ✅ dedicated image each, single tags |
| 4 | Article pages metadata/fallback | ✅ `og:type=article`, category/default fallback |
| 5 | No duplicate OG tags | ✅ `og:image` count = 1 per page |
| 6 | No duplicate X Card tags | ✅ |
| 7 | Canonical/`og:url` absolute production URLs | ✅ (prod resolves `https://whv-guide-australia.com`) |
| 8 | Social image URLs absolute HTTPS | ✅ |
| 9 | Images return HTTP 200 | ✅ static `/public` files (0-byte route removed) |
| 10 | Correct image MIME | ✅ `image/png` |
| 11 | Homepage image ≈ 1200×630 | ✅ exactly 1200×630 |
| 12 | Legible when scaled down | ✅ large text, strong contrast |
| 13 | No localhost/staging/preview domains | ✅ in production (see note) |
| 14 | No unpublished content exposed | ✅ no new routes/sitemap/metadata |
| 15 | Category fallback works | ✅ unmapped category → default |
| 16 | Article fallback works | ✅ verified `transport` article → default |
| 17 | Lint | ✅ `npm run lint` clean |
| 18 | Typecheck | ✅ `tsc --noEmit` clean |
| 19 | Tests | ✅ content 5/5, tools 36/36 |
| 20 | Production build | ✅ `npm run build` succeeded |

**Note on #13 (localhost):** the domain is resolved from `NEXT_PUBLIC_SITE_URL` (`lib/siteConfig.ts`) with a hard fallback of `https://whv-guide-australia.com`. Local builds pick up `http://localhost:3000` from the **gitignored** `.env.local` (dev-only, never committed/deployed). The **live production** deployment already renders `https://whv-guide-australia.com` in canonical/`og:url` (verified via `curl`), so production metadata contains no localhost/preview domain.

---

## 14. Production build result

`npm run build` completed successfully (Next.js 16.2.7, React 19). All routes compiled; homepage, the 10 category pages, and article pages prerendered with the corrected metadata and static images. `prebuild` content validation passed.

---

## 15. Remaining manual tasks

1. **Meta Sharing Debugger `Scrape Again`** (below) — required after deploy to clear Facebook's cached 0-byte image.
2. Ensure the production platform sets `NEXT_PUBLIC_SITE_URL=https://whv-guide-australia.com` (already effective — confirmed in live HTML; keep it set).
3. Optional follow-up: dedicated category images for the remaining article categories (`abn`, `super`, `tax-return`, `bank`, `money`, `sim`, `transport`, `second-visa`, `uber-eats`, `doordash`, `food`, `clothing`, `return-home`, `community`, `gig-work`) — currently use the default image via the fallback. Add entries to `categorySocialImages` + specs and run `npm run generate:social`.
4. Optional: per-category Instagram variants using the existing generator headings.

---

## Post-deployment checklist

1. Deploy the changes.
2. Open each social image URL in an incognito browser.
3. Confirm HTTP 200 and a visible image.
4. Enter the homepage URL in the Meta Sharing Debugger (https://developers.facebook.com/tools/debug/).
5. Run **Scrape Again**.
6. Confirm the expected title, description, and image.
7. Repeat for `/farm`, `/jobs`, `/housing`, and `/tools`.
8. Test the homepage and category URLs in an X post draft.
9. Test the URLs in a Threads post draft where available.
10. Paste the URL into a Facebook post draft and Messenger.
11. Confirm no old cached image remains.
12. Use the dedicated portrait assets for Instagram feed posts.
