import type { Article } from "./types";

export const carsArticles: Article[] = [
  {
    id: "a12",
    title: "車の購入とRego・保険｜州ごとのルールと名義変更",
    slug: "cars-guide",
    category: "cars",
    description: "ワーホリでの中古車購入、Rego（登録）、Roadworthy、CTP/任意保険の基礎を州別の注意点とともに解説します。",
    content: [
      "ファームや地方移動には車が便利です。中古車はGumtree、Facebook Marketplace、ディーラーで購入できます。州ごとにRego（登録）やRoadworthy Certificate（車検相当）のルールが異なるため、購入前に州の運輸局情報を確認しましょう。",
      "Rego費用にはCTP（強制対人保険）が含まれますが、対物・車両は任意保険が別途必要です。州をまたいで長期移動する場合はRegoの州も意識すると手続きがスムーズです。",
    ],
    keyFacts: [
      { label: "主な購入先", value: "Gumtree、Facebook Marketplace、中古車ディーラー" },
      { label: "Rego", value: "州ごとの登録。CTP（強制対人保険）を含む" },
      { label: "Roadworthy", value: "州により名義変更時に必要（例：QLD/VIC）" },
      { label: "任意保険", value: "Third Party Property以上の加入を推奨" },
    ],
    steps: [
      { title: "車を選ぶ", description: "走行距離・整備履歴・Rego残存期間を確認します。試乗もおすすめ。" },
      { title: "売買書類を作成", description: "売主と売買契約・領収書を交わします。" },
      { title: "Rego名義を変更", description: "州の運輸局で名義変更し、必要ならRoadworthyを取得します。" },
      { title: "保険に加入", description: "CTPに加え、対物または車両保険を検討します。" },
    ],
    tips: [
      "州によって名義変更の必要書類・期限が違います。購入する州の運輸局サイトを必ず確認しましょう。",
      "出国時の売却も見据え、人気車種（トヨタ等）は手放しやすくおすすめです。",
    ],
    warnings: ["Regoが切れた車の購入や、名義変更を怠ると罰金・トラブルの原因になります。"],
    faqs: [
      {
        question: "国際免許で運転できますか？",
        answer:
          "日本の免許＋国際運転免許証（IDP）で運転できます。長期滞在する場合は州によって現地免許への切り替えが必要になることがあるため、運転免許ガイドも確認してください。",
      },
    ],
    relatedSlugs: [
      "license-guide",
      "transport-payment-guide",
      "used-car-inspection-checklist",
      "ppsr-check-guide",
      "rego-ctp-rwc",
      "vehicle-transfer-by-state",
      "car-insurance-comparison",
      "roadside-assistance",
    ],
    updatedAt: "2026-07-19",
    published: true,
  },
];
