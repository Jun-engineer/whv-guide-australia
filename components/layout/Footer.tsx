import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/layout/Logo";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50 py-10">
      <Container className="grid gap-6 text-sm text-slate-600 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <Logo size={36} />
          <p className="mt-3">初心者向けに現地生活をわかりやすく案内するガイドサイト。</p>
        </div>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/terms">Terms</Link>
        <Link href="/request">Contact / Request</Link>
        <p>Copyright {new Date().getFullYear()} WH Guide Australia</p>
      </Container>
    </footer>
  );
}
