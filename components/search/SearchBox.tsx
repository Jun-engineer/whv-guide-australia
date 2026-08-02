"use client";

import { useRouter } from "next/navigation";
import { useId, useState } from "react";

type SearchBoxProps = {
  /** 初期値（任意）。 */
  defaultValue?: string;
  /** 見た目のサイズ。home は大きめ、compact はヘッダー用。 */
  variant?: "home" | "compact";
  placeholder?: string;
  /** 送信時のコールバック（指定時は /search への遷移を行わない）。 */
  onSubmitQuery?: (query: string) => void;
  autoFocus?: boolean;
};

/**
 * 記事検索の入力フォーム。送信すると /search?q=... に遷移する。
 * トップページ・ヘッダーなど複数箇所で使い回す。
 */
export function SearchBox({
  defaultValue = "",
  variant = "home",
  placeholder = "記事を検索（例: TFN、ボンド、セカンドビザ）",
  onSubmitQuery,
  autoFocus = false,
}: SearchBoxProps) {
  const router = useRouter();
  const [value, setValue] = useState(defaultValue);
  const inputId = useId();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const q = value.trim();
    if (onSubmitQuery) {
      onSubmitQuery(q);
      return;
    }
    router.push(q ? `/search?q=${encodeURIComponent(q)}` : "/search");
  }

  const isHome = variant === "home";

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className={
        isHome
          ? "flex w-full items-stretch gap-2 rounded-2xl bg-white p-2 shadow-lg ring-1 ring-slate-200"
          : "flex items-stretch gap-1.5"
      }
    >
      <label htmlFor={inputId} className="sr-only">
        記事を検索
      </label>
      <div className="relative flex-1">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <path d="M20 20l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
        <input
          id={inputId}
          type="search"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder={placeholder}
          autoFocus={autoFocus}
          enterKeyHint="search"
          className={
            isHome
              ? "w-full rounded-xl border border-transparent bg-slate-50 py-3 pl-10 pr-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-sky-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-200"
              : "w-full rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-200"
          }
        />
      </div>
      <button
        type="submit"
        className={
          isHome
            ? "shrink-0 rounded-xl bg-sky-600 px-5 py-3 text-base font-bold text-white transition hover:bg-sky-700"
            : "shrink-0 rounded-lg bg-sky-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-sky-700"
        }
      >
        検索
      </button>
    </form>
  );
}
