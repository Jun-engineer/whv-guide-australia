import type { ArticleLink } from "@/types/article";

type SourceLinksProps = {
  sources: ArticleLink[];
};

export function SourceLinks({ sources }: SourceLinksProps) {
  if (sources.length === 0) {
    return null;
  }

  return (
    <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <h2 className="text-base font-bold text-slate-900">公式・参考リンク</h2>
      <ul className="mt-3 space-y-2">
        {sources.map((source) => (
          <li key={source.url}>
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-sm font-semibold text-sky-700 underline-offset-2 hover:underline"
            >
              {source.label} ↗
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-slate-500">
        ※ 制度や料金は変更される場合があります。最新情報は必ず公式サイトでご確認ください。
      </p>
    </section>
  );
}
