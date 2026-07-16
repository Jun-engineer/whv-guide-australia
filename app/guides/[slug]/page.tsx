import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleHeader } from "@/components/articles/ArticleHeader";
import { TableOfContents } from "@/components/articles/TableOfContents";
import { StepBlock } from "@/components/articles/StepBlock";
import { WarningBox } from "@/components/articles/WarningBox";
import { ArticleList } from "@/components/articles/ArticleList";
import { KeyFacts } from "@/components/articles/KeyFacts";
import { TipsBox } from "@/components/articles/TipsBox";
import { PhraseList } from "@/components/articles/PhraseList";
import { FaqList } from "@/components/articles/FaqList";
import { SourceLinks } from "@/components/articles/SourceLinks";
import { ArticleAd } from "@/components/ads/ArticleAd";
import { ArticleFeedback } from "@/components/feedback/ArticleFeedback";
import { ShareButtons } from "@/components/common/ShareButtons";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Container } from "@/components/layout/Container";
import { getArticleBySlug, getAutoRelatedArticles, getCategoryLabel, getAllArticles } from "@/lib/articles";
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

  const relatedArticles = getAutoRelatedArticles(article, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt ?? article.updatedAt,
    dateModified: article.updatedAt,
    inLanguage: "ja",
    articleSection: getCategoryLabel(article.category),
    keywords: [getCategoryLabel(article.category), "オーストラリア ワーホリ", article.title].join(", "),
    wordCount: article.content.join("").length,
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

  const howToJsonLd =
    article.steps && article.steps.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: article.title,
          description: article.description,
          inLanguage: "ja",
          step: article.steps.map((step, index) => ({
            "@type": "HowToStep",
            position: index + 1,
            name: step.title,
            text: step.description,
            url: absoluteUrl(`/guides/${article.slug}#step-${index + 1}`),
          })),
        }
      : null;

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

  const faqJsonLd =
    article.faqs && article.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: article.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

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
      {faqJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      ) : null}
      {howToJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
        />
      ) : null}
      <Breadcrumbs
        items={[
          { label: "ホーム", href: "/" },
          { label: getCategoryLabel(article.category), href: `/${article.category}` },
          { label: article.title },
        ]}
      />
      <ArticleHeader article={article} />
      <ShareButtons title={article.title} />

      {article.keyFacts && article.keyFacts.length > 0 ? (
        <KeyFacts facts={article.keyFacts} />
      ) : null}

      <TableOfContents steps={article.steps} />

      <article className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6">
        {article.content.map((paragraph) => (
          <p key={paragraph} className="leading-relaxed text-slate-700">
            {paragraph}
          </p>
        ))}
      </article>

      <section className="space-y-3">
        {article.steps.map((step, index) => (
          <StepBlock key={step.title} step={step} index={index} />
        ))}
      </section>

      {article.tips && article.tips.length > 0 ? <TipsBox tips={article.tips} /> : null}

      {article.phrases && article.phrases.length > 0 ? (
        <PhraseList phrases={article.phrases} />
      ) : null}

      <WarningBox items={article.warnings ?? []} />
      <ArticleAd />

      {article.faqs && article.faqs.length > 0 ? <FaqList faqs={article.faqs} /> : null}

      {article.sources && article.sources.length > 0 ? (
        <SourceLinks sources={article.sources} />
      ) : null}

      {article.verifiedAt || (article.officialSources && article.officialSources.length > 0) ? (
        <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-sm">
          <h2 className="font-bold text-emerald-900">情報の確認状況</h2>
          {article.verifiedAt ? (
            <p className="mt-1 text-emerald-800">
              公式情報と照合した最終確認日：
              <time dateTime={article.verifiedAt} className="font-semibold">
                {article.verifiedAt}
              </time>
            </p>
          ) : null}
          {article.officialSources && article.officialSources.length > 0 ? (
            <div className="mt-2">
              <p className="font-semibold text-emerald-900">公式情報源</p>
              <ul className="mt-1 space-y-1">
                {article.officialSources.map((source) => (
                  <li key={source.url}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-800 underline underline-offset-2 hover:text-emerald-900"
                    >
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </section>
      ) : null}

      <ArticleFeedback slug={article.slug} title={article.title} />

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
