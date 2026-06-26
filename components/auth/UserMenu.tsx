"use client";

import Link from "next/link";
import { useAuth } from "@/components/auth/AuthProvider";

const roleLabel: Record<string, string> = {
  guest: "ゲスト",
  user: "一般ユーザー",
  moderator: "モデレーター",
  admin: "管理者",
};

const statusLabel: Record<string, string> = {
  active: "利用可能",
  suspended: "一時停止中",
  banned: "利用停止（BAN）",
};

export function UserMenu() {
  const { isLoggedIn, profile, loading, session, signOut } = useAuth();

  if (loading) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-500">
        読み込み中…
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <p className="text-sm text-slate-600">現在ログインしていません。</p>
        <div className="mt-4 flex gap-2 text-sm">
          <Link
            href="/login"
            className="rounded-full border border-slate-300 px-3 py-1 transition hover:bg-slate-50"
          >
            ログイン
          </Link>
          <Link
            href="/register"
            className="rounded-full bg-sky-700 px-3 py-1 text-white transition hover:bg-sky-800"
          >
            新規登録
          </Link>
        </div>
      </div>
    );
  }

  const email = session?.user?.email;
  const phoneVerified = Boolean(session?.user?.phone);
  const isStaff = profile.role === "moderator" || profile.role === "admin";
  const showStatus = profile.status !== "active";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <p className="text-sm text-slate-500">ログイン中</p>
      <p className="mt-1 text-lg font-semibold text-slate-900">{profile.displayName}</p>
      {email ? <p className="mt-1 text-sm text-slate-600">{email}</p> : null}
      <dl className="mt-3 grid grid-cols-2 gap-2 text-sm">
        <div>
          <dt className="text-slate-500">電話番号認証</dt>
          <dd className="font-medium text-slate-800">{phoneVerified ? "認証済み" : "未認証"}</dd>
        </div>
        {isStaff ? (
          <div>
            <dt className="text-slate-500">権限</dt>
            <dd className="font-medium text-slate-800">
              {roleLabel[profile.role] ?? profile.role}
            </dd>
          </div>
        ) : null}
        {showStatus ? (
          <div>
            <dt className="text-slate-500">利用ステータス</dt>
            <dd className="font-medium text-rose-700">
              {statusLabel[profile.status] ?? profile.status}
            </dd>
          </div>
        ) : null}
      </dl>
      <div className="mt-4 flex gap-2 text-sm">
        <button
          type="button"
          onClick={() => signOut()}
          className="rounded-full border border-slate-300 px-3 py-1 text-slate-600 transition hover:bg-slate-50"
        >
          ログアウト
        </button>
      </div>
    </div>
  );
}
