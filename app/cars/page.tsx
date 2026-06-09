import type { Metadata } from "next";
import { GuideCategoryPage } from "@/components/articles/GuideCategoryPage";

export const metadata: Metadata = {
  title: "車・交通ガイド",
  description: "車の購入、Rego、保険、州ごとのルールを解説。",
};

export default function CarsPage() {
  return <GuideCategoryPage category="cars" lead="車購入から登録・保険まで、移動手段の基礎を解説します。" />;
}
