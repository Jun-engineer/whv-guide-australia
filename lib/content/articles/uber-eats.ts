import type { Article } from "./types";

export const uberEatsArticles: Article[] = [
  {
    id: "a8",
    title: "Uber Eats配達員の始め方｜登録から稼働・保険まで",
    slug: "uber-eats-guide",
    category: "uber-eats",
    description: "ギグワークの代表格Uber Eatsの登録手順、稼働のコツ、保険の考え方をまとめました。",
    content: [
      "Uber Eatsはスキマ時間に働けるフードデリバリーで、英語にまだ自信がなくても始めやすいのが魅力です。ABN登録と本人確認を済ませれば、自転車・バイク・車で配達できます。",
      "報酬は配達ごとの距離・時間ベース。ピークタイム（昼12時前後・夜18〜21時）と雨の日は需要が高く稼ぎやすい傾向です。",
    ],
    keyFacts: [
      { label: "必要なもの", value: "ABN、配達手段、保温バッグ、スマホ" },
      { label: "稼ぎ時", value: "平日ランチ・週末ディナー・雨天" },
      { label: "報酬", value: "配達距離・時間に応じた変動制＋チップ" },
      { label: "税金", value: "ABN収入のため確定申告が必要" },
    ],
    steps: [
      { title: "ABNを取得", description: "Sole TraderとしてABNを取得します（ABNガイド参照）。" },
      { title: "アプリで登録", description: "本人確認書類・ビザ・配達手段を登録します。" },
      { title: "バッグと装備を準備", description: "保温バッグ、スマホホルダー、ヘルメット（バイク/自転車）を用意します。" },
      { title: "稼働を開始", description: "ピークタイムに需要の高いエリアでオンラインにします。" },
    ],
    tips: [
      "自転車配達はCBD（中心部）の短距離案件が多く、バイクは郊外も含め効率的。エリア特性で手段を選びましょう。",
      "売上・経費（自転車整備、燃料、スマホ代）を毎月記録しておくと確定申告が楽になります。",
    ],
    warnings: ["配達中の事故・賠償に備え、対人・対物をカバーする保険への加入を強く推奨します。"],
    faqs: [
      {
        question: "ワーホリビザでUber Eatsをやって問題ありませんか？",
        answer:
          "個人事業主としての就労はワーホリビザで可能です。ただし同一雇用主6か月ルールはあくまで「雇用」に関するもので、複数のプラットフォームを掛け持ちすること自体に制限はありません。",
      },
    ],
    sources: [
      { label: "Uber - 配達パートナー登録", url: "https://www.uber.com/au/en/deliver/" },
    ],
    relatedSlugs: ["abn-guide", "doordash-guide", "tax-return-guide"],
    updatedAt: "2026-06-10",
    published: true,
  },
];
