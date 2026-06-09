export type ReportTargetType = "post" | "comment";
export type ReportStatus = "pending" | "in_progress" | "resolved" | "rejected";

export type Report = {
  id: string;
  reporterName: string;
  targetType: ReportTargetType;
  targetId: string;
  reason: string;
  status: ReportStatus;
  createdAt: string;
};
