import type { Metadata } from "next";
import { GuideCategoryPage } from "@/components/articles/GuideCategoryPage";

export const metadata: Metadata = {
  title: "家探し",
  description: "シェアハウス探しの実践ノウハウ。",
};

export default function HousingPage() {
  return <GuideCategoryPage category="housing" lead="詐欺回避のポイントを含め、現地での家探し方法を解説します。" />;
}
