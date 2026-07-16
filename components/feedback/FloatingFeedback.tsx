"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * サイト右下に固定表示するフィードバックボタン。
 * クリックすると「情報の追加リクエスト」「間違いの報告」の導線が開き、
 * 現在のページURLを引き継いでリクエストフォームへ遷移します。
 */
export function FloatingFeedback() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const currentUrl = pathname ?? "";

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-3 print:hidden">
      {open ? (
        <div
          role="dialog"
          aria-label="フィードバック"
          className="w-64 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl"
        >
          <p className="text-sm font-bold text-slate-900">フィードバック</p>
          <p className="mt-1 text-xs text-slate-500">
            サイトをより良くするためにご協力ください。
          </p>
          <div className="mt-3 space-y-2">
            <Link
              href={{ pathname: "/request", query: { type: "article_request", url: currentUrl } }}
              onClick={() => setOpen(false)}
              className="block rounded-xl border border-sky-200 bg-sky-50 px-3 py-2 text-sm font-semibold text-sky-800 transition hover:border-sky-300 hover:bg-sky-100"
            >
              💡 この情報も追加してほしい！
            </Link>
            <Link
              href={{ pathname: "/request", query: { type: "correction", url: currentUrl } }}
              onClick={() => setOpen(false)}
              className="block rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-800 transition hover:border-amber-300 hover:bg-amber-100"
            >
              ⚠️ 間違いを見つけた！
            </Link>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? "フィードバックを閉じる" : "フィードバックを送る"}
        className="flex items-center gap-2 rounded-full bg-sky-700 px-4 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-sky-800"
      >
        {open ? (
          <span aria-hidden="true">✕ 閉じる</span>
        ) : (
          <>
            <span aria-hidden="true" className="text-base">
              💬
            </span>
            <span>フィードバック</span>
          </>
        )}
      </button>
    </div>
  );
}
