import type { Article } from "./types";

export const foodArticles: Article[] = [
  {
    id: "a22",
    title: "食費を抑える！自炊・スーパー・外食ガイド",
    slug: "food-guide",
    category: "food",
    description:
      "Coles・Woolworthsの使い方から、節約自炊のコツ、外食・チップ事情まで。物価の高いオーストラリアで食費を賢く管理する方法。",
    content: [
      "オーストラリアは外食が高く、カフェのランチでも20 AUD前後かかります。食費を抑える最大のコツは自炊です。二大スーパーのColesとWoolworths（通称ウーリーズ）に加え、激安スーパーのALDIを使い分けると食費を大きく節約できます。",
      "野菜・果物・肉は比較的安く、自炊なら週の食費を50〜80 AUD程度に抑えることも可能です。アジア食材はアジア系スーパーで手に入ります。",
    ],
    keyFacts: [
      { label: "主要スーパー", value: "Coles / Woolworths / ALDI（激安）" },
      { label: "自炊の食費目安", value: "週50〜100 AUD" },
      { label: "外食の目安", value: "カフェのランチ15〜25 AUD" },
      { label: "チップ", value: "基本不要（任意。義務ではない）" },
    ],
    steps: [
      { title: "会員（Flybuys/Everyday Rewards）登録", description: "ColesのFlybuys、WoolworthsのEveryday Rewardsでポイントと割引が受けられます。" },
      { title: "週1のまとめ買い", description: "特売（Specials）やマークダウン（値引きシール）を狙って計画的に購入します。" },
      { title: "作り置き・お弁当", description: "ランチを持参すれば外食費を大幅に節約できます。" },
    ],
    tips: [
      "閉店前の精肉・総菜は値引きシールが貼られることが多く狙い目です。",
      "ALDIは安いですが品揃えが独特。主食はALDI、足りないものをColes/Woolworthsで、という使い分けが効率的です。",
      "水道水は基本そのまま飲めます。マイボトル持参でペットボトル代を節約できます。",
    ],
    relatedSlugs: ["arrival-checklist", "housing-guide"],
    updatedAt: "2026-06-10",
    published: true,
  },
];
