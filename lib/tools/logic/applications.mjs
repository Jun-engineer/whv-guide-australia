/**
 * Pure logic for the job application tracker. No React/DOM here so it can be
 * unit-tested with `node --test` and reused by the client component.
 */

/** Ordered application statuses used by the tracker. */
export const APPLICATION_STATUSES = [
  { value: "applied", label: "応募済み" },
  { value: "contacted", label: "連絡あり" },
  { value: "interview", label: "面接" },
  { value: "offer", label: "採用" },
  { value: "rejected", label: "不採用" },
];

const STATUS_VALUES = new Set(APPLICATION_STATUSES.map((s) => s.value));

/** Statuses that count as still "in progress" (not a final rejection). */
const ACTIVE_STATUSES = new Set(["applied", "contacted", "interview"]);

/**
 * Summarise a list of application records by status.
 *
 * @param {ReadonlyArray<{ status?: string }>} records
 * @returns {{
 *   total: number,
 *   active: number,
 *   offers: number,
 *   rejected: number,
 *   byStatus: Record<string, number>,
 * }}
 */
export function summarizeApplications(records) {
  const byStatus = Object.fromEntries(APPLICATION_STATUSES.map((s) => [s.value, 0]));
  let total = 0;
  let active = 0;

  for (const record of records ?? []) {
    const status = record && STATUS_VALUES.has(record.status) ? record.status : "applied";
    byStatus[status] += 1;
    total += 1;
    if (ACTIVE_STATUSES.has(status)) active += 1;
  }

  return {
    total,
    active,
    offers: byStatus.offer,
    rejected: byStatus.rejected,
    byStatus,
  };
}

/**
 * Sort applications by applied date (newest first). Records without a valid
 * date sort to the end. Does not mutate the input.
 *
 * @template {{ appliedDate?: string }} T
 * @param {ReadonlyArray<T>} records
 * @returns {T[]}
 */
export function sortApplications(records) {
  return [...(records ?? [])].sort((a, b) => {
    const da = typeof a.appliedDate === "string" ? a.appliedDate : "";
    const db = typeof b.appliedDate === "string" ? b.appliedDate : "";
    if (da === db) return 0;
    if (!da) return 1;
    if (!db) return -1;
    return db.localeCompare(da);
  });
}
