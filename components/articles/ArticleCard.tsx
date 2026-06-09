import Link from "next/link";
import type { Article } from "@/types/article";
import { getCategoryLabel } from "@/lib/articles";

type ArticleCardProps = {
  article: Article;
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">
        {getCategoryLabel(article.category)}
      </p>
      <h3 className="mt-2 text-lg font-bold text-slate-900">{article.title}</h3>
      <p className="mt-2 text-sm text-slate-600">{article.description}</p>
      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="text-slate-500">更新日 {article.updatedAt}</span>
        <Link href={`/guides/${article.slug}`} className="font-semibold text-sky-700">
          記事を見る
        </Link>
      </div>
    </article>
  );
}
