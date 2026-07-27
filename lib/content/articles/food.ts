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
    relatedSlugs: [
      "supermarket-comparison",
      "grocery-saving-tips",
      "cheap-meal-prep",
      "asian-japanese-groceries",
      "arrival-checklist",
      "housing-guide",
    ],
    updatedAt: "2026-07-27",
    published: true,
  },

  {
    id: "a263",
    title: "Coles・Woolworths・ALDI比較｜安く買うコツ",
    slug: "supermarket-comparison",
    category: "food",
    hub: "daily-life",
    description:
      "オーストラリアの3大スーパー Coles・Woolworths・ALDI を価格・会員制度・店舗網で比較。どこで何を買えば食費を抑えられるかを解説します。",
    content: [
      "結論から言うと、最も安いのは ALDI（アルディ）です。プライベートブランド中心で品数を絞ることで低価格を実現しています。ただし ALDI は取り扱い品目が少なく、置いていない商品も多いため、『主食・日用品は ALDI、足りないものを Coles か Woolworths で買い足す』という使い分けが王道です。",
      "Coles（コールス）と Woolworths（ウールワース／通称ウーリーズ）は全国展開の2大チェーンで、品揃え・価格帯はほぼ同等です。両社とも毎週入れ替わる特売（Specials）を出すので、その週に安い方で買うのが基本になります。無料の会員プログラム（Coles＝Flybuys、Woolworths＝Everyday Rewards）に登録するとポイントが貯まり、会員限定価格も使えます。",
      "地方（regional）では店舗網が重要です。ALDI は都市部・沿岸部中心で、ノーザンテリトリー（NT）には店舗がなく、地方の小さな町にもありません。小さな町では IGA（地域密着型スーパー）だけ、というケースも多く、その場合は割高になりがちです。渡航先の町にどのスーパーがあるかを事前に地図アプリで確認しておきましょう。（掲載価格・特売は変動します。本記事の確認日: 2026-07-27）",
    ],
    keyFacts: [
      { label: "3大スーパー", value: "Coles / Woolworths（全国）・ALDI（都市・沿岸中心）" },
      { label: "最安の傾向", value: "ALDI（品目は少ない）" },
      { label: "会員（無料）", value: "Coles=Flybuys / Woolworths=Everyday Rewards" },
      { label: "ALDIの会員", value: "なし（そのまま安い）" },
      { label: "地方の選択肢", value: "IGA が中心の町も多い（やや割高）" },
    ],
    steps: [
      { title: "会員に登録", description: "Flybuys（Coles）と Everyday Rewards（Woolworths）に無料登録。アプリでデジタル会員証を提示するとポイントが貯まり、会員価格も使えます。" },
      { title: "週の特売をチェック", description: "各社アプリ・サイトの『Specials／Half Price』を見て、その週に安い店を選びます。" },
      { title: "主食はALDIでまとめ買い", description: "米・パスタ・卵・野菜・冷凍品など定番は ALDI が安いことが多いです。" },
      { title: "不足分を補充", description: "ALDIに無いブランド品・アジア食材などを Coles/Woolworths や専門店で買い足します。" },
    ],
    tips: [
      "ALDI はレジが非常に速く、袋詰めは会計後の台で自分で行います。エコバッグ持参が基本です（多くの州でレジ袋は有料・廃止）。",
      "生鮮（野菜・果物・肉）は Coles/Woolworths でも比較的安く、閉店前は値引きシール（markdown）が狙い目です。",
      "同じ商品でも単価（per 100g / per kg）で比べると割安サイズが分かります。棚札に小さく表示されています。",
    ],
    faqs: [
      {
        question: "結局どこが一番安いですか？",
        answer:
          "総じて ALDI が最安ですが、品目が限られます。Coles と Woolworths はその週の特売次第でどちらが安いか変わります。『ALDI 中心＋特売で Coles/Woolworths を併用』が最も食費を抑えやすい買い方です。",
      },
      {
        question: "地方の町にスーパーが無い場合は？",
        answer:
          "小さな町では IGA が中心のことが多く、価格はやや高めです。まとめ買いで大きな町の Coles/Woolworths/ALDI に行く人が多いです。渡航前に町の店舗を地図アプリで確認しておきましょう。",
      },
    ],
    warnings: [
      "掲載価格・特売・会員特典は頻繁に変わります。金額は目安として扱い、最新は各社アプリ・店頭で確認してください。",
    ],
    verifiedAt: "2026-07-27",
    officialSources: [
      {
        label: "Everyday Rewards（Woolworths 公式・無料会員プログラム）",
        url: "https://www.everyday.com.au/rewards",
        accessedAt: "2026-07-27",
      },
      {
        label: "Flybuys（Coles 公式・無料会員プログラム）",
        url: "https://www.flybuys.com.au/",
        accessedAt: "2026-07-27",
      },
      {
        label: "ALDI Australia（公式・店舗検索と取扱商品）",
        url: "https://www.aldi.com.au/",
        accessedAt: "2026-07-27",
      },
    ],
    relatedSlugs: [
      "grocery-saving-tips",
      "cheap-meal-prep",
      "asian-japanese-groceries",
      "food-guide",
      "arrival-checklist",
    ],
    updatedAt: "2026-07-27",
    published: true,
  },

  {
    id: "a264",
    title: "オーストラリアの食費を節約する方法｜特売・冷凍・自炊",
    slug: "grocery-saving-tips",
    category: "food",
    hub: "daily-life",
    description:
      "物価の高いオーストラリアで食費を抑える実践テク。特売サイクル・値引きシール・冷凍保存・自炊ルーティンで週予算をコントロールする方法。",
    content: [
      "食費を下げる一番の近道は『自炊＋計画的な買い物』です。外食は高く、カフェのランチでも高額になりがちなので、自炊に切り替えるだけで支出が大きく変わります。自炊中心なら1人あたり週の食費をかなり抑えられます（金額は生活スタイル・地域で変動。本記事の確認日: 2026-07-27）。",
      "節約の柱は次の4つです。①特売（Specials／Half Price）を軸に献立を決める、②閉店前の値引きシール（markdown）を狙う、③安いときに買って冷凍する、④ALDI や IGA の特売・自社ブランドを活用する。特売は毎週入れ替わるので、Coles/Woolworths のアプリで今週安い食材を先に見てから献立を決めると無駄が出ません。",
      "冷凍は最大の武器です。肉・パン・作り置きは冷凍でき、安いときのまとめ買いが可能になります。ただし食品の安全のため、調理後は速やかに冷まして冷蔵・冷凍し、冷蔵庫は5℃以下を保つのが基本です（詳細は下記公式ソース参照）。",
    ],
    keyFacts: [
      { label: "最大の節約", value: "外食を減らし自炊＋作り置き" },
      { label: "買い物の軸", value: "特売（Specials/Half Price）から献立を決める" },
      { label: "値引き", value: "閉店前の markdown シール" },
      { label: "保存", value: "冷凍で安いときにまとめ買い（冷蔵は5℃以下）" },
      { label: "安い店", value: "ALDI・IGAの特売・自社ブランド" },
    ],
    steps: [
      { title: "週予算を決める", description: "1週間の食費上限を決め、現金または専用アプリで管理します。ASICのMoneysmartに無料の家計テンプレートがあります。" },
      { title: "特売を先に確認", description: "Coles/Woolworthsアプリで今週の Half Price を確認し、それを中心に献立を組みます。" },
      { title: "まとめ買い＋冷凍", description: "肉・パンなどは安いときに買って小分け冷凍。使う分だけ解凍します。" },
      { title: "作り置き・弁当", description: "週末にまとめて調理し、ランチは持参。外食回数を減らします。" },
    ],
    tips: [
      "野菜は旬（in season）のものが安く栄養も良いです。傷みやすいものは早めに使う献立に。",
      "肉は業務用サイズや値引き品を買って小分け冷凍するとコスパが上がります。",
      "水道水は多くの地域でそのまま飲めます。マイボトルでペットボトル代を節約できます（地域差・災害時は要確認）。",
    ],
    faqs: [
      {
        question: "節約と栄養は両立できますか？",
        answer:
          "できます。旬の野菜、卵、豆・缶詰、鶏むね肉、冷凍野菜などは安くて栄養価も高い食材です。特売を軸にしつつ、これらを常備すると安く健康的に食べられます。",
      },
      {
        question: "自炊が苦手でも節約できますか？",
        answer:
          "簡単な作り置き（カレー・炒め物・パスタなど）を週末にまとめて作るだけでも外食より大幅に安くなります。作り置きレシピは関連記事を参照してください。",
      },
    ],
    warnings: [
      "特売価格・食材の相場は変動します。金額は目安として扱い、最新はアプリ・店頭で確認してください。",
    ],
    verifiedAt: "2026-07-27",
    officialSources: [
      {
        label: "Moneysmart（ASIC）｜Simple budget（無料の家計管理テンプレート）",
        url: "https://moneysmart.gov.au/budgeting/simple-budget",
        accessedAt: "2026-07-27",
      },
      {
        label: "Food Standards Australia New Zealand｜Food safety basics（保存・冷凍・冷蔵の基本）",
        url: "https://www.foodstandards.gov.au/consumer/prevention-of-foodborne-illness/food-safety-basics",
        accessedAt: "2026-07-27",
      },
    ],
    relatedSlugs: [
      "supermarket-comparison",
      "cheap-meal-prep",
      "asian-japanese-groceries",
      "food-guide",
      "working-holiday-budget",
    ],
    updatedAt: "2026-07-27",
    published: true,
  },

  {
    id: "a265",
    title: "日本食材・アジア食材を買える場所と代用品",
    slug: "asian-japanese-groceries",
    category: "food",
    hub: "daily-life",
    description:
      "醤油・味噌・米・出汁など日本食材やアジア食材を買える場所を都市別に解説。手に入りにくいときの代用品と、日本から食品を持ち込む際の注意も紹介します。",
    content: [
      "日本食材・アジア食材は、都市部なら『アジア系スーパー（Asian grocery）』で一通り揃います。醤油・味噌・米・麺・海苔・出汁・カレールー・冷凍食品などが手に入り、日系スーパーがある都市もあります。まずは近くのアジア系スーパーを地図アプリで『Asian grocery』『Japanese grocery』と検索してみましょう。",
      "大手スーパー（Coles・Woolworths）にも『World Foods／Asian』の棚があり、醤油・寿司用米・のり・即席麺・調味料などの定番は買えます。品揃えはアジア系専門店に劣りますが、日常使いには十分です。オンライン通販（各アジア食材ECや大手のオンライン食料品）も選択肢で、地方在住なら通販が現実的です。",
      "地域差は大きく、シドニー・メルボルン・ブリスベンなどの大都市はチャイナタウンや日系・韓国系・アジア系の店が充実しています。一方、地方の小さな町では専門店が無く、Coles/Woolworths の棚か通販に頼ることになります。渡航先に何があるか事前に確認しておくと安心です。",
    ],
    keyFacts: [
      { label: "一番揃う場所", value: "アジア系スーパー（都市部）" },
      { label: "大手スーパー", value: "World Foods/Asian 棚で定番は入手可" },
      { label: "地方", value: "専門店が少なく通販が現実的" },
      { label: "日系スーパー", value: "シドニー・メルボルン等の大都市に点在" },
      { label: "持ち込み", value: "食品は要申告・品目により持込制限あり" },
    ],
    steps: [
      { title: "近くの店を検索", description: "地図アプリで『Asian grocery』『Japanese grocery』を検索し、営業時間と品揃えを確認します。" },
      { title: "大手スーパーの棚も確認", description: "Coles/Woolworths の World Foods/Asian 棚で定番調味料・米・麺をチェック。" },
      { title: "通販を活用", description: "地方や特定商品はオンライン通販が便利。送料・最低注文額を確認します。" },
      { title: "代用品を知る", description: "手に入らないときは代用品（下記）で対応します。" },
    ],
    tips: [
      "代用例: みりん→砂糖＋酒/白ワイン、料理酒→ドライシェリーや白ワイン、だし→昆布＋かつお節や粉末だし、片栗粉→corn flour（コーンスターチ）。",
      "米は『sushi rice』『medium/short grain』表記の日本米・カリフォルニア米が扱いやすいです。",
      "韓国系・中国系スーパーにも日本食材が置かれていることが多く、選択肢が広がります。",
    ],
    faqs: [
      {
        question: "日本から食品を持ち込めますか？",
        answer:
          "持ち込み自体は可能な品目もありますが、オーストラリアは検疫（biosecurity）が厳格で、肉製品・一部の乳製品・種子・生鮮などは持込制限・禁止があります。持ち込む食品はすべて入国カードで正直に申告してください。申告漏れは高額の罰金対象です。最新の可否は農業・水産・林業省（DAFF）の公式で確認を。",
      },
      {
        question: "地方でも日本食材は手に入りますか？",
        answer:
          "大都市ほど選択肢はありませんが、大手スーパーの棚と通販でかなりの部分をカバーできます。よく使う調味料は大きな町に出たときにまとめ買いする人が多いです。",
      },
    ],
    verifiedAt: "2026-07-27",
    officialSources: [
      {
        label: "Department of Agriculture, Fisheries and Forestry｜Bringing or mailing goods to Australia（食品の持込・郵送ルール）",
        url: "https://www.agriculture.gov.au/biosecurity-trade/travelling/bringing-mailing-goods",
        accessedAt: "2026-07-27",
      },
    ],
    relatedSlugs: [
      "supermarket-comparison",
      "grocery-saving-tips",
      "cheap-meal-prep",
      "food-guide",
      "medication-customs",
    ],
    updatedAt: "2026-07-27",
    published: true,
  },

  {
    id: "a266",
    title: "ワーホリ向け安い作り置きレシピと1週間献立",
    slug: "cheap-meal-prep",
    category: "food",
    hub: "daily-life",
    description:
      "シェアハウスの共有キッチンでも作りやすい、安くて日持ちする作り置きレシピと1週間の献立例。食品を安全に保存・再加熱するコツもまとめました。",
    content: [
      "作り置き（meal prep）は、ワーホリの食費と時間を同時に節約できる最強の方法です。週末に数品まとめて作り、平日は詰めるだけ・温めるだけにすれば、外食も減り、忙しい仕事の日も自炊を続けられます。コツは『安い定番食材』『大鍋で一度に作れる料理』『冷蔵・冷凍で日持ちする料理』を選ぶことです。",
      "安く日持ちする定番おかずの例: カレー、ミートソース／ボロネーゼ、鶏むね肉の照り焼き・から揚げ（下味冷凍）、野菜炒め、スープ、炊き込みご飯、オムレツやゆで卵。米・パスタ・卵・鶏むね肉・冷凍野菜・缶詰（豆・トマト）はコスパが良く、共有キッチンでも作りやすい食材です。",
      "1週間の献立例: 月〜火はカレー（大鍋で作り冷蔵、後半は冷凍分）、水〜木はミートソースでパスタとご飯、金は炒め物、というように『2〜3日で食べ切る＋残りは冷凍』のローテーションが無理なく続きます。食品の安全のため、作った料理は速やかに冷まして冷蔵（5℃以下）または冷凍し、食べる前にしっかり再加熱します（詳細は下記公式ソース参照。本記事の確認日: 2026-07-27）。",
    ],
    keyFacts: [
      { label: "安い主役食材", value: "米・パスタ・卵・鶏むね肉・冷凍野菜・豆/トマト缶" },
      { label: "作り置きの定番", value: "カレー・ミートソース・照り焼き・スープ" },
      { label: "保存の目安", value: "冷蔵は数日で食べ切り、残りは冷凍" },
      { label: "安全温度", value: "冷蔵5℃以下・再加熱はしっかり熱く" },
      { label: "共有キッチン", value: "一口コンロでも作れる料理を選ぶ" },
    ],
    steps: [
      { title: "週末に食材を購入", description: "特売を軸に、日持ちする定番食材をまとめ買いします。" },
      { title: "大鍋で数品まとめて調理", description: "カレー・ミートソースなど大量調理できる料理を2〜3品作ります。" },
      { title: "速やかに冷まして保存", description: "粗熱を取り、清潔な容器で冷蔵（5℃以下）または小分け冷凍します。名前・日付を書くとシェアハウスでも安心。" },
      { title: "食べる前に再加熱", description: "冷蔵・冷凍分は中心まで熱々に再加熱してから食べます。再加熱は1回まで。" },
    ],
    tips: [
      "下味冷凍（鶏むね肉に調味料をもみ込んで冷凍）は、解凍して焼くだけで一品になり便利です。",
      "冷凍ご飯は炊きたてを小分けにして冷ますと、レンジで温めても美味しく食べられます。",
      "作り置きは容器をそろえると冷蔵庫内が整理しやすく、シェアハウスでの取り違えも防げます。",
    ],
    faqs: [
      {
        question: "作り置きは何日もちますか？",
        answer:
          "料理や保存状態で変わりますが、冷蔵は数日以内に食べ切るのが安全です。長く保存したい分は早めに冷凍しましょう。少しでも匂い・見た目・味に違和感があれば食べないでください。安全な保存・再加熱の基本は FSANZ の公式を確認してください。",
      },
      {
        question: "共有キッチンでも作れますか？",
        answer:
          "作れます。一口コンロと鍋1つでできるカレー・スープ・パスタ・炒め物を選べば十分です。混雑する時間帯を避け、使用後の清掃を徹底するとトラブルを防げます。",
      },
    ],
    warnings: [
      "調理後は2時間以内を目安に冷蔵・冷凍し、常温放置を避けてください。再加熱は1回までにし、少しでも傷みが疑われるものは廃棄してください。",
    ],
    verifiedAt: "2026-07-27",
    officialSources: [
      {
        label: "Food Standards Australia New Zealand｜Food safety basics（保存・冷却・再加熱の基本）",
        url: "https://www.foodstandards.gov.au/consumer/prevention-of-foodborne-illness/food-safety-basics",
        accessedAt: "2026-07-27",
      },
    ],
    relatedSlugs: [
      "grocery-saving-tips",
      "supermarket-comparison",
      "asian-japanese-groceries",
      "food-guide",
      "working-holiday-budget",
    ],
    updatedAt: "2026-07-27",
    published: true,
  },

  {
    id: "a267",
    title: "オーストラリアのオーブン・コンロの使い方",
    slug: "australian-oven-guide",
    category: "food",
    hub: "daily-life",
    description:
      "オーストラリアのオーブン・コンロの使い方を解説。摂氏（℃）表示、ファン式（fan-forced）の記号、グリル（grill）、ガス・電気・IHコンロの違いと安全な使い方。",
    content: [
      "オーストラリアのオーブンは温度が摂氏（℃）表示で、レシピも℃基準です。日本と同じ感覚で使えますが、ダイヤルやパネルの『記号』の意味を知っておくと失敗しません。特に重要なのが、ファン式（fan-forced、扇風機マーク）と通常式（conventional、上下の線マーク）の違い、そして『grill（グリル）』の使い方です。",
      "ファン式は庫内をファンで対流させて均一に速く焼くモードで、レシピが『fan-forced』でない場合は表示温度より約20℃低く設定するのが目安です（例: 通常180℃＝ファン約160℃）。『grill』は日本の『魚焼きグリル』ではなく、上部ヒーターで表面を強く焼く機能（＝broiler）で、焦げ目付けやトーストに使います。grill 使用中はオーブンのドアを少し開ける機種もあるため、取扱説明書で確認してください。",
      "コンロ（cooktop）はガス・電気（ラジエント）・IH（induction）があります。IH は専用の磁性鍋（鍋底に磁石が付くもの）が必要で、対応していない鍋は使えません。シェアハウスでは機種がまちまちなので、入居時にコンロの種類と使い方、換気扇（rangehood）の操作を確認しておきましょう。（機種により操作は異なります。本記事の確認日: 2026-07-27）",
    ],
    keyFacts: [
      { label: "温度表示", value: "摂氏（℃）。レシピも℃基準" },
      { label: "ファン式", value: "fan-forced（扇風機マーク）。約20℃低めが目安" },
      { label: "grill", value: "上火の broiler。焦げ目・トースト用" },
      { label: "コンロ種類", value: "ガス / 電気 / IH（induction）" },
      { label: "IHの注意", value: "磁性の対応鍋が必要" },
    ],
    steps: [
      { title: "モードを選ぶ", description: "扇風機マーク=ファン式、上下線マーク=通常式、上向き線=grill。レシピに合わせて選びます。" },
      { title: "温度を設定", description: "レシピが通常式基準でファン式を使うなら約20℃下げます。予熱（preheat）してから食材を入れます。" },
      { title: "コンロを確認", description: "IHなら磁性の対応鍋を使用。ガスは点火と火加減、換気扇を確認します。" },
      { title: "使用後の安全確認", description: "コンロ・オーブンの電源/ガスを必ず切り、余熱に注意します。" },
    ],
    tips: [
      "温度が合わずに焦げる/生焼けになるときは、庫内用オーブン温度計を置くと機種のクセが分かります（安い機種は表示と実温度がずれがち）。",
      "grill は一気に焦げます。目を離さず、こまめに確認してください。",
      "ガスの臭いがしたら火を使わず、ガス元栓を閉めて換気し、機種の指示に従って対応してください。",
    ],
    faqs: [
      {
        question: "『fan-forced』とは何ですか？",
        answer:
          "庫内のファンで熱を対流させて均一に速く焼くモードです。レシピが通常式（conventional）基準の場合、ファン式では表示温度より約20℃低く設定するのが一般的な目安です。",
      },
      {
        question: "grill でトーストは焼けますか？",
        answer:
          "焼けます。grill は上部の強い熱で表面を焼く機能なので、パンを天板にのせて短時間で焼けます。ただし一気に焦げるので目を離さないでください。",
      },
    ],
    warnings: [
      "ガス漏れの疑い（臭い）があるときは火気・電気スイッチを使わず、元栓を閉め換気し、必要に応じて大家・ガス会社・緊急時は000に連絡してください。機種ごとの操作は取扱説明書を優先してください。",
    ],
    verifiedAt: "2026-07-27",
    officialSources: [
      {
        label: "Energy Safe Victoria｜Gas safety in the home（家庭のガス機器の安全・ガス漏れ時の対応）",
        url: "https://www.esv.vic.gov.au/gas-safety/gas-safety-in-the-home/",
        accessedAt: "2026-07-27",
      },
    ],
    relatedSlugs: [
      "cheap-meal-prep",
      "grocery-saving-tips",
      "food-guide",
      "housing-guide",
    ],
    updatedAt: "2026-07-27",
    published: true,
  },
];
