"use client";

import { useMemo } from "react";
import { FARM_EVIDENCE_GROUPS } from "@/lib/tools/data/farm-evidence";
import { computeProgress, countCompleted } from "@/lib/tools/logic/checklist.mjs";
import { useLocalStorageState } from "@/components/tools/useLocalStorageState";

const ALL_ITEMS = FARM_EVIDENCE_GROUPS.flatMap((g) => g.items);

/**
 * セカンドビザの証拠書類の「保有状況」を種類別に記録する。
 * 各項目の保有チェックと任意メモを端末に保存し、揃い具合を集計する。
 * 集計は checklist.mjs（テスト済み）を再利用。ビザの可否は保証しない。
 */
export function FarmEvidenceTracker() {
  const [held, setHeld, hydrated] = useLocalStorageState<string[]>(
    "whv-tool-farm-evidence",
    [],
  );
  const [notes, setNotes] = useLocalStorageState<Record<string, string>>(
    "whv-tool-farm-evidence-notes",
    {},
  );

  const heldSet = useMemo(() => new Set(held), [held]);
  const progress = useMemo(
    () => computeProgress(ALL_ITEMS.length, countCompleted(ALL_ITEMS, heldSet)),
    [heldSet],
  );

  const toggle = (id: string) => {
    setHeld((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const setNote = (id: string, value: string) => {
    setNotes((prev) => {
      const next = { ...prev };
      if (value.trim()) next[id] = value;
      else delete next[id];
      return next;
    });
  };

  return (
    <div className="space-y-6">
      {/* Coverage */}
      <section
        className="rounded-2xl border border-slate-200 bg-white p-5"
        aria-label="証拠書類の揃い具合"
      >
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-slate-700">記録した書類</p>
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
        <p className="mt-3 text-xs text-slate-500">
          このパーセントは「記録した書類の割合」を示すだけです。ビザの承認や証拠の十分性を
          示すものではありません。
        </p>
      </section>

      {/* Groups */}
      {FARM_EVIDENCE_GROUPS.map((group) => (
        <section key={group.id} className="rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="text-base font-bold text-slate-800">{group.title}</h2>
          <ul className="mt-3 space-y-3">
            {group.items.map((item) => {
              const checked = heldSet.has(item.id);
              return (
                <li key={item.id} className="rounded-xl border border-slate-200 p-3">
                  <label className="flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox"
                      checked={checked}
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
                  <div className="mt-2 pl-8">
                    <label
                      htmlFor={`note-${item.id}`}
                      className="mb-1 block text-xs font-semibold text-slate-600"
                    >
                      メモ（任意）
                    </label>
                    <input
                      id={`note-${item.id}`}
                      type="text"
                      value={notes[item.id] ?? ""}
                      onChange={(e) => setNote(item.id, e.target.value)}
                      maxLength={120}
                      placeholder="保管場所・期間・雇用主名など"
                      className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 focus:border-sky-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      ))}

      {!hydrated ? (
        <p className="text-xs text-slate-400">保存済みの記録を読み込み中…</p>
      ) : null}
    </div>
  );
}
