import type { Metadata } from "next";
import { ToolShell } from "@/components/tools/ToolShell";
import { HousingInspectionChecklist } from "@/components/tools/HousingInspectionChecklist";
import { getToolBySlug } from "@/lib/tools/registry";

const tool = getToolBySlug("download-housing-inspection-checklist")!;

export const metadata: Metadata = {
  title: tool.title,
  description: tool.description,
  alternates: { canonical: tool.path },
};

export default function HousingInspectionChecklistPage() {
  return (
    <ToolShell
      tool={tool}
      disclaimer={
        <>
          <p>
            シェアハウスの内見時に確認したい項目を種類別にまとめた一般的な目安です。物件・地域・契約により確認すべき点は異なります。
          </p>
          <p>
            家賃・ボンド（敷金）・契約期間などの条件は、必ず契約書と各州のテナント情報で確認してください。印刷・ダウンロードして現地で使えるほか、その場でチェックも付けられます（チェック状態は端末にのみ保存されます）。
          </p>
        </>
      }
    >
      <HousingInspectionChecklist />
    </ToolShell>
  );
}
