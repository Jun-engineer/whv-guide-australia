import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Container } from "@/components/layout/Container";
import { OfficialSourceBox } from "@/components/articles/OfficialSourceBox";
import { getNewsTemplateBySlug, getPublishedNewsTemplates } from "@/lib/newsTemplates";
import { getRelatedArticles } from "@/lib/articles";
import { siteConfig, absoluteUrl } from "@/lib/siteConfig";

type NewsTemplatePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPublishedNewsTemplates().map((template) => ({ slug: template.slug }));
}

export async function generateMetadata({ params }: NewsTemplatePageProps): Promise<Metadata> {
  const { slug } = await params;
  const template = getNewsTemplateBySlug(slug);
  if (!template || template.status !== "published") {
    return { title: "テンプレートが見つかりません" };
  }
  const url = absoluteUrl(template.path);
  return {
    title: template.title,
    description: template.description,
    alternates: { canonical: template.path },
    openGraph: {
      type: "article",
      title: template.title,
      description: template.description,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title: template.title,
      description: template.description,
    },
  };
}

export default async function NewsTemplateDetailPage({ params }: NewsTemplatePageProps) {
  const { slug } = await params;
  const template = getNewsTemplateBySlug(slug);
  if (!template || template.status !== "published") {
    notFound();
  }

  const relatedArticles = getRelatedArticles(template.relatedSlugs);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "ニュース", item: absoluteUrl("/news") },
      {
        "@type": "ListItem",
        position: 3,
        name: "ニューステンプレート集",
        item: absoluteUrl("/news/templates"),
      },
      {
        "@type": "ListItem",
        position: 4,
        name: template.navLabel,
        item: absoluteUrl(template.path),
      },
    ],
  };

  return (
    <Container className="space-y-8 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Breadcrumbs
        items={[
          { label: "ホーム", href: "/" },
          { label: "ニュース", href: "/news" },
          { label: "ニューステンプレート集", href: "/news/templates" },
          { label: template.navLabel },
        ]}
      />

      <section className="rounded-3xl bg-gradient-to-r from-sky-700 to-cyan-600 p-8 text-white">
        <div className="flex items-center gap-3">
          <span aria-hidden className="text-3xl">
            {template.icon}
          </span>
          <span className="rounded-full bg-white/15 px-2.5 py-0.5 text-xs font-semibold">
            {template.categoryLabel}
          </span>
        </div>
        <h1 className="mt-3 text-3xl font-extrabold">{template.title}</h1>
        <p className="mt-3 max-w-2xl text-sky-50">{template.description}</p>
      </section>

      {template.intro.map((paragraph, index) => (
        <p key={index} className="text-sm leading-relaxed text-slate-700">
          {paragraph}
        </p>
      ))}

      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-bold text-slate-900">記入項目</h2>
        <ul className="mt-4 space-y-3">
          {template.fields.map((field) => (
            <li key={field.label} className="text-sm">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-semibold text-slate-900">{field.label}</span>
                <span
                  className={
                    field.required
                      ? "rounded-full bg-rose-50 px-2 py-0.5 text-xs font-semibold text-rose-700"
                      : "rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-600"
                  }
                >
                  {field.required ? "必須" : "任意"}
                </span>
              </div>
              <p className="mt-1 text-slate-600">{field.hint}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-bold text-slate-900">記入スケルトン</h2>
        <p className="mt-1 text-xs text-slate-500">
          そのままコピーして、公式で確認した最新情報に置き換えて使ってください。
        </p>
        <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-900 p-4 text-xs leading-relaxed text-slate-100">
          <code>{template.skeleton.join("\n")}</code>
        </pre>
      </section>

      <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
        <h2 className="text-lg font-bold text-amber-900">執筆・確認の注意点</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-amber-900/90">
          {template.notes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </section>

      <OfficialSourceBox sources={template.officialSources} />

      {relatedArticles.length > 0 ? (
        <section className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-bold text-slate-900">関連ガイド</h2>
          <ul className="mt-3 space-y-2">
            {relatedArticles.map((article) => (
              <li key={article.slug} className="text-sm">
                <Link
                  href={`/guides/${article.slug}`}
                  className="font-semibold text-sky-700 underline-offset-2 hover:underline"
                >
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <p className="text-xs text-slate-500">
        最終確認日：{template.verifiedAt}／制度・数値・条件は改定されます。公開前に必ず公式情報源で最新をご確認ください。
      </p>
    </Container>
  );
}
