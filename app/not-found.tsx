import Link from "next/link";
import { Container } from "@/components/layout/Container";

export default function NotFound() {
  return (
    <Container className="py-20 text-center">
      <h1 className="text-4xl font-black text-slate-900">404</h1>
      <p className="mt-2 text-slate-600">ページが見つかりませんでした。</p>
      <Link href="/" className="mt-6 inline-block rounded-full bg-sky-700 px-5 py-2 text-white">
        トップへ戻る
      </Link>
    </Container>
  );
}
