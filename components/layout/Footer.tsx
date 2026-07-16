import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/layout/Logo";

const guideLinks = [
  { href: "/visa", label: "ビザ" },
  { href: "/preparation", label: "渡航前準備" },
  { href: "/arrival", label: "渡航後" },
  { href: "/area", label: "エリアガイド" },
  { href: "/english", label: "英語学習" },
  { href: "/health", label: "健康・安全" },
];

const workLinks = [
  { href: "/jobs", label: "仕事探し" },
  { href: "/farm", label: "ファーム" },
  { href: "/second-visa", label: "セカンドビザ" },
  { href: "/uber-eats", label: "Uber Eats" },
  { href: "/doordash", label: "DoorDash" },
];

const lifeLinks = [
  { href: "/money", label: "送金・両替" },
  { href: "/bank", label: "銀行口座" },
  { href: "/tfn", label: "TFN" },
  { href: "/tax-return", label: "タックスリターン" },
  { href: "/housing", label: "家探し" },
  { href: "/community", label: "掲示板" },
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50 py-10">
      <Container className="grid gap-8 text-sm text-slate-600 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <Logo size={36} />
          <p className="mt-3">
            オーストラリアワーホリの準備・生活・仕事を、初心者向けにわかりやすく案内するガイドサイト。
          </p>
        </div>
        <nav aria-label="ガイド">
          <p className="mb-2 font-semibold text-slate-800">ガイド</p>
          <ul className="space-y-1.5">
            {guideLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-sky-700 hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="仕事">
          <p className="mb-2 font-semibold text-slate-800">仕事・ビザ</p>
          <ul className="space-y-1.5">
            {workLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-sky-700 hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="お金と生活">
          <p className="mb-2 font-semibold text-slate-800">お金・生活</p>
          <ul className="space-y-1.5">
            {lifeLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-sky-700 hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
      <Container className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-4">
          <Link href="/about" className="hover:text-sky-700 hover:underline">
            運営者情報
          </Link>
          <Link href="/news" className="hover:text-sky-700 hover:underline">
            ニュース
          </Link>
          <Link href="/privacy" className="hover:text-sky-700 hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-sky-700 hover:underline">
            Terms
          </Link>
          <Link href="/request" className="hover:text-sky-700 hover:underline">
            Contact / Request
          </Link>
        </div>
        <p>© {new Date().getFullYear()} WH Guide Australia</p>
      </Container>
    </footer>
  );
}
