/**
 * Pure calculation logic for the Second Working Holiday visa 88-day work-day
 * tracker. No React/DOM here so it can be unit-tested with `node --test` and
 * reused by the client component.
 *
 * IMPORTANT: This computes a simple day count from user-entered records. It is
 * NOT an official eligibility decision. Whether specific work, dates, regions
 * or evidence actually qualify for a second/third visa is determined solely by
 * the Department of Home Affairs.
 */

/** Default number of qualifying days required for the second visa application. */
export const SECOND_VISA_TARGET_DAYS = 88;

/**
 * Whether a string is a valid ISO calendar date (YYYY-MM-DD) that refers to a
 * real day (rejects e.g. 2026-02-30).
 *
 * @param {unknown} value
 * @returns {boolean}
 */
export function isValidIsoDate(value) {
  if (typeof value !== "string") return false;
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!m) return false;
  const year = Number(m[1]);
  const month = Number(m[2]);
  const day = Number(m[3]);
  if (month < 1 || month > 12 || day < 1 || day > 31) return false;
  const dt = new Date(Date.UTC(year, month - 1, day));
  return (
    dt.getUTCFullYear() === year &&
    dt.getUTCMonth() === month - 1 &&
    dt.getUTCDate() === day
  );
}

/**
 * Count distinct valid work days from a list of records. A record counts once
 * per calendar date even if it appears multiple times (duplicate protection),
 * matching the official rule that only whole calendar days of specified work
 * are counted.
 *
 * @param {ReadonlyArray<{ date?: string }>} records
 * @returns {number}
 */
export function countWorkDays(records) {
  const dates = new Set();
  for (const record of records ?? []) {
    if (record && isValidIsoDate(record.date)) {
      dates.add(record.date);
    }
  }
  return dates.size;
}

/**
 * Summarise progress toward the target number of qualifying days.
 *
 * @param {ReadonlyArray<{ date?: string, hasEvidence?: boolean }>} records
 * @param {number} [target=SECOND_VISA_TARGET_DAYS]
 * @returns {{
 *   target: number,
 *   worked: number,
 *   remaining: number,
 *   percent: number,
 *   reached: boolean,
 *   evidenceDays: number,
 *   evidencePercent: number,
 * }}
 */
export function summarizeWorkDays(records, target = SECOND_VISA_TARGET_DAYS) {
  const safeTarget = Number.isFinite(target) && target > 0 ? Math.floor(target) : SECOND_VISA_TARGET_DAYS;

  const workedDates = new Set();
  const evidenceDates = new Set();
  for (const record of records ?? []) {
    if (!record || !isValidIsoDate(record.date)) continue;
    workedDates.add(record.date);
    if (record.hasEvidence) evidenceDates.add(record.date);
  }

  const worked = workedDates.size;
  const remaining = Math.max(0, safeTarget - worked);
  const percent = Math.min(100, Math.round((worked / safeTarget) * 100));
  const evidenceDays = evidenceDates.size;
  const evidencePercent = worked === 0 ? 0 : Math.round((evidenceDays / worked) * 100);

  return {
    target: safeTarget,
    worked,
    remaining,
    percent,
    reached: worked >= safeTarget,
    evidenceDays,
    evidencePercent,
  };
}
