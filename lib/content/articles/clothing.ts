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
    relatedSlugs: ["preparation-checklist", "farm-second-visa", "laundry-guide", "australia-clothing-seasons"],
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

  {
    id: "a273",
    title: "都市・季節別の服装ガイド｜暑さ・寒暖差・雨",
    slug: "australia-clothing-seasons",
    category: "clothing",
    hub: "daily-life",
    description:
      "オーストラリアは都市と季節で気候が大きく違います。北部の雨季、南部の四季、内陸の寒暖差、強い紫外線をふまえ、季節ごとに何を着ればよいかを都市別に解説します。",
    content: [
      "オーストラリアは南半球にあり、日本と季節が逆です（12〜2月が夏、6〜8月が冬）。さらに国土が広いため、同じ時期でも都市で気候が大きく異なります。大きく分けると、北部（ケアンズ・ダーウィン等）は熱帯で『乾季・雨季』の2季、南部（メルボルン・タスマニア等）は四季がはっきり、内陸（ファーム地帯など）は日中と朝晩の寒暖差が大きいのが特徴です。",
      "季節ごとの目安は次の通りです。夏（12〜2月）はTシャツ・短パンで過ごせますが、紫外線が非常に強いため帽子・サングラス・日焼け止めが必須です。秋（3〜5月）と春（9〜11月）は重ね着で調節します。冬（6〜8月）は南部ではジャケット・セーターが必要で、メルボルンやタスマニアはかなり冷えます。一方でケアンズなど北部は冬でも温暖で、雨季（おおむね11〜4月）にスコールや激しい雷雨があります。",
      "実務的なポイントは『重ね着（レイヤリング）』と『紫外線対策』です。特にメルボルンは「1日で四季」と言われるほど寒暖差が大きく、薄手を組み合わせて脱ぎ着できる服装が便利です。服は現地の店（Kmart・Target・Big W など）で安く買えるため、冬物も現地調達で十分です。ARPANSA（放射線防護当局）は主要都市のUVを常時計測しており、UVが3以上の時間帯は日焼け対策をするのが目安です（本記事の確認日: 2026-07-27）。",
    ],
    keyFacts: [
      { label: "季節", value: "日本と逆（12〜2月夏、6〜8月冬）" },
      { label: "北部（ケアンズ等）", value: "熱帯・乾季/雨季。雨季はおおむね11〜4月" },
      { label: "南部（メルボルン等）", value: "四季がはっきり。冬はコート必要" },
      { label: "内陸（ファーム地帯）", value: "朝晩と日中の寒暖差が大きい" },
      { label: "紫外線", value: "非常に強い。UV3以上で日焼け対策" },
    ],
    steps: [
      { title: "滞在都市の気候を調べる", description: "BOM（気象局）の気候平年値で、滞在予定地の月別気温・降水を確認します。" },
      { title: "重ね着を軸にする", description: "薄手を組み合わせて脱ぎ着で調節。寒暖差の大きい都市（メルボルン等）で特に有効です。" },
      { title: "紫外線対策を携帯", description: "帽子・サングラス・日焼け止めを年中携帯し、UV3以上の時間帯は露出を減らします。" },
      { title: "不足は現地調達", description: "Kmart・Target・Big W で安価に揃います。冬物も現地で購入できます。" },
    ],
    tips: [
      "メルボルンは1日の気温変化が激しいので、夏でも薄手の上着を常に持つと安心です。",
      "北部の雨季はスコールや洪水の可能性があるため、速乾素材・防水の上着・滑りにくい靴が役立ちます。",
      "ファームや野外の仕事なら、長袖・つば広帽・厚手の作業靴下で紫外線とケガから体を守ります。",
    ],
    faqs: [
      {
        question: "渡豪時に冬物は持っていくべき？",
        answer:
          "かさばる一枚と薄手の上着があれば十分です。メルボルン・タスマニアなど南部の冬は冷えますが、ジャケット・セーターは現地（Kmart等）で安く買えます。荷物を減らして現地調達するのが効率的です。",
      },
      {
        question: "日焼け止めはどのくらい必要？",
        answer:
          "オーストラリアの紫外線は日本よりはるかに強いです。ARPANSA の UV 指数が3以上の時間帯（多くの地域で日中）は、曇りでも日焼け止め・帽子・サングラスで対策してください。局地の最新 UV は ARPANSA のリアルタイム表示で確認できます。",
      },
    ],
    warnings: [
      "オーストラリアの紫外線は皮膚がんのリスクにも関わります。夏や UV の高い日は長時間の直射日光を避け、日焼け止め・帽子・衣類で肌を守ってください。局地の気候・UVは BOM・ARPANSA の公式情報で確認を。",
    ],
    verifiedAt: "2026-07-27",
    officialSources: [
      {
        label: "ARPANSA｜Ultraviolet radiation index（主要都市のUV常時計測）",
        url: "https://www.arpansa.gov.au/our-services/monitoring/ultraviolet-radiation-monitoring/ultraviolet-radiation-index",
        accessedAt: "2026-07-27",
      },
      {
        label: "Bureau of Meteorology｜Climate averages（都市別の月別気温・降水）",
        url: "http://www.bom.gov.au/climate/averages/",
        accessedAt: "2026-07-27",
      },
    ],
    relatedSlugs: [
      "clothing-guide",
      "laundry-guide",
      "preparation-checklist",
      "farm-second-visa",
    ],
    updatedAt: "2026-07-27",
    published: true,
  },

  {
    id: "a275",
    title: "Op Shopの使い方｜服・家具・寄付",
    slug: "op-shop-guide",
    category: "clothing",
    hub: "daily-life",
    description:
      "Op Shop（チャリティーの中古店）の使い方を解説。服・食器・家具・本などを安く揃えるコツ、不要品の寄付の仕方、ワーホリで役立つ実践テクニックをまとめました。",
    content: [
      "Op Shop（op は opportunity の略。charity shop / thrift store とも）は、慈善団体が運営する中古品ショップです。Vinnies（セント・ビンセント・ド・ポール協会）や Salvos（救世軍）などが有名で、寄付された服・食器・本・小型家具などが安く売られています。売上は慈善活動に使われるため、節約しながら社会貢献にもつながるのが魅力です。ワーホリでは短期滞在の生活用品を安く揃える手段として定番です。",
      "上手な使い方のコツは、①服は試着しサイズと傷み（シミ・ホット）を確認、②電気製品・寝具類は衛生・安全に注意（マットレスなどは中古を避けるのが無難）、③入荷は店ごと・日ごとに変わるのでこまめにのぞく、です。価格は店や地域、寄付品の状態で変わるため、値札を確認してから買いましょう。",
      "帰国時には、まだ使える不要品を Op Shop に寄付（donate）できます。多くの店に寄付受付の時間・場所があり、洗濯済みで使える状態のものを渡すのがマナーです（壊れたもの・汚れたものは受け付けてもらえないことがあります）。営業時間外に店先へ放置するのは迷惑になるため避け、受付方法は各団体の公式情報で確認してください（本記事の確認日: 2026-07-27）。",
    ],
    keyFacts: [
      { label: "Op Shop とは", value: "慈善団体が運営する中古品ショップ" },
      { label: "主な団体", value: "Vinnies・Salvos など" },
      { label: "扱い商品", value: "服・食器・本・小型家具など" },
      { label: "寄付", value: "洗濯済み・使える状態のものを受付時間に" },
      { label: "注意", value: "電気製品・寝具は衛生・安全に注意" },
    ],
    steps: [
      { title: "近くの店を探す", description: "Vinnies・Salvos などの公式サイトの店舗検索で、滞在地近くの Op Shop を探します。" },
      { title: "状態を確認して購入", description: "服は試着・サイズ・シミを確認。値札の価格を見てから買います。" },
      { title: "衛生・安全に注意", description: "電気製品は動作確認、マットレス等の寝具は中古を避けるのが無難です。" },
      { title: "不要品は寄付", description: "帰国時などは、使える状態の品を受付時間に寄付します。方法は各団体の公式で確認。" },
    ],
    tips: [
      "入荷は日々変わるので、良い品を探すなら複数回・複数店をのぞくのがコツです。",
      "高級住宅街の Op Shop は状態の良いブランド品が見つかることもあります。",
      "寄付はリサイクルにもなり、帰国時の大量の不要品処分に役立ちます。",
    ],
    faqs: [
      {
        question: "Op Shop の商品は安全ですか？",
        answer:
          "多くは寄付品を選別・整理してから並べています。ただし中古のため、服は洗濯してから使い、電気製品は動作確認、マットレスなど衛生面が気になるものは新品を検討するなど、商品に応じて判断してください。",
      },
      {
        question: "不要になったものはどう寄付しますか？",
        answer:
          "洗濯済みで実際に使える状態のものを、店の受付時間に持ち込みます。壊れたもの・汚れたものは受け付けてもらえないことがあります。営業時間外に店先へ放置するのは避け、受付方法を各団体の公式で確認してください。",
      },
    ],
    warnings: [
      "営業時間外の店先への不要品放置は不法投棄扱いになることがあります。寄付は必ず受付時間・方法に従い、使えないものは寄付せず適切に処分してください。",
    ],
    verifiedAt: "2026-07-27",
    officialSources: [
      {
        label: "St Vincent de Paul Society (Vinnies)｜公式（Op Shopの運営・寄付）",
        url: "https://www.vinnies.org.au/",
        accessedAt: "2026-07-27",
      },
    ],
    relatedSlugs: [
      "buy-furniture-household-items",
      "clothing-guide",
      "housing-guide",
      "grocery-saving-tips",
    ],
    updatedAt: "2026-07-27",
    published: true,
  },
];
