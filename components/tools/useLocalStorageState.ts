"use client";

import { useEffect, useState } from "react";

/**
 * ローカルストレージに同期する状態フック。
 *
 * - サーバー描画時は `initial` を返し、マウント後にローカルストレージの値で
 *   ハイドレートする（SSR とのミスマッチを避ける）。
 * - 値はブラウザ内にのみ保存され、サーバーには送信されない。
 * - ストレージが使えない環境（プライベートモード等）でも例外で落ちない。
 *
 * @returns `[value, setValue, hydrated]`
 */
export function useLocalStorageState<T>(
  key: string,
  initial: T,
): [T, (next: T | ((prev: T) => T)) => void, boolean] {
  const [value, setValue] = useState<T>(initial);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    let next: T | undefined;
    try {
      const raw = window.localStorage.getItem(key);
      if (raw != null) {
        next = JSON.parse(raw) as T;
      }
    } catch {
      // ignore malformed / unavailable storage
    }
    // Intentional post-mount hydration from localStorage: state starts from
    // `initial` on the server and is reconciled once, on the client, to avoid
    // SSR/client markup mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setValue((prev) => (next === undefined ? prev : next));
    setHydrated(true);
  }, [key]);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // ignore quota / unavailable storage
    }
  }, [key, value, hydrated]);

  return [value, setValue, hydrated];
}
