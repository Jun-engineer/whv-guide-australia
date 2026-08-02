import type { Metadata } from "next";
import { ToolShell } from "@/components/tools/ToolShell";
import { ChecklistBoard } from "@/components/tools/ChecklistBoard";
import { RETURN_HOME_CHECKLIST_GROUPS } from "@/lib/tools/data/return-home-checklist";
import { getToolBySlug } from "@/lib/tools/registry";

const tool = getToolBySlug("tool-return-home-checklist")!;

export const metadata: Metadata = {
  title: tool.title,
  description: tool.description,
  alternates: { canonical: tool.path },
};

export default function ReturnHomeChecklistPage() {
  return (
    <ToolShell
      tool={tool}
      disclaimer={
        <>
          <p>
            帰国前によくある手続き・準備を時系列でまとめた一般的な目安です。個人の状況（滞在都市・契約・税金・スーパーなど）によって必要な項目や時期は異なります。
          </p>
          <p>
            税金・スーパーアニュエーション（DASP）などの手続きには公式の要件・期限があります。金額や締切に関わることは、必ず ATO や各機関の公式情報で確認してください。
          </p>
          <p>チェック状態はお使いのブラウザにのみ保存され、サーバーには送信されません。</p>
        </>
      }
    >
      <ChecklistBoard
        storageKey="whv-tool-return-home-checklist"
        groups={RETURN_HOME_CHECKLIST_GROUPS}
      />
    </ToolShell>
  );
}
