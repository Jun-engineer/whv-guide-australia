import Link from "next/link";
import type { Profile } from "@/types/user";

type UserMenuProps = {
  viewer: Profile;
};

export function UserMenu({ viewer }: UserMenuProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <p className="text-sm text-slate-500">ログイン状態</p>
      <p className="mt-1 text-lg font-semibold text-slate-900">{viewer.displayName}</p>
      <p className="mt-1 text-sm text-slate-600">
        role: {viewer.role} / status: {viewer.status}
      </p>
      <div className="mt-4 flex gap-2 text-sm">
        <Link href="/login" className="rounded-full border border-slate-300 px-3 py-1">
          ログイン
        </Link>
        <Link href="/register" className="rounded-full bg-sky-700 px-3 py-1 text-white">
          新規登録
        </Link>
      </div>
    </div>
  );
}
