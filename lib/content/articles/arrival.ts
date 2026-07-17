import type { Article } from "./types";

export const arrivalArticles: Article[] = [
  {
    id: "a3",
    title: "オーストラリア到着後チェックリスト｜最初の1週間でやること",
    slug: "arrival-checklist",
    category: "arrival",
    description:
      "空港到着から最初の1週間で済ませたい手続きを優先順位つきで整理。これさえ押さえれば生活の土台が完成します。",
    content: [
      "到着直後は「連絡が取れる状態」と「お金を受け取れる状態」を整えますが、その前に意外と重要なのが住所の確保です。TFNや銀行のカード・書類は登録した住所に郵送されるため、住居が定まらないと受け取れなかったり、短期滞在先を出た後に届いて受け取れない、というトラブルが起きやすいからです。",
      "そこでおすすめの順番は「SIM → 住居（少なくとも数週間滞在できる拠点）→ 銀行口座 → TFN」です。まずSIMでネットをつなぎ、シェアハウスや中期滞在先を確保してから、その住所で銀行口座開設とTFN申請を行うと郵送物を確実に受け取れます。",
      "空港に着いたら、まずは市内へのアクセス手段を確認しましょう。主要都市は空港から市内まで電車・シャトルバス・ライドシェアが利用できます。多くの交通機関はクレジットカードやスマホのタッチ決済に対応しているため、到着直後に大量の現金を用意する必要はありません。緊急時に備えて100〜200 AUD程度あれば十分です。",
      "最初の数日は、時差ボケや慣れない環境で疲れやすい時期です。無理に一気に手続きを進めようとせず、初日はSIMの有効化と宿泊先の確保だけに絞り、翌日以降に銀行口座やTFNを進めると失敗が減ります。手続きに必要な書類（パスポート、ビザ許可通知、滞在先の住所）はスマホとクラウドの両方に保存しておくと、どこでもすぐ提示できて便利です。",
      "住居が決まるまでの数日〜1週間は、ホステルや短期のシェアハウスを拠点にするのが一般的です。この間に複数の物件を内見し、通勤のしやすさ・治安・家賃に含まれる費用（光熱費やWi-Fi）を比較して、腰を据えられる拠点を決めましょう。拠点が固まってから銀行やTFNの住所を登録すれば、カードや通知の郵送でつまずくことがありません。",
    ],
    keyFacts: [
      { label: "おすすめ順", value: "SIM → 住居確保 → 銀行口座 → TFN" },
      { label: "住所が先の理由", value: "TFN通知や銀行カードは登録住所に郵送されるため" },
      { label: "交通", value: "都市の交通カード（Opal/myki/go card等）に登録、もしくはタッチ決済対応" },
      { label: "現金", value: "ほぼ不要。緊急用に100〜200 AUDあれば十分" },
    ],
    steps: [
      { title: "SIM/eSIMを有効化", description: "到着前に契約したeSIMを起動、または現地で物理SIMを購入し、家探し・連絡手段を確保します。" },
      { title: "住居を確保（先に）", description: "ホステル等を拠点に内見し、数週間以上滞在できるシェアハウス等を契約。郵送物を受け取れる安定した住所を先に作ります。" },
      { title: "銀行口座を開設", description: "確保した住所でアプリ申込→本人確認。カードを自宅で受け取れます（銀行ガイド参照）。" },
      { title: "TFNを申請", description: "ATOのサイトで無料申請。郵送先に確保した住所を登録すれば通知を確実に受け取れます。" },
      { title: "交通カードを準備", description: "都市ごとの交通系カードを登録、またはクレカのタッチ決済で乗車します。" },
    ],
    tips: [
      "まずSIMとホステル等の短期拠点を押さえ、シェアハウスを決めてから銀行・TFNに進むと郵送物を取りこぼさない。",
      "どうしても先にTFNを申請したい場合は、滞在先（ホステル等）を郵送先にし、住居が決まったらmyGov/ATOで住所を更新する。",
      "銀行口座は渡航前にオンラインで申し込める銀行（CommBank等）を使うと到着後が早い。",
      "交通はほぼ全都市でVisa/Mastercardのタッチ決済が使え、現金で切符を買う必要はありません。",
    ],
    faqs: [
      {
        question: "住居が決まる前にTFNや銀行口座を作っても大丈夫ですか？",
        answer:
          "作ること自体は可能ですが、TFNの通知書や銀行のカードは登録住所に郵送されるため、短期滞在先を先に出てしまうと受け取れないことがあります。可能なら数週間以上滞在できる住居を確保し、その住所で申請するのが安全です。先に申請する場合は、住居確定後にmyGov・銀行アプリで住所を更新しましょう。",
      },
      {
        question: "TFNがまだ届かないうちに働き始めても大丈夫ですか？",
        answer:
          "働き始めること自体は可能ですが、TFNを雇用主に提出しないと高い税率で源泉徴収されます。申請から28日以内に提出すれば通常税率が適用されるので、到着後すぐ申請しましょう。",
      },
    ],
    relatedSlugs: ["housing-guide", "tfn-guide", "bank-account-guide", "sim-guide", "transport-payment-guide", "first-30-days-roadmap", "australia-airport-arrival-flow", "mygov-account-guide", "proof-of-address", "essential-australia-apps"],
    updatedAt: "2026-06-16",
    published: true,
  },

  {
    id: "a46",
    title: "店の営業時間と祝日（Public Holiday）の注意点",
    slug: "opening-hours-holidays",
    category: "arrival",
    description:
      "オーストラリアは店の閉店が早く、祝日は休業や割増料金も。買い物・手続きで困らないための営業時間と祝日の基礎知識です。",
    content: [
      "日本の感覚で夜に買い物へ行くと、多くの店がすでに閉まっていて驚くことがあります。オーストラリアはスーパーや商業施設の閉店が比較的早く、平日は17〜18時頃、週に一度だけ夜遅くまで開く『Late Night Shopping（木曜が多い）』の日があります。",
      "また祝日（Public Holiday）は州ごとに異なり、多くの店が休業したり、営業しても料金に割増（public holiday surcharge）が付くことがあります。銀行や役所も休みになるため、手続きは祝日を避けて計画しましょう。",
    ],
    keyFacts: [
      { label: "平日の閉店", value: "スーパーは17〜21時。店により大きく異なる" },
      { label: "Late Night", value: "週1回夜遅くまで営業（木曜が多い）" },
      { label: "日曜", value: "営業時間が短縮される店が多い" },
      { label: "祝日", value: "州ごとに異なる。休業や割増料金に注意" },
    ],
    steps: [
      { title: "近所の店の営業時間を確認", description: "Googleマップで最寄りのスーパー・薬局の営業時間を保存しておきます。" },
      { title: "祝日カレンダーを確認", description: "滞在する州のPublic Holidayを調べ、手続きや買い物の予定を立てます。" },
      { title: "祝日前に買い出し", description: "連休前はスーパーが混雑・品薄になりがち。早めに買い物を済ませます。" },
      { title: "割増料金を想定", description: "祝日のカフェ・レストランは会計に割増が付く場合があると理解しておきます。" },
    ],
    tips: [
      "ColesやWoolworthsの大型店は比較的遅くまで開いていますが、店舗ごとに違うので事前確認を。",
      "祝日は銀行・郵便局・役所が休み。TFNや口座関連の手続きは平日に。",
      "州が違うと祝日も違います。旅行先の州の祝日もチェックしておくと安心です。",
    ],
    relatedSlugs: ["arrival-checklist", "food-guide", "area-overview", "first-week-shopping"],
    updatedAt: "2026-07-16",
    published: true,
  },

  {
    id: "a50",
    title: "到着後30日ロードマップ｜家・仕事・手続きを進める順番",
    slug: "first-30-days-roadmap",
    category: "arrival",
    hub: "start-here",
    priority: "P0",
    searchIntent: "到着後にやることの順番・ロードマップ",
    description:
      "オーストラリア到着後の最初の30日で、SIM・住居・銀行・TFN・仕事探しを「どの順番で」進めるべきかを週ごとに整理。郵送物の受け取りでつまずかない導線を示します。",
    content: [
      "最初に結論を言うと、到着後は「SIM → 住居 → 銀行口座 → TFN → 仕事探し」の順で進めるのが失敗しにくい流れです。理由はシンプルで、銀行のカードやTFNの通知など重要な郵送物は登録した住所に届くため、住所が定まらないうちに手続きを進めると受け取れなくなるからです。まず連絡手段（SIM）と受取先（住居）を確保してから、口座開設と納税者番号の申請に進みます。",
      "1週目は『つながる・住む・移動する』を整えます。到着したらまずSIM/eSIMでネットをつなぎ、数週間は滞在できる拠点（ホステルや短期のシェアハウス）を確保します。市内までの移動や日々の買い物はタッチ決済が使えるので、到着直後に大量の現金は不要です。詳しい通信・住居の選び方は各詳細記事にまとめています。",
      "2週目は『お金と番号』です。住所が決まったら銀行口座を開設し、そのうえでTFN（Tax File Number＝納税者番号）を申請します。TFNは仕事を始めるときに必須で、提出しないと高い税率が源泉徴収されてしまいます。あわせてmyGovアカウントを作っておくと、後の税務手続き（タックスリターン）がスムーズです。",
      "3週目は『仕事探し』に本格的に動きます。英文レジュメを用意し、求人サイト・店頭への持ち込み・地域のコミュニティなど複数の経路で応募します。職種によってはRSA（アルコール提供）やWhite Card（建設）などの資格が必要になるため、狙う仕事に合わせて早めに取得を検討します。",
      "4週目は『生活基盤の仕上げ』です。中期的に住むシェアハウスを固め、必要なら中古車や公共交通の定期を検討し、医療（Medicare対象国かOSHC/保険）や緊急連絡先を確認します。ここまで整えば、あとは働きながら生活のリズムを作っていく段階です。",
    ],
    keyFacts: [
      { label: "推奨の順番", value: "SIM → 住居 → 銀行 → TFN → 仕事探し" },
      { label: "1週目", value: "SIM/eSIM・当面の住居・交通と買い物のタッチ決済" },
      { label: "2週目", value: "銀行口座 → TFN申請 → myGov作成" },
      { label: "3週目", value: "英文レジュメ・応募・必要資格（RSA/White Card）" },
      { label: "4週目", value: "中期の住居・交通・医療と緊急連絡先の確認" },
    ],
    steps: [
      { title: "SIM/eSIMでネット確保", description: "到着直後にデータ通信を確保。詳しくはSIM・通信ガイドを参照します。" },
      { title: "当面の住居を確保", description: "数週間滞在できる拠点を押さえ、郵送物を受け取れる住所を作ります。" },
      { title: "銀行口座を開設", description: "住所確定後にオンライン/店頭で開設。給料の受け取り口座にします。" },
      { title: "TFNを申請", description: "口座と住所が整ったらTFNを申請。仕事開始までに取得しておきます。" },
      { title: "仕事を探し始める", description: "英文レジュメを用意し、複数経路で応募。必要な資格も早めに取得します。" },
    ],
    tips: [
      "銀行のカードやTFN通知は郵送。住所が定まる前に手続きを急ぐと受け取れないことがあります。",
      "TFNを提出せずに働くと高い税率で源泉徴収されます。仕事開始前の取得がおすすめです。",
      "myGovは早めに作成。後のタックスリターンやIncome Statementの確認が楽になります。",
    ],
    warnings: [
      "『内見前に家賃やボンドを振り込んで』と急かす相手は詐欺の可能性があります。現物確認と契約書を必ず確認してください。",
    ],
    faqs: [
      {
        question: "銀行口座とTFN、どちらが先ですか？",
        answer:
          "一般的には住所確定後に銀行口座を開設し、その後にTFNを申請する流れがスムーズです。どちらも郵送物や本人確認が関わるため、まず住居（受取先の住所）を固めることが先決です。",
      },
      {
        question: "仕事はいつから探し始めるべきですか？",
        answer:
          "生活の基盤（SIM・住居・銀行・TFN）が整い始める2〜3週目から本格化するのが効率的です。ただしレジュメ作成や資格取得は1週目から並行して進めておくと早く動けます。",
      },
    ],
    sources: [
      { label: "ATO｜Tax file number", url: "https://www.ato.gov.au/individuals-and-families/tax-file-number" },
      { label: "myGov", url: "https://my.gov.au/" },
    ],
    verifiedAt: "2026-07-16",
    officialSources: [
      {
        label: "ATO｜Tax file number（TFNの申請）",
        url: "https://www.ato.gov.au/individuals-and-families/tax-file-number",
        accessedAt: "2026-07-16",
      },
    ],
    relatedSlugs: ["arrival-checklist", "sim-guide", "bank-account-guide", "tfn-guide", "jobs-guide", "share-house-finding", "mygov-account-guide", "australia-living-cost"],
    updatedAt: "2026-07-16",
    published: true,
  },

  {
    id: "a98",
    title: "オーストラリア入国審査から税関通過までの流れ",
    slug: "australia-airport-arrival-flow",
    category: "arrival",
    hub: "arrival",
    priority: "P0",
    searchIntent: "到着後の入国審査・荷物・税関・検疫の流れ",
    description:
      "着陸から空港の外に出るまでの手順を順番に解説。Incoming Passenger Cardの記入、SmartGate（自動化ゲート）での入国審査、荷物受け取り、バイオセキュリティ・税関申告の流れと、日本人がつまずきやすいポイントをまとめます。",
    content: [
      "結論から言うと、到着後の流れは「機内でIncoming Passenger Card（入国カード）を記入 → 降機 → 入国審査（SmartGateまたは有人カウンター）→ 荷物受け取り → バイオセキュリティ・税関の申告レーン → 出口」の順番です。この一本道を知っていれば、初めての入国でも迷わず進めます。",
      "入国審査は、日本のICパスポート（ePassport）を持つ16歳以上なら、多くの国際空港でSmartGate（自動化ゲート）を使えます。SmartGateはパスポートと顔認証で本人確認を行う仕組みで、キオスク端末またはゲートでパスポートを読み取らせ、案内に従うだけで通過できます。うまく認識されない場合や対象外の場合は、有人カウンターに案内されます。",
      "機内で配られるIncoming Passenger Card（IPC）は全員が記入します。ここで重要なのが「申告（Declare）」の欄です。食品・肉・卵・乳製品・種子・植物・木製品など、持ち込みに制限のある物や、10,000豪ドル相当以上の現金を持っている場合は、正直に『Yes』を選んで申告します。迷ったら『申告する』が正解で、申告した物は検査で問題なければそのまま持ち込めることも多くあります。",
      "荷物を受け取ったら、最後にバイオセキュリティ（生物検疫）と税関の検査レーンを通過します。オーストラリアは検疫が非常に厳格で、申告が必要な物を申告せずに持ち込むと、その場で高額の違反金（Infringement Notice）が科されたり、悪質な場合はビザに影響することもあります。逆に、正しく申告していれば処分の対象にはなりません。捨てる場所（検疫用のゴミ箱）が審査前にあるので、不安な食品はそこで処分してから進むのも一つの方法です。",
      "所要時間は便の集中具合によって大きく変わり、大型機が重なる時間帯は入国審査や検疫で1時間以上並ぶこともあります。乗り継ぎがある場合は余裕をもった計画を。到着後すぐ必要になるSIMの有効化や市内への移動手段は、審査を抜けてから落ち着いて進めれば十分間に合います。",
    ],
    keyFacts: [
      { label: "流れ", value: "入国カード記入 → 入国審査 → 荷物受取 → 検疫・税関 → 出口" },
      { label: "SmartGate", value: "日本のICパスポート・16歳以上で利用可（顔認証＋パスポート）" },
      { label: "入国カード", value: "全員記入。食品・現金1万豪ドル相当以上などは申告" },
      { label: "検疫", value: "非常に厳格。未申告の持ち込みは違反金の対象" },
    ],
    steps: [
      { title: "機内で入国カードを記入", description: "Incoming Passenger Cardに氏名・便名・滞在先を記入し、申告欄は該当すれば『Yes』を選びます。" },
      { title: "入国審査を通過", description: "ICパスポートならSmartGateでパスポート読み取り＋顔認証。対象外なら有人カウンターへ。" },
      { title: "預け荷物を受け取る", description: "便名の表示されたベルトで荷物をピックアップします。" },
      { title: "検疫・税関で申告", description: "申告する物がある人は申告レーンへ。不安な食品は検疫ゴミ箱で処分してから進みます。" },
      { title: "到着ロビーへ", description: "審査を抜けたらSIMの有効化・市内への移動へ進みます。" },
    ],
    tips: [
      "迷ったら『申告する』が安全。申告した物は検査でOKならそのまま持ち込めることが多い。",
      "液体・薬・食品は預け荷物と手荷物のどちらに入れたか把握しておくと申告がスムーズ。",
      "SmartGateで認識されなくても問題ありません。落ち着いて有人カウンターへ進みましょう。",
    ],
    warnings: [
      "申告が必要な食品・動植物・木製品を申告せずに持ち込むと、その場で高額の違反金が科されることがあります。",
    ],
    faqs: [
      {
        question: "日本のパスポートでSmartGateは使えますか？",
        answer:
          "はい。ICチップ入りの日本のパスポート（ePassport）を持つ16歳以上なら、多くの国際空港の到着でSmartGateを利用できます。認識できない場合は有人カウンターに案内されるだけなので、心配は要りません。",
      },
      {
        question: "持ってきたお菓子やカップ麺は申告が必要ですか？",
        answer:
          "肉が含まれる物（一部のインスタント食品など）は特に注意が必要で、申告が原則です。加工菓子でも、迷うものは『申告する』にして検査を受けるのが安全です。申告して問題なければそのまま持ち込めます。",
      },
    ],
    sources: [
      { label: "ABF｜SmartGates", url: "https://www.abf.gov.au/entering-and-leaving-australia/smartgates/arrivals" },
      { label: "農業・漁業・林業省（DAFF）｜Bringing goods into Australia", url: "https://www.agriculture.gov.au/biosecurity-trade/travelling/bringing-mailing-goods" },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "Australian Border Force｜SmartGates（到着）",
        url: "https://www.abf.gov.au/entering-and-leaving-australia/smartgates/arrivals",
        accessedAt: "2026-07-18",
      },
      {
        label: "Department of Agriculture, Fisheries and Forestry｜バイオセキュリティ（持ち込み）",
        url: "https://www.agriculture.gov.au/biosecurity-trade/travelling/bringing-mailing-goods",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["australia-customs-quarantine", "arrival-airport-guide", "airport-to-city", "arrival-checklist", "medication-customs"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a99",
    title: "主要空港から市内への移動方法と料金の考え方",
    slug: "airport-to-city",
    category: "arrival",
    hub: "arrival",
    priority: "P1",
    searchIntent: "空港から市内への移動手段・料金比較",
    description:
      "シドニー・メルボルン・ブリスベン・パースなど主要空港から市内へ向かう手段（電車・シャトルバス・公共バス・配車・タクシー）を比較。都市ごとの最適解と、料金を安く抑える考え方を解説します。",
    content: [
      "空港から市内への移動は「電車・空港シャトル・公共バス・配車（Uber/DiDiなど）・タクシー」から選びます。どれが最適かは都市によって異なり、電車が便利な都市もあれば、電車がなく配車やシャトルが中心の都市もあります。まずは到着する空港に何があるかを確認するのが第一歩です。",
      "料金を安く抑える基本は「専用の空港アクセス列車より、通常の公共交通を使えないか確認する」ことです。都市によっては空港駅の乗車に高い『空港駅利用料（ステーションアクセス料）』が上乗せされ、同じ電車でも空港発着だと割高になります。荷物が少なく時間に余裕があるなら、公共バスや近隣駅までの移動で節約できる場合があります。",
      "都市ごとの目安は次のとおりです。シドニーはAirport Link（電車）が速い一方で空港駅利用料が上乗せされ割高、公共バスという選択肢もあります。メルボルンは空港と市内を結ぶ鉄道が未整備で、SkyBus（有料シャトル）・公共バス・配車が中心です。ブリスベンはAirtrain（電車）、パースは空港線の電車（Metronet）が整備されています。いずれも最新の路線・料金は各州の交通局サイトで確認してください。",
      "支払いは、多くの都市でクレジット/デビットカードやスマホのタッチ決済（Apple Pay/Google Pay）にそのまま対応しており、交通系ICカード（Opal/myki/go card/SmartRiderなど）を買わなくても乗れることが増えています。到着直後に現金を用意する必要はほとんどありません。",
      "深夜・早朝の到着は、公共交通が動いていない時間帯があります。その場合は配車アプリやタクシーが現実的です。事前に配車アプリを入れておき、空港の指定乗降場所（ライドシェア用ピックアップポイント）を確認しておくと、到着後に迷わず合流できます。",
    ],
    keyFacts: [
      { label: "主な手段", value: "電車・空港シャトル・公共バス・配車・タクシー" },
      { label: "シドニー", value: "Airport Link（電車）は速いが空港駅利用料が上乗せ" },
      { label: "メルボルン", value: "空港鉄道が未整備。SkyBus・バス・配車が中心" },
      { label: "支払い", value: "多くの都市でカード/タッチ決済に対応。現金不要" },
    ],
    steps: [
      { title: "到着空港の手段を確認", description: "州の交通局サイトで、空港と市内を結ぶ電車・バス・シャトルの有無を調べます。" },
      { title: "時間帯を確認", description: "深夜・早朝は公共交通が止まる時間帯あり。動いていなければ配車・タクシーを検討します。" },
      { title: "支払い方法を用意", description: "タッチ決済対応のカード（またはWiseカード等）を準備。ICカードは必須ではありません。" },
      { title: "配車アプリを入れておく", description: "Uber/DiDiなどを事前に登録し、空港のライドシェア乗車場所を確認します。" },
    ],
    tips: [
      "空港駅利用料が高い都市では、荷物が少なければ公共バスや近隣駅利用で節約できることがあります。",
      "複数人で移動するなら、配車を割り勘にすると電車より安く・楽になる場合があります。",
      "最新の路線・料金は必ず各州交通局の公式サイトで確認を（改定が頻繁です）。",
    ],
    faqs: [
      {
        question: "交通系ICカードは到着してすぐ買うべきですか？",
        answer:
          "必須ではありません。多くの都市でクレジット/デビットのタッチ決済がそのまま使えるため、まずはカードで乗車し、長期滞在で必要になればICカードを検討すれば十分です。",
      },
    ],
    sources: [
      { label: "Transport for NSW（シドニー）", url: "https://transportnsw.info/" },
      { label: "Public Transport Victoria（メルボルン）", url: "https://www.ptv.vic.gov.au/" },
      { label: "TransLink（ブリスベン/QLD）", url: "https://translink.com.au/" },
      { label: "Transperth（パース/WA）", url: "https://www.transperth.wa.gov.au/" },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "Transport for NSW｜Sydney Airport（空港アクセス）",
        url: "https://transportnsw.info/travel-info/ways-to-get-around/sydney-airport",
        accessedAt: "2026-07-18",
      },
      {
        label: "Public Transport Victoria｜Melbourne Airport",
        url: "https://www.ptv.vic.gov.au/footer/customer-service/journey-tools/melbourne-airport/",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["australia-airport-arrival-flow", "transport-payment-guide", "arrival-checklist", "essential-australia-apps"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a100",
    title: "myGovアカウントの作成方法と使える行政サービス",
    slug: "mygov-account-guide",
    category: "arrival",
    hub: "arrival",
    priority: "P0",
    searchIntent: "myGovアカウントの作り方と連携できるサービス",
    description:
      "オーストラリアの行政サービスの入口となるmyGovアカウントの作成手順と、ワーホリが連携すべきサービス（ATO・Medicareなど）を解説。タックスリターンやIncome Statementの確認に必須の準備です。",
    content: [
      "myGov（my.gov.au）は、オーストラリアの複数の行政サービスに1つのログインでアクセスできる公式ポータルです。作成は無料で、メールアドレスと携帯番号があれば数分で登録できます。ワーホリにとっては、後のタックスリターン（確定申告）や給与情報（Income Statement）の確認に必須の入口になるため、到着後の早い段階で作っておくのがおすすめです。",
      "作成の流れはシンプルで、my.gov.auで『Create account（アカウント作成）』を選び、メールアドレスを登録し、届いたコードで認証、パスワードを設定し、サインイン方法（パスキー、myID、またはコード送信）を選ぶだけです。携帯番号を登録しておくと、ログイン時のセキュリティコード受信に使えます。",
      "アカウントができたら、使いたいサービスを『リンク（連携）』します。ワーホリで最重要なのはATO（税務署）との連携です。連携すると、雇用主が報告した給与・源泉徴収（Income Statement）を確認でき、年度末のタックスリターンをオンラインで完結できます。Medicare対象国の人はMedicareも連携できます（日本はMedicare協定の対象外のため、多くのワーホリは民間の保険を利用します）。",
      "ATOとの連携には本人確認が必要で、TFN（納税者番号）や、過去の申告・源泉票などの情報を使う方法のほか、myID（Digital ID）を使う方法があります。到着直後で連携に必要な情報が揃わない場合は、TFNの取得や最初の給与明細が出てから連携するとスムーズです。",
      "セキュリティ面では、パスワードの使い回しを避け、サインインコードやパスキーで二段階の保護をかけておきましょう。myGovを名乗る偽SMS・偽メール（フィッシング）が多いため、リンクから開かず、必ずブラウザでmy.gov.auを直接入力して開く習慣が安全です。",
    ],
    keyFacts: [
      { label: "URL", value: "my.gov.au（公式ポータル、無料）" },
      { label: "必要なもの", value: "メールアドレス・携帯番号" },
      { label: "最重要の連携", value: "ATO（給与情報の確認・タックスリターン）" },
      { label: "本人確認", value: "TFN等の情報、またはmyIDを利用" },
    ],
    steps: [
      { title: "アカウントを作成", description: "my.gov.auで『Create account』を選び、メール認証とパスワード設定を行います。" },
      { title: "サインイン方法を設定", description: "パスキー・myID・コード送信などのサインイン方法と携帯番号を登録します。" },
      { title: "ATOをリンク", description: "TFN等の情報、またはmyIDでATOと連携し、給与情報を確認できるようにします。" },
      { title: "必要なサービスを追加", description: "該当する人はMedicareなど他のサービスも連携します。" },
    ],
    tips: [
      "ATO連携は最初の給与明細やTFN取得後だと本人確認がスムーズです。",
      "myGovを名乗るSMS/メールのリンクは開かず、ブラウザでmy.gov.auを直接入力しましょう。",
      "サインインはパスキーやコードで二段階保護を有効にしておくと安全です。",
    ],
    warnings: [
      "『myGovアカウントが停止された』などと不安を煽る偽メッセージは詐欺の典型です。リンクを踏まないでください。",
    ],
    faqs: [
      {
        question: "myGovとmyID（Digital ID）は何が違いますか？",
        answer:
          "myGovは複数の行政サービスにアクセスする『入口（ポータル）』、myIDは自分が本人であることを証明する『デジタル身分証』です。myIDを使うとmyGovやATOへのログイン・本人確認をより簡単・安全に行えますが、必須ではなく、TFN等の情報でも連携できます。",
      },
      {
        question: "TFNがなくてもmyGovは作れますか？",
        answer:
          "はい。myGovアカウントの作成自体にTFNは不要です。ただしATOとの連携では本人確認情報が必要になるため、TFN取得後に連携すると手続きが楽になります。",
      },
    ],
    sources: [
      { label: "myGov 公式", url: "https://my.gov.au/" },
      { label: "ATO｜Link ATO to myGov", url: "https://www.ato.gov.au/online-services/online-services-for-individuals-and-sole-traders/mygov-and-the-ato" },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "myGov（公式）｜アカウント作成",
        url: "https://my.gov.au/",
        accessedAt: "2026-07-18",
      },
      {
        label: "ATO｜myGov and the ATO（連携）",
        url: "https://www.ato.gov.au/online-services/online-services-for-individuals-and-sole-traders/mygov-and-the-ato",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["digital-id-guide", "tfn-guide", "first-30-days-roadmap", "proof-of-address", "tax-return-guide"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a101",
    title: "myID（Digital ID）の作成方法と本人確認レベルの上げ方",
    slug: "digital-id-guide",
    category: "arrival",
    hub: "arrival",
    priority: "P1",
    searchIntent: "myID（Digital ID）の作り方と本人確認レベル",
    description:
      "オーストラリア政府のデジタル身分証『myID』の作成手順と、Basic・Standard・Strongの3段階の本人確認レベルを解説。ワーホリが用意できる書類（ビザ・外国パスポート）での注意点もまとめます。",
    content: [
      "myIDは、オーストラリア政府が提供するデジタル身分証（Digital ID）で、行政サービスへのログインや本人確認を簡単・安全にするアプリです（以前はmyGovIDという名称でした）。myID自体はサービスの入口ではなく『本人確認の手段』で、myGovやATOなどと組み合わせて使います。作成は無料で、スマートフォンとメールアドレス、15歳以上であることが条件です。",
      "作成は3ステップです。まず公式アプリストア（Apple App Store／Google Play）から『myID』アプリをダウンロードします（偽アプリに注意し、必ず公式ストアから）。次にアプリでメールアドレス・パスワード・氏名・生年月日を登録します。最後に、本人確認書類を使って『本人確認レベル（Identity strength）』を選びます。",
      "本人確認レベルはBasic・Standard・Strongの3段階です。個人情報を入力しただけの状態はBasicで、利用できるサービスが限られます。Standardはオーストラリアの書類2点（パスポート、運転免許、出生証明、ビザ〈外国パスポートを使用〉、ImmiCard、市民権証明、Medicareカードなど）を照合すると到達し、ほとんどの行政サービスにアクセスできます。Strongは書類に加えて顔写真の照合まで行い、すべての対応サービスを利用できます。",
      "ワーホリで注意したいのは、Standardには『2点』の書類が必要な点です。到着直後の日本人が持っているのは実質的に『ビザ（外国パスポートで確認）』の1点になりがちで、2点目が揃わないことがあります。オーストラリアの運転免許を取得したり、銀行口座開設後にMedicare以外の要件を満たしたりして、時間の経過とともにレベルを上げられる場合があります。まずはBasic/可能な範囲で作成し、必要になった時点でレベルを上げる進め方で問題ありません。",
      "myIDは必須ではありません。ATOやmyGovの連携はTFNなどの情報でも可能です。ただしmyIDがあると、複数の政府サービスで同じデジタル身分証を使い回せて便利なので、余裕があれば早めに作っておくとよいでしょう。",
    ],
    keyFacts: [
      { label: "myIDとは", value: "政府のデジタル身分証（旧myGovID）。本人確認の手段" },
      { label: "作成条件", value: "スマホ・個人用メール・15歳以上" },
      { label: "レベル", value: "Basic / Standard / Strong の3段階" },
      { label: "Standard", value: "豪州書類2点を照合（ビザ＝外国パスポートも1点に）" },
    ],
    steps: [
      { title: "公式アプリを入手", description: "Apple App Store／Google Playから『myID』を入手（偽アプリに注意）。" },
      { title: "情報を登録", description: "個人用メール・パスワード・氏名・生年月日を入力します。" },
      { title: "本人確認レベルを選ぶ", description: "書類を照合してStandard以上を目指します。まずは可能な範囲でOK。" },
      { title: "必要時にレベルを上げる", description: "利用したいサービスの必要レベルに合わせ、書類を追加して強度を上げます。" },
    ],
    tips: [
      "myIDアプリは必ず公式ストアから。SMSやメールのリンクからは入れないこと。",
      "到着直後は書類2点が揃わないことも。焦らず、必要になったらレベルを上げれば十分です。",
      "myGov連携はTFN等でも可能。myIDは『あると便利』な位置づけです。",
    ],
    faqs: [
      {
        question: "ワーホリでもStrongレベルにできますか？",
        answer:
          "オーストラリアのパスポートや（西オーストラリア州の）運転免許など、顔写真付きの豪州書類での照合が必要になるため、到着直後の多くの日本人ワーホリはStandard到達が現実的です。多くの行政サービスはStandardでアクセスできます。",
      },
    ],
    sources: [
      { label: "myID 公式｜How to set up myID", url: "https://www.myid.gov.au/set-up" },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "myID（公式）｜How to set up myID（本人確認レベル）",
        url: "https://www.myid.gov.au/set-up",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["mygov-account-guide", "tfn-guide", "australian-id-points", "proof-of-address"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a102",
    title: "オーストラリアで住所証明を作る方法｜銀行明細・契約書・公的郵便",
    slug: "proof-of-address",
    category: "arrival",
    hub: "arrival",
    priority: "P0",
    searchIntent: "住所証明（Proof of address）の作り方",
    description:
      "賃貸・免許・各種登録で求められる『住所証明（Proof of address）』を、到着直後の何もない状態からどう作るかを解説。使える書類の種類と、最初の1点を作る現実的な順番をまとめます。",
    content: [
      "住所証明（Proof of address）とは、あなたがその住所に住んでいることを示す書類のことです。代表的なものは、銀行の取引明細（住所記載）、賃貸契約書、公共料金の請求書、政府機関（ATO・Medicareなど）からの郵便、携帯電話の契約書などです。オーストラリアでは、運転免許の取得、賃貸契約、一部の本人確認で住所証明を求められます。",
      "到着直後は『まだ何も届いていない』状態なので、最初の1点をどう作るかがポイントです。もっとも作りやすいのは銀行口座の取引明細です。銀行口座を開設して住所を登録すると、アプリやオンラインで住所入りの明細（Statement）を発行でき、これが早い段階で使える住所証明になります。",
      "次に作りやすいのが賃貸・シェアハウスの契約書です。正式な賃貸契約（Lease）やシェアハウスの契約書に自分の名前と住所が記載されていれば、住所証明として使えます。口約束だけのシェアだと書類が出ないことがあるため、住所証明が必要なら契約書を交わせる物件を選ぶと安心です。",
      "公的機関からの郵便も強力な証明になります。TFN申請後の通知、ATOやMedicareからの郵便は、政府機関発行の住所入り書類として広く受け入れられます。これらは登録した住所に郵送されるため、受け取れる安定した住所を先に確保しておくことが大切です。",
      "注意点として、求められる住所証明の『種類』や『点数』は、手続きごとに異なります（賃貸なら100ポイントID、免許なら州ごとの指定書類など）。事前にその手続きで何が使えるかを確認し、複数の候補（銀行明細＋契約書など）を用意しておくと、いざという時に困りません。",
    ],
    keyFacts: [
      { label: "住所証明とは", value: "その住所に住むことを示す書類" },
      { label: "作りやすい順", value: "銀行明細 → 賃貸契約書 → 公的機関の郵便" },
      { label: "使える書類", value: "銀行明細・賃貸契約・公共料金・政府郵便・携帯契約" },
      { label: "前提", value: "郵送物を受け取れる安定した住所を先に確保" },
    ],
    steps: [
      { title: "銀行口座で明細を作る", description: "口座に住所を登録し、住所入りの取引明細を発行できるようにします。" },
      { title: "契約書を確保", description: "賃貸/シェアの契約書に自分の名前と住所が入る形で契約します。" },
      { title: "政府郵便を活用", description: "TFN通知やATO/Medicareの郵便を住所証明として保管します。" },
      { title: "手続きごとに要件確認", description: "免許・賃貸など、必要な書類の種類・点数を事前に確認して揃えます。" },
    ],
    tips: [
      "最初の1点は銀行の住所入り明細が作りやすい。口座開設時に住所を正しく登録しましょう。",
      "デジタル明細（PDF）で受け付ける手続きも増えていますが、原本や郵送版が必要な場合もあります。",
      "住所証明は複数用意しておくと、賃貸・免許などで求められる点数に対応しやすいです。",
    ],
    faqs: [
      {
        question: "到着してすぐに住所証明が必要になりますか？",
        answer:
          "多くの手続き（銀行口座開設・TFN申請）は住所証明なしでも進められますが、正式な賃貸契約や運転免許の取得では求められます。まず銀行口座を作り、住所入り明細という最初の1点を用意しておくと安心です。",
      },
    ],
    sources: [
      { label: "Services Australia｜Proof of identity", url: "https://www.servicesaustralia.gov.au/how-to-prove-your-identity" },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "Services Australia｜本人確認（Proof of identity）",
        url: "https://www.servicesaustralia.gov.au/how-to-prove-your-identity",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["bank-account-guide", "australian-id-points", "address-change-checklist", "mygov-account-guide"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a103",
    title: "引っ越したときの住所変更先一覧｜ATO・銀行・免許・保険",
    slug: "address-change-checklist",
    category: "arrival",
    hub: "arrival",
    priority: "P1",
    searchIntent: "引っ越し時の住所変更先チェックリスト",
    description:
      "ワーホリは引っ越しが多く、住所変更の漏れが郵送物の受け取り失敗につながります。ATO・銀行・運転免許・保険・携帯・雇用主など、変更すべき先を一覧で整理したチェックリストです。",
    content: [
      "オーストラリアのワーホリは、都市移動・ファーム・シェア替えで住所が変わることが多く、住所変更の『漏れ』が地味なトラブルになります。銀行のカード、税務関連の郵便、免許の更新通知などは登録住所に届くため、変更を忘れると重要な書類を受け取れません。引っ越したら、次の一覧に沿ってまとめて更新するのがおすすめです。",
      "まず優先度が高いのが『お金・税金・身分』に関わる先です。ATO（myGov経由で更新可）、銀行口座、Super（年金）の口座、運転免許（州の交通局）、保険（民間の医療・自動車保険）は、金銭や本人確認に直結するため早めに変更します。myGovにログインすれば、ATOなど連携済みサービスの住所をまとめて更新できる場合があります。",
      "次に『生活・仕事』の先です。雇用主（給与明細やグループ証明の送付先）、携帯電話の契約、サブスクや配送サービス、通っている学校などにも住所を反映します。仕事関係の住所は、年度末のIncome Statementや税務書類の受け取りに関わるため見落とさないようにしましょう。",
      "郵送物の取りこぼしを完全には防げない場合、Australia Postの郵便転送サービス（Mail Redirection、有料）を使うと、旧住所宛の郵便を新住所へ一定期間転送できます。短期間に何度も引っ越す予定があるなら、転送を併用すると安心です。",
      "住所変更は『変えた瞬間』にまとめてやるのがコツです。時間が経つと変更先を忘れがちなので、引っ越しのタイミングでこのチェックリストを一気に処理し、変更した先をメモに残しておくと、次の引っ越しでも流用できます。",
    ],
    keyFacts: [
      { label: "優先度・高", value: "ATO(myGov)・銀行・Super・運転免許・保険" },
      { label: "優先度・中", value: "雇用主・携帯・サブスク・配送・学校" },
      { label: "まとめ更新", value: "myGovで連携サービスの住所を一括更新できる場合あり" },
      { label: "取りこぼし対策", value: "Australia Postの郵便転送（有料）を併用" },
    ],
    steps: [
      { title: "お金・身分から更新", description: "ATO(myGov)・銀行・Super・免許・保険の住所を変更します。" },
      { title: "仕事・生活を更新", description: "雇用主・携帯・サブスク・配送・学校の住所を反映します。" },
      { title: "郵便転送を検討", description: "取りこぼしが不安なら、Australia Postの郵便転送を申し込みます。" },
      { title: "変更先を記録", description: "更新した先をメモに残し、次の引っ越しで再利用します。" },
    ],
    tips: [
      "myGovにログインすると、連携済みのATOなどの住所をまとめて更新できることがあります。",
      "雇用主への住所変更は、年度末のIncome Statement受け取りに関わるので忘れずに。",
      "短期で何度も引っ越すなら、郵便転送で旧住所宛の郵便を追いかけると安心です。",
    ],
    faqs: [
      {
        question: "運転免許の住所変更はしなければいけませんか？",
        answer:
          "州によって、住所変更を一定期間内に届け出る義務があります。免許を身分証として使う場面も多いため、住所が変わったら州の交通局（Service NSW／VicRoadsなど）で早めに更新しましょう。",
      },
    ],
    sources: [
      { label: "Australia Post｜Mail Redirection", url: "https://auspost.com.au/receiving/manage-your-mail/redirect-hold-mail" },
      { label: "ATO｜Update your details", url: "https://www.ato.gov.au/individuals-and-families/your-tax-return/update-your-details" },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "Australia Post｜郵便転送（Mail Redirection）",
        url: "https://auspost.com.au/receiving/manage-your-mail/redirect-hold-mail",
        accessedAt: "2026-07-18",
      },
      {
        label: "ATO｜Update your details（住所などの更新）",
        url: "https://www.ato.gov.au/individuals-and-families/your-tax-return/update-your-details",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["proof-of-address", "mail-forwarding-and-address", "mygov-account-guide", "bank-account-guide"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a104",
    title: "100ポイントIDチェックとは？本人確認書類の揃え方",
    slug: "australian-id-points",
    category: "arrival",
    hub: "arrival",
    priority: "P1",
    searchIntent: "100ポイントIDチェックの仕組みと書類",
    description:
      "オーストラリアの本人確認で使われる『100ポイントIDチェック』の仕組みを解説。パスポートなどの書類にどれだけの点数が付くか、賃貸・銀行・通信契約で書類を揃える考え方をまとめます。",
    content: [
      "100ポイントIDチェックとは、複数の本人確認書類にそれぞれ点数を割り当て、合計100点以上になるように提示する本人確認の仕組みです。銀行口座の開設、賃貸の申し込み、一部の通信契約や仕事の登録などで使われます。1枚で完結するのではなく、『主要書類＋補助書類』を組み合わせるのが基本です。",
      "点数は書類の種類によって異なります。パスポートや出生証明などの『主要書類（Primary）』は高い点数が付き、運転免許や政府発行のカードは中程度、銀行カードや公共料金の請求書などの『補助書類（Secondary）』は低めの点数になります。一般に、パスポートのような写真付きの主要書類が1点あると、残りを補助書類で埋めて100点に届かせやすくなります。",
      "ワーホリが到着直後に持っている書類は、パスポートが中心です。ここに、銀行口座を開設して得られるカードや住所入り明細、賃貸契約書、携帯契約などを加えて点数を積み上げていきます。時間が経つほど使える書類が増えるので、到着直後に100点に届かなくても、生活の立ち上げとともに揃っていきます。",
      "注意したいのは、100ポイントの配点や『どの書類が主要/補助か』は、手続きを行う相手（銀行・不動産会社・州政府など）によって基準が微妙に異なることです。申し込み先が指定するリストを必ず確認し、そこで認められる書類を組み合わせて用意しましょう。",
      "なお、近年はmyID（Digital ID）による本人確認も広がっており、100ポイントの紙書類の代わりにデジタル身分証で済む場面も増えています。とはいえ賃貸などでは依然として書類の提示を求められることが多いため、主要書類（パスポート）＋補助書類を用意しておく基本は変わりません。",
    ],
    keyFacts: [
      { label: "仕組み", value: "書類ごとの点数を合計100点以上にする本人確認" },
      { label: "主要書類", value: "パスポート・出生証明など（高得点）" },
      { label: "補助書類", value: "銀行カード・公共料金・携帯契約など（低得点）" },
      { label: "用途", value: "銀行開設・賃貸・通信契約・仕事の登録など" },
    ],
    steps: [
      { title: "申込先のリストを確認", description: "銀行/不動産会社などが指定する『使える書類と点数』を確認します。" },
      { title: "主要書類を用意", description: "パスポートなど高得点の主要書類をまず1点確保します。" },
      { title: "補助書類を積み上げ", description: "銀行カード・住所入り明細・契約書などで100点に届かせます。" },
      { title: "デジタルID併用も検討", description: "myIDで代替できる手続きなら、書類提示の手間を減らせます。" },
    ],
    tips: [
      "写真付きの主要書類（パスポート）が1点あると、残りを補助書類で埋めやすくなります。",
      "配点は相手によって異なります。必ず申込先の指定リストで確認しましょう。",
      "銀行口座を早く作ると、カードや住所入り明細が補助書類として使えます。",
    ],
    faqs: [
      {
        question: "パスポートだけで100ポイントに届きますか？",
        answer:
          "パスポートは高得点の主要書類ですが、多くの場合それだけでは100点に届かず、銀行カードや住所入り明細などの補助書類を組み合わせる必要があります。配点は手続き先によって異なるため、指定リストで確認してください。",
      },
    ],
    sources: [
      { label: "AUSTRAC｜100 point identification", url: "https://www.austrac.gov.au/business/how-comply-guidance-and-resources/guidance-resources/completing-100-point-identification" },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "AUSTRAC｜100 point identification（本人確認の配点）",
        url: "https://www.austrac.gov.au/business/how-comply-guidance-and-resources/guidance-resources/completing-100-point-identification",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["proof-of-address", "digital-id-guide", "bank-account-guide", "housing-guide"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a105",
    title: "ワーホリ生活で入れておきたいアプリ一覧",
    slug: "essential-australia-apps",
    category: "arrival",
    hub: "arrival",
    priority: "P1",
    searchIntent: "ワーホリ生活で必要なアプリのリスト",
    description:
      "到着後すぐに役立つアプリを、交通・銀行・決済・買い物・天気・緊急・仕事・住居・翻訳などのカテゴリ別に整理。まず入れるべき定番アプリと、緊急時に命を守るアプリをまとめます。",
    content: [
      "スマホのアプリを整えておくと、到着後の生活が一気に楽になります。ここではカテゴリ別に『まず入れておきたい定番アプリ』を紹介します。多くは無料で、SIMが有効になればすぐ使い始められます。",
      "移動・決済まわりでは、地図（Google Maps）、配車（Uber／DiDi）、交通系（Opal／myki／go cardなど滞在都市のもの）、そしてApple Pay／Google Payのタッチ決済が基本です。銀行は口座を開いた銀行の公式アプリ（CommBank／NABなど）を入れ、残高・送金・カードのロックを管理します。両替・送金にはWiseのアプリも便利です。",
      "買い物・生活では、大手スーパー（Coles／Woolworths）のアプリで特売やポイントを確認でき、食費の節約に役立ちます。ガソリン価格の比較アプリ、フードデリバリー、中古品売買（Facebook／Gumtree）も生活の幅を広げます。天気は気象局（BOM）の公式アプリで、暑さ・雷雨・山火事などの警報を確認できます。",
      "安全・緊急では、必ず『Emergency+』アプリを入れておきましょう。これはオーストラリア政府系が提供する公式アプリで、緊急通報時（000）にGPSで自分の正確な位置を伝えられます。地方やファームで自分の居場所を説明しにくい場面で、命を守る助けになります。あわせて翻訳アプリ（Google翻訳など）も入れておくと、病院や手続きで安心です。",
      "行政・仕事では、myGov（税・行政の入口）とmyID（デジタル身分証）を設定し、仕事探しにはSEEK／Indeedなどの求人アプリ、住まい探しにはFlatmatesなどを使います。最初からすべて入れる必要はなく、生活の立ち上げに合わせて必要なものから追加していけば十分です。",
    ],
    keyFacts: [
      { label: "移動・決済", value: "Google Maps・Uber/DiDi・交通系IC・Apple/Google Pay・銀行アプリ・Wise" },
      { label: "買い物・生活", value: "Coles/Woolworths・ガソリン比較・Facebook/Gumtree・BOM天気" },
      { label: "安全・緊急", value: "Emergency+（000通報時に位置を送信）・翻訳" },
      { label: "行政・仕事", value: "myGov・myID・SEEK/Indeed・Flatmates" },
    ],
    steps: [
      { title: "移動・決済を整える", description: "地図・配車・交通系・タッチ決済・銀行アプリを入れます。" },
      { title: "生活アプリを追加", description: "スーパー・天気(BOM)・中古売買などを必要に応じて入れます。" },
      { title: "緊急アプリを必須で", description: "Emergency+を入れ、位置情報の権限を許可しておきます。" },
      { title: "行政・仕事を設定", description: "myGov/myIDを設定し、求人・住まい探しアプリを準備します。" },
    ],
    tips: [
      "Emergency+は必ず。GPSで正確な位置を伝えられ、地方やファームで役立ちます。",
      "銀行アプリはカードの即時ロック機能が便利。紛失・盗難時にすぐ止められます。",
      "スーパーのアプリは特売・ポイントで食費節約に直結します。",
    ],
    faqs: [
      {
        question: "最初にどのアプリから入れるべきですか？",
        answer:
          "SIM有効化後、まず地図・配車・銀行アプリ・タッチ決済、そして緊急用のEmergency+を優先しましょう。生活が立ち上がってから、スーパー・求人・住まい探しのアプリを順に追加すれば十分です。",
      },
    ],
    sources: [
      { label: "Triple Zero｜Emergency+ app", url: "https://www.triplezero.gov.au/triple-zero/emergency-plus-app" },
      { label: "Bureau of Meteorology（BOM）", url: "https://www.bom.gov.au/" },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "Triple Zero（000）｜Emergency+ app（公式）",
        url: "https://www.triplezero.gov.au/triple-zero/emergency-plus-app",
        accessedAt: "2026-07-18",
      },
      {
        label: "Bureau of Meteorology｜気象・警報",
        url: "https://www.bom.gov.au/",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["arrival-checklist", "mygov-account-guide", "transport-payment-guide", "first-week-shopping"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a106",
    title: "在留届・たびレジ・日本領事館の使い方",
    slug: "consular-registration",
    category: "arrival",
    hub: "arrival",
    priority: "P1",
    searchIntent: "在留届・たびレジの登録方法と領事館",
    description:
      "3か月以上オーストラリアに滞在するワーホリは、旅券法で『在留届』の提出が義務づけられています。在留届（ORRnet）とたびレジの違い、登録方法、緊急時の在外公館の使い方を解説します。",
    content: [
      "結論として、3か月以上オーストラリアに滞在する場合は、旅券法第16条により『在留届』の提出が法律上の義務です。ワーホリは通常1年（延長で最大3年）の滞在になるため、在留届の対象になります。提出は無料で、外務省のオンラインシステム（ORRnet／オンライン在留届）から数分で完了します。日本出発の3か月前から提出できるので、渡航先が決まったら早めに出しておくと安心です。",
      "在留届を出しておくと、大規模災害・事件・感染症の流行などの緊急時に、現地の日本大使館・総領事館から安否確認や緊急連絡（メール等）を受け取れます。万が一のときに『どこに誰が滞在しているか』を在外公館が把握できるため、支援を受けやすくなります。",
      "一方『たびレジ』は、3か月未満の短期渡航者向けの登録サービスです。旅行や下見で短期間だけ滞在する場合はたびレジ、3か月以上の長期滞在は在留届、と使い分けます。どちらも外務省の海外安全情報配信サービスで、登録すると渡航先の安全情報や緊急一斉連絡メールが届きます。",
      "登録方法はどちらもオンラインで完結します。在留届はezairyu.mofa.go.jpのORRnetから、氏名・旅券番号・滞在先の住所・連絡先などを入力します。滞在先の住所が変わったら、変更を届け出ておくと緊急連絡が正しく届きます。帰国したら『帰国・転出届』を出して登録を終えます。",
      "現地では、住んでいる地域を管轄する日本大使館・総領事館が窓口になります（シドニー・メルボルン・ブリスベン・パースなどに総領事館があります）。パスポートの紛失・盗難時の渡航書類の発行、事件・事故に巻き込まれた際の支援など、いざという時の頼れる存在です。連絡先を控えておき、緊急時にすぐアクセスできるようにしておきましょう。",
    ],
    keyFacts: [
      { label: "在留届", value: "3か月以上の滞在で義務（旅券法第16条）。ORRnetで提出" },
      { label: "たびレジ", value: "3か月未満の短期渡航者向け登録" },
      { label: "提出時期", value: "出発3か月前から提出可。無料" },
      { label: "現地窓口", value: "管轄の日本大使館・総領事館" },
    ],
    steps: [
      { title: "滞在期間で判断", description: "3か月以上なら在留届、3か月未満ならたびレジを選びます。" },
      { title: "オンラインで登録", description: "ezairyu.mofa.go.jpのORRnetで氏名・旅券番号・滞在先を入力します。" },
      { title: "住所変更を反映", description: "引っ越したら滞在先住所の変更を届け出ます。" },
      { title: "帰国時に届け出", description: "帰国したら帰国・転出届を出して登録を終了します。" },
    ],
    tips: [
      "在留届は渡航先が決まったら早めに提出。出発3か月前から出せます。",
      "管轄の総領事館の連絡先を控えておくと、パスポート紛失など緊急時に役立ちます。",
      "たびレジは短期の下見旅行に。長期滞在は在留届が正しい選択です。",
    ],
    faqs: [
      {
        question: "在留届を出さないとどうなりますか？",
        answer:
          "在留届は旅券法で定められた義務ですが、未提出でも罰則が科されるわけではありません。ただし、災害や事件の際に在外公館があなたの所在を把握できず、安否確認や緊急支援が届きにくくなります。安全のためにも必ず提出しておきましょう。",
      },
    ],
    sources: [
      { label: "外務省｜オンライン在留届（ORRnet）・たびレジ", url: "https://www.ezairyu.mofa.go.jp/" },
      { label: "外務省 海外安全ホームページ", url: "https://www.anzen.mofa.go.jp/" },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "外務省｜在留届電子届出システム（ORRnet）・たびレジ",
        url: "https://www.ezairyu.mofa.go.jp/",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["arrival-checklist", "first-30-days-roadmap", "insurance-guide", "essential-australia-apps"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a107",
    title: "到着初日に買うもの｜寝具・日用品・食品の買い物リスト",
    slug: "first-week-shopping",
    category: "arrival",
    hub: "arrival",
    priority: "P2",
    searchIntent: "到着初日〜初週の買い物リスト",
    description:
      "到着初日から必要になる寝具・日用品・食品を、どこで買うか（Kmart・Big W・Coles・ALDI・中古）とあわせてリスト化。無駄なく最低限を揃え、シェアハウス移動後に追加する考え方を解説します。",
    content: [
      "到着初日に必要なのは、実は『そんなに多くありません』。まずは今夜〜数日を快適に過ごせる最低限だけを買い、シェアハウスなど中期の拠点が決まってから、生活用品を本格的に揃えるのが無駄のない進め方です。短期滞在先（ホステル等）にはタオルや寝具が備わっていることも多いので、買う前に何が付いているか確認しましょう。",
      "初日〜数日で必要になりやすいのは、飲み水・軽食などの食品、シャンプーや歯ブラシなどの洗面用品、充電器の変換プラグ（オーストラリアはOタイプ・230V）、常備薬、そしてSIM／モバイル通信です。これらはスーパーや薬局（Chemist Warehouseなど）、量販店で手早く揃います。",
      "買い物の場所は用途で使い分けます。食品・日用品はスーパー（Coles／Woolworths／ALDI）、寝具・キッチン用品・衣類などの安い生活雑貨はKmartやBig W、薬・日用品は薬局が定番です。ALDIは価格が安く、初期の食費節約に向いています。",
      "中期の住居が決まったら、寝具（布団・枕・シーツ）、キッチン用品、ハンガー、洗濯用品などを揃えます。ここで費用を抑えたいなら、Op Shop（チャリティショップ）やFacebook Marketplace／Gumtreeの中古が有効です。特に帰国するワーホリが家具・生活用品を安く手放していることが多く、掘り出し物が見つかります。",
      "コツは『一度に全部買わない』ことです。生活が始まると本当に必要な物が見えてくるので、初日は最低限、その後は使いながら買い足す方が、無駄な出費と持ち物の増えすぎを防げます。帰国時に処分する物を減らす意味でも、買いすぎない意識が役立ちます。",
    ],
    keyFacts: [
      { label: "初日は最低限", value: "食品・洗面用品・変換プラグ・常備薬・SIM" },
      { label: "変換プラグ", value: "オーストラリアはOタイプ・230V。日本の機器は要確認" },
      { label: "買う場所", value: "スーパー(Coles/Woolworths/ALDI)・Kmart/Big W・薬局" },
      { label: "節約", value: "Op Shop・Facebook Marketplaceの中古を活用" },
    ],
    steps: [
      { title: "宿の備品を確認", description: "ホステル等に寝具・タオルがあるか確認し、重複購入を避けます。" },
      { title: "初日の必需品を買う", description: "食品・洗面用品・変換プラグ・常備薬をスーパー/薬局で揃えます。" },
      { title: "拠点決定後に生活用品", description: "寝具・キッチン・洗濯用品をKmart等で揃えます。" },
      { title: "中古で節約", description: "Op ShopやMarketplaceで家具・生活用品を安く入手します。" },
    ],
    tips: [
      "一度に全部買わず、生活しながら本当に必要な物を買い足すと無駄が出ません。",
      "Kmart/Big Wは安い生活雑貨の定番。寝具やキッチン用品を安価に揃えられます。",
      "帰国者が手放す中古家具はMarketplaceで狙い目。初期費用を大きく抑えられます。",
    ],
    faqs: [
      {
        question: "布団や寝具は初日に買うべきですか？",
        answer:
          "短期滞在先に寝具が備わっていることが多いため、初日に急いで買う必要は少ないです。中期のシェアハウスが決まってから、新品（Kmart等）か中古（Op Shop／Marketplace）で揃えるのが無駄がありません。",
      },
    ],
    relatedSlugs: ["arrival-checklist", "essential-australia-apps", "food-guide", "power-plug-voltage"],
    updatedAt: "2026-07-18",
    published: true,
  },
];
