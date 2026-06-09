import type { Metadata } from "next";
import { GuideCategoryPage } from "@/components/articles/GuideCategoryPage";

export const metadata: Metadata = {
  title: "ビザ取得ガイド",
  description: "ワーホリビザの申請手順と注意点を整理したガイド。",
};

export default function VisaPage() {
  return <GuideCategoryPage category="visa" lead="ワーホリビザ申請の全体像と失敗しやすいポイントを解説します。" />;
}
