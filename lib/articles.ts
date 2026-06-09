import { articleCategories, articles } from "@/lib/mockData";
import type { Article, ArticleCategory } from "@/types/article";

export function getAllArticles(): Article[] {
  return articles.filter((article) => article.published);
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
  return getAllArticles().filter((article) => slugs.includes(article.slug));
}

export function getCategoryLabel(slug: string): string {
  return articleCategories.find((category) => category.slug === slug)?.name ?? slug;
}

export function getArticleCategories() {
  return articleCategories;
}
