/**
 * Pure logic for the weekly budget / required savings simulator.
 *
 * No React/DOM here so it can be unit-tested with `node --test` and reused by
 * the client component.
 *
 * This is a personal budgeting estimate only. It is NOT financial advice and
 * does not reflect any official cost figures.
 */

/** Weeks per month used to convert weekly totals to a monthly figure. */
export const WEEKS_PER_MONTH = 52 / 12;

/**
 * Coerce a user input to a non-negative finite number (defaults to 0).
 *
 * @param {unknown} value
 * @returns {number}
 */
export function toAmount(value) {
  const n = typeof value === "string" ? Number(value) : value;
  if (typeof n !== "number" || !Number.isFinite(n) || n < 0) return 0;
  return n;
}

/**
 * Coerce a user input to a non-negative integer (defaults to 0).
 *
 * @param {unknown} value
 * @returns {number}
 */
export function toWholeNumber(value) {
  return Math.floor(toAmount(value));
}

/**
 * Compute a weekly budget and the savings required to cover a period without
 * income (plus one-off upfront costs such as bond and initial setup).
 *
 * @param {{
 *   rent?: number | string,
 *   transport?: number | string,
 *   food?: number | string,
 *   phone?: number | string,
 *   other?: number | string,
 *   noIncomeWeeks?: number | string,
 *   upfront?: number | string,
 * }} inputs
 * @returns {{
 *   weekly: number,
 *   monthly: number,
 *   noIncomeWeeks: number,
 *   upfront: number,
 *   requiredSavings: number,
 *   breakdown: { rent: number, transport: number, food: number, phone: number, other: number },
 * }}
 */
export function computeBudget(inputs = {}) {
  const breakdown = {
    rent: toAmount(inputs.rent),
    transport: toAmount(inputs.transport),
    food: toAmount(inputs.food),
    phone: toAmount(inputs.phone),
    other: toAmount(inputs.other),
  };
  const weekly =
    breakdown.rent +
    breakdown.transport +
    breakdown.food +
    breakdown.phone +
    breakdown.other;
  const monthly = Math.round(weekly * WEEKS_PER_MONTH);
  const noIncomeWeeks = toWholeNumber(inputs.noIncomeWeeks);
  const upfront = toAmount(inputs.upfront);
  const requiredSavings = Math.round(weekly * noIncomeWeeks + upfront);

  return {
    weekly: Math.round(weekly),
    monthly,
    noIncomeWeeks,
    upfront: Math.round(upfront),
    requiredSavings,
    breakdown,
  };
}
