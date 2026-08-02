import type { Metadata } from "next";
import { GuideCategoryPage } from "@/components/articles/GuideCategoryPage";

export const metadata: Metadata = {
  title: "友達・コミュニティ",
  description:
    "オーストラリアのワーホリで友達を作る方法、日本人コミュニティやSNSグループの安全な使い方、ホームシックや孤独への対処、カルチャーショック、デーティングアプリの安全対策などをまとめた、交流とメンタルサポートのガイドです。投稿・相談ができるコミュニティ掲示板とあわせて活用してください。",
  alternates: { canonical: "/community-guide" },
};

export default function CommunityGuidePage() {
  return (
    <GuideCategoryPage
      category="community"
      routePath="/community-guide"
      lead="友達の作り方・コミュニティの安全な使い方・ホームシックやカルチャーショックへの対処・出会いの安全対策など、オーストラリアでの交流とメンタルサポートに役立つ情報をまとめました。悩みや情報交換はコミュニティ掲示板もご利用ください。"
    />
  );
}
