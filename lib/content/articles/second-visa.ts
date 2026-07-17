import type { Article } from "./types";

export const secondVisaArticles: Article[] = [
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
      "『88日』のカウントには注意が必要です。日数は暦日ベースで数えますが、フルタイム相当の勤務日のみが対象で、雨で仕事がなかった日や自己都合の休みは含められないのが原則です。歩合制（piece rate）で働く場合は、フルタイム相当の労働時間を満たしているかがポイントになります。地域や作物によって収穫期が異なるため、88日を効率よく貯めるには収穫期に合わせて地域を選ぶことが重要です。",
      "申請の証拠として最も重視されるのがPayslip（給与明細）と銀行への給与入金記録です。雇用主が発行するべきこれらの書類が揃っていないと、規定日数を満たしていても申請が認められないことがあります。働いた農場・雇用主名・期間・時給/歩合・振込額が分かる記録を、働いた分すべて保管しておきましょう。フォーム（Form 1263）による自己申告に加え、これらの客観的な証拠が求められる場合があります。",
      "近年は規定日数の偽証や賃金未払いといった問題を背景に、審査で書類の裏付けがより厳しく確認される傾向があります。『日数を偽って証明してあげる』といった持ちかけには絶対に応じないでください。虚偽の申請は不許可となるだけでなく、将来のビザ取得にも悪影響を及ぼします。正規のPayslipを発行しない農場やブローカーは避けるのが賢明です。",
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
    verifiedAt: "2026-07-16",
    officialSources: [
      {
        label: "Second Working Holiday visa（3か月のspecified work・申請料 AUD1,000）",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/second-working-holiday-417",
        accessedAt: "2026-07-16",
      },
      {
        label: "Third Working Holiday visa（6か月のspecified work・申請料 AUD1,000）",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/third-working-holiday-417",
        accessedAt: "2026-07-16",
      },
      {
        label: "Specified work｜How to count（3か月=最低88暦日／6か月=最低179暦日）※ページ更新 2025-09-11",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work",
        accessedAt: "2026-07-16",
      },
    ],
    searchIntent: "セカンド/サードビザの条件と申請",
    warnings: [
      "対象業種・指定地域・必要日数の定義は予告なく変更されます。働き始める前に必ず公式情報で最新の条件を確認してください。",
    ],
    relatedSlugs: ["farm-second-visa", "farm-finding", "whv-complete-guide", "jobs-guide", "88-day-calculation", "specified-work-industries", "six-month-specified-work"],
    updatedAt: "2026-07-16",
    published: true,
  },

  {
    id: "a52",
    title: "セカンドビザ88日の数え方｜週5日・短時間・悪天候のカウント方法",
    slug: "88-day-calculation",
    category: "second-visa",
    hub: "farm",
    priority: "P0",
    searchIntent: "セカンドビザ88日の数え方",
    description:
      "セカンドビザに必要な「3か月＝最低88暦日」のSpecified Workの数え方を、公式ルールに基づいて解説。フルタイム相当の考え方、悪天候・祝日・歩合制・シフト勤務のカウント方法までまとめます。",
    content: [
      "結論から言うと、セカンド（2つ目の）ワーキングホリデー（サブクラス417）ビザに必要な「3か月」のSpecified Workは、公式には『1年で最も短い3か月分に相当する期間＝最低88暦日（カレンダー上の88日）』を意味します。この88日には、勤務期間中の週末や休息日も含めて数えます（出典：Department of Home Affairs｜Specified work）。",
      "ただし「88日ぶんの勤務」とは、あなたと同じ業種・役割のフルタイム従業員が3か月（88暦日）で通常こなす日数・シフトと同じだけ働く、という意味です。つまり単にカレンダーで88日が経過すればよいのではなく、フルタイム相当の勤務量を満たす必要があります。",
      "数え方には柔軟性があります。例えば、(1)週5日で3暦月連続して働く、(2)週5日未満で3暦月より長い期間働く、(3)フルタイム・パートタイム・歩合制（piecework）を組み合わせた複数の短期就労を合算して『3暦月で週5日相当』にする、といった方法が認められています。88日を連続して行う必要はなく、複数の雇用主・期間に分けても構いません。",
      "重要な注意点として、『1暦日を2日分としてカウントすること』はできません。たとえば業界標準の1日が5時間の場合、1日に10時間（分割シフトや複数雇用主含む）働いても、2日分にはならず1日としてカウントされます。また、有給の祝日・病欠（または相当する労災休業日）は、その日について給与が支払われていればSpecified Workの1日として数えられますが、無給の祝日・休暇は含められません。",
      "悪天候・季節要因で働けなかった無給の日は、日数に含めることができません。公式も『滞在の早い時期にSpecified Workを終えるよう計画すべきで、悪天候などを理由に必要日数を満たせなくても例外は認められない』と明記しています。歩合制やシフト勤務（例：業界標準として2週間連続勤務・2週間休みのローテーション）は、それが業界の標準的な慣行であり、その期間について給与が支払われていれば、全期間を日数に算入できます。雇用契約書の写しは必ず保管してください。",
    ],
    keyFacts: [
      { label: "必要期間", value: "3か月＝最低88暦日（週末・休息日を含む）" },
      { label: "実質の意味", value: "フルタイム相当の勤務日数・シフトを満たすこと" },
      { label: "合算", value: "連続不要。複数の雇用主・期間を合算可" },
      { label: "1日の上限", value: "1暦日は最大1日分（長時間でも2日にはならない）" },
      { label: "祝日・病欠", value: "有給なら1日として算入可（無給は不可）" },
      { label: "悪天候の無給日", value: "算入不可。早めに計画すること" },
    ],
    steps: [
      { title: "業界標準の勤務日を雇用主と合意", description: "働き始める前に、1日の標準労働時間・週の勤務日数を雇用主と確認・合意します。" },
      { title: "対象業種・対象地域かを確認", description: "Specified Workの指定業種・指定ポストコードに該当するか、就労前に必ず確認します。" },
      { title: "毎日の勤務を記録", description: "勤務日・時間・給与を記録し、Payslipと銀行入金履歴を残します。1暦日=1日でカウント。" },
      { title: "88暦日相当のフルタイム勤務を達成", description: "悪天候の無給日は含めず、フルタイム従業員相当の勤務量を満たします。" },
    ],
    tips: [
      "88日は連続でなくてOK。複数農場・複数期間を合算できるので、収穫期に合わせて地域を移動する人も多いです。",
      "歩合制（piece rate）でも、業界標準のフルタイム相当を満たせば算入できます。契約書と明細を必ず保管しましょう。",
      "UKパスポート保有者は、2024年7月1日以降に申請する場合、2つ目・3つ目の417ビザでSpecified Work要件が不要です（対象は英国パスポートでの申請者のみ）。",
    ],
    warnings: [
      "数え方の定義・対象業種・対象地域は予告なく変更されます。就労前に必ず公式サイトで最新の条件を確認してください。",
      "本記事は一般的な情報提供であり、個別のビザ・移民手続きに関する専門的助言ではありません。正確な日数計算は公式情報または登録移民代理人に確認してください。",
    ],
    faqs: [
      {
        question: "88日は連続して働かないといけませんか？",
        answer:
          "いいえ。連続している必要はなく、複数の雇用主・期間を合算できます。ただし各期間が対象業種・対象地域の条件を満たし、フルタイム相当の勤務日数を満たす必要があります。",
      },
      {
        question: "1日に長時間働けば日数を早く貯められますか？",
        answer:
          "できません。1暦日は最大でも1日分としてしかカウントされません。業界標準の1日が5時間なら、10時間働いても2日分にはなりません。",
      },
      {
        question: "雨で仕事がなかった日はカウントできますか？",
        answer:
          "無給であればカウントできません。公式も悪天候を理由とした例外は認めないと明記しています。滞在の早い時期に余裕をもって計画しましょう。",
      },
    ],
    sources: [
      {
        label: "Department of Home Affairs｜Specified work（How to count specified work）",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work",
      },
    ],
    verifiedAt: "2026-07-16",
    officialSources: [
      {
        label: "Department of Home Affairs｜Specified work（3か月＝最低88暦日・数え方）※ページ更新 2025-09-11",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work",
        accessedAt: "2026-07-16",
      },
    ],
    relatedSlugs: ["second-visa-guide", "specified-work-industries", "farm-second-visa", "farm-finding"],
    updatedAt: "2026-07-16",
    published: true,
  },

  {
    id: "a53",
    title: "Specified Work対象業種一覧｜農業・建設・鉱業・災害復旧ほか",
    slug: "specified-work-industries",
    category: "second-visa",
    hub: "farm",
    priority: "P0",
    searchIntent: "Specified Workの対象業種",
    description:
      "セカンド／サードビザに使えるSpecified Workの対象業種を、公式の定義に沿って整理。農業（植物・動物の栽培飼育）だけでなく、建設・鉱業・漁業・植林・災害復旧なども対象になり得ます。業種と地域要件をあわせて確認しましょう。",
    content: [
      "結論から言うと、Specified Workは「対象となる『業種』」かつ「対象となる『地域』」の両方を満たす労働を指します。最も一般的なのは農業（果物・野菜の収穫やパッキング）ですが、それ以外にも複数の業種が公式に認められています（出典：Department of Home Affairs｜Specified work）。",
      "【公式に認められている対象業種】(1)地方（regional Australia）での植物・動物の栽培飼育（plant and animal cultivation）、(2)地方での漁業・真珠養殖（fishing and pearling）、(3)地方での植林・伐採（tree farming and felling）、(4)地方での鉱業（mining）、(5)地方での建設（construction）、(6)北部・遠隔地（Northern／Remote and Very Remote Australia）での観光・接客（tourism and hospitality）、(7)指定された山火事被害地域での復旧作業（2019年7月31日以降）、(8)指定された自然災害（洪水・サイクロン等）被害地域での復旧作業（2021年12月31日以降）、(9)全国のヘルスケア・医療分野での重要なCOVID-19関連業務。",
      "農業（plant and animal cultivation）には、果物・野菜の収穫やパッキング、植物の栽培・繁殖、動物の飼育（家畜の餌やり・追い込み、馬の繁殖など）、剪定・つる/木の手入れ（商業的な果樹・ナッツ栽培に直接関わるもの）などが含まれます。一方で、一般的な庭の手入れは対象外です。",
      "注意したいのは『二次加工・小売は対象外』という点です。たとえばワイン醸造・ビール醸造・蒸留、製粉、加工肉の製造、乳製品や精肉の小売などは、Specified Workに含まれません。観光・接客が対象になるのは北部・遠隔地など限られた地域のみで、都市部のカフェ・ホテル勤務は原則として対象外です。",
      "山火事・自然災害の復旧作業は、有給・ボランティアのいずれもSpecified Workとして数えられる場合があります（他の業種は原則として有給労働のみ）。ただし対象は『指定された被害地域（ポストコード）』かつ『定められた期日以降』の作業に限られ、申請フォームで正しい雇用タイプ（例：flood recovery – paid／volunteer）を選ぶ必要があります。この分野は要件・対象地域の更新が多いため、必ず最新の公式情報を確認してください。",
    ],
    keyFacts: [
      { label: "基本条件", value: "「対象業種」かつ「対象地域」の両方を満たす労働" },
      { label: "農業系", value: "植物・動物の栽培飼育／漁業・真珠養殖／植林・伐採（地方）" },
      { label: "非農業系", value: "鉱業／建設（地方）、観光・接客（北部・遠隔地のみ）" },
      { label: "復旧作業", value: "山火事（2019/7/31以降）・自然災害（2021/12/31以降）※有給/ボランティア可" },
      { label: "対象外の例", value: "ワイン/ビール醸造、製粉、加工肉製造、乳製品/精肉の小売、一般的な庭仕事" },
    ],
    steps: [
      { title: "業種が対象か確認", description: "上記の対象業種リストに該当するか、公式の定義で確認します。二次加工・小売は対象外です。" },
      { title: "地域（ポストコード）が対象か確認", description: "業種ごとに対象地域が異なります。就労地のポストコードが指定地域に含まれるか確認します。" },
      { title: "有給/ボランティアの扱いを確認", description: "原則は有給労働のみ。山火事・自然災害の復旧作業はボランティアも可の場合があります。" },
      { title: "記録を残す", description: "Payslip・雇用契約・銀行入金履歴を保管し、申請時の証拠にします。" },
    ],
    tips: [
      "『地方（regional）』かどうかは州ごとにポストコードで細かく定義されています。SA・TAS・NTは全域が対象など、州により扱いが異なります。",
      "観光・接客は北部/遠隔地の指定ポストコードでのみ対象。都市部のホテル・カフェ勤務は原則カウントされません。",
    ],
    warnings: [
      "対象業種・対象地域・対象期日は予告なく変更されます。就労前に必ず公式サイトで最新の条件を確認してください。",
      "本記事は一般的な情報提供であり、個別のビザ・移民手続きに関する専門的助言ではありません。",
    ],
    faqs: [
      {
        question: "都市部のカフェやホテルの仕事はSpecified Workになりますか？",
        answer:
          "原則としてなりません。観光・接客が対象になるのは北部（Northern）や遠隔地（Remote and Very Remote）の指定ポストコードに限られます。都市部での接客業は通常カウントされません。",
      },
      {
        question: "ボランティアでも日数にカウントできますか？",
        answer:
          "原則は有給労働のみです。ただし、指定された山火事・自然災害の被害地域での復旧作業については、ボランティアもSpecified Workとして数えられる場合があります。",
      },
    ],
    sources: [
      {
        label: "Department of Home Affairs｜Specified work（Approved industries and areas）",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work",
      },
    ],
    verifiedAt: "2026-07-16",
    officialSources: [
      {
        label: "Department of Home Affairs｜Specified work（対象業種・対象地域）※ページ更新 2025-09-11",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work",
        accessedAt: "2026-07-16",
      },
    ],
    relatedSlugs: ["88-day-calculation", "second-visa-guide", "farm-second-visa", "farm-finding"],
    updatedAt: "2026-07-16",
    published: true,
  },

  {
    id: "a54",
    title: "サードビザ6か月（179日）の数え方と条件",
    slug: "six-month-specified-work",
    category: "second-visa",
    hub: "farm",
    priority: "P0",
    searchIntent: "サードビザ6か月の数え方",
    description:
      "3つ目（サード）のワーホリ（417）ビザに必要な「6か月＝最低179暦日」のSpecified Workの条件を公式ルールで解説。いつの労働が対象か、2つ目のビザ中に行う必要がある点、数え方の基本をまとめます。",
    content: [
      "結論から言うと、3つ目（サード）のワーキングホリデー（サブクラス417）ビザには、『6か月＝1年で最も短い6か月分に相当する期間＝最低179暦日』のSpecified Workが必要です。この179日には勤務期間中の週末・休息日も含めて数えます（出典：Department of Home Affairs｜Specified work）。",
      "重要な条件が2つあります。1つ目は『2019年7月1日以降に行われた労働であること』。2つ目は『原則として2つ目（セカンド）のワーホリビザを保持している間に行った労働であること』です。つまりサードビザの6か月は、1つ目のビザ中に行った労働では原則カウントできません（1年目の労働はセカンドビザ用、2年目の労働がサードビザ用、という関係です）。",
      "数え方の考え方は88日（セカンド）と同じで、あなたと同じ業種・役割のフルタイム従業員が6か月（179暦日）で通常こなす日数・シフトを満たす必要があります。連続している必要はなく、フルタイム・パートタイム・歩合制を組み合わせて合算できます。1暦日は最大1日分までで、無給の悪天候日は算入できません。有給の祝日・病欠は1日として数えられます。",
      "一部の例外的なケースでは、ブリッジングビザ中や、特定のサブクラス408（COVID-19 Pandemic event）ビザ中に行った労働をサードビザの要件に算入できる場合があります。これらは条件が細かく定められているため、該当しそうな場合は公式情報を丁寧に確認してください。",
      "対象業種・対象地域の要件はセカンドビザと共通です（→関連記事「Specified Work対象業種一覧」）。証拠書類としてPayslip・雇用契約・銀行入金履歴を、働いた分すべて保管しておきましょう。UKパスポート保有者は、2024年7月1日以降の申請ではSpecified Work要件が不要です。",
    ],
    keyFacts: [
      { label: "必要期間", value: "6か月＝最低179暦日（週末・休息日を含む）" },
      { label: "対象の労働時期", value: "2019年7月1日以降" },
      { label: "保持ビザの条件", value: "原則としてセカンドビザ保持中に行った労働" },
      { label: "数え方", value: "フルタイム相当。連続不要・合算可。1暦日=最大1日" },
      { label: "対象業種・地域", value: "セカンドと共通（対象業種かつ対象地域）" },
    ],
    steps: [
      { title: "セカンドビザ中に就労", description: "原則としてセカンドビザを保持している間に、対象業種・対象地域で就労します。" },
      { title: "対象条件を確認", description: "2019年7月1日以降の労働であること、業種・地域が要件を満たすことを確認します。" },
      { title: "179暦日相当を達成", description: "フルタイム従業員相当の勤務量を満たします。無給の悪天候日は含めません。" },
      { title: "証拠を揃えて申請", description: "Payslip等の証拠を添えてImmiAccountで申請します。" },
    ],
    tips: [
      "1年目（ファーストビザ中）の労働はサードビザには使えないのが原則です。時系列の対応関係に注意しましょう。",
      "ブリッジングビザやサブクラス408中の労働が算入できる特例もあります。該当時は公式の条件を必ず確認してください。",
    ],
    warnings: [
      "条件・対象業種・対象地域は予告なく変更されます。就労前に必ず公式サイトで最新の条件を確認してください。",
      "本記事は一般的な情報提供であり、個別のビザ・移民手続きに関する専門的助言ではありません。",
    ],
    faqs: [
      {
        question: "1年目に働いたファームの日数はサードビザに使えますか？",
        answer:
          "原則として使えません。サードビザの6か月は、原則としてセカンドビザを保持している間（2年目）に行った労働が対象です。1年目の労働はセカンドビザ申請のための88日に使います。",
      },
      {
        question: "6か月は179日ちょうど働けばいいですか？",
        answer:
          "公式では6か月＝最低179暦日とされ、フルタイム従業員が6か月で通常働く日数・シフトを満たす必要があります。連続でなくてよく、複数期間を合算できます。",
      },
    ],
    sources: [
      {
        label: "Department of Home Affairs｜Specified work（Minimum period）",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work",
      },
    ],
    verifiedAt: "2026-07-16",
    officialSources: [
      {
        label: "Department of Home Affairs｜Specified work（6か月＝最低179暦日・条件）※ページ更新 2025-09-11",
        url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work",
        accessedAt: "2026-07-16",
      },
    ],
    relatedSlugs: ["second-visa-guide", "88-day-calculation", "specified-work-industries", "farm-second-visa"],
    updatedAt: "2026-07-16",
    published: true,
  },
];
