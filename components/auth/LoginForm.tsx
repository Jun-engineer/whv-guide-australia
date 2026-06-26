"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginInput } from "@/lib/validations";
import { hasSupabaseEnv, supabase } from "@/lib/supabaseClient";

function resolveRedirectTarget(): string {
  if (typeof window === "undefined") return "/";
  const param = new URLSearchParams(window.location.search).get("redirect");
  // オープンリダイレクト防止: 同一サイト内の絶対パスのみ許可
  if (param && param.startsWith("/") && !param.startsWith("//")) {
    return param;
  }
  return "/";
}

export function LoginForm() {
  const [message, setMessage] = useState("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({ resolver: zodResolver(loginSchema) });

  async function onSubmit(values: LoginInput) {
    if (!hasSupabaseEnv || !supabase) {
      setMessage("Supabaseの環境変数を設定するとログインが有効になります。");
      return;
    }

    const { error } = await supabase.auth.signInWithPassword(values);
    if (error) {
      setMessage(error.message);
      return;
    }
    setMessage("ログインしました。ページを移動します…");
    const target = resolveRedirectTarget();
    router.push(target);
    router.refresh();
  }

  async function handleGoogleLogin() {
    if (!hasSupabaseEnv || !supabase) {
      setMessage("Supabaseの環境変数を設定するとGoogleログインが有効になります。");
      return;
    }

    const redirectBack = resolveRedirectTarget();
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo:
          typeof window !== "undefined"
            ? `${window.location.origin}/auth/callback?redirect=${encodeURIComponent(redirectBack)}`
            : undefined,
      },
    });
    if (error) {
      const notEnabled =
        error.message.toLowerCase().includes("provider is not enabled") ||
        error.message.toLowerCase().includes("unsupported provider");
      setMessage(
        notEnabled
          ? "現在Googleログインは準備中です。お手数ですがメールアドレスでログインしてください。"
          : error.message,
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5"
      noValidate
    >
      <label className="block text-sm text-slate-700">
        Email
        <input
          type="email"
          {...register("email")}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
        />
        {errors.email ? <span className="text-xs text-rose-700">{errors.email.message}</span> : null}
      </label>
      <label className="block text-sm text-slate-700">
        Password
        <input
          type="password"
          {...register("password")}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
        />
        {errors.password ? (
          <span className="text-xs text-rose-700">{errors.password.message}</span>
        ) : null}
      </label>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-sky-700 px-4 py-2 font-semibold text-white transition hover:bg-sky-800 disabled:bg-slate-300"
      >
        {isSubmitting ? "処理中..." : "ログイン"}
      </button>
      <button
        type="button"
        onClick={handleGoogleLogin}
        className="flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 px-4 py-2 font-semibold text-slate-700 transition hover:bg-slate-50"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1Z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84Z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.3 9.14 5.38 12 5.38Z"
          />
        </svg>
        Googleでログイン
      </button>
      {message ? <p className="text-sm text-slate-600">{message}</p> : null}
      <p className="pt-1 text-center text-sm text-slate-600">
        アカウントをお持ちでない方は{" "}
        <Link href="/register" className="font-semibold text-sky-700 underline hover:text-sky-800">
          新規登録はこちら
        </Link>
      </p>
    </form>
  );
}
