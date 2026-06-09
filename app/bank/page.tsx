import type { Metadata } from "next";
import { GuideCategoryPage } from "@/components/articles/GuideCategoryPage";

export const metadata: Metadata = {
  title: "銀行口座開設",
  description: "主要銀行の比較と口座開設フロー。",
};

export default function BankPage() {
  return <GuideCategoryPage category="bank" lead="オーストラリアでの銀行口座開設に必要な書類と流れを解説します。" />;
}
