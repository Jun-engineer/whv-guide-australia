import type { Metadata } from "next";
import { GuideCategoryPage } from "@/components/articles/GuideCategoryPage";

export const metadata: Metadata = {
  title: "セカンドビザ",
  description: "対象地域・職種と申請準備を紹介。",
};

export default function SecondVisaPage() {
  return <GuideCategoryPage category="second-visa" lead="セカンドビザ要件の最新確認ポイントを整理します。" />;
}
