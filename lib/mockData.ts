import type { Article, ArticleCategory } from "@/types/article";
import type { ForumCategory, ForumComment, ForumPost } from "@/types/forum";
import type { Report } from "@/types/report";
import type { FeedbackRequest } from "@/types/feedback";

export const articleCategories: Array<{ slug: ArticleCategory; name: string }> = [
  { slug: "visa", name: "ビザ" },
  { slug: "preparation", name: "渡航前準備" },
  { slug: "arrival", name: "渡航後" },
  { slug: "tfn", name: "TFN" },
  { slug: "abn", name: "ABN" },
  { slug: "super", name: "Superannuation" },
  { slug: "tax-return", name: "タックスリターン" },
  { slug: "bank", name: "銀行口座" },
  { slug: "money", name: "送金・両替" },
  { slug: "sim", name: "SIM・通信" },
  { slug: "transport", name: "交通・決済" },
  { slug: "license", name: "運転免許" },
  { slug: "housing", name: "家探し" },
  { slug: "jobs", name: "仕事探し" },
  { slug: "farm", name: "ファーム" },
  { slug: "second-visa", name: "セカンドビザ" },
  { slug: "uber-eats", name: "Uber Eats" },
  { slug: "doordash", name: "DoorDash" },
  { slug: "cars", name: "車・交通" },
  { slug: "food", name: "食事" },
  { slug: "clothing", name: "服装" },
  { slug: "area", name: "エリアガイド" },
  { slug: "english", name: "英語学習" },
  { slug: "health", name: "健康・安全" },
];

