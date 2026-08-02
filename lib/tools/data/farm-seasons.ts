/**
 * ファームシーズン（収穫カレンダー）の検索データ。
 *
 * 州・地域・作物ごとの「一般的な繁忙期（収穫・作業が多い時期）」の目安をまとめています。
 *
 * 重要（免責）:
 * - 収穫時期は天候・その年の状況で前後します。ここに載る月はあくまで一般的な目安です。
 * - 実際の求人状況は年によって変わります。応募前に雇用主や公式の Harvest Trail
 *   Information Service で最新情報を確認してください。
 * - 対象作業がセカンドビザの指定業務（specified work）に該当するかは移民局が判断します。
 */

export type FarmSeasonEntry = {
  id: string;
  /** 作物・作業のラベル。 */
  cropLabel: string;
  /** 州コード（フィルタ用）。 */
  state: string;
  /** 代表的な産地・地域。 */
  region: string;
  /** 繁忙期の月（1-12, 両端含む一覧）。 */
  months: number[];
  /** 補足（作業内容など）。 */
  note?: string;
  /** 検索用キーワード（英名など）。 */
  keywords?: string[];
};

export type StateOption = {
  value: string;
  label: string;
};

/** 州フィルタの選択肢。 */
export const FARM_STATE_OPTIONS: StateOption[] = [
  { value: "QLD", label: "クイーンズランド州（QLD）" },
  { value: "NSW", label: "ニューサウスウェールズ州（NSW）" },
  { value: "VIC", label: "ビクトリア州（VIC）" },
  { value: "SA", label: "南オーストラリア州（SA）" },
  { value: "WA", label: "西オーストラリア州（WA）" },
  { value: "TAS", label: "タスマニア州（TAS）" },
  { value: "NT", label: "ノーザンテリトリー（NT）" },
];

/** 月ラベル（1-12）。 */
export const MONTH_LABELS = [
  "1月",
  "2月",
  "3月",
  "4月",
  "5月",
  "6月",
  "7月",
  "8月",
  "9月",
  "10月",
  "11月",
  "12月",
];

/**
 * 収穫カレンダーのデータ。主要な作物と代表的な産地・繁忙期の一般的な目安です。
 */
export const FARM_SEASON_ENTRIES: FarmSeasonEntry[] = [
  {
    id: "strawberry-qld",
    cropLabel: "いちご",
    state: "QLD",
    region: "サンシャインコースト / カブルチャー周辺",
    months: [6, 7, 8, 9, 10],
    note: "冬〜春が最盛期。ピッキング・パッキング。",
    keywords: ["strawberry", "ichigo"],
  },
  {
    id: "strawberry-wa",
    cropLabel: "いちご",
    state: "WA",
    region: "パース近郊（ウォンネルアップ等）",
    months: [8, 9, 10, 11],
    keywords: ["strawberry"],
  },
  {
    id: "banana-qld",
    cropLabel: "バナナ",
    state: "QLD",
    region: "タリー / イニスフェイル / マリーバ",
    months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    note: "通年で作業がある。",
    keywords: ["banana"],
  },
  {
    id: "mango-qld",
    cropLabel: "マンゴー",
    state: "QLD",
    region: "ボーウェン / バーデキン",
    months: [10, 11, 12, 1],
    keywords: ["mango"],
  },
  {
    id: "mango-nt",
    cropLabel: "マンゴー",
    state: "NT",
    region: "ダーウィン / カサリン",
    months: [9, 10, 11],
    keywords: ["mango"],
  },
  {
    id: "grape-vic",
    cropLabel: "ぶどう（テーブル/ワイン）",
    state: "VIC",
    region: "ミルドゥラ / サニーレイシア",
    months: [2, 3, 4],
    note: "収穫は夏の終わり〜秋。剪定は冬（6〜8月）。",
    keywords: ["grape", "vine", "pruning"],
  },
  {
    id: "grape-sa",
    cropLabel: "ぶどう（ワイン）",
    state: "SA",
    region: "バロッサ / リバーランド",
    months: [2, 3, 4],
    keywords: ["grape", "wine", "vintage"],
  },
  {
    id: "apple-vic",
    cropLabel: "りんご / なし",
    state: "VIC",
    region: "シェパトン / グーバーン渓谷",
    months: [2, 3, 4, 5],
    keywords: ["apple", "pear"],
  },
  {
    id: "cherry-tas",
    cropLabel: "さくらんぼ",
    state: "TAS",
    region: "ヒューオン渓谷 / デルウェント渓谷",
    months: [12, 1, 2],
    keywords: ["cherry"],
  },
  {
    id: "apple-tas",
    cropLabel: "りんご",
    state: "TAS",
    region: "ヒューオン渓谷",
    months: [3, 4, 5],
    keywords: ["apple"],
  },
  {
    id: "citrus-nsw",
    cropLabel: "柑橘（オレンジ等）",
    state: "NSW",
    region: "グリフィス / リヴェリーナ",
    months: [5, 6, 7, 8, 9, 10],
    keywords: ["citrus", "orange", "mandarin"],
  },
  {
    id: "citrus-qld",
    cropLabel: "柑橘（マンダリン等）",
    state: "QLD",
    region: "ガイヤンダー / エメラルド",
    months: [4, 5, 6, 7, 8],
    keywords: ["citrus", "mandarin"],
  },
  {
    id: "blueberry-nsw",
    cropLabel: "ブルーベリー",
    state: "NSW",
    region: "コフスハーバー",
    months: [7, 8, 9, 10, 11],
    keywords: ["blueberry"],
  },
  {
    id: "tomato-qld",
    cropLabel: "トマト / 野菜",
    state: "QLD",
    region: "バンダバーグ / ボーウェン",
    months: [4, 5, 6, 7, 8, 9, 10, 11],
    note: "冬の主要産地。ピッキング・パッキング。",
    keywords: ["tomato", "vegetable"],
  },
  {
    id: "vegetable-vic",
    cropLabel: "野菜（各種）",
    state: "VIC",
    region: "ワーグル / イースト・ギップスランド",
    months: [11, 12, 1, 2, 3],
    keywords: ["vegetable", "broccoli"],
  },
  {
    id: "avocado-wa",
    cropLabel: "アボカド",
    state: "WA",
    region: "マンジマップ / ペンバートン",
    months: [8, 9, 10, 11, 12],
    keywords: ["avocado"],
  },
  {
    id: "grape-wa",
    cropLabel: "ぶどう（ワイン）",
    state: "WA",
    region: "マーガレットリバー",
    months: [2, 3, 4],
    keywords: ["grape", "wine"],
  },
];
