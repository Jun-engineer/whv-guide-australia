import type { OfficialSource } from "@/types/content";

/** A single checklist item. `facets` optionally constrain when it is shown. */
export type ChecklistItem = {
  id: string;
  label: string;
  /** 補足説明（任意）。 */
  note?: string;
  /** ファセット別の対象値（未指定 = 全条件で表示）。例: { climate: ["cool"] }。 */
  facets?: Record<string, string[]>;
};

/** A titled group of checklist items. */
export type ChecklistGroup = {
  id: string;
  title: string;
  items: ChecklistItem[];
};

/** A single selectable facet filter (for the packing tool). */
export type FacetOption = {
  value: string;
  label: string;
};

export type FacetFilter = {
  /** ファセットのキー（ChecklistItem.facets のキーと一致）。 */
  key: string;
  label: string;
  /** 選択肢（先頭に「すべて」を含めるかは UI 側で制御）。 */
  options: FacetOption[];
};

/** ツールの分類。 */
export type ToolCategory = "checklist" | "calculator" | "lookup";

/** 公開ツールのメタ情報（Tools ハブ・各ツールページ・関連リンクで共有）。 */
export type ToolMeta = {
  slug: string;
  path: string;
  title: string;
  /** ナビ・カード用の短いラベル。 */
  navLabel: string;
  description: string;
  category: ToolCategory;
  categoryLabel: string;
  /** 見出しのアイコン（絵文字）。 */
  icon: string;
  status: "published";
  /** 公式情報と照合した最終確認日（公式のしきい値・ルールを扱う場合）。 */
  verifiedAt?: string;
  /** 公式情報源（YMYL の裏付け）。 */
  officialSources?: OfficialSource[];
  /** このツールを案内する関連記事の slug。 */
  relatedArticleSlugs: string[];
};
