"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/auth/AuthProvider";
import { hasSupabaseEnv, supabase } from "@/lib/supabaseClient";
import type { ForumCategory } from "@/types/forum";

type PostFormProps = {
  categoryId?: string | null;
  // カテゴリ固定でない場合（/community のフォーム）に選択肢を渡す
  categories?: ForumCategory[];
};

export function PostForm({ categoryId = null, categories }: PostFormProps) {
  const { isLoggedIn, profile, canAct, emailVerified, phoneVerified } = useAuth();
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const banned = profile?.status === "banned";
  const canPost = canAct;
  // カテゴリ固定（カテゴリページ）でなければ選択UIを表示する
  const showCategorySelect = !categoryId && Array.isArray(categories) && categories.length > 0;

  async function onSubmit() {
    if (!canPost || !hasSupabaseEnv || !supabase || !profile) {
      setMessage("投稿するには本人確認（メール・電話番号認証）が必要です。");
      return;
    }
    const resolvedCategoryId = categoryId ?? (selectedCategoryId || null);
    if (showCategorySelect && !resolvedCategoryId) {
      setMessage("ジャンルを選択してください。");
      return;
    }
    setSubmitting(true);
    setMessage("");
    const { error } = await supabase.from("forum_posts").insert({
      category_id: resolvedCategoryId,
      user_id: profile.id,
      title,
      body,
    });
    if (error) {
      setMessage("投稿を保存できませんでした。時間をおいて再度お試しください。");
    } else {
      setTitle("");
      setBody("");
      setSelectedCategoryId("");
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
          {banned ? (
            "BAN中のユーザーは投稿できません。"
          ) : !isLoggedIn ? (
            <>
              投稿には{" "}
              <Link href="/login" className="font-semibold underline">
                ログイン
              </Link>{" "}
              が必要です。
            </>
          ) : !emailVerified ? (
            "投稿するにはメールアドレスの認証を完了してください。"
          ) : !phoneVerified ? (
            <>
              投稿するには電話番号の認証が必要です。{" "}
              <Link href="/verify-phone" className="font-semibold underline">
                電話番号を認証する
              </Link>
            </>
          ) : (
            "投稿できません。"
          )}
        </p>
      ) : null}
      <div className="mt-3 space-y-3">
        {showCategorySelect ? (
          <select
            value={selectedCategoryId}
            onChange={(event) => setSelectedCategoryId(event.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            disabled={!canPost}
          >
            <option value="">ジャンルを選択してください</option>
            {categories!.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        ) : null}
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
