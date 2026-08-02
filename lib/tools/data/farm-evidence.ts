import type { ChecklistGroup } from "@/lib/tools/types";

/**
 * セカンドビザ（指定業務）の証拠書類トラッカーのデータ。
 *
 * 指定業務を行ったことを裏づける書類の「保有状況」を種類別に記録するための一覧です。
 * どの書類が必要か・何が有効かは移民局（Department of Home Affairs）が判断します。
 * このツールは記録の補助であり、ビザの可否やビザ申請の正式な証拠を保証するものではありません。
 *
 * ChecklistGroup を流用し、各項目の「保有している」をチェックで記録します。
 */
export const FARM_EVIDENCE_GROUPS: ChecklistGroup[] = [
  {
    id: "pay",
    title: "給与・支払いの証拠",
    items: [
      { id: "payslips", label: "給与明細（Payslip・全期間分）", note: "雇用主名・期間・時給/出来高・控除が分かるもの。" },
      { id: "bank-deposits", label: "銀行口座への給与入金記録（明細）" },
      { id: "income-statement", label: "Income statement / PAYG（myGov・ATO）" },
      { id: "piece-rate", label: "出来高（piecework）の場合の単価・数量の記録" },
    ],
  },
  {
    id: "employment",
    title: "雇用・業務内容の証拠",
    items: [
      { id: "contract", label: "雇用契約書・雇用条件の書面" },
      { id: "employer-details", label: "雇用主の名称・ABN・所在地（郵便番号）の記録" },
      { id: "roster-timesheet", label: "シフト表・タイムシート（勤務日が分かるもの）" },
      { id: "reference-letter", label: "雇用主の証明レター（業務内容・期間の記載）" },
    ],
  },
  {
    id: "supporting",
    title: "補足の証拠",
    items: [
      { id: "photos", label: "作業中の写真（日付・場所が分かると良い）" },
      { id: "accommodation", label: "滞在先の記録（レシート・契約など）" },
      { id: "diary", label: "作業日・場所・内容のメモ（日誌）" },
      { id: "super-record", label: "スーパーアニュエーションの入金記録" },
    ],
  },
];
