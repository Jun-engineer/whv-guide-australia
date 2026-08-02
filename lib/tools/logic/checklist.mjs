/**
 * Pure, data-agnostic helpers for the checklist tools (arrival / packing).
 *
 * These functions contain no React or DOM code so they can be unit-tested with
 * `node --test` and reused by the client components. Rendering and persistence
 * (localStorage) live in the components; only the calculation/filtering logic
 * lives here.
 */

/**
 * Compute completion progress for a checklist.
 *
 * @param {number} total     Total number of (currently visible) items.
 * @param {number} completed Number of completed items among the visible ones.
 * @returns {{ total: number, completed: number, remaining: number, percent: number }}
 */
export function computeProgress(total, completed) {
  const safeTotal = Number.isFinite(total) && total > 0 ? Math.floor(total) : 0;
  const clampedCompleted = Number.isFinite(completed)
    ? Math.min(Math.max(Math.floor(completed), 0), safeTotal)
    : 0;
  const remaining = safeTotal - clampedCompleted;
  const percent = safeTotal === 0 ? 0 : Math.round((clampedCompleted / safeTotal) * 100);
  return { total: safeTotal, completed: clampedCompleted, remaining, percent };
}

/**
 * Count how many of the given item ids are present in the completed set.
 *
 * @param {ReadonlyArray<{ id: string }>} items
 * @param {Set<string> | ReadonlyArray<string>} completed
 * @returns {number}
 */
export function countCompleted(items, completed) {
  const done = completed instanceof Set ? completed : new Set(completed ?? []);
  let n = 0;
  for (const item of items ?? []) {
    if (done.has(item.id)) n += 1;
  }
  return n;
}

/**
 * Decide whether a facetted item matches the active filter selection.
 *
 * An item may declare allowed values per facet (e.g. `{ climate: ["cool"] }`).
 * A facet with no declared values (undefined/empty) is treated as universal and
 * always matches. An active filter value of falsy or "all" disables that facet.
 *
 * @param {{ facets?: Record<string, string[] | undefined> }} item
 * @param {Record<string, string | undefined>} active
 * @returns {boolean}
 */
export function itemMatchesFacets(item, active) {
  const facets = (item && item.facets) || {};
  for (const key of Object.keys(active ?? {})) {
    const value = active[key];
    if (!value || value === "all") continue;
    const allowed = facets[key];
    if (Array.isArray(allowed) && allowed.length > 0 && !allowed.includes(value)) {
      return false;
    }
  }
  return true;
}

/**
 * Filter a flat list of facetted items by the active filter selection.
 *
 * @template {{ facets?: Record<string, string[] | undefined> }} T
 * @param {ReadonlyArray<T>} items
 * @param {Record<string, string | undefined>} active
 * @returns {T[]}
 */
export function filterItems(items, active) {
  return (items ?? []).filter((item) => itemMatchesFacets(item, active));
}
