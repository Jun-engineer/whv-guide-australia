import type { Metadata } from "next";
import { GuideCategoryPage } from "@/components/articles/GuideCategoryPage";

export const metadata: Metadata = {
  title: "英語学習",
  description: "渡航前の英語準備から語学学校の選び方まで、ワーホリで役立つ英語学習ガイド。",
  alternates: { canonical: "/english" },
};

export default function EnglishPage() {
  return (
    <GuideCategoryPage
      category="english"
      lead="渡航前にやるべき英語準備と、現地の語学学校の選び方を解説します。"
    />
  );
}
