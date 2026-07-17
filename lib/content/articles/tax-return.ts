import type { Article } from "./types";

export const taxReturnArticles: Article[] = [
  {
    id: "a6",
    title: "タックスリターン（確定申告）の基本",
    slug: "tax-return-guide",
    category: "tax-return",
    description: "会計年度・申告期限・必要書類・myGov連携まで、ワーホリの確定申告に必要な知識を整理します。",
    content: [
      "オーストラリアの会計年度は7月1日〜翌年6月30日。確定申告（Tax Return）はその後の7月1日〜10月31日に行います。多くのワーホリは源泉徴収された税金の一部が還付されます。",
      "myGovアカウントを作成してATOと連携すれば、雇用主が報告したIncome Statementが自動で反映され、オンラインで簡単に申告できます。",
      "ワーホリには「Working Holiday Maker（WHM）税率」という専用の税率が適用されます。課税所得の最初の45,000 AUDまでは15%で課税され、それを超える部分は通常の累進税率になります。給与から源泉徴収された金額が実際の税額より多ければ差額が還付され、少なければ追加で納税する形になります。多くの短期就労のワーホリは、還付を受けられるケースが一般的です。",
      "申告に必要なものは、TFN、myGovとATOの連携、そして各雇用主からのIncome Statement（かつてのPayment Summary）です。Income Statementは通常、会計年度終了後にATO側で自動的に「Tax ready」の状態になり、申告画面に反映されます。銀行の利子や、ギグワーク（ABNでの収入）がある場合はそれらも申告に含める必要があります。",
      "帰国後に申告する場合や、複数の雇用主で働いた場合など、状況が複雑なときは税理士（登録Tax Agent）に依頼する選択肢もあります。手数料はかかりますが、控除できる経費（仕事用の道具・交通費など）を正しく計上してもらえるため、結果的に手取りが増えることもあります。自分で申告する場合も、仕事関連の領収書は会計年度を通して保管しておくと控除に役立ちます。",
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
    verifiedAt: "2026-07-16",
    officialSources: [
      {
        label: "ATO｜Tax rates – working holiday maker（2025–26年度）",
        url: "https://www.ato.gov.au/tax-rates-and-codes/tax-rates-working-holiday-makers",
        accessedAt: "2026-07-16",
      },
      {
        label: "ATO｜Your tax return（申告手続き）",
        url: "https://www.ato.gov.au/individuals-and-families/your-tax-return",
        accessedAt: "2026-07-16",
      },
    ],
    searchIntent: "タックスリターンの基本と税率",
    relatedSlugs: ["super-guide", "tfn-guide", "abn-guide", "whm-tax-rates"],
    updatedAt: "2026-07-16",
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
    id: "a51",
    title: "ワーホリの所得税率（Working Holiday Maker税率）2025–26年度",
    slug: "whm-tax-rates",
    category: "tax-return",
    hub: "tax",
    priority: "P1",
    searchIntent: "ワーホリの所得税率・WHM税率",
    description:
      "ワーホリ（417/462）に適用されるWorking Holiday Maker税率を、2025–26年度のATO公式の税額表で解説。15%が適用される範囲、TFN未提出時の45%源泉、確認方法までまとめます。",
    content: [
      "結論から言うと、ワーホリ（サブクラス417・462）には「Working Holiday Maker（WHM）税率」という専用の所得税率が適用され、課税所得の0〜45,000 AUDの部分は1ドルあたり15セント（15%）で課税されます。これは全国共通の連邦（国）税で、州や準州によって変わるものではありません。以下は2025–26年度のATO公式の税額表です。",
      "【2025–26年度 WHM税率（課税所得に対する税額）】 0〜45,000 AUD：1ドルにつき15セント／ 45,001〜135,000 AUD：6,750 AUD ＋ 45,000超の1ドルにつき30セント／ 135,001〜190,000 AUD：33,750 AUD ＋ 135,000超の1ドルにつき37セント／ 190,001 AUD以上：54,100 AUD ＋ 190,000超の1ドルにつき45セント。（出典：ATO Tax rates – working holiday maker）",
      "給与からの源泉徴収の仕組みも知っておきましょう。雇用主がATOに「WHM雇用主」として登録している場合、あなたに支払う額が年間45,000 AUDに達するまでは一律15%で源泉徴収されます。45,000 AUDを超えた分からは上の表に沿った高い率が適用されます。登録していない雇用主は外国居住者向けの税率で源泉徴収します。",
      "TFN（納税者番号）を雇用主に提出していないと、支払額に対して45%という高い率で源泉徴収されます。仕事を始める前にTFNを取得・提出しておくことが、手取りを守るうえで非常に重要です。TFN未提出のまま働くと、後から取り戻すには確定申告（タックスリターン）が必要になります。",
      "実際の年間の税額や、還付になるか追加納税になるかは、1年間の総所得と源泉徴収額によって決まります。会計年度（7月1日〜翌6月30日）の終了後、7月1日〜10月31日の申告期間にmyGov経由でタックスリターンを行うと、源泉徴収が多すぎた分は還付されます。正確な自分の税額はATOの計算ツールで試算できます。",
    ],
    keyFacts: [
      { label: "適用対象", value: "サブクラス417・462のワーホリ（全国共通の連邦税）" },
      { label: "0〜45,000 AUD", value: "1ドルにつき15セント（15%）" },
      { label: "45,001〜135,000 AUD", value: "6,750 AUD ＋ 45,000超に30セント/ドル" },
      { label: "135,001〜190,000 AUD", value: "33,750 AUD ＋ 135,000超に37セント/ドル" },
      { label: "190,001 AUD以上", value: "54,100 AUD ＋ 190,000超に45セント/ドル" },
      { label: "TFN未提出時", value: "支払額に対し45%で源泉徴収" },
    ],
    steps: [
      { title: "TFNを取得・提出", description: "仕事開始前にTFNを取得し雇用主へ提出。未提出だと45%源泉になります。" },
      { title: "Payslipで源泉額を確認", description: "毎回のPayslipで源泉徴収額（Tax/PAYG）が正しく引かれているか確認します。" },
      { title: "会計年度末に総所得を把握", description: "6月30日で締め。全雇用主のIncome Statementが揃うのを待ちます。" },
      { title: "タックスリターンで精算", description: "myGov経由で申告し、源泉が多すぎた分の還付を受けます。" },
    ],
    tips: [
      "税率は会計年度ごとに改定されることがあります。年度をまたぐ場合は必ず該当年度の表を確認しましょう。",
      "ATOの「Simple tax calculator」で自分の年間税額を試算できます。",
    ],
    warnings: [
      "本記事の税率は2025–26年度のATO公式表に基づきます。年度が変わると数値が変わる可能性があるため、申告前に必ず該当年度の公式表を確認してください。",
      "本記事は一般的な情報提供であり、個別の税務に関する専門的助言ではありません。",
    ],
    faqs: [
      {
        question: "ワーホリの税率は本当に15%ですか？",
        answer:
          "課税所得の最初の45,000 AUDまでの部分が15%です。45,000 AUDを超える部分には、より高い率が段階的に適用されます（2025–26年度の公式表を参照）。なおTFNを提出していない場合は45%で源泉徴収されます。",
      },
      {
        question: "州によって税率は違いますか？",
        answer:
          "違いません。所得税は連邦（国）の税で全国共通です。州・準州によって変わるのは、州税に該当するもの（例：自動車登録や印紙税など）であり、ワーホリの所得税率は全国で同じです。",
      },
    ],
    sources: [
      { label: "ATO｜Tax rates – working holiday maker", url: "https://www.ato.gov.au/tax-rates-and-codes/tax-rates-working-holiday-makers" },
    ],
    verifiedAt: "2026-07-16",
    officialSources: [
      {
        label: "ATO｜Tax rates – working holiday maker（2025–26年度の税額表）",
        url: "https://www.ato.gov.au/tax-rates-and-codes/tax-rates-working-holiday-makers",
        accessedAt: "2026-07-16",
      },
      {
        label: "ATO｜Schedule 15 – Tax table for working holiday makers（源泉徴収の仕組み）",
        url: "https://www.ato.gov.au/rates/schedule-15---tax-table-for-working-holiday-makers/",
        accessedAt: "2026-07-16",
      },
    ],
    relatedSlugs: ["tax-return-guide", "tfn-guide", "super-guide", "abn-guide"],
    updatedAt: "2026-07-16",
    published: true,
  },

  {
    id: "a119",
    title: "ワーホリはオーストラリアの税務上の居住者？判定の考え方",
    slug: "tax-residency-australia",
    category: "tax-return",
    hub: "tax",
    priority: "P1",
    searchIntent: "税務上の居住者判定とWHM税率",
    description:
      "ワーホリが『オーストラリアの税務上の居住者』かを判定する考え方を解説。居住性（residency for tax purposes）とWorking Holiday Maker税率は別概念であることを整理し、判定に使うテストと確認方法をまとめます。",
    content: [
      "結論から言うと、ワーホリ（サブクラス417・462）の所得には、税務上の居住者か非居住者かに関わらず『Working Holiday Maker（WHM）税率』が適用されます。つまり『居住者だから15%』ではなく、ワーホリという区分ゆえに最初の45,000 AUDまで15%が適用されるのです。この2つ（居住性とWHM税率）を混同しないことが最大のポイントです。",
      "では税務上の居住性（residency for tax purposes）は何に関係するのでしょうか。居住性は、ビザの種類や入国管理上の在留資格とは別の、税法上の概念です。居住者か非居住者かは、Medicare Levy（メディケア税）の対象になるか、WHM収入以外の所得（銀行利子など）の扱い、そして海外所得の申告義務などに影響します。WHMの給与そのものの税率には影響しませんが、周辺の扱いが変わります。",
      "居住性の判定：ATOは複数のテストで総合的に判定します。代表的なのは、①resides test（生活の本拠が実際にオーストラリアにあるか）、②domicile test（住所・恒久的居所）、③183日テスト（その年度に半年以上滞在したか）、④superannuation test。長期に1か所へ腰を据えて生活・就労する人は居住者と判定されやすく、短期間で各地を転々とする典型的なワーホリは非居住者と判定されることもあります。滞在の実態によって結論が変わるため、一律には決まりません。",
      "実務上の注意：多くのワーホリは、給与についてはWHM税率で源泉徴収され、年度末のタックスリターンで精算します。自分が居住者か非居住者かで、Medicare Levyの要否や海外所得の申告要否が変わるため、複雑なケース（日本に副業収入がある、投資がある、長期滞在で生活実態がある等）では自己判断せず、ATOの判定ツールや税理士に確認するのが安全です。",
      "確認方法：ATOには『Work out your tax residency』という判定ツールがあり、質問に答えると自分の居住区分の目安が分かります。TFN Declaration提出時の居住区分の選択にも関わるため、就労開始前に一度確認しておくと、源泉徴収や年度末の申告での行き違いを防げます。",
    ],
    keyFacts: [
      { label: "WHM税率", value: "居住性に関わらず適用（最初の45,000 AUDまで15%）" },
      { label: "居住性とは", value: "税法上の概念。ビザ・在留資格とは別物" },
      { label: "居住性が影響する例", value: "Medicare Levy、海外所得の申告、WHM以外の所得の扱い" },
      { label: "判定テスト", value: "resides / domicile / 183日 / superannuation" },
      { label: "確認", value: "ATOの税務居住性判定ツール／税理士" },
    ],
    steps: [
      { title: "WHM税率を理解", description: "給与はWHM税率で課税されると押さえます（居住性と別）。" },
      { title: "居住性を判定", description: "ATOの判定ツールで居住者/非居住者の目安を確認します。" },
      { title: "周辺の扱いを確認", description: "Medicare Levyや海外所得の申告要否を確認します。" },
      { title: "複雑なら専門家へ", description: "副業・投資・長期滞在など複雑な場合は税理士に相談します。" },
    ],
    tips: [
      "『税務上の居住者＝永住者』ではありません。ワーホリでも生活実態によっては税務上の居住者と判定されることがあります。",
      "居住区分はTFN Declarationの記入にも関わるため、就労前に確認しておくと安心です。",
    ],
    warnings: [
      "居住性の判定は個別事情で結論が変わります。自己判断が難しい場合はATOの公式ツールや税理士で確認してください。",
      "本記事は一般的な情報提供であり、個別の税務助言ではありません。",
    ],
    faqs: [
      {
        question: "税務上の居住者になると税率が15%より下がりますか？",
        answer:
          "ワーホリの給与にはWHM税率が適用されるため、居住者になっても『通常の免税枠（tax-free threshold）』が適用されるわけではありません。居住性は主にMedicare Levyや海外所得の扱いに影響します。",
      },
    ],
    sources: [
      { label: "ATO - Your tax residency", url: "https://www.ato.gov.au/individuals-and-families/coming-to-australia-or-going-overseas/your-tax-residency" },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "ATO｜Your tax residency（税務上の居住性の判定）",
        url: "https://www.ato.gov.au/individuals-and-families/coming-to-australia-or-going-overseas/your-tax-residency",
        accessedAt: "2026-07-18",
      },
      {
        label: "ATO｜Tax rates – working holiday maker",
        url: "https://www.ato.gov.au/tax-rates-and-codes/tax-rates-working-holiday-makers",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["whm-tax-rates", "tax-return-guide", "tax-return-overseas-income", "tfn-declaration-form"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a120",
    title: "Payslipの見方｜時給・Penalty・Super・Taxを確認する方法",
    slug: "payslip-guide",
    category: "tax-return",
    hub: "tax",
    priority: "P0",
    searchIntent: "Payslip（給与明細）の見方",
    description:
      "オーストラリアのPayslip（給与明細）の見方を解説。記載が義務づけられている項目、時給・労働時間・Penalty rate・Super・Taxの確認方法、Payslipがもらえない/内容が不足している場合の対応をまとめます。",
    content: [
      "Payslip（給与明細）は、あなたが正しく支払われているかを確認する最重要書類です。結論として、オーストラリアでは雇用主はPayslipを給与支払いから1営業日以内に発行する義務があり（Fair Work）、そこには時給・労働時間・総支給/手取り・Super・Taxなどを明記しなければなりません。毎回必ず内容を確認しましょう。",
      "Payslipに記載が義務づけられている主な項目：①雇用主名と雇用主のABN、②あなたの氏名、③給与計算期間（pay period）と支払日、④総支給額（gross pay）と手取り額（net pay）、⑤時給（ordinary hourly rate）と働いた時間・その金額、⑥手当・ローディング・ボーナス・Penalty rate（土日祝・深夜等の割増）・残業代、⑦控除（deductions）の内訳、⑧Super（拠出額と拠出先ファンド名）。これらが欠けている場合は雇用主に是正を求められます。",
      "確認のポイント（時給・時間）：契約した時給と、Payslip上のordinary hourly rate、働いた時間が合っているかを照合します。カジュアルなら通常25%のCasual loadingが上乗せされます。土日・祝日・早朝深夜に働いた場合は、該当するAward（裁定）やPenalty rateが適用されているかを確認しましょう。",
      "確認のポイント（SuperとTax）：Superは総支給（OTE）の12%が拠出額として記載され、拠出先ファンド名も明記されているはずです。実際にファンドへ入金されているかも定期的にチェックします。Tax（PAYG）欄は源泉徴収額で、TFNを提出していれば通常はWHM税率で引かれます。TFN未提出だと45%と高くなるため、金額に違和感があれば確認してください。",
      "Payslipがもらえない/内容が不足している場合：まず雇用主に発行・訂正を依頼します。応じない、明らかに時給が最低賃金を下回る、Superが積み立てられていない等の問題があれば、記録（シフト・実働時間・入金額）を残したうえで、Fair Work Ombudsman（公正労働オンブズマン）に無料で相談できます。Payslipは未払い賃金を請求する際の重要な証拠になります。",
    ],
    keyFacts: [
      { label: "発行義務", value: "給与支払いから1営業日以内（Fair Work）" },
      { label: "必須項目", value: "雇用主名/ABN・期間・総支給/手取り・時給/時間・Super・控除" },
      { label: "Casual loading", value: "通常25%上乗せ（カジュアル）" },
      { label: "Super", value: "OTEの12%＋拠出先ファンド名を明記" },
      { label: "トラブル相談", value: "Fair Work Ombudsman（無料）" },
    ],
    steps: [
      { title: "毎回受け取る", description: "支払いごとにPayslipを受け取り保存します。" },
      { title: "時給と時間を照合", description: "契約時給・実働時間・Penalty rateが正しいか確認します。" },
      { title: "SuperとTaxを確認", description: "Super 12%とファンド名、源泉税額を確認します。" },
      { title: "問題があれば相談", description: "不足・未払いは記録を残しFair Workに相談します。" },
    ],
    tips: [
      "Payslipは帰国後のDASP申請やタックスリターンでも役立ちます。すべて保存しておきましょう。",
      "『Super込みの時給』と言われた場合、実際にSuperが別途積み立てられているかPayslipで必ず確認してください。",
    ],
    warnings: [
      "現金払いでPayslipが出ない仕事は、最低賃金・Super・労災の未払いリスクが高いです。記録を必ず残してください。",
    ],
    faqs: [
      {
        question: "Payslipをもらえないのは違法ですか？",
        answer:
          "はい。Fair Workのルールでは、雇用主は給与支払いから1営業日以内にPayslipを発行する義務があります。もらえない場合は発行を求め、応じなければFair Work Ombudsmanに相談できます。",
      },
    ],
    sources: [
      { label: "Fair Work Ombudsman - Pay slips", url: "https://www.fairwork.gov.au/pay-and-wages/pay-slips-and-record-keeping/pay-slips" },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "Fair Work Ombudsman｜Pay slips（発行義務・記載項目）",
        url: "https://www.fairwork.gov.au/pay-and-wages/pay-slips-and-record-keeping/pay-slips",
        accessedAt: "2026-07-18",
      },
      {
        label: "ATO｜How much super to pay（SG率12%）",
        url: "https://www.ato.gov.au/businesses-and-organisations/super-for-employers/paying-super-contributions/how-much-super-to-pay",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["superannuation-basics", "whm-tax-rates", "tfn-declaration-form", "income-statement-tax-ready", "award-rates-penalty-rates"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a121",
    title: "Income StatementとTax Readyとは？myGovで確認する方法",
    slug: "income-statement-tax-ready",
    category: "tax-return",
    hub: "tax",
    priority: "P0",
    searchIntent: "Income StatementとTax Readyの確認",
    description:
      "Income Statement（旧Payment Summary）とは何か、『Tax ready』の意味、myGov（ATO連携）で確認する方法を解説。申告前にTax readyを待つべき理由と、雇用主が対応しない場合の対処をまとめます。",
    content: [
      "Income Statement（インカムステートメント）は、雇用主があなたに1年間で支払った給与・源泉徴収額・Superをまとめた記録で、かつての『Payment Summary（Group Certificate）』に代わるものです。結論として、Income Statementは紙で渡されず、myGov経由でATOのオンラインサービスから確認します。そして申告はこれが『Tax ready』になってから行うのが鉄則です。",
      "『Tax ready』とは：雇用主はSTP（Single Touch Payroll）という仕組みで、給与情報をATOに随時報告しています。会計年度（6月30日）が終わると、雇用主はその年の内容を確定（finalise）させ、あなたのIncome Statementのステータスが『Not tax ready』から『Tax ready』に変わります。Tax readyになって初めて、その数字が確定した正式なものとして申告に使えます。",
      "確認方法：myGovにログイン →『ATO』サービスを開く →『Employment』→『Income statements』（またはIncome and deductions）で、各雇用主からのIncome Statementとステータスを確認できます。複数の職場で働いた場合は、それぞれのIncome Statementが表示されます。すべてが『Tax ready』になっているかを確認しましょう。",
      "いつTax readyになるか：多くの雇用主はSTPの確定を7月14日ごろまでに行います。そのため、7月上旬に急いで申告すると『Not tax ready』の暫定値で申告してしまい、後で修正が必要になることがあります。原則として、すべてのIncome Statementが『Tax ready』になるのを待ってから申告してください。",
      "雇用主が確定しない場合：7月半ばを過ぎてもステータスが『Not tax ready』のままなら、まず雇用主に確定を依頼します。それでも解決しない場合はATOに問い合わせます。どうしても間に合わないときは、自分の記録（Payslip）から金額を入力して申告することも可能ですが、その場合は正確性に責任を持つ必要があるため、Payslipを保管しておくことが重要です。",
    ],
    keyFacts: [
      { label: "Income Statementとは", value: "年間の給与・源泉税・Superの記録（旧Payment Summary）" },
      { label: "確認場所", value: "myGov →ATO →Employment →Income statements" },
      { label: "Tax readyの意味", value: "雇用主が内容を確定＝申告に使える状態" },
      { label: "確定の目安", value: "多くは7月14日ごろまで" },
      { label: "申告のタイミング", value: "全てTax ready後に申告するのが原則" },
    ],
    steps: [
      { title: "myGovとATOを連携", description: "未連携ならATOをmyGovにリンクします。" },
      { title: "Income statementsを開く", description: "Employmentから各雇用主の明細を確認します。" },
      { title: "Tax readyを待つ", description: "全てのステータスがTax readyになるのを待ちます。" },
      { title: "申告する", description: "Tax ready後にタックスリターンを提出します。" },
    ],
    tips: [
      "急いで7月上旬に申告するとNot tax readyの暫定値になりがち。7月中旬以降が安心です。",
      "Income StatementはmyGov上で確認する時代です。紙のPayment Summaryを待たないようにしましょう。",
    ],
    warnings: [
      "Not tax readyの状態で申告すると、確定値と食い違い後で修正が必要になることがあります。",
    ],
    faqs: [
      {
        question: "紙のPayment Summary（Group Certificate）はもらえますか？",
        answer:
          "STPを使う雇用主の場合、紙のPayment Summaryは発行されず、myGov上のIncome Statementで確認します。『会社から書類が来ない』のは正常で、自分でmyGovから確認する必要があります。",
      },
    ],
    sources: [
      { label: "ATO - How to get your income statement", url: "https://www.ato.gov.au/individuals-and-families/your-tax-return/before-you-prepare-your-tax-return/how-to-get-your-income-statement" },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "ATO｜How to get your income statement（Tax ready・myGov）",
        url: "https://www.ato.gov.au/individuals-and-families/your-tax-return/before-you-prepare-your-tax-return/how-to-get-your-income-statement",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["mygov-ato-linking", "tax-return-guide", "tax-return-howto", "payslip-guide", "tax-return-multiple-jobs"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a122",
    title: "myGovとATOを連携する方法｜エラー時の確認事項",
    slug: "mygov-ato-linking",
    category: "tax-return",
    hub: "tax",
    priority: "P0",
    searchIntent: "myGovとATOの連携方法",
    description:
      "myGovアカウントにATO（税務署）を連携する方法を解説。連携に必要な本人確認情報、連携できないときのlinking code取得、よくあるエラーの確認事項をワーホリ向けにまとめます。",
    content: [
      "myGovとATOを連携（link）すると、タックスリターン、Income Statement、Super口座の確認などがオンラインでできるようになります。結論として、連携にはmyGovアカウントと、ATOがあなたを本人確認するための情報が必要です。到着直後で情報が少ない人は、ATOに電話して『linking code（連携コード）』をもらう方法が確実です。",
      "連携の基本手順：①myGovアカウントを作成（メール・携帯番号で登録）、②ログイン後『Link a service』→『Australian Taxation Office (ATO)』を選択、③本人確認の質問に答える、④連携完了。連携できると、myGovのトップにATOが表示され、そこから各種手続きにアクセスできます。",
      "本人確認に使う情報：ATOは、あなたのTFNに加えて、以下のうち通常2つの情報で本人確認します——直近のNotice of assessment（過去に申告していれば）、還付金が振り込まれた銀行口座の詳細、Income Statement/PAYGの情報、Super口座の詳細、Centrelinkの支払い情報、配当金の明細など。オーストラリアでの申告歴が無いワーホリは、これらの情報を持っていないことが多く、その場合は次の方法を使います。",
      "情報が足りない/エラーになる場合：ATO（13 28 61、海外からは+61 2 6216 1111）に電話し、本人確認のうえで『linking code』を発行してもらいます。このコードとTFNを使えば、上記の書類情報がなくても連携できます。linking codeは発行から24時間程度で失効するため、受け取ったらすぐに手続きしてください。",
      "よくあるエラーの確認事項：①氏名・生年月日がパスポートとATO登録で一致しているか（結婚等で異なると失敗）、②TFNが正しいか、③銀行口座情報を入力する場合は還付先として登録された口座か、④コードの有効期限が切れていないか。何度も失敗すると一時的にロックされることがあるため、その場合は電話でのlinking code方式に切り替えるのが早道です。",
    ],
    keyFacts: [
      { label: "連携でできること", value: "タックスリターン・Income Statement・Super確認" },
      { label: "必要なもの", value: "myGovアカウント＋TFN＋本人確認情報" },
      { label: "情報が無い場合", value: "ATOに電話しlinking codeを取得" },
      { label: "ATO電話", value: "13 28 61（海外 +61 2 6216 1111）" },
      { label: "linking code", value: "発行後およそ24時間で失効" },
    ],
    steps: [
      { title: "myGovを作成", description: "メール・携帯番号でアカウントを作ります。" },
      { title: "Link a serviceでATOを選択", description: "サービス一覧からATOを選びます。" },
      { title: "本人確認", description: "2つの情報、またはlinking codeで本人確認します。" },
      { title: "連携完了を確認", description: "トップにATOが表示されれば完了です。" },
    ],
    tips: [
      "申告歴の無いワーホリは、最初からATOに電話してlinking codeをもらう方が早いことが多いです。",
      "myGovの登録名は、パスポート・ATO登録と一致させましょう。表記ゆれは連携エラーの原因になります。",
    ],
    warnings: [
      "『myGov』を装ったSMS・メールのフィッシングに注意。ログインは必ず公式サイト（my.gov.au）から行ってください。",
    ],
    faqs: [
      {
        question: "銀行口座情報などが無くても連携できますか？",
        answer:
          "できます。本人確認に使える情報が足りない場合は、ATOに電話してlinking codeを発行してもらえば、TFNとコードで連携できます。到着直後のワーホリはこの方法が確実です。",
      },
    ],
    sources: [
      { label: "ATO - Link the ATO to your myGov account", url: "https://www.ato.gov.au/online-services/online-services-for-individuals-and-sole-traders/how-to-link-ato-to-your-mygov-account" },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "ATO｜Link the ATO to your myGov account（連携手順・linking code）",
        url: "https://www.ato.gov.au/online-services/online-services-for-individuals-and-sole-traders/how-to-link-ato-to-your-mygov-account",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["income-statement-tax-ready", "tax-return-howto", "tax-return-guide", "mygov-account-guide", "tfn-guide"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a123",
    title: "ワーホリの経費控除｜仕事用品・制服・車・在宅勤務",
    slug: "tax-return-deductions",
    category: "tax-return",
    hub: "tax",
    priority: "P1",
    searchIntent: "タックスリターンの経費控除",
    description:
      "タックスリターンで申告できる仕事関連の経費控除（deductions）を解説。制服・保護具・道具・仕事用の車・在宅勤務など、控除できるもの/できないものの原則と、必要な記録をまとめます。",
    content: [
      "経費控除（deductions）は、仕事のために自分で支払った費用を課税所得から差し引ける仕組みで、正しく申告すれば還付が増えます。結論として、控除には3つの原則があります——①自分でお金を払い（雇用主に払い戻されていない）、②仕事（収入を得ること）に直接関係し、③支出の記録（領収書）がある、こと。この3つを満たすものだけが控除できます。",
      "控除できる代表例：①ロゴ入り制服・保護具（安全靴・手袋・高視認性ベスト・日焼け対策のサンプロテクション等）、②仕事に必要な道具・機材、③仕事に使う電話・インターネットの通信費（仕事使用分のみ）、④仕事に直接必要な資格・講習の費用、⑤仕事上の移動で使った車（ただし自宅↔職場の通勤は原則対象外）。農場・建設・清掃・配達など、仕事で装備や車を使う人は控除できる項目が比較的多くなります。",
      "控除できない代表例：①普通の私服（ロゴなしの一般的な服は制服とみなされない）、②自宅から職場への通勤費、③雇用主に払い戻された費用、④私的な支出。『仕事で着るから』という理由だけでは一般的な衣類は控除できない点に注意してください。",
      "車と在宅勤務：仕事で車を使う場合、『1kmあたりの定額（cents per km、上限あり）』か『実費按分（logbook method）』のどちらかで計算します。在宅勤務がある場合は、光熱費・通信費などを『固定レート法（時間×定額）』か『実費法』で計算できます。いずれも仕事使用の割合と記録が必要です。",
      "記録の残し方：控除するには証拠が要ります。領収書はスマホで撮影し、ATOの公式アプリ『myDeductions』に記録しておくと、申告時にそのまま取り込めて便利です。少額でも積み重なると還付額に効くため、仕事関連の支出は会計年度を通してこまめに記録しましょう。判断に迷う支出は税理士に確認するのが安全です。",
    ],
    keyFacts: [
      { label: "控除の3原則", value: "自費で払った・仕事に関係・記録がある" },
      { label: "控除できる例", value: "制服/保護具・道具・仕事用通信費・仕事の移動" },
      { label: "控除できない例", value: "一般の私服・通勤費・払い戻された費用" },
      { label: "車", value: "cents per km か logbook method" },
      { label: "記録アプリ", value: "ATO myDeductions" },
    ],
    steps: [
      { title: "対象を把握", description: "3原則を満たす仕事関連の支出を洗い出します。" },
      { title: "領収書を保存", description: "レシートを撮影しmyDeductions等に記録します。" },
      { title: "車・在宅を計算", description: "走行距離や在宅時間を記録し按分します。" },
      { title: "申告に入力", description: "タックスリターンのdeductions欄に入力します。" },
    ],
    tips: [
      "農場のサンプロテクションや保護具、配達の車関連など、職種特有の控除を取りこぼさないようにしましょう。",
      "私用と兼用のもの（スマホ・車）は仕事使用の割合で按分し、その根拠を残します。",
    ],
    warnings: [
      "領収書のない経費や、私的支出の控除はできません。過大申告はペナルティの対象です。",
      "控除ルールは変わることがあります。申告前にATOの最新情報を確認してください。",
    ],
    faqs: [
      {
        question: "普通の服やジーンズは制服として控除できますか？",
        answer:
          "できません。控除できるのは、ロゴ入りの制服や、安全靴・高視認性ベストなどの保護具です。一般的な私服は『仕事で着ている』という理由だけでは控除の対象になりません。",
      },
    ],
    sources: [
      { label: "ATO - Deductions you can claim", url: "https://www.ato.gov.au/individuals-and-families/income-deductions-offsets-and-records/deductions-you-can-claim" },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "ATO｜Deductions you can claim（控除の要件・車・在宅）",
        url: "https://www.ato.gov.au/individuals-and-families/income-deductions-offsets-and-records/deductions-you-can-claim",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["tax-return-guide", "tax-return-howto", "abn-record-keeping", "tax-agent-guide", "farm-work-clothing"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a124",
    title: "複数の職場で働いた場合のタックスリターン",
    slug: "tax-return-multiple-jobs",
    category: "tax-return",
    hub: "tax",
    priority: "P1",
    searchIntent: "複数の職場のタックスリターン",
    description:
      "1年間で複数の職場を掛け持ち・転々とした場合のタックスリターンの注意点を解説。複数のIncome Statement、免税枠の重複、追徴になりやすい理由、全てTax ready後に申告する流れをまとめます。",
    content: [
      "ワーホリは1年で複数の職場を掛け持ち・転々とすることが多く、その場合タックスリターンでは全ての収入を合算して申告します。結論として、①全ての職場のIncome Statementが『Tax ready』になるのを待ち、②合算して申告する、のが基本です。掛け持ちは源泉徴収が不足しがちで、年度末に追加納税（追徴）になることがある点に注意します。",
      "なぜ追徴になりやすいか：各雇用主は『その職場の給与だけ』を見て源泉徴収します。免税枠（tax-free threshold）を複数の職場で申請していたり、単体では低い税率でも合算すると高い区分に入る場合、トータルの源泉徴収が本来の税額に届かず、申告時に不足分を払うことになります。ワーホリはWHM税率のため免税枠の考え方は特殊ですが、掛け持ちで源泉が不足する構図は同じです。",
      "免税枠の扱い：通常、免税枠は主たる勤務先1か所でのみ申請します。2か所以上で申請すると源泉徴収が過少になり追徴の原因になります。すでに複数で申請してしまっている場合は、雇用主にWithholding declarationで変更を申し出るか、年度末の申告で精算されます。",
      "申告の流れ：①myGov→ATOで、働いた全ての職場のIncome Statementが表示され、全て『Tax ready』か確認、②表示されない職場があればPayslipで確認し雇用主に問い合わせ、③全ての給与・源泉税を合算して申告、④還付または追徴を精算。短期の職場も含めて漏れなく申告することが重要です。",
      "実務のコツ：職場が変わるたびにPayslipを保存し、TFNは全ての雇用主に提出しておきます（未提出だと45%源泉）。7月中旬以降、全Income StatementがTax readyになってから申告すれば、入力漏れや暫定値での誤りを防げます。合算で追徴になりそうな場合に備え、少し資金を残しておくと安心です。",
    ],
    keyFacts: [
      { label: "基本", value: "全職場の収入を合算して申告" },
      { label: "待つべき状態", value: "全Income StatementがTax ready" },
      { label: "追徴の原因", value: "掛け持ちで源泉徴収が不足しがち" },
      { label: "免税枠", value: "主たる1か所のみで申請するのが原則" },
      { label: "TFN", value: "全雇用主に提出（未提出は45%源泉）" },
    ],
    steps: [
      { title: "全職場を把握", description: "1年で働いた全ての職場をリストアップします。" },
      { title: "Income Statementを確認", description: "全てがTax readyか、漏れがないか確認します。" },
      { title: "合算して申告", description: "全給与・源泉税を合算してタックスリターンを提出します。" },
      { title: "追徴に備える", description: "不足が出る場合に備え資金を残しておきます。" },
    ],
    tips: [
      "免税枠は主たる1か所のみ。掛け持ちで複数申請していると追徴になりやすいので注意しましょう。",
      "短期の職場も申告に含めます。表示されない場合はPayslipで確認し雇用主に問い合わせを。",
    ],
    warnings: [
      "収入の申告漏れはペナルティの対象です。短期・少額の職場も必ず含めてください。",
    ],
    faqs: [
      {
        question: "掛け持ちだと必ず追徴になりますか？",
        answer:
          "必ずではありませんが、源泉徴収が不足して追徴になるケースが増えます。特に免税枠を複数で申請していた場合に起きやすいです。年度末に合算して精算されるため、資金を少し残しておくと安心です。",
      },
    ],
    sources: [
      { label: "ATO - Income from more than one job", url: "https://www.ato.gov.au/individuals-and-families/jobs-and-employment-types/working-as-an-employee/income-from-more-than-one-job" },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "ATO｜Income from more than one job（掛け持ちと源泉徴収）",
        url: "https://www.ato.gov.au/individuals-and-families/jobs-and-employment-types/working-as-an-employee/income-from-more-than-one-job",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["tax-return-guide", "income-statement-tax-ready", "tfn-declaration-form", "whm-tax-rates", "tax-agent-guide"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a125",
    title: "日本の副業・給与・利息がある場合の豪州申告",
    slug: "tax-return-overseas-income",
    category: "tax-return",
    hub: "tax",
    priority: "P1",
    searchIntent: "海外所得（日本）の豪州申告",
    description:
      "日本の副業・給与・銀行利息など海外所得がある場合の、オーストラリアでの申告要否を解説。税務上の居住性による違い、二重課税、外国税額控除の考え方を、専門家確認を前提に整理します。",
    content: [
      "日本にも収入（副業・給与・銀行利息・投資など）がある場合、オーストラリアで申告する必要があるかは『税務上の居住性』で変わります。結論として、オーストラリアの税務上の居住者は原則として全世界所得（日本の所得を含む）を申告し、非居住者は原則オーストラリア源泉の所得のみを申告します。まず自分がどちらかを確認することが出発点です。",
      "税務上の居住者の場合：日本のリモート副業、日本の給与、日本の銀行利子・配当なども、原則オーストラリアの申告に含める必要があります。日本ですでに課税された所得については、二重課税を避けるために『外国税額控除（Foreign Income Tax Offset）』を適用できる場合があります。日豪租税条約により、どちらの国が課税するかが調整されます。",
      "非居住者の場合：原則としてオーストラリア源泉の所得（豪州での給与など）だけを申告し、日本の所得はオーストラリアでは申告しないのが基本です。ただし個別事情で例外があり得ます。多くの短期ワーホリは非居住者に該当し得ますが、滞在実態によっては居住者と判定されることもあるため、自己判断は禁物です。",
      "日本側の申告も忘れずに：オーストラリアで働いた所得や、日本を出国したことで、日本側の確定申告・住民税の扱いが変わることがあります。渡航前の『非居住者』手続きや納税管理人の要否など、日本側のルールも別途確認が必要です（渡航前準備の記事も参照）。",
      "実務上の注意：海外所得が絡む申告は複雑で、居住性の判定・租税条約・外国税額控除など専門知識が必要です。日本に継続的な副業収入・不動産・投資がある人は、自己判断せず、これらに詳しい登録税理士（Tax Agent）や、日豪双方の税務に対応できる専門家に相談することを強くおすすめします。",
    ],
    keyFacts: [
      { label: "居住者", value: "原則、全世界所得（日本分含む）を申告" },
      { label: "非居住者", value: "原則、オーストラリア源泉所得のみ申告" },
      { label: "二重課税対策", value: "外国税額控除・日豪租税条約で調整" },
      { label: "日本側", value: "出国・非居住者手続き等も別途確認が必要" },
      { label: "推奨", value: "海外所得がある人は専門家に相談" },
    ],
    steps: [
      { title: "居住性を確認", description: "ATOツールで税務上の居住者/非居住者を確認します。" },
      { title: "海外所得を整理", description: "日本の給与・副業・利子・投資を洗い出します。" },
      { title: "申告要否を判断", description: "居住性に応じて豪州での申告要否を確認します。" },
      { title: "専門家に相談", description: "複雑な場合は日豪税務に詳しい税理士に相談します。" },
    ],
    tips: [
      "日豪には租税条約があり、二重課税は外国税額控除等で調整されます。日本で払った税の証明を残しましょう。",
      "居住性の判定が結論を大きく左右します。まず居住区分を確定させてから申告方針を決めます。",
    ],
    warnings: [
      "海外所得の申告要否は個別事情で変わります。自己判断せず、必要に応じて専門家に相談してください。",
      "本記事は一般的な情報提供であり、個別の税務助言ではありません。",
    ],
    faqs: [
      {
        question: "日本のリモート副業の収入は豪州で申告が必要ですか？",
        answer:
          "税務上の居住性によります。オーストラリアの居住者なら原則として全世界所得として申告が必要で、非居住者なら原則不要です。判定が難しいため、継続収入がある場合は税理士に確認してください。",
      },
    ],
    sources: [
      { label: "ATO - Your tax residency", url: "https://www.ato.gov.au/individuals-and-families/coming-to-australia-or-going-overseas/your-tax-residency" },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "ATO｜Your tax residency（居住者/非居住者と所得の範囲）",
        url: "https://www.ato.gov.au/individuals-and-families/coming-to-australia-or-going-overseas/your-tax-residency",
        accessedAt: "2026-07-18",
      },
      {
        label: "ATO｜Foreign income tax offset（外国税額控除）",
        url: "https://www.ato.gov.au/individuals-and-families/income-deductions-offsets-and-records/offsets-and-rebates/foreign-income-tax-offset",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["tax-residency-australia", "tax-return-guide", "tax-agent-guide", "japan-tax-residency-before-departure", "japan-remote-work-tax"],
    updatedAt: "2026-07-18",
    published: true,
  },

  {
    id: "a126",
    title: "Tax Agentに依頼するべき人・料金・登録確認",
    slug: "tax-agent-guide",
    category: "tax-return",
    hub: "tax",
    priority: "P2",
    searchIntent: "Tax Agentへの依頼判断",
    description:
      "タックスリターンを登録税理士（Tax Agent）に依頼すべき人、料金の目安、登録の確認方法（TPB）、自分で申告する場合との違い、申告期限の延長までを解説します。",
    content: [
      "Tax Agent（登録税理士）は、報酬を得てタックスリターンを代理作成・提出できる資格者です。結論として、自分で申告できる人はmyGovで無料でできますが、①複数の職場・ABN収入・海外所得があり複雑、②控除を最大化したい、③英語や制度に不安がある、という人はTax Agentに依頼する価値があります。",
      "依頼を検討すべき人：雇用とABN（ギグワーク）の両方の収入がある、1年で多数の職場を掛け持ちした、日本の副業・投資など海外所得がある、経費控除の判断が難しい、帰国後に申告するので手続きに不安がある——こうしたケースでは、専門家が控除を適切に計上し、誤りや追徴のリスクを減らしてくれます。",
      "料金の目安と控除：シンプルな個人の申告なら概ね100〜200 AUD前後が目安（内容により変動）。ABN・事業所得が絡むと高くなります。支払ったTax Agentの料金は、翌年の申告で経費として控除できます。まず見積もりを確認してから依頼しましょう。",
      "登録の確認（重要）：報酬を得てタックスリターンを作成・提出できるのは、TPB（Tax Practitioners Board）に登録されたTax Agentだけです。無資格者への依頼はトラブルの元になります。依頼前に、TPBの公式登録簿（tpb.gov.au）で氏名・登録番号を検索し、正規の登録があるか必ず確認してください。SNSや口コミの『安く代行します』には無資格者が紛れることがあります。",
      "申告期限の延長：自分で申告する場合の期限は原則10月31日です。一方、10月31日より前に登録Tax Agentのクライアントになっていれば、Tax Agent経由での申告は期限が翌年まで延長されることがあります。ただし納税がある場合の支払い期限は別なので、延長を当てにする場合も早めに相談しましょう。",
    ],
    keyFacts: [
      { label: "Tax Agentとは", value: "報酬を得て申告を代理できるTPB登録の資格者" },
      { label: "向く人", value: "複数収入・ABN・海外所得・控除最大化・英語に不安" },
      { label: "料金目安", value: "個人の単純申告で概ね100〜200 AUD前後" },
      { label: "料金の控除", value: "支払った料金は翌年の経費として控除可" },
      { label: "登録確認", value: "TPB公式登録簿（tpb.gov.au）で確認" },
      { label: "期限延長", value: "10/31前に登録すると延長される場合あり" },
    ],
    steps: [
      { title: "自力か依頼か判断", description: "収入・控除の複雑さと英語の不安から判断します。" },
      { title: "TPBで登録確認", description: "tpb.gov.auでTax Agentの登録を確認します。" },
      { title: "見積もりを取る", description: "料金と対応範囲を事前に確認します。" },
      { title: "書類を渡す", description: "Payslip・Income Statement・経費記録を提供して依頼します。" },
    ],
    tips: [
      "『安く代行』をうたう無資格者に注意。必ずTPB登録簿で確認してから依頼しましょう。",
      "帰国後に申告する予定なら、在豪中にmyGov・ATO連携・銀行口座を整えておくとスムーズです。",
    ],
    warnings: [
      "TPB未登録の者が報酬を得て申告を代行するのは違法です。依頼前に登録を必ず確認してください。",
    ],
    faqs: [
      {
        question: "Tax Agentに頼むと期限が延びますか？",
        answer:
          "10月31日より前に登録Tax Agentのクライアントになっていれば、Agent経由の申告は期限が延長されることがあります。ただし納税の支払い期限は別に定まるため、延長を当てにせず早めに相談しましょう。",
      },
    ],
    sources: [
      { label: "Tax Practitioners Board - Register", url: "https://www.tpb.gov.au/registrations_search" },
      { label: "ATO - Lodge with a registered tax agent", url: "https://www.ato.gov.au/individuals-and-families/your-tax-return/how-to-lodge-your-tax-return/lodge-with-a-registered-tax-agent" },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "Tax Practitioners Board｜Register（Tax Agent登録の確認）",
        url: "https://www.tpb.gov.au/registrations_search",
        accessedAt: "2026-07-18",
      },
      {
        label: "ATO｜Lodge with a registered tax agent（期限・依頼）",
        url: "https://www.ato.gov.au/individuals-and-families/your-tax-return/how-to-lodge-your-tax-return/lodge-with-a-registered-tax-agent",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["tax-return-guide", "tax-return-howto", "tax-return-deductions", "tax-return-overseas-income", "tax-return-multiple-jobs"],
    updatedAt: "2026-07-18",
    published: true,
  },
];
