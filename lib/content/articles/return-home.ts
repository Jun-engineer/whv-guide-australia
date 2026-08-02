import type { Article } from "./types";

export const returnHomeArticles: Article[] = [
  {
    id: "a329",
    title: "帰国前チェックリスト｜仕事・家・車・税金・Super",
    slug: "leaving-australia-checklist",
    category: "return-home",
    hub: "return-home",
    priority: "P0",
    searchIntent: "帰国前にやることの全体チェックリスト",
    description:
      "オーストラリアのワーホリを終えて帰国する前後にやるべきことを、時系列のチェックリストにまとめました。仕事（Final Pay）・家（退去とBond）・車の売却・税金（タックスリターン）・Super（DASP）・SIM/公共料金の解約・郵便・保険を、出国前と出国後に分けて整理します。",
    content: [
      "結論から言うと、帰国前後にやることは『出国前に終わらせるもの』と『出国してビザが失効した後に行うもの』の2つに分かれます。順番を間違えると還付金や年金の払い戻しを受け取れなくなることがあるため、出国のおおむね2か月前から逆算して準備を始めるのが安全です。この記事は全体像をつかむためのチェックリストで、各手続きの詳細は関連記事と各公式で確認してください。",
      "【出国前にやること（順番の目安）】① 退職と最終給与（Final Pay）の確認、② 賃貸の退去通知とInspection・Bond返金の手配、③ 車の売却や名義変更、④ SIM・ジム・サブスク・公共料金・保険などの解約時期の計画、⑤ 郵便の転送/保留、⑥ 銀行口座・SIM・myGovを『まだ残す』判断、⑦ Payslip・Income Statement・雇用主やSuperファンドの連絡先など書類の保存。これらは現地にいる間しかできない、または現地にいる方が圧倒的にスムーズです。",
      "【出国後にやること】① タックスリターン（会計年度末の7月1日以降が基本。早期申告は条件付き）、② DASP（Superの払い戻し。ビザ失効・出国後にのみ申請可能）、③ 受け取りが済んでからの銀行口座・SIMの解約。これらは『出国してから』『ビザが切れてから』でないとできない、あるいはその方が正しく手続きできるものです。",
      "特に注意したいのが『早く解約しすぎない』ことです。銀行口座は税金の還付やDASPの受取先として、SIMの電話番号は銀行アプリやmyGovの本人確認（SMSコード）として、帰国後もしばらく必要になることがあります。全部まとめて出国直前に解約すると、還付金が受け取れない・ログインできない、という事態になりかねません。受け取りや手続きが完了してから順番に閉じるのが鉄則です。",
      "書類の保存も忘れずに。タックスリターンやDASP、将来の履歴書・無犯罪証明などのために、Payslip・最終給与明細・Income Statement・雇用契約・雇用主やSuperファンドの連絡先・TFN・ビザ番号（VEVO）などは、クラウドに保存して帰国後も参照できるようにしておきましょう。",
    ],
    keyFacts: [
      { label: "準備開始の目安", value: "出国の約2か月前から逆算" },
      { label: "出国前", value: "退去・Bond／車売却／解約計画／書類保存" },
      { label: "出国後", value: "タックスリターン／DASP／口座・SIMの最終解約" },
      { label: "早すぎ注意", value: "還付・DASPの受取に使う口座/電話番号は残す" },
      { label: "税金の申告時期", value: "原則7月1日以降（早期申告は条件付き）" },
    ],
    steps: [
      { title: "2か月前：全体計画を立てる", description: "退職日・退去日・出国日を決め、そこから逆算して手続きの順番を決めます。" },
      { title: "退職・Final Payの確認", description: "最終給与・未消化の有給・未払いがないかをPayslipで確認します（詳細は関連記事）。" },
      { title: "退去とBond返金の手配", description: "州のルールに従い退去通知を出し、Condition Report・Inspectionを経てBondの返金を手配します。" },
      { title: "車・大型家財の処分", description: "車は名義変更・売却スケジュールを組み、家具・家電は売却/譲渡します。" },
      { title: "解約の計画を作る", description: "SIM・ジム・サブスク・保険・公共料金の解約時期を決めます（まだ必要なものは残す）。" },
      { title: "郵便と書類", description: "郵便の転送/保留を設定し、Payslip・Income Statement・連絡先・TFN・ビザ情報を保存します。" },
      { title: "出国後：税金とDASP", description: "会計年度末以降にタックスリターン、ビザ失効・出国後にDASPを申請します。" },
      { title: "最後に口座・SIMを解約", description: "還付・DASPの受け取りとログイン確認が済んでから、銀行口座とSIMを解約します。" },
    ],
    tips: [
      "myGovとATOの連携は在豪中に済ませておくと、帰国後のタックスリターンやIncome Statement確認がスムーズです。",
      "銀行口座は豪ドル（AUD）を受け取れる状態で残し、海外の連絡先でもログインできるよう連絡先情報を更新しておきましょう。",
      "帰国後に必要になりがちな書類（Payslip・契約・連絡先）はスクリーンショットやPDFでクラウド保存すると安心です。",
    ],
    warnings: [
      "手続きの要件・時期・費用は制度や州・事業者によって変わります。この記事は全体像の目安で、実際の可否・期限・金額は各公式（ATO・Fair Work・州の賃貸当局・各事業者）で必ず確認してください。",
      "還付金・DASPの受取に使う銀行口座や、本人確認に使う電話番号を早く解約しすぎると、受け取りやログインができなくなることがあります。",
    ],
    faqs: [
      {
        question: "帰国前にタックスリターンとDASPを済ませられますか？",
        answer:
          "DASPは『ビザが失効し、オーストラリアを出国した後』でないと申請できません。タックスリターンも原則は会計年度末（6月30日）の後、7月1日以降に行います（永住的に離豪する外国居住者などは条件付きで早期申告できる場合があります）。いずれも出国後に行うことが多いため、受取用の銀行口座とログイン手段を残しておくことが重要です。",
      },
      {
        question: "何から手をつければいいですか？",
        answer:
          "まず出国日を確定し、そこから逆算して『退職・退去・車の処分』など現地でしかできないものを先に、『税金・DASP・口座解約』など出国後に行うものを後に配置します。この記事のステップの順番を目安にしてください。",
      },
    ],
    verifiedAt: "2026-08-02",
    officialSources: [
      { label: "ATO｜Leaving Australia（離豪時の税・手続き）", url: "https://www.ato.gov.au/individuals-and-families/coming-to-australia-or-going-overseas/leaving-australia", accessedAt: "2026-08-02" },
      { label: "ATO｜Departing Australia superannuation payment (DASP)", url: "https://www.ato.gov.au/individuals-and-families/super-for-individuals-and-families/withdrawing-and-using-your-super/departing-australia-superannuation-payment-dasp", accessedAt: "2026-08-02" },
      { label: "Fair Work Ombudsman｜Final pay（最終給与）", url: "https://www.fairwork.gov.au/ending-employment/final-pay", accessedAt: "2026-08-02" },
      { label: "Australia Post｜Redirect or hold mail（郵便の転送・保留）", url: "https://auspost.com.au/receiving/manage-your-mail/redirect-hold-mail", accessedAt: "2026-08-02" },
    ],
    relatedSlugs: ["final-pay-before-leaving", "early-tax-return-departing", "dasp-before-after-leaving", "close-services-before-leaving", "tax-return-guide", "dasp-refund", "sim-guide"],
    updatedAt: "2026-08-02",
    published: true,
  },

  {
    id: "a330",
    title: "帰国前に確認するFinal Pay・未払い給与・有給",
    slug: "final-pay-before-leaving",
    category: "return-home",
    hub: "return-home",
    priority: "P0",
    searchIntent: "退職時の最終給与・未払い・有給の確認",
    description:
      "帰国前の退職で受け取る最終給与（Final Pay）に何が含まれ、いつ支払われるのかを解説します。未消化の有給休暇の清算、未払い賃金があった場合のFair Workへの相談、Payslip・Income Statementの保存、Superの確認まで、帰国前にやることをまとめます。",
    content: [
      "結論から言うと、退職時の最終給与（Final Pay）には『働いた分の未払い賃金（残業・手当・ペナルティレートを含む）』と『未消化の年次有給休暇（Annual Leave。取得時に加算される場合はLeave Loadingも）』が含まれます。加えて、状況によっては解雇予告手当（Payment in lieu of notice）・整理解雇手当（Redundancy pay）・Long Service Leaveが含まれることもあります。まず自分に何が支払われるべきかを把握するのが第一歩です（出国前に確認すべき事項です）。",
      "支払いの時期は、多くのAward（労働協約）では最終勤務日から7日以内と定められています。Awardや企業協定に定めがない場合は、Fair Work Actにより少なくとも月1回の支払いが求められます。実務上は次の給与サイクルで支払われることが多いですが、遅延や誤りがないか、最終給与のPayslipで必ず確認しましょう。帰国後は連絡が取りにくくなるため、出国前に受け取りと確認を終えるのが理想です。",
      "注意点として、病気休暇・介護休暇（Sick and carer's leave）は退職時に清算（払い戻し）されません。一方、年次有給休暇は退職時に必ず清算され、取得時にLeave Loadingが付く人は、Awardに『退職時は払わない』と書かれていても支払われるのがルールです。自分のAwardや雇用契約で最終給与の扱いを確認しておくと、漏れに気づけます。",
      "未払いや不足があった場合は、まず雇用主に確認し、それでも解決しなければFair Work Ombudsman（連邦の労働監督機関）に相談できます。Fair WorkはNES（National Employment Standards）・Award・企業協定に基づく最低限の権利についての情報提供・支援を行っています。ビザ保有者・移民向けの案内もあり、ビザの状況にかかわらず労働者の権利は守られます。証拠として、Payslip・勤務時間の記録・雇用契約・やり取りのメールを保存しておきましょう。",
      "帰国前にやるべき書類関係は、① 全期間のPayslipの保存、② 会計年度のIncome Statement（Tax Ready）の確認、③ 雇用主の連絡先の記録、④ SuperがPayslip通りに積み立てられているかの確認、です。Superの積立に漏れがあれば、帰国後のDASP（払い戻し）額にも影響するため、出国前にファンドのアプリやmyGovで入金を確認しておくと安心です。",
    ],
    keyFacts: [
      { label: "含まれるもの", value: "未払い賃金＋未消化の年次有給（Loading含む場合あり）" },
      { label: "含まれない", value: "病気・介護休暇は清算されない" },
      { label: "支払い時期", value: "多くのAwardで最終勤務日から7日以内" },
      { label: "定めがない場合", value: "Fair Work Actにより最低でも月1回" },
      { label: "未払いの相談先", value: "Fair Work Ombudsman" },
    ],
    steps: [
      { title: "退職日と最終給与の内訳を確認", description: "未払い賃金・未消化の年次有給・（該当すれば）予告手当が含まれるか雇用主に確認します。" },
      { title: "最終Payslipをチェック", description: "金額・有給の清算・源泉徴収が正しいか、最終給与のPayslipで確認します。" },
      { title: "Superの積立を確認", description: "Payslipのとおりにファンドへ入金されているか、アプリ/myGovで確認します。" },
      { title: "Income Statementを確認", description: "会計年度のIncome StatementがTax Readyになっているか確認します（税務申告に必要）。" },
      { title: "書類と連絡先を保存", description: "Payslip・契約・雇用主の連絡先を保存し、帰国後も参照できるようにします。" },
      { title: "未払いがあれば相談", description: "解決しない未払いはFair Work Ombudsmanに相談します（出国前が望ましい）。" },
    ],
    tips: [
      "最終給与は次の給与サイクルで支払われることが多いです。出国日ぎりぎりに退職せず、受け取りを確認できる余裕を持ちましょう。",
      "銀行口座は最終給与とタックスリターン還付・DASPの受取のため、帰国後もしばらく残しておくと安心です。",
    ],
    warnings: [
      "最終給与の具体的な金額・支払い時期はAward・企業協定・雇用契約により異なります。自分に適用されるルールをFair Workや契約で確認してください。この記事は一般的な情報提供で、個別の法的助言ではありません。",
    ],
    faqs: [
      {
        question: "未消化の有給は必ずお金でもらえますか？",
        answer:
          "はい。未消化の年次有給休暇（Annual Leave）は退職時に清算され、給与として支払われます。取得時にLeave Loading（有給加算）が付く人は、Awardに退職時は払わないと書かれていても支払われます。ただし病気休暇・介護休暇は清算されません。",
      },
      {
        question: "帰国後に未払いが発覚したらどうすればいいですか？",
        answer:
          "まず雇用主に連絡し、解決しなければFair Work Ombudsmanに相談できます。海外からでも相談は可能ですが、証拠（Payslip・勤務記録・契約・メール）が必要になるため、出国前に保存しておくことが重要です。",
      },
    ],
    verifiedAt: "2026-08-02",
    officialSources: [
      { label: "Fair Work Ombudsman｜Final pay（最終給与の内容・支払い時期）", url: "https://www.fairwork.gov.au/ending-employment/final-pay", accessedAt: "2026-08-02" },
      { label: "Fair Work Ombudsman｜Visa holders and migrants（ビザ保有者の権利）", url: "https://www.fairwork.gov.au/find-help-for/visa-holders-migrants", accessedAt: "2026-08-02" },
    ],
    relatedSlugs: ["leaving-australia-checklist", "early-tax-return-departing", "termination-final-pay", "underpayment-unpaid-wages", "working-rights", "payslip-guide", "super-guide"],
    updatedAt: "2026-08-02",
    published: true,
  },

  {
    id: "a331",
    title: "年度途中で帰国する場合のタックスリターン",
    slug: "early-tax-return-departing",
    category: "return-home",
    hub: "return-home",
    priority: "P1",
    searchIntent: "年度途中帰国時のタックスリターンの時期と方法",
    description:
      "会計年度（7月1日〜翌6月30日）の途中でオーストラリアを離れて帰国する場合、タックスリターンはいつ・どう行うのかを解説します。年度末後の通常申告と、永住的に離豪する外国居住者向けの早期申告の違い、還付を受け取るための口座・myGovの準備、必要書類までまとめます。",
    content: [
      "結論から言うと、年度途中で帰国する場合でも、多くの人は『会計年度が終わった後（7月1日以降）』に通常どおりタックスリターンを行います。帰国してからでも、myGovとオンラインの申告環境、そして豪ドルを受け取れる銀行口座を残しておけば、日本から申告して還付を受け取れます。これが最も一般的で確実な方法です。",
      "オーストラリアの会計年度は7月1日〜翌6月30日で、通常のタックスリターンの申告期間はその後の7月1日〜10月31日です。年度の途中（例えば3月）に帰国しても、6月30日で年度が締まってから申告するのが基本の流れになります。Income StatementがATO側で『Tax Ready』になり、雇用主の情報が反映されてから申告すると、入力ミスや修正を減らせます。",
      "一方で、ATOには『オーストラリアを永住的に離れる（leaving Australia permanently）』一定の人向けに、年度末を待たずに申告できる早期申告（early lodgment）の仕組みがあります。ただし対象や条件（税務上の外国居住者であること、離豪後にオーストラリア源泉の所得が原則ないこと等）が細かく定められており、当てはまるかどうかは個別事情によります。早期申告を検討する場合は、必ずATOの『Lodging your tax return before you leave Australia』のページで最新の条件を確認するか、登録税理士に相談してください（この記事では具体的な適用可否は断定しません）。",
      "還付を確実に受け取るための準備が重要です。① myGovとATOの連携を在豪中に済ませる、② 豪ドル（AUD）を受け取れる銀行口座を帰国後も残す、③ 全期間のPayslipと会計年度のIncome Statementを保存、④ 仕事関連の控除に使う領収書を保管、⑤ Superの払い戻し（DASP）は別手続きなので混同しない、の5点を押さえましょう。銀行口座を早く解約すると還付の受取先を失うため、申告・受取が済むまで残すのが鉄則です。",
      "自分での申告が難しい場合（複数の雇用主、居住性の判断が微妙、海外所得がある等）は、登録Tax Agent（税理士）に依頼する選択肢もあります。手数料はかかりますが、控除を正しく計上でき、帰国後の海外からの手続きも代行してもらえます。いずれの方法でも、正確な税額や還付/追納の判定は総所得と源泉徴収額で決まるため、ATOの計算ツールで試算しておくと見通しが立ちます。",
    ],
    keyFacts: [
      { label: "会計年度", value: "7月1日〜翌6月30日" },
      { label: "通常の申告", value: "年度末後の7月1日〜10月31日" },
      { label: "年度途中帰国", value: "帰国後に日本からオンライン申告が一般的" },
      { label: "早期申告", value: "永住的離豪の外国居住者など条件付き（ATOで確認）" },
      { label: "受取準備", value: "myGov連携・AUD受取口座・書類保存" },
    ],
    steps: [
      { title: "在豪中にmyGovとATOを連携", description: "帰国後もオンラインで申告・確認できるよう、出国前に連携を済ませます。" },
      { title: "AUD受取口座を残す", description: "還付を受け取る豪ドル口座を帰国後も維持し、連絡先情報を更新しておきます。" },
      { title: "書類を保存", description: "Payslip・Income Statement・控除用の領収書を保存します。" },
      { title: "申告方法を選ぶ", description: "通常申告（7月以降）か、条件を満たす場合の早期申告か、税理士依頼かを決めます。" },
      { title: "早期申告は条件を確認", description: "早期申告を使う場合はATOの該当ページで最新の対象条件を確認します。" },
      { title: "申告して還付を受け取る", description: "Income StatementがTax Readyになってから申告し、口座で還付を受け取ります。" },
    ],
    tips: [
      "急がないなら、年度末後にIncome StatementがTax Readyになってから申告するのが最も確実です。",
      "DASP（Superの払い戻し）はタックスリターンとは別の手続きです。混同せず、それぞれの受取先を用意しましょう。",
    ],
    warnings: [
      "早期申告の対象・条件、居住性の判定、控除の可否は個別事情や年度で変わります。この記事は一般的な情報提供で、個別の税務助言ではありません。適用可否は必ずATOまたは登録税理士に確認してください。",
      "還付の受取に使う銀行口座を早く解約すると、還付金を受け取れなくなることがあります。申告・受取が済むまで残してください。",
    ],
    faqs: [
      {
        question: "3月に帰国したら、すぐにタックスリターンできますか？",
        answer:
          "多くの人は6月30日の年度末後、7月1日以降に申告します。永住的に離豪する外国居住者などは年度末前の早期申告が使える場合がありますが、条件が細かいためATOの『Lodging your tax return before you leave Australia』で確認してください。急がないなら年度末後の通常申告が確実です。",
      },
      {
        question: "帰国後、日本からでも申告できますか？",
        answer:
          "できます。myGovとATOを連携し、豪ドルを受け取れる銀行口座を残しておけば、日本からオンラインで申告して還付を受け取れます。複雑な場合は登録税理士に依頼する方法もあります。",
      },
    ],
    verifiedAt: "2026-08-02",
    officialSources: [
      { label: "ATO｜Leaving Australia（離豪時の税務）", url: "https://www.ato.gov.au/individuals-and-families/coming-to-australia-or-going-overseas/leaving-australia", accessedAt: "2026-08-02" },
      { label: "ATO｜Lodging your tax return before you leave Australia（早期申告の条件）", url: "https://www.ato.gov.au/individuals-and-families/coming-to-australia-or-going-overseas/leaving-australia/lodging-your-tax-return-before-you-leave", accessedAt: "2026-08-02" },
    ],
    relatedSlugs: ["leaving-australia-checklist", "tax-return-guide", "tax-return-howto", "whm-tax-rates", "income-statement-tax-ready", "mygov-ato-linking", "dasp-before-after-leaving"],
    updatedAt: "2026-08-02",
    published: true,
  },

  {
    id: "a332",
    title: "DASP申請はいつする？出国・ビザ失効・必要書類",
    slug: "dasp-before-after-leaving",
    category: "return-home",
    hub: "return-home",
    priority: "P0",
    searchIntent: "DASP申請のタイミングと必要書類",
    description:
      "帰国後にSuper（退職年金）を払い戻すDASP（Departing Australia Superannuation Payment）の申請タイミングを解説します。ビザ失効・出国が必要な理由、出国前に準備すべきこと（ファンドの把握・口座情報・書類）、ATOオンラインでの申請手順、源泉税の注意点までまとめます。",
    content: [
      "結論から言うと、DASP（Superの払い戻し）は『オーストラリアを出国し、かつワーホリビザが失効（期限切れまたはキャンセル）した後』でないと申請できません。つまりDASPは基本的に『出国後に行う手続き』です。まだオーストラリアにいる間や、ビザが有効なうちは申請できないため、在豪中は『申請の準備』だけを進めておくのがポイントです。",
      "Super（退職年金）は、働いている間に雇用主が給与とは別に積み立てるお金です。ワーホリ（サブクラス417・462）も対象で、帰国してビザが失効すると、この積立金をDASPとして請求できます。複数の職場で働いた人は複数のSuperファンドに残高があることが多いので、すべてのファンドを把握してから申請するのが受け取り漏れを防ぐコツです。",
      "【出国前に準備すること】① 働いた職場ごとのSuperファンド名・メンバー番号を控える、② PayslipでSuperが正しく積み立てられているか確認する、③ myGovとATOを連携し、自分のSuper口座を一覧で確認できるようにする、④ 受け取り用の銀行口座情報を用意する（海外口座も可）、⑤ パスポート・ビザ番号・TFNを保存する。これらは在豪中の方が圧倒的に確認しやすいため、出国前に済ませておきましょう。",
      "【出国後に行うこと】ビザが失効したら、ATOのDASPオンライン申請システムから、パスポート・ビザ・Superファンドの情報を入力して申請します。ATOがビザの失効状況を確認し、各ファンドへの請求が処理されます。払い戻しには源泉税が差し引かれます。ワーホリ（WHM）向けのDASPには専用の高めの税率が適用されるため、手取りは残高より少なくなります。具体的な税率・要件は変わることがあるので、申請前にATOの最新情報を確認してください（この記事では具体的な税率は断定しません）。",
      "注意点として、Super口座を出国前に自分で解約したり、ファンドを勝手に統合しすぎたりすると、かえって手続きが複雑になることがあります。また、ファンドは一定期間手続きがないと残高をATOに移管することがあり、その場合はATO経由での請求になります。いずれにせよ受け取り自体は可能ですが、ファンド情報とmyGov連携を整えておくと帰国後の申請がスムーズです。DASPはタックスリターン（税金の還付）とは別の手続きなので、混同しないようにしましょう。",
    ],
    keyFacts: [
      { label: "申請できる時期", value: "出国後＋ビザ失効後（在豪中は不可）" },
      { label: "申請方法", value: "ATOのDASPオンラインシステム" },
      { label: "必要情報", value: "パスポート・ビザ・TFN・各ファンド情報" },
      { label: "源泉税", value: "WHM向けの高めの税率が適用（ATOで確認）" },
      { label: "税金の還付とは別", value: "タックスリターンとDASPは別手続き" },
    ],
    steps: [
      { title: "在豪中：ファンドを把握", description: "働いた職場ごとのSuperファンド名・メンバー番号を控えます。" },
      { title: "在豪中：積立を確認", description: "PayslipとファンドアプリでSuperが入金されているか確認します。" },
      { title: "在豪中：myGov連携と口座準備", description: "myGovとATOを連携し、受け取り用の銀行口座情報を用意します。" },
      { title: "出国・ビザ失効を待つ", description: "DASPは出国し、ビザが失効した後に申請可能になります。" },
      { title: "ATOでDASP申請", description: "オンラインでパスポート・ビザ・ファンド情報を入力して申請します。" },
      { title: "払い戻しを受領", description: "源泉税が引かれた額が指定口座（海外口座も可）に振り込まれます。" },
    ],
    tips: [
      "在豪中にmyGovとATOを連携しておくと、複数のSuperファンドをまとめて確認でき、申請漏れを防げます。",
      "受け取り用の銀行口座は、DASPの入金が済むまで解約しないようにしましょう。",
    ],
    warnings: [
      "DASPの税率・申請要件は変更されることがあります。申請前に必ずATOのDASPページで最新情報を確認してください。この記事は一般的な情報提供で、個別の税務・金融助言ではありません。",
      "Superの残高や請求先はファンド・滞在状況で異なります。特定の金額・税率をこの記事の記載だけで判断しないでください。",
    ],
    faqs: [
      {
        question: "帰国前にDASPを申請できますか？",
        answer:
          "できません。DASPはオーストラリアを出国し、かつビザが失効した後にのみ申請できます。在豪中は、ファンド情報の把握・myGov連携・受取口座の準備といった『申請準備』を進めておきましょう。",
      },
      {
        question: "複数の職場で働きました。全部のSuperをもらえますか？",
        answer:
          "はい。ただし職場ごとに別のファンドに積み立てられていることが多いため、すべてのファンドを把握して申請する必要があります。myGov（ATO連携）で自分のSuper口座を一覧確認できます。",
      },
    ],
    verifiedAt: "2026-08-02",
    officialSources: [
      { label: "ATO｜Departing Australia superannuation payment (DASP)", url: "https://www.ato.gov.au/individuals-and-families/super-for-individuals-and-families/withdrawing-and-using-your-super/departing-australia-superannuation-payment-dasp", accessedAt: "2026-08-02" },
      { label: "ATO｜Leaving Australia（離豪時の手続き）", url: "https://www.ato.gov.au/individuals-and-families/coming-to-australia-or-going-overseas/leaving-australia", accessedAt: "2026-08-02" },
    ],
    relatedSlugs: ["leaving-australia-checklist", "dasp-refund", "super-guide", "superannuation-basics", "early-tax-return-departing", "send-money-to-japan"],
    updatedAt: "2026-08-02",
    published: true,
  },

  {
    id: "a333",
    title: "帰国前に解約・変更するサービス一覧",
    slug: "close-services-before-leaving",
    category: "return-home",
    hub: "return-home",
    priority: "P1",
    searchIntent: "帰国前に解約すべきサービスの一覧と順番",
    description:
      "帰国前に解約・変更が必要なサービスを一覧にまとめました。SIM/携帯、ジム、動画・音楽などのサブスク、保険、電気・ガス・インターネットなどの公共料金について、解約のタイミング・通知期間・違約金の確認方法と、まだ解約してはいけないもの（本人確認用の番号・還付受取口座）を整理します。",
    content: [
      "結論から言うと、帰国前の解約は『契約条件（通知期間・最低契約期間・違約金）を確認してから、必要がなくなる順に解約する』のが基本です。まとめて一気に解約すると、還付やDASPの受け取り・本人確認（SMSコード）に必要なものまで止めてしまい、困ることがあります。何を・いつ解約するかを一覧にして計画しましょう。",
      "【解約を検討する主なサービス】① SIM・携帯（プリペイドは使い切り、ポストペイドは契約解除と最終請求の確認）、② ジム（最低契約期間・解約通知が必要なことが多い）、③ 動画・音楽・アプリのサブスク（自動更新に注意）、④ 保険（OSHC/OVHCなどの医療保険、車の保険）、⑤ 電気・ガス・自宅のインターネット（退去日に合わせて停止）、⑥ 各種メンバーシップ・ポイントカード。契約系（ジム・携帯・保険・光熱費）は通知期間や違約金があることが多いため、早めに条件を確認します。",
      "【出国前に解約するもの】退去日に合わせて止める電気・ガス・自宅インターネット、使わなくなるジムやサブスク、車を手放した後の車の保険などは、出国前（または退去日）に解約・停止します。公共料金は最終メーター検針・最終請求の精算があるため、退去日と解約日を合わせ、最終請求の送り先（メールや転送先）を残しておきましょう。",
      "【まだ解約しないほうがよいもの】携帯の電話番号は、銀行アプリやmyGov・ATOの本人確認（SMSコード）に使うことがあるため、タックスリターンやDASPの手続きが済むまで残すか、番号を維持できる方法（プリペイドの短期維持など）を検討します。銀行口座も、最終給与・税金の還付・DASPの受取先として帰国後もしばらく必要です。これらを早く止めると、還付が受け取れない・ログインできない、という事態になります。受け取りと手続きが完了してから解約しましょう。",
      "解約時のトラブルを避けるため、① 解約は電話やアプリだけでなくメール等の記録が残る方法で行う、② 解約日・最終請求・返金の有無を控える、③ 自動更新のサブスクは課金日前に確実に停止する、④ 保険は帰国日以降の補償が不要か（帰路の旅行保険は別途必要か）を確認する、を意識しましょう。消費者としての権利や返金・保証についてはACCCの案内も参考になります。",
    ],
    keyFacts: [
      { label: "基本方針", value: "契約条件を確認し、不要になる順に解約" },
      { label: "契約系", value: "ジム・携帯・保険は通知期間/違約金に注意" },
      { label: "退去日に合わせる", value: "電気・ガス・自宅インターネット" },
      { label: "まだ残す", value: "本人確認用の電話番号・還付受取口座" },
      { label: "記録", value: "解約日・最終請求・返金を控える" },
    ],
    steps: [
      { title: "契約を棚卸しする", description: "SIM・ジム・サブスク・保険・光熱費・会員などの契約を書き出します。" },
      { title: "解約条件を確認", description: "各サービスの通知期間・最低契約期間・違約金・自動更新日を確認します。" },
      { title: "解約の順番を決める", description: "退去日・出国日・還付手続きの完了時期に合わせて解約日を割り当てます。" },
      { title: "退去日に合わせて公共料金を停止", description: "電気・ガス・自宅インターネットは退去日で停止し、最終請求の送り先を確保します。" },
      { title: "必要なものは残す", description: "本人確認用の電話番号と還付受取用の銀行口座は手続き完了まで残します。" },
      { title: "記録を保存", description: "解約完了メール・最終請求・返金額を保存します。" },
    ],
    tips: [
      "自動更新のサブスクは、課金日の前に停止できているかを必ず確認しましょう。",
      "携帯番号は銀行やmyGovのSMS認証に使うことがあるため、税・DASPの手続きが終わるまで維持を検討しましょう。",
    ],
    warnings: [
      "解約の通知期間・違約金・返金の条件は事業者・契約により異なります。必ず各事業者の契約条件を確認してください。この記事は一般的な情報提供です。",
      "本人確認に使う電話番号や、還付・DASPの受取に使う銀行口座を早く解約すると、手続きができなくなることがあります。手続き完了まで残してください。",
    ],
    faqs: [
      {
        question: "携帯（SIM）はいつ解約すればいいですか？",
        answer:
          "銀行アプリやmyGov・ATOの本人確認にSMSコードを使うことがあるため、タックスリターンやDASPの手続きが済むまでは番号を残すのがおすすめです。ポストペイド契約は最低契約期間や解約通知の有無を確認し、最終請求まで見届けてから解約しましょう。",
      },
      {
        question: "ジムやサブスクの解約で違約金はかかりますか？",
        answer:
          "契約によって異なります。ジムは最低契約期間や解約通知（数週間前など）が必要なことが多く、期間内解約に費用がかかる場合があります。契約書を確認し、記録の残る方法で早めに手続きしてください。",
      },
    ],
    verifiedAt: "2026-08-02",
    officialSources: [
      { label: "ACCC｜Consumer rights and guarantees（消費者の権利・返金）", url: "https://www.accc.gov.au/consumers/buying-products-and-services/consumer-rights-and-guarantees", accessedAt: "2026-08-02" },
      { label: "Fair Work Ombudsman｜Final pay（最終給与・退職手続き）", url: "https://www.fairwork.gov.au/ending-employment/final-pay", accessedAt: "2026-08-02" },
    ],
    relatedSlugs: ["leaving-australia-checklist", "sim-guide", "bank-account-guide", "final-pay-before-leaving", "opening-hours-holidays"],
    updatedAt: "2026-08-02",
    published: true,
  },

  {
    id: "a334",
    title: "帰国前の退去・Bond返金を間に合わせる方法",
    slug: "bond-refund-before-leaving",
    category: "return-home",
    hub: "return-home",
    priority: "P1",
    searchIntent: "帰国前の退去通知・最終Inspection・Bond返金を出国に間に合わせる段取り",
    description:
      "帰国に合わせて賃貸を退去し、Bond（敷金）の返金を出国までに間に合わせるための逆算スケジュールを解説します。退去通知（notice）の出し方、掃除と最終Inspection、州の預託機関（RBO／RTBA／RTA）へのBond返金申請、返金が出国に間に合わない場合の備えまで、時系列で整理します。",
    content: [
      "結論から言うと、Bondの返金を帰国に間に合わせる鍵は『逆算して早めに退去通知を出すこと』と『万一もめても海外から手続きできる状態を残しておくこと』です。退去通知には州ごとに定められた最低期間（notice period）があり、通知→退去日→最終Inspection→Bond返金申請→実際の入金、と複数のステップを踏むため、出国直前に動き出すと返金を受け取り切れないことがあります。出国の少なくとも1か月前、できれば通知期間＋数週間の余裕を見て動き始めましょう。",
      "最初のステップは退去通知（notice of intention to leave / termination notice）です。必要な通知期間や書面の形式は州の賃貸法で決まっており、固定期間契約（fixed-term）か期間の定めのない契約（periodic）かでも変わります。通知は口頭ではなく記録の残る書面・メールで出し、退去日を明確にします。自分の州の賃貸当局（NSW＝NSW Fair Trading／Rental Bonds Online、VIC＝Consumer Affairs Victoria／RTBA、QLD＝RTA など）の最新の要件を必ず確認してください（この記事では具体的な通知日数は断定しません）。",
      "退去日が決まったら、返金を最大化する準備をします。① 入居時のCondition Report（状態報告書）と写真を見返し、原状回復すべき箇所を洗い出す、② 契約で求められる範囲の清掃（プロのクリーニング指定がある場合はその条件）を行う、③ 退去時にも部屋の状態を日付入りの写真・動画で記録する、④ 鍵の返却方法を確認する、の4点です。通常使用による経年劣化（fair wear and tear）はあなたの負担にはなりませんが、証拠がないと差し引かれる争いになりやすいので記録が最大の防御になります。",
      "Bondの返金申請は、州の公式な預託機関を通じて行います（NSW＝Rental Bonds Online、VIC＝RTBA、QLD＝RTA など）。オンラインで返金請求を出し、オーナー/エージェントが同意すれば指定口座へ入金されます。金額に争いがある場合は、当局や州の審判機関（tribunal）を通じた解決になり、時間がかかることがあります。返金の入金先には、帰国後も使える豪ドル（AUD）の銀行口座を指定し、口座を早く解約しないようにしてください。",
      "返金が出国に間に合わない可能性もあります。その場合に備えて、① 受取用の銀行口座を残す、② オーナー/エージェントの連絡先を保存する、③ 退去・清掃・鍵返却の証拠（写真・メール）をクラウドに保存する、④ 州当局のオンライン手続きに海外からログインできるよう本人確認手段（電話番号・メール）を維持する、を済ませておきましょう。これらがあれば、返金や紛争処理を帰国後・海外からでも進められます。",
    ],
    keyFacts: [
      { label: "動き出す目安", value: "出国の1か月前〜（通知期間＋数週間の余裕）" },
      { label: "退去通知", value: "州ごとに最低期間あり・書面/メールで記録を残す" },
      { label: "返金の申請先", value: "州の預託機関（RBO／RTBA／RTA など）" },
      { label: "最大の防御", value: "入居・退去時の写真＋Condition Report" },
      { label: "間に合わない時", value: "受取口座・連絡先・証拠・ログイン手段を残す" },
    ],
    steps: [
      { title: "退去日から逆算する", description: "出国日と州の通知期間から、いつ通知を出すべきか逆算します。" },
      { title: "退去通知を出す", description: "州の様式に沿って書面/メールで通知し、退去日を確定します。" },
      { title: "原状回復と清掃", description: "Condition Reportを見返し、契約で求められる範囲を掃除します。" },
      { title: "退去時の状態を記録", description: "部屋の状態を日付入りの写真・動画で残し、鍵を返却します。" },
      { title: "Bond返金を申請", description: "州の預託機関のオンラインで返金請求を出し、受取口座を指定します。" },
      { title: "間に合わない場合に備える", description: "受取口座・連絡先・証拠・本人確認手段を残し、海外から手続きできるようにします。" },
    ],
    tips: [
      "最終Inspectionは立ち会えるよう退去日を調整すると、指摘にその場で対応でき、返金がスムーズです。",
      "又貸し・間借り（sub-let／lodger）は州の預託制度の対象外のことが多く、返金は相手次第。金額・条件を書面で残しておきましょう。",
      "Bondの返金先は必ず帰国後も使えるAUD口座に。受け取り前に口座を解約しないでください。",
    ],
    warnings: [
      "退去通知の必要期間・返金の手続き・上限や差引の可否は州や契約により異なります。実際の要件は必ず自分の州の賃貸当局で確認してください。この記事は段取りの目安で、個別の法的助言ではありません。",
      "返金や紛争処理が出国に間に合わないことがあります。受取口座・証拠・連絡先を残さずに口座や電話番号を解約すると、返金を受け取れなくなるおそれがあります。",
    ],
    faqs: [
      {
        question: "退去のどれくらい前に通知すればいいですか？",
        answer:
          "必要な通知期間は州と契約の種類（固定期間か期間の定めなしか）で異なります。日数は断定できないため、自分の州の賃貸当局の最新情報で確認してください。いずれにせよ、通知→退去→Inspection→返金申請→入金の各ステップに時間がかかるため、出国から逆算して早めに通知するのが安全です。",
      },
      {
        question: "Bondの返金が帰国に間に合わない場合はどうなりますか？",
        answer:
          "受取用の豪ドル口座を残しておけば、帰国後に返金を受け取れます。金額に争いがある場合は州当局や審判機関を通じた解決になり時間がかかることがあるため、退去・清掃・鍵返却の証拠と相手の連絡先を保存し、海外からオンライン手続きできる本人確認手段を維持しておきましょう。",
      },
    ],
    verifiedAt: "2026-08-02",
    officialSources: [
      { label: "NSW Government｜Renting a place to live（退去・Rental Bonds Online）", url: "https://www.nsw.gov.au/housing-and-construction/renting-a-place-to-live", accessedAt: "2026-08-02" },
      { label: "Consumer Affairs Victoria｜Renting（退去・RTBAのBond返金）", url: "https://www.consumer.vic.gov.au/housing/renting", accessedAt: "2026-08-02" },
      { label: "Residential Tenancies Authority (QLD)｜Bonds（退去・Bond返金）", url: "https://www.rta.qld.gov.au/", accessedAt: "2026-08-02" },
    ],
    relatedSlugs: ["leaving-australia-checklist", "close-services-before-leaving", "bond-rules-overview", "bond-refund-dispute", "condition-report-guide", "ending-tenancy-notice", "housing-guide"],
    updatedAt: "2026-08-02",
    published: true,
  },

  {
    id: "a335",
    title: "帰国前の車売却スケジュール｜いつ出品する？",
    slug: "sell-car-timeline",
    category: "return-home",
    hub: "return-home",
    priority: "P1",
    searchIntent: "帰国前に車を売り切るための出品時期と逆算スケジュール",
    description:
      "帰国前に車を確実に売り切るための『いつ出品するか』のスケジュールを解説します。出国日から逆算した出品タイミング、RWC取得や名義変更にかかる時間、Rego・CTP・任意保険の解約と返金の順番、売れ残った場合の買取・下取りという保険まで、時系列で整理します。売り方の手順は関連記事で補足します。",
    content: [
      "結論から言うと、帰国前の車売却は『出国の3〜4週間前には出品を始める』のが安全な目安です。個人売買は内見・試乗・価格交渉・RWC（車検証明）の取得・名義変更と複数の段階があり、買い手がすぐ見つかっても手続きに時間がかかります。出発ぎりぎりに出品すると、焦って安値で手放したり、名義変更が終わらないまま出国して後々トラブルになったりします。この記事は『いつ動くか』の時間配分に絞って解説します（広告の出し方や手続きの詳細は関連記事を参照）。",
      "逆算の目安は次の通りです。出国の4週間前：相場を調べて広告を掲載。3週間前：内見・試乗に対応しつつ、州で必要ならRWC（Roadworthy／Safety Certificate）取得の予約。2週間前：買い手と価格合意、支払いと名義変更（transfer of registration）の日程を確定。1週間前：名義変更を完了し、代金を安全に受け取る。買い手がつかない場合の最終手段（買取業者・ディーラー下取り）も、この頃には検討し始めます。",
      "スケジュールで特に注意したいのが、Rego（登録）・CTP（強制保険）・任意保険の『解約と返金の順番』です。車を手放して名義変更が完了してから、残りの登録期間やCTP・任意保険の未経過分の払い戻し（refund）を申請できる場合があります。逆に、引き渡し前に任意保険を解約してしまうと、その間の事故で無保険になります。『名義変更・引き渡しの完了』→『保険・登録の解約と返金申請』の順を守ってください（返金の可否・金額・手続きは州や保険会社で異なります）。",
      "支払いの受け取りも時間に関わります。現金は高額だと安全面のリスクがあり、銀行振込は着金確認までタイムラグがあります。着金を確認してから名義変更・引き渡しをするのが安全なので、出国直前だと『着金待ち』で予定が詰まりがちです。余裕を持って合意し、着金確認→書類手続き→引き渡しの順で進められる日程を組みましょう。売却代金の入金先は、帰国後も使えるAUD口座にしておくと安心です。",
      "どうしても売れ残りそうな場合の保険として、買取業者（car buying service）やディーラーの下取り（trade-in）、次の渡航者向けコミュニティでの告知、委託販売などの選択肢があります。個人売買より価格は下がる傾向がありますが、確実に・早く手放せます。『いつまでに売れなければこの手段に切り替える』という締め切りを先に決めておくと、出国直前に無登録・無保険の車を抱えて困る事態を避けられます。",
    ],
    keyFacts: [
      { label: "出品開始の目安", value: "出国の3〜4週間前" },
      { label: "時間がかかる工程", value: "内見・RWC取得・名義変更・着金確認" },
      { label: "解約の順番", value: "名義変更・引き渡し完了→保険/登録の解約・返金" },
      { label: "売れ残り対策", value: "買取・下取り・委託に切り替える締め切りを決める" },
      { label: "受取口座", value: "帰国後も使えるAUD口座を指定" },
    ],
    steps: [
      { title: "4週間前：相場調査と出品", description: "同車種の価格を調べ、車種・年式・走行距離・Rego残・整備状況を明記して掲載します。" },
      { title: "3週間前：内見対応とRWC", description: "内見・試乗に対応し、州で必要ならRWC取得を予約します。" },
      { title: "2週間前：合意と日程確定", description: "価格に合意し、支払い・名義変更・引き渡しの日程を決めます。" },
      { title: "1週間前：着金確認と名義変更", description: "着金を確認してから名義変更を完了し、車を引き渡します。" },
      { title: "引き渡し後：保険・登録の整理", description: "名義変更完了後に、任意保険・CTP・登録の解約と未経過分の返金を申請します。" },
      { title: "売れない場合の切替", description: "決めた締め切りを過ぎたら、買取業者・下取り・委託に切り替えます。" },
    ],
    tips: [
      "任意保険は引き渡しが終わるまで解約しないこと。引き渡し前の事故で無保険になるのを防ぎます。",
      "名義変更（transfer）が終わらないと、売却後の駐車違反や事故の通知が元の名義に届くことがあります。必ず完了を確認しましょう。",
      "出発日が動かせない以上、締め切りを決めて『安全に売れる最終ライン』を先に引いておくと安心です。",
    ],
    warnings: [
      "RWC（車検証明）の要否、名義変更の手続き・期限・費用、Rego・CTP・保険の返金可否と金額は州・事業者によって異なります。登録している州の交通当局と保険会社で必ず確認してください。",
      "名義変更を完了しないまま出国すると、売却後の反則金・事故責任が元の所有者に及ぶおそれがあります。引き渡し前に代金の着金と名義変更の完了を確認してください。",
    ],
    faqs: [
      {
        question: "出発の何週間前に売り出せば間に合いますか？",
        answer:
          "個人売買なら出国の3〜4週間前の出品が目安です。内見・RWC取得・名義変更・着金確認に時間がかかるためです。それより遅くなりそうなら、早めに買取業者や下取りへの切り替えを検討すると、無登録・無保険の車を抱えずに済みます。",
      },
      {
        question: "保険や登録の解約はいつすればいいですか？",
        answer:
          "車を引き渡して名義変更が完了してから、任意保険・CTP・登録の解約と未経過分の返金を申請します。引き渡し前に任意保険を切ると事故時に無保険になります。返金の可否・金額・手続きは州や保険会社で異なるため各公式で確認してください。",
      },
    ],
    verifiedAt: "2026-08-02",
    officialSources: [
      { label: "Transport for NSW｜Registration（名義変更・登録の解約）", url: "https://www.transport.nsw.gov.au/", accessedAt: "2026-08-02" },
      { label: "VicRoads｜Registration & Roadworthy Certificate", url: "https://www.vicroads.vic.gov.au/", accessedAt: "2026-08-02" },
      { label: "Queensland Government｜Transport and motoring（Safety Certificate・登録）", url: "https://www.qld.gov.au/transport", accessedAt: "2026-08-02" },
    ],
    relatedSlugs: ["leaving-australia-checklist", "sell-car-before-leaving", "vehicle-transfer-by-state", "rego-ctp-rwc", "car-insurance-comparison", "cars-guide"],
    updatedAt: "2026-08-02",
    published: true,
  },

  {
    id: "a336",
    title: "オーストラリアから日本へ荷物を送る方法",
    slug: "send-luggage-to-japan",
    category: "return-home",
    hub: "return-home",
    priority: "P2",
    searchIntent: "帰国時にオーストラリアから日本へ荷物を送る方法の比較",
    description:
      "帰国時にオーストラリアから日本へ荷物を送る方法を比較します。Australia Postの国際郵便、クーリエ（DHL/FedEx等）、船便、飛行機の預け荷物、別送品（unaccompanied baggage）の使い分け、送れないもの（危険物・持ち出し/持ち込み制限）、日本到着時の税関申告まで、費用と日数の考え方を整理します。",
    content: [
      "結論から言うと、日本への荷物の送り方は『① 飛行機の預け荷物で持ち帰る、② Australia Postの国際郵便で送る、③ クーリエ（DHL/FedEx等）で送る、④ 船便・別送品（unaccompanied baggage）で送る』の大きく4つで、量・急ぎ・予算で使い分けます。少量で急ぐなら航空便、量が多くて急がないなら船便、というのが基本の考え方です。具体的な料金・日数は重量・サイズ・時期で変わるため、各社の見積もりで確認してください（この記事では金額は断定しません）。",
      "Australia Postの国際郵便は、Economy（船便相当・安いが遅い）／Standard／Express（速いが高い）などのサービスがあり、追跡や補償の有無が料金で変わります。段ボールで数箱程度なら手軽です。クーリエ（DHL・FedEx・UPSなど、代理店経由を含む）は、速くて追跡・補償がしっかりしている一方、料金は高めです。壊れ物や急ぎの荷物、書類に向きます。",
      "量が多い場合は、船便（sea freight）や『別送品（unaccompanied baggage）』が割安です。別送品は、帰国者本人が携帯せず後から送る引越し荷物のような扱いで、日本の税関で所定の申告を行うと、一定範囲で携帯品と同様に扱われることがあります。別送品を使う場合は、日本入国時に税関へ別送品がある旨を申告する必要があるため、日本の税関（Japan Customs）の公式案内で手続きと必要書類を必ず確認してください（手続きの詳細はこの記事では断定しません）。",
      "送れないもの・制限があるものに注意が必要です。オーストラリアからの持ち出し（輸出）側の規制と、日本への持ち込み（輸入）側の規制の両方が関わります。可燃性・引火性のもの、スプレー缶、モバイルバッテリー等のリチウム電池、酒・たばこ、食品・植物・種子、医薬品などは、送付方法ごとに制限や禁止があります。オーストラリア側はAustralian Border Force、日本側はJapan Customsと各キャリアの禁制品リストを確認してください。",
      "日本に到着してからの税関にも触れておきます。海外から送った荷物や別送品は、日本の税関で課税・免税の判定が行われ、内容や金額によっては関税・消費税がかかることがあります。免税範囲や別送品の申告方法は日本の税関のルールに従うため、金額や可否は日本の税関公式で確認してください。発送時のインボイス（内容・金額の申告）は正確に記載し、レシートを保管しておくと通関がスムーズです。",
    ],
    keyFacts: [
      { label: "主な方法", value: "預け荷物／国際郵便／クーリエ／船便・別送品" },
      { label: "急ぎ・少量", value: "航空便（郵便Express・クーリエ）" },
      { label: "量が多い・急がない", value: "船便・別送品（割安・日数長め）" },
      { label: "送れないもの", value: "危険物・電池・食品・植物などは制限/禁止" },
      { label: "税金", value: "日本到着時に関税・消費税がかかる場合あり" },
    ],
    steps: [
      { title: "量と急ぎ度を決める", description: "何をいつまでに届けたいかで、航空便か船便・別送品かを選びます。" },
      { title: "送付方法を比較", description: "郵便・クーリエ・船便の料金・日数・追跡・補償を各社で見積もります。" },
      { title: "禁制品を確認", description: "豪州側（ABF）・日本側（税関）と各社の禁止/制限品リストを確認します。" },
      { title: "梱包とインボイス", description: "壊れ物を保護し、内容・金額のインボイスを正確に記載します。" },
      { title: "別送品は税関申告", description: "別送品を使う場合は、日本入国時に税関へ申告し必要書類を用意します。" },
      { title: "追跡・保管", description: "追跡番号とレシートを保管し、到着まで確認します。" },
    ],
    tips: [
      "重い本や冬物など『急がないもの』は船便・別送品、すぐ使うものは預け荷物、と分けると費用を抑えられます。",
      "モバイルバッテリーやスプレー缶は航空輸送で禁止・制限されがちです。送付前に各社の禁制品を確認しましょう。",
      "インボイス（内容・金額）は正確に。過少申告は通関トラブルや追徴の原因になります。",
    ],
    warnings: [
      "送料・日数・関税・免税範囲・禁制品は、送付方法・重量・時期・内容によって異なり、随時変わります。実際の料金と可否は各キャリア・Australian Border Force・日本の税関の公式情報で必ず確認してください。",
      "危険物（引火性・スプレー缶・リチウム電池等）や食品・植物・医薬品は送付方法により禁止・制限があります。申告を偽ると罰則や差し止めの対象になります。",
    ],
    faqs: [
      {
        question: "船便（別送品）と航空便はどう使い分ければいいですか？",
        answer:
          "すぐ使うもの・少量・壊れ物は航空便（預け荷物・郵便Express・クーリエ）、量が多く急がないもの（本・冬物・調理器具など）は船便・別送品が割安です。別送品を使う場合は日本入国時に税関申告が必要なので、日本の税関の案内を確認してください。",
      },
      {
        question: "日本で関税はかかりますか？",
        answer:
          "内容や金額によって関税・消費税がかかる場合があります。免税範囲や別送品の扱いは日本の税関のルールで決まるため、金額や可否は日本の税関公式で確認してください。発送時のインボイスを正確に書き、レシートを保管しておくと通関がスムーズです。",
      },
    ],
    verifiedAt: "2026-08-02",
    officialSources: [
      { label: "Australia Post｜Sending overseas（国際発送）", url: "https://auspost.com.au/sending/send-overseas", accessedAt: "2026-08-02" },
      { label: "Australian Border Force｜Leaving Australia（持ち出しの規制）", url: "https://www.abf.gov.au/entering-and-leaving-australia/leaving-australia", accessedAt: "2026-08-02" },
      { label: "Japan Customs（日本税関｜別送品・輸入通関）", url: "https://www.customs.go.jp/english/", accessedAt: "2026-08-02" },
    ],
    relatedSlugs: ["leaving-australia-checklist", "close-services-before-leaving", "post-office-courier", "send-money-to-japan"],
    updatedAt: "2026-08-02",
    published: true,
  },

  {
    id: "a337",
    title: "帰国後も豪州銀行口座を残す場合の注意点",
    slug: "keep-australian-bank-account",
    category: "return-home",
    hub: "return-home",
    priority: "P1",
    searchIntent: "帰国後にオーストラリアの銀行口座を維持する際の注意点",
    description:
      "帰国後もオーストラリアの銀行口座をあえて残す場合（税還付・DASPの受取待ち、再渡航予定など）の注意点を解説します。口座維持費、休眠口座（ASICへの残高移管）、海外居住者としての利子課税、住所・連絡先の更新、アプリ・SMS認証の維持など、残すからこそ気をつけたいポイントをまとめます。",
    content: [
      "結論から言うと、帰国後も豪州の銀行口座を残すこと自体は可能ですが、『維持費』『休眠口座化』『海外居住者としての課税』『本人確認手段の維持』の4点に注意が必要です。口座を残す判断は、タックスリターンの還付やDASP（Superの払い戻し）の受け取り待ち、将来の再渡航や投資の予定などがある場合に合理的です。まず『なぜ残すのか（受け取り待ちか、長期保有か）』を明確にすると、必要な管理が見えてきます（閉じるか残すかの判断そのものは関連記事も参照）。",
      "第一に口座維持費（monthly account fee）です。維持費がかかるタイプの口座だと、使っていなくても毎月手数料が引かれ続け、少額残高が目減りしていきます。残すなら、維持費のかからない口座に切り替えられないかを出国前に確認しておくと安心です。",
      "第二に休眠口座（inactive／dormant account）です。長期間まったく取引がないと口座は休眠扱いになり、一定期間を過ぎると残高が政府（ASIC）の未請求金（unclaimed money）として移管されることがあります。移管されても後から請求（claim）して取り戻せますが手間がかかるため、残す場合はオンラインでたまに少額を動かすなどして口座を『動いている』状態に保つのが有効です。",
      "第三に海外居住者としての税務です。オーストラリアの税務上『外国居住者（foreign resident）』になると、預金利子（interest）などのオーストラリア源泉所得の扱いが居住者と変わり、TFNや海外住所の届け出状況によっては利子から源泉徴収されることがあります。税務上の居住性の判定や、利子課税・申告の要否は個別事情によるため、ATOで確認するか税理士に相談してください（この記事では税率や可否を断定しません）。銀行には帰国後の海外住所・連絡先を届け出ておきましょう。",
      "第四に本人確認・ログイン手段の維持です。ネットバンキングやアプリのログイン、送金時の本人確認にSMSのワンタイムコードを使うことが多く、豪州の電話番号を解約すると認証が受け取れずログインできなくなることがあります。口座を残すなら、SMSを受け取れる番号を維持するか、認証方法を海外でも使える手段（認証アプリ・海外の連絡先）に切り替えられるか、出国前に銀行へ確認しておきましょう。あわせて、必要な取引明細は先にダウンロードしておくと安心です。",
    ],
    keyFacts: [
      { label: "残す主な理由", value: "税還付・DASPの受取待ち／再渡航・投資の予定" },
      { label: "維持費", value: "使わなくても月額手数料がかかる口座がある" },
      { label: "休眠口座", value: "長期無取引→残高がASIC（未請求金）へ移管され得る" },
      { label: "海外居住者課税", value: "利子課税・源泉徴収の可能性（ATOで確認）" },
      { label: "本人確認", value: "SMS認証用の番号／代替のログイン手段を維持" },
    ],
    steps: [
      { title: "残す理由をはっきりさせる", description: "受取待ちか長期保有かを決め、必要な口座と管理方法を選びます。" },
      { title: "維持費を確認・見直す", description: "手数料のかからない口座に切り替えられるか出国前に確認します。" },
      { title: "休眠化を防ぐ", description: "オンラインでたまに口座を動かし、無取引が続かないようにします。" },
      { title: "住所・連絡先を更新", description: "海外の住所・メール・電話番号を銀行に届け出ます。" },
      { title: "認証手段を確保", description: "SMS認証用の番号維持か、海外で使えるログイン手段を確認します。" },
      { title: "税務を確認", description: "外国居住者としての利子課税・申告の要否をATO/税理士で確認します。" },
    ],
    tips: [
      "受け取り予定（還付・DASP）が済むまでは、受取口座を必ず残しておきましょう。",
      "維持費のある口座は、残すなら手数料のかからない口座への切り替えを検討すると目減りを防げます。",
      "明細は解約・休眠後に取りにくくなることがあるため、必要な取引履歴は先に保存しておくと安心です。",
    ],
    warnings: [
      "口座維持費・休眠口座の扱い・利子への課税や源泉徴収は、銀行や税務上の居住性によって異なります。実際の手数料・課税はご利用の銀行・ATO・ASIC MoneySmartで確認してください。この記事は一般的な注意点で、個別の税務・金融アドバイスではありません。",
      "豪州の電話番号を解約すると、SMS認証が受け取れずネットバンキングにログインできなくなることがあります。口座を残すなら認証手段を先に確保してください。",
    ],
    faqs: [
      {
        question: "使っていない口座を残しても大丈夫ですか？",
        answer:
          "受け取り予定のお金がある間は残すのが安全です。ただし維持費のある口座は手数料で残高が目減りし、長期間無取引だと休眠扱いになり残高がASIC（未請求金）へ移管されることがあります。維持費のない口座にする、たまにオンラインで動かす、といった管理をしておきましょう。",
      },
      {
        question: "帰国後、口座の利子に税金はかかりますか？",
        answer:
          "税務上『外国居住者』になると、預金利子などのオーストラリア源泉所得の扱いが変わり、TFNや海外住所の届け出状況によっては源泉徴収されることがあります。税率や申告の要否は個別事情によるため、ATOで確認するか税理士に相談してください。",
      },
    ],
    verifiedAt: "2026-08-02",
    officialSources: [
      { label: "ASIC MoneySmart｜Unclaimed money（休眠口座・未請求金）", url: "https://moneysmart.gov.au/banking/unclaimed-money", accessedAt: "2026-08-02" },
      { label: "ATO｜Leaving Australia（離豪後の税・居住性）", url: "https://www.ato.gov.au/individuals-and-families/coming-to-australia-or-going-overseas/leaving-australia", accessedAt: "2026-08-02" },
    ],
    relatedSlugs: ["leaving-australia-checklist", "close-bank-account-before-leaving", "dasp-before-after-leaving", "early-tax-return-departing", "send-money-to-japan", "bank-account-guide"],
    updatedAt: "2026-08-02",
    published: true,
  },

  {
    id: "a338",
    title: "ワーホリ経験を帰国後の履歴書・面接で伝える方法",
    slug: "use-wh-experience-in-resume",
    category: "return-home",
    hub: "return-home",
    priority: "P1",
    searchIntent: "ワーホリ経験を帰国後の就活・履歴書・面接で活かす方法",
    description:
      "オーストラリアのワーホリ経験を、帰国後の履歴書・職務経歴書・面接でどう伝えるかを解説します。英語力や適応力の見せ方、接客・農業などの職歴の言語化、実績の数字化、出国前にやるべきリファレンス（推薦）取得と記録の保存、ブランクへの向き合い方まで、次のキャリアにつなげる整理法をまとめます。",
    content: [
      "結論から言うと、ワーホリ経験は『語学留学の思い出』ではなく『海外で働いた職務経験』として、具体的なスキルと実績に翻訳して伝えると評価されやすくなります。ポイントは、① 英語を使って働いた事実、② 職種で身につけた具体スキル、③ 数字で示せる実績、④ 異文化・異環境への適応力、の4点を、応募先の仕事に結びつけて語ることです。そのためには出国前に『証拠と推薦（リファレンス）』を確保しておくことが重要になります（これは帰国前にやるべき準備です）。",
      "まず出国前にやっておきたいのが、リファレンス（推薦者・推薦状）の確保です。オーストラリアの就職では、雇用主やマネージャーがReferee（照会先）として人柄や働きぶりを証言する文化があります。良い関係のうちに、① Refereeになってもらえるか依頼する、② 連絡先（氏名・役職・メール）を控える、③ 可能なら簡単な推薦状（reference letter）や在職証明をもらう、を済ませておきましょう。帰国後は連絡が取りにくくなるため、在職中に頼むのが鉄則です。あわせてPayslipや雇用契約など、働いた事実を裏づける記録も保存しておきます。",
      "履歴書・職務経歴書では、職種ごとに身についたスキルを具体的に言語化します。例えばカフェ・レストランなら『英語での接客・オーダー対応、レジ・キャッシュ処理、繁忙時間帯のチームワーク、衛生管理』、ファームなら『安全手順の遵守、体力・忍耐力、多国籍チームでの協働、生産性（歩合）への意識』など、日本の職場でも通じる能力に翻訳します。役職名も、日本の採用担当が理解できる表現に補足すると伝わります。",
      "実績はできるだけ数字で示します。『英語で1日◯人の接客』『◯か国のスタッフと協働』『繁忙期に◯席のフロアを担当』のように定量化すると、抽象的な『英語力』『コミュ力』より説得力が出ます。英語力は、実務でどう使ったか（電話・クレーム対応・チーム連携など）を具体的に語り、必要ならIELTS/PTEなどのスコアや、帰国後の受験計画も添えると客観性が増します。",
      "面接では、ワーホリの『ブランク』を前向きに再定義します。単なる空白期間ではなく『海外で自立して生活・就労し、異文化環境で成果を出した期間』として、応募先の仕事にどう活きるかを一貫したストーリーで語りましょう。逆カルチャーショックで帰国直後は調子が出ないこともありますが、経験の棚卸しを早めに行い、エピソードを『課題→行動→結果』の形で準備しておくと、面接で具体的に話せます。",
    ],
    keyFacts: [
      { label: "伝え方の軸", value: "英語での就労・具体スキル・数字の実績・適応力" },
      { label: "出国前にやる", value: "Referee依頼・連絡先・推薦状/在職証明の取得" },
      { label: "職歴の翻訳", value: "接客・農業などを日本でも通じる能力に言語化" },
      { label: "実績", value: "接客人数・協働国数など数字で示す" },
      { label: "英語力", value: "実務での使い方＋（任意で）IELTS/PTEスコア" },
    ],
    steps: [
      { title: "在職中にリファレンスを確保", description: "Refereeを依頼し、連絡先と（可能なら）推薦状・在職証明をもらいます。" },
      { title: "働いた記録を保存", description: "Payslip・雇用契約・業務内容のメモを保存し、実績の裏づけにします。" },
      { title: "スキルを言語化", description: "職種ごとに身についた能力を、日本でも通じる表現に翻訳します。" },
      { title: "実績を数字化", description: "接客人数・協働した国籍数・担当範囲などを定量的に整理します。" },
      { title: "英語力を具体化", description: "実務での英語の使い方を示し、必要ならスコアや受験計画を添えます。" },
      { title: "面接ストーリーを準備", description: "経験を『課題→行動→結果』の形で、応募先に結びつけて語れるようにします。" },
    ],
    tips: [
      "Refereeは在職中に依頼するのが鉄則。帰国後だと連絡が取りにくく、快諾も得にくくなります。",
      "職務経歴書は応募先ごとに、関連するスキル・実績を前面に出して書き換えると通りやすくなります。",
      "英語は『できる』より『どう使ったか』を具体的に。電話・クレーム対応・多国籍チームの連携などの場面で語りましょう。",
    ],
    warnings: [
      "採用の評価基準は企業・職種・業界によって異なります。この記事は一般的な伝え方の整理で、内定や採用を保証するものではありません。応募先の求める人物像に合わせて内容を調整してください。",
    ],
    faqs: [
      {
        question: "ワーホリはただの『ブランク』と見られませんか？",
        answer:
          "伝え方次第です。海外で自立して生活・就労し、異文化環境で成果を出した期間として、具体的なスキル・数字の実績・応募先への活かし方を語れば、むしろ強みになります。『課題→行動→結果』の形でエピソードを準備しておきましょう。",
      },
      {
        question: "英語力はどう証明すればいいですか？",
        answer:
          "実務でどう英語を使ったか（接客・電話・クレーム対応・多国籍チームでの連携など）を具体的に語るのが基本です。客観的な指標が必要な職種では、IELTS/PTEなどのスコアや帰国後の受験計画を添えると説得力が増します。",
      },
    ],
    verifiedAt: "2026-08-02",
    officialSources: [
      { label: "Fair Work Ombudsman｜Pay slips and record-keeping（就労記録・在職の証明）", url: "https://www.fairwork.gov.au/pay-and-wages/pay-slips-and-record-keeping", accessedAt: "2026-08-02" },
    ],
    relatedSlugs: ["leaving-australia-checklist", "final-pay-before-leaving", "job-reference-guide", "cover-letter-guide", "workplace-english", "ielts-pte-after-wh"],
    updatedAt: "2026-08-02",
    published: true,
  },
];
