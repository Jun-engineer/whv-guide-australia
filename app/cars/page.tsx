import type { Metadata } from "next";
import { GuideCategoryPage } from "@/components/articles/GuideCategoryPage";
import { buildCategoryMetadata } from "@/lib/socialImages";

export const metadata: Metadata = buildCategoryMetadata("cars", {
  title: "車・交通ガイド",
  description: "車の購入、Rego、保険、州ごとのルールを解説。",
  path: "/cars",
});

export default function CarsPage() {
  return <GuideCategoryPage category="cars" lead="車購入から登録・保険まで、移動手段の基礎を解説します。" />;
}
