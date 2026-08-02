"use client";

import { useMemo } from "react";
import { HOUSING_INSPECTION_GROUPS } from "@/lib/tools/data/housing-inspection-checklist";
import { computeProgress, countCompleted } from "@/lib/tools/logic/checklist.mjs";
import { buildChecklistText } from "@/lib/tools/logic/download.mjs";
import { useLocalStorageState } from "@/components/tools/useLocalStorageState";

const ALL_ITEMS = HOUSING_INSPECTION_GROUPS.flatMap((g) => g.items);
const CARD_TITLE = "シェアハウス内見チェックリスト";

/**
 * シェアハウス内見チェックリスト。現地でチェックを付けられ（localStorage 保存）、
 * 印刷・テキストコピー・.txt ダウンロードに対応。テキスト生成は download.mjs
 * （テスト済み）を再利用し、進捗は checklist.mjs を再利用する。
 */
export function HousingInspectionChecklist() {
  const [checked, setChecked, hydrated] = useLocalStorageState<string[]>(
    "whv-tool-housing-inspection",
    [],
  );

  const checkedSet = useMemo(() => new Set(checked), [checked]);
  const progress = useMemo(
    () => computeProgress(ALL_ITEMS.length, countCompleted(ALL_ITEMS, checkedSet)),
    [checkedSet],
  );

  const toggle = (id: string) => {
    setChecked((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const text = () =>
    buildChecklistText(HOUSING_INSPECTION_GROUPS, checkedSet, { title: CARD_TITLE });

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
    a.download = "housing-inspection-checklist.txt";
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

      {/* Progress */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5" aria-label="確認の進捗">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-slate-700">確認済み</p>
          <p className="text-sm font-bold text-sky-700" aria-live="polite">
            {progress.completed} / {progress.total}（{progress.percent}%）
          </p>
        </div>
        <div
          className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-slate-100"
          role="progressbar"
          aria-valuenow={progress.percent}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="h-full rounded-full bg-sky-600 transition-all"
            style={{ width: `${progress.percent}%` }}
          />
        </div>
      </section>

      {/* Groups */}
      {HOUSING_INSPECTION_GROUPS.map((group) => (
        <section key={group.id} className="rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="text-base font-bold text-slate-800">{group.title}</h2>
          <ul className="mt-3 space-y-2">
            {group.items.map((item) => (
              <li key={item.id}>
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    checked={checkedSet.has(item.id)}
                    onChange={() => toggle(item.id)}
                    className="mt-0.5 h-5 w-5 shrink-0 rounded border-slate-300 text-sky-600 focus:ring-2 focus:ring-sky-500"
                  />
                  <span className="min-w-0">
                    <span className="block text-sm font-medium text-slate-800">{item.label}</span>
                    {item.note ? (
                      <span className="mt-0.5 block text-xs text-slate-500">{item.note}</span>
                    ) : null}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </section>
      ))}

      {!hydrated ? <p className="text-xs text-slate-400">保存済みの記録を読み込み中…</p> : null}
    </div>
  );
}
