import type { Metadata } from "next";
import { GuideCategoryPage } from "@/components/articles/GuideCategoryPage";
import { buildCategoryMetadata } from "@/lib/socialImages";

export const metadata: Metadata = buildCategoryMetadata("travel", {
  title: "旅行ガイド",
  description: "オーストラリア国内の旅行プラン・ベストシーズン・国内線・ロードトリップ・キャンプ・東海岸周遊など、ワーホリの旅を計画するためのガイド。",
  path: "/travel",
});

export default function TravelPage() {
  return (
    <GuideCategoryPage
      category="travel"
      lead="ベストシーズン・国内線・ロードトリップ・キャンプ・モデルルートなど、広いオーストラリアを安全に旅するための計画をサポートします。"
    />
  );
}
