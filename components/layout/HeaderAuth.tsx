"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/components/auth/AuthProvider";
import { isModerator } from "@/lib/moderation";

type HeaderAuthProps = {
  /** アカウントメニューが開いているか（ヘッダーのオーバーレイ調停用）。 */
  isOpen: boolean;
  /** 開閉状態の変更を親へ通知する。 */
  onOpenChange: (open: boolean) => void;
};

export function HeaderAuth({ isOpen, onOpenChange }: HeaderAuthProps) {
  const { isLoggedIn, profile, loading, session, signOut } = useAuth();
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const [loggingOut, setLoggingOut] = useState(false);

  // 外側のクリック／タップで閉じる。
  useEffect(() => {
    if (!isOpen) return;
    function onPointerDown(event: PointerEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        onOpenChange(false);
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [isOpen, onOpenChange]);

  // Escape で閉じてトリガーへフォーカスを戻す。
  useEffect(() => {
    if (!isOpen) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onOpenChange(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onOpenChange]);

  // 開いたら最初のメニュー項目へフォーカスを移す。
  useEffect(() => {
    if (!isOpen) return;
    const first = panelRef.current?.querySelector<HTMLElement>("[data-menu-item]");
    first?.focus();
  }, [isOpen]);

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
        {/* 狭いモバイルでは主要導線（ログイン）を優先し、二次導線ははみ出し防止のため広い画面でのみ表示 */}
        <Link
          href="/register"
          className="hidden rounded-full bg-sky-600 px-3 py-1 text-white transition hover:bg-sky-700 min-[380px]:inline-block"
        >
          新規登録
        </Link>
      </div>
    );
  }

  const email = session?.user?.email;
  const displayName = profile.displayName || "ユーザー";
  const initial = displayName.trim().charAt(0).toUpperCase() || "U";
  const showAdmin = isModerator(profile);

  async function handleSignOut() {
    if (loggingOut) return;
    setLoggingOut(true);
    onOpenChange(false);
    try {
      await signOut();
    } finally {
      setLoggingOut(false);
    }
  }

  function handleSelect() {
    onOpenChange(false);
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => onOpenChange(!isOpen)}
        aria-label="アカウントメニューを開く"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={menuId}
        className="flex h-10 items-center gap-1.5 rounded-full border border-slate-200 pl-1 pr-2 text-sm text-slate-700 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-1"
      >
        <span
          aria-hidden="true"
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-600 bg-cover bg-center text-xs font-semibold text-white"
          style={profile.avatarUrl ? { backgroundImage: `url(${profile.avatarUrl})` } : undefined}
        >
          {profile.avatarUrl ? "" : initial}
        </span>
        <span className="hidden max-w-[8rem] truncate font-medium sm:inline">{displayName}</span>
        <svg
          viewBox="0 0 20 20"
          className={`h-4 w-4 shrink-0 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M6 8l4 4 4-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen ? (
        <div
          ref={panelRef}
          id={menuId}
          role="menu"
          aria-label="アカウントメニュー"
          className="absolute right-0 top-full z-50 mt-2 w-64 max-w-[calc(100vw-1.5rem)] rounded-xl border border-slate-200 bg-white p-2 text-sm shadow-lg"
        >
          <div className="px-3 py-2">
            <p className="truncate font-semibold text-slate-900">{displayName}</p>
            {email ? <p className="truncate text-xs text-slate-500">{email}</p> : null}
          </div>
          <div className="my-1 border-t border-slate-100" aria-hidden="true" />
          <Link
            href="/profile"
            role="menuitem"
            data-menu-item
            onClick={handleSelect}
            className="block rounded-lg px-3 py-2 text-slate-700 transition hover:bg-sky-50 hover:text-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          >
            アカウント設定
          </Link>
          {showAdmin ? (
            <Link
              href="/admin"
              role="menuitem"
              data-menu-item
              onClick={handleSelect}
              className="block rounded-lg px-3 py-2 text-amber-700 transition hover:bg-amber-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            >
              管理
            </Link>
          ) : null}
          <button
            type="button"
            role="menuitem"
            data-menu-item
            onClick={handleSignOut}
            disabled={loggingOut}
            className="block w-full rounded-lg px-3 py-2 text-left text-slate-700 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 disabled:cursor-not-allowed disabled:text-slate-400"
          >
            {loggingOut ? "ログアウト中…" : "ログアウト"}
          </button>
        </div>
      ) : null}
    </div>
  );
}
