import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleHeader } from "@/components/articles/ArticleHeader";
import { TableOfContents } from "@/components/articles/TableOfContents";
import { StepBlock } from "@/components/articles/StepBlock";
import { WarningBox } from "@/components/articles/WarningBox";
import { ArticleList } from "@/components/articles/ArticleList";
import { ArticleAd } from "@/components/ads/ArticleAd";
import { ShareButtons } from "@/components/common/ShareButtons";
import { Container } from "@/components/layout/Container";
import { getArticleBySlug, getRelatedArticles, getCategoryLabel, getAllArticles } from "@/lib/articles";
import { siteConfig, absoluteUrl } from "@/lib/siteConfig";

type GuideDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: GuideDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "記事が見つかりません",
    };
  }

  return {
    title: article.title,
    description: article.description,
    keywords: [getCategoryLabel(article.category), "オーストラリア ワーホリ", article.title],
    alternates: {
      canonical: `/guides/${article.slug}`,
    },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      url: absoluteUrl(`/guides/${article.slug}`),
      modifiedTime: article.updatedAt,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

export default async function GuideDetailPage({ params }: GuideDetailPageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article.relatedSlugs);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    dateModified: article.updatedAt,
    inLanguage: "ja",
    mainEntityOfPage: absoluteUrl(`/guides/${article.slug}`),
    image: absoluteUrl("/opengraph-image"),
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/opengraph-image"),
      },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name: getCategoryLabel(article.category),
        item: absoluteUrl(`/${article.category}`),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: absoluteUrl(`/guides/${article.slug}`),
      },
    ],
  };

  return (
    <Container className="space-y-8 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ArticleHeader article={article} />
      <ShareButtons title={article.title} />
      <TableOfContents steps={article.steps} />

      <article className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6">
        {article.content.map((paragraph) => (
          <p key={paragraph} className="text-slate-700">
            {paragraph}
          </p>
        ))}
      </article>

      <section className="space-y-3">
        {article.steps.map((step, index) => (
          <StepBlock key={step.title} step={step} index={index} />
        ))}
      </section>

      <WarningBox items={article.warnings ?? []} />
      <ArticleAd />

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">関連記事</h2>
          <Link href="/" className="text-sm font-semibold text-sky-700">
            トップへ
          </Link>
        </div>
        <ArticleList articles={relatedArticles} />
      </section>
    </Container>
  );
}
