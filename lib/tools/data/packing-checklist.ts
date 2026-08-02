import type { ChecklistGroup, FacetFilter } from "@/lib/tools/types";

/**
 * 持ち物チェックリストのファセット（絞り込み条件）。
 * UI では各ファセットの先頭に「すべて」を表示し、選択すると条件を無効化します。
 */
export const PACKING_FACETS: FacetFilter[] = [
  {
    key: "climate",
    label: "行き先の気候",
    options: [
      { value: "tropical", label: "熱帯・北部（ケアンズ / ダーウィン等）" },
      { value: "temperate", label: "温帯・主要都市（シドニー / メルボルン等）" },
      { value: "cool", label: "寒冷・内陸/タスマニア" },
    ],
  },
  {
    key: "season",
    label: "渡航シーズン",
    options: [
      { value: "summer", label: "夏（11〜3月ごろ）" },
      { value: "winter", label: "冬（6〜8月ごろ）" },
    ],
  },
  {
    key: "job",
    label: "予定している仕事",
    options: [
      { value: "hospitality", label: "接客・ホスピタリティ" },
      { value: "farm", label: "ファーム・農作業" },
      { value: "office", label: "オフィス・専門職" },
    ],
  },
];

/**
 * 持ち物チェックリストの項目データ。
 *
 * facets を持たない項目は「共通（全員向け）」で常に表示されます。facets を持つ
 * 項目は、選択した気候・シーズン・仕事に一致するときのみ表示されます。完了状態は
 * ブラウザのローカルストレージに保存され、サーバーには送信されません。
 */
export const PACKING_CHECKLIST_GROUPS: ChecklistGroup[] = [
  {
    id: "documents",
    title: "書類・貴重品（全員）",
    items: [
      { id: "passport", label: "パスポート（残存期間を確認）" },
      { id: "visa-grant", label: "ビザ許可通知（印刷・スマホ両方）" },
      { id: "insurance-doc", label: "海外旅行/医療保険の証書・連絡先" },
      { id: "flight", label: "航空券・予約確認（往復要件の有無を確認）" },
      { id: "accommodation-booking", label: "最初の宿の予約確認" },
      { id: "id-copies", label: "身分証・証明写真のコピー（紙＋クラウド）" },
      { id: "licence", label: "運転免許証＋国際運転免許証（運転する場合）" },
    ],
  },
  {
    id: "money",
    title: "お金・カード（全員）",
    items: [
      { id: "cash-aud", label: "当面の現金（AUD）" },
      { id: "cards", label: "海外対応のデビット/クレジットカード（複数）" },
      { id: "backup-card", label: "予備カードを別の場所に分けて保管" },
    ],
  },
  {
    id: "electronics",
    title: "電子機器（全員）",
    items: [
      { id: "phone", label: "スマホ＋充電器" },
      { id: "adapter", label: "オーストラリア用電源プラグ（タイプ I）" },
      { id: "power-bank", label: "モバイルバッテリー（機内は手荷物）" },
      { id: "laptop", label: "ノートPC / タブレット（仕事・手続き用）" },
    ],
  },
  {
    id: "clothing",
    title: "衣類（気候・シーズンで変わる）",
    items: [
      { id: "basic-clothes", label: "普段着（重ね着できるもの）" },
      { id: "light-clothes", label: "薄手・速乾の服", facets: { climate: ["tropical", "temperate"], season: ["summer"] } },
      { id: "warm-jacket", label: "防寒ジャケット・フリース", facets: { climate: ["cool", "temperate"], season: ["winter"] } },
      { id: "rain-jacket", label: "レインジャケット・折りたたみ傘", facets: { climate: ["tropical", "temperate"] } },
      { id: "warm-layers", label: "厚手のインナー・ニット帽・手袋", facets: { climate: ["cool"], season: ["winter"] } },
      { id: "swimwear", label: "水着・ビーチサンダル", facets: { climate: ["tropical", "temperate"], season: ["summer"] } },
      { id: "walking-shoes", label: "歩きやすい靴" },
    ],
  },
  {
    id: "health",
    title: "健康・衛生（全員＋気候別）",
    items: [
      { id: "medicine", label: "常備薬・処方薬（英文の処方箋があると安心）" },
      { id: "toiletries", label: "最低限の洗面用具（現地でも購入可）" },
      { id: "sunscreen", label: "日焼け止め（高SPF）・サングラス・帽子", facets: { climate: ["tropical", "temperate"], season: ["summer"] } },
      { id: "insect-repellent", label: "虫除け（熱帯・農作業向け）", facets: { climate: ["tropical"] } },
    ],
  },
  {
    id: "job-specific",
    title: "仕事別に役立つもの",
    items: [
      { id: "resume-print", label: "英文レジュメの印刷（数部）", facets: { job: ["hospitality", "farm", "office"] } },
      { id: "black-outfit", label: "黒シャツ・黒パンツ・滑りにくい靴", facets: { job: ["hospitality"] } },
      { id: "work-boots", label: "作業用ブーツ・厚手の靴下", facets: { job: ["farm"] } },
      { id: "work-gloves", label: "作業用手袋・帽子・長袖", facets: { job: ["farm"] } },
      { id: "smart-outfit", label: "面接用のきれいめの服", facets: { job: ["office", "hospitality"] } },
    ],
  },
];
