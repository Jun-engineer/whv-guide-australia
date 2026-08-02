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
  {
    slug: "tool-specified-work-region-checker",
    path: "/tools/specified-work-region-checker",
    title: "Specified Work対象地域・郵便番号チェッカー",
    navLabel: "対象地域チェッカー",
    description:
      "郵便番号を入力して、公表されている『地域（regional Australia）』の郵便番号範囲に含まれるかを確認できるツール。ビザの可否や指定業務の該当性は判定しません。",
    category: "lookup",
    categoryLabel: "地域・郵便番号",
    icon: "📍",
    status: "published",
    verifiedAt: "2026-08-02",
    officialSources: [
      {
        label: "Department of Home Affairs｜Specified work (417)",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work",
        accessedAt: "2026-08-02",
      },
      {
        label: "Department of Home Affairs｜Second Working Holiday visa (subclass 417)",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/second-work-holiday-417",
        accessedAt: "2026-08-02",
      },
    ],
    relatedArticleSlugs: [
      "specified-work-postcodes",
      "specified-work-industries",
      "88-day-calculation",
      "second-visa-guide",
      "farm-second-visa",
      "six-month-specified-work",
    ],
  },
  {
    slug: "tool-farm-season-calendar",
    path: "/tools/farm-season-calendar",
    title: "州・地域・作物別ファームシーズン検索",
    navLabel: "ファームシーズン検索",
    description:
      "州・作物・月からファームの繁忙期（収穫・作業が多い時期）の目安を検索できるツール。移動やジョブ探しの計画づくりに役立ちます。",
    category: "lookup",
    categoryLabel: "検索・カレンダー",
    icon: "🚜",
    status: "published",
    verifiedAt: "2026-08-02",
    officialSources: [
      {
        label: "Australian Government｜Harvest Trail Information Service",
        url: "https://www.harvesttrail.gov.au/",
        accessedAt: "2026-08-02",
      },
    ],
    relatedArticleSlugs: [
      "farm-season-calendar",
      "harvest-trail-guide",
      "specified-work-industries",
      "crop-strawberry",
      "crop-grape",
      "farm-job-english",
    ],
  },
  {
    slug: "tool-weekly-budget-calculator",
    path: "/tools/weekly-budget-calculator",
    title: "週間生活費・必要貯金シミュレーター",
    navLabel: "生活費シミュレーター",
    description:
      "家賃・交通・食費などの週の支出と、無収入期間・初期費用を入力して、必要な貯金額の目安を計算するツール。金融アドバイスではありません。",
    category: "calculator",
    categoryLabel: "計算・記録",
    icon: "💰",
    status: "published",
    relatedArticleSlugs: ["australia-living-cost", "weekly-budget-template", "emergency-fund"],
  },
  {
    slug: "tool-resume-checklist",
    path: "/tools/resume-checklist",
    title: "英文レジュメ自己チェックツール",
    navLabel: "レジュメ自己チェック",
    description:
      "オーストラリアの採用慣行に沿って、英文レジュメに入れるべき項目と入れないほうがよい項目（NG）を自己チェックできるツール。完了状態は端末に保存できます。",
    category: "checklist",
    categoryLabel: "チェックリスト",
    icon: "📄",
    status: "published",
    relatedArticleSlugs: ["resume-guide", "cover-letter-guide", "walk-in-resume", "job-search-websites"],
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
