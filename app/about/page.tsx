import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "運営者情報",
  description: "WH Guide Australia の運営者情報・免責事項・お問い合わせについて。",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <Container className="py-10">
      <div className="mx-auto max-w-3xl space-y-6">
        <header className="space-y-2">
          <h1 className="text-3xl font-extrabold text-slate-900">運営者情報</h1>
          <p className="text-sm text-slate-600">
            WH Guide Australia は、オーストラリアのワーキングホリデー渡航者に向けて、ビザ・生活・仕事の情報を日本語でわかりやすく提供するメディアです。
          </p>
        </header>

        <section className="space-y-2">
          <h2 className="text-xl font-bold text-slate-900">運営者</h2>
          <dl className="rounded-2xl border border-slate-200 bg-white p-5 text-sm">
            <div className="flex justify-between gap-4 border-b border-slate-100 py-2">
              <dt className="text-slate-500">運営者</dt>
              <dd className="font-medium text-slate-800">Nammoku Solutions</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-slate-100 py-2">
              <dt className="text-slate-500">サイト名</dt>
              <dd className="font-medium text-slate-800">WH Guide Australia</dd>
            </div>
            <div className="flex justify-between gap-4 py-2">
              <dt className="text-slate-500">お問い合わせ</dt>
              <dd className="font-medium text-slate-800">
                <Link href="/request" className="text-sky-700 underline hover:text-sky-800">
                  お問い合わせフォーム
                </Link>
              </dd>
            </div>
          </dl>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold text-slate-900">免責事項</h2>
          <p className="text-sm leading-relaxed text-slate-700">
            当サイトに掲載している情報は、一般的な参考情報であり、その正確性・完全性・最新性を保証するものではありません。ビザ・税金・銀行・送金・交通などの制度や料金は予告なく変更される場合があります。手続きの際は必ず各公式機関・事業者の最新情報をご確認ください。当サイトの利用により生じた損害について、運営者は一切の責任を負いません。
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold text-slate-900">著作権</h2>
          <p className="text-sm leading-relaxed text-slate-700">
            当サイトに掲載された文章・画像等の著作権は運営者または正当な権利者に帰属します。無断転載・複製を禁じます。
          </p>
        </section>

        <div className="flex flex-wrap gap-3 text-sm">
          <Link href="/privacy" className="text-sky-700 underline hover:text-sky-800">
            プライバシーポリシー
          </Link>
          <Link href="/terms" className="text-sky-700 underline hover:text-sky-800">
            利用規約
          </Link>
        </div>
      </div>
    </Container>
  );
}
