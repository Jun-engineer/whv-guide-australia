/**
 * Central site configuration.
 *
 * The canonical site URL is read from the `NEXT_PUBLIC_SITE_URL` environment
 * variable so that production, preview, and local builds all resolve correctly.
 * Falls back to the Vercel deployment URL when the variable is not set.
 */

const FALLBACK_URL = "https://whv-guide-australia.com";

function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) {
    return explicit.replace(/\/$/, "");
  }

  const vercelUrl = process.env.NEXT_PUBLIC_VERCEL_URL;
  if (vercelUrl) {
    return `https://${vercelUrl.replace(/\/$/, "")}`;
  }

  return FALLBACK_URL;
}

export const siteConfig = {
  /** 公式サイト名（正式名称）。 */
  name: "オーストラリアワーホリコンパス",
  /** ヘッダーなどスペースが限られる箇所で使う短縮名。 */
  shortName: "ワーホリコンパス",
  /** 旧英語名。alternateName / 運営者情報でのみ使用（レガシー表記）。 */
  legacyName: "WH Guide Australia",
  /** サイトのタグライン。 */
  tagline: "ビザ・仕事・生活を、渡航前から帰国まで。",
  /** 構造化データ等で使う別名（表記ゆれ・旧名を含む）。 */
  alternateNames: [
    "ワーホリコンパス",
    "WH Guide Australia",
    "オーストラリアワーホリガイド",
  ],
  /** トップページ推奨タイトル。 */
  homeTitle: "オーストラリアワーホリ完全ガイド｜オーストラリアワーホリコンパス",
  url: resolveSiteUrl(),
  locale: "ja_JP",
  description:
    "オーストラリアのワーキングホリデーに必要な情報をまとめた日本語ガイド。ビザ、渡航準備、仕事、ファーム、税金、家探し、車、医療、帰国手続きまで分かりやすく解説します。",
  keywords: [
    "オーストラリア ワーホリ",
    "ワーキングホリデー",
    "ワーホリ ビザ",
    "セカンドビザ",
    "ファームジョブ",
    "TFN",
    "ABN",
    "タックスリターン",
    "スーパーアニュエーション",
    "Uber Eats オーストラリア",
    "シェアハウス オーストラリア",
    "ワーホリ 仕事探し",
    "オーストラリア 生活",
  ],
  ogImage: "/opengraph-image",
  twitter: "@whv_guide_au",
  adsenseClient: "ca-pub-5434162081070782",
  /**
   * Google Analytics 4 Measurement ID.
   *
   * This is a public identifier (not a secret) and is safe to ship in the
   * client bundle. To change it, set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in the
   * environment; the hard-coded value below is the maintained default.
   * To disable Analytics entirely, set `NEXT_PUBLIC_GA_MEASUREMENT_ID` to an
   * empty string. Analytics only loads in production builds (see
   * `components/analytics/GoogleAnalytics.tsx`).
   */
  gaMeasurementId:
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-0SQ2F5Q39G",
} as const;

export function absoluteUrl(path = ""): string {
  if (!path) {
    return siteConfig.url;
  }
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}
