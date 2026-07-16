import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Container } from "@/components/layout/Container";
import { getAllNews, getNewsCategoryLabel } from "@/lib/news";
import { siteConfig, absoluteUrl } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "ニュース・お知らせ",
  description:
    "オーストラリアワーホリに関する最新情報（ビザ申請料の改定、税金、費用の変化など）とサイトの更新履歴をお届けします。",
  alternates: { canonical: "/news" },
};

export default function NewsPage() {
  const news = getAllNews();

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "ニュース・お知らせ一覧",
    itemListElement: news.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(`/news/${item.slug}`),
      name: item.title,
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "ニュース", item: absoluteUrl("/news") },
    ],
  };

  return (
    <Container className="space-y-8 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <Breadcrumbs items={[{ label: "ホーム", href: "/" }, { label: "ニュース" }]} />
      <section className="rounded-3xl bg-gradient-to-r from-sky-700 to-cyan-600 p-8 text-white">
        <h1 className="text-3xl font-extrabold">ニュース・お知らせ</h1>
        <p className="mt-3 max-w-2xl text-sky-50">
          ビザ申請料の改定や税金・費用の変化など、ワーホリに関わる最新情報とサイトの更新履歴をまとめています。
        </p>
      </section>

      <ul className="space-y-4">
        {news.map((item) => (
          <li key={item.id}>
            <Link
              href={`/news/${item.slug}`}
              className="block rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-sky-300 hover:shadow-sm"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <time className="font-semibold text-slate-500" dateTime={item.date}>
                  {item.date}
                </time>
                <span className="rounded-full bg-sky-50 px-2.5 py-0.5 font-semibold text-sky-700">
                  {getNewsCategoryLabel(item.category)}
                </span>
              </div>
              <h2 className="mt-2 text-lg font-bold text-slate-900">{item.title}</h2>
              <p className="mt-1 text-sm text-slate-600">{item.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
