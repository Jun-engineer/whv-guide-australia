"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { AdminGate } from "@/components/admin/AdminGate";
import { hasSupabaseEnv, supabase } from "@/lib/supabaseClient";

function usePendingCount(table: string) {
  const hasDb = hasSupabaseEnv && Boolean(supabase);
  const [count, setCount] = useState<number | null>(hasDb ? null : 0);
  useEffect(() => {
    if (!hasDb || !supabase) return;
    supabase
      .from(table)
      .select("id", { count: "exact", head: true })
      .eq("status", "pending")
      .then(({ count: c }) => setCount(c ?? 0));
  }, [table, hasDb]);
  return count;
}

function Dashboard() {
  const reportCount = usePendingCount("reports");
  const feedbackCount = usePendingCount("feedback_requests");

  return (
    <Container className="space-y-8 py-10">
      <h1 className="text-3xl font-extrabold">管理ダッシュボード</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        <Link href="/admin/reports" className="rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-sm text-slate-500">未対応の通報</p>
          <p className="mt-2 text-3xl font-bold text-rose-700">{reportCount ?? "—"}</p>
        </Link>
        <Link href="/admin/requests" className="rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-sm text-slate-500">未対応のリクエスト</p>
          <p className="mt-2 text-3xl font-bold text-sky-700">{feedbackCount ?? "—"}</p>
        </Link>
      </div>
    </Container>
  );
}

export default function AdminPage() {
  return (
    <AdminGate>
      <Dashboard />
    </AdminGate>
  );
}
