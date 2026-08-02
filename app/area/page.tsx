import type { Metadata } from "next";
import { GuideCategoryPage } from "@/components/articles/GuideCategoryPage";
import { buildCategoryMetadata } from "@/lib/socialImages";

export const metadata: Metadata = buildCategoryMetadata("area", {
  title: "エリアガイド",
  description: "シドニー・メルボルン・ブリスベン・パース・ケアンズなど主要都市の特徴を比較。",
  path: "/area",
});

export default function AreaPage() {
  return (
    <GuideCategoryPage
      category="area"
      lead="主要都市の仕事・家賃・気候を比較し、自分に合った拠点選びをサポートします。"
    />
  );
}
