"use client";

import { Container } from "@/components/layout/Container";
import { AdminGate } from "@/components/admin/AdminGate";
import { ReportsManager } from "@/components/admin/ReportsManager";

export default function AdminReportsPage() {
  return (
    <AdminGate>
      <Container className="space-y-6 py-10">
        <h1 className="text-3xl font-extrabold">通報管理</h1>
        <ReportsManager />
      </Container>
    </AdminGate>
  );
}
