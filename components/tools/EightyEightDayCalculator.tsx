"use client";

import { useMemo, useState } from "react";
import {
  isValidIsoDate,
  summarizeWorkDays,
  SECOND_VISA_TARGET_DAYS,
} from "@/lib/tools/logic/second-visa.mjs";
import { useLocalStorageState } from "@/components/tools/useLocalStorageState";

type WorkDayRecord = {
  id: string;
  date: string;
  hasEvidence: boolean;
  note?: string;
};

function makeId(): string {
  return `wd-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

/**
 * セカンドビザ88日カウンター。ユーザーが入力した勤務日を記録し、88日に対する進捗と
 * 証拠書類の有無を集計する。ビザの可否・業務や地域の該当性は判定しない（記録専用）。
 */
export function EightyEightDayCalculator() {
  const [records, setRecords, hydrated] = useLocalStorageState<WorkDayRecord[]>(
    "whv-tool-88-day-records",
    [],
  );

  const [date, setDate] = useState("");
  const [hasEvidence, setHasEvidence] = useState(false);
  const [note, setNote] = useState("");
  const [error, setError] = useState<string | null>(null);

  const sorted = useMemo(
    () => [...records].sort((a, b) => a.date.localeCompare(b.date)),
    [records],
  );

  const summary = useMemo(() => summarizeWorkDays(records), [records]);

  const addRecord = () => {
    if (!date) {
      setError("日付を入力してください。");
      return;
    }
    if (!isValidIsoDate(date)) {
      setError("正しい日付を入力してください（例: 2026-08-02）。");
      return;
    }
    if (records.some((r) => r.date === date)) {
      setError("その日付はすでに記録されています。1日は1回のみカウントされます。");
      return;
    }
    setRecords((prev) => [
      ...prev,
      { id: makeId(), date, hasEvidence, note: note.trim() || undefined },
    ]);
    setDate("");
    setHasEvidence(false);
    setNote("");
    setError(null);
  };

  const removeRecord = (id: string) => {
    setRecords((prev) => prev.filter((r) => r.id !== id));
  };

  const clearAll = () => {
    if (records.length === 0) return;
    setRecords([]);
    setError(null);
  };

  return (
    <div className="space-y-6">
      {/* Summary */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5" aria-label="集計">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-emerald-50 p-4 text-center">
            <p className="text-xs font-semibold text-emerald-800">記録した勤務日数</p>
            <p className="mt-1 text-3xl font-extrabold text-emerald-700">{summary.worked}</p>
            <p className="text-xs text-emerald-800/80">日</p>
          </div>
          <div className="rounded-xl bg-sky-50 p-4 text-center">
            <p className="text-xs font-semibold text-sky-800">目標まで残り</p>
            <p className="mt-1 text-3xl font-extrabold text-sky-700">{summary.remaining}</p>
            <p className="text-xs text-sky-800/80">日（目標 {summary.target} 日）</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4 text-center">
            <p className="text-xs font-semibold text-amber-800">証拠あり</p>
            <p className="mt-1 text-3xl font-extrabold text-amber-700">{summary.evidenceDays}</p>
            <p className="text-xs text-amber-800/80">日（{summary.evidencePercent}%）</p>
          </div>
        </div>
        <div
          className="mt-4 h-2.5 w-full overflow-hidden rounded-full bg-slate-100"
          role="progressbar"
          aria-valuenow={summary.percent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`88日に対する進捗 ${summary.percent}%`}
        >
          <div
            className="h-full rounded-full bg-emerald-500 transition-all"
            style={{ width: `${summary.percent}%` }}
          />
        </div>
        <p className="mt-2 text-sm text-slate-600" aria-live="polite">
          {summary.reached
            ? `記録上は目標の ${summary.target} 日に到達しています。ただしビザの可否は移民局が判断します。`
            : `88日まであと ${summary.remaining} 日（記録上の日数）。`}
        </p>
      </section>

      {/* Add form */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5" aria-label="勤務日の追加">
        <h2 className="text-base font-bold text-slate-800">勤務日を記録する</h2>
        <div className="mt-3 grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="wd-date" className="mb-1 block text-xs font-semibold text-slate-700">
              勤務日
            </label>
            <input
              id="wd-date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 focus:border-sky-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              aria-describedby={error ? "wd-error" : undefined}
            />
          </div>
          <div>
            <label htmlFor="wd-note" className="mb-1 block text-xs font-semibold text-slate-700">
              メモ（任意・農園名や作業内容など）
            </label>
            <input
              id="wd-note"
              type="text"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              maxLength={60}
              placeholder="例: ○○ファーム いちご収穫"
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 focus:border-sky-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            />
          </div>
        </div>
        <label className="mt-3 flex cursor-pointer items-center gap-2 text-sm text-slate-700">
          <input
            type="checkbox"
            checked={hasEvidence}
            onChange={(e) => setHasEvidence(e.target.checked)}
            className="h-5 w-5 rounded border-slate-300 text-emerald-600 focus:ring-sky-500"
          />
          この日の証拠（Payslip・銀行入金・契約など）を保有している
        </label>

        {error ? (
          <p id="wd-error" role="alert" className="mt-3 text-sm font-medium text-red-600">
            {error}
          </p>
        ) : null}

        <button
          type="button"
          onClick={addRecord}
          className="mt-4 rounded-xl bg-sky-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
        >
          記録に追加
        </button>
      </section>

      {/* Records list */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5" aria-label="記録一覧">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-base font-bold text-slate-800">記録した日（{summary.worked}日）</h2>
          {records.length > 0 ? (
            <button
              type="button"
              onClick={clearAll}
              className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            >
              すべて削除
            </button>
          ) : null}
        </div>

        {records.length === 0 ? (
          <p className="mt-3 text-sm text-slate-500">
            {hydrated
              ? "まだ記録がありません。上のフォームから勤務日を追加してください。"
              : "保存済みの記録を読み込み中…"}
          </p>
        ) : (
          <ul className="mt-3 divide-y divide-slate-100">
            {sorted.map((record) => (
              <li key={record.id} className="flex items-center justify-between gap-3 py-3">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-slate-800">
                    <time dateTime={record.date}>{record.date}</time>
                    {record.hasEvidence ? (
                      <span className="ml-2 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                        証拠あり
                      </span>
                    ) : (
                      <span className="ml-2 rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-500">
                        証拠未登録
                      </span>
                    )}
                  </p>
                  {record.note ? (
                    <p className="mt-0.5 truncate text-xs text-slate-500">{record.note}</p>
                  ) : null}
                </div>
                <button
                  type="button"
                  onClick={() => removeRecord(record.id)}
                  className="shrink-0 rounded-lg px-2 py-1 text-xs font-semibold text-red-600 transition hover:bg-red-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
                  aria-label={`${record.date} の記録を削除`}
                >
                  削除
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
