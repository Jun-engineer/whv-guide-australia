import type { Metadata } from "next";
import { ToolShell } from "@/components/tools/ToolShell";
import { FarmSeasonSearch } from "@/components/tools/FarmSeasonSearch";
import { getToolBySlug } from "@/lib/tools/registry";

const tool = getToolBySlug("tool-farm-season-calendar")!;

export const metadata: Metadata = {
  title: tool.title,
  description: tool.description,
  alternates: { canonical: tool.path },
};

export default function FarmSeasonCalendarPage() {
  return (
    <ToolShell
      tool={tool}
      disclaimer={
        <>
          <p>
            州・作物・月から、ファームの繁忙期（収穫・作業が多い時期）の一般的な目安を検索できます。
          </p>
          <p>
            収穫時期は天候やその年の状況で前後します。実際の求人状況は年によって変わるため、応募前に雇用主や公式の
            Harvest Trail Information Service で最新情報をご確認ください。対象作業がセカンドビザの指定業務に該当するかは移民局が判断します。
          </p>
        </>
      }
    >
      <FarmSeasonSearch />
    </ToolShell>
  );
}
