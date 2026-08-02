import type { Metadata } from "next";
import { ToolShell } from "@/components/tools/ToolShell";
import { FarmEvidenceTracker } from "@/components/tools/FarmEvidenceTracker";
import { getToolBySlug } from "@/lib/tools/registry";

const tool = getToolBySlug("tool-farm-evidence-tracker")!;

export const metadata: Metadata = {
  title: tool.title,
  description: tool.description,
  alternates: { canonical: tool.path },
};

export default function FarmEvidenceTrackerPage() {
  return (
    <ToolShell
      tool={tool}
      disclaimer={
        <>
          <p>
            <strong>これはビザ申請の証拠やビザの承認を保証するものではありません。</strong>
            セカンドビザ（指定業務）に必要な書類や、その書類が有効かどうかは、移民局（Department of
            Home Affairs）が最終的に判断します。
          </p>
          <p>
            このツールは、手元の書類の保有状況を種類別に整理・記録するための補助です。実際の申請要件は必ず公式サイトで最新情報を確認してください。
          </p>
          <p>入力した記録はお使いのブラウザにのみ保存され、サーバーには送信されません。</p>
        </>
      }
    >
      <FarmEvidenceTracker />
    </ToolShell>
  );
}
