"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/components/auth/AuthProvider";
import { hasSupabaseEnv, supabase } from "@/lib/supabaseClient";
import {
  phoneChangeSchema,
  type PhoneChangeInput,
  otpSchema,
  type OtpInput,
} from "@/lib/validations";

type PhoneVerificationProps = {
  onVerified?: () => void;
};

export function PhoneVerification({ onVerified }: PhoneVerificationProps) {
  const { session, phoneVerified, refresh } = useAuth();
  const [step, setStep] = useState<"input" | "verify">("input");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // 新規登録フォームで入力した電話番号（メタデータ）を初期値に使う
  const metadataPhone =
    (session?.user?.user_metadata?.phone as string | undefined) ?? "";

  const phoneForm = useForm<PhoneChangeInput>({
    resolver: zodResolver(phoneChangeSchema),
    defaultValues: { phone: metadataPhone },
  });
  const otpForm = useForm<OtpInput>({ resolver: zodResolver(otpSchema) });

  useEffect(() => {
    if (metadataPhone) {
      phoneForm.setValue("phone", metadataPhone);
    }
  }, [metadataPhone, phoneForm]);

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
    setMessage(`${values.phone} 宛にSMSで認証コードを送信しました。`);
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
    onVerified?.();
  }

  if (phoneVerified) {
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
            <span className="text-xs text-rose-700">{otpForm.formState.errors.token.message}</span>
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
            SMSで認証コードを送信します。日本は先頭の0を除き +81 を付けます（例: 090-1234-5678 → +819012345678）。
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
