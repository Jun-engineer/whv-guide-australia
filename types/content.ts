/**
 * コンテンツ管理レイヤーの型定義（Phase A）。
 *
 * これは content-manifest.yaml（設計上の全記事カタログ）と、実際に本文を持つ
 * 記事データ（lib/mockData.ts）を橋渡しするための共通型です。manifest を直接
 * コードに固定せず、adapter（scripts/generate-content-registry.mjs → registry）
 * を介して読み込みます。
 */

/** 記事のライフサイクル状態。`published` のみ公開対象。 */
export type ContentStatus =
  | "planned"
  | "draft"
  | "review"
  | "published"
  | "merged"
  | "archived"
  /** manifest 上で「既存記事」を表すマーカー（コード側の実記事に対応） */
  | "existing";

/** 実装優先度。`keep` は既存維持。 */
export type ContentPriority = "P0" | "P1" | "P2" | "P3" | "keep";

/** コンテンツ種別。 */
export type ContentType =
  | "article"
  | "interactive-tool"
  | "download"
  | "news-template";

/** manifest で定義された 21 個のハブ（トピックの大分類）。 */
export type HubId =
  | "start-here"
  | "visa"
  | "preparation"
  | "arrival"
  | "money"
  | "tax"
  | "jobs"
  | "qualifications"
  | "farm"
  | "gig-work"
  | "housing"
  | "transport"
  | "health"
  | "daily-life"
  | "english"
  | "area"
  | "travel"
  | "community"
  | "return-home"
  | "news"
  | "tools";

/** ハブ（トピック分類）の定義。 */
export type ContentHub = {
  id: HubId;
  label: string;
  route: string;
  navGroup: string;
};

/** 公式情報源（YMYL 記事の裏付け）。 */
export type OfficialSource = {
  label: string;
  url: string;
  /** 実際に内容を確認した日（ISO 文字列, 任意）。 */
  accessedAt?: string;
};

/**
 * manifest（YAML）1 エントリの正規化済みの形。
 * generate スクリプトが lib/content/manifest.generated.ts に出力します。
 */
export type ManifestItem = {
  slug: string;
  title: string;
  hub: HubId;
  status: ContentStatus;
  type: ContentType;
  priority: ContentPriority;
  path: string;
  intent?: string;
  brief?: string;
  update?: string;
  /** status が "merged" の場合の統合先 slug。 */
  mergedInto?: string;
};

/**
 * コンテンツレジストリの統合エントリ。
 * 実記事（本文あり）と計画中エントリ（本文なし）を同じ形で扱います。
 */
export type ContentItem = {
  slug: string;
  path: string;
  title: string;
  hub: HubId;
  type: ContentType;
  status: ContentStatus;
  priority: ContentPriority;
  intent?: string;
  summary?: string;
  publishedAt?: string;
  updatedAt?: string;
  verifiedAt?: string;
  officialSources?: OfficialSource[];
  relatedSlugs?: string[];
  /** 検索意図（重複検知・クラスタリング用の短いラベル）。 */
  searchIntent?: string;
  /** 統合先の primary slug（status: merged のとき）。 */
  mergedInto?: string;
  /** この記事へ統合された旧 slug（リダイレクト元）。 */
  redirectFrom?: string[];
  /** true の場合、コード側に実際の本文（Article）が存在する。 */
  hasBody: boolean;
};
