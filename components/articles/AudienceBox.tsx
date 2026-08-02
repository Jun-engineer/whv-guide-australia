type AudienceBoxProps = {
  /** 「この記事が必要な人」に表示する箇条書き。 */
  audience: string[];
};

/**
 * 「この記事が必要な人」ボックス。読者が自分向けか一目で判断できるようにする。
 */
export function AudienceBox({ audience }: AudienceBoxProps) {
  if (!audience || audience.length === 0) return null;
  return (
    <section className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5">
      <h2 className="text-base font-bold text-emerald-900">この記事が必要な人</h2>
      <ul className="mt-3 space-y-2">
        {audience.map((item) => (
          <li key={item} className="flex gap-2 text-sm leading-relaxed text-emerald-900">
            <span aria-hidden="true" className="mt-0.5 shrink-0">
              👤
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
