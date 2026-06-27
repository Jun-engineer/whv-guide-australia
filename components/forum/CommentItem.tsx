"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/auth/AuthProvider";
import { ReportButton } from "@/components/forum/ReportButton";
import { CommentForm } from "@/components/forum/CommentForm";
import { hasSupabaseEnv, supabase } from "@/lib/supabaseClient";
import type { ForumCommentNode } from "@/types/forum";

type CommentItemProps = {
  node: ForumCommentNode;
  postId: string;
  depth?: number;
};

export function CommentItem({ node, postId, depth = 0 }: CommentItemProps) {
  const { profile, canAct } = useAuth();
  const router = useRouter();
  const [editing, setEditing] = useState(false);
  const [body, setBody] = useState(node.body);
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [replying, setReplying] = useState(false);
  const [showReplies, setShowReplies] = useState(false);

  const isOwner = Boolean(profile?.id) && profile.id === node.userId;
  const replyCount = node.replies.length;
  // 返信は1段までインデントし、それ以降はフラットに寄せる
  const canNest = depth < 1;

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
      .update({ body, updated_at: new Date().toISOString(), edited_at: new Date().toISOString() })
      .eq("id", node.id);
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
    const confirmed = window.confirm(
      replyCount > 0
        ? "このコメントと返信をすべて削除します。よろしいですか？"
        : "このコメントを削除します。よろしいですか？",
    );
    if (!confirmed) return;
    setBusy(true);
    setMessage("");
    const { error } = await supabase.from("forum_comments").delete().eq("id", node.id);
    if (error) {
      setMessage("削除できませんでした。");
      setBusy(false);
      return;
    }
    setBusy(false);
    router.refresh();
  }

  return (
    <div className={depth > 0 ? "border-l-2 border-slate-100 pl-4" : ""}>
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
                  setBody(node.body);
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
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="font-semibold text-slate-700">{node.authorName}</span>
              <span>{node.createdAt}</span>
              {node.editedAt ? <span className="text-slate-400">（編集済み）</span> : null}
            </div>
            <p className="mt-1 whitespace-pre-wrap text-sm text-slate-700">{node.body}</p>
            <div className="mt-2 flex flex-wrap items-center gap-3 text-xs">
              {canAct ? (
                <button
                  type="button"
                  onClick={() => setReplying((prev) => !prev)}
                  className="font-semibold text-slate-600 hover:text-sky-700"
                >
                  返信
                </button>
              ) : null}
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
              <ReportButton targetType="comment" targetId={node.id} authorId={node.userId} />
            </div>
            {message ? <p className="mt-1 text-xs text-rose-700">{message}</p> : null}
          </>
        )}
      </div>

      {replying ? (
        <div className="mt-2">
          <CommentForm
            postId={postId}
            parentId={node.id}
            compact
            placeholder={`${node.authorName} さんへ返信`}
            submitLabel="返信する"
            onPosted={() => {
              setReplying(false);
              setShowReplies(true);
            }}
          />
        </div>
      ) : null}

      {replyCount > 0 ? (
        <div className="mt-2">
          <button
            type="button"
            onClick={() => setShowReplies((prev) => !prev)}
            className="flex items-center gap-1 text-xs font-semibold text-sky-700 hover:underline"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className={`h-4 w-4 transition-transform ${showReplies ? "rotate-180" : ""}`}
              aria-hidden="true"
            >
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            {showReplies ? "返信を非表示" : `返信 ${replyCount} 件を表示`}
          </button>

          {showReplies ? (
            <div className="mt-2 space-y-2">
              {node.replies.map((reply) => (
                <CommentItem
                  key={reply.id}
                  node={reply}
                  postId={postId}
                  depth={canNest ? depth + 1 : depth}
                />
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
