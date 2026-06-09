import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/layout/Logo";

const navItems = [
  { href: "/visa", label: "ビザ" },
  { href: "/preparation", label: "渡航前準備" },
  { href: "/arrival", label: "渡航後" },
  { href: "/jobs", label: "仕事" },
  { href: "/farm", label: "ファーム" },
  { href: "/community", label: "掲示板" },
  { href: "/request", label: "リクエスト" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-sky-100 bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo size={36} />
        <nav className="hidden gap-4 text-sm text-slate-700 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-sky-700">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 text-sm">
          <Link href="/login" className="rounded-full border border-sky-200 px-3 py-1 text-sky-700">
            ログイン
          </Link>
          <Link href="/profile" className="rounded-full bg-sky-600 px-3 py-1 text-white">
            プロフィール
          </Link>
        </div>
      </Container>
    </header>
  );
}
