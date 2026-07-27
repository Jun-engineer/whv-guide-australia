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
    relatedSlugs: ["language-school", "workplace-english", "australian-english-accent", "jobs-guide"],
    updatedAt: "2026-07-27",
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
    relatedSlugs: ["english-prep", "australian-english-accent", "australian-slang", "arrival-checklist"],
    updatedAt: "2026-07-27",
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

  {
    id: "a284",
    title: "オーストラリア英語の発音・アクセントに慣れる方法",
    slug: "australian-english-accent",
    category: "english",
    hub: "english",
    priority: "P1",
    description:
      "オーストラリア英語は「聞き取れない」と感じやすい独特のアクセントがあります。母音の変化や語尾の省略といった頻出パターンと、シャドーイング・ディクテーションなど到着前から使える具体的な練習法、おすすめ教材の選び方をまとめました。",
    content: [
      "結論から言うと、オーストラリア英語（Aussie English）に慣れる一番の近道は『豪州のネイティブ音声を毎日聞き、声に出して真似する（シャドーイング）』ことです。日本の教材で学ぶアメリカ英語とは母音やイントネーションが違うため、最初は同じ単語でも聞き取れないのが普通です。教材を『豪州英語の音声』に切り替え、量をこなせば数週間〜数か月で耳が慣れてきます。",
      "オーストラリア英語で特に戸惑いやすいのが母音の変化です。代表例が『day / mate / today』などの ei が『アイ』寄りに聞こえる点で、\"today\" が『トゥダイ』、\"mate\" が『マイト』のように響きます。ほかにも語尾の r をほとんど発音しない（non-rhotic）、単語の最後の音を軽く落とす、\"good day\" が \"g'day（グダイ）\" のように縮む、といった特徴があります。これらは『知っていれば聞き取れる』パターンなので、まず頭に入れておくと安心です。",
      "練習は『インプット（聞く）』と『アウトプット（真似して声に出す）』をセットにするのが効果的です。おすすめは、①短い豪州英語の音声を用意する、②字幕・スクリプトで意味を確認する、③音声に重ねて発音を真似する（シャドーイング）、④聞き取れなかった箇所を書き取る（ディクテーション）、の4ステップ。通勤・作業中の『ながら聞き』で耳を慣らしつつ、1日5〜10分だけ集中してシャドーイングすると定着が早まります。",
      "教材は『自分のレベルと興味』で選ぶのが継続のコツです。初心者はゆっくり話す学習者向けポッドキャストや、字幕付きの豪州YouTube・ニュース、料理や旅行など好きなジャンルの動画から。中級以上はABC（豪州の公共放送）のニュースやラジオ、現地の日常Vlogがリアルな発音・スピードに慣れるのに役立ちます。以下は学習法・教材選びの一般的なおすすめであり、どれが合うかは人によって異なります（本記事の確認日: 2026-07-27）。",
    ],
    keyFacts: [
      { label: "最短の上達法", value: "豪州英語の音声を毎日聞き＋声に出して真似（シャドーイング）" },
      { label: "母音の代表例", value: "day/mate/today の ei が『アイ』寄りに聞こえる" },
      { label: "頻出パターン", value: "語尾の r を弱める・音を落とす・g'day のような短縮" },
      { label: "1日の目安", value: "ながら聞き＋集中シャドーイング5〜10分" },
      { label: "教材選び", value: "自分のレベルと興味で選ぶと続けやすい（客観的な正解はない）" },
    ],
    steps: [
      {
        title: "豪州英語の音声を用意する",
        description:
          "アメリカ英語ではなく、豪州のポッドキャスト・YouTube・ABCニュースなど『Aussie English』の音源に切り替えます。",
      },
      {
        title: "スクリプト・字幕で意味を確認",
        description:
          "まず内容を理解してから聞くと、音の変化に集中できます。字幕付き動画やスクリプト付きポッドキャストが便利です。",
      },
      {
        title: "シャドーイングで真似する",
        description:
          "音声に0.5秒ほど遅れて重ねるように声に出します。母音の変化やイントネーションをそのままコピーする意識で。",
      },
      {
        title: "ディクテーションで穴を埋める",
        description:
          "聞き取れなかった箇所を書き取り、スクリプトと照合。自分がどの音を落としているかが分かります。",
      },
    ],
    tips: [
      "『発音を完璧にする』より『相手の音のクセを知って聞き取れるようにする』方が生活では役立ちます。",
      "同じ音源を繰り返す方が、毎回新しい素材を聞くより定着が早いです。まず1本を『完全に聞き取れる』まで。",
      "職場でよく聞くフレーズ（g'day / no worries / how ya going? / cheers）から慣れると実戦で効きます。",
    ],
    phrases: [
      { en: "G'day! How ya going?", ja: "やあ！調子どう？", note: "how are you going? の短縮。定番のあいさつ" },
      { en: "No worries.", ja: "問題ないよ／どういたしまして", note: "お礼への返しにも使う万能表現" },
      { en: "Cheers, mate.", ja: "ありがとう／じゃあね", note: "感謝・別れの軽い言い方" },
      { en: "Sorry, could you say that again a bit slower?", ja: "すみません、もう少しゆっくり言ってもらえますか？", note: "聞き取れないときの必須フレーズ" },
    ],
    faqs: [
      {
        question: "アメリカ英語しか勉強していません。豪州でも通じますか？",
        answer:
          "通じます。発音を豪州式に変える必要はなく、あなたの英語はそのままで問題ありません。課題は『話す』より『聞き取る』側にあることが多いので、豪州英語の音声に耳を慣らす練習を優先すると生活がラクになります。",
      },
      {
        question: "どのくらいで聞き取れるようになりますか？",
        answer:
          "個人差がありますが、毎日豪州英語に触れていれば数週間で『慣れてきた』と感じ、数か月で日常会話の多くが聞き取れるようになる人が多いです。最初の1〜2週間が一番きついので、そこを乗り切るのが大事です。",
      },
    ],
    verifiedAt: "2026-07-27",
    relatedSlugs: [
      "australian-slang",
      "english-prep",
      "language-school",
      "workplace-english",
    ],
    updatedAt: "2026-07-27",
    published: true,
  },

  {
    id: "a285",
    title: "ワーホリでよく聞くオーストラリア英語・スラング",
    slug: "australian-slang",
    category: "english",
    hub: "english",
    priority: "P1",
    description:
      "arvo・brekkie・no worries・g'day など、ワーホリ中の職場や日常で毎日のように耳にするオーストラリア独特の英語・スラングを、使う場面（文脈）付きで紹介します。意味を知っておくだけで会話の不安がぐっと減ります。",
    content: [
      "オーストラリアには『単語を短くして -o や -ie を付ける』独特のクセがあり、これを知らないと簡単な会話でもつまずきます。まず覚えたいのが、arvo（afternoon＝午後）、brekkie（breakfast＝朝食）、servo（service station＝ガソリンスタンド）、bottle-o（bottle shop＝酒屋）、mozzie（mosquito＝蚊）など。意味さえ知っていれば怖くありません。",
      "あいさつ・相づちの定番も押さえましょう。g'day（こんにちは）、how ya going?（調子どう？＝挨拶で、実際に体調を聞いているわけではない）、no worries（問題ない／どういたしまして）、cheers（ありがとう／じゃあね）、mate（相手への親しみを込めた呼びかけ）、ta（thank you のくだけた言い方）は職場でも日常でも毎日使われます。",
      "スラングは『自分から無理に使う』必要はなく、まず『聞いて意味が分かる』ことがゴールです。特に職場では、Maccas（McDonald's）、sickie（仮病・病欠）、knock off（仕事を終える）、smoko（休憩）、reckon（〜だと思う）、heaps（とても・たくさん）などが飛び交います。無理に真似すると不自然になることもあるので、意味の理解を優先し、自然に口に馴染んだものだけ使うのがおすすめです。",
      "以下は日常でよく使われる代表例のリファレンスです。地域・年代・職場によって使う言葉は変わり、ここに載っていない表現も多くあります。分からない言葉が出てきたら、遠慮なく『What does that mean?（それどういう意味？）』と聞けば大丈夫です（本記事の確認日: 2026-07-27）。",
    ],
    keyFacts: [
      { label: "短縮のクセ", value: "afternoon→arvo, breakfast→brekkie のように -o / -ie を付ける" },
      { label: "最優先の相づち", value: "no worries / cheers / g'day / mate" },
      { label: "how ya going?", value: "『調子どう？』の挨拶。体調確認ではない" },
      { label: "スラングのゴール", value: "自分で使うより『聞いて分かる』が先" },
      { label: "分からないとき", value: "\"What does that mean?\" で聞けばOK" },
    ],
    steps: [
      {
        title: "あいさつ・相づちを先に覚える",
        description:
          "g'day / how ya going? / no worries / cheers / mate。この5つだけで会話の入り口はかなりスムーズになります。",
      },
      {
        title: "短縮語のパターンをつかむ",
        description:
          "arvo, brekkie, servo, bottle-o... と『元の単語＋語尾』で覚えると初見でも推測できます。",
      },
      {
        title: "職場でよく出る語を押さえる",
        description:
          "smoko（休憩）, knock off（退勤）, sickie（病欠）, reckon（思う）, heaps（すごく）などは現場で頻出です。",
      },
      {
        title: "分からなければその場で聞く",
        description:
          "\"Sorry, what does '...' mean?\" と聞けば嫌がられません。むしろ会話のきっかけになります。",
      },
    ],
    tips: [
      "スラングは無理に使わなくてOK。不自然に多用するより、丁寧で分かりやすい英語のほうが好印象なこともあります。",
      "地域差が大きい言葉もあります。同僚が使う言い回しを真似るのが一番自然です。",
      "職場のあだ名的な呼びかけ（mate など）はフレンドリーな文化の一部。攻撃的な意味はありません。",
    ],
    phrases: [
      { en: "I'll see you this arvo.", ja: "今日の午後に会おうね。", note: "arvo = afternoon" },
      { en: "What time do we knock off?", ja: "何時に仕事終わり？", note: "knock off = 退勤する" },
      { en: "I'm just going for a smoko.", ja: "ちょっと休憩に行ってくる。", note: "smoko = 休憩（喫煙に限らない）" },
      { en: "Yeah, heaps good!", ja: "うん、すごくいいよ！", note: "heaps = very/lots" },
      { en: "Ta!", ja: "ありがと！", note: "thank you のくだけた言い方" },
    ],
    faqs: [
      {
        question: "スラングを使わないと現地の人に馴染めませんか？",
        answer:
          "そんなことはありません。大切なのは自分から使うことより『相手の言葉を理解できる』ことです。標準的で丁寧な英語で十分にコミュニケーションできますし、自然に口に馴染んだ表現だけ使えば十分です。",
      },
      {
        question: "\"mate\" と呼ばれたら失礼なのですか？",
        answer:
          "いいえ、多くの場面で親しみを込めたフレンドリーな呼びかけです。店員や同僚が使うのはごく普通のこと。あなたも相手を mate と呼んで問題ありません（ただしフォーマルな場ではファーストネームや Sir/Ma'am が無難です）。",
      },
    ],
    verifiedAt: "2026-07-27",
    relatedSlugs: [
      "australian-english-accent",
      "workplace-english",
      "hospitality-english",
      "english-prep",
    ],
    updatedAt: "2026-07-27",
    published: true,
  },

  {
    id: "a286",
    title: "職場で使う英語フレーズ｜確認・報告・欠勤・シフト",
    slug: "workplace-english",
    category: "english",
    hub: "english",
    priority: "P0",
    description:
      "どの職種でも使う職場英語を『確認・報告・欠勤連絡・シフト調整』の場面別にまとめました。指示が分からないときの聞き返し、遅刻・病欠の連絡、シフト希望の伝え方まで、コピペで使える定型フレーズ集です。",
    content: [
      "職場で最初に必要になる英語は、難しい表現ではなく『確認する・報告する・休みを伝える・シフトを相談する』の4場面の定型フレーズです。これらを丸暗記しておけば、カフェでも農場でも倉庫でも共通して使えます。まず結論として、迷ったら \"Sorry, could you say that again?（もう一度言ってもらえますか？）\" と \"Just to confirm, ...?（確認ですが〜ですね？）\" の2つを覚えておけば、指示ミスの多くは防げます。",
      "指示が分からないときに黙って進めるのが一番のトラブルのもとです。\"Sorry, I didn't catch that.（聞き取れませんでした）\"、\"Could you show me how?（やり方を見せてもらえますか？）\"、\"Where does this go?（これはどこに置きますか？）\" のように、遠慮せず確認しましょう。理解したら \"Got it.（分かりました）\" や \"No worries.（了解）\" と返すと会話がスムーズです。",
      "遅刻・欠勤の連絡は『早く・簡潔に・理由と復帰見込み』を伝えるのが基本です。体調不良での病欠（sick leave）や、その連絡方法・証明書（medical certificate）の要否は雇用形態・職場・Award（賃金裁定）によって異なります。カジュアル雇用か有給の病気休暇があるかなどで扱いが変わるため、具体的な権利・手当は雇用契約と Fair Work Ombudsman（fairwork.gov.au）で確認してください。ここでは連絡そのものに使うフレーズを紹介します。",
      "シフト制の職場では、希望の伝え方・交代の頼み方も大切です。\"Could I swap my Saturday shift?（土曜のシフトを代わってもらえますか？）\"、\"I'm available on weekdays.（平日なら入れます）\"、\"Can I pick up an extra shift?（追加でシフトに入れますか？）\" などを覚えておくと収入調整にも役立ちます。以下のフレーズは定型例です。金額・手当・休暇などの労働条件そのものは変わりうるため、必ず公式（Fair Work）と自分の契約で確認しましょう（本記事の確認日: 2026-07-27）。",
    ],
    keyFacts: [
      { label: "最優先の2フレーズ", value: "\"Could you say that again?\" と \"Just to confirm, ...?\"" },
      { label: "確認の基本", value: "分からないまま進めない。その場で聞く" },
      { label: "欠勤連絡", value: "早く・簡潔に・理由と復帰見込みを伝える" },
      { label: "病気休暇・証明書", value: "要否は雇用形態・職場・Awardで異なる → 契約とFair Workで確認" },
      { label: "シフト", value: "空き状況・交代・追加を英語で伝えられると収入調整に有利" },
    ],
    steps: [
      {
        title: "確認フレーズを丸暗記",
        description:
          "\"Sorry, could you say that again?\" / \"Just to confirm, ...?\" / \"Could you show me how?\" を口に出せるまで練習。",
      },
      {
        title: "報告の型を作る",
        description:
          "\"I've finished ...\"（〜終わりました）/ \"There's a problem with ...\"（〜に問題があります）で進捗と異常を伝えます。",
      },
      {
        title: "欠勤・遅刻の連絡文を用意",
        description:
          "電話かSMSで『名前＋今日休む/遅れる＋理由＋復帰見込み』を伝えるテンプレを準備しておきます。",
      },
      {
        title: "シフト希望を伝える",
        description:
          "入れる曜日・時間、交代や追加の希望を具体的に。マネージャーに早めに相談するほど通りやすいです。",
      },
    ],
    tips: [
      "初日は分からなくて当然。『聞き返す＝やる気がある』とポジティブに受け取られます。黙って間違える方がマイナスです。",
      "病欠の連絡は『できるだけ早く』が鉄則。始業直前より、前夜や早朝に連絡できるとベターです。",
      "指示は復唱（\"So I ... , right?\"）して確認すると、聞き間違いによるやり直しを防げます。",
    ],
    phrases: [
      { en: "Sorry, could you say that again a bit slower?", ja: "すみません、もう少しゆっくり言ってもらえますか？", note: "聞き取れないとき" },
      { en: "Just to confirm, you want me to do this first?", ja: "確認ですが、まずこれをやればいいですか？", note: "指示の確認" },
      { en: "I've finished. What should I do next?", ja: "終わりました。次は何をしましょうか？", note: "報告＋次の指示" },
      { en: "Hi, it's [name]. I'm sick today and can't come in. I'll see a doctor and let you know.", ja: "[名前]です。今日は体調が悪く出勤できません。病院に行って連絡します。", note: "病欠の連絡" },
      { en: "Sorry, I'm running about 15 minutes late.", ja: "すみません、15分ほど遅れます。", note: "遅刻連絡" },
      { en: "Could I swap my Saturday shift with someone?", ja: "土曜のシフトを誰かと代わってもらえますか？", note: "シフト交代" },
      { en: "I'm available on weekdays and can pick up extra shifts.", ja: "平日は入れますし、追加シフトも大丈夫です。", note: "シフト希望" },
    ],
    faqs: [
      {
        question: "病欠のとき、医師の診断書（medical certificate）は必ず必要ですか？",
        answer:
          "職場や雇用形態、適用される Award・契約によって異なります。診断書を求められる場合もあれば不要な場合もあり、有給の病気休暇が使えるかもカジュアルかどうかで変わります。まずは職場のルールと雇用契約を確認し、権利については Fair Work Ombudsman（fairwork.gov.au）で確認してください。",
      },
      {
        question: "指示が聞き取れないとき、何度も聞き返すと悪印象ですか？",
        answer:
          "いいえ。分からないまま作業してミスをする方が問題です。\"Sorry, could you show me?\" と実演をお願いしたり、復唱して確認すれば、むしろ丁寧で真面目な印象を与えます。",
      },
    ],
    verifiedAt: "2026-07-27",
    officialSources: [
      {
        label: "Fair Work Ombudsman（労働条件・休暇・シフト等の公式情報）",
        url: "https://www.fairwork.gov.au/",
        accessedAt: "2026-07-27",
      },
      {
        label: "Fair Work Ombudsman｜Visa holders and migrants（ビザ保有者の権利）",
        url: "https://www.fairwork.gov.au/find-help-for/visa-holders-and-migrants",
        accessedAt: "2026-07-27",
      },
    ],
    relatedSlugs: [
      "hospitality-english",
      "housing-english",
      "jobs-guide",
      "interview-guide",
      "english-prep",
    ],
    updatedAt: "2026-07-27",
    published: true,
  },

  {
    id: "a287",
    title: "レストラン・カフェ接客英語フレーズ｜注文・会計・苦情・アレルギー",
    slug: "hospitality-english",
    category: "english",
    hub: "english",
    priority: "P1",
    description:
      "カフェ・レストランのホール（接客）で使う英語を、お客様の案内・注文・会計・苦情対応・アレルギー確認の場面別にまとめました。ワーホリで人気のホスピタリティ求人に就く前に、そのまま使える定型フレーズを準備できます。",
    content: [
      "ホスピタリティ（カフェ・レストラン接客）の英語は、場面ごとの定型フレーズを覚えれば未経験でも十分に通用します。流れは『お迎え・案内 → 注文を取る → 料理・ドリンクを出す → 会計』が基本で、それぞれに決まった言い回しがあります。まず最優先は \"Hi, how are you? Table for how many?（何名様ですか）\" と \"Are you ready to order?（ご注文はお決まりですか）\" の2つです。",
      "注文を取るときは、聞き返し・確認をセットにするのがコツです。\"What would you like?（何になさいますか）\"、\"Anything to drink?（お飲み物は）\"、\"Sorry, was that a flat white?（フラットホワイトでよろしいですか）\" のように復唱すると、聞き間違いによるミスが減ります。オーストラリアのカフェはコーヒーの種類（flat white / long black / latte など）が多いので、名称を先に覚えておくと安心です。",
      "接客で特に重要なのがアレルギー対応です。オーストラリアでは食物アレルゲンの表示・情報提供が食品基準（Food Standards Australia New Zealand）で定められており、飲食店でもお客様から成分を聞かれることがあります。自分で勝手に『大丈夫です』と判断せず、\"I'll check with the kitchen.（キッチンに確認します）\" と伝えてシェフに確認するのが鉄則です。重大なアレルギーは命に関わるため、曖昧な返答は絶対に避けてください。",
      "会計や苦情対応にも定型があります。\"How would you like to pay?（お支払い方法は）\"、\"There's a surcharge on public holidays.（祝日は追加料金がかかります）\"、苦情には \"I'm so sorry about that. Let me fix it for you.（申し訳ありません、すぐ対応します）\" が基本形です。以下のフレーズはそのまま使える例です。祝日サーチャージやチップ習慣、メニュー・価格は店・時期で異なるため、勤務先のルールに従ってください（本記事の確認日: 2026-07-27）。",
    ],
    keyFacts: [
      { label: "接客の流れ", value: "案内 → 注文 → 提供 → 会計。各場面に定型フレーズがある" },
      { label: "最優先フレーズ", value: "\"Table for how many?\" / \"Are you ready to order?\"" },
      { label: "注文のコツ", value: "復唱して確認（\"Sorry, was that a ...?\"）でミスを防ぐ" },
      { label: "アレルギー対応", value: "自己判断しない。\"I'll check with the kitchen.\" が鉄則" },
      { label: "会計", value: "支払い方法・祝日サーチャージの案内を英語で" },
    ],
    steps: [
      {
        title: "お迎え・席案内",
        description:
          "\"Hi, how are you? Table for how many?\" → \"Follow me, please.\"（こちらへどうぞ）で席へ案内します。",
      },
      {
        title: "注文を取る",
        description:
          "\"Are you ready to order?\" → 注文を復唱して確認。\"Anything to drink?\" で飲み物も忘れずに。",
      },
      {
        title: "アレルギー・要望を確認",
        description:
          "アレルギーや苦手食材を聞かれたら自己判断せず \"I'll check with the kitchen.\" でシェフに確認します。",
      },
      {
        title: "提供・会計",
        description:
          "\"Here's your ...\" で提供し、\"How would you like to pay?\" で会計。祝日サーチャージがあれば事前に案内します。",
      },
    ],
    tips: [
      "コーヒー名（flat white / long black / piccolo / macchiato など）は先に暗記しておくと注文が一気にラクになります。",
      "聞き取れないときは \"Sorry, could you repeat that?\" でOK。忙しくても確認する方がミスより安全です。",
      "苦情はまず謝罪と共感。言い訳より \"Let me fix it.\" と行動で示すとトラブルが小さく収まります。",
    ],
    phrases: [
      { en: "Hi there! Table for how many?", ja: "いらっしゃいませ。何名様ですか？", note: "お迎え" },
      { en: "Are you ready to order, or do you need a few more minutes?", ja: "ご注文はお決まりですか？もう少しかかりますか？" },
      { en: "Sorry, was that a flat white and a long black?", ja: "フラットホワイトとロングブラックでよろしいですか？", note: "復唱確認" },
      { en: "Do you have any allergies I should tell the kitchen about?", ja: "キッチンに伝えるべきアレルギーはありますか？" },
      { en: "I'll check with the kitchen for you.", ja: "キッチンに確認いたします。", note: "アレルギーは必ず確認" },
      { en: "How would you like to pay? Card or cash?", ja: "お支払いはカードと現金どちらになさいますか？" },
      { en: "I'm so sorry about that. Let me fix it for you right away.", ja: "大変申し訳ございません。すぐに対応いたします。", note: "苦情対応" },
    ],
    faqs: [
      {
        question: "お客様にアレルギーを聞かれたら、自分で答えていいですか？",
        answer:
          "いいえ。成分が確実に分からない限り自己判断は禁物です。アレルギーは命に関わることがあります。\"I'll check with the kitchen.\" と伝え、シェフやマネージャーに確認してから正確に回答してください。オーストラリアではアレルゲン表示が食品基準で定められており、正確な情報提供が求められます。",
      },
      {
        question: "接客経験も英語も自信がありません。ホスピタリティで働けますか？",
        answer:
          "働けます。多くの人が定型フレーズを覚えて未経験から始めています。まずは案内・注文・会計の基本フレーズを暗記し、聞き取れないときは遠慮なく確認しましょう。忙しい時間帯は先輩の言い回しを真似るのが一番の近道です。",
      },
    ],
    verifiedAt: "2026-07-27",
    officialSources: [
      {
        label: "Food Standards Australia New Zealand｜Allergen labelling（食物アレルゲン表示）",
        url: "https://www.foodstandards.gov.au/consumer/labelling/allergen-labelling",
        accessedAt: "2026-07-27",
      },
      {
        label: "Fair Work Ombudsman｜Fast food, restaurants and cafés（飲食業の労働条件）",
        url: "https://www.fairwork.gov.au/find-help-for/fast-food-restaurants-cafes",
        accessedAt: "2026-07-27",
      },
    ],
    relatedSlugs: [
      "workplace-english",
      "hospitality-jobs-guide",
      "barista-job-guide",
      "australian-slang",
    ],
    updatedAt: "2026-07-27",
    published: true,
  },

  {
    id: "a288",
    title: "家探し・内見・退去で使う英語フレーズ",
    slug: "housing-english",
    category: "english",
    hub: "english",
    priority: "P0",
    description:
      "シェアハウスやレンタルの問い合わせ・内見（inspection）・入居・退去（Bond返金）で使う英語を場面別にまとめました。空室確認から家賃・Bondの質問、退去通知まで、そのまま送れるメッセージ例と会話フレーズを用意しました。",
    content: [
      "家探しの英語は、決まった質問と定型メッセージを用意しておけば、英語が苦手でも十分に対応できます。流れは『問い合わせ → 内見（inspection）→ 申し込み・入居 → 退去・Bond返金』で、各段階で聞くべきことが決まっています。まず問い合わせで確認したいのは、空室の有無・家賃（rent）・光熱費込みか（bills included?）・入居可能日・Bond（保証金）の額の5点です。",
      "内見（inspection）では、実際に見て確認すべきことを英語で質問できるようにしておきましょう。\"Is the rent weekly or fortnightly?（家賃は週払い？隔週払い？）\"、\"Are bills included?（光熱費は込みですか）\"、\"How much is the bond?（Bondはいくらですか）\"、\"When is it available?（いつから入居できますか）\" が定番です。契約前に条件を書面（tenancy agreement）で確認することが、後のトラブル防止につながります。",
      "入居・退去で特に重要なのが Bond（保証金）です。Bond の預け先・上限・返金の手続き・退去通知（notice）の期間は州・準州によってルールが異なります。Bond は通常、州の機関に預託され、退去時に部屋の状態に応じて返金されます。具体的な金額の上限や手続き・紛争解決の方法は、必ず各州の賃貸当局（例: NSW、Consumer Affairs Victoria、QLD の RTA など）で確認してください。ここでは連絡・交渉に使う英語フレーズを紹介します。",
      "退去時は『通知 → 最終内見 → Bond返金請求』の流れで、英語のメッセージが必要になります。\"I'd like to give notice to end my tenancy.（退去の通知をしたいです）\"、\"When can I get my bond back?（Bondはいつ返ってきますか）\" などを準備しておきましょう。入居時に部屋の状態を写真で記録（condition report）しておくと、退去時の返金交渉がスムーズです。以下のフレーズはそのまま使えます。Bond・通知期間などの制度は州で異なり変わりうるため、公式で確認してください（本記事の確認日: 2026-07-27）。",
    ],
    keyFacts: [
      { label: "問い合わせで聞く5点", value: "空室・家賃・光熱費込みか・入居日・Bondの額" },
      { label: "家賃の単位", value: "週払い(weekly)か隔週(fortnightly)かを必ず確認" },
      { label: "Bond（保証金）", value: "預け先・上限・返金・通知期間は州で異なる → 各州当局で確認" },
      { label: "内見前後", value: "条件は書面（tenancy agreement）で確認。入居時は写真記録" },
      { label: "退去", value: "notice（退去通知）→ Bond返金請求の順。英語メッセージを準備" },
    ],
    steps: [
      {
        title: "問い合わせメッセージを送る",
        description:
          "空室・家賃・光熱費込みか・入居日・Bondを1通でまとめて質問。内見の希望日も添えると返信が早いです。",
      },
      {
        title: "内見（inspection）で確認",
        description:
          "\"Is the rent weekly or fortnightly?\" / \"Are bills included?\" / \"How much is the bond?\" を実際に質問します。",
      },
      {
        title: "契約・入居",
        description:
          "条件を書面で確認し、入居時に部屋の状態を写真で記録（condition report）。Bondは正規の預託先を確認します。",
      },
      {
        title: "退去・Bond返金",
        description:
          "\"I'd like to give notice ...\" で退去を通知し、最終内見後に \"When can I get my bond back?\" で返金を請求します。",
      },
    ],
    tips: [
      "『家賃が週いくらか隔週いくらか』の勘違いは金額トラブルの定番。必ず weekly / fortnightly を確認しましょう。",
      "入居初日に部屋の傷・汚れを写真＋日付で記録しておくと、退去時のBond返金交渉で有利になります。",
      "Bondは大家個人にそのまま渡すのではなく、州の預託制度が原則。預け先が不明なときは州当局に確認を。",
    ],
    phrases: [
      { en: "Hi, is the room still available? When can I inspect it?", ja: "お部屋はまだ空いていますか？いつ内見できますか？", note: "問い合わせ" },
      { en: "Is the rent weekly or fortnightly?", ja: "家賃は週払いですか、隔週払いですか？" },
      { en: "Are bills (electricity, water, internet) included in the rent?", ja: "光熱費（電気・水道・ネット）は家賃に含まれますか？" },
      { en: "How much is the bond, and where is it held?", ja: "Bondはいくらで、どこに預けられますか？", note: "預託先も確認" },
      { en: "When is the room available to move in?", ja: "いつから入居できますか？" },
      { en: "I'd like to give notice to end my tenancy on [date].", ja: "[日付]で退去の通知をしたいです。", note: "退去通知" },
      { en: "When can I expect my bond back?", ja: "Bondはいつ返金されますか？" },
    ],
    faqs: [
      {
        question: "Bond（保証金）はいくらまで、どこに預けるのが正しいですか？",
        answer:
          "Bondの上限額・預け先・返金手続きは州・準州によって異なります。多くの州では大家個人ではなく州の預託機関に預けるのが原則で、退去時に部屋の状態に応じて返金されます。正確なルールは各州の賃貸当局（NSW、Consumer Affairs Victoria、QLD の RTA など）で必ず確認してください。",
      },
      {
        question: "英語での家探しメッセージは長く書くべきですか？",
        answer:
          "簡潔で構いません。『自己紹介＋入居希望時期＋空室確認＋内見希望日』を1通にまとめると返信率が上がります。長文より、家賃・光熱費・Bond・入居日など聞きたい点を箇条書きにする方が相手も答えやすいです。",
      },
    ],
    verifiedAt: "2026-07-27",
    officialSources: [
      {
        label: "NSW Government｜Renting a place to live（賃貸・Bondの公式情報）",
        url: "https://www.nsw.gov.au/housing-and-construction/renting-a-place-to-live",
        accessedAt: "2026-07-27",
      },
      {
        label: "Consumer Affairs Victoria｜Renting（賃貸・Bondの公式情報）",
        url: "https://www.consumer.vic.gov.au/housing/renting",
        accessedAt: "2026-07-27",
      },
      {
        label: "Residential Tenancies Authority (QLD)（賃貸・Bondの公式情報）",
        url: "https://www.rta.qld.gov.au/",
        accessedAt: "2026-07-27",
      },
    ],
    relatedSlugs: [
      "workplace-english",
      "housing-guide",
      "share-house-finding",
      "inspection-checklist",
    ],
    updatedAt: "2026-07-27",
    published: true,
  },
];
