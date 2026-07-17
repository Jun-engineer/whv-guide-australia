import type { Article } from "./types";

export const superArticles: Article[] = [
  {
    id: "a7",
    title: "Superannuation（退職年金）の引き出し｜DASP申請",
    slug: "super-guide",
    category: "super",
    description: "雇用主が積み立てたSuperを、ワーホリ終了後にDASPとして請求する手順と注意点を解説します。",
    content: [
      "Superannuation（スーパー）は雇用主が給与とは別に積み立てる退職年金で、給与の11.5%（2024年時点、段階的に引き上げ）が拠出されます。ワーホリでも対象です。",
      "ビザが失効し出国した後、DASP（Departing Australia Superannuation Payment）として請求できます。請求にはSuper口座情報とビザの失効が必要で、受取時に源泉課税（WHMは65%）が引かれます。",
    ],
    keyFacts: [
      { label: "拠出率", value: "給与の11.5%（雇用主負担、2024年時点）" },
      { label: "対象", value: "週の労働時間に関わらず、対象賃金を得た従業員" },
      { label: "請求条件", value: "出国済み＋ビザ失効" },
      { label: "DASP課税（WHM）", value: "65%（受取額から源泉徴収）" },
    ],
    steps: [
      { title: "Super口座を把握", description: "雇用主が拠出した口座（複数の場合あり）を確認します。" },
      { title: "口座を統合（任意）", description: "複数あれば1つにまとめると請求が簡単です。" },
      { title: "出国・ビザ失効を待つ", description: "DASPは出国後かつビザ失効後に申請できます。" },
      { title: "DASPをオンライン申請", description: "ATOのDASPオンラインシステムから請求します。" },
    ],
    tips: [
      "勤務先が変わるたびに新しいSuper口座を作らず、最初の口座を使い回すと管理が楽です。",
      "Super口座番号（USI/メンバー番号）は給与明細やSuper会社のアプリで確認できます。",
    ],
    faqs: [
      {
        question: "帰国前に引き出せますか？",
        answer:
          "できません。DASPはビザが失効し、かつ国外に出た後にのみ請求できます。帰国直前にSuper口座情報を控えておき、帰国後に申請するのが一般的です。",
      },
    ],
    sources: [
      { label: "ATO - DASP", url: "https://www.ato.gov.au/individuals-and-families/super-for-individuals-and-families/super/withdrawing-and-using-your-super/departing-australia-superannuation-payment-dasp" },
    ],
    relatedSlugs: ["tax-return-guide"],
    updatedAt: "2026-06-10",
    published: true,
  },

  {
    id: "a40",
    title: "スーパーアニュエーション返金（DASP）｜帰国時の手続き",
    slug: "dasp-refund",
    category: "super",
    description:
      "帰国後、積み立てた退職年金（Super）は『DASP』として払い戻し申請できます。対象条件・申請手順・税率・注意点を解説します。",
    content: [
      "オーストラリアで働くと、給与とは別に雇用主が『スーパーアニュエーション（Super：退職年金）』を積み立てます。ワーホリが帰国してビザが失効すると、この積立金を『DASP（Departing Australia Superannuation Payment）』として払い戻し申請できます。",
      "申請はオンライン（ATOのDASPシステム）で行います。複数の職場で働いた場合は複数のSuperファンドに積立があることが多いため、すべて把握して申請するのがポイントです。払い戻しには税金が源泉徴収されます（ワーホリ向けの税率が適用）。",
    ],
    keyFacts: [
      { label: "対象", value: "ビザ失効・オーストラリア出国後のワーホリ等" },
      { label: "申請方法", value: "ATOのDASPオンラインシステム" },
      { label: "税率", value: "ワーホリ向けの源泉税が適用(高め)" },
      { label: "注意", value: "複数ファンドに積立がある場合は各社に申請" },
    ],
    steps: [
      { title: "Superファンドを把握", description: "働いた職場ごとの積立先(ファンド名・会員番号)を確認します。" },
      { title: "ビザ失効・出国", description: "DASPはビザが失効し出国した後に申請可能になります。" },
      { title: "DASPオンライン申請", description: "ATOのシステムでパスポート・ビザ・ファンド情報を入力して申請します。" },
      { title: "払い戻しを受領", description: "源泉税が引かれた額が指定口座(海外口座も可)に振り込まれます。" },
    ],
    tips: [
      "在豪中にmyGovとATOを連携しておくと、自分のSuper口座をまとめて確認できて便利です。",
      "Payslipでスーパーがきちんと積み立てられているか定期的に確認しましょう（未払いの雇用主もいます）。",
    ],
    warnings: ["税率・申請要件は変更されることがあります。申請前にATOの最新情報を確認してください。"],
    sources: [
      { label: "ATO｜DASP（退職年金の払い戻し）", url: "https://www.ato.gov.au/" },
    ],
    relatedSlugs: ["super-guide", "tax-return-guide", "tfn-guide"],
    updatedAt: "2026-06-20",
    published: true,
  },
];
