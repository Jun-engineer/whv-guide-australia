import type { Metadata } from "next";
import { GuideCategoryPage } from "@/components/articles/GuideCategoryPage";

export const metadata: Metadata = {
  title: "送金・両替（Wise）",
  description:
    "日本円から豪ドルへの両替・送金はWiseが定番。マルチカレンシー口座やデビットカードで現金なしの生活を始める方法を解説します。",
  alternates: { canonical: "/money" },
};

export default function MoneyPage() {
  return (
    <GuideCategoryPage
      category="money"
      lead="日本円→豪ドルの両替・送金、現地での決済を、手数料を抑えて賢く行う方法をまとめました。"
    />
  );
}
