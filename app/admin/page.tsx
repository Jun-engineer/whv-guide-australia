import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { AdminGuard } from "@/components/admin/AdminGuard";
import { getViewerProfile } from "@/lib/auth";
import { isModerator, getPendingReportCount } from "@/lib/moderation";
import { getPendingFeedbackCount } from "@/lib/feedback";

export const metadata: Metadata = {
  title: "管理ダッシュボード",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  const viewer = await getViewerProfile();

  if (!isModerator(viewer)) {
    return <AdminGuard message="このページは管理者・モデレーターのみアクセスできます。" />;
  }

  const pendingReports = getPendingReportCount();
  const pendingFeedback = getPendingFeedbackCount();

  return (
    <Container className="space-y-8 py-10">
      <h1 className="text-3xl font-extrabold">管理ダッシュボード</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        <Link href="/admin/reports" className="rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-sm text-slate-500">未対応の通報</p>
          <p className="mt-2 text-3xl font-bold text-rose-700">{pendingReports}</p>
        </Link>
        <Link href="/admin/requests" className="rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-sm text-slate-500">未対応のリクエスト</p>
          <p className="mt-2 text-3xl font-bold text-sky-700">{pendingFeedback}</p>
        </Link>
      </div>
    </Container>
  );
}
