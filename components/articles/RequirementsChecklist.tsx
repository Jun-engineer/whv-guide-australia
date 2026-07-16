type RequirementItem = {
  label: string;
  note?: string;
};

type RequirementsChecklistProps = {
  title?: string;
  items: RequirementItem[];
};

/**
 * 必要書類・持ち物・条件などのチェックリスト。
 */
export function RequirementsChecklist({
  title = "必要なもの",
  items,
}: RequirementsChecklistProps) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6">
      <h2 className="text-base font-bold text-slate-900">{title}</h2>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item.label} className="flex gap-2 text-sm text-slate-700">
            <span aria-hidden className="mt-0.5 text-emerald-600">
              ☑
            </span>
            <span>
              <span className="font-semibold text-slate-900">{item.label}</span>
              {item.note ? (
                <span className="block text-xs text-slate-500">{item.note}</span>
              ) : null}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
