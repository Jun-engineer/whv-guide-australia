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
];
