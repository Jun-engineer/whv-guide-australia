import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { AdminGuard } from "@/components/admin/AdminGuard";
import { FeedbackTable } from "@/components/admin/FeedbackTable";
import { getViewerProfile } from "@/lib/auth";
import { isModerator } from "@/lib/moderation";
import { getFeedbackRequests } from "@/lib/feedback";

export const metadata: Metadata = {
  title: "リクエスト管理",
  robots: { index: false, follow: false },
};

export default async function AdminRequestsPage() {
  const viewer = await getViewerProfile();

  if (!isModerator(viewer)) {
    return <AdminGuard message="このページは管理者・モデレーターのみアクセスできます。" />;
  }

  return (
    <Container className="space-y-6 py-10">
      <h1 className="text-3xl font-extrabold">リクエスト管理</h1>
      <FeedbackTable requests={getFeedbackRequests()} />
    </Container>
  );
}
