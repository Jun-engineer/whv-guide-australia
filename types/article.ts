import type {
  ContentPriority,
  ContentStatus,
  HubId,
  OfficialSource,
} from "./content";

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
  | "health"
  | "travel"
  | "return-home"
  | "community"
  | "gig-work";

export type ArticleImage = {
  /** /public 配下の画像パス（例: /guides/visa/immiaccount.png） */
  src: string;
  /** 代替テキスト（必須・内容が分かる説明にする）。 */
  alt: string;
  /** 画像の説明キャプション（任意）。 */
  caption?: string;
  /** 撮影者・出典などのクレジット（任意）。 */
  credit?: string;
  /** 実寸の幅（px, 任意。指定するとレイアウトシフトを防止）。 */
  width?: number;
  /** 実寸の高さ（px, 任意）。 */
  height?: number;
  /** 表示位置の意図。hero=記事上部, inline=本文中, gallery=ギャラリー。 */
  position?: "hero" | "inline" | "gallery";
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
  /** 本文中・ギャラリーに表示する追加画像（任意）。position で扱いを分ける。 */
  images?: ArticleImage[];
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

  // --- 可読性向上レイヤー（任意。設定された記事のみ表示される） ---
  /** 冒頭に置く「結論・要点の一言回答」。長い記事の直帰を防ぐ。 */
  answer?: string;
  /** 「この記事のポイント」に表示する箇条書き（3〜5項目推奨）。 */
  points?: string[];
  /** 「この記事が必要な人」に表示する箇条書き。 */
  audience?: string[];
  /** 「よくある間違い」に表示する箇条書き。 */
  commonMistakes?: string[];

  // --- 検索レイヤー（任意） ---
  /** 検索・分類用のタグ（日本語/英語どちらも可）。 */
  tags?: string[];
  /**
   * この記事に固有の検索エイリアス（別名・略称・表記ゆれ）。
   * カテゴリ共通のエイリアスは lib/searchConfig.ts で一括管理する。
   */
  searchAliases?: string[];

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
  officialSources?: OfficialSource[];
  /** 検索意図（重複検知用の短いラベル, 任意）。 */
  searchIntent?: string;
  /** 統合先の primary slug（status: merged のとき）。 */
  mergedInto?: string;
  /** この記事へ統合された旧 slug（リダイレクト元）。 */
  redirectFrom?: string[];
};
