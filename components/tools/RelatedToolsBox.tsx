import Link from "next/link";
import { getToolsForArticle } from "@/lib/tools/registry";

type RelatedToolsBoxProps = {
  articleSlug: string;
};

/**
 * 記事に関連する公開ツールへの導線。記事 slug に紐づくツールが無ければ何も描画しない。
 */
export function RelatedToolsBox({ articleSlug }: RelatedToolsBoxProps) {
  const relatedTools = getToolsForArticle(articleSlug);
  if (relatedTools.length === 0) {
    return null;
  }

  return (
    <section className="rounded-2xl border border-cyan-200 bg-cyan-50 p-6">
      <h2 className="text-base font-bold text-cyan-900">この記事に関連するツール</h2>
      <ul className="mt-3 space-y-2">
        {relatedTools.map((tool) => (
          <li key={tool.slug}>
            <Link
              href={tool.path}
              className="flex items-start gap-3 rounded-xl bg-white p-3 transition hover:bg-cyan-100/40"
            >
              <span aria-hidden className="text-xl">
                {tool.icon}
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-cyan-900">{tool.navLabel}</span>
                <span className="mt-0.5 block text-xs text-cyan-800/80">{tool.description}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
