"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto max-w-md px-4 py-20 text-center">
      <h1 className="text-2xl font-bold text-slate-900">問題が発生しました</h1>
      <p className="mt-2 text-sm text-slate-600">
        ページの読み込み中にエラーが発生しました。もう一度お試しください。
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-4 rounded-full bg-sky-700 px-4 py-2 text-sm font-semibold text-white"
      >
        再試行
      </button>
    </div>
  );
}
