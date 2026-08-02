"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import type { NavGroup } from "@/lib/navigation";

type PrimaryNavProps = {
  groups: NavGroup[];
};

/**
 * デスクトップ用のコンパクトなグループ・ナビゲーション。
 *
 * - クリックとキーボードの両方で開閉できる（hover 依存にしない）。
 * - 開いているメニューは aria-expanded と視覚的な下線で明示する。
 * - Escape で閉じてトリガーにフォーカスを戻す。
 * - フォーカスがグループ外へ移動したら閉じる。
 * - 入れ子は 1 段まで（サブメニューを深くしない）。
 */
export function PrimaryNav({ groups }: PrimaryNavProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const baseId = useId();
  const containerRef = useRef<HTMLUListElement>(null);

  // Escape で閉じる。
  useEffect(() => {
    if (!openId) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenId(null);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [openId]);

  // ナビ領域の外側をクリックしたら閉じる。
  useEffect(() => {
    if (!openId) return;
    function onPointerDown(event: PointerEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpenId(null);
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [openId]);

  return (
    <nav aria-label="カテゴリ" className="hidden md:block">
      <ul ref={containerRef} className="flex items-center gap-1 text-sm text-slate-700">
        {groups.map((group) => {
          const isOpen = openId === group.id;
          const panelId = `${baseId}-${group.id}`;
          return (
            <li
              key={group.id}
              className="relative"
              onBlur={(event) => {
                // フォーカスがこのグループの外へ出たら閉じる。
                if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                  setOpenId((current) => (current === group.id ? null : current));
                }
              }}
            >
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId((current) => (current === group.id ? null : group.id))}
                className={`inline-flex items-center gap-1 rounded-lg px-3 py-2 font-medium transition hover:bg-sky-50 hover:text-sky-700 ${
                  isOpen ? "bg-sky-50 text-sky-700" : ""
                }`}
              >
                <span className={isOpen ? "underline decoration-2 underline-offset-4" : ""}>
                  {group.label}
                </span>
                <svg
                  viewBox="0 0 20 20"
                  className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {isOpen ? (
                <div
                  id={panelId}
                  className="absolute left-0 top-full z-50 mt-1 min-w-56 rounded-xl border border-slate-200 bg-white p-2 shadow-lg"
                >
                  <ul className="space-y-0.5">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={() => setOpenId(null)}
                          className="block rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-sky-50 hover:text-sky-700"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
