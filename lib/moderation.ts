import { reports } from "@/lib/mockData";
import type { Profile } from "@/types/user";

export function getReports() {
  return reports;
}

export function getPendingReportCount() {
  return reports.filter((report) => report.status === "pending").length;
}

export function isModerator(profile: Profile): boolean {
  return profile.role === "moderator" || profile.role === "admin";
}

export function isAdmin(profile: Profile): boolean {
  return profile.role === "admin";
}
