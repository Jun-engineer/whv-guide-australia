"use client";

import { useState } from "react";
import { useAuth } from "@/components/auth/AuthProvider";
import { hasSupabaseEnv, supabase } from "@/lib/supabaseClient";

type LikeButtonProps = {
  postId: string;
  initialCount: number;
};

export function LikeButton({ postId, initialCount }: LikeButtonProps) {
  const { canAct, profile } = useAuth();
  const [count, setCount] = useState(initialCount);
  const [liked, setLiked] = useState(false);
  const [busy, setBusy] = useState(false);

  const enabled = canAct;

  async function toggleLike() {
    if (!enabled || !hasSupabaseEnv || !supabase || !profile) return;
    setBusy(true);
    const next = !liked;
    // optimistic update
    setLiked(next);
    setCount((current) => current + (next ? 1 : -1));

    const { error } = next
      ? await supabase.from("likes").insert({ post_id: postId, user_id: profile.id })
      : await supabase.from("likes").delete().match({ post_id: postId, user_id: profile.id });

    if (error) {
      // revert on failure
      setLiked(!next);
      setCount((current) => current + (next ? -1 : 1));
    }
    setBusy(false);
  }

  return (
    <button
      type="button"
      onClick={toggleLike}
      disabled={!enabled || busy}
      aria-pressed={liked}
      title={enabled ? undefined : "いいねには本人確認（メール・電話番号認証）が必要です。"}
      className={`rounded-full border px-3 py-1 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-60 ${
        liked ? "border-rose-300 bg-rose-50 text-rose-700" : "border-slate-300 text-slate-700"
      }`}
    >
      ♥ いいね {count}
    </button>
  );
}
