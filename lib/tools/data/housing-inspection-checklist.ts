import type { ChecklistGroup } from "@/lib/tools/types";

/**
 * シェアハウス内見（インスペクション）チェックリスト。
 *
 * 現地で物件を見るときに確認したい項目を種類別にまとめた一般的な目安です。
 * 契約内容・地域・物件により確認すべき点は異なります。金額・契約・ボンド（敷金）
 * などの条件は、必ず契約書と各州のテナント情報で確認してください。
 * 印刷・ダウンロードして現地で使えるほか、その場でチェックも付けられます。
 */
export const HOUSING_INSPECTION_GROUPS: ChecklistGroup[] = [
  {
    id: "basics",
    title: "基本・費用",
    items: [
      { id: "rent-amount", label: "家賃（週・月）と支払い方法・支払日" },
      { id: "bond", label: "ボンド（敷金）の金額と返還条件" },
      { id: "bills-included", label: "光熱費・インターネットが家賃に含まれるか" },
      { id: "min-stay", label: "最低契約期間・退去時の通知期間" },
      { id: "contract-written", label: "契約書（書面）があるか・内容の確認" },
    ],
  },
  {
    id: "room",
    title: "部屋・共有スペース",
    items: [
      { id: "room-size", label: "部屋の広さ・採光・収納" },
      { id: "bed-furniture", label: "ベッド・家具の有無と状態" },
      { id: "how-many-people", label: "何人でシェアするか・同居人の様子" },
      { id: "kitchen", label: "キッチンの広さ・調理器具・冷蔵庫のスペース" },
      { id: "bathroom", label: "バス・トイレの数と清潔さ" },
      { id: "laundry", label: "洗濯機・物干しスペース" },
    ],
  },
  {
    id: "condition",
    title: "設備・状態",
    items: [
      { id: "water-pressure", label: "水回り（水圧・お湯が出るか・水漏れ）" },
      { id: "power-outlets", label: "コンセントの数・照明・電気の状態" },
      { id: "aircon-heating", label: "エアコン・暖房の有無と動作" },
      { id: "internet-speed", label: "インターネットの有無・速度" },
      { id: "mould-damp", label: "カビ・湿気・においがないか" },
      { id: "pests", label: "虫・ネズミなどの形跡がないか" },
    ],
  },
  {
    id: "safety",
    title: "安全・セキュリティ",
    items: [
      { id: "locks", label: "玄関・部屋の鍵がかかるか" },
      { id: "smoke-alarm", label: "煙感知器（スモークアラーム）があるか" },
      { id: "windows", label: "窓の施錠・網戸" },
      { id: "emergency-exit", label: "非常口・避難のしやすさ" },
      { id: "condition-report", label: "入居時の状態記録（Condition Report）の写真を撮る" },
    ],
  },
  {
    id: "area",
    title: "周辺環境",
    items: [
      { id: "transport", label: "駅・バス停・通勤/通学の便" },
      { id: "shops", label: "スーパー・買い物のしやすさ" },
      { id: "safety-area", label: "夜間の治安・街灯" },
      { id: "noise", label: "騒音（道路・線路・隣人）" },
    ],
  },
];
