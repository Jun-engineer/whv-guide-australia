import type { Metadata } from "next";
import { GuideCategoryPage } from "@/components/articles/GuideCategoryPage";

export const metadata: Metadata = {
  title: "SIM・通信環境",
  description: "主要キャリアとプランの選び方を紹介。",
};

export default function SimPage() {
  return <GuideCategoryPage category="sim" lead="都市別の通信事情と、最初に選ぶSIMプランの考え方を紹介します。" />;
}
