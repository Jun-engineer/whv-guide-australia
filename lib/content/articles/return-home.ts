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
];
