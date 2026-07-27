import type { Article } from "./types";

export const englishArticles: Article[] = [
  {
    id: "a29",
    title: "渡航前の英語準備｜出発までに固めておく3つの土台",
    slug: "english-prep",
    category: "english",
    description:
      "ビザ申請に英語試験は不要ですが、準備の差が到着後の生活を左右します。自己紹介・面接・生活英語の3本柱を出発前に固める方法を解説。",
    content: [
      "ワーホリのビザ申請に英語試験は要りませんが、英語力は『仕事の選択肢』と『生活の快適さ』に直結します。とはいえ完璧を目指す必要はありません。出発前に最低限の土台を作っておけば、到着後の立ち上がりが大きく変わります。",
      "優先すべきは『自己紹介』『面接・仕事で使う表現』『生活英語（賃貸・買い物・銀行）』の3本柱。これらを丸暗記レベルまで準備しておくと、最初の数週間の不安が一気に減ります。",
      "リスニングは耳を慣らすのに時間がかかるため、出発の数か月前から毎日少しずつ英語音声に触れておくのが効果的です。",
    ],
    keyFacts: [
      { label: "ビザ要件", value: "英語試験は不要" },
      { label: "重点3分野", value: "自己紹介 / 面接・仕事 / 生活（賃貸・買い物・銀行）" },
      { label: "おすすめ開始時期", value: "出発の2〜3か月前から毎日少しずつ" },
      { label: "目標レベル", value: "日常会話で意思疎通できればローカル就労の幅が広がる" },
    ],
    steps: [
      { title: "自己紹介を完成させる", description: "名前・出身・滞在予定・趣味・前職を1分で話せるように、声に出して練習します。" },
      { title: "面接・仕事の定型表現を覚える", description: "『いつから働ける』『何曜日が入れる』『経験あります』など、トライアルで頻出の表現を準備します。" },
      { title: "生活英語をシミュレーション", description: "賃貸の内見、スーパーの会計、銀行口座開設など、場面ごとの会話を練習します。" },
      { title: "毎日リスニングで耳を慣らす", description: "ポッドキャストや動画で豪州英語のアクセントに触れておきます。" },
    ],
    tips: [
      "発音より『止まらず伝える』ことを優先。完璧でなくても通じれば十分です。",
      "スマホの翻訳アプリ（音声・カメラ翻訳）を入れておくと、最初の数週間の保険になります。",
      "現地で語学学校に通う場合も、基礎があるほどクラスが上から始められて効率的です。",
    ],
    faqs: [
      {
        question: "英語が全くできなくてもワーホリできますか？",
        answer:
          "可能です。最初はジャパレス（日本食レストラン）など日本語が通じる職場で働きながら英語に慣れ、徐々にローカルへ挑戦する人が多いです。ただし準備があるほど選択肢は広がります。",
      },
    ],
    relatedSlugs: ["language-school", "preparation-checklist", "jobs-guide"],
    updatedAt: "2026-06-20",
    published: true,
  },

  {
    id: "a30",
    title: "語学学校の選び方｜費用・期間・エリアの考え方",
    slug: "language-school",
    category: "english",
    description:
      "ワーホリは最大17週間まで就学可能。語学学校に通うメリット・費用相場・選び方のポイントと、通わない選択肢まで整理します。",
    content: [
      "ワーキングホリデー（417）では最大17週間（約4か月）まで学校に通えます。到着直後に語学学校へ通い、英語と友達づくりの土台を作ってから仕事を探す人が多いです。",
      "学校選びは『費用』『立地』『生徒の国籍バランス』『クラスの質』で比較します。日本人比率が低い学校のほうが英語漬けになりやすい一方、最初は日本人がいる安心感を取る人もいます。自分の性格と目的で選びましょう。",
    ],
    keyFacts: [
      { label: "就学可能期間", value: "最大17週間（ワーホリ417）" },
      { label: "学費の目安", value: "週250〜400 AUD前後（学校・コースで変動）" },
      { label: "比較軸", value: "費用 / 立地 / 国籍比率 / クラスの質" },
      { label: "申込方法", value: "現地エージェント or 学校に直接" },
    ],
    steps: [
      { title: "目的を決める", description: "英語力アップ重視か、友達づくり・生活の足場づくり重視かを明確にします。" },
      { title: "学校を比較", description: "費用・立地・国籍比率・口コミを比較。無料体験レッスンがあれば活用します。" },
      { title: "期間とコースを選ぶ", description: "一般英語/ビジネス/試験対策など。最初は一般英語が無難です。" },
      { title: "申込・支払い", description: "エージェント経由だと割引やサポートがある場合があります。" },
    ],
    tips: [
      "日本人比率が低い学校ほど英語を使う機会が増えますが、最初の孤独感とのバランスも考えましょう。",
      "学校で出会う友達は家探し・仕事探しの貴重な情報源になります。",
    ],
    relatedSlugs: ["english-prep", "arrival-checklist", "area-overview"],
    updatedAt: "2026-06-20",
    published: true,
  },

  {
    id: "a279",
    title: "美容院・バーバーで使う英語と料金の見方",
    slug: "haircut-barber-english",
    category: "english",
    hub: "daily-life",
    description:
      "オーストラリアの美容院（hair salon）・バーバー（barber）で使える英語フレーズと料金の見方を解説。予約・飛び込み、希望のスタイルの伝え方、長さの指定、会計やチップの習慣まで、失敗しないためのポイントをまとめました。",
    content: [
      "オーストラリアで髪を切るときは、バーバー（barber）＝主に男性向け・短髪やフェード、美容院（hair salon / hairdresser）＝カット・カラー・パーマ全般、という使い分けが目安です。予約（appointment/booking）が必要な店と、飛び込み（walk-in）でOKな店があります。料金は店・地域・髪の長さ・メニュー（カットのみ／シャンプー込み／カラー）で大きく変わるため、施術前に料金を確認するのが安心です。",
      "希望のスタイルは、言葉だけで伝えるのが難しければ、なりたい髪型の写真を見せるのが一番確実です。長さは「a trim（そろえる程度）」「take a bit off（少し切る）」「short back and sides（サイドと後ろを短く）」のような表現や、バリカンの番手（number 2, number 3 など）、センチ（about 2 centimetres）で伝えます。切りすぎを避けたいときは『Not too short（短くしすぎないで）』と最初に伝えておきましょう。",
      "会計は現地の習慣に沿えば大丈夫です。オーストラリアではチップ（tip）は義務ではなく、美容院でも一般的に不要とされます（渡したい場合は任意）。カード払いでサーチャージ（card surcharge）がかかる店もあるため、支払い方法と料金は事前に確認しましょう。料金や予約方法は店ごとに異なるため、各店の公式・店頭表示で確認してください（本記事の確認日: 2026-07-27）。",
    ],
    keyFacts: [
      { label: "店の種類", value: "barber＝短髪中心／salon・hairdresser＝カット全般" },
      { label: "予約", value: "appointment が必要な店と walk-in 可の店がある" },
      { label: "料金", value: "店・長さ・メニューで変動。施術前に確認" },
      { label: "スタイルの伝え方", value: "写真＋番手（number 2 等）やcmが確実" },
      { label: "チップ", value: "義務ではなく一般的に不要（任意）" },
    ],
    steps: [
      { title: "店と予約方法を選ぶ", description: "barber か salon を選び、予約が必要か walk-in 可かを確認します。" },
      { title: "料金を確認", description: "カットのみ／シャンプー込み／カラーなど、メニューと料金を施術前に確認します。" },
      { title: "希望を伝える", description: "写真を見せるのが確実。長さは番手やcm、『Not too short』などで具体的に伝えます。" },
      { title: "会計する", description: "支払い方法（現金/カード）とサーチャージの有無を確認。チップは任意で不要が一般的です。" },
    ],
    phrases: [
      { en: "I'd like a haircut, please. Do you take walk-ins?", ja: "カットをお願いします。飛び込みでも大丈夫ですか？", note: "予約なしで入るとき" },
      { en: "How much is a cut?", ja: "カットはいくらですか？", note: "料金確認" },
      { en: "Just a trim, please. Not too short.", ja: "そろえる程度でお願いします。短くしすぎないで。" },
      { en: "Short back and sides, please.", ja: "サイドと後ろを短くしてください。", note: "バーバーで定番" },
      { en: "A number 2 on the sides, please.", ja: "サイドはバリカンの2番でお願いします。" },
      { en: "Can you take about two centimetres off?", ja: "2センチくらい切ってもらえますか？" },
      { en: "Can I show you a photo of the style I want?", ja: "希望のスタイルの写真を見せてもいいですか？" },
      { en: "Can I pay by card?", ja: "カードで払えますか？", note: "サーチャージの有無も確認" },
    ],
    tips: [
      "言葉で伝わりにくいときは、なりたい髪型と『避けたい仕上がり』の写真を両方見せると失敗が減ります。",
      "初めての店では『カットのみ』か『シャンプー・ブロー込み』かで料金が変わります。先に確認しましょう。",
      "混雑時間や週末は待つことがあります。walk-in の店でも電話で空き状況を聞くとスムーズです。",
    ],
    faqs: [
      {
        question: "オーストラリアの美容院でチップは必要ですか？",
        answer:
          "チップ（tip）は義務ではなく、美容院・バーバーでも一般的に不要とされています。とても満足したときに任意で渡す人もいますが、渡さなくても失礼にはなりません。支払い前に、カードのサーチャージがかかるかどうかを確認しておくと安心です。",
      },
      {
        question: "英語でうまく髪型を伝えられるか不安です。",
        answer:
          "なりたい髪型の写真を見せるのが最も確実です。長さはバリカンの番手（number 2 など）やセンチで伝え、切りすぎを防ぎたいときは最初に『Not too short』と言いましょう。仕上がりの途中でも『A bit shorter, please（もう少し短く）』などで調整をお願いできます。",
      },
    ],
    verifiedAt: "2026-07-27",
    officialSources: [
      {
        label: "ACCC｜Consumer rights and guarantees（サービスの消費者保証：相応の注意・技能）",
        url: "https://www.accc.gov.au/consumers/buying-products-and-services/consumer-rights-and-guarantees",
        accessedAt: "2026-07-27",
      },
    ],
    relatedSlugs: [
      "shopping-surcharges-tipping",
      "gym-fitness-guide",
      "library-guide",
      "op-shop-guide",
    ],
    updatedAt: "2026-07-27",
    published: true,
  },
];
