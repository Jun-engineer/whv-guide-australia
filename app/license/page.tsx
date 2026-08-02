import type { Metadata } from "next";
import { GuideCategoryPage } from "@/components/articles/GuideCategoryPage";
import { buildCategoryMetadata } from "@/lib/socialImages";

export const metadata: Metadata = buildCategoryMetadata("license", {
  title: "運転免許",
  description:
    "日本の免許＋国際免許での運転可否、長期滞在時の現地免許への切り替えや更新の考え方を州別の注意点とともに解説します。",
  path: "/license",
});

export default function LicensePage() {
  return (
    <GuideCategoryPage
      category="license"
      lead="国際免許での運転から現地免許への切り替えまで、車を運転するために必要な手続きを解説します。"
    />
  );
}
