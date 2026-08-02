"use client";

import { useState } from "react";
import { checkPostcode } from "@/lib/tools/logic/postcode.mjs";
import {
  POSTCODE_REGIONS,
  POSTCODE_DATA_VERIFIED_AT,
} from "@/lib/tools/data/specified-work-postcodes";

type CheckResult = ReturnType<typeof checkPostcode>;

/**
 * 郵便番号を入力して、公表されている「地域（regional Australia）」の郵便番号範囲に
 * 含まれるかを確認する。ビザの可否・指定業務の該当性は判定しない（参照用）。
 */
export function SpecifiedWorkRegionChecker() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<CheckResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const check = () => {
    const res = checkPostcode(input, POSTCODE_REGIONS);
    if (!res.valid) {
      setError("4桁の郵便番号を入力してください（例: 4655）。");
      setResult(null);
      return;
    }
    setError(null);
    setResult(res);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    check();
  };

  return (
    <div className="space-y-6">
      <form
        onSubmit={onSubmit}
        className="rounded-2xl border border-slate-200 bg-white p-5"
        aria-label="郵便番号の確認"
      >
        <label htmlFor="postcode" className="mb-1 block text-sm font-semibold text-slate-700">
          郵便番号（Postcode）
        </label>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            id="postcode"
            type="text"
            inputMode="numeric"
            autoComplete="postal-code"
            maxLength={4}
            value={input}
            onChange={(e) => setInput(e.target.value.replace(/[^\d]/g, ""))}
            placeholder="例: 4655"
            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-700 focus:border-sky-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 sm:max-w-[200px]"
            aria-describedby={error ? "postcode-error" : undefined}
          />
          <button
            type="submit"
            className="rounded-xl bg-sky-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
          >
            確認する
          </button>
        </div>
        {error ? (
          <p id="postcode-error" role="alert" className="mt-3 text-sm font-medium text-red-600">
            {error}
          </p>
        ) : null}
      </form>

      <div aria-live="polite">
        {result && result.valid ? (
          result.inRegional ? (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm font-bold text-emerald-800">
                郵便番号 {result.postcode} は、公表されている「地域（regional
                Australia）」の範囲に含まれます。
              </p>
              {result.region ? (
                <p className="mt-1 text-sm text-emerald-900">対象エリア: {result.region.stateLabel}</p>
              ) : null}
              <p className="mt-3 text-xs text-emerald-900/80">
                ただし、この結果は「地域の範囲に含まれる」ことを示すだけで、指定業務（specified
                work）の該当やビザの可否を意味しません。対象業務・要件は必ず公式でご確認ください。
              </p>
            </div>
          ) : (
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-900">
                郵便番号 {result.postcode}{" "}
                は、掲載している「地域」の郵便番号範囲には見つかりませんでした。
              </p>
              <p className="mt-3 text-xs text-amber-900/80">
                これは「対象外」を意味するものではありません。掲載データは目安であり、制度改定や範囲の更新が
                あり得ます。対象かどうかは必ず移民局（Department of Home Affairs）の公式情報でご確認ください。
              </p>
            </div>
          )
        ) : null}
      </div>

      <p className="text-xs text-slate-500">
        郵便番号データの確認日: {POSTCODE_DATA_VERIFIED_AT}
      </p>
    </div>
  );
}
