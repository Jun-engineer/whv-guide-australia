import type { Article } from "./types";

export const housingArticles: Article[] = [
  {
    id: "a11",
    title: "シェアハウス探しと詐欺対策｜内見・Bond・契約の流れ",
    slug: "housing-guide",
    category: "housing",
    description: "Facebook Marketplace等での家探しの手順、Bond（敷金）の仕組み、詐欺を避けるチェックポイントを解説します。",
    content: [
      "ワーホリの住居はシェアハウス（フラットシェア）が一般的です。Facebookグループ/Marketplace、Flatmates.com.au、Gumtreeなどで探します。",
      "内見せずに送金を求める物件は詐欺の典型です。必ず現地で部屋・契約条件・同居人を確認してから支払いましょう。Bond（敷金）は通常2〜4週間分が目安です。",
    ],
    keyFacts: [
      { label: "主な探し方", value: "Facebookグループ/Marketplace、Flatmates、Gumtree" },
      { label: "家賃の支払い", value: "週単位（per week）表記が基本" },
      { label: "Bond（敷金）", value: "通常2〜4週間分。退去時に原状回復を条件に返金" },
      { label: "費用の含有", value: "光熱費・ネット込み（bills included）か要確認" },
    ],
    steps: [
      { title: "予算とエリアを決める", description: "通勤時間・治安・スーパーの近さを考慮します。" },
      { title: "複数物件に内見を予約", description: "写真だけで決めず、実際に見て比較します。" },
      { title: "条件を確認", description: "家賃・Bond・最低滞在期間・光熱費・人数を確認します。" },
      { title: "契約・入金", description: "内見・合意後に支払い、領収書や契約メッセージを残します。" },
    ],
    tips: [
      "「週いくら」表示が多いので、月額換算（週×52÷12）で予算と比較しましょう。",
      "支払いは記録が残る銀行振込で。現金手渡しのみを要求される場合は慎重に。",
    ],
    warnings: ["内見前の送金、相場より極端に安い物件、海外在住オーナーを名乗るケースは詐欺の可能性が高いです。"],
    faqs: [
      {
        question: "Bondは必ず返ってきますか？",
        answer:
          "部屋を破損なく明け渡せば返金されるのが原則です。入居時に既存の傷を写真で記録しておくと、退去時のトラブルを防げます。",
      },
    ],
    relatedSlugs: ["whv-complete-guide", "arrival-checklist"],
    updatedAt: "2026-06-10",
    published: true,
  },

  {
    id: "a37",
    title: "シェアハウスの探し方と内見チェックリスト",
    slug: "share-house-finding",
    category: "housing",
    description:
      "ワーホリの定番はシェアハウス。物件の探し方、内見で見るべきポイント、契約・ボンド（敷金）の注意点を実践的にまとめました。",
    content: [
      "ワーホリの多くはシェアハウス（複数人で住む賃貸）で暮らします。1部屋を借りる『個室（own room）』と、2段ベッド等を共有する『シェアルーム（相部屋）』があり、後者ほど家賃が安くなります。",
      "物件はFlatmates.com.au、Gumtree、Facebookの賃貸グループ、日本人向け掲示板などで探します。人気物件は早い者勝ちのため、現地到着後すぐ動けるよう事前に相場とエリアを調べておくと有利です。",
    ],
    keyFacts: [
      { label: "主な探し方", value: "Flatmates.com.au / Gumtree / Facebook / 日本人掲示板" },
      { label: "家賃の支払い", value: "週払い表記(per week)が一般的。多くは2週間前払い" },
      { label: "ボンド(敷金)", value: "通常2〜4週間分。退去時に原状回復で返金" },
      { label: "内見", value: "必ず現地で確認してから契約・送金する" },
    ],
    steps: [
      { title: "エリアと予算を決める", description: "通勤・治安・家賃から住みたいエリアを絞ります。" },
      { title: "物件を探して連絡", description: "条件に合う部屋にメッセージを送り、内見をアポイントします。" },
      { title: "内見でチェック", description: "水回り・カビ・騒音・住人の雰囲気・含まれる費用(光熱費/Wi-Fi)を確認します。" },
      { title: "契約・支払い", description: "条件(家賃/ボンド/最低滞在期間/退去通知)を書面で確認してから支払います。" },
    ],
    tips: [
      "内見前の送金要求は詐欺の定番。必ず現物を見てから払いましょう。",
      "家賃にbills（光熱費・Wi-Fi）が含まれるか必ず確認。別途だと月の出費が変わります。",
      "最低滞在期間（minimum stay）と退去通知（notice）の条件を事前に把握しておきましょう。",
    ],
    faqs: [
      {
        question: "ボンド（敷金）は必ず返ってきますか？",
        answer:
          "部屋を入居時の状態に戻して退去すれば原則返金されます。入居時に既存の傷・汚れを写真に残しておくと、退去時のトラブルを防げます。",
      },
    ],
    phrases: [
      { en: "Is this room still available?", ja: "この部屋はまだ空いていますか？", note: "問い合わせの最初のひとこと" },
      { en: "Can I come and inspect the room?", ja: "内見に行ってもいいですか？" },
      { en: "Are bills (electricity, gas, Wi-Fi) included in the rent?", ja: "家賃に光熱費・Wi-Fiは含まれていますか？" },
      { en: "How much is the bond and when is it refunded?", ja: "ボンド（敷金）はいくらで、いつ返金されますか？" },
      { en: "Is there a minimum stay?", ja: "最低滞在期間はありますか？" },
    ],
    warnings: ["相場より極端に安い物件や前払いを急かす相手は詐欺を疑ってください。"],
    relatedSlugs: ["housing-guide", "safety-emergency", "area-overview"],
    updatedAt: "2026-07-16",
    published: true,
  },
];
