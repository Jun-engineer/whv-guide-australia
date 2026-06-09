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
import { getArticleBySlug, getRelatedArticles } from "@/lib/articles";

type GuideDetailPageProps = {
  params: Promise<{ slug: string }>;
};

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
    alternates: {
      canonical: `/guides/${article.slug}`,
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
    mainEntityOfPage: `/guides/${article.slug}`,
  };

  return (
    <Container className="space-y-8 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
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
