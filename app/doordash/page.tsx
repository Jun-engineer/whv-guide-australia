import type { Metadata } from "next";
import { GuideCategoryPage } from "@/components/articles/GuideCategoryPage";

export const metadata: Metadata = {
  title: "DoorDashガイド",
  description: "DoorDash配達の登録方法と稼働ノウハウ。",
};

export default function DoorDashPage() {
  return <GuideCategoryPage category="doordash" lead="DoorDashの登録から効率的な稼働方法までを解説します。" />;
}
