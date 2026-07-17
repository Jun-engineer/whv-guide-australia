import type { Article } from "./types";

export const simArticles: Article[] = [
  {
    id: "a21",
    title: "オーストラリアのSIM・通信ガイド｜到着後すぐ使える設定",
    slug: "sim-guide",
    category: "sim",
    description:
      "主要キャリアの特徴、eSIM/物理SIMの選び方、到着後の開通手順まで。空港到着の瞬間からネットに困らないための通信ガイド。",
    content: [
      "オーストラリアの主要キャリアはTelstra、Optus、Vodafoneの3社。これに加えて、これらの回線を借りた格安SIM（Amaysim、Boost、ALDI mobileなど）が多数あります。Telstraは地方でもつながりやすく、Optus/Vodafoneは都市部で割安な傾向です。",
      "到着前にeSIM対応スマホでeSIMを購入しておけば、空港に降りた瞬間からデータ通信が使えて便利です。物理SIMは現地のスーパーやキャリアショップ、空港で購入できます。",
    ],
    keyFacts: [
      { label: "主要キャリア", value: "Telstra / Optus / Vodafone" },
      { label: "格安SIM", value: "Boost(Telstra回線) / Amaysim / ALDI mobile 等" },
      { label: "プラン形態", value: "プリペイド（月額28日サイクル）が主流" },
      { label: "料金の目安", value: "月20〜40 AUDで大容量データのプランが多い" },
    ],
    steps: [
      { title: "到着前にeSIMを用意（任意）", description: "eSIM対応端末ならオンラインで購入し、到着後に有効化すればすぐ使えます。" },
      { title: "SIM/プランを選ぶ", description: "地方中心ならTelstra系、都市中心ならOptus/Vodafone系が目安です。" },
      { title: "本人確認・開通", description: "プリペイドSIMはパスポートで本人確認のうえアクティベートします。" },
      { title: "テザリング設定", description: "ノートPC用にテザリングを設定すれば、自宅Wi-Fiがなくても作業できます。" },
    ],
    tips: [
      "ファームや地方に行く予定があるなら、つながりやすさ重視でTelstra系を選ぶと安心です。",
      "多くのプランは28日サイクル。自動更新の有無と残データの繰り越し条件を確認しましょう。",
    ],
    relatedSlugs: ["arrival-checklist", "preparation-checklist"],
    updatedAt: "2026-06-10",
    published: true,
  },
];
