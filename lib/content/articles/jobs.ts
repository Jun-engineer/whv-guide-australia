import type { Article } from "./types";

export const jobsArticles: Article[] = [
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
      "仕事の種類ごとに特徴を理解しておくと、自分に合った選び方ができます。ジャパレスは日本語が通じるため英語に自信がなくても始めやすく、渡航直後の収入源として人気です。一方でローカルジョブは時給が高めで英語環境に身を置けるため、語学力を伸ばしたい人や長く滞在したい人に向いています。倉庫やクリーニングなどのバックヤード系は、接客の英語が不要でもコツコツ稼げるのが魅力です。",
      "採用までの流れは、日本のような書類選考＋面接というより、『レジュメ手渡し → 短い会話 → トライアル（試し勤務）』というスピード感が一般的です。特にカフェや飲食では、実際に働く様子を見て採否を決めることが多いため、完璧な英語よりも笑顔・時間厳守・テキパキ動く姿勢が評価されます。応募時に『いつから・週何日・何時間働けるか』を即答できるよう準備しておきましょう。",
      "効率よく仕事を見つけるには、複数の方法を並行するのがコツです。求人サイトへの応募だけでなく、狙うエリアのカフェや店を実際に歩いてレジュメを配る、Facebookの地域求人グループをこまめにチェックする、すでに働いている友人・シェアメイトに紹介を頼む、といった動きを組み合わせると採用のチャンスが広がります。RSAやWhite Cardなどの資格を持っていると応募できる求人が一気に増えるため、早めの取得もおすすめです。",
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
    relatedSlugs: ["farm-second-visa", "tfn-guide", "whv-complete-guide", "first-30-days-roadmap"],
    updatedAt: "2026-06-10",
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
    id: "a135",
    title: "求人サイトの使い分け｜SEEK・Indeed・Jora・Gumtree",
    slug: "job-search-websites",
    category: "jobs",
    priority: "P0",
    searchIntent: "求人サイトの比較・使い分け",
    description:
      "オーストラリアの主要求人サイト（SEEK・Indeed・Jora・Gumtree）の特徴と、職種別の向き不向き、詐欺求人の見分け方をまとめます。",
    content: [
      "結論から言うと、ローカルの正規求人はSEEKとIndeedの2つを軸にし、単発・現金系のカジュアルワークはGumtreeやFacebookグループ、幅広く拾いたいときはJoraを併用するのが効率的です。1つのサイトに絞らず、複数を並行して使うのが仕事探しの基本です。",
      "SEEK（seek.com.au）はオーストラリア最大の求人サイトで、企業の正社員・契約・カジュアルまで幅広く掲載されます。フルタイムやオフィス系、ホスピタリティのしっかりした求人を探すならまずここです。Indeed（au.indeed.com）は世界的な求人検索エンジンで、掲載数が多く、キーワードと勤務地で絞り込みやすいのが強みです。",
      "Jora（jora.com）は複数サイトの求人を横断的に集めるアグリゲーターで、カジュアルや地方・ファーム求人も拾いやすいです。Gumtree（gumtree.com.au）は個人売買サイトの求人版で、清掃・引っ越し・単発の力仕事などカジュアルな募集が多い反面、条件が曖昧だったり最低賃金を下回る募集も混じるため、応募前に時給・雇用形態・支払い方法を必ず確認しましょう。",
      "応募の質を上げるには、A4・1枚の英文レジュメをPDFで用意し、職種に合わせて一言添えるのが有効です。多くのサイトはメールアドレスかアプリのアカウントで応募でき、SEEK・Indeedはプロフィールを作っておくと同じ内容を使い回せます。求人に応募したら応募日・企業名・連絡先を記録し、1週間返信がなければ丁寧にFollow-upを送ると通過率が上がります。",
      "求人詐欺（採用前にお金を要求する、身分証のコピーだけを執拗に求める、面接なしで高額報酬を約束する、連絡がすべて個人のWhatsAppだけ等）にも注意が必要です。正規の雇用主は勤務開始後にTFN・銀行口座・Super情報を求めますが、応募段階で登録料や保証金を要求することはありません。",
    ],
    keyFacts: [
      { label: "正規求人の主軸", value: "SEEK・Indeed（企業求人が中心）" },
      { label: "カジュアル・単発", value: "Gumtree・Facebookグループ" },
      { label: "横断検索", value: "Jora（複数サイトを集約）" },
      { label: "応募に必要", value: "英文レジュメ（A4・1枚・PDF）＋一言メッセージ" },
    ],
    steps: [
      { title: "レジュメを用意", description: "A4・1枚の英文レジュメをPDFで作成し、連絡先・職歴・在豪可能期間を明記します。" },
      { title: "アカウントを作成", description: "SEEK・Indeedでプロフィールを登録し、勤務地とキーワードで求人を検索します。" },
      { title: "複数サイトへ応募", description: "SEEK/Indeedを軸に、Jora・Gumtree・Facebookも併用して応募数を増やします。" },
      { title: "記録とFollow-up", description: "応募先を記録し、1週間返信がなければ丁寧に確認メッセージを送ります。" },
    ],
    tips: [
      "求人に記載の時給が最低賃金を下回っていないか、Fair Workの最低賃金と照らして確認しましょう。",
      "『urgent』『cash only』『no experience, high pay』を強調する募集は条件を精査してから応募を。",
      "写真付き・住所や店名が明記された求人のほうが実在性が高く安全です。",
    ],
    warnings: [
      "応募・採用の段階で登録料・保証金・研修費を要求する求人は詐欺の可能性が高いです。支払わないでください。",
    ],
    faqs: [
      {
        question: "英語に自信がなくても応募できますか？",
        answer:
          "できます。キッチンハンド・清掃・倉庫・ファームなど接客英語が少ない職種から始める人が多いです。レジュメに『available immediately』『happy to learn』と書き、まずは応募数を増やしましょう。",
      },
    ],
    sources: [
      { label: "SEEK（求人サイト）", url: "https://www.seek.com.au/" },
      { label: "Indeed Australia", url: "https://au.indeed.com/" },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "Fair Work Ombudsman｜Minimum wages（求人の時給確認に使用）",
        url: "https://www.fairwork.gov.au/pay-and-wages/minimum-wages",
        accessedAt: "2026-07-18",
      },
      {
        label: "Fair Work Ombudsman｜Job ads（求人広告のルール）",
        url: "https://www.fairwork.gov.au/starting-employment/job-ads",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["jobs-guide", "resume-guide", "facebook-job-groups", "walk-in-resume", "recruitment-agency-guide"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a136",
    title: "Facebookで仕事を探す方法｜求人グループと怪しい投稿の見分け方",
    slug: "facebook-job-groups",
    category: "jobs",
    priority: "P1",
    searchIntent: "Facebookで仕事を探す方法",
    description:
      "Facebookの地域・日本人向け求人グループの探し方、応募メッセージの送り方、そして最低賃金割れや詐欺投稿を見抜くコツを解説します。",
    content: [
      "Facebookはワーホリの仕事探しで実際によく使われるチャネルです。とくにジャパレス（日本食レストラン）やシェア関連、単発の引っ越し・清掃の募集が多く、投稿から直接メッセージ（DM）で応募できるのが手軽さの理由です。ただし個人間のやり取りが中心のため、条件確認と自衛が欠かせません。",
      "まずは『(都市名) working holiday』『(都市名) 求人』『(都市名) ジョブ』『Australia backpacker jobs』などでグループを検索し、参加申請します。都市ごとの日本人コミュニティグループや、Backpacker向けの英語グループの両方に入っておくと求人の幅が広がります。",
      "応募は、投稿へのコメントよりもDMのほうが埋もれにくく確実です。名前・在豪期間・希望シフト・関連経験・レジュメ添付を短くまとめて送りましょう。返信が来たら、時給・雇用形態（casual/現金）・勤務地・支払い方法・Payslipの有無を必ず確認します。",
      "注意すべきは、最低賃金を大きく下回る現金払い、面接なしの即採用、個人情報や前払いを求める投稿です。オーストラリアではビザや国籍に関係なく最低賃金と労働法の保護が及びます。あまりに安い『時給15ドル・現金のみ・Payslipなし』のような募集は、労働条件やタックスリターン・セカンドビザ証明で不利になります。",
      "個人情報の保護も重要です。応募段階でパスポートや免許のコピー、TFN、銀行口座を渡す必要はありません。これらは正式採用後に雇用主へ提出するもので、応募時に要求される場合は詐欺を疑いましょう。",
    ],
    keyFacts: [
      { label: "見つかる仕事", value: "ジャパレス・清掃・引っ越し・単発の力仕事など" },
      { label: "探し方", value: "『都市名＋求人/working holiday』でグループ検索" },
      { label: "応募方法", value: "コメントよりDM。レジュメ添付で簡潔に" },
      { label: "確認事項", value: "時給・雇用形態・支払い・Payslipの有無" },
    ],
    steps: [
      { title: "グループを探して参加", description: "住む都市名＋求人/working holidayでグループを検索し参加します。" },
      { title: "プロフィールを整える", description: "本名・写真・自己紹介を整え、信頼されやすくします。" },
      { title: "DMで応募", description: "在豪期間・希望シフト・経験・レジュメを添えて簡潔に送ります。" },
      { title: "条件を確認", description: "時給・支払い方法・Payslipを確認し、不審なら応募を見送ります。" },
    ],
    tips: [
      "同じ求人が複数グループに転載されていることも。投稿者のプロフィールや店名の実在を確認しましょう。",
      "『前払いで住居と仕事を紹介』『登録料が必要』はほぼ詐欺です。お金は払わないこと。",
      "やり取りはFacebook上に残しておくと、トラブル時の証拠になります。",
    ],
    warnings: [
      "応募段階でパスポート・TFN・銀行口座・前払い金を求める投稿には応じないでください。",
    ],
    faqs: [
      {
        question: "現金払いの仕事は避けるべきですか？",
        answer:
          "現金払い自体は違法ではありませんが、最低賃金・Super・Payslipが守られず、税務やセカンドビザ証明で不利になりがちです。金額・記録・Payslipの有無を確認し、条件が悪ければ避けましょう。",
      },
    ],
    sources: [
      { label: "Fair Work Ombudsman（労働条件）", url: "https://www.fairwork.gov.au/" },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "Fair Work Ombudsman｜Visa holders and migrant workers（ビザ保有者の保護）",
        url: "https://www.fairwork.gov.au/find-help-for/visa-holders-migrants",
        accessedAt: "2026-07-18",
      },
      {
        label: "Fair Work Ombudsman｜Minimum wages",
        url: "https://www.fairwork.gov.au/pay-and-wages/minimum-wages",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["job-search-websites", "jobs-guide", "cash-in-hand-jobs", "walk-in-resume", "japanese-community-groups"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a137",
    title: "レジュメを直接配る方法（Walk-in）｜時間帯・服装・英語フレーズ",
    slug: "walk-in-resume",
    category: "jobs",
    priority: "P0",
    searchIntent: "レジュメを直接配る方法（Walk-in）",
    description:
      "カフェや小売はレジュメの直接手渡し（Walk-in）で決まることが多いです。回る時間帯・服装・渡すときの英語フレーズを実践手順で解説します。",
    content: [
      "結論から言うと、カフェ・レストラン・小売の仕事は、求人サイトよりも印刷したレジュメを店に直接持っていく『Walk-in』のほうが早く決まることがよくあります。オーナーやマネージャーに顔と第一印象を見てもらえるため、英語が完璧でなくてもやる気と人柄で採用されるケースが多いのです。",
      "回る時間帯が重要です。飲食店はランチ（12〜14時）とディナー（18時以降）のピークを避け、14〜16時のアイドルタイムに訪ねると、マネージャーが対応しやすく好印象です。カフェは開店直後や午後の落ち着いた時間が狙い目です。渡す相手は必ず『manager』を指名しましょう。",
      "服装は清潔感が最優先です。飲食なら髪をまとめ、爪を短く、シンプルで清潔な服装に。ビーチサンダルや派手すぎる格好は避けます。レジュメは折らずにクリアファイルに入れ、1日10〜20枚を目安にエリアをまとめて回ると効率的です。",
      "渡すときは、笑顔で短く自己紹介し、『マネージャーはいますか』『働き口を探しています、レジュメを置かせてください』と伝えます。相手がいなければレジュメを預け、名前を聞いてメモしておくと後日のFollow-upに使えます。断られても『空きが出たら連絡してください』と一言添えて去りましょう。",
      "配った後は、応募した店名・日付・担当者を記録し、3〜5日後に電話か再訪で確認すると通過率が上がります。RSAやバリスタ経験があればレジュメに明記し、口頭でも伝えると印象が強まります。",
    ],
    keyFacts: [
      { label: "狙う時間帯", value: "飲食は14〜16時のアイドルタイム" },
      { label: "渡す相手", value: "必ずmanager（マネージャー）を指名" },
      { label: "服装", value: "清潔感重視。髪をまとめ爪を短く" },
      { label: "枚数の目安", value: "1日10〜20枚をエリアごとに配布" },
    ],
    steps: [
      { title: "レジュメを印刷", description: "A4・1枚をクリアファイルに入れ、折れないよう持ち歩きます。" },
      { title: "エリアを決めて回る", description: "カフェ・小売が集まる通りを、アイドルタイムにまとめて訪問します。" },
      { title: "マネージャーに手渡す", description: "笑顔で自己紹介し、マネージャーにレジュメを渡します。不在なら預けます。" },
      { title: "記録してFollow-up", description: "店名・日付・担当者を記録し、数日後に確認の連絡をします。" },
    ],
    tips: [
      "英語が不安でも、笑顔・アイコンタクト・はっきりした挨拶で十分好印象です。",
      "その場で『トライアルできる？』と聞かれることも。すぐ働ける服装・準備で回ると有利。",
      "混雑時に長話は禁物。忙しそうなら『お時間あるときに見てください』と手短に。",
    ],
    phrases: [
      { en: "Hi, is the manager available?", ja: "こんにちは、マネージャーはいますか？" },
      { en: "I'm looking for work — may I leave my resume?", ja: "仕事を探しています。レジュメを置いてもいいですか？" },
      { en: "I'm available immediately and happy to do a trial.", ja: "すぐに働けます。トライアルも喜んで受けます。" },
      { en: "Could I check back with you in a few days?", ja: "数日後にまた確認してもいいですか？" },
    ],
    faqs: [
      {
        question: "何店舗くらい回れば決まりますか？",
        answer:
          "エリアや時期によりますが、数十枚配って数件の連絡、というのが一般的な感覚です。断られても落ち込まず、毎日エリアを変えて回り続けるのが最短ルートです。",
      },
    ],
    sources: [
      { label: "Fair Work Ombudsman（労働条件）", url: "https://www.fairwork.gov.au/" },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "Fair Work Ombudsman｜Unpaid trials（トライアルの扱い）",
        url: "https://www.fairwork.gov.au/starting-employment/unpaid-work/unpaid-trials",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["resume-guide", "interview-guide", "jobs-guide", "unpaid-trial-rules", "hospitality-jobs-guide"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a138",
    title: "英文カバーレターの書き方｜職種別テンプレートと例文",
    slug: "cover-letter-guide",
    category: "jobs",
    priority: "P1",
    searchIntent: "英文カバーレターの書き方",
    description:
      "オーストラリアの求職で使うカバーレターの構成・書くべき内容・職種別テンプレートを、そのまま使える例文付きで解説します。",
    content: [
      "カバーレター（Cover Letter）は、レジュメに添える『なぜこの仕事に応募するか・自分が適任な理由』を伝える短い手紙です。ホスピタリティや小売のカジュアル求人では短い応募メッセージで十分なことも多いですが、オフィス系・専門職・SEEK経由のしっかりした求人では、カバーレターの有無が通過率を左右します。",
      "基本構成は、①宛名（分かればHiring Manager名、なければ『Dear Hiring Manager』）②応募職種と応募動機③自分の関連スキル・経験④在豪期間と就労可否⑤結び（面接のお願いと連絡先）の5つです。A4・半ページ〜1ページ、3〜4段落に収めます。",
      "重要なのは、求人票のキーワードに合わせて内容を調整することです。『reliable』『team player』『available weekends』など募集が求める要素を、自分の経験と結びつけて具体的に書きます。ビザ種別（Working Holiday visa, subclass 417）と就労可能期間を明記すると、雇用主が安心します。",
      "カジュアル求人向けには、メールやDMで送る短い応募メッセージで代用できます。『氏名＋在豪期間＋希望シフト＋関連経験＋レジュメ添付』を2〜3文でまとめれば十分です。フォーマルなカバーレターと、短い応募メッセージの両方を用意しておくと、求人に応じて使い分けられます。",
      "送る前に、宛先の店名・職種名が正しいか、誤字脱字がないか、PDFで文字化けしないかを必ず確認しましょう。使い回す場合も、企業名と職種名だけは毎回書き換えるのが最低限のマナーです。",
    ],
    keyFacts: [
      { label: "長さ", value: "A4・半ページ〜1ページ（3〜4段落）" },
      { label: "必須要素", value: "応募職種・動機・関連経験・在豪期間・連絡先" },
      { label: "ビザ明記", value: "『Working Holiday visa (417)』と就労可否を書く" },
      { label: "カジュアル求人", value: "短い応募メッセージ（2〜3文）で代用可" },
    ],
    steps: [
      { title: "求人票を読み込む", description: "求められるスキル・条件のキーワードを抜き出します。" },
      { title: "5段落構成で書く", description: "宛名・動機・経験・在豪期間・結びの順にまとめます。" },
      { title: "求人に合わせて調整", description: "企業名・職種名・キーワードを差し替え、具体例を入れます。" },
      { title: "校正してPDF化", description: "誤字と表記を確認し、PDFで送付します。" },
    ],
    tips: [
      "『To whom it may concern』より、可能なら担当者名か『Dear Hiring Manager』が自然です。",
      "経験が浅くても、人柄（勤勉・時間厳守・チームワーク）と学ぶ意欲を具体的に書けば十分です。",
      "英語のテンプレートを丸写しせず、自分の言葉で1〜2文の具体例を必ず入れましょう。",
    ],
    phrases: [
      { en: "I am writing to apply for the position of [role] advertised on SEEK.", ja: "SEEKに掲載の[職種]に応募いたします。" },
      { en: "I hold a Working Holiday visa (subclass 417) and am available until [month/year].", ja: "ワーキングホリデービザ（417）を保有し、[年月]まで就労可能です。" },
      { en: "I would welcome the opportunity to discuss my application in an interview.", ja: "面接で応募内容についてお話しできれば幸いです。" },
    ],
    faqs: [
      {
        question: "カバーレターは必ず必要ですか？",
        answer:
          "カジュアルの飲食・小売では短い応募メッセージで十分なことが多いです。一方、オフィス系や専門職、企業のSEEK求人ではカバーレターがあると印象が上がります。応募先に応じて使い分けましょう。",
      },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "Fair Work Ombudsman｜Job ads（求人内容の理解に使用）",
        url: "https://www.fairwork.gov.au/starting-employment/job-ads",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["resume-guide", "job-application-follow-up", "job-reference-guide", "jobs-guide", "it-jobs-working-holiday"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a139",
    title: "Referenceの頼み方と書き方｜推薦者がいない場合の対処",
    slug: "job-reference-guide",
    category: "jobs",
    priority: "P1",
    searchIntent: "Reference（推薦者）の頼み方",
    description:
      "オーストラリアの求職で求められるReference（推薦者）の意味、頼み方、連絡先の書き方、そして推薦者がいないワーホリの代替案を解説します。",
    content: [
      "Reference（リファレンス）とは、あなたの働きぶりを保証してくれる推薦者のことです。応募先が採用前に電話やメールで『本当にまじめに働いていたか』を確認するために使います。多くの求人でレジュメに1〜2名分の連絡先を載せるか、『References available on request（希望があれば提出）』と書くのが一般的です。",
      "推薦者には、前職の上司・マネージャーが最適です。オーストラリアで1つでも仕事を経験したら、辞めるときに『Reference（推薦者）になってもらえますか』と必ず頼んでおきましょう。連絡先を教えることの許可を事前に取っておくのがマナーです。",
      "レジュメに書く場合は、推薦者の氏名・役職・会社名・電話番号・メールを記載します。事前に本人へ連絡し、『どんな仕事に応募するか』『いつ連絡が来るか』を伝えておくと、推薦者もスムーズに対応できます。連絡がつきやすい人を選ぶことも大切です。",
      "渡豪直後で豪州の職歴がない場合は、日本での勤務先の上司（英語対応可能なら）、語学学校の先生、ボランティア先の担当者などでも代用できます。難しければ『References available on request』と書き、最初の1社で経験を作ってから次の応募で使う、という流れでも問題ありません。",
      "推薦者を頼むときは、相手の負担を減らす配慮を。応募後は結果を報告し、お礼を伝えると、次回も気持ちよく引き受けてもらえます。",
    ],
    keyFacts: [
      { label: "Referenceとは", value: "働きぶりを保証する推薦者（通常1〜2名）" },
      { label: "最適な人", value: "前職の上司・マネージャー" },
      { label: "記載内容", value: "氏名・役職・会社名・電話・メール" },
      { label: "いない場合", value: "『Available on request』と記載でOK" },
    ],
    steps: [
      { title: "退職時に依頼", description: "仕事を辞めるとき、上司にReferenceの許可をもらいます。" },
      { title: "連絡先を確認", description: "推薦者の氏名・役職・電話・メールを正確に控えます。" },
      { title: "事前に一報", description: "応募したら推薦者へ『連絡が来るかも』と伝えておきます。" },
      { title: "結果を報告しお礼", description: "採否が出たら報告し、感謝を伝えます。" },
    ],
    tips: [
      "英語で推薦電話に対応できる人を選ぶと、雇用主とのやり取りがスムーズです。",
      "Written reference（推薦文）を1枚もらっておくと、次の応募で使い回せて便利です。",
      "推薦者に事前連絡がないと、突然の電話に対応できず印象を損ねることがあります。",
    ],
    faqs: [
      {
        question: "推薦者がまだ一人もいません。応募できますか？",
        answer:
          "できます。レジュメには『References available on request』と書けば問題ありません。最初の1社で働いて経験と推薦者を作れば、次の応募からぐっと有利になります。",
      },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "Fair Work Ombudsman｜Hiring employees（採用プロセスの一般情報）",
        url: "https://www.fairwork.gov.au/starting-employment/hiring-employees",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["resume-guide", "cover-letter-guide", "jobs-guide", "resignation-notice"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a140",
    title: "応募後のFollow-upメッセージ例文｜連絡のタイミングと文例",
    slug: "job-application-follow-up",
    category: "jobs",
    priority: "P1",
    searchIntent: "応募後のFollow-upメッセージ",
    description:
      "求人応募やレジュメ手渡しの後、返信が来ないときのFollow-up（フォローアップ）の適切なタイミングとメール・SMS・店頭での英語例文をまとめます。",
    content: [
      "応募して数日返信がないとき、丁寧なFollow-up（確認の連絡）を送ると、埋もれていた応募が拾われて面接につながることがあります。ワーホリの仕事探しでは、応募して終わりにせず、適切なタイミングで一押しする積極性が採用率を上げます。",
      "タイミングの目安は、オンライン応募・レジュメ手渡しから3〜5営業日後です。早すぎると急かす印象になり、遅すぎると採用が埋まってしまいます。連絡手段は、応募時に使ったチャネル（メール・SMS・店頭）に合わせるのが自然です。",
      "内容は簡潔に。『先日応募した氏名です』『まだ募集していますか』『引き続き強く興味があります』『必要なら追加情報を送ります』の4点を2〜3文にまとめます。店頭で渡した場合は、同じ時間帯を避けてアイドルタイムに再訪し、笑顔で確認するのが効果的です。",
      "返信が来たら素早く、丁寧に対応しましょう。面接やトライアルの誘いがあれば、日時をすぐ確定します。断られても『空きが出たら連絡してください』と一言添えれば、後日の欠員時に声がかかることもあります。",
      "1回のFollow-upで反応がなければ、しつこく繰り返さず次の求人に進むのが賢明です。応募先を記録しておくと、どこにいつ連絡したか管理しやすくなります。",
    ],
    keyFacts: [
      { label: "送るタイミング", value: "応募・手渡しから3〜5営業日後" },
      { label: "手段", value: "応募時と同じチャネル（メール/SMS/店頭）" },
      { label: "内容", value: "氏名・募集状況・意欲・追加情報の申し出" },
      { label: "回数", value: "基本1回。反応なければ次へ" },
    ],
    steps: [
      { title: "応募を記録", description: "応募日・企業名・担当者・連絡手段をメモします。" },
      { title: "3〜5日待つ", description: "すぐ催促せず、営業日で数日空けます。" },
      { title: "簡潔に連絡", description: "氏名・応募日・意欲を2〜3文で丁寧に送ります。" },
      { title: "返信に即対応", description: "面接・トライアルの誘いには素早く日時を確定します。" },
    ],
    tips: [
      "件名は『Follow-up: [職種] application – [氏名]』のように分かりやすく。",
      "店頭再訪はランチ・ディナーのピークを避け、落ち着いた時間に。",
      "断られても丁寧にお礼を。狭い業界では次の機会につながります。",
    ],
    phrases: [
      { en: "Hi, I applied for the [role] on [date] and wanted to check if the position is still open.", ja: "[日付]に[職種]へ応募した者です。まだ募集中か確認したくご連絡しました。" },
      { en: "I'm still very interested and happy to provide any further information.", ja: "引き続き強く興味があり、必要な情報は喜んでお送りします。" },
      { en: "Thank you for your time — I look forward to hearing from you.", ja: "お時間ありがとうございます。ご連絡をお待ちしております。" },
    ],
    faqs: [
      {
        question: "何度もFollow-upしてよいですか？",
        answer:
          "基本は1回にとどめましょう。何度も催促すると逆効果です。1回連絡して反応がなければ、その求人は縁がなかったと考え、次の応募に時間を使うほうが効率的です。",
      },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "Fair Work Ombudsman｜Job ads",
        url: "https://www.fairwork.gov.au/starting-employment/job-ads",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["cover-letter-guide", "walk-in-resume", "interview-guide", "jobs-guide"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a141",
    title: "雇用契約書で確認する項目｜時給・雇用形態・勤務条件",
    slug: "employment-contract-checklist",
    category: "jobs",
    priority: "P0",
    searchIntent: "雇用契約書で確認する項目",
    description:
      "オーストラリアで働き始める前に、雇用契約書（Employment Contract）とLetter of Offerで必ず確認すべき項目を、Fair Workの最低基準を踏まえてチェックリスト化します。",
    content: [
      "働き始める前に、雇用契約書（Employment Contract）またはLetter of Offer（採用通知）で、時給・雇用形態・勤務条件を必ず確認しましょう。結論として、契約書は『最低賃金・雇用形態・カジュアル手当・シフト・支払いサイクル・Super』の6点を押さえて読めば、後の給与トラブルの大半を防げます。",
      "まず雇用形態です。Casual（カジュアル）・Part-time（パートタイム）・Full-time（フルタイム）のどれかで、有給休暇の有無やCasual loading（カジュアル手当）が変わります。カジュアルは一般に基本時給に25%程度の上乗せがある一方、有給の年次・病気休暇はありません。契約書に自分の区分が明記されているか確認します。",
      "次に賃金です。記載の時給が、その職種に適用されるAward（賃金裁定）やNational Minimum Wageを下回っていないかを確認します。2026年7月1日時点のNational Minimum Wageは時給26.44豪ドル（週1,004.90豪ドル）で、多くのAwardはこれ以上です。土日・祝日・夜間のPenalty rate（割増）や残業手当がどう扱われるかも見ておきましょう。",
      "契約書には、契約書の全体像として、雇用開始日、勤務場所、想定シフト・時間、賃金と支払いサイクル（週払い・隔週）、Superannuationの支払い、試用期間（probation）、退職時のNotice period（通知期間）が書かれているのが通常です。口頭のみの約束は後で『言った・言わない』になりやすいため、重要条件は書面で残すのが安全です。",
      "サインは内容を理解してから。分からない条項は署名前に質問し、コピー（PDF）を必ず保管します。雇用形態や賃金が最低基準を下回る、Superの記載がない、といった契約は、署名前にFair Work Ombudsmanで確認しましょう。契約書があっても、法律や適用Awardの最低基準を下回る条件は無効です。",
    ],
    keyFacts: [
      { label: "雇用形態", value: "Casual / Part-time / Full-time を明記" },
      { label: "最低賃金（2026年7月〜）", value: "時給26.44豪ドル・週1,004.90豪ドル（要公式確認）" },
      { label: "Casual loading", value: "カジュアルは基本時給に約25%上乗せが一般的" },
      { label: "確認必須", value: "時給・シフト・支払いサイクル・Super・Notice" },
    ],
    steps: [
      { title: "雇用形態を確認", description: "Casual/Part-time/Full-timeのどれかと、手当の有無を確認します。" },
      { title: "賃金を照合", description: "時給がAward・最低賃金以上か、割増や残業の扱いを確認します。" },
      { title: "支払い・Superを確認", description: "支払いサイクル、Superの支払い、試用期間・Noticeを確認します。" },
      { title: "理解してから署名・保管", description: "不明点を質問し、署名後はPDFで保管します。" },
    ],
    tips: [
      "契約書がなくても労働法の保護は受けられますが、重要条件は書面かメールで残しましょう。",
      "適用されるAwardは、Fair WorkのFind my awardで確認できます。",
      "最低基準を下回る契約条件は、たとえ署名しても法的に無効です。",
    ],
    warnings: [
      "最低賃金・手当は毎年7月に改定されます。金額は必ずFair Work公式で最新の数値を確認してください。",
    ],
    faqs: [
      {
        question: "契約書がもらえません。働いても大丈夫ですか？",
        answer:
          "書面の契約書がなくても、ビザや国籍に関係なくオーストラリアの労働法（最低賃金・Super・Payslip等）で守られます。ただし条件の食い違いを防ぐため、時給・雇用形態・シフトをメールやメッセージで確認して残しておくと安全です。",
      },
    ],
    sources: [
      { label: "Fair Work Ombudsman（公式）", url: "https://www.fairwork.gov.au/" },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "Fair Work Ombudsman｜Minimum wages（2026年7月改定）",
        url: "https://www.fairwork.gov.au/pay-and-wages/minimum-wages",
        accessedAt: "2026-07-18",
      },
      {
        label: "Fair Work Ombudsman｜Employment contracts",
        url: "https://www.fairwork.gov.au/employment-conditions/employment-contracts",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["employment-types", "award-rates-penalty-rates", "working-rights", "payslip-guide", "superannuation-basics"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a142",
    title: "Casual・Part-time・Full-timeの違い｜手当と保証を比較",
    slug: "employment-types",
    category: "jobs",
    priority: "P0",
    searchIntent: "Casual・Part-time・Full-timeの違い",
    description:
      "オーストラリアの雇用形態（Casual・Part-time・Full-time）の違いを、Casual loading・有給休暇・勤務保証・Notice periodの観点でワーホリ向けに比較します。",
    content: [
      "結論から言うと、ワーホリの多くはCasual（カジュアル）で働きます。Casualは基本時給に約25%のCasual loading（手当）が上乗せされる代わりに、有給の年次・病気休暇がなく、シフトの保証もありません。Part-time・Full-timeは有給休暇や決まった労働時間がある安定した雇用です。",
      "Casualは、シフトが不規則で、雇用主・従業員のどちらも比較的自由に関係を終えられる働き方です。手当が乗るぶん時給は高めですが、休んでも有給は出ず、来週のシフトが保証されるわけではありません。渡航直後や掛け持ちで柔軟に働きたいワーホリに向いています。",
      "Part-timeは、週の労働時間が決まっている（例：週20時間）安定雇用で、有給の年次休暇・病気休暇が労働時間に応じて発生します。Full-timeは週38時間を基準とするフルタイム雇用で、同様に有給休暇が付きます。どちらもCasual loadingは付きませんが、勤務が安定し、Notice period（退職・解雇の通知期間）の対象になります。",
      "セカンドビザ（88日のSpecified Work）を狙う場合は、Casualでも要件を満たせますが、Payslipや勤務日数の記録がより重要になります。またワーホリ（417/462）には同一雇用主6か月の就労制限があるため、雇用形態に関わらずこの点を意識しましょう。",
      "自分がどの雇用形態かは、契約書・Letter of Offer・Payslipで確認できます。Payslipに『Casual』と記載され手当が乗っているか、Part-timeなら有給が積み上がっているかをチェックしましょう。近年は一定の条件を満たすCasualが継続雇用（permanent）への転換を求められる仕組みもあり、詳細はFair Workで確認できます。",
    ],
    keyFacts: [
      { label: "Casual", value: "手当約25%上乗せ・有給なし・シフト保証なし" },
      { label: "Part-time", value: "労働時間が固定・有給あり・Notice対象" },
      { label: "Full-time", value: "週38時間基準・有給あり・Notice対象" },
      { label: "ワーホリの主流", value: "多くはCasual（柔軟だが不安定）" },
    ],
    steps: [
      { title: "契約で区分を確認", description: "契約書・Letter of OfferでCasual/Part-time/Full-timeを確認します。" },
      { title: "手当・有給を照合", description: "Casualは手当、Part/Fullは有給が正しく扱われているか確認します。" },
      { title: "Payslipで検証", description: "Payslipに雇用形態と各種手当が反映されているか毎回確認します。" },
      { title: "6か月制限を意識", description: "417/462は同一雇用主6か月制限があるため計画的に働きます。" },
    ],
    tips: [
      "Casualの高い時給は手当込み。有給がないぶん、休むと収入ゼロになる点に注意。",
      "安定して長く働きたいならPart-time/Full-timeが有利。有給と勤務保証が得られます。",
      "セカンドビザ狙いは雇用形態よりPayslip・日数記録の管理が重要です。",
    ],
    faqs: [
      {
        question: "Casualとして働くと有給休暇はもらえませんか？",
        answer:
          "Casualには有給の年次・病気休暇はありません。その代わりCasual loading（約25%）が時給に上乗せされます。有給休暇が欲しい場合はPart-timeやFull-timeの求人を選ぶ必要があります。",
      },
    ],
    sources: [
      { label: "Fair Work Ombudsman（公式）", url: "https://www.fairwork.gov.au/" },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "Fair Work Ombudsman｜Types of employees",
        url: "https://www.fairwork.gov.au/employment-conditions/types-of-employees",
        accessedAt: "2026-07-18",
      },
      {
        label: "Fair Work Ombudsman｜Minimum wages（Casual loadingの基礎）",
        url: "https://www.fairwork.gov.au/pay-and-wages/minimum-wages",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["employment-contract-checklist", "award-rates-penalty-rates", "working-rights", "visa-six-month-work-limitation", "payslip-guide"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a143",
    title: "Award RateとPenalty Rateの調べ方｜土日・祝日・夜間の割増",
    slug: "award-rates-penalty-rates",
    category: "jobs",
    priority: "P0",
    searchIntent: "Award RateとPenalty Rateの調べ方",
    description:
      "自分の最低時給や土日・祝日・夜間の割増（Penalty Rate）は、Fair WorkのPay Calculatorで調べられます。Award（賃金裁定）の探し方と確認手順を解説します。",
    content: [
      "結論から言うと、自分の正しい最低時給と土日・祝日・夜間の割増（Penalty Rate）は、Fair Work OmbudsmanのPay and Conditions Tool（Pay Calculator）で無料で調べられます。多くの労働者は、業界・職種ごとに定められたAward（賃金裁定）に基づく最低条件が適用され、これはNational Minimum Wageより高いことが多いです。",
      "Award（アワード）とは、業界・職種ごとの最低賃金・割増・手当を定めた法的文書です。飲食はHospitality Award、小売はGeneral Retail Award、清掃はCleaning Services Awardなど、100以上のAwardがあります。自分に適用されるAwardは、Fair Workの『Find my award』で職種を選んで特定できます。",
      "Penalty Rate（割増賃金）は、土曜・日曜・祝日・早朝・深夜など、通常より不利な時間帯に働いたときに支払われる高い時給です。例えば日曜や祝日は平日より高い率になるのが一般的で、率はAwardごとに異なります。カジュアルは、これらの割増に加えてCasual loadingも重なる場合があります。",
      "調べ方は簡単です。Pay Calculatorに、業界・職種、雇用形態（Casual/Part/Full）、年齢を入力すると、平日・土日・祝日・夜間ごとの最低時給が表示されます。自分のPayslipの時給と照合し、割増が正しく支払われているか確認しましょう。ズレがあれば、まず雇用主に確認します。",
      "最低賃金・割増は毎年7月1日に改定されます（2026年7月からAward最低賃金は4.75%引き上げ）。金額は必ず最新のPay Calculatorで確認し、古い数字を鵜呑みにしないことが大切です。",
    ],
    keyFacts: [
      { label: "調べる場所", value: "Fair Work Pay and Conditions Tool（無料）" },
      { label: "Award", value: "業界・職種別の最低条件（100以上）" },
      { label: "Penalty Rate", value: "土日・祝日・夜間などの割増賃金" },
      { label: "改定", value: "毎年7月1日（2026年はAward +4.75%）" },
    ],
    steps: [
      { title: "適用Awardを特定", description: "Fair Workの『Find my award』で職種からAwardを探します。" },
      { title: "Pay Calculatorに入力", description: "業界・職種・雇用形態・年齢を入力します。" },
      { title: "時間帯別の時給を確認", description: "平日・土日・祝日・夜間の最低時給と割増を確認します。" },
      { title: "Payslipと照合", description: "実際の支払いと照らし、不足があれば雇用主に確認します。" },
    ],
    tips: [
      "祝日は州ごとに異なります。働いた日が祝日か、州のPublic holidayカレンダーで確認を。",
      "カジュアルはPenalty RateにCasual loadingが加わる場合があり、平日夜や日曜は高くなりがち。",
      "『固定時給ですべて込み』と言われても、Award上の割増を下回っていれば違法の可能性があります。",
    ],
    warnings: [
      "賃金・割増は毎年改定されます。必ず最新のPay Calculatorで確認してください。",
    ],
    faqs: [
      {
        question: "自分がどのAwardか分かりません。どうすればいいですか？",
        answer:
          "Fair Workの『Find my award』で、勤務先の業界と自分の職種を選ぶと適用Awardが分かります。判断が難しい場合はFair Work Ombudsman（無料・多言語対応）に相談できます。",
      },
    ],
    sources: [
      { label: "Fair Work Ombudsman（公式）", url: "https://www.fairwork.gov.au/" },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "Fair Work Ombudsman｜Pay and Conditions Tool（Pay Calculator）",
        url: "https://www.fairwork.gov.au/pay-and-wages/pay-calculator",
        accessedAt: "2026-07-18",
      },
      {
        label: "Fair Work Ombudsman｜Penalty rates",
        url: "https://www.fairwork.gov.au/pay-and-wages/allowances-penalty-rates-and-other-penalties",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["employment-types", "employment-contract-checklist", "underpayment-unpaid-wages", "working-rights", "payslip-guide"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a144",
    title: "無給トライアルは合法？Fair Workの考え方",
    slug: "unpaid-trial-rules",
    category: "jobs",
    priority: "P0",
    searchIntent: "無給トライアルは合法か",
    description:
      "採用前の無給トライアル（Unpaid Trial）はどこまで合法か。Fair Workの基準（スキル確認に必要な範囲・監督下・短時間）と、支払いが必要になるケースを解説します。",
    content: [
      "結論から言うと、無給トライアル（Unpaid Trial）が合法なのは、『その職に必要なスキルを実演するために本当に必要な短時間だけ』で、かつ『直接の監督下』で『スキルの実演のみ』を行う場合に限られます。Fair Workは、必要な時間は仕事の内容次第だが『1時間から1シフト程度』が目安としています。それを超えて実際の労働をさせられたら、最低賃金の支払いが必要です。",
      "無給トライアルが違法（＝賃金支払いが必要）になるのは、①スキル実演に必要な範囲を超えて続く、②単なる実演ではなく実際の業務（通常の営業に貢献する労働）をさせる、③直接の監督がない、のいずれかに当てはまる場合です。例えば『採用判断のため1週間タダで働いて』は違法で、その全時間は支払われるべきです。",
      "適法なトライアルの例は、パネル修理の求人で、面接後に技術者に付いて数十分だけ工具の使い方や安全を実演するようなケースです。一方、カフェで『最初の1週間は無給で様子を見る』『来られない日は前日までに代わりを手配して』と求められるのは、実質的に雇用関係で、全時間の支払い対象になります。",
      "雇用主が採用可否をさらに見極めたい場合は、無給を続けるのではなく、カジュアル雇用や試用期間（probation）として雇い、働いた全時間に賃金を支払うのが正しい方法です。トライアル中に通常のシフトに組み込まれ、実際に売上に貢献しているなら、それは無給トライアルではなく労働です。",
      "トライアルを打診されたら、事前に『無給か有給か』『何時間か』『何をするのか』を確認しましょう。長時間・実務・監督なしの無給トライアルは断ってよく、働いた分が支払われない場合はFair Work Ombudsmanに無料で相談できます。日時・時間・業務内容を記録しておくと後の相談で役立ちます。",
    ],
    keyFacts: [
      { label: "合法の条件", value: "スキル実演に必要な短時間・監督下・実演のみ" },
      { label: "時間の目安", value: "1時間〜1シフト程度（内容による）" },
      { label: "違法になる例", value: "長時間・実務労働・監督なしの無給" },
      { label: "超過分", value: "最低賃金での支払いが必要" },
    ],
    steps: [
      { title: "内容を事前確認", description: "無給/有給・時間・業務内容をトライアル前に確認します。" },
      { title: "記録を取る", description: "日時・実働時間・やらされた業務をメモします。" },
      { title: "範囲を超えたら申告", description: "実演を超える労働をさせられたら支払いを求めます。" },
      { title: "解決しなければ相談", description: "支払われない場合はFair Workに無料相談します。" },
    ],
    tips: [
      "『トライアル』の名でシフトに入れられ売上に貢献していれば、それは労働＝支払い対象です。",
      "長時間・複数日の無給トライアルは違法の可能性が高いので慎重に。",
      "断っても構いません。まっとうな雇用主はカジュアルとして有給で試用します。",
    ],
    warnings: [
      "『採用前に無給で1週間』などの長期無給トライアルはFair Workの基準に反する可能性が高いです。",
    ],
    faqs: [
      {
        question: "トライアルの分の給料がもらえませんでした。どうすれば？",
        answer:
          "スキル実演に必要な範囲を超えて働いた時間は、最低賃金で支払われるべきです。まず雇用主に確認し、支払われなければ日時・時間・業務内容の記録を添えてFair Work Ombudsmanに無料で相談できます。ビザの状況に関係なく利用できます。",
      },
    ],
    sources: [
      { label: "Fair Work Ombudsman（公式）", url: "https://www.fairwork.gov.au/" },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "Fair Work Ombudsman｜Unpaid trials",
        url: "https://www.fairwork.gov.au/starting-employment/unpaid-work/unpaid-trials",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["interview-guide", "walk-in-resume", "underpayment-unpaid-wages", "working-rights", "cash-in-hand-jobs"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a145",
    title: "給料未払い・最低賃金違反への対応手順",
    slug: "underpayment-unpaid-wages",
    category: "jobs",
    priority: "P0",
    searchIntent: "給料未払い・最低賃金違反への対応",
    description:
      "給料が支払われない、最低賃金を下回る、割増が払われない——そんなときの具体的な対応手順を、証拠の残し方からFair Workへの相談まで解説します。",
    content: [
      "結論から言うと、給料未払いや最低賃金違反に気づいたら、①証拠を集める②自分の正しい賃金を確認する③雇用主に書面で連絡する④解決しなければFair Work Ombudsmanに相談する、の順で対応します。ワーホリでもビザや国籍に関係なく賃金を取り戻す権利があり、相談は無料・多言語対応です。",
      "まず証拠を集めます。Payslip、労働時間の記録（自分でつけたメモやFair Workの『Record My Hours』アプリ）、雇用契約やシフト表、雇用主とのメッセージ、銀行の入金履歴を保存します。これらが未払い額を示す土台になります。記録が手元にないほど立証は難しくなるため、日頃から残す習慣が大切です。",
      "次に、自分の正しい賃金を確認します。Fair WorkのPay Calculatorで、職種・雇用形態・時間帯に応じた最低時給と割増を調べ、実際の支払いとの差額を計算します。2026年7月時点のNational Minimum Wageは時給26.44豪ドルで、多くのAwardはこれ以上です。",
      "そのうえで、雇用主に書面（メール等）で丁寧に連絡します。『何日から何日分の、いくらの未払いがある』と具体的に伝え、支払いを求めます。多くのケースは、この段階で誤りが正されます。感情的にならず記録を残す形で進めるのがポイントです。",
      "解決しない、または連絡が怖い場合は、Fair Work Ombudsmanに相談します。無料の通訳サービス（TIS）を通じて日本語でも相談でき、未払い賃金の回収を支援します。相談したことを理由にした解雇・報復は違法です。事業所が倒産した場合など、状況によっては公的なセーフティネットの案内も受けられます。泣き寝入りせず、まず相談しましょう。",
    ],
    keyFacts: [
      { label: "最初にやること", value: "証拠（Payslip・時間記録・メッセージ）を保存" },
      { label: "正しい賃金", value: "Pay Calculatorで職種・時間帯別に確認" },
      { label: "相談先", value: "Fair Work Ombudsman（無料・多言語）" },
      { label: "報復", value: "相談・申告を理由にした解雇は違法" },
    ],
    steps: [
      { title: "証拠を集める", description: "Payslip・労働時間の記録・契約・メッセージ・入金履歴を保存します。" },
      { title: "正しい賃金を計算", description: "Pay Calculatorで最低時給・割増を確認し差額を算出します。" },
      { title: "雇用主に書面で請求", description: "未払い額を具体的に示し、支払いをメール等で求めます。" },
      { title: "Fair Workに相談", description: "解決しなければ無料・多言語で相談し回収支援を受けます。" },
    ],
    tips: [
      "日頃からFair Workの『Record My Hours』アプリで労働時間を記録しておくと立証が容易です。",
      "現金払い・Payslipなしは未払いの立証が難しくなるため、記録を二重に残しましょう。",
      "在職中でも相談できます。報復は違法なので安心して利用を。",
    ],
    warnings: [
      "時間の経過で回収が難しくなる場合があります。気づいたら早めに証拠を集め相談してください。",
    ],
    faqs: [
      {
        question: "ビザに影響しないか心配です。相談して大丈夫ですか？",
        answer:
          "Fair Work OmbudsmanはビザホルダーもローカルワーカーもFair Workの下で平等に保護すると明言しており、内務省（移民）と一定の情報共有の取り決めもあります。ビザの状況に関係なく賃金の権利があり、まずは無料相談を利用しましょう。",
      },
    ],
    sources: [
      { label: "Fair Work Ombudsman（公式）", url: "https://www.fairwork.gov.au/" },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "Fair Work Ombudsman｜Fixing a workplace problem",
        url: "https://www.fairwork.gov.au/workplace-problems/fixing-a-workplace-problem",
        accessedAt: "2026-07-18",
      },
      {
        label: "Fair Work Ombudsman｜Visa holders and migrant workers",
        url: "https://www.fairwork.gov.au/find-help-for/visa-holders-migrants",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["working-rights", "award-rates-penalty-rates", "cash-in-hand-jobs", "payslip-guide", "termination-final-pay"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a146",
    title: "Cash in Handの仕事は違法？税金と労働リスク",
    slug: "cash-in-hand-jobs",
    category: "jobs",
    priority: "P0",
    searchIntent: "Cash in Handの仕事は違法か",
    description:
      "現金払い（Cash in Hand）の仕事は違法なのか。現金払い自体と、無申告・最低賃金割れ・Payslipなしのリスクを区別し、ワーホリが失うものを解説します。",
    content: [
      "結論から言うと、現金で給料を受け取ること自体は違法ではありません。問題になるのは、その現金払いが『税金の無申告』『最低賃金割れ』『Payslipやスーパー（Super）の不払い』とセットになっている場合です。多くの『Cash in Hand』の仕事はこれらの問題を伴い、結果的にワーホリ本人が大きく損をします。",
      "現金払いに潜むリスクは複数あります。まず、雇用主がATOに申告せず源泉徴収もしていないと、Payslipが出ず、Superannuation（退職年金）も積み立てられません。あなたの労働記録が残らないため、最低賃金を下回っていても立証が難しく、未払いの回収も困難になります。",
      "ワーホリにとって特に痛いのは、タックスリターン（確定申告）とセカンドビザへの影響です。記録に残らない収入は、後で申告や還付の裏付けができません。ファーム等のSpecified Work（88日）でセカンドビザを狙う場合、Payslipや銀行入金の記録がないと日数を証明できず、ビザ申請で不利になります。",
      "労災保険（Workers Compensation）の観点でもリスクがあります。記録のない現金労働中に怪我をすると、労災の補償を受けにくく、治療費を自己負担する恐れがあります。『税金が引かれないから手取りが多い』という一見の魅力の裏で、保護と証明を失っているのが現金オンリーの仕事です。",
      "対処としては、たとえ現金で受け取る場合でも、①Payslipを必ず求める②時給が最低賃金以上か確認する③TFNを提出し正しく源泉徴収してもらう④労働時間と入金を自分でも記録する、を徹底しましょう。これらが守られない現金払いは避けるのが賢明です。不当な扱いはFair Work Ombudsman（無料・多言語）に相談できます。",
    ],
    keyFacts: [
      { label: "現金払い自体", value: "違法ではない（記録があれば問題なし）" },
      { label: "本当の問題", value: "無申告・最低賃金割れ・Payslip/Super不払い" },
      { label: "失うもの", value: "Super・労災保護・税還付/セカンドビザの証明" },
      { label: "自衛", value: "Payslip請求・TFN提出・時間と入金の記録" },
    ],
    steps: [
      { title: "Payslipを求める", description: "現金でもPayslipの発行を必ず求め、記録を残します。" },
      { title: "時給を確認", description: "最低賃金・Awardを下回っていないか確認します。" },
      { title: "TFN・Superを確認", description: "TFNを提出し、源泉徴収とSuperが適正か確認します。" },
      { title: "自分でも記録", description: "労働時間と受取額を記録し、銀行に入金して履歴を残します。" },
    ],
    tips: [
      "受け取った現金は口座に入金しておくと、収入の記録として残ります。",
      "セカンドビザ狙いなら、現金オンリー・記録なしの仕事は避けるのが安全です。",
      "『税金がかからないから得』は誤解。Super・還付・保護を失えば結果的に損です。",
    ],
    warnings: [
      "Payslipなし・最低賃金割れ・無申告の現金労働は、賃金の立証・還付・セカンドビザ証明で大きく不利になります。",
    ],
    faqs: [
      {
        question: "現金払いでもタックスリターンは必要ですか？",
        answer:
          "はい。現金で受け取った収入も課税対象で、申告義務があります。TFNを提出し正しく源泉徴収されていれば、年度末に還付を受けられる可能性もあります。無申告は後々の税・ビザ手続きでリスクになります。",
      },
    ],
    sources: [
      { label: "Fair Work Ombudsman（公式）", url: "https://www.fairwork.gov.au/" },
      { label: "ATO（税務）", url: "https://www.ato.gov.au/" },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "Fair Work Ombudsman｜Pay slips and record-keeping",
        url: "https://www.fairwork.gov.au/pay-and-wages/pay-slips-and-record-keeping",
        accessedAt: "2026-07-18",
      },
      {
        label: "ATO｜Working in Australia（納税・TFN）",
        url: "https://www.ato.gov.au/individuals-and-families/coming-to-australia-or-going-overseas",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["working-rights", "underpayment-unpaid-wages", "payslip-guide", "tfn-guide", "farm-second-visa"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a147",
    title: "仕事中に怪我をした場合｜報告・治療・Workers Compensation",
    slug: "workplace-injury-workers-comp",
    category: "jobs",
    priority: "P0",
    searchIntent: "仕事中の怪我・Workers Compensation",
    description:
      "仕事中に怪我をしたときの正しい対応手順（応急処置・報告・受診・労災請求）と、州ごとに異なるWorkers Compensation（労災補償）の仕組みを解説します。",
    content: [
      "結論から言うと、仕事中に怪我をしたら、①まず治療・応急処置を受け②できるだけ早く雇用主に報告し③医師の診断書（medical certificate）をもらい④Workers Compensation（労災補償）を請求する、という流れになります。Workers Compensationは州・準州ごとに制度が分かれており、原則としてビザや雇用形態（カジュアル含む）に関係なく、雇用されて働いていれば対象になり得ます。",
      "Workers Compensation（労災補償）は、仕事に関連する怪我や病気について、治療費や休業中の所得（一部）を補償する保険制度です。雇用主は従業員のためにこの保険に加入する義務があります。制度と請求先は州ごとに異なり、例えばNSWはicare/SIRA、VICはWorkSafe Victoria、QLDはWorkCover Queenslandが窓口です。",
      "怪我をしたら、まず安全を確保して必要な治療を受けます。命に関わる場合は000（救急）です。そのうえで、いつ・どこで・どのように怪我をしたかを雇用主に速やかに報告し、多くの職場にある『register of injuries（負傷記録簿）』に記録してもらいます。報告が遅れると、後の請求で不利になることがあります。",
      "医療機関では、仕事中の怪我であることを伝え、Certificate of Capacity（就労能力証明）や診断書をもらいます。これが休業補償や治療費請求の根拠になります。領収書・診断書・報告の記録は必ず保管しましょう。請求手続きは、雇用主または州の労災機関を通じて行います。",
      "『カジュアルだから』『ワーホリだから』労災は使えない、というのは誤解です。対象になり得ます。雇用主が報告を受け付けない、保険に入っていない疑いがある、といった場合は、州の労災機関やFair Work Ombudsman、必要なら法律相談を利用できます。まずは治療と報告、記録の保存を優先してください。",
    ],
    keyFacts: [
      { label: "補償制度", value: "Workers Compensation（州ごとに窓口が異なる）" },
      { label: "対象", value: "原則ビザ・雇用形態問わず被雇用者" },
      { label: "最初にやること", value: "治療→雇用主へ報告→診断書取得→請求" },
      { label: "緊急時", value: "000（救急）／記録簿への記載" },
    ],
    steps: [
      { title: "治療を受ける", description: "応急処置・受診。緊急時は000。安全を最優先します。" },
      { title: "雇用主に報告", description: "いつ・どこで・どう怪我したかを速やかに報告し記録します。" },
      { title: "診断書を取得", description: "仕事中の怪我と伝え、就労能力証明・診断書をもらいます。" },
      { title: "労災を請求", description: "州の労災機関・雇用主を通じて補償を請求し、書類を保管します。" },
    ],
    tips: [
      "怪我の状況・日時・目撃者を自分でもメモしておくと請求がスムーズです。",
      "治療費の領収書と診断書はすべて保管しましょう。",
      "州によって請求期限があります。早めの報告・請求が肝心です。",
    ],
    warnings: [
      "労災制度は州ごとに大きく異なります。請求先・期限は必ず自分の州の労災機関で確認してください。",
    ],
    faqs: [
      {
        question: "カジュアルやワーホリでも労災補償を受けられますか？",
        answer:
          "多くの場合、雇用形態やビザに関わらず被雇用者は対象になり得ます。まずは仕事中の怪我であることを雇用主に報告し、医師の診断書を取得して州の労災機関に請求してください。詳細は州の制度で確認しましょう。",
      },
    ],
    sources: [
      { label: "Safe Work Australia（労働安全）", url: "https://www.safeworkaustralia.gov.au/" },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "Safe Work Australia｜Workers' compensation",
        url: "https://www.safeworkaustralia.gov.au/workers-compensation",
        accessedAt: "2026-07-18",
      },
      {
        label: "Fair Work Ombudsman｜Sick and injured (workplace health and safety)",
        url: "https://www.fairwork.gov.au/employment-conditions/workplace-health-and-safety",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["working-rights", "work-injury-medical", "farm-work-clothing", "safety-emergency", "termination-final-pay"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a148",
    title: "職場のいじめ・差別・ハラスメントへの対処",
    slug: "workplace-bullying-harassment",
    category: "jobs",
    priority: "P1",
    searchIntent: "職場のいじめ・差別・ハラスメント対処",
    description:
      "職場でのいじめ・差別・セクハラに直面したときの対応（記録・相談・申立て）と、Fair Work Commissionや各機関の窓口を整理します。",
    content: [
      "結論から言うと、職場のいじめ（bullying）・差別（discrimination）・ハラスメント（harassment）に直面したら、①身の安全を確保し②出来事を記録し③信頼できる人・窓口に相談し④必要ならFair Work Commissionや人権機関へ申立てを行います。ワーホリでもビザや国籍に関係なく、これらから守られる権利があります。",
      "『いじめ』とは、個人やグループに対して繰り返される不合理な言動で、健康や安全にリスクを生じさせるものを指します。人種・国籍・性別・年齢などを理由とする不利益な扱いは『差別』にあたり、望まない性的言動は『セクシャルハラスメント』です。1回きりでも重大なものは対象になり得ます。",
      "まず、出来事を記録しましょう。日時・場所・誰が・何を言った/したか・目撃者・自分がどう対応したかを具体的にメモし、関連するメッセージやメールも保存します。この記録が、後の相談や申立ての土台になります。緊急で身の危険がある場合は000です。",
      "相談先は状況で分かれます。職場のいじめについては、労働者はFair Work Commissionに『stop bullying order（いじめ停止命令）』を申し立てられます。差別・セクハラはAustralian Human Rights Commissionや州の反差別機関、労働安全の観点では州のWork Health and Safety機関が窓口です。賃金や解雇が絡む場合はFair Work Ombudsmanも利用できます。",
      "報復も違法です。相談・申立てをしたことを理由にした解雇や不利益な扱いは、Fair Work Actの一般的保護（general protections）で禁止されています。一人で抱え込まず、無料の通訳サービスを使ってでも早めに相談することが大切です。深刻な場合は法律相談（Legal Aidやコミュニティ法律センター）も検討しましょう。",
    ],
    keyFacts: [
      { label: "いじめ", value: "繰り返される不合理な言動で健康・安全にリスク" },
      { label: "差別/セクハラ", value: "属性を理由とする不利益／望まない性的言動" },
      { label: "いじめ停止命令", value: "Fair Work Commissionへ申立て可能" },
      { label: "差別・セクハラ窓口", value: "Australian Human Rights Commission等" },
    ],
    steps: [
      { title: "安全を確保", description: "身の危険があれば距離を取り、緊急時は000に通報します。" },
      { title: "記録する", description: "日時・場所・言動・目撃者・メッセージを具体的に残します。" },
      { title: "相談する", description: "信頼できる人や適切な機関（下記）に相談します。" },
      { title: "申立てを検討", description: "解決しなければFair Work Commissionや人権機関へ申立てます。" },
    ],
    tips: [
      "記録は事実ベースで具体的に。感情的な表現より、いつ・何が起きたかを明確に。",
      "英語が不安でも、多くの機関で無料の通訳（TIS）が使えます。",
      "報復は違法です。相談を理由に不利益を受けたらそれ自体を申告できます。",
    ],
    warnings: [
      "緊急で身の危険があるときは、我慢せず000（警察・救急）に通報してください。",
    ],
    faqs: [
      {
        question: "ワーホリでも職場のいじめを申し立てられますか？",
        answer:
          "はい。ビザや国籍に関係なく保護の対象です。労働者としてFair Work Commissionにいじめ停止命令を申し立てられ、差別・セクハラはAustralian Human Rights Commission等に相談できます。報復も法律で禁止されています。",
      },
    ],
    sources: [
      { label: "Fair Work Commission（公式）", url: "https://www.fwc.gov.au/" },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "Fair Work Commission｜Bullying, sexual harassment and discrimination at work",
        url: "https://www.fwc.gov.au/issues-we-help/bullying-sexual-harassment-and-discrimination-work",
        accessedAt: "2026-07-18",
      },
      {
        label: "Australian Human Rights Commission",
        url: "https://humanrights.gov.au/",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["working-rights", "workplace-injury-workers-comp", "termination-final-pay", "mental-health", "workplace-english"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a149",
    title: "仕事を辞める英語とNotice Period｜退職メッセージ例",
    slug: "resignation-notice",
    category: "jobs",
    priority: "P0",
    searchIntent: "仕事を辞める・Notice Period",
    description:
      "オーストラリアで仕事を辞めるときのNotice Period（退職通知期間）の考え方、最終給与、備品返却、そしてそのまま使える退職メッセージの英語例文を解説します。",
    content: [
      "結論から言うと、仕事を辞めるときは、まず雇用契約や適用Awardに定めるNotice Period（退職通知期間）を確認し、その期間より前に書面（メール等）で退職を伝えます。カジュアルは通知義務がないことが多い一方、Part-time・Full-timeは契約・Awardに沿った通知が必要です。円満に辞めることは、Referenceの取得や業界での評判にもつながります。",
      "Notice Period（通知期間）は、退職の意思を伝えてから最終出勤日までの期間です。多くのAwardや契約では、Full-time・Part-timeの従業員が辞める際に、勤続年数に応じた通知（例：数週間）が求められます。自分の必要通知期間は、雇用契約書か適用Awardで確認しましょう。カジュアルは一般に通知不要ですが、後任のシフト調整のため早めに伝えるのがマナーです。",
      "退職を伝えるときは、口頭だけでなく書面（メールやメッセージ）で残すのが安全です。感謝を述べ、最終出勤日を明記し、引き継ぎに協力する姿勢を示すと印象が良くなります。ここで前職の上司にReference（推薦者）をお願いしておくと、次の仕事探しで有利です。",
      "辞める際は、最終給与（Final Pay）と備品返却も確認します。最終給与には、働いた分の賃金と、Part/Fullなら未消化の年次有給休暇の清算が含まれます。多くのAwardでは退職後7日以内の支払いが求められます。制服・鍵・社員証などの貸与品は返却し、貸与品の弁償を不当に給与から差し引かれていないか確認しましょう。",
      "最終給与が支払われない、金額がおかしいといった場合は、まず雇用主に確認し、解決しなければFair Work Ombudsman（無料・多言語）に相談できます。Payslipと労働時間の記録を保管しておくと、清算内容の確認に役立ちます。",
    ],
    keyFacts: [
      { label: "Notice Period", value: "契約・Awardで確認。Part/Fullは通知が必要" },
      { label: "カジュアル", value: "通知義務は一般になし（早めの連絡が礼儀）" },
      { label: "伝え方", value: "書面（メール）で最終出勤日を明記し感謝を添える" },
      { label: "最終給与", value: "未消化の年次有給の清算含む／多くは退職後7日以内" },
    ],
    steps: [
      { title: "通知期間を確認", description: "契約書・Awardで必要なNotice Periodを確認します。" },
      { title: "書面で退職を伝える", description: "最終出勤日を明記し、感謝と引き継ぎ協力を添えて送ります。" },
      { title: "Referenceを依頼", description: "上司にReference（推薦者）の許可をもらっておきます。" },
      { title: "最終給与・返却を確認", description: "Final Payと貸与品返却を確認し、Payslipを保管します。" },
    ],
    tips: [
      "円満退職はReferenceと評判につながります。最後まで丁寧に。",
      "口頭だけでなく書面で残すと、退職日や条件の行き違いを防げます。",
      "最終給与の年次有給清算はPart/Fullが対象。カジュアルは通常対象外です。",
    ],
    phrases: [
      { en: "I'm writing to give notice of my resignation, with my last day on [date].", ja: "[日付]を最終出勤日として退職の意思をお伝えします。" },
      { en: "Thank you for the opportunity — I've really valued working here.", ja: "働く機会をいただき、ここでの経験に感謝しています。" },
      { en: "Would you be willing to act as a reference for me?", ja: "私のReference（推薦者）になっていただけますか？" },
    ],
    faqs: [
      {
        question: "カジュアルはすぐ辞めても大丈夫ですか？",
        answer:
          "カジュアルは通知義務がないことが多く、法的には短い通知でも辞められます。ただしシフトに穴を空けると印象が悪く、Referenceにも影響します。可能な範囲で早めに伝え、円満に辞めるのがおすすめです。",
      },
    ],
    sources: [
      { label: "Fair Work Ombudsman（公式）", url: "https://www.fairwork.gov.au/" },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "Fair Work Ombudsman｜Resignation",
        url: "https://www.fairwork.gov.au/ending-employment/resignation",
        accessedAt: "2026-07-18",
      },
      {
        label: "Fair Work Ombudsman｜Final pay",
        url: "https://www.fairwork.gov.au/ending-employment/final-pay",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["job-reference-guide", "termination-final-pay", "working-rights", "close-bank-account-before-leaving", "workplace-english"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a150",
    title: "解雇されたときの確認事項｜Final Payと権利",
    slug: "termination-final-pay",
    category: "jobs",
    priority: "P1",
    searchIntent: "解雇・Final Payと権利",
    description:
      "解雇（Termination）されたときに確認すべきこと——通知（Notice）、最終給与（Final Pay）、不当解雇（Unfair Dismissal）の考え方と相談先を、Fair Workの基準で解説します。",
    content: [
      "結論から言うと、解雇されたら、①解雇理由と最終出勤日を確認し②Notice（通知）またはPayment in lieu（通知に代わる支払い）が正しいか確認し③最終給与（Final Pay）に未消化の年次有給が含まれるか確認し④納得できなければFair Work Commission等に相談する、という順で対応します。ワーホリでも一定の権利が守られています。",
      "Notice（通知期間）について、雇用主が解雇するときは、National Employment Standards（NES）に基づく最低通知期間を与えるか、その分を支払う必要があります。NESの最低通知は勤続年数に応じ、1年以下=1週間、1〜3年=2週間、3〜5年=3週間、5年超=4週間で、45歳以上かつ勤続2年以上ならさらに1週間加算されます（カジュアルは通常対象外）。ただし、重大な非行（serious misconduct、例：窃盗・暴力）による解雇では、通知なしで即時解雇が可能ですが、それでも働いた分の賃金と未消化有給は支払われます。",
      "最終給与（Final Pay）には、働いた時間の賃金、Part/Fullの未消化年次有給休暇の清算、該当すればその他の権利が含まれます。多くのAwardでは退職後7日以内の支払いが求められます。Payslipで内訳を確認し、貸与品の弁償などが不当に差し引かれていないかチェックしましょう。",
      "解雇が不当だと感じる場合、一定の条件を満たす従業員はFair Work Commissionに『Unfair Dismissal（不当解雇）』の申立てができます。重要なのは、申立ての期限が原則として解雇日から21日以内と短いことです。小規模事業者には別の基準（Small Business Fair Dismissal Code）が適用されるなど条件が細かいため、早めに確認しましょう。",
      "解雇理由が人種・国籍・妊娠などの差別的なものだったり、権利行使への報復だったりする場合は、一般的保護（general protections）の申立ての対象になり得ます。最終給与の不払いはFair Work Ombudsman、不当解雇・一般的保護はFair Work Commissionが窓口です。無料の通訳サービスも使えるため、一人で悩まず早めに相談してください。",
    ],
    keyFacts: [
      { label: "最低通知（NES）", value: "1年以下1週/1-3年2週/3-5年3週/5年超4週" },
      { label: "45歳以上", value: "勤続2年以上でさらに+1週間（カジュアルは通常対象外）" },
      { label: "重大な非行", value: "通知なし即時解雇可。ただし賃金・有給は支払う" },
      { label: "不当解雇の期限", value: "原則、解雇日から21日以内に申立て" },
    ],
    steps: [
      { title: "理由と最終日を確認", description: "解雇理由・最終出勤日・通知の有無を書面で確認します。" },
      { title: "通知/支払いを確認", description: "NESの最低通知か、その分の支払いがあるか確認します。" },
      { title: "Final Payを確認", description: "賃金・未消化有給・差引きの妥当性をPayslipで確認します。" },
      { title: "納得できなければ相談", description: "不当解雇はFair Work Commission（21日以内）、未払いはFair Workへ。" },
    ],
    tips: [
      "不当解雇の申立ては期限が21日と短いです。疑問があれば早めに動きましょう。",
      "解雇の経緯・やり取りは記録・保存を。相談時の重要な証拠になります。",
      "最終給与の未払いはFair Work Ombudsmanに無料で相談できます。",
    ],
    warnings: [
      "不当解雇（Unfair Dismissal）の申立て期限は原則21日以内です。過ぎると原則受理されません。",
    ],
    faqs: [
      {
        question: "カジュアルでも不当解雇を申し立てられますか？",
        answer:
          "規則的・継続的に働いていた等の条件を満たす場合、カジュアルでも申立ての対象になり得ます。最低勤続期間などの要件があるため、解雇日から21日以内にFair Work Commissionで自分が対象か早めに確認しましょう。",
      },
    ],
    sources: [
      { label: "Fair Work Ombudsman（公式）", url: "https://www.fairwork.gov.au/" },
      { label: "Fair Work Commission（公式）", url: "https://www.fwc.gov.au/" },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "Fair Work Ombudsman｜Dismissal（Notice・最低通知期間）",
        url: "https://www.fairwork.gov.au/ending-employment/dismissal",
        accessedAt: "2026-07-18",
      },
      {
        label: "Fair Work Commission｜Unfair dismissal",
        url: "https://www.fwc.gov.au/issues-we-help/unfair-dismissal",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["working-rights", "resignation-notice", "underpayment-unpaid-wages", "workplace-bullying-harassment", "payslip-guide"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a151",
    title: "レストラン・カフェの仕事ガイド｜職種・英語・時給の見方",
    slug: "hospitality-jobs-guide",
    category: "jobs",
    priority: "P1",
    searchIntent: "レストラン・カフェの仕事",
    description:
      "ワーホリに人気のホスピタリティ（飲食）の職種の違い、必要な資格、時給の見方、応募のコツを、英語が不安な人向けにも解説します。",
    content: [
      "結論から言うと、ホスピタリティ（飲食）の仕事は、接客の英語が必要な『FOH（Front of House）』と、英語が少なめでも始めやすい『Kitchen（キッチン）』に大きく分かれます。英語に自信がなければKitchen HandやDishwasherから入り、慣れたらウェイター・バリスタへ広げるのが定番ルートです。",
      "主な職種は、FOHがWaiter/Waitress（接客・オーダー）、Barista（コーヒー）、Bar/Bartender（酒類提供）、Host（案内）。BOH（Back of House）がKitchen Hand（仕込み・洗い場補助）、Dishwasher（皿洗い）、Cook/Chef（調理）です。Kitchen HandとDishwasherは未経験・英語初級から始めやすく、渡航直後の最初の仕事として人気です。",
      "資格の面では、アルコールを提供する店で働くにはRSA（Responsible Service of Alcohol）が必要で、州ごとに取得します。食品を扱う店ではFood Safety（食品衛生）の知識や、州・役職によってFood Safety Supervisorの資格が求められることがあります。RSAを持っていると応募できる求人が一気に増えます。",
      "時給は適用されるHospitality Award（またはRestaurant Award）に基づき、カジュアルには手当、土日・祝日・夜間には割増（Penalty Rate）が付きます。自分の正しい時給は、Fair WorkのPay Calculatorで職種・雇用形態・時間帯を入れて確認しましょう。『全部込みの固定時給』が割増を下回っていれば違法の可能性があります。",
      "応募は、SEEK/Indeedに加え、印刷したレジュメを店に直接配るWalk-inが有効です。採用は短い面接＋実技トライアルで決まることが多く、笑顔・時間厳守・テキパキ動く姿勢が重視されます。トライアルが無給として妥当な範囲かも意識しておきましょう。",
    ],
    keyFacts: [
      { label: "始めやすい職種", value: "Kitchen Hand・Dishwasher（英語初級OK）" },
      { label: "接客系", value: "Waiter・Barista・Bartender（英語＋RSA）" },
      { label: "必要資格", value: "酒類提供はRSA／食品はFood Safetyの場合あり" },
      { label: "時給の確認", value: "Hospitality AwardをPay Calculatorで確認" },
    ],
    steps: [
      { title: "職種を選ぶ", description: "英語レベルに合わせFOH/BOHの職種を選びます。" },
      { title: "資格を用意", description: "酒類を扱うならRSAを取得。応募の幅が広がります。" },
      { title: "応募・Walk-in", description: "求人サイトとレジュメ手渡しを併用します。" },
      { title: "トライアルに臨む", description: "笑顔・時間厳守で実技トライアルに臨み、時給を確認します。" },
    ],
    tips: [
      "英語が不安ならKitchen Hand・Dishwasherから。数週間で耳が慣れてきます。",
      "RSA・バリスタ経験はレジュメに明記。採用に直結します。",
      "土日・夜のシフトは割増が付きやすく稼ぎやすい時間帯です。",
    ],
    faqs: [
      {
        question: "経験がなくても飲食で働けますか？",
        answer:
          "はい。Kitchen HandやDishwasherは未経験から始める人が大半です。レジュメに『available immediately』『hardworking』と書き、Walk-inで直接アピールすると採用されやすいです。慣れたら接客系にステップアップできます。",
      },
    ],
    sources: [
      { label: "Fair Work Ombudsman（公式）", url: "https://www.fairwork.gov.au/" },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "Fair Work Ombudsman｜Hospitality industry",
        url: "https://www.fairwork.gov.au/find-help-for/fast-food-restaurants-cafes",
        accessedAt: "2026-07-18",
      },
      {
        label: "Fair Work Ombudsman｜Pay Calculator",
        url: "https://www.fairwork.gov.au/pay-and-wages/pay-calculator",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["barista-job-guide", "rsa-state-guide", "walk-in-resume", "hospitality-english", "award-rates-penalty-rates"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a152",
    title: "バリスタの仕事を取る方法｜必要スキルとトライアル",
    slug: "barista-job-guide",
    category: "jobs",
    priority: "P2",
    searchIntent: "バリスタの仕事の取り方",
    description:
      "コーヒー文化が根付くオーストラリアでバリスタの仕事を取る方法。必要スキル、コーヒー用語、経験の作り方、トライアル対策を解説します。",
    content: [
      "結論から言うと、オーストラリアでバリスタの仕事を取るには、エスプレッソマシンでの抽出とミルクスチーム（ラテアート含む）の基礎スキル、そして『どのマシンを使えるか』を具体的に伝えられることが鍵です。カフェ文化が非常に発達しているため要求水準は高めですが、経験を積めば時給・シフトともに安定した人気職です。",
      "求められるスキルは、エスプレッソの抽出調整、フラットホワイト・ラテ・カプチーノなど定番の作り分け、ミルクのスチーミングとラテアート、そして忙しい時間帯をさばくスピードです。オーストラリア特有のメニュー（Flat White、Long Black、Piccolo、Magic等）の名前と作り方を覚えておくと有利です。",
      "未経験から狙う場合は、まずKitchen HandやカフェのFOHで働きながら店のマシンに触れさせてもらう、バリスタコースを受けて基礎を作る、自宅やシェアで練習する、といった形で経験を積みます。ただしコースは『経験の代わり』にはなりにくく、実店舗での経験が最も評価されます。",
      "応募は、レジュメに使えるマシン名（例：La Marzocco、多くのグループヘッド）や1時間あたりの提供杯数、これまでのカフェ経験を具体的に書き、Walk-inで直接アピールするのが効果的です。採用はほぼ確実に実技トライアルがあり、実際にコーヒーを作って評価されます。",
      "酒類も出すカフェ・バーではRSAが必要になることがあります。トライアルが無給として妥当な範囲か（スキル実演の短時間か）も意識し、長時間の実務をさせられる場合は支払いを確認しましょう。",
    ],
    keyFacts: [
      { label: "必須スキル", value: "抽出調整・ミルクスチーム・スピード" },
      { label: "豪州メニュー", value: "Flat White・Long Black・Piccolo等を把握" },
      { label: "評価されるもの", value: "実店舗経験＞コース。使えるマシン名を明記" },
      { label: "採用", value: "実技トライアルでコーヒーを作って評価" },
    ],
    steps: [
      { title: "基礎を作る", description: "カフェ勤務・練習・コースでマシン操作とミルクを習得します。" },
      { title: "レジュメを具体化", description: "使えるマシン・提供杯数・経験を数字で書きます。" },
      { title: "Walk-inで応募", description: "レジュメを直接配り、経験を口頭でも伝えます。" },
      { title: "トライアルで実演", description: "定番ドリンクを丁寧かつ手早く作り評価を受けます。" },
    ],
    tips: [
      "『How many coffees per hour can you make?』は定番質問。答えを用意しておきましょう。",
      "経験が浅いうちは、Kitchen Hand兼バリスタ見習いの形で入るのも近道です。",
      "コースは基礎習得には有効ですが、採用では実店舗経験が重視されます。",
    ],
    faqs: [
      {
        question: "バリスタコースを受ければ仕事は取れますか？",
        answer:
          "コースは基礎を学ぶのに役立ちますが、採用で最も評価されるのは実店舗での経験です。コース修了後も、まずは経験を積める店で働き、実績を作ってから人気カフェに応募するのが現実的です。",
      },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "Fair Work Ombudsman｜Pay Calculator（時給確認）",
        url: "https://www.fairwork.gov.au/pay-and-wages/pay-calculator",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["hospitality-jobs-guide", "barista-course-guide", "rsa-state-guide", "walk-in-resume", "unpaid-trial-rules"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a153",
    title: "ホテル・ハウスキーピングの仕事ガイド",
    slug: "hotel-housekeeping-jobs",
    category: "jobs",
    priority: "P1",
    searchIntent: "ホテル・ハウスキーピングの仕事",
    description:
      "英語が少なめでも始めやすいホテルのハウスキーピング（客室清掃）の仕事内容、体力・スピードの求められ方、応募先、時給の見方を解説します。",
    content: [
      "結論から言うと、ホテルのハウスキーピング（客室清掃）は、接客英語が少なくても始めやすく、観光地では求人が安定しているワーホリ向けの定番職です。ベッドメイキング・バスルーム清掃・アメニティ補充などを、決められた時間内で正確にこなす体力とスピードが求められます。",
      "仕事内容は、チェックアウト後の客室清掃（Departure）と滞在中の簡易清掃（Stayover）が中心です。ホテルによっては1部屋あたりの目安時間が決まっており、『1時間に何部屋』というペースが評価されます。英語は指示の理解と簡単な報告ができれば十分なことが多く、渡航直後の仕事として人気です。",
      "雇用形態は、ホテル直接雇用のカジュアルと、清掃を請け負うAgency（労働者派遣・コントラクター）経由の2通りがあります。Agency経由の場合、雇用主が誰か（派遣会社かホテルか）、時給が最低賃金・Awardを満たすか、Payslipが出るかを必ず確認しましょう。歩合的な『1部屋いくら』の契約は、実質時給が最低賃金を下回っていないか要注意です。",
      "時給は、直接雇用ならHospitality AwardやHotels等の関連Awardに基づき、カジュアル手当や土日割増が付きます。Fair WorkのPay Calculatorで確認し、Payslipと照合しましょう。ケアンズ・ゴールドコースト・観光地のリゾートホテルは特に求人が多い傾向です。",
      "応募は、SEEK/Indeed、清掃系のAgencyへの登録、ホテルへの直接問い合わせが有効です。体力仕事のため、腰痛予防の姿勢や無理のないペース配分も大切です。",
    ],
    keyFacts: [
      { label: "仕事内容", value: "客室清掃・ベッドメイク・バス清掃・補充" },
      { label: "英語", value: "指示理解と簡単な報告ができればOK" },
      { label: "雇用", value: "ホテル直接雇用 or 清掃Agency経由" },
      { label: "注意", value: "『1部屋いくら』が最低賃金を下回らないか確認" },
    ],
    steps: [
      { title: "求人を探す", description: "SEEK/Indeed・清掃Agency・ホテルへ直接応募します。" },
      { title: "雇用主を確認", description: "直接雇用か派遣か、時給とPayslipの有無を確認します。" },
      { title: "トライアル/研修", description: "清掃手順とペースを覚え、基準時間内を目指します。" },
      { title: "時給を照合", description: "Pay Calculatorで最低賃金・割増を確認しPayslipと照合します。" },
    ],
    tips: [
      "観光地（ケアンズ等）は求人が多め。ハイシーズン前が狙い目です。",
      "『1部屋いくら』の歩合は、実働時間で割った実質時給を必ず計算しましょう。",
      "腰を痛めやすい仕事です。持ち上げ方や休憩を意識して長く働きましょう。",
    ],
    warnings: [
      "Agency経由の歩合清掃で、実質時給が最低賃金を下回るケースがあります。時給換算で必ず確認を。",
    ],
    faqs: [
      {
        question: "英語が苦手でもハウスキーピングで働けますか？",
        answer:
          "働けます。接客が少なく、指示の理解と簡単な報告ができれば始められるため、渡航直後の仕事として人気です。慣れてきたらFOHや他の職種へステップアップする人も多いです。",
      },
    ],
    sources: [
      { label: "Fair Work Ombudsman（公式）", url: "https://www.fairwork.gov.au/" },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "Fair Work Ombudsman｜Pay Calculator",
        url: "https://www.fairwork.gov.au/pay-and-wages/pay-calculator",
        accessedAt: "2026-07-18",
      },
      {
        label: "Fair Work Ombudsman｜Labour hire",
        url: "https://www.fairwork.gov.au/find-help-for/labour-hire-and-supply-chains",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["cleaning-jobs-guide", "recruitment-agency-guide", "hospitality-jobs-guide", "award-rates-penalty-rates", "area-cairns"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a154",
    title: "クリーニングの仕事ガイド｜住宅・ホテル・商業施設",
    slug: "cleaning-jobs-guide",
    category: "jobs",
    priority: "P2",
    searchIntent: "クリーニングの仕事",
    description:
      "住宅・ホテル・オフィス・商業施設の清掃の仕事内容、雇用とABN案件の違い、時給と安全の注意点を解説します。",
    content: [
      "結論から言うと、清掃（Cleaning）の仕事は英語が少なめでも始めやすく求人も多い一方、『雇用（employee）』として働くのか『ABNの請負（contractor）』として働くのかで、賃金・保護・税金が大きく変わります。まずこの区別を理解することが、損をしないための第一歩です。",
      "清掃の主な分野は、住宅（Domestic/Airbnb清掃）、ホテル客室、オフィス・商業施設（早朝・夜間が多い）、引っ越し後のEnd of Lease Cleaning（退去清掃）などです。分野によって時間帯・体力・必要な道具が異なります。オフィス清掃は早朝や深夜のシフトが多く、割増が付く時間帯もあります。",
      "雇用形態の違いが重要です。employeeとして雇われる場合は最低賃金・割増・Super・労災の保護があり、Payslipが出ます。一方、『ABNを取って』と言われて請負契約にされる場合、実態が雇用なのにABNを強制されるSham Contracting（偽装請負）の可能性があり、違法になり得ます。実態が雇用かどうかはContractorとEmployeeの違いで判断します。",
      "時給は、雇用ならCleaning Services Award等に基づき、Pay Calculatorで確認できます。ABN請負の『1件いくら』は、道具・移動・保険・税金・Superを自己負担するぶん、時給換算で割に合わないことがあります。歩合の実質時給を必ず計算しましょう。",
      "安全面では、洗剤・薬品の取り扱い（換気・手袋）、滑りやすい床、重い機材の扱いに注意が必要です。応募は求人サイト、清掃Agency、Facebook求人が中心です。",
    ],
    keyFacts: [
      { label: "分野", value: "住宅/Airbnb・ホテル・オフィス・退去清掃" },
      { label: "最重要", value: "雇用(employee)かABN請負(contractor)かの区別" },
      { label: "雇用の保護", value: "最低賃金・割増・Super・労災・Payslip" },
      { label: "ABN請負", value: "道具・保険・税・Superを自己負担。時給換算で確認" },
    ],
    steps: [
      { title: "分野を選ぶ", description: "住宅・ホテル・オフィス等、時間帯と体力で選びます。" },
      { title: "雇用形態を確認", description: "employeeかABN請負か、保護と税負担の違いを確認します。" },
      { title: "時給を計算", description: "雇用はPay Calculator、歩合は実質時給を計算します。" },
      { title: "安全を確保", description: "薬品・機材の扱いに注意し、必要な保護具を使います。" },
    ],
    tips: [
      "『ABNを取って』と言われたら、実態が雇用でないか（Sham Contracting）を確認しましょう。",
      "オフィス清掃は早朝・深夜シフトが多く、割増が付く時間帯もあります。",
      "洗剤は種類を混ぜない・換気するなど、基本の安全を守りましょう。",
    ],
    warnings: [
      "実態は雇用なのにABNを強制する偽装請負（Sham Contracting）は違法の可能性があります。",
    ],
    faqs: [
      {
        question: "清掃の仕事でABNは必要ですか？",
        answer:
          "本当に独立した請負業者ならABNが必要ですが、指示・シフト・道具が雇用主に管理される実態なら、あなたは『employee』でありABNは不要です。安易にABN請負にされると保護と手取りを失うため、ContractorとEmployeeの違いを確認しましょう。",
      },
    ],
    sources: [
      { label: "Fair Work Ombudsman（公式）", url: "https://www.fairwork.gov.au/" },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "Fair Work Ombudsman｜Contract cleaning industry",
        url: "https://www.fairwork.gov.au/find-help-for/contract-cleaning",
        accessedAt: "2026-07-18",
      },
      {
        label: "Fair Work Ombudsman｜Independent contractors",
        url: "https://www.fairwork.gov.au/find-help-for/independent-contractors",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["hotel-housekeeping-jobs", "contractor-vs-employee", "cash-in-hand-jobs", "award-rates-penalty-rates", "abn-eligibility"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a155",
    title: "リテール・販売の仕事ガイド｜接客英語と応募方法",
    slug: "retail-jobs-guide",
    category: "jobs",
    priority: "P2",
    searchIntent: "リテール・販売の仕事",
    description:
      "スーパー・アパレル・土産物店などリテール（小売）の仕事内容、必要な接客英語、繁忙期採用、時給の見方を解説します。",
    content: [
      "結論から言うと、リテール（小売）の仕事は接客英語が必要なぶんハードルはやや高めですが、クリスマス商戦などの繁忙期には未経験でも採用されやすくなります。英語環境で働きたいワーホリのステップアップ先として人気です。",
      "職種は、レジ（Cashier/Checkout）、品出し・在庫（Stock/Merchandising）、接客販売（Sales Assistant）、土産物店やアパレルの店員などです。スーパー（Coles/Woolworths/ALDI）やショッピングセンター、観光地の土産物店が主な就労先です。土産物店は日本語が活きる場面もあります。",
      "必要な英語は、レジ会計、商品案内、簡単なクレーム対応など。完璧である必要はありませんが、FOH飲食より会話量は多めです。数字（金額）の聞き取りや『Would you like a bag?』などの定型表現に慣れておくと安心です。返品・支払い方法の対応も覚えると重宝されます。",
      "時給は、General Retail Award等に基づき、カジュアル手当や土日・夜間の割増が付きます。Fair WorkのPay Calculatorで確認し、Payslipと照合しましょう。オーストラリアでは日曜・祝日の割増が高めに設定されているのが一般的です。",
      "応募は、SEEK/Indeedのほか、店頭でレジュメを配るWalk-inや、企業の採用ページからの応募が有効です。11〜12月のクリスマス商戦期はCasualの大量採用があるため、10月頃から動くとチャンスが広がります。",
    ],
    keyFacts: [
      { label: "職種", value: "レジ・品出し・接客販売・土産物/アパレル店員" },
      { label: "英語", value: "会計・商品案内・簡単な対応（飲食FOHより多め）" },
      { label: "狙い目", value: "11〜12月のクリスマス商戦のCasual採用" },
      { label: "時給", value: "General Retail Award／日祝の割増が高め" },
    ],
    steps: [
      { title: "接客英語を準備", description: "会計・案内・返品対応の定型表現を練習します。" },
      { title: "求人に応募", description: "SEEK/Indeed・企業採用ページ・Walk-inで応募します。" },
      { title: "繁忙期を狙う", description: "10月頃からクリスマス商戦のCasual求人に応募します。" },
      { title: "時給を確認", description: "Pay Calculatorで割増を確認しPayslipと照合します。" },
    ],
    tips: [
      "土産物店・免税店は日本語が活きることがあり、応募時にアピールしましょう。",
      "クリスマス採用は短期でも、実績とReferenceを作る好機です。",
      "金額の英語（聞き取り）に不安があれば、数字の練習をしておくと安心です。",
    ],
    faqs: [
      {
        question: "英語初級でもリテールで働けますか？",
        answer:
          "接客量が多いため飲食のキッチンよりハードルは上がりますが、繁忙期のレジ・品出しなら未経験・英語初級でも採用されることがあります。定型フレーズを覚え、まずは短期のクリスマス採用から挑戦するのがおすすめです。",
      },
    ],
    sources: [
      { label: "Fair Work Ombudsman（公式）", url: "https://www.fairwork.gov.au/" },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "Fair Work Ombudsman｜Pay Calculator（Retail）",
        url: "https://www.fairwork.gov.au/pay-and-wages/pay-calculator",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["jobs-guide", "walk-in-resume", "workplace-english", "award-rates-penalty-rates", "supermarket-comparison"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a156",
    title: "倉庫・ピッキング・フォークリフトの仕事ガイド",
    slug: "warehouse-jobs-guide",
    category: "jobs",
    priority: "P1",
    searchIntent: "倉庫・ピッキングの仕事",
    description:
      "英語が少なめでも稼ぎやすい倉庫（Warehouse）の仕事内容、Agency経由の探し方、シフト、必要な安全装備・資格を解説します。",
    content: [
      "結論から言うと、倉庫（Warehouse）の仕事は接客英語がほぼ不要で、体力があればコツコツ稼げるワーホリ向けの定番職です。多くはAgency（人材派遣会社）に登録してシフトを紹介してもらう形で、ピッキング・梱包・仕分け・入出荷などを担当します。",
      "主な作業は、注文品を棚から集めるPicking、梱包するPacking、仕分けのSorting、荷物の積み下ろしLoading、そしてフォークリフト運転です。Amazon等の大型物流倉庫や食品・EC倉庫が主な就労先で、繁忙期（クリスマス前など）は大量採用があります。立ちっぱなし・歩き回る体力仕事です。",
      "多くの倉庫求人はLabour Hire（人材派遣）Agency経由です。Agencyに登録すると、シフトが空いた倉庫に派遣されます。この場合の雇用主はAgencyで、時給・Payslip・Superもagencyから支払われます。登録時に時給が最低賃金・Awardを満たすか、Payslipが出るかを確認しましょう。",
      "資格・装備の面では、フォークリフトを運転するにはHigh Risk Work Licence（クラスLF）が必要です。倉庫によっては安全靴（steel cap boots）や高視認ベスト（hi-vis）の持参が求められます。フォークリフト免許があると応募できる求人と時給が上がるため、倉庫で長く働くなら取得を検討する価値があります。",
      "時給は関連Award（Storage Services等）に基づき、Pay Calculatorで確認できます。夜勤・早朝は割増が付くことがあります。応募は倉庫系Agencyへの登録、SEEK/Indeedが中心です。",
    ],
    keyFacts: [
      { label: "作業", value: "Picking・Packing・仕分け・積み下ろし・フォークリフト" },
      { label: "探し方", value: "Labour Hire（派遣）Agency登録が中心" },
      { label: "資格", value: "フォークリフトはHigh Risk Work Licence(LF)" },
      { label: "装備", value: "安全靴・hi-visベストが必要な場合あり" },
    ],
    steps: [
      { title: "Agencyに登録", description: "倉庫系の人材派遣会社に登録しシフトを紹介してもらいます。" },
      { title: "装備を準備", description: "安全靴・hi-visベストなど求められる装備を用意します。" },
      { title: "資格を検討", description: "長く働くならフォークリフト免許(LF)取得を検討します。" },
      { title: "条件を確認", description: "雇用主(Agency)・時給・Payslip・割増を確認します。" },
    ],
    tips: [
      "繁忙期（クリスマス前）は大量採用のチャンス。早めにAgency登録を。",
      "フォークリフト免許は応募先と時給を広げます。倉庫志望なら有力な投資。",
      "派遣はシフトが不安定なことも。複数Agencyに登録すると安定します。",
    ],
    faqs: [
      {
        question: "倉庫の仕事は英語ができなくても大丈夫ですか？",
        answer:
          "接客がなく、作業指示の理解と簡単なやり取りができれば働けるため、英語が不安な人にも人気です。ただし安全指示は正確に理解する必要があります。分からなければ遠慮なく確認しましょう。",
      },
    ],
    sources: [
      { label: "Fair Work Ombudsman（公式）", url: "https://www.fairwork.gov.au/" },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "Fair Work Ombudsman｜Labour hire and supply chains",
        url: "https://www.fairwork.gov.au/find-help-for/labour-hire-and-supply-chains",
        accessedAt: "2026-07-18",
      },
      {
        label: "Safe Work Australia｜High risk work licences",
        url: "https://www.safeworkaustralia.gov.au/safety-topic/managing-health-and-safety/licensing-and-registrations/high-risk-work-licences",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["recruitment-agency-guide", "forklift-licence-guide", "award-rates-penalty-rates", "jobs-guide", "cash-in-hand-jobs"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a157",
    title: "建設現場の仕事ガイド｜White Card・PPE・求人",
    slug: "construction-jobs-guide",
    category: "jobs",
    priority: "P1",
    searchIntent: "建設現場の仕事",
    description:
      "建設現場（Construction）で働くための必須資格White Card、Labourer（作業補助）の始め方、PPE（安全装備）、求人の探し方を解説します。",
    content: [
      "結論から言うと、オーストラリアの建設現場で働くには、まずWhite Card（建設業の安全教育修了証）が全国的に必須です。これがないと現場に入れません。White Cardを取得したうえで、まずはLabourer（作業補助）として入るのが未経験ワーホリの定番ルートで、時給が高めなのが魅力です。",
      "White Cardは、建設業の一般安全教育（General Construction Induction）を修了すると発行される、全国で通用するカードです。認定を受けたRTO（研修機関）で講習を受けて取得します。オンラインで完結できるかは州によって扱いが異なるため、働く州のルールを確認しましょう。",
      "未経験から入りやすいのはLabourer（レイバー、作業補助）で、資材運び・清掃・簡単な補助作業を担当します。慣れると特定の技能（型枠・鉄筋・解体など）に進む人もいます。体力仕事で朝が早いですが、時給は他の未経験職より高めに設定されていることが多いです。",
      "PPE（Personal Protective Equipment＝個人用保護具）として、安全靴（steel cap boots）、hi-visの作業着、ヘルメット（hard hat）、手袋、保護メガネなどが求められます。現場によって支給か持参かが異なるため、事前に確認しましょう。屋外作業が多く、熱中症・紫外線対策も欠かせません。",
      "求人は、建設系のLabour Hire（人材派遣）Agencyへの登録、SEEK/Indeed、現場での紹介が中心です。雇用形態（雇用かABN請負か）と時給が最低賃金・Awardを満たすかを確認し、実態が雇用なのにABNを強制されるSham Contractingに注意しましょう。なお、州や作業内容によっては建設業がセカンドビザのSpecified Workの対象になる場合があります。",
    ],
    keyFacts: [
      { label: "必須資格", value: "White Card（全国必須。ないと現場不可）" },
      { label: "入りやすい職", value: "Labourer（作業補助）。時給高め" },
      { label: "PPE", value: "安全靴・hi-vis・ヘルメット・手袋等" },
      { label: "探し方", value: "建設系Labour Hire Agency・SEEK/Indeed" },
    ],
    steps: [
      { title: "White Cardを取得", description: "認定RTOで一般安全教育を受け、White Cardを取得します。" },
      { title: "PPEを用意", description: "安全靴・hi-vis等、求められる保護具を準備します。" },
      { title: "Agencyに登録/応募", description: "建設系派遣に登録、またはSEEK/Indeedで応募します。" },
      { title: "条件を確認", description: "雇用形態・時給・割増を確認し、偽装請負に注意します。" },
    ],
    tips: [
      "White Cardは建設で働く前提の資格。取得しておくと応募の幅が一気に広がります。",
      "屋外・高温の現場が多いです。熱中症・日焼け対策を万全に。",
      "『ABNで』と言われたら実態が雇用でないか確認を（Sham Contracting）。",
    ],
    warnings: [
      "White Cardなしで建設現場に入ることはできません。取得前提で計画しましょう。",
    ],
    faqs: [
      {
        question: "未経験でも建設の仕事に就けますか？",
        answer:
          "はい。White Cardを取得すれば、Labourer（作業補助）として未経験から始められます。資材運びや清掃など補助作業からスタートし、体力とやる気があれば採用されやすい職種です。",
      },
    ],
    sources: [
      { label: "Fair Work Ombudsman（公式）", url: "https://www.fairwork.gov.au/" },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "Fair Work Ombudsman｜Building and construction industry",
        url: "https://www.fairwork.gov.au/find-help-for/building-and-construction-sector",
        accessedAt: "2026-07-18",
      },
      {
        label: "Safe Work Australia｜General construction induction training",
        url: "https://www.safeworkaustralia.gov.au/safety-topic/industry-and-business/building-and-construction",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["white-card-guide", "recruitment-agency-guide", "contractor-vs-employee", "construction-specified-work", "farm-heat-sun-safety"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a158",
    title: "オフィス・事務職を探す方法｜英語・PCスキル・派遣会社",
    slug: "office-admin-jobs-guide",
    category: "jobs",
    priority: "P2",
    searchIntent: "オフィス・事務職の探し方",
    description:
      "ワーホリでオフィス・事務（Admin/Reception）の仕事を探す方法。必要な英語・PCスキル、短期契約や派遣（Temp）の活用、応募のコツを解説します。",
    content: [
      "結論から言うと、ワーホリでオフィス・事務職（Admin/Reception/Data Entry）を得るのは、ビジネスレベルの英語が要るためハードルが高めですが、派遣会社（Recruitment Agency）に登録して短期・臨時（Temp）の案件から入るのが現実的なルートです。同一雇用主6か月制限があるため、短期契約は相性が良い働き方です。",
      "求められるのは、電話・メール対応ができるビジネス英語、Word/Excel等の基本PCスキル、そして事務経験です。職種は、Reception（受付・電話）、Administration Assistant（庶務）、Data Entry（データ入力）、Customer Service（問い合わせ対応）などです。日本での事務経験は、英語で説明できればアピールになります。",
      "探し方は、事務系に強い派遣会社（Hays、Michael Page、Randstad等の大手や地域の派遣会社）への登録が中心です。登録すると、企業の欠員や繁忙期のTemp案件を紹介してもらえます。SEEK/Indeedでも『casual』『temp』『reception』などで検索できます。LinkedInのプロフィール整備も有効です。",
      "英文レジュメは、PCスキル（Excelの関数、使用ソフト）、事務経験、英語レベルを具体的に書き、必要ならカバーレターを添えます。ビザ種別と就労可能期間を明記すると、短期案件で採用されやすくなります。Reference（推薦者）を用意できると強みになります。",
      "時給は事務系Award（Clerks Award等）に基づき、Temp派遣でも最低賃金・割増・Superは保障されます。雇用主（派遣会社）とPayslipを確認しましょう。英語に不安がある間は、他の職種で経験と英語力を積んでから挑戦するのも一つの戦略です。",
    ],
    keyFacts: [
      { label: "必要スキル", value: "ビジネス英語・PC（Word/Excel）・事務経験" },
      { label: "探し方", value: "事務系派遣会社への登録＋SEEK/Indeed" },
      { label: "働き方", value: "短期・臨時（Temp）が現実的。6か月制限と相性良" },
      { label: "時給", value: "Clerks Award等／派遣でもSuper・割増あり" },
    ],
    steps: [
      { title: "レジュメを整える", description: "PCスキル・事務経験・英語レベル・在豪期間を明記します。" },
      { title: "派遣会社に登録", description: "事務系Agencyに登録しTemp案件を紹介してもらいます。" },
      { title: "求人に応募", description: "SEEK/Indeedで casual/temp/reception を検索し応募します。" },
      { title: "面接・就業", description: "面接に臨み、雇用主・時給・Payslipを確認して働きます。" },
    ],
    tips: [
      "同一雇用主6か月制限があるため、短期Temp案件はワーホリと相性が良いです。",
      "Excelの具体的スキル（VLOOKUP等）を書くと採用担当に伝わりやすいです。",
      "英語に不安なら、まず他職種で英語力と実績を積んでから挑戦するのも手です。",
    ],
    faqs: [
      {
        question: "英語がネイティブでなくても事務職に就けますか？",
        answer:
          "電話・メール対応ができるビジネス英語が前提になるため、他の職種よりハードルは高めです。ただしData Entryやバックオフィス寄りの業務なら会話量が少なめの案件もあります。派遣会社に登録し、自分の英語レベルに合う案件を紹介してもらいましょう。",
      },
    ],
    sources: [
      { label: "Fair Work Ombudsman（公式）", url: "https://www.fairwork.gov.au/" },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "Fair Work Ombudsman｜Pay Calculator（Clerks等）",
        url: "https://www.fairwork.gov.au/pay-and-wages/pay-calculator",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["recruitment-agency-guide", "it-jobs-working-holiday", "visa-six-month-work-limitation", "workplace-english", "cover-letter-guide"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a159",
    title: "ワーホリでIT職を探す方法｜英文職務経歴・LinkedIn・契約形態",
    slug: "it-jobs-working-holiday",
    category: "jobs",
    priority: "P1",
    searchIntent: "ワーホリでIT職を探す",
    description:
      "IT経験者がワーホリ中にローカルのIT・Web案件を探す方法。英文レジュメ、LinkedIn、契約形態（雇用・派遣・ABN）と6か月制限の考え方を解説します。",
    content: [
      "結論から言うと、IT経験のあるワーホリがローカルのIT・Web職を得るには、①英文の職務経歴（レジュメ／CV）とLinkedInを整える②IT系の派遣会社（recruitment agency）に登録する③短期契約（contract）やカジュアルを軸に探す、という進め方が現実的です。同一雇用主6か月制限があるため、プロジェクト単位の契約と相性が良いのが特徴です。",
      "英文レジュメ（テック業界ではCVとも）は、技術スタック（言語・フレームワーク・クラウド）、担当プロジェクトと成果、役割を具体的に書きます。日本での実務経験は、英語で明確に説明できれば十分な武器になります。GitHubやポートフォリオのURLを載せると説得力が増します。",
      "LinkedInはオーストラリアのIT採用で非常に重要です。プロフィールを英語で整え、『Open to work』を設定し、現地のリクルーターとつながると、契約案件の声がかかりやすくなります。IT特化の派遣会社（Hays Technology等の大手や専門エージェント）に登録すると、非公開のcontract案件を紹介してもらえます。",
      "契約形態は複数あります。企業に雇用される（employee）、派遣会社経由で働く、あるいはABNを取ってcontractorとして請け負う形です。ABN請負は税・Super・保険を自己負担し、実態が雇用ならSham Contractingの問題も。ContractorとEmployeeの違いを理解し、自分に合う形を選びましょう。ビザ種別と就労可能期間は最初に伝えるのが誠実です。",
      "6か月制限があるため、長期の正社員より、数か月のプロジェクト契約やカジュアルが現実的です。英語での技術面接に備え、頻出質問や自己紹介を準備しておきましょう。渡航前からLinkedInと英文CVを整えておくと、到着後の動き出しが早くなります。",
    ],
    keyFacts: [
      { label: "整えるもの", value: "英文CV・LinkedIn・GitHub/ポートフォリオ" },
      { label: "探し方", value: "IT特化の派遣会社登録＋LinkedIn＋SEEK" },
      { label: "働き方", value: "短期contract・カジュアルが6か月制限と好相性" },
      { label: "契約形態", value: "雇用・派遣・ABN請負（Sham Contractingに注意）" },
    ],
    steps: [
      { title: "英文CVを作る", description: "技術スタック・成果・役割を具体的に英語で書きます。" },
      { title: "LinkedInを整える", description: "英語プロフィール＋Open to workでリクルーターと接続します。" },
      { title: "IT派遣に登録", description: "IT特化のエージェントに登録し契約案件を紹介してもらいます。" },
      { title: "契約形態を確認", description: "雇用/派遣/ABNの違いと税・Super・6か月制限を確認します。" },
    ],
    tips: [
      "渡航前からLinkedIn・英文CVを整えておくと、到着後すぐ動けます。",
      "6か月制限があるため、正社員より短期contract案件が現実的です。",
      "ABN請負を打診されたら、税・Super・保険の自己負担と偽装請負リスクを確認しましょう。",
    ],
    faqs: [
      {
        question: "ワーホリでもIT職に就けますか？",
        answer:
          "実務経験と英語での意思疎通ができれば可能です。ただし6か月制限があるため、長期正社員より数か月のプロジェクト契約やカジュアルが中心になります。LinkedInとIT特化の派遣会社を活用するのが近道です。",
      },
    ],
    sources: [
      { label: "Fair Work Ombudsman（公式）", url: "https://www.fairwork.gov.au/" },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "Fair Work Ombudsman｜Independent contractors",
        url: "https://www.fairwork.gov.au/find-help-for/independent-contractors",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["office-admin-jobs-guide", "recruitment-agency-guide", "contractor-vs-employee", "visa-six-month-work-limitation", "freelance-it-australia"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a160",
    title: "人材紹介・派遣会社の使い方｜登録からシフトまで",
    slug: "recruitment-agency-guide",
    category: "jobs",
    priority: "P1",
    searchIntent: "人材紹介・派遣会社の使い方",
    description:
      "倉庫・事務・ホスピタリティなどで使うRecruitment Agency（人材紹介・派遣会社）の登録手順、雇用主が誰か、時給とPayslipの確認ポイントを解説します。",
    content: [
      "結論から言うと、Recruitment Agency（人材紹介・派遣会社、Labour Hireとも）は、登録するとシフトや求人を紹介してくれる仕組みで、倉庫・事務・ホスピタリティ・清掃・建設などワーホリの就労で広く使われます。特にTemp（臨時派遣）では、雇用主が『派遣会社』になる点を理解しておくことが重要です。",
      "使い方は、まず希望職種に強いAgencyを選んで登録します。登録では、レジュメ提出、面談、時に簡単なテスト（PC・体力等）があります。登録後、Agencyが企業の欠員や繁忙期の仕事を紹介し、あなたはAgency経由でシフトに入ります。複数のAgencyに登録すると、仕事の途切れを減らせます。",
      "Temp派遣で働く場合、時給・Payslip・Super・源泉徴収は原則としてAgency（派遣会社）から支払われます。つまり雇用主はAgencyです。登録時に、時給が最低賃金・Awardを満たすか、Payslipが出るか、Superが支払われるかを必ず確認しましょう。派遣先での指揮命令と、雇用主（Agency）の責任が分かれる点を押さえます。",
      "注意点として、悪質な業者では最低賃金割れ、Payslipなし、登録料の要求といった問題が起きることがあります。まっとうなAgencyが登録料を求めることはありません。求人紹介の名目で前払いを要求される場合は詐欺を疑いましょう。労働条件に問題があればFair Work Ombudsmanに相談できます。",
      "業種別には、倉庫・軽作業系、事務・オフィス系（Hays等）、ホスピタリティ系、建設系など、専門に分かれたAgencyがあります。自分の狙う職種に合ったAgencyを選ぶと紹介の精度が上がります。",
    ],
    keyFacts: [
      { label: "仕組み", value: "登録するとシフト・求人を紹介（Labour Hire）" },
      { label: "雇用主", value: "Temp派遣では派遣会社が雇用主" },
      { label: "確認事項", value: "時給・Payslip・Super・最低賃金/Award適合" },
      { label: "登録料", value: "正規のAgencyは登録料を取らない" },
    ],
    steps: [
      { title: "Agencyを選ぶ", description: "狙う職種に強い派遣・紹介会社を選びます。" },
      { title: "登録・面談", description: "レジュメ提出・面談・簡単なテストを受けます。" },
      { title: "紹介を受け就業", description: "紹介されたシフトに入り、雇用主(Agency)を確認します。" },
      { title: "条件を確認", description: "時給・Payslip・Superが適正か毎回確認します。" },
    ],
    tips: [
      "複数のAgencyに登録すると、仕事の空白期間を減らせます。",
      "登録料や前払いを要求する業者は詐欺の可能性大。応じないでください。",
      "派遣でも最低賃金・Super・割増は保障されます。Payslipで必ず確認を。",
    ],
    warnings: [
      "登録料・保証金を要求する『人材紹介』は詐欺の可能性が高いです。支払わないでください。",
    ],
    faqs: [
      {
        question: "派遣会社に登録するとお金がかかりますか？",
        answer:
          "正規の人材派遣・紹介会社に登録料はかかりません。求職者から登録料や紹介料を取るのは不自然で、詐欺の可能性があります。費用を請求されたら応じず、別のAgencyを探しましょう。",
      },
    ],
    sources: [
      { label: "Fair Work Ombudsman（公式）", url: "https://www.fairwork.gov.au/" },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "Fair Work Ombudsman｜Labour hire and supply chains",
        url: "https://www.fairwork.gov.au/find-help-for/labour-hire-and-supply-chains",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["warehouse-jobs-guide", "office-admin-jobs-guide", "hotel-housekeeping-jobs", "job-search-websites", "cash-in-hand-jobs"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a161",
    title: "RSA（責任あるアルコール提供）の取り方｜州別ガイド",
    slug: "rsa-state-guide",
    category: "jobs",
    hub: "qualifications",
    priority: "P1",
    searchIntent: "RSAの取り方",
    description:
      "バー・レストラン・ボトルショップで働くのに必須のRSA（Responsible Service of Alcohol）を、州ごとの取得方法・有効期限・費用の考え方とあわせて解説します。",
    content: [
      "結論から言うと、RSA（Responsible Service of Alcohol＝責任あるアルコール提供）は、アルコールを提供・販売する仕事に就くための必須資格で、取得方法・有効期限・扱いが州ごとに異なります。まず自分が働く州のRSAを取るのが基本です。飲食・バー・ボトルショップで働きたいなら最初に取っておくと応募の幅が大きく広がります。",
      "RSAは、認定された研修機関（RTO）のコースを受けて取得します。多くの州でオンライン受講が可能ですが、州によって発行元・様式・オンライン可否が異なります。特にNSW（ニューサウスウェールズ州）とVIC（ビクトリア州）では、対面要素やコンピテンシーカードの発行など独自の手続きがあるため、州の酒類規制当局の案内を必ず確認しましょう。",
      "州ごとの管轄の例として、NSWはLiquor & Gaming NSW、VICはVictorian Gambling and Casino Control Commission（VGCCC）系、QLD（クイーンズランド州）はOffice of Liquor and Gaming Regulation（OLGR）が所管です。州によってはRSAが全国的に相互承認されない場合があり、別の州で働くなら取り直しが必要なこともあります。",
      "有効期限も州で異なります。QLDのように有効期限のある州、更新（refresher）が必要な州などがあるため、取得時に有効期限と更新条件を確認しましょう。RSAはワーホリの間だけでなく、複数州を移動して働く人には特に『どの州のRSAが要るか』の把握が重要です。",
      "費用は数十ドル程度が目安で、オンラインコースなら1日程度で修了できることが多いです。修了後に発行される証明書やカードは、応募時にレジュメへ明記し、面接に持参できるよう準備しておきましょう。",
    ],
    keyFacts: [
      { label: "何の資格", value: "アルコール提供・販売に必須の資格" },
      { label: "取得方法", value: "認定RTOのコース（多くはオンライン可）" },
      { label: "州で違う", value: "発行元・様式・有効期限・相互承認が州ごとに異なる" },
      { label: "主な所管", value: "NSW: L&GNSW／VIC: VGCCC系／QLD: OLGR" },
    ],
    steps: [
      { title: "働く州を決める", description: "まず就労予定の州を確認します。RSAは州ごとに異なります。" },
      { title: "州のルールを確認", description: "州の酒類規制当局でオンライン可否・様式を確認します。" },
      { title: "認定コースを受講", description: "認定RTOのRSAコースを受け、修了証/カードを取得します。" },
      { title: "有効期限を管理", description: "有効期限・更新条件を確認し、応募時に提示します。" },
    ],
    tips: [
      "州をまたいで働く予定なら、その州で有効なRSAが要るか事前に確認を。",
      "NSW・VICは独自手続きがあります。州当局の案内に従いましょう。",
      "取得したらレジュメに明記。飲食・バー求人への応募が一気に広がります。",
    ],
    faqs: [
      {
        question: "RSAは全国どこでも使えますか？",
        answer:
          "州によって扱いが異なり、必ずしも全国共通ではありません。ある州で取得したRSAが別の州で通用しない場合があるため、移動して働くなら各州のルールを確認し、必要なら取り直しましょう。",
      },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "Liquor & Gaming NSW｜RSA",
        url: "https://www.liquorandgaming.nsw.gov.au/working-in-the-industry/training-to-work-in-the-industry/responsible-service-of-alcohol",
        accessedAt: "2026-07-18",
      },
      {
        label: "Business Queensland｜Responsible service of alcohol (OLGR)",
        url: "https://www.business.qld.gov.au/industries/hospitality-tourism-sport/liquor-gaming/liquor/training/rsa",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["rcg-rsa-gaming", "hospitality-jobs-guide", "barista-job-guide", "certifications", "food-safety-certificate"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a162",
    title: "White Card（建設業安全カード）の取り方",
    slug: "white-card-guide",
    category: "jobs",
    hub: "qualifications",
    priority: "P1",
    searchIntent: "White Cardの取り方",
    description:
      "建設現場で働くのに全国必須のWhite Card（一般安全教育修了証）の取得方法、オンライン受講の州別注意点、費用と有効性を解説します。",
    content: [
      "結論から言うと、White Cardは建設現場で働くために全国的に必須の資格で、これがないと現場に立ち入れません。建設業の一般安全教育（General Construction Induction Training）を認定RTO（研修機関）で修了すると発行され、原則として全国で通用します。建設・Labourerの仕事を狙うなら最初に取るべき資格です。",
      "取得は、認定を受けたRTOのコース（General Construction Induction、ユニット番号CPCWHS1001）を受講して行います。修了すると各州の発行様式のカード（通称White Card）が交付されます。一度取得すれば、原則として全国の州・準州で有効です。",
      "受講形式は州によって扱いが異なります。オンラインのみで完結できる州と、対面や監督付きの評価が必要な州があります。特にNSW（ニューサウスウェールズ州）などは、SafeWork NSWが認定したRTOでの対面要素を求めるなど独自のルールがあるため、働く州のWHS当局の案内を必ず確認しましょう。安易に『全部オンラインで即発行』とうたう業者には注意が必要です。",
      "費用は数十ドル程度が目安で、コース自体は半日〜1日で終わることが多いです。取得後は、実物のカードまたは暫定的な修了証を現場に持参できるようにしておきます。紛失時は発行RTOや州当局を通じて再発行を受けられます。",
      "White Cardは建設だけでなく、倉庫や一部の現場作業でも求められることがあります。取得しておくと応募できる仕事が広がるため、フィジカルな仕事を考えているワーホリには有力な投資です。",
    ],
    keyFacts: [
      { label: "何の資格", value: "建設現場入場に全国必須の安全教育修了証" },
      { label: "取得方法", value: "認定RTOで一般安全教育(CPCWHS1001)を修了" },
      { label: "有効性", value: "原則として全国で通用" },
      { label: "注意", value: "オンライン可否は州で異なる（NSW等は独自ルール）" },
    ],
    steps: [
      { title: "働く州を確認", description: "州のWHS当局で受講形式(オンライン/対面)を確認します。" },
      { title: "認定RTOを選ぶ", description: "州が認定したRTOのコースを選びます。" },
      { title: "コースを修了", description: "一般安全教育を受講し、White Cardを取得します。" },
      { title: "現場に持参", description: "カード/修了証を用意し、応募・就業時に提示します。" },
    ],
    tips: [
      "『全部オンラインで即発行』の業者は州ルールに合わないことも。当局認定を確認。",
      "建設だけでなく倉庫等でも求められることがあり、持っていると有利です。",
      "紛失に備え、カード番号や発行RTOの情報を控えておきましょう。",
    ],
    warnings: [
      "州のルールに適合しないWhite Cardは現場で認められない場合があります。認定RTOで取得を。",
    ],
    faqs: [
      {
        question: "White Cardは一度取れば全国で使えますか？",
        answer:
          "原則として全国で通用します。ただし取得時の受講形式（オンライン可否など）は州ごとに異なるため、認定RTOで正しく取得することが重要です。適切に取得したWhite Cardは他州の現場でも有効です。",
      },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "SafeWork NSW｜General construction induction (white card)",
        url: "https://www.safework.nsw.gov.au/licences-and-registrations/general-construction-induction-training",
        accessedAt: "2026-07-18",
      },
      {
        label: "Safe Work Australia｜Building and construction",
        url: "https://www.safeworkaustralia.gov.au/safety-topic/industry-and-business/building-and-construction",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["construction-jobs-guide", "warehouse-jobs-guide", "forklift-licence-guide", "certifications", "first-aid-cpr-guide"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a163",
    title: "食品衛生（Food Safety）資格の取り方と必要な場面",
    slug: "food-safety-certificate",
    category: "jobs",
    hub: "qualifications",
    priority: "P2",
    searchIntent: "食品衛生資格の取り方",
    description:
      "飲食で働く際のFood Safety（食品衛生）の知識とFood Safety Supervisor資格について、どんな場面で必要か、州・役職による違いを解説します。",
    content: [
      "結論から言うと、飲食店の一般スタッフに全国一律の『食品衛生資格が必須』というルートはありませんが、店には最低1名のFood Safety Supervisor（食品衛生監督者）が求められる州・業態が多く、あなたがその役割を担うなら資格取得が必要になります。まずは自分の州と役職で何が求められるかを確認しましょう。",
      "Food Safety Supervisor（FSS）は、食品を安全に扱う手順を監督する担当者で、多くの州・準州の食品事業者に配置が求められます。取得は、認定RTOのFood Safetyコース（該当ユニットを含む）を修了して行います。州によっては特定の証明（例：NSWのFood Safety Supervisor certificate）が必要で、扱う食品の種類（ハイリスク食品など）によっても要件が変わります。",
      "一般のKitchen Handやウェイターとして働くだけなら、資格そのものは不要なことが多いです。ただし基本的な食品衛生の知識（手洗い、温度管理、交差汚染の防止）は現場で必ず役立ち、雇用主が簡単な社内研修を課すこともあります。『Food Handler（食品取扱者）向けの基礎トレーニング』を受けておくと採用でプラスに働きます。",
      "州ごとに所管と要件が異なります。NSWはNSW Food Authority、他州もそれぞれの食品安全当局が制度を運用しています。カフェ・レストラン・持ち帰り店など業態によっても求められる範囲が違うため、働く場所・役割に応じて確認しましょう。",
      "費用は数十ドル程度、オンライン受講可能なコースも多くあります。Food Safety Supervisorの資格を持っていると、小規模店で重宝され採用に有利になることがあります。",
    ],
    keyFacts: [
      { label: "一般スタッフ", value: "全国一律の必須資格はないことが多い" },
      { label: "店の要件", value: "多くの州で店にFSS(監督者)1名以上が必要" },
      { label: "FSS取得", value: "認定RTOのFood Safetyコースを修了" },
      { label: "州で違う", value: "所管・様式・対象食品で要件が異なる" },
    ],
    steps: [
      { title: "役割を確認", description: "一般スタッフかFSS役割かで必要性が変わります。" },
      { title: "州の要件を確認", description: "州の食品安全当局で必要な証明・様式を確認します。" },
      { title: "コースを受講", description: "FSSが必要なら認定RTOのコースを修了します。" },
      { title: "証明を提示", description: "取得した証明をレジュメ・面接で提示します。" },
    ],
    tips: [
      "基礎のFood Handlerトレーニングは資格必須でなくても採用の好印象に。",
      "小規模店ではFSSを持つ人が重宝されます。長く飲食で働くなら検討を。",
      "州ごとに制度が違うため、必ず働く州の当局案内を確認しましょう。",
    ],
    faqs: [
      {
        question: "飲食で働くのに食品衛生資格は必ず要りますか？",
        answer:
          "一般のスタッフとして働くだけなら、全国一律の必須資格はないことが多いです。ただし店にはFood Safety Supervisorの配置が求められる州が多く、あなたがその役割なら取得が必要です。基礎知識はどの現場でも役立ちます。",
      },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "NSW Food Authority｜Food safety supervisors",
        url: "https://www.foodauthority.nsw.gov.au/retail/fss-food-safety-supervisors",
        accessedAt: "2026-07-18",
      },
      {
        label: "Food Standards Australia New Zealand｜Food safety",
        url: "https://www.foodstandards.gov.au/consumer/safety",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["rsa-state-guide", "hospitality-jobs-guide", "certifications", "barista-course-guide", "hospitality-english"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a164",
    title: "RCG/ゲーミング資格の取り方｜パブ・クラブで働く",
    slug: "rcg-rsa-gaming",
    category: "jobs",
    hub: "qualifications",
    priority: "P3",
    searchIntent: "RCG・ゲーミング資格",
    description:
      "ポーカーマシン等のあるパブ・クラブで働く際に必要になるRCG（Responsible Conduct of Gambling）等のゲーミング資格を、RSAとの違いとあわせて解説します。",
    content: [
      "結論から言うと、ポーカーマシン（pokies）やギャンブル設備のあるパブ・クラブで、ゲーミング関連の業務に関わる場合には、RSA（アルコール）に加えてRCG（Responsible Conduct of Gambling＝責任あるギャンブル提供）などのゲーミング資格が必要になることがあります。名称・要否は州によって異なります。",
      "RSAがアルコール提供の資格であるのに対し、RCGはギャンブル（gaming machines等）を扱う業務のための資格です。パブやクラブではアルコールとゲーミングの両方を扱うことが多く、担当業務によってはRSAとRCGの両方を求められます。呼称は州で異なり、NSWではRCG、他州では別名称や別制度のこともあります。",
      "取得は、州が認定したRTOのコースを受講して行います。RSAと同様に、州の酒類・ギャンブル規制当局（例：NSWのLiquor & Gaming NSW）が所管し、コンピテンシーカードや証明の発行、有効期限、更新の要否が州ごとに定められています。オンライン受講が可能な場合もありますが、州の様式に従う必要があります。",
      "ワーホリでこの資格が必要になるのは、pokiesのあるパブ・クラブでゲーミングエリアの業務に就く場合が中心です。純粋な接客・キッチンのみならRCGが不要なこともあるため、応募先で『どの業務にどの資格が要るか』を確認しましょう。まずはRSAを優先し、ゲーミング業務に関わる段階でRCGを検討するのが効率的です。",
      "費用・所要時間はRSAと同程度が目安です。取得した証明は、応募時にRSAとあわせて提示できるよう準備しておきましょう。",
    ],
    keyFacts: [
      { label: "何の資格", value: "ギャンブル設備を扱う業務の資格(RCG等)" },
      { label: "RSAとの違い", value: "RSA=酒／RCG=ギャンブル。両方要る場合あり" },
      { label: "所管", value: "州の酒類・ギャンブル規制当局(例:L&GNSW)" },
      { label: "州で違う", value: "名称・要否・有効期限が州ごとに異なる" },
    ],
    steps: [
      { title: "業務を確認", description: "ゲーミング業務に関わるか応募先で確認します。" },
      { title: "州の要件を確認", description: "州当局でRCG等の名称・要否・様式を確認します。" },
      { title: "コースを受講", description: "必要なら認定RTOのコースを受け証明を取得します。" },
      { title: "RSAと併せ提示", description: "RSAとRCGをまとめて応募時に提示します。" },
    ],
    tips: [
      "まずRSAを取り、ゲーミング業務に関わる段階でRCGを検討すると効率的です。",
      "州で名称・制度が異なります。NSWはRCG、他州は別扱いのことも。",
      "パブ・クラブでは担当業務ごとに必要資格が違います。応募先で確認を。",
    ],
    faqs: [
      {
        question: "RSAがあればパブで働けますか？",
        answer:
          "アルコール提供だけならRSAで足りることが多いですが、ポーカーマシン等のゲーミングエリアで働く場合はRCGなどのゲーミング資格を別途求められることがあります。担当業務に応じて必要な資格を確認しましょう。",
      },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "Liquor & Gaming NSW｜Responsible Conduct of Gambling (RCG)",
        url: "https://www.liquorandgaming.nsw.gov.au/working-in-the-industry/training-to-work-in-the-industry/responsible-conduct-of-gambling",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["rsa-state-guide", "hospitality-jobs-guide", "certifications", "food-safety-certificate", "barista-job-guide"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a165",
    title: "フォークリフト免許（High Risk Work Licence）の取り方",
    slug: "forklift-licence-guide",
    category: "jobs",
    hub: "qualifications",
    priority: "P2",
    searchIntent: "フォークリフト免許の取り方",
    description:
      "倉庫・物流で時給アップにつながるフォークリフト免許（High Risk Work Licence クラスLF）の取得手順、試験、費用、有効性を解説します。",
    content: [
      "結論から言うと、オーストラリアでフォークリフトを運転するには、High Risk Work Licence（高リスク作業ライセンス）のクラスLF（Forklift）が必要です。倉庫・物流で応募できる仕事と時給を上げてくれる実用的な資格で、倉庫系で長く働きたいワーホリには投資価値があります。",
      "取得の流れは、まず認定RTO（研修機関）でフォークリフトのトレーニングと評価（筆記＋実技）を受けます。評価に合格すると、RTOが評価通知（Notice of Assessment）を発行します。その後、期限内に州のWHS当局（例：SafeWork NSW、WorkSafe VIC等）にライセンスを申請し、身分証明を提示して発行を受けます。",
      "High Risk Work Licenceは、正しく取得すれば全国で通用します（相互承認）。クラスLFはカウンターバランス型フォークリフト用で、オーダーピッカー等は別クラス（LO）になります。倉庫で一般的なのはLFです。18歳以上であること、英語での安全指示の理解などが求められます。",
      "費用は、トレーニング＋評価とライセンス申請料を合わせて数百ドル規模が目安で、州や機関によって差があります。取得までに数日のコースを要することが多く、渡航後に倉庫で稼ぎたい人は早めに計画すると良いでしょう。ライセンスには有効期限があり、更新が必要です。",
      "免許取得後は、レジュメに『LF licence保有』と明記すると、フォークリフトオペレーター求人に直接応募でき、無資格のピッカーより高い時給が期待できます。派遣会社（Labour Hire）に登録する際もアピールになります。",
    ],
    keyFacts: [
      { label: "必要な免許", value: "High Risk Work Licence クラスLF(Forklift)" },
      { label: "取得の流れ", value: "認定RTOで訓練・評価→州当局へライセンス申請" },
      { label: "有効性", value: "正しく取得すれば全国で通用(相互承認)" },
      { label: "条件", value: "18歳以上・安全指示の理解／有効期限あり" },
    ],
    steps: [
      { title: "RTOで訓練", description: "認定RTOでフォークリフトの訓練を受けます。" },
      { title: "評価に合格", description: "筆記＋実技の評価に合格し評価通知を受け取ります。" },
      { title: "ライセンス申請", description: "期限内に州のWHS当局へ申請し発行を受けます。" },
      { title: "求人に応募", description: "LF保有をレジュメに明記し倉庫・派遣に応募します。" },
    ],
    tips: [
      "倉庫で一般的なのはLF。オーダーピッカーはLOで別免許です。",
      "全国で通用するため、州を移動しても使えます（有効期限に注意）。",
      "取得後は無資格ピッカーより高時給が狙えます。倉庫志望なら投資価値大。",
    ],
    faqs: [
      {
        question: "フォークリフト免許は他の州でも使えますか？",
        answer:
          "High Risk Work Licenceは全国で相互承認されるため、正しく取得すれば他の州・準州でも使えます。有効期限があり更新が必要なので、期限は管理しておきましょう。",
      },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "Safe Work Australia｜High risk work licences",
        url: "https://www.safeworkaustralia.gov.au/safety-topic/managing-health-and-safety/licensing-and-registrations/high-risk-work-licences",
        accessedAt: "2026-07-18",
      },
      {
        label: "SafeWork NSW｜High risk work licence",
        url: "https://www.safework.nsw.gov.au/licences-and-registrations/high-risk-work-licences",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["warehouse-jobs-guide", "white-card-guide", "recruitment-agency-guide", "certifications", "construction-jobs-guide"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a166",
    title: "応急手当・CPR資格の取り方｜First Aid / CPR",
    slug: "first-aid-cpr-guide",
    category: "jobs",
    hub: "qualifications",
    priority: "P2",
    searchIntent: "応急手当・CPR資格",
    description:
      "チャイルドケア・アウトドア・一部の職場で求められるFirst Aid（応急手当）とCPR（心肺蘇生）資格の取り方、ユニット番号、有効期限を解説します。",
    content: [
      "結論から言うと、First Aid（応急手当）とCPR（心肺蘇生）の資格は、チャイルドケア、アウトドア・ツアー、スポーツ、一部の飲食・現場仕事などで求められることがある実用的な資格です。認定RTO（研修機関）の1日程度のコースで取得でき、持っていると応募できる仕事の幅が広がります。",
      "資格には全国共通のユニット番号があります。応急手当はHLTAID011（Provide First Aid）、CPRはHLTAID009（Provide Cardiopulmonary Resuscitation）が一般的です。First Aidのコースには通常CPRの内容が含まれます。子ども向け（教育・保育）にはHLTAID012という別ユニットが求められることもあります。",
      "有効期限に注意が必要です。CPR（HLTAID009）はスキルの性質上おおむね1年ごとの更新が推奨され、First Aid（HLTAID011）はおおむね3年ごとの更新が目安とされます。雇用先によって『有効なCPR証明』を求められることがあるため、期限切れに注意しましょう。",
      "取得は、認定RTOの対面またはブレンド（オンライン＋対面実技）コースを受講します。CPRは実技評価があるため、完全オンラインのみで完結しないのが一般的です。修了すると全国で通用する証明（Statement of Attainment）が発行されます。費用は数十〜100ドル台が目安です。",
      "特にチャイルドケアやアウトドア系の仕事を狙うワーホリには有力な資格です。取得したらレジュメにユニット番号と有効期限を明記し、面接時に提示できるよう準備しておきましょう。",
    ],
    keyFacts: [
      { label: "資格", value: "First Aid(HLTAID011)・CPR(HLTAID009)" },
      { label: "求められる場面", value: "保育・アウトドア・スポーツ・一部の職場" },
      { label: "有効期限", value: "CPRは約1年、First Aidは約3年が目安" },
      { label: "取得", value: "認定RTOの対面/ブレンドコース(実技評価あり)" },
    ],
    steps: [
      { title: "必要な資格を確認", description: "職種で要るユニット(HLTAID011/009/012)を確認します。" },
      { title: "認定RTOで受講", description: "対面/ブレンドのコースを受け実技評価を受けます。" },
      { title: "証明を取得", description: "全国通用の修了証を受け取ります。" },
      { title: "期限を管理", description: "CPR約1年・First Aid約3年の更新を管理します。" },
    ],
    tips: [
      "CPRは有効期限が短め（約1年）。応募前に期限切れでないか確認を。",
      "保育を狙うならHLTAID012など子ども向けユニットが必要なことも。",
      "実技があるため完全オンラインでは取れません。対面日程を確保しましょう。",
    ],
    faqs: [
      {
        question: "First AidとCPRは別々に取る必要がありますか？",
        answer:
          "First Aidコース（HLTAID011）には通常CPR（HLTAID009）の内容が含まれます。ただしCPRは有効期限が短いため、First Aidの期限内でもCPRだけ単体で更新することがあります。職場が求める『有効なCPR』の要件を確認しましょう。",
      },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "training.gov.au｜HLTAID011 Provide First Aid",
        url: "https://training.gov.au/Training/Details/HLTAID011",
        accessedAt: "2026-07-18",
      },
      {
        label: "training.gov.au｜HLTAID009 Provide CPR",
        url: "https://training.gov.au/Training/Details/HLTAID009",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["certifications", "white-card-guide", "working-with-children-check", "hospitality-jobs-guide", "police-check-guide"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a167",
    title: "police-check（無犯罪証明）の取り方｜National Police Check",
    slug: "police-check-guide",
    category: "jobs",
    hub: "qualifications",
    priority: "P2",
    searchIntent: "police checkの取り方",
    description:
      "介護・チャイルドケア・一部の仕事で求められるNational Police Check（無犯罪証明・犯罪経歴証明）の取り方、費用、日数、日本の証明との違いを解説します。",
    content: [
      "結論から言うと、National Police Check（全国犯罪経歴チェック、無犯罪証明）は、介護・チャイルドケア・警備・一部の事務や現場仕事などで採用条件として求められることがある書類です。ACIC（Australian Criminal Intelligence Commission）に認定された機関、または各州警察・オンラインサービス経由で申請できます。",
      "取得は、ACICが認定したオンラインの提供事業者（Accredited Body）や、州・準州の警察、Australia Post経由などで申請します。氏名・生年月日・住所履歴などの本人情報と、100ポイントの本人確認書類（パスポート等）が必要です。多くはオンラインで完結し、結果はPDFや郵送で受け取れます。",
      "所要日数は、問題がなければ数日程度で発行されることが多いですが、同姓同名の照合などで数週間かかる場合もあります。採用で急ぎ必要になることがあるため、求められそうな職種を狙うなら早めに申請しておくと安心です。費用は用途（ボランティア/就労）や提供事業者で異なり、数十ドル程度が目安です。",
      "日本の『犯罪経歴証明書（警察発行）』とは別物で、豪州内での就労にはオーストラリアのNational Police Checkが求められます。用途によっては特定様式や、より踏み込んだチェック（後述のWorking with Children Check）が別途必要な場合があります。申請時に『どの用途か』を正しく選びましょう。",
      "取得した証明書には発行日があり、雇用主が『◯か月以内に発行されたもの』を求めることがあります。古くなったら再取得が必要な点に注意しましょう。",
    ],
    keyFacts: [
      { label: "何の書類", value: "全国犯罪経歴チェック(無犯罪証明)" },
      { label: "申請先", value: "ACIC認定機関・州警察・Australia Post等" },
      { label: "必要物", value: "本人確認書類(パスポート等)・住所履歴" },
      { label: "注意", value: "日本の証明とは別物／発行日の新しさを求められる" },
    ],
    steps: [
      { title: "用途を確認", description: "就労用など正しい用途を選んで申請します。" },
      { title: "認定機関で申請", description: "ACIC認定オンライン事業者や州警察で申請します。" },
      { title: "本人確認", description: "パスポート等で本人確認(100ポイント)を済ませます。" },
      { title: "証明を受領", description: "PDF/郵送で受け取り、応募先に提示します。" },
    ],
    tips: [
      "採用で急に必要になることも。求められそうな職種なら早めに申請を。",
      "発行日の新しさを求められることがあります。古くなったら再取得を。",
      "子ども関連の仕事はPolice Checkと別にWWCCが要ることが多いです。",
    ],
    faqs: [
      {
        question: "日本で取った無犯罪証明は使えますか？",
        answer:
          "豪州内での就労には、原則オーストラリアのNational Police Checkが求められます。日本の警察が発行する証明とは制度が異なるため、現地の認定機関を通じて取得しましょう。用途に応じて別のチェックが必要な場合もあります。",
      },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "Australian Criminal Intelligence Commission｜Nationally Coordinated Criminal History Check",
        url: "https://www.acic.gov.au/services/national-police-checking-service",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["working-with-children-check", "certifications", "first-aid-cpr-guide", "employment-types", "recruitment-agency-guide"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a168",
    title: "Working with Children Check（WWCC）の取り方",
    slug: "working-with-children-check",
    category: "jobs",
    hub: "qualifications",
    priority: "P3",
    searchIntent: "WWCCの取り方",
    description:
      "チャイルドケア・教育・子ども関連の仕事で必須のWorking with Children Check（WWCC）を、州ごとの制度・申請方法・有効期限とあわせて解説します。",
    content: [
      "結論から言うと、Working with Children Check（WWCC、子どもに関わる仕事の適格性チェック）は、チャイルドケア・学校・スポーツコーチ・子ども向けキャンプなど、子どもと関わる仕事に就くために必須の制度です。通常のPolice Checkとは別物で、州ごとに名称・申請方法・有効期限が異なります。",
      "WWCCは、応募者が子どもと関わる仕事に就くのに適格かを継続的に審査する仕組みで、犯罪歴などをチェックします。州ごとに運用が異なり、NSWではWorking with Children Check（Office of the Children's Guardianが所管）、QLDではBlue Card（Blue Card Services）と呼ばれるなど、名称も制度も別建てです。",
      "申請は、各州の所管当局のオンライン申請＋本人確認で行います。就労用（paid）とボランティア用で区分が分かれることが多く、就労用は費用がかかる一方、ボランティア用は無料または低額のことがあります。発行されるとカードや番号が交付され、雇用主がその番号で有効性を確認します。",
      "有効期限は州で異なりますが、数年単位（例：NSWは5年）で設定されることが一般的です。ワーホリの短期就労でも、子ども関連の仕事に就くなら取得が必須です。州をまたいで働く場合、WWCCは基本的に州単位のため、別の州で子ども関連の仕事をするなら、その州の制度で取り直しが必要になることがあります。",
      "取得までに時間がかかる場合があるため、チャイルドケアや子ども向けの仕事を狙うなら、早めに働く州の当局サイトから申請しましょう。First AidやPolice Checkと合わせて求められることも多いです。",
    ],
    keyFacts: [
      { label: "何の制度", value: "子どもに関わる仕事の適格性チェック(必須)" },
      { label: "Police Checkと別", value: "WWCCは別制度。子ども関連で追加的に必要" },
      { label: "州で違う", value: "NSW=WWCC、QLD=Blue Card等。名称・制度が別" },
      { label: "有効期限", value: "数年単位(例:NSWは5年)。州単位で管理" },
    ],
    steps: [
      { title: "働く州を確認", description: "州ごとに制度が違うため就労州を確認します。" },
      { title: "用途を選ぶ", description: "就労用/ボランティア用の区分を選びます。" },
      { title: "オンライン申請", description: "州当局で申請し本人確認を済ませます。" },
      { title: "番号を提示", description: "交付された番号/カードを雇用主に提示します。" },
    ],
    tips: [
      "発行に時間がかかることがあります。子ども関連職を狙うなら早めに申請を。",
      "州単位の制度です。別州で働くなら取り直しが必要なことがあります。",
      "First Aid・Police Checkと合わせて求められることが多いです。",
    ],
    faqs: [
      {
        question: "Police CheckがあればWWCCは不要ですか？",
        answer:
          "いいえ。WWCCはPolice Checkとは別の専用制度で、子どもと関わる仕事には原則WWCC（州によってはBlue Card等）が必須です。両方を求められることも多いため、子ども関連の仕事を狙うなら別途取得しましょう。",
      },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "NSW Office of the Children's Guardian｜Working with Children Check",
        url: "https://ocg.nsw.gov.au/working-children-check",
        accessedAt: "2026-07-18",
      },
      {
        label: "Blue Card Services (QLD)｜About the blue card",
        url: "https://www.qld.gov.au/law/laws-regulated-industries-and-accountability/queensland-laws-and-regulations/regulated-industries-and-licensing/blue-card",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["police-check-guide", "first-aid-cpr-guide", "certifications", "working-rights", "jobs-guide"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a169",
    title: "バリスタコースは受けるべき？費用と効果を検証",
    slug: "barista-course-guide",
    category: "jobs",
    hub: "qualifications",
    priority: "P2",
    searchIntent: "バリスタコースは必要か",
    description:
      "ワーホリで人気のバリスタコースについて、費用・学べること・採用への効果を検証し、受ける価値がある人・不要な人を整理します。",
    content: [
      "結論から言うと、バリスタコースは『コーヒーの基礎を短期間で体系的に学べる』点で価値がありますが、コースの修了証だけで人気カフェに採用されるわけではありません。オーストラリアの採用で最も重視されるのは実店舗での経験なので、コースは『経験を作るための入口』と位置づけるのが現実的です。",
      "バリスタコースで学べるのは、エスプレッソの抽出、グラインダーの調整、ミルクのスチーミングとラテアート、定番ドリンク（Flat White、Latte、Cappuccino等）の作り方、マシンの清掃・メンテナンスなどです。マシンに触った経験がまったくない人にとっては、短期間で基礎を身につけられる効率的な手段です。",
      "費用は、内容と時間によって幅がありますが、数十〜数百ドル程度が目安です。1日〜数日で完結する短期コースが多く、資格（Statement of Attainment）が出るものもあります。ただしこの修了は法的な必須資格ではなく、バリスタとして働くのに『コース修了が義務』というわけではありません。",
      "採用への効果は限定的です。多くのカフェは実技トライアルで実際にコーヒーを作らせて判断するため、コース修了より『どのマシンを、どれくらいのペースで扱えるか』という実践力が問われます。コースを受けても、その後に経験を積める店で働き、実績を作ることが結局は近道になります。",
      "受ける価値があるのは、マシン未経験でゼロから基礎を作りたい人、自信を持ってトライアルに臨みたい人です。一方、すでにカフェ経験がある人や、Kitchen Hand経由でマシンに触れられる環境がある人は、コースなしで直接経験を積む方が効率的なこともあります。自分の状況に合わせて判断しましょう。",
    ],
    keyFacts: [
      { label: "学べること", value: "抽出・ミルク・ラテアート・定番ドリンク・清掃" },
      { label: "費用", value: "数十〜数百ドル/1日〜数日が目安" },
      { label: "必須資格か", value: "いいえ。働くのに法的義務はない" },
      { label: "採用効果", value: "限定的。実店舗経験・トライアル実力が重視" },
    ],
    steps: [
      { title: "自分の状況を確認", description: "マシン未経験か、カフェ経験があるかを整理します。" },
      { title: "受講を判断", description: "ゼロから基礎を作りたいなら短期コースを検討します。" },
      { title: "経験を積む", description: "コース後は経験を積める店で実績を作ります。" },
      { title: "トライアルに臨む", description: "実技トライアルで実践力を示し採用を狙います。" },
    ],
    tips: [
      "コース修了＝採用ではありません。実店舗経験づくりが本命です。",
      "マシン未経験ならコースは効率的。経験者なら直接就業も選択肢です。",
      "コース後はKitchen Hand兼見習い等で実践経験を積むと近道になります。",
    ],
    faqs: [
      {
        question: "バリスタコースを受けないとバリスタになれませんか？",
        answer:
          "なれます。バリスタに法的な必須資格はなく、コースは任意です。多くの人はカフェで働きながら現場でスキルを身につけます。マシン未経験で基礎から学びたい人にはコースが役立ちますが、必須ではありません。",
      },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "Fair Work Ombudsman｜Hospitality industry",
        url: "https://www.fairwork.gov.au/find-help-for/fast-food-restaurants-cafes",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["barista-job-guide", "hospitality-jobs-guide", "certifications", "rsa-state-guide", "food-safety-certificate"],
    updatedAt: "2026-07-18",
    published: true,
  },
];
