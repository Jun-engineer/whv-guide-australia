import type { ChecklistGroup } from "@/lib/tools/types";

/**
 * 帰国前チェックリスト。退職・退去・車・税金・スーパーなどを時系列（目安の時期）で整理します。
 *
 * 各グループの見出しに「いつ頃やるか」の目安を記載しています。実際の期限は契約や制度・
 * 個人の状況で異なるため、必ず各公式・契約内容でご確認ください（このツールは自動通知は行いません）。
 */
export const RETURN_HOME_CHECKLIST_GROUPS: ChecklistGroup[] = [
  {
    id: "two-three-months",
    title: "2〜3ヶ月前",
    items: [
      { id: "flight-booking", label: "帰国便の予約・日程の確定" },
      { id: "notice-lease", label: "賃貸の解約予告（契約の通知期間を確認）", note: "多くの契約で数週間前の通知が必要。" },
      { id: "notice-job", label: "勤務先へ退職の申し出（通知期間を確認）" },
      { id: "sell-car-plan", label: "車の売却計画（名義変更・rego の扱いを確認）" },
      { id: "tax-plan", label: "タックスリターン／早期申告の要否を確認" },
    ],
  },
  {
    id: "one-month",
    title: "1ヶ月前",
    items: [
      { id: "super-dasp", label: "スーパー（DASP）の申請方法・タイミングを確認", note: "多くは出国後に申請。" },
      { id: "bond-refund", label: "ボンド（敷金）返還の手続き・退去点検の予約" },
      { id: "cancel-subscriptions", label: "サブスク・ジム・保険などの解約予約" },
      { id: "ship-luggage", label: "荷物の郵送・不用品の処分の計画" },
      { id: "final-pay", label: "最終給与・未払い賃金・有給精算の確認" },
    ],
  },
  {
    id: "final-week",
    title: "最終週",
    items: [
      { id: "move-out", label: "退去・鍵の返却・退去点検の立ち会い" },
      { id: "final-utilities", label: "電気・ガス・ネット等の停止・精算" },
      { id: "phone-plan", label: "携帯プランの解約 or 一時停止" },
      { id: "keep-documents", label: "Payslip・Income statement・契約書など書類の保存" },
      { id: "bank-keep-close", label: "銀行口座を残すか解約するか決める", note: "Super やタックスリターンの入金先が必要な場合は残す選択も。" },
    ],
  },
  {
    id: "after-home",
    title: "帰国後",
    items: [
      { id: "tax-return-file", label: "タックスリターンの申告（必要な場合）" },
      { id: "apply-dasp", label: "DASP（スーパーの払い戻し）の申請" },
      { id: "keep-records", label: "セカンドビザ用の証拠書類を保管し続ける（該当者）" },
    ],
  },
];
