"use client";

import { useMemo, useState } from "react";
import { filterSeasons } from "@/lib/tools/logic/season.mjs";
import {
  FARM_SEASON_ENTRIES,
  FARM_STATE_OPTIONS,
  MONTH_LABELS,
} from "@/lib/tools/data/farm-seasons";

const ALL = "all";

/**
 * 州・作物・月でファームの繁忙期の目安を検索する。データは lib/tools/data/farm-seasons.ts。
 * 絞り込みロジックは lib/tools/logic/season.mjs（純粋関数・テスト済み）。
 */
export function FarmSeasonSearch() {
  const [state, setState] = useState<string>(ALL);
  const [crop, setCrop] = useState("");
  const [month, setMonth] = useState<string>(ALL);

  const results = useMemo(
    () =>
      filterSeasons(FARM_SEASON_ENTRIES, {
        state,
        crop,
        month: month === ALL ? ALL : Number(month),
      }),
    [state, crop, month],
  );

  const anyFilter = state !== ALL || crop.trim() !== "" || month !== ALL;

  const reset = () => {
    setState(ALL);
    setCrop("");
    setMonth(ALL);
  };

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-sky-200 bg-sky-50 p-5" aria-label="検索条件">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-semibold text-sky-900">条件で検索する</p>
          {anyFilter ? (
            <button
              type="button"
              onClick={reset}
              className="rounded-lg border border-sky-300 px-3 py-1.5 text-xs font-semibold text-sky-700 transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            >
              条件をリセット
            </button>
          ) : null}
        </div>
        <div className="mt-3 grid gap-4 sm:grid-cols-3">
          <div>
            <label htmlFor="season-state" className="mb-1 block text-xs font-semibold text-sky-900">
              州
            </label>
            <select
              id="season-state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 focus:border-sky-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            >
              <option value={ALL}>すべて</option>
              {FARM_STATE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="season-month" className="mb-1 block text-xs font-semibold text-sky-900">
              月
            </label>
            <select
              id="season-month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 focus:border-sky-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            >
              <option value={ALL}>すべて</option>
              {MONTH_LABELS.map((label, i) => (
                <option key={label} value={String(i + 1)}>
                  {label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="season-crop" className="mb-1 block text-xs font-semibold text-sky-900">
              作物名（部分一致）
            </label>
            <input
              id="season-crop"
              type="text"
              value={crop}
              onChange={(e) => setCrop(e.target.value)}
              placeholder="例: いちご / grape"
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 focus:border-sky-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            />
          </div>
        </div>
      </section>

      <section aria-label="検索結果" aria-live="polite">
        <p className="mb-3 text-sm font-semibold text-slate-700">{results.length} 件の結果</p>
        {results.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
            条件に合う結果がありません。条件を変えてお試しください。
          </div>
        ) : (
          <ul className="space-y-3">
            {results.map((entry) => (
              <li key={entry.id} className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-base font-bold text-slate-800">{entry.cropLabel}</p>
                  <span className="rounded-full bg-sky-100 px-2 py-0.5 text-xs font-semibold text-sky-800">
                    {entry.state}
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate-600">産地: {entry.region}</p>
                <p className="mt-1 text-sm text-slate-700">
                  繁忙期の目安:{" "}
                  <span className="font-medium">
                    {entry.months.map((m) => MONTH_LABELS[m - 1]).join("・")}
                  </span>
                </p>
                {entry.note ? <p className="mt-1 text-xs text-slate-500">{entry.note}</p> : null}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
