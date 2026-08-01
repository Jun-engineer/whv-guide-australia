import type { Metadata } from "next";
import { GuideCategoryPage } from "@/components/articles/GuideCategoryPage";

export const metadata: Metadata = {
  title: "帰国準備・次のキャリア",
  description:
    "オーストラリアのワーホリを終えて帰国する前後にやることをまとめたガイド。帰国前チェックリスト、Final Pay、タックスリターン、DASP（Superの払い戻し）、各種サービスの解約などを、出国前と出国後に分けて解説します。",
  alternates: { canonical: "/return-home" },
};

export default function ReturnHomePage() {
  return (
    <GuideCategoryPage
      category="return-home"
      lead="帰国前チェックリスト・Final Pay・タックスリターン・DASP・解約手続きなど、オーストラリアを離れる前後にやることを、出国前と出国後に分けて整理します。"
    />
  );
}
