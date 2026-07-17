import type { Article } from "./types";

export const transportArticles: Article[] = [
  {
    id: "a15",
    title: "現金不要で乗れる｜オーストラリアの公共交通と決済ガイド",
    slug: "transport-payment-guide",
    category: "transport",
    description:
      "OpalやmykiなどのICカードに加え、クレジット/デビットのタッチ決済でそのまま乗車できる都市の交通事情と支払い方法を解説します。",
    content: [
      "オーストラリアの都市部では、公共交通機関の支払いに現金や切符はほぼ不要です。シドニー（Opal）やメルボルン（myki）などの交通系ICカードに加え、多くの都市でVisa/Mastercardのタッチ決済（コンタクトレス）でそのまま改札・乗車ができます。",
      "シドニー・ブリスベン・パースなどはクレジット/デビットのタッチ決済（スマホのApple Pay/Google Payを含む）に対応しており、カードをかざすだけで乗車可能。料金は自動計算され、1日の上限（デイキャップ）も適用されます。メルボルンはmykiカードが基本です。",
    ],
    keyFacts: [
      { label: "シドニー", value: "Opalカード or クレカ/スマホのタッチ決済" },
      { label: "メルボルン", value: "mykiカード（要事前購入・チャージ）" },
      { label: "ブリスベン", value: "go card or タッチ決済（Smart Ticketing拡大中）" },
      { label: "パース", value: "SmartRider or タッチ決済（順次拡大）" },
      { label: "現金", value: "基本不要。タッチ決済 or ICカードで完結" },
    ],
    steps: [
      { title: "都市の方式を確認", description: "滞在する都市がタッチ決済対応かICカード必須かを調べます。" },
      { title: "カード/スマホを準備", description: "タッチ決済対応のクレカ/デビット（Wise可）やスマホ決済を用意します。" },
      { title: "必要ならICカードを購入", description: "メルボルン等はmykiなどのICカードをコンビニ/駅で購入・チャージします。" },
      { title: "かざして乗車", description: "改札やバスのリーダーにカード/スマホをタッチして乗降します。" },
    ],
    tips: [
      "同じカードで往復・複数交通機関を使うと1日の上限（デイキャップ）や乗継割引が自動適用される都市が多いです。",
      "バスは乗車時にタッチ。都市により降車時もタッチが必要なので表示を確認しましょう。",
      "Wiseや日本のタッチ決済対応カードでも乗れることが多く、わざわざ現金で切符を買う必要はありません。",
    ],
    faqs: [
      {
        question: "日本のクレジットカードでも乗れますか？",
        answer:
          "Visa/Mastercardのタッチ決済（コンタクトレス）対応カードであれば、多くの都市でそのまま乗車できます。海外利用手数料がかかる場合があるため、現地カードやWiseのデビットを使うと手数料を抑えられます。",
      },
      {
        question: "切符を現金で買う必要はありますか？",
        answer:
          "都市部ではほぼ不要です。ICカードかタッチ決済で完結します。ごく一部の地方路線では現金対応の場合があります。",
      },
    ],
    relatedSlugs: ["money-transfer-wise", "arrival-checklist", "cars-guide"],
    updatedAt: "2026-06-10",
    published: true,
  },

  {
    id: "a42",
    title: "都市間移動ガイド｜飛行機・長距離バス・電車の使い分け",
    slug: "intercity-transport",
    category: "transport",
    description:
      "広大なオーストラリアの都市間移動を、コストと時間で賢く選ぶ方法。格安航空・長距離バス・鉄道の特徴と予約のコツを解説します。",
    content: [
      "オーストラリアは国土が広く、都市間の移動は『飛行機・長距離バス・鉄道』を使い分けます。シドニー〜メルボルン間でも車で約9時間かかるため、長距離は飛行機が現実的です。",
      "格安航空（Jetstar、Virgin Australia等）は早めに予約すれば驚くほど安く移動できます。バス（Greyhound等）は時間はかかりますが安く、近距離やパス利用に向きます。鉄道は本数が限られ観光向けの側面が強いです。",
    ],
    keyFacts: [
      { label: "飛行機", value: "Jetstar/Virgin等。早割で格安。長距離向き" },
      { label: "長距離バス", value: "Greyhound等。安いが時間がかかる" },
      { label: "鉄道", value: "本数少なめ。観光列車の側面が強い" },
      { label: "予約のコツ", value: "航空券は早いほど安い。セールを狙う" },
    ],
    steps: [
      { title: "距離と予算で手段を選ぶ", description: "長距離は飛行機、近〜中距離はバスが基本です。" },
      { title: "早めに予約", description: "格安航空は早割が安い。日付に柔軟なら最安日を探します。" },
      { title: "荷物条件を確認", description: "格安航空は預け荷物が別料金。重量超過に注意します。" },
      { title: "空港アクセスも計算", description: "空港〜市内の交通費・時間も含めて総コストを比較します。" },
    ],
    tips: [
      "格安航空は手荷物のみだと最安。預け荷物・座席指定は追加料金になりがちです。",
      "セカンドビザのファーム地へ移動する人も多数。時期に合わせて計画的に予約を。",
    ],
    relatedSlugs: ["transport-payment-guide", "area-overview", "cars-guide"],
    updatedAt: "2026-06-20",
    published: true,
  },
];
