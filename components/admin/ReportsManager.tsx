"use client";

import { useCallback, useEffect, useState } from "react";
import type { ReportStatus, ReportTargetType } from "@/types/report";
import { hasSupabaseEnv, supabase } from "@/lib/supabaseClient";

type ReportRow = {
  id: string;
  reporter_id: string | null;
  target_type: ReportTargetType;
  target_id: string;
  reason: string;
  status: ReportStatus;
  created_at: string;
};

const statusLabel: Record<ReportStatus, string> = {
  pending: "未対応",
  in_progress: "対応中",
  resolved: "解決済み",
  rejected: "却下",
};

const targetTypeLabel: Record<ReportTargetType, string> = {
  post: "投稿",
  comment: "コメント",
  user: "ユーザー",
};

export function ReportsManager() {
  const hasDb = hasSupabaseEnv && Boolean(supabase);
  const [reports, setReports] = useState<ReportRow[]>([]);
  const [loading, setLoading] = useState(hasDb);
  const [error, setError] = useState(hasDb ? "" : "Supabaseが未設定のため通報を取得できません。");
  const [busyId, setBusyId] = useState<string | null>(null);

  useEffect(() => {
    if (!hasDb || !supabase) return;
    let active = true;
    supabase
      .from("reports")
      .select("id, reporter_id, target_type, target_id, reason, status, created_at")
      .order("created_at", { ascending: false })
      .then(({ data, error: fetchError }) => {
        if (!active) return;
        if (fetchError) {
          setError(fetchError.message);
        } else {
          setReports((data as ReportRow[]) ?? []);
          setError("");
        }
        setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [hasDb]);

  const updateStatus = useCallback(
    async (id: string, status: ReportStatus) => {
      if (!supabase) return;
      setBusyId(id);
      const { error: updErr } = await supabase
        .from("reports")
        .update({ status, resolved_at: status === "resolved" ? new Date().toISOString() : null })
        .eq("id", id);
      if (!updErr) {
        setReports((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)));
      } else {
        setError(updErr.message);
      }
      setBusyId(null);
    },
    [],
  );

  const hideTarget = useCallback(
    async (report: ReportRow) => {
      if (!supabase) return;
      if (report.target_type === "user") return;
      setBusyId(report.id);
      const table = report.target_type === "post" ? "forum_posts" : "forum_comments";
      const { error: hideErr } = await supabase
        .from(table)
        .update({ is_hidden: true })
        .eq("id", report.target_id);
      if (hideErr) {
        setError(hideErr.message);
      } else {
        await updateStatus(report.id, "resolved");
      }
      setBusyId(null);
    },
    [updateStatus],
  );

  const banUser = useCallback(
    async (report: ReportRow) => {
      if (!supabase) return;
      if (report.target_type !== "user") {
        setError("ユーザーBANは『ユーザー』通報に対してのみ実行できます。");
        return;
      }
      const confirmed = window.confirm(
        "このユーザーを利用停止（BAN）します。登録電話番号も再登録ブロック対象になります。よろしいですか？",
      );
      if (!confirmed) return;
      setBusyId(report.id);
      const { error: banErr } = await supabase
        .from("profiles")
        .update({ status: "banned" })
        .eq("id", report.target_id);
      if (banErr) {
        setError(banErr.message);
      } else {
        await updateStatus(report.id, "resolved");
      }
      setBusyId(null);
    },
    [updateStatus],
  );

  if (loading) {
    return <p className="text-sm text-slate-500">読み込み中…</p>;
  }

  return (
    <div className="space-y-3">
      {error ? <p className="text-sm text-rose-700">{error}</p> : null}
      {reports.length === 0 ? (
        <p className="text-sm text-slate-600">通報はありません。</p>
      ) : (
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="px-4 py-3">対象</th>
                <th className="px-4 py-3">理由</th>
                <th className="px-4 py-3">状態</th>
                <th className="px-4 py-3">操作</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report.id} className="border-t border-slate-100 align-top">
                  <td className="px-4 py-3">
                    <div className="font-medium text-slate-800">
                      {targetTypeLabel[report.target_type]}
                    </div>
                    <div className="text-xs text-slate-400">{report.target_id}</div>
                  </td>
                  <td className="px-4 py-3 max-w-xs whitespace-pre-wrap text-slate-700">
                    {report.reason}
                  </td>
                  <td className="px-4 py-3">{statusLabel[report.status]}</td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-2">
                      {report.target_type !== "user" ? (
                        <button
                          type="button"
                          disabled={busyId === report.id}
                          onClick={() => hideTarget(report)}
                          className="rounded-full border border-slate-300 px-2 py-1 text-xs disabled:opacity-50"
                        >
                          非表示にする
                        </button>
                      ) : (
                        <button
                          type="button"
                          disabled={busyId === report.id}
                          onClick={() => banUser(report)}
                          className="rounded-full border border-rose-300 px-2 py-1 text-xs text-rose-700 disabled:opacity-50"
                        >
                          ユーザーをBAN
                        </button>
                      )}
                      <button
                        type="button"
                        disabled={busyId === report.id}
                        onClick={() => updateStatus(report.id, "resolved")}
                        className="rounded-full border border-emerald-300 px-2 py-1 text-xs text-emerald-700 disabled:opacity-50"
                      >
                        解決済み
                      </button>
                      <button
                        type="button"
                        disabled={busyId === report.id}
                        onClick={() => updateStatus(report.id, "rejected")}
                        className="rounded-full border border-slate-300 px-2 py-1 text-xs text-slate-600 disabled:opacity-50"
                      >
                        却下
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
