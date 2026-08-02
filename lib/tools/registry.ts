import type { ToolMeta } from "@/lib/tools/types";

/**
 * 公開ツールのレジストリ。Tools ハブ（/tools）、各ツールページのヘッダー、記事側の
 * 「関連ツール」表示が共通で参照する単一の情報源です。ここに載っているツールは
 * すべて実装済み・公開済み（プレースホルダーではない）ものだけです。
 */
export const tools: ToolMeta[] = [
  {
    slug: "tool-arrival-checklist",
    path: "/tools/arrival-checklist",
    title: "到着後チェックリスト（保存・完了管理）",
    navLabel: "到着後チェックリスト",
    description:
      "オーストラリア到着後にやることを時系列で管理できるチェックリスト。完了状態は端末に保存され、進捗が一目でわかります。",
    category: "checklist",
    categoryLabel: "チェックリスト",
    icon: "🛬",
    status: "published",
    verifiedAt: "2026-08-02",
    relatedArticleSlugs: ["arrival-checklist", "first-30-days-roadmap", "essential-australia-apps"],
  },
  {
    slug: "tool-packing-checklist",
    path: "/tools/packing-checklist",
    title: "持ち物チェックリスト（都市・季節・仕事別）",
    navLabel: "持ち物チェックリスト",
    description:
      "行き先の気候・渡航シーズン・予定している仕事で項目を絞り込める持ち物リスト。完了状態は端末に保存できます。",
    category: "checklist",
    categoryLabel: "チェックリスト",
    icon: "🎒",
    status: "published",
    verifiedAt: "2026-08-02",
    relatedArticleSlugs: ["packing-list", "preparation-checklist", "farm-work-packing"],
  },
  {
    slug: "tool-88-day-calculator",
    path: "/tools/88-day-calculator",
    title: "セカンドビザ88日カレンダー・勤務記録ツール",
    navLabel: "88日カウンター",
    description:
      "セカンドビザの指定業務（Specified work）の勤務日を記録し、88日に対する進捗と証拠書類の有無を管理できるツール。ビザの可否は判定しません。",
    category: "calculator",
    categoryLabel: "計算・記録",
    icon: "📅",
    status: "published",
    verifiedAt: "2026-08-02",
    officialSources: [
      {
        label: "Department of Home Affairs｜Second Working Holiday visa (subclass 417)",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/second-work-holiday-417",
        accessedAt: "2026-08-02",
      },
      {
        label: "Department of Home Affairs｜Specified work (417)",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work",
        accessedAt: "2026-08-02",
      },
    ],
    relatedArticleSlugs: [
      "88-day-calculation",
      "six-month-specified-work",
      "second-visa-guide",
      "specified-work-industries",
      "farm-second-visa",
      "farm-payslip-evidence",
    ],
  },
];

/** 公開済みツールを返す（宣言順）。 */
export function getPublishedTools(): ToolMeta[] {
  return tools.filter((tool) => tool.status === "published");
}

/** slug から公開ツールを取得する。 */
export function getToolBySlug(slug: string): ToolMeta | undefined {
  return getPublishedTools().find((tool) => tool.slug === slug);
}

/** 指定した記事 slug を案内対象に含む公開ツールを返す。 */
export function getToolsForArticle(articleSlug: string): ToolMeta[] {
  return getPublishedTools().filter((tool) =>
    tool.relatedArticleSlugs.includes(articleSlug),
  );
}
