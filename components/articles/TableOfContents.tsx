import type { ArticleStep } from "@/types/article";

type TableOfContentsProps = {
  steps: ArticleStep[];
};

export function TableOfContents({ steps }: TableOfContentsProps) {
  return (
    <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <h2 className="font-semibold text-slate-900">目次</h2>
      <ol className="mt-3 space-y-2 text-sm text-slate-700">
        {steps.map((step, index) => (
          <li key={step.title}>
            {index + 1}. {step.title}
          </li>
        ))}
      </ol>
    </aside>
  );
}
