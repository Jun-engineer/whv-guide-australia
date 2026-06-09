import type { Metadata } from "next";
import { GuideCategoryPage } from "@/components/articles/GuideCategoryPage";

export const metadata: Metadata = {
  title: "渡航前準備",
  description: "出発前に必須の準備項目を優先順位つきで解説。",
};

export default function PreparationPage() {
  return <GuideCategoryPage category="preparation" lead="航空券、保険、資金、持ち物まで渡航前に必要な準備を確認します。" />;
}
