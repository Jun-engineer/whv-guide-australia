import type { Article } from "./types";

export const farmArticles: Article[] = [
  {
    id: "a10",
    title: "ファームジョブの探し方とセカンドビザ（88日）",
    slug: "farm-second-visa",
    category: "farm",
    description: "セカンドビザ対象のSpecified Workを探す方法と、88日要件・証拠書類・詐欺対策を解説します。",
    content: [
      "セカンドビザ（2回目のワーホリ）には、指定地域での「Specified Work（特定の仕事）」を88日（カレンダー日）従事することが必要です。代表例が農業のピッキング・パッキングなどのファームジョブです。",
      "対象になるかは「仕事の種類」と「地域（郵便番号）」の両方で決まります。働く前に必ず対象要件を確認し、Payslip（給与明細）など証拠を残すことが申請成功の鍵です。",
    ],
    keyFacts: [
      { label: "必要日数", value: "88日（フルタイム相当の規定労働）" },
      { label: "対象", value: "指定地域でのSpecified Work（農業・建設・漁業など）" },
      { label: "証拠書類", value: "Payslip、雇用主情報、銀行入金記録" },
      { label: "サードビザ", value: "セカンド中にさらに6か月従事で申請可能" },
    ],
    steps: [
      { title: "対象地域・職種を確認", description: "郵便番号と仕事内容が要件を満たすか公式情報で確認します。" },
      { title: "求人に応募", description: "農場直接、ホステル、求人サイト、エージェント経由などで探します。" },
      { title: "Payslipと記録を保管", description: "毎回の給与明細・入金記録を必ず保存します。" },
      { title: "88日達成後に申請", description: "証拠を揃えてセカンドビザをオンライン申請します。" },
    ],
    tips: [
      "「日数」は実働日ベースでカウント。天候で働けない日が出るため、3〜4か月の余裕を見て計画を。",
      "時給制の合法的な農場を選ぶこと。歩合制でも最低賃金が保証される必要があります。",
    ],
    warnings: [
      "無給労働（ノーペイトライアル）や、宿代と引き換えの不当な労働は違法かつビザ要件を満たしません。怪しい誘いは断りましょう。",
    ],
    faqs: [
      {
        question: "ファーム以外でもセカンドビザは取れますか？",
        answer:
          "取れます。建設業、鉱業、漁業・真珠養殖、指定地域での山火事復興作業なども対象です。重要なのは『指定地域』で『指定された種類の仕事』をすることです。",
      },
    ],
    sources: [
      {
        label: "Home Affairs - Specified work",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work",
      },
    ],
    relatedSlugs: ["farm-finding", "harvest-trail-guide", "specified-work-postcodes", "farm-payslip-evidence", "farm-employer-verification", "farm-season-calendar", "whv-complete-guide"],
    updatedAt: "2026-06-10",
    published: true,
  },

  {
    id: "a38",
    title: "ファームの探し方と悪質農園の見分け方",
    slug: "farm-finding",
    category: "farm",
    description:
      "セカンドビザの定番ファームジョブ。仕事の探し方、時給形態（時給制/歩合制）の違い、悪質な農園・ブローカーを避けるコツを解説します。",
    content: [
      "セカンドビザを目指す多くのワーホリがファーム（農場）で働きます。果物・野菜の収穫やパッキングが中心で、仕事は地域と季節（収穫期）に大きく左右されます。",
      "探し方はHarvest Trail（公式の収穫求人情報）、求人サイト、Facebookグループ、現地のバックパッカー宿の紹介などがあります。残念ながら賃金未払いや日数の偽証を持ちかける悪質な農園・ブローカーも存在するため、見分ける目が重要です。",
      "ファーム探しで失敗しないコツは、収穫期（シーズン）と地域を先に調べてから動くことです。作物ごとに収穫のピークが違い、シーズンを外すと仕事が全くないこともあります。逆にピークに合わせて動けば、複数の農場が人手を求めているため仕事を見つけやすく、88日を効率よく貯められます。渡航前や移動前に、狙う作物の産地と時期をリサーチしておきましょう。",
      "賃金形態は「時給制（hourly）」と「歩合制（piece rate）」の2つが主流です。時給制は収穫量に関わらず安定した収入が得られる一方、歩合制は収穫した量に応じて支払われるため、慣れた人や作物の状態が良い畑では高収入も狙えますが、実りが少ない畑だと最低賃金を下回ることもあります。どちらの形態か、また最低賃金の保証があるかを働き始める前に必ず確認しましょう。",
      "悪質な農園・ブローカーを避けるには、いくつかの危険信号を覚えておくと安心です。『Payslipを発行しない』『最低賃金を大きく下回る』『高額な宿泊費・送迎費を給料から天引きする』『88日の日数を偽証すると持ちかける』といった相手とは関わらないのが賢明です。仕事の条件（賃金・労働時間・宿泊費の有無）は口約束ではなく書面やメッセージで残し、給与は必ず銀行振込で受け取って記録を残しましょう。",
    ],
    keyFacts: [
      { label: "主な仕事", value: "収穫(picking)・選別/箱詰め(packing)" },
      { label: "賃金形態", value: "時給制(hourly)と歩合制(piece rate)" },
      { label: "探し方", value: "Harvest Trail / 求人サイト / FBグループ / 宿の紹介" },
      { label: "セカンドビザ", value: "対象地域・業種で88日が必要(要公式確認)" },
    ],
    steps: [
      { title: "収穫期と地域を調べる", description: "作物ごとに収穫期が違います。時期に合う地域を狙います。" },
      { title: "求人を比較", description: "時給/歩合、住居の有無と費用、送迎の有無、Payslip発行を確認します。" },
      { title: "条件を書面で確認", description: "賃金・労働時間・Payslip発行を必ず確認。曖昧な口約束は避けます。" },
      { title: "働いて記録を残す", description: "Payslip・タイムシート・銀行入金を保管し、セカンドビザの証拠にします。" },
    ],
    tips: [
      "Payslipを出さない/最低賃金を大きく下回る/日数偽証を持ちかける農園は避けましょう。",
      "歩合制(piece rate)は早い人ほど稼げますが、収穫量が少ない畑だと低収入になることも。",
      "繁忙期は仕事が豊富。閑散期は競争が激しいので、時期を合わせて移動するのが賢明です。",
    ],
    warnings: ["賃金未払い・日数偽証を持ちかける雇用主は違法です。ビザ却下リスクもあるため絶対に関わらないでください。"],
    relatedSlugs: ["farm-second-visa", "harvest-trail-guide", "farm-season-calendar", "piecework-vs-hourly", "farm-employer-verification", "second-visa-guide"],
    updatedAt: "2026-06-20",
    published: true,
  },

  {
    id: "a170",
    title: "オーストラリア農作物シーズンカレンダー｜州・地域・作物別の求人時期",
    slug: "farm-season-calendar",
    category: "farm",
    hub: "farm",
    priority: "P0",
    searchIntent: "州・地域・作物別のファーム求人時期",
    description:
      "ファーム求人は収穫期（シーズン）に集中します。州・地域・作物ごとの収穫時期の目安と、シーズンに合わせて移動して88日を効率よく貯める計画の立て方を、公式の求人情報源とあわせて解説します。",
    content: [
      "ファームの仕事を効率よく見つける最大のコツは、『作物の収穫期（シーズン）に合わせて地域を選ぶ』ことです。結論から言うと、収穫のピークには複数の農場が一斉に人手を求めるため仕事が見つけやすく、逆にシーズンを外すと同じ地域でも仕事がまったくないことがあります。狙う作物と産地の時期を先に調べてから動くのが鉄則です。",
      "オーストラリアは南半球で広大なため、同じ作物でも州によって収穫時期がずれます。大まかには、夏（12〜2月）は南部（ビクトリア・タスマニア・南オーストラリア）のベリーや果樹、秋（3〜5月）はぶどうやりんご、冬（6〜8月）はクイーンズランドなど北部の柑橘・野菜、春（9〜11月）はクイーンズランド南部やニューサウスウェールズのベリー・野菜が中心になります。北部（熱帯）は乾季の冬が農作業の最盛期です。",
      "地域と作物の代表例を挙げると、クイーンズランド州のバンダバーグ（野菜・トマト・ズッキーニ、通年〜冬）、ガトン／ロッキヤーバレー（野菜、通年）、スタンソープ（りんご・ぶどう・ベリー、夏〜秋）、ボーエン（トマト・野菜、冬）、マリーバ・アサートン高原（バナナ・アボカド・コーヒー、通年〜冬）。ビクトリア州のミルデューラ（ぶどう・柑橘、冬〜春の剪定と夏の収穫）、シェパートン（りんご・梨・桃、夏〜秋）。ニューサウスウェールズ州のグリフィス（ぶどう・柑橘）。タスマニア（チェリー・ベリー・りんご、夏）などが定番です。",
      "計画の立て方は、まず『いつ・どの地域で・何を狙うか』を1つ決め、その1〜2週間前に現地入りして求人に応募します。88日（セカンドビザ要件）を切れ目なく貯めたい場合は、1つ目のシーズンが終わる頃に次の作物・地域へ移動できるよう、2〜3か所を数珠つなぎにルート設計しておくと安心です。天候不順で収穫が遅れることもあるため、3〜4か月の余裕をみて動きましょう。",
      "最新の求人時期は、政府系のWorkforce Australia（Harvest／収穫求人情報）で地域・作物ごとに確認できます。このカレンダーはあくまで目安で、その年の天候・作柄によって前後します。移動前には必ず現地の求人状況（求人サイト・Facebookグループ・宿）で『今まさに人を募集しているか』を確認してから移動してください。",
    ],
    keyFacts: [
      { label: "夏(12-2月)", value: "南部のベリー・果樹（VIC/TAS/SA）、北部は雨季で閑散" },
      { label: "秋(3-5月)", value: "ぶどう・りんご（VIC/NSW/SA/TAS）" },
      { label: "冬(6-8月)", value: "QLD北部の柑橘・野菜、剪定作業（ミルデューラ等）" },
      { label: "春(9-11月)", value: "QLD南部・NSWのベリー・野菜" },
      { label: "確認先", value: "Workforce Australia（Harvest）で地域・作物別に検索" },
    ],
    steps: [
      { title: "狙う作物と地域を1つ決める", description: "収穫期・気候・移動距離・宿の有無で候補を絞ります。" },
      { title: "ピークの1-2週間前に現地入り", description: "募集が始まる直前に到着し、応募を先回りします。" },
      { title: "次のシーズンへ数珠つなぎ", description: "88日を切らさないよう2-3か所のルートを設計します。" },
      { title: "移動前に最新求人を確認", description: "求人サイト・FBグループ・宿で今の募集状況を確認します。" },
    ],
    tips: [
      "同じ作物でも州で収穫期がずれます。南から北（夏→冬）へ追いかけると年間を通じて仕事が続きます。",
      "熱帯の北部（ケアンズ周辺・NT）は乾季の冬（5〜10月）が農作業の最盛期。雨季の夏は仕事が減ります。",
      "シーズン情報は年により前後します。カレンダーは目安として、必ず現地の生の求人で裏取りを。",
    ],
    warnings: ["『今なら仕事がある』という宿・ブローカーの勧誘を鵜呑みにせず、実際の募集・賃金条件を自分で確認してから移動しましょう。"],
    faqs: [
      {
        question: "一番仕事が見つけやすい地域はどこですか？",
        answer:
          "通年で野菜の需要があるクイーンズランド州のバンダバーグやガトン（ロッキヤーバレー）は、初めてのファームの定番です。ただし人気ゆえ競争も激しいので、収穫ピークの時期に合わせて動くのが確実です。",
      },
      {
        question: "シーズンオフに行っても仕事はありますか？",
        answer:
          "作物によってはほとんどありません。剪定（pruning）やパッキング、通年栽培の野菜・温室など一部は続きますが、収穫の繁忙期に比べて求人は激減します。時期を合わせるのが最優先です。",
      },
    ],
    sources: [
      { label: "Workforce Australia - Harvest（収穫求人）", url: "https://www.workforceaustralia.gov.au/individuals/harvest" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Workforce Australia｜Harvest（州・地域・作物別の収穫求人情報）",
        url: "https://www.workforceaustralia.gov.au/individuals/harvest",
        accessedAt: "2026-07-19",
      },
      {
        label: "Home Affairs｜Specified work（417 セカンドビザ対象労働）",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: ["harvest-trail-guide", "farm-finding", "specified-work-postcodes", "farm-second-visa", "region-bundaberg-farm"],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a171",
    title: "Harvest Trailでファーム求人を探す方法｜政府系の収穫求人情報",
    slug: "harvest-trail-guide",
    category: "farm",
    hub: "farm",
    priority: "P0",
    searchIntent: "Harvest Trail/政府系ファーム求人の使い方",
    description:
      "政府が運営するHarvest Trail（収穫求人情報）とWorkforce Australiaを使ったファーム求人の探し方を解説。無料の相談窓口Harvest Trail Information Serviceの使い方、応募の流れ、詐欺を避けるコツをまとめます。",
    content: [
      "『安全なファーム求人をどこで探せばいいか』という問いへの最も確実な答えの一つが、政府が運営するHarvest Trail（ハーベストトレイル）です。これはオーストラリア政府のWorkforce Australia（旧jobactive）が提供する収穫求人の情報サービスで、全国の農場の季節労働（picking・packing など）を地域・作物別に無料で検索できます。民間の怪しいブローカーを介さずに探せるのが最大の利点です。",
      "使い方はシンプルです。Workforce Australiaの求人サイト（workforceaustralia.gov.au）で『harvest』や作物名・地域名で検索すると、農場や正規の労働者派遣（labour hire）の求人が表示されます。掲載されている求人には応募方法（電話・メール・オンライン応募）が記載されているので、レジュメを添えて直接連絡します。",
      "電話やオンラインが不安な人向けに、Harvest Trail Information Service（収穫求人の無料相談窓口）が用意されています。フリーダイヤルに電話すると、どの地域で今どんな収穫の仕事があるか、どう応募すればよいかを案内してもらえます。英語での問い合わせが基本ですが、公式ルートなので賃金や条件の面でも安心度が高いです。",
      "応募の流れは、①希望の作物・地域・時期を決める → ②Workforce Australiaで求人検索 → ③レジュメ（連絡先・在豪期間・経験・車の有無を明記）を用意 → ④求人ごとの方法で応募 → ⑤条件（時給か歩合か・Payslip発行・宿や送迎の有無）を確認してから就労、という順です。採用が決まったらTFNを提出し、給与は必ず銀行振込で受け取って記録を残します。",
      "Harvest Trailはあくまで求人情報の入口で、掲載元がすべて優良とは限りません。応募後も『最低賃金を大きく下回る』『Payslipを出さない』『高額な宿代・送迎費を天引きする』といった条件には応じないでください。公式ルートで見つけた求人でも、賃金・労働条件は自分の目で確認するのが基本です。より広く探す場合は、求人サイト（SEEK・Indeed）やFacebookの地域求人グループ、バックパッカー宿の紹介と併用しましょう。",
    ],
    keyFacts: [
      { label: "運営", value: "オーストラリア政府 Workforce Australia（無料）" },
      { label: "探せる仕事", value: "収穫(picking)・選別/箱詰め(packing)などの季節労働" },
      { label: "相談窓口", value: "Harvest Trail Information Service（無料電話相談）" },
      { label: "検索先", value: "workforceaustralia.gov.au で作物・地域名で検索" },
      { label: "併用先", value: "SEEK / Indeed / Facebook地域求人グループ / 宿の紹介" },
    ],
    steps: [
      { title: "作物・地域・時期を決める", description: "シーズンカレンダーで狙いを定めます。" },
      { title: "Workforce Australiaで検索", description: "作物名・地域名・『harvest』で求人を探します。" },
      { title: "レジュメを用意して応募", description: "在豪期間・車の有無・経験を明記し、求人ごとの方法で連絡します。" },
      { title: "条件を確認して就労", description: "時給/歩合・Payslip発行・宿/送迎費を確認し、TFNを提出します。" },
    ],
    tips: [
      "レジュメには『車を持っているか』『いつから何か月働けるか』を必ず書きましょう。農場が最も重視する情報です。",
      "電話応募が多いのがファーム。短い英語の自己紹介と質問（時給/歩合、宿の有無）を用意しておくとスムーズです。",
    ],
    warnings: ["公式ルートの求人でも、最低賃金割れ・Payslip未発行・高額天引きには応じないでください。条件は書面やメッセージで残しましょう。"],
    faqs: [
      {
        question: "Harvest Trailは無料ですか？",
        answer:
          "はい。政府サービスなので求職者は無料で利用できます。仕事の紹介に手数料を請求してくる相手は正規のHarvest Trailではないので注意してください。",
      },
      {
        question: "英語が苦手でも使えますか？",
        answer:
          "求人検索は誰でもできます。電話相談は英語が基本ですが、応募自体はメールやオンラインでも可能です。短い定型フレーズを準備すれば十分対応できます。",
      },
    ],
    sources: [
      { label: "Workforce Australia - Harvest", url: "https://www.workforceaustralia.gov.au/individuals/harvest" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Workforce Australia｜Harvest（政府運営の収穫求人情報・相談窓口）",
        url: "https://www.workforceaustralia.gov.au/individuals/harvest",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: ["farm-finding", "farm-season-calendar", "piecework-vs-hourly", "farm-employer-verification", "farm-second-visa"],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a172",
    title: "歩合制と時給制の違い｜Pieceworkの最低賃金保証と確認事項",
    slug: "piecework-vs-hourly",
    category: "farm",
    hub: "farm",
    priority: "P0",
    searchIntent: "ファームの歩合制と時給制の違い・最低保証",
    description:
      "ファームの賃金は時給制（hourly）と歩合制（piece rate）の2つ。それぞれの仕組み、2022年以降の歩合制の最低賃金保証（floor）、Horticulture Awardの位置づけ、契約前に確認すべきことを公式情報で解説します。",
    content: [
      "ファームの賃金形態は大きく『時給制（hourly）』と『歩合制（piece rate／ピースレート）』の2つです。結論として、収穫量に自信がない・作柄が読めないなら時給制のほうが安全で、収穫が早くコンディションの良い畑なら歩合制で高収入も狙えます。どちらでも、園芸労働をカバーするHorticulture Award（園芸賞レート／MA000028）のもとでは最低限の賃金が守られる仕組みがあります。",
      "時給制は、収穫量に関係なく働いた時間に応じて支払われます。収入が安定し、初心者や作柄の悪い畑でも最低賃金が保証されるのが利点です。歩合制は、摘んだ量（バケツ・箱・株の数など）に応じて支払われる方式で、速い人ほど稼げる一方、実りが少ない畑や慣れないうちは収入が下がりやすいというリスクがあります。",
      "重要なのは、2022年4月28日以降、Horticulture Award が適用される歩合制の労働者には『最低賃金の保証（floor）』が導入されたことです。これにより、歩合で計算した金額が該当する時給（カジュアルなら割増含む）を下回る場合でも、最低限その時給額は支払われなければなりません。つまり『歩合だから最低賃金を下回っても仕方ない』は原則として認められません。Award の対象外（award-free）で働く場合でも、全国最低賃金（National Minimum Wage）は守られる必要があります。",
      "契約前に必ず確認すべきことは、①時給制か歩合制か、②歩合制なら単価（1バケツ／1箱いくらか）と最低賃金保証の有無、③Payslip（給与明細）を発行するか、④宿代・送迎費・道具代の天引きはあるか、⑤給与は銀行振込か、の5点です。これらを口約束ではなくメッセージや書面で残し、実際のPayslipで単価・時間・控除が正しいかを毎回チェックしましょう。",
      "なお、Horticulture Award は果樹・野菜・花きなどの園芸を対象としますが、ワイン用ぶどう（Wine Award）、林業（silviculture）、サトウキビ（Sugar Award）などは別の賞レートが適用されます。自分の作業がどの賞レートに当たるかで最低賃金が変わるため、賃金に疑問があるときはFair Work Ombudsman（公正労働オンブズマン）に確認するのが確実です。",
    ],
    keyFacts: [
      { label: "時給制(hourly)", value: "働いた時間で支払い。収入が安定・初心者向き" },
      { label: "歩合制(piece rate)", value: "収穫量で支払い。速い人は高収入だがリスクも" },
      { label: "最低保証", value: "2022/4/28以降、園芸Award対象の歩合制に最低賃金floor" },
      { label: "Award対象外", value: "全国最低賃金(National Minimum Wage)が下限" },
      { label: "確認先", value: "Fair Work Ombudsman（賃金・賞レート）" },
    ],
    steps: [
      { title: "賃金形態を確認", description: "時給制か歩合制か、単価はいくらかを就労前に確認します。" },
      { title: "最低保証の有無を確認", description: "歩合制でも該当時給を下回らない保証があるか確かめます。" },
      { title: "Payslipで検算", description: "毎回の給与明細で時間・単価・控除が正しいか確認します。" },
      { title: "疑問はFair Workへ", description: "賃金が低すぎると感じたらFair Workに相談します。" },
    ],
    tips: [
      "初日は時給制の農場を選ぶと収入が読めて安心。慣れて速くなってから歩合制に挑戦する人も多いです。",
      "歩合制でも『働いた時間』の記録（タイムシート）を残しておくと、最低賃金保証の検算に使えます。",
    ],
    warnings: [
      "『歩合だから最低賃金を下回っても普通』という説明は原則誤り。園芸Awardなら最低賃金floorが適用されます。",
      "本記事は一般的情報です。個別の賃金トラブルはFair Work Ombudsmanに確認してください。",
    ],
    faqs: [
      {
        question: "歩合制で稼げないときはどうすればいい？",
        answer:
          "園芸Awardが適用される歩合制なら、計算額が該当時給を下回っても最低限その時給は支払われるべきです。Payslipで下回っていないか確認し、疑問があればFair Work Ombudsmanに相談しましょう。",
      },
      {
        question: "時給と歩合、セカンドビザの日数に違いはありますか？",
        answer:
          "賃金形態そのものは日数要件に直接影響しません。重要なのは対象地域・対象業種でフルタイム相当に働き、Payslip等で証明できることです。歩合制でも正規の記録が残れば日数にカウントできます。",
      },
    ],
    sources: [
      { label: "Fair Work - Piece rates", url: "https://www.fairwork.gov.au/pay-and-wages/minimum-wages/piece-rates-and-commission-payments" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Fair Work Ombudsman｜Piece rates & commission payments（歩合制の最低賃金保証）",
        url: "https://www.fairwork.gov.au/pay-and-wages/minimum-wages/piece-rates-and-commission-payments",
        accessedAt: "2026-07-19",
      },
      {
        label: "Fair Work Ombudsman｜Horticulture Award (MA000028) summary",
        url: "https://www.fairwork.gov.au/employment-conditions/awards/awards-summary/ma000028-summary",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: ["farm-payslip-evidence", "farm-finding", "farm-labour-hire-contractors", "farm-weather-no-work", "second-visa-guide"],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a173",
    title: "セカンドビザ用の証拠書類｜Payslip・銀行明細・日数記録の残し方",
    slug: "farm-payslip-evidence",
    category: "farm",
    hub: "farm",
    priority: "P0",
    searchIntent: "セカンドビザの証拠書類・Payslipの残し方",
    description:
      "セカンドビザ申請で最重要となる証拠書類（Payslip・銀行入金記録・雇用主情報・Form 1263）を、勤務初日から何を・どう保存するかの実践チェックリストで解説。不備で却下されないための記録術をまとめます。",
    content: [
      "セカンド／サードビザ申請で最も重要なのは『指定地域で・指定業種の仕事を・規定日数した』ことを客観的に証明する証拠書類です。結論として、Payslip（給与明細）と銀行への給与入金記録がそろっていれば審査は格段に通りやすく、逆にこれらが欠けていると88日働いていても却下されることがあります。証拠は勤務初日から集め始めてください。",
      "そろえるべき主な証拠は、①Payslip（雇用主名・ABN・勤務日・時間または収穫量・時給/単価・総支給額・控除が記載されたもの）、②銀行口座への給与入金履歴（現金払いは証明が困難）、③雇用主の情報（会社名・ABN・農場の住所＝対象ポストコードであること・仕事内容）、④タイムシートや勤務記録、⑤雇用契約や求人のやり取りです。Home Affairsは自己申告のForm 1263に加え、これらの裏付けを求めることがあります。",
      "特にPayslipはオーストラリアの法律で雇用主が発行義務を負う書類です。『Payslipを出さない』雇用主は法令違反であり、その仕事はビザの証拠として使いにくくなります。就労前に必ずPayslipの発行を確認し、受け取ったら毎回スマホで撮影・クラウド保存しておきましょう。紙のPayslipもなくさないよう写真とPDFの両方で保管するのが安全です。",
      "日数の記録は、農場ごとに『開始日・終了日・実働日数・週の勤務日数・時給か歩合か・雇用主名とABN・農場の住所（ポストコード）』を一覧表にまとめておくと、複数農場を合算する際に便利です。88日は連続でなくてもよく、複数の雇用主・期間を合算できますが、各期間が対象地域・対象業種の条件を満たしている必要があります。",
      "証拠が不十分だと、日数を満たしていても追加書類の提出を求められたり、却下されたりします。現金払いのみ・Payslipなし・銀行記録なしの仕事は、たとえ実際に働いても証明が難しく避けるのが賢明です。『日数を偽って証明する』という持ちかけには絶対に応じないでください。虚偽申請は却下だけでなく将来のビザにも悪影響します。",
    ],
    keyFacts: [
      { label: "最重要書類", value: "Payslip（給与明細）＋銀行の給与入金記録" },
      { label: "Payslip記載", value: "雇用主名・ABN・勤務日・時間/量・賃率・総額・控除" },
      { label: "地域証明", value: "農場住所が対象ポストコードであること" },
      { label: "自己申告", value: "Form 1263（雇用の証明）＋客観的証拠" },
      { label: "合算", value: "複数農場・期間を合算可（各期間が要件を満たす必要）" },
    ],
    steps: [
      { title: "就労前にPayslip発行を確認", description: "発行しない雇用主は避けます。銀行振込かも確認します。" },
      { title: "毎回Payslipを保存", description: "受け取るたびに撮影＋PDFでクラウド保存します。" },
      { title: "入金記録を残す", description: "給与が振り込まれる口座の明細を保管します。" },
      { title: "日数一覧を作る", description: "農場別に開始/終了日・日数・ABN・住所を表にまとめます。" },
      { title: "申請時に添付", description: "Form 1263と証拠を添えてImmiAccountで申請します。" },
    ],
    tips: [
      "Payslipはクラウド（Googleドライブ等）に日付順で保存。スマホ紛失や退去後の再取得は難しいので二重保管を。",
      "農場の住所が対象ポストコードか、就労前にスクリーンショットで残しておくと後で証明が楽です。",
    ],
    warnings: [
      "現金払いのみでPayslipや入金記録がない仕事は、日数を満たしても証明が困難です。",
      "日数偽証・虚偽のPayslipはビザ却下と将来の入国制限のリスク。絶対に関わらないでください。",
    ],
    faqs: [
      {
        question: "Payslipをもらえなかった期間はどうすればいい？",
        answer:
          "銀行の入金記録、タイムシート、雇用主とのメッセージ、Form 1263での雇用主署名など、代替の証拠をできるだけ集めます。ただしPayslipがない仕事は証明力が弱いため、最初からPayslipを出す農場を選ぶのが最善です。",
      },
      {
        question: "現金払いでもセカンドビザは取れますか？",
        answer:
          "不可能ではありませんが、銀行入金記録が残らず証明が非常に難しくなります。加えて税・保険の保護もありません。可能な限り銀行振込・Payslip発行の正規雇用を選んでください。",
      },
    ],
    sources: [
      { label: "Home Affairs - Specified work", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work" },
      { label: "Fair Work - Pay slips", url: "https://www.fairwork.gov.au/pay-and-wages/pay-slips-and-record-keeping/pay-slips" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Home Affairs｜Specified work（証拠書類の要件）",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work",
        accessedAt: "2026-07-19",
      },
      {
        label: "Fair Work Ombudsman｜Pay slips（給与明細の発行義務・記載事項）",
        url: "https://www.fairwork.gov.au/pay-and-wages/pay-slips-and-record-keeping/pay-slips",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: ["88-day-calculation", "farm-employer-verification", "piecework-vs-hourly", "second-visa-guide", "specified-work-postcodes"],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a174",
    title: "セカンドビザ対象地域・郵便番号の確認方法｜指定ポストコードの読み方",
    slug: "specified-work-postcodes",
    category: "farm",
    hub: "farm",
    priority: "P0",
    searchIntent: "セカンドビザ対象地域・郵便番号の確認方法",
    description:
      "Specified Workは『指定地域（regional）』で行う必要があります。対象となる州・郵便番号（ポストコード）の公式リストの読み方、業種による地域要件の違い、就労前に必ず住所を確認する方法を解説します。",
    content: [
      "セカンド／サードビザの対象になるには、仕事の『種類』だけでなく『場所（指定地域＝regional Australia）』の条件も満たす必要があります。結論として、南オーストラリア州・タスマニア州・ノーザンテリトリー全域は基本的に対象で、クイーンズランド・ニューサウスウェールズ・ビクトリア・西オーストラリア・ACTは特定のポストコード（郵便番号）のみが対象です。働く前に農場の住所が対象ポストコードに含まれるか必ず確認してください。",
      "対象地域はHome Affairs（内務省）が公式のポストコード一覧で定めています。都市部（シドニー・メルボルン・ブリスベン中心部など）は対象外で、地方の農業地帯が対象になります。同じ州でも郵便番号によって対象・対象外が分かれるため、『州が対象だから大丈夫』と思い込まず、実際の農場の郵便番号を一覧で照合することが重要です。",
      "注意したいのは、業種によって適用される地域区分が異なる点です。農業・建設・鉱業・漁業・植林などは『regional Australia』の指定ポストコードが対象です。一方、観光・接客（hospitality）は『Northern Australia／Remote・Very Remote』の地域でのみ対象になるなど、業種ごとに使う地域リストが違います。自分の仕事がどの区分に当たるかを確認しましょう。",
      "確認の手順は、①農場・雇用主に正確な就労先の住所と郵便番号を聞く → ②Home Affairsの指定ポストコード一覧（または公式の判定ツール）で照合する → ③対象であることをスクリーンショット等で記録する、という流れです。今後、政府が提供する対象地域チェックツールも活用できますが、最終的な根拠は必ず公式リストで確認してください。",
      "対象外の地域で働いた期間は、たとえ対象業種でも日数にカウントされません。就労後に『実は対象外だった』と判明すると取り返しがつかないため、内定時点で住所を確認するのが鉄則です。境界付近の農場や、複数拠点を持つ雇用主の場合は特に注意し、実際に作業する場所の郵便番号で判断してください。",
    ],
    keyFacts: [
      { label: "全域対象", value: "南オーストラリア・タスマニア・ノーザンテリトリー" },
      { label: "一部対象", value: "QLD/NSW/VIC/WA/ACTは指定ポストコードのみ" },
      { label: "対象外", value: "シドニー・メルボルン・ブリスベン等の都市部" },
      { label: "業種で違う", value: "接客は北部/リモート地域のみ対象など区分が異なる" },
      { label: "根拠", value: "Home Affairsの指定ポストコード公式リスト" },
    ],
    steps: [
      { title: "就労先の住所を確認", description: "雇用主に実際に作業する場所の住所・郵便番号を聞きます。" },
      { title: "公式リストで照合", description: "Home Affairsの指定ポストコード一覧で対象か確認します。" },
      { title: "業種の区分を確認", description: "自分の仕事がどの地域区分の対象かを確かめます。" },
      { title: "記録を残す", description: "対象であることをスクショ等で保存します。" },
    ],
    tips: [
      "『州』ではなく『郵便番号』で判断。同じ州内でも対象外の郵便番号があります。",
      "複数拠点の雇用主は、実際に作業する畑の住所で判定します。事務所の住所ではありません。",
    ],
    warnings: ["対象外地域での就労は対象業種でも日数にカウントされません。就労前に必ず住所を照合してください。"],
    faqs: [
      {
        question: "どこで対象ポストコードを確認できますか？",
        answer:
          "Home Affairs（内務省）の公式サイトにあるSpecified workのページで、対象となる州・郵便番号の一覧が公開されています。業種ごとにリンクされたリストを確認してください。",
      },
      {
        question: "パースやアデレード周辺は対象ですか？",
        answer:
          "南オーストラリア州は全域が対象なのでアデレード周辺も対象です。一方、西オーストラリア州は指定ポストコードのみで、パース都市部は対象外です。必ず郵便番号で確認してください。",
      },
    ],
    sources: [
      { label: "Home Affairs - Specified work (postcodes)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Home Affairs｜Specified work（対象地域・郵便番号の一覧）",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: ["specified-work-industries", "farm-employer-verification", "farm-payslip-evidence", "second-visa-guide", "farm-season-calendar"],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a175",
    title: "ファーム・雇用主がセカンドビザ対象か確認する方法｜ABN・住所・仕事内容",
    slug: "farm-employer-verification",
    category: "farm",
    hub: "farm",
    priority: "P0",
    searchIntent: "雇用主がセカンドビザ対象か確認する方法",
    description:
      "働き始める前に、その農場・雇用主がセカンドビザの証明に使えるかを確認する方法を解説。ABNの実在確認、農場住所と対象ポストコードの照合、仕事内容が対象業種か、Payslip発行の有無をチェックします。",
    content: [
      "『この農場で働けばセカンドビザの日数になるのか』を就労前に見極めることは、無駄な88日を避けるために不可欠です。結論として、確認すべきは4点です。①雇用主のABN（事業者番号）が実在するか、②実際に作業する農場の住所が対象ポストコードか、③仕事内容が対象業種（Specified Work）か、④Payslipを発行し銀行振込するか。これらがそろって初めて『証明に使える仕事』になります。",
      "まずABNの確認です。正規の雇用主・派遣会社は必ずABNを持っています。ABN Lookup（abr.business.gov.au）で会社名やABN番号を検索し、事業が『Active（有効）』か、名称・業種が求人と一致するかを確認します。ABNがない、または検索しても出てこない相手は、Payslipも税・保険の手続きも怪しく、避けるのが安全です。",
      "次に住所とポストコードです。実際に作業する畑の住所を聞き、Home Affairsの指定ポストコード一覧と照合します。事務所の住所ではなく、作業現場の郵便番号で判定する点に注意してください。境界地域では特に慎重に確認します。仕事内容についても、収穫・栽培・パッキング（一次処理）など対象業種に当たるかを確認し、ワイン醸造・小売・二次加工など対象外の作業でないかをチェックします。",
      "Payslipと支払い方法も重要な判定材料です。Payslipを発行し、TFNを提出させ、給与を銀行振込する雇用主は、記録が残るため証明に使えます。逆に『現金のみ』『Payslipなし』『TFN不要』という相手は、法令面でもビザ証明面でも問題があります。就労前に『Payslipは出ますか？』『給与は銀行振込ですか？』と直接確認しましょう。",
      "これらに加えて、賃金が最低賃金を満たすか、宿代・送迎費の天引きが不当に高くないかも確認します。少しでも不安があれば、Fair Work Ombudsman（賃金・労働条件）やHome Affairs（対象要件）で裏を取ってください。悪質なブローカー・農場を避けることが、時間とお金、そしてビザを守る最大の防御です。",
    ],
    keyFacts: [
      { label: "確認1", value: "ABNが実在・Activeか（ABN Lookupで検索）" },
      { label: "確認2", value: "作業場所の住所が対象ポストコードか" },
      { label: "確認3", value: "仕事内容が対象業種(Specified Work)か" },
      { label: "確認4", value: "Payslip発行・銀行振込・TFN提出があるか" },
      { label: "照合先", value: "ABN Lookup / Home Affairs / Fair Work" },
    ],
    steps: [
      { title: "ABNを検索", description: "ABN Lookupで会社名・番号を検索しActiveか確認します。" },
      { title: "住所を照合", description: "作業現場の郵便番号を対象リストと照合します。" },
      { title: "仕事内容を確認", description: "対象業種か、対象外の二次加工・小売でないか確認します。" },
      { title: "支払い条件を確認", description: "Payslip発行・銀行振込・TFN提出の有無を確認します。" },
    ],
    tips: [
      "ABN LookupはWebで誰でも無料検索できます。求人の会社名と一致するか必ず確認しましょう。",
      "『TFNはいらない』『現金で払う』と言う雇用主は、証明にも税・保険にも問題があるサインです。",
    ],
    warnings: ["ABNがない・住所が対象外・Payslipなしのいずれかに当てはまる仕事は、88日を無駄にするリスクがあります。"],
    faqs: [
      {
        question: "ABNだけ確認すれば十分ですか？",
        answer:
          "いいえ。ABNが実在しても、作業場所が対象ポストコード外だったり仕事内容が対象外だと日数になりません。ABN・住所・仕事内容・支払い条件の4点をすべて確認してください。",
      },
      {
        question: "派遣会社（labour hire）経由でも確認できますか？",
        answer:
          "できます。派遣会社のABNと、派遣先の農場の住所・仕事内容の両方を確認します。州によっては労働者派遣にライセンス登録が必要なので、あわせて確認すると安心です。",
      },
    ],
    sources: [
      { label: "ABN Lookup", url: "https://abr.business.gov.au/" },
      { label: "Home Affairs - Specified work", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "ABN Lookup（雇用主のABN実在・有効性の確認）",
        url: "https://abr.business.gov.au/",
        accessedAt: "2026-07-19",
      },
      {
        label: "Home Affairs｜Specified work（対象業種・地域の要件）",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: ["specified-work-postcodes", "farm-labour-hire-contractors", "farm-payslip-evidence", "farm-finding", "second-visa-guide"],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a176",
    title: "コントラクター・Labour Hire経由で働く注意点｜ライセンスと証拠",
    slug: "farm-labour-hire-contractors",
    category: "farm",
    hub: "farm",
    priority: "P0",
    searchIntent: "Labour Hire・コントラクター経由の注意点",
    description:
      "ファームは労働者派遣（labour hire）やコントラクター経由の求人が多くあります。派遣会社のライセンス登録、誰が雇用主か、賃金と天引き、Payslipなど、セカンドビザの証拠を守るための確認事項を解説します。",
    content: [
      "ファームの仕事は、農場と直接契約するだけでなく『労働者派遣会社（labour hire）』や『コントラクター（請負業者）』を通して働くケースが多くあります。結論として、派遣経由でもセカンドビザの日数にできますが、①派遣会社が州のライセンスに登録しているか、②誰が雇用主でPayslipを出すのか、③賃金と天引きが適正か、を必ず確認する必要があります。ここを怠ると賃金未払いや証拠不備のリスクが高まります。",
      "まずライセンスです。ビクトリア州・クイーンズランド州・南オーストラリア州などでは、労働者派遣会社（labour hire provider）に州のライセンス登録が義務付けられています。無登録の業者を通して働くこと自体が問題になり得るため、州のlabour hireライセンス登録簿で業者名を確認しましょう。登録されている業者はトラブル時の追跡もしやすく、安心度が高いです。",
      "次に『誰が雇用主か』です。派遣経由の場合、実際に給与を払いPayslipを発行するのは派遣会社であることが多く、証拠書類には派遣会社名とABNが載ります。一方、対象地域・対象業種かの判定は『実際に作業する農場の場所と仕事内容』で行います。つまりPayslipの発行元（派遣会社）と作業場所（農場）の両方を記録しておく必要があります。",
      "賃金と天引きにも注意します。悪質なコントラクターは、宿代・送迎費・道具代・紹介料などを高額に天引きし、手取りが最低賃金を大きく下回ることがあります。歩合制でも園芸Awardのもとでは最低賃金の保証があります。Payslipで単価・時間・控除の内訳を必ず確認し、不明な天引きがあれば説明を求めましょう。",
      "確認の手順は、①業者名を州のライセンス登録簿で検索 → ②ABNをABN Lookupで確認 → ③Payslip発行と銀行振込を確認 → ④作業する農場の住所（ポストコード）を確認 → ⑤天引きの内訳を確認、です。少しでも不透明なら、Fair Work Ombudsmanに相談してください。信頼できる派遣会社は、これらの質問に明確に答えてくれます。",
    ],
    keyFacts: [
      { label: "ライセンス", value: "VIC/QLD/SAは労働者派遣に州の登録が必要" },
      { label: "雇用主", value: "Payslip発行元は派遣会社であることが多い" },
      { label: "地域判定", value: "実際に作業する農場の住所・仕事内容で判定" },
      { label: "天引き", value: "宿代・送迎費・道具代の内訳をPayslipで確認" },
      { label: "相談先", value: "州のlabour hire登録簿 / Fair Work Ombudsman" },
    ],
    steps: [
      { title: "業者を登録簿で確認", description: "州のlabour hireライセンス登録簿で業者名を検索します。" },
      { title: "ABNを確認", description: "ABN LookupでActiveか、名称が一致するか確認します。" },
      { title: "支払い条件を確認", description: "Payslip発行・銀行振込・賃率・天引きを確認します。" },
      { title: "農場情報を記録", description: "作業する農場の住所（ポストコード）と仕事内容を残します。" },
    ],
    tips: [
      "Payslipには派遣会社名が載りますが、対象地域の証明には『作業した農場の住所』も別途記録しておきましょう。",
      "宿・送迎とセットの求人は、天引き後の手取りを事前に計算。最低賃金を下回るなら断る勇気を。",
    ],
    warnings: [
      "無登録の派遣業者や、高額な天引きで最低賃金を下回る契約は避けてください。",
      "『紹介料』を先に現金で要求する業者は詐欺の可能性があります。",
    ],
    faqs: [
      {
        question: "派遣会社の登録はどこで確認できますか？",
        answer:
          "ビクトリア州はLabour Hire Authority、クイーンズランド州・南オーストラリア州もそれぞれの労働者派遣ライセンス登録簿をオンラインで公開しています。業者名で検索して登録状況を確認してください。",
      },
      {
        question: "派遣経由だとセカンドビザに不利ですか？",
        answer:
          "登録された正規の派遣会社で、Payslipと農場情報が残るなら不利ではありません。むしろ求人が豊富で仕事を見つけやすい利点もあります。要は記録が残る正規ルートかどうかです。",
      },
    ],
    sources: [
      { label: "Fair Work - Labour hire", url: "https://www.fairwork.gov.au/find-help-for/visa-holders-and-migrants" },
      { label: "Victoria Labour Hire Authority", url: "https://labourhireauthority.vic.gov.au/" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Labour Hire Authority (VIC)｜労働者派遣業者のライセンス登録簿",
        url: "https://labourhireauthority.vic.gov.au/",
        accessedAt: "2026-07-19",
      },
      {
        label: "Fair Work Ombudsman｜Visa holders & migrants（移住労働者の権利）",
        url: "https://www.fairwork.gov.au/find-help-for/visa-holders-and-migrants",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: ["farm-employer-verification", "piecework-vs-hourly", "farm-payslip-evidence", "farm-accommodation-guide", "farm-finding"],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a177",
    title: "ファームの宿・ワーカーズアコモデーションの確認事項｜家賃・送迎・天引き",
    slug: "farm-accommodation-guide",
    category: "farm",
    hub: "farm",
    priority: "P0",
    searchIntent: "ファームの宿・ワーカーズアコモの確認事項",
    description:
      "ファームでは仕事と宿がセットのワーカーズアコモデーション（ワーカーズホステル）が一般的。家賃相場、送迎、給与天引き、退去時のトラブル、仕事の紹介と宿代の関係など、契約前に確認すべきことを解説します。",
    content: [
      "ファーム地域では、バックパッカー向けの『ワーカーズアコモデーション（ワーカーズホステル）』に滞在しながら働くのが一般的です。結論として、宿を選ぶときは①家賃（週いくらか）、②仕事の紹介があるか・その条件、③送迎の有無と費用、④給与天引きかどうか、⑤退去のルール、の5点を契約前に必ず確認してください。ここが曖昧だと、仕事が回ってこないのに宿代だけ払い続ける事態になりかねません。",
      "家賃は地域や部屋タイプ（ドミトリー／個室）で幅がありますが、ファーム地域のワーカーズホステルは週あたりの定額制が多く、光熱費込みのことが一般的です。都市部より安いこともあれば、仕事の紹介とセットで割高なこともあります。相場を複数の宿で比較し、『仕事の紹介料』が家賃に上乗せされていないか確認しましょう。",
      "多くのワーカーズホステルは提携農場への送迎と仕事の紹介を行いますが、注意すべきは『宿に泊まれば必ず十分な仕事がもらえるとは限らない』点です。天候や作柄で仕事が減ると、収入がないのに宿代がかさみます。『週に何日くらい仕事が回るか』『仕事がない週の家賃はどうなるか』を事前に聞き、口約束ではなくメッセージで残しておくと安心です。",
      "給与天引き（宿代・送迎費をPayslipから引く）にも注意が必要です。天引き自体は合法な場合もありますが、Payslipに内訳が明記され、天引き後の手取りが最低賃金を下回らないことが条件です。天引き額が不透明だったり、手取りが極端に低い場合は、Fair Work Ombudsmanに相談してください。ボンド（保証金）を求められたら金額と返金条件を必ず確認します。",
      "退去時のトラブルも定番です。ボンドが返ってこない、通知期間（notice）を理由に追加請求される、といった話があります。入居時に部屋の状態を写真で残し、退去ルール（何日前に伝えるか、掃除の基準）を確認しておきましょう。安全面では、鍵・消火設備・衛生状態もチェックし、少しでも危険を感じたら別の宿を探す判断も大切です。",
    ],
    keyFacts: [
      { label: "形態", value: "ワーカーズホステル（提携農場への紹介・送迎付きが多い）" },
      { label: "家賃", value: "週定額・光熱費込みが一般的（地域で差）" },
      { label: "注意点", value: "宿泊=十分な仕事の保証ではない" },
      { label: "天引き", value: "Payslipに内訳明記・手取りが最低賃金以上か" },
      { label: "退去", value: "ボンド返金条件・通知期間・掃除基準を事前確認" },
    ],
    steps: [
      { title: "複数の宿を比較", description: "家賃・仕事紹介・送迎・天引きの条件を比べます。" },
      { title: "仕事量を確認", description: "週何日仕事が回るか、ない週の家賃はどうなるか聞きます。" },
      { title: "天引きとボンドを確認", description: "内訳・手取り・保証金の返金条件を確認します。" },
      { title: "入居時に記録", description: "部屋の状態を写真で残し、退去ルールを確認します。" },
    ],
    tips: [
      "『泊まれば仕事を紹介する』は必ずしも十分な仕事量を意味しません。仕事の実績や口コミを確認しましょう。",
      "宿代の天引きがある場合、Payslipで手取りが最低賃金を下回っていないか毎回チェックを。",
    ],
    warnings: [
      "仕事が来ないのに宿代だけ発生する『塩漬け』に注意。仕事量の見込みを事前に確認してください。",
      "ボンドの返金トラブルは頻発。入退去時の写真と条件の記録を必ず残しましょう。",
    ],
    faqs: [
      {
        question: "ワーカーズホステルは必ず使うべきですか？",
        answer:
          "必須ではありません。車があれば自分で宿を探し、農場に直接応募する方が費用を抑えられることもあります。車がない・土地勘がない場合は、送迎付きのホステルが便利という位置づけです。",
      },
      {
        question: "宿代の天引きは違法ですか？",
        answer:
          "天引き自体は、同意があり内訳が明確で手取りが最低賃金以上なら違法とは限りません。問題は不透明な高額天引きです。Payslipで内訳を確認し、疑問があればFair Work Ombudsmanに相談してください。",
      },
    ],
    sources: [
      { label: "Fair Work - Deductions", url: "https://www.fairwork.gov.au/pay-and-wages/deducting-pay-and-overpayments/deductions" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Fair Work Ombudsman｜Deductions（給与天引きのルール）",
        url: "https://www.fairwork.gov.au/pay-and-wages/deducting-pay-and-overpayments/deductions",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: ["farm-transport-car", "farm-finding", "farm-labour-hire-contractors", "farm-weather-no-work", "farm-second-visa"],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a178",
    title: "ファームに車は必要？送迎・相乗り・車なしでの探し方",
    slug: "farm-transport-car",
    category: "farm",
    hub: "farm",
    priority: "P0",
    searchIntent: "ファームに車は必要か・車なしの働き方",
    description:
      "ファームで働くのに車は必須か、車なしでも働けるかを解説。送迎付きホステル、相乗り、車を持つ場合の費用（保険・整備・rego）、地域ごとの移動難易度を比較し、車なしで探すコツをまとめます。",
    content: [
      "『ファームで働くには車が必要か』という質問への答えは、『あると圧倒的に有利だが、車なしでも働ける』です。多くの農場は町から離れた場所にあり、公共交通が乏しいため、車があれば求人の選択肢が一気に広がります。一方、送迎付きのワーカーズホステルや相乗りを使えば、車がなくても十分に仕事を見つけられます。",
      "車を持つ利点は、①送迎に縛られず複数農場に応募できる、②仕事の紹介料や送迎費を払わずに済む、③買い物や生活の自由度が高い、④シーズンを追って自分のペースで移動できること。特に歩合制で稼ぎたい人や、長くファームを回りたい人には車が大きな武器になります。反面、購入費に加えて登録（rego）、強制保険（CTP）、任意保険、燃料、整備・車検（RWC）などの維持費がかかります。中古車はトラブルも多いため、購入時の点検が重要です。",
      "車なしで働く場合の王道は、送迎付きワーカーズホステルです。提携農場への送迎と仕事の紹介がセットになっており、車がなくても働けます。ただし送迎費や紹介の条件、仕事量を事前に確認しましょう。もう一つは、同じ農場で働く仲間との相乗り（カープール）です。ガソリン代を分担する形が一般的で、Facebookの地域グループや宿の掲示板で募集されています。",
      "地域による移動の難しさも押さえておきましょう。バンダバーグやガトンなど町に近い農場が多い地域は車なしでも比較的働きやすい一方、広大な畑が点在する地域や内陸部は車がないと厳しいことがあります。狙う地域の『町から農場までの距離』『送迎の有無』を事前にリサーチしてから移動先を決めると失敗しません。",
      "車なしで探すコツは、①求人応募時に『車はないが送迎はあるか』を必ず聞く、②送迎付きホステルを拠点にする、③相乗り相手を探す、④町に近い農場を優先する、の4つです。逆に車を買うなら、名義変更（rego）・保険・保証金の手続きを理解し、売却しやすい人気車種を選ぶと帰国時に手放しやすくなります。",
    ],
    keyFacts: [
      { label: "結論", value: "車ありが有利。なしでも送迎・相乗りで可能" },
      { label: "車の維持費", value: "rego・CTP保険・任意保険・燃料・整備/RWC" },
      { label: "車なしの手段", value: "送迎付きホステル / 相乗り(carpool)" },
      { label: "働きやすい地域", value: "町に近い農場が多い地域（バンダバーグ等）" },
      { label: "確認事項", value: "応募時に送迎の有無・費用を必ず確認" },
    ],
    steps: [
      { title: "車の要否を判断", description: "狙う地域の農場と町の距離、送迎の有無を調べます。" },
      { title: "車なしなら送迎を確保", description: "送迎付きホステルや相乗りを手配します。" },
      { title: "車ありなら維持費を計算", description: "rego・保険・燃料・整備の総額を見積もります。" },
      { title: "応募時に交通手段を確認", description: "『送迎はあるか』を必ず質問します。" },
    ],
    tips: [
      "車を買うなら人気の中古車種を。帰国時に売りやすく、部品や整備も安く済みます。",
      "相乗りはガソリン代の分担が基本。トラブル防止に金額と当番を最初に決めておきましょう。",
    ],
    warnings: ["中古車は故障・名義変更・保険のトラブルが多い分野です。購入前の点検と手続き確認を怠らないでください。"],
    faqs: [
      {
        question: "車がないと不利ですか？",
        answer:
          "選択肢は狭まりますが不利すぎることはありません。送迎付きホステルを拠点にすれば車なしでも十分働けます。町に近い農場を狙うのがコツです。",
      },
      {
        question: "車は買うべきかレンタルすべきか？",
        answer:
          "数か月以上ファームを回るなら中古車購入が割安なことが多いです。短期なら相乗りや送迎で十分。維持費と滞在期間を比較して判断しましょう。",
      },
    ],
    sources: [
      { label: "Workforce Australia - Harvest", url: "https://www.workforceaustralia.gov.au/individuals/harvest" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Workforce Australia｜Harvest（地域別の収穫求人・移動の目安）",
        url: "https://www.workforceaustralia.gov.au/individuals/harvest",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: ["farm-accommodation-guide", "farm-finding", "cars-guide", "farm-season-calendar", "farm-second-visa"],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a179",
    title: "ファームの服装完全ガイド｜暑さ・寒さ・雨・薬品への対策とPPE",
    slug: "farm-work-clothing",
    category: "farm",
    hub: "farm",
    priority: "P0",
    searchIntent: "ファームの服装・持ち物・PPE",
    description:
      "ファーム作業に適した服装と持ち物を、暑さ・寒さ・雨・薬品対策の観点から解説。日焼け・熱中症を防ぐ装備、作物別の服装、必須のPPE（保護具）、洗濯や買い足しのコツまでまとめます。",
    content: [
      "ファームの服装は『安全と快適さ』が最優先です。結論として、最低限そろえたいのは、通気性のよい長袖シャツ・長ズボン（日焼けと擦り傷を防ぐ）、つば広の帽子、丈夫な作業用手袋、滑りにくい安全靴（steel-cap があればなお良い）、日焼け止め、水筒です。これらは屋外の炎天下でも収穫作業を安全に続けるための基本装備です。",
      "オーストラリアの紫外線は非常に強く、夏の農作業では日焼け対策が健康管理そのものです。半袖より通気性のある長袖のほうが、かえって涼しく肌を守れます。首の後ろまで覆えるつば広帽子（フラップ付き）、サングラス、SPFの高い日焼け止めを組み合わせ、こまめに塗り直します。熱中症を防ぐため、水分と塩分を意識的に補給しましょう。",
      "季節と地域で必要な服装は変わります。夏の北部・内陸は酷暑対策（通気・日除け・大量の水）、冬の南部やタスマニア・高原地帯（スタンソープなど）は朝晩の冷え込み対策として重ね着・防寒着が必要です。雨の多い時期やいちごなど地面に近い作業では、レインジャケット・防水パンツ・長靴（gumboots）や膝当てがあると快適です。",
      "作業内容によっては保護具（PPE）が欠かせません。薬品や農薬を扱う畑では、雇用主が指定する手袋・マスク・保護メガネ・防護服を着用します。梯子を使う果樹（りんご・柑橘）では滑りにくい靴、パッキング作業では衛生面から指定の服装・帽子・手袋が求められることがあります。PPEは基本的に雇用主が用意・指示するので、指示に従い、不足があれば申し出ましょう。",
      "実用面では、汗と泥で汚れるため作業着は2〜3セット用意し、乾きやすい素材を選ぶと洗濯が楽です。安い作業着はKmartやBig Wなどで現地調達できます。手袋・靴下・帽子は消耗品なので予備を持ち、破れたら早めに交換を。快適な装備は疲労と怪我を減らし、結果的に稼ぎと安全につながります。",
    ],
    keyFacts: [
      { label: "基本装備", value: "長袖・長ズボン・つば広帽子・作業手袋・安全靴・水筒" },
      { label: "日焼け対策", value: "通気性長袖・フラップ付き帽子・高SPF日焼け止め" },
      { label: "寒冷地", value: "冬の南部・高原は重ね着と防寒着" },
      { label: "雨・地面作業", value: "レインウェア・長靴・膝当て" },
      { label: "PPE", value: "薬品作業は雇用主指定の手袋・マスク・保護メガネ" },
    ],
    steps: [
      { title: "基本装備をそろえる", description: "長袖・長ズボン・帽子・手袋・安全靴・水筒を用意します。" },
      { title: "季節と地域に合わせる", description: "夏は日除け、冬・高原は防寒、雨季は防水を追加します。" },
      { title: "作物・作業に合わせる", description: "梯子作業は滑りにくい靴、薬品作業はPPEを着用します。" },
      { title: "予備と洗濯を管理", description: "作業着は2-3セット。乾きやすい素材で毎日洗います。" },
    ],
    tips: [
      "半袖より通気性のある長袖の方が涼しく肌を守れます。日焼けは体力を奪う大敵です。",
      "作業着はKmart・Big Wなどで安く現地調達可能。高価な服は不要です。",
    ],
    warnings: ["薬品・農薬作業では雇用主指定のPPEを必ず着用してください。素肌での作業は健康被害のリスクがあります。"],
    faqs: [
      {
        question: "安全靴は必須ですか？",
        answer:
          "農場や作業によります。重い物を扱う現場やパッキングシェッドではsteel-cap（つま先保護）の安全靴を求められることがあります。少なくとも滑りにくく足を守れる丈夫な靴を用意しましょう。",
      },
      {
        question: "服装は現地調達で足りますか？",
        answer:
          "十分です。Kmart・Big W・作業服店で長袖・帽子・手袋・安全靴・日焼け止めがそろいます。日本から大量に持参する必要はありません。",
      },
    ],
    sources: [
      { label: "Safe Work Australia - Sun & heat", url: "https://www.safeworkaustralia.gov.au/safety-topic/hazards/heat" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Safe Work Australia｜Heat（暑熱環境での作業安全）",
        url: "https://www.safeworkaustralia.gov.au/safety-topic/hazards/heat",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: ["farm-heat-sun-safety", "farm-chemical-safety", "crop-strawberry", "farm-finding", "farm-second-visa"],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a180",
    title: "ファームの熱中症・紫外線対策｜水分・休憩・症状と緊急対応",
    slug: "farm-heat-sun-safety",
    category: "farm",
    hub: "farm",
    priority: "P0",
    searchIntent: "ファームの熱中症・紫外線対策",
    description:
      "炎天下のファーム作業で命を守る熱中症・紫外線対策を解説。必要な水分量、休憩の取り方、熱中症の初期症状と応急処置、緊急時の連絡先（000）まで、Safe Work Australiaの指針にもとづきまとめます。",
    content: [
      "オーストラリアの夏の農作業では、熱中症と紫外線が最大の健康リスクです。結論として、命を守る基本は『こまめな水分・塩分補給』『日陰での定期的な休憩』『日焼け対策』の3つ。体調に少しでも異変を感じたら、我慢せず作業を止めて日陰で休み、症状が重ければためらわず救急（000）を呼ぶことが重要です。稼ぎより体調が優先です。",
      "水分は『喉が渇く前に』飲むのが鉄則です。暑い日の重労働では大量に汗をかくため、水だけでなく塩分・電解質（スポーツドリンクや経口補水）も補給します。カフェインやアルコールは脱水を招くため作業前後は控えめに。大きめの水筒を複数用意し、休憩ごとに必ず補給する習慣をつけましょう。",
      "紫外線対策は熱中症予防と一体です。通気性のよい長袖・長ズボン、フラップ付きのつば広帽子、サングラス、高SPFの日焼け止め（2〜3時間ごとに塗り直し）で肌を守ります。最も暑い時間帯（正午〜午後3時ごろ）は日陰での休憩や作業調整を検討します。多くの農場は早朝から作業を始めて暑さのピークを避けます。",
      "熱中症の初期症状を覚えておきましょう。めまい・頭痛・吐き気・大量の発汗またはその停止・筋肉のけいれん・強い疲労感・集中力の低下などです。これらが出たら、①作業を中止して日陰・涼しい場所へ移動、②衣服をゆるめ、水分・塩分を補給、③首・脇・足の付け根を冷やす、という応急処置をします。意識がもうろうとする、けいれん、汗が出ない・皮膚が熱く乾くなどの重い症状は熱射病（命に関わる緊急事態）で、すぐに000に電話してください。",
      "予防の仕組みづくりも大切です。仲間同士で体調を確認し合う、休憩と水分補給のタイミングを決めておく、体調が悪い日は無理をしない、といった習慣が事故を防ぎます。雇用主には安全な作業環境（日陰・水・休憩）を提供する義務があります。危険な暑さでも休憩や水を与えない職場は問題であり、Safe Work（州の労働安全機関）に相談できます。",
    ],
    keyFacts: [
      { label: "3原則", value: "水分・塩分補給／日陰休憩／日焼け対策" },
      { label: "水分", value: "喉が渇く前に。電解質も補給。カフェイン/酒は控える" },
      { label: "危険時間", value: "正午〜15時頃。早朝作業で暑さのピークを回避" },
      { label: "初期症状", value: "めまい・頭痛・吐き気・けいれん・強い疲労" },
      { label: "緊急", value: "意識障害・汗が止まる=熱射病。すぐ000へ" },
    ],
    steps: [
      { title: "水分・塩分を準備", description: "大きめの水筒と電解質補給を複数用意します。" },
      { title: "こまめに休憩", description: "日陰で定期的に休み、暑い時間帯は作業を調整します。" },
      { title: "症状に気づいたら中止", description: "めまい等が出たら作業を止め涼しい場所で休みます。" },
      { title: "重症はすぐ000", description: "意識障害・けいれん・発汗停止は救急に通報します。" },
    ],
    tips: [
      "早朝スタートの農場を選ぶと、暑さのピークを避けられて体が楽です。",
      "仲間と『お互いの体調を声かけする』ルールを作ると、熱中症の早期発見につながります。",
    ],
    warnings: [
      "汗が止まる・皮膚が熱く乾く・意識がもうろうとするのは熱射病の危険サイン。ためらわず000に通報してください。",
      "水や休憩を与えない職場は労働安全上の問題です。無理をせず州のSafe Workに相談を。",
    ],
    faqs: [
      {
        question: "どのくらい水を飲めばいいですか？",
        answer:
          "作業強度と気温によりますが、暑い日の重労働では相当量が必要です。喉の渇きを待たず、休憩ごとにコップ数杯を目安にこまめに補給し、汗を多くかく日は電解質も加えてください。",
      },
      {
        question: "日焼け止めだけで紫外線対策は足りますか？",
        answer:
          "不十分です。日焼け止めは塗り直しが必要な補助手段で、基本は衣類・帽子・サングラスで物理的に肌を覆うこと。長袖・つば広帽子との併用が最も効果的です。",
      },
    ],
    sources: [
      { label: "Safe Work Australia - Heat", url: "https://www.safeworkaustralia.gov.au/safety-topic/hazards/heat" },
      { label: "緊急通報 000", url: "https://www.triplezero.gov.au/" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Safe Work Australia｜Heat（暑熱作業の健康リスクと対策）",
        url: "https://www.safeworkaustralia.gov.au/safety-topic/hazards/heat",
        accessedAt: "2026-07-19",
      },
      {
        label: "Triple Zero (000)｜緊急通報サービス",
        url: "https://www.triplezero.gov.au/",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: ["farm-work-clothing", "farm-chemical-safety", "farm-finding", "crop-mango-banana", "farm-second-visa"],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a181",
    title: "農薬・薬品を扱う作業の安全確認｜PPE・SDS・体調不良時の報告",
    slug: "farm-chemical-safety",
    category: "farm",
    hub: "farm",
    priority: "P1",
    searchIntent: "ファームの農薬・薬品作業の安全",
    description:
      "ファームで農薬・薬品に関わる作業の安全対策を解説。保護具（PPE）の着用、SDS（安全データシート）の確認、散布区域の立ち入り、体調不良時の報告と受診、雇用主の安全義務まで、労働安全の観点でまとめます。",
    content: [
      "ファームでは、農薬・肥料・洗浄剤などの化学物質に関わる作業があります。結論として、薬品を扱う・散布区域に入る作業では、①雇用主指定の保護具（PPE）を必ず着用し、②作業前に安全な取り扱いの説明を受け、③体調に異変があればすぐ作業を止めて報告・受診することが基本です。安全の指示や装備がない状態で薬品作業をさせられる場合は、その職場は問題があります。",
      "保護具（PPE）は作業内容に応じて、手袋・保護メガネ（ゴーグル）・マスクや呼吸用保護具・防護服・長靴などが指定されます。これらは雇用主が用意し、正しい使い方を指示する義務があります。素肌や普段着のまま薬品に触れると、皮膚や目の炎症、吸入による体調不良を招くおそれがあります。装備が不足していると感じたら、作業前に必ず申し出てください。",
      "化学物質には『SDS（Safety Data Sheet／安全データシート）』が用意されており、その薬品の危険性・取り扱い方法・応急処置が記載されています。取り扱う薬品のSDSがどこにあるか、緊急時にどうするかを確認しておきましょう。多くの場合は英語ですが、危険の種類（皮膚・目・吸入）と応急処置の部分だけでも把握しておくと安心です。",
      "散布直後の区域への立ち入りにも注意が必要です。農薬を散布した畑には、再び安全に入れるようになるまでの待機時間が定められていることがあります。指示を無視して散布直後の区域に入ると被ばくのリスクがあります。『いつからその区域で作業してよいか』を必ず確認してください。飲食・喫煙の前後は手をよく洗い、作業着はこまめに洗濯します。",
      "体調不良時の対応が最も重要です。頭痛・吐き気・めまい・皮膚や目の刺激・呼吸のしづらさなどが出たら、すぐに作業を中止し、汚染された衣類を脱ぎ、水で洗い流し、雇用主に報告します。症状が続く・重い場合は医療機関を受診し、可能なら薬品名（SDS）を伝えます。緊急時は000へ。仕事中の健康被害は労災（Workers Compensation）の対象になり得るので、必ず報告と記録を残してください。",
    ],
    keyFacts: [
      { label: "基本", value: "指定PPE着用／事前説明／体調異変は即報告" },
      { label: "PPE", value: "手袋・保護メガネ・マスク/呼吸具・防護服（雇用主が用意）" },
      { label: "SDS", value: "薬品の危険性・応急処置を記した安全データシート" },
      { label: "散布区域", value: "再立ち入り可能時間を確認してから作業" },
      { label: "体調不良", value: "中止→洗浄→報告→受診。緊急は000。労災対象" },
    ],
    steps: [
      { title: "作業前に説明を受ける", description: "薬品の危険性・取り扱い・PPEの使い方を確認します。" },
      { title: "PPEを正しく着用", description: "指定の手袋・保護メガネ・マスク等を着けます。" },
      { title: "SDSと待機時間を確認", description: "安全データシートの場所と散布後の立ち入り時間を確認します。" },
      { title: "異変は即中止・報告", description: "体調不良は作業を止め洗浄・報告し、必要なら受診します。" },
    ],
    tips: [
      "薬品作業の前後は手洗いを徹底。飲食・喫煙・スマホ操作の前に必ず洗いましょう。",
      "自分の作業にどんな薬品が使われるか不明なときは、遠慮なく雇用主に質問してください。",
    ],
    warnings: [
      "PPEや安全説明なしに薬品作業をさせる職場は労働安全上の問題です。無理をせず州のSafe Workに相談を。",
      "仕事中の健康被害は労災の対象になり得ます。必ず雇用主に報告し記録を残してください。",
    ],
    faqs: [
      {
        question: "農薬作業は避けた方がいいですか？",
        answer:
          "適切なPPEと指示があれば過度に恐れる必要はありません。問題は装備や説明がないまま扱わされる場合です。安全対策が整っているか確認し、不十分なら断る・相談する判断が大切です。",
      },
      {
        question: "体調が悪くなったら労災になりますか？",
        answer:
          "仕事が原因の健康被害はWorkers Compensation（労災補償）の対象になり得ます。ただし報告と記録が前提です。症状が出たら必ず雇用主に伝え、受診記録を残してください。",
      },
    ],
    sources: [
      { label: "Safe Work Australia - Chemicals", url: "https://www.safeworkaustralia.gov.au/safety-topic/hazards/chemicals" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Safe Work Australia｜Chemicals（化学物質の取り扱い・SDS・PPE）",
        url: "https://www.safeworkaustralia.gov.au/safety-topic/hazards/chemicals",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: ["farm-work-clothing", "farm-heat-sun-safety", "farm-finding", "workplace-injury-workers-comp", "farm-second-visa"],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a182",
    title: "雨・天候で仕事が休みになる場合の収入対策｜予備費と代替の仕事",
    slug: "farm-weather-no-work",
    category: "farm",
    hub: "farm",
    priority: "P1",
    searchIntent: "ファームの天候休みと収入対策",
    description:
      "ファームは雨や悪天候で仕事が休みになり収入が不安定になりがち。休みの日の賃金保証の有無、予備費の目安、代替の仕事、そして天候休みがセカンドビザの88日カウントに与える影響を解説します。",
    content: [
      "ファームの収入が不安定になる最大の理由が『天候による休み』です。結論として、雨や悪天候で収穫ができない日は基本的に無給になりやすく、その分収入が減ります。だからこそ、①数週間分の生活費を予備費として確保し、②天候休みが続くときの代替の仕事を考え、③88日のカウントへの影響を理解しておくことが、ファーム生活を乗り切る鍵になります。",
      "まず賃金についてです。多くのファームは『働いた分だけ』の支払いのため、雨で作業がない日は収入が発生しないのが一般的です。カジュアル雇用では最低保証時間がないことが多く、呼ばれなければ稼げません。週によって収入が大きく変動する前提で家計を組み、繁忙期に稼いだ分を閑散期に回す意識が必要です。",
      "予備費の目安は、最低でも2〜4週間分の生活費（宿代・食費・交通費）を常に確保しておくことです。特に宿代は仕事の有無に関わらず発生するため、天候不順が続くと出費だけがかさみます。渡航前・移動前にある程度の貯金を持ち、収入が細い時期に備えましょう。天候休みを想定して、生活費に余裕を持った計画が安心につながります。",
      "天候休みが続くときの代替策としては、①同じ地域の別の農場やパッキングシェッド（屋内作業なので雨でも動ける）に応募する、②町の飲食・小売など別業種の短期の仕事を探す、③相乗り仲間と情報を共有して仕事のある農場に移る、などがあります。屋内のパッキングは天候に左右されにくいため、雨の多い時期の収入源として狙う価値があります。",
      "セカンドビザの日数への影響も知っておきましょう。88日のカウントでは、雨などで働けなかった日は原則として日数に含められません（実際に働いた日のみカウント）。一方、有給の公的休日や病欠など一定のものは含められる場合があります。つまり天候休みが多いほど88日の達成に時間がかかるため、シーズンと地域を選び、屋内作業も組み合わせて効率よく日数を積むことが大切です。",
    ],
    keyFacts: [
      { label: "天候休み", value: "雨・悪天候の日は基本無給になりやすい" },
      { label: "予備費", value: "最低2-4週間分の生活費を常に確保" },
      { label: "代替策", value: "屋内パッキング・別農場・町の短期の仕事" },
      { label: "88日への影響", value: "働けなかった日は原則カウント外" },
      { label: "対策", value: "シーズン選び＋屋内作業で日数を効率化" },
    ],
    steps: [
      { title: "予備費を確保", description: "2-4週間分の生活費を常にキープします。" },
      { title: "屋内作業も候補に", description: "雨に強いパッキングシェッドの仕事を調べます。" },
      { title: "代替の仕事を用意", description: "別農場や町の短期の仕事の当てを作っておきます。" },
      { title: "日数計画に余裕を", description: "天候休みを見込み88日達成に3-4か月の余裕をみます。" },
    ],
    tips: [
      "屋内のパッキングは天候に左右されにくく、雨季の収入源として有効です。",
      "宿代は仕事がなくても発生します。天候不順が続く地域では予備費を厚めに。",
    ],
    warnings: ["カジュアル雇用は最低保証時間がないことが多く、天候次第で収入ゼロの週もあり得ます。貯金の余裕を持ちましょう。"],
    faqs: [
      {
        question: "雨で休んだ日は88日に数えられますか？",
        answer:
          "原則として、実際に働いていない天候休みの日は日数に含められません。88日は実働ベースで数えるため、天候休みが多いと達成に時間がかかります。詳しくは88日の数え方の記事とHome Affairsの要件を確認してください。",
      },
      {
        question: "収入が不安定すぎて生活できるか不安です。",
        answer:
          "繁忙期に集中して稼ぎ、予備費で閑散期を乗り切るのが基本です。屋内作業や別業種を組み合わせ、宿代の安い滞在先を選ぶと安定します。無理なら一度都市部の仕事に戻る選択も現実的です。",
      },
    ],
    sources: [
      { label: "Home Affairs - Specified work", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Home Affairs｜Specified work（日数カウントの考え方）",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: ["88-day-calculation", "farm-packing-shed", "piecework-vs-hourly", "farm-accommodation-guide", "farm-finding"],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a183",
    title: "ファームで使う英語フレーズ｜作業指示・体調・給与確認",
    slug: "farm-job-english",
    category: "farm",
    hub: "farm",
    priority: "P1",
    searchIntent: "ファームで使う英語フレーズ",
    description:
      "ファーム現場で頻出する英語フレーズを、応募・作業指示・体調・給与確認の場面別に収録。英語に自信がなくても働けるよう、そのまま使える短文と日本語訳をまとめました。",
    content: [
      "ファームの現場では難しい英語は必要ありません。結論として、『応募・作業指示・体調・給与確認』の4場面で使う短いフレーズを覚えておけば、英語に自信がなくても十分に働けます。ファームには多国籍のワーカーが集まり、シンプルな英語でのやり取りが基本なので、完璧な発音より『はっきり伝える・分からなければ聞き返す』姿勢が大切です。",
      "応募の場面では、車の有無・いつから働けるか・経験がよく聞かれます。『Do you have a car?（車はありますか）』『When can you start?（いつから働けますか）』などに即答できるよう準備しましょう。自分からは『Are you hiring?（募集していますか）』『Is it hourly or piece rate?（時給ですか歩合ですか）』『Do you provide payslips?（給与明細は出ますか）』と条件を確認します。",
      "作業指示は短い命令文が中心です。『Pick only the ripe ones（熟したものだけ採って）』『Put them in this bucket（このバケツに入れて）』『Be gentle with the fruit（果実は丁寧に扱って）』などが典型です。分からなければ『Sorry, could you show me?（すみません、やって見せてもらえますか）』『Like this?（こんな感じですか）』と確認すれば大丈夫です。",
      "体調や安全に関わる表現は必ず覚えておきましょう。『I don't feel well（体調が悪いです）』『I need a break / some water（休憩／水が必要です）』『I feel dizzy（めまいがします）』は、熱中症など緊急時に自分を守る言葉です。無理をせず、はっきり伝えることが安全につながります。",
      "給与確認の場面では、遠慮せずに質問することが大切です。『How much per hour / per bucket?（時給／1バケツいくらですか）』『When do I get paid?（給料日はいつですか）』『Can I have my payslip?（給与明細をもらえますか）』などを使います。賃金や条件に疑問があれば曖昧にせず確認し、必要ならFair Workに相談しましょう。言葉の壁を理由に不当な扱いを受け入れる必要はありません。",
    ],
    keyFacts: [
      { label: "応募", value: "車の有無・開始時期・時給/歩合・Payslipを確認" },
      { label: "作業指示", value: "短い命令文中心。分からなければ聞き返す" },
      { label: "体調", value: "I feel dizzy / I need a break など緊急表現" },
      { label: "給与", value: "時給/単価・給料日・Payslipを遠慮せず質問" },
      { label: "姿勢", value: "完璧な発音より、はっきり伝え聞き返すこと" },
    ],
    steps: [
      { title: "応募フレーズを準備", description: "車・開始時期・賃金形態の質問と回答を用意します。" },
      { title: "作業確認の表現を覚える", description: "『Like this?』『Could you show me?』で確認します。" },
      { title: "体調・安全の表現を覚える", description: "体調不良・休憩・水を求める短文を暗記します。" },
      { title: "給与を確認する", description: "賃率・給料日・Payslipを遠慮なく質問します。" },
    ],
    tips: [
      "聞き取れなかったら『Sorry, could you say that again?』でOK。曖昧にうなずかないことが大切です。",
      "現場は多国籍。シンプルな単語とジェスチャーで十分に伝わります。",
    ],
    phrases: [
      { en: "Are you hiring? / Do you have any work?", ja: "募集していますか？／仕事はありますか？", note: "農場に直接聞くとき" },
      { en: "Is it hourly or piece rate?", ja: "時給ですか、歩合ですか？", note: "賃金形態の確認" },
      { en: "Do you provide payslips?", ja: "給与明細は出ますか？", note: "就労前に確認したい重要質問" },
      { en: "Sorry, could you show me how?", ja: "すみません、やり方を見せてもらえますか？" },
      { en: "I feel dizzy. I need a break and some water.", ja: "めまいがします。休憩と水が必要です。", note: "熱中症など体調不良のとき" },
      { en: "How much per hour / per bucket?", ja: "時給／1バケツいくらですか？" },
      { en: "When do I get paid?", ja: "給料日はいつですか？" },
    ],
    faqs: [
      {
        question: "英語ができなくてもファームで働けますか？",
        answer:
          "働けます。ファームは作業がシンプルで、多国籍のワーカーが基本的な英語でやり取りしています。本記事のフレーズを覚え、分からないときに聞き返せれば十分に対応できます。",
      },
    ],
    sources: [
      { label: "Fair Work - Visa holders & migrants", url: "https://www.fairwork.gov.au/find-help-for/visa-holders-and-migrants" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Fair Work Ombudsman｜Visa holders & migrants（言語の壁と労働者の権利）",
        url: "https://www.fairwork.gov.au/find-help-for/visa-holders-and-migrants",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: ["farm-finding", "farm-heat-sun-safety", "piecework-vs-hourly", "farm-payslip-evidence", "farm-second-visa"],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a184",
    title: "ブルーベリーファームの仕事内容・シーズン・稼ぎ方",
    slug: "crop-blueberry",
    category: "farm",
    hub: "farm",
    priority: "P2",
    searchIntent: "ブルーベリーファームの仕事・シーズン",
    description:
      "ブルーベリー農園の仕事内容（picking・packing）、主なシーズンと産地、歩合制での稼ぎ方、体への負担と対策を解説。セカンドビザを目指す人向けに実際の働き方と注意点をまとめます。",
    content: [
      "ブルーベリーファームは、繊細な手作業のピッキング（収穫）が中心で、ワーホリに人気の作物です。結論として、熟した実を傷つけずに素早く摘むスキルが収入を左右し、歩合制（1トレイ/1kgあたり）で働くことが多いため、慣れて手が速くなるほど稼げるのが特徴です。立ち作業で腰への負担は比較的軽く、初心者でも始めやすい部類です。",
      "仕事内容は、熟した青い実だけを選んで手で摘み、トレイやバケツに入れていくピッキングが主です。実がやわらかく傷みやすいので、丁寧かつスピーディーに扱う技術が求められます。収穫後は選別・パッキング（箱詰め）の作業もあり、屋内のパッキングは天候に左右されにくい利点があります。",
      "シーズンと産地は幅広く、主要産地はニューサウスウェールズ州北部（コフスハーバー周辺）や、クイーンズランド州、タスマニア、ビクトリアなどです。品種と地域により収穫期が分散し、地域を移動すれば長い期間ブルーベリーの仕事を続けられることもあります。狙う産地の収穫時期は、シーズンカレンダーやWorkforce Australiaで確認しましょう。",
      "稼ぎ方のポイントは、歩合制で速く正確に摘むことです。園芸Award（MA000028）が適用される歩合制なら最低賃金の保証があるため、慣れないうちも一定額は守られます。それでも収入は個人差が大きいので、時給制と歩合制のどちらか、単価はいくらかを就労前に確認してください。日焼け・水分補給などの基本対策を守り、Payslipを毎回保管してセカンドビザの証拠にしましょう。",
    ],
    keyFacts: [
      { label: "主な作業", value: "手摘みのピッキング＋選別・パッキング" },
      { label: "賃金形態", value: "歩合制（トレイ/kg単価）が多い。最低保証あり" },
      { label: "主な産地", value: "NSW北部・QLD・タスマニア・ビクトリア" },
      { label: "体への負担", value: "立ち作業中心で腰負担は比較的軽め" },
      { label: "初心者", value: "始めやすい部類。スピードで収入が伸びる" },
    ],
    steps: [
      { title: "産地とシーズンを選ぶ", description: "収穫期に合う地域をカレンダーで確認します。" },
      { title: "求人に応募", description: "Harvest Trailや求人サイト、宿の紹介で探します。" },
      { title: "賃金形態を確認", description: "歩合か時給か、単価と最低保証を確認します。" },
      { title: "記録を残す", description: "Payslip・入金記録を保管しビザ証拠にします。" },
    ],
    tips: [
      "実がやわらかく傷みやすいので、丁寧さとスピードの両立が収入アップの鍵です。",
      "屋内パッキングは雨でも働けます。天候休みの多い時期の収入源に。",
    ],
    warnings: ["歩合制で単価が極端に低い、最低賃金保証がない求人には注意。就労前に条件を確認しましょう。"],
    faqs: [
      {
        question: "ブルーベリーは稼げますか？",
        answer:
          "手が速くなれば歩合制で十分稼げますが、慣れるまでは収入が伸びにくいです。園芸Award適用なら最低賃金は保証されます。時給制の農園を選べば安定します。",
      },
    ],
    sources: [
      { label: "Workforce Australia - Harvest", url: "https://www.workforceaustralia.gov.au/individuals/harvest" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Workforce Australia｜Harvest（作物・地域別の収穫求人）",
        url: "https://www.workforceaustralia.gov.au/individuals/harvest",
        accessedAt: "2026-07-19",
      },
      {
        label: "Fair Work Ombudsman｜Horticulture Award (MA000028)",
        url: "https://www.fairwork.gov.au/employment-conditions/awards/awards-summary/ma000028-summary",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: ["farm-season-calendar", "piecework-vs-hourly", "crop-strawberry", "farm-packing-shed", "farm-finding"],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a185",
    title: "いちごファームの仕事内容・シーズン・服装",
    slug: "crop-strawberry",
    category: "farm",
    hub: "farm",
    priority: "P2",
    searchIntent: "いちごファームの仕事・シーズン・服装",
    description:
      "いちご農園の仕事内容（picking・packing）、主なシーズンと産地、腰への負担と対策、適した服装を解説。セカンドビザを目指す人向けに実際の働き方と注意点をまとめます。",
    content: [
      "いちごファームは求人が多く、ワーホリの定番の一つです。結論として、地面に近い低い姿勢での手摘みが中心のため腰やひざへの負担が大きく、体力と姿勢の工夫が続けるコツになります。歩合制・時給制の両方があり、繁忙期には多くの人手が必要になるため仕事を見つけやすい作物です。",
      "仕事内容は、熟したいちごを傷つけないよう手で摘み、パックに詰めていくピッキングと、選別・パッキングです。実がとてもデリケートなので丁寧さが求められます。低い畝（うね）にかがんで作業するため、腰・ひざ・背中に負担がかかりやすく、こまめなストレッチや姿勢の切り替えが大切です。",
      "シーズンと産地は、クイーンズランド州（サンシャインコースト周辺、冬〜春）、ビクトリア州や西オーストラリア州（夏）などに分かれます。地域により収穫期がずれるため、南北を移動すれば長く働けることもあります。狙う産地の時期はシーズンカレンダーとWorkforce Australiaで確認してください。",
      "服装と対策としては、ひざ当て（膝パッド）や動きやすい作業着、日焼け対策の長袖・帽子、雨や朝露に備えた防水の靴・レインウェアが役立ちます。腰痛予防のため無理な姿勢を避け、休憩ごとに伸びをしましょう。歩合制なら最低賃金の保証を確認し、Payslipを毎回保管してビザの証拠にします。",
    ],
    keyFacts: [
      { label: "主な作業", value: "低姿勢の手摘みピッキング＋パッキング" },
      { label: "体への負担", value: "腰・ひざ・背中の負担が大きい" },
      { label: "主な産地", value: "QLD（冬〜春）・VIC・WA（夏）" },
      { label: "賃金形態", value: "歩合制・時給制の両方。求人は多い" },
      { label: "対策", value: "膝当て・こまめなストレッチ・防水の靴" },
    ],
    steps: [
      { title: "産地とシーズンを選ぶ", description: "収穫期に合う地域を確認します。" },
      { title: "求人に応募", description: "求人が多い作物。Harvest Trailや宿の紹介で探します。" },
      { title: "腰対策を準備", description: "膝当てや姿勢の工夫で負担を減らします。" },
      { title: "条件と記録を確認", description: "賃金形態を確認しPayslipを保管します。" },
    ],
    tips: [
      "腰・ひざの負担が大きい作物です。膝当てとこまめなストレッチで怪我と疲労を防ぎましょう。",
      "実がデリケートなので丁寧さが第一。焦って傷つけると評価が下がります。",
    ],
    warnings: ["長時間の中腰姿勢は腰痛の原因になります。痛みが続く場合は無理をせず作業を調整してください。"],
    faqs: [
      {
        question: "いちごの仕事は体力的にきついですか？",
        answer:
          "低い姿勢の連続で腰・ひざへの負担は大きめです。膝当てや姿勢の切り替え、ストレッチで軽減できます。体力に不安があれば立ち作業中心のパッキングや別作物も検討しましょう。",
      },
    ],
    sources: [
      { label: "Workforce Australia - Harvest", url: "https://www.workforceaustralia.gov.au/individuals/harvest" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Workforce Australia｜Harvest（作物・地域別の収穫求人）",
        url: "https://www.workforceaustralia.gov.au/individuals/harvest",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: ["farm-season-calendar", "farm-work-clothing", "crop-blueberry", "piecework-vs-hourly", "farm-finding"],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a186",
    title: "ぶどう・ワイナリーの仕事｜Picking・Pruning・Cellarの違い",
    slug: "crop-grape",
    category: "farm",
    hub: "farm",
    priority: "P2",
    searchIntent: "ぶどう・ワイナリーの仕事とセカンドビザ",
    description:
      "ぶどう農園・ワイナリーの仕事（収穫・剪定・セラー）の違いとシーズン、主な産地、そしてワイン醸造がセカンドビザ対象外になる点を解説。対象になる作業を見極めるポイントをまとめます。",
    content: [
      "ぶどうの仕事は、季節ごとに『収穫（picking）』『剪定（pruning）』『セラー（cellar／醸造補助）』と作業が変わるのが特徴です。結論として重要なのは、ぶどうの栽培・収穫・剪定はセカンドビザの対象になり得る一方、『ワインの醸造（winemaking）』は対象外という点です。どの作業をするかでビザ要件の扱いが変わるため、就労前の確認が欠かせません。",
      "作業の中身を見ると、収穫は夏〜秋（2〜4月ごろ）に熟したぶどうを摘む仕事で、機械収穫と手摘みがあります。剪定は冬（6〜8月ごろ）に枝を切りそろえる作業で、収穫期以外の貴重な仕事です。セラーワークは醸造所での仕込み補助ですが、ワイン製造工程は園芸Awardではなくワイン産業Award（MA000090）の範囲で、セカンドビザの『Specified Work』としては認められないことに注意が必要です。",
      "主な産地は、南オーストラリア州（バロッサ・リバーランド）、ビクトリア州（ミルデューラ・サンレイシア）、ニューサウスウェールズ州（グリフィス・リヴァリーナ）などです。テーブルグレープ（生食用）とワイングレープ（醸造用）で作業や地域が分かれます。剪定は冬の収入源として狙えるため、シーズンをつないで働きたい人に向いています。",
      "セカンドビザを目的にする場合は、自分の作業が『ぶどうの栽培・収穫・剪定（対象になり得る）』か『ワイン醸造（対象外）』かを雇用主に確認しましょう。加えて、作業する場所が対象ポストコードか、園芸として扱われるか（ワイン用ぶどうはWine Awardの可能性）も含めて、Home Affairsの要件で裏を取ることが大切です。Payslipと農場情報は必ず保管します。",
    ],
    keyFacts: [
      { label: "作業の種類", value: "収穫(夏〜秋)・剪定(冬)・セラー(醸造補助)" },
      { label: "ビザ対象", value: "栽培・収穫・剪定は対象になり得る" },
      { label: "ビザ対象外", value: "ワイン醸造(winemaking)は対象外" },
      { label: "主な産地", value: "SA(バロッサ)・VIC(ミルデューラ)・NSW(グリフィス)" },
      { label: "冬の仕事", value: "剪定(pruning)はオフシーズンの収入源" },
    ],
    steps: [
      { title: "作業内容を確認", description: "収穫・剪定・醸造のどれかを確認します。" },
      { title: "ビザ対象か確認", description: "醸造は対象外。栽培・収穫・剪定かを確かめます。" },
      { title: "地域を照合", description: "農場住所が対象ポストコードか確認します。" },
      { title: "記録を残す", description: "Payslipと農場情報を保管します。" },
    ],
    tips: [
      "冬の剪定(pruning)は収穫期以外の貴重な仕事。シーズンをつなぎたい人におすすめです。",
      "『ワイナリーの仕事＝すべて対象』ではありません。醸造工程は対象外なので作業内容を必ず確認を。",
    ],
    warnings: ["ワイン醸造(winemaking)はセカンドビザの対象外です。日数目的なら栽培・収穫・剪定の作業かを確認してください。"],
    faqs: [
      {
        question: "ワイナリーの仕事はセカンドビザになりますか？",
        answer:
          "ぶどうの栽培・収穫・剪定は対象になり得ますが、ワインの醸造工程は対象外です。同じワイナリーでも作業内容で扱いが変わるため、就労前に雇用主とHome Affairsの要件で確認してください。",
      },
    ],
    sources: [
      { label: "Home Affairs - Specified work", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Home Affairs｜Specified work（対象業種：栽培と醸造の区別）",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: ["specified-work-industries", "region-mildura-farm", "region-griffith-farm", "farm-season-calendar", "farm-employer-verification"],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a187",
    title: "りんご・チェリーの仕事｜シーズンと梯子作業の安全",
    slug: "crop-apple-cherry",
    category: "farm",
    hub: "farm",
    priority: "P2",
    searchIntent: "りんご・チェリーファームの仕事・シーズン",
    description:
      "りんご・チェリー農園の仕事内容（picking・packing）、主なシーズンと産地、梯子（ladder）作業の安全対策を解説。セカンドビザを目指す人向けに実際の働き方と注意点をまとめます。",
    content: [
      "りんご・チェリーは果樹（木になる果実）の収穫で、梯子（ladder）を使う作業が多いのが特徴です。結論として、木の高い位置の実を摘むために梯子の昇り降りが多く、安全に扱う注意と体力が必要です。歩合制・時給制の両方があり、収穫期には多くの人手が求められます。チェリーは特にデリケートで丁寧さが重視されます。",
      "仕事内容は、収穫バッグを肩から下げて熟した実を摘み、木の下のビンやトレイに移すピッキングが中心です。りんごは比較的丈夫ですが、チェリーは軸を残して傷つけずに摘む繊細さが求められます。収穫後の選別・パッキングもあり、屋内作業は天候に左右されにくい利点があります。",
      "シーズンと産地は、りんごが秋（3〜5月ごろ）、チェリーが夏（11〜1月ごろ）で、産地はタスマニア、ビクトリア州（グーバーン渓谷・シェパートン）、ニューサウスウェールズ州、南オーストラリア州（アデレードヒルズ）、クイーンズランド州スタンソープなどです。チェリーはクリスマス前後の短期集中の需要があり、稼ぎやすい一方で期間が限られます。",
      "安全面では、梯子作業の転落に注意が必要です。梯子は安定した地面に立て、上りすぎず、両手がふさがる無理な姿勢を避けます。滑りにくい靴を履き、雨後のぬかるみでは特に慎重に。日焼け・水分補給の基本対策も守りましょう。歩合制なら最低賃金の保証を確認し、Payslipを保管してビザの証拠にします。",
    ],
    keyFacts: [
      { label: "主な作業", value: "梯子を使う果樹の手摘み＋パッキング" },
      { label: "シーズン", value: "りんご=秋、チェリー=夏(クリスマス前後)" },
      { label: "主な産地", value: "タスマニア・VIC・NSW・SA・QLDスタンソープ" },
      { label: "安全", value: "梯子の転落注意。滑りにくい靴と安定設置" },
      { label: "チェリー", value: "短期集中で稼ぎやすいが期間限定" },
    ],
    steps: [
      { title: "作物とシーズンを選ぶ", description: "りんご(秋)かチェリー(夏)か、産地を選びます。" },
      { title: "求人に応募", description: "収穫期の需要に合わせて早めに応募します。" },
      { title: "梯子作業に備える", description: "滑りにくい靴と安全な梯子の使い方を確認します。" },
      { title: "条件と記録を確認", description: "賃金形態を確認しPayslipを保管します。" },
    ],
    tips: [
      "チェリーはクリスマス前後の短期集中。稼ぎやすいですが期間が限られるので次の仕事も計画を。",
      "梯子作業は転落が最大のリスク。無理に手を伸ばさず、梯子を動かして安全に摘みましょう。",
    ],
    warnings: ["梯子からの転落は重大事故につながります。安定した設置と滑りにくい靴を徹底してください。"],
    faqs: [
      {
        question: "チェリーの仕事はいつありますか？",
        answer:
          "主に夏（11〜1月ごろ）で、クリスマス〜年末年始に収穫のピークを迎えます。タスマニアやビクトリアが主要産地です。短期集中なので、前後のシーズンの仕事もあわせて計画しましょう。",
      },
    ],
    sources: [
      { label: "Workforce Australia - Harvest", url: "https://www.workforceaustralia.gov.au/individuals/harvest" },
      { label: "Safe Work Australia - Falls", url: "https://www.safeworkaustralia.gov.au/safety-topic/hazards/falls" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Workforce Australia｜Harvest（作物・地域別の収穫求人）",
        url: "https://www.workforceaustralia.gov.au/individuals/harvest",
        accessedAt: "2026-07-19",
      },
      {
        label: "Safe Work Australia｜Falls（高所・梯子作業の安全）",
        url: "https://www.safeworkaustralia.gov.au/safety-topic/hazards/falls",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: ["farm-season-calendar", "region-stanthorpe-farm", "region-tasmania-farm", "region-shepparton-farm", "farm-finding"],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a188",
    title: "オレンジ・マンダリンなど柑橘ファームの仕事",
    slug: "crop-citrus",
    category: "farm",
    hub: "farm",
    priority: "P3",
    searchIntent: "柑橘(オレンジ・マンダリン)ファームの仕事",
    description:
      "柑橘（オレンジ・マンダリン・レモン）農園の仕事内容（picking・packing）、主なシーズンと産地、重量物を扱う体への負担と対策を解説。セカンドビザを目指す人向けにまとめます。",
    content: [
      "柑橘（オレンジ・マンダリン・レモンなど）の収穫は、冬を中心にまとまった求人が出る作物です。結論として、収穫バッグに実をため込むため肩や腰にかかる重量が大きく、体力を要する反面、歩合制で数をこなせば稼ぎやすいのが特徴です。冬の収入源として狙える点も、シーズンをつなぎたい人に魅力です。",
      "仕事内容は、収穫バッグを肩から下げ、熟した柑橘をハサミまたは手で摘み、いっぱいになったらビンに移すピッキングが中心です。実が重く、満杯のバッグはかなりの重量になるため、腰を痛めないよう持ち上げ方に注意します。木が高い場合は梯子作業も伴います。収穫後の選別・パッキングもあります。",
      "シーズンと産地は、主に冬〜春（6〜10月ごろ）で、産地はニューサウスウェールズ州（グリフィス・リヴァリーナ）、ビクトリア州（ミルデューラ・サンレイシア）、南オーストラリア州（リバーランド）、クイーンズランド州などです。オレンジやマンダリンは種類によって収穫期がずれるため、地域と品種を選べば長めに働けることもあります。",
      "体への負担対策として、重いバッグは無理に持ち上げず腰を落として扱い、こまめに休憩します。ハサミを使う場合は手袋で手を保護します。冬でも日中は日差しが強いので日焼け対策と水分補給を忘れずに。歩合制なら最低賃金の保証を確認し、Payslipを保管してビザの証拠にしましょう。",
    ],
    keyFacts: [
      { label: "主な作業", value: "収穫バッグでの手摘み＋選別・パッキング" },
      { label: "体への負担", value: "満杯のバッグが重く肩・腰に負担" },
      { label: "シーズン", value: "冬〜春(6〜10月ごろ)。冬の収入源に" },
      { label: "主な産地", value: "NSW(グリフィス)・VIC(ミルデューラ)・SA(リバーランド)" },
      { label: "対策", value: "持ち上げ方の工夫・手袋・水分補給" },
    ],
    steps: [
      { title: "産地とシーズンを選ぶ", description: "冬の収穫期に合う地域を選びます。" },
      { title: "求人に応募", description: "Harvest Trailや求人サイトで探します。" },
      { title: "体を守る準備", description: "腰の使い方・手袋・水分補給を意識します。" },
      { title: "条件と記録を確認", description: "賃金形態を確認しPayslipを保管します。" },
    ],
    tips: [
      "満杯の収穫バッグは重いです。腰ではなく脚で支え、こまめに移し替えて負担を減らしましょう。",
      "冬でも日差しは強め。日焼け・水分対策は柑橘でも必須です。",
    ],
    warnings: ["重量物の扱いで腰を痛めやすい作物です。無理な持ち上げは避け、痛みが出たら作業を調整してください。"],
    faqs: [
      {
        question: "柑橘の仕事は冬でもありますか？",
        answer:
          "むしろ冬〜春が収穫の中心です。ぶどうやベリーが少ない時期の貴重な収入源になります。グリフィスやミルデューラ、リバーランドが主要産地です。",
      },
    ],
    sources: [
      { label: "Workforce Australia - Harvest", url: "https://www.workforceaustralia.gov.au/individuals/harvest" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Workforce Australia｜Harvest（作物・地域別の収穫求人）",
        url: "https://www.workforceaustralia.gov.au/individuals/harvest",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: ["farm-season-calendar", "region-mildura-farm", "region-griffith-farm", "piecework-vs-hourly", "farm-finding"],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a189",
    title: "マンゴー・バナナファームの仕事と注意点｜熱帯地域の暑さ対策",
    slug: "crop-mango-banana",
    category: "farm",
    hub: "farm",
    priority: "P2",
    searchIntent: "マンゴー・バナナファームの仕事・注意点",
    description:
      "マンゴー・バナナ農園の仕事内容とシーズン、熱帯地域（クイーンズランド北部・NT）特有の暑さと樹液・かぶれへの対策を解説。セカンドビザを目指す人向けに実際の働き方と注意点をまとめます。",
    content: [
      "マンゴー・バナナは、クイーンズランド州北部やノーザンテリトリーなど熱帯地域で栽培される作物で、暑さ対策が最重要のファームです。結論として、高温多湿の環境での重労働に加え、マンゴーの樹液（sap）による肌のかぶれに注意が必要です。過酷な分、繁忙期は稼ぎやすく、熱帯地域での貴重な仕事でもあります。",
      "マンゴーの仕事は、収穫（長い棒や手で摘む）、選別、パッキングが中心で、収穫期は主に乾季の終わり〜夏（9〜1月ごろ、地域差あり）です。注意すべきはマンゴーの樹液で、肌に付くとかぶれ・炎症を起こすことがあります。長袖・手袋・保護で肌を守り、付着したらすぐ洗い流します。バナナは通年に近く収穫・下処理・パッキングがあり、房が非常に重いため運搬時の体の使い方が重要です。",
      "産地は、クイーンズランド州のマリーバ・アサートン高原、ボーエン、バーデキン、ノーザンテリトリーのダーウィン周辺などです。これらの熱帯地域は乾季（冬）が農作業の最盛期で、雨季（夏）は高温多湿でさらに過酷になります。暑さに弱い人は時期と地域を慎重に選びましょう。",
      "暑さ対策は命に関わります。大量の水分と塩分・電解質の補給、日陰での休憩、早朝作業、通気性のよい長袖・帽子が必須です。熱中症の初期症状（めまい・頭痛・吐き気）が出たらすぐ作業を中止してください。マンゴーの樹液対策として肌の露出を減らし、体調不良は無理せず報告を。歩合制なら最低賃金の保証を確認し、Payslipを保管します。",
    ],
    keyFacts: [
      { label: "主な作業", value: "収穫・選別・パッキング（房が重い運搬も）" },
      { label: "地域", value: "熱帯（QLD北部・NT）。乾季の冬が最盛期" },
      { label: "マンゴー注意", value: "樹液(sap)で肌がかぶれる。肌の露出を減らす" },
      { label: "最重要", value: "高温多湿の暑さ対策（水分・塩分・日陰）" },
      { label: "稼ぎ", value: "過酷な分、繁忙期は稼ぎやすい" },
    ],
    steps: [
      { title: "時期と地域を選ぶ", description: "乾季の収穫期に合わせ、熱帯地域を選びます。" },
      { title: "暑さ対策を万全に", description: "水分・塩分・日陰・早朝作業を徹底します。" },
      { title: "樹液対策をする", description: "マンゴーは長袖・手袋で肌を守り、付着は即洗浄します。" },
      { title: "条件と記録を確認", description: "賃金形態を確認しPayslipを保管します。" },
    ],
    tips: [
      "熱帯の暑さは想像以上。水分・塩分をこまめに補給し、早朝スタートの農場を選ぶと体が楽です。",
      "マンゴーの樹液は肌トラブルの原因。肌を覆い、付いたらすぐ洗い流しましょう。",
    ],
    warnings: [
      "高温多湿での重労働は熱中症リスクが高いです。異変を感じたら即中止し、重症は000へ。",
      "マンゴーの樹液でかぶれる人がいます。肌の保護と洗浄を徹底してください。",
    ],
    faqs: [
      {
        question: "暑さが苦手でもマンゴー・バナナで働けますか？",
        answer:
          "熱帯地域の重労働なので暑さに弱い人にはきつい作物です。乾季（冬）を選ぶ、早朝作業の農場にする、水分・塩分補給を徹底するなどで軽減できますが、無理は禁物です。",
      },
    ],
    sources: [
      { label: "Safe Work Australia - Heat", url: "https://www.safeworkaustralia.gov.au/safety-topic/hazards/heat" },
      { label: "Workforce Australia - Harvest", url: "https://www.workforceaustralia.gov.au/individuals/harvest" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Safe Work Australia｜Heat（熱帯・暑熱環境の作業安全）",
        url: "https://www.safeworkaustralia.gov.au/safety-topic/hazards/heat",
        accessedAt: "2026-07-19",
      },
      {
        label: "Workforce Australia｜Harvest（作物・地域別の収穫求人）",
        url: "https://www.workforceaustralia.gov.au/individuals/harvest",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: ["farm-heat-sun-safety", "region-mareeba-atherton-farm", "region-bowen-ayr-farm", "farm-season-calendar", "farm-finding"],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a190",
    title: "アボカドファームの仕事内容とシーズン",
    slug: "crop-avocado",
    category: "farm",
    hub: "farm",
    priority: "P3",
    searchIntent: "アボカドファームの仕事・シーズン",
    description:
      "アボカド農園の仕事内容（picking・packing）、主なシーズンと産地、梯子作業と重量物の扱いを解説。セカンドビザを目指す人向けに実際の働き方と注意点をまとめます。",
    content: [
      "アボカドは近年生産が伸びている果樹で、収穫・パッキングの求人があります。結論として、木が高く梯子や収穫ポールを使う作業が多く、実がやや重いため体力を要しますが、産地が各地に分散し季節も長いため仕事を見つけやすい作物です。歩合制・時給制の両方があります。",
      "仕事内容は、専用のポール（長い棒の先にカゴが付いた道具）や梯子を使って高い位置の実を収穫し、傷つけないようビンに移すピッキングが中心です。アボカドは傷みやすく見た目が重視されるため、丁寧な扱いが求められます。収穫後は選別・箱詰めのパッキングもあり、屋内作業は天候に左右されにくい利点があります。",
      "シーズンと産地は品種と地域で幅広く、クイーンズランド州（アサートン高原・バンダバーグ周辺）、西オーストラリア州、ニューサウスウェールズ州北部などが主要産地です。品種により収穫期がずれるため、地域を移動すれば長い期間アボカドの仕事を続けられることもあります。狙う産地の時期はカレンダーで確認しましょう。",
      "安全面では梯子・ポール作業に注意します。頭上の実を扱うため落下物に気をつけ、梯子は安定して設置します。重い実やカゴの運搬では腰を守る動きを意識します。日焼け・水分補給の基本対策も忘れずに。歩合制なら最低賃金の保証を確認し、Payslipを保管してビザの証拠にします。",
    ],
    keyFacts: [
      { label: "主な作業", value: "ポール・梯子での収穫＋選別・パッキング" },
      { label: "体への負担", value: "高所作業と重量物。腰・肩に負担" },
      { label: "主な産地", value: "QLD(アサートン高原)・WA・NSW北部" },
      { label: "シーズン", value: "品種・地域で分散し比較的長い" },
      { label: "安全", value: "梯子の設置と落下物に注意" },
    ],
    steps: [
      { title: "産地とシーズンを選ぶ", description: "品種・地域で収穫期を確認します。" },
      { title: "求人に応募", description: "Harvest Trailや求人サイトで探します。" },
      { title: "高所作業に備える", description: "梯子・ポールの安全な扱いを確認します。" },
      { title: "条件と記録を確認", description: "賃金形態を確認しPayslipを保管します。" },
    ],
    tips: [
      "アボカドは見た目が重視される作物。傷つけない丁寧な収穫が評価につながります。",
      "ポールや梯子での頭上作業は落下物に注意。帽子とこまめな確認で怪我を防ぎましょう。",
    ],
    warnings: ["高所・頭上作業は転落や落下物のリスクがあります。梯子の安定設置と周囲確認を徹底してください。"],
    faqs: [
      {
        question: "アボカドの仕事は経験が必要ですか？",
        answer:
          "未経験から始められます。ポールや梯子の使い方は現場で教わります。丁寧に扱うことと、高所作業の安全を守ることが大切です。",
      },
    ],
    sources: [
      { label: "Workforce Australia - Harvest", url: "https://www.workforceaustralia.gov.au/individuals/harvest" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Workforce Australia｜Harvest（作物・地域別の収穫求人）",
        url: "https://www.workforceaustralia.gov.au/individuals/harvest",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: ["farm-season-calendar", "region-mareeba-atherton-farm", "region-bundaberg-farm", "crop-apple-cherry", "farm-finding"],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a191",
    title: "トマト・カプシカムの仕事｜温室・屋外・Packingの違い",
    slug: "crop-tomato-capsicum",
    category: "farm",
    hub: "farm",
    priority: "P3",
    searchIntent: "トマト・カプシカムファームの仕事",
    description:
      "トマト・カプシカム（ピーマン）農園の仕事内容とシーズン、温室（glasshouse）と屋外の違い、暑さ対策を解説。セカンドビザを目指す人向けに実際の働き方と注意点をまとめます。",
    content: [
      "トマト・カプシカム（ピーマン類）は通年で需要があり、求人が安定している野菜です。結論として、屋外の畑と温室（glasshouse／ハウス栽培）で働き方が異なり、温室は天候に左右されにくい代わりに内部が高温になりやすい点が特徴です。収穫・選別・パッキングが中心で、初心者でも始めやすい作物です。",
      "仕事内容は、熟した実を手で摘むピッキング、選別、パッキングが中心です。屋外の畑ではかがむ・立つの繰り返しで腰に負担がかかり、温室では吊り下げ栽培のトマトを立って収穫することが多く姿勢は比較的楽ですが、内部の暑さ・湿気がこたえます。カプシカムは実がしっかりしていて扱いやすい部類です。",
      "シーズンと産地は、通年〜季節ごとに各地で栽培され、クイーンズランド州（バンダバーグ、ボーエン＝冬の一大産地）、ビクトリア州、南オーストラリア州などが主要産地です。ボーエンは冬のトマト産地として有名で、寒い時期の貴重な収入源になります。温室栽培は季節を問わず稼働することが多く、通年の仕事を探す人に向いています。",
      "対策として、屋外は日焼け・水分補給、温室は熱と湿気への対策（水分・休憩・通気）が重要です。腰の負担を減らす姿勢の工夫もしましょう。歩合制・時給制のどちらか、単価と最低賃金保証を就労前に確認し、Payslipを毎回保管してビザの証拠にします。",
    ],
    keyFacts: [
      { label: "主な作業", value: "手摘みのピッキング＋選別・パッキング" },
      { label: "働く場所", value: "屋外の畑と温室(glasshouse)で環境が違う" },
      { label: "温室", value: "天候に強いが内部が高温・多湿になりやすい" },
      { label: "主な産地", value: "QLD(バンダバーグ・ボーエン)・VIC・SA" },
      { label: "通年性", value: "需要が安定。温室は季節を問わず稼働" },
    ],
    steps: [
      { title: "屋外か温室か確認", description: "働く環境で暑さ・姿勢の対策が変わります。" },
      { title: "求人に応募", description: "通年需要の作物。求人サイトや宿の紹介で探します。" },
      { title: "環境に合わせ対策", description: "屋外は日焼け、温室は熱・湿気対策をします。" },
      { title: "条件と記録を確認", description: "賃金形態を確認しPayslipを保管します。" },
    ],
    tips: [
      "温室は雨でも働ける反面、内部が蒸し暑いです。水分補給と休憩をこまめに。",
      "ボーエンは冬のトマト産地。寒い時期に仕事を探すなら候補になります。",
    ],
    warnings: ["温室内は高温多湿になりやすく熱中症のリスクがあります。水分・休憩を怠らないでください。"],
    faqs: [
      {
        question: "トマトの仕事は年中ありますか？",
        answer:
          "産地を移動すれば通年に近く見つかります。冬はクイーンズランド州ボーエン、他の季節は各地の畑や温室栽培で需要があります。温室は季節を問わず稼働することが多いです。",
      },
    ],
    sources: [
      { label: "Workforce Australia - Harvest", url: "https://www.workforceaustralia.gov.au/individuals/harvest" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Workforce Australia｜Harvest（作物・地域別の収穫求人）",
        url: "https://www.workforceaustralia.gov.au/individuals/harvest",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: ["farm-season-calendar", "region-bundaberg-farm", "region-bowen-ayr-farm", "farm-packing-shed", "farm-finding"],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a192",
    title: "ブロッコリー・ブロッコリーニの仕事｜Picking・Bunching・Packing",
    slug: "crop-broccoli-broccolini",
    category: "farm",
    hub: "farm",
    priority: "P1",
    searchIntent: "ブロッコリー・ブロッコリーニの仕事",
    description:
      "ブロッコリー・ブロッコリーニ農園の仕事内容（収穫・結束・パッキング）とシーズン、冷涼な早朝作業や体への負担を解説。セカンドビザを目指す人向けに実際の働き方と注意点をまとめます。",
    content: [
      "ブロッコリー・ブロッコリーニは、収穫（cutting）・結束（bunching）・パッキングという野菜特有の工程がある作物です。結論として、ナイフで株を切り、束ねて箱詰めするまでの一連の作業が中心で、かがむ姿勢と早朝の冷え込みへの対策がポイントになります。通年に近く各地で栽培され、求人が安定しているのが魅力です。",
      "仕事内容は、畑で適期の株をナイフで切り取り（収穫）、ブロッコリーニは複数本を輪ゴムなどで束ねる結束（bunching）を行い、コンテナに入れて運び、パッキングシェッドで選別・箱詰めします。低い位置での作業が多く腰への負担があり、刃物を使うため手の保護と注意が必要です。トラクターに乗って移動しながら畑で収穫・箱詰めまで行う流れ作業のスタイルもあります。",
      "シーズンと産地は、涼しい気候を好むため、地域をずらせば通年に近く栽培されます。主な産地はビクトリア州、クイーンズランド州（ガトン／ロッキヤーバレー、スタンソープ）、南オーストラリア州、西オーストラリア州などです。野菜は果物ほど季節が極端でないため、通年で仕事を探したい人に向いています。",
      "対策として、早朝スタートが多く朝は冷え込むため、防寒の重ね着と、日が昇ってからの暑さ対策の両方を用意します。ナイフ作業では手袋で手を守り、無理な姿勢を避けて腰をいたわります。歩合制・時給制のどちらか、条件を就労前に確認し、Payslipを保管してビザの証拠にします。野菜作業は天候の影響が果樹より小さく、安定して日数を積みやすいのも利点です。",
    ],
    keyFacts: [
      { label: "主な作業", value: "ナイフでの収穫・結束(bunching)・パッキング" },
      { label: "体への負担", value: "かがむ姿勢と刃物作業。腰と手に注意" },
      { label: "シーズン", value: "涼しい気候を好み通年に近い" },
      { label: "主な産地", value: "VIC・QLD(ガトン/スタンソープ)・SA・WA" },
      { label: "利点", value: "天候の影響が果樹より小さく日数を積みやすい" },
    ],
    steps: [
      { title: "産地を選ぶ", description: "通年栽培。ガトンなど野菜の一大産地を狙います。" },
      { title: "求人に応募", description: "求人サイト・宿の紹介・Harvest Trailで探します。" },
      { title: "早朝と刃物に備える", description: "防寒＋暑さ対策と手袋を用意します。" },
      { title: "条件と記録を確認", description: "賃金形態を確認しPayslipを保管します。" },
    ],
    tips: [
      "早朝は冷え、日中は暑くなります。脱ぎ着しやすい重ね着で温度変化に対応しましょう。",
      "野菜は天候の影響が果物より小さめ。安定して日数を積みたい人に向いています。",
    ],
    warnings: ["収穫はナイフを使います。手袋で手を保護し、刃物の扱いに注意してください。"],
    faqs: [
      {
        question: "ブロッコリーの仕事はきついですか？",
        answer:
          "かがむ姿勢と刃物作業、早朝の冷え込みがある一方、天候に左右されにくく通年で仕事があるのが利点です。防寒・手袋・姿勢の工夫で負担を減らせます。",
      },
    ],
    sources: [
      { label: "Workforce Australia - Harvest", url: "https://www.workforceaustralia.gov.au/individuals/harvest" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Workforce Australia｜Harvest（作物・地域別の収穫求人）",
        url: "https://www.workforceaustralia.gov.au/individuals/harvest",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: ["farm-season-calendar", "region-gatton-lockyer", "farm-packing-shed", "piecework-vs-hourly", "farm-finding"],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a193",
    title: "Packing Shedの仕事｜選別・包装・品質管理とPickingとの違い",
    slug: "farm-packing-shed",
    category: "farm",
    hub: "farm",
    priority: "P1",
    searchIntent: "パッキングシェッド(選別・包装)の仕事",
    description:
      "屋内のPacking Shed（選別・包装）の仕事内容、Pickingとの違い、天候に強い利点、立ち仕事の負担、セカンドビザ対象になるかを解説。屋外の収穫以外を希望する人向けにまとめます。",
    content: [
      "Packing Shed（パッキングシェッド）は、収穫した農作物を選別・包装・箱詰めする屋内作業の職場です。結論として、屋外のPicking（収穫）に比べて天候に左右されにくく、日焼けや酷暑を避けられるのが最大の利点です。立ち仕事や単純作業の反復という別の負担はありますが、屋外作業が苦手な人や、雨季に安定して働きたい人に向いています。",
      "仕事内容は、ベルトコンベアで流れてくる果物・野菜の選別（傷んだものを除く）、サイズ・品質での仕分け（grading）、パック詰め・箱詰め（packing）、ラベル貼りやパレット積みなどです。作業自体は難しくありませんが、長時間立ちっぱなしで同じ動きを繰り返すため、足腰の疲労や単調さがつきものです。衛生管理のため、指定の服装・帽子・手袋の着用を求められることがあります。",
      "Pickingとの違いを整理すると、Pickingは屋外・天候依存・体力勝負で歩合制も多いのに対し、Packingは屋内・天候に強い・立ち仕事で時給制が比較的多い傾向です。収穫のピークに合わせてパッキングの人手も必要になるため、収穫地域では両方の求人が出ます。屋外がつらい日はパッキング、というように組み合わせる人もいます。",
      "セカンドビザの対象については、農作物の収穫後の一次的な選別・包装は対象業種に含まれ得ますが、二次加工や小売に近い作業は対象外になる場合があります。自分の作業が対象になるか、農場の住所が対象ポストコードかを、Home Affairsの要件と雇用主への確認で裏取りしてください。Payslipと農場情報を保管し、雨で収穫が止まっても稼げる屋内作業を上手に活用しましょう。",
    ],
    keyFacts: [
      { label: "仕事内容", value: "選別・仕分け(grading)・箱詰め(packing)・積載" },
      { label: "利点", value: "屋内で天候に強い。日焼け・酷暑を避けられる" },
      { label: "負担", value: "長時間の立ち仕事・単調な反復作業" },
      { label: "賃金", value: "時給制が比較的多い傾向" },
      { label: "ビザ", value: "収穫後の一次選別・包装は対象になり得る（要確認）" },
    ],
    steps: [
      { title: "収穫地域で求人を探す", description: "収穫期のパッキング需要に合わせて応募します。" },
      { title: "作業環境を確認", description: "立ち仕事・シフト・衛生服装を確認します。" },
      { title: "ビザ対象か確認", description: "作業内容と農場住所が対象要件か確かめます。" },
      { title: "記録を残す", description: "Payslipと農場情報を保管します。" },
    ],
    tips: [
      "雨で収穫が止まってもパッキングは動くことが多いです。天候休みの収入源に有効です。",
      "長時間の立ち仕事対策に、クッション性のある靴と休憩中のストレッチを。",
    ],
    warnings: ["二次加工や小売に近い作業はセカンドビザ対象外になる場合があります。作業内容を必ず確認してください。"],
    faqs: [
      {
        question: "パッキングだけでもセカンドビザになりますか？",
        answer:
          "収穫した農作物の一次的な選別・包装は対象業種に含まれ得ます。ただし作業内容と場所（対象ポストコード）が要件を満たす必要があります。雇用主とHome Affairsの要件で確認してください。",
      },
    ],
    sources: [
      { label: "Home Affairs - Specified work", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Home Affairs｜Specified work（収穫後作業の対象範囲）",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: ["farm-weather-no-work", "specified-work-industries", "farm-finding", "crop-broccoli-broccolini", "farm-second-visa"],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a194",
    title: "食肉加工の仕事とSpecified Workの確認ポイント",
    slug: "meat-processing-specified-work",
    category: "farm",
    hub: "farm",
    priority: "P2",
    searchIntent: "食肉加工(meat processing)とセカンドビザ",
    description:
      "食肉加工（meatworks）の仕事内容と、どの作業がセカンドビザのSpecified Workになるかを解説。寒い環境・安全対策、対象地域の確認、対象外になり得る二次加工との違いをまとめます。",
    content: [
      "食肉加工（meatworks／abattoir）は、地方で通年の求人があり比較的高収入なことから、セカンドビザを狙うワーホリの選択肢になります。結論として重要なのは、『動物の一次的な処理（食肉処理・剪毛・解体・皮なめし・パッキングなど）』は対象業種に含まれ得る一方、ソーセージなど加工食品（smallgoods）の製造といった二次加工は対象外になり得る点です。作業内容の確認が欠かせません。",
      "仕事内容は、食肉処理場でのライン作業（解体・部位分け・トリミング・パッキング）が中心です。刃物と機械を使い、冷蔵された寒い環境で立ち続ける重労働で、体力と安全意識が求められます。未経験から始められる職場もありますが、衛生・安全の研修と保護具（防刃手袋・エプロン・長靴など）の着用が前提です。",
      "セカンドビザの観点では、Home Affairsは動物生産物の即時的な処理（immediate processing of animal products）を対象業種の一部として挙げています。これには食肉処理・剪毛（shearing）・解体（butchery）・パッキング・皮なめし（tanning）などが含まれ得ます。一方、加工肉（ソーセージ等smallgoods）の製造や小売向けの精肉は対象外とされることがあるため、自分のラインがどちらかを確認してください。",
      "確認と対策のポイントは、①作業内容が対象の一次処理か、②工場の所在地が対象ポストコードか、③雇用主のABN・Payslip・銀行振込があるか、の3点です。加えて、寒さ対策の防寒着、刃物・機械の安全研修、疲労管理が重要です。作業内容の判断に迷う場合はHome Affairsの要件で裏を取り、Payslipと雇用情報を必ず保管しましょう。",
    ],
    keyFacts: [
      { label: "仕事内容", value: "食肉処理場のライン作業（解体・部位分け・パッキング）" },
      { label: "環境", value: "冷蔵の寒い環境・刃物と機械・立ち仕事の重労働" },
      { label: "ビザ対象", value: "動物生産物の即時処理(食肉処理・剪毛・解体等)は対象になり得る" },
      { label: "対象外の例", value: "加工肉(smallgoods)製造など二次加工は対象外になり得る" },
      { label: "確認", value: "作業内容・所在地(ポストコード)・Payslipを確認" },
    ],
    steps: [
      { title: "作業内容を確認", description: "一次処理か二次加工かを雇用主に確認します。" },
      { title: "所在地を照合", description: "工場が対象ポストコードか確認します。" },
      { title: "安全研修と装備", description: "防刃手袋・防寒着・安全研修を確認します。" },
      { title: "記録を残す", description: "Payslipと雇用情報を保管します。" },
    ],
    tips: [
      "冷蔵環境の立ち仕事です。防寒対策と体調管理をしっかりと。",
      "刃物・機械を扱うため安全研修は必ず受け、保護具を正しく着用しましょう。",
    ],
    warnings: ["加工肉(smallgoods)製造など二次加工はセカンドビザ対象外になり得ます。自分のラインの作業内容を必ず確認してください。"],
    faqs: [
      {
        question: "ミートワークスはセカンドビザになりますか？",
        answer:
          "動物生産物の即時的な処理（食肉処理・解体・剪毛・パッキング等）は対象業種に含まれ得ます。一方、加工食品の製造は対象外になり得ます。作業内容と場所をHome Affairsの要件で確認してください。",
      },
    ],
    sources: [
      { label: "Home Affairs - Specified work", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Home Affairs｜Specified work（動物生産物処理の対象範囲）",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: ["specified-work-industries", "specified-work-postcodes", "farm-employer-verification", "farm-payslip-evidence", "second-visa-guide"],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a195",
    title: "建設業でセカンドビザを狙う場合の条件｜対象地域・仕事内容・証拠",
    slug: "construction-specified-work",
    category: "farm",
    hub: "farm",
    priority: "P1",
    searchIntent: "建設業でセカンドビザを取る条件",
    description:
      "建設業（construction）でセカンドビザのSpecified Workを満たす条件を解説。対象となる作業、指定地域（ポストコード）、White Cardなどの資格、Payslip等の証拠、農業以外で日数を貯める選択肢としての注意点をまとめます。",
    content: [
      "セカンドビザの対象労働は農業だけではありません。結論として、建設業（construction）も指定地域で行えばSpecified Workとして認められ得るため、ファームが体力的に合わない人や、より安定した収入を求める人の選択肢になります。ただし『対象地域で』『対象となる建設作業を』行い、Payslip等で証明できることが前提です。",
      "対象となる作業は、住宅・商業・産業用の建物や、道路・橋などのインフラの建設に関わる幅広い労働が含まれ得ます。現場作業員（labourer）、大工、電気・配管、塗装、解体、土木など、建設プロジェクトに直接関わる仕事が該当し得ます。一方、建設に直接関係しない事務や、対象地域外での作業は日数になりません。",
      "地域要件は農業と同じく『指定ポストコード（regional Australia）』です。都市部の建設現場は対象外で、地方の現場が対象になります。作業する現場の住所が対象ポストコードかを必ず確認してください。加えて、建設現場ではWhite Card（建設業安全資格）が必須なことが多く、就労前に取得しておく必要があります。",
      "証拠は農業と共通で、Payslip・銀行入金記録・雇用主情報（ABN・現場住所）・勤務記録が重要です。建設は日給・時給が農業より高いこともあり、効率よく88日を貯めやすい面がありますが、求人は経験や資格が問われることもあります。作業内容が対象か、現場が対象地域か、雇用が正規かをHome AffairsとFair Workの情報で確認し、記録を保管しましょう。",
    ],
    keyFacts: [
      { label: "対象", value: "指定地域での建設・インフラ工事の労働" },
      { label: "地域要件", value: "農業と同じ指定ポストコード(regional)" },
      { label: "必須資格", value: "White Card(建設業安全資格)が必要なことが多い" },
      { label: "対象外", value: "都市部の現場・建設に直接関係しない作業" },
      { label: "証拠", value: "Payslip・入金記録・ABN・現場住所・勤務記録" },
    ],
    steps: [
      { title: "White Cardを取得", description: "建設現場で働くための安全資格を先に取ります。" },
      { title: "対象地域の求人を探す", description: "指定ポストコードの地方の現場を探します。" },
      { title: "作業内容を確認", description: "対象となる建設労働かを確認します。" },
      { title: "記録を残す", description: "Payslipと現場住所・雇用情報を保管します。" },
    ],
    tips: [
      "建設は農業より時給・日給が高いこともあり、効率よく88日を貯めやすい面があります。",
      "White Cardはオンライン等で取得可能。建設で働くなら早めに用意しましょう。",
    ],
    warnings: ["都市部の現場や建設に直接関係しない作業は日数になりません。現場住所が対象ポストコードか必ず確認してください。"],
    faqs: [
      {
        question: "未経験でも建設でセカンドビザを取れますか？",
        answer:
          "labourer（作業補助）など未経験可の求人もありますが、White Cardは必須です。対象地域の現場で、対象となる建設労働をし、Payslipで証明できることが条件です。求人によっては経験や体力が求められます。",
      },
    ],
    sources: [
      { label: "Home Affairs - Specified work", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work" },
      { label: "White Card情報(Safe Work)", url: "https://www.safeworkaustralia.gov.au/" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Home Affairs｜Specified work（建設業の対象要件）",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: ["specified-work-industries", "specified-work-postcodes", "white-card-guide", "farm-payslip-evidence", "second-visa-guide"],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a196",
    title: "災害復旧作業でSpecified Workになる条件｜宣言地域・期間・対象作業",
    slug: "disaster-recovery-specified-work",
    category: "farm",
    hub: "farm",
    priority: "P2",
    searchIntent: "災害復旧作業でセカンドビザを取る条件",
    description:
      "自然災害（洪水・サイクロン）や山火事の復旧作業がセカンドビザのSpecified Workになる条件を解説。宣言された地域・期間、有給/ボランティアの扱い、対象作業と証拠の残し方をHome Affairsの要件でまとめます。",
    content: [
      "山火事や洪水・サイクロンなどの復旧作業も、条件を満たせばセカンドビザのSpecified Workとして認められます。結論として重要なのは、『政府が宣言した対象地域で』『定められた期間内に』『対象となる復旧作業を』行うことです。災害復旧は有給・ボランティアのいずれでもカウントされ得る点が、他の業種と異なる特徴です。ただし条件が細かいので公式確認が必須です。",
      "対象となる災害には、山火事（bushfire）と自然災害（洪水・サイクロン等）の復旧があります。山火事復旧は、2019年7月31日以降に一定の宣言された地域での作業が対象とされてきました。洪水・サイクロンなどの自然災害復旧は、より新しい枠組みで、特定の日付以降に発生した災害の宣言地域での作業が対象とされ、申請の時期にも条件が設けられています。適用の詳細は年により更新されるため、必ず最新のHome Affairs情報を確認してください。",
      "対象作業は、被災した地域・施設・農地などの復旧に関わる労働で、清掃・撤去・再建・農地の復旧補助などが含まれ得ます。重要なのは、対象として宣言された地域と期間の範囲内であることです。宣言外の地域や期間を過ぎた作業はカウントされません。有給の仕事でもボランティア活動でも対象になり得るのが、この業種の大きな特徴です。",
      "証拠については、有給ならPayslipや雇用主の証明、ボランティアなら活動を証明する団体・組織の書類（活動日・場所・内容の記録）が必要です。宣言地域・期間内の作業であることを示せるよう、活動場所・日付の記録を残しましょう。対象かどうかの判断が難しいため、着手前にHome Affairsの最新の要件と対象宣言リストを確認し、証拠の残し方も含めて計画することが大切です。",
    ],
    keyFacts: [
      { label: "対象", value: "宣言地域・期間内の山火事/自然災害の復旧作業" },
      { label: "特徴", value: "有給・ボランティアのどちらでも対象になり得る" },
      { label: "山火事", value: "2019/7/31以降の宣言地域が対象とされてきた" },
      { label: "自然災害", value: "洪水・サイクロン等。日付・申請時期の条件あり" },
      { label: "証拠", value: "有給=Payslip、ボランティア=団体の活動証明" },
    ],
    steps: [
      { title: "最新の要件を確認", description: "Home Affairsで対象災害・宣言地域・期間を確認します。" },
      { title: "対象作業か確かめる", description: "宣言地域・期間内の復旧作業かを確認します。" },
      { title: "有給/ボランティアを整理", description: "どちらでも対象。証拠の種類を把握します。" },
      { title: "記録を残す", description: "活動日・場所・内容の証明を保管します。" },
    ],
    tips: [
      "災害復旧は有給だけでなくボランティアでも日数になり得るのが他業種にない特徴です。",
      "対象地域・期間は災害ごとに宣言されます。着手前に必ず最新の公式リストで確認しましょう。",
    ],
    warnings: [
      "宣言地域・期間の範囲外の作業は日数になりません。条件が細かいので必ず公式確認を。",
      "適用条件は年により更新されます。本記事は概要です。最新はHome Affairsで確認してください。",
    ],
    faqs: [
      {
        question: "ボランティアでもセカンドビザの日数になりますか？",
        answer:
          "災害復旧に限っては、宣言地域・期間内の対象作業であれば、有給の仕事だけでなくボランティア活動も日数にカウントされ得ます。活動を証明する団体の書類を必ず残してください。",
      },
    ],
    sources: [
      { label: "Home Affairs - Specified work", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Home Affairs｜Specified work（災害復旧の対象地域・期間・証拠）",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: ["specified-work-industries", "specified-work-postcodes", "farm-payslip-evidence", "second-visa-guide", "farm-employer-verification"],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a197",
    title: "ガトン・ロッキヤーバレーのファーム仕事・生活ガイド",
    slug: "region-gatton-lockyer",
    category: "farm",
    hub: "farm",
    priority: "P0",
    searchIntent: "ガトン・ロッキヤーバレーのファーム仕事",
    description:
      "クイーンズランド州ガトン／ロッキヤーバレーのファーム仕事を、作物・シーズン・求人の探し方・交通・宿・生活の面から解説。野菜の一大産地で通年働きやすい定番エリアの実情をまとめます。",
    content: [
      "ガトン（Gatton）を中心とするロッキヤーバレー（Lockyer Valley）は、『オーストラリアのサラダボウル』と呼ばれる野菜の一大産地で、ワーホリのファーム定番エリアです。結論として、通年で野菜の需要があり仕事を見つけやすく、ブリスベンやトゥーンバに近いためアクセスも良いのが魅力です。セカンドビザの指定地域に該当するかは郵便番号で確認が必要です。",
      "主な作物は、ブロッコリー・レタス・玉ねぎ・にんじん・カボチャ・豆類などの野菜で、通年で収穫・結束・パッキングの仕事があります。果樹の収穫のような極端な季節性が小さいため、時期を問わず仕事を探しやすいのが特徴です。野菜作業は早朝スタートが多く、かがむ姿勢や刃物作業の負担があります。",
      "求人の探し方は、Workforce AustraliaのHarvest、求人サイト、Facebookの地域求人グループ、ワーカーズホステルの紹介などです。人気エリアゆえ競争もあるため、収穫の繁忙期に合わせて動くと有利です。交通は、車があると複数農場に応募でき便利ですが、送迎付きの宿や相乗りを使えば車なしでも働けます。",
      "生活面では、ガトンの町にスーパーや基本的な施設がそろい、ブリスベン（西へ約1時間半）やトゥーンバも近いため、買い物や休日の外出に困りません。宿はワーカーズホステルやシェアハウスが中心です。就労前に農場の住所が対象ポストコードか、Payslipが出るかを確認し、記録を保管してセカンドビザの証拠にしましょう。",
    ],
    keyFacts: [
      { label: "場所", value: "QLDロッキヤーバレー（ブリスベン西・トゥーンバ近郊）" },
      { label: "主な作物", value: "ブロッコリー・レタス・玉ねぎ等の野菜（通年）" },
      { label: "特徴", value: "野菜の一大産地。通年で仕事を探しやすい" },
      { label: "交通", value: "車が便利。送迎付き宿・相乗りで車なしも可" },
      { label: "確認", value: "農場住所が対象ポストコードか要確認" },
    ],
    steps: [
      { title: "時期を選ぶ", description: "通年だが繁忙期に合わせると有利です。" },
      { title: "求人に応募", description: "Harvest・求人サイト・宿の紹介で探します。" },
      { title: "交通と宿を確保", description: "送迎付き宿や相乗りを手配します。" },
      { title: "対象地域か確認", description: "農場の郵便番号を対象リストで照合します。" },
    ],
    tips: [
      "ブリスベン・トゥーンバに近く生活が便利。初めてのファーム地域として人気です。",
      "野菜は天候の影響が果物より小さめ。安定して日数を積みたい人に向いています。",
    ],
    warnings: ["人気エリアで求人競争があります。繁忙期を狙い、対象ポストコードか必ず確認してください。"],
    faqs: [
      {
        question: "ガトンは車がないと働けませんか？",
        answer:
          "車があると有利ですが、送迎付きのワーカーズホステルや相乗りを使えば車なしでも働けます。ブリスベンからのアクセスも良い地域です。",
      },
    ],
    sources: [
      { label: "Workforce Australia - Harvest", url: "https://www.workforceaustralia.gov.au/individuals/harvest" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Workforce Australia｜Harvest（地域・作物別の収穫求人）",
        url: "https://www.workforceaustralia.gov.au/individuals/harvest",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: ["farm-season-calendar", "crop-broccoli-broccolini", "specified-work-postcodes", "farm-finding", "region-stanthorpe-farm"],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a198",
    title: "バンダバーグのファーム仕事・生活ガイド",
    slug: "region-bundaberg-farm",
    category: "farm",
    hub: "farm",
    priority: "P1",
    searchIntent: "バンダバーグのファーム仕事・生活",
    description:
      "クイーンズランド州バンダバーグのファーム仕事を、作物・シーズン・求人の探し方・詐欺対策・宿・生活の面から解説。バックパッカーが集まる定番のファーム拠点の実情をまとめます。",
    content: [
      "バンダバーグ（Bundaberg）は、クイーンズランド州の代表的なファーム拠点で、多くのバックパッカーがセカンドビザを目指して集まります。結論として、野菜・果物の多彩な作物で通年に近く仕事があり、ワーカーズホステルも充実している一方、人気ゆえに悪質なブローカー・宿も紛れるため、賃金・条件の見極めが重要なエリアです。",
      "主な作物は、トマト・ズッキーニ・カプシカム・きゅうりなどの野菜、いちご・アボカド・マカダミアなどで、特に冬（4〜11月ごろ）に多くの求人が出ます。収穫・パッキングともに求人があり、屋内パッキングは天候に強い利点があります。多国籍のワーカーが働く環境で、英語に自信がなくても始めやすい仕事が多いです。",
      "求人の探し方は、Workforce AustraliaのHarvest、求人サイト、Facebookグループ、そしてワーカーズホステルの紹介が中心です。バンダバーグは宿と仕事がセットのケースが多いですが、『泊まれば必ず十分な仕事がある』とは限らないため、仕事量・賃金・天引きを事前に確認しましょう。賃金未払いや高額天引きの悪質業者を避ける目が特に必要です。",
      "生活面では、バンダバーグは中規模の町でスーパー・病院・銀行など生活施設がそろい、長期滞在しやすい環境です。車があると農場や買い物に便利ですが、送迎付き宿を使えば車なしでも生活できます。就労前に農場住所が対象ポストコードか、ABN・Payslip・銀行振込があるかを確認し、記録を保管してセカンドビザの証拠にしましょう。",
    ],
    keyFacts: [
      { label: "場所", value: "QLD中部沿岸のファーム拠点都市" },
      { label: "主な作物", value: "トマト・ズッキーニ等の野菜、いちご・アボカド・マカダミア" },
      { label: "ピーク", value: "冬(4〜11月ごろ)に求人が多い" },
      { label: "特徴", value: "宿が充実。多国籍で始めやすいが悪質業者に注意" },
      { label: "確認", value: "仕事量・賃金・天引き・対象ポストコードを確認" },
    ],
    steps: [
      { title: "時期を選ぶ", description: "冬の繁忙期に合わせて動きます。" },
      { title: "宿と仕事を確認", description: "仕事量・賃金・天引きの条件を事前に確認します。" },
      { title: "求人に応募", description: "Harvest・求人サイト・宿の紹介で探します。" },
      { title: "記録を残す", description: "Payslip・農場情報を保管します。" },
    ],
    tips: [
      "宿と仕事がセットのケースが多いですが、仕事量の実態を口コミで確認してから決めましょう。",
      "屋内パッキングは雨に強く、天候休みの多い時期の収入源になります。",
    ],
    warnings: ["人気エリアゆえ悪質な宿・ブローカーも存在します。賃金未払い・高額天引き・日数偽証には関わらないでください。"],
    faqs: [
      {
        question: "バンダバーグは初心者向けですか？",
        answer:
          "宿が充実し多国籍で始めやすいため、初めてのファームに選ぶ人が多い地域です。ただし人気ゆえ悪質業者も紛れるので、賃金・仕事量・天引きの確認を怠らないでください。",
      },
    ],
    sources: [
      { label: "Workforce Australia - Harvest", url: "https://www.workforceaustralia.gov.au/individuals/harvest" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Workforce Australia｜Harvest（地域・作物別の収穫求人）",
        url: "https://www.workforceaustralia.gov.au/individuals/harvest",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: ["farm-season-calendar", "farm-accommodation-guide", "crop-tomato-capsicum", "farm-finding", "specified-work-postcodes"],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a199",
    title: "スタンソープのファーム仕事・生活ガイド",
    slug: "region-stanthorpe-farm",
    category: "farm",
    hub: "farm",
    priority: "P1",
    searchIntent: "スタンソープのファーム仕事・生活",
    description:
      "クイーンズランド州スタンソープ（グラニットベルト）のファーム仕事を、作物・シーズン・寒さ対策・求人・宿の面から解説。果樹とぶどうの産地で夏〜秋に賑わうエリアの実情をまとめます。",
    content: [
      "スタンソープ（Stanthorpe）は、クイーンズランド州南部のグラニットベルト（Granite Belt）と呼ばれる高地にある果樹・ぶどうの産地です。結論として、りんご・ぶどう・ストーンフルーツ（桃・すもも）・ベリーなどの収穫が夏〜秋に集中し、この時期に多くのワーホリが集まります。標高が高く冬は非常に冷え込むため、季節に応じた服装が欠かせません。",
      "主な作物は、りんご、ぶどう（テーブルグレープ）、桃・ネクタリン・すももなどのストーンフルーツ、トマトやベリー類です。収穫のピークは主に夏〜秋（11〜4月ごろ）で、この時期に収穫・パッキングの求人が集中します。果樹は梯子作業を伴うものもあり、丁寧な扱いと安全への注意が必要です。",
      "求人の探し方は、Workforce AustraliaのHarvest、求人サイト、Facebookグループ、ワーカーズホステルの紹介が中心です。収穫期には近隣を含め多くの農場が人手を求めるため、シーズンに合わせて動くと仕事を見つけやすくなります。町は比較的小さいため、車があると農場や買い物に便利です。",
      "生活面で特筆すべきは気候です。グラニットベルトは標高が高く、冬（6〜8月）は霜が降り朝晩は氷点下になることもあります。冬に滞在するなら防寒具が必須です。夏は日中の日差し対策も必要です。スタンソープの町に基本的な生活施設があり、就労前に農場住所が対象ポストコードか、Payslipが出るかを確認して記録を残しましょう。",
    ],
    keyFacts: [
      { label: "場所", value: "QLD南部グラニットベルト（高地）" },
      { label: "主な作物", value: "りんご・ぶどう・ストーンフルーツ・ベリー" },
      { label: "ピーク", value: "夏〜秋(11〜4月ごろ)に収穫が集中" },
      { label: "気候", value: "高地で冬は氷点下も。防寒必須" },
      { label: "交通", value: "小さな町。車があると便利" },
    ],
    steps: [
      { title: "収穫期に合わせる", description: "夏〜秋の繁忙期に現地入りします。" },
      { title: "求人に応募", description: "Harvest・求人サイト・宿の紹介で探します。" },
      { title: "気候対策を準備", description: "冬は防寒、夏は日差し対策を用意します。" },
      { title: "対象地域か確認", description: "農場の郵便番号を対象リストで照合します。" },
    ],
    tips: [
      "冬は氷点下になることも。冬滞在なら暖かい寝具と防寒具を必ず用意しましょう。",
      "夏〜秋の収穫期は求人が集中。シーズンを外すと仕事が激減するので時期選びが重要です。",
    ],
    warnings: ["高地で冬の冷え込みが厳しい地域です。防寒不足は体調不良の原因になります。"],
    faqs: [
      {
        question: "スタンソープはいつ行くのがいいですか？",
        answer:
          "収穫のピークである夏〜秋（11〜4月ごろ）が仕事を見つけやすい時期です。冬は求人が減るうえ寒さが厳しいため、時期を合わせて動くのがおすすめです。",
      },
    ],
    sources: [
      { label: "Workforce Australia - Harvest", url: "https://www.workforceaustralia.gov.au/individuals/harvest" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Workforce Australia｜Harvest（地域・作物別の収穫求人）",
        url: "https://www.workforceaustralia.gov.au/individuals/harvest",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: ["farm-season-calendar", "crop-apple-cherry", "crop-grape", "farm-work-clothing", "region-gatton-lockyer"],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a200",
    title: "ボーエン・エアのファーム仕事ガイド",
    slug: "region-bowen-ayr-farm",
    category: "farm",
    hub: "farm",
    priority: "P2",
    searchIntent: "ボーエン・エアのファーム仕事",
    description:
      "クイーンズランド州ボーエン・エア（バーデキン）のファーム仕事を、作物・シーズン・熱帯気候・求人・宿の面から解説。冬の野菜・トマト産地として賑わうエリアの実情をまとめます。",
    content: [
      "ボーエン（Bowen）とエア（Ayr／バーデキン地域）は、クイーンズランド州北部の野菜・果物の産地で、特に冬の乾季にトマトなどの求人が集中するエリアです。結論として、南部が寒くなる冬（乾季）にこそ繁忙期を迎える『冬の稼ぎ場』で、シーズンをつなぎたい人にとって重要な選択肢になります。熱帯気候のため暑さ対策が前提です。",
      "主な作物は、トマト・カプシカム・きゅうり・メロン・マンゴーなどで、ボーエンは『トマトの町』として知られます。収穫・選別・パッキングの求人があり、乾季（おおむね4〜11月ごろ）がピークです。マンゴーはやや遅い時期に収穫され、樹液対策が必要です。多国籍のワーカーが集まる環境です。",
      "求人の探し方は、Workforce AustraliaのHarvest、求人サイト、Facebookグループ、ワーカーズホステルの紹介が中心です。冬はバックパッカーが集中するため、繁忙期の少し前に現地入りして応募すると有利です。車があると農場や生活に便利ですが、送迎付き宿を使えば車なしでも働けます。",
      "生活面では、ボーエンは海沿いの小さな町で、ビーチもあり滞在は快適です。エア（バーデキン）も農業地域です。熱帯気候のため、冬でも日中は暖かく、日焼け・水分補給の対策が必要です。就労前に農場住所が対象ポストコードか、Payslipが出るかを確認し、記録を残してセカンドビザの証拠にしましょう。",
    ],
    keyFacts: [
      { label: "場所", value: "QLD北部（ボーエン＝トマトの町、エア＝バーデキン）" },
      { label: "主な作物", value: "トマト・カプシカム・メロン・マンゴー等" },
      { label: "ピーク", value: "冬の乾季(4〜11月ごろ)。冬の稼ぎ場" },
      { label: "気候", value: "熱帯。冬でも日中は暖かく暑さ対策が必要" },
      { label: "特徴", value: "海沿いで滞在快適。多国籍のワーカー" },
    ],
    steps: [
      { title: "冬の乾季を狙う", description: "南部が寒い時期の繁忙期に合わせます。" },
      { title: "早めに応募", description: "バックパッカー集中前に現地入りします。" },
      { title: "暑さ対策を準備", description: "熱帯気候の日焼け・水分対策をします。" },
      { title: "対象地域か確認", description: "農場の郵便番号を照合しPayslipを保管します。" },
    ],
    tips: [
      "ボーエンは冬のトマト産地。南部が寒い時期に仕事を探すなら有力候補です。",
      "海沿いで滞在は快適ですが、熱帯なので冬でも日焼け・水分対策を忘れずに。",
    ],
    warnings: ["熱帯気候で日差しが強く、繁忙期は競争もあります。暑さ対策と早めの行動を心がけましょう。"],
    faqs: [
      {
        question: "ボーエンはいつ仕事がありますか？",
        answer:
          "冬の乾季（おおむね4〜11月ごろ）がトマトなどの収穫ピークです。南部の作物が少ない時期に稼げる貴重なエリアで、シーズンをつなぐ拠点として人気です。",
      },
    ],
    sources: [
      { label: "Workforce Australia - Harvest", url: "https://www.workforceaustralia.gov.au/individuals/harvest" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Workforce Australia｜Harvest（地域・作物別の収穫求人）",
        url: "https://www.workforceaustralia.gov.au/individuals/harvest",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: ["farm-season-calendar", "crop-tomato-capsicum", "crop-mango-banana", "farm-heat-sun-safety", "farm-finding"],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a201",
    title: "マリーバ・アサートン高原のファームガイド",
    slug: "region-mareeba-atherton-farm",
    category: "farm",
    hub: "farm",
    priority: "P2",
    searchIntent: "マリーバ・アサートン高原のファーム仕事",
    description:
      "クイーンズランド州マリーバ・アサートン高原（テーブルランド）のファーム仕事を、作物・シーズン・気候・求人・宿の面から解説。バナナ・アボカド・コーヒーなど多彩な作物で通年働けるエリアの実情をまとめます。",
    content: [
      "マリーバ（Mareeba）とアサートン高原（Atherton Tablelands）は、ケアンズ内陸の高原地帯にある多彩な農業地域です。結論として、バナナ・アボカド・マンゴー・コーヒー・ベリー・柑橘など作物の種類が豊富で、通年に近く仕事があるため、シーズンをつなぎやすいエリアです。高原ゆえ沿岸部より過ごしやすい気候も魅力です。",
      "主な作物は、バナナ（通年）、アボカド、マンゴー、コーヒー、ライム・柑橘、ベリー類など多岐にわたります。作物ごとに収穫期が分散しているため、一つのエリアに滞在しながら作物を替えて働き続けられる可能性があります。バナナは房が重く、マンゴーは樹液対策が必要など、作物ごとの特徴を押さえましょう。",
      "求人の探し方は、Workforce AustraliaのHarvest、求人サイト、Facebookグループ、ワーカーズホステルの紹介が中心です。ケアンズから内陸へ入った地域のため、車があると農場間の移動や生活に便利です。送迎付きの宿もありますが、公共交通は限られるため事前に交通手段を確認しましょう。",
      "生活面では、マリーバやアサートンの町に基本的な生活施設があり、ケアンズにも比較的アクセスできます。高原のため沿岸部より涼しく、農作業がしやすい気候です。就労前に農場住所が対象ポストコードか、Payslipが出るかを確認し、記録を残してセカンドビザの証拠にしましょう。",
    ],
    keyFacts: [
      { label: "場所", value: "QLDケアンズ内陸のアサートン高原" },
      { label: "主な作物", value: "バナナ・アボカド・マンゴー・コーヒー・柑橘・ベリー" },
      { label: "特徴", value: "作物が多彩で通年に近く働ける" },
      { label: "気候", value: "高原で沿岸部より涼しく過ごしやすい" },
      { label: "交通", value: "内陸のため車が便利。公共交通は限定的" },
    ],
    steps: [
      { title: "作物を選ぶ", description: "通年のバナナや季節の果物から狙いを定めます。" },
      { title: "交通を確保", description: "内陸のため車や送迎付き宿を手配します。" },
      { title: "求人に応募", description: "Harvest・求人サイト・宿の紹介で探します。" },
      { title: "対象地域か確認", description: "農場の郵便番号を照合しPayslipを保管します。" },
    ],
    tips: [
      "作物が多彩で収穫期が分散。一つのエリアに腰を据えて作物を替えながら働けます。",
      "高原で気候が穏やか。ケアンズ観光と組み合わせやすいのも魅力です。",
    ],
    warnings: ["内陸で公共交通が限られます。車がない場合は送迎付き宿など交通手段を先に確保してください。"],
    faqs: [
      {
        question: "アサートン高原は通年で仕事がありますか？",
        answer:
          "バナナが通年に近く、アボカド・マンゴー・コーヒー・柑橘など作物が多彩なため、時期を替えれば長く働きやすい地域です。作物ごとの収穫期をカレンダーで確認しましょう。",
      },
    ],
    sources: [
      { label: "Workforce Australia - Harvest", url: "https://www.workforceaustralia.gov.au/individuals/harvest" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Workforce Australia｜Harvest（地域・作物別の収穫求人）",
        url: "https://www.workforceaustralia.gov.au/individuals/harvest",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: ["farm-season-calendar", "crop-mango-banana", "crop-avocado", "farm-transport-car", "farm-finding"],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a202",
    title: "ミルデューラのファーム仕事・生活ガイド",
    slug: "region-mildura-farm",
    category: "farm",
    hub: "farm",
    priority: "P2",
    searchIntent: "ミルデューラのファーム仕事・生活",
    description:
      "ビクトリア州ミルデューラのファーム仕事を、作物・シーズン・冬の剪定・求人・宿・生活の面から解説。ぶどう・柑橘・アーモンドの産地で年間を通じて仕事が見つかるエリアの実情をまとめます。",
    content: [
      "ミルデューラ（Mildura）は、ビクトリア州北西部・マレー川沿いの大きな農業都市で、ワーホリのファーム定番エリアです。結論として、ぶどう（テーブル/ドライ/ワイン）・柑橘・アーモンドなどの産地で、夏の収穫と冬の剪定（pruning）の両方があるため、年間を通じて仕事を見つけやすいのが強みです。都市機能も整い生活しやすい点も人気の理由です。",
      "主な作物は、ぶどう（夏の収穫、冬の剪定）、オレンジ・マンダリンなどの柑橘（冬〜春）、アーモンドなどです。夏（1〜4月ごろ）はぶどうの収穫、冬（6〜8月ごろ）はぶどうの剪定と柑橘の収穫と、季節ごとに仕事が切り替わります。剪定はオフシーズンの貴重な収入源になります。",
      "求人の探し方は、Workforce AustraliaのHarvest、求人サイト、Facebookグループ、ワーカーズホステルや労働者派遣（labour hire）の紹介が中心です。派遣経由の求人が多い地域なので、派遣会社が州のライセンスに登録しているか確認しましょう。車があると農場や生活に便利ですが、町が大きいため車なしでも比較的暮らしやすいです。",
      "生活面では、ミルデューラは人口の多い地方都市で、大型スーパー・病院・銀行・娯楽施設がそろい、長期滞在に適しています。夏は非常に暑く乾燥するため暑さ対策が必須、冬の剪定期は朝が冷え込みます。就労前に農場住所が対象ポストコードか、Payslip・銀行振込があるかを確認し、記録を残してセカンドビザの証拠にしましょう。",
    ],
    keyFacts: [
      { label: "場所", value: "VIC北西部・マレー川沿いの農業都市" },
      { label: "主な作物", value: "ぶどう・柑橘・アーモンド" },
      { label: "通年性", value: "夏の収穫＋冬の剪定で年間を通じ仕事がある" },
      { label: "求人形態", value: "労働者派遣(labour hire)経由が多い（登録確認を）" },
      { label: "生活", value: "大きな地方都市で施設が充実。長期滞在向き" },
    ],
    steps: [
      { title: "季節に合わせる", description: "夏は収穫、冬は剪定と作業を選びます。" },
      { title: "派遣会社を確認", description: "labour hireの州ライセンス登録を確認します。" },
      { title: "求人に応募", description: "Harvest・求人サイト・派遣の紹介で探します。" },
      { title: "対象地域か確認", description: "農場の郵便番号を照合しPayslipを保管します。" },
    ],
    tips: [
      "冬の剪定(pruning)があるため、オフシーズンでも仕事を見つけやすい貴重なエリアです。",
      "派遣経由の求人が多い地域。登録された正規の派遣会社かを必ず確認しましょう。",
    ],
    warnings: ["夏は酷暑・乾燥します。暑さ対策を徹底し、派遣は無登録業者・高額天引きに注意してください。"],
    faqs: [
      {
        question: "ミルデューラは冬でも仕事がありますか？",
        answer:
          "あります。冬はぶどうの剪定（pruning）や柑橘の収穫があり、収穫期以外でも働けるのが強みです。年間を通じて仕事を探しやすい定番エリアです。",
      },
    ],
    sources: [
      { label: "Workforce Australia - Harvest", url: "https://www.workforceaustralia.gov.au/individuals/harvest" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Workforce Australia｜Harvest（地域・作物別の収穫求人）",
        url: "https://www.workforceaustralia.gov.au/individuals/harvest",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: ["farm-season-calendar", "crop-grape", "crop-citrus", "farm-labour-hire-contractors", "region-griffith-farm"],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a203",
    title: "シェパートンのファーム仕事ガイド",
    slug: "region-shepparton-farm",
    category: "farm",
    hub: "farm",
    priority: "P2",
    searchIntent: "シェパートンのファーム仕事",
    description:
      "ビクトリア州シェパートン（グーバーン渓谷）のファーム仕事を、作物・シーズン・求人・宿・生活の面から解説。りんご・梨・ストーンフルーツの産地で夏〜秋に賑わうエリアの実情をまとめます。",
    content: [
      "シェパートン（Shepparton）は、ビクトリア州グーバーン渓谷（Goulburn Valley）の中心都市で、果樹とパッキング（缶詰・加工を含む）で知られる農業地域です。結論として、りんご・梨・桃・すももなどのストーンフルーツの収穫とパッキングが夏〜秋に集中し、この時期に多くの求人が出ます。地方都市として生活しやすいのも利点です。",
      "主な作物は、りんご・梨（pome fruit）、桃・ネクタリン・すもも・アプリコットなどのストーンフルーツ、トマトなどです。収穫のピークは主に夏〜秋（12〜4月ごろ）で、収穫・選別・パッキングの求人が集中します。果樹は梯子作業を伴い、パッキング工場（屋内）の仕事は天候に強い利点があります。",
      "求人の探し方は、Workforce AustraliaのHarvest、求人サイト、Facebookグループ、ワーカーズホステルや労働者派遣の紹介が中心です。収穫期には近隣を含め多くの農場・工場が人手を求めます。車があると便利ですが、町が大きめなので車なしでも生活はしやすい方です。",
      "生活面では、シェパートンは施設の整った地方都市で、スーパー・病院・銀行がそろい長期滞在に向いています。夏は暑いため暑さ対策を、パッキング工場では衛生服装の指定に従います。就労前に農場・工場の住所が対象ポストコードか、Payslipが出るかを確認し、記録を残してセカンドビザの証拠にしましょう。",
    ],
    keyFacts: [
      { label: "場所", value: "VICグーバーン渓谷の中心都市" },
      { label: "主な作物", value: "りんご・梨・ストーンフルーツ・トマト" },
      { label: "ピーク", value: "夏〜秋(12〜4月ごろ)に収穫・パッキング集中" },
      { label: "特徴", value: "パッキング工場の仕事も多く天候に強い" },
      { label: "生活", value: "施設の整った地方都市で長期滞在向き" },
    ],
    steps: [
      { title: "収穫期に合わせる", description: "夏〜秋の繁忙期に現地入りします。" },
      { title: "求人に応募", description: "Harvest・求人サイト・派遣の紹介で探します。" },
      { title: "作業環境を確認", description: "梯子作業やパッキングの衛生服装を確認します。" },
      { title: "対象地域か確認", description: "住所を照合しPayslipを保管します。" },
    ],
    tips: [
      "パッキング工場の仕事が多く、屋内なので雨に強いのが利点です。",
      "夏〜秋の収穫期に求人が集中。時期を合わせて動くのが仕事探しの鍵です。",
    ],
    warnings: ["果樹の梯子作業は転落に注意。夏は暑さ対策を徹底してください。"],
    faqs: [
      {
        question: "シェパートンはどんな仕事がありますか？",
        answer:
          "りんご・梨・ストーンフルーツの収穫と、パッキング工場での選別・箱詰めが中心です。夏〜秋がピークで、屋内のパッキングは天候に左右されにくいのが魅力です。",
      },
    ],
    sources: [
      { label: "Workforce Australia - Harvest", url: "https://www.workforceaustralia.gov.au/individuals/harvest" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Workforce Australia｜Harvest（地域・作物別の収穫求人）",
        url: "https://www.workforceaustralia.gov.au/individuals/harvest",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: ["farm-season-calendar", "crop-apple-cherry", "farm-packing-shed", "farm-finding", "region-mildura-farm"],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a204",
    title: "グリフィスのファーム仕事ガイド",
    slug: "region-griffith-farm",
    category: "farm",
    hub: "farm",
    priority: "P2",
    searchIntent: "グリフィスのファーム仕事",
    description:
      "ニューサウスウェールズ州グリフィス（リヴァリーナ）のファーム仕事を、作物・シーズン・求人・宿・生活の面から解説。ぶどう・柑橘・野菜の産地でワイン産業も盛んなエリアの実情をまとめます。",
    content: [
      "グリフィス（Griffith）は、ニューサウスウェールズ州リヴァリーナ（Riverina）地域の農業都市で、ぶどう・柑橘・野菜の産地でありワイン産業も盛んです。結論として、ぶどうの収穫・剪定、オレンジなどの柑橘、多様な野菜の求人があり、季節を通じて仕事を見つけやすいエリアです。ただしぶどう関連では『醸造は対象外』という点に注意が必要です。",
      "主な作物は、ぶどう（夏の収穫、冬の剪定）、オレンジ・マンダリンなどの柑橘（冬〜春）、プルーン、メロン、野菜類などです。灌漑された広大な農地で多品目が栽培されるため、季節ごとに作業が切り替わります。ぶどうは収穫・剪定なら対象になり得ますが、ワイナリーの醸造工程はセカンドビザの対象外です。",
      "求人の探し方は、Workforce AustraliaのHarvest、求人サイト、Facebookグループ、ワーカーズホステルや労働者派遣の紹介が中心です。派遣経由の求人が多いので、業者が州のライセンスに登録しているか確認しましょう。内陸の農業地域のため、車があると農場間の移動や生活に便利です。",
      "生活面では、グリフィスは中規模の地方都市で、スーパー・病院・銀行がそろい滞在しやすい環境です。夏は暑く乾燥するため暑さ対策が必要です。就労前に農場住所が対象ポストコードか、作業内容が対象か（醸造でないか）、Payslipが出るかを確認し、記録を残してセカンドビザの証拠にしましょう。",
    ],
    keyFacts: [
      { label: "場所", value: "NSWリヴァリーナの農業都市" },
      { label: "主な作物", value: "ぶどう・柑橘・野菜・プルーン・メロン" },
      { label: "通年性", value: "季節ごとに作業が替わり仕事を見つけやすい" },
      { label: "注意", value: "ぶどうの醸造(winemaking)は対象外" },
      { label: "求人形態", value: "労働者派遣経由が多い（登録確認を）" },
    ],
    steps: [
      { title: "作物・季節を選ぶ", description: "夏はぶどう収穫、冬は剪定や柑橘を選びます。" },
      { title: "作業内容を確認", description: "醸造でなく栽培・収穫・剪定かを確認します。" },
      { title: "求人に応募", description: "Harvest・求人サイト・派遣の紹介で探します。" },
      { title: "対象地域か確認", description: "住所を照合しPayslipを保管します。" },
    ],
    tips: [
      "ワイン産業が盛んですが、醸造工程はセカンドビザ対象外。栽培・収穫・剪定かを確認しましょう。",
      "多品目の産地で季節ごとに仕事が替わります。ミルデューラと合わせて回る人もいます。",
    ],
    warnings: ["ぶどうの醸造(winemaking)は日数にならないため作業内容の確認を。夏は酷暑対策が必要です。"],
    faqs: [
      {
        question: "グリフィスのワイナリーの仕事は日数になりますか？",
        answer:
          "ぶどうの栽培・収穫・剪定は対象になり得ますが、ワインの醸造工程は対象外です。同じワイナリーでも作業で扱いが変わるため、就労前に確認してください。",
      },
    ],
    sources: [
      { label: "Workforce Australia - Harvest", url: "https://www.workforceaustralia.gov.au/individuals/harvest" },
      { label: "Home Affairs - Specified work", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Workforce Australia｜Harvest（地域・作物別の収穫求人）",
        url: "https://www.workforceaustralia.gov.au/individuals/harvest",
        accessedAt: "2026-07-19",
      },
      {
        label: "Home Affairs｜Specified work（栽培と醸造の区別）",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: ["farm-season-calendar", "crop-grape", "crop-citrus", "region-mildura-farm", "farm-employer-verification"],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a205",
    title: "タスマニアのファーム仕事・シーズンガイド",
    slug: "region-tasmania-farm",
    category: "farm",
    hub: "farm",
    priority: "P2",
    searchIntent: "タスマニアのファーム仕事・シーズン",
    description:
      "タスマニアのファーム仕事を、作物・シーズン・州全域が対象地域である点・求人・気候の面から解説。チェリー・ベリー・りんごの産地で夏に賑わうエリアの実情をまとめます。",
    content: [
      "タスマニア（Tasmania）は、涼しい気候を生かした果樹・ベリーの産地で、州全域がセカンドビザの指定地域に該当するのが大きな特徴です。結論として、チェリー・ベリー・りんご・ぶどうなどの収穫が夏（11〜4月ごろ）に集中し、州のどこで働いても地域要件を満たしやすいため、ワーホリに人気のエリアです。ただし求人は夏に偏るため時期選びが重要です。",
      "主な作物は、チェリー（夏、特にクリスマス前後）、ラズベリー・ブルーベリー・いちごなどのベリー類、りんご、ぶどう（ワイン産地としても有名）などです。冷涼な気候のため果実の品質が高く、収穫の繁忙期には多くの人手が必要になります。チェリーは短期集中で稼ぎやすい一方、期間が限られます。",
      "求人の探し方は、Workforce AustraliaのHarvest、求人サイト、Facebookグループ、ワーカーズホステルの紹介が中心です。夏の収穫期に合わせて本州（メルボルンなど）からフェリーや飛行機で渡る人も多くいます。島内は公共交通が限られるため、車があると農場や生活に便利です。",
      "生活面では、ホバートやロンセストンなどの都市に生活施設がそろい、豊かな自然も魅力です。夏でも朝晩は涼しく、内陸や高地は冷え込むため防寒も用意しましょう。州全域が対象地域とはいえ、作業内容が対象業種か、Payslipが出るかは要確認です。記録を残してセカンドビザの証拠にしましょう。",
    ],
    keyFacts: [
      { label: "場所", value: "タスマニア州（州全域が指定地域に該当）" },
      { label: "主な作物", value: "チェリー・ベリー・りんご・ぶどう" },
      { label: "ピーク", value: "夏(11〜4月ごろ)。チェリーはクリスマス前後" },
      { label: "強み", value: "州全域が対象で地域要件を満たしやすい" },
      { label: "交通", value: "島内は公共交通が限定的。車が便利" },
    ],
    steps: [
      { title: "夏の収穫期を狙う", description: "チェリー・ベリーの繁忙期に合わせます。" },
      { title: "渡航手段を手配", description: "本州からフェリー・飛行機で渡ります。" },
      { title: "求人に応募", description: "Harvest・求人サイト・宿の紹介で探します。" },
      { title: "作業内容を確認", description: "対象業種か確認しPayslipを保管します。" },
    ],
    tips: [
      "タスマニアは州全域が対象地域。地域要件を気にせず働きやすいのが大きな利点です。",
      "チェリーはクリスマス前後の短期集中。稼ぎやすいですが期間が短いので次の計画も忘れずに。",
    ],
    warnings: ["求人は夏に集中します。冬は仕事が激減するため、時期を合わせて渡航してください。"],
    faqs: [
      {
        question: "タスマニアはどこで働いても対象地域ですか？",
        answer:
          "タスマニアは州全域がセカンドビザの指定地域に該当するため、地域（ポストコード）の心配が少ないのが特徴です。ただし作業内容が対象業種であること、Payslip等の証拠は必要です。",
      },
    ],
    sources: [
      { label: "Workforce Australia - Harvest", url: "https://www.workforceaustralia.gov.au/individuals/harvest" },
      { label: "Home Affairs - Specified work", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Workforce Australia｜Harvest（地域・作物別の収穫求人）",
        url: "https://www.workforceaustralia.gov.au/individuals/harvest",
        accessedAt: "2026-07-19",
      },
      {
        label: "Home Affairs｜Specified work（対象地域：タスマニア全域）",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: ["farm-season-calendar", "crop-apple-cherry", "crop-blueberry", "specified-work-postcodes", "farm-finding"],
    updatedAt: "2026-07-19",
    published: true,
  },
];
