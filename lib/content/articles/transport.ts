import type { Article } from "./types";

export const transportArticles: Article[] = [
  {
    id: "a15",
    title: "現金不要で乗れる｜オーストラリアの公共交通と決済ガイド",
    slug: "transport-payment-guide",
    category: "transport",
    description:
      "OpalやmykiなどのICカードに加え、クレジット/デビットのタッチ決済でそのまま乗車できる都市の交通事情と支払い方法を解説します。",
    content: [
      "オーストラリアの都市部では、公共交通機関の支払いに現金や切符はほぼ不要です。シドニー（Opal）やメルボルン（myki）などの交通系ICカードに加え、多くの都市でVisa/Mastercardのタッチ決済（コンタクトレス）でそのまま改札・乗車ができます。",
      "シドニー・ブリスベン・パースなどはクレジット/デビットのタッチ決済（スマホのApple Pay/Google Payを含む）に対応しており、カードをかざすだけで乗車可能。料金は自動計算され、1日の上限（デイキャップ）も適用されます。メルボルンはmykiカードが基本です。",
      "都市によって運賃システムも異なります。シドニーのOpalは距離制で、平日の上限（デイキャップ）や日曜の割引上限、一定回数乗ると割引になる仕組みがあります。メルボルンは市内中心部の一部で無料トラム区間（Free Tram Zone）があり、mykiのゾーン制で運賃が決まります。ブリスベン（go card）やパース（SmartRider）もゾーン/区間制です。長く滞在して毎日通勤する都市では、上限（キャップ）や乗継割引を意識すると交通費を抑えられます。",
    ],
    keyFacts: [
      { label: "シドニー", value: "Opalカード or クレカ/スマホのタッチ決済" },
      { label: "メルボルン", value: "mykiカード（要事前購入・チャージ）" },
      { label: "ブリスベン", value: "go card or タッチ決済（Smart Ticketing拡大中）" },
      { label: "パース", value: "SmartRider or タッチ決済（順次拡大）" },
      { label: "運賃制度", value: "距離/ゾーン制。1日・週の上限（キャップ）あり" },
      { label: "現金", value: "基本不要。タッチ決済 or ICカードで完結" },
    ],
    steps: [
      { title: "都市の方式を確認", description: "滞在する都市がタッチ決済対応かICカード必須かを調べます。" },
      { title: "カード/スマホを準備", description: "タッチ決済対応のクレカ/デビット（Wise可）やスマホ決済を用意します。" },
      { title: "必要ならICカードを購入", description: "メルボルン等はmykiなどのICカードをコンビニ/駅で購入・チャージします。" },
      { title: "かざして乗車", description: "改札やバスのリーダーにカード/スマホをタッチして乗降します。" },
    ],
    tips: [
      "同じカードで往復・複数交通機関を使うと1日の上限（デイキャップ）や乗継割引が自動適用される都市が多いです。",
      "バスは乗車時にタッチ。都市により降車時もタッチが必要なので表示を確認しましょう。",
      "Wiseや日本のタッチ決済対応カードでも乗れることが多く、わざわざ現金で切符を買う必要はありません。",
    ],
    faqs: [
      {
        question: "日本のクレジットカードでも乗れますか？",
        answer:
          "Visa/Mastercardのタッチ決済（コンタクトレス）対応カードであれば、多くの都市でそのまま乗車できます。海外利用手数料がかかる場合があるため、現地カードやWiseのデビットを使うと手数料を抑えられます。",
      },
      {
        question: "切符を現金で買う必要はありますか？",
        answer:
          "都市部ではほぼ不要です。ICカードかタッチ決済で完結します。ごく一部の地方路線では現金対応の場合があります。",
      },
    ],
    relatedSlugs: ["money-transfer-wise", "arrival-checklist", "cars-guide", "intercity-transport"],
    redirectFrom: ["city-public-transport-comparison"],
    updatedAt: "2026-06-10",
    published: true,
  },

  {
    id: "a42",
    title: "都市間移動ガイド｜飛行機・長距離バス・電車の使い分け",
    slug: "intercity-transport",
    category: "transport",
    description:
      "広大なオーストラリアの都市間移動を、コストと時間で賢く選ぶ方法。格安航空・長距離バス・鉄道の特徴と予約のコツを解説します。",
    content: [
      "オーストラリアは国土が広く、都市間の移動は『飛行機・長距離バス・鉄道』を使い分けます。シドニー〜メルボルン間でも車で約9時間かかるため、長距離は飛行機が現実的です。",
      "格安航空（Jetstar、Virgin Australia等）は早めに予約すれば驚くほど安く移動できます。バス（Greyhound等）は時間はかかりますが安く、近距離やパス利用に向きます。鉄道は本数が限られ観光向けの側面が強いです。",
    ],
    keyFacts: [
      { label: "飛行機", value: "Jetstar/Virgin等。早割で格安。長距離向き" },
      { label: "長距離バス", value: "Greyhound等。安いが時間がかかる" },
      { label: "鉄道", value: "本数少なめ。観光列車の側面が強い" },
      { label: "予約のコツ", value: "航空券は早いほど安い。セールを狙う" },
    ],
    steps: [
      { title: "距離と予算で手段を選ぶ", description: "長距離は飛行機、近〜中距離はバスが基本です。" },
      { title: "早めに予約", description: "格安航空は早割が安い。日付に柔軟なら最安日を探します。" },
      { title: "荷物条件を確認", description: "格安航空は預け荷物が別料金。重量超過に注意します。" },
      { title: "空港アクセスも計算", description: "空港〜市内の交通費・時間も含めて総コストを比較します。" },
    ],
    tips: [
      "格安航空は手荷物のみだと最安。預け荷物・座席指定は追加料金になりがちです。",
      "セカンドビザのファーム地へ移動する人も多数。時期に合わせて計画的に予約を。",
    ],
    relatedSlugs: ["transport-payment-guide", "area-overview", "cars-guide"],
    updatedAt: "2026-06-20",
    published: true,
  },

  {
    id: "a225",
    title: "中古車の現車確認チェックリスト｜試乗・整備記録・故障サインの見方",
    slug: "used-car-inspection-checklist",
    category: "transport",
    hub: "transport",
    priority: "P0",
    searchIntent: "中古車購入前の現車確認・試乗・書類チェックの手順",
    description:
      "ワーホリで中古車を買う前の現車確認チェックリスト。書類（VIN一致・Rego残存・整備記録）、車体・エンジンの故障サイン、試乗で確かめるポイントを初心者向けに整理し、支払い前に必ず行うPPSR照会と併せて解説します。",
    content: [
      "結論から言うと、中古車を買う前の現車確認では『①書類、②車体、③エンジン・機関、④試乗』の4点を必ずチェックし、支払い前にPPSR（$2の公式照会）でローン残債・盗難・全損歴を確認します。見た目がきれいでも、書類やエンジンに問題があると帰国前に売れなかったり高額修理になったりするため、面倒でも1台ずつ順番に確認するのが安全です。",
      "まず書類です。車体番号（VIN）が登録書類（rego papers）と一致しているか、Rego（登録）の残存期間、整備記録（service history / logbook）、前オーナーの人数を確認します。VINはフロントガラス下やドア開口部、エンジンルームで確認でき、これが書類と食い違う車は絶対に買ってはいけません。整備記録が残っている車は状態を把握しやすく、帰国前の売却でも有利です。",
      "次に車体とエンジンです。ボディの下回りやドア周りのサビ、タイヤの溝と偏摩耗、オイル・冷却水の量と色、エンジン始動時の白/黒/青の排気煙、ダッシュボードの警告灯が消えるかを見ます。エンジンをかけたまま5〜10分アイドリングして、警告灯が点灯し続けないか、異音・振動がないかを確認しましょう。最後に必ず試乗し、ブレーキの効き、ギア（AT/MT）の入り方、ハンドルのブレやまっすぐ走るか、加速時の異音をチェックします。",
      "現車を気に入っても、支払い前にVINでPPSR照会（$2）を行い、ローン残債（money owing）・盗難・全損（written-off）の記録がないことを必ず確認してください。残債がある車は、購入後に金融会社に回収されてお金も車も失うリスクがあります。可能なら整備工場の点検（pre-purchase inspection）も検討すると安心です。",
    ],
    keyFacts: [
      { label: "確認する4点", value: "書類・車体・エンジン/機関・試乗" },
      { label: "書類の最重要", value: "VIN（車体番号）が登録書類と一致しているか" },
      { label: "支払い前に必須", value: "PPSR照会（$2）で残債・盗難・全損を確認" },
      { label: "エンジン確認", value: "排気煙の色・警告灯・異音・オイル/冷却水" },
      { label: "試乗で確認", value: "ブレーキ・ギア・ハンドルのブレ・加速時の音" },
      { label: "あると有利", value: "整備記録（service history / logbook）" },
    ],
    steps: [
      { title: "明るい時間・乾いた日に見る", description: "傷やオイル漏れが見えやすい昼間に、屋外で確認します。" },
      { title: "書類とVINを照合", description: "VIN・Rego残存・整備記録・オーナー数を確認します。" },
      { title: "車体・下回りを点検", description: "サビ、タイヤの溝と偏摩耗、オイル/冷却水、漏れを見ます。" },
      { title: "エンジンを始動して観察", description: "警告灯が消えるか、排気煙、異音・振動を確認します。" },
      { title: "必ず試乗する", description: "ブレーキ・ギア・直進安定性・加速音をチェックします。" },
      { title: "支払い前にPPSR照会", description: "VINで$2照会し、残債・盗難・全損がないか確認します。" },
    ],
    tips: [
      "整備工場のpre-purchase inspection（有料）を付ければ、素人では気づけない不具合も洗い出せます。",
      "人気の日本車（トヨタ・ホンダ等）は故障が少なく、帰国前にも売りやすい傾向があります。",
      "個人売買では『現状渡し（sold as is）』が基本。買った後の不具合は自己責任になるため事前確認が重要です。",
    ],
    warnings: [
      "VINが書類と一致しない、車検証・整備記録が一切ない車は購入を避けてください。",
      "支払い前のPPSR照会を省くと、ローン残債のある車を買って回収されるリスクがあります。",
    ],
    faqs: [
      {
        question: "車に詳しくなくても中古車を買って大丈夫ですか？",
        answer:
          "書類（VIN一致・Rego残存）とPPSR照会を押さえ、試乗で明らかな異音・警告灯がないかを確認すれば大きな失敗は避けられます。不安なら整備工場のpre-purchase inspectionを利用し、プロに機関系を見てもらうと安心です。",
      },
      {
        question: "試乗を断られたら買わない方がいいですか？",
        answer:
          "はい、基本的に試乗できない車は避けるのが無難です。ブレーキやギアの状態は試乗しないと分かりません。売主が正当な車なら試乗を拒む理由は通常ないため、拒否される場合は警戒しましょう。",
      },
    ],
    phrases: [
      { en: "Can I take it for a test drive?", ja: "試乗してもいいですか？", note: "試乗を頼むとき" },
      { en: "Does it come with service history / logbooks?", ja: "整備記録は付いていますか？" },
      { en: "How much rego is left on it?", ja: "Regoはあと何か月残っていますか？" },
      { en: "Can I get a pre-purchase inspection done?", ja: "購入前点検を受けてもいいですか？" },
    ],
    sources: [
      { label: "PPSR（Australian Government）｜$2 car search", url: "https://www.ppsr.gov.au/" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Personal Property Securities Register（AFSA）｜Do a used car search",
        url: "https://www.ppsr.gov.au/searching/do-used-car-or-vehicle-search",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: [
      "cars-guide",
      "ppsr-check-guide",
      "rego-ctp-rwc",
      "vehicle-transfer-by-state",
      "car-insurance-comparison",
      "car-breakdown-guide",
    ],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a226",
    title: "PPSRチェックの方法｜盗難車・ローン残債を$2で確認する手順",
    slug: "ppsr-check-guide",
    category: "transport",
    hub: "transport",
    priority: "P0",
    searchIntent: "中古車のPPSR照会のやり方・費用・結果の見方",
    description:
      "中古車購入前のPPSR（Personal Property Securities Register）照会の手順を解説。VIN（車体番号）を入力して$2で行う公式チェックで、ローン残債・盗難・全損（written-off）の記録を確認する方法と、結果の読み方・証明書の保管まで案内します。",
    content: [
      "結論から言うと、PPSR照会は政府公式サイト ppsr.gov.au でVIN（車体番号）を入力し、たった$2でその車に『ローン残債（money owing）』『盗難』『全損（written-off）』の記録がないかを確認できる仕組みです。個人売買で中古車を買うなら、支払い前に必ず自分で照会してください。これを怠ると、ローンが残った車を買った後に金融会社に車を回収され、お金も車も失うことがあります。",
      "照会に必要なのはVINだけです。VINは17桁の英数字で、フロントガラスの下（運転席側）、運転席ドアの開口部、エンジンルーム、または登録書類（rego papers）に記載されています。売主から聞いたVINが車体・書類と一致しているかも同時に確認しましょう。VINが手に入れば、スマホからでも数分で照会できます。",
      "照会は公式のクイックVIN検索（transact.ppsr.gov.au の QuickVIN Search）から行い、$2をカード決済すると、その場でPPSR証明書（PPSR certificate）が発行されます。証明書には、①security interest（担保・残債）の有無、②stolen（盗難）記録、③written-off（全損）記録が表示されます。『money owing』が出た場合は、購入後に回収されるリスクがあるため、原則その車は避けるか、残債の完済証明を売主に求めてください。",
      "発行されたPPSR証明書は必ず保存しておきましょう。照会した日時点の記録が公的に残るため、万一トラブルになったときの証拠になります。なお、PPSR照会は『お金の担保・盗難・全損』を確認するもので、車の機械的な状態（故障の有無）までは分かりません。現車確認・試乗と組み合わせて総合的に判断してください。",
    ],
    keyFacts: [
      { label: "公式サイト", value: "ppsr.gov.au（AFSA・オーストラリア政府）" },
      { label: "費用", value: "1台$2（クレジット/デビットで決済）" },
      { label: "必要な情報", value: "VIN（17桁の車体番号）" },
      { label: "分かること", value: "ローン残債・盗難・全損（written-off）の記録" },
      { label: "分からないこと", value: "エンジン等の機械的な状態（別途現車確認）" },
      { label: "実施タイミング", value: "支払い前（必須）" },
    ],
    steps: [
      { title: "VINを入手", description: "フロントガラス下・ドア開口部・エンジンルーム・登録書類でVINを確認します。" },
      { title: "VINの一致を確認", description: "売主が言うVINと車体・書類が一致しているか照合します。" },
      { title: "公式サイトで照会", description: "ppsr.gov.au のQuickVIN Searchにアクセスし、VINを入力します。" },
      { title: "$2を決済", description: "カードで$2を支払い、その場で証明書を発行します。" },
      { title: "結果を確認", description: "残債・盗難・全損の記録がないかを読み取ります。" },
      { title: "証明書を保存", description: "PDF/メールを保管し、購入判断とトラブル時の証拠にします。" },
    ],
    tips: [
      "必ず自分でVINを入力して照会しましょう。売主が見せる証明書は別の車のものである可能性があります。",
      "『money owing（残債あり）』でも、売主が完済証明を用意できれば購入できる場合がありますが、確認が取れないなら見送るのが安全です。",
    ],
    warnings: [
      "PPSR照会を省くと、ローン残債のある車を購入して金融会社に回収されるリスクがあります。",
      "PPSRは機械的な故障までは保証しません。現車確認・試乗と必ず併用してください。",
    ],
    faqs: [
      {
        question: "PPSR照会はいくらかかりますか？",
        answer:
          "1台$2です。公式サイト ppsr.gov.au からVINを入力し、カードで$2を支払うと、その場で証明書が発行されます。安価なので、購入を検討している車ごとに照会するのがおすすめです。",
      },
      {
        question: "『money owing』と出たらどうすればいいですか？",
        answer:
          "その車にローンなどの担保（security interest）が残っている状態です。購入後に金融会社が車を回収する可能性があるため、原則は避けます。どうしても買うなら、売主に残債の完済証明を求め、確認が取れてから支払ってください。",
      },
    ],
    sources: [
      { label: "PPSR（Australian Government）", url: "https://www.ppsr.gov.au/" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Personal Property Securities Register（AFSA）｜Search the PPSR（$2 car search）",
        url: "https://www.ppsr.gov.au/searching",
        accessedAt: "2026-07-19",
      },
      {
        label: "PPSR｜Do a used car or vehicle search",
        url: "https://www.ppsr.gov.au/searching/do-used-car-or-vehicle-search",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: [
      "cars-guide",
      "used-car-inspection-checklist",
      "rego-ctp-rwc",
      "vehicle-transfer-by-state",
      "car-insurance-comparison",
    ],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a227",
    title: "Rego・CTP・Roadworthy/Safety Certificateの違い｜州ごとの名称を整理",
    slug: "rego-ctp-rwc",
    category: "transport",
    hub: "transport",
    priority: "P0",
    searchIntent: "Rego・CTP・車検（Roadworthy/Safety）の違いと州別の名称",
    description:
      "オーストラリアの車で必ず出てくるRego（登録）・CTP（強制対人保険）・Roadworthy/Safety Certificate（車検相当）の違いを整理。州ごとに名称や含まれる範囲が違うポイントを、購入・名義変更前に確認できるよう解説します。",
    content: [
      "結論から言うと、Rego（registration＝登録）・CTP（強制対人保険）・Roadworthy/Safety Certificate（車検相当の安全検査）は別々の制度で、役割が違います。ざっくり言うと、Regoは『公道を走る許可』、CTPは『人をケガさせたときの最低限の保険』、Roadworthy/Safety Certificateは『その車が安全基準を満たしている証明』です。州によって名称や、CTPがRegoに含まれるかどうかが異なるため、自分がいる州の運輸当局で必ず確認してください。",
      "Rego（登録）は、車が合法的に公道を走るための登録で、通常6か月〜12か月ごとに更新します。Regoが切れた車は公道を走れず、無登録運転は罰金の対象です。中古車を買うときは、Regoの残り期間を必ず確認しましょう。残りが長いほど、名義変更後すぐに更新費用を払わずに済みます。",
      "CTP（Compulsory Third Party）は、事故で他人にケガをさせた場合の補償をする強制保険です。ここが州で分かれます。NSWではCTP（通称Green Slip）をRegoとは別に自分で購入してから登録します。一方、VIC（TAC charge）やQLDではCTPがRego費用に含まれています。重要なのは、CTPは『人（ケガ）』のみを補償し、相手の車やモノの修理、自分の車の修理はカバーしないことです。物損は任意保険が別に必要です。",
      "Roadworthy/Safety Certificateは、車が安全に走れる状態かを検査した証明で、名義変更や販売のときに必要になる州があります。名称は州でバラバラです（VIC＝Roadworthy Certificate（RWC）、QLD＝Safety Certificate、NSW＝一定年式以上の車の登録更新時に必要なeSafety検査／通称pink slip）。中古車を売買する前に、自分の州で『名義変更にRoadworthy/Safety Certificateが要るか、誰が用意するか』を確認しておきましょう。",
    ],
    keyFacts: [
      { label: "Rego", value: "公道を走る登録。6〜12か月ごとに更新" },
      { label: "CTP", value: "他人のケガを補償する強制保険（物損は対象外）" },
      { label: "CTPの扱い", value: "NSWは別購入（Green Slip）、VIC/QLDはRegoに含む" },
      { label: "Roadworthy(VIC)", value: "Roadworthy Certificate（RWC）" },
      { label: "Safety(QLD)", value: "Safety Certificate" },
      { label: "NSW検査", value: "eSafety inspection（通称 pink slip）" },
    ],
    steps: [
      { title: "州の運輸当局を確認", description: "居住する州の運輸当局サイトで最新の名称・費用を確認します。" },
      { title: "Rego残存を確認", description: "購入前に登録の残り期間と更新時期を把握します。" },
      { title: "CTPの扱いを確認", description: "州がGreen Slip別購入か、Rego込みかを確認します。" },
      { title: "Roadworthy要否を確認", description: "名義変更・売却に安全検査証が必要かを確認します。" },
    ],
    tips: [
      "CTPは『人のケガ』のみ。相手の車・自分の車の修理は任意保険が必要なので、別途加入を検討しましょう。",
      "州をまたいで長期移動するなら、車のRego登録州も意識すると手続きがスムーズです。",
    ],
    warnings: [
      "Regoが切れた車を公道で運転すると罰金・保険無効のリスクがあります。購入時は残存期間を必ず確認してください。",
      "名称・費用・CTPの扱いは州で異なり変わりやすいため、断定せず州の公式サイトで最新情報を確認してください。",
    ],
    faqs: [
      {
        question: "CTPに入っていれば任意保険はいらないですか？",
        answer:
          "いいえ。CTPは事故で他人をケガさせた場合の補償のみで、相手の車やモノの修理、自分の車の修理はカバーしません。物損に備えるには、Third Party Property以上の任意保険が別に必要です。",
      },
      {
        question: "Roadworthy Certificateは全州で必要ですか？",
        answer:
          "必要かどうか・名称は州で異なります。VICはRWC、QLDはSafety Certificate、NSWは一定年式以上でeSafety検査が必要です。名義変更や売却の前に、自分の州の運輸当局で要否を確認してください。",
      },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Transport for NSW｜Registration（CTP/Green Slip・eSafety）",
        url: "https://www.transport.nsw.gov.au/",
        accessedAt: "2026-07-19",
      },
      {
        label: "VicRoads｜Registration & Roadworthy Certificate",
        url: "https://www.vicroads.vic.gov.au/",
        accessedAt: "2026-07-19",
      },
      {
        label: "Queensland Government｜Transport and motoring（Safety Certificate）",
        url: "https://www.qld.gov.au/transport",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: [
      "cars-guide",
      "vehicle-transfer-by-state",
      "car-insurance-comparison",
      "used-car-inspection-checklist",
      "ppsr-check-guide",
    ],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a228",
    title: "中古車の名義変更（Transfer）｜州別の手続きと期限・費用の確認方法",
    slug: "vehicle-transfer-by-state",
    category: "transport",
    hub: "transport",
    priority: "P0",
    searchIntent: "中古車の名義変更のやり方・期限・費用を州別に確認",
    description:
      "中古車を買ったあとの名義変更（registration transfer）の基本を解説。多くの州で買主が14日以内に手続きする必要があり、名義変更手数料に加えて印紙税（stamp duty）がかかります。必要書類と州別の確認先をまとめました。",
    content: [
      "結論から言うと、中古車を個人売買で買ったら、買主（あなた）が原則14日以内に名義変更（registration transfer）を行う必要があります。多くの州で、期限を過ぎると追加料金（late fee）がかかり、名義変更手数料に加えて印紙税（stamp duty、車両価格に応じた税）も支払います。手続きは州の運輸当局（Service NSW、VicRoads、QLD TMRなど）で行い、期限・費用・必要書類は州ごとに異なるため、自分の州の公式サイトで確認してください。",
      "名義変更に一般的に必要なものは、①署名済みの名義変更書類（transfer form、売主・買主双方の署名）、②本人確認書類、③車の登録情報（rego papers）、④州によってはRoadworthy/Safety Certificate（安全検査証）です。売買時に、売主に『いつ・いくらで売った』を記録してもらい、領収書を交わしておくと手続きがスムーズです。売主側にも、買主に売ったことを当局へ届け出る（notice of disposal）義務がある州が多く、これを怠ると売却後の駐車違反や料金が旧オーナーに請求される恐れがあります。",
      "費用の目安は、名義変更手数料＋印紙税です。印紙税は車両価格（または市場価格）に応じて計算され、金額が大きくなることがあるため、購入予算に含めておきましょう。オンラインで手続きできる州（例：Service NSWのオンライン、VicRoadsのオンライン）が増えていますが、Roadworthy/Safety Certificateの提出が必要な場合や、州をまたぐ場合は窓口対応になることもあります。",
      "州をまたいで買った車（例：VICで登録された車をNSWで乗る）を自分の州に登録し直す場合は、名義変更に加えて州間の再登録（re-registration）が必要になり、その州の検査（inspection）を受けることがあります。長距離移動が多いワーホリでは、購入する車の登録州と自分の滞在州を意識しておくと、後の手続きが楽になります。正確な期限・費用・書類は、必ず該当州の運輸当局の公式ページで確認してください。",
    ],
    keyFacts: [
      { label: "手続きする人", value: "買主（あなた）が名義変更を行う" },
      { label: "期限の目安", value: "多くの州で14日以内（遅延で追加料金）" },
      { label: "主な費用", value: "名義変更手数料＋印紙税（stamp duty）" },
      { label: "必要書類", value: "署名済transfer form・本人確認・rego papers" },
      { label: "州により追加", value: "Roadworthy/Safety Certificate" },
      { label: "売主の義務", value: "notice of disposal（売却届）を当局へ" },
    ],
    steps: [
      { title: "売買を記録", description: "売買日・価格・双方の署名を残し、領収書を交わします。" },
      { title: "州の当局を確認", description: "Service NSW/VicRoads/QLD TMR等で最新の期限・費用・書類を確認します。" },
      { title: "必要書類を準備", description: "transfer form・本人確認・rego papers・(必要なら)安全検査証を揃えます。" },
      { title: "期限内に申請", description: "オンラインまたは窓口で名義変更し、手数料と印紙税を支払います。" },
      { title: "登録情報を確認", description: "新しい登録情報が自分名義になったことを確認・保管します。" },
    ],
    tips: [
      "売主にnotice of disposalを出してもらうと、売却後の違反金・料金が旧オーナーに請求される事故を防げます。",
      "印紙税は車両価格に応じて増えるため、予算に含めておきましょう。",
    ],
    warnings: [
      "期限（多くの州で14日）を過ぎると追加料金がかかります。買ったら早めに手続きしましょう。",
      "期限・費用・書類は州で異なり変わりやすいため、断定せず州の運輸当局の公式ページで確認してください。",
    ],
    faqs: [
      {
        question: "名義変更はいつまでにすればいいですか？",
        answer:
          "多くの州で、買主が購入から14日以内に手続きする必要があります。期限を過ぎると追加料金（late fee）がかかることが多いです。正確な期限は州で異なるため、自分の州の運輸当局サイトで確認してください。",
      },
      {
        question: "名義変更にはいくらかかりますか？",
        answer:
          "名義変更手数料に加えて、車両価格に応じた印紙税（stamp duty）がかかります。印紙税は車が高いほど増えるため、購入予算に含めておきましょう。金額は州の公式サイトで試算できます。",
      },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Service NSW｜Transfer of vehicle registration",
        url: "https://www.service.nsw.gov.au/",
        accessedAt: "2026-07-19",
      },
      {
        label: "VicRoads｜Buying and selling a vehicle（transfer）",
        url: "https://www.vicroads.vic.gov.au/",
        accessedAt: "2026-07-19",
      },
      {
        label: "Queensland Government｜Transfer vehicle registration",
        url: "https://www.qld.gov.au/transport",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: [
      "cars-guide",
      "rego-ctp-rwc",
      "ppsr-check-guide",
      "used-car-inspection-checklist",
      "car-insurance-comparison",
    ],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a229",
    title: "CTP・Third Party・Comprehensive保険の違い｜どれに入るべきか",
    slug: "car-insurance-comparison",
    category: "transport",
    hub: "transport",
    priority: "P0",
    searchIntent: "車の保険の種類（CTP/Third Party/Comprehensive）の違いと選び方",
    description:
      "オーストラリアの自動車保険の4種類（CTP・Third Party Property・Third Party Fire & Theft・Comprehensive）の違いを解説。何を補償し何を補償しないかを整理し、ワーホリがどの保険を選ぶべきかの考え方をまとめました。",
    content: [
      "結論から言うと、オーストラリアの自動車保険は『①CTP（強制）、②Third Party Property、③Third Party Fire & Theft、④Comprehensive』の4段階で、上に行くほど補償が広く保険料も高くなります。CTPは加入が義務ですが人のケガしか補償しないため、事故で相手の車やモノを壊したときのために、最低でもThird Party Property（対物）には入っておくのが安全です。予算と車の価値に応じて選びましょう。",
      "①CTP（Compulsory Third Party）は強制保険で、Rego（登録）に紐づきます。補償するのは『事故で他人にケガをさせた場合』のみ。相手の車・モノの修理も、自分の車の修理も一切カバーしません。②Third Party Property（対物）は、あなたが事故で壊した相手の車やモノの修理費を補償します。高級車に追突して数百万円の賠償…という最悪の事態を防げるため、最低限入っておきたい保険です。",
      "③Third Party Fire & Theftは、対物補償に加えて、自分の車が火災・盗難にあった場合を補償します。④Comprehensive（車両保険）は最も手厚く、相手への賠償・自分の車の事故修理・火災・盗難・自然災害などを幅広くカバーします。新しめの車や価値の高い車に乗るなら、Comprehensiveが安心です。逆に安い中古車なら、車両保険料が車の価値に見合わないこともあり、Third Party Property中心で組む選択もあります。",
      "選び方の目安は『自分の車の価値』と『万一の賠償リスク』のバランスです。数百ドルで買った古い車なら、自分の車の修理より他人への賠償に備えるThird Party Propertyが現実的。一方、数千ドル以上の車や、地方で長距離を運転するならComprehensiveを検討します。免責額（excess）や補償範囲、若年・海外免許の条件は保険会社で異なるため、複数社で見積もりを取り、契約前に補償内容を必ず確認しましょう。",
    ],
    keyFacts: [
      { label: "CTP", value: "強制。他人のケガのみ補償（物損・自車は対象外）" },
      { label: "Third Party Property", value: "相手の車・モノの修理を補償（最低限推奨）" },
      { label: "TP Fire & Theft", value: "対物＋自車の火災・盗難" },
      { label: "Comprehensive", value: "賠償＋自車の事故/火災/盗難まで幅広く補償" },
      { label: "選ぶ目安", value: "車の価値＋賠償リスクで判断" },
      { label: "確認点", value: "免責額（excess）・海外免許の条件" },
    ],
    steps: [
      { title: "CTPを確保", description: "Regoに含まれるか別購入か（州による）を確認し、必須のCTPを確保します。" },
      { title: "対物の要否を判断", description: "最低限、相手への賠償に備えるThird Party Propertyを検討します。" },
      { title: "車の価値を評価", description: "自分の車の価値と修理費のバランスで車両保険の要否を考えます。" },
      { title: "複数社で見積もり", description: "免責額・補償範囲・海外免許条件を比較します。" },
      { title: "契約前に条件確認", description: "補償されないケース（除外事項）と免責額を確認します。" },
    ],
    tips: [
      "免責額（excess）が低いプランは保険料が高くなりがち。事故時の自己負担と月々の保険料のバランスで選びましょう。",
      "海外の免許・年齢によって保険料や加入条件が変わることがあります。見積もり時に正直に申告してください。",
    ],
    warnings: [
      "CTPだけでは相手の車・自分の車の修理は一切出ません。物損に備えるには任意保険が別に必要です。",
      "補償範囲・免責・加入条件は保険会社で異なります。契約前に除外事項を必ず確認してください。",
    ],
    faqs: [
      {
        question: "ワーホリは最低どの保険に入るべきですか？",
        answer:
          "強制のCTPに加え、最低限Third Party Property（対物）に入っておくのがおすすめです。事故で高額な車に損害を与えた場合の賠償を大きく減らせます。新しめの車や長距離運転が多いならComprehensiveも検討しましょう。",
      },
      {
        question: "安い中古車でもComprehensiveに入るべきですか？",
        answer:
          "車の価値が低い場合、車両保険料が割高に感じることがあります。その場合はThird Party Property中心にして賠償リスクに備える選択も現実的です。車の価値・運転距離・予算で判断してください。",
      },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "moneysmart.gov.au（ASIC）｜Car insurance",
        url: "https://moneysmart.gov.au/car-insurance",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: [
      "cars-guide",
      "rego-ctp-rwc",
      "roadside-assistance",
      "car-breakdown-guide",
      "vehicle-transfer-by-state",
    ],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a230",
    title: "ロードサービスの比較と呼び方｜故障・バッテリー・パンク時の頼り先",
    slug: "roadside-assistance",
    category: "transport",
    hub: "transport",
    priority: "P1",
    searchIntent: "ロードサービス（自動車クラブ）の州別の呼び方と選び方",
    description:
      "オーストラリアのロードサービス（roadside assistance）の州別クラブ（NRMA・RACV・RACQ等）と、バッテリー上がり・パンク・鍵の閉じ込め・レッカーなど何を頼めるかを解説。加入方法と、州をまたいで使える相互利用についてもまとめました。",
    content: [
      "結論から言うと、車が路上で動かなくなったときに助けを呼べるのがロードサービス（roadside assistance）で、各州の自動車クラブ（NSW＝NRMA、VIC＝RACV、QLD＝RACQ、SA＝RAA、WA＝RAC、TAS＝RACT、NT＝AANT）に会員登録して使うのが一般的です。バッテリー上がり・パンク・ガス欠・鍵の閉じ込め・レッカーなどに対応してくれるため、地方や長距離を運転するワーホリは加入しておくと安心です。",
      "頼める内容は、①バッテリー上がりのジャンプスタート、②パンク時のスペアタイヤ交換、③鍵の閉じ込み（lockout）対応、④ガス欠時の少量給油、⑤自力で直せない故障のレッカー(牽引)、などです。クラブや会員プランによって、レッカーで運べる距離や年間の利用回数に上限があるため、加入時に補償内容を確認しましょう。地方を長く運転するなら、レッカー距離が長い上位プランが安心です。",
      "加入方法は、各州クラブのサイトやアプリから会員登録し、年会費を払う形が基本です。多くのクラブには相互利用（reciprocal rights）があり、例えばNRMA会員が他州でRACVやRACQのサービスを受けられます。州をまたいで移動するワーホリには便利な仕組みですが、条件はクラブごとに違うため、長距離移動の前に自分のプランの適用範囲を確認してください。",
      "なお、任意の自動車保険（特にComprehensive）にロードサービスが付帯している場合や、レンタカー・購入した車の販売店の保証に含まれる場合もあります。二重加入を避けるため、まず自分が今どんなロードサービスを使えるかを確認しましょう。緊急で車が危険な場所（高速道路上など）に止まってしまい、身の危険がある場合は、ロードサービスの前に000（緊急通報）を優先してください。",
    ],
    keyFacts: [
      { label: "NSW/ACT", value: "NRMA" },
      { label: "VIC", value: "RACV" },
      { label: "QLD", value: "RACQ" },
      { label: "SA/WA/TAS/NT", value: "RAA / RAC / RACT / AANT" },
      { label: "対応内容", value: "バッテリー・パンク・鍵・ガス欠・レッカー" },
      { label: "相互利用", value: "他州クラブのサービスを使えることが多い（要確認）" },
    ],
    steps: [
      { title: "今使える手段を確認", description: "保険付帯・販売店保証など既存のロードサービスがないか確認します。" },
      { title: "州クラブを選ぶ", description: "居住州のクラブ（NRMA/RACV/RACQ等）とプランを比較します。" },
      { title: "レッカー距離を確認", description: "地方運転が多いなら牽引距離の長いプランを選びます。" },
      { title: "会員登録", description: "サイト/アプリで登録し、会員証（アプリ）を用意します。" },
      { title: "相互利用を確認", description: "州をまたぐ前に他州での適用条件を確認します。" },
    ],
    tips: [
      "会員アプリを入れておくと、GPSで現在地を送って迅速に呼べることが多いです。",
      "加入直後は利用できない待機期間（waiting period）が設定される場合があります。出発前に早めの加入を。",
    ],
    warnings: [
      "レッカー距離・利用回数に上限があるプランが多いため、地方運転前に補償範囲を確認してください。",
      "高速道路上など危険な場所での立ち往生で身の危険がある場合は、まず000に連絡してください。",
    ],
    faqs: [
      {
        question: "ロードサービスは何をしてくれますか？",
        answer:
          "バッテリー上がりのジャンプスタート、パンク時のスペア交換、鍵の閉じ込み対応、ガス欠時の少量給油、自力で直せないときのレッカー(牽引)などに対応します。プランにより牽引距離や利用回数に上限があります。",
      },
      {
        question: "他の州でも使えますか？",
        answer:
          "多くのクラブには相互利用（reciprocal rights）があり、他州でも系列クラブのサービスを受けられることが一般的です。ただし条件はクラブ・プランで異なるため、州をまたぐ移動の前に適用範囲を確認してください。",
      },
    ],
    phrases: [
      { en: "My car has broken down. Can you send roadside assistance?", ja: "車が故障しました。ロードサービスを手配してもらえますか？" },
      { en: "I have a flat battery / a flat tyre.", ja: "バッテリーが上がりました／タイヤがパンクしました。" },
      { en: "I'm a member — here is my membership number.", ja: "会員です。会員番号はこちらです。" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "NRMA（NSW/ACT）｜Roadside assistance",
        url: "https://www.mynrma.com.au/",
        accessedAt: "2026-07-19",
      },
      {
        label: "RACV（VIC）｜Emergency roadside assistance",
        url: "https://www.racv.com.au/",
        accessedAt: "2026-07-19",
      },
      {
        label: "RACQ（QLD）｜Roadside assistance",
        url: "https://www.racq.com.au/",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: [
      "cars-guide",
      "car-breakdown-guide",
      "flat-tyre-guide",
      "car-insurance-comparison",
      "rego-ctp-rwc",
    ],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a231",
    title: "車が故障したときの対応｜安全確保・牽引・修理までの手順",
    slug: "car-breakdown-guide",
    category: "transport",
    hub: "transport",
    priority: "P0",
    searchIntent: "車が故障・立ち往生したときの安全手順と連絡先",
    description:
      "運転中に車が故障・立ち往生したときの対応手順を解説。安全な場所への停車、ハザードランプ、車内待機か車外避難の判断、ロードサービスや000への連絡、高速道路・地方での注意点まで、いざというときに備える基本をまとめました。",
    content: [
      "結論から言うと、車が故障したら最優先は『安全の確保』です。まずできるだけ左側の路肩や安全な場所に停車し、ハザードランプを点灯させます。その上で、状況に応じてロードサービス（NRMA/RACV/RACQ等）に連絡します。事故や火災、負傷者がいる、あるいは高速道路上で身に危険が迫る場合は、迷わず000（緊急通報）に電話してください。パニックにならず、順番に対応することが大切です。",
      "停車したら、後続車から見えるようハザードを点け、可能なら発煙筒や三角表示板を車の後方に置きます。ここで重要なのが『車内に残るか、車外に出るか』の判断です。交通量の多い道路や高速道路では、車外に出て走行車線側に立つのは非常に危険です。安全なら乗員はガードレールの外側など道路から離れた場所へ避難し、路肩が狭く危険な場合の判断は状況によります。まずは自分と同乗者の身の安全を最優先にしてください。",
      "安全を確保したら、ロードサービスに連絡します。会員なら会員番号を伝え、現在地（GPS・道路名・最寄りの交差点や距離標）と症状（動かない/異音/オーバーヒート等）を正確に伝えます。会員アプリは位置情報を送れて便利です。オーバーヒート（水温警告）の場合は、無理に走り続けるとエンジンが損傷するため、安全な場所に停めてエンジンを冷ましてから連絡しましょう。自力で直せない場合は、無理をせず牽引（tow）を依頼します。",
      "地方やアウトバックでは、携帯の電波が届かない区間があり、助けが来るまで時間がかかることがあります。長距離を走る前には、燃料・水・簡単な工具を積み、ロードサービスへの加入と、家族・友人への行程共有をしておくと安心です。故障で修理工場（mechanic）に運んだら、修理前に見積もり（quote）を必ずもらい、内容に納得してから作業を許可しましょう。",
    ],
    keyFacts: [
      { label: "最優先", value: "安全確保（左側に停車・ハザード点灯）" },
      { label: "緊急時", value: "事故/火災/負傷/身の危険は000に通報" },
      { label: "連絡先", value: "会員のロードサービス（NRMA/RACV/RACQ等）" },
      { label: "伝える情報", value: "現在地・症状・会員番号" },
      { label: "オーバーヒート", value: "無理に走らず停車してエンジンを冷ます" },
      { label: "地方の注意", value: "電波が届かない区間あり。事前準備が重要" },
    ],
    steps: [
      { title: "安全な場所に停車", description: "できるだけ左側の路肩・安全な場所に停め、ハザードを点灯します。" },
      { title: "後続車に知らせる", description: "可能なら三角表示板を後方に置き、存在を知らせます。" },
      { title: "避難を判断", description: "交通量が多い/高速では道路から離れた安全な場所へ避難します。" },
      { title: "緊急度を判断", description: "事故・火災・負傷・身の危険があれば000に連絡します。" },
      { title: "ロードサービスに連絡", description: "現在地・症状・会員番号を伝えます。アプリで位置送信も可。" },
      { title: "修理は見積もり後に", description: "工場では修理前に見積もりを取り、納得してから許可します。" },
    ],
    tips: [
      "ロードサービスの会員アプリを入れておくと、GPSで現在地を送れて手配が早まります。",
      "水温警告（オーバーヒート）が出たら走行を止めるのが鉄則。走り続けるとエンジンが壊れます。",
    ],
    warnings: [
      "交通量の多い道路・高速で車外の走行車線側に立つのは非常に危険です。道路から離れて避難してください。",
      "地方・アウトバックは電波が届かず助けが遅れることがあります。燃料・水・行程共有など事前準備を。",
    ],
    faqs: [
      {
        question: "高速道路で故障したらどうすればいいですか？",
        answer:
          "できるだけ左の路肩に停め、ハザードを点灯します。走行車線側で車外に立つのは危険なので、安全ならガードレールの外側など道路から離れた場所へ避難し、ロードサービスに連絡します。身の危険がある場合は000に通報してください。",
      },
      {
        question: "オーバーヒート（水温警告）が出たら走り続けてもいいですか？",
        answer:
          "いいえ。無理に走るとエンジンが深刻に損傷します。安全な場所に停め、エンジンを止めて冷ましてから、ロードサービスに連絡してください。ボンネットを開ける際は蒸気による火傷に注意しましょう。",
      },
    ],
    phrases: [
      { en: "My car has broken down on the highway.", ja: "高速道路で車が故障しました。" },
      { en: "The engine is overheating.", ja: "エンジンがオーバーヒートしています。" },
      { en: "I need a tow to the nearest mechanic.", ja: "最寄りの修理工場までレッカーが必要です。" },
      { en: "Can I get a quote before you start the repair?", ja: "修理を始める前に見積もりをもらえますか？" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Triple Zero (000)（Australian Government）｜緊急通報",
        url: "https://www.triplezero.gov.au/",
        accessedAt: "2026-07-19",
      },
      {
        label: "NRMA｜Breakdown & roadside assistance",
        url: "https://www.mynrma.com.au/",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: [
      "cars-guide",
      "roadside-assistance",
      "flat-tyre-guide",
      "car-insurance-comparison",
      "used-car-inspection-checklist",
    ],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a232",
    title: "タイヤがパンクしたとき｜スペアタイヤ・修理・交換の対応手順",
    slug: "flat-tyre-guide",
    category: "transport",
    hub: "transport",
    priority: "P1",
    searchIntent: "パンク時の対応・スペアタイヤ交換・応急修理の手順",
    description:
      "運転中にタイヤがパンクしたときの対応を解説。安全な停車、スペアタイヤ（テンポラリースペアの速度制限）への交換手順、パンク修理キットやロードサービスの使い方、走行中のパンクで気をつける点まで、初心者向けにまとめました。",
    content: [
      "結論から言うと、タイヤがパンクしたら、まず慌てずハンドルをしっかり握って減速し、安全な場所（できるだけ左側の平らな路肩）に停車します。そのうえで、①スペアタイヤに交換する、②パンク修理キットで応急処置する、③ロードサービスを呼ぶ、のいずれかで対応します。交換に自信がない場合や交通量の多い危険な場所では、無理をせずロードサービス（NRMA/RACV/RACQ等）を呼ぶのが安全です。",
      "走行中に突然『バン』という音とともにハンドルが取られた場合は、急ブレーキ・急ハンドルは避け、アクセルを緩めてまっすぐ減速し、安全を確認して左に寄せます。停車したらハザードを点け、可能なら三角表示板を後方に置きます。交通量の多い道路側でのタイヤ交換は危険なので、路肩が狭い・車の流れが速い場所では、車外作業をせずロードサービスを待つ判断も大切です。",
      "スペアタイヤに交換する場合の基本手順は、①パーキングブレーキをかけ輪止めをする、②ホイールナットを軽く緩める、③ジャッキで車体を上げる、④ナットを外してタイヤを交換、⑤ナットを対角線の順に締める、⑥ジャッキを下ろして本締め、です。注意したいのが『テンポラリースペア（応急用の細いタイヤ、通称スペースセーバー）』で、多くは時速80km程度までの速度制限があり、あくまで最寄りの修理工場までの応急用です。早めに正規のタイヤに交換・修理してもらいましょう。",
      "近年はスペアタイヤを積まず、パンク修理キット（応急補修剤＋コンプレッサー）を搭載する車も増えています。キットは小さな穴には有効ですが、大きな損傷やサイドウォールの損傷には使えません。応急処置後も低速で最寄りの工場へ向かい、タイヤの点検・交換を受けてください。自分で対応できないときは、ロードサービスや工場に連絡し、レッカーや出張対応を依頼しましょう。",
    ],
    keyFacts: [
      { label: "最初にやること", value: "減速して安全な左路肩に停車・ハザード点灯" },
      { label: "対応の選択肢", value: "スペア交換／修理キット／ロードサービス" },
      { label: "テンポラリースペア", value: "多くは約80km/h制限・応急用（早めに交換）" },
      { label: "修理キットの限界", value: "小さな穴のみ。サイドウォール損傷は不可" },
      { label: "危険な場所", value: "交通量が多い/高速では車外作業を避け救援を呼ぶ" },
      { label: "交換後", value: "低速で最寄りの工場へ、点検・本修理を受ける" },
    ],
    steps: [
      { title: "安全に減速・停車", description: "急操作を避けてまっすぐ減速し、左の平らな路肩に停めます。" },
      { title: "ハザード・表示", description: "ハザードを点け、可能なら三角表示板を後方に置きます。" },
      { title: "作業可否を判断", description: "危険な場所や不安があればロードサービスを呼びます。" },
      { title: "スペアに交換", description: "輪止め→ナット緩め→ジャッキ→交換→対角に締める、の順で行います。" },
      { title: "速度制限を守る", description: "テンポラリースペアは低速で。最寄りの工場へ向かいます。" },
      { title: "本修理を受ける", description: "工場でタイヤの点検・修理・交換を受けます。" },
    ],
    tips: [
      "月に一度はスペアタイヤの空気圧と、ジャッキ・工具が揃っているかを確認しておくと安心です。",
      "ナットは対角線の順（星形）に少しずつ締めると、タイヤが均等に固定されます。",
    ],
    warnings: [
      "テンポラリースペアは速度・距離に制限があります。高速走行や長距離走行はしないでください。",
      "交通量の多い道路・高速の走行車線側でのタイヤ交換は危険です。無理せずロードサービスを呼びましょう。",
    ],
    faqs: [
      {
        question: "パンクしたまま少し走ってもいいですか？",
        answer:
          "できるだけ避けてください。パンクしたまま走るとタイヤやホイールが損傷し、車のコントロールも失いやすくなります。安全な場所まではごく低速で移動し、停車してスペア交換・修理キット・ロードサービスで対応しましょう。",
      },
      {
        question: "スペアタイヤに換えたあと、そのまま乗り続けていいですか？",
        answer:
          "応急用のテンポラリースペア（細いスペースセーバー）は、多くが時速80km程度までの制限があり、長距離・高速走行には向きません。あくまで最寄りの工場までの応急用なので、早めに正規タイヤへ交換・修理してください。",
      },
    ],
    phrases: [
      { en: "I've got a flat tyre. Can you help?", ja: "タイヤがパンクしました。助けてもらえますか？" },
      { en: "I don't have a spare — can you send roadside assistance?", ja: "スペアがありません。ロードサービスを手配できますか？" },
      { en: "Can you check and repair or replace the tyre?", ja: "タイヤを点検して修理か交換をお願いできますか？" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "NRMA｜Flat tyre & roadside assistance",
        url: "https://www.mynrma.com.au/",
        accessedAt: "2026-07-19",
      },
      {
        label: "RACV｜Tyre & battery assistance",
        url: "https://www.racv.com.au/",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: [
      "cars-guide",
      "roadside-assistance",
      "car-breakdown-guide",
      "used-car-inspection-checklist",
      "car-insurance-comparison",
    ],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a233",
    title: "整備工場・タイヤショップで使う英語フレーズ｜症状の伝え方と見積り確認",
    slug: "mechanic-tyre-shop-english",
    category: "transport",
    hub: "transport",
    priority: "P1",
    searchIntent: "整備工場・タイヤショップで車の不具合を英語で伝える表現",
    description:
      "ワーホリで車を整備工場（mechanic）やタイヤショップに持ち込むときに使える英語フレーズ集。異音・警告灯・オイル漏れなどの症状の伝え方、見積り（quote）の確認、追加作業の同意など、車のトラブル対応でそのまま使える表現を日本語訳つきで紹介します。",
    content: [
      "結論から言うと、整備工場やタイヤショップでは『①症状を伝える、②見積り（quote）を先にもらう、③追加作業は事前に確認する』の3つを英語で言えれば大きなトラブルは防げます。専門用語を完璧に覚える必要はなく、症状を短く伝えて『いくらかかるか先に教えて』と言えれば、後から高額請求される事態を避けられます。",
      "まず症状の伝え方です。『There's a strange noise from the engine（エンジンから変な音がする）』『The warning light is on（警告灯が点いている）』『The car is pulling to the left（左に流れる）』のように、どこで・どんな症状かを短く言えば十分です。正確な原因は整備士が診断するので、こちらは気づいたことを伝えるだけで構いません。",
      "次に費用の確認です。作業前に必ず『Can I get a quote first?（先に見積りをもらえますか）』と聞き、『How much will it cost?（いくらかかりますか）』で総額を確認します。作業中に別の不具合が見つかった場合も、勝手に直されないよう『Please call me before doing any extra work（追加作業の前に電話してください）』と伝えておくと安心です。",
      "タイヤショップでは『I have a flat tyre（パンクした）』『Can you check the tyre pressure?（空気圧を見てもらえますか）』『How much tread is left?（残り溝はどのくらい？）』などが使えます。分からない単語は無理に英語にせず、車を指さして『This one is making a noise（これが音を出している）』のように実物を見せながら伝えれば十分通じます。",
    ],
    keyFacts: [
      { label: "整備工場", value: "mechanic / auto repair shop / workshop" },
      { label: "見積り", value: "quote（作業前に必ずもらう）" },
      { label: "パンク", value: "flat tyre（tire は米国綴り）" },
      { label: "警告灯", value: "warning light / dashboard light" },
      { label: "追加作業", value: "extra work（事前連絡を依頼しておく）" },
    ],
    steps: [
      { title: "症状を短く伝える", description: "どこで・どんな症状か（音・光・振動）を簡潔に説明します。" },
      { title: "見積りを先にもらう", description: "『Can I get a quote first?』で作業前に総額を確認します。" },
      { title: "追加作業の条件を伝える", description: "勝手に直さず、追加は電話で連絡してもらうよう頼みます。" },
      { title: "作業内容と保証を確認", description: "何を交換・修理したか、保証（warranty）があるか聞きます。" },
      { title: "領収書をもらう", description: "帰国前の売却や保険請求に備えて記録を残します。" },
    ],
    tips: [
      "分からない単語は車を指さして『this one』で伝えれば十分通じます。無理に専門用語を使う必要はありません。",
      "見積りは口頭でなく書面（written quote）でもらうと、後の請求トラブルを避けられます。",
      "翻訳アプリで症状を事前に英文にしておき、画面を見せながら話すとスムーズです。",
    ],
    phrases: [
      { en: "There's a strange noise from the engine.", ja: "エンジンから変な音がします。", note: "brakes / front wheel などに置き換え可" },
      { en: "The warning light is on.", ja: "警告灯が点いています。" },
      { en: "The car is pulling to the left.", ja: "車が左に流れます。", note: "アライメントやタイヤの症状を伝えるとき" },
      { en: "Can I get a quote first?", ja: "先に見積りをもらえますか？" },
      { en: "How much will it cost?", ja: "いくらかかりますか？" },
      { en: "Please call me before doing any extra work.", ja: "追加作業の前に電話してください。" },
      { en: "I have a flat tyre.", ja: "パンクしました。" },
      { en: "Can you check the tyre pressure?", ja: "空気圧を見てもらえますか？" },
      { en: "How much tread is left on the tyres?", ja: "タイヤの残り溝はどのくらいですか？" },
    ],
    faqs: [
      {
        question: "英語が苦手でも整備工場に持ち込めますか？",
        answer:
          "問題ありません。症状を短く伝え、翻訳アプリや実物を見せながら説明すれば十分通じます。大切なのは作業前に見積りをもらい、追加作業を勝手にされないよう伝えておくことです。",
      },
      {
        question: "見積りより高く請求されたら？",
        answer:
          "書面の見積り（written quote）があれば、それを根拠に交渉できます。事前に『追加作業は連絡してから』と伝えておけば、想定外の高額請求を防げます。納得できない場合は各州のConsumer Affairs／Fair Tradingに相談できます。",
      },
    ],
    relatedSlugs: [
      "car-breakdown-guide",
      "flat-tyre-guide",
      "roadside-assistance",
      "used-car-inspection-checklist",
      "car-accident-guide",
    ],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a234",
    title: "ガソリン代を節約する方法｜価格比較アプリと給油タイミング",
    slug: "fuel-saving-apps",
    category: "transport",
    hub: "transport",
    priority: "P1",
    searchIntent: "オーストラリアでガソリン価格を比較して安く給油する方法",
    description:
      "オーストラリアはガソリン価格が周期的に上下する『価格サイクル』があり、公式の価格比較サイト・アプリを使えば同じ地域でも大きく節約できます。NSWのFuelCheckやWAのFuelWatchなど州公式ツールの使い方と、安いタイミングで給油するコツを解説します。",
    content: [
      "結論から言うと、オーストラリアでガソリン代を節約する基本は『①州の公式価格比較ツールで近くの最安店を探す、②価格サイクルの安い時期に給油する、③割引プログラムを併用する』の3つです。特に都市部では同じ日でもスタンドによってリッター20〜40セント以上差が出ることがあり、比較ツールを使うだけで満タン数ドル〜十数ドル節約できます。",
      "州によっては政府が価格の公開を義務づけており、公式ツールで正確な価格を確認できます。NSWは『FuelCheck』、西オーストラリアは『FuelWatch』が政府公式で、リアルタイム／翌日価格を無料で確認できます。他州でも民間アプリ（各社の価格比較アプリ等）が普及しており、出発前にアプリで最安店を調べてから給油するのが習慣になっています。",
      "多くの都市では『price cycle（価格サイクル）』があり、数週間かけて価格が上がり、その後急落するパターンを繰り返します。サイクルの底に近いタイミングで給油すると安く済みます。FuelWatchやFuelCheckは価格の傾向も見られるため、上がり始めの前に満タンにするのが賢い方法です。",
      "さらに、スーパー（Coles・Woolworths）のレシートに付く給油割引（例：4セント/L引き）や、各スタンドチェーンのアプリ会員割引を併用すると効果が高まります。ただし遠くの安いスタンドまで走ると、そのガソリン代で節約分が消えることもあるため、通り道や近場で最安を選ぶのが現実的です。",
    ],
    keyFacts: [
      { label: "NSW公式", value: "FuelCheck（政府運営・無料）" },
      { label: "WA公式", value: "FuelWatch（政府運営・翌日価格を公開）" },
      { label: "価格差", value: "同日でもリッター20〜40セント以上差が出ることも" },
      { label: "価格サイクル", value: "数週間で上下。底で給油すると安い" },
      { label: "割引併用", value: "スーパーの給油割引・チェーンのアプリ会員" },
    ],
    steps: [
      { title: "州の比較ツールを入れる", description: "NSWはFuelCheck、WAはFuelWatch、他州は価格比較アプリを準備します。" },
      { title: "近くの最安店を探す", description: "出発前にアプリで通り道・近場の最安価格を確認します。" },
      { title: "価格サイクルを見る", description: "上がり始める前、底に近いタイミングで満タンにします。" },
      { title: "割引を併用する", description: "スーパーの給油割引やチェーンの会員割引を重ねます。" },
      { title: "遠出しすぎない", description: "節約分を燃料費で相殺しないよう近場で選びます。" },
    ],
    tips: [
      "長距離ドライブ前は、都市を出る前に安いうちに満タンにしておくと安心です。地方は選択肢が少なく高くなりがちです。",
      "同じチェーンでも店舗ごとに価格が違うため、ブランドより『今この店がいくらか』で選びましょう。",
      "ディーゼル車とガソリン車で価格が異なります。自分の車の燃料種別で比較してください。",
    ],
    faqs: [
      {
        question: "どのアプリが一番正確ですか？",
        answer:
          "NSWのFuelCheckとWAのFuelWatchは政府が価格公開を義務づけているため信頼性が高いです。他州では民間の価格比較アプリが実用的ですが、価格は変動するため給油直前に確認するのが確実です。",
      },
      {
        question: "本当に節約になりますか？",
        answer:
          "都市部では同じ地域でもリッター単価に差があり、満タンで数ドル〜十数ドル変わることがあります。頻繁に運転するワーホリなら年間でまとまった節約になります。ただし遠くまで走ると燃料費で相殺されるため近場での比較が基本です。",
      },
    ],
    officialSources: [
      { label: "FuelCheck NSW（NSW政府）", url: "https://www.fuelcheck.nsw.gov.au/", accessedAt: "2026-07-19" },
      { label: "FuelWatch（西オーストラリア州政府）", url: "https://www.fuelwatch.wa.gov.au/", accessedAt: "2026-07-19" },
    ],
    verifiedAt: "2026-07-19",
    relatedSlugs: [
      "cars-guide",
      "car-insurance-comparison",
      "rego-ctp-rwc",
      "remote-driving-safety",
      "intercity-transport",
    ],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a235",
    title: "有料道路・Toll・Linktの支払い方法｜未払いを防ぐ仕組みと注意点",
    slug: "tolls-linkt-guide",
    category: "transport",
    hub: "transport",
    priority: "P1",
    searchIntent: "オーストラリアの有料道路（toll）の支払い方法と未払い対策",
    description:
      "シドニー・メルボルン・ブリスベンの有料道路（toll road）は現金では払えず、Linkt（Transurban）などのアカウントやパスで後払いします。ワーホリが知らずに未払いで罰金を受けないための支払い方法、レンタカーの扱い、最近の通行料の払い方を解説します。",
    content: [
      "結論から言うと、オーストラリアの有料道路は料金所で現金を払う仕組みがなく、車のナンバー（number plate）を読み取って後から請求されます。支払い手段を用意していないと未払い（unpaid toll）となり、追加手数料や罰金につながるため、シドニー・メルボルン・ブリスベンなど有料道路のある都市で運転する前に支払い方法を決めておく必要があります。",
      "最も一般的なのがLinkt（運営会社Transurban）のアカウントです。Linktでは、アカウントを作ってナンバーを登録しておけば通行料が自動で引き落とされます。アカウントを作らずに通った場合でも、Linktのサイトで『pay a recent toll（最近の通行料を支払う）』からナンバーを入力して数日以内に後払いできます。都市によって運営会社やパスの種類が異なるため、走る道路の運営者を確認しましょう。",
      "自分の車を持っている場合は、走行前にLinkt等でアカウントを作りナンバーを登録しておくのが最も確実です。短期間だけ通る場合は、通った後にウェブで後払いする方法（通常3日程度の猶予）もあります。放置すると通行料に加えて管理手数料（administration fee）が上乗せされ、最終的に罰金化するため、早めに払うのが鉄則です。",
      "レンタカーの場合は、多くの会社が独自のtoll処理サービス（1日あたり手数料＋通行料）を用意しています。有料道路を通ると後日カードに請求されますが、手数料が割高になりがちです。有料道路を避けられるなら、カーナビやマップアプリで『avoid tolls（有料道路を避ける）』を設定するのも一つの方法です。返却後の請求で驚かないよう、契約時にtollの扱いを必ず確認してください。",
    ],
    keyFacts: [
      { label: "支払い方式", value: "現金不可。ナンバー読取りで後払い" },
      { label: "主要運営", value: "Linkt（Transurban）：Sydney/Melbourne/Brisbane" },
      { label: "アカウントなし", value: "『pay a recent toll』でナンバー入力し後払い" },
      { label: "後払い猶予", value: "通常3日程度（放置で手数料・罰金）" },
      { label: "レンタカー", value: "会社のtollサービス（手数料＋通行料）" },
    ],
    steps: [
      { title: "走る都市を確認", description: "Sydney/Melbourne/Brisbaneなど有料道路のある都市かを調べます。" },
      { title: "自分の車はアカウント登録", description: "Linkt等でアカウントを作りナンバーを登録しておきます。" },
      { title: "通ったら早めに払う", description: "アカウントがなければ『pay a recent toll』で後払いします。" },
      { title: "レンタカーは契約時に確認", description: "toll処理サービスの手数料と請求方法を確認します。" },
      { title: "避けたいならナビ設定", description: "マップアプリで『avoid tolls』を有効にします。" },
    ],
    tips: [
      "有料道路には料金所ゲートがなく、そのまま通過できてしまうため『気づかず通っていた』が起こりがちです。通ったら早めに確認しましょう。",
      "都市を離れる前・レンタカー返却前に未払いがないか確認すると、帰国後の請求トラブルを防げます。",
      "短期滞在なら都度後払い、長期・毎日通勤で使うならアカウント登録がお得です。",
    ],
    warnings: [
      "未払いを放置すると通行料に管理手数料が加算され、最終的に罰金（fine）になります。少額でも必ず支払ってください。",
    ],
    faqs: [
      {
        question: "アカウントを作らずに有料道路を通ってしまいました。どうすれば？",
        answer:
          "Linktのサイトで『pay a recent toll』からナンバーを入力すれば、アカウントなしでも後払いできます。通常3日程度の猶予があるため、気づいたら早めに支払いましょう。放置すると手数料が上乗せされます。",
      },
      {
        question: "レンタカーで有料道路を通るとどうなりますか？",
        answer:
          "多くのレンタカー会社は独自のtoll処理サービスがあり、1日あたりの手数料＋実際の通行料が後日カードに請求されます。手数料が割高なので、契約時に扱いを確認し、避けられる場合はナビで『avoid tolls』を設定するのも手です。",
      },
    ],
    officialSources: [
      { label: "Linkt（Transurban）", url: "https://www.linkt.com.au/", accessedAt: "2026-07-19" },
    ],
    verifiedAt: "2026-07-19",
    relatedSlugs: [
      "cars-guide",
      "rent-a-car-guide",
      "parking-fines-guide",
      "transport-payment-guide",
      "car-insurance-comparison",
    ],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a236",
    title: "駐車ルールと罰金の基本｜標識の読み方と異議申立ての流れ",
    slug: "parking-fines-guide",
    category: "transport",
    hub: "transport",
    priority: "P1",
    searchIntent: "オーストラリアの駐車標識の読み方と駐車違反の罰金・異議申立て",
    description:
      "オーストラリアの駐車標識（parking sign）は時間制限や許可制などルールが細かく、読み間違えると高額の駐車違反（parking fine）を受けます。標識の基本的な読み方、やってはいけない駐車、罰金を受けたときの支払い・異議申立て（appeal）の流れを解説します。",
    content: [
      "結論から言うと、オーストラリアで駐車違反を避ける基本は『標識（parking sign）を必ず読む、時間制限と有料時間帯を守る、禁止エリアに停めない』ことです。標識は『1P（1時間まで）』『2P（2時間まで）』『Permit Zone（許可証エリア）』など細かく、曜日・時間帯で条件が変わります。読み間違えると数十〜百数十ドルの罰金になるため、停める前に必ず標識を確認しましょう。",
      "標識の読み方の基本です。『1P』『2P』は駐車可能な最大時間（1P＝1時間、2P＝2時間）、『Ticket』や『Meter』は有料、矢印は規制が及ぶ範囲を示します。『No Parking』は短時間の乗降のみ可（積み下ろしは可、待機不可）、『No Stopping（黄色線）』は停止すら禁止です。複数の標識が重なっている場所では、それぞれの曜日・時間帯の条件をすべて満たす必要があります。",
      "特に注意すべきは、バス停・消火栓前・障がい者専用（Disabled/Permit）・クリアウェイ（Clearway：指定時間帯は駐停車禁止で牽引対象）です。これらは罰金が高く、レッカー移動（tow）されることもあります。また、住宅街の許可制エリア（Resident Permit）は許可証がないと停められません。分かりにくい場所では、少し歩いても確実に合法な場所に停めるのが安全です。",
      "駐車違反の通知（infringement notice）を受けたら、記載の期限までに支払うのが基本です。標識が隠れていた・条件を満たしていたなど正当な理由がある場合は、発行元（多くは自治体＝council）のウェブから異議申立て（appeal / review）ができます。写真など証拠があると有利です。放置すると金額が上がったり法的手続きに進むため、支払うか異議を出すかを期限内に決めましょう。",
    ],
    keyFacts: [
      { label: "1P / 2P", value: "駐車可能な最大時間（1P＝1時間, 2P＝2時間）" },
      { label: "No Parking", value: "乗降のみ可。待機・駐車は不可" },
      { label: "No Stopping", value: "停止も禁止（黄色い線）" },
      { label: "Clearway", value: "指定時間帯は駐停車禁止・牽引対象" },
      { label: "異議申立て", value: "発行元（council等）へappeal/review" },
    ],
    steps: [
      { title: "停める前に標識を読む", description: "時間制限・有料時間帯・曜日条件をすべて確認します。" },
      { title: "禁止エリアを避ける", description: "バス停・消火栓・障がい者専用・クリアウェイに停めない。" },
      { title: "有料なら支払う", description: "チケット購入やアプリ決済で時間分を必ず払います。" },
      { title: "時間を守って戻る", description: "制限時間内に移動。延長不可の場所も多いです。" },
      { title: "罰金は期限内に対応", description: "支払うか、正当な理由があれば異議申立てします。" },
    ],
    tips: [
      "多くの都市で駐車料金をアプリ（EasyPark等）で払え、残り時間の確認や延長ができます。",
      "標識が複数ある場所は『一番厳しい条件』に合わせると安全です。",
      "違反を証明する写真（標識や停めた状況）を撮っておくと、異議申立てのとき役立ちます。",
    ],
    warnings: [
      "クリアウェイや禁止エリアはレッカー移動されることがあり、車の返還に高額な費用がかかります。",
    ],
    faqs: [
      {
        question: "標識が分かりにくい場所ではどうすれば？",
        answer:
          "複数の標識がある場合は、それぞれの曜日・時間帯の条件をすべて満たす必要があります。判断に迷うときは、少し歩いても明確に合法な場所に停めるのが安全です。心配なら停めた時点の標識を写真に残しておきましょう。",
      },
      {
        question: "駐車違反に納得できないときは？",
        answer:
          "発行元（多くは自治体＝council）のウェブサイトから異議申立て（appeal / review）ができます。標識が隠れていた・条件を満たしていたなどの理由と、写真などの証拠を添えて期限内に申請します。放置すると金額が上がるので早めに対応してください。",
      },
    ],
    relatedSlugs: [
      "cars-guide",
      "tolls-linkt-guide",
      "car-accident-guide",
      "rego-ctp-rwc",
      "rent-a-car-guide",
    ],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a237",
    title: "交通事故に遭ったときの対応｜情報交換・警察・保険の手順",
    slug: "car-accident-guide",
    category: "transport",
    hub: "transport",
    priority: "P0",
    searchIntent: "オーストラリアで交通事故に遭ったときの対応手順",
    description:
      "ワーホリ中に交通事故に遭ったときの正しい対応手順。まず安全確保と負傷者対応（重大なら000）、相手との情報交換（名前・連絡先・ナンバー・保険）、警察への届出が必要なケース、保険会社への連絡までを落ち着いて進められるように解説します。",
    content: [
      "結論から言うと、交通事故に遭ったらまず『①安全確保と負傷者の確認（重大なら000へ）、②相手と情報交換、③証拠の記録、④保険会社へ連絡』の順で対応します。慌てて示談したりその場を離れたりせず、必要な情報を確実に集めることが後の保険手続きを左右します。ケガ人がいる・危険物・車が動かせないなど重大な場合は、迷わず000（警察・救急・消防の緊急番号）に電話してください。",
      "事故直後は、まず自分と同乗者の安全を確保し、可能ならハザードを点けて後続車に知らせます。負傷者がいれば無理に動かさず、重傷や意識がない場合は000で救急を呼びます。軽微でも興奮状態だと痛みに気づきにくいので、体調に異変があれば医療機関を受診しましょう。",
      "次に相手との情報交換です。氏名・電話番号・住所・車のナンバー（number plate）・車種・保険会社名を交換します。相手が情報提供を拒む、ひき逃げ、飲酒の疑い、負傷者がいる、大きな物損などの場合は警察に届け出ます。州によって届出基準が異なるため、迷ったら警察（緊急でなければ各州の非緊急番号）に確認してください。その場で『自分が悪い』と認めたり現金でのその場示談に応じたりするのは避けます。",
      "証拠として、車の損傷・現場の位置関係・相手のナンバー・信号や標識の状況をスマホで撮影し、目撃者がいれば連絡先を聞いておきます。これらが揃うと保険請求がスムーズです。最後に、できるだけ早く自分の保険会社（任意保険やCTP）に連絡し、指示に従って手続きします。レンタカーの場合は契約書記載の連絡先へ速やかに報告してください。",
    ],
    keyFacts: [
      { label: "緊急番号", value: "000（救急・警察・消防／重大時）" },
      { label: "交換する情報", value: "氏名・連絡先・住所・ナンバー・車種・保険" },
      { label: "警察届出", value: "負傷者・ひき逃げ・飲酒疑い・大きな物損など" },
      { label: "その場で禁止", value: "非を認める・現金でのその場示談・現場離脱" },
      { label: "証拠", value: "損傷・位置関係・ナンバー・目撃者の連絡先を記録" },
    ],
    steps: [
      { title: "安全を確保する", description: "ハザードを点け、可能なら安全な場所へ。二次事故を防ぎます。" },
      { title: "負傷者を確認", description: "重傷・意識なしなら000で救急。無理に動かしません。" },
      { title: "相手と情報交換", description: "氏名・連絡先・ナンバー・保険会社を交換します。" },
      { title: "必要なら警察に届出", description: "負傷者・ひき逃げ・飲酒疑い・大物損は警察へ連絡します。" },
      { title: "証拠を記録", description: "損傷・現場・ナンバー・目撃者の連絡先を撮影・メモします。" },
      { title: "保険会社へ連絡", description: "自分の保険（またはレンタカー会社）へ速やかに報告します。" },
    ],
    tips: [
      "スマホに保険会社の連絡先とCTP・任意保険の証券番号を保存しておくと、事故時に慌てません。",
      "相手の言い分と自分の記憶が食い違うことがあるため、写真と時刻・場所のメモを残しておきましょう。",
      "英語での説明に不安があれば、翻訳アプリを使いつつ、事実（誰が・どこで・何が起きたか）だけを冷静に伝えます。",
    ],
    warnings: [
      "その場で『自分が悪い』と認めたり、現金でのその場示談に応じたりしないでください。後の保険手続きで不利になります。",
      "負傷者がいるのに現場を離れる（ひき逃げ）と重い罪に問われます。必ず停止して対応してください。",
    ],
    phrases: [
      { en: "Is anyone hurt?", ja: "誰かケガをしていますか？" },
      { en: "Can we exchange details?", ja: "情報を交換しましょう（名前・連絡先など）。" },
      { en: "Can I have your name, phone number and insurance details?", ja: "名前・電話番号・保険の情報を教えてください。" },
      { en: "I'd like to call the police.", ja: "警察を呼びたいです。" },
    ],
    faqs: [
      {
        question: "軽い接触事故でも警察を呼ぶべきですか？",
        answer:
          "負傷者がいない軽微な物損なら、情報交換と記録をして各自の保険で処理するのが一般的です。ただし相手が情報提供を拒む、ひき逃げ、飲酒の疑い、負傷者、大きな物損がある場合は警察に届け出ます。州で基準が異なるため迷ったら各州の非緊急番号で確認してください。",
      },
      {
        question: "相手が無保険だったらどうなりますか？",
        answer:
          "オーストラリアではCTP（強制保険）が対人賠償をカバーしますが、車両の物損は任意保険（comprehensive等）がないと自己負担になります。相手が無保険で物損の場合の回収は難しいことがあるため、自分が任意保険に入っておくことが最大の防御です。",
      },
    ],
    relatedSlugs: [
      "car-insurance-comparison",
      "rego-ctp-rwc",
      "roadside-assistance",
      "parking-fines-guide",
      "mechanic-tyre-shop-english",
    ],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a238",
    title: "レンタカー契約のチェックリスト｜保険・免責・燃料・走行距離の注意点",
    slug: "rent-a-car-guide",
    category: "transport",
    hub: "transport",
    priority: "P1",
    searchIntent: "オーストラリアでレンタカーを借りるときの契約確認ポイント",
    description:
      "ワーホリの旅行や短期の移動でレンタカーを借りるときに確認すべきポイントをチェックリストで整理。保険と免責額（excess）、燃料ポリシー、走行距離制限、若年ドライバー料金、返却時のトラブル回避まで、契約前に知っておきたい注意点を解説します。",
    content: [
      "結論から言うと、レンタカー契約で失敗しないためには『①保険と免責額（excess）、②燃料ポリシー、③走行距離制限、④追加料金（若年ドライバー等）』の4点を借りる前に必ず確認します。表示価格が安くても、免責額が高い・保険が薄い・燃料や距離の条件が不利だと、返却時に高額を請求されることがあります。契約書にサインする前に、これらの条件を1つずつ確かめましょう。",
      "まず保険と免責額です。基本料金には保険が含まれますが、事故時の自己負担額（excess）が数千ドルに設定されていることが多く、追加料金で免責額を下げる（excess reduction）オプションが用意されています。補償範囲（窓ガラス・タイヤ・車内は対象外のことがある）も確認します。免責額を下げるか、クレジットカード付帯やサードパーティのレンタカー保険で備えるか、事前に方針を決めておきましょう。",
      "次に燃料と距離です。燃料ポリシーは『満タン返し（full to full）』が最も分かりやすく損がありません。『満タン借り・空返し』プランは残った燃料が無駄になりがちです。走行距離は『無制限（unlimited km）』か『1日◯kmまで（超過は従量課金）』かを確認します。長距離を走る予定なら無制限プランが安全です。",
      "さらに、25歳未満（会社により21歳未満など）には若年ドライバー料金（young driver surcharge）が上乗せされることがあります。追加ドライバー登録料、空港受取りの手数料、片道利用（one-way）の乗り捨て料も要確認です。受取り時は既存の傷を写真・動画で記録し、契約書に反映してもらうと、返却時の身に覚えのない損傷請求を防げます。有料道路（toll）の扱いも契約時に確認しましょう。",
    ],
    keyFacts: [
      { label: "免責額", value: "excess。数千ドルのことも。削減オプション有" },
      { label: "燃料", value: "満タン返し（full to full）が損しにくい" },
      { label: "走行距離", value: "無制限か1日◯kmまでか（超過は課金）" },
      { label: "若年料金", value: "25歳未満等はyoung driver surcharge" },
      { label: "受取り時", value: "既存の傷を写真・動画で記録する" },
    ],
    steps: [
      { title: "保険と免責額を確認", description: "excessの金額と補償範囲、削減オプションを確認します。" },
      { title: "燃料ポリシーを選ぶ", description: "満タン返し（full to full）が分かりやすく無駄がありません。" },
      { title: "走行距離を確認", description: "無制限か上限付きか、超過料金の有無を確認します。" },
      { title: "追加料金を確認", description: "若年料金・追加ドライバー・乗り捨て・空港手数料を確認します。" },
      { title: "受取り時に傷を記録", description: "既存の損傷を写真・動画で残し契約に反映してもらいます。" },
      { title: "返却条件を守る", description: "燃料・時間・場所を守り、返却時に一緒に確認します。" },
    ],
    tips: [
      "免責額（excess）は事故時の自己負担。クレジットカード付帯保険やサードパーティのレンタカー保険で下げられる場合があります。",
      "受取り時の傷チェックは念入りに。小さな傷も写真に残すと『元からあった』と証明できます。",
      "有料道路（toll）の処理は会社独自サービスで手数料が割高なことが多いので、契約時に必ず確認します。",
    ],
    warnings: [
      "免責額（excess）の確認を怠ると、軽い損傷でも数千ドルを請求される可能性があります。",
    ],
    faqs: [
      {
        question: "レンタカー保険は追加で入るべきですか？",
        answer:
          "基本料金に保険は含まれますが免責額（自己負担）が高いことが多いです。会社の削減オプション、クレジットカード付帯、サードパーティのレンタカー保険のいずれかで免責を下げておくと安心です。窓ガラスやタイヤが対象外のことがあるため補償範囲も確認しましょう。",
      },
      {
        question: "25歳未満でも借りられますか？",
        answer:
          "多くの会社で借りられますが、若年ドライバー料金（young driver surcharge）が1日単位で上乗せされることがあります。会社により下限年齢（21歳等）や対象車種の制限があるため、予約時に条件を確認してください。",
      },
    ],
    relatedSlugs: [
      "cars-guide",
      "car-insurance-comparison",
      "tolls-linkt-guide",
      "car-accident-guide",
      "intercity-transport",
    ],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a239",
    title: "帰国前に車を売る方法｜広告の出し方・RWC・名義変更の流れ",
    slug: "sell-car-before-leaving",
    category: "transport",
    hub: "transport",
    priority: "P0",
    searchIntent: "ワーホリ帰国前に中古車を売る手順（広告・RWC・名義変更）",
    description:
      "ワーホリの帰国前に車を売る方法を、個人売買を中心に解説。広告の出し方と価格設定、州によって必要なRWC（車検証明）、名義変更（transfer of registration）の手続き、支払いを安全に受け取るコツまで、次の渡航者にスムーズに引き継ぐ流れを整理します。",
    content: [
      "結論から言うと、帰国前に車を売る基本は『①相場を調べて広告を出す、②内見・試乗に対応する、③（州により）RWCを用意する、④名義変更して安全に代金を受け取る』の流れです。ワーホリの車は次の渡航者に人気があり、出発の数週間前から動けば十分売れます。ただし州ごとに必要書類（特にRWC）と名義変更の手続きが違うため、早めに自分の登録州のルールを確認しておくことが大切です。",
      "まず広告です。オンラインの売買サイトやワーホリ向けコミュニティ、掲示板などに、車種・年式・走行距離・Rego残存期間・整備状況・価格を明記して掲載します。同じ車種の出品価格を調べて相場に合わせると売れやすくなります。写真は明るい場所で複数枚撮り、傷は正直に記載すると内見後のキャンセルが減ります。",
      "次に州ごとの必要書類です。多くの州では名義変更の際に、車が安全基準を満たすことを示す点検証明（Roadworthy Certificate＝RWC／州によりSafety Certificate等の呼称・要否が異なる）が必要です。これは認定工場で取得します。RWCが不要な州や条件もあるため、登録している州の交通当局（例：VicRoads、Service NSW、Queensland Transport等）の公式情報で最新の要否と手順を必ず確認してください。",
      "売買が成立したら、州の交通当局が定める方法で名義変更（transfer of registration）を行い、売主・買主それぞれが期限内に届け出ます。手続きを怠ると、売却後の駐車違反やtollが元の名義（自分）に請求されるため要注意です。代金は現金の多額やり取りより銀行振込が安全で、着金を確認してから車と鍵・書類を引き渡します。前払いや小切手の後日不渡りには十分注意しましょう。",
    ],
    keyFacts: [
      { label: "売り先", value: "次の渡航者に人気。数週間前から動けば十分" },
      { label: "広告に明記", value: "車種・年式・走行距離・Rego残存・価格" },
      { label: "州により必要", value: "RWC（Roadworthy/Safety Certificate）" },
      { label: "名義変更", value: "transfer of registration（期限内に届出）" },
      { label: "代金受取り", value: "銀行振込で着金確認後に引き渡し" },
    ],
    steps: [
      { title: "相場を調べる", description: "同車種の出品価格を見て売れやすい価格を設定します。" },
      { title: "広告を出す", description: "写真と車の情報・Rego残存・価格を明記して掲載します。" },
      { title: "内見・試乗に対応", description: "書類や整備記録を見せ、正直に状態を伝えます。" },
      { title: "必要ならRWCを取得", description: "登録州のルールを確認し、認定工場で点検証明を用意します。" },
      { title: "名義変更を行う", description: "州の方法で登録を移し、売主・買主が期限内に届け出ます。" },
      { title: "安全に代金を受け取る", description: "銀行振込で着金確認後に鍵と書類を引き渡します。" },
    ],
    tips: [
      "Rego（登録）残存が長いと売りやすく、価格も上げやすいです。出発時期から逆算して売却を計画しましょう。",
      "整備記録（logbook）やPPSRで残債がないことを示せると、買主が安心して価格交渉もスムーズです。",
      "名義変更後は、自分に不要な請求が来ないよう、届出控えを保管しておきます。",
    ],
    warnings: [
      "名義変更を怠ると、売却後の駐車違反・toll・事故の責任が元の名義（自分）に及ぶ可能性があります。必ず期限内に手続きしてください。",
    ],
    faqs: [
      {
        question: "RWC（車検証明）は必ず必要ですか？",
        answer:
          "州によって要否が異なります。多くの州では名義変更時に必要ですが、不要な州や条件もあります。登録している州の交通当局（VicRoads、Service NSW、Queensland Transport等）の公式情報で最新の要否を必ず確認してください。",
      },
      {
        question: "出発直前でも売れますか？",
        answer:
          "売れることもありますが、内見・RWC取得・名義変更に時間がかかるため、出発の数週間前から動くのが安全です。間に合わない場合は買取業者やディーラー下取りという選択肢もありますが、個人売買より安くなる傾向があります。",
      },
    ],
    relatedSlugs: [
      "cars-guide",
      "vehicle-transfer-by-state",
      "rego-ctp-rwc",
      "used-car-inspection-checklist",
      "ppsr-check-guide",
    ],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a240",
    title: "E-bike・電動キックボードの交通ルール｜州別の扱いとヘルメット",
    slug: "e-bike-e-scooter-rules",
    category: "transport",
    hub: "transport",
    priority: "P2",
    searchIntent: "オーストラリアのE-bike・電動キックボードの交通ルールと合法性",
    description:
      "車を持たないワーホリの移動手段として人気のE-bike（電動アシスト自転車）・電動キックボード（e-scooter）は、州や自治体でルールが大きく異なります。合法に乗れる場所、速度・出力の制限、ヘルメット義務、シェアサービスの利用まで、罰金を避けるための基本を解説します。",
    content: [
      "結論から言うと、E-bike（電動アシスト自転車）と電動キックボード（e-scooter）のルールは州・自治体によって大きく異なり、『どこで乗れるか・私有のe-scooterが公道で合法か・ヘルメットが必要か』が場所ごとに違います。ある州では合法でも、別の州では私有のe-scooterの公道走行が禁止のこともあるため、乗る前に必ずその州・都市の最新ルールを確認する必要があります。",
      "E-bike（電動アシスト自転車）は、出力やアシストの仕組みが基準内であれば、多くの州で自転車と同様に扱われます。ただしモーター出力の上限やアシストが切れる速度など技術基準があり、これを超える改造車は『自転車』とみなされず登録・免許が必要になることがあります。自転車と同様、ヘルメット着用が全国的に義務づけられています。",
      "電動キックボード（e-scooter）は扱いが分かれます。シェアサービス（レンタルのe-scooter）は自治体が許可したエリアで合法に使えますが、私有のe-scooterを公道・歩道で走らせることが禁止・制限されている場所があります。許可エリアでも、最高速度、走ってよい場所（自転車レーン等）、ヘルメット義務、年齢制限などの条件が定められています。",
      "共通して、飲酒運転の禁止、歩行者優先、夜間のライト、二人乗り禁止などのルールがあります。違反すると自転車・e-scooterでも罰金の対象です。移動手段として使う前に、滞在する州・自治体の交通当局のe-scooter／e-bikeに関する最新ページで、合法性・速度・場所・ヘルメットの条件を確認してから乗りましょう。",
    ],
    keyFacts: [
      { label: "ルールの単位", value: "州・自治体ごとに大きく異なる" },
      { label: "E-bike", value: "基準内なら自転車扱いの州が多い" },
      { label: "私有e-scooter", value: "公道走行が禁止・制限の場所がある" },
      { label: "ヘルメット", value: "自転車は全国的に義務。e-scooterも要確認" },
      { label: "シェア", value: "許可エリアで利用可。速度・場所に条件" },
    ],
    steps: [
      { title: "州・都市のルールを調べる", description: "交通当局のe-bike/e-scooterページで最新の扱いを確認します。" },
      { title: "私有かシェアか判断", description: "私有e-scooterは禁止の場所もある点を確認します。" },
      { title: "技術基準を満たすか確認", description: "E-bikeは出力・アシスト速度が基準内かを確認します。" },
      { title: "装備を整える", description: "ヘルメット、夜間ライトなど必要装備を用意します。" },
      { title: "許可された場所で乗る", description: "自転車レーンなど、走ってよい場所と速度を守ります。" },
    ],
    tips: [
      "シェアのe-scooterはアプリで許可エリア・駐車場所が表示されます。エリア外に乗り捨てると追加料金がかかることがあります。",
      "改造でモーター出力を上げたE-bikeは『自転車』とみなされず、無登録・無免許運転になるおそれがあります。",
      "飲酒後のe-scooter・自転車運転も違反です。夜の移動はライト着用を忘れずに。",
    ],
    faqs: [
      {
        question: "私有の電動キックボードを買って街で乗れますか？",
        answer:
          "州・自治体によって異なり、私有のe-scooterを公道や歩道で走らせることが禁止・制限されている場所があります。購入前に、滞在する州・都市の交通当局の最新ルールで、私有e-scooterの公道走行が合法かどうかを必ず確認してください。",
      },
      {
        question: "ヘルメットは必要ですか？",
        answer:
          "自転車（E-bike含む）はオーストラリア全国でヘルメット着用が義務です。e-scooterについても多くの場所でヘルメットが求められます。違反は罰金の対象になるため着用してください。",
      },
    ],
    relatedSlugs: [
      "transport-payment-guide",
      "cars-guide",
      "intercity-transport",
      "parking-fines-guide",
      "remote-driving-safety",
    ],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a241",
    title: "アウトバック・地方を運転する前の安全準備｜長距離・動物・通信対策",
    slug: "remote-driving-safety",
    category: "transport",
    hub: "transport",
    priority: "P1",
    searchIntent: "オーストラリアの地方・アウトバックを安全に運転する準備",
    description:
      "セカンドビザのファームや地方観光で長距離を運転するワーホリ向けの安全準備ガイド。給油計画、動物との衝突（カンガルー）対策、疲労運転の防止、携帯が圏外になる地域での備え、故障・立ち往生時の対応まで、地方運転のリスクと対策を解説します。",
    content: [
      "結論から言うと、地方やアウトバックの運転で安全を確保するには『①給油と水・食料の計画、②動物・疲労対策、③通信圏外への備え、④故障・立ち往生時の対応』を出発前に準備します。オーストラリアの地方は町と町の間隔が非常に長く、ガソリンスタンドも携帯の電波もない区間が続くため、都市部と同じ感覚で走ると燃料切れや立ち往生で命に関わることがあります。",
      "まず給油と補給です。次の給油地点までの距離を地図で確認し、燃料計が半分になったら早めに満タンにするのが鉄則です。長距離区間では水を多めに、非常用の食料も積みます。特に内陸部は気温が高く、車が止まったときに水がないと危険なため、想定より多めに用意しておきましょう。",
      "次に動物と疲労です。カンガルーなどの野生動物は特に夜明け・夕暮れ・夜間に道路へ飛び出し、衝突は車の大破や事故につながります。薄暗い時間帯の運転はできるだけ避け、動物を見たら急ハンドルを切らず減速で対応します（急な回避は横転リスク）。また長距離の単調な道は眠気が出やすいため、2時間ごとの休憩や運転交代、無理をしない計画が重要です。",
      "通信と非常時の備えです。地方では携帯が長時間圏外になります。出発前に家族や職場に『どのルートで・いつ着く予定か』を伝えておき、予定が変わったら連絡します。予備の飲料水・食料・応急セット・毛布、可能ならタイヤ交換の道具を積んでおきます。もし車が動かなくなったら、原則として車から離れないでください。車は日陰・目印になり、捜索時に見つけてもらいやすくなります。ロードサービスの連絡先も控えておきましょう。",
    ],
    keyFacts: [
      { label: "給油", value: "半分になったら満タン。次の給油地点を確認" },
      { label: "動物", value: "夜明け・夕暮れ・夜間は飛び出し多発" },
      { label: "衝突回避", value: "急ハンドルより減速（横転を防ぐ）" },
      { label: "通信", value: "長時間圏外。ルートと到着予定を共有" },
      { label: "立ち往生時", value: "原則、車から離れない" },
    ],
    steps: [
      { title: "ルートと給油計画", description: "次の給油地点までの距離を確認し、半分で満タンにします。" },
      { title: "水・食料・装備を積む", description: "多めの水、非常食、応急セット、毛布などを準備します。" },
      { title: "薄暗い時間の運転を避ける", description: "動物の飛び出しが多い夜明け・夕暮れ・夜間を避けます。" },
      { title: "こまめに休憩する", description: "2時間ごとに休憩・交代し、疲労運転を防ぎます。" },
      { title: "予定を誰かに共有", description: "ルートと到着予定を家族・職場に伝えておきます。" },
      { title: "故障時は車に留まる", description: "車から離れず、ロードサービスや助けを待ちます。" },
    ],
    tips: [
      "地方を出る前に都市部の安いスタンドで満タンに。内陸は選択肢が少なく価格も高めです。",
      "オフラインでも使える地図をダウンロードしておくと、圏外でも現在地とルートを確認できます。",
      "carだけでなく、スペアタイヤの空気圧と交換工具の有無を出発前に確認しましょう。",
    ],
    warnings: [
      "車が動かなくなっても、水や助けを求めて歩き出すのは危険です。原則として車の近くに留まり、日陰と目印を確保してください。",
      "動物との衝突を避けようと急ハンドルを切ると横転の危険があります。減速で対応するのが基本です。",
    ],
    faqs: [
      {
        question: "携帯が圏外の地域ではどう連絡すればいいですか？",
        answer:
          "出発前に家族や職場へルートと到着予定時刻を伝えておくのが基本の備えです。予定が変わったら電波のある場所で連絡します。長期間・極端に人里離れた地域を走るなら、衛星通信機器やロードサービスの遠隔地対応を検討してください。",
      },
      {
        question: "カンガルーが飛び出したらどうすれば？",
        answer:
          "急ハンドルで避けると横転などより大きな事故につながります。速度を落として直進を保つのが基本です。薄暗い時間帯は特に飛び出しが多いので、その時間の運転を避け、速度を控えめにするのが最善の対策です。",
      },
    ],
    relatedSlugs: [
      "roadside-assistance",
      "car-breakdown-guide",
      "fuel-saving-apps",
      "car-accident-guide",
      "intercity-transport",
    ],
    updatedAt: "2026-07-19",
    published: true,
  },
];
