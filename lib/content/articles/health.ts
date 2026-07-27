import type { Article } from "./types";

export const healthArticles: Article[] = [
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
    relatedSlugs: [
      "gp-urgent-care-emergency",
      "overseas-insurance-claim",
      "pharmacy-guide",
      "dental-care-australia",
      "insurance-guide",
      "safety-emergency",
      "preparation-checklist",
    ],
    updatedAt: "2026-07-27",
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

  {
    id: "a246",
    title: "GP・Urgent Care・Emergencyの使い分け",
    slug: "gp-urgent-care-emergency",
    category: "health",
    hub: "health",
    priority: "P0",
    searchIntent: "症状の緊急度に応じてGP・Urgent Care・救急のどこに行くか",
    description:
      "オーストラリアで体調を崩したとき、GP（かかりつけ医）・Medicare Urgent Care Clinic（緊急ケアクリニック）・Emergency（救急外来/000）のどれに行くべきかを、緊急度別に解説します。命に関わるサインの見極め、日本のワーホリはMedicare対象外という重要な注意点、判断に迷ったときのhealthdirect無料電話まで案内します。",
    content: [
      "結論から言うと、受診先は緊急度で決めます。①命に関わる緊急（強い胸痛、呼吸困難、大出血、意識がおかしい、ろれつが回らない・顔や手足のまひ、重度のアレルギー反応など）は迷わず『000』に電話するか救急外来（Emergency Department＝ED）へ。②緊急だが命に別状のない怪我・病気（軽い骨折・ねんざ、切り傷、感染症、膀胱炎、軽いやけどなど）は『Medicare Urgent Care Clinic（UCC）』または『GP』へ。③通常の体調不良・継続的なケア・健康診断・処方箋は『GP（かかりつけ医）』へ。判断に迷うときは、24時間の無料健康相談電話 healthdirect に電話して指示を仰げます。",
      "GP（General Practitioner＝かかりつけ医）は、オーストラリアの医療の入口です。予約制のクリニックが多く、必要に応じて専門医や病院を紹介（referral）してもらいます。緊急時を除き、いきなり大病院や専門医には行きません。まずGPを受診するのが基本の流れです。",
      "Medicare Urgent Care Clinic（UCC）は、政府が運営する『予約不要（walk-in）』の緊急ケアクリニックです。朝早くから夜遅くまで開いており、命に関わらないが早めに診てほしい症状——軽い感染症、軽い骨折・ねんざ・スポーツ外傷、膀胱炎（UTI）、性感染症（STI）、切り傷、虫刺され・発疹、軽い目や耳のトラブル、呼吸器の不調、胃腸炎、軽いやけど——に対応します。EDが混む前に軽症を受けられるため待ち時間を減らせますが、対応するのは『緊急だが命に別状のない』症状に限られます。",
      "重要な注意点として、UCCは『bulk billed（Medicareで自己負担なし）』を掲げていますが、これはMedicareカードを持つ人向けの仕組みです。日本はオーストラリアと相互医療協定（Reciprocal Health Care Agreement）を結んでいないため、日本国籍のワーキングホリデー参加者は原則Medicareの対象外です。その場合、UCCやGPでも料金が発生し得るので、受付で『Medicareがない』と伝えて費用を確認し、支払った領収書で加入している海外保険に請求します。",
      "Emergency Department（ED＝救急外来）と『000』は、生命に関わる重症のためのものです。EDは重症度で診る順番が決まる（トリアージ）ため、軽症で行くと何時間も待つことがあります。救急車（ambulance）は州によって有料で、保険や州の制度で扱いが異なります（詳細は救急車の費用の記事へ）。命の危険を感じたら費用より先に000を優先してください。",
    ],
    keyFacts: [
      { label: "緊急番号", value: "000（救急・警察・消防。命に関わるとき）" },
      { label: "命に別状ない緊急", value: "Medicare Urgent Care Clinic（予約不要）またはGP" },
      { label: "通常の不調・継続ケア", value: "GP（予約制。専門医へは紹介状）" },
      { label: "判断に迷う", value: "healthdirect（無料の健康相談電話）1800 022 222 ※VIC・QLDは別窓口" },
      { label: "日本のワーホリ", value: "Medicare対象外が原則→自己負担＋海外保険で請求" },
      { label: "UCCの対象例", value: "軽い骨折/ねんざ・切り傷・膀胱炎・胃腸炎・軽いやけど等" },
    ],
    steps: [
      { title: "まず緊急度を判断", description: "命に関わるサイン（胸痛・呼吸困難・大出血・意識障害・まひ・重度アレルギー）がないか確認します。" },
      { title: "命の危険があれば000/ED", description: "少しでも生命の危険を感じたら、費用より先に000に電話するか救急外来へ向かいます。" },
      { title: "軽症の緊急はUCCかGP", description: "命に別状のない怪我・病気は、予約不要のMedicare UCCか、かかりつけGPを受診します。" },
      { title: "迷ったらhealthdirect", description: "どこに行くか迷うときは、24時間の無料健康相談電話で症状を伝えて指示を仰ぎます。" },
      { title: "受診時は保険と領収書", description: "海外保険の証券をスマホに保存し、支払い後は英文の領収書・診断書を必ず受け取ります。" },
    ],
    tips: [
      "GPは予約制が多く、Hotdoc等のアプリで空き枠を予約できます。bulk billできるかは事前に電話で確認しましょう。",
      "UCCは『go to your nearest emergency department』の一歩手前の選択肢。命に関わる症状は必ずEDへ。",
      "healthdirectのオンライン『Symptom Checker』でも、受診先の目安を確認できます。",
    ],
    phrases: [
      { en: "Is this clinic bulk billed, or do I have to pay?", ja: "このクリニックはbulk billですか、それとも支払いが必要ですか？", note: "受付で費用を確認するとき" },
      { en: "I don't have Medicare. How much is the consultation?", ja: "Medicareを持っていません。診察料はいくらですか？" },
      { en: "I need to see a doctor today. Is it urgent care or should I go to ED?", ja: "今日診てほしいのですが、Urgent Careと救急外来のどちらがよいですか？" },
    ],
    faqs: [
      {
        question: "ワーホリでもUrgent Care Clinicは無料ですか？",
        answer:
          "UCCは『bulk billed（自己負担なし）』を掲げていますが、これはMedicareカードを持つ人向けです。日本はオーストラリアと相互医療協定がないため、日本のワーホリは原則Medicare対象外で、料金が発生し得ます。受付で『Medicareがない』と伝えて費用を確認し、領収書で海外保険に請求してください。",
      },
      {
        question: "軽い症状でも救急外来（ED）に行っていいですか？",
        answer:
          "命に関わらない軽症は、まずGPかMedicare UCCが適切です。EDは重症度順に診るため、軽症だと長時間待つことが多く、UCCの方が早い場合があります。ただし胸痛・呼吸困難・大出血・意識障害などがあれば、迷わず000かEDへ向かってください。",
      },
    ],
    warnings: [
      "強い胸痛・呼吸困難・大出血・意識障害・まひ・重度のアレルギー反応は、迷わず000に電話するか救急外来へ。命に関わるときは費用より受診を優先してください。",
      "Medicare UCCの『bulk billed』はMedicareカード保持者向けです。Medicareがないワーホリは料金が発生し得るため、受付で費用を確認してください。",
    ],
    sources: [
      { label: "healthdirect（オーストラリア政府）", url: "https://www.healthdirect.gov.au/" },
      { label: "Medicare Urgent Care Clinics（Department of Health）", url: "https://www.health.gov.au/our-work/medicare-urgent-care-clinics" },
      { label: "Triple Zero（000）", url: "https://www.triplezero.gov.au/" },
    ],
    verifiedAt: "2026-07-27",
    officialSources: [
      {
        label: "Department of Health and Aged Care｜Find your nearest Medicare Urgent Care Clinic（bulk billed・walk-in・対象症状）",
        url: "https://www.health.gov.au/our-work/medicare-urgent-care-clinics",
        accessedAt: "2026-07-27",
      },
      {
        label: "healthdirect｜Health advice when you need it（無料健康相談・受診先の目安）",
        url: "https://www.healthdirect.gov.au/",
        accessedAt: "2026-07-27",
      },
      {
        label: "Services Australia｜Reciprocal Health Care Agreements（日本は対象外＝Medicare非適用）",
        url: "https://www.servicesaustralia.gov.au/reciprocal-health-care-agreements",
        accessedAt: "2026-07-27",
      },
      {
        label: "Triple Zero｜When to call 000",
        url: "https://www.triplezero.gov.au/",
        accessedAt: "2026-07-27",
      },
    ],
    relatedSlugs: [
      "medicare-oshc",
      "overseas-insurance-claim",
      "pharmacy-guide",
      "safety-emergency",
    ],
    updatedAt: "2026-07-27",
    published: true,
  },

  {
    id: "a247",
    title: "海外保険を使う流れ｜キャッシュレス・立替・請求書類",
    slug: "overseas-insurance-claim",
    category: "health",
    hub: "health",
    priority: "P0",
    searchIntent: "海外旅行保険で医療費を請求する手順・必要書類・キャッシュレス",
    description:
      "オーストラリアで病院にかかったとき、海外保険（旅行保険・OVHC）をどう使うかを解説します。まず自己負担で支払い後に払い戻しを受ける流れ、提携病院でのキャッシュレス、請求に必要な英文の領収書・診断書、対象外になりやすい項目（既往症・歯科など）まで、失敗しないための手順をまとめます。",
    content: [
      "結論から言うと、日本のワーキングホリデー参加者はMedicare（公的医療保険）の対象外が原則のため、医療費は加入している海外保険（旅行保険やOverseas Visitor Health Cover）でカバーします。基本の流れは『①受診前に保険会社へ連絡→②いったん自己負担で支払い→③英文の領収書・診断書を受け取る→④保険会社に請求→⑤払い戻し』です。高額な入院・手術では、事前承認を得てキャッシュレス（病院へ直接支払い）にできる場合もあります。",
      "支払い方法には『立替払い（自分で払って後日請求）』と『キャッシュレス（保険会社が病院に直接支払い）』の2種類があります。GPや薬局は立替が一般的で、大きな病院での入院は保険会社の24時間アシスタンスデスクに連絡するとキャッシュレスや支払い保証（guarantee of payment）を手配してくれることがあります。まずは加入時にもらった保険証券（policy）の緊急連絡先を確認しましょう。",
      "請求に必要な書類は、①明細付きの領収書（itemised receipt / tax invoice。金額だけでなく処置・薬の内訳が分かるもの）、②診断書・医療報告書（medical certificate / report。診断名や治療内容）、③処方箋や薬の領収書、④支払いを証明するもの、が基本です。すべて英文で受け取り、写真やPDFで保管します。受診時に『保険に請求したいので明細付きの領収書と診断書がほしい』と伝えておくとスムーズです。",
      "対象外（免責）になりやすい項目に注意してください。多くの保険では、渡航前からの持病・既往症（pre-existing condition）、歯科（dental）、妊娠・出産、危険なスポーツ、飲酒・薬物が関係する事故、申告していない事項などが補償対象外か制限付きです。また自己負担額（excess）が設定されていることもあります。何が対象で何が対象外かは保険証券に明記されているので、渡航前と受診前に必ず確認しましょう。",
      "実務の手順はシンプルです。渡航前に保険証券番号・緊急連絡先・アプリをスマホに保存。受診時に『海外保険がある』と伝え、明細付き領収書と診断書を受け取る。帰宅後、保険会社の指定方法（アプリ・オンライン・郵送）で期限内に請求する。書類は紛失しないよう撮影して二重に保管します。請求期限（多くは受診から一定期間内）を過ぎると払い戻されないことがあるため、早めに手続きしましょう。",
    ],
    keyFacts: [
      { label: "前提", value: "ワーホリはMedicare対象外→海外保険が必須" },
      { label: "基本の流れ", value: "受診前に連絡→自己負担→領収書→請求→払い戻し" },
      { label: "キャッシュレス", value: "高額入院は24hアシスタンスで手配できる場合" },
      { label: "必要書類", value: "明細付き領収書（tax invoice）＋診断書（英文）" },
      { label: "対象外になりやすい", value: "既往症・歯科・妊娠・危険行為・未申告" },
      { label: "注意", value: "自己負担額（excess）と請求期限を証券で確認" },
    ],
    steps: [
      { title: "証券情報を保存", description: "保険証券番号・緊急連絡先・請求方法（アプリ/オンライン）をスマホに保存します。" },
      { title: "受診前に連絡", description: "高額になりそうなときは受診前に保険会社へ連絡し、指示・事前承認を得ます。" },
      { title: "保険利用を伝える", description: "受付で海外保険がある旨を伝え、キャッシュレス対応か立替かを確認します。" },
      { title: "英文の書類を受け取る", description: "明細付き領収書（tax invoice）と診断書（medical certificate）を必ずもらいます。" },
      { title: "期限内に請求", description: "書類を撮影して保管し、保険会社の指定方法で請求期限内に払い戻しを申請します。" },
    ],
    tips: [
      "領収書は『itemised（明細付き）』でもらうのが鉄則。金額だけの領収書だと請求で追加資料を求められます。",
      "持病がある人は、渡航前に英文の診断書・処方箋を用意し、加入時に既往症の扱いを確認しておくと安心です。",
      "少額のGP受診でも領収書は必ず保管を。積み重なると払い戻し額は大きくなります。",
    ],
    phrases: [
      { en: "I have overseas health insurance. Can you bill them directly?", ja: "海外保険に加入しています。保険会社へ直接請求できますか？", note: "キャッシュレスを確認するとき" },
      { en: "Can I have an itemised tax invoice and a medical certificate, please?", ja: "明細付きの領収書と診断書をいただけますか？" },
      { en: "How much is the excess on my policy?", ja: "私の保険の自己負担額（excess）はいくらですか？", note: "保険会社に確認するとき" },
    ],
    faqs: [
      {
        question: "領収書をなくしたら払い戻しは受けられませんか？",
        answer:
          "受診したクリニックや病院に再発行を依頼できる場合があります。ただし再発行できないと払い戻しが難しくなるため、領収書と診断書は受け取ったその場で撮影し、クラウドにも保存しておくのが安全です。",
      },
      {
        question: "高額な入院になりそうなときはどうすればいいですか？",
        answer:
          "自分で全額を立て替えるのが難しい場合は、保険会社の24時間アシスタンスデスクに連絡してください。病院への支払い保証（guarantee of payment）やキャッシュレスの手配、提携病院の案内を受けられることがあります。まず連絡することが重要です。",
      },
    ],
    warnings: [
      "受診前の連絡が条件になっている保険では、連絡せずに受診すると補償されないことがあります。証券の条件を必ず確認してください。",
      "既往症・歯科・妊娠などは対象外か制限付きのことが多く、自己負担額（excess）や請求期限もあります。加入時と受診前に補償範囲を確認しましょう。",
    ],
    sources: [
      { label: "Services Australia｜Medicare", url: "https://www.servicesaustralia.gov.au/medicare" },
      { label: "healthdirect（オーストラリア政府）", url: "https://www.healthdirect.gov.au/" },
    ],
    verifiedAt: "2026-07-27",
    officialSources: [
      {
        label: "Services Australia｜Reciprocal Health Care Agreements（日本は対象外＝Medicare非適用で海外保険が前提）",
        url: "https://www.servicesaustralia.gov.au/reciprocal-health-care-agreements",
        accessedAt: "2026-07-27",
      },
      {
        label: "Services Australia｜Medicare（給付・対象の考え方）",
        url: "https://www.servicesaustralia.gov.au/medicare",
        accessedAt: "2026-07-27",
      },
      {
        label: "healthdirect｜How the Australian health system works（自己負担と請求の一般情報）",
        url: "https://www.healthdirect.gov.au/",
        accessedAt: "2026-07-27",
      },
    ],
    relatedSlugs: [
      "medicare-oshc",
      "gp-urgent-care-emergency",
      "pharmacy-guide",
      "dental-care-australia",
    ],
    updatedAt: "2026-07-27",
    published: true,
  },

  {
    id: "a248",
    title: "オーストラリアの薬局（Pharmacy）の使い方",
    slug: "pharmacy-guide",
    category: "health",
    hub: "health",
    priority: "P0",
    searchIntent: "薬局で薬剤師に相談・市販薬と処方薬の違い・WHVの薬代",
    description:
      "オーストラリアの薬局（Pharmacy／Chemist）の使い方を解説します。軽い症状はまず薬剤師（pharmacist）に無料で相談できること、市販薬と処方薬（S2・S3・S4）の違い、日本のワーホリはPBS補助が原則使えず処方薬が高額になりやすいこと、ディスカウント薬局の活用まで、実用的にまとめます。",
    content: [
      "結論から言うと、軽い体調不良ならまず薬局（Pharmacy、俗にChemist）に行き、薬剤師（pharmacist）に相談するのが早くて安上がりです。薬剤師への相談は無料で、症状に合った市販薬を選んでもらえます。市販薬はその場で買え、医師の処方箋（prescription）が必要な薬だけGPを受診します。Chemist Warehouseなどのディスカウント薬局を使うと薬代を抑えられます。",
      "オーストラリアの薬は規制で段階分けされています。①スーパー等でも買える一般販売品、②Pharmacy Medicine（S2＝薬局の棚で買える一般薬。多くの風邪薬・鎮痛薬）、③Pharmacist Only Medicine（S3＝購入時に薬剤師の確認が必要。一部の強めの薬や緊急避妊薬など）、④Prescription Only Medicine（S4＝医師の処方箋が必須。抗生物質や多くの常用薬）。S2・S3は薬局で買え、S4はGPの処方箋が要ります。",
      "処方薬とPBS（Pharmaceutical Benefits Scheme）の関係は重要です。PBSは処方薬の自己負担を抑える国の補助制度ですが、Medicareを持つ人向けです。日本のワーホリは原則Medicare対象外のため、PBSの補助が使えず処方薬は全額自己負担になりやすい点に注意してください。薬剤師にジェネリック（generic＝有効成分が同じ後発薬）があるか尋ねると、安くなることがあります。",
      "薬剤師に相談できることは幅広くあります。軽症のセルフケア（風邪・頭痛・胃腸の不調・軽い皮膚トラブルなど）、飲み合わせ（今飲んでいる薬・持病との相性）、日本から持ってきた薬の英語での成分名、といった相談に応じてくれます。症状や既往症、妊娠の有無を正直に伝えると、適切な薬を選んでもらえます。",
      "使い方の手順はシンプルです。薬局で薬剤師に症状を伝える→勧められた市販薬を購入→用法用量を守って様子を見る→数日で改善しない、悪化する、高熱や強い痛みがあるならGPを受診。処方薬が必要ならGPで処方箋をもらい、薬局で受け取ります。持病の常用薬がある人は、英文の処方箋・お薬手帳を用意しておくと切り替えがスムーズです。",
    ],
    keyFacts: [
      { label: "まずどこ", value: "薬局（Pharmacy/Chemist）で薬剤師に無料相談" },
      { label: "市販薬", value: "S2（棚で購入）・S3（薬剤師の確認が必要）" },
      { label: "処方薬", value: "S4は医師の処方箋が必須（抗生物質など）" },
      { label: "薬代", value: "ワーホリはPBS補助が原則なし→処方薬は全額" },
      { label: "節約", value: "ジェネリックの有無を薬剤師に確認／割引薬局" },
      { label: "改善しないとき", value: "高熱・強い痛み・悪化ならGPを受診" },
    ],
    steps: [
      { title: "薬剤師に相談", description: "薬局のカウンターで症状・持病・妊娠の有無を伝え、合う市販薬を選んでもらいます。" },
      { title: "分類を確認", description: "S2は棚から、S3は薬剤師の確認後に購入。抗生物質などS4は処方箋が必要です。" },
      { title: "用法用量を守る", description: "ラベルの用量・回数・注意（眠気・運転など）を守って服用します。" },
      { title: "改善しなければGP", description: "数日で良くならない・悪化する・高熱や強い痛みがあればGPを受診します。" },
      { title: "常用薬は準備", description: "持病がある人は英文の処方箋・成分名を用意し、薬剤師に相談して切り替えます。" },
    ],
    tips: [
      "『Can I speak to the pharmacist?』と聞けば、無料で薬剤師のアドバイスを受けられます。",
      "処方薬はPBS補助が使えないと高額になりがち。ジェネリックがあるか必ず尋ねましょう。",
      "日本から持ち込む薬は成分・量に規制（TGA）があり、入国申告が必要な場合があります（薬の持ち込みの記事を参照）。",
    ],
    phrases: [
      { en: "Can I speak to the pharmacist?", ja: "薬剤師さんに相談できますか？", note: "無料相談を頼むとき" },
      { en: "What do you recommend for a cold / headache?", ja: "風邪／頭痛には何がおすすめですか？" },
      { en: "Do I need a prescription for this? Is there a cheaper generic?", ja: "これは処方箋が必要ですか？ 安いジェネリックはありますか？" },
    ],
    faqs: [
      {
        question: "処方箋なしで抗生物質を買えますか？",
        answer:
          "いいえ。抗生物質は処方箋が必要な薬（S4）で、薬局で自由には買えません。感染症が疑われるときはGPを受診し、必要なら処方してもらいます。自己判断での抗生物質使用は避けてください。",
      },
      {
        question: "処方薬が高いのはなぜですか？",
        answer:
          "処方薬の自己負担を抑えるPBSはMedicareを持つ人向けの制度です。日本のワーホリは原則Medicare対象外のため、PBSの補助が使えず全額自己負担になりやすいのが理由です。ジェネリックの有無を薬剤師に確認し、海外保険で薬代がカバーされるかも確認しましょう。",
      },
    ],
    warnings: [
      "抗生物質など処方薬（S4）は薬剤師の判断だけでは買えません。自己判断での使用は避け、必要ならGPを受診してください。",
      "日本の市販薬とは成分・分類・規制が異なります。飲み合わせや持病がある場合は必ず薬剤師・医師に確認してください。",
    ],
    sources: [
      { label: "healthdirect｜Medicines", url: "https://www.healthdirect.gov.au/medicines" },
      { label: "Therapeutic Goods Administration（TGA）", url: "https://www.tga.gov.au/" },
      { label: "The Pharmaceutical Benefits Scheme（PBS）", url: "https://www.pbs.gov.au/" },
    ],
    verifiedAt: "2026-07-27",
    officialSources: [
      {
        label: "Therapeutic Goods Administration｜Scheduling（S2 Pharmacy Medicine・S3 Pharmacist Only・S4 Prescription Only）",
        url: "https://www.tga.gov.au/how-we-regulate/ingredients-and-scheduling-medicines-and-chemicals/scheduling-basics",
        accessedAt: "2026-07-27",
      },
      {
        label: "Services Australia｜Pharmaceutical Benefits Scheme（PBSはMedicare加入者向けの補助）",
        url: "https://www.servicesaustralia.gov.au/pharmaceutical-benefits-scheme",
        accessedAt: "2026-07-27",
      },
      {
        label: "healthdirect｜Medicines and the pharmacy（薬剤師への相談・市販薬と処方薬）",
        url: "https://www.healthdirect.gov.au/medicines",
        accessedAt: "2026-07-27",
      },
    ],
    relatedSlugs: [
      "medicare-oshc",
      "gp-urgent-care-emergency",
      "common-medicines-australia",
      "overseas-insurance-claim",
    ],
    updatedAt: "2026-07-27",
    published: true,
  },

  {
    id: "a249",
    title: "風邪・痛み・アレルギーなど一般薬の探し方",
    slug: "common-medicines-australia",
    category: "health",
    hub: "health",
    priority: "P1",
    searchIntent: "日本の市販薬に相当する豪州の一般薬を成分名で探す",
    description:
      "オーストラリアの薬局で、風邪・痛み・アレルギー・胃腸の不調などに使う一般薬（市販薬）の探し方を解説します。日本と商品名が違うため、paracetamol・ibuprofen・antihistamineなど有効成分（active ingredient）で探すコツ、用量の注意、迷ったら薬剤師に相談すべきケースをまとめます。",
    content: [
      "結論から言うと、オーストラリアで市販薬を探すときは『商品名』ではなく『有効成分（active ingredient）』で探すのが確実です。日本とは商品名が違っても、成分が分かれば同じ効き目の薬を見つけられます。代表的には、痛み・熱にparacetamol（パラセタモール）やibuprofen（イブプロフェン）、アレルギーにantihistamine（抗ヒスタミン薬）などです。迷ったら薬剤師に相談すれば、症状に合う薬を選んでもらえます。",
      "よく使う成分と用途の目安は次の通りです。解熱・鎮痛＝paracetamol（代表的な商品名Panadol）。炎症を伴う痛み・熱＝ibuprofen（Nurofenなど）。アレルギー・花粉症・じんましん＝抗ヒスタミン薬（loratadine／cetirizine／fexofenadineなど、眠くなりにくいタイプ）。鼻づまり・咳・のど・総合感冒薬、胃の不調（制酸薬）、下痢・整腸薬、消毒薬・絆創膏なども薬局でそろいます。パッケージの成分表示を見て選びましょう。",
      "用量と安全性には十分注意してください。特にparacetamolは、複数の風邪薬・鎮痛薬に重複して含まれることがあり、気づかず飲み過ぎると肝臓に重い害を及ぼします。ラベルの1回量・1日の上限・服用間隔を必ず守り、成分が重ならないようにします。年齢・持病（腎臓・肝臓・胃潰瘍・喘息など）・妊娠・授乳中の人、他の薬を飲んでいる人は、自己判断せず薬剤師・医師に確認しましょう。一部の薬は薬剤師の確認が必要な分類（S3）です。",
      "日本で普段使っている薬が、オーストラリアでは入手方法や分類が異なることがあります。同じ効き目の成分でも、市販で買えるか処方箋が必要かは国によって違うため、手持ちの薬のパッケージ（成分名の英語表記）を薬剤師に見せて、相当する市販薬を教えてもらうのが安全で確実です。",
      "数日使っても症状が改善しない、むしろ悪化する、高熱・強い痛み・呼吸の苦しさ・発疹の拡大などがある場合は、市販薬で粘らずGPを受診してください。市販薬はあくまで軽症のセルフケア用です。常備薬として、解熱鎮痛薬・抗ヒスタミン薬・胃腸薬・消毒薬・絆創膏を用意しておくと、体調を崩したときに慌てずにすみます。",
    ],
    keyFacts: [
      { label: "探し方", value: "商品名でなく有効成分（active ingredient）で探す" },
      { label: "痛み・熱", value: "paracetamol／ibuprofen" },
      { label: "アレルギー", value: "抗ヒスタミン薬（loratadine等）" },
      { label: "最重要の注意", value: "paracetamolの重複・過量に注意（肝障害）" },
      { label: "確認すべき人", value: "持病・妊娠・授乳・他の薬がある人は薬剤師へ" },
      { label: "改善しないとき", value: "数日で治らない・悪化・高熱ならGP受診" },
    ],
    steps: [
      { title: "症状を整理", description: "熱・痛み・鼻・咳・アレルギー・胃腸など、主な症状を1つ2つに絞ります。" },
      { title: "成分で探す", description: "パッケージの有効成分（active ingredient）を見て、目的に合う薬を選びます。" },
      { title: "重複を避ける", description: "複数の薬でparacetamol等が重ならないよう、成分表示を確認します。" },
      { title: "用量を守る", description: "1回量・1日の上限・服用間隔をラベル通りに守って服用します。" },
      { title: "不安なら薬剤師へ", description: "持病・妊娠・他の薬がある、または迷うときは薬剤師に相談します。" },
    ],
    tips: [
      "手持ちの日本の薬のパッケージ（成分の英語表記）を薬剤師に見せると、相当する市販薬を教えてもらえます。",
      "抗ヒスタミン薬は『眠くなりにくいタイプ（non-drowsy）』を選ぶと、仕事や運転に影響しにくいです。",
      "解熱鎮痛薬・抗ヒスタミン薬・胃腸薬・消毒薬・絆創膏を常備しておくと安心です。",
    ],
    phrases: [
      { en: "I'm looking for something with paracetamol / ibuprofen.", ja: "paracetamol／ibuprofenが入った薬を探しています。" },
      { en: "What's the Australian equivalent of this medicine?", ja: "この薬に相当するオーストラリアの薬はどれですか？", note: "日本の薬を見せながら" },
      { en: "Is this safe to take with my other medication?", ja: "今飲んでいる薬と一緒に飲んでも大丈夫ですか？" },
    ],
    faqs: [
      {
        question: "日本で使っていた薬と同じものは買えますか？",
        answer:
          "商品名は違っても、有効成分が同じ薬なら見つかることが多いです。ただし国によって市販で買えるか処方箋が必要かが異なります。手持ちの薬のパッケージ（成分の英語名）を薬剤師に見せて、相当する市販薬や必要な受診を確認するのが確実です。",
      },
      {
        question: "市販薬はどれくらい続けて使っていいですか？",
        answer:
          "市販薬は軽症の一時的なセルフケア用です。数日使っても改善しない、悪化する、高熱や強い痛み・発疹の拡大などがあれば、市販薬で粘らずGPを受診してください。用量やパッケージ記載の使用日数の上限も守りましょう。",
      },
    ],
    warnings: [
      "paracetamolは複数の風邪薬・鎮痛薬に重複して含まれることがあり、飲み過ぎると重い肝障害を起こします。成分の重複と1日の上限に注意してください。",
      "持病（腎臓・肝臓・胃潰瘍・喘息など）・妊娠・授乳中の人、他の薬を飲んでいる人は、自己判断せず薬剤師・医師に相談してください。",
    ],
    sources: [
      { label: "healthdirect｜Medicines", url: "https://www.healthdirect.gov.au/medicines" },
      { label: "Therapeutic Goods Administration（TGA）", url: "https://www.tga.gov.au/" },
    ],
    verifiedAt: "2026-07-27",
    officialSources: [
      {
        label: "healthdirect｜Medicines（有効成分・用量・セルフケアと受診の目安）",
        url: "https://www.healthdirect.gov.au/medicines",
        accessedAt: "2026-07-27",
      },
      {
        label: "healthdirect｜Paracetamol（重複・過量による肝障害への注意）",
        url: "https://www.healthdirect.gov.au/paracetamol",
        accessedAt: "2026-07-27",
      },
      {
        label: "Therapeutic Goods Administration｜Scheduling basics（市販薬と薬剤師確認が必要な薬の分類）",
        url: "https://www.tga.gov.au/how-we-regulate/ingredients-and-scheduling-medicines-and-chemicals/scheduling-basics",
        accessedAt: "2026-07-27",
      },
    ],
    relatedSlugs: [
      "pharmacy-guide",
      "gp-urgent-care-emergency",
      "medicare-oshc",
    ],
    updatedAt: "2026-07-27",
    published: true,
  },

  {
    id: "a250",
    title: "歯医者に行く方法と費用・保険の確認",
    slug: "dental-care-australia",
    category: "health",
    hub: "health",
    priority: "P1",
    searchIntent: "豪州で歯医者に行く方法・費用・Medicareと保険の歯科カバー",
    description:
      "オーストラリアで歯医者（dentist）にかかる方法と費用を解説します。成人の歯科は原則Medicareの対象外で、日本のワーホリは自己負担が基本という点、治療前に見積り（quote）を取るコツ、海外保険の歯科カバーの制限、緊急の歯痛への対応、そして渡航前の予防治療の重要性までまとめます。",
    content: [
      "結論から言うと、オーストラリアでは成人の歯科治療は原則Medicare（公的医療保険）の対象外で、費用は高額になりがちです。日本のワーホリはそもそもMedicare対象外のことが多く、歯科は基本的に全額自己負担になります。加入している海外保険に歯科（dental）の補償が付いているかを確認し、治療の前には必ず見積り（quote）を取りましょう。そして最も効果的な対策は、虫歯・親知らずなどを渡航前に日本で治療しておくことです。",
      "歯医者の探し方は、民間の歯科クリニック（private dental clinic）を予約するのが一般的です。近くのクリニックをオンラインで探し、電話やウェブで予約します。初診では検診とレントゲンで状態を確認し、必要な治療の内容と費用の見積りを出してもらえます。治療方針と料金に納得してから進めるのが安心です。",
      "費用は治療内容で大きく変わります。検診・クリーニング、詰め物、抜歯、根管治療（root canal）、被せ物（crown）などで金額が異なり、根管治療や被せ物は特に高額になりやすい処置です。クリニックによって料金が違うため、可能なら複数で見積りを比べ、治療前に総額と支払い方法を確認しておきましょう。",
      "海外保険の歯科カバーには制限が多い点に注意してください。多くの旅行保険では、歯科は『急な歯痛の応急的な痛み緩和のみ』といった限定的な補償で、渡航前からの歯の問題や予防・美容目的の治療は対象外のことが一般的です。何がどこまでカバーされるかは保険証券に明記されているので、受診前に必ず確認し、対象なら明細付き領収書と診断書をもらって請求します。",
      "緊急時の対応も知っておきましょう。強い歯痛、歯ぐきの腫れ、歯の外傷（折れた・抜けた）などは、まず歯科クリニックに連絡して緊急枠（emergency appointment）を相談します。夜間・休日は救急歯科サービスや州の窓口を利用できる場合があります。ただし、顔や首まで腫れが広がる、口が開けにくい、飲み込みや呼吸がしづらいといった症状は、気道に関わる危険なサインです。その場合は歯科ではなく000か救急外来（ED）を受診してください。",
    ],
    keyFacts: [
      { label: "Medicare", value: "成人の歯科は原則対象外" },
      { label: "ワーホリの費用", value: "基本は全額自己負担" },
      { label: "治療前", value: "見積り（quote）を取り、総額を確認" },
      { label: "保険", value: "歯科は『急な痛み緩和のみ』など制限が多い→証券確認" },
      { label: "緊急", value: "歯痛・腫れ・外傷はクリニックへ／救急歯科も" },
      { label: "最善策", value: "虫歯・親知らずは渡航前に日本で治療" },
    ],
    steps: [
      { title: "保険の歯科を確認", description: "加入している海外保険に歯科補償があるか、範囲と制限を証券で確認します。" },
      { title: "クリニックを予約", description: "近くの民間歯科クリニックを探し、電話やウェブで予約します。" },
      { title: "検診と見積り", description: "初診で検診・レントゲンを受け、治療内容と費用の見積り（quote）をもらいます。" },
      { title: "総額を確認して治療", description: "料金と方針に納得してから治療を進めます。必要なら他院と比較します。" },
      { title: "保険対象なら請求", description: "補償対象なら明細付き領収書・診断書を受け取り、保険会社に請求します。" },
    ],
    tips: [
      "『Can I get a quote before the treatment?』と聞き、治療前に費用を把握しましょう。",
      "虫歯・親知らず・歯のトラブルは、費用が高い現地で治すより渡航前に日本で治療しておくのが賢明です。",
      "痛みを我慢して放置すると悪化し、より高額な治療（根管・抜歯）になりがちです。早めの受診を。",
    ],
    phrases: [
      { en: "Can I get a quote before the treatment?", ja: "治療の前に見積りをもらえますか？" },
      { en: "I have severe toothache. Can I get an emergency appointment?", ja: "強い歯痛があります。緊急で診てもらえますか？" },
      { en: "Does my insurance cover emergency dental treatment?", ja: "私の保険は緊急の歯科治療をカバーしていますか？", note: "保険会社に確認するとき" },
    ],
    faqs: [
      {
        question: "Medicareで歯医者は無料になりますか？",
        answer:
          "原則いいえです。成人の一般的な歯科治療はMedicareの対象外で、公的な歯科サービスは低所得者や子どもなど対象が限られます。日本のワーホリはそもそもMedicare対象外のことが多く、歯科は基本的に自己負担になります。",
      },
      {
        question: "歯の治療は渡航前に済ませるべきですか？",
        answer:
          "はい、強くおすすめします。オーストラリアの歯科は高額で保険のカバーも限定的です。虫歯や親知らず、気になる歯のトラブルは、費用も言葉の負担も少ない渡航前に日本で治療しておくのが最も確実な対策です。",
      },
    ],
    warnings: [
      "歯科は非常に高額で、放置すると悪化してさらに費用がかさみます。痛みや違和感は早めに受診してください。",
      "顔や首まで広がる腫れ・口が開けにくい・飲み込みや呼吸のしづらさは危険なサインです。歯科ではなく000か救急外来（ED）を受診してください。",
    ],
    sources: [
      { label: "Services Australia｜Medicare and dental", url: "https://www.servicesaustralia.gov.au/medicare" },
      { label: "healthdirect｜Dental care", url: "https://www.healthdirect.gov.au/dental-care" },
    ],
    verifiedAt: "2026-07-27",
    officialSources: [
      {
        label: "healthdirect｜Dental care and costs（成人歯科は原則Medicare対象外・費用の考え方）",
        url: "https://www.healthdirect.gov.au/dental-care",
        accessedAt: "2026-07-27",
      },
      {
        label: "Services Australia｜Medicare（歯科は限定的・対象の考え方）",
        url: "https://www.servicesaustralia.gov.au/medicare",
        accessedAt: "2026-07-27",
      },
      {
        label: "Services Australia｜Reciprocal Health Care Agreements（日本は対象外＝Medicare非適用）",
        url: "https://www.servicesaustralia.gov.au/reciprocal-health-care-agreements",
        accessedAt: "2026-07-27",
      },
    ],
    relatedSlugs: [
      "medicare-oshc",
      "overseas-insurance-claim",
      "gp-urgent-care-emergency",
    ],
    updatedAt: "2026-07-27",
    published: true,
  },
];
