import type { Article } from "./types";

export const abnArticles: Article[] = [
  {
    id: "a5",
    title: "ABN取得とギグワークの始め方",
    slug: "abn-guide",
    category: "abn",
    description: "Uber EatsやDoorDashなどのギグワークに必要なABNを、ABR公式サイトから無料で取得する手順を解説します。",
    content: [
      "ABN（Australian Business Number）は個人事業主（Sole Trader）として働くための事業者番号です。Uber Eats・DoorDash・一部の建設現場などはABNが必要です。",
      "ABRの公式サイトから無料で申請でき、多くは即時〜数日で発行されます。ABNでの収入は自分で確定申告（Tax Return）する必要があり、経費や走行記録の管理が重要です。",
    ],
    keyFacts: [
      { label: "費用", value: "無料（ABR公式サイト）" },
      { label: "申請先", value: "Australian Business Register（ABR）" },
      { label: "発行期間", value: "即時〜数日" },
      { label: "区分", value: "Sole Trader（個人事業主）" },
    ],
    steps: [
      { title: "ABR公式サイトで申請開始", description: "Sole Traderとして新規ABN申請を選びます。" },
      { title: "本人・事業情報を入力", description: "TFN、氏名、事業内容（デリバリー等）を入力します。" },
      { title: "業種コードを選択", description: "フードデリバリーなど該当する業種を選びます。" },
      { title: "ABNを受け取る", description: "発行されたABN番号を保管し、各アプリに登録します。" },
    ],
    tips: [
      "ABN収入は源泉徴収されないため、税金分（目安として収入の一部）を別口座に取り分けておくと確定申告で慌てません。",
      "走行距離・燃料・スマホ代などは経費計上できる場合があります。記録をこまめに残しましょう。",
    ],
    warnings: ["ABNでの収入は必ず確定申告が必要です。記録（売上・経費）を必ず残してください。"],
    faqs: [
      {
        question: "GST登録は必要ですか？",
        answer:
          "年間売上が75,000 AUD未満であれば原則GST登録は不要です。ただしUber等のライドシェア（乗客輸送）は売上に関わらずGST登録が必要なルールがあるため、フードデリバリーのみか乗客輸送も行うかで判断が変わります。",
      },
    ],
    sources: [
      { label: "Australian Business Register", url: "https://www.abr.gov.au/" },
    ],
    relatedSlugs: ["tax-return-guide", "uber-eats-guide", "doordash-guide"],
    updatedAt: "2026-06-10",
    published: true,
  },
];
