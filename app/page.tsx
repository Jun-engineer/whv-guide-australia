import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { getFeaturedArticles } from "@/lib/articles";
import { getLatestForumPosts } from "@/lib/forum";
import { ArticleList } from "@/components/articles/ArticleList";
import { PostCard } from "@/components/forum/PostCard";
import { AdBanner } from "@/components/ads/AdBanner";
import { siteConfig, absoluteUrl } from "@/lib/siteConfig";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const featuredArticles = getFeaturedArticles(4);
  const latestPosts = getLatestForumPosts(3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "ja",
    description: siteConfig.description,
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "人気のワーホリガイド記事",
    itemListElement: featuredArticles.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(`/guides/${article.slug}`),
      name: article.title,
    })),
  };

  return (
    <div className="space-y-12 pb-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <section className="bg-[radial-gradient(circle_at_top,_#0ea5e9,_#0369a1_45%,_#0f172a)] py-16 text-white">
        <Container className="space-y-5">
          <p className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-bold tracking-wide">
            Working Holiday Starter
          </p>
          <h1 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
            オーストラリアワーホリを、迷わず進める。
          </h1>
          <p className="max-w-2xl text-sky-100">
            ビザ申請から現地の家探し・仕事探しまで、必要な順番で学べる日本語ガイドです。
          </p>
          <Link
            href="/preparation"
            className="inline-block rounded-full bg-amber-300 px-5 py-3 font-bold text-slate-900"
          >
            まず何をすればいいか見る
          </Link>
        </Container>
      </section>

      <Container className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-slate-900">初心者向け導線</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["/preparation", "渡航前"],
              ["/arrival", "到着後"],
              ["/jobs", "仕事探し"],
              ["/second-visa", "セカンドビザ"],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="rounded-2xl border border-sky-100 bg-white p-4 text-center font-semibold text-sky-800"
              >
                {label}
              </Link>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">人気記事</h2>
          <ArticleList articles={featuredArticles} />
        </section>

        <AdBanner slotName="トップページ中段" />

        <section className="grid gap-4 md:grid-cols-2">
          <Link href="/farm" className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
            <h3 className="text-xl font-bold text-emerald-900">ファームジョブ</h3>
            <p className="mt-2 text-sm text-emerald-800">
              セカンドビザに必要な88日間の探し方と、地域・職種の選び方を解説します。
            </p>
          </Link>
          <Link href="/uber-eats" className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h3 className="text-xl font-bold text-amber-900">ギグワーク</h3>
            <p className="mt-2 text-sm text-amber-800">
              Uber EatsやDoorDashの始め方、ABN取得、税金の扱いまでまとめました。
            </p>
          </Link>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">エリアガイド</h2>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {["Sydney", "Melbourne", "Brisbane", "Cairns", "Perth"].map((area) => (
              <span
                key={area}
                className="rounded-2xl border border-slate-200 bg-white p-3 text-center text-sm font-semibold text-slate-700"
              >
                {area}
              </span>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">掲示板の最新投稿</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {latestPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>

        <AdBanner slotName="トップページ下部" />
      </Container>
    </div>
  );
}
