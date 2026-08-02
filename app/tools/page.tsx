import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Container } from "@/components/layout/Container";
import { getPublishedTools } from "@/lib/tools/registry";
import { siteConfig, absoluteUrl } from "@/lib/siteConfig";
import { buildCategoryMetadata } from "@/lib/socialImages";

export const metadata: Metadata = buildCategoryMetadata("tools", {
  title: "便利ツール・テンプレート",
  description:
    "オーストラリアワーホリの準備・生活・仕事に役立つ無料ツール集。到着後チェックリスト、持ち物リスト、セカンドビザ88日カウンターなど、端末に保存できる実用ツールをまとめています。",
  path: "/tools",
});

export default function ToolsHubPage() {
  const tools = getPublishedTools();

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "便利ツール・テンプレート一覧",
    itemListElement: tools.map((tool, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(tool.path),
      name: tool.title,
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "ツール", item: absoluteUrl("/tools") },
    ],
  };

  return (
    <Container className="space-y-8 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {tools.length > 0 ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
        />
      ) : null}

      <Breadcrumbs items={[{ label: "ホーム", href: "/" }, { label: "ツール" }]} />

      <section className="rounded-3xl bg-gradient-to-r from-sky-700 to-cyan-600 p-8 text-white">
        <h1 className="text-3xl font-extrabold">便利ツール・テンプレート</h1>
        <p className="mt-3 max-w-2xl text-sky-50">
          準備・到着後・セカンドビザなどで役立つ無料ツール。入力した内容はお使いの端末（ブラウザ）にのみ保存され、サーバーには送信されません。
        </p>
      </section>

      {tools.length === 0 ? (
        <p className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
          現在公開中のツールはありません。
        </p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2">
          {tools.map((tool) => (
            <li key={tool.slug}>
              <Link
                href={tool.path}
                className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-sky-300 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              >
                <span className="flex items-center gap-2 text-xs font-semibold text-sky-700">
                  <span aria-hidden className="text-lg">
                    {tool.icon}
                  </span>
                  {tool.categoryLabel}
                </span>
                <span className="mt-2 text-lg font-bold text-slate-800">{tool.title}</span>
                <span className="mt-2 text-sm text-slate-600">{tool.description}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}
