import type { Metadata } from "next";
import { ToolShell } from "@/components/tools/ToolShell";
import { EightyEightDayCalculator } from "@/components/tools/EightyEightDayCalculator";
import { getToolBySlug } from "@/lib/tools/registry";

const tool = getToolBySlug("tool-88-day-calculator")!;

export const metadata: Metadata = {
  title: tool.title,
  description: tool.description,
  alternates: { canonical: tool.path },
};

export default function EightyEightDayCalculatorPage() {
  return (
    <ToolShell
      tool={tool}
      disclaimer={
        <>
          <p className="font-semibold text-amber-900">
            これは勤務日を記録・集計するためのツールであり、ビザの可否や指定業務（Specified work）の該当性を判定するものではありません。
          </p>
          <p>
            どの業務・地域が対象になるか、証拠として何が必要かは、必ず移民局（Department of
            Home Affairs）の公式情報で確認してください。88日という日数はセカンドビザの一般的な要件の目安です。
          </p>
          <p>入力した記録はお使いのブラウザにのみ保存され、サーバーには送信されません。ビザ申請時の正式な証拠にはなりません。</p>
        </>
      }
    >
      <EightyEightDayCalculator />
    </ToolShell>
  );
}
