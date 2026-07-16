import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Container } from "@/components/layout/Container";
import { getAllNews, getNewsBySlug, getNewsCategoryLabel } from "@/lib/news";
import { getArticleBySlug } from "@/lib/articles";
import { siteConfig, absoluteUrl } from "@/lib/siteConfig";

type NewsDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllNews().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: NewsDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  if (!item) {
    return { title: "ニュースが見つかりません" };
  }
  const url = absoluteUrl(`/news/${item.slug}`);
  return {
    title: item.title,
    description: item.summary,
    alternates: { canonical: `/news/${item.slug}` },
    openGraph: {
      type: "article",
      title: item.title,
      description: item.summary,
      url,
      publishedTime: item.date,
    },
    twitter: {
      card: "summary_large_image",
      title: item.title,
      description: item.summary,
    },
  };
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  if (!item) {
    notFound();
  }

  const relatedArticle = item.relatedGuide ? getArticleBySlug(item.relatedGuide) : undefined;

  const newsJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: item.title,
    description: item.summary,
    datePublished: item.date,
    dateModified: item.date,
    articleSection: getNewsCategoryLabel(item.category),
    mainEntityOfPage: absoluteUrl(`/news/${item.slug}`),
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "ニュース", item: absoluteUrl("/news") },
      { "@type": "ListItem", position: 3, name: item.title, item: absoluteUrl(`/news/${item.slug}`) },
    ],
  };

  return (
    <Container className="max-w-3xl space-y-6 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Breadcrumbs
        items={[
          { label: "ホーム", href: "/" },
          { label: "ニュース", href: "/news" },
          { label: item.title },
        ]}
      />

      <header className="space-y-3">
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <time className="font-semibold text-slate-500" dateTime={item.date}>
            {item.date}
          </time>
          <span className="rounded-full bg-sky-50 px-2.5 py-0.5 font-semibold text-sky-700">
            {getNewsCategoryLabel(item.category)}
          </span>
        </div>
        <h1 className="text-3xl font-extrabold leading-tight text-slate-900">{item.title}</h1>
        <p className="text-slate-600">{item.summary}</p>
      </header>

      <article className="space-y-4 text-slate-700">
        {item.body.map((paragraph, index) => (
          <p key={index} className="leading-relaxed">
            {paragraph}
          </p>
        ))}
      </article>

      {item.source ? (
        <p className="text-sm text-slate-500">
          出典：{" "}
          <a
            href={item.source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-sky-700 underline"
          >
            {item.source.label}
          </a>
        </p>
      ) : null}

      {relatedArticle ? (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">関連ガイド</p>
          <Link
            href={`/guides/${relatedArticle.slug}`}
            className="mt-1 block text-lg font-bold text-sky-700 underline"
          >
            {relatedArticle.title}
          </Link>
        </div>
      ) : null}

      <div>
        <Link href="/news" className="text-sm font-semibold text-sky-700 underline">
          ← ニュース一覧に戻る
        </Link>
      </div>
    </Container>
  );
}
