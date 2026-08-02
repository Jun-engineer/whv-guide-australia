import type { OfficialSource } from "@/types/content";

/** ニューステンプレートの必須（または推奨）記入項目。 */
export type NewsTemplateField = {
  /** 項目名（例: 発表日）。 */
  label: string;
  /** 必須項目かどうか。 */
  required: boolean;
  /** 何を・なぜ書くかの説明。 */
  hint: string;
};

/**
 * 制度変更・警報などのニュースを正確に伝えるための編集テンプレート。
 * 読者が最新情報を公式で確認するためのチェックリストとしても機能する。
 */
export type NewsTemplate = {
  slug: string;
  /** 公開パス（例: /news/templates/visa-changes）。 */
  path: string;
  title: string;
  /** ナビ・カード用の短いラベル。 */
  navLabel: string;
  description: string;
  /** 見出しのアイコン（絵文字）。 */
  icon: string;
  /** 分類ラベル（例: ビザ / 賃金 / 税・Super / 費用 / 防災 / 詐欺）。 */
  categoryLabel: string;
  /** テンプレートの目的・使い方（段落）。 */
  intro: string[];
  /** 記事化する際に必須・推奨となる記入項目。 */
  fields: NewsTemplateField[];
  /** 執筆・確認時の注意点。 */
  notes: string[];
  /** そのまま複製して使える記入スケルトン（行単位）。 */
  skeleton: string[];
  /** 公式情報と照合した最終確認日。 */
  verifiedAt: string;
  /** 一次情報の確認先。 */
  officialSources: OfficialSource[];
  /** 関連ガイド記事の slug。 */
  relatedSlugs: string[];
  status: "published";
};
