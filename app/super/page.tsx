import type { Metadata } from "next";
import { GuideCategoryPage } from "@/components/articles/GuideCategoryPage";

export const metadata: Metadata = {
  title: "Superannuationガイド",
  description: "退職年金Superの仕組みと帰国後の請求方法。",
};

export default function SuperPage() {
  return <GuideCategoryPage category="super" lead="Superの仕組みと帰国後のDASP請求手順を解説します。" />;
}
