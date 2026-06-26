"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/auth/AuthProvider";
import { hasSupabaseEnv, supabase } from "@/lib/supabaseClient";

type PostFormProps = {
  categoryId?: string | null;
};

export function PostForm({ categoryId = null }: PostFormProps) {
  const { isLoggedIn, profile } = useAuth();
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const banned = profile?.status === "banned";
  const canPost = isLoggedIn && !banned;

  async function onSubmit() {
    if (!canPost || !hasSupabaseEnv || !supabase || !profile) {
      setMessage("投稿にはログインが必要です。");
      return;
    }
    setSubmitting(true);
    setMessage("");
    const { error } = await supabase.from("forum_posts").insert({
      category_id: categoryId,
      user_id: profile.id,
      title,
      body,
    });
    if (error) {
      setMessage("投稿を保存できませんでした。時間をおいて再度お試しください。");
    } else {
      setTitle("");
      setBody("");
      setMessage("投稿しました。");
      router.refresh();
    }
    setSubmitting(false);
  }

  return (
    <form
      className="rounded-2xl border border-slate-200 bg-white p-4"
      onSubmit={(event) => {
        event.preventDefault();
        void onSubmit();
      }}
    >
      <h3 className="text-lg font-semibold text-slate-900">投稿作成</h3>
      {!canPost ? (
        <p className="mt-2 text-sm text-rose-700">
          {banned ? "BAN中のユーザーは投稿できません。" : "投稿にはログインが必要です。"}
        </p>
      ) : null}
      <div className="mt-3 space-y-3">
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="タイトル"
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
          disabled={!canPost}
        />
        <textarea
          value={body}
          onChange={(event) => setBody(event.target.value)}
          placeholder="本文"
          className="h-28 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
          disabled={!canPost}
        />
        {message ? <p className="text-sm text-slate-600">{message}</p> : null}
        <button
          type="submit"
          disabled={!canPost || title.length === 0 || body.length === 0 || submitting}
          className="rounded-full bg-sky-700 px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          {submitting ? "送信中…" : "投稿する"}
        </button>
      </div>
    </form>
  );
}
