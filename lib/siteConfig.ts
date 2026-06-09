/**
 * Central site configuration.
 *
 * The canonical site URL is read from the `NEXT_PUBLIC_SITE_URL` environment
 * variable so that production, preview, and local builds all resolve correctly.
 * Falls back to the Vercel deployment URL when the variable is not set.
 */

const FALLBACK_URL = "https://wh-guide-australia.vercel.app";

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
  name: "WH Guide Australia",
  shortName: "WH Guide",
  url: resolveSiteUrl(),
  locale: "ja_JP",
  description:
    "オーストラリアワーホリ向けに、ビザ、渡航準備、現地生活、仕事探し、税金、ファーム、ギグワーク、掲示板までまとめた日本語ガイドサイト。",
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
  twitter: "@wh_guide_au",
} as const;

export function absoluteUrl(path = ""): string {
  if (!path) {
    return siteConfig.url;
  }
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}
