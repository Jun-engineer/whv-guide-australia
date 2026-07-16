import { ArticleList } from "@/components/articles/ArticleList";
import type { Article } from "@/types/article";

type RelatedArticlesProps = {
  articles: Article[];
  title?: string;
};

/**
 * 関連記事セクション。内部リンクの回遊導線として記事末尾に置く。
 */
export function RelatedArticles({ articles, title = "関連記事" }: RelatedArticlesProps) {
  if (!articles || articles.length === 0) {
    return null;
  }

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <ArticleList articles={articles} />
    </section>
  );
}
