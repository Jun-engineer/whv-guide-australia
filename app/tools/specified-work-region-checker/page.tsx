import type { Metadata } from "next";
import { ToolShell } from "@/components/tools/ToolShell";
import { SpecifiedWorkRegionChecker } from "@/components/tools/SpecifiedWorkRegionChecker";
import { getToolBySlug } from "@/lib/tools/registry";

const tool = getToolBySlug("tool-specified-work-region-checker")!;

export const metadata: Metadata = {
  title: tool.title,
  description: tool.description,
  alternates: { canonical: tool.path },
};

export default function SpecifiedWorkRegionCheckerPage() {
  return (
    <ToolShell
      tool={tool}
      disclaimer={
        <>
          <p className="font-semibold text-amber-900">
            これは郵便番号が「地域（regional Australia）」の範囲に含まれるかを確認する参照用ツールで、ビザの可否や指定業務（Specified work）の該当性を判定するものではありません。
          </p>
          <p>
            対象となる業務・地域・要件は制度改定で変わり得ます。郵便番号が範囲に含まれない場合でも対象外とは断定できません。最終的な判断は必ず移民局（Department
            of Home Affairs）の公式情報でご確認ください。
          </p>
          <p>掲載している郵便番号データは目安であり、確認日を各結果の下に表示しています。</p>
        </>
      }
    >
      <SpecifiedWorkRegionChecker />
    </ToolShell>
  );
}
