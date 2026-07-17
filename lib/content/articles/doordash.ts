import type { Article } from "./types";

export const doordashArticles: Article[] = [
  {
    id: "a9",
    title: "DoorDash配達の基礎｜登録とエリア戦略",
    slug: "doordash-guide",
    category: "doordash",
    description: "DoorDashの登録手順と、稼ぎやすいエリア選び・評価維持のコツを解説します。",
    content: [
      "DoorDashはUber Eatsと並ぶ大手デリバリーで、地域によってはこちらの方が案件が多いこともあります。掛け持ちして案件の多い方で稼働するのが効率的です。",
      "登録にはABNが必要で、配達ごとの報酬＋チップが収入になります。完了率・評価を高く保つと優先的に案件が回ってきます。",
    ],
    keyFacts: [
      { label: "必要なもの", value: "ABN、配達手段、保温バッグ、スマホ" },
      { label: "特徴", value: "地域によりUber Eatsより案件が多い場合あり" },
      { label: "報酬", value: "配達ごとの報酬＋チップ（Dasher Pay）" },
      { label: "税金", value: "ABN収入のため確定申告が必要" },
    ],
    steps: [
      { title: "Dasherアカウント作成", description: "本人確認・ビザ・ABNを登録します。" },
      { title: "アクティベーションを完了", description: "必要に応じてアクティベーションキットを受け取ります。" },
      { title: "エリアを選定", description: "レストランが密集する需要の高いゾーンで稼働します。" },
      { title: "評価・完了率を維持", description: "時間厳守と丁寧な対応で評価を保ちます。" },
    ],
    tips: [
      "Uber EatsとDoorDashの両方をオンラインにして、報酬の良い案件を選ぶ「ダブルアップ」が定番です。",
      "ピーク時間帯のプロモーション（追加報酬）を狙うと時給効率が上がります。",
    ],
    sources: [
      { label: "DoorDash - Become a Dasher", url: "https://www.doordash.com/dasher/signup/" },
    ],
    relatedSlugs: ["uber-eats-guide", "abn-guide"],
    updatedAt: "2026-06-10",
    published: true,
  },
];
