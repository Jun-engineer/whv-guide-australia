"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { feedbackSchema, type FeedbackInput } from "@/lib/validations";
import { hasSupabaseEnv, supabase } from "@/lib/supabaseClient";

const feedbackTypeOptions: Array<{ value: FeedbackInput["type"]; label: string }> = [
  { value: "correction", label: "情報の修正依頼" },
  { value: "article_request", label: "記事リクエスト" },
  { value: "experience", label: "体験談の共有" },
  { value: "question", label: "質問" },
  { value: "other", label: "その他" },
];

export function FeedbackForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverMessage, setServerMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FeedbackInput>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: { type: "article_request", pageUrl: "", title: "", body: "" },
  });

  async function onSubmit(values: FeedbackInput) {
    if (hasSupabaseEnv && supabase) {
      const { error } = await supabase.from("feedback_requests").insert({
        type: values.type,
        page_url: values.pageUrl || null,
        title: values.title,
        body: values.body,
      });
      if (error) {
        setServerMessage(error.message);
        return;
      }
    }

    setSubmitted(true);
    setServerMessage("送信しました。ご協力ありがとうございます。");
    reset();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5"
      noValidate
    >
      <label className="block text-sm text-slate-700">
        種類
        <select
          {...register("type")}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
        >
          {feedbackTypeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>

      <label className="block text-sm text-slate-700">
        対象ページURL（任意）
        <input
          {...register("pageUrl")}
          placeholder="/farm など"
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
        />
        {errors.pageUrl ? <span className="text-xs text-rose-700">{errors.pageUrl.message}</span> : null}
      </label>

      <label className="block text-sm text-slate-700">
        タイトル
        <input
          {...register("title")}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
        />
        {errors.title ? <span className="text-xs text-rose-700">{errors.title.message}</span> : null}
      </label>

      <label className="block text-sm text-slate-700">
        内容
        <textarea
          {...register("body")}
          className="mt-1 h-32 w-full rounded-lg border border-slate-300 px-3 py-2"
        />
        {errors.body ? <span className="text-xs text-rose-700">{errors.body.message}</span> : null}
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-full bg-sky-700 px-4 py-2 text-sm font-semibold text-white disabled:bg-slate-300"
      >
        {isSubmitting ? "送信中..." : "送信する"}
      </button>

      {serverMessage ? (
        <p className={`text-sm ${submitted ? "text-emerald-700" : "text-rose-700"}`}>{serverMessage}</p>
      ) : null}
    </form>
  );
}
