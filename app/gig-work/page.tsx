import type { Metadata } from "next";
import { GuideCategoryPage } from "@/components/articles/GuideCategoryPage";

export const metadata: Metadata = {
  title: "ギグワーク・副業",
  description:
    "オーストラリアのワーホリ向けギグワーク・副業ガイド。Uber EatsやDoorDashなどフードデリバリーの比較、ABN・税金・GST・Superの扱い、保険、車両（自転車・E-bike・スクーター・車）の費用比較、経費と走行記録まで、個人事業主として働く際のポイントを解説します。",
  alternates: { canonical: "/gig-work" },
};

export default function GigWorkPage() {
  return (
    <GuideCategoryPage
      category="gig-work"
      lead="フードデリバリーを中心としたギグワーク・副業の始め方を、サービス比較・ABN・税金・保険・車両・経費の記録に分けて解説します。多くは個人事業主（sole trader）としての働き方で、税・保険・記録は自分で管理する必要があります。"
    />
  );
}
