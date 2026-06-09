"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, type RegisterInput } from "@/lib/validations";
import { hasSupabaseEnv, supabase } from "@/lib/supabaseClient";

export function RegisterForm() {
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterInput>({ resolver: zodResolver(registerSchema) });

  async function onSubmit(values: RegisterInput) {
    if (!hasSupabaseEnv || !supabase) {
      setMessage("Supabaseの環境変数を設定すると新規登録が有効になります。");
      return;
    }

    const { error } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
      options: {
        data: {
          display_name: values.displayName,
        },
      },
    });

    setMessage(error ? error.message : "登録メールを送信しました。メールを確認してください。");
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
        className="w-full rounded-full bg-sky-700 px-4 py-2 text-white disabled:bg-slate-300"
      >
        {isSubmitting ? "処理中..." : "新規登録"}
      </button>
      {message ? <p className="text-sm text-slate-600">{message}</p> : null}
    </form>
  );
}
