/**
 * Single source of truth for every generated social-sharing image.
 *
 * Consumed by:
 *  - scripts/generate-social-images.mjs (renders the PNGs into /public/social)
 *
 * Design goals: one reusable template, consistent branding with the live site
 * (sky→navy gradient, Noto Sans JP), large legible Japanese text, safe margins.
 */

export const theme = {
  siteName: "オーストラリアワーホリコンパス",
  domain: "whv-guide-australia.com",
  gradient: "linear-gradient(135deg, #0ea5e9 0%, #0369a1 55%, #0f172a 100%)",
  colorText: "#ffffff",
  colorSubtle: "#bae6fd",
  colorEyebrow: "#7dd3fc",
  fontRegular: "Noto Sans JP",
  fontBold: "Noto Sans JP",
};

/** Landscape Open Graph / Twitter card, 1200×630. */
const OG = { width: 1200, height: 630, layout: "landscape" };

/**
 * Homepage + category landscape previews.
 * `out` is relative to /public.
 */
export const ogSpecs = [
  {
    id: "home",
    out: "social/australia-working-holiday-compass-social-preview.png",
    ...OG,
    eyebrow: "WORKING HOLIDAY · AUSTRALIA",
    title: "オーストラリアワーホリコンパス",
    subtitle: "ビザ・仕事・生活を、渡航前から帰国まで。",
    footer: "オーストラリアのワーホリ情報を日本語で",
  },
  // Major category pages. keys map to lib/socialImages.ts categoryImages.
  { id: "farm", out: "social/category/farm.png", ...OG, eyebrow: theme.siteName, title: "ファーム・88日・セカンドビザ", subtitle: "地域・職種の選び方と日数の証拠管理", footer: theme.domain },
  { id: "jobs", out: "social/category/jobs.png", ...OG, eyebrow: theme.siteName, title: "オーストラリアの仕事探し", subtitle: "レジュメ・面接・求人サイトの使い方", footer: theme.domain },
  { id: "housing", out: "social/category/housing.png", ...OG, eyebrow: theme.siteName, title: "シェアハウス・家探し", subtitle: "内見・ボンド・契約の基本", footer: theme.domain },
  { id: "tools", out: "social/category/tools.png", ...OG, eyebrow: theme.siteName, title: "無料チェックリスト・便利ツール", subtitle: "渡航準備から生活まで使えるテンプレート", footer: theme.domain },
  { id: "health", out: "social/category/health.png", ...OG, eyebrow: theme.siteName, title: "医療・保険・安全", subtitle: "受診・保険・緊急時の備え", footer: theme.domain },
  { id: "english", out: "social/category/english.png", ...OG, eyebrow: theme.siteName, title: "ワーホリ英語", subtitle: "渡航前準備と語学学校の選び方", footer: theme.domain },
  { id: "area", out: "social/category/area.png", ...OG, eyebrow: theme.siteName, title: "都市・地域ガイド", subtitle: "主要都市の仕事・家賃・暮らし", footer: theme.domain },
  { id: "travel", out: "social/category/travel.png", ...OG, eyebrow: theme.siteName, title: "オーストラリア国内旅行", subtitle: "ロードトリップと週末の過ごし方", footer: theme.domain },
  { id: "cars", out: "social/category/cars.png", ...OG, eyebrow: theme.siteName, title: "中古車・Rego・車の購入", subtitle: "購入・名義変更・維持のポイント", footer: theme.domain },
  { id: "license", out: "social/category/license.png", ...OG, eyebrow: theme.siteName, title: "オーストラリアの運転免許", subtitle: "国際免許と現地免許への切り替え", footer: theme.domain },
];

/**
 * Instagram promotional assets (NOT used in Open Graph metadata).
 * Portrait 1080×1350, Square 1080×1080, Story 1080×1920.
 */
const instagramContent = {
  eyebrow: "WORKING HOLIDAY · AUSTRALIA",
  title: "オーストラリアワーホリコンパス",
  subtitle: "ビザ・仕事・生活を、渡航前から帰国まで。",
  chip: "無料チェックリスト・便利ツール",
  footer: "whv-guide-australia.com",
};

export const instagramSpecs = [
  { id: "ig-portrait", out: "social/instagram/general-portrait.png", width: 1080, height: 1350, layout: "portrait", ...instagramContent },
  { id: "ig-square", out: "social/instagram/general-square.png", width: 1080, height: 1080, layout: "portrait", ...instagramContent },
  { id: "ig-story", out: "social/instagram/general-story.png", width: 1080, height: 1920, layout: "story", ...instagramContent },
];

export const allSpecs = [...ogSpecs, ...instagramSpecs];

/** Every character that must exist in the subset font. */
export function collectGlyphText() {
  const parts = [];
  for (const s of allSpecs) {
    parts.push(s.eyebrow ?? "", s.title ?? "", s.subtitle ?? "", s.chip ?? "", s.footer ?? "");
  }
  // Heading variants documented for the reusable Instagram generator.
  parts.push("ファーム・88日", "仕事探し", "家探し", "無料ツール", "車・免許", "渡航準備");
  return Array.from(new Set(parts.join("").split(""))).join("");
}
