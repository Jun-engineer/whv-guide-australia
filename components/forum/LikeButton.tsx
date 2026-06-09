"use client";

import { useState } from "react";

type LikeButtonProps = {
  initialCount: number;
  disabled?: boolean;
};

export function LikeButton({ initialCount, disabled }: LikeButtonProps) {
  const [count, setCount] = useState(initialCount);
  const [liked, setLiked] = useState(false);

  function toggleLike() {
    setLiked((prev) => {
      const next = !prev;
      setCount((current) => current + (next ? 1 : -1));
      return next;
    });
  }

  return (
    <button
      type="button"
      onClick={toggleLike}
      disabled={disabled}
      aria-pressed={liked}
      className={`rounded-full border px-3 py-1 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-60 ${
        liked ? "border-rose-300 bg-rose-50 text-rose-700" : "border-slate-300 text-slate-700"
      }`}
    >
      ♥ いいね {count}
    </button>
  );
}
