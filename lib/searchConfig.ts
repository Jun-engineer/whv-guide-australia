import type { ArticleCategory } from "@/types/article";

/**
 * 検索エイリアス（別名・略称・表記ゆれ）の一元管理ファイル。
 *
 * ここに用語を追加するだけで、記事本文を書き換えることなく検索ヒット率を
 * 上げられる。メンテナンスの入口はこの1ファイルに集約している。
 *
 * ■ 追加方法
 *  1. カテゴリ全体に効かせたい別名 → `categoryAliases` に追記する。
 *     例: `tfn: ["TFN", "Tax File Number", "タックスファイルナンバー"]`
 *  2. 特定の記事（slug）だけに効かせたい別名 → `slugAliases` に追記する。
 *     例: `"second-visa-guide": ["セカンドビザ", "88日", "specified work"]`
 *  3. 記事データ側で個別に足したい場合 → 記事の `searchAliases` / `tags` を使う。
 *
 * すべて大文字小文字・全角半角を区別せずに突き合わせる（正規化は lib/search.ts）。
 */

/** カテゴリ単位で全記事に付与される検索エイリアス。 */
export const categoryAliases: Partial<Record<ArticleCategory, string[]>> = {
  tfn: ["TFN", "Tax File Number", "タックスファイルナンバー", "納税者番号"],
  abn: ["ABN", "Australian Business Number", "個人事業主番号", "ビジネスナンバー"],
  super: [
    "Super",
    "Superannuation",
    "スーパーアニュエーション",
    "スーパー",
    "年金",
    "DASP",
  ],
  "tax-return": ["Tax Return", "タックスリターン", "確定申告", "還付", "myGov", "ATO"],
  "second-visa": [
    "セカンドビザ",
    "Second Visa",
    "88日",
    "Specified Work",
    "サードビザ",
    "Third Visa",
    "regional work",
  ],
  farm: ["ファーム", "Farm", "農作業", "ピッキング", "picking", "regional"],
  housing: [
    "家探し",
    "シェアハウス",
    "Share House",
    "Bond",
    "ボンド",
    "敷金",
    "rent",
    "inspection",
    "内見",
  ],
  cars: ["車", "Car", "Rego", "Registration", "車両登録", "rwc", "roadworthy", "中古車"],
  license: ["運転免許", "Driver Licence", "Driver License", "国際免許", "免許切替"],
  bank: ["銀行口座", "Bank Account", "Commonwealth", "CommBank", "ANZ", "NAB", "Westpac"],
  money: ["送金", "両替", "Wise", "レート", "為替", "remittance"],
  sim: ["SIM", "eSIM", "格安SIM", "携帯", "Telstra", "Optus", "Vodafone"],
  visa: ["ビザ", "Visa", "サブクラス", "subclass 417", "subclass 462", "WHV", "ワーホリビザ"],
  health: ["Medicare", "OSHC", "保険", "病院", "医療", "メンタルヘルス"],
  jobs: ["仕事探し", "求人", "履歴書", "Resume", "面接", "Interview", "ジャパレス"],
  "uber-eats": ["Uber Eats", "ウーバーイーツ", "配達", "ギグワーク"],
  doordash: ["DoorDash", "ドアダッシュ", "配達", "ギグワーク"],
  "gig-work": ["ギグワーク", "gig", "副業", "配達"],
  transport: ["交通", "Opal", "myki", "タッチ決済", "public transport"],
  english: ["英語", "English", "語学学校", "IELTS", "英会話"],
  area: ["エリア", "都市", "Sydney", "Melbourne", "Brisbane", "Perth", "地域"],
  arrival: ["到着後", "現地セットアップ", "arrival"],
  preparation: ["渡航前", "準備", "持ち物", "パッキング", "packing"],
  "return-home": ["帰国", "帰国準備", "return home", "DASP"],
};

/** 個別 slug に付与する検索エイリアス（カテゴリ共通で足りないとき用）。 */
export const slugAliases: Record<string, string[]> = {
  "farm-second-visa": ["88日", "セカンドビザ", "Specified Work"],
  "dasp-refund": ["DASP", "スーパー 返金", "年金 返金", "Departing Australia Superannuation Payment"],
};

/**
 * ゼロ件時やトップページのショートカットに使う人気トピック。
 * ラベルと遷移先（カテゴリのハブページ）をまとめて定義する。
 */
export const popularTopics: Array<{ label: string; href: string }> = [
  { label: "ビザ", href: "/visa" },
  { label: "仕事", href: "/jobs" },
  { label: "ファーム", href: "/farm" },
  { label: "税金", href: "/tax-return" },
  { label: "家探し", href: "/housing" },
  { label: "車・免許", href: "/cars" },
];
