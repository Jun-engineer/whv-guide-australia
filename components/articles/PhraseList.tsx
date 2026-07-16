import type { ArticlePhrase } from "@/types/article";

type PhraseListProps = {
  phrases: ArticlePhrase[];
};

export function PhraseList({ phrases }: PhraseListProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6">
      <h2 className="text-xl font-bold text-slate-900">現地で使える英語フレーズ</h2>
      <p className="mt-1 text-sm text-slate-500">英語表現と日本語訳。そのまま使えます。</p>
      <ul className="mt-4 space-y-3">
        {phrases.map((phrase) => (
          <li
            key={phrase.en}
            className="rounded-xl border border-slate-100 bg-slate-50 p-4"
          >
            <p className="font-semibold text-slate-900">{phrase.en}</p>
            <p className="mt-1 text-sm text-sky-800">{phrase.ja}</p>
            {phrase.note ? (
              <p className="mt-1 text-xs text-slate-500">{phrase.note}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
