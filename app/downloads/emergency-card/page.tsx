import type { Metadata } from "next";
import { ToolShell } from "@/components/tools/ToolShell";
import { EmergencyCard } from "@/components/tools/EmergencyCard";
import { getToolBySlug } from "@/lib/tools/registry";

const tool = getToolBySlug("download-emergency-card")!;

export const metadata: Metadata = {
  title: tool.title,
  description: tool.description,
  alternates: { canonical: tool.path },
};

export default function EmergencyCardPage() {
  return (
    <ToolShell
      tool={tool}
      disclaimer={
        <>
          <p>
            オーストラリアの主な緊急・相談窓口と、自分の緊急情報をまとめて保存・印刷できるカードです。番号は公的機関の代表的な連絡先ですが、<strong>制度・番号は変わることがあります</strong>。緊急時は必ず最新の案内に従ってください。
          </p>
          <p>
            大使館・領事館の連絡先は国籍によって異なるため、各自でご記入ください。入力した個人情報はお使いのブラウザにのみ保存され、サーバーには送信されません。
          </p>
        </>
      }
    >
      <EmergencyCard />
    </ToolShell>
  );
}
