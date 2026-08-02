/**
 * Pure logic for the farm season (harvest calendar) search tool.
 *
 * No React/DOM here so it can be unit-tested with `node --test` and reused by
 * the client component. The dataset lives in lib/tools/data/farm-seasons.ts.
 *
 * NOTE: Harvest timing is a general seasonal guide only. Actual availability of
 * work varies year to year with weather and demand; users should confirm with
 * employers and the official Harvest Trail Information Service.
 */

/**
 * Whether a month number (1-12) is within an entry's active months.
 *
 * @param {{ months?: ReadonlyArray<number> }} entry
 * @param {number} month 1-12
 * @returns {boolean}
 */
export function monthInSeason(entry, month) {
  if (!Number.isInteger(month) || month < 1 || month > 12) return false;
  const months = (entry && entry.months) || [];
  return months.includes(month);
}

/**
 * Normalise a free-text search term for case-insensitive matching.
 *
 * @param {unknown} value
 * @returns {string}
 */
export function normalizeQuery(value) {
  return typeof value === "string" ? value.trim().toLowerCase() : "";
}

/**
 * Filter harvest entries by state, crop text and month.
 *
 * All filters are optional. A falsy or "all" filter is ignored. The crop query
 * matches against the crop label and any search keywords (case-insensitive,
 * substring).
 *
 * @template {{ state: string, cropLabel: string, keywords?: ReadonlyArray<string>, months?: ReadonlyArray<number> }} T
 * @param {ReadonlyArray<T>} entries
 * @param {{ state?: string, crop?: string, month?: number | "all" }} [filters]
 * @returns {T[]}
 */
export function filterSeasons(entries, filters = {}) {
  const state = filters.state && filters.state !== "all" ? filters.state : null;
  const query = normalizeQuery(filters.crop);
  const month =
    filters.month && filters.month !== "all" && Number.isInteger(filters.month)
      ? filters.month
      : null;

  return (entries ?? []).filter((entry) => {
    if (state && entry.state !== state) return false;
    if (month && !monthInSeason(entry, month)) return false;
    if (query) {
      const haystack = [entry.cropLabel, ...(entry.keywords ?? [])]
        .join(" ")
        .toLowerCase();
      if (!haystack.includes(query)) return false;
    }
    return true;
  });
}
