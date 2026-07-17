import type { Article } from "./types";

export const tfnArticles: Article[] = [
  {
    id: "a4",
    title: "TFN（タックスファイルナンバー）取得ガイド",
    slug: "tfn-guide",
    category: "tfn",
    description: "給与受け取りに必須のTFNをATO公式サイトから無料でオンライン申請する方法を解説します。",
    content: [
      "TFN（Tax File Number）は納税者番号で、就労して給与を受け取るために必須です。ATO（オーストラリア国税局）の公式サイトから無料で申請できます。",
      "申請から発行まで通常2〜4週間。郵送で登録住所に届きます。番号は一生変わらないため、安全に保管してください。",
      "TFNを持たずに働き始めると、雇用主は法律上最も高い税率で源泉徴収を行うため、手取りが大きく減ってしまいます。就労開始から28日以内にTFNを雇用主へ提出すれば通常の税率が適用されるため、到着後は早めに申請しておくのが得策です。申請自体はオンラインで10〜15分ほどで完了します。",
      "申請時に入力する住所は、TFNの通知書が郵送される先になります。短期滞在のホステルなどではなく、数週間以上滞在できるシェアハウスなど安定した住所を登録しましょう。もし通知書が届く前に住所が変わった場合でも、番号自体はATOのオンラインサービス（myGov連携）で確認できるため、番号を書き留めておけば通知書の紛失をそれほど心配する必要はありません。",
      "注意したいのは、TFNの申請は必ずATOの公式サイトから無料で行える点です。「TFN取得代行」をうたって手数料を請求する非公式サイトも存在しますが、利用する必要はまったくありません。公式ドメイン（ato.gov.au）であることを確認してから申請してください。",
    ],
    keyFacts: [
      { label: "費用", value: "無料（公式サイトのみ。代行に費用を払う必要なし）" },
      { label: "申請先", value: "ATO公式サイト（オンライン）" },
      { label: "発行期間", value: "約2〜4週間（郵送）" },
      { label: "必要条件", value: "オーストラリア国内に滞在し、有効なビザを保持していること" },
    ],
    steps: [
      { title: "ATOのTFN申請ページへ", description: "ワーホリ等の一時滞在者向けオンライン申請フォームを開きます。" },
      { title: "パスポート・ビザ情報を入力", description: "氏名、生年月日、パスポート番号、入国情報を入力します。" },
      { title: "郵送先住所を入力", description: "TFN通知を受け取れる住所（ホステル可）を登録します。" },
      { title: "申請を送信して待つ", description: "受付番号を控え、郵送での到着を待ちます。" },
    ],
    tips: [
      "TFNは雇用主・銀行・myGovで使います。届いたら写真に撮ってクラウドに保管を。",
      "TFNを他人に教えるのは雇用主・銀行・ATOなど正規の相手だけ。SNSや見知らぬ相手には絶対に伝えないこと。",
    ],
    faqs: [
      {
        question: "TFNとABNの違いは？",
        answer:
          "TFNは「雇われて働く（従業員）」ための番号、ABNは「個人事業主として働く（Uber Eats等）」ための番号です。ジャパレスやカフェで雇用される場合はTFN、ギグワークをする場合はABNが必要です。",
      },
    ],
    sources: [
      { label: "ATO - Apply for a TFN", url: "https://www.ato.gov.au/individuals-and-families/tax-file-number/apply-for-a-tfn" },
    ],
    relatedSlugs: ["abn-guide", "tax-return-guide", "bank-account-guide", "whm-tax-rates"],
    updatedAt: "2026-06-10",
    published: true,
  },

  {
    id: "a118",
    title: "TFN Declarationの書き方｜入社時に迷いやすい項目",
    slug: "tfn-declaration-form",
    category: "tfn",
    hub: "tax",
    priority: "P0",
    searchIntent: "TFN Declarationの記入方法",
    description:
      "入社時に提出するTFN Declaration（納税者番号申告）の記入方法を解説。オンライン提出と紙（NAT 3092）の違い、居住区分・Tax-free threshold・学資ローンなどワーホリが迷いやすい項目を整理します。",
    content: [
      "TFN Declaration（Tax file number declaration）は、雇用主があなたの給与からいくら源泉徴収（Tax）するかを決めるための申告書です。入社時に必ず提出し、これを出さないと雇用主は最も高い税率で天引きするため、手取りが大きく減ります。結論として、TFNを記入して正しい居住区分を選び、雇用主に提出することが最初のポイントです。",
      "提出方法は主に3つあります。①雇用主が使う給与システム（オンボーディング画面）で入力する、②ATOオンラインサービス（myGov経由）の「New employment」から入力して雇用主と共有する、③紙の様式（NAT 3092、ATOに注文）に記入して渡す。多くの職場は①か②で、紙をその場で書くケースは減っています。どの方法でも記入する内容（質問項目）は同じです。",
      "ワーホリ（サブクラス417・462）で特に重要なのは、雇用主が『Working Holiday Maker（WHM）employer』としてATOに登録しているかどうかです。登録済みの雇用主は、あなたの給与を年間45,000 AUDまで15%のWHM税率で源泉徴収します。未登録の雇用主は外国居住者向けの高い率で天引きするため、入社時に『ワーホリビザで働く』ことを明確に伝えましょう。",
      "迷いやすい項目を整理します。【TFN】必ず記入。未取得なら先にTFNを申請してください。【居住区分（residency for tax purposes）】税務上の居住者か非居住者かを問う項目で、ビザの種類とは別概念です。判断に迷う場合は自己判定し、必要ならATOのツールで確認します。【Tax-free threshold（免税枠）を申請するか】通常は『メインの勤務先1か所だけ』で申請します。複数の職場を掛け持ちする場合、2つ目以降では申請しないのが一般的です（申告漏れ・追徴を避けるため）。ただしWHMは最初の1ドルから15%課税のため、免税枠の扱いは通常の従業員と異なります。【HELP/学資ローン】オーストラリアの学生ローンがない人（ワーホリの大半）は『No』です。",
      "記入内容は後からタックスリターンで精算されるため、源泉徴収が多すぎた場合は還付されます。とはいえ、居住区分や免税枠の選択を誤ると毎回の手取りや年度末の追徴に影響するので、分からない項目は雇用主の経理担当かATO（電話13 28 61）に確認してから提出しましょう。",
    ],
    keyFacts: [
      { label: "目的", value: "雇用主が源泉徴収額を決めるための申告" },
      { label: "提出方法", value: "給与システム／ATOオンライン（myGov）／紙 NAT 3092" },
      { label: "提出しないと", value: "最高税率で源泉徴収され手取りが激減" },
      { label: "WHMの注意", value: "雇用主がWHM employer登録済みか確認（15%適用の条件）" },
    ],
    steps: [
      { title: "TFNを用意", description: "未取得ならTFNを先に申請します。" },
      { title: "提出方法を確認", description: "職場の給与システム・ATOオンライン・紙のどれかを雇用主に確認します。" },
      { title: "居住区分と免税枠を選択", description: "税務上の居住区分と、免税枠を申請するか（掛け持ち時は主たる1か所のみ）を選びます。" },
      { title: "雇用主へ提出", description: "内容を確認し、期限内（就労開始からできるだけ早く）に提出します。" },
    ],
    tips: [
      "掛け持ちで2か所以上から給与を受ける場合、免税枠の重複申請は年度末の追徴の原因になります。主たる勤務先1か所のみで申請しましょう。",
      "『ワーホリビザで働く』ことを入社時に伝え、雇用主がWHM employer登録済みか確認すると、15%の適正な源泉徴収になります。",
    ],
    faqs: [
      {
        question: "TFN DeclarationとTFNの申請は別ですか？",
        answer:
          "別です。TFNの申請は納税者番号そのものを取得する手続き（ATOで無料）。TFN Declarationは、取得したTFNを雇用主に伝え、源泉徴収の条件を申告する入社時の書類です。先にTFNを取得してからDeclarationを提出します。",
      },
      {
        question: "免税枠（Tax-free threshold）は申請すべきですか？",
        answer:
          "勤務先が1か所なら通常申請します。複数を掛け持ちする場合は、主たる1か所のみで申請し、他では申請しないのが基本です。ワーホリは最初の1ドルから15%課税されるため扱いが特殊で、迷う場合は雇用主の経理かATOに確認してください。",
      },
    ],
    sources: [
      { label: "ATO - Tax file number declaration", url: "https://www.ato.gov.au/forms-and-instructions/tfn-declaration" },
    ],
    verifiedAt: "2026-07-18",
    officialSources: [
      {
        label: "ATO｜Tax file number declaration（記入と提出方法）",
        url: "https://www.ato.gov.au/forms-and-instructions/tfn-declaration",
        accessedAt: "2026-07-18",
      },
      {
        label: "ATO｜Tax rates – working holiday maker（WHM税率）",
        url: "https://www.ato.gov.au/tax-rates-and-codes/tax-rates-working-holiday-makers",
        accessedAt: "2026-07-18",
      },
    ],
    relatedSlugs: ["tfn-guide", "whm-tax-rates", "payslip-guide", "tax-return-guide", "tax-return-multiple-jobs"],
    updatedAt: "2026-07-18",
    published: true,
  },
];
