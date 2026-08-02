import type { Metadata } from "next";
import { ToolShell } from "@/components/tools/ToolShell";
import { ChecklistBoard } from "@/components/tools/ChecklistBoard";
import { RESUME_CHECKLIST_GROUPS } from "@/lib/tools/data/resume-checklist";
import { getToolBySlug } from "@/lib/tools/registry";

const tool = getToolBySlug("tool-resume-checklist")!;

export const metadata: Metadata = {
  title: tool.title,
  description: tool.description,
  alternates: { canonical: tool.path },
};

export default function ResumeChecklistToolPage() {
  return (
    <ToolShell
      tool={tool}
      disclaimer={
        <>
          <p>
            オーストラリアの一般的な採用慣行に沿った、英文レジュメの「入れるべき項目」と「入れないほうがよい項目（NG）」の自己チェックです。NGの項目は、載せていない（削除できている）ことの確認としてチェックしてください。
          </p>
          <p>最適な形は職種・企業によって異なります。チェック状態はお使いのブラウザにのみ保存され、サーバーには送信されません。</p>
        </>
      }
    >
      <ChecklistBoard storageKey="whv-tool-resume-checklist" groups={RESUME_CHECKLIST_GROUPS} />
    </ToolShell>
  );
}
