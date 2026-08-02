import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/layout/Container";
import { SearchClient } from "@/components/search/SearchClient";
import { buildSearchIndex } from "@/lib/searchIndex";
import { getArticleCategories } from "@/lib/articles";

export const metadata: Metadata = {
  title: "記事を検索",
  description:
    "オーストラリアワーホリコンパスの記事をキーワードで検索。ビザ、TFN、ファーム、税金、家探し、車・免許などを日本語・英語・略称から探せます。",
  alternates: { canonical: "/search" },
  // Internal search-results pages offer no standalone value to index and can
  // generate near-duplicate/thin URLs, so keep them crawlable but out of the
  // index (Google/AdSense low-value-content guidance).
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  },
};

export default function SearchPage() {
  const index = buildSearchIndex();
  const categories = getArticleCategories();

  return (
    <Container className="space-y-6 py-10">
      <header className="space-y-1">
        <h1 className="text-2xl font-extrabold text-slate-900">記事を検索</h1>
        <p className="text-sm text-slate-600">
          キーワード・略称・カタカナのいずれでも検索できます（例: TFN、ボンド、セカンドビザ、88日）。
        </p>
      </header>
      <Suspense fallback={<p className="text-sm text-slate-500">検索を読み込み中…</p>}>
        <SearchClient index={index} categories={categories} />
      </Suspense>
    </Container>
  );
}
