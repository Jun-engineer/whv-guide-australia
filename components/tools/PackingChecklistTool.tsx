"use client";

import { useMemo, useState } from "react";
import { filterItems } from "@/lib/tools/logic/checklist.mjs";
import { ChecklistBoard } from "@/components/tools/ChecklistBoard";
import { PACKING_CHECKLIST_GROUPS, PACKING_FACETS } from "@/lib/tools/data/packing-checklist";
import type { ChecklistGroup } from "@/lib/tools/types";

const ALL = "all";

/**
 * 持ち物チェックリスト。気候・シーズン・仕事で項目を絞り込み、絞り込み後の項目に対して
 * ChecklistBoard を描画する。完了状態は id 単位で保存されるため、絞り込みを変えても
 * すでにチェックした項目は保持される。
 */
export function PackingChecklistTool() {
  const [active, setActive] = useState<Record<string, string>>(() =>
    Object.fromEntries(PACKING_FACETS.map((f) => [f.key, ALL])),
  );

  const anyFilterActive = PACKING_FACETS.some((f) => active[f.key] && active[f.key] !== ALL);

  const filteredGroups: ChecklistGroup[] = useMemo(() => {
    return PACKING_CHECKLIST_GROUPS.map((group) => ({
      ...group,
      items: filterItems(group.items, active),
    })).filter((group) => group.items.length > 0);
  }, [active]);

  const resetFilters = () =>
    setActive(Object.fromEntries(PACKING_FACETS.map((f) => [f.key, ALL])));

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-sky-200 bg-sky-50 p-5" aria-label="持ち物の絞り込み">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-semibold text-sky-900">条件で絞り込む</p>
          {anyFilterActive ? (
            <button
              type="button"
              onClick={resetFilters}
              className="rounded-lg border border-sky-300 px-3 py-1.5 text-xs font-semibold text-sky-700 transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            >
              絞り込みを解除
            </button>
          ) : null}
        </div>
        <div className="mt-3 grid gap-4 sm:grid-cols-3">
          {PACKING_FACETS.map((facet) => (
            <div key={facet.key}>
              <label
                htmlFor={`facet-${facet.key}`}
                className="mb-1 block text-xs font-semibold text-sky-900"
              >
                {facet.label}
              </label>
              <select
                id={`facet-${facet.key}`}
                value={active[facet.key]}
                onChange={(e) =>
                  setActive((prev) => ({ ...prev, [facet.key]: e.target.value }))
                }
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 focus:border-sky-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              >
                <option value={ALL}>すべて</option>
                {facet.options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-sky-800/80">
          条件を選ぶと、その気候・シーズン・仕事に関係する項目だけが表示されます。「すべて」を選ぶとその条件は無効になります。
        </p>
      </section>

      <ChecklistBoard
        storageKey="whv-tool-packing-checklist"
        groups={filteredGroups}
        emptyMessage="条件に合う持ち物がありません。絞り込み条件を変更してください。"
      />
    </div>
  );
}
