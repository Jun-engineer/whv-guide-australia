import type { ArticleFaq } from "@/types/article";

type FaqListProps = {
  faqs: ArticleFaq[];
};

export function FaqList({ faqs }: FaqListProps) {
  if (faqs.length === 0) {
    return null;
  }

  return (
    <section className="space-y-3">
      <h2 className="text-xl font-bold text-slate-900">よくある質問</h2>
      <div className="space-y-2">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-2xl border border-slate-200 bg-white p-4 [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-3 text-sm font-semibold text-slate-900">
              <span>{faq.question}</span>
              <span
                aria-hidden="true"
                className="text-sky-600 transition group-open:rotate-45"
              >
                ＋
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
