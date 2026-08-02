import { getAllArticles, getCategoryLabel } from "@/lib/articles";
import { categoryAliases, slugAliases } from "@/lib/searchConfig";
import { normalize, type SearchDoc } from "@/lib/search";

function uniq(values: string[]): string[] {
  return Array.from(new Set(values.filter((v) => v && v.trim().length > 0)));
}

/**
 * 公開記事から検索インデックスを構築する（ビルド時・サーバー側で実行）。
 * getAllArticles() を経由するため、draft/review/archived/merged は除外される。
 * 記事本文（content）はインデックスに含めないため、クライアントに全文が
 * 送られることはない。
 */
export function buildSearchIndex(): SearchDoc[] {
  return getAllArticles().map((article) => {
    const categoryLabel = getCategoryLabel(article.category);
    const aliases = uniq([
      ...(article.searchAliases ?? []),
      ...(article.tags ?? []),
      ...(categoryAliases[article.category] ?? []),
      ...(slugAliases[article.slug] ?? []),
    ]);

    const keywordParts = uniq([
      article.hub ?? "",
      ...(article.tags ?? []),
      ...article.steps.map((step) => step.title),
      article.summary ?? "",
      article.searchIntent ?? "",
    ]);

    return {
      slug: article.slug,
      title: article.title,
      description: article.description,
      category: article.category,
      categoryLabel,
      aliases,
      keywords: normalize(keywordParts.join(" ")),
    };
  });
}
