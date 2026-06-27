"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/auth/AuthProvider";
import { hasSupabaseEnv, supabase } from "@/lib/supabaseClient";

type PostActionsProps = {
  postId: string;
  authorId: string;
  initialTitle: string;
  initialBody: string;
};

export function PostActions({ postId, authorId, initialTitle, initialBody }: PostActionsProps) {
  const { profile } = useAuth();
  const router = useRouter();
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(initialTitle);
  const [body, setBody] = useState(initialBody);
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  const isOwner = Boolean(profile?.id) && profile.id === authorId;
  if (!isOwner) return null;

  async function onSave() {
    if (!hasSupabaseEnv || !supabase) return;
    if (title.trim().length === 0 || body.trim().length === 0) {
      setMessage("タイトルと本文を入力してください。");
      return;
    }
    setBusy(true);
    setMessage("");
    const { error } = await supabase
      .from("forum_posts")
      .update({ title, body, updated_at: new Date().toISOString(), edited_at: new Date().toISOString() })
      .eq("id", postId);
    if (error) {
      setMessage("更新できませんでした。時間をおいて再度お試しください。");
      setBusy(false);
      return;
    }
    setEditing(false);
    setBusy(false);
    router.refresh();
  }

  async function onDelete() {
    if (!hasSupabaseEnv || !supabase) return;
    const confirmed = window.confirm("この投稿を削除します。よろしいですか？（取り消せません）");
    if (!confirmed) return;
    setBusy(true);
    setMessage("");
    const { error } = await supabase.from("forum_posts").delete().eq("id", postId);
    if (error) {
      setMessage("削除できませんでした。時間をおいて再度お試しください。");
      setBusy(false);
      return;
    }
    router.push("/community");
    router.refresh();
  }

  if (editing) {
    return (
      <div className="mt-4 space-y-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="タイトル"
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
        />
        <textarea
          value={body}
          onChange={(event) => setBody(event.target.value)}
          placeholder="本文"
          className="h-32 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
        />
        {message ? <p className="text-sm text-rose-700">{message}</p> : null}
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => void onSave()}
            disabled={busy}
            className="rounded-full bg-sky-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-800 disabled:bg-slate-300"
          >
            {busy ? "保存中…" : "保存"}
          </button>
          <button
            type="button"
            onClick={() => {
              setEditing(false);
              setTitle(initialTitle);
              setBody(initialBody);
              setMessage("");
            }}
            disabled={busy}
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-white"
          >
            キャンセル
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4 flex items-center gap-3 text-sm">
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
      {message ? <span className="text-rose-700">{message}</span> : null}
    </div>
  );
}
