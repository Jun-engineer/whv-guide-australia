"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registerSchema,
  type RegisterInput,
  otpSchema,
  type OtpInput,
} from "@/lib/validations";
import { hasSupabaseEnv, supabase } from "@/lib/supabaseClient";

type Step = "form" | "verify" | "done";

export function RegisterForm() {
  const [message, setMessage] = useState("");
  const [step, setStep] = useState<Step>("form");
  const [phone, setPhone] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterInput>({ resolver: zodResolver(registerSchema) });

  const {
    register: registerOtp,
    handleSubmit: handleSubmitOtp,
    formState: { errors: otpErrors, isSubmitting: isVerifying },
  } = useForm<OtpInput>({ resolver: zodResolver(otpSchema) });

  async function onSubmit(values: RegisterInput) {
    if (!hasSupabaseEnv || !supabase) {
      setMessage("Supabaseの環境変数を設定すると新規登録が有効になります。");
      return;
    }

    // BAN済みの電話番号での再登録をブロック
    const { data: banned } = await supabase.rpc("is_phone_banned", {
      check_phone: values.phone,
    });
    if (banned === true) {
      setMessage("この電話番号は利用できません。サポートが必要な場合はお問い合わせください。");
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
      options: {
        emailRedirectTo:
          typeof window !== "undefined" ? `${window.location.origin}/auth/callback` : undefined,
        data: {
          display_name: values.displayName,
          phone: values.phone,
        },
      },
    });

    if (error) {
      setMessage(error.message);
      return;
    }

    setPhone(values.phone);

    // メール認証直後にセッションがある場合のみ、電話番号のSMS認証を開始できます。
    if (data.session) {
      const { error: phoneError } = await supabase.auth.updateUser({ phone: values.phone });
      if (phoneError) {
        setMessage(
          "アカウントを作成しました。電話番号認証は現在準備中のため、メール認証のみで投稿が可能です。",
        );
        setStep("done");
        return;
      }
      setMessage("登録した電話番号にSMSで認証コードを送信しました。");
      setStep("verify");
      return;
    }

    setMessage(
      "登録メールを送信しました。メール内のリンクで認証後、プロフィールから電話番号認証を完了してください。",
    );
    setStep("done");
  }

  async function onVerify(values: OtpInput) {
    if (!hasSupabaseEnv || !supabase) {
      return;
    }
    const { error } = await supabase.auth.verifyOtp({
      phone,
      token: values.token,
      type: "phone_change",
    });
    if (error) {
      setMessage(error.message);
      return;
    }
    setMessage("電話番号の認証が完了しました。ご登録ありがとうございます。");
    setStep("done");
  }

  if (step === "verify") {
    return (
      <form
        onSubmit={handleSubmitOtp(onVerify)}
        className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5"
        noValidate
      >
        <p className="text-sm text-slate-700">
          {phone} 宛に送信した6桁の認証コードを入力してください。
        </p>
        <label className="block text-sm text-slate-700">
          認証コード
          <input
            inputMode="numeric"
            maxLength={6}
            {...registerOtp("token")}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 tracking-widest"
          />
          {otpErrors.token ? (
            <span className="text-xs text-rose-700">{otpErrors.token.message}</span>
          ) : null}
        </label>
        <button
          type="submit"
          disabled={isVerifying}
          className="w-full rounded-full bg-sky-700 px-4 py-2 font-semibold text-white transition hover:bg-sky-800 disabled:bg-slate-300"
        >
          {isVerifying ? "確認中..." : "認証する"}
        </button>
        {message ? <p className="text-sm text-slate-600">{message}</p> : null}
      </form>
    );
  }

  if (step === "done") {
    return (
      <div className="space-y-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
        <p className="text-sm font-semibold text-emerald-900">アカウント登録を受け付けました</p>
        {message ? <p className="text-sm text-emerald-800">{message}</p> : null}
        <Link
          href="/login"
          className="inline-block rounded-full bg-sky-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-800"
        >
          ログインページへ
        </Link>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5"
      noValidate
    >
      <label className="block text-sm text-slate-700">
        表示名
        <input
          {...register("displayName")}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
        />
        {errors.displayName ? (
          <span className="text-xs text-rose-700">{errors.displayName.message}</span>
        ) : null}
      </label>
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
        電話番号（国番号付き）
        <input
          type="tel"
          inputMode="tel"
          placeholder="+819012345678"
          {...register("phone")}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
        />
        {errors.phone ? (
          <span className="text-xs text-rose-700">{errors.phone.message}</span>
        ) : (
          <span className="text-xs text-slate-500">
            SMS認証に使用します。日本は先頭の0を除き +81 を付けます（例: 090-1234-5678 → +819012345678）。
          </span>
        )}
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
        {isSubmitting ? "処理中..." : "新規登録"}
      </button>
      {message ? <p className="text-sm text-slate-600">{message}</p> : null}
      <p className="pt-1 text-center text-sm text-slate-600">
        すでにアカウントをお持ちの方は{" "}
        <Link href="/login" className="font-semibold text-sky-700 underline hover:text-sky-800">
          ログインはこちら
        </Link>
      </p>
    </form>
  );
}
