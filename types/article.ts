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
};
