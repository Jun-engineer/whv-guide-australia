"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SearchBox } from "@/components/search/SearchBox";
import type { NavGroup } from "@/lib/navigation";

type MobileNavProps = {
  groups: NavGroup[];
};

export function MobileNav({ groups }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const router = useRouter();
  const baseId = useId();

  // メニュー展開中は背面スクロールを止める
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Escape でメニュー全体を閉じる
  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function closeMenu() {
    setOpen(false);
    setExpanded(null);
  }

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "メニューを閉じる" : "メニューを開く"}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:bg-slate-50"
      >
        {open ? (
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>

      {open ? (
        <>
          <div
            className="fixed inset-0 top-16 z-30 bg-slate-900/40"
            onClick={closeMenu}
            aria-hidden="true"
          />
          <nav
            id="mobile-nav-panel"
            aria-label="カテゴリ"
            className="fixed inset-x-0 top-16 z-40 max-h-[calc(100vh-4rem)] overflow-y-auto overflow-x-hidden border-b border-sky-100 bg-white p-4 shadow-lg"
          >
            <div className="mb-3">
              <p className="mb-1 text-xs font-semibold text-slate-500">記事を検索</p>
              <SearchBox
                variant="compact"
                onSubmitQuery={(q) => {
                  closeMenu();
                  router.push(q ? `/search?q=${encodeURIComponent(q)}` : "/search");
                }}
              />
            </div>
            <ul className="space-y-1">
              {groups.map((group) => {
                const isExpanded = expanded === group.id;
                const panelId = `${baseId}-${group.id}`;
                return (
                  <li key={group.id} className="border-b border-slate-100 last:border-b-0">
                    <button
                      type="button"
                      aria-expanded={isExpanded}
                      aria-controls={panelId}
                      onClick={() =>
                        setExpanded((current) => (current === group.id ? null : group.id))
                      }
                      className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-semibold text-slate-800 transition hover:bg-sky-50 hover:text-sky-700"
                    >
                      <span>{group.label}</span>
                      <svg
                        viewBox="0 0 20 20"
                        className={`h-5 w-5 shrink-0 transition-transform ${isExpanded ? "rotate-180" : ""}`}
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
                    {isExpanded ? (
                      <ul id={panelId} className="space-y-0.5 pb-2 pl-2">
                        {group.links.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              onClick={closeMenu}
                              className="block rounded-lg px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-sky-50 hover:text-sky-700"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </nav>
        </>
      ) : null}
    </div>
  );
}
