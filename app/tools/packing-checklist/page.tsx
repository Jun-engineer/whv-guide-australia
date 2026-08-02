import type { Metadata } from "next";
import { ToolShell } from "@/components/tools/ToolShell";
import { PackingChecklistTool } from "@/components/tools/PackingChecklistTool";
import { getToolBySlug } from "@/lib/tools/registry";

const tool = getToolBySlug("tool-packing-checklist")!;

export const metadata: Metadata = {
  title: tool.title,
  description: tool.description,
  alternates: { canonical: tool.path },
};

export default function PackingChecklistToolPage() {
  return (
    <ToolShell
      tool={tool}
      disclaimer={
        <>
          <p>
            気候・渡航シーズン・予定している仕事で項目を絞り込める一般的な持ち物の目安です。実際に必要な物は個人差があります。
          </p>
          <p>チェック状態はお使いのブラウザにのみ保存され、サーバーには送信されません。</p>
        </>
      }
    >
      <PackingChecklistTool />
    </ToolShell>
  );
}
