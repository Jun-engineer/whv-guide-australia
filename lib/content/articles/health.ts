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

  {
    id: "a251",
    title: "眼鏡・コンタクト・Optometristの利用方法",
    slug: "eye-care-optometrist",
    category: "health",
    hub: "health",
    priority: "P2",
    searchIntent: "豪州で視力検査・眼鏡・コンタクトを作る方法と費用・保険",
    description:
      "オーストラリアで視力検査を受けたり、眼鏡・コンタクトレンズを作る方法を解説します。窓口となるOptometrist（検眼士）の役割、Medicareを持たないワーホリの費用、眼鏡・コンタクト本体は原則保険外という点、目の緊急時にどこへ行くかまでまとめます。",
    content: [
      "結論から言うと、視力検査や眼鏡・コンタクトレンズの処方は『Optometrist（検眼士）』が窓口です。オーストラリアでは眼鏡店（OPSM、Specsaversなど）に検眼士が併設されていることが多く、予約して視力検査（eye test）を受け、その場で眼鏡やコンタクトを注文できます。目の病気やケガなど医療的な問題は、Optometristの紹介でOphthalmologist（眼科専門医）やGPにかかります。",
      "費用については注意が必要です。視力検査（eye test）自体は、Medicareを持つ人であれば一定期間ごとにbulk bill（自己負担なし）になることが多いのですが、日本のワーキングホリデー参加者は原則Medicare対象外のため、検査料も自己負担になります。予約時に『Medicareがないが検査料はいくらか』を必ず確認しましょう。",
      "眼鏡・コンタクトレンズ本体の代金は、Medicareの対象外です。これは現地の人でも同じで、フレーム・レンズ・コンタクトは自費か、加入している保険の『optical（眼鏡）』特約でカバーされる場合に限られます。ワーホリの海外保険にoptical特約が付いているかは証券で確認し、対象なら明細付き領収書をもらって請求します。度数が分かる処方箋（prescription）をもらえば、他店やオンラインで比較して安く作ることもできます。",
      "コンタクトレンズを使う人は、度数だけでなくレンズのカーブ等を含むコンタクト用の処方が必要です。使い捨てレンズは薬局や眼鏡店、オンラインで購入できます。ケア用品（洗浄液）も薬局で手に入ります。目の乾き・充血・違和感が続くときは無理せず検眼士やGPに相談してください。",
      "目の緊急事態——急な視力低下、強い痛み、光が見えにくい、異物が入って取れない、薬品が目に入った、外傷——は、放置すると視力に関わります。まず薬品が入った場合はすぐ大量の水で洗い流し、強い症状はGP・Urgent Care、重症は救急外来（ED）や000へ。『いつもと違う見え方』は早めに専門家に診てもらうのが安全です。",
    ],
    keyFacts: [
      { label: "窓口", value: "Optometrist（検眼士）。眼鏡店に併設が多い" },
      { label: "視力検査", value: "Medicare保持者はbulk bill可／ワーホリは自己負担" },
      { label: "眼鏡・コンタクト本体", value: "Medicare対象外（自費か保険のoptical特約）" },
      { label: "処方箋", value: "度数の処方をもらえば他店・オンラインで比較可" },
      { label: "医療的な目の問題", value: "紹介で眼科専門医（Ophthalmologist）・GPへ" },
      { label: "緊急", value: "急な視力低下・強い痛み・薬品混入はGP/ED/000" },
    ],
    steps: [
      { title: "保険のopticalを確認", description: "海外保険に眼鏡・視力検査の特約があるか、範囲を証券で確認します。" },
      { title: "検眼士を予約", description: "眼鏡店併設のOptometristに予約し、費用（Medicareなし）を確認します。" },
      { title: "視力検査を受ける", description: "eye testを受け、必要な度数と目の状態を確認してもらいます。" },
      { title: "処方箋をもらう", description: "眼鏡・コンタクトの処方箋を受け取れば、他店やオンラインで比較できます。" },
      { title: "対象なら保険請求", description: "opticalが対象なら明細付き領収書で保険会社に請求します。" },
    ],
    tips: [
      "眼鏡は日本で作って予備を持参すると、現地での費用と手間を減らせます。度数の控えもあると安心です。",
      "Specsaversなどでは眼鏡2本セットの割引があることも。処方箋があれば価格を比較しやすくなります。",
      "コンタクトの洗浄液・使い捨てレンズは薬局やオンラインで購入できます。ケアを怠ると眼感染のリスク。",
    ],
    phrases: [
      { en: "I'd like to book an eye test. I don't have Medicare — how much is it?", ja: "視力検査を予約したいです。Medicareがないのですが、いくらですか？" },
      { en: "Can I get a copy of my prescription?", ja: "処方箋の控えをもらえますか？", note: "他店で作るとき" },
      { en: "My eye is really sore and red. Can someone see me today?", ja: "目がとても痛くて赤いです。今日診てもらえますか？" },
    ],
    faqs: [
      {
        question: "ワーホリでも視力検査は無料ですか？",
        answer:
          "視力検査のbulk bill（自己負担なし）はMedicareを持つ人向けです。日本のワーホリは原則Medicare対象外のため、検査料は自己負担になります。予約時に費用を確認し、保険にoptical特約があれば領収書で請求してください。",
      },
      {
        question: "眼鏡やコンタクトは保険でカバーされますか？",
        answer:
          "眼鏡・コンタクト本体はMedicareの対象外です。カバーされるとすれば、加入している保険にoptical（眼鏡）特約が付いている場合に限られます。証券で対象・上限額を確認しましょう。度数の処方箋があれば、オンライン等で安く作る選択肢もあります。",
      },
    ],
    warnings: [
      "急な視力低下・強い目の痛み・薬品が目に入った・異物が取れない・外傷は視力に関わります。すぐ洗浄し、重い症状はED/000を受診してください。",
      "コンタクトの使い回しや洗浄不足は角膜感染など重い眼トラブルの原因になります。使用期限とケアを守りましょう。",
    ],
    sources: [
      { label: "healthdirect｜Eye health", url: "https://www.healthdirect.gov.au/eye-health" },
      { label: "Services Australia｜Medicare", url: "https://www.servicesaustralia.gov.au/medicare" },
    ],
    verifiedAt: "2026-07-27",
    officialSources: [
      {
        label: "healthdirect｜Eye health and eye tests（検眼士の役割・目のトラブルの受診目安）",
        url: "https://www.healthdirect.gov.au/eye-health",
        accessedAt: "2026-07-27",
      },
      {
        label: "Services Australia｜Medicare（視力検査のbulk billは加入者向け・眼鏡は対象外）",
        url: "https://www.servicesaustralia.gov.au/optometrist",
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
      "gp-urgent-care-emergency",
      "overseas-insurance-claim",
    ],
    updatedAt: "2026-07-27",
    published: true,
  },

  {
    id: "a252",
    title: "性の健康・検査・避妊の相談先",
    slug: "sexual-health-clinics",
    category: "health",
    hub: "health",
    priority: "P1",
    searchIntent: "性感染症検査・避妊・性の健康の相談をどこで受けるか",
    description:
      "オーストラリアで性感染症（STI）の検査、避妊、性の健康の相談をどこで受けられるかを解説します。GP・専門のSexual Health Clinic・Family Planning系サービスの使い分け、多くが秘密厳守（confidential）であること、緊急避妊薬を薬局で相談できること、ワーホリの費用の考え方までまとめます。",
    content: [
      "結論から言うと、性感染症（STI）の検査、避妊の相談、性の健康に関する悩みは、①GP（かかりつけ医）、②専門の『Sexual Health Clinic（性健康クリニック）』、③Family Planning系のサービス、のいずれかで相談できます。多くの窓口は秘密厳守（confidential）で、プライバシーに配慮して対応してくれます。公的なSexual Health Clinicには無料や低額で検査を受けられるところもあります。",
      "検査・相談の内容は幅広くあります。STI検査（クラミジア・淋病・梅毒・HIVなど）、避妊方法の相談（ピル・コンドーム・IUDなど）、妊娠の心配、ワクチン（HPVなど）といったテーマを扱います。どこに行けばよいか分からないときは、まずGPに相談すれば必要に応じて専門クリニックを紹介してもらえます。",
      "費用について。日本のワーキングホリデー参加者は原則Medicare対象外のため、GPや検査は自己負担になり得ます。一方、州が運営する公的Sexual Health Clinicには、Medicareの有無にかかわらず無料または低額で利用できるところもあります。予約時に『Medicareがないが費用はどうなるか』を確認し、海外保険の対象になるかも証券で調べましょう。",
      "緊急避妊が必要なときは、薬局（Pharmacy）で薬剤師に相談できます。緊急避妊薬は薬剤師の確認が必要な分類（S3）で、処方箋なしで購入できる場合があります。早いほど効果が高いため、必要なときは早めに薬局へ。避妊や検査について不安があれば、我慢せず専門の窓口に相談してください。",
      "受診をためらう必要はありません。性の健康の相談はプライベートな内容ですが、クリニックのスタッフは日常的に対応しており、内容が第三者やビザに共有されることはありません。心配な症状（かゆみ・痛み・おりものの変化・発疹など）があるときや、心当たりがあるときは、早めの検査が自分とパートナーを守ります。",
    ],
    keyFacts: [
      { label: "相談先", value: "GP／Sexual Health Clinic／Family Planning系" },
      { label: "秘密厳守", value: "多くはconfidential。ビザに影響しない" },
      { label: "費用", value: "公的クリニックは無料/低額の場合。ワーホリはGP自己負担も" },
      { label: "扱う内容", value: "STI検査・避妊相談・妊娠の心配・ワクチン" },
      { label: "緊急避妊", value: "薬局で薬剤師に相談（S3。早いほど有効）" },
      { label: "迷ったら", value: "まずGPに相談→専門クリニックを紹介" },
    ],
    steps: [
      { title: "窓口を選ぶ", description: "GP、公的Sexual Health Clinic、Family Planning系から相談先を選びます。" },
      { title: "費用を確認", description: "予約時にMedicareなしの費用や、無料/低額で受けられるかを確認します。" },
      { title: "検査・相談を受ける", description: "STI検査や避妊の相談を受け、必要なら治療・処方を受けます。" },
      { title: "緊急時は薬局へ", description: "緊急避妊が必要なときは早めに薬局で薬剤師に相談します。" },
      { title: "結果とフォロー", description: "検査結果の受け取り方・再検査の要否を確認し、パートナーとも共有します。" },
    ],
    tips: [
      "『sexual health clinic + 都市名』で公的クリニックを検索できます。無料・匿名で検査できるところもあります。",
      "緊急避妊は時間との勝負。必要なときは迷わず薬局で『emergency contraception』と伝えましょう。",
      "コンドームはスーパー・薬局で購入可。STI予防と避妊の両方に有効です。",
    ],
    phrases: [
      { en: "I'd like to get an STI test. Is it confidential?", ja: "STI検査を受けたいです。秘密は守られますか？" },
      { en: "I don't have Medicare. Is there a free sexual health clinic?", ja: "Medicareがありません。無料の性健康クリニックはありますか？" },
      { en: "I need emergency contraception, please.", ja: "緊急避妊薬をお願いします。", note: "薬局で" },
    ],
    faqs: [
      {
        question: "検査したことがビザに影響しますか？",
        answer:
          "いいえ。性の健康の検査・相談がビザに不利に働くことはありません。多くの窓口は秘密厳守で、内容が移民局や第三者に共有されることはありません。安心して利用してください。",
      },
      {
        question: "お金がなくても検査できますか？",
        answer:
          "州が運営する公的なSexual Health Clinicには、Medicareの有無にかかわらず無料または低額で検査できるところがあります。『sexual health clinic』を地域名で検索し、費用を電話で確認しましょう。GP経由だと自己負担になる場合があります。",
      },
    ],
    warnings: [
      "気になる症状や心当たりがあるときは、早めの検査が重症化とパートナーへの感染を防ぎます。放置しないでください。",
      "緊急避妊薬は服用が早いほど効果が高くなります。必要なときは時間を空けず薬局へ相談してください。",
    ],
    sources: [
      { label: "healthdirect｜Sexual health", url: "https://www.healthdirect.gov.au/sexual-health" },
      { label: "healthdirect｜Sexually transmitted infections (STIs)", url: "https://www.healthdirect.gov.au/sexually-transmitted-infections-stis" },
    ],
    verifiedAt: "2026-07-27",
    officialSources: [
      {
        label: "healthdirect｜Sexual health（相談先・検査・秘密厳守の考え方）",
        url: "https://www.healthdirect.gov.au/sexual-health",
        accessedAt: "2026-07-27",
      },
      {
        label: "healthdirect｜Sexually transmitted infections (STIs)（検査と治療）",
        url: "https://www.healthdirect.gov.au/sexually-transmitted-infections-stis",
        accessedAt: "2026-07-27",
      },
      {
        label: "healthdirect｜Emergency contraception（薬局での相談・早期服用）",
        url: "https://www.healthdirect.gov.au/emergency-contraception",
        accessedAt: "2026-07-27",
      },
    ],
    relatedSlugs: [
      "womens-health-guide",
      "gp-urgent-care-emergency",
      "pharmacy-guide",
      "medicare-oshc",
    ],
    updatedAt: "2026-07-27",
    published: true,
  },

  {
    id: "a253",
    title: "女性の健康ガイド｜生理用品・GP・検査・相談",
    slug: "womens-health-guide",
    category: "health",
    hub: "health",
    priority: "P1",
    searchIntent: "豪州での生理用品・婦人科の受診・検診・避妊の一般情報",
    description:
      "オーストラリアでの女性の健康について、生理用品の買い方、婦人科系の悩みの相談先（GP）、子宮頸がん検診などの検査、避妊の相談まで一般的な情報をまとめます。日本のワーホリはMedicare対象外で費用がかかる点や、ひどい痛み・出血など受診すべき目安も解説します。",
    content: [
      "結論から言うと、生理用品はスーパー（Coles・Woolworthsなど）や薬局で普通に買え、婦人科系の悩み・避妊・検診はまず『GP（かかりつけ医）』に相談するのが基本です。必要に応じてGPが専門医（婦人科）を紹介します。日本のワーホリは原則Medicare対象外のため、GP受診や検査は自己負担になり得る点に注意し、海外保険の対象範囲も確認しておきましょう。",
      "生理用品は、ナプキン（pads）、タンポン（tampons）、月経カップ（menstrual cup）、吸水ショーツなどがスーパーや薬局、Chemist Warehouseで手に入ります。ブランドや種類が日本と違うため、パッケージの表示（regular/super など吸収量）を見て選びます。鎮痛薬（paracetamol/ibuprofen）も薬局で購入でき、生理痛がつらいときに使えます。",
      "婦人科系の相談は、月経不順・ひどい生理痛（PMS/月経困難症）・不正出血・おりものの変化・膀胱炎・避妊などが対象です。まずGPに相談し、必要なら検査や専門医の紹介、ピルなどの処方を受けます。避妊やピルの相談も含め、GPは日常的に対応しているので遠慮なく相談してください。言葉が不安なら、通訳サービス（TIS）を使えるクリニックもあります。",
      "検診（スクリーニング）も大切です。オーストラリアには子宮頸がん検診の国のプログラム（Cervical Screening）があり、対象年齢の人が定期的に受けることが推奨されています。Medicareを持たない場合は費用の扱いが異なるため、GPや公的な女性健康サービスで受け方と費用を確認しましょう。乳房のしこりなど気になる症状があるときも、早めにGPへ。",
      "受診すべき目安を知っておきましょう。いつもと違うひどい下腹部痛、大量・長引く出血、高熱を伴う痛み、妊娠の可能性がある腹痛などは、我慢せずGPやUrgent Careを受診してください。急に強い腹痛・大量出血・意識がもうろうとするなど命に関わるサインがあれば、迷わず000か救急外来（ED）へ向かいます。",
    ],
    keyFacts: [
      { label: "生理用品", value: "スーパー・薬局で購入（pads/tampons/cup等）" },
      { label: "相談先", value: "まずGP→必要に応じ婦人科専門医を紹介" },
      { label: "費用", value: "ワーホリはMedicare対象外→GP・検査は自己負担も" },
      { label: "検診", value: "子宮頸がん検診（Cervical Screening）の国プログラム" },
      { label: "避妊・ピル", value: "GPで相談・処方。緊急避妊は薬局（S3）" },
      { label: "受診の目安", value: "ひどい痛み・大量/長引く出血・高熱はGP/UCC" },
    ],
    steps: [
      { title: "生理用品を用意", description: "スーパー・薬局でナプキン・タンポン・カップ等を吸収量表示を見て選びます。" },
      { title: "GPに相談", description: "月経・避妊・検診などの悩みは、まずGPに相談し必要なら紹介を受けます。" },
      { title: "費用を確認", description: "Medicareなしの受診料・検査料、保険の対象範囲を事前に確認します。" },
      { title: "検診を受ける", description: "対象年齢なら子宮頸がん検診の受け方・費用をGPや公的サービスで確認します。" },
      { title: "強い症状は受診", description: "ひどい痛み・大量出血・高熱は我慢せずGP/UCC、命に関わるなら000/EDへ。" },
    ],
    tips: [
      "月経カップや吸水ショーツは繰り返し使えて経済的。旅行やファーム生活でも便利です。",
      "ピルを日本から継続したい人は、英文の処方内容を用意しGPに相談すると切り替えがスムーズです。",
      "言葉が不安なときは、無料通訳サービス（TIS National 131 450）に対応するクリニックを選びましょう。",
    ],
    phrases: [
      { en: "I'd like to see a doctor about period pain / contraception.", ja: "生理痛／避妊についてGPに相談したいです。" },
      { en: "I don't have Medicare. How much is the appointment?", ja: "Medicareがありません。診察料はいくらですか？" },
      { en: "I've had heavy bleeding for several days. Is that okay?", ja: "数日間、出血が多いのですが大丈夫でしょうか？" },
    ],
    faqs: [
      {
        question: "生理用品はどこで買えますか？",
        answer:
          "Coles・WoolworthsなどのスーパーやChemist Warehouseなどの薬局で、ナプキン・タンポン・月経カップ・吸水ショーツが買えます。吸収量の表示（regular/superなど）を見て選びましょう。生理痛の鎮痛薬も薬局で購入できます。",
      },
      {
        question: "婦人科に直接行けますか？",
        answer:
          "オーストラリアでは、まずGP（かかりつけ医）を受診し、必要に応じて婦人科などの専門医を紹介してもらうのが基本です。避妊・月経・検診の相談もGPで対応してもらえます。ワーホリはMedicare対象外で自己負担になり得るため、費用を確認しましょう。",
      },
    ],
    warnings: [
      "いつもと違うひどい下腹部痛・大量や長引く出血・高熱を伴う痛みは、我慢せずGPやUrgent Careを受診してください。",
      "急な激しい腹痛・大量出血・意識がもうろうとするなど命に関わるサインは、迷わず000か救急外来（ED）へ。",
    ],
    sources: [
      { label: "healthdirect｜Women's health", url: "https://www.healthdirect.gov.au/womens-health" },
      { label: "National Cervical Screening Program（Department of Health）", url: "https://www.health.gov.au/our-work/national-cervical-screening-program" },
    ],
    verifiedAt: "2026-07-27",
    officialSources: [
      {
        label: "healthdirect｜Women's health（相談先・受診の目安）",
        url: "https://www.healthdirect.gov.au/womens-health",
        accessedAt: "2026-07-27",
      },
      {
        label: "Department of Health and Aged Care｜National Cervical Screening Program（子宮頸がん検診）",
        url: "https://www.health.gov.au/our-work/national-cervical-screening-program",
        accessedAt: "2026-07-27",
      },
      {
        label: "Services Australia｜Reciprocal Health Care Agreements（日本は対象外＝Medicare非適用）",
        url: "https://www.servicesaustralia.gov.au/reciprocal-health-care-agreements",
        accessedAt: "2026-07-27",
      },
    ],
    relatedSlugs: [
      "sexual-health-clinics",
      "gp-urgent-care-emergency",
      "pharmacy-guide",
      "medicare-oshc",
    ],
    updatedAt: "2026-07-27",
    published: true,
  },

  {
    id: "a254",
    title: "救急車は有料？州別の費用と保険確認",
    slug: "ambulance-costs-insurance",
    category: "health",
    hub: "health",
    priority: "P0",
    searchIntent: "オーストラリアで救急車を呼ぶと有料か・州別の費用・保険",
    description:
      "オーストラリアで救急車（ambulance）を呼ぶと有料かを解説します。多くの州で有料になり得ること、QLD・TASは住民の費用を州が負担する一方で他州は原則有料であること、日本のワーホリは州の制度対象外になりやすく海外保険の救急車カバーが重要であること、そして000への通報自体は無料であることをまとめます。",
    content: [
      "結論から言うと、オーストラリアの救急車は『無料ではない』州が多く、費用は州・準州によって大きく異なります。クイーンズランド（QLD）とタスマニア（TAS）は住民の救急車費用を州が負担しますが、ニューサウスウェールズ（NSW）・ビクトリア（VIC）・南オーストラリア（SA）・西オーストラリア（WA）・首都特別地域（ACT）・北部準州（NT）などでは、原則として利用者が費用を負担します（救急車の会員制度や保険でカバーされている場合を除く）。搬送は高額になり得ます。",
      "重要なのは、これらの州の制度は基本的に『その州の住民（resident）』向けだという点です。日本のワーキングホリデー参加者のような一時滞在者は、州の救急車制度の対象外になりやすく、QLD・TASであっても住民でなければ請求される可能性があります。つまり、ワーホリにとって救急車費用は『どの州でも自己負担になり得る』前提で考えるのが安全です。",
      "だからこそ、海外保険（旅行保険・OVHC）に救急車搬送（ambulance transport）のカバーが含まれているかを、渡航前・加入時に必ず確認してください。多くの医療系海外保険は救急車をカバーしますが、上限額や条件があることもあります。証券の補償内容を確認し、いざというときに慌てないよう緊急連絡先をスマホに保存しておきましょう。",
      "具体的な料金は州・搬送距離・内容で変わり、頻繁に改定されます。このため本記事では特定の金額は断定しません。正確で最新の費用は、各州の救急サービス（例: NSW Ambulance、Ambulance Victoria、Queensland Ambulance Service など）の公式サイトで確認してください。救急車の『会員制度（membership/subscription）』に加入する方法もありますが、対象や条件は州で異なります。",
      "費用が心配でも、緊急時の判断をためらわないでください。『000』への通報自体は無料で、命に関わる状況（強い胸痛、呼吸困難、大出血、意識障害、重度のアレルギー、脳卒中のサインなど）では、費用より救命を優先すべきです。救急車が必要なほどでない場合は、Urgent Care Clinicや自力・タクシーでの受診も選択肢になります。判断に迷うときはhealthdirectの無料電話で相談できます。",
    ],
    keyFacts: [
      { label: "結論", value: "多くの州で有料。費用は州で大きく異なる" },
      { label: "州が負担", value: "QLD・TASは『住民』の救急車費用を州が負担" },
      { label: "原則有料", value: "NSW・VIC・SA・WA・ACT・NT（会員/保険を除く）" },
      { label: "ワーホリ", value: "州制度の対象外になりやすい→自己負担前提で" },
      { label: "対策", value: "海外保険の救急車カバーを証券で確認" },
      { label: "000の通報", value: "電話自体は無料。緊急時は費用より救命を優先" },
    ],
    steps: [
      { title: "保険の救急車カバーを確認", description: "海外保険に救急車搬送のカバーがあるか、上限・条件を証券で確認します。" },
      { title: "滞在する州の制度を把握", description: "滞在州の救急サービス公式サイトで、費用や会員制度の有無を確認します。" },
      { title: "緊急連絡先を保存", description: "000・保険の緊急連絡先・かかりつけ情報をスマホに保存しておきます。" },
      { title: "緊急度を判断", description: "命に関わるなら費用より000。軽症ならUCCや自力受診も検討します。" },
      { title: "利用後は請求に備える", description: "救急車を使ったら請求書・領収書を保管し、保険対象なら請求します。" },
    ],
    tips: [
      "『どの州でも救急車は自己負担になり得る』と考え、救急車をカバーする海外保険を選ぶのが安心です。",
      "命に関わらない受診なら、予約不要のMedicare Urgent Care Clinicが救急外来より早い場合があります。",
      "迷ったらhealthdirectの無料健康相談電話で、救急車が必要かどうかを相談できます。",
    ],
    phrases: [
      { en: "I need an ambulance. Someone is having chest pain / can't breathe.", ja: "救急車が必要です。胸の痛み／呼吸困難の人がいます。", note: "000にかけたとき" },
      { en: "Does my insurance cover ambulance transport?", ja: "私の保険は救急車の搬送をカバーしていますか？" },
      { en: "How much does an ambulance cost in this state?", ja: "この州では救急車はいくらかかりますか？" },
    ],
    faqs: [
      {
        question: "救急車は無料ですか？",
        answer:
          "州によります。QLDとTASは住民の救急車費用を州が負担しますが、NSW・VIC・SA・WA・ACT・NTなどでは原則有料で高額になり得ます。しかもこれらの制度は基本的にその州の住民向けで、一時滞在のワーホリは対象外になりやすいため、どの州でも自己負担になり得る前提で海外保険の救急車カバーを確認しましょう。",
      },
      {
        question: "費用が心配で呼ぶのをためらってしまいます。",
        answer:
          "命に関わる状況では、費用より救命を優先してください。000への通報自体は無料です。強い胸痛・呼吸困難・大出血・意識障害などがあれば迷わず000へ。緊急とまで言えない場合は、Urgent Care Clinicや自力・タクシーでの受診も選択肢で、迷えばhealthdirectに相談できます。",
      },
    ],
    warnings: [
      "救急車費用は州で大きく異なり、頻繁に改定されます。正確な金額は各州の救急サービス公式サイトで確認してください（本記事は特定額を断定しません）。",
      "命に関わるサイン（胸痛・呼吸困難・大出血・意識障害・重度アレルギー・脳卒中サイン）があれば、費用より先に000へ。通報は無料です。",
    ],
    sources: [
      { label: "Triple Zero（000）", url: "https://www.triplezero.gov.au/" },
      { label: "healthdirect（オーストラリア政府）", url: "https://www.healthdirect.gov.au/" },
      { label: "Queensland Ambulance Service", url: "https://www.ambulance.qld.gov.au/" },
      { label: "NSW Ambulance", url: "https://www.ambulance.nsw.gov.au/" },
      { label: "Ambulance Victoria", url: "https://www.ambulance.vic.gov.au/" },
    ],
    verifiedAt: "2026-07-27",
    officialSources: [
      {
        label: "Triple Zero｜Call 000 for an ambulance（通報は無料・緊急時の優先）",
        url: "https://www.triplezero.gov.au/",
        accessedAt: "2026-07-27",
      },
      {
        label: "Queensland Ambulance Service（QLDは住民の費用を州が負担・最新費用は公式で確認）",
        url: "https://www.ambulance.qld.gov.au/",
        accessedAt: "2026-07-27",
      },
      {
        label: "NSW Ambulance（原則有料・費用と会員制度は公式で確認）",
        url: "https://www.ambulance.nsw.gov.au/",
        accessedAt: "2026-07-27",
      },
      {
        label: "Ambulance Victoria（原則有料・membershipの案内は公式で確認）",
        url: "https://www.ambulance.vic.gov.au/",
        accessedAt: "2026-07-27",
      },
    ],
    relatedSlugs: [
      "gp-urgent-care-emergency",
      "overseas-insurance-claim",
      "safety-emergency",
      "medicare-oshc",
    ],
    updatedAt: "2026-07-27",
    published: true,
  },

  {
    id: "a255",
    title: "紫外線・日焼け・皮膚がん対策｜豪州のSun Safety",
    slug: "sunburn-skin-cancer-prevention",
    category: "health",
    hub: "health",
    priority: "P0",
    searchIntent: "オーストラリアの強い紫外線・日焼け・皮膚がんを防ぐ方法",
    description:
      "オーストラリアは世界でも紫外線（UV）が非常に強く、皮膚がんの発生率が高い国です。UV指数3以上で必要になる日焼け対策、Slip・Slop・Slap・Seek・Slideの5つの習慣、SPF50+日焼け止めの使い方、UV指数の確認方法、日焼けやシミ・ほくろの変化への対処まで解説します。",
    content: [
      "結論から言うと、オーストラリアの紫外線対策は『UV指数（UV Index）が3以上のときに、日焼け対策を必ず行う』のが基本です。オーストラリアはオゾン層や地理的条件からUVが非常に強く、皮膚がんの発生率が世界でも高い国です。曇りの日や涼しい日でもUVは強いことがあり、『暑さ』ではなく『UV指数』で判断するのが重要です。対策の合言葉は Slip・Slop・Slap・Seek・Slide の5つです。",
      "5つの習慣は次の通りです。Slip（襟付きシャツなど肌を覆う服を着る）、Slop（SPF50または50+の日焼け止めを塗る）、Slap（つばの広い帽子をかぶる）、Seek（日陰を選ぶ）、Slide（UVカットのサングラスをかける）。特に屋外で働くファームや建設、ビーチや旅行では、この5つを組み合わせて肌と目を守ります。日焼け止めは1つの対策にすぎず、服・帽子・日陰と併用するのが効果的です。",
      "日焼け止めの使い方にはコツがあります。外出の20分ほど前に、露出する肌にたっぷり塗ります（塗る量が少ないと表示のSPFほど効きません）。そして2時間おきに塗り直し、汗をかいたり泳いだり、タオルで拭いたりした後は必ず塗り直します。SPF50/50+で『broad spectrum（UVA・UVB両方）』『water resistant』の表示があるものを選びましょう。日焼け止めは薬局・スーパーで手に入ります。",
      "UV指数は毎日変わるので、確認する習慣をつけましょう。オーストラリア気象局（Bureau of Meteorology）やSunSmart（Cancer Council）のアプリ・サイト、政府機関ARPANSAのリアルタイムUVデータで、その日・その時間のUV指数と『日焼け対策が必要な時間帯（sun protection times）』を確認できます。UV指数が3以上になる時間帯は対策を行い、正午前後のUVが最も強い時間は日陰を活用します。",
      "それでも日焼けしてしまったら、涼しい場所で肌を冷やし、水分を多めに取り、保湿します。水ぶくれができるほどの重いやけど、広範囲の日焼け、発熱・吐き気・強い痛みを伴う場合は受診してください。また、ほくろやシミの『大きさ・形・色が変わる』『出血する』『治らない傷』は皮膚がんのサインのことがあります。気になる変化があれば早めにGPに相談しましょう。早期発見が何より大切です。",
    ],
    keyFacts: [
      { label: "判断基準", value: "UV指数3以上で日焼け対策を必ず行う（暑さでなくUV）" },
      { label: "5つの習慣", value: "Slip（服）Slop（SPF50+）Slap（帽子）Seek（日陰）Slide（サングラス）" },
      { label: "日焼け止め", value: "外出20分前・たっぷり・2時間おきに塗り直し" },
      { label: "選び方", value: "SPF50/50+・broad spectrum・water resistant" },
      { label: "UV確認", value: "BOM／SunSmart／ARPANSAでUV指数と対策時間帯" },
      { label: "受診サイン", value: "ほくろ/シミの変化・治らない傷・重い日焼け" },
    ],
    steps: [
      { title: "UV指数を確認", description: "BOMやSunSmartアプリで、その日のUV指数と日焼け対策が必要な時間帯を確認します。" },
      { title: "服・帽子・サングラス", description: "肌を覆う服・つばの広い帽子・UVカットのサングラスを身につけます。" },
      { title: "日焼け止めを塗る", description: "外出20分前にSPF50+をたっぷり塗り、2時間おき・汗や水の後に塗り直します。" },
      { title: "日陰と時間を工夫", description: "UVが強い正午前後は日陰を選び、屋外作業は時間帯を工夫します。" },
      { title: "肌の変化を観察", description: "ほくろ・シミの変化や治らない傷に気づいたら、早めにGPに相談します。" },
    ],
    tips: [
      "『暑くない＝安全』ではありません。曇りや涼しい日でもUVは強いことがあります。UV指数で判断を。",
      "ファームや建設など屋外の仕事では、長袖・帽子・日焼け止め・こまめな水分補給をセットで習慣に。",
      "サングラスはUV400/UVカット表示のものを。強い日差しは目にもダメージを与えます。",
    ],
    phrases: [
      { en: "What's the UV index today?", ja: "今日のUV指数はどれくらいですか？" },
      { en: "I'm looking for SPF 50 sunscreen, broad spectrum.", ja: "SPF50でbroad spectrumの日焼け止めを探しています。" },
      { en: "This mole has changed shape and colour. Should I see a doctor?", ja: "このほくろの形と色が変わりました。医者に診てもらうべきですか？" },
    ],
    faqs: [
      {
        question: "曇りの日でも日焼け止めは必要ですか？",
        answer:
          "はい。UV（紫外線）は雲を通り抜けるため、曇りや涼しい日でもUV指数が高いことがあります。判断は『暑さ』ではなく『UV指数』で行い、UV指数が3以上のときは曇りでも日焼け対策を行ってください。",
      },
      {
        question: "皮膚がんのサインはどんなものですか？",
        answer:
          "ほくろやシミの大きさ・形・色が変わる、左右非対称になる、ふちがギザギザ、出血する、なかなか治らない傷などは注意すべきサインです。気になる変化があれば早めにGPに相談してください。皮膚がんは早期発見・早期治療が重要です。",
      },
    ],
    warnings: [
      "オーストラリアのUVは非常に強く、短時間でも日焼け・将来の皮膚がんリスクにつながります。UV指数3以上では必ず対策を。",
      "ほくろ・シミの変化や治らない傷は皮膚がんのサインのことがあります。自己判断で放置せず、早めにGPを受診してください。",
    ],
    sources: [
      { label: "SunSmart（Cancer Council Victoria）", url: "https://www.sunsmart.com.au/" },
      { label: "Cancer Council｜Preventing skin cancer", url: "https://www.cancer.org.au/cancer-information/causes-and-prevention/sun-safety" },
      { label: "ARPANSA｜Ultraviolet radiation index", url: "https://www.arpansa.gov.au/our-services/monitoring/ultraviolet-radiation-monitoring/ultraviolet-radiation-index" },
      { label: "Bureau of Meteorology｜UV Index forecast", url: "https://www.bom.gov.au/uv/" },
    ],
    verifiedAt: "2026-07-27",
    officialSources: [
      {
        label: "ARPANSA｜Ultraviolet radiation index（政府のUV監視・UV指数の区分）",
        url: "https://www.arpansa.gov.au/our-services/monitoring/ultraviolet-radiation-monitoring/ultraviolet-radiation-index",
        accessedAt: "2026-07-27",
      },
      {
        label: "SunSmart（Cancer Council）｜UV 3以上で対策・Slip Slop Slap Seek Slide",
        url: "https://www.sunsmart.com.au/",
        accessedAt: "2026-07-27",
      },
      {
        label: "Bureau of Meteorology｜UV Index forecast（日別・地域別のUV予報と対策時間帯）",
        url: "https://www.bom.gov.au/uv/",
        accessedAt: "2026-07-27",
      },
    ],
    relatedSlugs: [
      "gp-urgent-care-emergency",
      "farm-heat-sun-safety",
      "safety-emergency",
      "medicare-oshc",
    ],
    updatedAt: "2026-07-27",
    published: true,
  },
];
