"use client";

import { useMemo, useState } from "react";
import {
  APPLICATION_STATUSES,
  summarizeApplications,
  sortApplications,
} from "@/lib/tools/logic/applications.mjs";
import { isValidIsoDate } from "@/lib/tools/logic/date.mjs";
import { useLocalStorageState } from "@/components/tools/useLocalStorageState";

type Application = {
  id: string;
  company: string;
  role: string;
  appliedDate: string;
  status: string;
  note?: string;
};

function makeId(): string {
  return `app-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

const STATUS_LABEL = Object.fromEntries(
  APPLICATION_STATUSES.map((s) => [s.value, s.label]),
) as Record<string, string>;

/**
 * 仕事の応募状況を記録・管理する。会社・職種・応募日・進捗（連絡/面接/結果）を保存し、
 * ステータス別に集計する。集計ロジックは lib/tools/logic/applications.mjs（テスト済み）。
 */
export function JobApplicationTracker() {
  const [apps, setApps, hydrated] = useLocalStorageState<Application[]>(
    "whv-tool-job-applications",
    [],
  );

  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [appliedDate, setAppliedDate] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState<string | null>(null);

  const sorted = useMemo(() => sortApplications(apps), [apps]);
  const summary = useMemo(() => summarizeApplications(apps), [apps]);

  const addApp = () => {
    if (!company.trim()) {
      setError("会社名を入力してください。");
      return;
    }
    if (appliedDate && !isValidIsoDate(appliedDate)) {
      setError("応募日は正しい日付を入力してください（例: 2026-08-02）。");
      return;
    }
    setApps((prev) => [
      ...prev,
      {
        id: makeId(),
        company: company.trim(),
        role: role.trim(),
        appliedDate,
        status: "applied",
        note: note.trim() || undefined,
      },
    ]);
    setCompany("");
    setRole("");
    setAppliedDate("");
    setNote("");
    setError(null);
  };

  const updateStatus = (id: string, status: string) => {
    setApps((prev) => prev.map((a) => (a.id === id ? { ...a, status } : a)));
  };

  const removeApp = (id: string) => {
    setApps((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Summary */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5" aria-label="集計">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-xl bg-slate-50 p-3 text-center">
            <p className="text-xs font-semibold text-slate-600">応募数</p>
            <p className="mt-1 text-2xl font-extrabold text-slate-800">{summary.total}</p>
          </div>
          <div className="rounded-xl bg-sky-50 p-3 text-center">
            <p className="text-xs font-semibold text-sky-700">進行中</p>
            <p className="mt-1 text-2xl font-extrabold text-sky-700">{summary.active}</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-3 text-center">
            <p className="text-xs font-semibold text-emerald-700">採用</p>
            <p className="mt-1 text-2xl font-extrabold text-emerald-700">{summary.offers}</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-3 text-center">
            <p className="text-xs font-semibold text-slate-500">不採用</p>
            <p className="mt-1 text-2xl font-extrabold text-slate-500">{summary.rejected}</p>
          </div>
        </div>
      </section>

      {/* Add form */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5" aria-label="応募の追加">
        <h2 className="text-base font-bold text-slate-800">応募を追加する</h2>
        <div className="mt-3 grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="app-company" className="mb-1 block text-xs font-semibold text-slate-700">
              会社名・店名
            </label>
            <input
              id="app-company"
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              maxLength={80}
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 focus:border-sky-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              aria-describedby={error ? "app-error" : undefined}
            />
          </div>
          <div>
            <label htmlFor="app-role" className="mb-1 block text-xs font-semibold text-slate-700">
              職種（任意）
            </label>
            <input
              id="app-role"
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              maxLength={80}
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 focus:border-sky-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            />
          </div>
          <div>
            <label htmlFor="app-date" className="mb-1 block text-xs font-semibold text-slate-700">
              応募日（任意）
            </label>
            <input
              id="app-date"
              type="date"
              value={appliedDate}
              onChange={(e) => setAppliedDate(e.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 focus:border-sky-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            />
          </div>
          <div>
            <label htmlFor="app-note" className="mb-1 block text-xs font-semibold text-slate-700">
              メモ（任意）
            </label>
            <input
              id="app-note"
              type="text"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              maxLength={100}
              placeholder="連絡先・面接メモなど"
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 focus:border-sky-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            />
          </div>
        </div>
        {error ? (
          <p id="app-error" role="alert" className="mt-3 text-sm font-medium text-red-600">
            {error}
          </p>
        ) : null}
        <button
          type="button"
          onClick={addApp}
          className="mt-4 rounded-xl bg-sky-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
        >
          応募を追加
        </button>
      </section>

      {/* List */}
      <section className="rounded-2xl border border-slate-200 bg-white p-5" aria-label="応募一覧">
        <h2 className="text-base font-bold text-slate-800">応募一覧（{summary.total}件）</h2>
        {apps.length === 0 ? (
          <p className="mt-3 text-sm text-slate-500">
            {hydrated
              ? "まだ応募がありません。上のフォームから追加してください。"
              : "保存済みの記録を読み込み中…"}
          </p>
        ) : (
          <ul className="mt-3 space-y-3">
            {sorted.map((app) => (
              <li key={app.id} className="rounded-xl border border-slate-200 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-slate-800">{app.company}</p>
                    {app.role ? <p className="text-xs text-slate-600">{app.role}</p> : null}
                    {app.appliedDate ? (
                      <p className="mt-0.5 text-xs text-slate-500">
                        応募日: <time dateTime={app.appliedDate}>{app.appliedDate}</time>
                      </p>
                    ) : null}
                    {app.note ? <p className="mt-1 text-xs text-slate-500">{app.note}</p> : null}
                  </div>
                  <button
                    type="button"
                    onClick={() => removeApp(app.id)}
                    className="shrink-0 rounded-lg px-2 py-1 text-xs font-semibold text-red-600 transition hover:bg-red-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
                    aria-label={`${app.company} の応募を削除`}
                  >
                    削除
                  </button>
                </div>
                <div className="mt-3">
                  <label
                    htmlFor={`status-${app.id}`}
                    className="mb-1 block text-xs font-semibold text-slate-600"
                  >
                    進捗（{STATUS_LABEL[app.status] ?? "応募済み"}）
                  </label>
                  <select
                    id={`status-${app.id}`}
                    value={app.status}
                    onChange={(e) => updateStatus(app.id, e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 focus:border-sky-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 sm:max-w-[220px]"
                  >
                    {APPLICATION_STATUSES.map((s) => (
                      <option key={s.value} value={s.value}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
