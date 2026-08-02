import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/layout/Logo";
import { siteConfig } from "@/lib/siteConfig";
import { footerNavGroups } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50 py-10">
      <Container className="grid gap-8 text-sm text-slate-600 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo size={36} />
          <p className="mt-3">
            {siteConfig.tagline}
            <br />
            オーストラリアワーホリの準備・生活・仕事を、初心者向けにわかりやすく案内する日本語ガイドです。
          </p>
        </div>
        {footerNavGroups.map((group) => (
          <nav key={group.id} aria-label={group.label}>
            <p className="mb-2 font-semibold text-slate-800">{group.label}</p>
            <ul className="space-y-1.5">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-sky-700 hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </Container>
      <Container className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-4">
          <Link href="/about" className="hover:text-sky-700 hover:underline">
            運営者情報
          </Link>
          <Link href="/editorial-policy" className="hover:text-sky-700 hover:underline">
            編集方針
          </Link>
          <Link href="/privacy" className="hover:text-sky-700 hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-sky-700 hover:underline">
            Terms
          </Link>
          <Link href="/request" className="hover:text-sky-700 hover:underline">
            お問い合わせ・フィードバック
          </Link>
        </div>
        <p>© {new Date().getFullYear()} オーストラリアワーホリコンパス（WH Guide Australia）</p>
      </Container>
    </footer>
  );
}
