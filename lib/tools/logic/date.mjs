/**
 * Shared date helpers for the tools logic. Pure, no React/DOM, unit-testable
 * with `node --test`.
 */

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
