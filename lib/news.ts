import { newsItems } from "@/lib/newsData";
import type { NewsCategory, NewsItem } from "@/types/news";

const categoryLabels: Record<NewsCategory, string> = {
  visa: "ビザ",
  tax: "税金",
  cost: "費用",
  site: "サイト",
  other: "その他",
};

function byDateDesc(a: NewsItem, b: NewsItem): number {
  return a.date < b.date ? 1 : a.date > b.date ? -1 : 0;
}

export function getAllNews(): NewsItem[] {
  return newsItems.filter((item) => item.published).slice().sort(byDateDesc);
}

export function getLatestNews(limit = 3): NewsItem[] {
  return getAllNews().slice(0, limit);
}

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return getAllNews().find((item) => item.slug === slug);
}

export function getNewsCategoryLabel(category: NewsCategory): string {
  return categoryLabels[category] ?? category;
}
