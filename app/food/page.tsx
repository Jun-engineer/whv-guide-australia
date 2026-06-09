import type { Metadata } from "next";
import { GuideCategoryPage } from "@/components/articles/GuideCategoryPage";

export const metadata: Metadata = {
  title: "食事・自炊",
  description: "節約しながら健康的に暮らす食生活ガイド。",
};

export default function FoodPage() {
  return <GuideCategoryPage category="food" lead="現地スーパーの使い方と日本食材の見つけ方を紹介します。" />;
}
