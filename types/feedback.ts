export type FeedbackType =
  | "correction"
  | "article_request"
  | "experience"
  | "question"
  | "other";

export type FeedbackStatus = "pending" | "in_progress" | "resolved" | "rejected";

export type FeedbackRequest = {
  id: string;
  userId: string;
  authorName: string;
  type: FeedbackType;
  pageUrl?: string;
  title: string;
  body: string;
  status: FeedbackStatus;
  adminNote?: string;
  createdAt: string;
};
