import type { Metadata } from "next";
import { GuideCategoryPage } from "@/components/articles/GuideCategoryPage";

export const metadata: Metadata = {
  title: "健康・安全",
  description: "海外保険・Medicare・病院のかかり方から、緊急時の対応・安全対策まで。",
  alternates: { canonical: "/health" },
};

export default function HealthPage() {
  return (
    <GuideCategoryPage
      category="health"
      lead="現地での医療機関のかかり方、保険の使い方、緊急時の対応をまとめました。"
    />
  );
}
