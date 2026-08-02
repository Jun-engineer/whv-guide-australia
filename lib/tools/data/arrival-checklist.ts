import type { ChecklistGroup } from "@/lib/tools/types";

/**
 * 到着後チェックリストの項目データ。
 *
 * これは「よくある到着後の初期セットアップ」を時系列で整理した作業リストです。
 * 完了状態はブラウザのローカルストレージに保存され、サーバーには送信されません。
 * 手続きの要否・順序は人により異なるため、必要な項目だけを利用してください。
 */
export const ARRIVAL_CHECKLIST_GROUPS: ChecklistGroup[] = [
  {
    id: "day-1",
    title: "到着当日〜数日以内",
    items: [
      { id: "sim", label: "SIM / eSIM を有効化して通信を確保する" },
      { id: "cash", label: "当面の現金（AUD）を用意・確認する" },
      { id: "transport-card", label: "都市の交通ICカード（Opal / myki / go card など）を用意する" },
      { id: "accommodation", label: "最初の宿泊先の場所・チェックイン方法を確認する" },
      {
        id: "emergency",
        label: "緊急連絡先（000・保険会社・在外公館）をスマホに保存する",
        note: "警察・消防・救急はすべて 000。",
      },
    ],
  },
  {
    id: "first-week",
    title: "最初の1週間",
    items: [
      { id: "bank", label: "銀行口座を開設する", note: "住所が未確定でも開設できる銀行が多い。" },
      { id: "tfn", label: "TFN（税務番号）を申請する", note: "申請は無料。就労前後に取得。" },
      {
        id: "medicare-insurance",
        label: "保険（OSHC / OVHC など）や Medicare の対象を確認する",
        note: "対象・還付は加入内容や国籍で異なる。",
      },
      { id: "address", label: "住む家（シェアハウス等）を探し、住所を確定する" },
      { id: "mygov", label: "myGov アカウントを作成し、ATO などと連携する" },
    ],
  },
  {
    id: "settling-in",
    title: "落ち着いてから",
    items: [
      { id: "super", label: "就労先が決まったら Super（年金）口座を確認・選択する" },
      { id: "job", label: "レジュメを準備し、仕事探しを始める" },
      { id: "super-choice", label: "給与の受取口座・Super 情報を勤務先に提出する" },
      { id: "licence", label: "運転する場合、免許の翻訳・切替の要否を州で確認する" },
      { id: "local-info", label: "住むエリアの交通・買い物・病院・図書館などを把握する" },
    ],
  },
];
