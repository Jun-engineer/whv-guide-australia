"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { EmailOtpType } from "@supabase/supabase-js";
import { Container } from "@/components/layout/Container";
import { hasSupabaseEnv, supabase } from "@/lib/supabaseClient";

function safeRedirect(value: string | null): string {
  if (value && value.startsWith("/") && !value.startsWith("//")) {
    return value;
  }
  return "/";
}

const EMAIL_OTP_TYPES: EmailOtpType[] = [
  "signup",
  "invite",
  "magiclink",
  "recovery",
  "email_change",
  "email",
];

function asEmailOtpType(value: string | null): EmailOtpType {
  return EMAIL_OTP_TYPES.includes(value as EmailOtpType)
    ? (value as EmailOtpType)
    : "email";
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
      const tokenHash = searchParams.get("token_hash");
      const type = searchParams.get("type");
      const code = searchParams.get("code");
      const errorDescription = searchParams.get("error_description");

      if (errorDescription) {
        setMessage(`認証に失敗しました: ${errorDescription}`);
        setFailed(true);
        return;
      }

      try {
        // 推奨: token_hash 方式。code verifier が不要なため別ブラウザ/端末でも確認できる
        if (tokenHash) {
          const { error } = await supabase.auth.verifyOtp({
            type: asEmailOtpType(type),
            token_hash: tokenHash,
          });
          if (error) {
            setMessage(`認証に失敗しました: ${error.message}`);
            setFailed(true);
            return;
          }
        } else if (code) {
          // PKCE 方式（主に同一ブラウザでのOAuth/メール確認）
          const { error } = await supabase.auth.exchangeCodeForSession(code);
          if (error) {
            setMessage(
              "認証リンクの確認に失敗しました。リンクは登録に使用したブラウザで開く必要があります。お手数ですが、ログイン画面からログインをお試しください。",
            );
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
          // パスワード再設定（recovery）は電話認証ゲートをスキップして再設定ページへ
          if (type === "recovery") {
            setMessage("確認できました。新しいパスワードを設定してください…");
            router.replace(target);
            router.refresh();
            return;
          }
          // メール認証は完了。電話番号が未認証なら電話認証へ誘導する
          const user = session.user;
          const phoneVerified = Boolean(user.phone_confirmed_at || user.phone);
          if (!phoneVerified) {
            setMessage("メール認証が完了しました。続けて電話番号認証を行います…");
            router.replace(`/verify-phone?redirect=${encodeURIComponent(target)}`);
            return;
          }
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
