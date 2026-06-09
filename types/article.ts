export type ArticleCategory =
  | "visa"
  | "preparation"
  | "arrival"
  | "tfn"
  | "abn"
  | "super"
  | "tax-return"
  | "bank"
  | "sim"
  | "housing"
  | "jobs"
  | "farm"
  | "second-visa"
  | "uber-eats"
  | "doordash"
  | "cars"
  | "food"
  | "clothing";

export type ArticleStep = {
  title: string;
  description: string;
};

export type Article = {
  id: string;
  title: string;
  slug: string;
  category: ArticleCategory;
  description: string;
  content: string[];
  steps: ArticleStep[];
  warnings?: string[];
  relatedSlugs: string[];
  updatedAt: string;
  published: boolean;
};
