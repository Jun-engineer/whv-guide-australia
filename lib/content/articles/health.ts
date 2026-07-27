import type { Article } from "./types";

export const healthArticles: Article[] = [
  {
    id: "a31",
    title: "医療・保険・病院のかかり方｜GPからMedicareまで",
    slug: "medicare-oshc",
    category: "health",
    hub: "health",
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
    verifiedAt: "2026-07-27",
    officialSources: [
      {
        label: "Services Australia｜Reciprocal Health Care Agreements（日本は対象外＝ワーホリはMedicare非適用）",
        url: "https://www.servicesaustralia.gov.au/reciprocal-health-care-agreements",
        accessedAt: "2026-07-27",
      },
      {
        label: "healthdirect｜Going to a GP（GP受診の流れ）",
        url: "https://www.healthdirect.gov.au/going-to-a-gp",
        accessedAt: "2026-07-27",
      },
      {
        label: "privatehealth.gov.au｜Overseas visitors health cover（海外からの滞在者向け保険の考え方）",
        url: "https://www.privatehealth.gov.au/health_insurance/overseas/",
        accessedAt: "2026-07-27",
      },
    ],
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
    hub: "health",
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
    verifiedAt: "2026-07-27",
    officialSources: [
      {
        label: "Triple Zero｜Call 000 in an emergency（救急・警察・消防）",
        url: "https://www.triplezero.gov.au/",
        accessedAt: "2026-07-27",
      },
      {
        label: "Police Assistance Line｜131 444（命に関わらない警察案件）",
        url: "https://www.police.nsw.gov.au/",
        accessedAt: "2026-07-27",
      },
      {
        label: "Smartraveller（海外でのパスポート紛失・緊急時の公式情報）",
        url: "https://www.smartraveller.gov.au/",
        accessedAt: "2026-07-27",
      },
    ],
    relatedSlugs: ["medicare-oshc", "housing-guide", "jobs-guide"],
    updatedAt: "2026-06-20",
    published: true,
  },

  {
    id: "a47",
    title: "海外生活のメンタルヘルス｜ホームシックと不安への対処",
    slug: "mental-health",
    category: "health",
    hub: "health",
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
    verifiedAt: "2026-07-27",
    officialSources: [
      {
        label: "healthdirect｜Mental health（相談窓口・受診の目安）",
        url: "https://www.healthdirect.gov.au/mental-health",
        accessedAt: "2026-07-27",
      },
      {
        label: "Lifeline Australia｜13 11 14（24時間・無料の危機相談）",
        url: "https://www.lifeline.org.au/",
        accessedAt: "2026-07-27",
      },
      {
        label: "Beyond Blue（不安・抑うつの無料サポート）",
        url: "https://www.beyondblue.org.au/",
        accessedAt: "2026-07-27",
      },
    ],
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

  {
    id: "a256",
    title: "熱中症の症状と応急対応｜仕事・旅行・ファーム",
    slug: "heatstroke-guide",
    category: "health",
    hub: "health",
    priority: "P0",
    searchIntent: "熱中症の症状の見分け方と応急処置・000を呼ぶ判断",
    description:
      "オーストラリアの暑さで起こる熱中症について、軽い『熱疲労（heat exhaustion）』と命に関わる『熱射病（heat stroke）』の見分け方、その場でできる応急対応、そして000を呼ぶべきサインを解説します。ファーム・建設・屋外観光など暑い環境で働くワーホリ向けの予防策もまとめます。",
    content: [
      "結論から言うと、熱中症には軽度の『熱疲労（heat exhaustion）』と、命に関わる緊急事態『熱射病（heat stroke）』があり、意識がおかしい・ぐったりして反応が鈍い・体が異常に熱いといったサインがあれば、迷わず000に電話してください。熱射病は放置すると命に関わります。オーストラリアの夏は非常に暑く、特にファーム・建設・屋外の仕事では熱中症のリスクが高いため、見分け方と対応を知っておくことが大切です。",
      "熱疲労（heat exhaustion）のサインは、大量の汗、強い疲労感、頭痛、めまい、吐き気、筋肉のけいれん（こむら返り）、皮膚が青白く冷たい、脈が速いなどです。この段階では、涼しい日陰やエアコンのある場所に移動し、余分な衣類をゆるめ、水分（できれば少しずつ）を取り、体を濡らして風を送って冷やせば、多くの場合は回復します。無理をせず休むことが重要です。",
      "熱射病（heat stroke）は緊急事態です。混乱・意識のもうろう・言動がおかしい、反応が鈍い・意識を失う、けいれん（発作）、体が非常に熱い、汗が出なくなり皮膚が熱く乾く（または逆に大量発汗）などのサインが出ます。これらがあれば、すぐに000へ。救急車を待つ間も、涼しい場所へ移し、衣類をゆるめ、水や濡れタオル・うちわ・扇風機で積極的に体を冷やし続けます。意識がない人に無理に水を飲ませないでください。",
      "応急対応の基本は『冷やす・休ませる・水分・観察』です。日陰や室内へ移動、衣類をゆるめる、首・脇・足の付け根など太い血管を冷やす、意識があれば水分を少しずつ取らせる、症状が改善しない・悪化するなら受診（軽症でもGPやUrgent Care、重症は000/ED）。アルコールやカフェインは脱水を進めるので避けます。",
      "予防が何より大切です。こまめに水を飲む（のどが渇く前に）、日中の最も暑い時間帯（正午前後）の激しい作業を避ける、日陰や休憩をこまめに取る、通気性のよい服と帽子、日焼け対策を併用する、体調が悪い日は無理をしない。屋外の仕事では、雇用主に暑さ対策（水・日陰・休憩）を確認しましょう。熱波の予報はオーストラリア気象局（BOM）で確認できます。",
    ],
    keyFacts: [
      { label: "2種類", value: "熱疲労（回復し得る）と熱射病（命に関わる緊急）" },
      { label: "000を呼ぶサイン", value: "意識障害・反応が鈍い・体が異常に熱い・けいれん" },
      { label: "応急対応", value: "涼しい場所・衣類ゆるめる・積極的に冷やす・水分" },
      { label: "熱疲労のサイン", value: "大量の汗・めまい・頭痛・吐き気・筋けいれん" },
      { label: "避けるもの", value: "アルコール・カフェイン（脱水を進める）" },
      { label: "予防", value: "こまめな水分・暑い時間帯を避ける・日陰と休憩" },
    ],
    steps: [
      { title: "涼しい場所へ移す", description: "日陰やエアコンのある場所へ移動し、余分な衣類をゆるめます。" },
      { title: "積極的に冷やす", description: "水・濡れタオル・うちわ・扇風機で体を冷やし、首・脇・足の付け根を重点的に。" },
      { title: "水分を取らせる", description: "意識があれば水を少しずつ。意識がない人には飲ませないでください。" },
      { title: "重症サインを判断", description: "意識障害・反応が鈍い・けいれん・体が異常に熱いなら、すぐ000へ。" },
      { title: "回復しなければ受診", description: "改善しない・繰り返す場合はGPやUrgent Care、重症は救急外来（ED）へ。" },
    ],
    tips: [
      "『のどが渇く前に』こまめに水を飲むのが基本。屋外作業では水を切らさないようにしましょう。",
      "スポーツドリンクや経口補水液は、大量に汗をかいたときの塩分・水分補給に役立ちます。",
      "同僚同士で声をかけ合い、様子がおかしい人がいたら早めに休ませ、無理に働かせないことが大切です。",
    ],
    phrases: [
      { en: "I think he has heat stroke. He's confused and very hot.", ja: "彼は熱射病だと思います。混乱していて体がとても熱いです。", note: "000にかけたとき" },
      { en: "I feel dizzy and sick from the heat. I need to rest in the shade.", ja: "暑さでめまいと吐き気がします。日陰で休む必要があります。" },
      { en: "Can I take a break? I'm not feeling well in this heat.", ja: "休憩してもいいですか？この暑さで具合が悪いです。" },
    ],
    faqs: [
      {
        question: "熱疲労と熱射病はどう見分けますか？",
        answer:
          "熱疲労は大量の汗・めまい・頭痛・吐き気などで、涼しい場所で休み水分を取れば回復することが多いです。一方、熱射病は意識の混乱・反応の鈍さ・意識消失・けいれん・体が異常に熱いなどの重いサインが出て、命に関わる緊急事態です。重いサインがあれば迷わず000へ。",
      },
      {
        question: "屋外で働くとき、暑さ対策はどう頼めばいいですか？",
        answer:
          "雇用主には安全に働ける環境を整える責任があります。水・日陰・休憩の確保を確認し、体調が悪いときは無理せず休憩を申し出ましょう。『Can I take a break? I'm not feeling well in this heat.』などと伝えられます。熱波の日はBOMの予報も確認してください。",
      },
    ],
    warnings: [
      "熱射病（意識障害・反応が鈍い・体が異常に熱い・けいれん）は命に関わる緊急事態です。ためらわず000に電話してください。",
      "意識がない人に無理に水を飲ませないでください。誤嚥の危険があります。救急車を待つ間は体を冷やし続けます。",
    ],
    sources: [
      { label: "healthdirect｜Heat-related illness", url: "https://www.healthdirect.gov.au/heat-related-illness" },
      { label: "Bureau of Meteorology｜Heatwave warnings", url: "https://www.bom.gov.au/australia/heatwave/" },
    ],
    verifiedAt: "2026-07-27",
    officialSources: [
      {
        label: "healthdirect｜Heat-related illness（熱疲労と熱射病の症状・応急処置・受診の目安）",
        url: "https://www.healthdirect.gov.au/heat-related-illness",
        accessedAt: "2026-07-27",
      },
      {
        label: "Bureau of Meteorology｜Heatwave service（熱波予報・警報）",
        url: "https://www.bom.gov.au/australia/heatwave/",
        accessedAt: "2026-07-27",
      },
      {
        label: "Triple Zero｜Call 000 in an emergency（重症は000）",
        url: "https://www.triplezero.gov.au/",
        accessedAt: "2026-07-27",
      },
    ],
    relatedSlugs: [
      "gp-urgent-care-emergency",
      "sunburn-skin-cancer-prevention",
      "farm-heat-sun-safety",
      "safety-emergency",
    ],
    updatedAt: "2026-07-27",
    published: true,
  },

  {
    id: "a257",
    title: "虫・クラゲ・ヘビ・クモに刺された／噛まれた場合",
    slug: "bites-stings-wildlife",
    category: "health",
    hub: "health",
    priority: "P1",
    searchIntent: "豪州でヘビ・クモ・クラゲ・虫に噛まれた/刺されたときの対応",
    description:
      "オーストラリアでヘビ・クモ・クラゲ・虫などに噛まれたり刺されたときの基本的な対応を、公式の応急処置情報に沿って解説します。命に関わる可能性があるものは迷わず000へ。ヘビ咬傷の圧迫固定法、クラゲ対応、アレルギー（アナフィラキシー）のサインまで、やってはいけないことも含めてまとめます。",
    content: [
      "結論から言うと、ヘビに噛まれた・危険なクモ（ファンネルウェブ）に噛まれた・熱帯の海でクラゲに刺されて重い症状が出た・全身のアレルギー反応（アナフィラキシー）が出た——このような場合は、命に関わる可能性があるため迷わず000に電話してください。オーストラリアには毒を持つ生き物がいますが、正しい応急処置と早い受診で重症化を防げます。自己判断で危険な処置をしないことが重要です。",
      "ヘビに噛まれたとき（snake bite）の基本は『動かず・圧迫固定・000』です。噛まれた手足を心臓より下げず安静にし、傷口の上から包帯で圧迫し、手足全体を副木などで固定して動かさないようにして、すぐ000へ。やってはいけないこと——傷口を洗う（毒の判定に使う）・切る・吸い出す・きつく縛って血流を止める（tourniquet）・毒を絞り出そうとする、はいずれもNGです。どのヘビか分からなくても、すべて危険とみなして対応します。",
      "クモや海の生き物も種類で対応が異なります。ファンネルウェブ（funnel-web）などの危険なクモはヘビと同じ圧迫固定＋000、レッドバック（redback）は圧迫固定はせず冷やして受診します。クラゲは、熱帯北部のボックスジェリーフィッシュ／イルカンジは命に関わり得るため000＋酢（vinegar）をかける（こすらない）、温帯のカツオノエボシ（bluebottle）は海水で洗い温水につけるなど、地域と種類で対応が違います。迷ったら無理な処置をせず、healthdirectや000に相談してください。",
      "虫刺され・ダニ（tick）にも注意します。多くの虫刺されは冷やして様子を見れば治まりますが、東部のマダニはアレルギーの原因になることがあり、掻き出さず凍結スプレー等で対処するのが推奨されます。刺された後に、じんましんが全身に広がる・唇や顔の腫れ・息苦しさ・声のかすれ・ふらつきなどの『アナフィラキシー』のサインが出たら、命に関わる緊急事態です。アドレナリン自己注射器（EpiPen）があれば使い、すぐ000へ。",
      "受診の目安を知っておきましょう。命に関わるサイン（意識障害、呼吸困難、全身のアレルギー反応、ヘビ・危険なクモの咬傷）は000。腫れ・痛み・発赤が強い、感染が疑われる（熱を持つ・膿）、症状が長引く場合はGPやUrgent Careへ。応急処置は必ず公式の最新情報（healthdirect、St John Ambulance など）に従い、この記事は一般的な目安として、実際の手順は公式で確認してください。",
    ],
    keyFacts: [
      { label: "000を呼ぶ", value: "ヘビ・危険なクモの咬傷・重いクラゲ被害・アナフィラキシー" },
      { label: "ヘビ咬傷", value: "動かさず圧迫固定（pressure immobilisation）＋000" },
      { label: "やってはいけない", value: "洗う・切る・吸う・きつく縛る（tourniquet）" },
      { label: "クモ", value: "ファンネルウェブ=圧迫固定＋000／レッドバック=冷やして受診" },
      { label: "クラゲ", value: "熱帯=000＋酢／温帯bluebottle=海水・温水（種類で違う）" },
      { label: "アナフィラキシー", value: "全身じんましん・顔の腫れ・息苦しさ→EpiPen＋000" },
    ],
    steps: [
      { title: "危険度を判断", description: "ヘビ・危険なクモ・重いクラゲ被害・全身のアレルギー反応なら、すぐ000へ。" },
      { title: "ヘビ咬傷は圧迫固定", description: "手足を安静にし包帯で圧迫、副木で固定して動かさず000を待ちます。" },
      { title: "種類に応じた対応", description: "クモ・クラゲは種類で対応が違うため、公式情報や000の指示に従います。" },
      { title: "アレルギーに注意", description: "全身症状（息苦しさ・顔の腫れ）が出たらEpiPenを使い000へ。" },
      { title: "軽症でも受診を検討", description: "腫れ・痛み・感染の兆候が強い、長引く場合はGP/UCCを受診します。" },
    ],
    tips: [
      "ファームやブッシュ、キャンプでは、長ズボン・靴・手袋で肌の露出を減らすと咬傷・刺傷のリスクが下がります。",
      "ヘビを見ても近づかず、追い払おうとしないこと。多くの咬傷は捕まえよう・殺そうとして起きています。",
      "熱帯の海（北部QLD/NT/WA北部）はシーズンに危険なクラゲが出ます。看板の指示とライフガードの案内に従いましょう。",
    ],
    phrases: [
      { en: "A snake has bitten my leg. We need an ambulance now.", ja: "ヘビに足を噛まれました。今すぐ救急車が必要です。", note: "000にかけたとき" },
      { en: "She's been stung and can't breathe properly. It might be an allergic reaction.", ja: "彼女は刺されてうまく呼吸できません。アレルギー反応かもしれません。" },
      { en: "I was stung by a jellyfish. What should I do?", ja: "クラゲに刺されました。どうすればいいですか？", note: "ライフガードに" },
    ],
    faqs: [
      {
        question: "ヘビに噛まれたら傷口を洗ってはいけないのですか？",
        answer:
          "はい。オーストラリアの公式応急処置では、ヘビの咬傷で傷口を洗わないよう案内されています。皮膚に残った毒がどのヘビかの判定（治療の選択）に使われるためです。傷口を切る・吸い出す・きつく縛るのもNG。手足を動かさず包帯で圧迫固定し、すぐ000へ。",
      },
      {
        question: "毒があるか分からないときはどうすればいいですか？",
        answer:
          "種類が分からなくても、危険なものとみなして安全側で対応してください。ヘビ・危険なクモの咬傷や、全身のアレルギー反応（アナフィラキシー）は迷わず000へ。判断に迷う軽症なら、healthdirectの無料電話で相談するか、GP・Urgent Careを受診しましょう。",
      },
    ],
    warnings: [
      "全身のじんましん・顔や唇の腫れ・息苦しさ・声のかすれ・ふらつきは、命に関わるアナフィラキシーのサインです。EpiPenを使いすぐ000へ。",
      "応急処置は種類によって正解が異なります。誤った処置はかえって危険です。必ず公式情報（healthdirect・州の救急/消防）や000の指示に従ってください。",
    ],
    sources: [
      { label: "healthdirect｜Bites and stings", url: "https://www.healthdirect.gov.au/bites-and-stings" },
      { label: "healthdirect｜Snake bites", url: "https://www.healthdirect.gov.au/snake-bites" },
    ],
    verifiedAt: "2026-07-27",
    officialSources: [
      {
        label: "healthdirect｜Bites and stings（虫・クラゲ・ヘビ・クモの応急処置の考え方）",
        url: "https://www.healthdirect.gov.au/bites-and-stings",
        accessedAt: "2026-07-27",
      },
      {
        label: "healthdirect｜Snake bites（圧迫固定・やってはいけないこと・000）",
        url: "https://www.healthdirect.gov.au/snake-bites",
        accessedAt: "2026-07-27",
      },
      {
        label: "Triple Zero｜Call 000 in an emergency（重症・毒性の高い咬傷は000）",
        url: "https://www.triplezero.gov.au/",
        accessedAt: "2026-07-27",
      },
    ],
    relatedSlugs: [
      "gp-urgent-care-emergency",
      "safety-emergency",
      "pharmacy-guide",
      "medicare-oshc",
    ],
    updatedAt: "2026-07-27",
    published: true,
  },

  {
    id: "a258",
    title: "食物アレルギーを英語で伝える方法",
    slug: "food-allergy-eating-out",
    category: "health",
    hub: "health",
    priority: "P1",
    searchIntent: "外食やシェアハウスで食物アレルギーを英語で安全に伝える方法",
    description:
      "オーストラリアで食物アレルギーを英語で安全に伝える方法を解説します。レストランでの言い方、食品表示（アレルゲン表示）の見方、シェアハウスでの注意、そしてアナフィラキシーが起きたときのアドレナリン自己注射器（EpiPen）と000の対応まで、実用フレーズ付きでまとめます。",
    content: [
      "結論から言うと、食物アレルギーは外食時に『I have a food allergy（食物アレルギーがあります）』とはっきり伝え、具体的なアレルゲン名（例: nuts＝ナッツ、peanuts＝ピーナッツ、eggs＝卵、shellfish＝甲殻類など）を明確に言うことが大切です。そして万一、全身のアレルギー反応（アナフィラキシー）が出たら、アドレナリン自己注射器（EpiPen）を使い、すぐ000に電話してください。命に関わるため、伝え方と緊急対応の両方を準備しておきましょう。",
      "レストランでの伝え方にはコツがあります。注文前にスタッフへ『I have a severe allergy to ◯◯. Does this dish contain it?（◯◯に重いアレルギーがあります。この料理に入っていますか？）』と確認し、少量でも危険な場合は『Even a small amount can make me very sick.（少量でも重い症状が出ます）』と重症度を伝えます。調理器具や揚げ油の共有による混入（cross-contamination）も起こり得るため、心配なときはその点も確認しましょう。",
      "食品表示（ラベル）の見方も知っておくと安心です。オーストラリアでは、包装食品に主要なアレルゲン（ピーナッツ、木の実、卵、乳、魚、甲殻類、大豆、小麦・グルテン、ごま、ルピナスなど）の表示が法律で義務づけられており、分かりやすい書き方（Plain English Allergen Labelling）で『Contains: ...』などと記載されます。スーパーで買うときはラベルの『Contains』『May contain traces of...』を確認しましょう。",
      "シェアハウスでも配慮が必要です。共有のキッチンでは、調理器具・まな板・トースター・油などからアレルゲンが混入することがあります。ハウスメイトに自分のアレルギーを伝え、食材を分けて保管する、器具を分ける、使用後に洗うなどをお願いしておくと安全です。緊急時に備えて、ハウスメイトにEpiPenの場所と使い方、000への連絡を共有しておくと安心です。",
      "アナフィラキシーは命に関わる緊急事態です。全身のじんましん、唇・顔・のどの腫れ、息苦しさ・ゼーゼー、声のかすれ、飲み込みにくさ、ふらつき・意識がもうろう——これらのサインが出たら、処方されているアドレナリン自己注射器（EpiPen）を太ももの外側に注射し、すぐ000へ。症状が軽くても油断せず、救急に連絡してください。EpiPenを持つ人は、常に携帯し、使用期限を確認しておきましょう。",
    ],
    keyFacts: [
      { label: "基本の伝え方", value: "I have a food allergy to ◯◯（具体名を明確に）" },
      { label: "重症度を伝える", value: "Even a small amount can make me very sick." },
      { label: "混入に注意", value: "調理器具・油の共有（cross-contamination）" },
      { label: "食品表示", value: "義務表示。Contains: / May contain traces of...を確認" },
      { label: "アナフィラキシー", value: "全身症状→EpiPenを太もも外側＋000" },
      { label: "EpiPen", value: "常に携帯・使用期限を確認・場所を周囲に共有" },
    ],
    steps: [
      { title: "アレルゲン名を覚える", description: "自分のアレルゲンの英語名（nuts/eggs/shellfishなど）を正確に言えるようにします。" },
      { title: "注文前に伝える", description: "スタッフに重症度を含めて伝え、料理に含まれるか・混入の可能性を確認します。" },
      { title: "ラベルを確認", description: "包装食品はContains表示・微量混入の注意書きを確認して選びます。" },
      { title: "共有環境に配慮", description: "シェアハウスでは器具・保管を分け、ハウスメイトに伝えておきます。" },
      { title: "緊急対応を準備", description: "EpiPenを携帯し、使い方と000への連絡を周囲と共有しておきます。" },
    ],
    tips: [
      "アレルゲン名を書いた『アレルギーカード（英語）』を用意し、注文時にスタッフに見せると確実に伝わります。",
      "『anaphylaxis（アナフィラキシー）』という単語を覚えておくと、緊急時に状況を的確に伝えられます。",
      "外食が不安なときは、事前に店に電話して対応可能か確認したり、アレルギー対応をうたう店を選ぶと安心です。",
    ],
    phrases: [
      { en: "I have a severe allergy to nuts. Does this dish contain any nuts?", ja: "ナッツに重いアレルギーがあります。この料理にナッツは入っていますか？" },
      { en: "Even a small amount can make me very sick. Please be careful with cross-contamination.", ja: "少量でも重い症状が出ます。混入に気をつけてください。" },
      { en: "She's having an allergic reaction and can't breathe. We've used an EpiPen.", ja: "彼女はアレルギー反応で呼吸できません。EpiPenを使いました。", note: "000にかけたとき" },
    ],
    faqs: [
      {
        question: "レストランでどう伝えれば安全ですか？",
        answer:
          "注文前にスタッフへ『I have a severe allergy to ◯◯（◯◯に重いアレルギーがあります）』と伝え、その料理に含まれるか、調理器具や油の共有による混入がないかを確認しましょう。少量でも危険なら重症度も伝えます。英語のアレルギーカードを見せると確実です。",
      },
      {
        question: "アナフィラキシーが起きたらどうすればいいですか？",
        answer:
          "全身のじんましん・顔やのどの腫れ・息苦しさ・声のかすれ・ふらつきなどが出たら、処方されているアドレナリン自己注射器（EpiPen）を太ももの外側に注射し、すぐ000に電話してください。症状が軽く見えても油断せず救急に連絡します。EpiPenは常に携帯しましょう。",
      },
    ],
    warnings: [
      "アナフィラキシー（全身症状・息苦しさ・のどの腫れ）は命に関わります。EpiPenを使い、ためらわず000に電話してください。",
      "『大丈夫だろう』という自己判断は危険です。少量でも重症化し得るため、外食・共有キッチンでは必ずアレルゲンの有無を確認しましょう。",
    ],
    sources: [
      { label: "healthdirect｜Food allergies", url: "https://www.healthdirect.gov.au/food-allergies" },
      { label: "healthdirect｜Anaphylaxis", url: "https://www.healthdirect.gov.au/anaphylaxis" },
      { label: "Food Standards Australia New Zealand｜Allergen labelling", url: "https://www.foodstandards.gov.au/consumer/labelling/allergen-labelling" },
    ],
    verifiedAt: "2026-07-27",
    officialSources: [
      {
        label: "healthdirect｜Food allergies（食物アレルギーの基礎・受診）",
        url: "https://www.healthdirect.gov.au/food-allergies",
        accessedAt: "2026-07-27",
      },
      {
        label: "healthdirect｜Anaphylaxis（アナフィラキシーのサイン・EpiPen・000）",
        url: "https://www.healthdirect.gov.au/anaphylaxis",
        accessedAt: "2026-07-27",
      },
      {
        label: "Food Standards Australia New Zealand｜Allergen labelling（主要アレルゲンの義務表示・Plain English Allergen Labelling）",
        url: "https://www.foodstandards.gov.au/consumer/labelling/allergen-labelling",
        accessedAt: "2026-07-27",
      },
    ],
    relatedSlugs: [
      "pharmacy-guide",
      "gp-urgent-care-emergency",
      "safety-emergency",
      "medicare-oshc",
    ],
    updatedAt: "2026-07-27",
    published: true,
  },

  {
    id: "a259",
    title: "仕事中の怪我で病院へ行く流れと書類",
    slug: "work-injury-medical",
    category: "health",
    hub: "health",
    priority: "P1",
    searchIntent: "仕事中に怪我をしたときの受診の流れと労災・必要書類",
    description:
      "オーストラリアで仕事中に怪我をしたときの、受診の流れと必要な書類を解説します。まず雇用主へ報告すること、労災補償（workers' compensation）は各州の制度で医療費・休業補償の対象になり得ること、医師の診断書（Certificate of Capacity）や記録の重要性、そしてワーホリも労働者として対象になり得る点をまとめます。",
    content: [
      "結論から言うと、仕事中に怪我をしたら、①命に関わる緊急なら000／救急外来（ED）、②そうでなければ早めにGPやUrgent Careを受診し、③できるだけ早く雇用主に怪我を報告することが基本の流れです。オーストラリアには各州・準州ごとに『労災補償（workers' compensation）』の制度があり、仕事に関連する怪我は医療費や休業中の収入の補償対象になり得ます。ワーキングホリデーで働く人も『労働者（worker）』であれば対象になり得ます。",
      "最初のステップは受診と報告です。重傷（大出血、骨折、頭部の強打、意識障害など）は迷わず000／ED。それ以外は早めにGPやUrgent Careを受診し、怪我の内容と『仕事中に起きたこと』を医師に伝えます。並行して、できるだけ早く雇用主（またはスーパーバイザー）に怪我を報告します。報告が遅れると労災の手続きで不利になることがあるため、その日のうちに知らせるのが理想です。",
      "書類と記録がとても重要です。労災補償を受けるには、通常、医師が発行する診断書（Certificate of Capacity／医療証明）が必要になります。加えて、いつ・どこで・どのように怪我をしたか、目撃者、雇用主に報告した日時、治療内容や領収書などを記録・保管しておきましょう。写真やメモも役立ちます。雇用主は職場の事故を記録する義務があり、労災の申請手続きについて案内する立場にあります。",
      "労災補償の仕組みは州で異なります。制度や窓口は州・準州ごとに分かれており（例: NSWはicare/State Insurance Regulatory Authority、VICはWorkSafe Victoria、QLDはWorkCover Queensland、SAはReturnToWorkSA、WAはWorkCover WAなど）、補償の範囲や申請方法に違いがあります。重要なのは、労災は原則としてMedicareやビザの種類に関わらず『仕事に関連する怪我』を対象にする制度だという点です。詳しい仕組みと申請は、労災の解説記事や各州の窓口で確認してください。",
      "泣き寝入りしないことが大切です。『ワーホリだから』『英語が不安だから』と補償を諦める必要はありません。雇用主が報告や労災申請に協力しない、補償を拒む、報告を理由に不当な扱いをする——such caseでは、州の労災当局やFair Work、労働組合などの公的窓口に相談できます。まずは怪我の治療を最優先にし、記録を残し、必要なら公的窓口に助けを求めましょう。",
    ],
    keyFacts: [
      { label: "流れ", value: "重傷は000/ED→GP/UCC受診→雇用主へ早期報告" },
      { label: "労災補償", value: "各州のworkers' compensation。医療費・休業補償が対象に" },
      { label: "対象", value: "『労働者』ならワーホリも対象になり得る（ビザ問わず）" },
      { label: "必要書類", value: "医師の診断書（Certificate of Capacity）・記録" },
      { label: "記録すべき事", value: "日時・場所・状況・目撃者・報告日時・領収書" },
      { label: "困ったら", value: "州の労災当局・Fair Work・労働組合に相談" },
    ],
    steps: [
      { title: "まず治療", description: "重傷は000/ED、それ以外は早めにGPやUrgent Careを受診します。" },
      { title: "雇用主に報告", description: "できればその日のうちに、怪我の内容と発生状況を雇用主へ報告します。" },
      { title: "診断書をもらう", description: "労災に必要な医師の診断書（Certificate of Capacity）を取得します。" },
      { title: "記録を残す", description: "日時・場所・状況・目撃者・治療内容・領収書などを保管します。" },
      { title: "労災を申請", description: "州の労災制度に申請します。困ったら州当局やFair Workに相談します。" },
    ],
    tips: [
      "怪我をしたら小さく見えてもその日のうちに雇用主へ報告を。後日の申請で『いつ・どう起きたか』が重要になります。",
      "医師には必ず『仕事中に起きた怪我』であることを伝えましょう。労災用の診断書に反映されます。",
      "英語が不安なら、無料通訳サービス（TIS National 131 450）に対応する医療機関・窓口を利用できます。",
    ],
    phrases: [
      { en: "I got injured at work today. I need to report it.", ja: "今日、仕事中に怪我をしました。報告する必要があります。", note: "雇用主に" },
      { en: "This injury happened at work. I may need a workers' compensation certificate.", ja: "この怪我は仕事中に起きました。労災の診断書が必要かもしれません。", note: "医師に" },
      { en: "Can you give me a Certificate of Capacity for my work injury?", ja: "労災用の診断書（Certificate of Capacity）をもらえますか？" },
    ],
    faqs: [
      {
        question: "ワーホリでも労災は使えますか？",
        answer:
          "労災補償（workers' compensation）は、原則として『労働者（worker）』であればビザの種類に関わらず対象になり得る制度です。仕事に関連する怪我は、医療費や休業中の収入の補償対象になり得ます。まず治療を受け、雇用主に報告し、医師の診断書を取得したうえで、州の労災制度に申請しましょう。",
      },
      {
        question: "雇用主が報告や労災に協力してくれません。",
        answer:
          "雇用主には職場の事故を記録し、労災申請を案内する立場があります。協力が得られない・補償を拒む・報告を理由に不当な扱いを受ける場合は、州の労災当局（icare/WorkSafe/WorkCover等）やFair Work、労働組合などの公的窓口に相談できます。記録を残しておくことが大切です。",
      },
    ],
    warnings: [
      "大出血・骨折・頭部の強打・意識障害など重い怪我は、労災の手続きより先に000／救急外来（ED）で治療を受けてください。",
      "報告が遅れると労災の手続きで不利になることがあります。小さな怪我でもその日のうちに雇用主へ報告し、記録を残しましょう。",
    ],
    sources: [
      { label: "Safe Work Australia｜Workers' compensation", url: "https://www.safeworkaustralia.gov.au/workers-compensation" },
      { label: "Fair Work Ombudsman｜Sick & injured workers", url: "https://www.fairwork.gov.au/" },
    ],
    verifiedAt: "2026-07-27",
    officialSources: [
      {
        label: "Safe Work Australia｜Workers' compensation（各州の労災制度・対象の考え方）",
        url: "https://www.safeworkaustralia.gov.au/workers-compensation",
        accessedAt: "2026-07-27",
      },
      {
        label: "Fair Work Ombudsman（職場の権利・不当な扱いの相談窓口）",
        url: "https://www.fairwork.gov.au/",
        accessedAt: "2026-07-27",
      },
    ],
    relatedSlugs: [
      "workplace-injury-workers-comp",
      "overseas-insurance-claim",
      "gp-urgent-care-emergency",
      "medicare-oshc",
    ],
    updatedAt: "2026-07-27",
    published: true,
  },

  {
    id: "a260",
    title: "山火事（Bushfire）への備えと警報アプリ",
    slug: "bushfire-safety",
    category: "health",
    hub: "health",
    priority: "P0",
    searchIntent: "オーストラリアの山火事への備え・警報レベル・アプリ",
    description:
      "オーストラリアの山火事（Bushfire）への備え方を解説します。火災危険度レーティング（Fire Danger Rating）と警報レベル（Advice／Watch and Act／Emergency Warning）の意味、州消防の公式アプリ、避難の考え方、Total Fire Ban（火気全面禁止）まで、ワーホリが夏を安全に過ごすための基本をまとめます。",
    content: [
      "結論から言うと、山火事シーズン（主に夏）には、①州の消防当局の公式アプリ・サイトで最新の警報を確認し、②火災危険度が非常に高い日は早めに危険な場所を離れる計画を持ち、③『Emergency Warning（緊急警報）』が出たら指示にすぐ従う——ことが安全の基本です。命に関わる状況では000に電話します。ブッシュや地方で働く・滞在するワーホリは、山火事の情報源と避難の考え方を知っておくことが重要です。",
      "まず『Fire Danger Rating（火災危険度レーティング）』を理解しましょう。オーストラリアでは全国共通の基準で、Moderate（中）／High（高）／Extreme（極度）／Catastrophic（壊滅的）などの区分で、その日の火災の危険度を示します。特に最高区分の日は、火がついた場合の危険が非常に大きいため、危険な地域からは早めに離れるのが最も安全とされています。道路脇や消防署の表示、アプリで確認できます。",
      "『警報レベル』は3段階が基本です。Advice（アドバイス＝情報。周囲を確認し備える）、Watch and Act（監視して行動＝危険が高まっている。行動を起こす）、Emergency Warning（緊急警報＝差し迫った危険。すぐ行動）。Emergency Warningが出たら、指示（避難や屋内退避など）に直ちに従ってください。迷って行動が遅れることが最も危険です。",
      "情報源は州の消防当局の公式アプリ・サイトです。例として、NSWは『Hazards Near Me』（NSW RFS）、VICは『VicEmergency』、QLDはQueensland Fire Department/QFESの情報、SA・WA・TAS・NT・ACTにもそれぞれの消防・緊急サービスがあります。加えて、オーストラリア気象局（BOM）の高温・強風の予報も火災リスクの目安になります。滞在する州のアプリを入れ、通知をオンにしておきましょう。",
      "日々の備えも大切です。『Total Fire Ban（火気全面禁止）』の日は、屋外での火の使用（焚き火・BBQの一部・機械の使用など）が禁止され、違反は重い罰則の対象です。避難の計画（どのルートで・どこへ・いつ離れるか）を事前に考え、貴重品・書類・水・薬をまとめておくと安心です。煙が多い日は屋内にとどまり窓を閉める、呼吸器に不安がある人は特に注意しましょう。命の危険を感じたら000へ。",
    ],
    keyFacts: [
      { label: "基本", value: "州消防アプリで警報確認・危険な日は早めに離れる" },
      { label: "火災危険度", value: "Moderate/High/Extreme/Catastrophic（最高区分は特に危険）" },
      { label: "警報レベル", value: "Advice→Watch and Act→Emergency Warning（すぐ行動）" },
      { label: "公式アプリ例", value: "Hazards Near Me(NSW)・VicEmergency(VIC)等・州で異なる" },
      { label: "Total Fire Ban", value: "火気全面禁止の日。違反は重い罰則" },
      { label: "緊急", value: "命の危険を感じたら000。指示に直ちに従う" },
    ],
    steps: [
      { title: "州のアプリを入れる", description: "滞在する州の消防・緊急アプリを入れ、通知をオンにします。" },
      { title: "危険度を確認", description: "毎日Fire Danger Ratingを確認し、最高区分の日は特に警戒します。" },
      { title: "避難計画を持つ", description: "離れるルート・場所・タイミング、持ち出す物を事前に決めておきます。" },
      { title: "警報に従う", description: "Watch and Act・Emergency Warningが出たら、指示に直ちに従います。" },
      { title: "火気の規制を守る", description: "Total Fire Banの日は屋外での火の使用を避け、違反しないようにします。" },
    ],
    tips: [
      "地方やファームで働くときは、雇用主に山火事時の避難計画・連絡方法を確認しておきましょう。",
      "煙が広がる日は屋内にとどまり窓を閉める、外出を控えるなどで健康被害を減らせます。",
      "『いつ離れるか』を先に決めておくのが鍵。ぎりぎりの避難が最も危険とされています。",
    ],
    phrases: [
      { en: "Is there a bushfire warning for this area today?", ja: "今日この地域に山火事の警報は出ていますか？" },
      { en: "There's a fire nearby and we're in danger. We need help.", ja: "近くで火事が起きていて危険です。助けが必要です。", note: "000にかけたとき" },
      { en: "Is today a Total Fire Ban day?", ja: "今日はTotal Fire Ban（火気全面禁止）の日ですか？" },
    ],
    faqs: [
      {
        question: "山火事の情報はどこで確認できますか？",
        answer:
          "滞在する州の消防・緊急サービスの公式アプリ・サイトが最も確実です（例: NSWの『Hazards Near Me』、VICの『VicEmergency』など州ごとに異なります）。アプリを入れて通知をオンにし、火災危険度レーティングと警報レベルを確認しましょう。高温・強風の日はBOMの予報も参考になります。",
      },
      {
        question: "『Emergency Warning』が出たらどうすればいいですか？",
        answer:
          "Emergency Warning（緊急警報）は差し迫った危険を意味します。出されている指示（避難や屋内退避など）に直ちに従ってください。判断を迷って行動が遅れることが最も危険です。命の危険を感じたら000に電話します。危険度が最高区分の日は、そもそも早めに危険な場所を離れるのが安全です。",
      },
    ],
    warnings: [
      "『Emergency Warning（緊急警報）』は差し迫った危険のサインです。指示に直ちに従い、命の危険を感じたら000へ。行動の遅れが最も危険です。",
      "Total Fire Ban（火気全面禁止）の日に屋外で火を使うと、山火事の原因になり重い罰則の対象になります。必ず規制を守ってください。",
    ],
    sources: [
      { label: "Australian Fire Danger Rating System", url: "https://www.afdrs.com.au/" },
      { label: "NSW Rural Fire Service", url: "https://www.rfs.nsw.gov.au/" },
      { label: "CFA Victoria", url: "https://www.cfa.vic.gov.au/" },
    ],
    verifiedAt: "2026-07-27",
    officialSources: [
      {
        label: "Australian Fire Danger Rating System（全国共通の火災危険度レーティング）",
        url: "https://www.afdrs.com.au/",
        accessedAt: "2026-07-27",
      },
      {
        label: "NSW Rural Fire Service（警報レベル・Hazards Near Meアプリ・Total Fire Ban）",
        url: "https://www.rfs.nsw.gov.au/",
        accessedAt: "2026-07-27",
      },
      {
        label: "Bureau of Meteorology（高温・強風など火災リスクに関わる気象情報）",
        url: "https://www.bom.gov.au/",
        accessedAt: "2026-07-27",
      },
    ],
    relatedSlugs: [
      "safety-emergency",
      "heatstroke-guide",
      "gp-urgent-care-emergency",
      "farm-weather-no-work",
    ],
    updatedAt: "2026-07-27",
    published: true,
  },

  {
    id: "a261",
    title: "洪水・サイクロンへの備え｜クイーンズランド・北部",
    slug: "flood-cyclone-safety",
    category: "health",
    hub: "health",
    priority: "P0",
    searchIntent: "豪州の洪水・サイクロンへの備えと警報・道路閉鎖・避難",
    description:
      "オーストラリア、特にクイーンズランドや北部で起こる洪水・サイクロンへの備え方を解説します。オーストラリア気象局（BOM）とState Emergency Service（SES）の警報の確認方法、『冠水した道は絶対に通らない』という鉄則、道路閉鎖の調べ方、避難の考え方まで、ワーホリが雨季を安全に過ごすための基本をまとめます。",
    content: [
      "結論から言うと、洪水・サイクロンのリスクがある地域（主にクイーンズランド〔QLD〕・北部準州〔NT〕・西オーストラリア〔WA〕北部など）では、①オーストラリア気象局（BOM）とState Emergency Service（SES）の警報を確認し、②『冠水した道路や川は絶対に通らない』を徹底し、③避難指示が出たら早めに従う——ことが安全の基本です。命に関わる状況では000へ、洪水・暴風の被害には各州SES（NSW/VICなどは132 500）に連絡します。北部の熱帯地域では、サイクロンシーズン（おおむね11月〜4月）に特に注意が必要です。",
      "サイクロンの情報はBOMで確認します。BOMは熱帯低気圧（tropical cyclone）について『Watch（監視）』『Warning（警報）』を発表し、強さはカテゴリー1〜5で示されます。接近時は、飛ばされる物を固定・片付け、非常用キット（水・食料・薬・懐中電灯・充電器・書類）を準備し、避難する場合の場所とルートを確認します。暴風の最中は屋内の安全な場所にとどまり、『目（eye）』の通過で一時的に静かになっても、その後に反対側からの暴風が来るため外に出ないことが重要です。",
      "洪水で最も重要な鉄則は『If it's flooded, forget it（冠水していたら引き返す）』です。冠水した道路・橋・川に、車でも徒歩でも入ってはいけません。水深や流れは見た目で判断できず、浅く見えても車が流されたり、足をすくわれたりして毎年死者が出ています。増水は急に起こることもあります。低地・川沿い・キャンプ場に滞在している場合は、早めに高い場所へ移動する判断が命を守ります。",
      "道路閉鎖と最新情報の確認方法を知っておきましょう。洪水やサイクロンでは道路が広範囲に閉鎖されます。各州の交通情報サイト（例: QLDのQldTraffic、道路交通当局のサイト）やSESのサイト・アプリ、地元ラジオ（ABC Emergency）で最新の道路状況・避難情報を確認します。移動を予定していても、閉鎖・危険があれば延期する柔軟さが必要です。ガソリン・現金・飲料水は早めに確保しておくと安心です。",
      "避難と緊急時の連絡先を整理しておきます。避難指示（evacuation warning/order）が出たら、ためらわず早めに従ってください。避難が遅れて冠水路に取り残されるのが最も危険です。緊急時（命の危険）は000、洪水・暴風による建物被害や救助が必要なときはSES（NSW/VIC等は132 500、他州はそれぞれの緊急サービス）に連絡します。滞在先の避難計画を雇用主やホストに確認し、家族・緊急連絡先と連絡手段を決めておきましょう。",
    ],
    keyFacts: [
      { label: "対象地域", value: "主にQLD・NT・WA北部（熱帯・雨季）" },
      { label: "サイクロン期", value: "おおむね11月〜4月。BOMがWatch/Warning発表" },
      { label: "洪水の鉄則", value: "If it's flooded, forget it（冠水路は通らない）" },
      { label: "情報源", value: "BOM・州SES・州の交通情報サイト・ABC Emergency" },
      { label: "避難", value: "避難指示が出たら早めに従う（遅れが最も危険）" },
      { label: "連絡先", value: "命の危険=000／洪水・暴風の被害=SES（132 500等）" },
    ],
    steps: [
      { title: "警報を確認", description: "BOMのサイクロン・洪水警報と州SESの情報を確認し、通知をオンにします。" },
      { title: "非常用キットを準備", description: "水・食料・薬・懐中電灯・充電器・書類をまとめ、避難ルートを確認します。" },
      { title: "冠水路を避ける", description: "冠水した道路・橋・川には車でも徒歩でも絶対に入らないでください。" },
      { title: "道路閉鎖を調べる", description: "州の交通情報サイト・SES・地元ラジオで道路状況と避難情報を確認します。" },
      { title: "避難指示に従う", description: "避難指示が出たら早めに従い、命の危険は000、被害はSESに連絡します。" },
    ],
    tips: [
      "北部・QLDで雨季に働く・滞在するなら、州SESのアプリを入れ、地元ABC Emergency放送の周波数を控えておきましょう。",
      "サイクロン前はスーパーが混雑し品切れになりがち。水・食料・電池・現金は早めに確保を。",
      "車で移動中に大雨・冠水に遭ったら無理に進まず、高い場所で安全を確保して情報を確認しましょう。",
    ],
    phrases: [
      { en: "Is this road closed due to flooding?", ja: "この道は洪水で閉鎖されていますか？" },
      { en: "We're trapped by floodwater and need rescue.", ja: "洪水で取り残されました。救助が必要です。", note: "SES 132 500 / 000" },
      { en: "Is there a cyclone warning for this area?", ja: "この地域にサイクロン警報は出ていますか？" },
    ],
    faqs: [
      {
        question: "冠水した道路は少しなら通れますか？",
        answer:
          "いいえ。『If it's flooded, forget it』が鉄則です。水深や流れは見た目では分からず、浅く見えても車が流される・足をすくわれる危険があり、毎年死者が出ています。車でも徒歩でも冠水路には絶対に入らず、引き返して別ルートや高い場所へ避難してください。",
      },
      {
        question: "洪水・サイクロンの情報はどこで確認しますか？",
        answer:
          "オーストラリア気象局（BOM）のサイクロン・洪水警報、各州のState Emergency Service（SES）のサイト・アプリ、州の交通情報サイト（道路閉鎖）、地元のABC Emergency放送が主な情報源です。避難指示が出たら早めに従い、命の危険は000、洪水・暴風の被害や救助はSES（NSW/VIC等は132 500）へ。",
      },
    ],
    warnings: [
      "冠水した道路・橋・川には、車でも徒歩でも絶対に入らないでください。浅く見えても命に関わります（If it's flooded, forget it）。",
      "避難指示（evacuation order）が出たら早めに従ってください。避難の遅れで冠水路に取り残されるのが最も危険です。命の危険は000へ。",
    ],
    sources: [
      { label: "Bureau of Meteorology｜Tropical cyclones", url: "https://www.bom.gov.au/cyclone/" },
      { label: "Bureau of Meteorology｜Flood warnings", url: "https://www.bom.gov.au/australia/flood/" },
      { label: "Queensland State Emergency Service (SES)", url: "https://www.ses.qld.gov.au/" },
    ],
    verifiedAt: "2026-07-27",
    officialSources: [
      {
        label: "Bureau of Meteorology｜Tropical cyclones（Watch/Warning・カテゴリー1〜5）",
        url: "https://www.bom.gov.au/cyclone/",
        accessedAt: "2026-07-27",
      },
      {
        label: "Bureau of Meteorology｜Flood knowledge & warnings（洪水警報）",
        url: "https://www.bom.gov.au/water/floods/",
        accessedAt: "2026-07-27",
      },
      {
        label: "Queensland State Emergency Service（洪水・暴風の備えと救助要請・州で窓口が異なる）",
        url: "https://www.ses.qld.gov.au/",
        accessedAt: "2026-07-27",
      },
      {
        label: "Triple Zero｜Call 000 in an emergency（命の危険は000）",
        url: "https://www.triplezero.gov.au/",
        accessedAt: "2026-07-27",
      },
    ],
    relatedSlugs: [
      "safety-emergency",
      "bushfire-safety",
      "heatwave-severe-weather",
      "gp-urgent-care-emergency",
    ],
    updatedAt: "2026-07-27",
    published: true,
  },

  {
    id: "a262",
    title: "熱波・雷雨・雹など悪天候の情報確認方法",
    slug: "heatwave-severe-weather",
    category: "health",
    hub: "health",
    priority: "P1",
    searchIntent: "熱波・激しい雷雨・雹などの悪天候の警報を確認する方法",
    description:
      "オーストラリアの熱波・激しい雷雨・雹（ひょう）・強風などの悪天候について、警報の確認方法を解説します。オーストラリア気象局（BOM）の警報とアプリ、State Emergency Service（SES）への連絡、雷雨ぜんそくなどの健康リスク、屋外で働くワーホリが悪天候から身を守るための基本をまとめます。",
    content: [
      "結論から言うと、熱波・激しい雷雨・雹・強風などの悪天候は、①オーストラリア気象局（BOM）の警報（Warnings）とアプリで最新情報を確認し、②暴風・雹・落雷が予想されるときは屋内の安全な場所にとどまり、③被害が出たらState Emergency Service（SES）に連絡する——のが基本です。命に関わる状況は000へ。屋外で働く・旅行するワーホリは、天候の急変に備えて情報の確認を習慣にしましょう。",
      "情報源の中心はBOM（Bureau of Meteorology）です。BOMは、Severe Thunderstorm Warning（激しい雷雨）、Severe Weather Warning（強風・大雨など）、Heatwave（熱波）などの警報を発表します。BOMの公式サイトの『Warnings』ページや公式アプリで、自分の地域の警報・レーダー・予報を確認できます。通知をオンにしておくと、急な悪天候にも早く気づけます。地元のABC Emergency放送も有力な情報源です。",
      "激しい雷雨（severe thunderstorm）は、雹・突風・落雷・鉄砲水（flash flooding）を伴うことがあります。警報が出たら、屋外での作業や外出を控え、車や頑丈な建物の中に避難します。落雷の危険があるときは高い木や開けた場所、水辺を避けます。雹は車や窓を傷めるため、可能なら車を屋根のある場所へ。鉄砲水のおそれがあるときは、低地や側溝・川から離れてください。",
      "健康リスクにも注意します。熱波は熱中症のリスクを高めるため、こまめな水分補給と暑い時間帯の作業回避が大切です（詳しくは熱中症の記事へ）。また、激しい雷雨の際に『雷雨ぜんそく（thunderstorm asthma）』が起きることがあり、特に花粉の多い季節に、ぜんそくや花粉症のある人が急に強い呼吸器症状を起こすことがあります。息苦しさが強いときは、処方薬（吸入器）を使い、重ければ000へ。",
      "屋外で働くときの備えをまとめます。仕事の前日・当日にBOMで天候を確認し、雇用主に悪天候時の対応（作業中止・避難）を確認しておきましょう。急な悪天候で作業が危険なときは、無理をせず安全を優先します。雹・強風・洪水などで家屋や車に被害が出て救助や応急対応が必要なときは、SES（NSW/VIC等は132 500、他州はそれぞれの窓口）に連絡します。命の危険がある緊急時は000です。",
    ],
    keyFacts: [
      { label: "情報の中心", value: "BOMのWarningsページ・公式アプリ・レーダー" },
      { label: "警報の種類", value: "Severe Thunderstorm／Severe Weather／Heatwave等" },
      { label: "雷雨の危険", value: "雹・突風・落雷・鉄砲水。屋内や車内へ避難" },
      { label: "健康リスク", value: "熱波→熱中症／雷雨ぜんそく（呼吸器症状）" },
      { label: "被害時の連絡", value: "SES（NSW/VIC等は132 500・州で異なる）" },
      { label: "緊急", value: "命の危険は000。屋外作業は安全を最優先" },
    ],
    steps: [
      { title: "BOMで確認", description: "BOMのWarningsページ・アプリで地域の警報・レーダー・予報を確認します。" },
      { title: "通知をオンに", description: "BOMアプリの通知や地元ABC Emergencyで急な悪天候に早く気づけるようにします。" },
      { title: "安全な場所へ", description: "雷雨・雹・強風の警報時は屋内や車内に避難し、屋外作業を控えます。" },
      { title: "健康に配慮", description: "熱波は水分補給、雷雨ぜんそくの症状が出たら吸入器、重ければ000へ。" },
      { title: "被害はSESへ", description: "家屋・車の被害や救助が必要なときはSES、命の危険は000に連絡します。" },
    ],
    tips: [
      "BOMの公式アプリを入れて位置情報の警報通知をオンにすると、外出・作業中でも悪天候にすぐ気づけます。",
      "屋外の仕事では前日にBOMで天候を確認し、雷雨・熱波の日は雇用主と作業可否を相談しましょう。",
      "ぜんそく・花粉症のある人は、雷雨ぜんそくに備えて処方薬（吸入器）を携帯しておくと安心です。",
    ],
    phrases: [
      { en: "Is there a severe weather warning for today?", ja: "今日、悪天候の警報は出ていますか？" },
      { en: "Our roof was damaged by the storm. We need SES help.", ja: "嵐で屋根が壊れました。SESの助けが必要です。", note: "SES 132 500" },
      { en: "I can't breathe well — it might be thunderstorm asthma.", ja: "うまく呼吸できません。雷雨ぜんそくかもしれません。" },
    ],
    faqs: [
      {
        question: "悪天候の警報はどこで確認できますか？",
        answer:
          "オーストラリア気象局（BOM）が中心です。公式サイトの『Warnings』ページや公式アプリで、Severe Thunderstorm Warning（激しい雷雨）・Severe Weather Warning（強風・大雨）・Heatwave（熱波）などの警報と、レーダー・予報を確認できます。通知をオンにし、地元のABC Emergency放送も併用すると確実です。",
      },
      {
        question: "『雷雨ぜんそく』とは何ですか？",
        answer:
          "激しい雷雨の際に、花粉などが影響して急に強い呼吸器症状（ぜんそく発作）が起きる現象で、特に花粉の多い季節に、ぜんそくや花粉症のある人に起こることがあります。息苦しさが出たら処方の吸入器を使い、症状が重い・改善しない場合は迷わず000に連絡してください。",
      },
    ],
    warnings: [
      "激しい雷雨は雹・突風・落雷・鉄砲水を伴います。警報時は屋外作業や外出を控え、屋内や車内など安全な場所に避難してください。",
      "雷雨ぜんそくや熱中症など、悪天候は健康リスクを伴います。強い呼吸器症状や熱中症の重いサインがあれば000へ。屋外作業は安全を最優先に。",
    ],
    sources: [
      { label: "Bureau of Meteorology｜Warnings", url: "https://www.bom.gov.au/australia/warnings/" },
      { label: "Bureau of Meteorology｜Heatwave service", url: "https://www.bom.gov.au/australia/heatwave/" },
    ],
    verifiedAt: "2026-07-27",
    officialSources: [
      {
        label: "Bureau of Meteorology｜Warnings（Severe Thunderstorm／Severe Weather／各種警報とレーダー）",
        url: "https://www.bom.gov.au/australia/warnings/",
        accessedAt: "2026-07-27",
      },
      {
        label: "Bureau of Meteorology｜Heatwave service（熱波の予報・警報）",
        url: "https://www.bom.gov.au/australia/heatwave/",
        accessedAt: "2026-07-27",
      },
      {
        label: "Triple Zero｜Call 000 in an emergency（命の危険は000／被害はSES）",
        url: "https://www.triplezero.gov.au/",
        accessedAt: "2026-07-27",
      },
    ],
    relatedSlugs: [
      "heatstroke-guide",
      "flood-cyclone-safety",
      "bushfire-safety",
      "safety-emergency",
    ],
    updatedAt: "2026-07-27",
    published: true,
  },
];
