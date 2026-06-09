import type { Metadata } from "next";
import { GuideCategoryPage } from "@/components/articles/GuideCategoryPage";

export const metadata: Metadata = {
  title: "ファームジョブ",
  description: "地域選び、給与体系、注意点を解説。",
};

export default function FarmPage() {
  return <GuideCategoryPage category="farm" lead="セカンドビザを意識したファームジョブの探し方をまとめました。" />;
}
