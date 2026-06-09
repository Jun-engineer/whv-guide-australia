import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { AdminGuard } from "@/components/admin/AdminGuard";
import { ReportTable } from "@/components/admin/ReportTable";
import { getViewerProfile } from "@/lib/auth";
import { getReports, isModerator } from "@/lib/moderation";

export const metadata: Metadata = {
  title: "通報管理",
  robots: { index: false, follow: false },
};

export default async function AdminReportsPage() {
  const viewer = await getViewerProfile();

  if (!isModerator(viewer)) {
    return <AdminGuard message="このページは管理者・モデレーターのみアクセスできます。" />;
  }

  return (
    <Container className="space-y-6 py-10">
      <h1 className="text-3xl font-extrabold">通報管理</h1>
      <ReportTable reports={getReports()} />
    </Container>
  );
}
