import type { Metadata } from "next";
import { GuideCategoryPage } from "@/components/articles/GuideCategoryPage";

export const metadata: Metadata = {
  title: "エリアガイド",
  description: "シドニー・メルボルン・ブリスベン・パース・ケアンズなど主要都市の特徴を比較。",
  alternates: { canonical: "/area" },
};

export default function AreaPage() {
  return (
    <GuideCategoryPage
      category="area"
      lead="主要都市の仕事・家賃・気候を比較し、自分に合った拠点選びをサポートします。"
    />
  );
}
