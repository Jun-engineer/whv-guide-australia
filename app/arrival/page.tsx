import type { Metadata } from "next";
import { GuideCategoryPage } from "@/components/articles/GuideCategoryPage";

export const metadata: Metadata = {
  title: "渡航後にやること",
  description: "到着直後に必要な手続きを時系列で確認。",
};

export default function ArrivalPage() {
  return <GuideCategoryPage category="arrival" lead="到着初週にやるべき行政手続きと生活セットアップを案内します。" />;
}
