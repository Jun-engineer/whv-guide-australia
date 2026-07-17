import type { Article } from "./types";

export const visaArticles: Article[] = [
  {
    id: "a1",
    title: "オーストラリアワーホリ完全ガイド｜出発から帰国まで全体像",
    slug: "whv-complete-guide",
    category: "visa",
    description:
      "ワーホリ準備から現地生活、帰国までの全体像を時系列で整理した入門記事。何をいつやるべきかが一目でわかります。",
    content: [
      "ワーキングホリデー（Working Holiday：サブクラス417）は、18〜30歳（一部国籍は35歳まで）の日本国籍者が最長1年間オーストラリアに滞在し、観光・就労・就学を自由に組み合わせられるビザです。条件を満たせばセカンド・サードビザで最大3年まで延長できます。",
      "成功のコツは「順番」です。ビザ取得 → 航空券・保険 → 到着後の手続き（TFN・銀行・SIM）→ 家探し → 仕事探し、という流れを崩さないことで、無駄な出費とトラブルを避けられます。",
      "本サイトはこの順番に沿ってカテゴリを構成しています。まずは渡航前準備と到着後チェックリストから読み進めるのがおすすめです。お金の管理（Wiseでの両替・送金）や交通（現金不要でクレジット決済）など、現地で差がつく実践情報もカテゴリごとにまとめています。",
      "渡航までのスケジュールは、逆算で考えると失敗しません。目安としては、出発の3〜4か月前にパスポートの有効期限確認とビザ申請、2か月前に航空券と海外保険の手配、1か月前に持ち物と初期資金（現地通貨・クレジットカード）の準備、というリズムがおすすめです。ビザは通常数日〜数週間で下りるため慌てる必要はありませんが、パスポート更新が必要な場合は先に済ませておきましょう。",
      "初期費用の目安も押さえておきましょう。ビザ申請料に加えて、往復航空券、海外保険、最初の1〜2か月分の家賃とボンド（敷金）、生活費を合わせると、渡航直後に必要な資金は日本円で60〜80万円ほどが一つの目安です。仕事が決まるまで無収入の期間があることを想定し、余裕を持った資金計画を立てると安心です。",
      "よくある失敗は、到着後の手続きの順番を誤ることです。たとえば銀行口座を開く前にTFN（納税者番号）を申請してしまうと入金先の登録でつまずく、住所が定まる前に銀行やSIMを契約して住所変更の手間が増える、といったケースです。本ガイドの到着後チェックリストの順で進めれば、こうした二度手間を避けられます。",
      "都市選びも滞在の満足度を大きく左右します。仕事の多さ・家賃・気候・日本人コミュニティの規模は都市ごとに大きく異なります。シティで仕事とネットワークを重視するか、地方でセカンドビザ取得と貯金を優先するか、自分の目的に合わせてエリアガイドを参考に拠点を決めましょう。",
    ],
    keyFacts: [
      { label: "対象年齢", value: "申請時に18〜30歳（日本国籍は30歳まで）" },
      { label: "滞在期間", value: "1回の入国で最長12か月。セカンド/サードで延長可" },
      { label: "ビザ申請料", value: "840 AUD（2025年7月改定。ファースト）" },
      { label: "セカンド/サード申請料", value: "各1,000 AUD" },
      { label: "必要資金の目安", value: "5,000 AUD以上＋帰国用航空券相当" },
      { label: "同一雇用主の就労", value: "原則6か月まで（例外あり）" },
    ],
    steps: [
      {
        title: "ビザ要件を確認する",
        description:
          "年齢・パスポート有効期限（滞在期間+α）・残高証明（約5,000 AUD）を満たしているか確認します。健康診断や犯罪経歴証明が求められる場合もあります。",
      },
      {
        title: "渡航計画と予算を作る",
        description:
          "都市（シドニー/メルボルン/ブリスベン/ケアンズ/パース等）、初期費用、仕事方針（ジャパレス/ローカル/ファーム）を先に決めると後がスムーズです。",
      },
      {
        title: "ビザ申請・航空券・保険を手配",
        description:
          "ImmiAccountでビザ申請後、航空券と海外保険（OSHCではなく一般の旅行/ワーホリ保険）を確保します。",
      },
      {
        title: "到着後タスクを実行",
        description:
          "TFN申請 → 銀行口座開設 → SIM契約 → 交通カード（Opal/myki等）登録 → 家探し → 仕事探しの順で進めます。",
      },
    ],
    tips: [
      "ビザは到着の2〜3か月前に申請すれば十分。通常は即日〜数週間で許可されます。",
      "現金はほぼ不要。到着時に数百ドルあれば足り、支払いは基本デビット/クレジットのタッチ決済でOK。",
      "日本円→豪ドルはWiseのマルチカレンシー口座が手数料・レートで有利（後述の送金ガイド参照）。",
    ],
    faqs: [
      {
        question: "英語力はどのくらい必要ですか？",
        answer:
          "ビザ申請に英語試験は不要です。ただしローカルの仕事に就くには日常会話レベルがあると有利です。渡航前に自己紹介や面接表現を準備しておくと到着後の選択肢が広がります。",
      },
      {
        question: "ワーホリ中に学校へ通えますか？",
        answer:
          "就学は最大17週間（約4か月）まで可能です。語学学校に短期間通ってから仕事を探す人も多いです。",
      },
      {
        question: "途中で一時帰国できますか？",
        answer:
          "ビザ有効期間内であれば出入国は自由です。再入国に制限はありません（ビザ条件により異なる場合があります）。",
      },
    ],
    sources: [
      {
        label: "Department of Home Affairs（ビザ公式）",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417",
      },
    ],
    warnings: ["ビザ制度・申請料・必要資金は予告なく変更されます。申請前に必ず公式情報を確認してください。"],
    relatedSlugs: ["visa-application", "arrival-checklist", "money-transfer-wise", "working-holiday-budget", "working-holiday-timeline", "first-30-days-roadmap"],
    updatedAt: "2026-07-16",
    published: true,
  },

  {
    id: "a2",
    title: "ワーホリビザ申請ステップ｜ImmiAccountの作り方と必要書類",
    slug: "visa-application",
    category: "visa",
    description:
      "サブクラス417のオンライン申請を、ImmiAccount作成から許可まで具体的に解説。つまずきやすいポイントもカバー。",
    content: [
      "ワーホリビザはすべてオンライン（ImmiAccount）で完結します。代行業者に頼まなくても自分で申請可能です。",
      "申請後はステータスがメールで通知されます。多くの場合は数日〜数週間で「Visa Grant Notification（許可通知）」が届きます。許可後はパスポートにビザが電子的に紐づくため、ビザラベルの貼付は不要です。",
      "申請前に準備しておくとスムーズなものは、有効なパスポート、常用するメールアドレス、支払い用のクレジットカード、そして残高証明（求められた場合に備えて）です。パスポートの有効期限は滞在予定期間より長く残っていることが望ましく、残り1年を切っている場合は申請前に更新しておくと安心です。",
      "フォーム入力では、氏名・生年月日・パスポート番号をパスポート記載どおり正確に入力することが重要です。スペルミスや誤入力は、入国時や口座開設・就労時の本人確認でトラブルの原因になります。健康・経歴に関する質問（Character・Health）には正直に回答してください。虚偽申告は不許可や将来のビザ取得への悪影響につながります。",
      "申請から入国までの流れも把握しておきましょう。ビザが許可されると、通常は許可日から12か月以内に初回入国する必要があります。この「初回入国期限（First entry date）」は許可通知に明記されるため、航空券の手配前に必ず確認してください。入国後、1年間の滞在カウントが始まります。",
      "処理期間は時期によって変動します。繁忙期（年度替わりや長期休暇前）は通常より時間がかかることがあるため、渡航予定が決まっているなら出発の2〜3か月前には申請を済ませておくと余裕を持てます。",
    ],
    keyFacts: [
      { label: "申請方法", value: "ImmiAccount（オンライン）" },
      { label: "申請料（ファースト）", value: "840 AUD（2025年7月改定・カード払い）" },
      { label: "申請料（セカンド/サード）", value: "各1,000 AUD" },
      { label: "標準処理期間", value: "即日〜数週間（時期により変動）" },
      { label: "必要なもの", value: "パスポート、メールアドレス、クレジットカード" },
    ],
    steps: [
      {
        title: "ImmiAccountを作成",
        description: "公式サイトでアカウントを登録し、メール認証を完了します。",
        imageHint: "ImmiAccountの新規登録（Create account）画面のスクリーンショット",
      },
      {
        title: "申請フォームを入力",
        description: "パスポート情報、滞在計画、健康・経歴に関する質問に回答します。虚偽申告は不許可の原因になります。",
        imageHint: "ビザ申請フォーム（サブクラス417を選択する画面）のスクリーンショット",
      },
      {
        title: "必要書類をアップロード",
        description: "パスポートのコピーなど求められた書類を添付します。残高証明は提出を求められたら用意します。",
        imageHint: "書類アップロード（Attach documents）画面のスクリーンショット",
      },
      {
        title: "申請料を支払う",
        description: "840 AUD（ファースト）をカードで決済すると審査が始まります。",
        imageHint: "支払い（Pay for this application）画面のスクリーンショット",
      },
      {
        title: "許可通知を受け取る",
        description: "Grant Notificationのメールを保存し、入国時に提示できるようにします。",
        imageHint: "Visa Grant Notificationのメール/PDFのサンプル画像",
      },
    ],
    tips: [
      "パスポートは滞在予定期間より長い有効期限が必要。残り1年を切っていれば先に更新を。",
      "Grant NotificationのPDFはスマホとクラウドの両方に保存しておくと安心です。",
    ],
    phrases: [
      { en: "I'd like to apply for a Working Holiday visa (subclass 417).", ja: "ワーキングホリデービザ（サブクラス417）を申請したいです。", note: "問い合わせ時" },
      { en: "Could you tell me the current visa application charge?", ja: "現在のビザ申請料を教えてもらえますか？" },
      { en: "Has my visa been granted?", ja: "私のビザは許可されましたか？" },
    ],
    faqs: [
      {
        question: "残高証明はいくら必要ですか？",
        answer:
          "目安は約5,000 AUD（日本円で約50万円前後）です。英文の残高証明書を用意しておくと、求められた際にすぐ対応できます。",
      },
      {
        question: "申請から入国までの期限はありますか？",
        answer:
          "ビザ許可後、通常12か月以内に初回入国する必要があります。許可通知に記載される入国期限を必ず確認してください。",
      },
    ],
    sources: [
      { label: "ImmiAccount ログイン", url: "https://online.immi.gov.au/" },
    ],
    verifiedAt: "2026-07-16",
    officialSources: [
      {
        label: "Department of Home Affairs｜Working Holiday visa (subclass 417)",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417",
        accessedAt: "2026-07-16",
      },
      {
        label: "First Working Holiday visa（申請料 AUD840）",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/first-working-holiday-417",
        accessedAt: "2026-07-16",
      },
    ],
    searchIntent: "417ビザの申請手順・費用",
    relatedSlugs: ["whv-complete-guide", "arrival-checklist", "working-holiday-timeline", "working-holiday-budget"],
    updatedAt: "2026-07-16",
    published: true,
  },

  {
    id: "a33",
    title: "ワーホリ後のビザ選択肢｜延長・学生・就労ビザへの道",
    slug: "visa-options",
    category: "visa",
    description:
      "ワーホリ終了後も滞在を続けたい人向けに、セカンド/サードビザ、学生ビザ、就労ビザ（スポンサー）など主要な選択肢を整理します。",
    content: [
      "1年目のワーホリが終わりに近づくと、『もっと滞在したい』と考える人は多いです。主な選択肢は、①セカンド/サードビザ（規定の労働で延長）、②学生ビザ（学校に通う）、③就労ビザ（雇用主のスポンサー）、④パートナービザなどです。",
      "それぞれ条件・費用・準備期間が大きく異なります。特にスポンサービザは雇用主の協力が必要で時間もかかるため、滞在を延ばしたいなら早めに方向性を決めて動くことが重要です。",
    ],
    keyFacts: [
      { label: "セカンド/サードビザ", value: "規定の労働(88日/6か月)で最大3年" },
      { label: "学生ビザ", value: "学校に通学。就労時間に制限あり" },
      { label: "就労ビザ", value: "雇用主のスポンサーが必要。準備に時間" },
      { label: "判断の鍵", value: "費用・準備期間・将来の目的(永住など)" },
    ],
    steps: [
      { title: "目的を明確化", description: "短期の延長か、長期的なキャリア・永住志向かで選ぶビザが変わります。" },
      { title: "条件と費用を確認", description: "各ビザの要件・申請料・必要書類を公式情報で確認します。" },
      { title: "早めに準備開始", description: "スポンサーや学校手配は時間がかかるため、1年目の中盤から動きます。" },
      { title: "専門家に相談（必要時）", description: "複雑なケースは登録移民エージェント(MARA)への相談も検討します。" },
    ],
    tips: [
      "ビザの空白期間（無資格滞在）は絶対に作らないこと。現ビザが切れる前に次の申請を。",
      "制度・要件は頻繁に変わります。最新情報は必ず公式で確認しましょう。",
    ],
    warnings: ["ビザ制度は予告なく変更されます。重大な判断の前に必ず公式情報・専門家で確認してください。"],
    verifiedAt: "2026-07-16",
    officialSources: [
      {
        label: "Department of Home Affairs｜List of all visas",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing",
        accessedAt: "2026-07-16",
      },
      {
        label: "Working Holiday visa (subclass 417)",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417",
        accessedAt: "2026-07-16",
      },
    ],
    searchIntent: "ワーホリ後の在留延長・ビザ選択",
    relatedSlugs: ["second-visa-guide", "whv-complete-guide", "language-school"],
    updatedAt: "2026-07-16",
    published: true,
  },

  {
    id: "a55",
    title: "目的別ワーホリモデルプラン｜英語・貯金・ローカル就職・セカンド",
    slug: "working-holiday-model-plans",
    category: "visa",
    hub: "start-here",
    priority: "P1",
    searchIntent: "ワーホリ モデルプラン 目的別",
    description:
      "「英語を伸ばす」「お金を貯める」「ローカル就職」「セカンドビザ取得」など目的別に、1年間の過ごし方のモデルプランを比較。都市選び・仕事・時期の組み立て方がわかります。",
    content: [
      "ワーキングホリデー（サブクラス417）の1年は自由度が高い反面、目的を決めずに過ごすと「英語も貯金も中途半端」で終わりがちです。まずは自分の最優先目的を1つ決め、それに合わせて都市・仕事・時期を逆算するのが成功のコツです。この記事では代表的な4つの目的別モデルプランを比較します。",
      "【英語重視プラン】到着後に語学学校へ数週間通い、ローカルの職場（カフェ・小売・ホスピタリティ）を目指すプランです。日本人が少なめの都市やローカル比率の高い職場を選ぶと英語環境を作りやすくなります。就学はビザ条件の範囲内（一般に最長17週間）で計画します。",
      "【貯金重視プラン】時給の高い仕事と生活費の安い地域を組み合わせるプランです。ファーム・鉱山周辺・地方の加工場などは短期間で稼ぎやすい一方、車が必要な場合が多く支出も変わります。収入と支出はセットで比較し、週単位の予算を管理しましょう。",
      "【ローカル就職・キャリアプラン】自分の専門（IT・調理・介護・美容など）を活かす仕事を狙うプランです。英文レジュメの準備、LinkedIn、契約形態（Casual/Contractor）の理解が鍵になります。就労は同一雇用主で原則6か月までという条件に注意が必要です。",
      "【セカンドビザ取得プラン】2年目・3年目のビザを見据え、早い時期に指定地域でSpecified Work（3か月＝最低88暦日）を終えるプランです。悪天候による無給日は日数に含められないため、収穫シーズンと地域を先に調べ、余裕を持って計画します。どのプランでも、目的を1つに絞り、残高証明・初期資金・保険を渡航前に整えておくことが共通の土台です。",
    ],
    keyFacts: [
      { label: "滞在期間", value: "1回の入国で最長12か月（条件を満たせば延長可）" },
      { label: "就学の目安", value: "一般に最長17週間まで" },
      { label: "同一雇用主", value: "原則6か月まで（例外あり）" },
      { label: "セカンド条件", value: "指定業種・地域で3か月＝最低88暦日のSpecified Work" },
    ],
    steps: [
      { title: "最優先の目的を1つ決める", description: "英語・貯金・キャリア・セカンドのどれを最優先にするかを決めます。すべてを同時に狙わないのがコツです。" },
      { title: "目的に合う都市・地域を選ぶ", description: "英語なら日本人が少なめの環境、貯金なら高時給×低生活費、セカンドなら指定地域を軸に選びます。" },
      { title: "時期と季節を逆算する", description: "ファームの収穫期、都市の求人が増える時期、語学学校の開講日などから逆算して渡航時期を決めます。" },
      { title: "初期資金と書類を準備", description: "残高証明・初期資金・保険・英文レジュメなど、目的に必要な準備を渡航前に整えます。" },
    ],
    tips: [
      "目的は途中で変えても構いませんが、最初の3か月は1つの目的に集中したほうが成果が出やすいです。",
      "貯金額や時給の相場は地域・時期で大きく変わります。SNSの体験談は参考にしつつ、必ず公式・複数ソースで裏取りしましょう。",
    ],
    faqs: [
      {
        question: "英語も貯金も両立できますか？",
        answer:
          "不可能ではありませんが、優先順位を決めないとどちらも中途半端になりがちです。前半は英語環境、後半は貯金と時期で分けるなど、フェーズを分ける方法がおすすめです。",
      },
      {
        question: "モデルプランは途中で変更できますか？",
        answer:
          "できます。ビザ有効期間内は仕事や滞在地を自由に変えられます。ただしセカンドビザを狙う場合は、Specified Workの条件と時期の制約があるため早めの計画が有利です。",
      },
    ],
    sources: [
      {
        label: "Department of Home Affairs｜Work and Holiday（417）",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417",
      },
    ],
    verifiedAt: "2026-07-17",
    officialSources: [
      {
        label: "Department of Home Affairs｜Working Holiday visa (subclass 417)",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417",
        accessedAt: "2026-07-17",
      },
    ],
    warnings: ["ビザ条件・就学期間・就労制限は予告なく変更されます。計画前に必ず公式情報を確認してください。"],
    relatedSlugs: ["whv-complete-guide", "working-holiday-common-mistakes", "second-visa-guide", "working-holiday-budget"],
    updatedAt: "2026-07-17",
    published: true,
  },

  {
    id: "a56",
    title: "ワーホリでよくある失敗30選｜出発前・仕事・家・税金の対策",
    slug: "working-holiday-common-mistakes",
    category: "visa",
    hub: "start-here",
    priority: "P0",
    searchIntent: "ワーホリ よくある失敗 対策",
    description:
      "出発前の準備、仕事探し、家探し、お金・税金でワーホリ経験者がつまずきやすい失敗と、その具体的な対策をまとめました。事前に知っておくだけで防げるトラブルが多数あります。",
    content: [
      "ワーキングホリデーで起きるトラブルの多くは「知っていれば防げた」ものです。ここでは出発前・仕事・住まい・お金/税金の4分野に分けて、経験者が特につまずきやすいポイントと対策を整理します。",
      "【出発前の失敗】パスポートの残存期間不足、ビザ許可前の航空券手配、保険の補償内容の未確認、初期資金の不足などが典型です。ビザは書面で許可されるまで渡航予約を確定しないこと、保険は治療費・救急搬送・持病の扱いを必ず確認することが大切です。",
      "【仕事の失敗】無給トライアルの言い値受け入れ、Cash in Hand（現金手渡し）による無記録就労、雇用契約書を確認せずに働き始める、といったケースです。最低賃金やPenalty Rate、無給トライアルの適法性はFair Workの公式情報で確認でき、給与未払いには相談窓口があります。",
      "【家探しの失敗】内見前の送金による賃貸詐欺、Bond（敷金）の非正規な預け方、入居時のCondition Report（現況報告）未作成などが多発します。内見前に送金しない、Bondは州の正規機関経由で預ける、入居時に写真付きで現況を記録する、が鉄則です。",
      "【お金・税金の失敗】TFN（納税者番号）未申請による高率課税、Superannuation（退職年金）の口座放置、タックスリターン未提出などです。ワーキングホリデーメーカーの税率や源泉徴収の仕組みはATO（豪州税務局）の公式情報で確認し、年度末（6月30日締め）のタックスリターンを忘れないようにしましょう。数字や制度は変わるため、金額は必ず公式で最新を確認してください。",
    ],
    keyFacts: [
      { label: "出発前の鉄則", value: "ビザは書面許可まで渡航予約を確定しない" },
      { label: "仕事の鉄則", value: "契約書・最低賃金・Penalty Rateを事前確認" },
      { label: "家の鉄則", value: "内見前に送金しない／Bondは正規機関へ" },
      { label: "税の鉄則", value: "TFN申請・Super管理・タックスリターン提出" },
    ],
    steps: [
      { title: "出発前チェックを済ませる", description: "パスポート残存・ビザ書面許可・保険内容・初期資金を確認してから渡航予約を確定します。" },
      { title: "働く前に条件を確認", description: "雇用契約・時給・Penalty Rate・トライアルの条件を確認し、記録の残る就労を選びます。" },
      { title: "家は現物・書面で確認", description: "内見してから契約し、Bondは正規機関、入居時はCondition Reportで記録します。" },
      { title: "お金の手続きを早めに", description: "TFN申請・銀行口座・Super口座を早めに整え、年度末のタックスリターンを準備します。" },
    ],
    tips: [
      "「うまい話」ほど詐欺・違法就労のリスクが高いです。相場より極端に良い条件は一度立ち止まって確認しましょう。",
      "トラブル時の公式相談窓口（Fair Work・州の賃貸機関・ATO）を最初にブックマークしておくと安心です。",
    ],
    faqs: [
      {
        question: "一番多い失敗は何ですか？",
        answer:
          "資金・時期の見積もり不足と、契約書を確認せずに仕事・家を決めることです。焦って決めるほどトラブルが増えます。到着後の手続きは順番を守り、書面で確認する習慣が最大の予防策です。",
      },
      {
        question: "トラブルに遭ったらどうすればいいですか？",
        answer:
          "分野ごとの公式窓口に相談します。給与未払い・労働条件はFair Work、賃貸・Bondは州の賃貸機関、税・SuperはATOが公式の相談先です。証拠（契約書・明細・写真）を残しておくと解決が早まります。",
      },
    ],
    sources: [
      {
        label: "Fair Work Ombudsman（労働条件の公式情報）",
        url: "https://www.fairwork.gov.au/",
      },
      {
        label: "Australian Taxation Office（税・Superの公式情報）",
        url: "https://www.ato.gov.au/",
      },
    ],
    verifiedAt: "2026-07-17",
    officialSources: [
      {
        label: "Fair Work Ombudsman",
        url: "https://www.fairwork.gov.au/",
        accessedAt: "2026-07-17",
      },
      {
        label: "Australian Taxation Office｜Working holiday makers",
        url: "https://www.ato.gov.au/individuals-and-families/coming-to-australia-or-going-overseas/working-holiday-makers",
        accessedAt: "2026-07-17",
      },
    ],
    warnings: ["制度・金額・窓口は変更されることがあります。対応前に必ず各公式サイトで最新情報を確認してください。"],
    relatedSlugs: ["whv-complete-guide", "working-holiday-model-plans", "rental-scam-examples", "underpayment-unpaid-wages"],
    updatedAt: "2026-07-17",
    published: true,
  },

  {
    id: "a57",
    title: "英語に自信がなくてもワーホリできる？現実的な準備と仕事の選び方",
    slug: "working-holiday-with-low-english",
    category: "visa",
    hub: "start-here",
    priority: "P1",
    searchIntent: "英語 苦手 ワーホリ できる",
    description:
      "英語初心者でもワーホリは可能です。ビザに英語試験は不要という前提を確認し、渡航前の準備、最初に就きやすい仕事、英語を伸ばす環境の作り方を現実的に解説します。",
    content: [
      "結論として、英語に自信がなくてもワーキングホリデー（サブクラス417）は可能です。ビザ申請にIELTSなどの英語試験は求められません。ただし到着後の生活・仕事の選択肢は英語力で変わるため、渡航前後の工夫で差を縮められます。",
      "渡航前は、完璧を目指すより「使う場面の英語」を優先しましょう。自己紹介、面接、家探し、銀行・病院・買い物など、実際に使うフレーズを場面別に準備しておくと到着後の不安が大きく減ります。本サイトの英語フレーズ集も活用してください。",
      "最初に就きやすい仕事としては、日本食レストランなど日本語が通じる職場、清掃・倉庫・ファームなど定型作業が中心の仕事があります。まずここで生活を安定させ、慣れてきたらローカルの職場に挑戦する、という段階的な進め方が現実的です。",
      "英語を伸ばすには「英語を使わざるを得ない環境」を意図的に作るのが近道です。日本人が少なめの職場やシェアハウス、Language ExchangeやMeetupへの参加、語学学校の短期利用（ビザ条件の範囲内）などが有効です。就学は一般に最長17週間まで可能です。",
      "焦りは禁物です。最初の数か月は英語が思うように通じず落ち込むこともありますが、生活の中で毎日使えば必ず慣れます。安全・お金・契約など重要な場面では、無理に英語だけで判断せず、翻訳アプリや公式の日本語情報、必要なら通訳・専門家を使って正確さを優先しましょう。",
    ],
    keyFacts: [
      { label: "ビザの英語要件", value: "なし（英語試験は不要）" },
      { label: "就学の目安", value: "一般に最長17週間まで" },
      { label: "最初に就きやすい仕事", value: "日本食店・清掃・倉庫・ファーム等" },
      { label: "上達のコツ", value: "英語を使わざるを得ない環境を作る" },
    ],
    steps: [
      { title: "場面別フレーズを準備", description: "自己紹介・面接・家探し・買い物など、使う場面の英語を渡航前に準備します。" },
      { title: "生活を安定させる仕事から", description: "まずは定型作業や日本語が通じる職場で収入を確保し、生活基盤を作ります。" },
      { title: "英語環境を意図的に作る", description: "日本人が少なめの職場・シェア、Meetup、短期の語学学校などを組み合わせます。" },
      { title: "重要判断は正確さ優先", description: "契約・お金・安全に関わる場面は翻訳・日本語情報・専門家を使い、誤解を防ぎます。" },
    ],
    tips: [
      "翻訳アプリは会話補助に便利ですが、契約書やビザ・税など重要書類は公式の日本語情報や専門家で必ず裏取りしましょう。",
      "「聞き返す」フレーズ（Could you say that again, please? など）を先に覚えると会話が続けやすくなります。",
    ],
    faqs: [
      {
        question: "全く話せなくても仕事は見つかりますか？",
        answer:
          "見つかる可能性はありますが、選択肢は限られます。日本語が通じる職場や定型作業の仕事から始め、生活しながら英語を伸ばすのが現実的です。基本的な受け答えができると選択肢が大きく広がります。",
      },
      {
        question: "語学学校には通うべきですか？",
        answer:
          "必須ではありませんが、到着直後の生活立ち上げと友達作りには有効です。就学はビザ条件の範囲内（一般に最長17週間）で計画しましょう。",
      },
    ],
    sources: [
      {
        label: "Department of Home Affairs｜Work and Holiday（417）",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417",
      },
    ],
    verifiedAt: "2026-07-17",
    officialSources: [
      {
        label: "Department of Home Affairs｜Working Holiday visa (subclass 417)",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417",
        accessedAt: "2026-07-17",
      },
    ],
    warnings: ["就学可能期間などビザ条件は変更されることがあります。計画前に公式情報で最新を確認してください。"],
    relatedSlugs: ["whv-complete-guide", "workplace-english", "language-exchange-meetup", "working-holiday-model-plans"],
    updatedAt: "2026-07-17",
    published: true,
  },

  {
    id: "a58",
    title: "車なしワーホリ完全ガイド｜暮らしやすい都市と仕事の選び方",
    slug: "working-holiday-without-car",
    category: "visa",
    hub: "start-here",
    priority: "P1",
    searchIntent: "ワーホリ 車なし 生活",
    description:
      "車を持たずにワーホリを送るための都市選び・住まい・仕事の考え方をまとめました。公共交通が発達した都市を拠点にすれば、車なしでも快適に生活できます。",
    content: [
      "ワーキングホリデーは車がなくても十分に成立します。ポイントは、公共交通が発達した都市を拠点に選び、職場と住まいを交通アクセスの良い範囲にまとめることです。車の維持費（保険・燃料・整備・駐車）がかからない分、生活費を抑えやすいという利点もあります。",
      "車なしで暮らしやすいのは、シドニー・メルボルン・ブリスベンなどの大都市です。電車・バス・トラムが整備され、交通カードやタッチ決済で移動できます。都市ごとに運賃体系やカードが異なるため、拠点を決めたら公共交通の仕組みを最初に確認しましょう。",
      "住まいは「駅・バス停に近い」「職場・スーパーが徒歩圏」を優先すると、車なしの不便さをほぼ感じずに済みます。家賃は交通利便性の高いエリアほど上がる傾向があるため、家賃と交通費・時間のバランスで選ぶのがコツです。",
      "仕事は、都市部のホスピタリティ・小売・清掃・倉庫・デリバリーなど公共交通で通える職種が中心になります。一方で、ファーム（Specified Work）や地方の仕事は車が前提のことが多く、車なしだと選択肢が狭まります。セカンドビザを狙う場合は、送迎付きファームや相乗り、車を持つ友人との協力など代替手段を事前に検討しましょう。",
      "移動を補う手段として、自転車・E-bike・電動キックボード、レンタカーやカーシェアの単発利用、長距離は国内線や長距離バス・鉄道の活用が有効です。E-bikeや電動キックボードは州ごとに交通ルール（ヘルメット・走行場所・速度）が異なるため、利用前に州の公式ルールを確認してください。",
    ],
    keyFacts: [
      { label: "車なし向きの拠点", value: "シドニー・メルボルン・ブリスベン等の大都市" },
      { label: "住まい選び", value: "駅・バス停・職場・スーパーへの近さを優先" },
      { label: "向く仕事", value: "都市部のホスピタリティ・小売・清掃・倉庫・配達" },
      { label: "注意", value: "ファーム/地方は車前提が多く代替手段が必要" },
    ],
    steps: [
      { title: "公共交通の強い都市を選ぶ", description: "電車・バス・トラムが整備された大都市を拠点にします。" },
      { title: "交通利便の良い家を選ぶ", description: "駅・バス停・職場・スーパーに近い物件を優先し、家賃と交通のバランスを取ります。" },
      { title: "通える仕事を選ぶ", description: "公共交通で通勤できる職種を中心に探します。" },
      { title: "代替移動手段を用意", description: "自転車・E-bike、カーシェア、長距離は国内線・バス・鉄道を組み合わせます。" },
    ],
    tips: [
      "セカンドビザのファームは「送迎あり」「最寄り町から通える」求人を探すと車なしでも挑戦しやすいです。",
      "E-bike・電動キックボードのルールは州ごとに違います。ヘルメット義務や走行場所を必ず確認しましょう。",
    ],
    faqs: [
      {
        question: "車なしでセカンドビザは取れますか？",
        answer:
          "取れますが選択肢は狭まります。送迎付きのファーム求人や相乗り、車を持つ仲間との協力が現実的です。地域と求人を先に調べ、通勤手段を確保してから動きましょう。",
      },
      {
        question: "車を買うか迷っています。",
        answer:
          "都市中心の生活なら不要なことが多く、維持費を節約できます。地方移動やファーム中心なら車が有利です。目的と拠点によって判断が変わるため、滞在プランに合わせて決めましょう。",
      },
    ],
    sources: [
      {
        label: "Department of Home Affairs｜Work and Holiday（417）",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417",
      },
    ],
    verifiedAt: "2026-07-17",
    officialSources: [
      {
        label: "Department of Home Affairs｜Working Holiday visa (subclass 417)",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417",
        accessedAt: "2026-07-17",
      },
    ],
    warnings: ["交通ルール・運賃は州・都市で異なり変更されます。利用前に各交通機関・州政府の公式情報を確認してください。"],
    relatedSlugs: ["whv-complete-guide", "city-public-transport-comparison", "e-bike-e-scooter-rules", "working-holiday-model-plans"],
    updatedAt: "2026-07-17",
    published: true,
  },

  {
    id: "a59",
    title: "カップルでオーストラリアワーホリ｜家・仕事・お金の注意点",
    slug: "working-holiday-couple",
    category: "visa",
    hub: "start-here",
    priority: "P2",
    searchIntent: "カップル ワーホリ 注意点",
    description:
      "カップルでのワーホリを成功させるための、家探し・仕事・お金の管理の注意点をまとめました。二人だからこそ有利な点と、揉めやすい点の両方を整理します。",
    content: [
      "カップルでのワーキングホリデーは、家賃や生活費を分担できる、心細さが減る、といった利点があります。一方で、住まい・仕事・お金の方針が合わないと関係のストレスにつながるため、渡航前に価値観と目的をすり合わせておくことが重要です。ビザはそれぞれが個別に申請・保有します（2人分のビザが必要）。",
      "家探しでは、カップル可（Couple OK）の部屋を探す必要があります。シェアハウスによっては1人部屋のみ、または二人入居で家賃が上がる場合があります。内見前の送金は詐欺リスクがあるため避け、契約条件（家賃・光熱費・Bond）を二人で確認しましょう。",
      "仕事は、同じ職場で働けると通勤や生活リズムを合わせやすい反面、二人同時に無収入になるリスクもあります。あえて別の職場・別業種で働き、収入源を分散させるという考え方も有効です。セカンドビザを狙う場合は、二人とも指定地域のSpecified Work条件を満たす必要があります。",
      "お金の管理は最も揉めやすいポイントです。共同で管理するのか、生活費だけ折半して各自の貯金は分けるのかを最初に決めましょう。共同口座を作る場合は、解約・帰国時の扱いも含めてルールを決めておくとトラブルを防げます。",
      "関係の維持も大切です。慣れない環境・お金の不安・言葉の壁が重なると衝突が増えがちです。役割分担（家探し担当・お金担当など）を決め、定期的に予算と目的を話し合うと、二人のワーホリはぐっと安定します。",
    ],
    keyFacts: [
      { label: "ビザ", value: "各自が個別に申請・保有（2人分必要）" },
      { label: "家探し", value: "Couple OKの部屋／二人入居の条件を確認" },
      { label: "仕事", value: "同職場は効率的だが収入分散も検討" },
      { label: "お金", value: "共同管理か折半かを最初に決める" },
    ],
    steps: [
      { title: "目的と価値観をすり合わせる", description: "英語・貯金・キャリア・セカンドなど、二人の優先順位を渡航前に合わせます。" },
      { title: "Couple OKの家を探す", description: "二人入居可の物件を探し、家賃・光熱費・Bondの条件を二人で確認します。" },
      { title: "仕事の分散を検討", description: "同職場か別職場か、収入源の分散リスクを踏まえて決めます。" },
      { title: "お金のルールを決める", description: "共同管理か折半か、共同口座の扱いを最初に決めておきます。" },
    ],
    tips: [
      "役割分担（家担当・お金担当・手続き担当）を決めると、二人の負担が偏らずスムーズです。",
      "二人同時に無収入にならないよう、仕事の開始時期や職場をずらすとリスクを下げられます。",
    ],
    faqs: [
      {
        question: "カップルでビザは一緒に申請できますか？",
        answer:
          "ワーキングホリデービザは個人ごとの申請です。二人それぞれが条件を満たして申請・保有する必要があります。同伴者としてまとめて申請することはできません。",
      },
      {
        question: "二人で同じファームで働けますか？",
        answer:
          "多くの場合可能ですが、求人や宿泊の状況によります。カップル可・二人分の宿泊がある求人を探すとよいでしょう。セカンドを狙う場合は二人ともSpecified Work条件を満たす必要があります。",
      },
    ],
    sources: [
      {
        label: "Department of Home Affairs｜Work and Holiday（417）",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417",
      },
    ],
    verifiedAt: "2026-07-17",
    officialSources: [
      {
        label: "Department of Home Affairs｜Working Holiday visa (subclass 417)",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417",
        accessedAt: "2026-07-17",
      },
    ],
    warnings: ["ビザは個別申請です。制度・条件は変更されることがあるため、申請前に必ず公式情報を確認してください。"],
    relatedSlugs: ["whv-complete-guide", "couple-room-housing", "joint-account-couples", "working-holiday-model-plans"],
    updatedAt: "2026-07-17",
    published: true,
  },

  {
    id: "a60",
    title: "女性ひとりのオーストラリアワーホリ安全・生活ガイド",
    slug: "working-holiday-solo-woman",
    category: "visa",
    hub: "start-here",
    priority: "P1",
    searchIntent: "女性 一人 ワーホリ 安全",
    description:
      "女性がひとりでワーホリを安全に送るための、住まい・移動・仕事・緊急時の備えを実践的にまとめました。過度に不安がる必要はありませんが、基本の対策は押さえておきましょう。",
    content: [
      "女性のひとりワーホリは多くの人が実現しています。過度に不安になる必要はありませんが、住まい・移動・仕事・緊急時の基本対策を押さえることで、より安心して生活できます。緊急時は全国共通の緊急通報番号000（警察・救急・消防）を覚えておきましょう。",
      "住まいでは、女性専用・女性限定のシェアハウスやドミトリーを選ぶ、内見して同居人や施錠を確認する、内見前に送金しない、といった基本が重要です。契約前にCondition Report（現況報告）や鍵の管理方法も確認しておくと安心です。",
      "移動では、夜間の一人歩きを避ける、明るく人通りのある道を選ぶ、配車アプリやタクシーを使う、といった一般的な安全対策が有効です。位置情報を信頼できる人と共有できるアプリを活用するのもよいでしょう。",
      "仕事では、給与や労働条件が不透明な求人、面接場所が不自然な求人、個人宅での不明瞭な仕事などに注意します。労働条件はFair Workで確認でき、ハラスメントや不当な扱いには相談窓口があります。少しでも不安を感じたら無理をせず、契約前に立ち止まって確認しましょう。",
      "緊急時の備えとして、在留届（オンライン）や「たびレジ」への登録、加入保険の連絡先・補償内容の把握、女性の健康相談先（GP・クリニック）の確認をしておくと安心です。困ったときに頼れる公式窓口を最初に把握しておくことが、安心につながります。",
    ],
    keyFacts: [
      { label: "緊急通報", value: "000（警察・救急・消防、全国共通）" },
      { label: "住まい", value: "女性専用・内見・施錠確認／内見前送金は避ける" },
      { label: "仕事", value: "不透明な求人に注意／Fair Workで条件確認" },
      { label: "備え", value: "在留届・たびレジ・保険連絡先・医療相談先" },
    ],
    steps: [
      { title: "安全な住まいを選ぶ", description: "女性専用や内見済みの物件を選び、施錠・同居人・契約条件を確認します。" },
      { title: "移動の安全対策", description: "夜間の一人歩きを避け、配車アプリや位置共有を活用します。" },
      { title: "仕事は条件を確認", description: "不透明な求人を避け、労働条件はFair Workで確認します。" },
      { title: "緊急時の備え", description: "在留届・たびレジ登録、保険・医療相談先を事前に把握します。" },
    ],
    tips: [
      "信頼できる人と居場所を共有できる設定にしておくと、緊急時に助けを求めやすくなります。",
      "女性の健康（GP・婦人科・検査）に関する相談先を早めに把握しておくと安心です。",
    ],
    faqs: [
      {
        question: "女性ひとりのワーホリは危険ですか？",
        answer:
          "基本的な安全対策を守れば、多くの女性が問題なく生活しています。住まい・移動・仕事の選び方で防げるリスクが大半です。過度に恐れる必要はありませんが、油断せず基本を徹底しましょう。",
      },
      {
        question: "緊急時はどこに連絡すればいいですか？",
        answer:
          "生命に関わる緊急事態は000（警察・救急・消防）に通報します。加えて、加入保険の緊急連絡先、日本領事館の連絡先を控えておくと安心です。",
      },
    ],
    sources: [
      {
        label: "Department of Home Affairs｜Work and Holiday（417）",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417",
      },
      {
        label: "Fair Work Ombudsman（労働条件の公式情報）",
        url: "https://www.fairwork.gov.au/",
      },
    ],
    verifiedAt: "2026-07-17",
    officialSources: [
      {
        label: "Fair Work Ombudsman",
        url: "https://www.fairwork.gov.au/",
        accessedAt: "2026-07-17",
      },
    ],
    warnings: ["安全に関わる制度・窓口は変わることがあります。緊急連絡先や相談先は最新の公式情報で確認してください。"],
    relatedSlugs: ["whv-complete-guide", "womens-health-guide", "dating-safety-australia", "consular-registration"],
    updatedAt: "2026-07-17",
    published: true,
  },

  {
    id: "a61",
    title: "29歳・30歳からのラストワーホリ｜申請期限とキャリア設計",
    slug: "working-holiday-age-29-30",
    category: "visa",
    hub: "start-here",
    priority: "P2",
    searchIntent: "30歳 ワーホリ 年齢制限 期限",
    description:
      "年齢上限が近い29〜30歳からのワーホリで注意したい申請期限の考え方と、限られた時間を無駄にしないキャリア設計・目的の絞り方を解説します。",
    content: [
      "日本国籍の場合、ワーキングホリデー（サブクラス417）は申請時に18〜30歳であることが条件です（30歳のうちに申請）。年齢上限が近い人ほど、申請のタイミングを逃さないことが最重要になります。ビザの申請可能な年齢や締切の扱いは変更されることがあるため、必ず公式情報で最新の条件を確認してください。",
      "30歳前後で申請する場合、まず確認すべきは「いつまでに申請すればよいか」です。一般に申請時点の年齢が要件となるため、誕生日との兼ね合いで申請可能な期限が決まります。パスポート更新が必要な場合は先に済ませ、余裕を持って申請しましょう。",
      "年齢が上の人ほど、目的を絞ることが成果に直結します。英語・貯金・キャリアのうち最優先を1つ決め、遠回りを減らすことで、限られた1年を有効に使えます。これまでの職歴・専門を活かせる仕事を狙うと、時給や経験の面で有利になりやすいです。",
      "帰国後のキャリアも見据えましょう。ワーホリ経験（英語環境での就労、異文化対応、自立した生活）は、伝え方次第で日本の転職・キャリアに活かせます。渡航前に「何を持ち帰るか」を決めておくと、現地での行動が明確になります。",
      "セカンド・サードビザで滞在を延ばす選択肢もありますが、これも年齢や条件の制約があります。延長を考える場合は、早い時期にSpecified Work（3か月＝最低88暦日）を計画的に終えることが鍵です。制度・年齢条件は変わり得るため、延長の可否は必ず公式で確認してください。",
    ],
    keyFacts: [
      { label: "年齢要件", value: "申請時に18〜30歳（日本国籍）" },
      { label: "最重要", value: "申請タイミングを逃さない（年齢は申請時点で判定）" },
      { label: "成功のコツ", value: "目的を1つに絞り遠回りを減らす" },
      { label: "延長", value: "セカンド/サードは条件・年齢の制約あり" },
    ],
    steps: [
      { title: "申請可能期限を確認", description: "誕生日と年齢要件から、いつまでに申請できるかを公式情報で確認します。" },
      { title: "パスポートを整える", description: "更新が必要なら先に済ませ、余裕を持って申請します。" },
      { title: "目的を1つに絞る", description: "英語・貯金・キャリアのうち最優先を決め、行動を集中させます。" },
      { title: "帰国後を見据える", description: "持ち帰る経験・スキルを決め、必要ならセカンドの計画も早めに立てます。" },
    ],
    tips: [
      "年齢要件は「申請時」で判定されるのが一般的です。誕生日が近い人は締切を逆算して早めに申請しましょう。",
      "職歴・資格を活かせる仕事は時給・経験で有利になりやすいです。英文レジュメを早めに整えましょう。",
    ],
    faqs: [
      {
        question: "30歳を過ぎたら申請できませんか？",
        answer:
          "日本国籍の場合、申請時に30歳までである必要があります。年齢の判定基準や締切の扱いは変更されることがあるため、申請を検討している人は早めに公式情報で最新条件を確認してください。",
      },
      {
        question: "年齢が上でも仕事は見つかりますか？",
        answer:
          "見つかります。むしろ職歴・専門・落ち着いた対応力が評価される場面もあります。目的を絞り、これまでの経験を活かせる仕事を狙うと効率的です。",
      },
    ],
    sources: [
      {
        label: "Department of Home Affairs｜Work and Holiday（417）",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417",
      },
    ],
    verifiedAt: "2026-07-17",
    officialSources: [
      {
        label: "Department of Home Affairs｜Working Holiday visa (subclass 417) Eligibility",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417",
        accessedAt: "2026-07-17",
      },
    ],
    warnings: ["年齢要件・申請期限・延長条件は変更されることがあります。申請前に必ず公式情報で最新を確認してください。"],
    relatedSlugs: ["whv-complete-guide", "working-holiday-model-plans", "second-visa-guide", "use-wh-experience-in-resume"],
    updatedAt: "2026-07-17",
    published: true,
  },

  {
    id: "a62",
    title: "ワーホリビザ417の申請条件｜年齢・国籍・資金・扶養家族",
    slug: "working-holiday-eligibility",
    category: "visa",
    hub: "visa",
    priority: "P0",
    searchIntent: "ワーホリ 417 申請条件 年齢 資金",
    description:
      "日本国籍者がワーキングホリデービザ（サブクラス417）を申請できる条件を、公式情報ベースで整理。年齢・パスポート・資金・扶養家族・過去の417歴まで、申請前に必ず確認すべき要件をまとめました。",
    content: [
      "ワーキングホリデービザ（サブクラス417）を申請するための主な条件は、①申請時に18〜30歳であること、②対象国・地域のパスポートを持っていること（日本は対象）、③オーストラリア国外から申請すること、④扶養する子ども（dependent children）を同伴しないこと、⑤過去に417または462ビザでオーストラリアに入国したことがないこと（1回目の場合）です。日本国籍者は417（Working Holiday visa）の対象で、年齢上限は30歳です。",
      "年齢は『申請時点』で判定されます。31歳になる前（＝30歳のうち）に申請を完了すれば、許可・入国が誕生日後になっても問題ありません。誕生日が近い人は締切を逆算し、パスポート更新が必要なら先に済ませてから早めに申請しましょう。",
      "資金要件も重要です。オーストラリア到着後の生活を支えられる資金として、目安で約5,000 AUDを保有していることが求められます。加えて、帰国用の航空券を購入できる資金、または購入済みであることが望ましいとされています。申請時に必ず提出するわけではありませんが、求められた場合に備えて英文の残高証明を用意しておくと安心です（→ 残高証明の記事参照）。",
      "扶養家族については、申請者本人のみの申請となり、配偶者やパートナーを申請に含めることはできません。カップルで渡豪する場合も、それぞれが個別に申請します。また、扶養する子どもを同伴しての滞在は認められていません。",
      "健康・人物（Health・Character）要件を満たすことも条件です。場合によっては健康診断や犯罪経歴証明の提出を求められることがあります。申請フォームの健康・経歴に関する質問には正直に回答してください。虚偽申告は不許可や将来のビザ取得への悪影響につながります。",
      "これらの条件・数値は予告なく変更されることがあります。申請を検討している人は、申請直前に必ずオーストラリア内務省（Department of Home Affairs）の公式ページで最新の要件を確認してください。",
    ],
    keyFacts: [
      { label: "年齢", value: "申請時に18〜30歳（日本国籍は30歳まで）" },
      { label: "国籍", value: "対象国・地域のパスポート（日本は417の対象）" },
      { label: "申請場所", value: "オーストラリア国外から申請（1回目）" },
      { label: "資金の目安", value: "約5,000 AUD＋帰国用航空券相当" },
      { label: "扶養家族", value: "扶養する子どもの同伴不可・家族を申請に含められない" },
      { label: "過去歴", value: "過去に417/462で入国済みは1回目の対象外" },
    ],
    steps: [
      { title: "年齢と国籍を確認", description: "申請時に18〜30歳か、日本のパスポートを保有しているかを確認します。" },
      { title: "パスポートを整える", description: "有効期限が滞在予定より長く残っているか確認し、必要なら先に更新します。" },
      { title: "資金を準備", description: "約5,000 AUD相当の資金と帰国用航空券分を確保し、英文残高証明を用意します。" },
      { title: "健康・人物要件を確認", description: "健康診断・犯罪経歴証明を求められる可能性に備え、質問には正直に回答します。" },
    ],
    tips: [
      "年齢は『申請時』で判定されます。誕生日が近い人は締切を逆算して早めに申請しましょう。",
      "残高証明は求められてから慌てないよう、英文で事前に取得しておくと安心です。",
      "1回目はオーストラリア国外からの申請が原則です。旅行中の申請タイミングに注意しましょう。",
    ],
    faqs: [
      {
        question: "英語試験のスコアは必要ですか？",
        answer:
          "417ビザの申請に英語試験（IELTS等）のスコア提出は不要です。ただし現地の仕事探しには日常会話レベルがあると有利です。",
      },
      {
        question: "貯金が5,000 AUDに満たない場合は申請できませんか？",
        answer:
          "資金要件は目安として示されています。不足していると懸念がある場合は、申請前に公式情報を確認し、必要資金を準備してから申請するのが安全です。",
      },
      {
        question: "カップルは一緒に申請できますか？",
        answer:
          "できません。ワーホリビザは個人単位の申請です。パートナー同士でもそれぞれ別々に申請します。",
      },
    ],
    sources: [
      { label: "Department of Home Affairs｜First Working Holiday visa (417)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/first-working-holiday-417" },
    ],
    verifiedAt: "2026-07-17",
    officialSources: [
      {
        label: "Department of Home Affairs｜Working Holiday visa (subclass 417)",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417",
        accessedAt: "2026-07-17",
      },
      {
        label: "Department of Home Affairs｜First Working Holiday visa（条件・費用）",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/first-working-holiday-417",
        accessedAt: "2026-07-17",
      },
    ],
    warnings: ["申請条件・資金の目安・年齢要件は変更されることがあります。申請前に必ず公式情報で最新を確認してください。"],
    relatedSlugs: ["visa-application", "visa-cost-processing-time", "visa-proof-of-funds", "whv-complete-guide"],
    updatedAt: "2026-07-17",
    published: true,
  },

  {
    id: "a63",
    title: "サブクラス417と462の違い｜対象国・条件・申請方法",
    slug: "visa-417-vs-462",
    category: "visa",
    hub: "visa",
    priority: "P2",
    searchIntent: "417 462 違い ワーホリ どっち",
    description:
      "Working Holiday visa（417）とWork and Holiday visa（462）の違いを、対象国・追加要件・申請方法の観点から整理。日本国籍者がどちらを申請するのかを最初に明確にします。",
    content: [
      "結論から言うと、日本国籍の人が申請するのはサブクラス417（Working Holiday visa）です。サブクラス462（Work and Holiday visa）は対象国が異なり、日本は462の対象ではありません。そのため『417か462か』で迷う必要は基本的になく、日本のパスポートで申請するのは417になります。",
      "417と462はどちらも18〜30歳（一部国籍は35歳）の若者向けで、最長12か月の滞在、就労・就学が可能という点は共通しています。滞在期間・費用・セカンド/サードでの延長制度も基本的な枠組みは似ています。",
      "大きな違いは『対象国』と『追加要件』です。462は国によって、学歴要件（一定の高等教育歴）、一定レベルの英語力の証明、自国政府からの推薦状（サポートレター）などの追加条件が課されることがあります。417はこうした学歴・英語要件が課されないのが一般的です。日本は417対象国のため、これらの462特有の追加要件は関係ありません。",
      "セカンド・サードビザの要件（Specified Work）も、417と462で対象となる仕事や地域の定義が異なる場合があります。日本国籍者は417の枠組みで、3か月（セカンド）・6か月（サード）の指定労働を行うことで延長を狙えます。",
      "他国籍の友人と情報交換する際は、相手が462対象国の場合、申請条件や必要書類が自分（417）と違うことを念頭に置きましょう。制度は国ごと・年ごとに変わるため、それぞれ自分の国籍に対応する公式ページで確認するのが確実です。",
    ],
    keyFacts: [
      { label: "日本国籍", value: "417（Working Holiday visa）を申請" },
      { label: "462の対象", value: "日本は462（Work and Holiday）の対象外" },
      { label: "共通点", value: "18〜30歳・最長12か月・就労就学可" },
      { label: "462の追加要件例", value: "学歴・英語力・推薦状（国により異なる）" },
      { label: "417の特徴", value: "学歴・英語要件は原則なし" },
    ],
    steps: [
      { title: "自分の国籍を確認", description: "日本のパスポートなら417が対象。462対象国の友人とは条件が異なります。" },
      { title: "417の条件を確認", description: "年齢・資金・パスポートなど417の申請条件を満たすか確認します。" },
      { title: "ImmiAccountで417を申請", description: "日本国籍者はサブクラス417のフォームで申請します。" },
    ],
    tips: [
      "日本のパスポートでは462は申請できません。『417 vs 462』で悩む必要はなく417で進めましょう。",
      "462対象国の人は学歴・英語証明・推薦状が必要な場合があります。他国籍の情報をそのまま自分に当てはめないよう注意。",
    ],
    faqs: [
      {
        question: "日本人でも462を選べますか？",
        answer:
          "選べません。462は対象国が指定されており、日本は含まれていません。日本国籍者は417を申請します。",
      },
      {
        question: "417と462で現地でできることは違いますか？",
        answer:
          "就労・就学・滞在期間などの基本的な枠組みは似ていますが、セカンド/サードの指定労働の扱いなど細部が異なる場合があります。自分の対象ビザ（日本は417）の条件で確認しましょう。",
      },
    ],
    sources: [
      { label: "Department of Home Affairs｜Working Holiday Maker program", url: "https://immi.homeaffairs.gov.au/what-we-do/whm-program/" },
    ],
    verifiedAt: "2026-07-17",
    officialSources: [
      {
        label: "Department of Home Affairs｜Working Holiday visa (subclass 417)",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417",
        accessedAt: "2026-07-17",
      },
      {
        label: "Department of Home Affairs｜Work and Holiday visa (subclass 462)",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-462",
        accessedAt: "2026-07-17",
      },
    ],
    warnings: ["対象国・追加要件は変更されることがあります。申請前に自分の国籍に対応する公式ページで確認してください。"],
    relatedSlugs: ["working-holiday-eligibility", "visa-application", "whv-complete-guide", "second-visa-guide"],
    updatedAt: "2026-07-17",
    published: true,
  },

  {
    id: "a64",
    title: "ワーホリビザの申請料金と審査期間｜いつ申請するべき？",
    slug: "visa-cost-processing-time",
    category: "visa",
    hub: "visa",
    priority: "P0",
    searchIntent: "ワーホリ ビザ 申請料 費用 審査 期間",
    description:
      "サブクラス417の申請料金（ファースト・セカンド・サード）と支払い方法、審査期間の考え方、そして『いつ申請すべきか』のタイミングを、公式情報ベースで解説します。",
    content: [
      "ワーホリビザ（417）の申請料金は、ファースト（1年目）が840 AUDです。セカンド（2年目）・サード（3年目）はそれぞれ1,000 AUDです（2026年7月時点・公式）。支払いはImmiAccount上でクレジットカード等により行い、申請料を支払うと審査が始まります。カードのブランドによっては別途サーチャージ（手数料）がかかる場合があります。",
      "審査期間は時期や申請量によって変動します。近年はワーホリ申請が非常に多く、通常より処理に時間がかかる傾向があると公式に案内されています。多くの場合は数日〜数週間で許可されますが、繁忙期（年度替わり・長期休暇前）はさらにかかることがあります。目安を知りたい場合は、公式の『visa processing times』ツールで直近の処理状況を確認できます。",
      "重要な注意点として、オーストラリア当局は『ビザが許可されたと書面で通知されるまで渡航の手配（航空券購入等）をしないように』と明記しています。許可前に航空券を確定させると、審査が長引いた場合にリスクとなります。渡航日が決まっているなら、余裕を持って出発の2〜3か月前には申請を済ませておくのがおすすめです。",
      "『いつ申請すべきか』は、①年齢（30歳の締切）、②パスポートの有効期限、③初回入国期限（First entry date）の3点から逆算します。許可されると通常は許可日から12か月以内に初回入国する必要があるため、あまりに早く申請すると入国期限が早まる点に注意が必要です。一般的には、渡航予定の2〜4か月前の申請がバランスの良いタイミングです。",
      "料金・処理期間・条件は予告なく変更されます。申請直前に必ず公式ページで最新の申請料と処理時間の案内を確認してください。",
    ],
    keyFacts: [
      { label: "ファースト申請料", value: "840 AUD（2026年7月時点・公式）" },
      { label: "セカンド/サード申請料", value: "各1,000 AUD" },
      { label: "支払い方法", value: "ImmiAccountでカード決済（サーチャージあり得る）" },
      { label: "審査期間", value: "数日〜数週間（繁忙期はさらに変動）" },
      { label: "渡航手配", value: "許可の書面通知が来るまで航空券を確定しない" },
      { label: "推奨申請時期", value: "渡航の2〜4か月前が目安" },
    ],
    steps: [
      { title: "申請料と処理時間を確認", description: "公式ページで最新の申請料（840 AUD）と直近の処理時間を確認します。" },
      { title: "申請時期を逆算", description: "年齢・パスポート・初回入国期限から、いつ申請するか決めます。" },
      { title: "ImmiAccountで支払い", description: "フォーム入力後、カードで申請料を支払うと審査開始です。" },
      { title: "許可通知を待って手配", description: "書面での許可通知を受け取ってから航空券を確定します。" },
    ],
    tips: [
      "許可される前に航空券を買わないこと。審査が長引いた場合のリスクを避けられます。",
      "早く申請しすぎると初回入国期限が早まります。渡航の2〜4か月前がバランス良好です。",
      "カード決済のサーチャージを避けたい場合は、対応するカードブランドを事前に確認しましょう。",
    ],
    faqs: [
      {
        question: "申請料は後で返金されますか？",
        answer:
          "原則として申請料は返金されません。不許可になっても返ってこないため、条件を満たしているか事前に十分確認してから申請しましょう。",
      },
      {
        question: "審査を早める方法はありますか？",
        answer:
          "一般に個別で早める方法はありません。書類に不備がなく正確に申請することが、結果的に最短の処理につながります。繁忙期を避けて早めに申請するのが有効です。",
      },
    ],
    sources: [
      { label: "Department of Home Affairs｜First Working Holiday visa（費用）", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/first-working-holiday-417" },
      { label: "Visa processing times（処理時間の目安）", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-processing-times/global-visa-processing-times" },
    ],
    verifiedAt: "2026-07-17",
    officialSources: [
      {
        label: "Department of Home Affairs｜First Working Holiday visa（Cost AUD840）",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/first-working-holiday-417",
        accessedAt: "2026-07-17",
      },
      {
        label: "Department of Home Affairs｜Working Holiday visa (subclass 417)",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417",
        accessedAt: "2026-07-17",
      },
    ],
    warnings: ["申請料・処理期間は予告なく変更されます。申請前に必ず公式情報で最新を確認してください。"],
    relatedSlugs: ["visa-application", "working-holiday-eligibility", "visa-first-entry-deadline", "working-holiday-timeline"],
    updatedAt: "2026-07-17",
    published: true,
  },

  {
    id: "a65",
    title: "残高証明はいくら必要？英文残高証明の取り方と注意点",
    slug: "visa-proof-of-funds",
    category: "visa",
    hub: "visa",
    priority: "P0",
    searchIntent: "ワーホリ 残高証明 いくら 英文 取り方",
    description:
      "ワーホリビザの資金要件（目安 約5,000 AUD）と、銀行で英文の残高証明を取得する方法・費用・注意点を解説。求められたときにすぐ提出できるよう準備しておきましょう。",
    content: [
      "ワーホリビザ（417）の資金要件の目安は、オーストラリア滞在を支えられる資金として約5,000 AUD（日本円で概ね50万円前後）です。加えて、帰国用の航空券を購入できる資金があること（または購入済み）が望ましいとされています。この資金は申請時に必ず提出するわけではありませんが、審査官から求められた場合に備えて『英文の残高証明書（bank balance certificate / bank statement in English）』を準備しておくと安心です。",
      "英文残高証明は、日本の銀行の窓口またはネットバンキングで発行を依頼します。多くの銀行で英文の残高証明書または英文の取引明細を有料（1通あたり数百円〜千数百円程度）で発行できます。発行までに数日〜1週間程度かかる銀行もあるため、渡航準備の早い段階で依頼しておきましょう。",
      "証明書には、氏名（パスポートと同じローマ字表記）、口座残高、発行日、通貨が明記されていることを確認します。氏名のスペルがパスポートと一致していないと本人確認で問題になることがあるため、依頼時にローマ字表記を正確に伝えましょう。残高は最新の日付のものを用意し、古すぎる証明にならないよう渡航時期に合わせて取得します。",
      "資金が一時的に基準を下回っている場合、家族からの一時的な入金で見かけ上の残高を作るのはおすすめできません。審査で資金の実在性や出所を確認される可能性があり、実際に生活を支えられる資金があることが重要です。無理のない資金計画で、到着後に仕事が決まるまでの生活費（家賃・食費・当面の交通費）を賄えるようにしておきましょう。",
      "資金の目安や運用は変更されることがあります。金額の基準は公式ページで、英文証明の発行方法・費用は利用している銀行の案内で、それぞれ最新情報を確認してください。",
    ],
    keyFacts: [
      { label: "資金の目安", value: "約5,000 AUD＋帰国用航空券相当" },
      { label: "証明書類", value: "英文の残高証明書 / 英文取引明細" },
      { label: "発行元", value: "利用中の銀行（窓口・ネットバンキング）" },
      { label: "費用の目安", value: "1通あたり数百円〜千数百円程度" },
      { label: "所要日数", value: "即日〜1週間程度（銀行による）" },
    ],
    steps: [
      { title: "必要額を確認", description: "目安の約5,000 AUD＋帰国航空券相当を保有しているか確認します。" },
      { title: "銀行に英文証明を依頼", description: "窓口またはネットバンキングで英文残高証明を申し込みます。ローマ字表記を正確に伝えます。" },
      { title: "記載内容を確認", description: "氏名・残高・発行日・通貨が正しいか、パスポート表記と一致するか確認します。" },
      { title: "PDFで保管", description: "原本とスキャン/PDFの両方を保管し、求められたらすぐ提出できるようにします。" },
    ],
    tips: [
      "氏名のローマ字はパスポートと完全一致させること。不一致は本人確認トラブルの原因です。",
      "証明書は渡航時期に合わせて取得し、古すぎるものにならないようにしましょう。",
      "見せ金（一時的な入金）に頼らず、実際に生活を支えられる資金を用意するのが安全です。",
    ],
    faqs: [
      {
        question: "残高証明は必ず提出しますか？",
        answer:
          "申請時に必ず提出するわけではありませんが、求められた場合に備えて用意しておくと安心です。すぐ提出できるよう英文でPDF保管しておきましょう。",
      },
      {
        question: "円建てとドル建てのどちらで用意すべきですか？",
        answer:
          "日本の口座は円建てで問題ありません。目安のAUD額に相当する円を保有していることが分かれば十分です。為替変動を考慮して余裕を持って準備しましょう。",
      },
    ],
    sources: [
      { label: "Department of Home Affairs｜First Working Holiday visa", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/first-working-holiday-417" },
    ],
    verifiedAt: "2026-07-17",
    officialSources: [
      {
        label: "Department of Home Affairs｜Working Holiday visa (subclass 417)",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417",
        accessedAt: "2026-07-17",
      },
    ],
    warnings: ["資金の目安は変更されることがあります。金額の基準は必ず公式情報で最新を確認してください。"],
    relatedSlugs: ["working-holiday-eligibility", "visa-application", "cards-and-cash-before-departure", "working-holiday-budget"],
    updatedAt: "2026-07-17",
    published: true,
  },

  {
    id: "a66",
    title: "ワーホリビザで健康診断を求められた場合の流れ",
    slug: "visa-health-examination",
    category: "visa",
    hub: "visa",
    priority: "P1",
    searchIntent: "ワーホリ 健康診断 HAP 指定医療機関",
    description:
      "ワーホリビザ申請で健康診断（Health examination）を求められた場合の流れを解説。HAP IDの受け取り、指定医療機関（panel clinic）での受診、検査内容、結果が出るまでの流れをまとめました。",
    content: [
      "ワーホリビザの申請では、必ずしも全員が健康診断を求められるわけではありません。ただし、一定期間の医療・介護・保育などの仕事を予定している場合や、直近で特定の国に長期滞在した場合など、条件に該当すると健康診断（Health examination）を求められることがあります。求められた場合は、指示に従って指定の検査を受ける必要があります。",
      "健康診断を求められると、通常はImmiAccount経由またはメールで『HAP ID（Health Assessment Portal ID）』が発行されます。このHAP IDを持って、オーストラリア当局が指定する医療機関（panel physician / panel clinic）で受診します。日本国内にも指定医療機関があり、居住地に近い場所を選べます。自分でHAP IDを取得できる『My Health Declarations』という仕組みが使える場合もあります。",
      "検査内容は求められる範囲によって異なりますが、一般的には胸部レントゲン（結核スクリーニング）や身体診察が含まれることがあります。予約時に必要書類（パスポート、HAP ID、証明写真、眼鏡を使っている場合は眼鏡など）を確認し、指示された持ち物を用意して受診します。",
      "検査結果は指定医療機関からオーストラリア当局へ電子的に送信されるため、自分で結果を提出する必要は基本的にありません。結果の送信・審査には日数がかかることがあるため、渡航予定がある場合は早めに受診を済ませておきましょう。費用は自己負担で、検査項目により数千円〜数万円程度かかります。",
      "健康診断が必要かどうか、どの検査が求められるかは個々の申請内容によって異なります。指示された内容・期限・指定医療機関は、ImmiAccountの案内と公式ページで必ず確認してください。",
    ],
    keyFacts: [
      { label: "対象", value: "全員ではない。条件に該当すると求められる" },
      { label: "HAP ID", value: "健康診断用の識別番号（ImmiAccount/メールで発行）" },
      { label: "受診先", value: "当局指定の医療機関（panel clinic、日本国内にもあり）" },
      { label: "検査例", value: "胸部レントゲン・身体診察など（求められる範囲による）" },
      { label: "費用", value: "自己負担（検査項目により変動）" },
    ],
    steps: [
      { title: "健康診断の要否を確認", description: "ImmiAccountの案内で健康診断が求められているか確認します。" },
      { title: "HAP IDを受け取る", description: "HAP IDを取得し、指定医療機関を検索します。" },
      { title: "予約して受診", description: "パスポート・HAP ID・証明写真など指定の持ち物を用意して受診します。" },
      { title: "結果送信を待つ", description: "結果は医療機関から当局へ送信されます。審査完了を待ちます。" },
    ],
    tips: [
      "渡航予定があるなら早めに受診を。結果送信・審査に日数がかかることがあります。",
      "指定医療機関でしか有効な検査を受けられません。一般の病院で自己判断で受けないよう注意。",
    ],
    faqs: [
      {
        question: "全員が健康診断を受けますか？",
        answer:
          "いいえ。多くのワーホリ申請者は健康診断を求められませんが、予定する仕事や滞在歴などの条件に該当すると求められることがあります。",
      },
      {
        question: "どこで受ければよいですか？",
        answer:
          "オーストラリア当局が指定する医療機関（panel clinic）で受診します。日本国内にも指定機関があり、公式サイトで検索できます。一般の健康診断では代替できません。",
      },
    ],
    sources: [
      { label: "Department of Home Affairs｜Health examinations", url: "https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/health/how-to-get-your-health-examinations" },
    ],
    verifiedAt: "2026-07-17",
    officialSources: [
      {
        label: "Department of Home Affairs｜Arranging a health examination",
        url: "https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/health/how-to-get-your-health-examinations",
        accessedAt: "2026-07-17",
      },
    ],
    warnings: ["健康診断の要否・内容・指定医療機関は個々の申請で異なります。ImmiAccountの案内と公式情報を必ず確認してください。"],
    relatedSlugs: ["visa-application", "visa-police-certificate", "pre-departure-health-check", "working-holiday-eligibility"],
    updatedAt: "2026-07-17",
    published: true,
  },

  {
    id: "a67",
    title: "犯罪経歴証明を求められた場合｜日本と豪州の取得方法",
    slug: "visa-police-certificate",
    category: "visa",
    hub: "visa",
    priority: "P2",
    searchIntent: "ワーホリ 犯罪経歴証明 police check 取り方",
    description:
      "ワーホリビザ申請でCharacter要件により犯罪経歴証明（police certificate）を求められた場合の取得方法を、日本の警察発行の証明と豪州のNational Police Checkの両面から解説します。",
    content: [
      "ワーホリビザ申請では、人物（Character）要件を満たすことが条件の一つです。多くの申請者は証明書の提出を求められませんが、審査の過程で犯罪経歴証明（police certificate）を求められることがあります。求められた場合は、指示された国・期間の証明書を用意して提出します。",
      "日本での犯罪経歴証明は、警察（都道府県警察本部）が発行する『渡航証明書（警察庁の犯罪経歴証明書）』を取得します。申請は住所地を管轄する警察本部の窓口で行い、パスポートや提出先（オーストラリア移民当局）を示す書類の提示が求められます。証明書は密封されて発行されるのが一般的で、開封しないまま扱う点に注意が必要です。発行まで数週間かかることがあるため、求められたら早めに手続きしましょう。",
      "オーストラリアに一定期間以上滞在したことがある場合は、豪州の『National Police Check（AFP＝オーストラリア連邦警察が発行）』を求められることがあります。これはオンラインで申請でき、目的として移民・ビザ用（Commonwealth purpose）を選択します。手数料と処理期間がかかるため、こちらも早めの申請が安心です。",
      "どの国の証明が必要か、対象期間はいつからいつまでか、有効期限はどれくらいか、といった要件は申請ごとに異なります。ImmiAccountの指示に正確に従い、指定された国・期間の証明を用意してください。証明書の言語が日本語の場合、翻訳の要否も確認します。",
      "犯罪経歴証明の取得方法・手数料・処理期間は変更されることがあります。日本の証明は警察の案内で、豪州の証明はAFPの公式サイトで、それぞれ最新情報を確認してください。",
    ],
    keyFacts: [
      { label: "対象", value: "全員ではない。求められた場合に提出" },
      { label: "日本の証明", value: "都道府県警察本部で発行（渡航用犯罪経歴証明）" },
      { label: "豪州の証明", value: "AFP National Police Check（オンライン申請）" },
      { label: "注意", value: "日本の証明は密封のまま扱う（開封しない）" },
      { label: "所要期間", value: "数週間かかることがある（早めに申請）" },
    ],
    steps: [
      { title: "必要な国・期間を確認", description: "ImmiAccountの指示で、どの国のどの期間の証明が必要か確認します。" },
      { title: "日本の証明を申請", description: "住所地の警察本部で渡航用犯罪経歴証明を申請します。密封のまま保持します。" },
      { title: "豪州の証明を申請（該当時）", description: "豪州滞在歴がある場合はAFPのNational Police Checkをオンライン申請します。" },
      { title: "指示どおり提出", description: "求められた形式・言語で提出します。翻訳の要否も確認します。" },
    ],
    tips: [
      "日本の警察発行の証明は密封されています。開封すると無効になり得るため、そのまま扱いましょう。",
      "発行に数週間かかることがあります。求められたらすぐ手続きを始めましょう。",
    ],
    faqs: [
      {
        question: "全員が犯罪経歴証明を提出しますか？",
        answer:
          "いいえ。多くの申請者は求められません。審査の過程で必要と判断された場合に、指示に従って提出します。",
      },
      {
        question: "オーストラリアに行ったことがなくても豪州の証明が必要ですか？",
        answer:
          "通常、豪州に一定期間以上滞在した経験がない場合は豪州の証明は不要です。求められる国・期間はImmiAccountの指示で確認してください。",
      },
    ],
    sources: [
      { label: "警察庁｜犯罪経歴証明書（渡航用）", url: "https://www.npa.go.jp/policies/application/koseki/index.html" },
      { label: "Australian Federal Police｜National Police Checks", url: "https://www.afp.gov.au/what-we-do/services/criminal-records/national-police-checks" },
    ],
    verifiedAt: "2026-07-17",
    officialSources: [
      {
        label: "Department of Home Affairs｜Character requirements / Police certificates",
        url: "https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/character/character-requirements",
        accessedAt: "2026-07-17",
      },
      {
        label: "Australian Federal Police｜National Police Checks",
        url: "https://www.afp.gov.au/what-we-do/services/criminal-records/national-police-checks",
        accessedAt: "2026-07-17",
      },
    ],
    warnings: ["必要な証明の国・期間・様式は申請ごとに異なります。ImmiAccountの指示と各発行機関の公式情報を必ず確認してください。"],
    relatedSlugs: ["visa-application", "visa-health-examination", "police-check-guide", "working-holiday-eligibility"],
    updatedAt: "2026-07-17",
    published: true,
  },

  {
    id: "a68",
    title: "ビザ取得後にパスポートを更新したら？ImmiAccountで変更する方法",
    slug: "visa-after-passport-renewal",
    category: "visa",
    hub: "visa",
    priority: "P1",
    searchIntent: "ワーホリ パスポート 更新 ビザ 紐付け 変更",
    description:
      "ワーホリビザ取得後にパスポートを更新した場合の対応を解説。ビザはパスポートに電子的に紐づくため、新しいパスポート情報を当局へ通知する手続きが必要です。",
    content: [
      "オーストラリアのビザは、パスポートに電子的に紐づいています。ビザ取得後にパスポートを更新（新しい番号のパスポートに切り替え）した場合は、新しいパスポート情報をオーストラリア当局に通知しないと、入国時に就労権やビザの確認でトラブルになる可能性があります。更新したら早めに手続きしましょう。",
      "新しいパスポート情報の更新は、オンラインのフォーム『Form 929（Change of address and/or passport details）』を使うのが一般的です。ImmiAccountにログインして提出でき、旧パスポート番号・新パスポート番号・氏名・生年月日などを入力します。手数料は基本的にかかりません。",
      "手続き後、VEVO（Visa Entitlement Verification Online）で自分のビザが新しいパスポートに正しく紐づいているかを確認できます。入国前にVEVOで確認しておくと、空港での本人確認がスムーズになります。念のため、旧パスポート（ビザ取得時のもの）も保管しておくと安心です。",
      "氏名が変わった場合（結婚等）は、パスポートの氏名とビザ記録の氏名が一致するよう、同様に情報更新が必要です。氏名変更の証明書類を求められることがあります。渡航前に、パスポート・航空券・ビザ記録の氏名がすべて一致していることを確認してください。",
      "手続き方法やフォームの名称・番号は変更されることがあります。提出前に必ずImmiAccountとオーストラリア当局の公式ページで最新の方法を確認してください。",
    ],
    keyFacts: [
      { label: "理由", value: "ビザはパスポートに電子的に紐づくため更新通知が必要" },
      { label: "手続き", value: "Form 929でパスポート情報を更新（ImmiAccount）" },
      { label: "費用", value: "基本的に無料" },
      { label: "確認方法", value: "VEVOで新パスポートへの紐づけを確認" },
      { label: "注意", value: "旧パスポートも保管しておくと安心" },
    ],
    steps: [
      { title: "新パスポートを用意", description: "更新後の新しいパスポートの番号・情報を手元に用意します。" },
      { title: "Form 929を提出", description: "ImmiAccountからパスポート情報の変更を届け出ます。" },
      { title: "VEVOで確認", description: "新しいパスポートにビザが紐づいているかVEVOで確認します。" },
      { title: "氏名一致を確認", description: "パスポート・航空券・ビザ記録の氏名がすべて一致するか確認します。" },
    ],
    tips: [
      "更新したら渡航前に必ず手続きを。入国時の就労権・ビザ確認でのトラブルを防げます。",
      "旧パスポートは処分せず保管を。ビザ取得時の記録として役立つことがあります。",
    ],
    faqs: [
      {
        question: "ビザを取り直す必要はありますか？",
        answer:
          "いいえ。ビザ自体は有効なままです。パスポート情報を更新して、新しいパスポートにビザが紐づくようにするだけで済みます。",
      },
      {
        question: "更新しないまま入国するとどうなりますか？",
        answer:
          "旧パスポートの番号でビザが登録されているため、入国審査や就労時の確認で不一致が生じる恐れがあります。渡航前に必ず情報を更新しておきましょう。",
      },
    ],
    sources: [
      { label: "Department of Home Affairs｜Update your details", url: "https://immi.homeaffairs.gov.au/change-in-situation/update-details" },
    ],
    verifiedAt: "2026-07-17",
    officialSources: [
      {
        label: "Department of Home Affairs｜Update your details (Form 929)",
        url: "https://immi.homeaffairs.gov.au/change-in-situation/update-details",
        accessedAt: "2026-07-17",
      },
      {
        label: "VEVO｜Check visa details and conditions",
        url: "https://immi.homeaffairs.gov.au/visas/already-have-a-visa/check-visa-details-and-conditions/overview",
        accessedAt: "2026-07-17",
      },
    ],
    warnings: ["手続き方法・フォーム番号は変更されることがあります。提出前に必ず公式情報を確認してください。"],
    relatedSlugs: ["visa-grant-letter", "vevo-check", "passport-validity-renewal", "visa-application"],
    updatedAt: "2026-07-17",
    published: true,
  },

  {
    id: "a69",
    title: "Visa Grant Notificationの見方｜入国期限・条件・保存方法",
    slug: "visa-grant-letter",
    category: "visa",
    hub: "visa",
    priority: "P0",
    searchIntent: "ワーホリ ビザ 許可通知 grant notification 見方",
    description:
      "ビザが許可されると届くVisa Grant Notification（許可通知）の読み方を解説。ビザ番号・許可日・初回入国期限・ビザ条件など、必ず確認すべき項目と安全な保存方法をまとめました。",
    content: [
      "ワーホリビザが許可されると、『Visa Grant Notification（ビザ許可通知）』がメールで届きます。この書類には、あなたのビザに関する最重要情報が記載されており、入国・就労・滞在の根拠になります。届いたら内容を必ず確認し、安全に保存してください。ビザラベルはパスポートに貼られず、すべて電子的に管理されます。",
      "確認すべき主要項目は、①ビザの種類（Working Holiday visa／subclass 417）、②ビザ許可日（Grant date）、③初回入国期限（Must make first entry by／First entry date）、④ビザの有効期限や滞在条件、⑤ビザ条件（Conditions、例：8547など）、⑥氏名・生年月日・パスポート番号が正しいか、です。特に初回入国期限は航空券手配前に必ず確認しましょう。",
      "初回入国期限は、通常『許可日から12か月以内』に設定されます。この期限までにオーストラリアへ初回入国しないとビザが無効になります。入国後に12か月の滞在カウントが始まります。つまり、許可が早すぎると入国期限も早まる点に注意してください。",
      "ビザ条件（Conditions）欄には、あなたが守るべきルールがコード（例：Condition 8547＝同一雇用主のもとでの就労は原則6か月まで）で記載されます。条件の意味はビザ番号（例：417-A）ごとの条件一覧で確認できます。氏名・パスポート番号などに誤りがある場合は、早めに当局へ連絡して訂正を依頼します。",
      "保存方法は、①メールを削除しない、②PDFをスマホ本体とクラウド（Googleドライブ等）の両方に保存、③印刷したものも1部持参、の三重管理が安心です。入国時や銀行・就労時の本人確認で提示を求められることがあります。記載内容・条件は変更されることがあるため、不明点は公式のビザ条件ページで確認してください。",
    ],
    keyFacts: [
      { label: "書類名", value: "Visa Grant Notification（ビザ許可通知）" },
      { label: "受け取り方", value: "メールで届く（ビザラベルの貼付は不要）" },
      { label: "最重要項目", value: "許可日・初回入国期限・ビザ条件" },
      { label: "初回入国期限", value: "通常は許可日から12か月以内" },
      { label: "保存", value: "メール・PDF・印刷の三重管理が安心" },
    ],
    steps: [
      { title: "記載情報を確認", description: "氏名・生年月日・パスポート番号がパスポートと一致するか確認します。" },
      { title: "期限を確認", description: "初回入国期限とビザ有効期限をカレンダーに記録します。" },
      { title: "条件を確認", description: "Conditions欄のコードの意味をビザ条件一覧で確認します。" },
      { title: "安全に保存", description: "PDFをクラウドと端末に保存し、印刷も1部持参します。" },
    ],
    tips: [
      "初回入国期限は航空券手配前に必ず確認。期限を過ぎるとビザが無効になります。",
      "氏名・パスポート番号に誤りがあれば早めに当局へ連絡して訂正しましょう。",
      "入国審査で提示を求められることは基本ありませんが、念のためすぐ出せる状態にしておくと安心です。",
    ],
    faqs: [
      {
        question: "ビザラベルはパスポートに貼られますか？",
        answer:
          "いいえ。オーストラリアのビザは電子的に管理され、ラベルの貼付はありません。許可通知（PDF）とVEVOで内容を確認します。",
      },
      {
        question: "許可通知を紛失したらどうなりますか？",
        answer:
          "ビザ自体は有効なままです。ImmiAccountから再取得できるほか、VEVOでビザ内容を確認できます。ただし普段からPDFを複数箇所に保存しておくのが安全です。",
      },
    ],
    sources: [
      { label: "Department of Home Affairs｜See your visa conditions (417-A)", url: "https://immi.homeaffairs.gov.au/visas/already-have-a-visa/check-visa-details-and-conditions/see-your-visa-conditions?product=417-A" },
    ],
    verifiedAt: "2026-07-17",
    officialSources: [
      {
        label: "Department of Home Affairs｜Check visa details and conditions (VEVO)",
        url: "https://immi.homeaffairs.gov.au/visas/already-have-a-visa/check-visa-details-and-conditions/overview",
        accessedAt: "2026-07-17",
      },
      {
        label: "Department of Home Affairs｜Working Holiday visa (subclass 417) conditions",
        url: "https://immi.homeaffairs.gov.au/visas/already-have-a-visa/check-visa-details-and-conditions/see-your-visa-conditions?product=417-A",
        accessedAt: "2026-07-17",
      },
    ],
    warnings: ["ビザ条件・入国期限は個々の許可通知に記載された内容が優先されます。不明点は公式情報で確認してください。"],
    relatedSlugs: ["visa-first-entry-deadline", "visa-six-month-work-limitation", "vevo-check", "visa-application"],
    updatedAt: "2026-07-17",
    published: true,
  },

  {
    id: "a70",
    title: "ビザ許可後いつまでに入国？First Entry Dateの確認方法",
    slug: "visa-first-entry-deadline",
    category: "visa",
    hub: "visa",
    priority: "P1",
    searchIntent: "ワーホリ 初回入国 期限 first entry date",
    description:
      "ワーホリビザの初回入国期限（First entry date）とは何か、いつまでに入国すればよいか、許可日・入国日・滞在開始日の違いを整理して解説します。",
    content: [
      "ワーホリビザ（417）が許可されると、『初回入国期限（Must make first entry by／First entry date）』が設定されます。この期限までにオーストラリアへ初回入国しないと、ビザが無効になります。多くの場合、初回入国期限は『ビザ許可日から12か月以内』です。正確な日付は必ず自分のVisa Grant Notification（許可通知）で確認してください。",
      "混同しやすいのが『許可日』『初回入国期限』『滞在開始日』の3つです。許可日はビザが下りた日、初回入国期限はそれまでに入国が必要な締切、そして12か月の滞在カウントは実際に入国した日から始まります。つまり、許可されてすぐ入国しなくても、期限内に入国すればよく、滞在可能な1年間は入国日を起点に計算されます。",
      "この仕組みから、申請・許可のタイミングには戦略があります。あまりに早く申請して早く許可されると、初回入国期限も早まります。渡航予定日から逆算し、初回入国期限に余裕を持てるよう、渡航の2〜4か月前の申請がバランス良好です。",
      "初回入国は、必ずしも長期滞在の開始である必要はありません。期限直前に一度入国して『初回入国』を成立させ、その後の滞在計画を立てることも制度上は可能ですが、入国日から1年のカウントが始まる点を踏まえて計画しましょう。無理のないスケジュールで、期限を逃さないことが最重要です。",
      "入国期限・滞在期間の扱いは個々のビザで異なる場合があります。必ず自分の許可通知に記載された日付を優先し、不明点は公式情報で確認してください。",
    ],
    keyFacts: [
      { label: "初回入国期限", value: "多くは許可日から12か月以内" },
      { label: "確認場所", value: "Visa Grant Notification（許可通知）" },
      { label: "滞在カウント開始", value: "実際に初回入国した日から12か月" },
      { label: "期限超過", value: "入国しないとビザが無効になる" },
      { label: "申請時期の目安", value: "渡航の2〜4か月前" },
    ],
    steps: [
      { title: "許可通知で期限を確認", description: "『Must make first entry by』の日付を確認します。" },
      { title: "カレンダーに記録", description: "初回入国期限をリマインダー付きで記録します。" },
      { title: "渡航日を決定", description: "期限内かつ入国日から1年を有効に使える日程を選びます。" },
    ],
    tips: [
      "初回入国期限を過ぎるとビザは無効。早めに航空券を確保し余裕を持ちましょう。",
      "滞在の1年は『入国日』起点。許可後すぐ入国する必要はありません。",
    ],
    faqs: [
      {
        question: "初回入国期限を過ぎたらどうなりますか？",
        answer:
          "期限までに入国しないとビザが無効になります。再度申請が必要になり、申請料も再度かかります。期限は必ず守りましょう。",
      },
      {
        question: "一度入国したらすぐ出国してもいいですか？",
        answer:
          "ビザ有効期間内であれば出入国は自由です。ただし12か月の滞在可能期間は初回入国日から進むため、出入国のタイミングは計画的に決めましょう。",
      },
    ],
    sources: [
      { label: "Department of Home Affairs｜First Working Holiday visa", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/first-working-holiday-417" },
    ],
    verifiedAt: "2026-07-17",
    officialSources: [
      {
        label: "Department of Home Affairs｜Working Holiday visa (subclass 417)",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417",
        accessedAt: "2026-07-17",
      },
    ],
    warnings: ["入国期限・滞在期間は個々のビザで異なる場合があります。許可通知の記載を優先し、公式情報で確認してください。"],
    relatedSlugs: ["visa-grant-letter", "visa-cost-processing-time", "flight-booking-guide", "working-holiday-timeline"],
    updatedAt: "2026-07-17",
    published: true,
  },

  {
    id: "a71",
    title: "同一雇用主6か月制限のルールと例外",
    slug: "visa-six-month-work-limitation",
    category: "visa",
    hub: "visa",
    priority: "P0",
    searchIntent: "ワーホリ 同じ雇用主 6ヶ月 制限 8547",
    description:
      "ワーホリビザの『同一雇用主のもとでの就労は原則6か月まで』というルール（Condition 8547）を解説。制限の考え方と、6か月を超えて働ける例外・許可申請の考え方をまとめました。",
    content: [
      "ワーホリビザ（417）には、『同一雇用主のもとで働けるのは原則6か月まで』というルールがあります。これはビザ条件のCondition 8547に基づくもので、1人の雇用主のもとでの就労が原則6か月に制限されるという意味です。この制限は、ワーホリの目的（オーストラリアを広く体験する）を踏まえたものです。",
      "重要なのは『同一雇用主』の数え方です。原則として、同じ雇用主のもとで働いた期間が通算6か月を超えないようにします。勤務地が異なっても雇用主（法人）が同じであればまとめてカウントされる場合があるため、フランチャイズや大手チェーンで働く場合は注意が必要です。",
      "ただし、6か月を超えて同じ雇用主で働ける例外もあります。代表的なのは、①別々の州・地域（different locations）で働く場合（一定条件下で各地6か月まで認められることがある）、②特定の業種・地域での就労、③事前に当局の許可（permission to work longer）を得た場合、などです。例外の適用範囲は細かく定められているため、6か月を超えたい場合は必ず公式情報で確認するか、許可申請を検討してください。",
      "この制限を守らないと、ビザ条件違反となり、ビザの取消しや将来のビザ申請への悪影響につながる可能性があります。長く同じ職場で働きたい場合は、勝手に判断せず、当局の案内に沿って例外の可否・許可申請を確認することが安全です。",
      "6か月制限のルール・例外・許可申請の方法は変更されることがあります。自分のビザ条件（許可通知のConditions欄）を確認し、判断に迷う場合は公式情報や登録移民エージェントに相談してください。",
    ],
    keyFacts: [
      { label: "ルール", value: "同一雇用主での就労は原則6か月まで（Condition 8547）" },
      { label: "数え方", value: "同じ雇用主での通算期間でカウント" },
      { label: "例外例", value: "別の州・地域での就労、当局の事前許可など" },
      { label: "違反リスク", value: "ビザ取消し・将来の申請への悪影響" },
      { label: "確認先", value: "許可通知のConditions欄・公式ビザ条件ページ" },
    ],
    steps: [
      { title: "自分の条件を確認", description: "許可通知のConditions欄に8547があるか確認します。" },
      { title: "雇用主単位で期間を管理", description: "同じ雇用主での通算勤務期間を記録します。" },
      { title: "例外の可否を確認", description: "6か月超で働きたい場合は例外条件・許可申請を公式で確認します。" },
      { title: "必要なら許可申請", description: "当局の許可（permission to work longer）を検討します。" },
    ],
    tips: [
      "大手チェーン・フランチャイズは同一雇用主扱いになることがあります。勤務先の法人単位で管理を。",
      "6か月を超えたいときは自己判断せず、例外条件・許可申請を公式で確認しましょう。",
    ],
    faqs: [
      {
        question: "別の店舗に移れば6か月を超えて働けますか？",
        answer:
          "雇用主（法人）が同じ場合は通算でカウントされることがあります。別の州・地域での就労など一定の例外はありますが、適用範囲は細かいため公式情報で確認してください。",
      },
      {
        question: "6か月を超えて働くとどうなりますか？",
        answer:
          "例外や許可なく超えるとビザ条件違反となり、ビザ取消しや将来の申請への悪影響のリスクがあります。事前に例外の可否を確認しましょう。",
      },
    ],
    sources: [
      { label: "Department of Home Affairs｜See your visa conditions (417-A)", url: "https://immi.homeaffairs.gov.au/visas/already-have-a-visa/check-visa-details-and-conditions/see-your-visa-conditions?product=417-A" },
    ],
    verifiedAt: "2026-07-17",
    officialSources: [
      {
        label: "Department of Home Affairs｜Working Holiday visa (subclass 417) conditions",
        url: "https://immi.homeaffairs.gov.au/visas/already-have-a-visa/check-visa-details-and-conditions/see-your-visa-conditions?product=417-A",
        accessedAt: "2026-07-17",
      },
      {
        label: "Department of Home Affairs｜Working Holiday Maker program",
        url: "https://immi.homeaffairs.gov.au/what-we-do/whm-program/",
        accessedAt: "2026-07-17",
      },
    ],
    warnings: ["6か月制限のルール・例外は変更されることがあります。自分のビザ条件と公式情報を必ず確認してください。"],
    relatedSlugs: ["visa-grant-letter", "working-rights", "second-visa-guide", "vevo-check"],
    updatedAt: "2026-07-17",
    published: true,
  },

  {
    id: "a72",
    title: "ワーホリ中に学校へ通える期間とコース選び",
    slug: "visa-study-limit",
    category: "visa",
    hub: "visa",
    priority: "P1",
    searchIntent: "ワーホリ 学校 就学 期間 4ヶ月",
    description:
      "ワーホリビザ（417）で学校に通える期間の上限と、語学・資格コースの選び方を解説。就学可能な期間の考え方と、限られた期間を有効に使うコース選びのポイントをまとめました。",
    content: [
      "ワーホリビザ（417）では、就学（study）が認められていますが、期間に上限があります。オーストラリア内務省の公式案内では、このビザで学べる期間は最大4か月（up to 4 months）とされています。語学学校や短期の資格コースに通う場合も、この上限の範囲で計画します。上限を超えて長く学びたい場合は、学生ビザ等への切り替えを検討することになります。",
      "この就学期間を有効に使う代表的な選択肢が、①語学学校（English course）で英語力と生活の基礎を固める、②仕事に直結する資格コース（例：バリスタ、RSA〈責任あるアルコール提供〉、White Card〈建設現場入場資格〉など）で就労のチャンスを広げる、の2つです。到着直後に語学学校へ短期間通い、友達づくりと生活立ち上げを兼ねる人も多いです。",
      "コース選びのポイントは、目的を明確にすることです。英語力を上げたいのか、特定の仕事に就くための資格が欲しいのかで選ぶ学校・コースが変わります。費用・期間・開講日・立地（通いやすさ）・日本人比率などを比較し、限られた4か月を最大限に活かせるコースを選びましょう。就労に必要な資格は州ごとにルールが異なる場合があるため、働きたい州の要件も確認します。",
      "注意点として、就学期間の上限を超えたり、就学を主目的にしたりする働き方はビザ条件に反する可能性があります。ワーホリはあくまで『休暇を主目的とし、就労・就学を組み合わせる』ビザです。長期の本格的な就学を計画している場合は、最初から学生ビザを検討するほうが適していることもあります。",
      "就学可能期間やコースの要件は変更されることがあります。就学期間の上限は内務省の公式ページで、資格コースの要件は各州の所管機関で、それぞれ最新情報を確認してください。",
    ],
    keyFacts: [
      { label: "就学上限", value: "最大4か月（公式：up to 4 months）" },
      { label: "主な選択肢", value: "語学学校・就労直結の資格コース" },
      { label: "人気の資格", value: "バリスタ・RSA・White Cardなど" },
      { label: "選ぶ基準", value: "目的・費用・期間・立地・日本人比率" },
      { label: "上限超過", value: "学生ビザ等への切替を検討" },
    ],
    steps: [
      { title: "目的を決める", description: "英語力向上か就労資格取得か、就学の目的を明確にします。" },
      { title: "コースを比較", description: "費用・期間・開講日・立地・内容を複数校で比較します。" },
      { title: "州の要件を確認", description: "資格が必要な仕事は、働きたい州のルールを確認します。" },
      { title: "4か月の枠内で計画", description: "就学上限を超えないようスケジュールを組みます。" },
    ],
    tips: [
      "就学は最大4か月。長く学びたい場合は学生ビザへの切替を検討しましょう。",
      "到着直後の短期語学学校は、英語・友達づくり・生活立ち上げを兼ねられます。",
    ],
    faqs: [
      {
        question: "4か月を超えて学校に通えますか？",
        answer:
          "ワーホリビザでの就学は最大4か月までです。それ以上学びたい場合は、学生ビザなど別のビザへの切り替えを検討する必要があります。",
      },
      {
        question: "どんな資格コースが仕事に役立ちますか？",
        answer:
          "飲食ではバリスタやRSA（アルコール提供）、建設ではWhite Cardなどが役立ちます。ただし要件は州ごとに異なるため、働きたい州のルールを確認しましょう。",
      },
    ],
    sources: [
      { label: "Department of Home Affairs｜First Working Holiday visa（study up to 4 months）", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/first-working-holiday-417" },
    ],
    verifiedAt: "2026-07-17",
    officialSources: [
      {
        label: "Department of Home Affairs｜First Working Holiday visa（就学期間）",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/first-working-holiday-417",
        accessedAt: "2026-07-17",
      },
    ],
    warnings: ["就学可能期間・コース要件は変更されることがあります。就学前に公式情報で最新を確認してください。"],
    relatedSlugs: ["language-school", "english-prep", "certifications", "visa-options"],
    updatedAt: "2026-07-17",
    published: true,
  },

  {
    id: "a73",
    title: "ワーホリ中の一時帰国・海外旅行・再入国の注意点",
    slug: "visa-travel-reentry",
    category: "visa",
    hub: "visa",
    priority: "P1",
    searchIntent: "ワーホリ 一時帰国 再入国 旅行 出入国",
    description:
      "ワーホリビザ（417）で一時帰国や近隣国旅行をする際の再入国ルールと注意点を解説。出入国は自由ですが、ビザ有効期限・パスポート・滞在日数の扱いを事前に確認しましょう。",
    content: [
      "ワーホリビザ（417）は、ビザの有効期間内であれば、オーストラリアからの出入国を何回でも行えます。一時帰国（日本へ戻る）や、近隣国（ニュージーランド、東南アジアなど）への旅行をして、再びオーストラリアに戻ることが可能です。再入国のたびに新しいビザを取り直す必要はありません。",
      "ただし重要なのは『ビザの有効期限』です。ワーホリビザには全体の有効期限（この日以降は入国・滞在できないという日）があります。国外にいる間にビザの有効期限を過ぎると、再入国できなくなります。旅行や一時帰国を計画する際は、必ずビザ有効期限内に戻れる日程にしてください。",
      "見落としがちなのが『滞在可能な12か月のカウント』です。ワーホリビザで実際にオーストラリアに滞在できるのは通算12か月ですが、国外にいた期間は滞在日数に含まれません。ビザによっては、国外滞在期間分だけ有効期限が延長される扱いがある場合もありますが、扱いは個々のビザで異なるため、長期の国外旅行を挟む場合はVEVOや公式情報で自分のビザの条件を確認しましょう。",
      "再入国の際は、①有効なパスポート（ビザが紐づいたもの）、②ビザが有効であること、③入国カード（Incoming Passenger Card）での正しい申告、が必要です。パスポートを更新した場合は、事前にパスポート情報の更新手続きを済ませておかないと、就労権・ビザ確認で不一致が生じることがあります。",
      "出入国・再入国のルールやビザ有効期限の扱いは変更されることがあります。旅行前に必ずVEVOでビザ内容を確認し、公式情報で最新の再入国条件をチェックしてください。",
    ],
    keyFacts: [
      { label: "出入国", value: "ビザ有効期間内なら何回でも可" },
      { label: "最重要", value: "ビザ有効期限内に戻ること" },
      { label: "滞在カウント", value: "国外にいた期間は12か月に含まれない" },
      { label: "再入国に必要", value: "有効なパスポート＋有効なビザ＋入国申告" },
      { label: "確認方法", value: "VEVOで自分のビザ条件を確認" },
    ],
    steps: [
      { title: "ビザ有効期限を確認", description: "許可通知またはVEVOでビザの有効期限を確認します。" },
      { title: "戻る日程を決める", description: "有効期限内に確実に再入国できる日程で旅行を計画します。" },
      { title: "パスポート情報を確認", description: "更新している場合は事前にパスポート情報の更新を済ませます。" },
      { title: "入国時に正しく申告", description: "再入国時はIncoming Passenger Cardで正しく申告します。" },
    ],
    tips: [
      "国外にいる間にビザ有効期限を過ぎると戻れません。余裕を持った日程に。",
      "長期の国外旅行を挟むなら、滞在日数と有効期限の扱いをVEVOで確認しましょう。",
    ],
    faqs: [
      {
        question: "一時帰国したら滞在期間はどうなりますか？",
        answer:
          "オーストラリアに滞在できるのは通算12か月で、国外にいた期間はカウントされません。ビザの有効期限自体は変わらないことが多いため、有効期限内に戻る計画にしましょう。",
      },
      {
        question: "再入国のときに追加費用はかかりますか？",
        answer:
          "ビザが有効なら再入国のための追加のビザ費用はかかりません。航空券や渡航先の入国要件は別途確認してください。",
      },
    ],
    sources: [
      { label: "VEVO｜Check visa details and conditions", url: "https://immi.homeaffairs.gov.au/visas/already-have-a-visa/check-visa-details-and-conditions/overview" },
    ],
    verifiedAt: "2026-07-17",
    officialSources: [
      {
        label: "Department of Home Affairs｜Working Holiday visa (subclass 417)",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417",
        accessedAt: "2026-07-17",
      },
      {
        label: "Department of Home Affairs｜Check visa details and conditions (VEVO)",
        url: "https://immi.homeaffairs.gov.au/visas/already-have-a-visa/check-visa-details-and-conditions/overview",
        accessedAt: "2026-07-17",
      },
    ],
    warnings: ["再入国条件・有効期限の扱いは変更されることがあります。旅行前に必ずVEVOと公式情報で確認してください。"],
    relatedSlugs: ["visa-grant-letter", "vevo-check", "visa-after-passport-renewal", "domestic-flight-guide"],
    updatedAt: "2026-07-17",
    published: true,
  },

  {
    id: "a74",
    title: "Bridging Visaとは？ワーホリから次のビザを申請する場合",
    slug: "bridging-visa-basics",
    category: "visa",
    hub: "visa",
    priority: "P1",
    searchIntent: "ブリッジングビザ とは ワーホリ 次のビザ",
    description:
      "オーストラリアに滞在中に次のビザを申請した場合に関わるBridging Visa（ブリッジングビザ）の基礎を、一般的な仕組みとしてやさしく解説します。",
    content: [
      "Bridging Visa（ブリッジングビザ）とは、オーストラリア国内に滞在している人が、現在のビザが切れる前に次のビザを申請したとき、その審査結果が出るまでの間の滞在を合法的に保つための『つなぎ』のビザです。ワーホリビザ（417）から学生ビザや別のビザへ切り替える申請をオーストラリア国内で行った場合などに関係します。",
      "もっとも一般的なのがBridging Visa A（BVA）です。現在のビザが有効なうちに、オーストラリア国内で次の実体ビザ（substantive visa）を申請すると、多くの場合BVAが自動的に付与されます。BVAは、現在のビザが切れた後、新しいビザの結果が出るまでの滞在を可能にします。ただしBVAには就労などの条件が引き継がれる/付く場合があり、内容は個々の申請で異なります。",
      "注意すべきは『渡航（travel）』の扱いです。Bridging Visa Aは、そのままではオーストラリアから出国して再入国することができません。BVAを持った状態で一時帰国などをする場合は、別途Bridging Visa B（BVB、一定期間の出国・再入国を認めるもの）を申請する必要があります。BVAのまま出国すると、BVAが失効して戻れなくなる恐れがあるため、旅行予定がある人は特に注意が必要です。",
      "ブリッジングビザは複雑で、付与条件・就労条件・渡航可否・有効になるタイミング（現在のビザが切れて初めて効力を持つ）などが個々の状況で異なります。次のビザへの切り替えを国内で計画している場合は、申請前に自分のケースでどのブリッジングビザが関わるかを確認し、必要に応じて登録移民エージェントに相談すると安心です。",
      "ブリッジングビザの種類・条件・手続きは変更されることがあります。この記事は一般的な仕組みの説明であり、実際の申請では必ず公式情報と自分のビザ状況を確認してください。",
    ],
    keyFacts: [
      { label: "役割", value: "次のビザの審査中の滞在を合法に保つ『つなぎ』ビザ" },
      { label: "代表例", value: "Bridging Visa A（BVA）" },
      { label: "付与のきっかけ", value: "現ビザ有効中に国内で次の実体ビザを申請" },
      { label: "渡航の注意", value: "BVAのまま出国不可。出国にはBVBが必要" },
      { label: "効力", value: "現ビザが切れて初めて有効になる" },
    ],
    steps: [
      { title: "切替の要否を検討", description: "ワーホリ後に別のビザへ切り替えるか、国内申請かを検討します。" },
      { title: "現ビザ有効中に申請", description: "現在のビザが有効なうちに次の実体ビザを申請します。" },
      { title: "付与内容を確認", description: "付与されたブリッジングビザの条件（就労・渡航）を確認します。" },
      { title: "渡航予定があればBVBを検討", description: "出国・再入国が必要ならBridging Visa Bを申請します。" },
    ],
    tips: [
      "Bridging Visa Aのまま出国すると戻れなくなる恐れがあります。旅行前にBVBの要否を確認しましょう。",
      "複雑なケースは登録移民エージェントへの相談が安全です。",
    ],
    faqs: [
      {
        question: "ブリッジングビザは自分で申請しますか？",
        answer:
          "多くの場合、現ビザ有効中に次の実体ビザを国内申請するとBridging Visa Aが自動的に付与されます。個別の状況で異なるため、付与内容を必ず確認してください。",
      },
      {
        question: "ブリッジングビザで働けますか？",
        answer:
          "就労条件は付与されたブリッジングビザや元の申請内容によって異なります。就労可否・時間制限は自分のビザ条件をVEVO等で確認してください。",
      },
    ],
    sources: [
      { label: "Department of Home Affairs｜Bridging visas", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/bridging-visa-a-010" },
    ],
    verifiedAt: "2026-07-17",
    officialSources: [
      {
        label: "Department of Home Affairs｜Bridging visa A (BVA) (subclass 010)",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/bridging-visa-a-010",
        accessedAt: "2026-07-17",
      },
      {
        label: "Department of Home Affairs｜Bridging visa B (BVB) (subclass 020)",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/bridging-b-020",
        accessedAt: "2026-07-17",
      },
    ],
    warnings: ["ブリッジングビザは複雑で条件が個々に異なります。この記事は一般的説明です。申請前に必ず公式情報と自分の状況を確認してください。"],
    relatedSlugs: ["visa-options", "registered-migration-agent", "vevo-check", "second-visa-guide"],
    updatedAt: "2026-07-17",
    published: true,
  },

  {
    id: "a75",
    title: "ビザ申請の却下・取消しを避けるための注意点",
    slug: "visa-refusal-cancellation",
    category: "visa",
    hub: "visa",
    priority: "P2",
    searchIntent: "ワーホリ ビザ 却下 取消し 理由 回避",
    description:
      "ワーホリビザの却下（refusal）や取消し（cancellation）を避けるために知っておくべき主な原因と対策を解説。虚偽申告・条件違反・期限管理など、リスクを減らす基本をまとめました。",
    content: [
      "ビザの却下・取消しを避ける最大のポイントは、①正確・正直に申請する、②ビザ条件を守る、③期限を管理する、の3つです。ワーホリビザは比較的取得しやすいビザですが、申請時の不正確な情報や、滞在中の条件違反があると、却下や取消しの対象になり得ます。",
      "却下・取消しの主な原因としては、申請フォームでの虚偽・不正確な申告（健康・経歴の質問への不正直な回答を含む）、資金・年齢・過去のビザ歴など基本要件を満たしていないこと、ビザ条件違反（例：同一雇用主6か月制限を守らない、就学期間の上限を超える）、初回入国期限の超過、犯罪行為などが挙げられます。特に虚偽申告は、発覚すると却下されるだけでなく、将来のビザ申請（他ビザ含む）にも長期的な悪影響を及ぼします。",
      "対策としては、まず申請時にパスポート情報・氏名・生年月日を正確に入力し、健康・経歴の質問には正直に回答することです。次に、取得後は自分のビザ条件（許可通知のConditions欄）を把握し、就労・就学のルールを守ります。パスポートを更新したら情報更新を行い、初回入国期限・ビザ有効期限をカレンダーで管理します。",
      "もし当局から追加情報の提出を求められた場合（Request for information等）は、期限内に正確に対応することが重要です。放置すると不許可につながることがあります。複雑な事情がある場合（過去のビザ却下歴、健康・経歴上の懸念など）は、自己判断せず登録移民エージェントに相談すると安全です。",
      "却下・取消しの基準や対応手続きは変更されることがあります。懸念がある場合は必ず公式情報を確認し、必要に応じて正規の専門家に相談してください。",
    ],
    keyFacts: [
      { label: "3原則", value: "正確・正直に申請／条件遵守／期限管理" },
      { label: "主な却下原因", value: "虚偽申告・要件未達・条件違反・期限超過" },
      { label: "虚偽申告のリスク", value: "却下＋将来のビザ申請への長期的悪影響" },
      { label: "追加情報要求", value: "期限内に正確に対応する" },
      { label: "複雑な事情", value: "登録移民エージェントに相談" },
    ],
    steps: [
      { title: "正確に申請", description: "パスポート情報・健康・経歴の質問に正確・正直に回答します。" },
      { title: "条件を把握", description: "取得後は許可通知のConditions欄でビザ条件を確認します。" },
      { title: "期限を管理", description: "初回入国期限・ビザ有効期限をカレンダーで管理します。" },
      { title: "要求に迅速対応", description: "追加情報を求められたら期限内に正確に提出します。" },
    ],
    tips: [
      "虚偽・不正確な申告は最も避けるべきリスク。分からない項目は公式情報で確認しましょう。",
      "却下歴や経歴上の懸念があるケースは、登録移民エージェントへの相談が安全です。",
    ],
    faqs: [
      {
        question: "一度却下されると二度と申請できませんか？",
        answer:
          "必ずしもそうではありませんが、却下理由によっては再申請が難しくなったり、一定期間の制限がかかる場合があります。却下理由を正確に把握し、専門家に相談するのが安全です。",
      },
      {
        question: "軽微な入力ミスでも却下されますか？",
        answer:
          "多くの軽微なミスは訂正・確認で対応可能ですが、氏名・パスポート番号の誤りは本人確認で問題になります。誤りに気づいたら早めに更新・訂正しましょう。",
      },
    ],
    sources: [
      { label: "Department of Home Affairs｜Visa cancellation", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-cancellation" },
    ],
    verifiedAt: "2026-07-17",
    officialSources: [
      {
        label: "Department of Home Affairs｜Visa cancellation",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-cancellation",
        accessedAt: "2026-07-17",
      },
      {
        label: "Department of Home Affairs｜Character requirements",
        url: "https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/character/character-requirements",
        accessedAt: "2026-07-17",
      },
    ],
    warnings: ["却下・取消しの基準は変更されることがあります。懸念がある場合は公式情報を確認し、正規の専門家に相談してください。"],
    relatedSlugs: ["visa-application", "registered-migration-agent", "visa-six-month-work-limitation", "working-holiday-eligibility"],
    updatedAt: "2026-07-17",
    published: true,
  },

  {
    id: "a76",
    title: "VEVOで就労権とビザ条件を確認・共有する方法",
    slug: "vevo-check",
    category: "visa",
    hub: "visa",
    priority: "P0",
    searchIntent: "VEVO ビザ 確認 就労権 雇用主 共有",
    description:
      "VEVO（Visa Entitlement Verification Online）でビザの詳細・就労権・条件を確認し、雇用主に就労権を証明する方法を解説。無料で使えるオーストラリア政府の公式サービスです。",
    content: [
      "VEVO（Visa Entitlement Verification Online）は、オーストラリア政府が提供する無料のオンラインサービスで、自分のビザの詳細・有効期限・条件（就労権を含む）をいつでも確認できます。ワーホリでは、雇用主に『自分が合法的に働ける（就労権がある）こと』を証明する場面で特に役立ちます。ビザラベルが貼られない現在、VEVOがビザ内容を確認する主な手段です。",
      "自分のビザを確認するには、VEVOのオンラインフォームにアクセスし、パスポート番号、生年月日、そしてビザ許可通知に記載されている参照番号（Visa grant number、Transaction Reference Number〈TRN〉など）のいずれかを入力します。ログインすると、ビザの種類・有効期限・条件（就労可否、就学、渡航など）が表示されます。パスポートを更新した場合は、先にパスポート情報を更新しておかないと照会できないことがあります。",
      "雇用主への就労権証明には、『Check conditions online for an organisation（雇用主向けの照会）』の仕組みを使います。自分のVEVO結果を雇用主にメールで送信する機能や、雇用主が自分の同意のもとでビザ条件を照会できる仕組みがあり、口頭で説明するより確実です。就労権に不安を持つ雇用主にはVEVO結果を提示すると信頼されやすくなります。",
      "VEVOは、①就職時の就労権証明、②銀行・行政手続きでのビザ確認、③パスポート更新後の紐づけ確認、④ビザ有効期限の管理、など幅広く使えます。スクリーンショットやPDFを保存しておくと、オフラインでもすぐ提示できて便利です。",
      "VEVOの利用方法・必要な参照番号は変更されることがあります。アクセス方法や照会に必要な情報は、内務省のVEVO公式ページで最新を確認してください。",
    ],
    keyFacts: [
      { label: "VEVOとは", value: "ビザ詳細・就労権・条件を確認できる無料の公式サービス" },
      { label: "必要情報", value: "パスポート番号・生年月日・ビザ参照番号（TRN等）" },
      { label: "主な用途", value: "雇用主への就労権証明・ビザ条件確認" },
      { label: "共有機能", value: "VEVO結果を雇用主へ送信/照会させられる" },
      { label: "費用", value: "無料" },
    ],
    steps: [
      { title: "参照番号を用意", description: "許可通知のTRNやVisa grant numberを手元に用意します。" },
      { title: "VEVOで照会", description: "パスポート番号・生年月日・参照番号を入力してビザ内容を表示します。" },
      { title: "条件を確認", description: "就労権・就学・渡航などの条件と有効期限を確認します。" },
      { title: "雇用主へ共有", description: "必要に応じてVEVO結果を雇用主へ送信/照会させます。" },
    ],
    tips: [
      "VEVO結果はPDF/スクショで保存しておくと、就職時にすぐ提示できます。",
      "パスポート更新後はVEVOで新パスポートに紐づいているか確認しましょう。",
    ],
    faqs: [
      {
        question: "VEVOの利用は有料ですか？",
        answer:
          "無料です。オーストラリア政府（内務省）が提供する公式サービスで、自分のビザ内容を確認・共有できます。",
      },
      {
        question: "参照番号が分からない場合は？",
        answer:
          "ビザ許可通知（Visa Grant Notification）にTRNやVisa grant numberが記載されています。見つからない場合はImmiAccountで確認できます。",
      },
    ],
    sources: [
      { label: "Department of Home Affairs｜VEVO", url: "https://immi.homeaffairs.gov.au/visas/already-have-a-visa/check-visa-details-and-conditions/check-conditions-online" },
    ],
    verifiedAt: "2026-07-17",
    officialSources: [
      {
        label: "Department of Home Affairs｜Check visa details and conditions (VEVO)",
        url: "https://immi.homeaffairs.gov.au/visas/already-have-a-visa/check-visa-details-and-conditions/overview",
        accessedAt: "2026-07-17",
      },
      {
        label: "Department of Home Affairs｜Check conditions online (VEVO)",
        url: "https://immi.homeaffairs.gov.au/visas/already-have-a-visa/check-visa-details-and-conditions/check-conditions-online",
        accessedAt: "2026-07-17",
      },
    ],
    warnings: ["VEVOの利用方法・必要情報は変更されることがあります。公式ページで最新を確認してください。"],
    relatedSlugs: ["visa-grant-letter", "visa-after-passport-renewal", "working-rights", "jobs-guide"],
    updatedAt: "2026-07-17",
    published: true,
  },

  {
    id: "a77",
    title: "移民エージェントに相談すべきケースと登録確認方法",
    slug: "registered-migration-agent",
    category: "visa",
    hub: "visa",
    priority: "P2",
    searchIntent: "移民エージェント 相談 登録 MARA 確認",
    description:
      "オーストラリアのビザ手続きで登録移民エージェント（Registered Migration Agent）に相談すべきケースと、正規の登録者かを確認する方法を解説。悪質な無登録業者を避けるための基礎知識です。",
    content: [
      "ワーホリビザ（417）の申請自体はシンプルで、多くの人が自分でImmiAccountから申請できます。そのため通常はエージェントに依頼する必要はありません。一方で、①過去にビザ却下・取消しの歴がある、②健康・経歴（Character）上の懸念がある、③ワーホリ後に学生・就労・永住など複雑なビザへ切り替えたい、④ブリッジングビザや複雑な国内申請が絡む、といったケースでは、登録移民エージェントに相談する価値があります。",
      "重要なのは、オーストラリアで移民に関する助言を有料で提供できるのは、原則として登録された移民エージェント（Registered Migration Agent）または法律家に限られる、という点です。オーストラリアの登録移民エージェントは、OMARA（Office of the Migration Agents Registration Authority）に登録され、MARN（Migration Agents Registration Number）を持っています。相談前に、この登録番号で正規に登録されているかを必ず確認しましょう。",
      "登録確認は、OMARAの公式サイトで、エージェントの名前やMARNを検索することで行えます。正規登録者は行動規範（Code of Conduct）に従う義務があり、トラブル時の相談窓口もあります。日本国内の留学・ワーホリ斡旋業者を利用する場合も、実際にオーストラリアの移民助言を行うのが登録エージェントかどうかを確認すると安心です。",
      "悪質な無登録業者や『確実にビザが取れる』『日数を偽装して証明する』といった不正を持ちかける業者は避けてください。虚偽申告はビザ却下・将来の申請への悪影響につながり、責任は最終的に申請者本人に及びます。料金体系（着手金・成功報酬）やサービス範囲を事前に書面で確認し、うのみにしないことが大切です。",
      "登録制度や確認方法は変更されることがあります。相談・依頼の前に、必ずOMARAの公式サイトで登録状況と最新の確認方法を確認してください。",
    ],
    keyFacts: [
      { label: "通常のワーホリ", value: "自分で申請可能。エージェントは基本不要" },
      { label: "相談を検討", value: "却下歴・経歴懸念・複雑なビザ切替・国内申請" },
      { label: "正規の資格", value: "登録移民エージェント（MARN保有）または法律家" },
      { label: "登録確認", value: "OMARA公式サイトで名前・MARNを検索" },
      { label: "避けるべき", value: "無登録業者・不正を持ちかける業者" },
    ],
    steps: [
      { title: "相談の要否を判断", description: "自分のケースが複雑か（却下歴・経歴・複雑な切替）を確認します。" },
      { title: "登録を確認", description: "OMARA公式サイトでエージェントのMARN・登録状況を検索します。" },
      { title: "料金・範囲を確認", description: "料金体系とサービス範囲を書面で確認します。" },
      { title: "不審な業者は避ける", description: "不正を持ちかける・確実性を保証する業者は利用しません。" },
    ],
    tips: [
      "『確実にビザが取れる』『日数を偽装する』は危険信号。責任は申請者本人に及びます。",
      "有料の移民助言は登録エージェント/法律家のみが正規。MARNを必ず確認しましょう。",
    ],
    faqs: [
      {
        question: "ワーホリビザにエージェントは必要ですか？",
        answer:
          "多くの場合は不要です。申請はシンプルで自分でできます。却下歴や複雑なビザ切替など特別な事情がある場合に相談を検討しましょう。",
      },
      {
        question: "登録エージェントかどうかはどう確認しますか？",
        answer:
          "OMARA（移民エージェント登録機関）の公式サイトで、エージェントの名前や登録番号（MARN）を検索して確認できます。登録がない業者の有料助言には注意が必要です。",
      },
    ],
    sources: [
      { label: "OMARA｜Office of the Migration Agents Registration Authority", url: "https://www.mara.gov.au/" },
    ],
    verifiedAt: "2026-07-17",
    officialSources: [
      {
        label: "OMARA｜Find a registered migration agent",
        url: "https://www.mara.gov.au/",
        accessedAt: "2026-07-17",
      },
      {
        label: "Department of Home Affairs｜Who can help with your application",
        url: "https://immi.homeaffairs.gov.au/help-support/who-can-help-with-your-application/overview",
        accessedAt: "2026-07-17",
      },
    ],
    warnings: ["登録制度・確認方法は変更されることがあります。依頼前に必ずOMARA公式サイトで最新を確認してください。"],
    relatedSlugs: ["visa-refusal-cancellation", "bridging-visa-basics", "visa-options", "second-visa-guide"],
    updatedAt: "2026-07-17",
    published: true,
  },
];
