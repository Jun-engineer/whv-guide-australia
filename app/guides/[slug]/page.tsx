import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleHeader } from "@/components/articles/ArticleHeader";
import { TableOfContents } from "@/components/articles/TableOfContents";
import { AnswerBox } from "@/components/articles/AnswerBox";
import { ArticlePoints } from "@/components/articles/ArticlePoints";
import { AudienceBox } from "@/components/articles/AudienceBox";
import { CommonMistakes } from "@/components/articles/CommonMistakes";
import { ArticleImageGallery } from "@/components/articles/ArticleImageGallery";
import { StepBlock } from "@/components/articles/StepBlock";
import { WarningBox } from "@/components/articles/WarningBox";
import { KeyFacts } from "@/components/articles/KeyFacts";
import { TipsBox } from "@/components/articles/TipsBox";
import { PhraseList } from "@/components/articles/PhraseList";
import { FaqList } from "@/components/articles/FaqList";
import { SourceLinks } from "@/components/articles/SourceLinks";
import { VerifiedDate } from "@/components/articles/VerifiedDate";
import { OfficialSourceBox } from "@/components/articles/OfficialSourceBox";
import { RelatedArticles } from "@/components/articles/RelatedArticles";
import { RelatedToolsBox } from "@/components/tools/RelatedToolsBox";
import { FeedbackRequestLink } from "@/components/articles/FeedbackRequestLink";
import { ArticleAd } from "@/components/ads/ArticleAd";
import { ArticleFeedback } from "@/components/feedback/ArticleFeedback";
import { ShareButtons } from "@/components/common/ShareButtons";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Container } from "@/components/layout/Container";
import { getArticleBySlug, getAutoRelatedArticles, getCategoryLabel, getAllArticles } from "@/lib/articles";
import { siteConfig, absoluteUrl } from "@/lib/siteConfig";
import { ogImages, twitterImages, resolveArticleImage } from "@/lib/socialImages";

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

  const socialImage = resolveArticleImage(article);

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
      locale: siteConfig.locale,
      images: ogImages(socialImage.path, article.title, socialImage.size),
    },
    twitter: {
      card: "summary_large_image",
      site: siteConfig.twitter,
      creator: siteConfig.twitter,
      title: article.title,
      description: article.description,
      images: twitterImages(socialImage.path, article.title),
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

  // ヒーロー以外の記事画像（本文中・ギャラリー）をまとめて表示する。
  const inlineImages = (article.images ?? []).filter((image) => image.position !== "hero");

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
    image: absoluteUrl(resolveArticleImage(article).path),
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
        url: absoluteUrl(siteConfig.ogImage),
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

      {article.verifiedAt ? (
        <VerifiedDate verifiedAt={article.verifiedAt} updatedAt={article.updatedAt} />
      ) : null}

      {article.answer ? <AnswerBox answer={article.answer} /> : null}

      {article.points && article.points.length > 0 ? (
        <ArticlePoints points={article.points} />
      ) : null}

      {article.audience && article.audience.length > 0 ? (
        <AudienceBox audience={article.audience} />
      ) : null}

      {article.keyFacts && article.keyFacts.length > 0 ? (
        <KeyFacts facts={article.keyFacts} />
      ) : null}

      <TableOfContents steps={article.steps} />

      <article className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 leading-8 text-slate-700 sm:text-[15px]">
        {article.content.map((paragraph) => (
          <p key={paragraph} className="leading-8">
            {paragraph}
          </p>
        ))}
      </article>

      {inlineImages.length > 0 ? <ArticleImageGallery images={inlineImages} /> : null}

      <section className="space-y-3">
        {article.steps.map((step, index) => (
          <StepBlock key={step.title} step={step} index={index} />
        ))}
      </section>

      {article.tips && article.tips.length > 0 ? <TipsBox tips={article.tips} /> : null}

      {article.phrases && article.phrases.length > 0 ? (
        <PhraseList phrases={article.phrases} />
      ) : null}

      {article.commonMistakes && article.commonMistakes.length > 0 ? (
        <CommonMistakes mistakes={article.commonMistakes} />
      ) : null}

      <WarningBox items={article.warnings ?? []} />
      <ArticleAd />

      {article.faqs && article.faqs.length > 0 ? <FaqList faqs={article.faqs} /> : null}

      {article.sources && article.sources.length > 0 ? (
        <SourceLinks sources={article.sources} />
      ) : null}

      {article.officialSources && article.officialSources.length > 0 ? (
        <OfficialSourceBox sources={article.officialSources} />
      ) : null}

      <ArticleFeedback slug={article.slug} title={article.title} />
      <FeedbackRequestLink pageUrl={`/guides/${article.slug}`} />

      <RelatedToolsBox articleSlug={article.slug} />

      <RelatedArticles articles={relatedArticles} />
    </Container>
  );
}
