import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Container } from "@/components/layout/Container";
import { getPublishedNewsTemplates } from "@/lib/newsTemplates";
import { siteConfig, absoluteUrl } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "ニューステンプレート集",
  description:
    "ビザ制度変更・最低賃金改定・税/Super改定・ビザ申請料改定・災害警報などのニュースを、公式ソース付きで正確に伝えるための編集テンプレート集。読者の「公式で確認する」チェックリストとしても使えます。",
  alternates: { canonical: "/news/templates" },
};

export default function NewsTemplatesPage() {
  const templates = getPublishedNewsTemplates();

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
    ],
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "ニューステンプレート一覧",
    itemListElement: templates.map((template, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(template.path),
      name: template.title,
    })),
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
      <Breadcrumbs
        items={[
          { label: "ホーム", href: "/" },
          { label: "ニュース", href: "/news" },
          { label: "ニューステンプレート集" },
        ]}
      />
      <section className="rounded-3xl bg-gradient-to-r from-sky-700 to-cyan-600 p-8 text-white">
        <h1 className="text-3xl font-extrabold">ニューステンプレート集</h1>
        <p className="mt-3 max-w-2xl text-sky-50">
          制度変更や警報などのニュースを、抜け漏れなく・正確に・公式リンク付きで伝えるための編集フォーマットです。
          読者にとっては「何を公式で確認すべきか」のチェックリストとしても使えます。
        </p>
      </section>

      <ul className="grid gap-4 sm:grid-cols-2">
        {templates.map((template) => (
          <li key={template.slug}>
            <Link
              href={template.path}
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-sky-300 hover:shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span aria-hidden className="text-2xl">
                  {template.icon}
                </span>
                <span className="rounded-full bg-sky-50 px-2.5 py-0.5 text-xs font-semibold text-sky-700">
                  {template.categoryLabel}
                </span>
              </div>
              <h2 className="mt-3 text-lg font-bold text-slate-900">{template.navLabel}</h2>
              <p className="mt-1 text-sm text-slate-600">{template.description}</p>
            </Link>
          </li>
        ))}
      </ul>

      <p className="text-xs text-slate-500">
        ※ 数値・日付・条件は改定されます。各テンプレートの公式情報源で必ず最新をご確認ください。
      </p>
    </Container>
  );
}
