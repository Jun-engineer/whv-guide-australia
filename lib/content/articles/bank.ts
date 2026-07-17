import type { Article } from "./types";

export const bankArticles: Article[] = [
  {
    id: "a14",
    title: "オーストラリアの銀行口座開設ガイド（CommBank・NABなど）",
    slug: "bank-account-guide",
    category: "bank",
    description:
      "渡航前のオンライン申込から到着後の本人確認まで、ワーホリの銀行口座開設の流れと主要4大銀行の特徴を解説します。",
    content: [
      "給与受け取りや家賃支払いには現地の銀行口座があると便利です。四大銀行はCommonwealth Bank（CommBank）、Westpac、ANZ、NAB。アプリの使いやすさやワーホリ向け無料口座の有無で選ぶと良いでしょう。",
      "多くの銀行は渡航前にオンラインで口座申込ができ、到着後に支店やアプリで本人確認（パスポート提示）をして有効化します。事前申込しておくと、到着後すぐに口座が使えます。",
    ],
    keyFacts: [
      { label: "四大銀行", value: "CommBank / Westpac / ANZ / NAB" },
      { label: "申込", value: "渡航前にオンライン申込→到着後に本人確認" },
      { label: "必要書類", value: "パスポート、住所、TFN（後から登録可）" },
      { label: "カード", value: "デビットカード（タッチ決済）が即日〜数日で利用可" },
    ],
    steps: [
      { title: "銀行を選ぶ", description: "アプリの使いやすさ・口座維持費・ATM網で比較します。" },
      { title: "渡航前にオンライン申込", description: "多くの銀行は到着前に口座開設の事前申込が可能です。" },
      { title: "到着後に本人確認", description: "支店またはアプリでパスポートを提示し口座を有効化します。" },
      { title: "デビットカードを受け取る", description: "カードを受け取り、給与振込先・決済に使います。" },
    ],
    tips: [
      "TFNは後から口座に登録できます。未登録だと利息に高い税率がかかるため、届いたら登録を。",
      "口座維持費（monthly fee）が無料の条件（学生/ワーホリ向け、または毎月の入金条件）を確認しましょう。",
      "Wiseと現地銀行を併用すると、両替はWise・現地受け取りは銀行、と使い分けられて便利です。",
    ],
    faqs: [
      {
        question: "TFNがなくても口座は作れますか？",
        answer:
          "作れます。TFNは口座開設の必須条件ではなく、後から登録できます。ただし未登録のままだと利息に対して高い税率が適用されるため、TFNが届いたら早めに登録しましょう。",
      },
    ],
    sources: [
      { label: "Commonwealth Bank（移住者向け口座）", url: "https://www.commbank.com.au/banking/moving-to-australia.html" },
    ],
    relatedSlugs: ["money-transfer-wise", "tfn-guide", "arrival-checklist"],
    updatedAt: "2026-06-10",
    published: true,
  },

  {
    id: "a39",
    title: "オーストラリア4大銀行比較｜CommBank・NAB・ANZ・Westpac",
    slug: "bank-comparison",
    category: "bank",
    description:
      "口座開設前に知っておきたい主要4行の特徴・手数料・アプリの使いやすさを比較。ワーホリに向いた選び方を解説します。",
    content: [
      "オーストラリアの主要銀行は『4大銀行（Big Four）』と呼ばれるCommonwealth Bank（CommBank）、NAB、ANZ、Westpacです。どれもワーホリの口座開設に対応しており、スマホアプリでの管理が中心になります。",
      "ワーホリに人気なのはCommBankとNAB。CommBankは支店・ATMが多くアプリが使いやすい、NABは月額口座維持手数料が無料で海外送金にも対応しやすい、といった特徴があります。給与受け取り口座として使うなら、職場が指定する形式（BSB＋口座番号）に対応していれば問題ありません。",
    ],
    keyFacts: [
      { label: "CommBank", value: "支店/ATM最多・アプリが使いやすい・利用者多数" },
      { label: "NAB", value: "口座維持手数料が無料・海外送金に強み" },
      { label: "ANZ / Westpac", value: "大手で安定。学生/新規向けプランあり" },
      { label: "開設に必要", value: "パスポート・住所・連絡先(到着後すぐ開設可)" },
    ],
    steps: [
      { title: "銀行を選ぶ", description: "ATMの多さ、手数料、アプリの使いやすさで選びます。" },
      { title: "オンラインで申込", description: "多くは到着前後にオンラインで口座開設の申込ができます。" },
      { title: "支店で本人確認", description: "到着後に支店でパスポート提示し、口座を有効化します。" },
      { title: "TFNを登録", description: "口座にTFNを登録しないと利子に高い税金がかかるため必ず登録します。" },
    ],
    tips: [
      "月額の口座維持手数料の有無を確認。条件付き無料の場合は条件（毎月の入金額等）をチェック。",
      "デビットカードのタッチ決済が生活の基本。Apple Pay/Google Payに登録すると便利です。",
    ],
    relatedSlugs: ["bank-account-guide", "tfn-guide", "money-transfer-wise"],
    updatedAt: "2026-06-20",
    published: true,
  },
];
