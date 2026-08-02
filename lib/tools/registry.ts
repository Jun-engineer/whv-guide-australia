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
  {
    slug: "tool-job-application-tracker",
    path: "/tools/job-application-tracker",
    title: "仕事応募管理表｜応募日・連絡・面接・結果",
    navLabel: "応募管理表",
    description:
      "応募した会社・職種・応募日・進捗（連絡・面接・結果）を記録して管理できるツール。記録は端末に保存され、応募状況を一覧・集計できます。",
    category: "tracker",
    categoryLabel: "管理・記録",
    icon: "🗂️",
    status: "published",
    relatedArticleSlugs: [
      "job-search-websites",
      "facebook-job-groups",
      "walk-in-resume",
      "job-application-follow-up",
    ],
  },
  {
    slug: "tool-farm-evidence-tracker",
    path: "/tools/farm-evidence-tracker",
    title: "セカンドビザ証拠書類トラッカー",
    navLabel: "証拠書類トラッカー",
    description:
      "セカンドビザの指定業務を裏づける書類（給与明細・銀行入金・契約・写真など）の保有状況を種類別に記録できるツール。ビザの可否や正式な証拠は保証しません。",
    category: "tracker",
    categoryLabel: "管理・記録",
    icon: "📁",
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
      "farm-payslip-evidence",
      "farm-employer-verification",
      "88-day-calculation",
      "second-visa-guide",
      "specified-work-industries",
      "farm-second-visa",
    ],
  },
  {
    slug: "tool-return-home-checklist",
    path: "/tools/return-home-checklist",
    title: "帰国前チェックリスト（時系列）",
    navLabel: "帰国前チェックリスト",
    description:
      "退職・退去・車の売却・税金・スーパー（DASP）などを時系列で整理できる帰国前チェックリスト。完了状態は端末に保存できます。",
    category: "checklist",
    categoryLabel: "チェックリスト",
    icon: "🧳",
    status: "published",
    verifiedAt: "2026-08-02",
    relatedArticleSlugs: [
      "leaving-australia-checklist",
      "close-services-before-leaving",
      "final-pay-before-leaving",
      "dasp-before-after-leaving",
      "sell-car-timeline",
      "keep-australian-bank-account",
    ],
  },
  {
    slug: "download-resume-template",
    path: "/downloads/resume-template",
    title: "英文レジュメテンプレート（職種別）",
    navLabel: "レジュメテンプレート",
    description:
      "接客・ファーム・倉庫・IT の職種別に、英文レジュメのひな型をコピー・ダウンロードできます。自分の経歴に合わせて書き換えて使ってください。",
    category: "download",
    categoryLabel: "テンプレート",
    icon: "📝",
    status: "published",
    relatedArticleSlugs: ["resume-guide", "cover-letter-guide", "walk-in-resume", "hospitality-jobs-guide"],
  },
  {
    slug: "download-cover-letter-template",
    path: "/downloads/cover-letter-template",
    title: "英文カバーレターテンプレート集（職種・チャネル別）",
    navLabel: "カバーレターテンプレート",
    description:
      "接客・ファーム・倉庫・汎用の英文カバーレターのひな型と、メール・店頭・SNS・応募フォーム用の短文をコピー／ダウンロードできます。自分の応募先に合わせて書き換えて使ってください。",
    category: "download",
    categoryLabel: "テンプレート",
    icon: "✉️",
    status: "published",
    relatedArticleSlugs: [
      "cover-letter-guide",
      "resume-guide",
      "walk-in-resume",
      "job-application-follow-up",
      "job-search-websites",
    ],
  },
  {
    slug: "download-housing-inspection-checklist",
    path: "/downloads/housing-inspection-checklist",
    title: "シェアハウス内見チェックリスト（印刷・保存）",
    navLabel: "内見チェックリスト",
    description:
      "シェアハウスの内見で確認したい項目（費用・部屋・設備・安全・周辺環境）を種類別にまとめたチェックリスト。現地でチェックでき、印刷・.txt ダウンロードにも対応します。",
    category: "download",
    categoryLabel: "テンプレート",
    icon: "🔑",
    status: "published",
    relatedArticleSlugs: [
      "inspection-checklist",
      "condition-report-guide",
      "bond-rules-overview",
      "housing-message-templates",
      "share-house-rules",
      "rental-scam-examples",
    ],
  },
  {
    slug: "download-emergency-card",
    path: "/downloads/emergency-card",
    title: "緊急連絡先カード（000・保険・領事館・本人情報）",
    navLabel: "緊急連絡先カード",
    description:
      "オーストラリアの主な緊急・相談窓口（000 ほか）と、自分の緊急情報（保険・連絡先・アレルギー等）をまとめて保存・印刷できるカード。スマホ保存・印刷用に .txt ダウンロードもできます。",
    category: "download",
    categoryLabel: "テンプレート",
    icon: "🆘",
    status: "published",
    verifiedAt: "2026-08-02",
    officialSources: [
      {
        label: "Australian Government｜Triple Zero (000)",
        url: "https://www.triplezero.gov.au/",
        accessedAt: "2026-08-02",
      },
      {
        label: "healthdirect Australia",
        url: "https://www.healthdirect.gov.au/",
        accessedAt: "2026-08-02",
      },
    ],
    relatedArticleSlugs: [
      "gp-urgent-care-emergency",
      "ambulance-costs-insurance",
      "overseas-insurance-claim",
      "consular-registration",
      "bites-stings-wildlife",
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
