import type { ArticleCategory } from "@/types/article";
import type { ContentHub, HubId } from "@/types/content";
import { manifestHubs } from "./manifest.generated";

/** manifest 由来のハブ一覧（21 個）。 */
export const hubs: ContentHub[] = manifestHubs;

const hubById = new Map<HubId, ContentHub>(hubs.map((h) => [h.id, h]));

export function getHub(id: HubId): ContentHub | undefined {
  return hubById.get(id);
}

export function getHubLabel(id: HubId): string {
  return hubById.get(id)?.label ?? id;
}

/**
 * 既存の記事カテゴリ（ArticleCategory, 24 種）を manifest のハブ（21 種）へ対応
 * づける。manifest を直接コードへ固定せず、両者を橋渡しするためのアダプタ。
 */
const CATEGORY_TO_HUB: Record<ArticleCategory, HubId> = {
  visa: "visa",
  preparation: "preparation",
  arrival: "arrival",
  tfn: "tax",
  abn: "tax",
  super: "tax",
  "tax-return": "tax",
  bank: "money",
  money: "money",
  sim: "daily-life",
  transport: "transport",
  license: "transport",
  housing: "housing",
  jobs: "jobs",
  farm: "farm",
  "second-visa": "visa",
  "uber-eats": "gig-work",
  doordash: "gig-work",
  cars: "transport",
  food: "daily-life",
  clothing: "daily-life",
  area: "area",
  english: "english",
  health: "health",
};

export function categoryToHub(category: ArticleCategory): HubId {
  return CATEGORY_TO_HUB[category] ?? "start-here";
}
