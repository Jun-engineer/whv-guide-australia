"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/components/auth/AuthProvider";
import { hasSupabaseEnv, supabase } from "@/lib/supabaseClient";
import {
  emailChangeSchema,
  type EmailChangeInput,
  passwordChangeSchema,
  type PasswordChangeInput,
  phoneChangeSchema,
  type PhoneChangeInput,
  otpSchema,
  type OtpInput,
} from "@/lib/validations";

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5">
      <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
      {description ? <p className="mt-1 text-sm text-slate-600">{description}</p> : null}
      <div className="mt-4 space-y-3">{children}</div>
    </section>
  );
}

function EmailChange() {
  const { session, refresh } = useAuth();
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EmailChangeInput>({ resolver: zodResolver(emailChangeSchema) });

  async function onSubmit(values: EmailChangeInput) {
    if (!hasSupabaseEnv || !supabase) return;
    setMessage("");
    const { error } = await supabase.auth.updateUser(
      { email: values.email },
      {
        emailRedirectTo:
          typeof window !== "undefined" ? `${window.location.origin}/auth/callback` : undefined,
      },
    );
    if (error) {
      setMessage(error.message);
      return;
    }
    setMessage(
      "確認メールを新しいメールアドレス宛に送信しました。メール内のリンクをクリックすると変更が完了します。",
    );
    await refresh();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3" noValidate>
      <p className="text-sm text-slate-600">
        現在のメールアドレス: <span className="font-medium">{session?.user?.email ?? "—"}</span>
      </p>
      <label className="block text-sm text-slate-700">
        新しいメールアドレス
        <input
          type="email"
          {...register("email")}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
        />
        {errors.email ? <span className="text-xs text-rose-700">{errors.email.message}</span> : null}
      </label>
      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-full bg-sky-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-800 disabled:bg-slate-300"
      >
        {isSubmitting ? "送信中…" : "メールアドレスを変更"}
      </button>
      {message ? <p className="text-sm text-slate-600">{message}</p> : null}
    </form>
  );
}

function PasswordChange() {
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PasswordChangeInput>({ resolver: zodResolver(passwordChangeSchema) });

  async function onSubmit(values: PasswordChangeInput) {
    if (!hasSupabaseEnv || !supabase) return;
    setMessage("");
    const { error } = await supabase.auth.updateUser({ password: values.password });
    if (error) {
      setMessage(error.message);
      return;
    }
    setMessage("パスワードを変更しました。");
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3" noValidate>
      <label className="block text-sm text-slate-700">
        新しいパスワード
        <input
          type="password"
          {...register("password")}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
        />
        {errors.password ? (
          <span className="text-xs text-rose-700">{errors.password.message}</span>
        ) : null}
      </label>
      <label className="block text-sm text-slate-700">
        新しいパスワード（確認）
        <input
          type="password"
          {...register("confirm")}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
        />
        {errors.confirm ? (
          <span className="text-xs text-rose-700">{errors.confirm.message}</span>
        ) : null}
      </label>
      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-full bg-sky-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-800 disabled:bg-slate-300"
      >
        {isSubmitting ? "変更中…" : "パスワードを変更"}
      </button>
      {message ? <p className="text-sm text-slate-600">{message}</p> : null}
    </form>
  );
}

