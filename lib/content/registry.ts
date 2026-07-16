/**
 * コンテンツレジストリ（Phase A）。
 *
 * 実際に本文を持つ記事（lib/mockData.ts の Article）と、manifest 上の計画中
 * コンテンツ（本文なし）を単一の ContentItem 一覧に統合します。
 *
 * 公開制御の原則:
 * - 公開対象は「本文があり（hasBody）かつ status === 'published'」のものだけ。
 * - 計画中（planned / draft / review / archived）は一覧・検索・sitemap・RSS・
 *   構造化データから除外する（本ファイルの getPublishedContent を単一の窓口に）。
 */
import { articles } from "@/lib/mockData";
import type { Article } from "@/types/article";
import type { ContentItem, ContentStatus, HubId } from "@/types/content";
import {
  manifestExistingItems,
  manifestPlannedItems,
} from "./manifest.generated";
import { categoryToHub } from "./hubs";

function articleStatus(article: Article): ContentStatus {
  if (article.status) return article.status;
  return article.published ? "published" : "draft";
}

function articleToContentItem(article: Article): ContentItem {
  return {
    slug: article.slug,
    path: `/guides/${article.slug}`,
    title: article.title,
    hub: article.hub ?? categoryToHub(article.category),
    type: "article",
    status: articleStatus(article),
    priority: article.priority ?? "keep",
    summary: article.summary ?? article.description,
    publishedAt: article.publishedAt,
    updatedAt: article.updatedAt,
    verifiedAt: article.verifiedAt,
    officialSources: article.officialSources,
    relatedSlugs: article.relatedSlugs,
    hasBody: true,
  };
}

/**
 * 全コンテンツ（実記事 + 計画中）を統合。実記事が存在する slug は必ず実記事を
 * 正とし、manifest 側の重複エントリは無視する。
 */
export function getAllContent(): ContentItem[] {
  const bodyItems = articles.map(articleToContentItem);
  const bodySlugs = new Set(bodyItems.map((item) => item.slug));

  const plannedItems: ContentItem[] = manifestPlannedItems
    .filter((item) => !bodySlugs.has(item.slug))
    .map((item) => ({
      slug: item.slug,
      path: item.path,
      title: item.title,
      hub: item.hub,
      type: item.type,
      status: item.status,
      priority: item.priority,
      intent: item.intent,
      summary: item.brief,
      hasBody: false,
    }));

  return [...bodyItems, ...plannedItems];
}

/** 公開対象のコンテンツのみ（本文あり & published）。公開面の唯一の窓口。 */
export function getPublishedContent(): ContentItem[] {
  return getAllContent().filter(
    (item) => item.hasBody && item.status === "published",
  );
}

/** 計画中/下書きなど、非公開のコンテンツ（管理・進捗把握用）。 */
export function getPlannedContent(): ContentItem[] {
  return getAllContent().filter(
    (item) => !(item.hasBody && item.status === "published"),
  );
}

export function getContentByHub(hub: HubId): ContentItem[] {
  return getAllContent().filter((item) => item.hub === hub);
}

export function getContentByStatus(status: ContentStatus): ContentItem[] {
  return getAllContent().filter((item) => item.status === status);
}

export function findContentBySlug(slug: string): ContentItem | undefined {
  return getAllContent().find((item) => item.slug === slug);
}

/** manifest の「既存」エントリ数（設計上のカタログとの突合用）。 */
export function getManifestExistingCount(): number {
  return manifestExistingItems.length;
}
