import type { Metadata } from "next";
import { ToolShell } from "@/components/tools/ToolShell";
import { ResumeTemplateDownload } from "@/components/tools/ResumeTemplateDownload";
import { getToolBySlug } from "@/lib/tools/registry";

const tool = getToolBySlug("download-resume-template")!;

export const metadata: Metadata = {
  title: tool.title,
  description: tool.description,
  alternates: { canonical: tool.path },
};

export default function ResumeTemplateDownloadPage() {
  return (
    <ToolShell
      tool={tool}
      disclaimer={
        <>
          <p>
            職種別の英文レジュメの<strong>ひな型（記入例）</strong>です。一般的な構成の目安であり、そのまま提出するためのものではありません。自分の経歴・スキルに合わせて必ず書き換えてください。
          </p>
          <p>最適なレジュメの形は職種・企業・地域によって異なります。応募先の求める内容に合わせて調整してください。</p>
        </>
      }
    >
      <ResumeTemplateDownload />
    </ToolShell>
  );
}
