import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/layout/Logo";
import { HeaderAuth } from "@/components/layout/HeaderAuth";
import { MobileNav } from "@/components/layout/MobileNav";

const navItems = [
  { href: "/visa", label: "ビザ" },
  { href: "/preparation", label: "渡航前準備" },
  { href: "/arrival", label: "渡航後" },
  { href: "/area", label: "エリア" },
  { href: "/jobs", label: "仕事" },
  { href: "/farm", label: "ファーム" },
  { href: "/community", label: "掲示板" },
  { href: "/request", label: "リクエスト" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-sky-100 bg-white/90 backdrop-blur">
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
          <HeaderAuth />
          <MobileNav items={navItems} />
        </div>
      </Container>
    </header>
  );
}
