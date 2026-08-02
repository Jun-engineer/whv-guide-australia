"use client";

import { useMemo } from "react";
import { computeProgress, countCompleted } from "@/lib/tools/logic/checklist.mjs";
import { useLocalStorageState } from "@/components/tools/useLocalStorageState";
import type { ChecklistGroup } from "@/lib/tools/types";

type ChecklistBoardProps = {
  /** ローカルストレージのキー（ツールごとに一意）。 */
  storageKey: string;
  /** 表示するグループ（絞り込み後の可視項目を渡す）。 */
  groups: ChecklistGroup[];
  /** 可視項目が0件のときのメッセージ。 */
  emptyMessage?: string;
};

/**
 * 汎用チェックリスト。完了状態を id 単位でローカルストレージに保存し、可視項目に対する
 * 進捗を表示する。到着後チェックリスト・持ち物チェックリストで共用。
 */
export function ChecklistBoard({ storageKey, groups, emptyMessage }: ChecklistBoardProps) {
  const [completed, setCompleted, hydrated] = useLocalStorageState<string[]>(storageKey, []);
  const completedSet = useMemo(() => new Set(completed), [completed]);

  const visibleItems = useMemo(() => groups.flatMap((g) => g.items), [groups]);
  const total = visibleItems.length;
  const done = countCompleted(visibleItems, completedSet);
  const progress = computeProgress(total, done);

  const toggle = (id: string) => {
    setCompleted((prev) => {
      const set = new Set(prev);
      if (set.has(id)) set.delete(id);
      else set.add(id);
      return Array.from(set);
    });
  };

  const resetVisible = () => {
    setCompleted((prev) => prev.filter((id) => !visibleItems.some((item) => item.id === id)));
  };

  if (total === 0) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
        {emptyMessage ?? "条件に合う項目がありません。絞り込み条件を変更してください。"}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-semibold text-slate-700">
            進捗：{progress.completed} / {progress.total} 件（{progress.percent}%）
          </p>
          <button
            type="button"
            onClick={resetVisible}
            className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          >
            表示中の項目をリセット
          </button>
        </div>
        <div
          className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-slate-100"
          role="progressbar"
          aria-valuenow={progress.percent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="チェックリストの完了率"
        >
          <div
            className="h-full rounded-full bg-emerald-500 transition-all"
            style={{ width: `${progress.percent}%` }}
          />
        </div>
        <p className="sr-only" aria-live="polite">
          {progress.completed} / {progress.total} 件完了、残り {progress.remaining} 件。
        </p>
        {!hydrated ? (
          <p className="mt-2 text-xs text-slate-400">保存済みの状態を読み込み中…</p>
        ) : null}
      </div>

      {groups.map((group) => (
        <fieldset key={group.id} className="rounded-2xl border border-slate-200 bg-white p-5">
          <legend className="px-1 text-base font-bold text-slate-800">{group.title}</legend>
          <ul className="mt-2 space-y-1">
            {group.items.map((item) => {
              const checked = completedSet.has(item.id);
              return (
                <li key={item.id}>
                  <label
                    className={`flex cursor-pointer items-start gap-3 rounded-xl px-3 py-3 transition hover:bg-slate-50 ${
                      checked ? "text-slate-400" : "text-slate-700"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggle(item.id)}
                      className="mt-0.5 h-5 w-5 shrink-0 rounded border-slate-300 text-emerald-600 focus:ring-sky-500"
                    />
                    <span className="min-w-0">
                      <span className={`block text-sm font-medium ${checked ? "line-through" : ""}`}>
                        {item.label}
                      </span>
                      {item.note ? (
                        <span className="mt-0.5 block text-xs text-slate-500">{item.note}</span>
                      ) : null}
                    </span>
                  </label>
                </li>
              );
            })}
          </ul>
        </fieldset>
      ))}
    </div>
  );
}
