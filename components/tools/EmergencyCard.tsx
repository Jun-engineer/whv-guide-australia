"use client";

import {
  EMERGENCY_CONTACTS,
  EMERGENCY_FIELDS,
} from "@/lib/tools/data/emergency-card";
import { buildEmergencyCardText } from "@/lib/tools/logic/download.mjs";
import { useLocalStorageState } from "@/components/tools/useLocalStorageState";

const CARD_TITLE = "緊急連絡先カード / Emergency Card";

/**
 * 緊急連絡先カード。固定のオーストラリア緊急番号を表示し、本人情報を入力・保存
 * （localStorage）できる。印刷・テキストコピー・.txt ダウンロードに対応。
 * テキスト生成は download.mjs（テスト済み）を再利用。個人情報はサーバー送信しない。
 */
export function EmergencyCard() {
  const [values, setValues, hydrated] = useLocalStorageState<Record<string, string>>(
    "whv-tool-emergency-card",
    {},
  );

  const setField = (id: string, value: string) => {
    setValues((prev) => ({ ...prev, [id]: value }));
  };

  const text = () => buildEmergencyCardText(EMERGENCY_FIELDS, values, EMERGENCY_CONTACTS, {
    title: CARD_TITLE,
  });

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text());
    } catch {
      /* ignore */
    }
  };

  const download = () => {
    const blob = new Blob([text()], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "emergency-card.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Actions */}
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => window.print()}
          className="rounded-xl bg-sky-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
        >
          印刷する
        </button>
        <button
          type="button"
          onClick={download}
          className="rounded-xl border border-sky-700 px-5 py-2.5 text-sm font-semibold text-sky-700 transition hover:bg-sky-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
        >
          .txt でダウンロード
        </button>
        <button
          type="button"
          onClick={copy}
          className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
        >
          テキストをコピー
        </button>
      </div>

      {/* Fixed emergency contacts */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5" aria-label="オーストラリアの主な緊急連絡先">
        <h2 className="text-base font-bold text-slate-800">
          オーストラリアの主な緊急連絡先
        </h2>
        <ul className="mt-3 divide-y divide-slate-100">
          {EMERGENCY_CONTACTS.map((c) => (
            <li key={c.id} className="flex items-baseline justify-between gap-4 py-2">
              <span className="min-w-0">
                <span className="block text-sm font-medium text-slate-800">{c.label}</span>
                {c.note ? <span className="block text-xs text-slate-500">{c.note}</span> : null}
              </span>
              <a
                href={`tel:${c.number.replace(/\s/g, "")}`}
                className="shrink-0 font-mono text-base font-bold text-sky-700 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              >
                {c.number}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Personal info form */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5" aria-label="本人情報の入力">
        <h2 className="text-base font-bold text-slate-800">本人情報（自分用に記入）</h2>
        <p className="mt-1 text-xs text-slate-500">
          入力内容はお使いのブラウザにのみ保存され、サーバーには送信されません。
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {EMERGENCY_FIELDS.map((field) => (
            <div key={field.id} className={field.multiline ? "sm:col-span-2" : undefined}>
              <label
                htmlFor={`ec-${field.id}`}
                className="mb-1 block text-xs font-semibold text-slate-700"
              >
                {field.label}
              </label>
              {field.multiline ? (
                <textarea
                  id={`ec-${field.id}`}
                  value={values[field.id] ?? ""}
                  onChange={(e) => setField(field.id, e.target.value)}
                  rows={2}
                  placeholder={field.placeholder}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 focus:border-sky-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                />
              ) : (
                <input
                  id={`ec-${field.id}`}
                  type="text"
                  value={values[field.id] ?? ""}
                  onChange={(e) => setField(field.id, e.target.value)}
                  placeholder={field.placeholder}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 focus:border-sky-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                />
              )}
            </div>
          ))}
        </div>
        {!hydrated ? (
          <p className="mt-3 text-xs text-slate-400">保存済みの入力を読み込み中…</p>
        ) : null}
      </section>
    </div>
  );
}
