import { ArticleList } from "@/components/articles/ArticleList";
import { AdBanner } from "@/components/ads/AdBanner";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Container } from "@/components/layout/Container";
import { getArticlesByCategory, getCategoryLabel } from "@/lib/articles";
import { siteConfig, absoluteUrl } from "@/lib/siteConfig";
import type { ArticleCategory } from "@/types/article";

type GuideCategoryPageProps = {
  category: ArticleCategory;
  lead: string;
};

export function GuideCategoryPage({ category, lead }: GuideCategoryPageProps) {
  const title = getCategoryLabel(category);
  const articles = getArticlesByCategory(category);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: `${title}ガイド`, item: absoluteUrl(`/${category}`) },
    ],
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${title}ガイド記事一覧`,
    itemListElement: articles.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(`/guides/${article.slug}`),
      name: article.title,
    })),
  };

  return (
    <Container className="space-y-8 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {articles.length > 0 ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
        />
      ) : null}
      <Breadcrumbs items={[{ label: "ホーム", href: "/" }, { label: `${title}ガイド` }]} />
      <section className="rounded-3xl bg-gradient-to-r from-sky-700 to-cyan-600 p-8 text-white">
        <h1 className="text-3xl font-extrabold">{title}ガイド</h1>
        <p className="mt-3 max-w-2xl text-sky-50">{lead}</p>
      </section>
      <ArticleList articles={articles} />
      <AdBanner slotName={`${title}カテゴリ下部`} />
    </Container>
  );
}
