import type { NewsTemplate } from "@/types/newsTemplate";

/**
 * ニューステンプレート集。制度変更・警報などのニュースを、
 * 抜け漏れなく・正確に・公式リンク付きで伝えるための編集フォーマット。
 * 数値・日付は必ず officialSources で最新を確認してから記入する。
 */
export const NEWS_TEMPLATES: NewsTemplate[] = [
  {
    slug: "visa-changes",
    path: "/news/templates/visa-changes",
    title: "ビザ制度変更ニュース テンプレート",
    navLabel: "ビザ制度変更",
    description:
      "ワーキングホリデービザ（417/462）の条件・年齢上限・対象国・申請要件などの変更を、公式ソース付きで正確に伝えるためのテンプレート。",
    icon: "🛂",
    categoryLabel: "ビザ",
    intro: [
      "ビザ制度の変更は、対象者・適用開始日・経過措置によって影響が大きく変わります。「いつから」「誰に」「何が」変わるのかを最初に明確にしてください。",
      "移民に関する情報は YMYL（人生・お金に関わる重要情報）です。断定を避け、必ず Department of Home Affairs の公式ページへ誘導し、個別の判断は公式・専門家に委ねる形で書きます。",
    ],
    fields: [
      { label: "発表日", required: true, hint: "Home Affairs が公表した日付。" },
      { label: "適用開始日", required: true, hint: "新ルールが有効になる日。申請日基準か到着日基準かも明記。" },
      { label: "対象ビザ", required: true, hint: "subclass 417 / 462 のどちらか、または両方か。" },
      { label: "対象者", required: true, hint: "新規申請者のみか、既存の保有者にも及ぶか。国籍・年齢の条件。" },
      { label: "変更内容", required: true, hint: "年齢上限・対象国・申請要件・滞在条件など、具体的に何が変わるか。" },
      { label: "経過措置", required: false, hint: "変更前に申請・入国した人への救済措置があるか。" },
      { label: "公式ソースURL", required: true, hint: "Home Affairs の該当ページの直リンク。" },
    ],
    notes: [
      "「必ず取得できる／できなくなる」といった断定は避け、「公式発表によると」「対象となる可能性があります」と表現する。",
      "為替・費用に触れる場合は確認日を添える。制度は改定されるため、記事末尾に「最新は公式で確認」を明記する。",
      "第二・第三ビザの要件変更は別記事（second-visa-guide）へリンクして深掘りする。",
    ],
    skeleton: [
      "【発表日】YYYY年M月D日",
      "【適用開始】YYYY年M月D日（申請日基準／到着日基準）",
      "【対象ビザ】subclass 417 ／ 462",
      "【対象者】（新規申請者／既存保有者／特定国籍・年齢）",
      "【変更内容】（箇条書きで具体的に）",
      "【経過措置】（あれば）",
      "【出典】Department of Home Affairs（確認日：YYYY年M月D日）",
    ],
    verifiedAt: "2026-08-02",
    officialSources: [
      {
        label: "Department of Home Affairs｜Working Holiday visa (subclass 417)",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417",
        accessedAt: "2026-08-02",
      },
      {
        label: "Department of Home Affairs｜Work and Holiday visa (subclass 462)",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-462",
        accessedAt: "2026-08-02",
      },
    ],
    relatedSlugs: ["whv-complete-guide", "second-visa-guide", "working-rights"],
    status: "published",
  },
  {
    slug: "minimum-wage",
    path: "/news/templates/minimum-wage",
    title: "最低賃金改定ニュース テンプレート",
    navLabel: "最低賃金改定",
    description:
      "毎年7月に見直される全国最低賃金（National Minimum Wage）やアワード賃金の改定を、金額・適用開始日・出典付きで伝えるためのテンプレート。",
    icon: "💵",
    categoryLabel: "賃金",
    intro: [
      "オーストラリアの最低賃金は Fair Work Commission の年次見直し（Annual Wage Review）で決まり、多くの場合7月1日以降の最初の給与期間から適用されます。時給・週給・適用開始日をセットで書きます。",
      "自分のアワード（業種別の賃金表）に該当する場合は全国最低賃金より高いことがあります。「自分の賃金は Pay Calculator で確認」を必ず案内してください。",
    ],
    fields: [
      { label: "改定発表日", required: true, hint: "Fair Work Commission が年次見直し結果を公表した日。" },
      { label: "適用開始日", required: true, hint: "通常は7月1日以降の最初の給与期間から。" },
      { label: "新・全国最低賃金", required: true, hint: "時給と週給の両方（例: 時給 $XX.XX／週給 $X,XXX.XX）。" },
      { label: "アワード改定率", required: false, hint: "アワード最低賃金の引き上げ率（%）。" },
      { label: "対象者の注意", required: true, hint: "アワード・登録協定に該当する場合はそちらが優先される旨。" },
      { label: "公式ソースURL", required: true, hint: "Fair Work Ombudsman / Fair Work Commission の該当ページ。" },
    ],
    notes: [
      "金額は必ず公式で確認し、確認日を添える。過去の数字を使い回さない。",
      "「これがあなたの時給です」と断定しない。ジュニア料金・見習い・障害者料金など例外がある旨を添える。",
      "未払い・アワード違反が疑われる場合は underpayment-unpaid-wages の記事へ誘導する。",
    ],
    skeleton: [
      "【発表日】YYYY年M月D日（Fair Work Commission 年次見直し）",
      "【適用開始】YYYY年7月1日以降の最初の給与期間",
      "【全国最低賃金】時給 $XX.XX ／ 週給 $X,XXX.XX",
      "【アワード改定率】+X.XX%",
      "【注意】アワード・協定該当者はそちらの金額が優先",
      "【出典】Fair Work Ombudsman / Fair Work Commission（確認日：YYYY年M月D日）",
    ],
    verifiedAt: "2026-08-02",
    officialSources: [
      {
        label: "Fair Work Ombudsman｜Minimum wages",
        url: "https://www.fairwork.gov.au/pay-and-wages/minimum-wages",
        accessedAt: "2026-08-02",
      },
      {
        label: "Fair Work Commission｜Annual wage reviews",
        url: "https://www.fwc.gov.au/hearings-decisions/major-cases/annual-wage-reviews",
        accessedAt: "2026-08-02",
      },
    ],
    relatedSlugs: ["award-rates-penalty-rates", "working-rights", "underpayment-unpaid-wages"],
    status: "published",
  },
  {
    slug: "tax-super",
    path: "/news/templates/tax-super",
    title: "税・スーパー制度変更ニュース テンプレート",
    navLabel: "税・Super改定",
    description:
      "所得税率・タックスフリーしきい値・スーパーアニュエーション率など、ATO 管轄の税・年金制度の改定を伝えるためのテンプレート。",
    icon: "🧾",
    categoryLabel: "税・Super",
    intro: [
      "税・スーパー（退職年金）の改定は、税率表・しきい値・保証拠出率（SG rate）・適用年度（financial year）を正確に区別して書く必要があります。「どの年度から」を最初に示してください。",
      "税務はYMYLかつ個別性が高い分野です。一般情報として提供し、個別の申告・還付は ATO・登録税理士に確認するよう促してください。",
    ],
    fields: [
      { label: "改定発表日／予算日", required: true, hint: "連邦予算や ATO 公表の日付。" },
      { label: "適用年度", required: true, hint: "どの financial year（例: 2026–27）から適用されるか。" },
      { label: "変更項目", required: true, hint: "所得税率／タックスフリーしきい値／SG率／Medicare levy など。" },
      { label: "変更前→変更後", required: true, hint: "旧数値と新数値を並記。" },
      { label: "WHV保有者への影響", required: false, hint: "居住者・非居住者判定や還付への影響。" },
      { label: "公式ソースURL", required: true, hint: "ATO の該当ページ。" },
    ],
    notes: [
      "税率・しきい値は年度で変わる。必ず ATO の最新ページで数値と適用年度を確認し、確認日を添える。",
      "税務上の居住者・非居住者で扱いが異なる点に触れつつ、個別判定は断定しない。",
      "還付・income statement の実務は tax-return-guide / income-statement-tax-ready へ誘導する。",
    ],
    skeleton: [
      "【発表日】YYYY年M月D日",
      "【適用年度】YYYY–YY",
      "【変更項目】（所得税率／しきい値／SG率 など）",
      "【変更前→後】旧：… → 新：…",
      "【WHVへの影響】（居住者判定・還付など）",
      "【出典】Australian Taxation Office（確認日：YYYY年M月D日）",
    ],
    verifiedAt: "2026-08-02",
    officialSources: [
      {
        label: "ATO｜Tax rates – Australian resident",
        url: "https://www.ato.gov.au/tax-rates-and-codes/tax-rates-australian-residents",
        accessedAt: "2026-08-02",
      },
      {
        label: "ATO｜Individuals and families",
        url: "https://www.ato.gov.au/individuals-and-families",
        accessedAt: "2026-08-02",
      },
    ],
    relatedSlugs: ["tax-return-guide", "super-guide", "income-statement-tax-ready", "payslip-guide"],
    status: "published",
  },
  {
    slug: "visa-fee",
    path: "/news/templates/visa-fee",
    title: "ビザ申請料改定ニュース テンプレート",
    navLabel: "ビザ申請料改定",
    description:
      "ワーキングホリデービザの申請料（Visa Application Charge）改定を、旧料金・新料金・適用開始日・出典付きで伝えるためのテンプレート。",
    icon: "💳",
    categoryLabel: "費用",
    intro: [
      "ビザ申請料は毎年見直されることがあり、通常7月1日から改定されます。旧料金・新料金・適用開始日をセットで示し、AUD建てで記載してください。",
      "実際の支払額は Visa Pricing Estimator で確定します。円換算は為替で変わるため、掲載する場合は必ず確認日を添えます。",
    ],
    fields: [
      { label: "発表日", required: true, hint: "Home Affairs が料金改定を公表した日。" },
      { label: "適用開始日", required: true, hint: "新料金が適用される日（多くは7月1日）。" },
      { label: "対象ビザ", required: true, hint: "subclass 417 / 462。" },
      { label: "旧料金（AUD）", required: true, hint: "改定前の基本申請料。" },
      { label: "新料金（AUD）", required: true, hint: "改定後の基本申請料。" },
      { label: "円換算の目安", required: false, hint: "掲載する場合は確認日と為替レートを明記。" },
      { label: "公式ソースURL", required: true, hint: "Home Affairs の Current visa pricing ページ。" },
    ],
    notes: [
      "料金は AUD で確認し、確認日を添える。円換算はあくまで目安として、為替変動の注意書きを添える。",
      "追加申請者料金・非インターネット申請料など、基本料金以外が発生する場合がある旨に触れる。",
      "支払い前に必ず Visa Pricing Estimator で最終確定額を確認するよう案内する。",
    ],
    skeleton: [
      "【発表日】YYYY年M月D日",
      "【適用開始】YYYY年7月1日",
      "【対象ビザ】subclass 417 ／ 462",
      "【旧料金】AUD $X,XXX → 【新料金】AUD $X,XXX",
      "【円換算の目安】約 ¥XXX,XXX（確認日：YYYY年M月D日、1 AUD＝¥XX）",
      "【出典】Department of Home Affairs（確認日：YYYY年M月D日）",
    ],
    verifiedAt: "2026-08-02",
    officialSources: [
      {
        label: "Department of Home Affairs｜Current visa pricing",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/fees-and-charges/current-visa-pricing",
        accessedAt: "2026-08-02",
      },
      {
        label: "Department of Home Affairs｜Visa Pricing Estimator",
        url: "https://immi.homeaffairs.gov.au/visas/visa-pricing-estimator",
        accessedAt: "2026-08-02",
      },
    ],
    relatedSlugs: ["whv-complete-guide", "second-visa-guide"],
    status: "published",
  },
  {
    slug: "disaster-alert",
    path: "/news/templates/disaster-alert",
    title: "災害・気象警報ニュース テンプレート",
    navLabel: "災害・気象警報",
    description:
      "山火事・洪水・サイクロン・熱波などの気象警報や災害情報を、影響地域・警報レベル・行動指針・緊急連絡先付きで伝えるためのテンプレート。",
    icon: "🌪️",
    categoryLabel: "防災",
    intro: [
      "災害情報は「命に関わる」最優先のYMYLです。まず影響地域・警報の種類とレベル・とるべき行動を簡潔に示し、公式の警報ページと緊急連絡先へ即誘導してください。",
      "状況は刻々と変わります。数値や範囲を断定せず、Bureau of Meteorology（気象局）や州の緊急サービスの最新情報を必ず確認するよう促します。",
    ],
    fields: [
      { label: "発表日時", required: true, hint: "警報が発表・更新された日時（現地時間）。" },
      { label: "災害の種類", required: true, hint: "山火事／洪水／サイクロン／熱波／高波 など。" },
      { label: "影響地域", required: true, hint: "州・地域・具体的な地名。" },
      { label: "警報レベル", required: true, hint: "Advice / Watch and Act / Emergency Warning などの区分。" },
      { label: "とるべき行動", required: true, hint: "避難・屋内退避・移動回避など、公式が示す行動指針。" },
      { label: "緊急連絡先", required: true, hint: "生命の危険がある場合は Triple Zero（000）。" },
      { label: "公式ソースURL", required: true, hint: "BOM・州の緊急サービスの該当ページ。" },
    ],
    notes: [
      "「安全です／危険です」と自己判断で断定しない。公式の警報レベルの表現をそのまま用いる。",
      "生命に危険が迫る場合は 000（Triple Zero）へ、と最上部で明示する。",
      "山火事・洪水・サイクロンの平時の備えは bushfire-safety / flood-cyclone-safety の記事へ誘導する。",
    ],
    skeleton: [
      "【発表日時】YYYY年M月D日 HH:MM（現地時間）",
      "【種類】（山火事／洪水／サイクロン／熱波 など）",
      "【影響地域】（州・地域・地名）",
      "【警報レベル】（Advice／Watch and Act／Emergency Warning）",
      "【とるべき行動】（公式の指示に従う）",
      "【緊急】生命の危険がある場合は 000（Triple Zero）",
      "【出典】Bureau of Meteorology／州の緊急サービス（確認日時：YYYY年M月D日 HH:MM）",
    ],
    verifiedAt: "2026-08-02",
    officialSources: [
      {
        label: "Bureau of Meteorology｜Warnings and alerts",
        url: "https://www.bom.gov.au/australia/warnings/",
        accessedAt: "2026-08-02",
      },
      {
        label: "Australian Government｜Triple Zero (000)",
        url: "https://www.infrastructure.gov.au/triple-zero",
        accessedAt: "2026-08-02",
      },
    ],
    relatedSlugs: ["bushfire-safety", "flood-cyclone-safety"],
    status: "published",
  },
];

/** 公開済みのニューステンプレート一覧を返す。 */
export function getPublishedNewsTemplates(): NewsTemplate[] {
  return NEWS_TEMPLATES.filter((template) => template.status === "published");
}

/** slug からニューステンプレートを取得する。 */
export function getNewsTemplateBySlug(slug: string): NewsTemplate | undefined {
  return NEWS_TEMPLATES.find((template) => template.slug === slug);
}
