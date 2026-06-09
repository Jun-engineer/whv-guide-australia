import type { Metadata } from "next";
import { GuideCategoryPage } from "@/components/articles/GuideCategoryPage";

export const metadata: Metadata = {
  title: "TFN取得",
  description: "Tax File Numberの申請手順を詳しく解説。",
};

export default function TfnPage() {
  return <GuideCategoryPage category="tfn" lead="給与受け取りに必要なTFN取得手順をわかりやすく整理します。" />;
}
