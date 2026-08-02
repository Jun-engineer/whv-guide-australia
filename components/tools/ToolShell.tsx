import Link from "next/link";
import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Container } from "@/components/layout/Container";
import { VerifiedDate } from "@/components/articles/VerifiedDate";
import { OfficialSourceBox } from "@/components/articles/OfficialSourceBox";
import type { ToolMeta } from "@/lib/tools/types";

type ToolShellProps = {
  tool: ToolMeta;
  /** 免責・使い方の注意（各ツールで指定）。 */
  disclaimer: ReactNode;
  children: ReactNode;
};

/**
 * 各ツールページ共通のレイアウト。パンくず・見出し・確認日・免責・本体・公式情報源・
 * ツール一覧への導線をまとめる。ツール本体（`children`）はクライアントコンポーネント。
 */
export function ToolShell({ tool, disclaimer, children }: ToolShellProps) {
  return (
    <Container className="space-y-8 py-10">
      <Breadcrumbs
        items={[
          { label: "ホーム", href: "/" },
          { label: "ツール", href: "/tools" },
          { label: tool.navLabel },
        ]}
      />

      <section className="rounded-3xl bg-gradient-to-r from-sky-700 to-cyan-600 p-8 text-white">
        <p className="text-sm font-semibold text-sky-100">
          <span aria-hidden className="mr-2 text-lg">
            {tool.icon}
          </span>
          {tool.categoryLabel}
        </p>
        <h1 className="mt-2 text-3xl font-extrabold">{tool.title}</h1>
        <p className="mt-3 max-w-2xl text-sky-50">{tool.description}</p>
      </section>

      {tool.verifiedAt ? <VerifiedDate verifiedAt={tool.verifiedAt} /> : null}

      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
        <p className="font-semibold">このツールについて</p>
        <div className="mt-2 space-y-1.5 leading-relaxed">{disclaimer}</div>
      </div>

      {children}

      {tool.officialSources && tool.officialSources.length > 0 ? (
        <OfficialSourceBox sources={tool.officialSources} />
      ) : null}

      <div className="border-t border-slate-200 pt-6">
        <Link
          href="/tools"
          className="inline-flex items-center gap-1 text-sm font-semibold text-sky-700 hover:underline"
        >
          ← ほかのツール・テンプレート一覧へ
        </Link>
      </div>
    </Container>
  );
}
