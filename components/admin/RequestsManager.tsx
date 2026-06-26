"use client";

import { useCallback, useEffect, useState } from "react";
import type { FeedbackStatus, FeedbackType } from "@/types/feedback";
import { hasSupabaseEnv, supabase } from "@/lib/supabaseClient";

type RequestRow = {
  id: string;
  type: FeedbackType;
  page_url: string | null;
  title: string;
  body: string;
  status: FeedbackStatus;
  created_at: string;
};

const statusLabel: Record<FeedbackStatus, string> = {
  pending: "未対応",
  in_progress: "対応中",
  resolved: "解決済み",
  rejected: "却下",
};

const typeLabel: Record<FeedbackType, string> = {
  correction: "修正依頼",
  article_request: "記事リクエスト",
  experience: "体験談",
  question: "質問",
  other: "その他",
};

export function RequestsManager() {
  const hasDb = hasSupabaseEnv && Boolean(supabase);
  const [requests, setRequests] = useState<RequestRow[]>([]);
  const [loading, setLoading] = useState(hasDb);
  const [error, setError] = useState(hasDb ? "" : "Supabaseが未設定のためリクエストを取得できません。");
  const [busyId, setBusyId] = useState<string | null>(null);

  useEffect(() => {
    if (!hasDb || !supabase) return;
    let active = true;
    supabase
      .from("feedback_requests")
      .select("id, type, page_url, title, body, status, created_at")
      .order("created_at", { ascending: false })
      .then(({ data, error: fetchError }) => {
        if (!active) return;
        if (fetchError) {
          setError(fetchError.message);
        } else {
          setRequests((data as RequestRow[]) ?? []);
          setError("");
        }
        setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [hasDb]);

  const updateStatus = useCallback(async (id: string, status: FeedbackStatus) => {
    if (!supabase) return;
    setBusyId(id);
    const { error: updErr } = await supabase
      .from("feedback_requests")
      .update({ status })
      .eq("id", id);
    if (!updErr) {
      setRequests((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)));
    } else {
      setError(updErr.message);
    }
    setBusyId(null);
  }, []);

  if (loading) {
    return <p className="text-sm text-slate-500">読み込み中…</p>;
  }

  return (
    <div className="space-y-3">
      {error ? <p className="text-sm text-rose-700">{error}</p> : null}
      {requests.length === 0 ? (
        <p className="text-sm text-slate-600">リクエストはありません。</p>
      ) : (
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="px-4 py-3">種類</th>
                <th className="px-4 py-3">内容</th>
                <th className="px-4 py-3">状態</th>
                <th className="px-4 py-3">操作</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr key={request.id} className="border-t border-slate-100 align-top">
                  <td className="px-4 py-3 whitespace-nowrap">{typeLabel[request.type]}</td>
                  <td className="px-4 py-3 max-w-md">
                    <div className="font-medium text-slate-800">{request.title}</div>
                    <div className="mt-1 whitespace-pre-wrap text-xs text-slate-600">
                      {request.body}
                    </div>
                    {request.page_url ? (
                      <div className="mt-1 text-xs text-slate-400">{request.page_url}</div>
                    ) : null}
                  </td>
                  <td className="px-4 py-3">{statusLabel[request.status]}</td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        disabled={busyId === request.id}
                        onClick={() => updateStatus(request.id, "in_progress")}
                        className="rounded-full border border-slate-300 px-2 py-1 text-xs disabled:opacity-50"
                      >
                        対応中
                      </button>
                      <button
                        type="button"
                        disabled={busyId === request.id}
                        onClick={() => updateStatus(request.id, "resolved")}
                        className="rounded-full border border-emerald-300 px-2 py-1 text-xs text-emerald-700 disabled:opacity-50"
                      >
                        解決
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
