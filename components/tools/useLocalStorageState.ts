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
    try {
      const raw = window.localStorage.getItem(key);
      if (raw != null) {
        setValue(JSON.parse(raw) as T);
      }
    } catch {
      // ignore malformed / unavailable storage
    }
    setHydrated(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
