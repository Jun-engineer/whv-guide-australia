"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/auth/AuthProvider";
import { hasSupabaseEnv, supabase } from "@/lib/supabaseClient";

type CommentFormProps = {
  postId: string;
};

export function CommentForm({ postId }: CommentFormProps) {
  const { isLoggedIn, profile, canAct, emailVerified, phoneVerified } = useAuth();
  const router = useRouter();
  const [body, setBody] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const banned = profile?.status === "banned";
  const canPost = canAct;

  async function onSubmit() {
    if (!canPost || !hasSupabaseEnv || !supabase || !profile) {
      setMessage("コメントするには本人確認（メール・電話番号認証）が必要です。");
      return;
    }
    setSubmitting(true);
    setMessage("");
    const { error } = await supabase.from("forum_comments").insert({
      post_id: postId,
      user_id: profile.id,
      body,
    });
    if (error) {
      setMessage(
        "コメントを保存できませんでした。デモ投稿には保存できません（掲示板データのDB移行後に有効になります）。",
      );
    } else {
      setBody("");
      setMessage("コメントを投稿しました。");
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
      <h3 className="text-lg font-semibold text-slate-900">コメント投稿</h3>
      {!canPost ? (
        <p className="mt-2 text-sm text-rose-700">
          {banned ? (
            "BAN中のユーザーはコメントできません。"
          ) : !isLoggedIn ? (
            <>
              コメントには{" "}
              <Link href="/login" className="font-semibold underline">
                ログイン
              </Link>{" "}
              が必要です。
            </>
          ) : !emailVerified ? (
            "コメントするにはメールアドレスの認証を完了してください。"
          ) : !phoneVerified ? (
            <>
              コメントするには電話番号の認証が必要です。{" "}
              <Link href="/verify-phone" className="font-semibold underline">
                電話番号を認証する
              </Link>
            </>
          ) : (
            "コメントできません。"
          )}
        </p>
      ) : null}
      <textarea
        value={body}
        onChange={(event) => setBody(event.target.value)}
        placeholder="コメント内容"
        className="mt-3 h-28 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
        disabled={!canPost}
      />
      {message ? <p className="mt-2 text-sm text-slate-600">{message}</p> : null}
      <button
        type="submit"
        disabled={!canPost || body.length === 0 || submitting}
        className="mt-3 rounded-full bg-sky-700 px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:bg-slate-300"
      >
        {submitting ? "送信中…" : "コメントする"}
      </button>
    </form>
  );
}
