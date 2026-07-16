"use client";

import { useState } from "react";
import { useAuth } from "@/components/auth/AuthProvider";
import { hasSupabaseEnv, supabase } from "@/lib/supabaseClient";
import { sendNotification } from "@/lib/notify";

type ArticleFeedbackProps = {
  slug: string;
  title: string;
};

/**
 * 記事末尾の「この記事は役に立ちましたか？」評価ウィジェット。
 * 👍/👎 の評価と、追加してほしい内容のリクエストを受け付けます。
 */
export function ArticleFeedback({ slug, title }: ArticleFeedbackProps) {
  const { session } = useAuth();
  const [voted, setVoted] = useState<"yes" | "no" | null>(null);
  const [showComment, setShowComment] = useState(false);
  const [comment, setComment] = useState("");
  const [commentSent, setCommentSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const pageUrl = `/guides/${slug}`;

  async function handleVote(helpful: boolean) {
    const value = helpful ? "yes" : "no";
    setVoted(value);
    setError("");

    if (helpful === false) {
      // 「いいえ」の場合は改善の入力欄を自動で開く
      setShowComment(true);
    }

    // 集計用の投票（テーブル未作成でもUXは止めない）
    if (hasSupabaseEnv && supabase) {
      try {
        await supabase.from("article_feedback").insert({
          slug,
          helpful,
          user_id: session?.user?.id ?? null,
        });
      } catch {
        // ベストエフォート。失敗しても通知は送る
      }
    }

    await sendNotification({
      kind: "feedback",
      type: "article_vote",
      title: `記事評価 ${helpful ? "👍" : "👎"}: ${title}`,
      body: `記事「${title}」に「${helpful ? "役に立った" : "役に立たなかった"}」の評価がありました。`,
      pageUrl,
    });
  }

  async function handleCommentSubmit() {
    const trimmed = comment.trim();
    if (trimmed.length < 5) {
      setError("5文字以上で入力してください。");
      return;
    }
    setSending(true);
    setError("");

    if (hasSupabaseEnv && supabase) {
      const { error: insertError } = await supabase.from("feedback_requests").insert({
        user_id: session?.user?.id ?? null,
        type: "article_request",
        page_url: pageUrl,
        title: `記事フィードバック: ${title}`,
        body: trimmed,
      });
      if (insertError) {
        setError(insertError.message);
        setSending(false);
        return;
      }
    }

    await sendNotification({
      kind: "feedback",
      type: "article_request",
      title: `記事フィードバック: ${title}`,
      body: trimmed,
      pageUrl,
    });

    setCommentSent(true);
    setSending(false);
    setComment("");
  }

  return (
    <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <h2 className="text-lg font-bold text-slate-900">この記事は役に立ちましたか？</h2>

      <div className="mt-3 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => handleVote(true)}
          aria-pressed={voted === "yes"}
          className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
            voted === "yes"
              ? "border-emerald-400 bg-emerald-100 text-emerald-800"
              : "border-slate-300 bg-white text-slate-700 hover:border-emerald-300 hover:bg-emerald-50"
          }`}
        >
          👍 はい
        </button>
        <button
          type="button"
          onClick={() => handleVote(false)}
          aria-pressed={voted === "no"}
          className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
            voted === "no"
              ? "border-rose-400 bg-rose-100 text-rose-800"
              : "border-slate-300 bg-white text-slate-700 hover:border-rose-300 hover:bg-rose-50"
          }`}
        >
          👎 いいえ
        </button>
      </div>

      {voted ? (
        <p className="mt-3 text-sm text-emerald-700">
          ご評価ありがとうございます！さらにご意見があれば下記からお知らせください。
        </p>
      ) : null}

      <div className="mt-4">
        {!showComment ? (
          <button
            type="button"
            onClick={() => setShowComment(true)}
            className="text-sm font-semibold text-sky-700 underline hover:text-sky-800"
          >
            追加してほしい内容を書く
          </button>
        ) : commentSent ? (
          <p className="text-sm text-emerald-700">
            送信しました。ご協力ありがとうございます。運営が確認します。
          </p>
        ) : (
          <div className="space-y-3">
            <label className="block text-sm font-medium text-slate-700">
              追加・修正してほしい内容
              <textarea
                value={comment}
                onChange={(event) => setComment(event.target.value)}
                placeholder="例：〇〇の手順のスクショが欲しい／△△の情報が古いかも など"
                className="mt-1 h-28 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
              />
            </label>
            {error ? <p className="text-xs text-rose-700">{error}</p> : null}
            <div className="flex gap-3">
              <button
                type="button"
                onClick={handleCommentSubmit}
                disabled={sending}
                className="rounded-full bg-sky-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-800 disabled:bg-slate-300"
              >
                {sending ? "送信中..." : "送信する"}
              </button>
              <button
                type="button"
                onClick={() => setShowComment(false)}
                className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-800"
              >
                閉じる
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
