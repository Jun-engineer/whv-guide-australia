"use client";

import { useMemo } from "react";
import { computeBudget } from "@/lib/tools/logic/budget.mjs";
import { useLocalStorageState } from "@/components/tools/useLocalStorageState";

type BudgetInputs = {
  rent: string;
  transport: string;
  food: string;
  phone: string;
  other: string;
  noIncomeWeeks: string;
  upfront: string;
};

const DEFAULT_INPUTS: BudgetInputs = {
  rent: "",
  transport: "",
  food: "",
  phone: "",
  other: "",
  noIncomeWeeks: "",
  upfront: "",
};

const WEEKLY_FIELDS: { key: keyof BudgetInputs; label: string; hint?: string }[] = [
  { key: "rent", label: "家賃（週）", hint: "シェアハウス等の1週間の家賃" },
  { key: "transport", label: "交通費（週）" },
  { key: "food", label: "食費（週）" },
  { key: "phone", label: "通信費（週）", hint: "SIM・ネットなど" },
  { key: "other", label: "その他（週）", hint: "娯楽・日用品など" },
];

function formatAud(n: number): string {
  return `A$${n.toLocaleString("en-AU")}`;
}

/**
 * 週の生活費と、無収入期間・初期費用をふまえた必要貯金額の目安を計算する。
 * 計算ロジックは lib/tools/logic/budget.mjs（純粋関数・テスト済み）。金融アドバイスではない。
 */
export function WeeklyBudgetCalculator() {
  const [inputs, setInputs, hydrated] = useLocalStorageState<BudgetInputs>(
    "whv-tool-weekly-budget",
    DEFAULT_INPUTS,
  );

  const result = useMemo(() => computeBudget(inputs), [inputs]);

  const update = (key: keyof BudgetInputs, value: string) => {
    const clean = value.replace(/[^\d.]/g, "");
    setInputs((prev) => ({ ...prev, [key]: clean }));
  };

  const reset = () => setInputs(DEFAULT_INPUTS);

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-slate-200 bg-white p-5" aria-label="支出の入力">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-base font-bold text-slate-800">1週間の支出（A$）</h2>
          <button
            type="button"
            onClick={reset}
            className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          >
            リセット
          </button>
        </div>
        <div className="mt-3 grid gap-4 sm:grid-cols-2">
          {WEEKLY_FIELDS.map((field) => (
            <div key={field.key}>
              <label
                htmlFor={`budget-${field.key}`}
                className="mb-1 block text-xs font-semibold text-slate-700"
              >
                {field.label}
              </label>
              <input
                id={`budget-${field.key}`}
                type="text"
                inputMode="decimal"
                value={inputs[field.key]}
                onChange={(e) => update(field.key, e.target.value)}
                placeholder="0"
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 focus:border-sky-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              />
              {field.hint ? <p className="mt-0.5 text-xs text-slate-400">{field.hint}</p> : null}
            </div>
          ))}
        </div>

        <h2 className="mt-6 text-base font-bold text-slate-800">貯金の計算（任意）</h2>
        <div className="mt-3 grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="budget-noIncomeWeeks"
              className="mb-1 block text-xs font-semibold text-slate-700"
            >
              無収入で過ごす期間（週）
            </label>
            <input
              id="budget-noIncomeWeeks"
              type="text"
              inputMode="numeric"
              value={inputs.noIncomeWeeks}
              onChange={(e) => update("noIncomeWeeks", e.target.value)}
              placeholder="例: 8"
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 focus:border-sky-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            />
            <p className="mt-0.5 text-xs text-slate-400">仕事が決まるまでの想定期間など</p>
          </div>
          <div>
            <label
              htmlFor="budget-upfront"
              className="mb-1 block text-xs font-semibold text-slate-700"
            >
              初期費用（A$・一時金）
            </label>
            <input
              id="budget-upfront"
              type="text"
              inputMode="decimal"
              value={inputs.upfront}
              onChange={(e) => update("upfront", e.target.value)}
              placeholder="例: 2000"
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 focus:border-sky-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            />
            <p className="mt-0.5 text-xs text-slate-400">ボンド（敷金）・家具・SIM など</p>
          </div>
        </div>
        {!hydrated ? <p className="mt-3 text-xs text-slate-400">保存済みの入力を読み込み中…</p> : null}
      </section>

      <section
        className="rounded-2xl border border-slate-200 bg-white p-5"
        aria-label="計算結果"
        aria-live="polite"
      >
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-sky-50 p-4 text-center">
            <p className="text-xs font-semibold text-sky-800">週の生活費</p>
            <p className="mt-1 text-2xl font-extrabold text-sky-700">{formatAud(result.weekly)}</p>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4 text-center">
            <p className="text-xs font-semibold text-cyan-800">月の生活費（目安）</p>
            <p className="mt-1 text-2xl font-extrabold text-cyan-700">{formatAud(result.monthly)}</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-center">
            <p className="text-xs font-semibold text-emerald-800">必要な貯金の目安</p>
            <p className="mt-1 text-2xl font-extrabold text-emerald-700">
              {formatAud(result.requiredSavings)}
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm text-slate-600">
          {result.noIncomeWeeks > 0
            ? `週 ${formatAud(result.weekly)} × 無収入 ${result.noIncomeWeeks} 週 ＋ 初期費用 ${formatAud(result.upfront)} ＝ ${formatAud(result.requiredSavings)} が目安です。`
            : "無収入期間と初期費用を入力すると、必要な貯金の目安を計算します。"}
        </p>
      </section>
    </div>
  );
}
