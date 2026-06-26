"use client";

import { useAuth } from "@/components/auth/AuthProvider";
import { Container } from "@/components/layout/Container";
import { isModerator } from "@/lib/moderation";

export function AdminGate({ children }: { children: React.ReactNode }) {
  const { loading, isLoggedIn, profile } = useAuth();

  if (loading) {
    return (
      <Container className="py-16">
        <p className="text-center text-sm text-slate-500">読み込み中…</p>
      </Container>
    );
  }

  if (!isLoggedIn || !isModerator(profile)) {
    return (
      <Container className="py-16">
        <div className="mx-auto max-w-md rounded-2xl border border-amber-200 bg-amber-50 p-6 text-center">
          <h1 className="text-xl font-bold text-amber-900">アクセス制限</h1>
          <p className="mt-2 text-sm text-amber-800">
            このページは管理者・モデレーターのみアクセスできます。
          </p>
        </div>
      </Container>
    );
  }

  return <>{children}</>;
}
