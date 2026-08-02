import type { Metadata } from "next";
import { ToolShell } from "@/components/tools/ToolShell";
import { CoverLetterTemplateDownload } from "@/components/tools/CoverLetterTemplateDownload";
import { getToolBySlug } from "@/lib/tools/registry";

const tool = getToolBySlug("download-cover-letter-template")!;

export const metadata: Metadata = {
  title: tool.title,
  description: tool.description,
  alternates: { canonical: tool.path },
};

export default function CoverLetterTemplateDownloadPage() {
  return (
    <ToolShell
      tool={tool}
      disclaimer={
        <>
          <p>
            職種別の英文カバーレターの<strong>ひな型（記入例）</strong>と、応募チャネル別の短文集です。一般的な構成の目安であり、そのまま送るためのものではありません。応募先や自分の経歴に合わせて必ず書き換えてください。
          </p>
          <p>最適な書き方は職種・企業・地域によって異なります。求人の内容に合わせて調整してください。</p>
        </>
      }
    >
      <CoverLetterTemplateDownload />
    </ToolShell>
  );
}
