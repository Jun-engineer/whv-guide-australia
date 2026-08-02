import type { Metadata } from "next";
import { ToolShell } from "@/components/tools/ToolShell";
import { WeeklyBudgetCalculator } from "@/components/tools/WeeklyBudgetCalculator";
import { getToolBySlug } from "@/lib/tools/registry";

const tool = getToolBySlug("tool-weekly-budget-calculator")!;

export const metadata: Metadata = {
  title: tool.title,
  description: tool.description,
  alternates: { canonical: tool.path },
};

export default function WeeklyBudgetCalculatorPage() {
  return (
    <ToolShell
      tool={tool}
      disclaimer={
        <>
          <p>
            入力した金額から週・月の生活費と、無収入期間・初期費用をふまえた必要貯金額の目安を計算します。金額はご自身の想定を入力してください（公式の費用データではありません）。
          </p>
          <p>結果はあくまで概算で、金融アドバイスではありません。入力はお使いのブラウザにのみ保存され、サーバーには送信されません。</p>
        </>
      }
    >
      <WeeklyBudgetCalculator />
    </ToolShell>
  );
}
