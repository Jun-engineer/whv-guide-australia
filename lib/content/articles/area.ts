import type { Article } from "./types";

export const areaArticles: Article[] = [
  {
    id: "a24",
    title: "都市の選び方｜主要エリアの特徴と向いている人",
    slug: "area-overview",
    category: "area",
    description:
      "シドニー・メルボルン・ブリスベン・パース・ケアンズ・ゴールドコースト。生活費・仕事・気候の違いを比較し、自分に合う都市を選ぶための総合ガイド。",
    content: [
      "どの都市を拠点にするかで、ワーホリの体験は大きく変わります。仕事の多さ・物価・気候・日本人コミュニティの規模はそれぞれ異なるため、自分の優先順位（稼ぎたい/英語環境/のんびり/ビーチ）で選ぶのがおすすめです。",
      "迷ったら、まず仕事が多い大都市（シドニー・メルボルン・ブリスベン）でスタートし、慣れてから地方やファームに移動する人が多いです。各都市の詳細は個別のエリアガイドを参照してください。",
    ],
    keyFacts: [
      { label: "仕事が多い", value: "シドニー・メルボルン・ブリスベン" },
      { label: "物価が高め", value: "シドニー・メルボルン" },
      { label: "温暖で過ごしやすい", value: "ブリスベン・ゴールドコースト・パース" },
      { label: "ファーム拠点に便利", value: "ケアンズ・地方都市" },
    ],
    steps: [
      { title: "優先順位を決める", description: "稼ぎ・英語環境・気候・コミュニティのどれを重視するか整理します。" },
      { title: "拠点都市を選ぶ", description: "最初は仕事の多い大都市が無難。生活に慣れてから移動を検討します。" },
      { title: "移動も前提に計画", description: "セカンドビザのファームや旅行で都市間移動するワーホリは多いです。" },
    ],
    tips: [
      "都市間の移動は格安航空（Jetstar、Virgin等）が便利。早割で安く移動できます。",
      "シェアハウスは都市の中心部ほど高くなります。郊外＋公共交通の組み合わせも検討しましょう。",
    ],
    relatedSlugs: ["area-sydney", "area-melbourne", "area-brisbane", "housing-guide"],
    updatedAt: "2026-06-10",
    published: true,
  },

  {
    id: "a25",
    title: "シドニー エリアガイド｜仕事・家賃・暮らしの実情",
    slug: "area-sydney",
    category: "area",
    description:
      "オーストラリア最大都市シドニー。仕事の多さと家賃の高さ、住みやすいエリア、交通事情まで、拠点選びに役立つ情報をまとめました。",
    content: [
      "シドニーはオーストラリア最大の都市で、仕事の数・種類ともに最多。ジャパレスからローカルのカフェ・小売・オフィスワークまで選択肢が豊富で、英語環境も日本人コミュニティも充実しています。その分、家賃と物価は国内でもっとも高い水準です。",
      "シティ（CBD）周辺は家賃が高いため、ワーホリはInner West（Newtown等）や、電車・バスでアクセスしやすい郊外にシェアハウスを借りる人が多いです。ビーチが好きならBondiやCoogee周辺も人気です。",
    ],
    keyFacts: [
      { label: "特徴", value: "仕事が最多・物価最高・都会的" },
      { label: "家賃目安(シェア)", value: "週180〜350 AUD（エリア・個室/相部屋で変動）" },
      { label: "交通", value: "Opalカードで電車・バス・フェリーが利用可" },
      { label: "向いている人", value: "稼ぎたい・選択肢を広く持ちたい人" },
    ],
    steps: [
      { title: "エリアを絞る", description: "予算と通勤を考え、Inner Westや郊外＋電車通勤などを検討します。" },
      { title: "Opalカードを用意", description: "交通はOpalのタッチ決済（対応クレカ/スマホでも可）が便利です。" },
      { title: "仕事を探す", description: "求人数が多いので、ジャパレス→ローカルへのステップアップもしやすいです。" },
    ],
    tips: [
      "週末のOpalは運賃上限があり、観光や遠出がしやすいです。",
      "家賃が高い分、時給の高いローカルジョブを狙うと収支が安定します。",
    ],
    relatedSlugs: ["area-overview", "housing-guide", "jobs-guide"],
    updatedAt: "2026-06-10",
    published: true,
  },

  {
    id: "a26",
    title: "メルボルン エリアガイド｜カフェ文化と暮らしやすさ",
    slug: "area-melbourne",
    category: "area",
    description:
      "『世界一住みやすい都市』に何度も選ばれたメルボルン。カフェ文化、トラム、気候、仕事事情まで、拠点選びのポイントを解説します。",
    content: [
      "メルボルンは芸術・カフェ文化で知られる洗練された都市。バリスタやカフェの仕事が豊富で、ローカルのホスピタリティ経験を積みたい人に人気です。市内中心部はトラム（路面電車）が発達し、フリーゾーンでは無料で乗れます。",
      "気候は四季がはっきりし、『1日で四季がある』と言われるほど寒暖差が大きいのが特徴。シドニーよりやや家賃が落ち着いていることもあり、長期で腰を据えたいワーホリに向いています。",
    ],
    keyFacts: [
      { label: "特徴", value: "カフェ文化・芸術・住みやすさ" },
      { label: "家賃目安(シェア)", value: "週160〜320 AUD" },
      { label: "交通", value: "mykiカードでトラム・電車・バス。市内に無料トラムゾーン" },
      { label: "向いている人", value: "カフェ就労・落ち着いた都市生活を求める人" },
    ],
    steps: [
      { title: "mykiを用意", description: "メルボルンの公共交通はmykiカードで利用します。" },
      { title: "バリスタスキルを磨く", description: "カフェ就労が多いので、コーヒー経験があると有利です。" },
      { title: "防寒対策", description: "寒暖差が大きいので重ね着できる服装を準備します。" },
    ],
    tips: [
      "市内中心の『Free Tram Zone』内はトラムが無料。生活圏に入れると交通費を抑えられます。",
      "気温が1日で大きく変わるため、上着は年間を通して手元に置くと安心です。",
    ],
    relatedSlugs: ["area-overview", "clothing-guide", "jobs-guide"],
    updatedAt: "2026-06-10",
    published: true,
  },

  {
    id: "a27",
    title: "ブリスベン エリアガイド｜温暖で暮らしやすいクイーンズランドの州都",
    slug: "area-brisbane",
    category: "area",
    hub: "area",
    description:
      "クイーンズランド州の州都ブリスベン。温暖な気候と大都市よりゆとりのある暮らしやすさ、仕事・交通・拠点選びのポイントをワーホリ目線でまとめました。",
    content: [
      "ブリスベンは『大都市の便利さ』と『温暖で落ち着いた暮らし』のバランスがよく、初めてのワーホリの拠点として人気です。クイーンズランド州の州都で、シドニー・メルボルンに次ぐ規模。ジャパレスからローカルのカフェ・小売・オフィスワークまで仕事の選択肢があり、亜熱帯気候で冬も過ごしやすいのが魅力です。",
      "公共交通は電車・バス・フェリー（CityCat）が使え、Translink の go card（タッチ決済対応）で乗車します。CBD 周辺は家賃が高めのため、電車やバスでつながる郊外にシェアハウスを借りるワーホリが多いです。",
      "車で1時間ほど南のゴールドコーストはビーチリゾートで生活の雰囲気が異なるため、別記事『ゴールドコースト エリアガイド』で詳しく解説しています。",
    ],
    keyFacts: [
      { label: "州", value: "クイーンズランド州（QLD）の州都" },
      { label: "特徴", value: "亜熱帯で温暖・大都市より落ち着いた暮らし" },
      { label: "交通", value: "Translink go card で電車・バス・フェリー（CityCat）" },
      { label: "家賃", value: "エリア・時期で変動。最新は Flatmates・realestate.com.au で確認" },
      { label: "向いている人", value: "初めてのワーホリ・温暖な気候・コスパ重視" },
    ],
    steps: [
      { title: "go card を用意", description: "QLD の公共交通は Translink の go card（対応クレカ/スマホのタッチも可）で利用します。" },
      { title: "エリアを絞る", description: "予算と通勤を考え、電車・バス沿線の郊外シェアハウスを検討します。" },
      { title: "仕事を探す", description: "ジャパレス→ローカルへのステップアップがしやすい都市です。求人サイトや店頭応募を併用します。" },
    ],
    tips: [
      "亜熱帯気候で冬も比較的暖かく、寒さが苦手な人に過ごしやすい地域です。",
      "夏は紫外線と暑さが強いので、日焼け対策と水分補給をしっかりと（UV は ARPANSA、天気は BOM で確認）。",
    ],
    verifiedAt: "2026-07-27",
    officialSources: [
      { label: "Translink（QLD 公共交通・go card・運賃）", url: "https://translink.com.au/", accessedAt: "2026-07-27" },
      { label: "Bureau of Meteorology｜Climate averages（気候平年値）", url: "http://www.bom.gov.au/climate/averages/", accessedAt: "2026-07-27" },
    ],
    relatedSlugs: ["area-overview", "area-gold-coast", "housing-guide", "jobs-guide"],
    updatedAt: "2026-07-27",
    published: true,
  },

  {
    id: "a28",
    title: "パース vs ケアンズ｜西海岸と熱帯北部、どっちを拠点にする？",
    slug: "area-perth-cairns",
    category: "area",
    hub: "area",
    description:
      "西オーストラリアのパースと、熱帯クイーンズランドのケアンズ。国の東西で性格が大きく異なる2都市を、仕事・気候・拠点適性で比較し、選び方を整理します。",
    content: [
      "パースとケアンズは、どちらも『大都市以外の拠点』として人気ですが、場所も暮らしも大きく異なります。結論から言うと、落ち着いた都市生活と西海岸を楽しみたいならパース、観光やファーム（セカンドビザ）を軸に熱帯の北部で過ごしたいならケアンズが向いています。",
      "パースは西オーストラリア州の州都で、東海岸から離れた独立した大都市。ケアンズは熱帯の観光都市で、周辺にファーム地域が広がりセカンドビザの拠点になります。両都市の詳細は、それぞれの専用ガイドにまとめています。",
    ],
    keyFacts: [
      { label: "パース", value: "WA の州都・都市生活・西海岸。詳細は専用ガイドへ" },
      { label: "ケアンズ", value: "熱帯・観光・ファーム拠点。詳細は専用ガイドへ" },
      { label: "選び方", value: "都市生活＝パース／観光・セカンドビザ＝ケアンズ" },
    ],
    steps: [
      { title: "目的を決める", description: "都市で働く・英語環境重視ならパース、観光やファームでセカンドビザを狙うならケアンズを軸に検討します。" },
      { title: "専用ガイドを読む", description: "『パース エリアガイド』『ケアンズ エリアガイド』で仕事・交通・気候・空港を確認します。" },
      { title: "移動と気候を考慮", description: "パースは時差（AWST）、ケアンズは雨季・サイクロン期があります。渡航時期と合わせて選びます。" },
    ],
    relatedSlugs: ["area-perth", "area-cairns", "area-overview", "farm-second-visa", "second-visa-guide"],
    updatedAt: "2026-07-27",
    published: true,
  },

  {
    id: "a41",
    title: "アデレード エリアガイド｜物価が落ち着いた南オーストラリアの州都",
    slug: "area-adelaide",
    category: "area",
    description:
      "大都市より家賃・物価が抑えめで、のんびり暮らせる南オーストラリア州の州都アデレード。ワインの名産地で、落ち着いた生活を求める人に人気です。",
    content: [
      "アデレードは南オーストラリア州の州都で、東海岸の大都市に比べて家賃・物価が落ち着いているのが魅力です。街がコンパクトで治安も良く、のんびりとしたペースで暮らしたいワーホリに向いています。",
      "周辺はバロッサ・バレーなど世界的なワインの産地で、ぶどうの収穫やワイナリーの仕事（季節労働）も見つかります。大都市ほど求人数は多くありませんが、その分競争が穏やかで、生活コストを抑えながらじっくり滞在できます。",
    ],
    keyFacts: [
      { label: "特徴", value: "物価控えめ・コンパクト・治安良好" },
      { label: "家賃目安(シェア)", value: "週130〜240 AUD" },
      { label: "交通", value: "metroCARDで電車・トラム・バス。無料区間あり" },
      { label: "向いている人", value: "生活費を抑えたい・落ち着いた環境を好む人" },
    ],
    steps: [
      { title: "metroCARDを用意", description: "アデレードの公共交通はmetroCARDで利用します。" },
      { title: "拠点を決める", description: "コンパクトな街なので中心部周辺でも比較的家賃が手頃です。" },
      { title: "季節労働も視野に", description: "周辺のワイナリー・農園で収穫期の仕事を探せます。" },
    ],
    tips: [
      "シティ中心部にはトラムや電車の無料区間があり、交通費を抑えられます。",
      "大都市より求人は少なめ。仕事優先なら他都市と比較しつつ検討しましょう。",
    ],
    relatedSlugs: ["area-overview", "farm-finding", "housing-guide"],
    updatedAt: "2026-06-20",
    published: true,
  },

  {
    id: "a297",
    title: "ゴールドコースト エリアガイド｜仕事・家賃・交通・ビーチ生活",
    slug: "area-gold-coast",
    category: "area",
    hub: "area",
    description:
      "サーファーズパラダイスで知られるゴールドコースト。観光・ホスピタリティの仕事、ビーチ中心の暮らし、交通・気候・空港まで、ワーホリの拠点選びに役立つ情報をまとめました。",
    content: [
      "ゴールドコーストは、観光・ホスピタリティの仕事が多く、ビーチ中心のアクティブな生活を送りたいワーホリに向いた拠点です。クイーンズランド州南東部、ブリスベンから電車・車で約1時間の距離にあり、温暖な気候と長いビーチが魅力です。",
      "観光地のため、カフェ・レストラン・バー、ホテル、小売、テーマパーク（サーファーズパラダイス周辺）など接客・ホスピタリティ系の求人が中心で、建設や清掃の仕事もあります。観光シーズンやイベントで需要が動くため、最新の募集状況は求人サイトや店頭で確認しましょう。",
      "公共交通は Gold Coast Light Rail（G:link・路面電車）と路線バスが中心で、Translink の go card（タッチ決済対応）で乗車します。ビーチ沿いの主要エリアは Light Rail でつながっていますが、郊外や内陸は本数が限られるため、車があると生活の幅が広がります。",
    ],
    keyFacts: [
      { label: "州", value: "クイーンズランド州（QLD）南東部（ブリスベンから約1時間）" },
      { label: "特徴", value: "観光・ビーチ・温暖な亜熱帯気候" },
      { label: "交通", value: "Gold Coast Light Rail（G:link）＋バス／go card" },
      { label: "空港", value: "Gold Coast Airport（OOL・Coolangatta）。ブリスベン空港も利用可" },
      { label: "家賃", value: "変動。最新は Flatmates・realestate.com.au で確認" },
      { label: "向いている人", value: "観光・接客で働きたい／ビーチ生活重視" },
    ],
    steps: [
      { title: "go card を用意", description: "QLD の公共交通は Translink の go card（対応クレカ/スマホのタッチも可）で利用します。" },
      { title: "ビーチ沿いか内陸かを選ぶ", description: "通勤とライフスタイルに合わせ、Light Rail 沿線か、家賃が抑えめの内陸かを検討します。" },
      { title: "接客・観光求人を探す", description: "ホスピタリティは RSA（責任あるアルコール提供）があると有利。求人サイトと店頭応募を併用します。" },
    ],
    tips: [
      "Light Rail（G:link）沿線は生活・通勤に便利で、車なしでも動きやすいエリアです。",
      "夏は UV と暑さが強く、スコールや雷雨もあります。日焼け・熱中症対策を（UV は ARPANSA、天気は BOM で確認）。",
    ],
    faqs: [
      {
        question: "ブリスベンとゴールドコースト、どちらを拠点にすべき？",
        answer:
          "仕事の数・選択肢の広さを重視するならブリスベン、観光・接客の仕事とビーチ中心の生活を重視するならゴールドコーストが向いています。電車で行き来できる距離なので、住んでみて移ることもできます。",
      },
    ],
    verifiedAt: "2026-07-27",
    officialSources: [
      { label: "Translink（QLD 公共交通・go card・G:link 運賃）", url: "https://translink.com.au/", accessedAt: "2026-07-27" },
      { label: "Gold Coast Airport（OOL・空港アクセス）", url: "https://www.goldcoastairport.com.au/", accessedAt: "2026-07-27" },
      { label: "Bureau of Meteorology｜Climate averages（気候平年値）", url: "http://www.bom.gov.au/climate/averages/", accessedAt: "2026-07-27" },
    ],
    relatedSlugs: ["area-brisbane", "area-overview", "jobs-guide", "housing-guide", "transport-payment-guide", "clothing-guide"],
    updatedAt: "2026-07-27",
    published: true,
  },

  {
    id: "a298",
    title: "パース エリアガイド｜仕事・家賃・車・西海岸生活",
    slug: "area-perth",
    category: "area",
    hub: "area",
    description:
      "西オーストラリア州の州都パース。東海岸から離れた独立した大都市で、晴天と西海岸の暮らし、仕事・交通・時差・空港まで、拠点選びに役立つ情報をまとめました。",
    content: [
      "パースは西オーストラリア州（WA）の州都で、東海岸の大都市から離れた独立した大都市。落ち着いた都市生活と美しいビーチ・日照を楽しめ、英語環境に集中したいワーホリにも人気です。",
      "仕事はホスピタリティ・小売・清掃・建設などがあります。WA は鉱業（マイニング）・資源産業が盛んで関連の仕事が話題になりますが、条件や賃金は職種・資格で大きく変わるため、具体的な金額は募集ごとに確認してください。地方（Regional WA）ではセカンドビザ対象の仕事が見つかることもあります。",
      "公共交通は Transperth が運営する電車・バス・フェリーで、SmartRider カードで乗車します。CBD 内は無料の CAT バスが走っています。都市が広く、郊外や地方へは車が便利です。西オーストラリアは AWST で東海岸（シドニー等）と時差があり、東部が夏時間の時期はさらに差が開くため、日本との連絡やフライト予約時に注意しましょう。",
    ],
    keyFacts: [
      { label: "州", value: "西オーストラリア州（WA）の州都" },
      { label: "特徴", value: "独立した大都市・晴天と西海岸・地中海性気候" },
      { label: "交通", value: "Transperth（電車・バス・フェリー）／SmartRider・CBD は無料 CAT バス" },
      { label: "空港", value: "Perth Airport（PER）" },
      { label: "時差", value: "東海岸と時差あり（AWST）" },
      { label: "家賃", value: "変動。最新は Flatmates・realestate.com.au で確認" },
    ],
    steps: [
      { title: "SmartRider を用意", description: "パースの公共交通は Transperth の SmartRider で利用します。CBD 内は無料 CAT バスが便利です。" },
      { title: "エリアを選ぶ", description: "電車・バス沿線でシェアハウスを探すと通勤しやすくなります。地方移動を考えるなら車も検討します。" },
      { title: "仕事を探す", description: "ホスピタリティ・小売・建設などを求人サイトと店頭で探します。地方はセカンドビザ対象の仕事も視野に入れます。" },
    ],
    tips: [
      "CBD 内の無料 CAT バスを使うと交通費を抑えられます。",
      "東海岸との時差があるため、面接や日本との連絡は時間帯を確認して調整しましょう。",
    ],
    verifiedAt: "2026-07-27",
    officialSources: [
      { label: "Transperth（WA 公共交通・SmartRider・運賃）", url: "https://www.transperth.wa.gov.au/", accessedAt: "2026-07-27" },
      { label: "Perth Airport（PER・空港アクセス）", url: "https://www.perthairport.com.au/", accessedAt: "2026-07-27" },
      { label: "Bureau of Meteorology｜Climate averages（気候平年値）", url: "http://www.bom.gov.au/climate/averages/", accessedAt: "2026-07-27" },
    ],
    relatedSlugs: ["area-perth-cairns", "area-cairns", "area-overview", "jobs-guide", "housing-guide", "second-visa-guide"],
    updatedAt: "2026-07-27",
    published: true,
  },

  {
    id: "a299",
    title: "ケアンズ エリアガイド｜観光業・気候・ファームへの移動",
    slug: "area-cairns",
    category: "area",
    hub: "area",
    description:
      "熱帯クイーンズランド北部の観光都市ケアンズ。観光・ホスピタリティの仕事と、周辺ファームへの拠点としての使い方、気候・交通・空港をワーホリ目線でまとめました。",
    content: [
      "ケアンズは熱帯クイーンズランド北部（Far North QLD）の観光都市で、グレートバリアリーフ観光の玄関口。観光・ホスピタリティの仕事に加え、周辺にファーム地域が広がるため、セカンドビザ（88日）を目指すワーホリの拠点として人気です。",
      "仕事は観光・ホスピタリティ（ツアー、ダイビング、ホテル、飲食）が中心。周辺の Atherton Tablelands・Mareeba などはバナナ・アボカド・ベリーなどのファーム求人があり、収穫期に需要が動きます。ファームは悪質な求人・農園もあるため、雇用主やセカンドビザ対象かを事前に確認しましょう。",
      "市内は路線バス（Sunbus）が中心で、鉄道・トラムはありません。運賃・路線は変わることがあるため、最新は Translink／Queensland Government で確認を。周辺のファーム地域へ通うには車があると有利です。",
    ],
    keyFacts: [
      { label: "州", value: "クイーンズランド州（QLD）北部（Far North）" },
      { label: "特徴", value: "熱帯・観光・ファーム拠点" },
      { label: "交通", value: "路線バス（Sunbus）中心／周辺ファームは車が便利" },
      { label: "空港", value: "Cairns Airport（CNS）" },
      { label: "気候", value: "熱帯・雨季（11〜4月頃）・サイクロン注意" },
      { label: "向いている人", value: "観光で働きたい／ファームでセカンドビザを狙う" },
    ],
    steps: [
      { title: "拠点を決める", description: "観光の仕事中心なら市内、ファーム中心なら周辺地域（Atherton Tablelands・Mareeba 等）への移動を前提に検討します。" },
      { title: "ファーム情報を集める", description: "収穫期に合わせて求人を探し、雇用主がセカンドビザ対象か・労働条件を確認します。" },
      { title: "移動手段を確保", description: "ファーム地域へは車があると仕事・生活の選択肢が広がります。相乗りや送迎の有無も確認します。" },
    ],
    tips: [
      "雨季（おおむね11〜4月）は高温多湿でスコールが多く、サイクロンの可能性もあります。BOM の気象・警報を確認しましょう。",
      "ファームは条件が農園ごとに異なります。悪質農園を避けるため、応募前に評判・契約・支払い方法を確認しましょう。",
    ],
    verifiedAt: "2026-07-27",
    officialSources: [
      { label: "Bureau of Meteorology｜Climate averages・気象警報（雨季・サイクロン）", url: "http://www.bom.gov.au/climate/averages/", accessedAt: "2026-07-27" },
      { label: "Department of Home Affairs｜Specified work（417 セカンドビザ対象作業）", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work", accessedAt: "2026-07-27" },
      { label: "Cairns Airport（CNS・空港アクセス）", url: "https://www.cairnsairport.com.au/", accessedAt: "2026-07-27" },
    ],
    relatedSlugs: ["area-perth-cairns", "area-perth", "area-overview", "farm-second-visa", "region-mareeba-atherton-farm", "second-visa-guide"],
    updatedAt: "2026-07-27",
    published: true,
  },

  {
    id: "a300",
    title: "キャンベラ エリアガイド｜仕事・家賃・交通",
    slug: "area-canberra",
    category: "area",
    hub: "area",
    description:
      "オーストラリアの首都キャンベラ。計画的に整備された落ち着いた都市での仕事・交通・気候を、ワーホリの拠点選び目線でまとめました。",
    content: [
      "キャンベラはオーストラリアの首都で、計画的に整備された落ち着いた都市。大都市ほど求人は多くありませんが、ホスピタリティ・小売・事務などの仕事があり、静かな環境で暮らしたいワーホリに向いています。",
      "政府機関が集まる街ですが、ワーホリはカフェ・レストラン・小売・清掃・イベントなどの仕事が中心です。求人数は大都市より少なめのため、求人サイト・店頭応募・人材会社など複数の探し方を併用しましょう。",
      "公共交通は Transport Canberra が運営する Light Rail（ライトレール）とバスで、MyWay カードで乗車します。街が広く、エリアによっては車があると便利です。",
    ],
    keyFacts: [
      { label: "地域", value: "オーストラリア首都特別地域（ACT）" },
      { label: "特徴", value: "首都・計画都市・落ち着いた環境" },
      { label: "交通", value: "Transport Canberra（Light Rail＋バス）／MyWay" },
      { label: "空港", value: "Canberra Airport（CBR）" },
      { label: "気候", value: "内陸・冬は冷え込み霜／夏は暑く乾燥" },
      { label: "向いている人", value: "静かな環境・接客/事務で働きたい" },
    ],
    steps: [
      { title: "MyWay を用意", description: "キャンベラの公共交通は MyWay カードで利用します。" },
      { title: "拠点を選ぶ", description: "Light Rail・バス沿線でシェアハウスを探すと移動しやすくなります。" },
      { title: "仕事を複数の方法で探す", description: "求人数が少なめのため、求人サイト・店頭応募・人材会社を併用します。" },
    ],
    tips: [
      "内陸で寒暖差が大きく、冬（6〜8月）は朝晩が冷え込み霜が降りることもあります。防寒具を用意しましょう（気候は BOM で確認）。",
      "求人が大都市より少なめなので、早めに動き、探し方を複数持つと安心です。",
    ],
    verifiedAt: "2026-07-27",
    officialSources: [
      { label: "Transport Canberra（ACT 公共交通・Light Rail・MyWay）", url: "https://www.transport.act.gov.au/", accessedAt: "2026-07-27" },
      { label: "Bureau of Meteorology｜Climate averages（気候平年値）", url: "http://www.bom.gov.au/climate/averages/", accessedAt: "2026-07-27" },
    ],
    relatedSlugs: ["area-sydney", "area-overview", "jobs-guide", "housing-guide", "clothing-guide"],
    updatedAt: "2026-07-27",
    published: true,
  },

  {
    id: "a301",
    title: "ホバート エリアガイド｜タスマニアの仕事と暮らし",
    slug: "area-hobart",
    category: "area",
    hub: "area",
    description:
      "タスマニア州の州都ホバート。自然と歴史的な街並みが魅力の落ち着いた都市での仕事・季節労働・交通・気候を、ワーホリ目線でまとめました。",
    content: [
      "ホバートはタスマニア州（TAS）の州都で、自然と歴史的な街並みが魅力の落ち着いた都市。観光・ホスピタリティの仕事があり、周辺の農業地域は収穫期の季節労働（セカンドビザ対象になり得る）で知られます。のんびり暮らしたい人や、タスマニアでファームを考える人の拠点になります。",
      "仕事は観光・飲食・小売・宿泊が中心。周辺〜州内はチェリー・ベリー・りんごなどの収穫やアクアカルチャー（養殖）の季節労働があり、時期により需要が動きます。セカンドビザを狙う場合は、対象作業・地域かを事前に確認しましょう。",
      "公共交通は Metro Tasmania の路線バスが中心で、Greencard で乗車します。鉄道・トラムはありません。州内の移動やファーム地域へは車があると便利です。",
    ],
    keyFacts: [
      { label: "州", value: "タスマニア州（TAS）の州都" },
      { label: "特徴", value: "自然・落ち着いた都市・冷涼な気候" },
      { label: "交通", value: "Metro Tasmania（路線バス）／Greencard・鉄道/トラムなし" },
      { label: "空港", value: "Hobart Airport（HBA）" },
      { label: "気候", value: "冷涼・冬は本土より寒い／UV は夏に強い" },
      { label: "向いている人", value: "のんびり暮らしたい／タスマニアでファームを考える" },
    ],
    steps: [
      { title: "Greencard を用意", description: "ホバートの公共交通は Metro Tasmania の Greencard で利用します。" },
      { title: "拠点を選ぶ", description: "市内で観光・飲食の仕事、周辺で季節労働など、目的に合わせて拠点を決めます。" },
      { title: "季節労働を探す", description: "チェリー・ベリー・りんごなどはシーズンが限られます。時期を確認して早めに動きます。" },
    ],
    tips: [
      "冷涼な気候で冬（6〜8月）は本土より寒く、山間部では雪も。防寒対策を用意しましょう（気候は BOM で確認）。",
      "季節労働はシーズンが限られるため、収穫時期に合わせて計画しましょう。",
    ],
    verifiedAt: "2026-07-27",
    officialSources: [
      { label: "Metro Tasmania（TAS 公共交通・Greencard・運賃）", url: "https://www.metrotas.com.au/", accessedAt: "2026-07-27" },
      { label: "Hobart Airport（HBA・空港アクセス）", url: "https://www.hobartairport.com.au/", accessedAt: "2026-07-27" },
      { label: "Bureau of Meteorology｜Climate averages（気候平年値）", url: "http://www.bom.gov.au/climate/averages/", accessedAt: "2026-07-27" },
    ],
    relatedSlugs: ["area-melbourne", "area-overview", "farm-second-visa", "region-tasmania-farm", "jobs-guide", "clothing-guide"],
    updatedAt: "2026-07-27",
    published: true,
  },
];
