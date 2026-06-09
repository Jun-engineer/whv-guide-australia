"use client";

import { useState } from "react";
import type { Profile } from "@/types/user";

type CommentFormProps = {
  canPost: boolean;
  viewer: Profile;
};

export function CommentForm({ canPost, viewer }: CommentFormProps) {
  const [body, setBody] = useState("");

  return (
    <form className="rounded-2xl border border-slate-200 bg-white p-4">
      <h3 className="text-lg font-semibold text-slate-900">コメント投稿</h3>
      {!canPost ? (
        <p className="mt-2 text-sm text-rose-700">
          {viewer.status === "banned"
            ? "BAN中のユーザーはコメントできません。"
            : "コメントにはログインが必要です。"}
        </p>
      ) : null}
      <textarea
        value={body}
        onChange={(event) => setBody(event.target.value)}
        placeholder="コメント内容"
        className="mt-3 h-28 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
        disabled={!canPost}
      />
      <button
        type="button"
        disabled={!canPost || body.length === 0}
        className="mt-3 rounded-full bg-sky-700 px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:bg-slate-300"
      >
        コメントする (MVPデモ)
      </button>
    </form>
  );
}
