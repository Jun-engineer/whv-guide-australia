"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container } from "@/components/layout/Container";
import { emailChangeSchema, type EmailChangeInput } from "@/lib/validations";
import { hasSupabaseEnv, supabase } from "@/lib/supabaseClient";

export default function ForgotPasswordPage() {
  const [message, setMessage] = useState("");
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EmailChangeInput>({ resolver: zodResolver(emailChangeSchema) });

  async function onSubmit(values: EmailChangeInput) {
    if (!hasSupabaseEnv || !supabase) {
      setMessage("Supabaseの環境変数を設定するとパスワード再設定が有効になります。");
      return;
    }
    setMessage("");
    const { error } = await supabase.auth.resetPasswordForEmail(values.email, {
      redirectTo:
        typeof window !== "undefined"
          ? `${window.location.origin}/auth/callback?type=recovery&redirect=/reset-password`
          : undefined,
    });
    // セキュリティ上、登録の有無に関わらず同じ案内を表示する
    if (error && !error.message.toLowerCase().includes("rate")) {
      setMessage("送信に失敗しました。時間をおいて再度お試しください。");
      return;
    }
    setDone(true);
  }

  return (
    <Container className="py-10">
      <div className="mx-auto max-w-md space-y-4">
        <h1 className="text-3xl font-extrabold">パスワード再設定</h1>
        {done ? (
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-sm text-emerald-800">
            パスワード再設定用のメールを送信しました。メール内のリンクから新しいパスワードを設定してください。
            （メールが届かない場合は迷惑メールフォルダもご確認ください）
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5"
            noValidate
          >
            <p className="text-sm text-slate-600">
              ご登録のメールアドレスを入力してください。パスワード再設定用のリンクをお送りします。
            </p>
            <label className="block text-sm text-slate-700">
              Email
              <input
                type="email"
                {...register("email")}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
              />
              {errors.email ? (
                <span className="text-xs text-rose-700">{errors.email.message}</span>
              ) : null}
            </label>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-sky-700 px-4 py-2 font-semibold text-white transition hover:bg-sky-800 disabled:bg-slate-300"
            >
              {isSubmitting ? "送信中…" : "再設定メールを送信"}
            </button>
            {message ? <p className="text-sm text-rose-700">{message}</p> : null}
            <p className="pt-1 text-center text-sm text-slate-600">
              <Link href="/login" className="font-semibold text-sky-700 underline hover:text-sky-800">
                ログインに戻る
              </Link>
            </p>
          </form>
        )}
      </div>
    </Container>
  );
}
