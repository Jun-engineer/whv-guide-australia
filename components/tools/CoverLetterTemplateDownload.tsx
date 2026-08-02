"use client";

import { useState } from "react";
import {
  COVER_LETTER_TEMPLATES,
  COVER_LETTER_SHORT_MESSAGES,
} from "@/lib/tools/data/cover-letter-templates";

/**
 * 職種別の英文カバーレターのひな型（コピー・.txt ダウンロード）と、
 * 応募チャネル別の短文メッセージ（コピー）を提供する。
 * テンプレート本文は lib/tools/data/cover-letter-templates.ts に分離。
 * ファイル生成はブラウザ内（Blob）で完結し、サーバー送信はしない。
 */
export function CoverLetterTemplateDownload() {
  const [activeId, setActiveId] = useState(COVER_LETTER_TEMPLATES[0]!.id);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const active = COVER_LETTER_TEMPLATES.find((t) => t.id === activeId) ?? COVER_LETTER_TEMPLATES[0]!;

  const copyText = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      window.setTimeout(() => setCopiedId((prev) => (prev === id ? null : prev)), 2000);
    } catch {
      setCopiedId(null);
    }
  };

  const download = () => {
    const blob = new Blob([active.body], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${active.fileBaseName}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-8">
      <section className="space-y-5">
        <h2 className="text-lg font-bold text-slate-800">職種別カバーレター</h2>

        {/* Job type tabs */}
        <div role="tablist" aria-label="職種の選択" className="flex flex-wrap gap-2">
          {COVER_LETTER_TEMPLATES.map((t) => {
            const selected = t.id === activeId;
            return (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveId(t.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 ${
                  selected ? "bg-sky-700 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => copyText(active.id, active.body)}
            className="rounded-xl bg-sky-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
          >
            {copiedId === active.id ? "コピーしました ✓" : "テキストをコピー"}
          </button>
          <button
            type="button"
            onClick={download}
            className="rounded-xl border border-sky-700 px-5 py-2.5 text-sm font-semibold text-sky-700 transition hover:bg-sky-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
          >
            .txt でダウンロード
          </button>
        </div>

        {/* Preview */}
        <div>
          <label htmlFor="cover-preview" className="mb-1 block text-xs font-semibold text-slate-600">
            プレビュー（{active.label}）
          </label>
          <textarea
            id="cover-preview"
            value={active.body}
            readOnly
            rows={20}
            className="w-full whitespace-pre rounded-2xl border border-slate-200 bg-slate-50 p-4 font-mono text-xs leading-relaxed text-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            aria-label={`${active.label} の英文カバーレターひな型`}
          />
          <p className="mt-2 text-xs text-slate-500">
            [ ] の部分は自分の情報に置き換えてください。これはひな型（記入例）であり、そのまま提出するためのものではありません。
          </p>
        </div>
      </section>

      {/* Short channel messages */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-slate-800">応募チャネル別の短文</h2>
        <p className="text-sm text-slate-600">
          メール返信・店頭・SNS・応募フォームなど、場面別の短いメッセージです。コピーして使ってください。
        </p>
        <ul className="space-y-4">
          {COVER_LETTER_SHORT_MESSAGES.map((m) => (
            <li key={m.id} className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-sm font-bold text-slate-800">{m.label}</h3>
                <button
                  type="button"
                  onClick={() => copyText(m.id, m.body)}
                  className="shrink-0 rounded-lg border border-sky-700 px-3 py-1.5 text-xs font-semibold text-sky-700 transition hover:bg-sky-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                >
                  {copiedId === m.id ? "コピー済み ✓" : "コピー"}
                </button>
              </div>
              <pre className="mt-2 whitespace-pre-wrap font-mono text-xs leading-relaxed text-slate-700">
                {m.body}
              </pre>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
