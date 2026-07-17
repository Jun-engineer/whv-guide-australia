import type { Article } from "./types";
import { visaArticles } from "./visa";
import { arrivalArticles } from "./arrival";
import { tfnArticles } from "./tfn";
import { abnArticles } from "./abn";
import { taxReturnArticles } from "./tax-return";
import { superArticles } from "./super";
import { uberEatsArticles } from "./uber-eats";
import { doordashArticles } from "./doordash";
import { farmArticles } from "./farm";
import { housingArticles } from "./housing";
import { carsArticles } from "./cars";
import { moneyArticles } from "./money";
import { bankArticles } from "./bank";
import { transportArticles } from "./transport";
import { licenseArticles } from "./license";
import { jobsArticles } from "./jobs";
import { preparationArticles } from "./preparation";
import { secondVisaArticles } from "./second-visa";
import { simArticles } from "./sim";
import { foodArticles } from "./food";
import { clothingArticles } from "./clothing";
import { areaArticles } from "./area";
import { englishArticles } from "./english";
import { healthArticles } from "./health";

export type { Article } from "./types";

/**
 * カテゴリ別の記事配列。新しいカテゴリを追加するときは、モジュールを作成し
 * ここに import と categoryArticleGroups への追加を行う（types/article.ts の
 * ArticleCategory 追加も必要）。
 */
const categoryArticleGroups: Article[][] = [
  visaArticles,
  arrivalArticles,
  tfnArticles,
  abnArticles,
  taxReturnArticles,
  superArticles,
  uberEatsArticles,
  doordashArticles,
  farmArticles,
  housingArticles,
  carsArticles,
  moneyArticles,
  bankArticles,
  transportArticles,
  licenseArticles,
  jobsArticles,
  preparationArticles,
  secondVisaArticles,
  simArticles,
  foodArticles,
  clothingArticles,
  areaArticles,
  englishArticles,
  healthArticles,
];

/**
 * 歴史的な記事の並び順（トップページの注目記事など、配列順に依存する UI の
 * 挙動を維持するため）。ここに無い slug（新規記事）は末尾に追加される。
 * 新規記事は原則このリストの末尾に追記する。
 */
const ARTICLE_ORDER: string[] = [
  "whv-complete-guide",
  "visa-application",
  "arrival-checklist",
  "tfn-guide",
  "abn-guide",
  "tax-return-guide",
  "super-guide",
  "uber-eats-guide",
  "doordash-guide",
  "farm-second-visa",
  "housing-guide",
  "cars-guide",
  "money-transfer-wise",
  "bank-account-guide",
  "transport-payment-guide",
  "license-guide",
  "jobs-guide",
  "preparation-checklist",
  "insurance-guide",
  "second-visa-guide",
  "sim-guide",
  "food-guide",
  "clothing-guide",
  "area-overview",
  "area-sydney",
  "area-melbourne",
  "area-brisbane",
  "area-perth-cairns",
  "english-prep",
  "language-school",
  "medicare-oshc",
  "safety-emergency",
  "visa-options",
  "resume-guide",
  "interview-guide",
  "certifications",
  "share-house-finding",
  "farm-finding",
  "bank-comparison",
  "dasp-refund",
  "area-adelaide",
  "intercity-transport",
  "tax-return-howto",
  "packing-list",
  "working-rights",
  "opening-hours-holidays",
  "mental-health",
  "working-holiday-budget",
  "working-holiday-timeline",
  "first-30-days-roadmap",
  "whm-tax-rates",
  "88-day-calculation",
  "specified-work-industries",
  "six-month-specified-work",
  "working-holiday-model-plans",
  "working-holiday-common-mistakes",
  "working-holiday-with-low-english",
  "working-holiday-without-car",
  "working-holiday-couple",
  "working-holiday-solo-woman",
  "working-holiday-age-29-30",
  "working-holiday-eligibility",
  "visa-417-vs-462",
  "visa-cost-processing-time",
  "visa-proof-of-funds",
  "visa-health-examination",
  "visa-police-certificate",
  "visa-after-passport-renewal",
  "visa-grant-letter",
  "visa-first-entry-deadline",
  "visa-six-month-work-limitation",
  "visa-study-limit",
  "visa-travel-reentry",
  "bridging-visa-basics",
  "visa-refusal-cancellation",
  "vevo-check",
  "registered-migration-agent",
  "passport-validity-renewal",
  "japan-moving-out-procedures",
  "japan-tax-residency-before-departure",
  "international-driving-permit",
  "naati-licence-translation",
  "pre-departure-health-check",
  "medication-customs",
  "vaccinations-before-australia",
  "flight-booking-guide",
  "arrival-airport-guide",
  "temporary-accommodation-before-arrival",
  "cards-and-cash-before-departure",
  "keep-japanese-phone-number",
  "mail-forwarding-and-address",
  "document-backup",
  "australia-customs-quarantine",
  "baggage-packing-strategy",
  "power-plug-voltage",
  "farm-work-packing",
  "send-luggage-to-australia",
];

const flattened: Article[] = categoryArticleGroups.flat();
const bySlug = new Map(flattened.map((a) => [a.slug, a]));
const ordered = ARTICLE_ORDER.map((slug) => bySlug.get(slug)).filter(
  (a): a is Article => Boolean(a),
);
const orderedSlugs = new Set(ordered.map((a) => a.slug));
const rest = flattened.filter((a) => !orderedSlugs.has(a.slug));

/** 全記事（本文込み）を一つに結合した配列。順序は原本と一致。 */
export const articles: Article[] = [...ordered, ...rest];
