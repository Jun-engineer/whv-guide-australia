"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/components/auth/AuthProvider";
import { PhoneVerification } from "@/components/auth/PhoneVerification";
import { hasSupabaseEnv, supabase } from "@/lib/supabaseClient";
import {
  emailChangeSchema,
  type EmailChangeInput,
  passwordChangeSchema,
  type PasswordChangeInput,
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

function DeleteAccount() {
  const { session, signOut } = useAuth();
  const router = useRouter();
  const [confirmText, setConfirmText] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  async function onDelete() {
    if (!hasSupabaseEnv || !supabase) return;
    const token = session?.access_token;
    const email = session?.user?.email;
    if (!token || !email) {
      setMessage("ログイン情報が確認できませんでした。再度ログインしてください。");
      return;
    }
    const confirmed = window.confirm(
      "アカウントを完全に削除します。この操作は取り消せません。よろしいですか？",
    );
    if (!confirmed) return;

    setBusy(true);
    setMessage("");

    // 本人確認: 入力されたパスワードで再認証する
    const { error: reauthError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (reauthError) {
      setMessage("パスワードが正しくありません。");
      setBusy(false);
      return;
    }

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
        確認のため現在のパスワードを入力してください
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
        />
      </label>
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
        disabled={confirmText !== "削除" || password.length === 0 || busy}
        className="rounded-full bg-rose-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-700 disabled:cursor-not-allowed disabled:bg-slate-300"
      >
        {busy ? "削除中…" : "アカウントを削除する"}
      </button>
      {message ? <p className="text-sm text-rose-700">{message}</p> : null}
    </div>
  );
}

export function AccountSettings() {
  const { loading, isLoggedIn, emailVerified, phoneVerified, isVerified } = useAuth();

  if (loading) {
    return <p className="text-sm text-slate-500">読み込み中…</p>;
  }

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="space-y-4">
      {!isVerified ? (
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          <p className="font-semibold">本人確認を完了してください</p>
          <p className="mt-1">
            投稿・コメント・いいねなどの機能は、メールアドレスと電話番号の両方の認証完了後にご利用いただけます。
          </p>
          <ul className="mt-2 space-y-1">
            <li>{emailVerified ? "✅" : "⬜"} メールアドレス認証</li>
            <li>{phoneVerified ? "✅" : "⬜"} 電話番号認証</li>
          </ul>
        </div>
      ) : (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
          本人確認が完了しています。すべての機能をご利用いただけます。
        </div>
      )}
      <Section title="電話番号認証" description="投稿・コメントなどの機能を利用するには電話番号の認証が必要です。">
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
