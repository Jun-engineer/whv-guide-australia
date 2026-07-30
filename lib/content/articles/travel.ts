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
];
