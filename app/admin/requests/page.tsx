"use client";

import { Container } from "@/components/layout/Container";
import { AdminGate } from "@/components/admin/AdminGate";
import { RequestsManager } from "@/components/admin/RequestsManager";

export default function AdminRequestsPage() {
  return (
    <AdminGate>
      <Container className="space-y-6 py-10">
        <h1 className="text-3xl font-extrabold">リクエスト管理</h1>
        <RequestsManager />
      </Container>
    </AdminGate>
  );
}
