import { feedbackRequests } from "@/lib/mockData";

export function getFeedbackRequests() {
  return feedbackRequests;
}

export function getPendingFeedbackCount() {
  return feedbackRequests.filter((item) => item.status === "pending").length;
}
