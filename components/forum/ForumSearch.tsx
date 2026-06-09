"use client";

import { useMemo, useState } from "react";
import { PostCard } from "@/components/forum/PostCard";
import type { ForumPost } from "@/types/forum";

type ForumSearchProps = {
  posts: ForumPost[];
};

export function ForumSearch({ posts }: ForumSearchProps) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const keyword = query.trim().toLowerCase();
    if (!keyword) {
      return posts;
    }
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(keyword) ||
        post.body.toLowerCase().includes(keyword) ||
        post.authorName.toLowerCase().includes(keyword),
    );
  }, [posts, query]);

  return (
    <div className="space-y-4">
      <label className="block">
        <span className="text-sm font-semibold text-slate-700">投稿を検索</span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="キーワード（例: ファーム、シェアハウス）"
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
        />
      </label>

      {results.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-center text-sm text-slate-500">
          「{query}」に一致する投稿は見つかりませんでした。
        </p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {results.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
