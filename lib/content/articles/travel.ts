import type { Article } from "./types";

export const travelArticles: Article[] = [
  {
    id: "a320",
    title: "オーストラリア旅行のベストシーズン｜地域別の気候",
    slug: "australia-travel-seasons",
    category: "travel",
    hub: "travel",
    description:
      "オーストラリアは広大で地域ごとに気候が大きく異なります。北部の熱帯（乾季・雨季）、南部の四季、内陸の砂漠、タスマニアの冷涼な気候をワーホリ目線で整理し、いつ・どこへ行くかの旅行計画の考え方をまとめます。",
    content: [
      "結論から言うと、オーストラリアに「全国共通のベストシーズン」はありません。国土が広く南半球にあるため、同じ時期でも地域によって気候がまったく異なります。行き先を決めてから、その地域の季節に合わせて日程を組むのが基本です。この記事は、いつ・どこへ行くかを考えるための旅行ガイド（プランニング）で、実際の天気予報・警報・料金は変わりやすいため各公式で確認してください。",
      "大きく分けると、北部（ケアンズ・ダーウィンなど）は熱帯で乾季（おおむね5〜10月）と雨季（おおむね11〜4月）に分かれます。雨季は高温多湿でサイクロン・洪水のリスクがあるため、観光は乾季が快適です。南部（シドニー・メルボルン・アデレードなど）は四季があり、夏（12〜2月）は暑く、冬（6〜8月）は冷え込みます。",
      "内陸（ウルル／レッドセンターなど砂漠地帯）は日中と夜の寒暖差が大きく、夏は極端な高温になります。観光しやすいのは涼しい冬〜春・秋。タスマニアは本土より冷涼で、真夏でも朝晩は冷えます。西オーストラリアのパースは地中海性気候で、夏は乾燥して暑く、時差（AWST）にも注意が必要です。",
      "南半球なので日本と季節が逆になります。日本の夏（6〜8月）はオーストラリアの冬、日本の冬（12〜2月）はオーストラリアの夏です。学校の長期休暇（スクールホリデー）や祝日は各州で時期が異なり、観光地が混雑し宿・交通が高くなりやすいので、旅行日程を組むときは州別のカレンダーも確認しましょう。",
    ],
    keyFacts: [
      { label: "北部（熱帯）", value: "乾季5〜10月が快適／雨季11〜4月はサイクロン注意" },
      { label: "南部（四季）", value: "夏12〜2月・冬6〜8月／冬は防寒が必要" },
      { label: "内陸（砂漠）", value: "寒暖差が大／夏は極端な高温・冬〜春秋が快適" },
      { label: "タスマニア", value: "本土より冷涼・真夏でも朝晩は冷える" },
      { label: "日本との関係", value: "季節が逆（南半球）" },
    ],
    steps: [
      { title: "行き先を先に決める", description: "気候は地域差が大きいので、まず訪れたいエリアを決めます（熱帯の北部・四季の南部・砂漠の内陸など）。" },
      { title: "その地域の季節を調べる", description: "行き先の乾季/雨季・夏冬・寒暖差を確認します。気候平年値は Bureau of Meteorology（BOM）で確認できます。" },
      { title: "混雑期を避けて日程を組む", description: "州別のスクールホリデー・祝日を確認し、宿と交通が高騰する時期を外すか、早めに予約します。" },
    ],
    tips: [
      "旅行直前は必ず最新の天気予報・気象警報を BOM で確認しましょう。雨季の北部やサイクロン期は計画変更も想定します。",
      "UV（紫外線）は日本より強い日が多いです。UV指数3以上では日焼け・熱中症対策を。UV予報は ARPANSA・BOM で確認できます。",
      "同じ月でも都市によって服装が全く異なります。ケアンズは半袖でもタスマニアは上着が必要、ということが起こります。",
    ],
    warnings: [
      "この記事は季節の傾向を示す旅行計画の目安です。実際の天気・サイクロン・洪水・道路状況は変わりやすいため、出発前に必ず公式（BOM・州の防災機関）で最新情報を確認してください。",
    ],
    verifiedAt: "2026-07-30",
    officialSources: [
      { label: "Bureau of Meteorology｜Climate averages（気候平年値・季節）", url: "http://www.bom.gov.au/climate/averages/", accessedAt: "2026-07-30" },
      { label: "Bureau of Meteorology｜Warnings（気象警報）", url: "http://www.bom.gov.au/australia/warnings/", accessedAt: "2026-07-30" },
      { label: "ARPANSA｜Ultraviolet radiation index（UV指数）", url: "https://www.arpansa.gov.au/our-services/monitoring/ultraviolet-radiation-monitoring/ultraviolet-radiation-index", accessedAt: "2026-07-30" },
      { label: "Tourism Australia（公式観光情報）", url: "https://www.australia.com/", accessedAt: "2026-07-30" },
    ],
    relatedSlugs: ["australia-road-trip-guide", "east-coast-route", "domestic-flight-guide", "area-cairns", "area-hobart", "clothing-guide"],
    updatedAt: "2026-07-30",
    published: true,
  },

  {
    id: "a321",
    title: "国内線を安く予約する方法｜荷物・空港・変更条件",
    slug: "domestic-flight-guide",
    category: "travel",
    hub: "travel",
    description:
      "広いオーストラリアの都市間移動に欠かせない国内線。Jetstar・Virgin Australia・Qantas・Rex などの使い分け、預け荷物・機内持ち込みの考え方、変更・キャンセル条件の確認方法を、ワーホリ目線でまとめた予約ガイドです。",
    content: [
      "オーストラリアは都市間が非常に遠く、シドニー〜ケアンズやパース〜東海岸などは国内線が現実的です。まず押さえたいのは、表示される運賃は「座席のみ」の最安クラスであることが多く、預け荷物・座席指定・変更を追加すると総額が上がる点です。安さだけでなく、荷物込みの総額と変更条件で比べるのが失敗しないコツです。",
      "航空会社はおおまかに、格安中心の Jetstar、フルサービス寄りの Qantas と Virgin Australia、地方路線に強い Rex（Regional Express）などがあります。LCC は基本運賃が安い反面、荷物や変更が有料・制限的なことが多いです。どの会社も路線・運賃・サービス内容は変わるため、必ず各航空会社の公式で最新の条件を確認してください（具体的な料金・時刻はここでは断定しません）。",
      "荷物は「機内持ち込み（carry-on）」と「預け荷物（checked）」でルールと重量制限が分かれ、超過は当日空港で高額になりがちです。予約時に必要な預け荷物を付けておくほうが、当日追加より安いのが一般的です。重量・サイズの上限は航空会社ごとに違うため、公式の Baggage ページで確認しましょう。",
      "変更・キャンセルの条件は運賃クラスで大きく異なります。最安運賃は変更不可・返金不可のことが多く、少し高い運賃だと変更手数料が下がる場合があります。仕事やファームの予定が流動的なワーホリは、変更のしやすさも含めて選ぶと安心です。空港には出発の余裕を持って到着し、必要な本人確認書類（ID）を用意しましょう。",
    ],
    keyFacts: [
      { label: "主な航空会社", value: "Jetstar／Qantas／Virgin Australia／Rex ほか" },
      { label: "最安運賃の注意", value: "座席のみが多い（荷物・変更は別料金）" },
      { label: "荷物", value: "機内持ち込みと預け荷物で制限が別・超過は割高" },
      { label: "比較の軸", value: "荷物込み総額＋変更/返金条件で比べる" },
      { label: "空港", value: "余裕を持って到着・IDを準備" },
    ],
    steps: [
      { title: "路線と時期を決める", description: "行き先・日程を決め、複数の航空会社で比較します。混雑期（祝日・スクールホリデー）は高くなりやすいです。" },
      { title: "荷物込みの総額で比較", description: "最安運賃に必要な預け荷物・座席を足した総額で比べます。予約時に荷物を付けるほうが当日追加より安いのが一般的です。" },
      { title: "変更・返金条件を確認", description: "運賃クラスごとの変更手数料・返金可否を公式で確認します。予定が流動的なら変更しやすい運賃を検討します。" },
      { title: "当日は早めに空港へ", description: "チェックイン・保安検査の時間を見込み、IDを持って余裕を持って到着します。" },
    ],
    tips: [
      "同じ路線でも曜日・時間帯・時期で価格差が出ます。日程に幅があるなら安い日を探しましょう（料金は変動するため各社公式で確認）。",
      "手荷物のみで身軽に移動できれば、LCCの最安運賃を活かしやすいです。荷物が多いワーホリは荷物込みで比較を。",
      "支払い時のカード手数料や座席指定料が加算されることがあります。最終画面の総額を必ず確認しましょう。",
    ],
    warnings: [
      "運賃・時刻・空席・荷物ルール・変更条件は頻繁に変わります。この記事の料金・便の断定はせず、必ず各航空会社の公式サイトで予約前に最新条件を確認してください。",
    ],
    verifiedAt: "2026-07-30",
    officialSources: [
      { label: "Jetstar｜Baggage（荷物ルール）", url: "https://www.jetstar.com/au/en/help/baggage", accessedAt: "2026-07-30" },
      { label: "Qantas｜Baggage（荷物ルール）", url: "https://www.qantas.com/au/en/travel-info/baggage.html", accessedAt: "2026-07-30" },
      { label: "Virgin Australia｜Baggage（荷物ルール）", url: "https://www.virginaustralia.com/au/en/travel-info/baggage/", accessedAt: "2026-07-30" },
      { label: "Rex（Regional Express）公式", url: "https://www.rex.com.au/", accessedAt: "2026-07-30" },
    ],
    relatedSlugs: ["intercity-transport", "flight-booking-guide", "arrival-airport-guide", "australia-travel-seasons", "east-coast-route"],
    updatedAt: "2026-07-30",
    published: true,
  },

  {
    id: "a322",
    title: "オーストラリアロードトリップの計画と安全",
    slug: "australia-road-trip-guide",
    category: "travel",
    hub: "travel",
    description:
      "車で長距離を走るオーストラリアのロードトリップ。距離感・所要時間・車の準備・宿・通信・緊急時の備えなど、安全に旅するための計画の立て方を、ワーホリ目線でまとめた総合ガイドです。",
    content: [
      "オーストラリアのロードトリップは自由度が高い一方、都市間の距離が桁違いに長く、区間によっては数百キロにわたって町・ガソリンスタンド・携帯の電波がない場所を走ります。まず理解すべきは「地図上の近さ」と「実際の運転時間・給油間隔」は別物だということ。無理のない1日の走行距離を決め、余裕を持った日程を組むことが安全の第一歩です。",
      "計画は、①ルートと走行距離・所要時間、②車（レンタル/購入・整備・保険）、③宿（キャンプ場・モーテル・ホステル）、④通信（電波が弱い区間の把握）、⑤緊急時の備え（水・燃料・救援）に分けて考えると抜けが減ります。運転は日本と同じ左側通行ですが、制限速度・道路ルール・免許の扱いは州で異なるため、各州の交通当局と運転免許のルールを確認しましょう。",
      "地方・アウトバックでは、給油できるうちに満タンにする、走行前に天気・道路状況を確認する、といった基本が命綱になります。長距離運転の疲労（fatigue）は事故の大きな原因で、こまめな休憩・仮眠が推奨されています。夜間や薄明時はカンガルーなどの動物が道路に出やすく衝突リスクが高いため、可能な限り日中に走るのが安全です。",
      "緊急時は Triple Zero（000）が警察・救急・消防の共通番号です。電波が届かない場所もあるため、行程を誰かに共有し、水・食料・予備燃料を積んでおくと安心です。洪水時の冠水路は見た目より危険で「If it's flooded, forget it（冠水したら引き返す）」が公式の呼びかけです。無理な走行はやめ、道路状況は各州の道路情報で確認しましょう。",
    ],
    keyFacts: [
      { label: "距離感", value: "都市間は数百〜千km規模・地図の近さと運転時間は別" },
      { label: "運転", value: "左側通行／速度・ルール・免許は州で異なる" },
      { label: "給油・通信", value: "無人区間あり・満タン運用／電波の弱い区間を把握" },
      { label: "疲労対策", value: "こまめな休憩・仮眠／夜間の動物衝突に注意" },
      { label: "緊急番号", value: "Triple Zero（000）" },
    ],
    steps: [
      { title: "ルートと日程を決める", description: "1日の無理のない走行距離を決め、給油・休憩・宿泊のポイントを地図に落とします。余裕を持った日程にします。" },
      { title: "車と保険を整える", description: "レンタルか購入か、整備・タイヤ・保険を確認します。免許・車の登録・保険のルールは各州で確認します。" },
      { title: "宿と通信を確保", description: "キャンプ場・モーテル・ホステルを事前に把握し、電波が弱い区間を確認します。SIM・通信は事前に整えます。" },
      { title: "緊急時に備える", description: "水・食料・予備燃料を積み、行程を共有します。天気・道路状況・冠水情報を出発前に確認します。" },
    ],
    tips: [
      "夜明け・夕暮れ・夜間は動物（カンガルー等）の飛び出しが多く危険です。可能なら日中に運転しましょう。",
      "アウトバックでは「給油できるときに満タン」が基本。次のスタンドまでの距離を常に意識します。",
      "長時間運転の疲労は事故の主因です。2時間ごとの休憩や交代運転を計画に入れましょう。",
    ],
    warnings: [
      "道路状況・天候・通行止め・冠水は急変します。冠水路は絶対に進入せず引き返してください（If it's flooded, forget it）。制限速度や道路ルール・免許の扱いは州で異なるため、各州の公式で必ず確認してください。",
    ],
    verifiedAt: "2026-07-30",
    officialSources: [
      { label: "Bureau of Meteorology｜Warnings（天候・洪水警報）", url: "http://www.bom.gov.au/australia/warnings/", accessedAt: "2026-07-30" },
      { label: "Triple Zero（000）｜緊急通報", url: "https://www.triplezero.gov.au/", accessedAt: "2026-07-30" },
      { label: "Transport for NSW｜Road safety（道路安全・疲労運転）", url: "https://www.nsw.gov.au/driving-boating-and-transport", accessedAt: "2026-07-30" },
      { label: "Parks Australia（国立公園の情報）", url: "https://parksaustralia.gov.au/", accessedAt: "2026-07-30" },
    ],
    relatedSlugs: ["cars-guide", "license-guide", "camping-free-camps", "safety-emergency", "sim-guide", "australia-travel-seasons"],
    updatedAt: "2026-07-30",
    published: true,
  },

  {
    id: "a323",
    title: "キャンプ・Free Campの探し方とルール",
    slug: "camping-free-camps",
    category: "travel",
    hub: "travel",
    description:
      "旅費を抑えながらオーストラリアを旅する定番、キャンプとFree Camp（無料・低料金の車中泊/キャンプ地）。探し方、自治体・国立公園のルール、設備、安全対策を、ワーホリ目線でまとめたガイドです。",
    content: [
      "キャンプ場やFree Camp（無料・低料金のキャンプ/車中泊スポット）を使うと、宿泊費を大きく抑えながらロードトリップができます。ただし「どこでも自由に泊まってよい」わけではなく、キャンプ可否・料金・滞在日数・焚き火の可否は場所ごとに細かく決まっています。まず、その場所が公式にキャンプOKかを確認するのが基本です。",
      "キャンプ地は大きく、①国立公園・州立公園のキャンプ場（多くは要予約・有料。Parks Australiaや各州の公園当局が管理）、②自治体（council）が管理する無料・低料金サイト、③民間のキャラバンパーク（設備が充実・有料）に分かれます。無断で私有地や許可のない路肩に泊まると罰則の対象になり得るため、指定サイトを使いましょう。",
      "設備は場所によって大きく異なります。トイレ・水・シャワー・電源・ゴミ処理が揃うところもあれば、何もない自然のままの場所もあります。飲み水は確保できないことが多いので事前に汲んでおく、ゴミは持ち帰る（Leave No Trace）、トイレのない場所ではルールに従う、といった配慮が必要です。焚き火は乾季・火災リスクの高い時期に禁止（fire ban）になることがあります。",
      "安全面では、天候（雨季の洪水・強風）、暑さ・寒さ、野生動物、そして人的な安全（人けのない場所での防犯）に注意します。到着は明るいうちに、行程は誰かに共有し、緊急時は Triple Zero（000）へ。予約要否・料金・滞在日数・焚き火可否は変わりやすいので、各公園当局・自治体の公式で最新のルールを確認してください。",
    ],
    keyFacts: [
      { label: "主なタイプ", value: "国立/州立公園・自治体サイト・民間キャラバンパーク" },
      { label: "料金", value: "無料〜有料（公園は要予約が多い）" },
      { label: "設備差", value: "トイレ/水/電源ありからゼロまで様々" },
      { label: "焚き火", value: "fire ban 期間は禁止・要確認" },
      { label: "マナー", value: "ゴミ持ち帰り・指定サイト利用（Leave No Trace）" },
    ],
    steps: [
      { title: "公式にキャンプ可か確認", description: "国立/州立公園や自治体の公式で、その場所がキャンプ可・予約要否・料金・滞在日数を確認します。" },
      { title: "設備を把握して準備", description: "水・トイレ・電源の有無を確認し、飲み水・ゴミ袋・簡易トイレ用品などを準備します。" },
      { title: "天候と火災情報を確認", description: "天気・洪水・強風、そして fire ban（焚き火/直火の禁止）情報を確認します。" },
      { title: "安全に設営・撤収", description: "明るいうちに到着し、人けのなさ・防犯にも配慮。ゴミは持ち帰り、緊急時は000へ。" },
    ],
    tips: [
      "無料サイトは人気で早く埋まることがあります。到着は早め・明るいうちが安全です。",
      "飲み水が無い場所が多いので、給水できるうちに多めに確保しておきましょう。",
      "camp可否・料金・予約はアプリや公式サイトで確認できます。ルールは場所ごとに違うので現地表示にも従いましょう。",
    ],
    warnings: [
      "許可のない場所での野営（wild camping）は罰則の対象になり得ます。必ず指定サイトを使い、料金・予約・滞在日数・焚き火可否は各公園当局・自治体の公式で最新情報を確認してください。乾季や高リスク期は fire ban に従ってください。",
    ],
    verifiedAt: "2026-07-30",
    officialSources: [
      { label: "Parks Australia（国立公園・キャンプ情報）", url: "https://parksaustralia.gov.au/", accessedAt: "2026-07-30" },
      { label: "NSW National Parks｜Camping（公園キャンプ・予約）", url: "https://www.nationalparks.nsw.gov.au/camping-and-accommodation", accessedAt: "2026-07-30" },
      { label: "Queensland Government｜Camping（キャンプ・許可）", url: "https://www.qld.gov.au/recreation/activities/areas-facilities/camping", accessedAt: "2026-07-30" },
      { label: "Triple Zero（000）｜緊急通報", url: "https://www.triplezero.gov.au/", accessedAt: "2026-07-30" },
    ],
    relatedSlugs: ["australia-road-trip-guide", "safety-emergency", "cars-guide", "australia-travel-seasons"],
    updatedAt: "2026-07-30",
    published: true,
  },

  {
    id: "a324",
    title: "東海岸周遊モデルルート｜シドニーからケアンズ",
    slug: "east-coast-route",
    category: "travel",
    hub: "travel",
    description:
      "ワーホリ定番の東海岸周遊。シドニーからケアンズまで、日数の目安・移動手段・立ち寄りたい主要スポット・予算の考え方を、モデルルートとして整理した旅行プランガイドです。",
    content: [
      "オーストラリア東海岸の周遊は、ワーホリでもっとも人気の旅ルートのひとつです。この記事は「シドニー→ケアンズ」を北上する定番のモデルルート（旅行プランの例）で、日数・移動手段・主要スポット・予算の考え方を示します。実際の料金・ツアー内容・営業状況は変わりやすいため、断定はせず各公式で確認してください。",
      "全体の距離はおよそ2,500〜3,000km規模で、じっくり回るなら数週間、要点だけなら1〜2週間が目安です。移動手段は、①車（ロードトリップ＝自由度が高い）、②長距離バス（Greyhound等のホップオン・ホップオフ）、③国内線（時間を節約）を組み合わせるのが一般的です。北上ルート（シドニー起点で北へ）と南下ルート（ケアンズ起点で南へ）は季節や航空券で選びます。",
      "主なルート順と立ち寄り先の例は、シドニー →（バイロンベイ）→ ゴールドコースト → ブリスベン →（ヌーサ／フレーザー海岸）→（ウィットサンデー／エアリービーチ）→ タウンズビル → ケアンズ。ケアンズはグレートバリアリーフや熱帯雨林の玄関口で、ファーム拠点としても人気です。都市の詳細は各エリアガイドを参照してください。",
      "予算はざっくり、宿（ホステル・キャンプ）／移動（燃料・バス・航空）／食費／アクティビティ（ツアー・ダイビング等）の4カテゴリで考えると管理しやすいです。金額は時期・人数・スタイルで大きく変わるため、ここでは具体額を断定しません。混雑期（スクールホリデー・祝日）は宿と交通が高騰しやすいので、日程と予約のタイミングを工夫しましょう。",
    ],
    keyFacts: [
      { label: "モデルルート", value: "シドニー→ゴールドコースト→ブリスベン→…→ケアンズ" },
      { label: "距離の目安", value: "およそ2,500〜3,000km規模" },
      { label: "所要日数", value: "要点1〜2週間／じっくり数週間" },
      { label: "移動手段", value: "車・長距離バス・国内線の組み合わせ" },
      { label: "予算の軸", value: "宿・移動・食費・アクティビティの4分類" },
    ],
    steps: [
      { title: "日数と起点を決める", description: "使える日数と、北上（シドニー起点）か南下（ケアンズ起点）かを決めます。季節と航空券で選びます。" },
      { title: "移動手段を組み合わせる", description: "車・長距離バス・国内線を区間ごとに使い分けます。荷物や自由度、費用で最適な組み合わせを選びます。" },
      { title: "立ち寄り先を絞る", description: "全部は回れないので、ビーチ・都市・リーフなど優先したいスポットを絞ってルート順に並べます。" },
      { title: "予算と予約を管理", description: "宿・移動・食費・アクティビティで予算を分け、混雑期は早めに予約します。金額は各公式で確認します。" },
    ],
    tips: [
      "全区間を車で走ると時間がかかります。長距離区間は国内線でショートカットすると体力と時間を節約できます。",
      "ケアンズ発着の航空券が安い時期は南下ルートも検討価値あり。往復の航空券とセットで比較しましょう。",
      "リーフや熱帯のツアーは季節（雨季・海の状況）で内容が変わります。予約前に催行状況を公式で確認しましょう。",
    ],
    warnings: [
      "料金・ツアー催行・営業状況・季節の海況は変わりやすく、この記事では具体額を断定しません。宿・交通・アクティビティは各公式で最新の料金・空き・条件を確認してください。北部は雨季（11〜4月）にサイクロン・洪水のリスクがあります。",
    ],
    verifiedAt: "2026-07-30",
    officialSources: [
      { label: "Tourism Australia（東海岸の公式観光情報）", url: "https://www.australia.com/en/places/cairns-and-surrounds.html", accessedAt: "2026-07-30" },
      { label: "Bureau of Meteorology｜Warnings（気象・サイクロン警報）", url: "http://www.bom.gov.au/australia/warnings/", accessedAt: "2026-07-30" },
      { label: "Great Barrier Reef Marine Park Authority（リーフの公式情報）", url: "https://www2.gbrmpa.gov.au/", accessedAt: "2026-07-30" },
    ],
    relatedSlugs: ["area-sydney", "area-gold-coast", "area-brisbane", "area-cairns", "domestic-flight-guide", "australia-road-trip-guide", "australia-travel-seasons"],
    updatedAt: "2026-07-30",
    published: true,
  },

  {
    id: "a325",
    title: "グレートバリアリーフ旅行ガイド｜ケアンズ・周辺島",
    slug: "great-barrier-reef-guide",
    category: "travel",
    hub: "travel",
    description:
      "世界最大のサンゴ礁グレートバリアリーフ。ケアンズを拠点にした行き方、ツアーの選び方、シュノーケル・ダイビング、ベストシーズンと海の安全（サンゴ礁の保護ルール含む）を、ワーホリ目線でまとめた旅行プランガイドです。",
    content: [
      "グレートバリアリーフ（Great Barrier Reef）は、クイーンズランド州沿岸に広がる世界最大のサンゴ礁で、多くのワーホリが訪れる人気スポットです。もっとも一般的な玄関口はケアンズで、ほかにポートダグラス、エアリービーチ（ウィットサンデー諸島）などからもリーフへ出られます。この記事は、いつ・どこから・どんなツアーで行くかを考えるための旅行プランガイドで、実際の料金・催行・海況は変わりやすいため各公式で確認してください。",
      "リーフへは日帰りツアーの利用が基本で、ケアンズなどの港から高速船（catamaran）で外洋のリーフやポンツーン（浮桟橋）へ向かいます。ツアーはシュノーケル中心のもの、体験/ライセンスダイビングを含むもの、島（グリーン島・フィッツロイ島など）への上陸型など内容が幅広く、料金・所要時間・含まれるもの（ランチ・器材・保険）が異なります。予約前に含有内容と催行状況を公式で確認しましょう。",
      "ベストシーズンは、乾季（おおむね6〜10月頃）が晴天・海況が安定しやすく人気です。雨季（11〜4月頃）は高温多湿でサイクロン・強風により催行中止や視界低下が起こりやすく、この時期はハコクラゲ（box jellyfish／irukandji）など有毒クラゲのリスクが高まるため、遊泳可否やスティンガースーツ（stinger suit）の指示に従ってください。海の安全は季節・場所で変わるため、ツアー会社と公式の案内に従うのが原則です。",
      "リーフはグレートバリアリーフ海洋公園として保護されており、サンゴに触れない・立たない、生き物を持ち帰らない、日焼け止めはリーフに配慮したものを選ぶなどのルールがあります。運営会社は海洋公園の環境管理料（Environmental Management Charge）を扱うことがあります。泳ぎに不安がある人はライフジャケットや浮き具を使い、無理をしないこと。持病・妊娠中の人や体験ダイビングは健康チェックが必要な場合があります。",
    ],
    keyFacts: [
      { label: "主な玄関口", value: "ケアンズ／ポートダグラス／エアリービーチ" },
      { label: "行き方", value: "港から高速船で日帰りツアーが基本" },
      { label: "ベストシーズン", value: "乾季6〜10月が海況安定・人気" },
      { label: "雨季の注意", value: "サイクロン・催行中止・有毒クラゲのリスク" },
      { label: "保護ルール", value: "サンゴに触れない・海洋公園のルール順守" },
    ],
    steps: [
      { title: "拠点と日程を決める", description: "ケアンズなど玄関口の都市と日程を決めます。乾季（6〜10月）は海況が安定しやすく人気です。" },
      { title: "ツアーの内容を比較", description: "シュノーケル/ダイビング/島上陸などの型と、料金・所要・含有物（器材・ランチ・保険）を公式で比較します。" },
      { title: "海況・季節の安全を確認", description: "催行状況・海況、雨季の有毒クラゲ・サイクロン情報を確認し、スティンガースーツ等の指示に従います。" },
      { title: "保護ルールを守って楽しむ", description: "サンゴに触れない・立たない、海洋公園のルールとスタッフの指示を守ります。泳ぎに不安があれば浮き具を使います。" },
    ],
    tips: [
      "船に弱い人は酔い止めを事前に。外洋は揺れることがあります。",
      "体験ダイビングやシュノーケルでも、健康状態の申告や泳力確認がある場合があります。持病がある人は事前に相談を。",
      "料金・催行・季節の海況は変わります。予約前に各ツアー会社の公式で最新情報を確認しましょう。",
    ],
    warnings: [
      "料金・ツアー催行・海況・遊泳可否は変わりやすく、この記事では具体額を断定しません。雨季（11〜4月）はサイクロンや有毒クラゲ（box jellyfish/irukandji）のリスクが高まります。必ずツアー会社・海洋公園当局の公式案内と現地スタッフの指示に従ってください。",
    ],
    verifiedAt: "2026-08-02",
    officialSources: [
      { label: "Great Barrier Reef Marine Park Authority（海洋公園・保護ルール・EMC）", url: "https://www2.gbrmpa.gov.au/", accessedAt: "2026-08-02" },
      { label: "Tourism Australia｜Great Barrier Reef（公式観光情報）", url: "https://www.australia.com/en/things-to-do/nature-and-national-parks/great-barrier-reef.html", accessedAt: "2026-08-02" },
      { label: "Bureau of Meteorology｜Warnings（気象・サイクロン警報）", url: "http://www.bom.gov.au/australia/warnings/", accessedAt: "2026-08-02" },
      { label: "healthdirect｜Marine stings（クラゲ刺傷の対処）", url: "https://www.healthdirect.gov.au/marine-stings", accessedAt: "2026-08-02" },
    ],
    relatedSlugs: ["area-cairns", "east-coast-route", "australia-travel-seasons", "domestic-flight-guide", "safety-emergency"],
    updatedAt: "2026-08-02",
    published: true,
  },

  {
    id: "a326",
    title: "ウルル旅行ガイド｜アクセス・費用・文化への配慮",
    slug: "uluru-guide",
    category: "travel",
    hub: "travel",
    description:
      "オーストラリア中央部の聖地ウルル（エアーズロック）。行き方（空路・車）、国立公園の入園パス、ベストシーズンと砂漠の安全、そして先住民アナング族の聖地としての文化的な配慮を、公式ルール中心にまとめた旅行ガイドです。",
    content: [
      "ウルル（Uluru／旧称エアーズロック）は、ノーザンテリトリーの内陸にある巨大な一枚岩で、ウルル・カタジュタ国立公園（Uluṟu-Kata Tjuṯa National Park）内にあります。先住民アナング（Aṉangu）の人々にとっての聖地であり、国立公園として公式ルールが定められています。この記事は行き方・費用・季節・文化的配慮を公式ルール中心に整理した旅行ガイドで、料金・開園・ツアーは変わりやすいため各公式で確認してください。",
      "アクセスは、①空路（エアーズロック空港＝コネランへ国内線、近隣のリゾート集落エアーズロック・リゾート／ユララに宿泊）、②車（アリススプリングスから約450km・数時間のドライブ）が中心です。公共交通は限られるため、ツアーやレンタカー、リゾートのシャトルを使うのが一般的です。都市間が非常に遠いので、移動計画と給油・水の確保が重要です（ロードトリップの安全は関連記事参照）。",
      "国立公園への入園には入園パス（park pass）が必要で、一定日数有効です。料金・有効期間・購入方法は公園当局（Parks Australia）の公式で確認してください。見どころはウルル周辺の遊歩道（base walk）、日の出・日の入りの展望、近くのカタジュタ（The Olgas）など。なお、ウルルの登山（クライミング）は2019年10月26日に恒久的に禁止されています。岩に登ることはできません。",
      "季節は、内陸砂漠のため夏（12〜2月）は極端な高温になり、冬（6〜8月）は日中穏やかでも朝晩は氷点下近くまで冷え込みます。歩くなら涼しい時期・時間帯が安全で、通年で水・日よけ・ハエ対策（フライネット）が役立ちます。文化的配慮として、聖地・撮影禁止エリアの表示に従い、指定された場所以外での撮影や立ち入りを避けることが求められます。アナングの文化を尊重して訪れましょう。",
    ],
    keyFacts: [
      { label: "場所", value: "NT内陸・ウルル・カタジュタ国立公園" },
      { label: "行き方", value: "空路（エアーズロック空港）／車（アリススプリングスから約450km）" },
      { label: "入園", value: "park pass が必要（料金・期間は公式で確認）" },
      { label: "登山", value: "2019年10月26日から恒久的に禁止" },
      { label: "季節", value: "夏は酷暑・冬は朝晩冷える／水と日よけ必須" },
    ],
    steps: [
      { title: "行き方と宿を決める", description: "空路（エアーズロック空港）か車（アリススプリングス経由）かを決め、ユララ／エアーズロック・リゾートの宿を確保します。" },
      { title: "入園パスを準備", description: "国立公園の park pass の料金・有効期間・購入方法を Parks Australia 公式で確認して用意します。" },
      { title: "季節と安全に備える", description: "酷暑・寒暖差を踏まえ涼しい時期/時間に。水・日よけ・フライネットを準備し、砂漠の移動計画を立てます。" },
      { title: "文化的ルールを守る", description: "聖地・撮影禁止エリアの表示に従い、登山禁止・立入制限を守ってアナングの文化を尊重します。" },
    ],
    tips: [
      "日の出・日の入りはウルルが色を変える人気の時間帯。展望エリアの場所と時間を事前に確認しましょう。",
      "夏は屋外活動が危険なほど暑くなります。歩くなら早朝など涼しい時間に、水を多めに携行しましょう。",
      "ハエが多い時期はフライネット（頭にかぶる網）があると快適です。",
    ],
    warnings: [
      "ウルルの登山は2019年10月26日から恒久的に禁止されています。入園パスの料金・有効期間、開園・ツアー・道路状況は変わるため、必ず Parks Australia（ウルル・カタジュタ国立公園）の公式で最新情報を確認してください。聖地・撮影禁止の表示には必ず従ってください。",
    ],
    verifiedAt: "2026-08-02",
    officialSources: [
      { label: "Parks Australia｜Uluṟu-Kata Tjuṯa National Park（入園・登山禁止・ルール）", url: "https://parksaustralia.gov.au/uluru/", accessedAt: "2026-08-02" },
      { label: "Northern Territory Government｜MVR・道路情報（内陸の運転）", url: "https://nt.gov.au/driving", accessedAt: "2026-08-02" },
      { label: "Bureau of Meteorology｜Climate averages（砂漠の気候）", url: "http://www.bom.gov.au/climate/averages/", accessedAt: "2026-08-02" },
      { label: "Tourism Australia｜Uluru（公式観光情報）", url: "https://www.australia.com/en/places/red-centre/guide-to-uluru.html", accessedAt: "2026-08-02" },
    ],
    relatedSlugs: ["state-nt-guide", "australia-road-trip-guide", "australia-travel-seasons", "camping-free-camps", "safety-emergency"],
    updatedAt: "2026-08-02",
    published: true,
  },

  {
    id: "a327",
    title: "タスマニア周遊ガイド｜車・日数・季節",
    slug: "tasmania-trip-guide",
    category: "travel",
    hub: "travel",
    description:
      "本土から離れた自然豊かな島、タスマニア。ホバートを拠点にした周遊の日数・移動手段（レンタカー中心）・主要スポット・国立公園、冷涼な気候と季節の考え方を、ワーホリ目線でまとめた旅行プランガイドです。",
    content: [
      "タスマニア（Tasmania）はオーストラリア本土の南に浮かぶ島の州で、手つかずの自然と国立公園、涼しい気候が魅力です。玄関口は州都ホバート（南）とローンセストン（北）で、多くの旅行者はどちらかに入り、車で島を周遊します。この記事は日数・移動・主要スポット・季節を考えるための旅行プランガイドで、料金・営業・道路状況は変わりやすいため各公式で確認してください。",
      "移動はレンタカーが基本です。公共交通は本土の大都市より限られ、国立公園や海岸の絶景は車がないと回りにくいためです。本土から車ごと渡るフェリー（Spirit of Tasmania／メルボルン〜デボンポート）を使う方法もあります。周遊日数は、要点だけなら4〜5日、じっくり自然を楽しむなら1週間以上が目安。運転は左側通行で、地方の道は野生動物の飛び出しに注意します。",
      "主なスポットは、ホバート（サラマンカ・MONA）、世界遺産の荒野（Cradle Mountain／クレイドルマウンテン）、ワイングラスベイ（フレシネ国立公園）、ポートアーサーの史跡、東海岸のビーチなど。国立公園の多くは入園にパス（Parks pass）が必要です。料金・有効期間・購入は Tasmania Parks and Wildlife Service の公式で確認しましょう。",
      "気候は本土より冷涼で、真夏（12〜2月）でも朝晩は冷え込み、山岳部は天候が急変します。ベストシーズンは日が長く穏やかな夏〜秋が人気ですが、防寒・雨具は通年で用意すると安心です。冬は寒く一部の高地は雪。ブッシュウォーク（トレッキング）は天候急変・低体温症に注意し、行程を共有して無理をしないこと。緊急時は Triple Zero（000）です。",
    ],
    keyFacts: [
      { label: "玄関口", value: "ホバート（南）／ローンセストン（北）" },
      { label: "移動", value: "レンタカー中心／本土からはフェリーも" },
      { label: "周遊日数", value: "要点4〜5日／じっくり1週間以上" },
      { label: "国立公園", value: "Parks pass が必要（公式で確認）" },
      { label: "気候", value: "本土より冷涼・夏でも朝晩冷える・防寒必須" },
    ],
    steps: [
      { title: "入口と日数を決める", description: "ホバートかローンセストンを起点に、周遊日数（要点4〜5日／じっくり1週間以上）を決めます。" },
      { title: "車を手配", description: "レンタカーを基本に、本土からはフェリー（Spirit of Tasmania）も選択。左側通行・地方道の動物に注意します。" },
      { title: "公園パスとルートを準備", description: "国立公園の Parks pass を用意し、クレイドルマウンテン・フレシネ等の主要スポットをルート順に並べます。" },
      { title: "季節と天候に備える", description: "冷涼な気候・山の天候急変に備え、防寒・雨具を通年で準備。ブッシュウォークは行程共有と装備を万全に。" },
    ],
    tips: [
      "国立公園は入園パスが要ります。日数に合ったパスを事前に用意すると入口でスムーズです。",
      "山岳・荒野は真夏でも寒くなります。重ね着と防水の上着を持ちましょう。",
      "人気の宿・ツアー・フェリーは繁忙期に埋まりやすいです。日程が決まったら早めの予約を（料金は公式で確認）。",
    ],
    warnings: [
      "料金・営業・フェリー空席・道路や公園の状況は変わりやすく、具体額は断定しません。山岳部は天候が急変し低体温症のリスクがあります。国立公園のパスやルールは Tasmania Parks and Wildlife Service の公式で、天候は BOM で確認し、緊急時は000へ。",
    ],
    verifiedAt: "2026-08-02",
    officialSources: [
      { label: "Tasmania Parks and Wildlife Service（国立公園・入園パス）", url: "https://parks.tas.gov.au/", accessedAt: "2026-08-02" },
      { label: "Spirit of Tasmania（本土〜タスマニアのフェリー）", url: "https://www.spiritoftasmania.com.au/", accessedAt: "2026-08-02" },
      { label: "Bureau of Meteorology｜Tasmania（気候・気象警報）", url: "http://www.bom.gov.au/tas/", accessedAt: "2026-08-02" },
      { label: "Discover Tasmania（公式観光情報）", url: "https://www.discovertasmania.com.au/", accessedAt: "2026-08-02" },
    ],
    relatedSlugs: ["state-tas-guide", "area-hobart", "australia-road-trip-guide", "cars-guide", "australia-travel-seasons"],
    updatedAt: "2026-08-02",
    published: true,
  },

  {
    id: "a328",
    title: "祝日・スクールホリデーの旅行混雑と料金対策",
    slug: "public-holiday-travel",
    category: "travel",
    hub: "travel",
    description:
      "オーストラリアの祝日（public holidays）とスクールホリデー（学校の長期休暇）は州ごとに時期が異なり、旅行の混雑や料金に大きく影響します。混雑期の調べ方と、宿・交通・予約の対策を、ワーホリ目線でまとめたガイドです。",
    content: [
      "オーストラリアの祝日とスクールホリデー（学校の長期休暇）は、旅行の混雑・料金を大きく左右します。結論として、これらの時期は宿・航空券・レンタカーが高騰し予約も取りにくくなるため、日程を外すか、早めに予約するのが基本の対策です。重要なのは、祝日もスクールホリデーも州・準州ごとに日程が異なることを前提に、行き先の州のカレンダーを確認することです。",
      "祝日には全国共通のもの（元日・オーストラリアデー・グッドフライデー・イースター・アンザックデー・クリスマス等）と、州独自のもの（各州のレイバーデー、メルボルンカップ〔VIC〕など）があります。祝日は多くの店・施設・公共交通が休業・短縮になり、飲食やスーパーの営業時間も変わります。祝日の正確な日付は各州政府の公式（public holidays）で確認しましょう（日付は年により変わります）。",
      "スクールホリデーは、夏（12月中旬〜1月末）が最長で、ほかに各学期の間に2週間前後の休暇が年数回あります。時期は州でずれるため、同じ週でも州によって混雑度が違います。家族連れが動くこの時期は観光地・宿・国内線が特に混み、料金も上がりやすいです。旅行日程を組むときは、行き先と出発地の両方の州のカレンダーを見ると精度が上がります。",
      "対策としては、①混雑期を避けて平日・オフシーズンに動く、②避けられないなら数週間前など早めに予約する、③祝日の営業時間・交通の減便を事前に確認する、が有効です。祝日は労働面でも割増（public holiday penalty rates）や休業に関わるため、仕事のシフトと合わせて計画すると無駄がありません。料金・空席・営業は変わるため、最終的な予約時に各公式で確認してください。",
    ],
    keyFacts: [
      { label: "州でバラバラ", value: "祝日・スクールホリデーの日程は州/準州で異なる" },
      { label: "混雑期", value: "夏休み（12月中旬〜1月末）・祝日連休・学期間休暇" },
      { label: "影響", value: "宿・航空券・レンタカーが高騰・予約困難" },
      { label: "祝日の営業", value: "店・施設・交通が休業/短縮になりやすい" },
      { label: "対策", value: "時期を外す／早めに予約／営業時間を事前確認" },
    ],
    steps: [
      { title: "行き先の州のカレンダーを確認", description: "祝日は各州政府の public holidays、スクールホリデーは州の学期カレンダーで日程を確認します（年により変動）。" },
      { title: "混雑期を外すか早期予約", description: "可能なら平日・オフシーズンへ。避けられないなら数週間前に宿・航空券・レンタカーを予約します。" },
      { title: "祝日の営業・交通を確認", description: "祝日は休業・短縮・減便があります。スーパー・観光施設・公共交通の営業時間を事前に確認します。" },
      { title: "仕事のシフトと調整", description: "祝日の割増や休業と旅行日程を合わせ、無理のない計画にします。" },
    ],
    tips: [
      "同じ月でも州によって学校休暇の週がずれます。出発地と目的地の両方のカレンダーを見ましょう。",
      "連休・祝日の前後は特に混みます。少し日程をずらすだけで料金と混雑が下がることがあります。",
      "祝日はスーパーや施設が短縮営業のことも。買い出しや移動は前日までに済ませると安心です。",
    ],
    warnings: [
      "祝日・スクールホリデーの日付は毎年・州ごとに変わります。この記事の混雑傾向は目安で、料金・空席・営業時間は断定しません。旅行前に各州政府の公式（public holidays・学期カレンダー）と各予約先で最新情報を確認してください。",
    ],
    verifiedAt: "2026-08-02",
    officialSources: [
      { label: "australia.gov.au｜Public holidays（州別の祝日一覧）", url: "https://www.australia.gov.au/public-holidays", accessedAt: "2026-08-02" },
      { label: "Fair Work Ombudsman｜Public holidays（祝日と労働）", url: "https://www.fairwork.gov.au/employment-conditions/public-holidays", accessedAt: "2026-08-02" },
      { label: "Tourism Australia（旅行の計画・公式観光情報）", url: "https://www.australia.com/", accessedAt: "2026-08-02" },
    ],
    relatedSlugs: ["opening-hours-holidays", "domestic-flight-guide", "australia-travel-seasons", "working-holiday-budget", "east-coast-route"],
    updatedAt: "2026-08-02",
    published: true,
  },
];
