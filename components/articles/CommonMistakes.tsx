type CommonMistakesProps = {
  /** 「よくある間違い」に表示する箇条書き。 */
  mistakes: string[];
};

/**
 * 「よくある間違い」ボックス。つまずきやすいポイントを目立たせる。
 */
export function CommonMistakes({ mistakes }: CommonMistakesProps) {
  if (!mistakes || mistakes.length === 0) return null;
  return (
    <section className="rounded-2xl border border-rose-200 bg-rose-50/60 p-5">
      <h2 className="text-base font-bold text-rose-900">よくある間違い</h2>
      <ul className="mt-3 space-y-2">
        {mistakes.map((item) => (
          <li key={item} className="flex gap-2 text-sm leading-relaxed text-rose-900">
            <span aria-hidden="true" className="mt-0.5 shrink-0">
              ⚠
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
