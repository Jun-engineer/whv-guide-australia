import type { Metadata } from "next";
import { GuideCategoryPage } from "@/components/articles/GuideCategoryPage";
import { buildCategoryMetadata } from "@/lib/socialImages";

export const metadata: Metadata = buildCategoryMetadata("health", {
  title: "健康・安全",
  description: "海外保険・Medicare・病院のかかり方から、緊急時の対応・安全対策まで。",
  path: "/health",
});

export default function HealthPage() {
  return (
    <GuideCategoryPage
      category="health"
      lead="現地での医療機関のかかり方、保険の使い方、緊急時の対応をまとめました。"
    />
  );
}
