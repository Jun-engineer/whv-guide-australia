import { articleCategories, articles } from "@/lib/mockData";
import type { Article, ArticleCategory } from "@/types/article";

/**
 * 記事が公開対象か判定する単一の関数。
 * `published` を基本ゲートとしつつ、status が設定されていて "published" 以外なら
 * 非公開扱いにする（draft/review/archived を誤って公開しないため）。
 */
export function isPublishedArticle(article: Article): boolean {
  if (!article.published) return false;
  if (article.status && article.status !== "published") return false;
  return true;
}

export function getAllArticles(): Article[] {
  return articles.filter(isPublishedArticle);
}

export function getFeaturedArticles(limit = 3): Article[] {
  return getAllArticles().slice(0, limit);
}

export function getArticlesByCategory(category: ArticleCategory): Article[] {
  return getAllArticles().filter((article) => article.category === category);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getAllArticles().find((article) => article.slug === slug);
}

export function getRelatedArticles(slugs: string[]): Article[] {
  const published = getAllArticles();
  // relatedSlugs の順序を保って返す。
  return slugs
    .map((slug) => published.find((article) => article.slug === slug))
    .filter((article): article is Article => Boolean(article));
}

/**
 * 関連記事を返す。明示的な relatedSlugs があればそれを優先し、足りない分は
 * 同カテゴリの公開記事で自動補完する（関連記事の自動生成, Phase A）。
 */
export function getAutoRelatedArticles(article: Article, limit = 3): Article[] {
  const result = getRelatedArticles(article.relatedSlugs).filter(
    (related) => related.slug !== article.slug,
  );

  if (result.length < limit) {
    const seen = new Set([article.slug, ...result.map((a) => a.slug)]);
    const sameCategory = getArticlesByCategory(article.category).filter(
      (candidate) => !seen.has(candidate.slug),
    );
    for (const candidate of sameCategory) {
      if (result.length >= limit) break;
      result.push(candidate);
    }
  }

  return result.slice(0, limit);
}

export function getCategoryLabel(slug: string): string {
  return articleCategories.find((category) => category.slug === slug)?.name ?? slug;
}

export function getArticleCategories() {
  return articleCategories;
}
