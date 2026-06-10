export type ReportTargetType = "post" | "comment" | "user";
export type ReportStatus = "pending" | "in_progress" | "resolved" | "rejected";

export const REPORT_REASONS = [
  "スパム・宣伝",
  "詐欺・詐惑の恐れ",
  "誛謗中傷・ハラスメント",
  "不適切・公序良俗違反",
  "個人情報の掲載",
  "その他",
] as const;

export type ReportReason = (typeof REPORT_REASONS)[number];

export type Report = {
  id: string;
  reporterName: string;
  targetType: ReportTargetType;
  targetId: string;
  reason: string;
  status: ReportStatus;
  createdAt: string;
};
