import type { Article } from "./types";

export const clothingArticles: Article[] = [
  {
    id: "a23",
    title: "服装・気候ガイド｜都市別の気候と持っていく服",
    slug: "clothing-guide",
    category: "clothing",
    description:
      "南半球で日本と季節が逆のオーストラリア。都市ごとの気候差と、ワーホリで本当に必要な服装・持ち物を解説します。",
    content: [
      "オーストラリアは南半球にあり、日本と季節が逆です（12〜2月が夏、6〜8月が冬）。さらに国土が広いため、同じ時期でも北部（ケアンズ等）は熱帯、南部（メルボルン等）は四季がはっきり、と都市によって気候が大きく異なります。",
      "服は現地のスーパー（Kmart、Targetなど）でも安く買えるので、持ち物は最小限にして現地調達するのが賢い方法です。重視すべきは紫外線対策と、朝晩の寒暖差への対応です。",
    ],
    keyFacts: [
      { label: "季節", value: "日本と逆（12〜2月が夏、6〜8月が冬）" },
      { label: "紫外線", value: "非常に強い。サングラス・日焼け止め必須" },
      { label: "メルボルン", value: "『1日で四季』と言われるほど寒暖差が大きい" },
      { label: "ケアンズ・ダーウィン", value: "熱帯。1年を通じて暑く、雨季がある" },
    ],
    steps: [
      { title: "渡航都市の気候を調べる", description: "同じ時期でも都市で大きく違うため、滞在予定地の月別気温を確認します。" },
      { title: "重ね着できる服を中心に", description: "薄手を組み合わせて調整できるレイヤリングが万能です。" },
      { title: "足りない分は現地調達", description: "Kmart・Target・Big Wで安価に揃います。冬物も現地で買えます。" },
    ],
    tips: [
      "サングラス・帽子・日焼け止めは必須級。オーストラリアの紫外線は日本よりはるかに強烈です。",
      "メルボルンは1日のうちで気温が乱高下するので、薄手のジャケットを常に持つと安心です。",
      "ファームで働くなら、長袖・帽子・厚手の作業用靴下・防水の靴があると体を守れます。",
    ],
    relatedSlugs: ["preparation-checklist", "farm-second-visa", "laundry-guide"],
    updatedAt: "2026-06-10",
    published: true,
  },

  {
    id: "a272",
    title: "洗濯ガイド｜シェアハウス・コインランドリーの使い方",
    slug: "laundry-guide",
    category: "clothing",
    hub: "daily-life",
    description:
      "オーストラリアでの洗濯の基本。シェアハウスの共用洗濯機、コインランドリー（laundromat）の使い方、洗剤の選び方、ケアラベル（洗濯表示）の読み方を、日本との違いをふまえて解説します。",
    content: [
      "オーストラリアの洗濯は、日本と大きくは変わりませんが、住まいのタイプで使い方が違います。シェアハウスでは共用の洗濯機（washing machine）を使い、乾燥機（dryer）付きの家も多いです。自室に洗濯機がない賃貸やバックパッカーでは、街のコインランドリー『laundromat（launderette）』を利用します。使い方は、洗濯物と洗剤を入れて硬貨またはアプリで支払い、洗濯→乾燥機、という流れです。",
      "洗剤は現地スーパー（Woolworths、Coles、Kmart等）で買えます。粉末（powder）・液体（liquid）・ジェルボール（capsules/pods）があり、初めてなら少量パックの液体が使いやすいです。柔軟剤は fabric softener、漂白剤は bleach。ドラム式（front loader）が主流なので、泡立ちを抑えた『front loader対応』の洗剤を選ぶと安心です。乾燥機は熱に弱い服や縮みやすい素材に注意し、心配なものは室内干しにします。",
      "服を傷めないコツは、ケアラベル（care label＝洗濯表示）を読むことです。オーストラリアではケアラベル表示が消費者保護のルールで求められており、水温・乾燥機の可否・アイロンなどが記号や英語で書かれています。『machine wash cold』『do not tumble dry』『hand wash』などの表記を確認して洗い方を決めましょう（本記事の確認日: 2026-07-27）。",
    ],
    keyFacts: [
      { label: "シェアハウス", value: "共用洗濯機・乾燥機を使う（ルール確認）" },
      { label: "コインランドリー", value: "laundromat。硬貨/アプリで支払い" },
      { label: "洗剤の入手", value: "Woolworths・Coles・Kmart等で購入" },
      { label: "洗濯機の主流", value: "ドラム式（front loader）" },
      { label: "ケアラベル", value: "表示が義務。machine wash cold 等を確認" },
    ],
    steps: [
      { title: "洗い方を決める", description: "ケアラベル（洗濯表示）で水温・乾燥機可否を確認します。" },
      { title: "洗剤を用意", description: "初めては少量の液体洗剤が無難。ドラム式には front loader 対応を選びます。" },
      { title: "洗濯機を回す", description: "シェアハウスは共用機、なければコインランドリーへ。支払い方法（硬貨/アプリ）を確認します。" },
      { title: "乾かす", description: "乾燥機か室内干し・屋外干し。縮みやすい服は乾燥機を避けます。" },
    ],
    tips: [
      "共用洗濯機は使ったら早めに取り出すのがマナー。次の人が待っています。",
      "コインランドリーは両替機やアプリ決済がある店も。混む時間帯（週末夜）を避けると待ちません。",
      "屋外干しができる家なら、強い日差しを活かして乾燥機代を節約できます（色物は色あせに注意）。",
    ],
    faqs: [
      {
        question: "洗濯機がない部屋に住む場合はどうすればいい？",
        answer:
          "街のコインランドリー『laundromat』を使います。洗濯物と洗剤を持って行き、洗濯機に入れて硬貨またはアプリで支払い、その後乾燥機にかけます。1回あたりの目安費用は店舗や地域で異なるため、店頭の料金表示を確認してください。",
      },
      {
        question: "ケアラベル（洗濯表示）が英語で読めません。",
        answer:
          "よく使う表記だけ覚えれば十分です。『machine wash cold』は冷水で洗濯機OK、『hand wash』は手洗い、『do not tumble dry』は乾燥機不可、『warm/cool iron』はアイロン温度の指定です。迷ったら冷水・乾燥機なしにすると失敗しにくいです。",
      },
    ],
    warnings: [
      "乾燥機は縮みや色落ちの原因になります。ウール・化繊の一部・お気に入りの服は、ケアラベルを確認して乾燥機を避け、室内干しにしてください。",
    ],
    verifiedAt: "2026-07-27",
    officialSources: [
      {
        label: "ACCC Product Safety｜Care labelling of clothing and textile products（洗濯表示の義務）",
        url: "https://www.productsafety.gov.au/products/clothing-accessories-footwear/care-labelling-of-clothing-textiles",
        accessedAt: "2026-07-27",
      },
    ],
    relatedSlugs: [
      "clothing-guide",
      "share-house-finding",
      "housing-guide",
      "food-storage-share-house",
    ],
    updatedAt: "2026-07-27",
    published: true,
  },
];
