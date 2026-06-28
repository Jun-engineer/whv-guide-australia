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

export type ArticleStep = {
  title: string;
  description: string;
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

export type Article = {
  id: string;
  title: string;
  slug: string;
  category: ArticleCategory;
  description: string;
  content: string[];
  steps: ArticleStep[];
  keyFacts?: ArticleFact[];
  tips?: string[];
  faqs?: ArticleFaq[];
  sources?: ArticleLink[];
  warnings?: string[];
  relatedSlugs: string[];
  updatedAt: string;
  published: boolean;
};
