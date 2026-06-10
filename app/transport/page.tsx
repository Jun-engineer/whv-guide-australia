import type { Metadata } from "next";
import { GuideCategoryPage } from "@/components/articles/GuideCategoryPage";

export const metadata: Metadata = {
  title: "交通・決済",
  description:
    "OpalやmykiなどのICカードに加え、クレジット/デビットのタッチ決済でそのまま乗れる都市の交通事情と支払い方法を解説します。",
  alternates: { canonical: "/transport" },
};

export default function TransportPage() {
  return (
    <GuideCategoryPage
      category="transport"
      lead="現金や切符は基本不要。タッチ決済やICカードで快適に移動する方法を都市別にまとめました。"
    />
  );
}
