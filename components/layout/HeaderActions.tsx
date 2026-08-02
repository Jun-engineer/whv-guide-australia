"use client";

import { useState } from "react";
import Link from "next/link";
import { HeaderAuth } from "@/components/layout/HeaderAuth";
import { MobileNav } from "@/components/layout/MobileNav";
import type { NavGroup } from "@/lib/navigation";

type HeaderActionsProps = {
  groups: NavGroup[];
};

type Overlay = "account" | "mobile" | null;

/**
 * ヘッダー右側の操作群（検索・アカウントメニュー・モバイルナビ）をまとめ、
 * 一度に開けるオーバーレイを 1 つに制限する。
 * アカウントメニューを開けばモバイルナビは閉じ、その逆も成り立つ。
 */
export function HeaderActions({ groups }: HeaderActionsProps) {
  const [overlay, setOverlay] = useState<Overlay>(null);

  return (
    <div className="flex items-center gap-2 text-sm">
      <Link
        href="/search"
        aria-label="記事を検索"
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:bg-slate-50 hover:text-sky-700"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
          <path d="M20 20l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </Link>
      <HeaderAuth
        isOpen={overlay === "account"}
        onOpenChange={(open) => setOverlay(open ? "account" : null)}
      />
      <MobileNav
        groups={groups}
        isOpen={overlay === "mobile"}
        onOpenChange={(open) => setOverlay(open ? "mobile" : null)}
      />
    </div>
  );
}
