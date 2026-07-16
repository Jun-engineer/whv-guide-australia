import type { ContentPriority, ContentStatus, HubId } from "./content";

export type ArticleCategory =
  | "visa"
  | "preparation"
  | "arrival"
  | "tfn"
  | "abn"
  | "super"
  | "tax-return"
  | "bank"
  | "money"
  | "sim"
  | "transport"
  | "license"
  | "housing"
  | "jobs"
  | "farm"
  | "second-visa"
  | "uber-eats"
  | "doordash"
  | "cars"
  | "food"
  | "clothing"
  | "area"
  | "english"
  | "health";

export type ArticleImage = {
  /** /public 配下の画像パス（例: /guides/visa/immiaccount.png） */
  src: string;
  alt: string;
  caption?: string;
};

export type ArticleStep = {
  title: string;
  description: string;
  /** 手順の画像（用意できたら設定。next/image で表示） */
  image?: ArticleImage;
  /** 画像がまだ無い場合に表示するプレースホルダの説明（どんな写真を入れるか） */
  imageHint?: string;
};

export type ArticleFaq = {
  question: string;
  answer: string;
};

export type ArticleFact = {
  label: string;
  value: string;
};

export type ArticleLink = {
  label: string;
  url: string;
};

export type ArticlePhrase = {
  /** 英語表現 */
  en: string;
  /** 日本語訳 */
  ja: string;
  /** 使う場面などの補足 */
  note?: string;
};

export type Article = {
  id: string;
  title: string;
  slug: string;
  category: ArticleCategory;
  description: string;
  /** 記事上部のヒーロー画像（任意） */
  heroImage?: ArticleImage;
  content: string[];
  steps: ArticleStep[];
  keyFacts?: ArticleFact[];
  tips?: string[];
  /** 現地で使える英語フレーズ＋日本語訳（任意） */
  phrases?: ArticlePhrase[];
  faqs?: ArticleFaq[];
  sources?: ArticleLink[];
  warnings?: string[];
  relatedSlugs: string[];
  updatedAt: string;
  published: boolean;

  // --- コンテンツ管理レイヤー（Phase A）向けの任意メタ ---
  /**
   * トピックのハブ（未指定なら category から自動導出）。
   * 型は types/content.ts の HubId と同じ文字列。
   */
  hub?: HubId;
  /** ライフサイクル状態。未指定かつ published なら "published" 扱い。 */
  status?: ContentStatus;
  /** 実装優先度（未指定なら "keep"）。 */
  priority?: ContentPriority;
  /** 一覧・カード用の要約（未指定なら description を使用）。 */
  summary?: string;
  /** 初回公開日（ISO 文字列, 任意）。 */
  publishedAt?: string;
  /** 内容を公式情報と照合して最終確認した日（YMYL 記事向け, 任意）。 */
  verifiedAt?: string;
  /** 公式情報源（政府サイト等。YMYL の裏付けを明示する, 任意）。 */
  officialSources?: ArticleLink[];
};
