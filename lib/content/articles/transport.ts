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
    ],
    keyFacts: [
      { label: "シドニー", value: "Opalカード or クレカ/スマホのタッチ決済" },
      { label: "メルボルン", value: "mykiカード（要事前購入・チャージ）" },
      { label: "ブリスベン", value: "go card or タッチ決済（Smart Ticketing拡大中）" },
      { label: "パース", value: "SmartRider or タッチ決済（順次拡大）" },
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
    relatedSlugs: ["money-transfer-wise", "arrival-checklist", "cars-guide"],
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
];