export const articles: Article[] = [
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
    relatedSlugs: ["visa-application", "arrival-checklist", "money-transfer-wise"],
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
    relatedSlugs: ["whv-complete-guide", "arrival-checklist"],
    updatedAt: "2026-07-16",
    published: true,
  },
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
    relatedSlugs: ["housing-guide", "tfn-guide", "bank-account-guide", "sim-guide", "transport-payment-guide"],
    updatedAt: "2026-06-16",
    published: true,
  },
  {
    id: "a4",
    title: "TFN（タックスファイルナンバー）取得ガイド",
    slug: "tfn-guide",
    category: "tfn",
    description: "給与受け取りに必須のTFNをATO公式サイトから無料でオンライン申請する方法を解説します。",
    content: [
      "TFN（Tax File Number）は納税者番号で、就労して給与を受け取るために必須です。ATO（オーストラリア国税局）の公式サイトから無料で申請できます。",
      "申請から発行まで通常2〜4週間。郵送で登録住所に届きます。番号は一生変わらないため、安全に保管してください。",
    ],
    keyFacts: [
      { label: "費用", value: "無料（公式サイトのみ。代行に費用を払う必要なし）" },
      { label: "申請先", value: "ATO公式サイト（オンライン）" },
      { label: "発行期間", value: "約2〜4週間（郵送）" },
      { label: "必要条件", value: "オーストラリア国内に滞在し、有効なビザを保持していること" },
    ],
    steps: [
      { title: "ATOのTFN申請ページへ", description: "ワーホリ等の一時滞在者向けオンライン申請フォームを開きます。" },
      { title: "パスポート・ビザ情報を入力", description: "氏名、生年月日、パスポート番号、入国情報を入力します。" },
      { title: "郵送先住所を入力", description: "TFN通知を受け取れる住所（ホステル可）を登録します。" },
      { title: "申請を送信して待つ", description: "受付番号を控え、郵送での到着を待ちます。" },
    ],
    tips: [
      "TFNは雇用主・銀行・myGovで使います。届いたら写真に撮ってクラウドに保管を。",
      "TFNを他人に教えるのは雇用主・銀行・ATOなど正規の相手だけ。SNSや見知らぬ相手には絶対に伝えないこと。",
    ],
    faqs: [
      {
        question: "TFNとABNの違いは？",
        answer:
          "TFNは「雇われて働く（従業員）」ための番号、ABNは「個人事業主として働く（Uber Eats等）」ための番号です。ジャパレスやカフェで雇用される場合はTFN、ギグワークをする場合はABNが必要です。",
      },
    ],
    sources: [
      { label: "ATO - Apply for a TFN", url: "https://www.ato.gov.au/individuals-and-families/tax-file-number/apply-for-a-tfn" },
    ],
    relatedSlugs: ["abn-guide", "tax-return-guide", "bank-account-guide"],
    updatedAt: "2026-06-10",
    published: true,
  },
  {
    id: "a5",
    title: "ABN取得とギグワークの始め方",
    slug: "abn-guide",
    category: "abn",
    description: "Uber EatsやDoorDashなどのギグワークに必要なABNを、ABR公式サイトから無料で取得する手順を解説します。",
    content: [
      "ABN（Australian Business Number）は個人事業主（Sole Trader）として働くための事業者番号です。Uber Eats・DoorDash・一部の建設現場などはABNが必要です。",
      "ABRの公式サイトから無料で申請でき、多くは即時〜数日で発行されます。ABNでの収入は自分で確定申告（Tax Return）する必要があり、経費や走行記録の管理が重要です。",
    ],
    keyFacts: [
      { label: "費用", value: "無料（ABR公式サイト）" },
      { label: "申請先", value: "Australian Business Register（ABR）" },
      { label: "発行期間", value: "即時〜数日" },
      { label: "区分", value: "Sole Trader（個人事業主）" },
    ],
    steps: [
      { title: "ABR公式サイトで申請開始", description: "Sole Traderとして新規ABN申請を選びます。" },
      { title: "本人・事業情報を入力", description: "TFN、氏名、事業内容（デリバリー等）を入力します。" },
      { title: "業種コードを選択", description: "フードデリバリーなど該当する業種を選びます。" },
      { title: "ABNを受け取る", description: "発行されたABN番号を保管し、各アプリに登録します。" },
    ],
    tips: [
      "ABN収入は源泉徴収されないため、税金分（目安として収入の一部）を別口座に取り分けておくと確定申告で慌てません。",
      "走行距離・燃料・スマホ代などは経費計上できる場合があります。記録をこまめに残しましょう。",
    ],
    warnings: ["ABNでの収入は必ず確定申告が必要です。記録（売上・経費）を必ず残してください。"],
    faqs: [
      {
        question: "GST登録は必要ですか？",
        answer:
          "年間売上が75,000 AUD未満であれば原則GST登録は不要です。ただしUber等のライドシェア（乗客輸送）は売上に関わらずGST登録が必要なルールがあるため、フードデリバリーのみか乗客輸送も行うかで判断が変わります。",
      },
    ],
    sources: [
      { label: "Australian Business Register", url: "https://www.abr.gov.au/" },
    ],
    relatedSlugs: ["tax-return-guide", "uber-eats-guide", "doordash-guide"],
    updatedAt: "2026-06-10",
    published: true,
  },
  {
    id: "a6",
    title: "タックスリターン（確定申告）の基本",
    slug: "tax-return-guide",
    category: "tax-return",
    description: "会計年度・申告期限・必要書類・myGov連携まで、ワーホリの確定申告に必要な知識を整理します。",
    content: [
      "オーストラリアの会計年度は7月1日〜翌年6月30日。確定申告（Tax Return）はその後の7月1日〜10月31日に行います。多くのワーホリは源泉徴収された税金の一部が還付されます。",
      "myGovアカウントを作成してATOと連携すれば、雇用主が報告したIncome Statementが自動で反映され、オンラインで簡単に申告できます。",
    ],
    keyFacts: [
      { label: "会計年度", value: "7月1日〜翌6月30日" },
      { label: "申告期間", value: "7月1日〜10月31日" },
      { label: "申告方法", value: "myGov連携でATOオンライン、または税理士（Tax Agent）" },
      { label: "WH税率", value: "課税所得の最初の45,000 AUDまで15%（Working Holiday Maker税率）" },
    ],
    steps: [
      { title: "myGovを作成しATOと連携", description: "オンライン申告の準備をします。" },
      { title: "Income Statementを確認", description: "雇用主が報告した年間収入・源泉徴収額を確認します。" },
      { title: "控除・経費を入力", description: "仕事関連経費などがあれば入力します。" },
      { title: "申告して還付を待つ", description: "口座情報を登録し、還付金の入金を待ちます（通常2週間程度）。" },
    ],
    tips: [
      "出国後でも申告は可能ですが、myGovとATOの連携・銀行口座の維持をしておくと還付がスムーズです。",
      "複数の職場で働いた場合は、すべてのIncome Statementが揃ってから申告しましょう。",
    ],
    faqs: [
      {
        question: "途中帰国でも還付は受けられますか？",
        answer:
          "受けられます。会計年度の途中で帰国する場合でも、翌会計年度の申告期間に確定申告すれば還付対象になります。豪ドルを受け取れる口座を残しておくと便利です。",
      },
    ],
    sources: [
      { label: "ATO - Lodging your tax return", url: "https://www.ato.gov.au/individuals-and-families/your-tax-return" },
      { label: "myGov", url: "https://my.gov.au/" },
    ],
    relatedSlugs: ["super-guide", "tfn-guide", "abn-guide"],
    updatedAt: "2026-06-10",
    published: true,
  },
  {
    id: "a7",
    title: "Superannuation（退職年金）の引き出し｜DASP申請",
    slug: "super-guide",
    category: "super",
    description: "雇用主が積み立てたSuperを、ワーホリ終了後にDASPとして請求する手順と注意点を解説します。",
    content: [
      "Superannuation（スーパー）は雇用主が給与とは別に積み立てる退職年金で、給与の11.5%（2024年時点、段階的に引き上げ）が拠出されます。ワーホリでも対象です。",
      "ビザが失効し出国した後、DASP（Departing Australia Superannuation Payment）として請求できます。請求にはSuper口座情報とビザの失効が必要で、受取時に源泉課税（WHMは65%）が引かれます。",
    ],
    keyFacts: [
      { label: "拠出率", value: "給与の11.5%（雇用主負担、2024年時点）" },
      { label: "対象", value: "週の労働時間に関わらず、対象賃金を得た従業員" },
      { label: "請求条件", value: "出国済み＋ビザ失効" },
      { label: "DASP課税（WHM）", value: "65%（受取額から源泉徴収）" },
    ],
    steps: [
      { title: "Super口座を把握", description: "雇用主が拠出した口座（複数の場合あり）を確認します。" },
      { title: "口座を統合（任意）", description: "複数あれば1つにまとめると請求が簡単です。" },
      { title: "出国・ビザ失効を待つ", description: "DASPは出国後かつビザ失効後に申請できます。" },
      { title: "DASPをオンライン申請", description: "ATOのDASPオンラインシステムから請求します。" },
    ],
    tips: [
      "勤務先が変わるたびに新しいSuper口座を作らず、最初の口座を使い回すと管理が楽です。",
      "Super口座番号（USI/メンバー番号）は給与明細やSuper会社のアプリで確認できます。",
    ],
    faqs: [
      {
        question: "帰国前に引き出せますか？",
        answer:
          "できません。DASPはビザが失効し、かつ国外に出た後にのみ請求できます。帰国直前にSuper口座情報を控えておき、帰国後に申請するのが一般的です。",
      },
    ],
    sources: [
      { label: "ATO - DASP", url: "https://www.ato.gov.au/individuals-and-families/super-for-individuals-and-families/super/withdrawing-and-using-your-super/departing-australia-superannuation-payment-dasp" },
    ],
    relatedSlugs: ["tax-return-guide"],
    updatedAt: "2026-06-10",
    published: true,
  },
  {
    id: "a8",
    title: "Uber Eats配達員の始め方｜登録から稼働・保険まで",
    slug: "uber-eats-guide",
    category: "uber-eats",
    description: "ギグワークの代表格Uber Eatsの登録手順、稼働のコツ、保険の考え方をまとめました。",
    content: [
      "Uber Eatsはスキマ時間に働けるフードデリバリーで、英語にまだ自信がなくても始めやすいのが魅力です。ABN登録と本人確認を済ませれば、自転車・バイク・車で配達できます。",
      "報酬は配達ごとの距離・時間ベース。ピークタイム（昼12時前後・夜18〜21時）と雨の日は需要が高く稼ぎやすい傾向です。",
    ],
    keyFacts: [
      { label: "必要なもの", value: "ABN、配達手段、保温バッグ、スマホ" },
      { label: "稼ぎ時", value: "平日ランチ・週末ディナー・雨天" },
      { label: "報酬", value: "配達距離・時間に応じた変動制＋チップ" },
      { label: "税金", value: "ABN収入のため確定申告が必要" },
    ],
    steps: [
      { title: "ABNを取得", description: "Sole TraderとしてABNを取得します（ABNガイド参照）。" },
      { title: "アプリで登録", description: "本人確認書類・ビザ・配達手段を登録します。" },
      { title: "バッグと装備を準備", description: "保温バッグ、スマホホルダー、ヘルメット（バイク/自転車）を用意します。" },
      { title: "稼働を開始", description: "ピークタイムに需要の高いエリアでオンラインにします。" },
    ],
    tips: [
      "自転車配達はCBD（中心部）の短距離案件が多く、バイクは郊外も含め効率的。エリア特性で手段を選びましょう。",
      "売上・経費（自転車整備、燃料、スマホ代）を毎月記録しておくと確定申告が楽になります。",
    ],
    warnings: ["配達中の事故・賠償に備え、対人・対物をカバーする保険への加入を強く推奨します。"],
    faqs: [
      {
        question: "ワーホリビザでUber Eatsをやって問題ありませんか？",
        answer:
          "個人事業主としての就労はワーホリビザで可能です。ただし同一雇用主6か月ルールはあくまで「雇用」に関するもので、複数のプラットフォームを掛け持ちすること自体に制限はありません。",
      },
    ],
    sources: [
      { label: "Uber - 配達パートナー登録", url: "https://www.uber.com/au/en/deliver/" },
    ],
    relatedSlugs: ["abn-guide", "doordash-guide", "tax-return-guide"],
    updatedAt: "2026-06-10",
    published: true,
  },
  {
    id: "a9",
    title: "DoorDash配達の基礎｜登録とエリア戦略",
    slug: "doordash-guide",
    category: "doordash",
    description: "DoorDashの登録手順と、稼ぎやすいエリア選び・評価維持のコツを解説します。",
    content: [
      "DoorDashはUber Eatsと並ぶ大手デリバリーで、地域によってはこちらの方が案件が多いこともあります。掛け持ちして案件の多い方で稼働するのが効率的です。",
      "登録にはABNが必要で、配達ごとの報酬＋チップが収入になります。完了率・評価を高く保つと優先的に案件が回ってきます。",
    ],
    keyFacts: [
      { label: "必要なもの", value: "ABN、配達手段、保温バッグ、スマホ" },
      { label: "特徴", value: "地域によりUber Eatsより案件が多い場合あり" },
      { label: "報酬", value: "配達ごとの報酬＋チップ（Dasher Pay）" },
      { label: "税金", value: "ABN収入のため確定申告が必要" },
    ],
    steps: [
      { title: "Dasherアカウント作成", description: "本人確認・ビザ・ABNを登録します。" },
      { title: "アクティベーションを完了", description: "必要に応じてアクティベーションキットを受け取ります。" },
      { title: "エリアを選定", description: "レストランが密集する需要の高いゾーンで稼働します。" },
      { title: "評価・完了率を維持", description: "時間厳守と丁寧な対応で評価を保ちます。" },
    ],
    tips: [
      "Uber EatsとDoorDashの両方をオンラインにして、報酬の良い案件を選ぶ「ダブルアップ」が定番です。",
      "ピーク時間帯のプロモーション（追加報酬）を狙うと時給効率が上がります。",
    ],
    sources: [
      { label: "DoorDash - Become a Dasher", url: "https://www.doordash.com/dasher/signup/" },
    ],
    relatedSlugs: ["uber-eats-guide", "abn-guide"],
    updatedAt: "2026-06-10",
    published: true,
  },
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
    relatedSlugs: ["whv-complete-guide", "jobs-guide"],
    updatedAt: "2026-06-10",
    published: true,
  },
  {
    id: "a11",
    title: "シェアハウス探しと詐欺対策｜内見・Bond・契約の流れ",
    slug: "housing-guide",
    category: "housing",
    description: "Facebook Marketplace等での家探しの手順、Bond（敷金）の仕組み、詐欺を避けるチェックポイントを解説します。",
    content: [
      "ワーホリの住居はシェアハウス（フラットシェア）が一般的です。Facebookグループ/Marketplace、Flatmates.com.au、Gumtreeなどで探します。",
      "内見せずに送金を求める物件は詐欺の典型です。必ず現地で部屋・契約条件・同居人を確認してから支払いましょう。Bond（敷金）は通常2〜4週間分が目安です。",
    ],
    keyFacts: [
      { label: "主な探し方", value: "Facebookグループ/Marketplace、Flatmates、Gumtree" },
      { label: "家賃の支払い", value: "週単位（per week）表記が基本" },
      { label: "Bond（敷金）", value: "通常2〜4週間分。退去時に原状回復を条件に返金" },
      { label: "費用の含有", value: "光熱費・ネット込み（bills included）か要確認" },
    ],
    steps: [
      { title: "予算とエリアを決める", description: "通勤時間・治安・スーパーの近さを考慮します。" },
      { title: "複数物件に内見を予約", description: "写真だけで決めず、実際に見て比較します。" },
      { title: "条件を確認", description: "家賃・Bond・最低滞在期間・光熱費・人数を確認します。" },
      { title: "契約・入金", description: "内見・合意後に支払い、領収書や契約メッセージを残します。" },
    ],
    tips: [
      "「週いくら」表示が多いので、月額換算（週×52÷12）で予算と比較しましょう。",
      "支払いは記録が残る銀行振込で。現金手渡しのみを要求される場合は慎重に。",
    ],
    warnings: ["内見前の送金、相場より極端に安い物件、海外在住オーナーを名乗るケースは詐欺の可能性が高いです。"],
    faqs: [
      {
        question: "Bondは必ず返ってきますか？",
        answer:
          "部屋を破損なく明け渡せば返金されるのが原則です。入居時に既存の傷を写真で記録しておくと、退去時のトラブルを防げます。",
      },
    ],
    relatedSlugs: ["whv-complete-guide", "arrival-checklist"],
    updatedAt: "2026-06-10",
    published: true,
  },
  {
    id: "a12",
    title: "車の購入とRego・保険｜州ごとのルールと名義変更",
    slug: "cars-guide",
    category: "cars",
    description: "ワーホリでの中古車購入、Rego（登録）、Roadworthy、CTP/任意保険の基礎を州別の注意点とともに解説します。",
    content: [
      "ファームや地方移動には車が便利です。中古車はGumtree、Facebook Marketplace、ディーラーで購入できます。州ごとにRego（登録）やRoadworthy Certificate（車検相当）のルールが異なるため、購入前に州の運輸局情報を確認しましょう。",
      "Rego費用にはCTP（強制対人保険）が含まれますが、対物・車両は任意保険が別途必要です。州をまたいで長期移動する場合はRegoの州も意識すると手続きがスムーズです。",
    ],
    keyFacts: [
      { label: "主な購入先", value: "Gumtree、Facebook Marketplace、中古車ディーラー" },
      { label: "Rego", value: "州ごとの登録。CTP（強制対人保険）を含む" },
      { label: "Roadworthy", value: "州により名義変更時に必要（例：QLD/VIC）" },
      { label: "任意保険", value: "Third Party Property以上の加入を推奨" },
    ],
    steps: [
      { title: "車を選ぶ", description: "走行距離・整備履歴・Rego残存期間を確認します。試乗もおすすめ。" },
      { title: "売買書類を作成", description: "売主と売買契約・領収書を交わします。" },
      { title: "Rego名義を変更", description: "州の運輸局で名義変更し、必要ならRoadworthyを取得します。" },
      { title: "保険に加入", description: "CTPに加え、対物または車両保険を検討します。" },
    ],
    tips: [
      "州によって名義変更の必要書類・期限が違います。購入する州の運輸局サイトを必ず確認しましょう。",
      "出国時の売却も見据え、人気車種（トヨタ等）は手放しやすくおすすめです。",
    ],
    warnings: ["Regoが切れた車の購入や、名義変更を怠ると罰金・トラブルの原因になります。"],
    faqs: [
      {
        question: "国際免許で運転できますか？",
        answer:
          "日本の免許＋国際運転免許証（IDP）で運転できます。長期滞在する場合は州によって現地免許への切り替えが必要になることがあるため、運転免許ガイドも確認してください。",
      },
    ],
    relatedSlugs: ["license-guide", "transport-payment-guide"],
    updatedAt: "2026-06-10",
    published: true,
  },
  {
    id: "a13",
    title: "Wiseで日本円→豪ドルを両替・送金する方法",
    slug: "money-transfer-wise",
    category: "money",
    description:
      "現地での両替や日本からの送金はWiseが定番。マルチカレンシー口座・デビットカード・実質レートでの送金手順とコツを解説します。",
    content: [
      "日本円から豪ドルへの両替・送金は、銀行より手数料・為替レートで有利なWise（旧TransferWise）が人気です。実勢レート（ミッドマーケットレート）に近いレートで、手数料が明確なのが特徴です。",
      "Wiseのマルチカレンシー口座を作ると、AUDを保有でき、現地の銀行口座のように給与受け取りやデビットカード決済が可能です。日本の口座から豪ドルへチャージしておけば、到着直後から現金なしで生活を始められます。",
    ],
    keyFacts: [
      { label: "レート", value: "ミッドマーケットレート（上乗せの少ない実勢レート）" },
      { label: "口座", value: "マルチカレンシー口座でAUDを保有可能" },
      { label: "カード", value: "Wiseデビットカードでタッチ決済・ATM出金" },
      { label: "用途", value: "両替、日本からの送金、給与受け取り、現地決済" },
    ],
    steps: [
      { title: "Wiseアカウントを作成", description: "アプリで本人確認（パスポート等）を済ませます。" },
      { title: "AUDをチャージ/送金", description: "日本の銀行口座から入金し、JPY→AUDに両替します。" },
      { title: "デビットカードを発行", description: "物理/バーチャルカードを発行し、決済に使います。" },
      { title: "現地で利用", description: "タッチ決済、ATM出金、給与受け取りに活用します。" },
    ],
    tips: [
      "為替は変動するため、円高のタイミングでまとめて両替しておくと有利です。",
      "Wiseのカードはタッチ決済対応。交通機関のクレカ乗車にも使えます。",
      "大きな金額は分割送金でリスク分散。送金上限・本人確認の段階に注意。",
    ],
    warnings: ["為替レートは常に変動します。送金前に手数料込みの受取額を必ず確認してください。"],
    faqs: [
      {
        question: "Wiseだけで現地生活できますか？",
        answer:
          "多くの場面でWiseのAUD残高とデビットカードで生活できますが、雇用主や家主によっては現地銀行（CommBank等）の口座を求める場合があります。Wise＋現地銀行口座の併用が最も安心です。",
      },
      {
        question: "現金は本当に要りませんか？",
        answer:
          "都市部ではほぼ不要です。スーパー・カフェ・交通・ショッピングはタッチ決済で完結します。ごく一部の個人商店やマーケット用に少額の現金があると安心です。",
      },
    ],
    sources: [
      { label: "Wise 公式", url: "https://wise.com/" },
    ],
    relatedSlugs: ["bank-account-guide", "transport-payment-guide", "arrival-checklist"],
    updatedAt: "2026-06-10",
    published: true,
  },
  {
    id: "a14",
    title: "オーストラリアの銀行口座開設ガイド（CommBank・NABなど）",
    slug: "bank-account-guide",
    category: "bank",
    description:
      "渡航前のオンライン申込から到着後の本人確認まで、ワーホリの銀行口座開設の流れと主要4大銀行の特徴を解説します。",
    content: [
      "給与受け取りや家賃支払いには現地の銀行口座があると便利です。四大銀行はCommonwealth Bank（CommBank）、Westpac、ANZ、NAB。アプリの使いやすさやワーホリ向け無料口座の有無で選ぶと良いでしょう。",
      "多くの銀行は渡航前にオンラインで口座申込ができ、到着後に支店やアプリで本人確認（パスポート提示）をして有効化します。事前申込しておくと、到着後すぐに口座が使えます。",
    ],
    keyFacts: [
      { label: "四大銀行", value: "CommBank / Westpac / ANZ / NAB" },
      { label: "申込", value: "渡航前にオンライン申込→到着後に本人確認" },
      { label: "必要書類", value: "パスポート、住所、TFN（後から登録可）" },
      { label: "カード", value: "デビットカード（タッチ決済）が即日〜数日で利用可" },
    ],
    steps: [
      { title: "銀行を選ぶ", description: "アプリの使いやすさ・口座維持費・ATM網で比較します。" },
      { title: "渡航前にオンライン申込", description: "多くの銀行は到着前に口座開設の事前申込が可能です。" },
      { title: "到着後に本人確認", description: "支店またはアプリでパスポートを提示し口座を有効化します。" },
      { title: "デビットカードを受け取る", description: "カードを受け取り、給与振込先・決済に使います。" },
    ],
    tips: [
      "TFNは後から口座に登録できます。未登録だと利息に高い税率がかかるため、届いたら登録を。",
      "口座維持費（monthly fee）が無料の条件（学生/ワーホリ向け、または毎月の入金条件）を確認しましょう。",
      "Wiseと現地銀行を併用すると、両替はWise・現地受け取りは銀行、と使い分けられて便利です。",
    ],
    faqs: [
      {
        question: "TFNがなくても口座は作れますか？",
        answer:
          "作れます。TFNは口座開設の必須条件ではなく、後から登録できます。ただし未登録のままだと利息に対して高い税率が適用されるため、TFNが届いたら早めに登録しましょう。",
      },
    ],
    sources: [
      { label: "Commonwealth Bank（移住者向け口座）", url: "https://www.commbank.com.au/banking/moving-to-australia.html" },
    ],
    relatedSlugs: ["money-transfer-wise", "tfn-guide", "arrival-checklist"],
    updatedAt: "2026-06-10",
    published: true,
  },
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
    id: "a16",
    title: "オーストラリアの運転免許｜国際免許と現地免許への切り替え",
    slug: "license-guide",
    category: "license",
    description:
      "日本の免許＋国際免許での運転可否、長期滞在時の現地免許への切り替え、更新の考え方を州別の注意点とともに解説します。",
    content: [
      "オーストラリアでは、日本の運転免許証＋国際運転免許証（IDP）または日本の免許の英訳（NAATI等の公認翻訳）があれば運転できます。短期〜ワーホリ期間の運転は基本これで対応可能です。",
      "ただし州ごとに『一時滞在者として運転できる期間』のルールがあり、長期滞在や永住に移行する場合は現地の運転免許への切り替え（または取得）が必要になることがあります。レンタカーや車購入時にも、有効な免許の携帯が前提です。",
    ],
    keyFacts: [
      { label: "短期の運転", value: "日本の免許＋国際免許(IDP) もしくは公認英訳" },
      { label: "携帯義務", value: "運転時は免許証（＋IDP/翻訳）を常に携帯" },
      { label: "切り替え", value: "長期滞在・永住では州の現地免許が必要な場合あり" },
      { label: "州差", value: "認められる期間・手続きは州ごとに異なる" },
    ],
    steps: [
      { title: "渡航前にIDPを取得", description: "日本の運転免許センター等で国際運転免許証を発行します（有効期限1年）。" },
      { title: "運転可否を州で確認", description: "滞在する州で一時滞在者の運転ルール・期間を確認します。" },
      { title: "必要なら現地免許へ切替", description: "長期滞在する場合、州の運輸局で切り替え/取得手続きを行います。" },
      { title: "免許を携帯して運転", description: "運転時は免許＋IDP/翻訳を必ず携帯します。" },
    ],
    tips: [
      "IDPは日本国内でしか発行できません。渡航前に必ず取得しておきましょう（即日発行が可能）。",
      "州をまたいで生活する場合は、メインで滞在する州のルールを基準に判断すると分かりやすいです。",
      "日本の免許証の有効期限が滞在中に切れないか事前に確認を。切れる場合は出発前に更新を。",
    ],
    warnings: ["州ごとに一時滞在者が運転できる期間や条件が異なります。長期運転する場合は必ず州の運輸局で最新ルールを確認してください。"],
    faqs: [
      {
        question: "国際免許だけで1年間ずっと運転できますか？",
        answer:
          "多くの州ではワーホリのような一時滞在者は、有効な海外免許＋IDP（または英訳）で滞在中運転できますが、州によって扱いが異なります。永住権取得など滞在資格が変わると切り替えが必要になるため、州の運輸局情報を確認してください。",
      },
    ],
    relatedSlugs: ["cars-guide", "transport-payment-guide"],
    updatedAt: "2026-06-10",
    published: true,
  },
  {
    id: "a17",
    title: "ローカルジョブの探し方｜レジュメ・面接・サイト活用",
    slug: "jobs-guide",
    category: "jobs",
    description:
      "ジャパレスからローカルのカフェ・小売まで、求人サイト、レジュメ作成、面接（トライアル）対策をまとめた仕事探しの総合ガイド。",
    content: [
      "ワーホリの仕事は大きく『ジャパレス（日本食レストラン）』『ローカル（カフェ・小売・倉庫等）』『ファーム』に分かれます。英語に慣れるまではジャパレスで働き、慣れたらローカルに挑戦する人も多いです。",
      "求人はSEEK、Indeed、Gumtree、Facebookの求人グループ、店頭の貼り紙（Walk-in）で見つかります。1ページのレジュメ（履歴書）を用意し、気になる店には直接出向いて手渡しするのも有効です。",
    ],
    keyFacts: [
      { label: "主な求人源", value: "SEEK、Indeed、Gumtree、Facebookグループ、店頭" },
      { label: "レジュメ", value: "A4・1枚。連絡先/職歴/スキル/在豪期間を簡潔に" },
      { label: "最低賃金", value: "全国最低賃金が設定（Fair Work、毎年改定）" },
      { label: "資格", value: "飲食はRSA、建設はWhite Cardが必要な場合あり" },
    ],
    steps: [
      { title: "レジュメを作る", description: "英文1枚で、連絡先・職歴・スキル・滞在可能期間を明記します。" },
      { title: "求人を探す/応募", description: "求人サイトと店頭を併用。気になる店は直接訪問します。" },
      { title: "トライアル/面接", description: "短い実技トライアルや面接に臨みます。自己紹介を練習しておきます。" },
      { title: "TFNを提出して勤務開始", description: "採用後、TFNと銀行口座を提出して給与を受け取ります。" },
    ],
    tips: [
      "カフェ等の飲食はRSA（responsible service of alcohol）、建設現場はWhite Cardがあると採用に有利です。",
      "給与は週払い・銀行振込が一般的。Payslip（給与明細）を必ず受け取り保管しましょう。",
      "最低賃金や労働条件はFair Workで確認できます。不当に低い『キャッシュジョブ』には注意。",
    ],
    warnings: ["極端に低い時給の現金払い（cash in hand）は、最低賃金違反や税・保険の保護がないリスクがあります。"],
    faqs: [
      {
        question: "同じ職場でどのくらい働けますか？",
        answer:
          "ワーホリ（417）は原則として同一雇用主のもとで6か月までです。一部の業種・地域では例外的に延長が認められる場合があります。",
      },
    ],
    sources: [
      { label: "Fair Work Ombudsman（労働条件・最低賃金）", url: "https://www.fairwork.gov.au/" },
      { label: "SEEK（求人サイト）", url: "https://www.seek.com.au/" },
    ],
    relatedSlugs: ["farm-second-visa", "tfn-guide", "whv-complete-guide"],
    updatedAt: "2026-06-10",
    published: true,
  },
  {
    id: "a18",
    title: "渡航前準備チェックリスト｜出発3か月前から当日まで",
    slug: "preparation-checklist",
    category: "preparation",
    description:
      "ビザ取得後、出発までにやるべき準備を時系列で網羅。航空券・保険・資金・各種解約・持ち物まで、抜け漏れを防ぐチェックリストです。",
    content: [
      "ワーホリの準備は「いつ・何を」やるかを時系列で押さえると驚くほどスムーズになります。直前に慌てて費用がかさんだり、必要書類を忘れて現地で困らないよう、出発3か月前から逆算して進めましょう。",
      "特に見落としやすいのが『日本側の手続き（住民票・年金・保険・税金）』と『現地で最初に使うお金の準備』です。出国前にやらないと帰国後まで面倒が残るものもあるため、早めに着手するのがおすすめです。",
      "下のステップは標準的な進め方です。あなたの渡航時期や都市に合わせて調整してください。",
    ],
    keyFacts: [
      { label: "準備開始の目安", value: "出発の3か月前から" },
      { label: "パスポート残存期間", value: "滞在予定期間＋6か月以上が安心" },
      { label: "初期費用の目安", value: "30〜50万円（航空券・保険・当面の生活費）" },
      { label: "保険", value: "ワーホリ対応の海外旅行保険（1年）を推奨" },
      { label: "海外転出届", value: "1年以上の滞在なら提出を検討（年金・住民税に影響）" },
    ],
    steps: [
      {
        title: "【3か月前】ビザ・航空券・保険を確保",
        description:
          "ビザ許可を確認し、航空券（片道でも可だが復路や出国計画を聞かれることがある）と1年間の海外保険を手配します。保険は『持病・歯科・携行品・賠償責任』の補償範囲を必ず確認しましょう。",
      },
      {
        title: "【2か月前】お金まわりの準備",
        description:
          "Wiseのマルチカレンシー口座を開設してデビットカードを取り寄せ、日本円→豪ドルの両替方法を決めます。現地銀行は到着後に開設するため、最初の数週間はWiseや海外対応カードで支払う計画にしておきます。",
      },
      {
        title: "【1か月前】日本側の手続き",
        description:
          "海外転出届（1年以上滞在の場合）、国民年金・健康保険・住民税の扱い、携帯電話の解約/休止、クレジットカードの有効期限と海外利用設定、各種サブスクの整理を行います。",
      },
      {
        title: "【2週間前】書類とコピーを準備",
        description:
          "パスポート、ビザ許可通知（PDF）、保険証券、英文の残高証明、海外運転免許（必要なら国際免許証またはNAATI翻訳）、証明写真、常備薬と英文処方箋を用意。重要書類はクラウドにもバックアップします。",
      },
      {
        title: "【前日〜当日】荷造りと最終確認",
        description:
          "預け荷物と機内持ち込みを分け、貴重品・書類・常備薬・現金（数百ドル）は手荷物へ。SIM/eSIMの到着後プランや空港から宿への移動手段も確認しておきます。",
      },
    ],
    tips: [
      "重要書類はすべてスマホとクラウド（Googleドライブ等）にPDF保存。紙とデジタルの二重持ちが安心です。",
      "常備薬は英文の説明書や処方箋を添えると入国時も安心。市販薬も普段使うものを少量持参すると最初の数日が楽です。",
      "変換プラグはオーストラリア式（Oタイプ）。スマホ・PCの充電器は100〜240V対応がほとんどなので変圧器は基本不要です。",
      "クレジットカードは2枚（ブランドを分ける）持つと、片方が使えない時の保険になります。",
    ],
    faqs: [
      {
        question: "海外転出届は必ず出すべきですか？",
        answer:
          "1年以上海外に滞在する場合は提出するケースが多いです。提出すると住民税の課税対象外になりますが、国民健康保険は使えなくなります（だから海外保険が必要）。年金は任意加入を選べます。自分の滞在期間と帰国後の予定で判断しましょう。",
      },
      {
        question: "現金はいくら持っていけばいい？",
        answer:
          "オーストラリアはほぼキャッシュレスのため、到着時に数百ドルあれば十分です。残りはWiseや海外対応のデビット/クレジットで支払い、現地銀行口座を開設してから移すのが安全で手数料も抑えられます。",
      },
      {
        question: "英語の勉強は出発前にどこまでやるべき？",
        answer:
          "完璧でなくて大丈夫です。自己紹介、面接、買い物・賃貸・仕事で使う定型表現を準備しておくと到着後の立ち上がりが早くなります。現地で語学学校に通う選択肢もあります。",
      },
    ],
    sources: [
      {
        label: "外務省 海外安全ホームページ",
        url: "https://www.anzen.mofa.go.jp/",
      },
    ],
    warnings: [
      "海外転出・年金・税金の取り扱いは個人の状況で異なります。判断に迷う場合は市区町村の窓口で確認してください。",
    ],
    relatedSlugs: ["whv-complete-guide", "money-transfer-wise", "arrival-checklist"],
    updatedAt: "2026-06-10",
    published: true,
  },
  {
    id: "a19",
    title: "ワーホリ保険の選び方｜補償範囲と費用の目安",
    slug: "insurance-guide",
    category: "preparation",
    description:
      "海外保険は『万一の医療費』への備え。ワーホリで重視すべき補償項目と、加入時のチェックポイントを解説します。",
    content: [
      "オーストラリアの医療費は非常に高額で、ちょっとした受診や入院でも日本の数倍かかることがあります。ワーホリでは公的医療（Medicare）の対象外となるため、民間の海外保険への加入が事実上の必須です。",
      "保険は『安さ』だけで選ばず、治療・救援費用が無制限または十分に高いか、歯科・持病・携行品・個人賠償責任までカバーされるかを基準に選びましょう。",
    ],
    keyFacts: [
      { label: "必要性", value: "Medicare対象外のため民間保険がほぼ必須" },
      { label: "期間", value: "滞在期間に合わせて1年などで設定" },
      { label: "費用の目安", value: "1年で10〜20万円前後（補償内容で変動）" },
      { label: "重要な補償", value: "治療・救援費用、賠償責任、携行品、歯科" },
    ],
    steps: [
      { title: "補償範囲を確認", description: "治療・救援費用の上限、歯科・持病・妊娠の扱い、賠償責任額をチェックします。" },
      { title: "期間と費用を比較", description: "複数社で1年プランを比較。長期割引やクレカ付帯との併用も検討します。" },
      { title: "申込・証券を保存", description: "加入後は英文の保険証券をPDFで保存し、緊急連絡先を控えます。" },
    ],
    tips: [
      "クレジットカード付帯保険は『最初の90日のみ』『治療費が低額』など制限が多いので、長期滞在では本格的な保険を主契約にしましょう。",
      "持病がある場合は事前申告が必要なことが多いです。申告漏れは支払い拒否の原因になります。",
    ],
    warnings: ["補償内容・免責は商品ごとに大きく異なります。契約前に約款で必ず確認してください。"],
    relatedSlugs: ["preparation-checklist", "whv-complete-guide"],
    updatedAt: "2026-06-10",
    published: true,
  },
  {
    id: "a20",
    title: "セカンド・サードビザ完全ガイド｜Specified Workの条件と申請",
    slug: "second-visa-guide",
    category: "second-visa",
    description:
      "滞在を最大3年に延ばすためのセカンド/サードビザ。対象となる労働（Specified Work）の条件、必要日数、申請手順と注意点をまとめました。",
    content: [
      "ワーキングホリデー（417）は、規定の労働（Specified Work）を一定日数こなすことで、2年目（セカンド）・3年目（サード）のビザを申請できます。これにより最長3年の滞在が可能になります。",
      "セカンドビザは『88日（約3か月）』、サードビザは『6か月（約179日）』のSpecified Workが条件です。対象となる仕事の種類・地域（指定ポストコード）が細かく定められているため、働き始める前に必ず要件を確認しましょう。",
      "もっとも一般的なのはファーム（果物・野菜の収穫やパッキング）ですが、建設・鉱業・漁業・植林なども対象になる場合があります。働いた日数は給与明細やPayslip、雇用主の証明で記録を残すことが重要です。",
    ],
    keyFacts: [
      { label: "セカンド条件", value: "Specified Workを88日（フルタイム相当）" },
      { label: "サード条件", value: "2年目に6か月（約179日）のSpecified Work" },
      { label: "申請料（各回）", value: "約1,000 AUD（2025年7月改定）" },
      { label: "対象業種", value: "農業・畜産・建設・鉱業・漁業・植林など" },
      { label: "地域要件", value: "指定された地方（regional）のポストコードのみ対象" },
      { label: "証明", value: "Payslip・雇用主の書類・銀行入金記録を保管" },
    ],
    steps: [
      {
        title: "対象の仕事・地域か確認",
        description:
          "公式の指定業種・指定ポストコードに該当するか、働く前に必ず確認します。対象外の地域・業種で働いても日数にカウントされません。",
      },
      {
        title: "正規雇用で働き記録を残す",
        description:
          "TFNを提出し、給与が銀行振込・Payslip発行される正規の条件で働きます。現金払いのみの仕事は日数の証明が難しくなります。",
      },
      {
        title: "88日（または6か月）を達成",
        description:
          "フルタイム相当の労働日数を満たします。週休や悪天候での休みのカウント方法は要件に従って記録します。",
      },
      {
        title: "ImmiAccountで申請",
        description:
          "必要日数を満たしたら、Payslip等の証拠を添えてオンラインで申請します。1年目のビザが有効なうちに申請するのが安全です。",
      },
    ],
    tips: [
      "悪質な農園やブローカーに注意。『日数をごまかして証明する』提案には絶対に乗らないこと。発覚するとビザ却下・将来の入国制限のリスクがあります。",
      "Payslip・タイムシート・銀行入金履歴・雇用契約は必ず保管。申請時の証拠になります。",
      "天候や繁忙期で収穫量が変わるため、収入が不安定なことも。生活費に余裕を持って臨みましょう。",
    ],
    faqs: [
      {
        question: "88日は連続でなくてもいい？",
        answer:
          "連続している必要はありません。複数の雇用主・期間を合算できます。ただし各期間が対象業種・対象地域の条件を満たしている必要があります。",
      },
      {
        question: "ファーム以外でもセカンドビザは取れますか？",
        answer:
          "はい。建設、鉱業、漁業・真珠養殖、植林・伐採なども対象になり得ます。ただし業種ごとに細かい定義があるため、公式の指定リストで確認してください。",
      },
      {
        question: "現金払いの仕事でも日数にカウントされますか？",
        answer:
          "原則として、正規に課税され記録が残る労働が必要です。現金のみで証明が残らない働き方は認められないリスクが高く、避けるべきです。",
      },
    ],
    sources: [
      {
        label: "Department of Home Affairs｜Specified work",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work",
      },
    ],
    warnings: [
      "対象業種・指定地域・必要日数の定義は予告なく変更されます。働き始める前に必ず公式情報で最新の条件を確認してください。",
    ],
    relatedSlugs: ["farm-second-visa", "whv-complete-guide", "jobs-guide"],
    updatedAt: "2026-06-10",
    published: true,
  },
  {
    id: "a21",
    title: "オーストラリアのSIM・通信ガイド｜到着後すぐ使える設定",
    slug: "sim-guide",
    category: "sim",
    description:
      "主要キャリアの特徴、eSIM/物理SIMの選び方、到着後の開通手順まで。空港到着の瞬間からネットに困らないための通信ガイド。",
    content: [
      "オーストラリアの主要キャリアはTelstra、Optus、Vodafoneの3社。これに加えて、これらの回線を借りた格安SIM（Amaysim、Boost、ALDI mobileなど）が多数あります。Telstraは地方でもつながりやすく、Optus/Vodafoneは都市部で割安な傾向です。",
      "到着前にeSIM対応スマホでeSIMを購入しておけば、空港に降りた瞬間からデータ通信が使えて便利です。物理SIMは現地のスーパーやキャリアショップ、空港で購入できます。",
    ],
    keyFacts: [
      { label: "主要キャリア", value: "Telstra / Optus / Vodafone" },
      { label: "格安SIM", value: "Boost(Telstra回線) / Amaysim / ALDI mobile 等" },
      { label: "プラン形態", value: "プリペイド（月額28日サイクル）が主流" },
      { label: "料金の目安", value: "月20〜40 AUDで大容量データのプランが多い" },
    ],
    steps: [
      { title: "到着前にeSIMを用意（任意）", description: "eSIM対応端末ならオンラインで購入し、到着後に有効化すればすぐ使えます。" },
      { title: "SIM/プランを選ぶ", description: "地方中心ならTelstra系、都市中心ならOptus/Vodafone系が目安です。" },
      { title: "本人確認・開通", description: "プリペイドSIMはパスポートで本人確認のうえアクティベートします。" },
      { title: "テザリング設定", description: "ノートPC用にテザリングを設定すれば、自宅Wi-Fiがなくても作業できます。" },
    ],
    tips: [
      "ファームや地方に行く予定があるなら、つながりやすさ重視でTelstra系を選ぶと安心です。",
      "多くのプランは28日サイクル。自動更新の有無と残データの繰り越し条件を確認しましょう。",
    ],
    relatedSlugs: ["arrival-checklist", "preparation-checklist"],
    updatedAt: "2026-06-10",
    published: true,
  },
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
    relatedSlugs: ["arrival-checklist", "housing-guide"],
    updatedAt: "2026-06-10",
    published: true,
  },
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
    relatedSlugs: ["preparation-checklist", "farm-second-visa"],
    updatedAt: "2026-06-10",
    published: true,
  },
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
    title: "ブリスベン・ゴールドコースト エリアガイド｜温暖で暮らしやすいクイーンズランド",
    slug: "area-brisbane",
    category: "area",
    description:
      "1年を通じて温暖なクイーンズランド州の中心地ブリスベンと、ビーチリゾートのゴールドコースト。気候・物価・仕事のバランスを解説します。",
    content: [
      "ブリスベンはクイーンズランド州の州都で、シドニー・メルボルンに次ぐ規模。温暖な気候と、両都市よりやや抑えめの物価が魅力で、初めてのワーホリにも人気です。仕事はジャパレス・ローカルともにあり、生活コストと収入のバランスが取りやすい都市です。",
      "車で1時間ほどの距離にあるゴールドコーストはビーチリゾートで、サーフィンやアウトドアを楽しみたい人に人気。観光・ホスピタリティの仕事も多く、リゾート気分で生活したいワーホリに向いています。",
    ],
    keyFacts: [
      { label: "特徴", value: "温暖・物価控えめ・自然が豊か" },
      { label: "家賃目安(シェア)", value: "週150〜280 AUD" },
      { label: "交通", value: "go cardで電車・バス・フェリーを利用" },
      { label: "向いている人", value: "コスパ重視・温暖な気候・ビーチ好き" },
    ],
    steps: [
      { title: "go cardを用意", description: "クイーンズランドの公共交通はgo cardで利用します。" },
      { title: "拠点を選ぶ", description: "都市生活ならブリスベン、ビーチ中心ならゴールドコーストが目安です。" },
      { title: "観光・ホスピタリティ職を活用", description: "リゾート地は観光系の求人が多めです。" },
    ],
    tips: [
      "亜熱帯気候で冬も比較的暖かく、寒さが苦手な人に過ごしやすい地域です。",
      "夏は紫外線と暑さが強いので、日焼け対策と水分補給をしっかりと。",
    ],
    relatedSlugs: ["area-overview", "housing-guide", "food-guide"],
    updatedAt: "2026-06-10",
    published: true,
  },
  {
    id: "a28",
    title: "パース・ケアンズ エリアガイド｜西海岸と熱帯リゾート",
    slug: "area-perth-cairns",
    category: "area",
    description:
      "のんびりした西海岸の都市パースと、グレートバリアリーフの玄関口ケアンズ。地方ならではの時給や暮らしの特徴を紹介します。",
    content: [
      "パースは西オーストラリア州の州都で、東海岸の大都市から離れた独立した雰囲気の街。物価や家賃は比較的落ち着いており、鉱業（マイニング）が盛んな州のため、時給が高めの仕事が見つかることもあります。のんびりした環境で英語に集中したい人に向いています。",
      "ケアンズは熱帯気候のリゾート都市で、グレートバリアリーフ観光の拠点。観光・ホスピタリティの仕事に加え、周辺地域はファーム（収穫・パッキング）が多く、セカンドビザを目指すワーホリの拠点として人気です。",
    ],
    keyFacts: [
      { label: "パースの特徴", value: "西海岸・物価控えめ・鉱業で高時給も" },
      { label: "ケアンズの特徴", value: "熱帯リゾート・観光とファームの拠点" },
      { label: "家賃目安(シェア)", value: "週140〜260 AUD" },
      { label: "向いている人", value: "地方でのんびり・ファームでセカンドビザを狙う人" },
    ],
    steps: [
      { title: "目的に合わせて選ぶ", description: "落ち着いた都市生活ならパース、ファーム拠点ならケアンズ周辺が目安です。" },
      { title: "ファーム情報を集める", description: "ケアンズ周辺は収穫期の求人が多く、セカンドビザ向けの仕事が見つかりやすいです。" },
      { title: "移動手段を確保", description: "地方では車があると仕事・生活の選択肢が広がります。" },
    ],
    tips: [
      "パースは東海岸と時差（時間帯が異なる）があります。日本との連絡やフライトの時間に注意。",
      "ケアンズは雨季（11〜4月頃）に蒸し暑くスコールが多い一方、収穫の繁忙期と重なることもあります。",
    ],
    relatedSlugs: ["area-overview", "farm-second-visa", "second-visa-guide"],
    updatedAt: "2026-06-10",
    published: true,
  },
  {
    id: "a29",
    title: "渡航前の英語準備｜出発までに固めておく3つの土台",
    slug: "english-prep",
    category: "english",
    description:
      "ビザ申請に英語試験は不要ですが、準備の差が到着後の生活を左右します。自己紹介・面接・生活英語の3本柱を出発前に固める方法を解説。",
    content: [
      "ワーホリのビザ申請に英語試験は要りませんが、英語力は『仕事の選択肢』と『生活の快適さ』に直結します。とはいえ完璧を目指す必要はありません。出発前に最低限の土台を作っておけば、到着後の立ち上がりが大きく変わります。",
      "優先すべきは『自己紹介』『面接・仕事で使う表現』『生活英語（賃貸・買い物・銀行）』の3本柱。これらを丸暗記レベルまで準備しておくと、最初の数週間の不安が一気に減ります。",
      "リスニングは耳を慣らすのに時間がかかるため、出発の数か月前から毎日少しずつ英語音声に触れておくのが効果的です。",
    ],
    keyFacts: [
      { label: "ビザ要件", value: "英語試験は不要" },
      { label: "重点3分野", value: "自己紹介 / 面接・仕事 / 生活（賃貸・買い物・銀行）" },
      { label: "おすすめ開始時期", value: "出発の2〜3か月前から毎日少しずつ" },
      { label: "目標レベル", value: "日常会話で意思疎通できればローカル就労の幅が広がる" },
    ],
    steps: [
      { title: "自己紹介を完成させる", description: "名前・出身・滞在予定・趣味・前職を1分で話せるように、声に出して練習します。" },
      { title: "面接・仕事の定型表現を覚える", description: "『いつから働ける』『何曜日が入れる』『経験あります』など、トライアルで頻出の表現を準備します。" },
      { title: "生活英語をシミュレーション", description: "賃貸の内見、スーパーの会計、銀行口座開設など、場面ごとの会話を練習します。" },
      { title: "毎日リスニングで耳を慣らす", description: "ポッドキャストや動画で豪州英語のアクセントに触れておきます。" },
    ],
    tips: [
      "発音より『止まらず伝える』ことを優先。完璧でなくても通じれば十分です。",
      "スマホの翻訳アプリ（音声・カメラ翻訳）を入れておくと、最初の数週間の保険になります。",
      "現地で語学学校に通う場合も、基礎があるほどクラスが上から始められて効率的です。",
    ],
    faqs: [
      {
        question: "英語が全くできなくてもワーホリできますか？",
        answer:
          "可能です。最初はジャパレス（日本食レストラン）など日本語が通じる職場で働きながら英語に慣れ、徐々にローカルへ挑戦する人が多いです。ただし準備があるほど選択肢は広がります。",
      },
    ],
    relatedSlugs: ["language-school", "preparation-checklist", "jobs-guide"],
    updatedAt: "2026-06-20",
    published: true,
  },
  {
    id: "a30",
    title: "語学学校の選び方｜費用・期間・エリアの考え方",
    slug: "language-school",
    category: "english",
    description:
      "ワーホリは最大17週間まで就学可能。語学学校に通うメリット・費用相場・選び方のポイントと、通わない選択肢まで整理します。",
    content: [
      "ワーキングホリデー（417）では最大17週間（約4か月）まで学校に通えます。到着直後に語学学校へ通い、英語と友達づくりの土台を作ってから仕事を探す人が多いです。",
      "学校選びは『費用』『立地』『生徒の国籍バランス』『クラスの質』で比較します。日本人比率が低い学校のほうが英語漬けになりやすい一方、最初は日本人がいる安心感を取る人もいます。自分の性格と目的で選びましょう。",
    ],
    keyFacts: [
      { label: "就学可能期間", value: "最大17週間（ワーホリ417）" },
      { label: "学費の目安", value: "週250〜400 AUD前後（学校・コースで変動）" },
      { label: "比較軸", value: "費用 / 立地 / 国籍比率 / クラスの質" },
      { label: "申込方法", value: "現地エージェント or 学校に直接" },
    ],
    steps: [
      { title: "目的を決める", description: "英語力アップ重視か、友達づくり・生活の足場づくり重視かを明確にします。" },
      { title: "学校を比較", description: "費用・立地・国籍比率・口コミを比較。無料体験レッスンがあれば活用します。" },
      { title: "期間とコースを選ぶ", description: "一般英語/ビジネス/試験対策など。最初は一般英語が無難です。" },
      { title: "申込・支払い", description: "エージェント経由だと割引やサポートがある場合があります。" },
    ],
    tips: [
      "日本人比率が低い学校ほど英語を使う機会が増えますが、最初の孤独感とのバランスも考えましょう。",
      "学校で出会う友達は家探し・仕事探しの貴重な情報源になります。",
    ],
    relatedSlugs: ["english-prep", "arrival-checklist", "area-overview"],
    updatedAt: "2026-06-20",
    published: true,
  },
  {
    id: "a31",
    title: "医療・保険・病院のかかり方｜GPからMedicareまで",
    slug: "medicare-oshc",
    category: "health",
    description:
      "オーストラリアの医療は高額。ワーホリが病院にかかる流れ、GP（かかりつけ医）の仕組み、海外保険の使い方を解説します。",
    content: [
      "オーストラリアの医療制度は日本と大きく異なります。まず『GP（General Practitioner：かかりつけ医）』を受診し、必要に応じて専門医や病院を紹介してもらうのが基本の流れです。緊急時を除き、いきなり大病院には行きません。",
      "ワーホリは公的医療保険（Medicare）の対象外のため、民間の海外保険でカバーします。受診時は一旦自己負担で支払い、保険会社に請求して払い戻すケースが一般的です。キャッシュレス対応の提携クリニックもあります。",
      "薬は処方薬（処方箋が必要）と市販薬（Chemist/Pharmacyで購入）に分かれます。風邪薬や鎮痛剤などは薬局で買えます。",
    ],
    keyFacts: [
      { label: "最初の窓口", value: "GP（かかりつけ医）。予約制が多い" },
      { label: "Medicare", value: "ワーホリは対象外（民間保険が必須）" },
      { label: "支払い", value: "一旦自己負担→保険請求が一般的" },
      { label: "薬", value: "処方薬はGP経由、市販薬は薬局で購入" },
      { label: "緊急番号", value: "000（救急・警察・消防）" },
    ],
    steps: [
      { title: "保険証券を手元に", description: "英文の保険証券PDFと緊急連絡先をスマホに保存しておきます。" },
      { title: "GPを予約・受診", description: "体調を崩したらまずGPを予約。Hotdoc等のアプリで予約できる場合もあります。" },
      { title: "支払いと領収書", description: "受診料を支払い、領収書・診断書（英文）を必ず受け取ります。" },
      { title: "保険会社へ請求", description: "領収書を添えて保険会社に請求し、払い戻しを受けます。" },
    ],
    tips: [
      "持病がある人は事前に英文の処方箋・お薬手帳を用意しておくと安心です。",
      "歯科は保険対象外のことが多く高額。痛みが出る前に日本で治療を済ませておくのがおすすめです。",
      "メンタル面の不調も我慢せず、GPや学校・コミュニティに相談を。日本語対応のサービスもあります。",
    ],
    faqs: [
      {
        question: "保険なしで病院に行くといくらかかりますか？",
        answer:
          "GPの受診だけでも数十〜百ドル超、入院や救急になると数千〜数万ドルになることもあります。だからこそ民間保険への加入が事実上必須です。",
      },
    ],
    warnings: ["医療費は非常に高額です。海外保険なしの渡航は絶対に避けてください。"],
    relatedSlugs: ["insurance-guide", "safety-emergency", "preparation-checklist"],
    updatedAt: "2026-06-20",
    published: true,
  },
  {
    id: "a32",
    title: "緊急時・安全ガイド｜000・盗難・トラブル対応",
    slug: "safety-emergency",
    category: "health",
    description:
      "緊急番号000の使い方、盗難・紛失時の対応、よくある詐欺・トラブルの回避法まで。安心して滞在するための安全ガイド。",
    content: [
      "オーストラリアは比較的治安が良い国ですが、観光地やナイトライフでの盗難・スリ、賃貸や仕事をめぐる詐欺は存在します。『困ったときにどう動くか』を事前に知っておくだけで、被害とパニックを大きく減らせます。",
      "緊急時の電話番号は『000』。救急・警察・消防すべてこの番号で、オペレーターに必要なサービスを伝えます。命に関わらない警察案件は『131 444』です。",
      "パスポートやカードの紛失は、再発行・利用停止の連絡先を事前に控えておくと迅速に動けます。",
    ],
    keyFacts: [
      { label: "緊急番号", value: "000（救急・警察・消防）" },
      { label: "非緊急の警察", value: "131 444" },
      { label: "在豪日本大使館・領事館", value: "パスポート紛失・重大トラブル時に相談" },
      { label: "よくある被害", value: "盗難・賃貸/求人詐欺・前払い要求の詐欺" },
    ],
    steps: [
      { title: "緊急連絡先を控える", description: "000のほか、保険会社、カード会社、大使館の連絡先をスマホとメモに保存します。" },
      { title: "貴重品を分散管理", description: "現金・カード・パスポートは分けて保管。コピーをクラウドに置きます。" },
      { title: "詐欺の典型を知る", description: "内見前の送金要求、相場より安すぎる物件、前払いを急かす求人は警戒します。" },
      { title: "被害時は記録して通報", description: "盗難・紛失はすぐカード停止＋警察に届け出（保険請求に必要）。" },
    ],
    tips: [
      "『内見前に家賃やボンドを振り込んで』という相手は詐欺の可能性大。現物確認と契約書を必ず。",
      "夜間の一人歩きは明るい大通りを。タクシー/配車アプリを活用しましょう。",
      "海や自然はリスクも。遊泳は旗（patrolled beach）の範囲内で、表示の警告に従いましょう。",
    ],
    faqs: [
      {
        question: "パスポートを失くしたらどうすればいい？",
        answer:
          "まず警察に届け出て紛失証明を取り、在豪日本大使館・総領事館で再発給または帰国のための渡航書を申請します。コピーがあると手続きがスムーズです。",
      },
    ],
    warnings: ["お金を前払いで急かす賃貸・求人・投資の話は詐欺を強く疑ってください。"],
    relatedSlugs: ["medicare-oshc", "housing-guide", "jobs-guide"],
    updatedAt: "2026-06-20",
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
    relatedSlugs: ["second-visa-guide", "whv-complete-guide", "language-school"],
    updatedAt: "2026-06-20",
    published: true,
  },
  {
    id: "a34",
    title: "英文レジュメの書き方｜1枚で受かるテンプレートと例文",
    slug: "resume-guide",
    category: "jobs",
    description:
      "オーストラリアの求職はA4・1枚のレジュメが基本。構成・書くべき項目・避けるべきNG、そのまま使える例文付きで解説します。",
    content: [
      "オーストラリアのレジュメ（履歴書）は日本のものと大きく異なります。決まったフォーマットはなく、A4・1枚程度に『連絡先・職歴・スキル・在豪可能期間』を簡潔にまとめるのが一般的です。写真・年齢・性別は不要（書かないのが普通）です。",
      "採用担当は短時間で多数のレジュメを見ます。読みやすさが命。箇条書きで成果を端的に書き、誤字脱字をなくすことが基本中の基本です。",
    ],
    keyFacts: [
      { label: "分量", value: "A4・1枚（多くても2枚）" },
      { label: "必須項目", value: "氏名/連絡先/職歴/スキル/在豪期間/Reference" },
      { label: "書かないもの", value: "写真・年齢・性別・顔写真" },
      { label: "形式", value: "PDFで用意。印刷して手渡しも有効" },
    ],
    steps: [
      { title: "ヘッダーを作る", description: "氏名・電話番号・メール・現在地・ビザ種別と滞在可能期間を冒頭に書きます。" },
      { title: "職歴を逆時系列で", description: "新しい順に、職種・期間・主な業務/成果を箇条書きで簡潔に書きます。" },
      { title: "スキル・資格を明記", description: "英語レベル、RSA/White Card、運転免許、PCスキルなどを記載します。" },
      { title: "Reference（推薦者）", description: "前職の上司などの連絡先、または『Available on request』と記載します。" },
    ],
    tips: [
      "在豪期間（あと何か月働けるか）は採用判断に重要。必ず明記しましょう。",
      "応募先に合わせて一言カバーレター（志望理由）を添えると印象が上がります。",
      "気になる店には印刷したレジュメを直接持参（Walk-in）。やる気が伝わり採用につながりやすいです。",
    ],
    faqs: [
      {
        question: "職歴が少なくても大丈夫ですか？",
        answer:
          "問題ありません。アルバイトやボランティア、学校で学んだスキル、人柄（勤勉・チームワーク）をアピールしましょう。飲食やリテールは未経験から始める人が大半です。",
      },
    ],
    relatedSlugs: ["interview-guide", "certifications", "jobs-guide"],
    updatedAt: "2026-06-20",
    published: true,
  },
  {
    id: "a35",
    title: "面接・トライアル対策｜よく聞かれる質問と受かるコツ",
    slug: "interview-guide",
    category: "jobs",
    description:
      "ローカルの仕事は短い面接や実技トライアルで決まることが多いです。頻出質問、答え方、トライアルでの立ち振る舞いを解説します。",
    content: [
      "オーストラリアの飲食・小売の採用は、形式ばった面接よりも『短い会話＋実技トライアル（試し勤務）』で決まることが多いです。トライアルは数時間〜1日、実際に働いてみて相性を見るものです。",
      "完璧な英語より、笑顔・素直さ・テキパキ動く姿勢が評価されます。『いつから働けるか』『何曜日・何時間入れるか』は必ず聞かれるので即答できるようにしておきましょう。",
    ],
    keyFacts: [
      { label: "選考形式", value: "短い面接 + 実技トライアル(試し勤務)" },
      { label: "頻出質問", value: "在豪期間/シフト/経験/なぜここで働きたいか" },
      { label: "評価ポイント", value: "笑顔・態度・スピード・チームワーク" },
      { label: "服装", value: "清潔感重視。職種に合わせた服装で" },
    ],
    steps: [
      { title: "頻出質問に答えを用意", description: "在豪期間・シフト可否・経験・志望理由を英語で言えるようにします。" },
      { title: "身だしなみを整える", description: "清潔感のある服装。飲食なら髪をまとめ爪を短く。" },
      { title: "トライアルは積極的に", description: "分からなければ質問し、指示を素早く実行。掃除や片付けも進んで行います。" },
      { title: "お礼と次の確認", description: "終わりに感謝を伝え、結果の連絡時期を確認します。" },
    ],
    tips: [
      "『Smile, be on time, work hard』が基本。技術より姿勢が見られています。",
      "トライアルが無給か有給かは事前に確認を。無給トライアルが長時間に及ぶ場合は注意。",
      "聞き取れなかったら『Sorry, could you say that again?』と素直に聞き返せばOKです。",
    ],
    phrases: [
      { en: "How long are you planning to stay in Australia?", ja: "オーストラリアにはどのくらい滞在する予定ですか？", note: "在豪期間の質問。ビザの残り期間を答える" },
      { en: "Which days and hours are you available to work?", ja: "何曜日・何時間働けますか？", note: "シフトの質問。即答できるように" },
      { en: "Do you have any hospitality experience?", ja: "接客（飲食）の経験はありますか？" },
      { en: "I can start immediately / from next week.", ja: "すぐに／来週から働けます。" },
      { en: "Is this trial paid or unpaid?", ja: "このトライアルは有給ですか、無給ですか？", note: "トライアル前に確認したいとき" },
      { en: "Sorry, could you say that again?", ja: "すみません、もう一度言ってもらえますか？" },
    ],
    relatedSlugs: ["resume-guide", "certifications", "jobs-guide"],
    updatedAt: "2026-07-16",
    published: true,
  },
  {
    id: "a36",
    title: "RSA・White Card 資格ガイド｜飲食・建設で働くための必須資格",
    slug: "certifications",
    category: "jobs",
    description:
      "お酒を出す飲食店はRSA、建設現場はWhite Cardが必要。取得方法・費用・有効範囲を解説し、就労の幅を広げます。",
    content: [
      "オーストラリアで特定の仕事に就くには、事前に資格を取る必要があります。代表的なのが、アルコールを提供する店で必須の『RSA（Responsible Service of Alcohol）』と、建設現場で必須の『White Card』です。",
      "どちらもオンラインまたは短時間の講習で取得でき、持っていると応募できる求人が一気に増えます。特にRSAはカフェ・バー・レストランで重宝されるため、飲食で働きたい人は早めの取得がおすすめです。",
    ],
    keyFacts: [
      { label: "RSA", value: "酒類提供に必須。州ごとに発行（州外で要再取得の場合あり）" },
      { label: "White Card", value: "建設現場で必須。全国共通で有効" },
      { label: "取得方法", value: "オンライン/対面講習。数時間で取得可能" },
      { label: "費用の目安", value: "各 20〜150 AUD程度（提供元で変動）" },
    ],
    steps: [
      { title: "必要な資格を確認", description: "飲食(酒あり)ならRSA、建設ならWhite Cardが必要です。" },
      { title: "認定講習を申込", description: "州が認める認定プロバイダーのコースを選んで申し込みます。" },
      { title: "講習・テスト受講", description: "オンラインまたは対面で受講し、修了テストに合格します。" },
      { title: "証明書を保管", description: "発行された証明書をスマホに保存し、応募時に提示できるようにします。" },
    ],
    tips: [
      "RSAは州ごとに扱いが異なり、別の州で働くと取り直しが必要な場合があります。働く州で取得を。",
      "White Cardは全国共通で長く有効。建設・倉庫系を考えるなら取っておくと便利です。",
    ],
    warnings: ["資格の要件・有効範囲は州や時期で変わります。申込前に提供元・州当局で確認してください。"],
    relatedSlugs: ["jobs-guide", "resume-guide", "interview-guide"],
    updatedAt: "2026-06-20",
    published: true,
  },
  {
    id: "a37",
    title: "シェアハウスの探し方と内見チェックリスト",
    slug: "share-house-finding",
    category: "housing",
    description:
      "ワーホリの定番はシェアハウス。物件の探し方、内見で見るべきポイント、契約・ボンド（敷金）の注意点を実践的にまとめました。",
    content: [
      "ワーホリの多くはシェアハウス（複数人で住む賃貸）で暮らします。1部屋を借りる『個室（own room）』と、2段ベッド等を共有する『シェアルーム（相部屋）』があり、後者ほど家賃が安くなります。",
      "物件はFlatmates.com.au、Gumtree、Facebookの賃貸グループ、日本人向け掲示板などで探します。人気物件は早い者勝ちのため、現地到着後すぐ動けるよう事前に相場とエリアを調べておくと有利です。",
    ],
    keyFacts: [
      { label: "主な探し方", value: "Flatmates.com.au / Gumtree / Facebook / 日本人掲示板" },
      { label: "家賃の支払い", value: "週払い表記(per week)が一般的。多くは2週間前払い" },
      { label: "ボンド(敷金)", value: "通常2〜4週間分。退去時に原状回復で返金" },
      { label: "内見", value: "必ず現地で確認してから契約・送金する" },
    ],
    steps: [
      { title: "エリアと予算を決める", description: "通勤・治安・家賃から住みたいエリアを絞ります。" },
      { title: "物件を探して連絡", description: "条件に合う部屋にメッセージを送り、内見をアポイントします。" },
      { title: "内見でチェック", description: "水回り・カビ・騒音・住人の雰囲気・含まれる費用(光熱費/Wi-Fi)を確認します。" },
      { title: "契約・支払い", description: "条件(家賃/ボンド/最低滞在期間/退去通知)を書面で確認してから支払います。" },
    ],
    tips: [
      "内見前の送金要求は詐欺の定番。必ず現物を見てから払いましょう。",
      "家賃にbills（光熱費・Wi-Fi）が含まれるか必ず確認。別途だと月の出費が変わります。",
      "最低滞在期間（minimum stay）と退去通知（notice）の条件を事前に把握しておきましょう。",
    ],
    faqs: [
      {
        question: "ボンド（敷金）は必ず返ってきますか？",
        answer:
          "部屋を入居時の状態に戻して退去すれば原則返金されます。入居時に既存の傷・汚れを写真に残しておくと、退去時のトラブルを防げます。",
      },
    ],
    phrases: [
      { en: "Is this room still available?", ja: "この部屋はまだ空いていますか？", note: "問い合わせの最初のひとこと" },
      { en: "Can I come and inspect the room?", ja: "内見に行ってもいいですか？" },
      { en: "Are bills (electricity, gas, Wi-Fi) included in the rent?", ja: "家賃に光熱費・Wi-Fiは含まれていますか？" },
      { en: "How much is the bond and when is it refunded?", ja: "ボンド（敷金）はいくらで、いつ返金されますか？" },
      { en: "Is there a minimum stay?", ja: "最低滞在期間はありますか？" },
    ],
    warnings: ["相場より極端に安い物件や前払いを急かす相手は詐欺を疑ってください。"],
    relatedSlugs: ["housing-guide", "safety-emergency", "area-overview"],
    updatedAt: "2026-07-16",
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
    relatedSlugs: ["farm-second-visa", "second-visa-guide", "jobs-guide"],
    updatedAt: "2026-06-20",
    published: true,
  },
  {
    id: "a39",
    title: "オーストラリア4大銀行比較｜CommBank・NAB・ANZ・Westpac",
    slug: "bank-comparison",
    category: "bank",
    description:
      "口座開設前に知っておきたい主要4行の特徴・手数料・アプリの使いやすさを比較。ワーホリに向いた選び方を解説します。",
    content: [
      "オーストラリアの主要銀行は『4大銀行（Big Four）』と呼ばれるCommonwealth Bank（CommBank）、NAB、ANZ、Westpacです。どれもワーホリの口座開設に対応しており、スマホアプリでの管理が中心になります。",
      "ワーホリに人気なのはCommBankとNAB。CommBankは支店・ATMが多くアプリが使いやすい、NABは月額口座維持手数料が無料で海外送金にも対応しやすい、といった特徴があります。給与受け取り口座として使うなら、職場が指定する形式（BSB＋口座番号）に対応していれば問題ありません。",
    ],
    keyFacts: [
      { label: "CommBank", value: "支店/ATM最多・アプリが使いやすい・利用者多数" },
      { label: "NAB", value: "口座維持手数料が無料・海外送金に強み" },
      { label: "ANZ / Westpac", value: "大手で安定。学生/新規向けプランあり" },
      { label: "開設に必要", value: "パスポート・住所・連絡先(到着後すぐ開設可)" },
    ],
    steps: [
      { title: "銀行を選ぶ", description: "ATMの多さ、手数料、アプリの使いやすさで選びます。" },
      { title: "オンラインで申込", description: "多くは到着前後にオンラインで口座開設の申込ができます。" },
      { title: "支店で本人確認", description: "到着後に支店でパスポート提示し、口座を有効化します。" },
      { title: "TFNを登録", description: "口座にTFNを登録しないと利子に高い税金がかかるため必ず登録します。" },
    ],
    tips: [
      "月額の口座維持手数料の有無を確認。条件付き無料の場合は条件（毎月の入金額等）をチェック。",
      "デビットカードのタッチ決済が生活の基本。Apple Pay/Google Payに登録すると便利です。",
    ],
    relatedSlugs: ["bank-account-guide", "tfn-guide", "money-transfer-wise"],
    updatedAt: "2026-06-20",
    published: true,
  },
  {
    id: "a40",
    title: "スーパーアニュエーション返金（DASP）｜帰国時の手続き",
    slug: "dasp-refund",
    category: "super",
    description:
      "帰国後、積み立てた退職年金（Super）は『DASP』として払い戻し申請できます。対象条件・申請手順・税率・注意点を解説します。",
    content: [
      "オーストラリアで働くと、給与とは別に雇用主が『スーパーアニュエーション（Super：退職年金）』を積み立てます。ワーホリが帰国してビザが失効すると、この積立金を『DASP（Departing Australia Superannuation Payment）』として払い戻し申請できます。",
      "申請はオンライン（ATOのDASPシステム）で行います。複数の職場で働いた場合は複数のSuperファンドに積立があることが多いため、すべて把握して申請するのがポイントです。払い戻しには税金が源泉徴収されます（ワーホリ向けの税率が適用）。",
    ],
    keyFacts: [
      { label: "対象", value: "ビザ失効・オーストラリア出国後のワーホリ等" },
      { label: "申請方法", value: "ATOのDASPオンラインシステム" },
      { label: "税率", value: "ワーホリ向けの源泉税が適用(高め)" },
      { label: "注意", value: "複数ファンドに積立がある場合は各社に申請" },
    ],
    steps: [
      { title: "Superファンドを把握", description: "働いた職場ごとの積立先(ファンド名・会員番号)を確認します。" },
      { title: "ビザ失効・出国", description: "DASPはビザが失効し出国した後に申請可能になります。" },
      { title: "DASPオンライン申請", description: "ATOのシステムでパスポート・ビザ・ファンド情報を入力して申請します。" },
      { title: "払い戻しを受領", description: "源泉税が引かれた額が指定口座(海外口座も可)に振り込まれます。" },
    ],
    tips: [
      "在豪中にmyGovとATOを連携しておくと、自分のSuper口座をまとめて確認できて便利です。",
      "Payslipでスーパーがきちんと積み立てられているか定期的に確認しましょう（未払いの雇用主もいます）。",
    ],
    warnings: ["税率・申請要件は変更されることがあります。申請前にATOの最新情報を確認してください。"],
    sources: [
      { label: "ATO｜DASP（退職年金の払い戻し）", url: "https://www.ato.gov.au/" },
    ],
    relatedSlugs: ["super-guide", "tax-return-guide", "tfn-guide"],
    updatedAt: "2026-06-20",
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
    id: "a43",
    title: "タックスリターン実践ガイド｜myGov連携と必要書類",
    slug: "tax-return-howto",
    category: "tax-return",
    description:
      "毎年7〜10月の確定申告（タックスリターン）を自分で行う手順。myGovとATOの連携、必要書類、還付の受け取りまでを実践的に解説します。",
    content: [
      "オーストラリアの会計年度は7月1日〜翌6月30日。働いた人は原則として翌年度の確定申告（タックスリターン）が必要です。申告期間は通常7月〜10月末で、払い過ぎた税金が還付されることが多いため、忘れずに行いましょう。",
      "申告は『myGov』アカウントを作り『ATO（税務署）』と連携すれば、オンラインで自分で完結できます。多くの収入情報（給与・源泉徴収）は自動で取り込まれるため、内容を確認して提出するだけのケースも増えています。複雑な場合は会計士（tax agent）に依頼する選択肢もあります。",
    ],
    keyFacts: [
      { label: "会計年度", value: "7/1〜翌6/30" },
      { label: "申告期間", value: "通常 7月〜10月末" },
      { label: "方法", value: "myGov + ATO連携でオンライン申告" },
      { label: "必要書類", value: "TFN・各職場の収入情報・銀行口座" },
    ],
    steps: [
      { title: "myGovを作成", description: "myGovアカウントを作り、ATO(税務署)サービスと連携します。" },
      { title: "収入情報を確認", description: "各職場の給与・源泉徴収が自動で取り込まれているか確認します。" },
      { title: "控除を入力", description: "仕事に必要な経費(制服・道具等)があれば控除として申告します。" },
      { title: "提出して還付を受領", description: "内容を確認して提出。還付金は指定口座に振り込まれます。" },
    ],
    tips: [
      "源泉徴収のもとになる各職場のincome statementは、年度末にATO上で確認できます。",
      "帰国予定でも申告は可能。海外口座への還付も選べます（DASPと合わせて手続きを）。",
      "経費控除には領収書が必要。仕事関連の出費はレシートを保管しておきましょう。",
    ],
    warnings: ["税率・控除のルールは毎年変わります。申告前にATOの最新情報を確認してください。"],
    sources: [
      { label: "ATO（オーストラリア税務署）", url: "https://www.ato.gov.au/" },
    ],
    relatedSlugs: ["tax-return-guide", "tfn-guide", "dasp-refund"],
    updatedAt: "2026-06-20",
    published: true,
  },
  {
    id: "a44",
    title: "出発前の持ち物リスト完全版｜必須・あると便利・現地調達",
    slug: "packing-list",
    category: "preparation",
    description:
      "ワーホリの荷造りを『必須／あると便利／現地調達でOK』に分類。重い・かさばるものを減らし、本当に必要なものだけを持っていくためのリストです。",
    content: [
      "ワーホリの荷造りのコツは『現地で買えるものは持っていかない』こと。服・日用品・寝具などはオーストラリアでも安く買えるため、持ち物は最小限にして身軽に出発するのが正解です。",
      "一方、書類・常備薬・日本特有のもの（一部の食品・変換プラグ等）は現地調達が難しいので優先的に準備します。預け荷物と機内持ち込みを分け、貴重品と重要書類は必ず手荷物に入れましょう。",
    ],
    keyFacts: [
      { label: "預け荷物の目安", value: "航空会社の規定(20〜30kg程度)。超過料金に注意" },
      { label: "手荷物に入れる", value: "パスポート・書類・常備薬・現金・PC" },
      { label: "現地調達でOK", value: "衣類・日用品・寝具・洗面用具の多く" },
      { label: "電源", value: "Oタイプ変換プラグ。充電器は100-240V対応が多い" },
    ],
    steps: [
      { title: "必須を揃える", description: "パスポート/ビザ通知/保険証券/常備薬/英文処方箋/証明写真/クレカ2枚を準備します。" },
      { title: "あると便利を選ぶ", description: "変換プラグ・モバイルバッテリー・少量の日本食・常備薬・延長コードなど。" },
      { title: "現地調達リストを作る", description: "服・寝具・洗面用具・調理器具は現地で購入する前提で減らします。" },
      { title: "重量を確認", description: "預け荷物の重量制限内に収まるか出発前に計量します。" },
    ],
    tips: [
      "重要書類はクラウドにもPDFで保存。紙とデジタルの二重持ちが安心です。",
      "常備薬は英文の説明があると入国時も安心。市販薬も普段使うものを少量だけ。",
      "Kmart・Target・Big Wで安く揃うので、迷ったら現地調達を前提に減らしましょう。",
    ],
    relatedSlugs: ["preparation-checklist", "clothing-guide", "insurance-guide"],
    updatedAt: "2026-06-20",
    published: true,
  },
  {
    id: "a45",
    title: "ワーホリの労働者の権利｜Fair Workと最低賃金の基礎知識",
    slug: "working-rights",
    category: "jobs",
    description:
      "ワーホリでもオーストラリアの労働法（Fair Work）で守られています。最低賃金、Payslip、残業、不当な扱いへの対処法を解説します。",
    content: [
      "ワーキングホリデーで働く人も、オーストラリアの労働法（Fair Work）によってローカルの労働者と同じように守られています。ビザの種類や国籍に関係なく、最低賃金・休憩・Payslip（給与明細）の受け取りは法律で保障された権利です。",
      "残念ながら、ワーホリの立場の弱さにつけ込み、最低賃金を大きく下回る賃金やPayslipなしの現金払い（cash in hand）を持ちかける雇用主もいます。おかしいと感じたらFair Work Ombudsman（公正労働オンブズマン）に無料で相談できます。",
    ],
    keyFacts: [
      { label: "全国最低賃金", value: "時給約24 AUD前後（毎年7月に改定。要公式確認）" },
      { label: "カジュアル手当", value: "casual雇用は基本時給に上乗せ（loading）あり" },
      { label: "Payslip", value: "給与支払い後1営業日以内に受け取る権利がある" },
      { label: "相談先", value: "Fair Work Ombudsman（無料・多言語対応）" },
    ],
    steps: [
      { title: "雇用形態を確認", description: "casual / part-time / full-time のどれか、時給はいくらかを最初に確認します。" },
      { title: "Payslipを必ず受け取る", description: "労働時間・時給・税金・Superが記載されているか毎回チェックします。" },
      { title: "労働時間を記録", description: "自分でも勤務時間をメモし、Payslipと照合してズレがないか確認します。" },
      { title: "問題があれば相談", description: "未払いや違法な扱いはFair Work Ombudsmanに無料で相談・通報できます。" },
    ],
    tips: [
      "『cash in hand（現金手渡し・記録なし）』はSuperやタックスリターン、セカンドビザの証明で不利になります。",
      "最低賃金は毎年7月1日に改定されます。最新額はFair Workの公式サイトで確認しましょう。",
      "相談したことを理由にした解雇・報復も違法です。泣き寝入りする必要はありません。",
    ],
    phrases: [
      { en: "Could I get a payslip, please?", ja: "給与明細（Payslip）をもらえますか？" },
      { en: "What is my hourly rate?", ja: "私の時給はいくらですか？" },
      { en: "Am I employed as casual or part-time?", ja: "私はカジュアル雇用ですか、パートタイムですか？" },
      { en: "Is superannuation included?", ja: "退職年金（Super）は含まれていますか？" },
    ],
    faqs: [
      {
        question: "英語に自信がなくても相談できますか？",
        answer:
          "Fair Work Ombudsmanは無料の通訳サービス（TIS）を通じて日本語でも相談できます。ビザの状況に関係なく、誰でも安全に利用できます。",
      },
    ],
    sources: [
      { label: "Fair Work Ombudsman（公式）", url: "https://www.fairwork.gov.au/" },
    ],
    warnings: ["最低賃金や手当は毎年改定されます。金額は必ずFair Work公式で最新情報を確認してください。"],
    relatedSlugs: ["jobs-guide", "tfn-guide", "super-guide"],
    updatedAt: "2026-07-16",
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
    relatedSlugs: ["arrival-checklist", "food-guide", "area-overview"],
    updatedAt: "2026-07-16",
    published: true,
  },
  {
    id: "a47",
    title: "海外生活のメンタルヘルス｜ホームシックと不安への対処",
    slug: "mental-health",
    category: "health",
    description:
      "慣れない環境・言葉の壁で心が疲れるのは自然なこと。ホームシックや孤独への対処法と、無料で使える相談窓口を紹介します。",
    content: [
      "ワーホリは楽しいことばかりではありません。言葉の壁、仕事や家探しのストレス、孤独やホームシックで気持ちが落ち込むのは、多くの人が経験する自然なことです。『自分だけが上手くいっていない』と感じる必要はありません。",
      "大切なのは、無理をしすぎないことと、つらいときに助けを求めることです。オーストラリアには無料・匿名で使えるメンタルヘルスの相談窓口があり、電話やチャットで気軽に相談できます。命に関わる緊急時は迷わず000に電話してください。",
    ],
    keyFacts: [
      { label: "よくある原因", value: "言葉の壁・孤独・お金や仕事の不安・生活リズムの乱れ" },
      { label: "緊急時", value: "000（警察・救急・消防。命に関わるとき）" },
      { label: "無料相談", value: "Lifeline（13 11 14）・Beyond Blueなど" },
      { label: "GP", value: "気分の落ち込みが続くときはGP（かかりつけ医）に相談" },
    ],
    steps: [
      { title: "生活リズムを整える", description: "睡眠・食事・軽い運動・日光を意識すると気分が安定しやすくなります。" },
      { title: "つながりを持つ", description: "友達・家族・コミュニティと定期的に連絡を取り、孤立を防ぎます。" },
      { title: "早めに相談する", description: "つらさが続くときは我慢せず、無料の相談窓口やGPに相談します。" },
      { title: "緊急時は迷わず連絡", description: "自分や誰かの命が危ないと感じたら000、またはLifelineに連絡します。" },
    ],
    tips: [
      "ホームシックは弱さではなく自然な反応。無理にポジティブを装わなくて大丈夫です。",
      "Lifeline（13 11 14）は24時間・無料。英語でも落ち着いて話せば対応してもらえます。",
      "合わない環境なら都市や仕事を変えるのも立派な選択。逃げではなく戦略です。",
    ],
    phrases: [
      { en: "I've been feeling really down lately.", ja: "最近ずっと気分が落ち込んでいます。", note: "GPに状態を伝えるとき" },
      { en: "I'd like to talk to someone. Can you help?", ja: "誰かに話を聞いてほしいです。助けてもらえますか？" },
      { en: "I need to see a doctor about my mental health.", ja: "メンタルの不調について医師に診てもらいたいです。" },
    ],
    faqs: [
      {
        question: "相談したらビザに影響しますか？",
        answer:
          "メンタルヘルスの相談がビザに不利に働くことはありません。相談窓口は匿名で利用でき、内容が移民局に共有されることもありません。安心して利用してください。",
      },
    ],
    sources: [
      { label: "Lifeline Australia", url: "https://www.lifeline.org.au/" },
      { label: "Beyond Blue", url: "https://www.beyondblue.org.au/" },
    ],
    warnings: ["命に関わる緊急時は迷わず000に電話してください。我慢や自己判断は禁物です。"],
    relatedSlugs: ["medicare-oshc", "safety-emergency"],
    updatedAt: "2026-07-16",
    published: true,
  },
];


