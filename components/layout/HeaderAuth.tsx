"use client";

import Link from "next/link";
import { useAuth } from "@/components/auth/AuthProvider";
import { isModerator } from "@/lib/moderation";

export function HeaderAuth() {
  const { isLoggedIn, profile, loading, signOut } = useAuth();

  if (loading) {
    return <span className="text-xs text-slate-400">読み込み中…</span>;
  }

  if (!isLoggedIn) {
    return (
      <div className="flex items-center gap-2 text-sm">
        <Link
          href="/login"
          className="rounded-full border border-sky-200 px-3 py-1 text-sky-700 transition hover:bg-sky-50"
        >
          ログイン
        </Link>
        <Link
          href="/register"
          className="rounded-full bg-sky-600 px-3 py-1 text-white transition hover:bg-sky-700"
        >
          新規登録
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 text-sm">
      {isModerator(profile) ? (
        <Link
          href="/admin"
          className="hidden rounded-full border border-amber-300 px-3 py-1 text-amber-700 transition hover:bg-amber-50 sm:inline-block"
        >
          管理
        </Link>
      ) : null}
      <Link
        href="/profile"
        className="rounded-full bg-sky-600 px-3 py-1 text-white transition hover:bg-sky-700"
      >
        {profile.displayName}
      </Link>
      <button
        type="button"
        onClick={() => signOut()}
        className="rounded-full border border-slate-300 px-3 py-1 text-slate-600 transition hover:bg-slate-50"
      >
        ログアウト
      </button>
    </div>
  );
}
