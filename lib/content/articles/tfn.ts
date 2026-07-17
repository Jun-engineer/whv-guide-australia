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
];
