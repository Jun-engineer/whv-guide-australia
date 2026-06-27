"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container } from "@/components/layout/Container";
import { useAuth } from "@/components/auth/AuthProvider";
import { PasswordInput } from "@/components/ui/PasswordInput";
import { passwordChangeSchema, type PasswordChangeInput } from "@/lib/validations";
import { hasSupabaseEnv, supabase } from "@/lib/supabaseClient";

export default function ResetPasswordPage() {
  const router = useRouter();
  const { loading, isLoggedIn } = useAuth();
  const [message, setMessage] = useState("");
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PasswordChangeInput>({ resolver: zodResolver(passwordChangeSchema) });

  async function onSubmit(values: PasswordChangeInput) {
    if (!hasSupabaseEnv || !supabase) return;
    setMessage("");
    const { error } = await supabase.auth.updateUser({ password: values.password });
    if (error) {
      setMessage("パスワードの更新に失敗しました。リンクの有効期限が切れている可能性があります。");
      return;
    }
    setDone(true);
    setTimeout(() => {
      router.replace("/profile");
      router.refresh();
    }, 1500);
  }

  return (
    <Container className="py-10">
      <div className="mx-auto max-w-md space-y-4">
        <h1 className="text-3xl font-extrabold">新しいパスワードの設定</h1>
        {loading ? (
          <p className="text-sm text-slate-500">読み込み中…</p>
        ) : done ? (
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-sm text-emerald-800">
            パスワードを更新しました。プロフィールページへ移動します…
          </div>
        ) : !isLoggedIn ? (
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
            再設定リンクが無効か、有効期限が切れています。お手数ですが、もう一度
            <a href="/forgot-password" className="font-semibold underline">
              パスワード再設定
            </a>
            をお試しください。
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5"
            noValidate
          >
            <label className="block text-sm text-slate-700">
              新しいパスワード
              <PasswordInput
                autoComplete="new-password"
                invalid={Boolean(errors.password)}
                {...register("password")}
              />
              {errors.password ? (
                <span className="text-xs text-rose-700">{errors.password.message}</span>
              ) : null}
            </label>
            <label className="block text-sm text-slate-700">
              新しいパスワード（確認）
              <PasswordInput
                autoComplete="new-password"
                invalid={Boolean(errors.confirm)}
                {...register("confirm")}
              />
              {errors.confirm ? (
                <span className="text-xs text-rose-700">{errors.confirm.message}</span>
              ) : null}
            </label>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-sky-700 px-4 py-2 font-semibold text-white transition hover:bg-sky-800 disabled:bg-slate-300"
            >
              {isSubmitting ? "更新中…" : "パスワードを更新"}
            </button>
            {message ? <p className="text-sm text-rose-700">{message}</p> : null}
          </form>
        )}
      </div>
    </Container>
  );
}
