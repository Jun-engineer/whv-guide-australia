import type { Metadata } from "next";
import { GuideCategoryPage } from "@/components/articles/GuideCategoryPage";

export const metadata: Metadata = {
  title: "ABN取得ガイド",
  description: "ギグワークに必要なABNの取得手順を解説。",
};

export default function AbnPage() {
  return <GuideCategoryPage category="abn" lead="Sole TraderとしてのABN取得と注意点を解説します。" />;
}
