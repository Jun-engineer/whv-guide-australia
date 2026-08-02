import type { Article } from "@/types/article";
import { getCategoryLabel } from "@/lib/articles";
import { ArticleFigure } from "@/components/articles/ArticleFigure";

type ArticleHeaderProps = {
  article: Article;
};

export function ArticleHeader({ article }: ArticleHeaderProps) {
  return (
    <div className="space-y-4">
      <header className="rounded-3xl bg-gradient-to-br from-sky-700 to-cyan-700 p-8 text-white">
        <p className="text-sm font-semibold">{getCategoryLabel(article.category)}</p>
        <h1 className="mt-2 text-3xl font-extrabold leading-tight">{article.title}</h1>
        <p className="mt-3 max-w-2xl text-sky-50">{article.description}</p>
        <p className="mt-4 text-sm text-sky-100">最終更新日: {article.updatedAt}</p>
      </header>
      {article.heroImage ? (
        <ArticleFigure image={article.heroImage} priority sizes="(max-width: 768px) 100vw, 768px" />
      ) : null}
    </div>
  );
}
