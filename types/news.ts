export type NewsCategory = "visa" | "tax" | "cost" | "site" | "other";

export type NewsItem = {
  id: string;
  slug: string;
  title: string;
  /** 公開日 YYYY-MM-DD */
  date: string;
  category: NewsCategory;
  /** 一覧・カードに出す要約 */
  summary: string;
  /** 本文（段落ごと） */
  body: string[];
  /** 出典リンク（任意） */
  source?: {
    label: string;
    url: string;
  };
  /** 関連ガイド記事の slug（任意） */
  relatedGuide?: string;
  published: boolean;
};
