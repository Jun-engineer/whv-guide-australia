import type { Metadata } from "next";
import { ToolShell } from "@/components/tools/ToolShell";
import { ChecklistBoard } from "@/components/tools/ChecklistBoard";
import { ARRIVAL_CHECKLIST_GROUPS } from "@/lib/tools/data/arrival-checklist";
import { getToolBySlug } from "@/lib/tools/registry";

const tool = getToolBySlug("tool-arrival-checklist")!;

export const metadata: Metadata = {
  title: tool.title,
  description: tool.description,
  alternates: { canonical: tool.path },
};

export default function ArrivalChecklistToolPage() {
  return (
    <ToolShell
      tool={tool}
      disclaimer={
        <>
          <p>
            到着後によくある手続き・準備を時系列でまとめた一般的な目安です。個人の状況（滞在都市・仕事・滞在期間）によって必要な項目は異なります。
          </p>
          <p>チェック状態はお使いのブラウザにのみ保存され、サーバーには送信されません。</p>
        </>
      }
    >
      <ChecklistBoard storageKey="whv-tool-arrival-checklist" groups={ARRIVAL_CHECKLIST_GROUPS} />
    </ToolShell>
  );
}
