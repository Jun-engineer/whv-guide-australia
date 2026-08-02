"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { searchDocs, type SearchDoc } from "@/lib/search";
import { popularTopics } from "@/lib/searchConfig";
import type { ArticleCategory } from "@/types/article";

type CategoryOption = { slug: ArticleCategory; name: string };

type SearchClientProps = {
  index: SearchDoc[];
  categories: CategoryOption[];
};

const MAX_RESULTS = 50;

export function SearchClient({ index, categories }: SearchClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";

  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState<ArticleCategory | "all">("all");

  // URL の ?q= を（履歴を汚さずに）同期する。
  useEffect(() => {
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    const qs = params.toString();
    router.replace(qs ? `/search?${qs}` : "/search", { scroll: false });
  }, [query, router]);

  const results = useMemo(
    () => searchDocs(index, query, category),
    [index, query, category],
  );

  const trimmed = query.trim();
  const visible = results.slice(0, MAX_RESULTS);

  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-white p-2 shadow-sm ring-1 ring-slate-200">
        <div className="flex items-stretch gap-2">
          <div className="relative flex-1">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                <path d="M20 20l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
            <label htmlFor="site-search-input" className="sr-only">
              記事を検索
            </label>
            <input
              id="site-search-input"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="記事を検索（例: TFN、ボンド、セカンドビザ、88日）"
              enterKeyHint="search"
              autoFocus
              className="w-full rounded-xl border border-transparent bg-slate-50 py-3 pl-10 pr-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-sky-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-200"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <label htmlFor="search-category" className="text-sm font-medium text-slate-600">
          カテゴリ
        </label>
        <select
          id="search-category"
          value={category}
          onChange={(event) => setCategory(event.target.value as ArticleCategory | "all")}
          className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-200"
        >
          <option value="all">すべて</option>
          {categories.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <div aria-live="polite" className="text-sm text-slate-500">
        {trimmed
          ? `「${trimmed}」の検索結果: ${results.length}件`
          : "キーワードを入力して記事を検索できます。"}
      </div>

      {trimmed && results.length > 0 ? (
        <ul className="space-y-3">
          {visible.map((result) => (
            <li key={result.slug}>
              <Link
                href={`/guides/${result.slug}`}
                className="block rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-sky-300 hover:shadow-sm"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-sky-700">
                  {result.categoryLabel}
                </span>
                <h2 className="mt-1 text-base font-bold text-slate-900">{result.title}</h2>
                <p className="mt-1 line-clamp-2 text-sm text-slate-600">{result.description}</p>
                {result.matchedAlias ? (
                  <p className="mt-2 text-xs text-slate-400">
                    一致: <span className="font-medium text-slate-500">{result.matchedAlias}</span>
                  </p>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}

      {trimmed && results.length === 0 ? (
        <ZeroState query={trimmed} categories={categories} />
      ) : null}

      {!trimmed ? <PopularTopics /> : null}
    </div>
  );
}

function PopularTopics() {
  return (
    <section className="space-y-3">
      <h2 className="text-sm font-semibold text-slate-700">人気のトピック</h2>
      <div className="flex flex-wrap gap-2">
        {popularTopics.map((topic) => (
          <Link
            key={topic.href}
            href={topic.href}
            className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 transition hover:border-sky-300 hover:text-sky-700"
          >
            {topic.label}
          </Link>
        ))}
      </div>
    </section>
  );
}

function ZeroState({
  query,
  categories,
}: {
  query: string;
  categories: CategoryOption[];
}) {
  const related = categories.slice(0, 8);
  return (
    <section className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6">
      <div>
        <h2 className="text-lg font-bold text-slate-900">
          「{query}」に一致する記事が見つかりませんでした
        </h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
          <li>スペルや表記（英語・カタカナ）を変えて試してみてください。</li>
          <li>より短いキーワードや略称（例: TFN、ABN、Rego）でも検索できます。</li>
          <li>カテゴリの絞り込みを「すべて」に戻すと結果が増えることがあります。</li>
        </ul>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-slate-700">人気のトピック</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {popularTopics.map((topic) => (
            <Link
              key={topic.href}
              href={topic.href}
              className="rounded-full border border-slate-200 px-4 py-1.5 text-sm font-medium text-slate-700 transition hover:border-sky-300 hover:text-sky-700"
            >
              {topic.label}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-slate-700">関連カテゴリ</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {related.map((c) => (
            <Link
              key={c.slug}
              href={`/${c.slug}`}
              className="rounded-full bg-slate-100 px-3 py-1.5 text-sm text-slate-700 transition hover:bg-sky-50 hover:text-sky-700"
            >
              {c.name}
            </Link>
          ))}
        </div>
      </div>

      <p className="text-sm text-slate-600">
        お探しの情報が見つからない場合は、
        <Link href="/request" className="font-semibold text-sky-700 underline hover:text-sky-800">
          記事リクエスト・フィードバック
        </Link>
        からお知らせください。
      </p>
    </section>
  );
}
