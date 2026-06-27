"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/auth/AuthProvider";
import { ReportButton } from "@/components/forum/ReportButton";
import { hasSupabaseEnv, supabase } from "@/lib/supabaseClient";
import type { ForumComment } from "@/types/forum";

type CommentItemProps = {
  comment: ForumComment;
};

export function CommentItem({ comment }: CommentItemProps) {
  const { profile } = useAuth();
  const router = useRouter();
  const [editing, setEditing] = useState(false);
  const [body, setBody] = useState(comment.body);
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  const isOwner = Boolean(profile?.id) && profile.id === comment.userId;

  async function onSave() {
    if (!hasSupabaseEnv || !supabase) return;
    if (body.trim().length === 0) {
      setMessage("コメントを入力してください。");
      return;
    }
    setBusy(true);
    setMessage("");
    const { error } = await supabase
      .from("forum_comments")
      .update({ body, updated_at: new Date().toISOString() })
      .eq("id", comment.id);
    if (error) {
      setMessage("更新できませんでした。");
      setBusy(false);
      return;
    }
    setEditing(false);
    setBusy(false);
    router.refresh();
  }

  async function onDelete() {
    if (!hasSupabaseEnv || !supabase) return;
    const confirmed = window.confirm("このコメントを削除します。よろしいですか？");
    if (!confirmed) return;
    setBusy(true);
    setMessage("");
    const { error } = await supabase.from("forum_comments").delete().eq("id", comment.id);
    if (error) {
      setMessage("削除できませんでした。");
      setBusy(false);
      return;
    }
    setBusy(false);
    router.refresh();
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3">
      {editing ? (
        <div className="space-y-2">
          <textarea
            value={body}
            onChange={(event) => setBody(event.target.value)}
            className="h-24 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
          />
          {message ? <p className="text-xs text-rose-700">{message}</p> : null}
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => void onSave()}
              disabled={busy}
              className="rounded-full bg-sky-700 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-sky-800 disabled:bg-slate-300"
            >
              {busy ? "保存中…" : "保存"}
            </button>
            <button
              type="button"
              onClick={() => {
                setEditing(false);
                setBody(comment.body);
                setMessage("");
              }}
              disabled={busy}
              className="rounded-full border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              キャンセル
            </button>
          </div>
        </div>
      ) : (
        <>
          <p className="text-sm text-slate-700">{comment.body}</p>
          <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
            <span>
              {comment.authorName} / {comment.createdAt}
            </span>
            <div className="flex items-center gap-3">
              {isOwner ? (
                <>
                  <button
                    type="button"
                    onClick={() => setEditing(true)}
                    className="font-semibold text-sky-700 hover:underline"
                  >
                    編集
                  </button>
                  <button
                    type="button"
                    onClick={() => void onDelete()}
                    disabled={busy}
                    className="font-semibold text-rose-600 hover:underline disabled:text-slate-400"
                  >
                    削除
                  </button>
                </>
              ) : null}
              <ReportButton targetType="comment" targetId={comment.id} />
            </div>
          </div>
          {message ? <p className="mt-1 text-xs text-rose-700">{message}</p> : null}
        </>
      )}
    </div>
  );
}
