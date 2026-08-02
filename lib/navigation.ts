/**
 * サイト全体のカテゴリ・ナビゲーションの単一の情報源。
 *
 * ヘッダー（デスクトップのドロップダウン）、モバイルメニュー（アコーディオン）、
 * トップページの「カテゴリから探す」、フッターのサイトマップがすべてこの定義を
 * 参照することで、ラベルと遷移先（canonical URL）を一元管理する。
 *
 * ルール:
 * - href は公開中（published）のハブページの canonical URL のみを指すこと。
 *   例: /tax や /downloads の索引ページは存在しないためリンクしない
 *   （税金は /tfn・/tax-return 等、ダウンロードは /tools からたどれる）。
 * - 空・未公開・草稿のハブは項目を追加しない。
 */

export type NavLink = {
  href: string;
  label: string;
  /** トップページのカードなどで使う短い説明（任意）。 */
  description?: string;
};

export type NavGroup = {
  id: string;
  label: string;
  links: NavLink[];
};

/**
 * ヘッダー（デスクトップのドロップダウン）とモバイルメニュー（アコーディオン）で
 * 共有するコンパクトなグループ分け。トップレベルは 5 項目に抑える。
 */
export const primaryNavGroups: NavGroup[] = [
  {
    id: "start",
    label: "はじめる",
    links: [
      { href: "/visa", label: "ビザ" },
      { href: "/preparation", label: "渡航前準備" },
      { href: "/arrival", label: "到着後の手続き" },
    ],
  },
  {
    id: "work",
    label: "仕事・ビザ",
    links: [
      { href: "/jobs", label: "仕事探し" },
      { href: "/farm", label: "ファーム・88日" },
      { href: "/second-visa", label: "セカンド・サードビザ" },
      { href: "/gig-work", label: "ギグワーク・配達" },
    ],
  },
  {
    id: "life",
    label: "生活・お金",
    links: [
      { href: "/money", label: "銀行・送金" },
      { href: "/tfn", label: "税金・TFN・ABN" },
      { href: "/housing", label: "家探し" },
      { href: "/health", label: "健康・安全" },
      { href: "/english", label: "英語学習" },
      { href: "/sim", label: "SIM・通信" },
    ],
  },
  {
    id: "area",
    label: "エリア・旅行",
    links: [
      { href: "/area", label: "都市・地域ガイド" },
      { href: "/travel", label: "国内旅行" },
      { href: "/transport", label: "交通・決済" },
      { href: "/cars", label: "車・免許" },
    ],
  },
  {
    id: "more",
    label: "その他のガイド",
    links: [
      { href: "/return-home", label: "帰国準備" },
      { href: "/tools", label: "便利ツール・ダウンロード" },
      { href: "/community-guide", label: "友達・コミュニティ" },
      { href: "/community", label: "掲示板" },
      { href: "/news", label: "ニュース" },
    ],
  },
];

/**
 * トップページ「カテゴリから探す」に並べる主要ハブのカード。
 * 個別記事ではなくハブ（カテゴリの索引ページ）だけを載せる。
 */
export const categoryDirectory: NavLink[] = [
  { href: "/visa", label: "ビザ・渡航準備", description: "ワーホリビザの申請と渡航前の準備。" },
  { href: "/arrival", label: "到着後の手続き", description: "到着直後にやる初期セットアップ。" },
  { href: "/jobs", label: "仕事探し", description: "レジュメ・面接・求人サイトの使い方。" },
  { href: "/farm", label: "ファーム・セカンドビザ", description: "88日と地域・職種の選び方。" },
  { href: "/money", label: "お金・送金", description: "口座・送金・両替をスマートに。" },
  { href: "/tfn", label: "税金・TFN・ABN", description: "納税者番号と確定申告の基礎。" },
  { href: "/housing", label: "家探し", description: "シェアハウス・内見・ボンド。" },
  { href: "/health", label: "健康・安全", description: "医療・保険・緊急時の備え。" },
  { href: "/english", label: "英語学習", description: "渡航前準備と語学学校の選び方。" },
  { href: "/transport", label: "車・免許・交通", description: "運転・車の購入・公共交通と決済。" },
  { href: "/area", label: "都市・地域ガイド", description: "主要都市の仕事・家賃・暮らし。" },
  { href: "/travel", label: "国内旅行", description: "ロードトリップと週末の過ごし方。" },
  { href: "/return-home", label: "帰国準備", description: "帰国手続きと次のキャリア。" },
  { href: "/tools", label: "便利ツール・ダウンロード", description: "チェックリストとテンプレート集。" },
];

/**
 * フッターの完全なサイトマップ。すべての公開ハブへの導線を確保する。
 * ヘッダーより網羅的だが、遷移先は同じ canonical URL を使う。
 */
export const footerNavGroups: NavGroup[] = [
  {
    id: "start",
    label: "はじめる",
    links: [
      { href: "/visa", label: "ビザ" },
      { href: "/preparation", label: "渡航前準備" },
      { href: "/arrival", label: "到着後の手続き" },
      { href: "/return-home", label: "帰国準備" },
    ],
  },
  {
    id: "work",
    label: "仕事・ビザ",
    links: [
      { href: "/jobs", label: "仕事探し" },
      { href: "/farm", label: "ファーム" },
      { href: "/second-visa", label: "セカンド・サードビザ" },
      { href: "/gig-work", label: "ギグワーク・副業" },
      { href: "/uber-eats", label: "Uber Eats" },
      { href: "/doordash", label: "DoorDash" },
    ],
  },
  {
    id: "money",
    label: "お金・手続き",
    links: [
      { href: "/money", label: "送金・両替" },
      { href: "/bank", label: "銀行口座" },
      { href: "/tfn", label: "TFN" },
      { href: "/abn", label: "ABN" },
      { href: "/super", label: "Superannuation" },
      { href: "/tax-return", label: "タックスリターン" },
    ],
  },
  {
    id: "life",
    label: "生活",
    links: [
      { href: "/housing", label: "家探し" },
      { href: "/health", label: "健康・安全" },
      { href: "/english", label: "英語学習" },
      { href: "/sim", label: "SIM・通信" },
      { href: "/food", label: "食事" },
      { href: "/clothing", label: "服装" },
    ],
  },
  {
    id: "area",
    label: "エリア・旅行・交通",
    links: [
      { href: "/area", label: "エリアガイド" },
      { href: "/travel", label: "旅行" },
      { href: "/transport", label: "交通・決済" },
      { href: "/cars", label: "車・購入" },
      { href: "/license", label: "運転免許" },
    ],
  },
  {
    id: "more",
    label: "ツール・コミュニティ",
    links: [
      { href: "/tools", label: "便利ツール・ダウンロード" },
      { href: "/community-guide", label: "友達・コミュニティ" },
      { href: "/community", label: "掲示板" },
      { href: "/news", label: "ニュース" },
      { href: "/request", label: "リクエスト" },
    ],
  },
];