function PhoneVerification() {
  const { session, refresh } = useAuth();
  const [step, setStep] = useState<"input" | "verify">("input");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const phoneForm = useForm<PhoneChangeInput>({ resolver: zodResolver(phoneChangeSchema) });
  const otpForm = useForm<OtpInput>({ resolver: zodResolver(otpSchema) });

  const verified = Boolean(session?.user?.phone);

  async function sendCode(values: PhoneChangeInput) {
    if (!hasSupabaseEnv || !supabase) return;
    setMessage("");
    const { error } = await supabase.auth.updateUser({ phone: values.phone });
    if (error) {
      setMessage(error.message);
      return;
    }
    setPhone(values.phone);
    setStep("verify");
    setMessage(`${values.phone} 宛に認証コードを送信しました。`);
  }

  async function verifyCode(values: OtpInput) {
    if (!hasSupabaseEnv || !supabase) return;
    setMessage("");
    const { error } = await supabase.auth.verifyOtp({
      phone,
      token: values.token,
      type: "phone_change",
    });
    if (error) {
      setMessage(error.message);
      return;
    }
    setMessage("電話番号の認証が完了しました。");
    setStep("input");
    await refresh();
  }

  if (verified) {
    return (
      <p className="text-sm text-emerald-700">
        電話番号は認証済みです（{session?.user?.phone}）。
      </p>
    );
  }

  if (step === "verify") {
    return (
      <form onSubmit={otpForm.handleSubmit(verifyCode)} className="space-y-3" noValidate>
        <p className="text-sm text-slate-700">{phone} 宛に送信した6桁のコードを入力してください。</p>
        <label className="block text-sm text-slate-700">
          認証コード
          <input
            inputMode="numeric"
            maxLength={6}
            {...otpForm.register("token")}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 tracking-widest"
          />
          {otpForm.formState.errors.token ? (
            <span className="text-xs text-rose-700">
              {otpForm.formState.errors.token.message}
            </span>
          ) : null}
        </label>
        <div className="flex gap-2">
          <button
            type="submit"
            disabled={otpForm.formState.isSubmitting}
            className="rounded-full bg-sky-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-800 disabled:bg-slate-300"
          >
            {otpForm.formState.isSubmitting ? "確認中…" : "認証する"}
          </button>
          <button
            type="button"
            onClick={() => setStep("input")}
            className="rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-600 transition hover:bg-slate-50"
          >
            戻る
          </button>
        </div>
        {message ? <p className="text-sm text-slate-600">{message}</p> : null}
      </form>
    );
  }

  return (
    <form onSubmit={phoneForm.handleSubmit(sendCode)} className="space-y-3" noValidate>
      <label className="block text-sm text-slate-700">
        電話番号（国番号付き）
        <input
          type="tel"
          inputMode="tel"
          placeholder="+819012345678"
          {...phoneForm.register("phone")}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
        />
        {phoneForm.formState.errors.phone ? (
          <span className="text-xs text-rose-700">{phoneForm.formState.errors.phone.message}</span>
        ) : (
          <span className="text-xs text-slate-500">
            SMSで認証コードを送信します。日本は先頭の0を除き +81 を付けます。
          </span>
        )}
      </label>
      <button
        type="submit"
        disabled={phoneForm.formState.isSubmitting}
        className="rounded-full bg-sky-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-800 disabled:bg-slate-300"
      >
        {phoneForm.formState.isSubmitting ? "送信中…" : "認証コードを送信"}
      </button>
      {message ? <p className="text-sm text-slate-600">{message}</p> : null}
    </form>
  );
}

function DeleteAccount() {
  const { session, signOut } = useAuth();
  const router = useRouter();
  const [confirmText, setConfirmText] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  async function onDelete() {
    if (!hasSupabaseEnv || !supabase) return;
    const token = session?.access_token;
    if (!token) {
      setMessage("ログイン情報が確認できませんでした。再度ログインしてください。");
      return;
    }
    const confirmed = window.confirm(
      "アカウントを完全に削除します。この操作は取り消せません。よろしいですか？",
    );
    if (!confirmed) return;

    setBusy(true);
    setMessage("");
    try {
      const res = await fetch("/api/account/delete", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setMessage(data.error ?? "アカウントの削除に失敗しました。");
        setBusy(false);
        return;
      }
      await signOut();
      router.push("/");
      router.refresh();
    } catch {
      setMessage("通信エラーが発生しました。時間をおいて再度お試しください。");
      setBusy(false);
    }
  }

  return (
    <div className="space-y-3">
      <p className="text-sm text-slate-600">
        アカウントを削除すると、プロフィール・投稿・コメントなどの関連データも削除され、復元できません。
      </p>
      <label className="block text-sm text-slate-700">
        確認のため「削除」と入力してください
        <input
          value={confirmText}
          onChange={(event) => setConfirmText(event.target.value)}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
        />
      </label>
      <button
        type="button"
        onClick={onDelete}
        disabled={confirmText !== "削除" || busy}
        className="rounded-full bg-rose-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-700 disabled:cursor-not-allowed disabled:bg-slate-300"
      >
        {busy ? "削除中…" : "アカウントを削除する"}
      </button>
      {message ? <p className="text-sm text-rose-700">{message}</p> : null}
    </div>
  );
}

export function AccountSettings() {
  const { loading, isLoggedIn } = useAuth();

  if (loading) {
    return <p className="text-sm text-slate-500">読み込み中…</p>;
  }

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="space-y-4">
      <Section title="電話番号認証" description="投稿・コメントの信頼性向上のため、電話番号の認証ができます。">
        <PhoneVerification />
      </Section>
      <Section title="メールアドレスの変更">
        <EmailChange />
      </Section>
      <Section title="パスワードの変更">
        <PasswordChange />
      </Section>
      <Section title="アカウントの削除">
        <DeleteAccount />
      </Section>
    </div>
  );
}
