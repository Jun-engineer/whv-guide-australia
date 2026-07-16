import type { NewsItem } from "@/types/news";

/**
 * サイトのお知らせ・制度変更ニュース。
 * 新しいものを上（配列の先頭）に追加してください。日付降順で表示されます。
 */
export const newsItems: NewsItem[] = [
  {
    id: "n3",
    slug: "whv-visa-fee-840",
    title: "ワーホリビザ申請料が840 AUDに値上げ（2025年7月〜）",
    date: "2025-07-01",
    category: "cost",
    summary:
      "ファーストワーキングホリデービザ（サブクラス417）の申請料が650 AUDから840 AUDに改定されました。セカンド・サードビザは各1,000 AUDです。",
    body: [
      "オーストラリア政府は2025年7月1日より、ワーキングホリデービザ（サブクラス417）の申請料（Visa Application Charge）を改定しました。ファースト（1年目）ビザは従来の650 AUDから840 AUDへ値上げされています。",
      "セカンド（2年目）・サード（3年目）ビザの申請料はそれぞれ1,000 AUDです。今後も申請料は改定される可能性があるため、申請前に必ず公式サイトで最新の金額を確認してください。",
      "本サイトのビザ関連記事も最新の金額に更新済みです。予算計画の際は、申請料に加えて海外保険・航空券・当面の生活費（5,000 AUD以上が目安）も見込んでおきましょう。",
    ],
    source: {
      label: "Department of Home Affairs｜Working Holiday visa (417)",
      url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417",
    },
    relatedGuide: "visa-application",
    published: true,
  },
  {
    id: "n2",
    slug: "second-visa-record-keeping",
    title: "セカンドビザ：日数の証拠（Payslip等）は必ず保管を",
    date: "2025-06-15",
    category: "visa",
    summary:
      "セカンド/サードビザ申請では規定労働（Specified Work）の証拠提出が重要です。Payslip・銀行入金・雇用契約を必ず保管しましょう。",
    body: [
      "セカンドビザ（規定労働88日）・サードビザ（6か月）の申請では、実際に規定労働を行ったことを示す証拠が求められます。給与明細（Payslip）、銀行の入金記録、雇用契約、タイムシートは必ず保管してください。",
      "『日数をごまかして証明する』といった不正な提案には絶対に応じないでください。発覚するとビザ却下や将来の入国制限のリスクがあります。正規に課税され、記録が残る形で働くことが最も安全です。",
    ],
    relatedGuide: "second-visa-guide",
    published: true,
  },
  {
    id: "n1",
    slug: "site-launch",
    title: "WH Guide Australia を公開しました",
    date: "2025-06-01",
    category: "site",
    summary:
      "オーストラリアワーホリの準備・生活・仕事・税金・掲示板をまとめた日本語ガイドサイトを公開しました。記事は随時追加していきます。",
    body: [
      "ビザ申請から現地の家探し・仕事探し、税金・ファーム・ギグワークまで、ワーホリに必要な情報を『必要な順番』で学べる日本語ガイドサイトを公開しました。",
      "手順記事は今後、画像付きでさらに分かりやすく更新していく予定です。掲示板では現地の質問・情報交換もできます。リクエストページから『こんな記事が欲しい』という要望もお寄せください。",
    ],
    published: true,
  },
];
