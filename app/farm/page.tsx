import type { Metadata } from "next";
import { GuideCategoryPage } from "@/components/articles/GuideCategoryPage";
import { buildCategoryMetadata } from "@/lib/socialImages";

export const metadata: Metadata = buildCategoryMetadata("farm", {
  title: "ファームジョブ",
  description: "地域選び、給与体系、注意点を解説。",
  path: "/farm",
});

export default function FarmPage() {
  return <GuideCategoryPage category="farm" lead="セカンドビザを意識したファームジョブの探し方をまとめました。" />;
}
