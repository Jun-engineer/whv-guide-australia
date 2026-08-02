import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/layout/Logo";
import { HeaderAuth } from "@/components/layout/HeaderAuth";
import { MobileNav } from "@/components/layout/MobileNav";
import { PrimaryNav } from "@/components/layout/PrimaryNav";
import { primaryNavGroups } from "@/lib/navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-sky-100 bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo size={36} />
        <PrimaryNav groups={primaryNavGroups} />
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
          <HeaderAuth />
          <MobileNav groups={primaryNavGroups} />
        </div>
      </Container>
    </header>
  );
}
