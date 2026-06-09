import type { Metadata } from "next";
import { GuideCategoryPage } from "@/components/articles/GuideCategoryPage";

export const metadata: Metadata = {
  title: "Uber Eatsガイド",
  description: "Uber Eats配達員の始め方と稼働のコツ。",
};

export default function UberEatsPage() {
  return <GuideCategoryPage category="uber-eats" lead="登録から保険、稼ぎ方までUber Eatsの実践情報を紹介します。" />;
}
