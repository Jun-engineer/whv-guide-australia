import type { ArticleFact } from "@/types/article";

type KeyFactsProps = {
  facts: ArticleFact[];
};

export function KeyFacts({ facts }: KeyFactsProps) {
  if (facts.length === 0) {
    return null;
  }

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6">
      <h2 className="text-lg font-bold text-slate-900">この記事の要点</h2>
      <dl className="mt-4 divide-y divide-slate-100">
        {facts.map((fact) => (
          <div key={fact.label} className="flex flex-col gap-1 py-3 sm:flex-row sm:gap-4">
            <dt className="shrink-0 text-sm font-semibold text-sky-700 sm:w-40">{fact.label}</dt>
            <dd className="text-sm text-slate-700">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