export const forumCategories: ForumCategory[] = [
  { id: "c1", name: "家探し", slug: "housing", description: "シェアハウスや内見情報を共有" },
  { id: "c2", name: "仕事探し", slug: "jobs", description: "求人、面接、履歴書の相談" },
  { id: "c3", name: "ファームジョブ", slug: "farm", description: "地域や時給、体験談" },
  { id: "c4", name: "車・レンタカー", slug: "cars", description: "車購入・売買・トラブル相談" },
  { id: "c5", name: "ビザ", slug: "visa", description: "ビザ申請や条件の質問" },
  { id: "c6", name: "セカンドビザ", slug: "second-visa", description: "Specified Workや申請の情報" },
  { id: "c7", name: "ギグワーク", slug: "gig", description: "Uber Eats・DoorDashの相談" },
  { id: "c8", name: "税金", slug: "tax", description: "TFN・ABN・確定申告の相談" },
  { id: "c9", name: "生活相談", slug: "life", description: "現地生活の困りごと" },
  { id: "c10", name: "売ります・買います", slug: "buy-sell", description: "不用品の売買" },
  { id: "c11", name: "旅行", slug: "travel", description: "国内旅行や観光情報" },
  { id: "c12", name: "英語学習", slug: "english", description: "語学学校・勉強法・英語の悩み" },
  { id: "c13", name: "健康・医療", slug: "health", description: "病院・保険・メンタルヘルスの相談" },
  { id: "c14", name: "恋愛・出会い", slug: "relationships", description: "友達作り・恋愛・コミュニティ" },
  { id: "c15", name: "雑談", slug: "general", description: "自由な雑談スペース" },
  { id: "c16", name: "その他", slug: "other", description: "どのジャンルにも当てはまらない投稿" },
];

