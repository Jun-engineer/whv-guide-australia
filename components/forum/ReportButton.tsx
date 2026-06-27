"use client";

import { useState } from "react";
import { REPORT_REASONS, type ReportTargetType } from "@/types/report";
import { useAuth } from "@/components/auth/AuthProvider";
import { hasSupabaseEnv, supabase } from "@/lib/supabaseClient";
import { sendNotification } from "@/lib/notify";

type ReportButtonProps = {
  targetType: ReportTargetType;
  targetId: string;
  label?: string;
  // 対象の作成者ID。ログイン中ユーザーが本人なら通報ボタンを表示しない。
  authorId?: string;
};

const targetLabel: Record<ReportTargetType, string> = {
  post: "投稿",
  comment: "コメント",
  user: "ユーザー",
};

export function ReportButton({ targetType, targetId, label, authorId }: ReportButtonProps) {
  const { profile } = useAuth();
  const [open, setOpen] = useState(false);
  const [reason, setReason] = useState<string>(REPORT_REASONS[0]);
  const [detail, setDetail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [message, setMessage] = useState("");

  // 自分自身（自分の投稿・コメント・自分自身）は通報できないようにする
  const isOwnTarget = Boolean(authorId) && profile?.id === authorId;
  if (isOwnTarget) {
    return null;
  }

  async function submit() {
    if (!reason) {
      setMessage("通報理由を選択してください。");
      return;
    }
    setStatus("sending");
    setMessage("");

    const combinedReason = detail ? `${reason}: ${detail}` : reason;

    if (!hasSupabaseEnv || !supabase) {
      // 環境未設定でも操作確認できるようにフィードバックを返す
      await sendNotification({
        kind: "report",
        targetType,
        targetId,
        reason: combinedReason,
      });
      setStatus("done");
      setMessage("通報を受け付けました。運営が確認します。ご協力ありがとうございます。");
      return;
    }

    const {
      data: { session },
    } = await supabase.auth.getSession();

    const { error } = await supabase.from("reports").insert({
      reporter_id: session?.user?.id ?? null,
      target_type: targetType,
      target_id: targetId,
      reason: combinedReason,
      status: "pending",
    });

    if (error) {
      setStatus("idle");
      setMessage("送信に失敗しました。時間をおいて再度お試しください。");
      return;
    }

    await sendNotification({
      kind: "report",
      targetType,
      targetId,
      reason: combinedReason,
    });

    setStatus("done");
    setMessage("通報を受け付けました。運営が確認します。ご協力ありがとうございます。");
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-full border border-rose-300 px-3 py-1 text-xs font-semibold text-rose-700 transition hover:bg-rose-50"
        aria-label={`${targetLabel[targetType]}を通報`}
      >
        {label ?? "通報"}
      </button>
    );
  }

  return (
    <div className="w-full max-w-sm rounded-xl border border-rose-200 bg-rose-50 p-3 text-left">
      {status === "done" ? (
        <p className="text-xs text-rose-800">{message}</p>
      ) : (
        <>
          <p className="text-xs font-semibold text-rose-900">{targetLabel[targetType]}を通報</p>
          <label className="mt-2 block text-xs text-slate-700">
            理由
            <select
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-2 py-1 text-xs"
            >
              {REPORT_REASONS.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </label>
          <label className="mt-2 block text-xs text-slate-700">
            詳細（任意）
            <textarea
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
              rows={2}
              maxLength={1000}
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-2 py-1 text-xs"
              placeholder="具体的な状況があればご記入ください。"
            />
          </label>
          {message ? <p className="mt-1 text-xs text-rose-700">{message}</p> : null}
          <div className="mt-2 flex gap-2">
            <button
              type="button"
              onClick={submit}
              disabled={status === "sending"}
              className="rounded-full bg-rose-600 px-3 py-1 text-xs font-semibold text-white transition hover:bg-rose-700 disabled:bg-slate-300"
            >
              {status === "sending" ? "送信中..." : "通報する"}
            </button>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full border border-slate-300 px-3 py-1 text-xs text-slate-600 transition hover:bg-white"
            >
              キャンセル
            </button>
          </div>
        </>
      )}
    </div>
  );
}
