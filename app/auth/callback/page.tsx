"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { hasSupabaseEnv, supabase } from "@/lib/supabaseClient";

function safeRedirect(value: string | null): string {
  if (value && value.startsWith("/") && !value.startsWith("//")) {
    return value;
  }
  return "/";
}

function CallbackInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [message, setMessage] = useState("認証を確認しています…");
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;

    async function run() {
      if (!hasSupabaseEnv || !supabase) {
        setMessage("Supabaseが未設定のため認証を完了できません。");
        setFailed(true);
        return;
      }

      const target = safeRedirect(searchParams.get("redirect"));
      const code = searchParams.get("code");
      const errorDescription = searchParams.get("error_description");

      if (errorDescription) {
        setMessage(`認証に失敗しました: ${errorDescription}`);
        setFailed(true);
        return;
      }

      try {
        // PKCE / メール確認: URLの code をセッションに交換
        if (code) {
          const { error } = await supabase.auth.exchangeCodeForSession(code);
          if (error) {
            setMessage(`認証に失敗しました: ${error.message}`);
            setFailed(true);
            return;
          }
        }

        // セッションが確立しているか確認
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (!active) return;

        if (session) {
          setMessage("認証が完了しました。移動します…");
          router.replace(target);
          router.refresh();
        } else {
          setMessage("メール認証が完了しました。ログインしてください。");
          router.replace("/login");
        }
      } catch {
        if (!active) return;
        setMessage("認証処理中にエラーが発生しました。");
        setFailed(true);
      }
    }

    void run();
    return () => {
      active = false;
    };
  }, [router, searchParams]);

  return (
    <Container className="py-16">
      <div className="mx-auto max-w-md rounded-2xl border border-slate-200 bg-white p-6 text-center">
        <p className="text-sm text-slate-700">{message}</p>
        {failed ? (
          <a
            href="/login"
            className="mt-4 inline-block rounded-full bg-sky-700 px-4 py-2 text-sm font-semibold text-white"
          >
            ログインページへ
          </a>
        ) : null}
      </div>
    </Container>
  );
}

export default function AuthCallbackPage() {
  return (
    <Suspense
      fallback={
        <Container className="py-16">
          <p className="text-center text-sm text-slate-500">読み込み中…</p>
        </Container>
      }
    >
      <CallbackInner />
    </Suspense>
  );
}
