/**
 * Pure text-serialization helpers for the download tools. No React/DOM here so
 * they can be unit-tested with `node --test` and reused by the client
 * components (copy / .txt download / print). Rendering and persistence live in
 * the components; only the text-building logic lives here.
 */

/**
 * Build a plain-text version of a grouped checklist, marking checked items.
 *
 * @param {ReadonlyArray<{ title: string, items: ReadonlyArray<{ id: string, label: string, note?: string }> }>} groups
 * @param {Set<string> | ReadonlyArray<string>} checked
 * @param {{ title?: string }} [options]
 * @returns {string}
 */
export function buildChecklistText(groups, checked, options = {}) {
  const done = checked instanceof Set ? checked : new Set(checked ?? []);
  const lines = [];
  if (options.title) {
    lines.push(options.title, "");
  }
  for (const group of groups ?? []) {
    lines.push(`■ ${group.title}`);
    for (const item of group.items ?? []) {
      const mark = done.has(item.id) ? "[x]" : "[ ]";
      lines.push(`${mark} ${item.label}`);
      if (item.note) lines.push(`      - ${item.note}`);
    }
    lines.push("");
  }
  return lines.join("\n").trimEnd() + "\n";
}

/**
 * Build a plain-text emergency card from field definitions, entered values and
 * the fixed emergency contacts.
 *
 * @param {ReadonlyArray<{ id: string, label: string }>} fields
 * @param {Record<string, string>} values
 * @param {ReadonlyArray<{ label: string, number: string, note?: string }>} contacts
 * @param {{ title?: string }} [options]
 * @returns {string}
 */
export function buildEmergencyCardText(fields, values, contacts, options = {}) {
  const safeValues = values ?? {};
  const lines = [];
  lines.push(options.title ?? "緊急連絡先カード / Emergency Card");
  lines.push("");

  lines.push("■ 本人情報 / Personal");
  for (const field of fields ?? []) {
    const value = typeof safeValues[field.id] === "string" ? safeValues[field.id].trim() : "";
    lines.push(`${field.label}: ${value || "-"}`);
  }
  lines.push("");

  lines.push("■ オーストラリアの主な緊急連絡先 / Australia emergency contacts");
  for (const contact of contacts ?? []) {
    lines.push(`${contact.label}: ${contact.number}`);
    if (contact.note) lines.push(`   (${contact.note})`);
  }
  lines.push("");
  lines.push("※ 番号・制度は変わることがあります。緊急時は最新の案内に従ってください。");
  return lines.join("\n").trimEnd() + "\n";
}
