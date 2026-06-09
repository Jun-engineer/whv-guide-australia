import type { Metadata } from "next";
import { GuideCategoryPage } from "@/components/articles/GuideCategoryPage";

export const metadata: Metadata = {
  title: "仕事探し",
  description: "ローカルジョブ探しの進め方と応募対策。",
};

export default function JobsPage() {
  return <GuideCategoryPage category="jobs" lead="求人探しから履歴書、トライアル面接まで実践的に解説します。" />;
}
