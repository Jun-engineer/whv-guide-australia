import type { ArticleStep } from "@/types/article";

type StepBlockProps = {
  step: ArticleStep;
  index: number;
};

export function StepBlock({ step, index }: StepBlockProps) {
  return (
    <section className="rounded-2xl border border-sky-100 bg-sky-50/60 p-4">
      <p className="text-xs font-bold uppercase tracking-wide text-sky-700">Step {index + 1}</p>
      <h3 className="mt-1 text-lg font-semibold text-slate-900">{step.title}</h3>
      <p className="mt-2 text-sm text-slate-700">{step.description}</p>
    </section>
  );
}
