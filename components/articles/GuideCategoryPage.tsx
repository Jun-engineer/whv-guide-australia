import { ArticleList } from "@/components/articles/ArticleList";
import { AdBanner } from "@/components/ads/AdBanner";
import { Container } from "@/components/layout/Container";
import { getArticlesByCategory, getCategoryLabel } from "@/lib/articles";
import type { ArticleCategory } from "@/types/article";

type GuideCategoryPageProps = {
  category: ArticleCategory;
  lead: string;
};

export function GuideCategoryPage({ category, lead }: GuideCategoryPageProps) {
  const title = getCategoryLabel(category);
  const articles = getArticlesByCategory(category);

  return (
    <Container className="space-y-8 py-10">
      <section className="rounded-3xl bg-gradient-to-r from-sky-700 to-cyan-600 p-8 text-white">
        <h1 className="text-3xl font-extrabold">{title}ガイド</h1>
        <p className="mt-3 max-w-2xl text-sky-50">{lead}</p>
      </section>
      <ArticleList articles={articles} />
      <AdBanner slotName={`${title}カテゴリ下部`} />
    </Container>
  );
}