export const forumPosts: ForumPost[] = [
  {
    id: "p1",
    categorySlug: "housing",
    userId: "u1",
    authorName: "Mika",
    title: "シドニーで女性向けシェアハウスを探しています",
    body: "City周辺で週350ドル前後の物件情報を探しています。",
    isHidden: false,
    likeCount: 4,
    createdAt: "2026-06-08",
  },
  {
    id: "p2",
    categorySlug: "jobs",
    userId: "u2",
    authorName: "Ken",
    title: "カフェのトライアル面接で準備すべきこと",
    body: "英語自己紹介とトレー持ち運びは事前練習が有効でした。",
    isHidden: false,
    likeCount: 7,
    createdAt: "2026-06-07",
  },
  {
    id: "p3",
    categorySlug: "gig",
    userId: "u3",
    authorName: "Sho",
    title: "Uber Eatsの稼ぎ時を教えてください",
    body: "ブリスベンでの平日と週末の差を知りたいです。",
    isHidden: false,
    likeCount: 2,
    createdAt: "2026-06-06",
  },
];

export const forumComments: ForumComment[] = [
  {
    id: "cm1",
    postId: "p1",
    userId: "u2",
    authorName: "Ken",
    body: "Facebook Marketplaceでも見つかります。内見前に写真確認がおすすめです。",
    isHidden: false,
    createdAt: "2026-06-08",
  },
];

export const reports: Report[] = [
  {
    id: "r1",
    reporterName: "Mika",
    targetType: "post",
    targetId: "p3",
    reason: "スパムの可能性があります。",
    status: "pending",
    createdAt: "2026-06-08",
  },
];

export const feedbackRequests: FeedbackRequest[] = [
  {
    id: "f1",
    userId: "u1",
    authorName: "Mika",
    type: "article_request",
    pageUrl: "/farm",
    title: "ファームの地域別時給情報がほしい",
    body: "地域ごとの時給目安をまとめた記事を希望します。",
    status: "pending",
    createdAt: "2026-06-08",
  },
];
