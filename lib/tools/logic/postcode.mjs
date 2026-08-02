/**
 * Pure logic for the "Specified work regional postcode" checker.
 *
 * No React/DOM here so it can be unit-tested with `node --test` and reused by
 * the client component.
 *
 * IMPORTANT: This only checks whether a postcode falls inside the postcode
 * ranges we have encoded from the officially published "regional Australia"
 * definition. It is NOT an official eligibility decision. Whether specific work
 * actually counts toward a second/third Working Holiday visa depends on the
 * industry, the current rules and the applicant's circumstances, and is
 * determined solely by the Department of Home Affairs.
 */

/**
 * Normalise a user-entered postcode to a 4-digit string, or return null.
 * Accepts values with surrounding whitespace. Australian postcodes are 4 digits
 * (0800–9999, with leading zeros for NT).
 *
 * @param {unknown} value
 * @returns {string | null}
 */
export function normalizePostcode(value) {
  if (typeof value === "number" && Number.isInteger(value)) {
    value = String(value).padStart(4, "0");
  }
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!/^\d{3,4}$/.test(trimmed)) return null;
  const padded = trimmed.padStart(4, "0");
  return padded;
}

/**
 * Whether a normalised postcode string is a plausible Australian postcode.
 *
 * @param {unknown} value
 * @returns {boolean}
 */
export function isValidPostcode(value) {
  const pc = normalizePostcode(value);
  if (pc === null) return false;
  const n = Number(pc);
  return n >= 200 && n <= 9999;
}

/**
 * Find the region entry whose ranges contain the given postcode.
 *
 * @param {string | number} postcode
 * @param {ReadonlyArray<{ state: string, stateLabel: string, ranges: ReadonlyArray<[number, number]> }>} regions
 * @returns {{ state: string, stateLabel: string } | null}
 */
export function findPostcodeRegion(postcode, regions) {
  const pc = normalizePostcode(postcode);
  if (pc === null) return null;
  const n = Number(pc);
  for (const region of regions ?? []) {
    for (const [from, to] of region.ranges ?? []) {
      if (n >= from && n <= to) {
        return { state: region.state, stateLabel: region.stateLabel };
      }
    }
  }
  return null;
}

/**
 * Check a postcode against the regional dataset.
 *
 * @param {string | number} postcode
 * @param {ReadonlyArray<{ state: string, stateLabel: string, ranges: ReadonlyArray<[number, number]> }>} regions
 * @returns {{ valid: boolean, postcode: string | null, inRegional: boolean, region: { state: string, stateLabel: string } | null }}
 */
export function checkPostcode(postcode, regions) {
  const pc = normalizePostcode(postcode);
  if (pc === null || !isValidPostcode(pc)) {
    return { valid: false, postcode: null, inRegional: false, region: null };
  }
  const region = findPostcodeRegion(pc, regions);
  return { valid: true, postcode: pc, inRegional: region !== null, region };
}
