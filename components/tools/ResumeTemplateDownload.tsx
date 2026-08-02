"use client";

import { useState } from "react";
import { RESUME_TEMPLATES } from "@/lib/tools/data/resume-templates";

/**
 * 職種別の英文レジュメのひな型をコピー・ダウンロードできる。
 * テンプレート本文は lib/tools/data/resume-templates.ts に分離。
 * ファイル生成はブラウザ内（Blob）で完結し、サーバー送信はしない。
 */
export function ResumeTemplateDownload() {
  const [activeId, setActiveId] = useState(RESUME_TEMPLATES[0]!.id);
  const [copied, setCopied] = useState(false);

  const active = RESUME_TEMPLATES.find((t) => t.id === activeId) ?? RESUME_TEMPLATES[0]!;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(active.body);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
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
    <div className="space-y-5">
      {/* Job type tabs */}
      <div role="tablist" aria-label="職種の選択" className="flex flex-wrap gap-2">
        {RESUME_TEMPLATES.map((t) => {
          const selected = t.id === activeId;
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActiveId(t.id)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 ${
                selected
                  ? "bg-sky-700 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
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
          onClick={copy}
          className="rounded-xl bg-sky-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
        >
          {copied ? "コピーしました ✓" : "テキストをコピー"}
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
        <label htmlFor="resume-preview" className="mb-1 block text-xs font-semibold text-slate-600">
          プレビュー（{active.label}）
        </label>
        <textarea
          id="resume-preview"
          value={active.body}
          readOnly
          rows={22}
          className="w-full whitespace-pre rounded-2xl border border-slate-200 bg-slate-50 p-4 font-mono text-xs leading-relaxed text-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          aria-label={`${active.label} の英文レジュメひな型`}
        />
        <p className="mt-2 text-xs text-slate-500">
          [ ] の部分は自分の情報に置き換えてください。これはひな型（記入例）であり、そのまま
          提出するためのものではありません。
        </p>
      </div>
    </div>
  );
}
