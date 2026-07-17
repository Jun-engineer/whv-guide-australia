import type { Article } from "./types";

export const abnArticles: Article[] = [
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
    id: "a127",
    title: "ABNは誰に必要？会社員・配達員・フリーランスの違い",
    slug: "abn-eligibility",
    category: "abn",
    hub: "tax",
    priority: "P0",
    searchIntent: "ABNが必要かどうかの判断",
    description:
      "ABN（事業者番号）が必要な人と不要な人を整理。雇われて働く人はTFN、Uber Eats等の配達やフリーランスなど『事業』として働く人はABN。雇用なのにABN取得を求められる違法なケースの見分け方も解説します。",
    content: [
      "結論から言うと、ABN（Australian Business Number）が必要なのは『個人事業主（Sole Trader）として事業を営む人』だけです。カフェ・レストラン・農場・小売などで雇われて働く（従業員）場合はABNは不要で、必要なのはTFN（納税者番号）です。ABNは事業者としての登録番号であり、雇われて働くこととは根本的に別物です。",
      "ABNが必要な代表例：Uber Eats・DoorDashなどのフードデリバリー、Airtaskerなどの単発請負、Webデザイン・IT・翻訳などのフリーランス、自分の裁量で複数のクライアントから仕事を受ける請負作業。これらは『自分の事業として、自分のリスクで、成果に対して報酬を得る』働き方のため、ABNを取得し、収入を自分で確定申告（Tax Return）します。源泉徴収されないため、税金分を自分で取り分ける必要があります。",
      "ABNが不要な代表例：時給や週給で雇われ、シフトに入り、雇用主の指示で働く通常の仕事。この場合は雇用主が源泉徴収し、Super（12%）も積み立て、Payslipが発行されます。ここで働くのに必要なのはTFNだけで、ABNを取る必要はありません。",
      "重要な注意点：本来は従業員として雇うべき仕事なのに、雇用主が『ABNを取ってきて』と求めてくるケースがあります。これはSuper・有給・最低賃金・労災などの雇用主負担を回避するための違法な手法（Sham Contracting／偽装請負）である可能性があります。シフトに入り、指示どおり働き、時給で支払われる実態なら、それは雇用でありABNは不要です。求められても鵜呑みにせず、実態を確認してください（詳細は『ContractorとEmployeeの違い』の記事参照）。",
      "迷ったときの判断軸：①仕事の成果に対して報酬を得ているか（＝事業）／時間や指示に対してか（＝雇用）、②自分の道具・車で、自分のリスクで働くか、③複数のクライアントに自由にサービスを提供できるか。これらが『はい』なら事業（ABN）寄り、雇用主の管理下で決まった時間働くなら雇用（TFN）です。1つの仕事で両方が混在することは通常ありません。",
    ],
    keyFacts: [
      { label: "ABNが必要", value: "Sole Traderとして事業を営む人（配達・フリーランス等）" },
      { label: "ABNが不要", value: "雇われて働く従業員（必要なのはTFN）" },
      { label: "ABN収入", value: "源泉徴収なし。自分で確定申告し税金を取り分ける" },
      { label: "危険信号", value: "雇用実態なのにABN取得を強要される（偽装請負の疑い）" },
    ],
    steps: [
      { title: "働き方を確認", description: "成果に対する報酬（事業）か、時間・指示に対する報酬（雇用）かを見極めます。" },
      { title: "従業員ならTFNのみ", description: "雇われて働くならTFNを提出。ABNは取りません。" },
      { title: "事業ならABNを申請", description: "配達・フリーランス等はABR公式サイトで無料申請します。" },
      { title: "強要されたら実態を確認", description: "雇用なのにABNを求められたら偽装請負を疑い、Fair Work等に確認します。" },
    ],
    warnings: [
      "『ABNを取れば手取りが増える』という勧誘に注意。雇用実態なのにABNで働かされると、Super・有給・労災などの権利を失うおそれがあります。",
    ],
    faqs: [
      {
        question: "TFNとABNの両方を持てますか？",
        answer:
          "持てます。昼はカフェで雇われて働き（TFN）、空いた時間にUber Eatsで配達する（ABN）といった併用は一般的です。その場合、雇用の給与と事業の収入を両方、年度末のタックスリターンで合算して申告します。",
      },
      {
        question: "ABNを取ると税金は安くなりますか？",
        answer:
          "いいえ。ABN収入も同じ所得として課税され、むしろ源泉徴収がないため自分で納税資金を用意する必要があります。Superも付きません。『節税になる』という理由でのABN取得の勧誘には注意してください。",
      },
    ],
    sources: [
      { label: "ABR - Applying for an ABN", url: "https://www.abr.gov.au/business-super-funds-charities/applying-abn" },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "ABR｜Applying for an ABN（ABNの申請要件）",
        url: "https://www.abr.gov.au/business-super-funds-charities/applying-abn",
        accessedAt: "2026-07-18",
      },
      {
        label: "ATO｜Employee or independent contractor（雇用か請負かの判定）",
        url: "https://www.ato.gov.au/businesses-and-organisations/hiring-and-paying-your-workers/engaging-a-worker/employee-or-independent-contractor",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["abn-guide", "contractor-vs-employee", "sole-trader-basics", "tfn-guide", "uber-eats-guide"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a128",
    title: "Sole Traderとは？ABNで働く前に知る責任と税金",
    slug: "sole-trader-basics",
    category: "abn",
    hub: "tax",
    priority: "P0",
    searchIntent: "Sole Traderの責任と税金",
    description:
      "個人事業主（Sole Trader）としてABNで働く前に知っておくべき責任を解説。源泉徴収なし・Superなしの意味、納税資金の取り分け、記帳、保険、無限責任、確定申告での申告方法までをワーホリ向けにまとめます。",
    content: [
      "Sole Trader（個人事業主）とは、会社を設立せず、自分個人の名義で事業を行う最もシンプルな事業形態です。ABNを取ってUber Eatsやフリーランスで働く場合、あなたはSole Traderになります。結論として、Sole Traderは『自由に働ける代わりに、税金・記録・保険・責任をすべて自分で管理する』立場だと理解しておくことが重要です。",
      "雇用との一番の違いは税金です。従業員は雇用主が毎回の給与から源泉徴収（PAYG）してくれますが、Sole Traderは源泉徴収されません。つまり受け取った売上には税金が含まれた状態で入ってくるため、あとで自分で納税する必要があります。目安として収入の一定割合を別口座に取り分けておかないと、確定申告の時期に納税資金が足りず慌てることになります。",
      "Superも自分次第です。従業員には雇用主が12%のSuperを積み立てますが、Sole Trader自身にはSuperは付きません。将来のために積み立てたい場合は自分で任意拠出する必要があります（ワーホリの短期滞在では必須ではありません）。",
      "責任と保険：Sole Traderは『無限責任』で、事業上の負債や賠償は個人の財産で負うことになります。仕事中に他人にケガをさせたり物を壊したりするリスクがある業種では、Public Liability Insurance（賠償責任保険）への加入を検討します。配達なら車両・自転車の保険も重要です。従業員のような労災（Workers Compensation）は自動では付かない点に注意してください。",
      "税金の申告方法：Sole Traderは会社とは別の申告をするのではなく、個人のタックスリターンの中に『事業所得（business income）』として売上と経費を記入します。使うのは会社番号ではなく個人のTFNです。経費（燃料・道具・スマホ代・走行距離など）を正しく計上すれば課税所得を減らせるため、収入と経費の記録を1年を通して残しておくことが手取りを守る鍵になります。",
    ],
    keyFacts: [
      { label: "形態", value: "会社を作らず個人名義で行う最もシンプルな事業" },
      { label: "税金", value: "源泉徴収なし。個人のタックスリターンで事業所得として申告" },
      { label: "Super", value: "自分には付かない（任意で自己拠出は可能）" },
      { label: "責任", value: "無限責任。賠償リスクにはPublic Liability保険を検討" },
      { label: "使う番号", value: "個人のTFN（＋事業用にABN）" },
    ],
    steps: [
      { title: "ABNを取得", description: "ABR公式サイトでSole Traderとして無料申請します。" },
      { title: "納税用口座を分ける", description: "売上の一部を税金用に別口座へ取り分けます。" },
      { title: "記録を残す", description: "売上・経費・領収書・走行距離を継続的に記録します。" },
      { title: "保険を検討", description: "業種に応じて賠償責任保険・車両保険を検討します。" },
      { title: "確定申告で精算", description: "個人のタックスリターンに事業所得として申告し納税します。" },
    ],
    tips: [
      "納税資金の取り分けは、収入が入るたびに自動で別口座へ移す設定にすると管理が楽です。",
      "経費になるものは業種で異なります。判断に迷う支出は領収書を残し、税理士（Tax Agent）に確認しましょう。",
    ],
    warnings: [
      "ABN収入の申告漏れはペナルティの対象です。少額でも必ずタックスリターンに含めてください。",
      "本記事は一般的な情報提供であり、個別の税務・法務助言ではありません。",
    ],
    faqs: [
      {
        question: "Sole Traderは会社と何が違いますか？",
        answer:
          "会社（Company）は法人格を持ち、責任が限定され、法人税で申告します。Sole Traderは法人を作らず個人名義で、責任は無限、個人のタックスリターンで申告します。ワーホリのギグワーク・フリーランスはほぼSole Traderで十分です。",
      },
    ],
    sources: [
      { label: "ATO - Sole trader", url: "https://www.ato.gov.au/businesses-and-organisations/starting-registering-or-closing-a-business/business-structures-key-tax-obligations/sole-trader" },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "ATO｜Sole trader（税務上の義務）",
        url: "https://www.ato.gov.au/businesses-and-organisations/starting-registering-or-closing-a-business/business-structures-key-tax-obligations/sole-trader",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["abn-guide", "abn-eligibility", "contractor-vs-employee", "abn-record-keeping", "public-liability-insurance"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a129",
    title: "ContractorとEmployeeの違い｜Sham Contractingに注意",
    slug: "contractor-vs-employee",
    category: "abn",
    hub: "tax",
    priority: "P0",
    searchIntent: "ContractorとEmployeeの違い・偽装請負",
    description:
      "Contractor（請負）とEmployee（従業員）の違いを、ATO・Fair Workの判断基準で解説。ABNの有無や契約書の文言だけでは決まりません。雇用実態を請負に見せかける違法なSham Contractingの見分け方と相談先も紹介します。",
    content: [
      "結論から言うと、あなたがContractor（独立請負人）かEmployee（従業員）かは、『ABNを持っているか』『契約書に請負と書いてあるか』では決まりません。ATO・Fair Workは、働き方の実態（関係の全体像）を総合的に見て判断します。これは、従業員に本来支払うべきSuper・有給・最低賃金・労災などを、請負に見せかけて逃れる違法行為（Sham Contracting）を防ぐためです。",
      "判断で見られる主な要素：①コントロール（誰が働き方・時間・場所を決めるか）、②業務を他人に任せられるか（下請けに出せるか）、③自分の道具・設備・車を使うか、④成果に対して報酬を得るか／時間に対してか、⑤商業的なリスク（損失を自分で負うか）、⑥事業として独立して運営しているか。雇用主の指示どおり、決まったシフトで、時給で、雇用主の設備を使って働くなら、たとえABNを持っていても実態はEmployee（従業員）である可能性が高いです。",
      "Sham Contracting（偽装請負）とは：本来は従業員として雇うべき人に、雇用主がわざとABNを取らせて『請負』として働かせ、Super・有給・最低賃金などの支払いを逃れる行為です。これはFair Work Act（公正労働法）で禁止されており、雇用主にはペナルティが科されます。『ABNを取ってこないと雇わない』『みんなABNでやってる』などと言われても、実態が雇用ならあなたは従業員としての権利を持ちます。",
      "ワーホリが注意すべきサイン：シフト表で管理される／時給や日給で払われる／雇用主の店舗・農場・設備で作業する／指示に従って働く／他人に代わってもらえない——これらに当てはまるのに『ABNで来て』と言われたら、偽装請負を疑ってください。正当な請負なら、あなたが働き方を決め、複数の相手に自由にサービスを提供でき、成果に対して報酬を得られるはずです。",
      "相談先と対処：おかしいと感じたら、まず雇用契約と実態を記録（シフト・指示・支払い方法）しておきましょう。判断に迷う場合はATOの『Employee or contractor』判定ツールや、Fair Work Ombudsman（公正労働オンブズマン）に無料で相談できます。未払いの最低賃金・Superがある場合は、あとから請求できる可能性があります。",
    ],
    keyFacts: [
      { label: "判断基準", value: "ABNの有無や契約文言でなく、働き方の実態の総合判断" },
      { label: "Employeeの特徴", value: "指示・シフト管理、時給、雇用主の設備、代替不可" },
      { label: "Contractorの特徴", value: "自分で働き方を決定、成果報酬、自分の道具・リスク" },
      { label: "違法", value: "Sham Contracting（偽装請負）はFair Work Actで禁止" },
      { label: "相談先", value: "Fair Work Ombudsman／ATO判定ツール" },
    ],
    steps: [
      { title: "実態を書き出す", description: "誰が働き方を決め、どう支払われ、誰の設備を使うかを整理します。" },
      { title: "判定ツールで確認", description: "ATOのEmployee or contractorツールで区分を確認します。" },
      { title: "記録を残す", description: "契約・シフト・指示・支払い記録を保存します。" },
      { title: "必要なら相談", description: "偽装請負の疑いがあればFair Work Ombudsmanに相談します。" },
    ],
    warnings: [
      "『ABNで働けば税金が得』という説明で従業員をABN化するのは偽装請負の典型です。権利（Super・有給・最低賃金・労災）を失わないよう実態を確認してください。",
      "本記事は一般的な情報提供であり、個別の法務・税務助言ではありません。",
    ],
    faqs: [
      {
        question: "ABNを持っていれば自動的にContractorですか？",
        answer:
          "いいえ。ABNを持っていても、働き方の実態が雇用であればEmployeeとして扱われ、Super・有給などの権利があります。ABNの有無は判断材料の1つにすぎません。",
      },
      {
        question: "偽装請負だった場合、Superは請求できますか？",
        answer:
          "実態が従業員だと認められれば、未払いのSuperや最低賃金を後から請求できる可能性があります。まずは記録を残し、Fair Work OmbudsmanやATOに相談してください。",
      },
    ],
    sources: [
      { label: "ATO - Employee or independent contractor", url: "https://www.ato.gov.au/businesses-and-organisations/hiring-and-paying-your-workers/engaging-a-worker/employee-or-independent-contractor" },
      { label: "Fair Work Ombudsman - Independent contractors", url: "https://www.fairwork.gov.au/find-help-for/independent-contractors" },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "ATO｜Employee or independent contractor",
        url: "https://www.ato.gov.au/businesses-and-organisations/hiring-and-paying-your-workers/engaging-a-worker/employee-or-independent-contractor",
        accessedAt: "2026-07-18",
      },
      {
        label: "Fair Work Ombudsman｜Independent contractors（sham contracting）",
        url: "https://www.fairwork.gov.au/find-help-for/independent-contractors",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["abn-eligibility", "sole-trader-basics", "abn-guide", "cash-in-hand-jobs", "underpayment-unpaid-wages"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a130",
    title: "オーストラリアのInvoiceの書き方｜ABN・GST・支払期限",
    slug: "invoice-template-australia",
    category: "abn",
    hub: "tax",
    priority: "P1",
    searchIntent: "Invoice（請求書）の書き方",
    description:
      "ABNで働く人向けにInvoice（請求書）の書き方を解説。必須項目、GST登録の有無による『Tax invoice』との違い、支払期限の書き方、テンプレート例までをまとめます。",
    content: [
      "Invoice（請求書）は、Sole Trader（ABN）が仕事の報酬を請求するための書類です。結論として、最低限『自分の名前・ABN・発行日・作業内容・金額・支払先情報・支払期限』を記載すれば有効な請求書になります。GST登録の有無によって書式が変わる点が最大のポイントです。",
      "GST未登録の場合（多くのワーホリ）：あなたは請求書にGST（10%）を上乗せしてはいけません。書類名は『Invoice』とし、金額はGSTなしの総額を記載します。『Tax invoice』という表記は使いません。年間売上が75,000 AUD未満で、乗客輸送（ライドシェア）でなければ、通常GST登録は不要です。",
      "GST登録済みの場合：書類名を『Tax invoice』とし、GSTの金額（または『Total price includes GST』の表示）を明記します。ATOのルールでは、税抜82.50 AUD（GST込み）以上の販売では、購入者が求めればTax invoiceを発行する必要があります。GSTを上乗せして請求し、その分は後日BASでATOに納めます。",
      "必須項目（GST未登録のInvoice例）：①タイトル『Invoice』、②あなたの氏名（または屋号）、③あなたのABN、④請求先（クライアント名）、⑤発行日と請求書番号、⑥作業内容・数量・単価、⑦合計金額、⑧支払方法（銀行口座のBSB・口座番号）、⑨支払期限（例：発行から14日以内）。ABNを記載しないと、相手はあなたへの支払いから最大47%を源泉徴収（No ABN withholding）できてしまうため、ABNの記載は必須です。",
      "支払期限とトラブル対策：支払期限は『Due date: 14 days』のように明記します。未払いが起きたときのために、請求書番号を通し番号で管理し、送付日・入金日を記録しておきましょう。分かりやすいテンプレートを1つ作っておけば、毎回コピーして日付と内容を変えるだけで済みます。",
    ],
    keyFacts: [
      { label: "最低限の必須項目", value: "氏名・ABN・発行日・作業内容・金額・支払先・期限" },
      { label: "GST未登録", value: "『Invoice』表記。GSTを上乗せしない" },
      { label: "GST登録済み", value: "『Tax invoice』表記。GST額を明記" },
      { label: "Tax invoice義務", value: "GST込み82.50 AUD以上で購入者が求めた場合" },
      { label: "ABN未記載", value: "支払側が最大47%を源泉徴収できる（No ABN withholding）" },
    ],
    steps: [
      { title: "テンプレートを用意", description: "必須項目を含む請求書テンプレートを1つ作成します。" },
      { title: "GST有無を確認", description: "GST登録済みかで『Invoice』か『Tax invoice』かを決めます。" },
      { title: "内容を記入", description: "日付・請求書番号・作業内容・金額・支払期限を記入します。" },
      { title: "送付と記録", description: "クライアントへ送り、送付日・入金予定日を管理します。" },
    ],
    tips: [
      "請求書番号は連番（例：2026-001）にすると、記帳とタックスリターンの管理が楽になります。",
      "GST未登録なのに『Tax invoice』と書いたりGSTを請求するのは誤りです。書式を間違えないようにしましょう。",
    ],
    faqs: [
      {
        question: "GST登録していなくても請求書は出せますか？",
        answer:
          "出せます。GST未登録でも『Invoice』としてABN付きの請求書を発行できます。ただしGST（10%）を上乗せして請求することはできません。GSTを請求できるのは登録している事業者だけです。",
      },
    ],
    sources: [
      { label: "ATO - Tax invoices", url: "https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst/tax-invoices" },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "ATO｜Tax invoices（請求書の要件・82.50 AUDルール）",
        url: "https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst/tax-invoices",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["abn-guide", "sole-trader-basics", "gst-registration-basics", "abn-record-keeping", "tax-return-deductions"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a131",
    title: "ABN収入の記帳と領収書保存｜初心者向け管理方法",
    slug: "abn-record-keeping",
    category: "abn",
    hub: "tax",
    priority: "P1",
    searchIntent: "ABN収入の記帳・記録保存",
    description:
      "ABN（Sole Trader）で働く人の記帳と記録保存の基本を解説。売上・経費の記録方法、領収書の保存、車の走行記録（logbook）、保存期間5年、納税資金の取り分けまで初心者向けにまとめます。",
    content: [
      "ABN（Sole Trader）で働くと、収入は源泉徴収されず、経費も自分で管理して確定申告します。結論として、『売上・経費・領収書・走行記録』を継続的に残すことが、正しい納税と手取り最大化（経費控除）の両方に不可欠です。ATOは事業に関する記録を原則5年間保存することを求めています。",
      "記録すべきもの：①売上（いつ・誰から・いくら受け取ったか。Invoiceやアプリの明細）、②経費（燃料・道具・スマホ代・保険・手数料など、仕事に使った支出の領収書）、③車を使う場合の走行記録（logbook）。これらは紙でもアプリでも構いませんが、後から検索・集計できる形にしておくと申告が一気に楽になります。",
      "領収書の保存：経費として控除するには証拠（領収書・レシート）が必要です。紙のレシートは色あせるため、スマホで撮影してクラウドに保存するのがおすすめです。ATOの公式アプリ『myDeductions』を使うと、経費と走行記録をスマホで記録し、申告時にそのまま取り込めます。",
      "車の走行記録（logbook）：配達など車を使う仕事では、走行距離を経費計上できます。方法は『1kmあたりの定額（cents per km）』か『実費按分（logbook method）』の2つ。logbook方式では連続12週間の走行記録をつけ、事業使用の割合を出します。どちらが有利かは走行距離によって変わるため、記録は両方に備えて残しておくと安心です。",
      "納税資金の取り分け：源泉徴収がないため、確定申告で一括して税金を払うことになります。売上が入るたびに一定割合を別口座へ移しておくと、申告時に納税資金が不足しません。記帳を月1回まとめて行う習慣をつけると、年度末に慌てず、経費の取りこぼしも防げます。",
    ],
    keyFacts: [
      { label: "保存期間", value: "事業の記録は原則5年間" },
      { label: "記録対象", value: "売上・経費・領収書・車の走行記録" },
      { label: "便利ツール", value: "ATO公式アプリ myDeductions" },
      { label: "走行記録", value: "cents per km か logbook method（連続12週間）" },
      { label: "納税準備", value: "売上の一部を納税用口座に取り分ける" },
    ],
    steps: [
      { title: "記録の仕組みを作る", description: "アプリ（myDeductions等）や表計算で売上・経費を記録する形を決めます。" },
      { title: "領収書を即保存", description: "レシートはその場で撮影しクラウドに保存します。" },
      { title: "走行記録をつける", description: "車を使うならlogbookで距離を記録します。" },
      { title: "毎月まとめる", description: "月1回集計し、納税資金を別口座に取り分けます。" },
    ],
    tips: [
      "経費と私用が混ざる支出（スマホ代・車）は、事業使用の割合で按分します。割合の根拠（logbook等）を残しましょう。",
      "銀行口座を事業用と私用で分けると、記帳と申告が格段に楽になります。",
    ],
    warnings: [
      "領収書がない経費は控除が認められないことがあります。記録は必ず残してください。",
      "本記事は一般的な情報提供であり、個別の税務助言ではありません。",
    ],
    faqs: [
      {
        question: "記録はどのくらい保存すればいいですか？",
        answer:
          "ATOは事業関連の記録を原則5年間保存するよう求めています。デジタル保存でも構いませんが、申告内容を裏付けられる状態で保管してください。",
      },
    ],
    sources: [
      { label: "ATO - Records you need to keep", url: "https://www.ato.gov.au/individuals-and-families/income-deductions-offsets-and-records/records-you-need-to-keep" },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "ATO｜Records you need to keep（保存期間・記録方法）",
        url: "https://www.ato.gov.au/individuals-and-families/income-deductions-offsets-and-records/records-you-need-to-keep",
        accessedAt: "2026-07-18",
      },
      {
        label: "ATO｜myDeductions（経費・走行記録アプリ）",
        url: "https://www.ato.gov.au/individuals-and-families/your-tax-return/how-to-lodge-your-tax-return/mydeductions",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["abn-guide", "sole-trader-basics", "tax-return-deductions", "invoice-template-australia", "delivery-expenses-logbook"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a132",
    title: "GST登録が必要になる条件とInvoiceの変化",
    slug: "gst-registration-basics",
    category: "abn",
    hub: "tax",
    priority: "P2",
    searchIntent: "GST登録の条件",
    description:
      "GST（消費税）登録が必要になる条件を解説。売上75,000 AUDの基準、ライドシェアは売上に関係なく登録必須、登録後のInvoice・GST上乗せ・BAS申告の変化までをまとめます。",
    content: [
      "GST（Goods and Services Tax、消費税10%）は、一定規模以上の事業者が登録して納める税です。結論として、ワーホリのSole Traderの多くはGST登録が不要ですが、『年間売上75,000 AUD以上』または『乗客輸送（ライドシェア・タクシー）を行う』場合は登録が必須になります。",
      "登録が必要になる条件：①GST売上（GST turnover）が年間75,000 AUD以上になった、またはなる見込み、②Uber・DiDiなどの乗客輸送（ride-sourcing）を行う場合は売上に関係なく登録必須。フードデリバリー（Uber Eats・DoorDash等の配達のみ）は乗客を運ばないため、この必須ルールの対象外で、75,000 AUD基準で判断します。基準を超えたら21日以内に登録する義務があります。",
      "登録後に変わること：①請求書が『Tax invoice』になり、GST（10%）を上乗せして請求する、②受け取ったGSTは自分の売上ではなくATOに納めるお金として管理する、③事業の仕入れ・経費に含まれるGSTは『GSTクレジット』として差し引ける、④定期的にBAS（Business Activity Statement）を提出してGSTを精算・納付する。つまり事務作業が増えます。",
      "登録方法：先にABNが必要です。そのうえで、ATOのOnline services for business、電話（13 28 66）、または登録税理士・BAS agentを通じて登録します。登録すると原則12か月は登録を維持する必要があります。不要になったら登録を取り消せます。",
      "ワーホリの実務：短期滞在で売上が75,000 AUDに届かず、配達も乗客輸送でなければ、GST登録は基本的に不要です。ただしUber等で乗客を運ぶ場合は初日から登録が必要になるため、始める前に自分の働き方がどちらに当たるかを確認してください。判断に迷う場合は税理士に相談するのが安全です。",
    ],
    keyFacts: [
      { label: "GST率", value: "10%" },
      { label: "登録基準", value: "GST売上 年間75,000 AUD以上" },
      { label: "乗客輸送", value: "ライドシェア・タクシーは売上に関係なく登録必須" },
      { label: "登録期限", value: "基準超過から21日以内" },
      { label: "登録後", value: "Tax invoice発行・GST上乗せ・BAS申告が必要" },
    ],
    steps: [
      { title: "自分の区分を確認", description: "売上見込みと、乗客輸送か配達のみかを確認します。" },
      { title: "ABNを用意", description: "GST登録の前提としてABNが必要です。" },
      { title: "登録する", description: "Online services for business・電話・税理士経由で登録します。" },
      { title: "運用を切り替える", description: "Tax invoice発行・GST管理・BAS提出を始めます。" },
    ],
    tips: [
      "『GST売上』は利益ではなく総売上（gross）で判断します。経費を引く前の金額で75,000 AUDを超えるかを見ます。",
      "登録が必要か迷うライン上にいる場合は、月ごとに売上を確認し、超えそうなら早めに手続きしましょう。",
    ],
    warnings: [
      "登録義務があるのに登録しないと、遡ってGSTの納付・ペナルティ・利息が発生することがあります。",
      "本記事は一般的な情報提供であり、個別の税務助言ではありません。",
    ],
    faqs: [
      {
        question: "Uber Eatsの配達だけでもGST登録は必要ですか？",
        answer:
          "配達（フードデリバリー）だけなら乗客を運ばないため、売上が75,000 AUD未満であれば通常GST登録は不要です。一方、Uber・DiDiなどで乗客を運ぶライドシェアは、売上に関係なく初日からGST登録が必要です。",
      },
    ],
    sources: [
      { label: "ATO - Registering for GST", url: "https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst/registering-for-gst" },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "ATO｜Registering for GST（75,000 AUD基準・ライドシェア・21日以内）",
        url: "https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst/registering-for-gst",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["abn-guide", "sole-trader-basics", "invoice-template-australia", "bas-basics", "delivery-abn-tax"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a133",
    title: "BASとは？GST登録したSole Traderの申告基礎",
    slug: "bas-basics",
    category: "abn",
    hub: "tax",
    priority: "P3",
    searchIntent: "BAS（事業活動報告書）の基礎",
    description:
      "BAS（Business Activity Statement）の基礎を解説。GST登録したSole Traderが提出する報告書で、GSTの申告・納付や四半期の提出、GSTクレジット、税理士・BAS agentへの相談目安をまとめます。",
    content: [
      "BAS（Business Activity Statement、事業活動報告書）は、GST登録した事業者がATOに提出する申告書です。結論として、BASはGST登録している人だけが提出するもので、GST未登録のワーホリには関係ありません。GST登録している場合は、集めたGSTと支払ったGST（クレジット）を精算して申告・納付します。",
      "何を報告するか：BASでは主にGST（売上で受け取ったGSTと、仕入れ・経費で支払ったGSTの差額）を報告します。事業によってはPAYG分割払い（所得税の前払い）などが含まれることもあります。受け取ったGSTの方が多ければ差額をATOに納付し、支払ったGSTの方が多ければ還付されます。",
      "提出頻度：多くの小規模事業者は四半期ごとに提出します（GST売上が大きい場合は毎月）。提出と納付には期限があり、通常は各四半期の終了後28日程度です。期限を過ぎるとペナルティや利息が発生することがあるため、締切管理が重要です。",
      "提出方法：ATOのOnline services（myGov連携／Online services for business）、会計ソフト、または登録税理士・BAS agentを通じて提出できます。GSTの計算や記帳に不安がある場合は、BAS agentや税理士に依頼すると誤りを防げます。ワーホリで短期間だけGST登録するようなケースでは、専門家に任せるのが安全です。",
      "ワーホリの実務：多くのワーホリはGST未登録のためBASは不要ですが、Uber等の乗客輸送を行う場合はGST登録が必須となり、BASの提出義務が生じます。記帳（売上・経費・GST）を日頃から整えておけば、BASの作成が大幅に楽になります。",
    ],
    keyFacts: [
      { label: "対象", value: "GST登録した事業者のみ（未登録なら不要）" },
      { label: "報告内容", value: "GST（受取分と支払分の差額）等" },
      { label: "提出頻度", value: "多くは四半期ごと（大規模は毎月）" },
      { label: "提出方法", value: "ATOオンライン／会計ソフト／BAS agent・税理士" },
      { label: "遅延", value: "期限超過はペナルティ・利息の対象" },
    ],
    steps: [
      { title: "GST登録の有無を確認", description: "登録していなければBASは不要です。" },
      { title: "記帳を整える", description: "売上・経費・GSTを記録しておきます。" },
      { title: "BASを作成", description: "受取GSTと支払GSTを集計します。" },
      { title: "期限内に提出・納付", description: "四半期末後の期限までに提出し、差額を納付または還付を受けます。" },
    ],
    tips: [
      "会計ソフトを使うと、記帳からBASの数字が自動集計され、提出が楽になります。",
      "GSTの計算や区分に不安があれば、登録BAS agent／税理士に相談しましょう。",
    ],
    warnings: [
      "BASの提出・納付期限の超過はペナルティ・利息の対象です。締切を必ず管理してください。",
      "本記事は一般的な情報提供であり、個別の税務助言ではありません。",
    ],
    faqs: [
      {
        question: "GST登録していなくてもBASは必要ですか？",
        answer:
          "不要です。BASはGST登録した事業者が提出するものです。GST未登録のワーホリ（多くのケース）は、年度末のタックスリターンで事業所得を申告するだけで、BASの提出義務はありません。",
      },
    ],
    sources: [
      { label: "ATO - Business activity statements (BAS)", url: "https://www.ato.gov.au/businesses-and-organisations/preparing-lodging-and-paying/business-activity-statements-bas" },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "ATO｜Business activity statements (BAS)",
        url: "https://www.ato.gov.au/businesses-and-organisations/preparing-lodging-and-paying/business-activity-statements-bas",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["gst-registration-basics", "abn-guide", "sole-trader-basics", "tax-agent-guide", "abn-record-keeping"],
    updatedAt: "2026-07-18",
    published: true,
  },
];
