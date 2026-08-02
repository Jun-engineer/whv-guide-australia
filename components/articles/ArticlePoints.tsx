type ArticlePointsProps = {
  /** 「この記事のポイント」に表示する箇条書き。 */
  points: string[];
};

/**
 * 記事の要点をまとめた「この記事のポイント」カード。
 * 3〜5項目程度でスキャンしやすくする。
 */
export function ArticlePoints({ points }: ArticlePointsProps) {
  if (!points || points.length === 0) return null;
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5">
      <h2 className="text-base font-bold text-slate-900">この記事のポイント</h2>
      <ul className="mt-3 space-y-2">
        {points.map((point) => (
          <li key={point} className="flex gap-2 text-sm leading-relaxed text-slate-700">
            <span aria-hidden="true" className="mt-0.5 shrink-0 text-sky-600">
              ✓
            </span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
