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
];
