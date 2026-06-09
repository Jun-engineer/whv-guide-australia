import type { Article } from "@/types/article";
import { ArticleCard } from "@/components/articles/ArticleCard";

type ArticleListProps = {
  articles: Article[];
};

export function ArticleList({ articles }: ArticleListProps) {
  if (articles.length === 0) {
    return <p className="text-sm text-slate-600">記事は準備中です。</p>;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}
