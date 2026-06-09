import type { Metadata } from "next";
import { GuideCategoryPage } from "@/components/articles/GuideCategoryPage";

export const metadata: Metadata = {
  title: "服装・持ち物",
  description: "都市別の気候に合わせた持ち物を解説。",
};

export default function ClothingPage() {
  return <GuideCategoryPage category="clothing" lead="季節差の大きいオーストラリアで失敗しない持ち物を整理します。" />;
}
