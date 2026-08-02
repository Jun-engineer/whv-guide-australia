import type { Metadata } from "next";
import { GuideCategoryPage } from "@/components/articles/GuideCategoryPage";
import { buildCategoryMetadata } from "@/lib/socialImages";

export const metadata: Metadata = buildCategoryMetadata("jobs", {
  title: "仕事探し",
  description: "ローカルジョブ探しの進め方と応募対策。",
  path: "/jobs",
});

export default function JobsPage() {
  return <GuideCategoryPage category="jobs" lead="求人探しから履歴書、トライアル面接まで実践的に解説します。" />;
}
