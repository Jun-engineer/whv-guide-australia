import type { Metadata } from "next";
import { GuideCategoryPage } from "@/components/articles/GuideCategoryPage";

export const metadata: Metadata = {
  title: "タックスリターンガイド",
  description: "確定申告の時期、必要書類、申告手順をまとめました。",
};

export default function TaxReturnPage() {
  return <GuideCategoryPage category="tax-return" lead="会計年度と確定申告の流れをわかりやすく整理します。" />;
}
