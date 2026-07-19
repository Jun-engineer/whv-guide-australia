import type { Article } from "./types";

export const housingArticles: Article[] = [
  {
    id: "a11",
    title: "シェアハウス探しと詐欺対策｜内見・Bond・契約の流れ",
    slug: "housing-guide",
    category: "housing",
    description: "Facebook Marketplace等での家探しの手順、Bond（敷金）の仕組み、詐欺を避けるチェックポイントを解説します。",
    content: [
      "ワーホリの住居はシェアハウス（フラットシェア）が一般的です。Facebookグループ/Marketplace、Flatmates.com.au、Gumtreeなどで探します。",
      "内見せずに送金を求める物件は詐欺の典型です。必ず現地で部屋・契約条件・同居人を確認してから支払いましょう。Bond（敷金）は通常2〜4週間分が目安です。",
    ],
    keyFacts: [
      { label: "主な探し方", value: "Facebookグループ/Marketplace、Flatmates、Gumtree" },
      { label: "家賃の支払い", value: "週単位（per week）表記が基本" },
      { label: "Bond（敷金）", value: "通常2〜4週間分。退去時に原状回復を条件に返金" },
      { label: "費用の含有", value: "光熱費・ネット込み（bills included）か要確認" },
    ],
    steps: [
      { title: "予算とエリアを決める", description: "通勤時間・治安・スーパーの近さを考慮します。" },
      { title: "複数物件に内見を予約", description: "写真だけで決めず、実際に見て比較します。" },
      { title: "条件を確認", description: "家賃・Bond・最低滞在期間・光熱費・人数を確認します。" },
      { title: "契約・入金", description: "内見・合意後に支払い、領収書や契約メッセージを残します。" },
    ],
    tips: [
      "「週いくら」表示が多いので、月額換算（週×52÷12）で予算と比較しましょう。",
      "支払いは記録が残る銀行振込で。現金手渡しのみを要求される場合は慎重に。",
    ],
    warnings: ["内見前の送金、相場より極端に安い物件、海外在住オーナーを名乗るケースは詐欺の可能性が高いです。"],
    faqs: [
      {
        question: "Bondは必ず返ってきますか？",
        answer:
          "部屋を破損なく明け渡せば返金されるのが原則です。入居時に既存の傷を写真で記録しておくと、退去時のトラブルを防げます。",
      },
    ],
    relatedSlugs: [
      "whv-complete-guide",
      "arrival-checklist",
      "share-house-finding",
      "housing-platforms-comparison",
      "housing-message-templates",
      "inspection-checklist",
    ],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a37",
    title: "シェアハウスの探し方と内見チェックリスト",
    slug: "share-house-finding",
    category: "housing",
    description:
      "ワーホリの定番はシェアハウス。物件の探し方、内見で見るべきポイント、契約・ボンド（敷金）の注意点を実践的にまとめました。",
    content: [
      "ワーホリの多くはシェアハウス（複数人で住む賃貸）で暮らします。1部屋を借りる『個室（own room）』と、2段ベッド等を共有する『シェアルーム（相部屋）』があり、後者ほど家賃が安くなります。",
      "物件はFlatmates.com.au、Gumtree、Facebookの賃貸グループ、日本人向け掲示板などで探します。人気物件は早い者勝ちのため、現地到着後すぐ動けるよう事前に相場とエリアを調べておくと有利です。",
    ],
    keyFacts: [
      { label: "主な探し方", value: "Flatmates.com.au / Gumtree / Facebook / 日本人掲示板" },
      { label: "家賃の支払い", value: "週払い表記(per week)が一般的。多くは2週間前払い" },
      { label: "ボンド(敷金)", value: "通常2〜4週間分。退去時に原状回復で返金" },
      { label: "内見", value: "必ず現地で確認してから契約・送金する" },
    ],
    steps: [
      { title: "エリアと予算を決める", description: "通勤・治安・家賃から住みたいエリアを絞ります。" },
      { title: "物件を探して連絡", description: "条件に合う部屋にメッセージを送り、内見をアポイントします。" },
      { title: "内見でチェック", description: "水回り・カビ・騒音・住人の雰囲気・含まれる費用(光熱費/Wi-Fi)を確認します。" },
      { title: "契約・支払い", description: "条件(家賃/ボンド/最低滞在期間/退去通知)を書面で確認してから支払います。" },
    ],
    tips: [
      "内見前の送金要求は詐欺の定番。必ず現物を見てから払いましょう。",
      "家賃にbills（光熱費・Wi-Fi）が含まれるか必ず確認。別途だと月の出費が変わります。",
      "最低滞在期間（minimum stay）と退去通知（notice）の条件を事前に把握しておきましょう。",
    ],
    faqs: [
      {
        question: "ボンド（敷金）は必ず返ってきますか？",
        answer:
          "部屋を入居時の状態に戻して退去すれば原則返金されます。入居時に既存の傷・汚れを写真に残しておくと、退去時のトラブルを防げます。",
      },
    ],
    phrases: [
      { en: "Is this room still available?", ja: "この部屋はまだ空いていますか？", note: "問い合わせの最初のひとこと" },
      { en: "Can I come and inspect the room?", ja: "内見に行ってもいいですか？" },
      { en: "Are bills (electricity, gas, Wi-Fi) included in the rent?", ja: "家賃に光熱費・Wi-Fiは含まれていますか？" },
      { en: "How much is the bond and when is it refunded?", ja: "ボンド（敷金）はいくらで、いつ返金されますか？" },
      { en: "Is there a minimum stay?", ja: "最低滞在期間はありますか？" },
    ],
    warnings: ["相場より極端に安い物件や前払いを急かす相手は詐欺を疑ってください。"],
    relatedSlugs: [
      "housing-guide",
      "housing-platforms-comparison",
      "housing-message-templates",
      "inspection-checklist",
      "safety-emergency",
      "area-overview",
    ],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a206",
    title: "Flatmates・Facebook・Gumtreeなど家探しサービス比較｜掲載数・本人確認・詐欺リスク",
    slug: "housing-platforms-comparison",
    category: "housing",
    hub: "housing",
    priority: "P0",
    searchIntent: "シェアハウス探しの主要プラットフォーム比較・使い分け",
    description:
      "ワーホリのシェアハウス探しで使う主要サービス（Flatmates.com.au / Facebookグループ・Marketplace / Gumtree / 日本人向け掲示板）を、掲載数・本人確認の仕組み・詐欺リスク・向く用途で比較。目的別の使い分けと安全な使い方を解説します。",
    content: [
      "結論から言うと、初めての家探しで最も使いやすいのは『Flatmates.com.au』です。シェア専門で本人確認（ID認証）やプロフィール機能があり、条件検索もしやすいためです。一方で、掲載数の多さと即決のスピードなら『Facebookの賃貸グループ／Marketplace』、掘り出し物や短期・地方の物件も含めて幅広く見るなら『Gumtree』、英語に不安がある最初の数週間なら『日本人向け掲示板（JAMSやワーホリ系グループ）』が向いています。目的に応じて2〜3個を併用するのが現実的です。",
      "各サービスには一長一短があります。Flatmatesはシェア特化で質は高めですが、良い部屋はメッセージが集中して競争になります。Facebookは無料で情報量が多い反面、投稿者の身元が分かりにくく詐欺投稿も混ざります。Gumtreeは物件から中古品・仕事まで扱う総合掲示板で、賃貸以外の詐欺手口も流用されやすい点に注意が必要です。日本人掲示板は言語の壁が低い反面、相場より割高だったり、物件数が限られたりします。",
      "どのサービスでも共通する鉄則は『内見前に送金しない』ことです。プラットフォームの安全性に関わらず、詐欺師は本物そっくりの写真を使い、海外在住のオーナーを名乗って『内見できないが先にBond（敷金）を振り込めば鍵を送る』と誘導します。ACCCのScamwatch（詐欺通報窓口）も、賃貸詐欺の典型として『現地を見ずに前払いを求める』手口を挙げています。プラットフォーム内のメッセージでやり取りを残し、支払いは記録が残る銀行振込で、必ず内見・契約確認の後に行いましょう。",
      "使い分けの目安は次の通りです。① まずFlatmatesとFacebookグループで相場とエリアを把握する → ② 気になる物件に複数連絡して内見を予約する（1件に絞らない）→ ③ Gumtreeや日本人掲示板で候補を補強する → ④ 内見で部屋・設備・同居人・含まれる費用を確認し、条件を書面（メッセージ）で残してから支払う、という流れです。到着直後の1〜2週間はバックパッカー宿などに滞在し、落ち着いて内見できる態勢を作ると失敗しにくくなります。",
    ],
    keyFacts: [
      { label: "Flatmates.com.au", value: "シェア特化・本人確認あり・条件検索が得意。初心者向けだが競争は激しい" },
      { label: "Facebook（賃貸グループ/Marketplace）", value: "掲載数と即決の速さが強み。無料だが身元が不透明・詐欺投稿に注意" },
      { label: "Gumtree", value: "総合掲示板で幅広い。短期・地方も。詐欺手口が流用されやすい" },
      { label: "日本人向け掲示板", value: "言語の壁が低い。物件数は限られ相場より割高なことも" },
      { label: "共通の鉄則", value: "内見前に送金しない・銀行振込で記録を残す" },
    ],
    steps: [
      { title: "相場とエリアを把握", description: "FlatmatesとFacebookで希望エリアの家賃・条件の相場を調べます。" },
      { title: "複数物件に内見予約", description: "1件に絞らず、条件に合う複数の部屋へメッセージして内見をアポします。" },
      { title: "候補を補強", description: "Gumtreeや日本人掲示板でも候補を追加し、選択肢を増やします。" },
      { title: "内見後に契約・支払い", description: "部屋・設備・同居人・含まれる費用を確認し、条件を残してから振込みます。" },
    ],
    tips: [
      "プロフィールを充実させ（在豪期間・仕事・喫煙/飲酒・生活リズム）、丁寧な英語メッセージを送ると内見に呼ばれやすくなります。",
      "『per week（週いくら）』表記が基本。月額は週×52÷12で換算して予算と比較しましょう。",
      "同じ物件が複数サービスに出ていることも。連絡はプラットフォーム内で残し、口約束を避けます。",
    ],
    warnings: [
      "どのサービスでも、内見前の送金・相場より極端に安い物件・海外在住オーナーを名乗るケースは詐欺の可能性が高いです。",
      "『他にも希望者がいるから今すぐBondを払って』と急かす相手には応じないでください。急かしは詐欺の典型です。",
    ],
    faqs: [
      {
        question: "結局どのサービスから始めればいいですか？",
        answer:
          "初めてならFlatmates.com.auとFacebookの地域賃貸グループの2つから始めるのがおすすめです。前者で質の高いシェア物件を探しつつ、後者で最新の空室情報を素早く拾えます。慣れてきたらGumtreeや日本人掲示板も併用しましょう。",
      },
      {
        question: "Facebookの物件は危険ですか？",
        answer:
          "Facebook自体が危険なわけではなく、身元確認が弱いため詐欺投稿が混ざりやすいという性質です。投稿者のプロフィール（作成時期・友達・投稿履歴）を確認し、内見前に送金しない鉄則を守れば有力な情報源になります。",
      },
    ],
    phrases: [
      { en: "Is this room still available?", ja: "この部屋はまだ空いていますか？", note: "問い合わせの第一声" },
      { en: "Could I arrange an inspection this week?", ja: "今週、内見を予約できますか？" },
      { en: "Are all bills included in the weekly rent?", ja: "週の家賃に光熱費などはすべて含まれていますか？" },
    ],
    sources: [
      { label: "Scamwatch（ACCC）｜詐欺の種類・通報", url: "https://www.scamwatch.gov.au/" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Scamwatch（ACCC / National Anti-Scam Centre）｜賃貸詐欺を含む詐欺情報と通報",
        url: "https://www.scamwatch.gov.au/",
        accessedAt: "2026-07-19",
      },
      {
        label: "NSW Government｜Renting a place to live（賃貸の安全な進め方）",
        url: "https://www.nsw.gov.au/housing-and-construction/renting-a-place-to-live",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: [
      "housing-guide",
      "share-house-finding",
      "housing-message-templates",
      "inspection-checklist",
      "safety-emergency",
    ],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a207",
    title: "シェアハウス応募メッセージの英語テンプレート｜自己紹介・内見依頼・フォローアップ",
    slug: "housing-message-templates",
    category: "housing",
    hub: "housing",
    priority: "P0",
    searchIntent: "シェアハウス応募の英語メッセージ例文・テンプレート",
    description:
      "FlatmatesやFacebookでシェアハウスに応募するときに使える英語メッセージのテンプレート集。最初の問い合わせ・自己紹介・内見依頼・条件確認・フォローアップまで、そのままコピーして使える例文と日本語訳をまとめました。",
    content: [
      "シェアハウスの応募で内見に呼ばれるかどうかは、最初のメッセージで大きく決まります。良いメッセージの型はシンプルで、①短い自己紹介（誰か）②在豪期間と入居希望日③相手が知りたい情報（仕事・生活リズム・喫煙/飲酒）④内見のお願い、の4点を丁寧にまとめるだけです。以下のテンプレートをコピーして、名前や日付を変えればそのまま使えます。",
      "最初の問い合わせ（基本形）：『Hi, I saw your listing for the room in [Suburb]. Is it still available? A bit about me: I'm [Name], a [age]-year-old from Japan on a working holiday visa. I'm tidy, respectful, and a non-smoker. I'm looking to move in around [date] and can stay for [number] months. Would it be possible to arrange an inspection this week? Thank you!』（こんにちは、[地名]のお部屋の募集を見ました。まだ空いていますか？ 自己紹介すると、私は日本から来た[年齢]歳の[名前]で、ワーキングホリデービザで滞在しています。きれい好きで、礼儀正しく、非喫煙者です。[日付]頃から[数]か月入居したいです。今週、内見を予約できますか？ よろしくお願いします。）",
      "自己紹介を厚めにする場合（人気物件・面接的な募集向け）：『Hi [Name], thanks for the listing. I'm [Name] from Japan, currently working as [job] in [area]. I keep regular hours, I'm clean and quiet, and I get along well with housemates. I don't smoke [and I rarely drink]. I'm looking for a place from [date] for at least [number] months and can pay bond and two weeks' rent upfront after inspection. Could I come and see the room? I'm flexible on timing.』（[名前]さん、募集ありがとうございます。日本出身の[名前]で、今は[地域]で[仕事]をしています。生活リズムは規則的で、清潔・静かで、同居人ともうまくやれます。喫煙はしません[お酒もほとんど飲みません]。[日付]から最低[数]か月の入居先を探していて、内見後にBondと2週間分の家賃を前払いできます。お部屋を見に伺えますか？ 時間は合わせられます。）",
      "内見前に条件を確認するメッセージ：『Thanks! Before the inspection, could you let me know: (1) Is the rent per week, and are bills (electricity, gas, water, internet) included? (2) How much is the bond and how is it held? (3) Is there a minimum stay and how much notice is needed to leave? (4) How many people live in the property?』（ありがとうございます。内見の前に教えてください。①家賃は週いくらで、光熱費（電気・ガス・水道・ネット）は含まれますか？ ②Bondはいくらで、どのように預かられますか？ ③最低滞在期間はありますか、退去時の通知はどれくらい必要ですか？ ④何人が住んでいますか？）",
      "内見後のフォローアップ（好印象を残す）：『Hi [Name], thank you for showing me the room today. I really liked the place and the vibe. I'd love to take it if it's still available. Please let me know the next steps. Thanks again!』（[名前]さん、本日は内見をありがとうございました。お部屋も雰囲気もとても気に入りました。もしまだ空いていれば、ぜひお借りしたいです。次の手続きを教えてください。ありがとうございました！）と送ると、決定を後押しできます。返信が来ないときは2〜3日後に一度だけ丁寧に催促（follow up）し、それでも反応がなければ次の候補へ進みましょう。",
      "安全面の注意として、メッセージのやり取りは必ずプラットフォーム内やチャットに記録として残し、口約束だけで進めないでください。相手が『内見はできないが先にBondを振り込んで』と言ってきたら、どんなに丁寧な英語でも詐欺を疑い、送金しないこと。支払いは内見・条件確認のあと、記録の残る銀行振込で行います。",
    ],
    keyFacts: [
      { label: "良いメッセージの型", value: "自己紹介＋在豪期間/入居日＋生活リズム＋内見依頼" },
      { label: "必ず入れる自己紹介", value: "名前・年齢・出身・ビザ・喫煙/飲酒・清潔さ" },
      { label: "内見前に確認", value: "家賃(週)・bills込み有無・Bond・最低滞在・退去通知・人数" },
      { label: "フォローアップ", value: "内見後にお礼＋意思表示。返信なしは2-3日後に一度だけ催促" },
      { label: "安全", value: "やり取りは記録に残す・内見前に送金しない" },
    ],
    steps: [
      { title: "最初の問い合わせを送る", description: "自己紹介＋入居希望日＋内見依頼を丁寧にまとめて送ります。" },
      { title: "条件を確認", description: "家賃・bills・Bond・最低滞在・退去通知・人数を内見前に質問します。" },
      { title: "内見に行く", description: "実際に部屋・設備・同居人を確認します（送金は内見後）。" },
      { title: "フォローアップ", description: "内見後にお礼と入居意思を伝え、次の手続きを確認します。" },
    ],
    tips: [
      "1通目は長すぎず、清潔・静か・非喫煙など同居人が安心する要素を短く盛り込むと返信率が上がります。",
      "同じ文面を複数物件に送ってOK。ただし地名や部屋の特徴を一言入れると『コピペ感』が薄れて印象が良くなります。",
      "英語に自信がなくても、丁寧で誠実な短文で十分伝わります。翻訳アプリで整えつつ、テンプレを土台にしましょう。",
    ],
    warnings: [
      "『内見できないので先にBondを振り込んで』というメッセージは、丁寧な文面でも詐欺の典型です。送金しないでください。",
      "個人情報（パスポート番号・銀行口座）を入居確定前に求められたら応じないでください。",
    ],
    faqs: [
      {
        question: "返信が来ないのは失礼だからですか？",
        answer:
          "多くの場合そうではなく、人気物件には問い合わせが殺到するため全員には返信できないだけです。落ち込まず、複数の物件に同時並行で連絡し、2〜3日返信がなければ次へ進みましょう。",
      },
      {
        question: "英語が下手でも大丈夫ですか？",
        answer:
          "大丈夫です。文法が完璧でなくても、清潔で静か・非喫煙・きちんと家賃を払える、という点が誠実に伝われば内見に呼ばれます。テンプレートを土台に、名前と日付を変えるだけでも十分機能します。",
      },
    ],
    phrases: [
      { en: "Is this room still available?", ja: "この部屋はまだ空いていますか？", note: "問い合わせの第一声" },
      { en: "A bit about me: I'm tidy, quiet, and a non-smoker.", ja: "自己紹介すると、きれい好きで静か、非喫煙者です。" },
      { en: "Would it be possible to arrange an inspection this week?", ja: "今週、内見を予約できますか？" },
      { en: "Are bills (electricity, gas, water, internet) included?", ja: "光熱費（電気・ガス・水道・ネット）は含まれますか？" },
      { en: "Thank you for showing me the room. I'd love to take it.", ja: "内見ありがとうございました。ぜひ借りたいです。" },
    ],
    sources: [
      { label: "Scamwatch（ACCC）｜詐欺の種類・通報", url: "https://www.scamwatch.gov.au/" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Scamwatch（ACCC / National Anti-Scam Centre）｜賃貸詐欺の手口と通報",
        url: "https://www.scamwatch.gov.au/",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: [
      "share-house-finding",
      "housing-guide",
      "housing-platforms-comparison",
      "inspection-checklist",
    ],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a208",
    title: "シェアハウス内見チェックリスト｜部屋・設備・同居人・契約条件",
    slug: "inspection-checklist",
    category: "housing",
    hub: "housing",
    priority: "P0",
    searchIntent: "シェアハウス内見で確認する項目チェックリスト",
    description:
      "シェアハウスの内見でその場で使える確認チェックリスト。部屋・水回り・キッチン・設備・同居人・立地・契約条件（家賃/Bond/最低滞在/退去通知）まで、見落としがちなポイントを一覧にまとめました。",
    content: [
      "内見で最初に確認すべきなのは『写真と実物が一致するか』『含まれる費用（bills）と契約条件が募集どおりか』の2点です。この2つがずれていると、入居後に家賃以外の出費や早期退去のトラブルにつながります。以下のチェックリストを内見中にスマホで開き、その場で一つずつ確認しましょう。契約や送金は、この確認が済んでからで十分です。",
      "【部屋そのもの】ベッド・マットレス・収納・机の有無と状態、鍵がかかるか、窓とカーテン、日当たり、コンセントの数、Wi-Fiの電波、既存の傷・汚れ・カビ・虫の跡。既存の傷は入居前に写真で記録しておくと、退去時にBond（敷金）を巡るトラブルを防げます。",
      "【水回り・キッチン・共用部】シャワーの水圧とお湯、トイレとバスルームの数（何人で共有するか）、キッチンの清潔さ・冷蔵庫や収納の空きスペース、洗濯機・乾燥機の有無と使い方（有料か）、共用スペースの雰囲気とゴミの管理。人数に対して水回りが少ないと朝の混雑や不衛生の原因になります。",
      "【同居人・生活環境】今住んでいる人の人数・性別・年齢層・国籍、生活リズム（夜勤や早朝出勤の人がいるか）、騒音・喫煙・飲酒・ゲスト（恋人の宿泊）のルール、掃除当番の有無。実際に住人と少し話し、雰囲気が自分に合うかを確かめると失敗が減ります。",
      "【立地・安全】最寄り駅・バス停までの距離、夜道の明るさと治安、スーパー・薬局・コインランドリーの近さ、職場や語学学校への通勤時間、周辺の騒音（幹線道路・線路・パブ）。昼と夜で印象が変わるため、可能なら夜の様子も確認しましょう。",
      "【契約・費用条件】家賃は週いくらか、bills（電気・ガス・水道・ネット）が込みか別か、Bondはいくらでどう預けられるか（州の預託機関か個人口座か）、最低滞在期間（minimum stay）、退去時の通知期間（notice）、支払い方法。これらは口頭ではなくメッセージや契約書など記録に残る形で確認してから支払ってください。内見前に送金を求められた場合は詐欺を疑い、応じないことが鉄則です。",
    ],
    keyFacts: [
      { label: "部屋", value: "鍵・ベッド/収納・窓/日当たり・コンセント・傷/カビ/虫" },
      { label: "水回り", value: "シャワーの水圧とお湯・トイレ数・キッチンの清潔さ・洗濯機" },
      { label: "同居人", value: "人数/性別/年齢・生活リズム・騒音/喫煙/ゲストのルール" },
      { label: "立地", value: "駅/バス・治安・スーパー・通勤時間・夜の様子" },
      { label: "契約条件", value: "家賃(週)・bills込み有無・Bond・最低滞在・退去通知" },
    ],
    steps: [
      { title: "写真と実物を照合", description: "募集写真どおりか、部屋の広さ・状態を実物で確認します。" },
      { title: "設備を動かして確認", description: "シャワーの水圧・お湯、Wi-Fi電波、コンセント、洗濯機を実際に確かめます。" },
      { title: "既存の傷を記録", description: "傷・汚れ・カビを写真に残し、退去時のBondトラブルを予防します。" },
      { title: "同居人と話す", description: "生活リズムやルールを確認し、雰囲気が合うか見極めます。" },
      { title: "契約条件を書面で確認", description: "家賃・bills・Bond・最低滞在・退去通知を記録に残してから支払います。" },
    ],
    tips: [
      "内見はできれば明るい時間に。加えて、可能なら夜の周辺の様子も一度見ておくと安心です。",
      "『bills込み』でも上限（cap）がある場合があります。超過分の負担ルールを必ず確認しましょう。",
      "入居時の既存の傷・汚れは、日付が分かる形で写真を撮り自分にも送っておくと証拠になります。",
    ],
    warnings: [
      "内見前に送金を求められたら詐欺を疑い、応じないでください。支払いは内見・条件確認の後に、記録の残る銀行振込で行います。",
      "Bondを個人の口座に振り込むよう求められる場合は、州の預託制度や返金ルールを事前に確認しましょう。",
    ],
    faqs: [
      {
        question: "内見でいちばん見落としやすいのは何ですか？",
        answer:
          "『含まれる費用（bills）』と『最低滞在・退去通知の条件』です。家賃の安さだけで決めると、光熱費が別で総額が高くなったり、早く出たいのに違約金がかかったりします。契約条件は必ず記録に残る形で確認しましょう。",
      },
      {
        question: "その場で契約・入金を迫られたらどうすれば？",
        answer:
          "急かされても、条件をメッセージで確認し、既存の傷を記録してから支払うのが安全です。『他にも希望者がいる』と即決を迫るのは詐欺や悪質物件の典型なので、一度落ち着いて判断してください。",
      },
    ],
    phrases: [
      { en: "Can I check the water pressure and hot water?", ja: "シャワーの水圧とお湯を確認してもいいですか？" },
      { en: "How many people share the bathroom?", ja: "バスルームは何人で共有しますか？" },
      { en: "Are there any rules about guests, smoking, or noise?", ja: "ゲスト・喫煙・騒音のルールはありますか？" },
      { en: "How is the bond held and refunded?", ja: "Bondはどう預けられ、どう返金されますか？" },
      { en: "What is the minimum stay and notice period?", ja: "最低滞在期間と退去通知はどれくらいですか？" },
    ],
    sources: [
      { label: "Consumer Affairs Victoria｜Renting", url: "https://www.consumer.vic.gov.au/housing/renting" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Consumer Affairs Victoria｜Renting（内見・契約・Bondの基本）",
        url: "https://www.consumer.vic.gov.au/housing/renting",
        accessedAt: "2026-07-19",
      },
      {
        label: "NSW Government｜Renting a place to live（賃貸開始時の確認事項）",
        url: "https://www.nsw.gov.au/housing-and-construction/renting-a-place-to-live",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: [
      "share-house-finding",
      "housing-guide",
      "housing-platforms-comparison",
      "housing-message-templates",
    ],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a209",
    title: "Bond（敷金）の仕組みと正規の預け方｜州別の預託先と返金ルール",
    slug: "bond-rules-overview",
    category: "housing",
    hub: "housing",
    priority: "P0",
    searchIntent: "Bondの仕組み・正規の預け方・州の公式預託機関",
    description:
      "オーストラリア賃貸のBond（敷金）の仕組み、金額の目安（家賃4週間分が上限の目安）、州ごとの公式預託機関（NSW Rental Bonds Online／VIC RTBA／QLD RTA）への正しい預け方、退去時の返金ルールと詐欺の見分け方を解説します。",
    content: [
      "結論から言うと、Bond（敷金・保証金）は退去時に部屋を原状回復すれば返ってくるお金で、いちばん大切なのは『オーナー個人の口座に払いっぱなしにせず、州の公式な預託機関に預けられているか』を確認することです。正式な賃貸契約（residential tenancy agreement）では、オーナーやエージェントは受け取ったBondを一定期間内に州の機関へ預託する義務があります。金額の目安は家賃の約4週間分ですが、上限は州によって異なるため、必ず自分の州の当局で確認してください。",
      "州ごとの公式なBond預託先は次の通りです。NSW＝Rental Bonds Online（NSW Fair Trading）、VIC＝RTBA（Residential Tenancies Bond Authority、rentalbonds.vic.gov.au）、QLD＝RTA（Residential Tenancies Authority）。これらの機関にBondが預けられていれば、退去時の返金や紛争処理が公的な仕組みで守られます。QLDでは2024年9月30日以降、一般賃貸のBond上限は週家賃の額にかかわらず家賃4週間分と定められています（詳細な上限は各州で確認）。",
      "注意が必要なのは、シェアハウスの又貸し（sub-let）や間借り（lodger）です。シェアメイトの一人（head tenant）に又貸しで入る形だと、州の賃貸法の保護対象外になる場合が多く、Bondが公式機関に預託されず個人間のやり取りになります。この場合はBondが返らないトラブルが起きやすいため、①金額・返金条件を書面（メッセージ）で残す、②支払いは記録が残る銀行振込にする、③入居時の部屋の状態を写真で記録する、の3点を必ず行いましょう。",
      "返金の基本ルールは『破損や未払い家賃がなければ全額返金』です。退去時に、通常の使用による経年劣化（fair wear and tear）はあなたの負担にはなりません。返金でもめないために、入居時に既存の傷・汚れをCondition Report（入居時状態報告書）と写真で記録しておくことが最大の防御になります。Bondを個人口座に振り込むよう求められたり、内見前に送金を迫られたりした場合は詐欺を強く疑ってください。",
    ],
    keyFacts: [
      { label: "Bondとは", value: "退去時の原状回復を条件に返金される保証金" },
      { label: "金額の目安", value: "家賃4週間分が上限の目安（上限は州で異なる）" },
      { label: "NSWの預託先", value: "Rental Bonds Online（NSW Fair Trading）" },
      { label: "VICの預託先", value: "RTBA（rentalbonds.vic.gov.au）" },
      { label: "QLDの預託先", value: "RTA（Residential Tenancies Authority）" },
      { label: "最大の防御", value: "入居時に既存の傷を写真＋Condition Reportで記録" },
    ],
    steps: [
      { title: "契約形態を確認", description: "正式な賃貸契約か、又貸し/間借りかを確認します。保護の範囲が変わります。" },
      { title: "Bondの金額と根拠を確認", description: "家賃何週間分か、州の上限内かを確認します。" },
      { title: "預託先を確認", description: "州の公式機関（RBO/RTBA/RTA）に預けられるか、領収書・預託番号をもらえるか確認します。" },
      { title: "入居時の状態を記録", description: "Condition Reportに記入し、既存の傷を日付入りの写真で残します。" },
      { title: "支払いは記録の残る方法で", description: "銀行振込で支払い、金額・条件をメッセージで残します。" },
    ],
    tips: [
      "『per week（週いくら）』表記が基本。Bondは通常その4週間分が目安です。",
      "預託番号（bond lodgement number）や受領メールは退去まで保管しておきましょう。",
      "又貸し・間借りでも、金額・返金条件・退去通知を書面で合意しておくとトラブルを避けられます。",
    ],
    warnings: [
      "Bondを州の機関ではなくオーナー個人の口座に払い、領収書も出ない場合は要注意です。返金トラブルの温床になります。",
      "内見前にBondや前家賃の送金を求められたら、丁寧な文面でも詐欺を疑い、応じないでください。",
    ],
    faqs: [
      {
        question: "Bondは必ず全額返ってきますか？",
        answer:
          "破損や未払い家賃、契約違反がなければ全額返金が原則です。通常使用による経年劣化（fair wear and tear）はあなたの負担になりません。入居時に既存の傷を写真とCondition Reportで記録しておけば、退去時にもめても証拠になります。",
      },
      {
        question: "シェアハウスでBondを個人に払うのは危険ですか？",
        answer:
          "又貸し・間借りでは州の預託制度が使えないことが多く、返金は相手の誠実さ次第になります。危険というより保護が薄いので、金額・返金条件を書面で残し、銀行振込で支払い、部屋の状態を写真で記録して自衛してください。",
      },
    ],
    phrases: [
      { en: "How much is the bond, and how is it held?", ja: "Bondはいくらで、どのように預けられますか？" },
      { en: "Will the bond be lodged with the state bond authority?", ja: "Bondは州の預託機関に預けられますか？" },
      { en: "Could I get a receipt or lodgement number for the bond?", ja: "Bondの領収書か預託番号をもらえますか？" },
    ],
    sources: [
      { label: "NSW Government｜Renting a place to live", url: "https://www.nsw.gov.au/housing-and-construction/renting-a-place-to-live" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Residential Tenancies Authority (QLD)｜Bonds（Bond上限・預託）",
        url: "https://www.rta.qld.gov.au/",
        accessedAt: "2026-07-19",
      },
      {
        label: "NSW Government｜Renting a place to live（Rental Bonds Online）",
        url: "https://www.nsw.gov.au/housing-and-construction/renting-a-place-to-live",
        accessedAt: "2026-07-19",
      },
      {
        label: "Consumer Affairs Victoria｜Renting（RTBAへのBond預託）",
        url: "https://www.consumer.vic.gov.au/housing/renting",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: [
      "housing-guide",
      "share-house-finding",
      "condition-report-guide",
      "bond-refund-dispute",
      "rental-agreement-share-house",
      "rental-scam-examples",
    ],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a210",
    title: "入居時Condition Reportと写真記録の残し方｜退去トラブルを防ぐ証拠づくり",
    slug: "condition-report-guide",
    category: "housing",
    hub: "housing",
    priority: "P0",
    searchIntent: "入居時Condition Reportの書き方・写真記録でBondを守る",
    description:
      "オーストラリア賃貸の入居時Condition Report（状態報告書）の役割と正しい書き方、写真・動画の残し方を解説。退去時にBond（敷金）を全額取り戻すための証拠づくりの手順と、シェアハウスで記録を残すコツをまとめました。",
    content: [
      "結論から言うと、退去時にBond（敷金）を全額取り戻せるかどうかは、入居初日に部屋の状態をどれだけ丁寧に記録したかで決まります。Condition Report（入居時状態報告書）は、入居時点の傷・汚れ・不具合を家主と入居者の双方が確認して残す書類で、退去時に『それは元からあった傷だ』と証明する最も重要な証拠になります。NSWなど多くの州では、正式な賃貸で家主が入居時にこの書類を用意する義務があります。",
      "書き方の基本は『気になる箇所をすべて記録し、あいまいな表現を避ける』ことです。壁の穴・へこみ、床やカーペットのシミ、水回りのカビ、網戸やブラインドの破れ、家具・家電の動作、鍵の状態などを部屋ごとにチェックし、『clean / undamaged / working』で問題なければその旨を、傷があれば具体的に（例: small scratch on left wall near window）書きます。家主が用意した報告書に既に『良好』と書かれていても、実際と違えば自分の指摘を追記しましょう。",
      "写真・動画は文章の何倍も強力な証拠です。入居当日に、①各部屋の全体、②既存の傷・汚れの接写、③家電の動作、を撮影します。日付が記録される形（撮影後すぐ自分にメール送信、またはクラウド保存）で残すのがポイントです。可能なら家主やエージェントにも同じ写真をメールで送り、『入居時の状態として共有します』と一言添えておくと、後日の食い違いを防げます。",
      "シェアハウスの又貸し・間借りでは、正式なCondition Reportがないことも多いですが、その場合こそ自分で記録を残す価値が高いです。入居時に部屋の写真・動画を撮り、head tenant（借主）に『この状態で入居します』とメッセージで共有しておけば、退去時にBondから不当に差し引かれるのを防げます。通常使用による経年劣化（fair wear and tear）はあなたの負担にならないことも覚えておきましょう。",
    ],
    keyFacts: [
      { label: "Condition Reportとは", value: "入居時の部屋の状態を双方で記録する書類" },
      { label: "目的", value: "退去時に『元からあった傷』を証明しBondを守る" },
      { label: "記録すべき箇所", value: "壁・床・水回りのカビ・家電・鍵・網戸/ブラインド" },
      { label: "写真のコツ", value: "全体＋傷の接写を日付が残る形で保存・家主にも共有" },
      { label: "負担しない範囲", value: "通常使用による経年劣化（fair wear and tear）" },
    ],
    steps: [
      { title: "入居当日に受け取る/作る", description: "家主の報告書を受け取るか、無ければ自分でチェックリストを用意します。" },
      { title: "部屋ごとに点検", description: "壁・床・水回り・家電・鍵を確認し、傷は具体的に記入します。" },
      { title: "写真・動画を撮影", description: "全体像と既存の傷の接写を、日付が残る形で保存します。" },
      { title: "家主/借主に共有", description: "同じ写真と報告書をメールで送り、入居時の状態として合意を残します。" },
      { title: "退去まで保管", description: "報告書・写真・共有メールを退去時のBond精算まで保管します。" },
    ],
    tips: [
      "スマホで撮った写真はすぐ自分宛にメールするか、クラウドに上げて撮影日を証拠化しましょう。",
      "『clean』『working』など曖昧な合意欄も、実際に確認してから同意してください。",
      "退去直前にも同じ箇所を撮影し、入居時と比較できるようにしておくと精算がスムーズです。",
    ],
    warnings: [
      "家主が用意した報告書に署名する前に、記載内容が実際と合っているか必ず確認してください。合わない箇所は追記します。",
      "記録がないと、経年劣化までBondから差し引かれるリスクがあります。写真は必ず残しましょう。",
    ],
    faqs: [
      {
        question: "Condition Reportがもらえない場合はどうすれば？",
        answer:
          "又貸しや間借りでは正式な書類がないこともあります。その場合は自分で部屋の写真・動画を撮り、家主や借主に『この状態で入居します』とメッセージで共有しておけば、実質的な証拠になります。",
      },
      {
        question: "経年劣化まで弁償させられることはありますか？",
        answer:
          "通常の使用による色あせや小さな摩耗（fair wear and tear）は入居者の負担になりません。ただし証拠がないと『あなたが付けた傷』と主張されることがあるため、入居時の記録が重要です。",
      },
    ],
    phrases: [
      { en: "Could you provide a condition report for move-in?", ja: "入居時のCondition Reportをもらえますか？" },
      { en: "I'd like to note some existing marks before I move in.", ja: "入居前に、既にある傷をいくつか記録しておきたいです。" },
      { en: "I'm sharing these photos as the move-in condition.", ja: "入居時の状態として、この写真を共有します。" },
    ],
    sources: [
      { label: "NSW Government｜Renting a place to live", url: "https://www.nsw.gov.au/housing-and-construction/renting-a-place-to-live" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "NSW Government｜Renting a place to live（Condition report）",
        url: "https://www.nsw.gov.au/housing-and-construction/renting-a-place-to-live",
        accessedAt: "2026-07-19",
      },
      {
        label: "Consumer Affairs Victoria｜Renting（入居時の記録）",
        url: "https://www.consumer.vic.gov.au/housing/renting",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: [
      "bond-rules-overview",
      "bond-refund-dispute",
      "inspection-checklist",
      "housing-guide",
      "rental-agreement-share-house",
    ],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a211",
    title: "シェアハウス契約書で確認する項目｜家賃・Bond・退去通知・光熱費・ルール",
    slug: "rental-agreement-share-house",
    category: "housing",
    hub: "housing",
    priority: "P0",
    searchIntent: "シェアハウス契約書で確認すべき項目チェックリスト",
    description:
      "シェアハウスの契約・入居前に確認すべき項目を一覧化。家賃・Bond・最低滞在期間・退去通知（notice）・光熱費（bills）の扱い・ハウスルール・契約形態（正式契約か又貸しか）まで、支払い前にチェックすべきポイントを解説します。",
    content: [
      "結論から言うと、シェアハウスの契約で支払い前に必ず確認すべきなのは『家賃・Bond・最低滞在期間・退去通知・光熱費の扱い・契約形態』の6項目です。これらを口頭ではなく、メッセージや契約書など記録に残る形で確認してから支払えば、入居後の金銭トラブルの大半を防げます。特に『契約形態（正式な賃貸契約か、又貸し/間借りか）』は、あなたが州の賃貸法で守られるかどうかを左右する最重要ポイントです。",
      "確認すべき6項目は次の通りです。①家賃（週いくらか、前払いの週数）②Bond（金額・預け方・返金条件）③最低滞在期間（minimum stay: 途中退去で違約金が出るか）④退去通知（notice: 何週間前に伝える必要があるか）⑤光熱費（bills: 電気・ガス・水道・ネットが込みか別か、上限capの有無）⑥ハウスルール（掃除・騒音・ゲスト・喫煙）。これに加えて、鍵の受け渡し方法と、Bond返金のタイミングも聞いておくと安心です。",
      "契約形態には主に3種類あります。(1) 自分がオーナー/エージェントと直接結ぶ正式な賃貸契約（residential tenancy agreement）＝州の賃貸法で保護される。(2) 借主（head tenant）から部屋を又貸しされるsub-let。(3) オーナーと同居しながら間借りするlodger。(2)(3)は州の賃貸法の保護対象外になる場合が多く、Bondの公式預託やトラブル時の公的救済が使いにくくなります。どの形態かを最初に確認し、又貸し・間借りなら条件を書面で残すことがとりわけ重要です。",
      "英語の契約書やメッセージで合意する際は、あいまいな口約束を避け、金額・期間・通知期間を数字で明記してもらいましょう。『bills included』でも上限（cap）がある場合や、退去通知が2週間・4週間など物件で異なる場合があります。少しでも不利・不明な条項があれば、支払い前に質問してください。支払いは内見・条件確認の後に、記録の残る銀行振込で行うのが鉄則です。",
    ],
    keyFacts: [
      { label: "必ず確認する6項目", value: "家賃・Bond・最低滞在・退去通知・光熱費・ハウスルール" },
      { label: "最重要", value: "契約形態（正式契約か又貸し/間借りか）" },
      { label: "家賃", value: "週いくらか・前払いの週数" },
      { label: "退去通知", value: "何週間前に伝える必要があるか（物件で異なる）" },
      { label: "光熱費", value: "込み/別・上限(cap)の有無" },
    ],
    steps: [
      { title: "契約形態を確認", description: "正式契約か、又貸し/間借りかを最初に確認します。保護の範囲が変わります。" },
      { title: "6項目を書面で確認", description: "家賃・Bond・最低滞在・退去通知・光熱費・ルールを記録に残る形で確認します。" },
      { title: "不明点を質問", description: "capの有無や通知期間など、あいまいな点を支払い前に質問します。" },
      { title: "記録を残して支払い", description: "合意内容をメッセージで残し、銀行振込で支払います。" },
    ],
    tips: [
      "最低滞在期間と退去通知はセットで確認。短期で動く予定なら特に重要です。",
      "『bills込み』の上限（cap）超過分を誰が払うかを必ず確認しましょう。",
      "契約書がなくても、合意内容をチャットで箇条書きにして相手に確認を取れば証拠になります。",
    ],
    warnings: [
      "又貸し・間借りは州の賃貸法の保護外になることが多いです。条件は必ず書面で残してください。",
      "内見前の送金要求や、条件を曖昧にしたまま急かす相手には応じないでください。",
    ],
    faqs: [
      {
        question: "契約書がないシェアハウスは避けるべきですか？",
        answer:
          "又貸し・間借りでは正式な契約書がないことも珍しくありません。避ける必要はありませんが、家賃・Bond・退去通知などの条件をメッセージで明文化し、支払い記録を残すことで自衛してください。",
      },
      {
        question: "最低滞在期間の途中で出たらどうなりますか？",
        answer:
          "最低滞在期間（minimum stay）内に出ると、次の入居者が決まるまでの家賃負担や違約金を求められることがあります。契約前に途中退去時のルールを確認し、必要なら後任探しの条件も聞いておきましょう。",
      },
    ],
    phrases: [
      { en: "Is this a formal lease, a sublet, or a room in the owner's home?", ja: "これは正式契約ですか、又貸しですか、オーナー宅の間借りですか？" },
      { en: "What is the minimum stay and the notice period to leave?", ja: "最低滞在期間と退去通知はどれくらいですか？" },
      { en: "Are bills capped, and who pays if we go over?", ja: "光熱費に上限はありますか、超えたら誰が払いますか？" },
    ],
    sources: [
      { label: "Consumer Affairs Victoria｜Renting", url: "https://www.consumer.vic.gov.au/housing/renting" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Consumer Affairs Victoria｜Renting（契約・Bond・退去）",
        url: "https://www.consumer.vic.gov.au/housing/renting",
        accessedAt: "2026-07-19",
      },
      {
        label: "NSW Government｜Renting a place to live（賃貸契約の基本）",
        url: "https://www.nsw.gov.au/housing-and-construction/renting-a-place-to-live",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: [
      "inspection-checklist",
      "bond-rules-overview",
      "rent-and-bills",
      "ending-tenancy-notice",
      "share-house-rules",
      "housing-guide",
    ],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a212",
    title: "家賃に光熱費は込み？電気・ガス・水道・ネットの分担を確認する方法",
    slug: "rent-and-bills",
    category: "housing",
    hub: "housing",
    priority: "P1",
    searchIntent: "家賃に光熱費が含まれるか・billsの分担方法",
    description:
      "シェアハウスの家賃に光熱費（bills: 電気・ガス・水道・インターネット）が含まれるかの確認方法と、含まれない場合の分担ルール、上限（cap）超過時の扱い、支払いでもめないためのコツを解説します。",
    content: [
      "結論から言うと、シェアハウスの家賃に光熱費（bills）が『含まれるか（included）』『別か（excluded）』は物件ごとに異なり、必ず入居前に確認する必要があります。『bills included』なら家賃だけで電気・ガス・水道・ネットまで賄えますが、上限（cap）が設定されていて超過分を別途請求される場合があります。『bills excluded』なら、実際の使用量を住人で分担するため、月の総額が家賃表示より高くなります。",
      "billsに含まれる主な項目は、電気（electricity）・ガス（gas）・水道（water）・インターネット（internet）です。分担方法は物件によって、①家賃に完全込み、②固定額を上乗せ（例: 家賃＋週$20 for bills）、③実費を人数で割り勘（請求書が来るたびに精算）、の3パターンがあります。割り勘の場合は、季節（夏の冷房・冬の暖房）で電気代が大きく変わるため、月々の変動を見込んでおきましょう。",
      "確認のポイントは『込みか別か』だけでなく『上限（cap）の有無と超過時のルール』です。『bills込み』でも、1人あたり週◯◯ドルまでといった上限が設定され、超えた分を追加請求されるケースがあります。ネットについては、含まれていても速度・データ量の制限がある場合があるので、在宅ワークやビデオ通話をするなら実測の速度も聞いておくと安心です。",
      "支払いでもめないコツは、①内見時に『家賃にbillsは込みか、上限はあるか』を口頭でなくメッセージで確認する、②割り勘なら過去数か月の請求額の目安を聞く、③精算方法（誰が請求書を管理し、いつ集金するか）を決めておく、の3点です。金額を数字で残しておけば、後から『聞いていない出費』が発生するのを防げます。",
    ],
    keyFacts: [
      { label: "billsの主な項目", value: "電気・ガス・水道・インターネット" },
      { label: "込み(included)", value: "家賃だけで賄えるが上限(cap)がある場合あり" },
      { label: "別(excluded)", value: "実費を人数で割り勘。総額は家賃表示より高くなる" },
      { label: "変動要因", value: "夏の冷房・冬の暖房で電気代が大きく変動" },
      { label: "確認すべき点", value: "込み/別・上限の有無・超過時の負担・精算方法" },
    ],
    steps: [
      { title: "込みか別かを確認", description: "内見時に家賃にbillsが含まれるかをメッセージで確認します。" },
      { title: "上限と超過ルールを確認", description: "『込み』でも上限(cap)があるか、超えたら誰が払うかを確認します。" },
      { title: "割り勘なら目安を聞く", description: "別払いなら、過去数か月の一人あたりの請求額の目安を聞きます。" },
      { title: "精算方法を決める", description: "誰が請求書を管理し、いつどう集金するかを合意します。" },
    ],
    tips: [
      "『家賃週$200 bills込み』と『家賃週$180 bills別』では、後者の方が総額が高くなることもあります。総額で比較しましょう。",
      "ネットは含まれていても速度・データ量に制限がある場合があります。在宅ワークなら実測速度を確認。",
      "割り勘の精算はアプリ（Splitwiseなど）や共有メモで記録すると住人間のもめ事を防げます。",
    ],
    warnings: [
      "『bills込み』の上限超過分を後から高額請求されるトラブルがあります。上限と超過ルールを必ず確認しましょう。",
      "口約束だけで入居すると、退去時にbillsの精算でもめやすいです。金額と精算方法は記録に残してください。",
    ],
    faqs: [
      {
        question: "『bills included』ならもう追加でお金はかかりませんか？",
        answer:
          "多くはそうですが、上限（cap）が設定されていて超過分を請求される物件もあります。『上限はあるか、超えたら誰が払うか』を入居前に確認しておくと安心です。",
      },
      {
        question: "光熱費の割り勘でよくあるトラブルは？",
        answer:
          "夏や冬に電気代が跳ね上がり、想定より高い請求が来ることや、退去時に未精算分でもめることです。過去の請求額の目安を聞き、精算方法（管理者・タイミング）を最初に決めておきましょう。",
      },
    ],
    phrases: [
      { en: "Are bills included in the rent, or paid separately?", ja: "光熱費は家賃に込みですか、別払いですか？" },
      { en: "Is there a cap on bills, and who pays if we go over?", ja: "光熱費に上限はありますか、超えたら誰が払いますか？" },
      { en: "Roughly how much are the bills per person each month?", ja: "一人あたり月の光熱費はだいたいいくらですか？" },
    ],
    sources: [
      { label: "Consumer Affairs Victoria｜Renting", url: "https://www.consumer.vic.gov.au/housing/renting" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Consumer Affairs Victoria｜Renting（賃料・光熱費の扱い）",
        url: "https://www.consumer.vic.gov.au/housing/renting",
        accessedAt: "2026-07-19",
      },
      {
        label: "NSW Government｜Renting a place to live（費用の確認）",
        url: "https://www.nsw.gov.au/housing-and-construction/renting-a-place-to-live",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: [
      "rental-agreement-share-house",
      "inspection-checklist",
      "share-house-rules",
      "housing-guide",
      "weekly-budget-template",
    ],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a213",
    title: "家賃値上げを通知されたら｜州別の頻度・通知ルールと確認事項",
    slug: "rent-increase-rules",
    category: "housing",
    hub: "housing",
    priority: "P1",
    searchIntent: "家賃値上げの頻度・通知ルールと対応方法",
    description:
      "オーストラリアで家賃値上げ（rent increase）を通知されたときに確認すべきこと。値上げの頻度（12か月に1回など）や書面通知のルールが州で異なる点、正規の手続きか確認する方法、シェアハウスの又貸しでの注意点を解説します。",
    content: [
      "結論から言うと、家賃の値上げには州ごとに『頻度』と『事前通知』のルールがあり、まず『正規の手続きに沿っているか』を州の当局で確認するのが最初の一歩です。多くの州では、値上げは前回から一定期間（例: 12か月）を空ける必要があり、値上げ前に書面で事前通知することが義務づけられています。ルールに沿わない値上げには従う義務がない場合があるため、通知を受けたら焦って支払いを増やす前に確認しましょう。",
      "州ごとの例として、NSWでは2024年10月31日以降、同じ賃貸契約での家賃値上げは12か月に1回までに制限されています。QLDでも一般賃貸の値上げは前回から最低12か月を空ける必要があり、書面での事前通知（一般賃貸は2か月前）が求められます。VICでは2025年11月25日から新しい賃貸法が施行され、値上げの頻度や通知に関するルールが定められています。具体的な通知期間や頻度は州で異なるため、必ず自分の州の公式ページで最新情報を確認してください。",
      "値上げ通知を受けたら、①書面で正式に通知されているか、②前回の値上げから規定の期間が空いているか、③通知期間（値上げ実施までの猶予）が守られているか、を確認します。これらが満たされていない場合や、金額が周辺相場から大きく外れている場合は、州の賃貸当局（NSW Fair Trading / RTA QLD / Consumer Affairs Victoria）に相談できます。納得できない値上げは、州のトリブナル（NCAT / QCAT / VCAT）で審査を求められる場合もあります。",
      "注意点として、シェアハウスの又貸し（sub-let）や間借り（lodger）では、これらの州の値上げ保護が適用されないことが多いです。その場合は借主（head tenant）との個別の合意が優先されるため、入居時に『値上げの可能性と条件』を確認し、書面で残しておくとトラブルを避けられます。値上げに納得できないときは、感情的にならず記録を示して交渉し、それでも折り合わなければ退去（適切な通知を出して転居）も選択肢になります。",
    ],
    keyFacts: [
      { label: "まず確認すること", value: "正規の手続き（頻度・書面通知）に沿っているか" },
      { label: "頻度の例(NSW)", value: "2024-10-31以降、12か月に1回まで" },
      { label: "頻度の例(QLD)", value: "前回から最低12か月・一般賃貸は2か月前通知" },
      { label: "VIC", value: "2025-11-25から新しい賃貸法（州で最新確認）" },
      { label: "相談先", value: "州の賃貸当局・トリブナル（NCAT/QCAT/VCAT）" },
    ],
    steps: [
      { title: "通知の形式を確認", description: "書面で正式に通知されているか、口頭だけでないかを確認します。" },
      { title: "頻度と間隔を確認", description: "前回の値上げから規定の期間が空いているかを州のルールで確認します。" },
      { title: "通知期間を確認", description: "値上げ実施までの猶予（通知期間）が守られているか確認します。" },
      { title: "相談・交渉", description: "疑問があれば州の当局に相談し、必要なら交渉・トリブナルを検討します。" },
    ],
    tips: [
      "値上げ通知は必ず書面（メール・レター）で受け取り、日付とともに保管しましょう。",
      "周辺の相場をFlatmatesなどで調べ、値上げが妥当かを客観的に判断できるようにします。",
      "又貸し・間借りは州の保護外のことが多いので、入居時に値上げ条件を確認しておきましょう。",
    ],
    warnings: [
      "ルールに沿わない頻度・通知の値上げに、確認せず従う必要はありません。まず州の当局で確認を。",
      "口頭だけの値上げ要求には、書面での正式通知を求めましょう。記録がないと後で不利になります。",
    ],
    faqs: [
      {
        question: "値上げを拒否できますか？",
        answer:
          "正規の手続き（頻度・書面通知・通知期間）に沿った値上げは原則有効ですが、頻度制限に反する場合や手続き不備がある場合は従う義務がないことがあります。まず州の賃貸当局に相談し、必要ならトリブナルで審査を求められます。",
      },
      {
        question: "シェアハウスでも値上げルールは守られますか？",
        answer:
          "自分が正式な賃貸契約の当事者なら州のルールが適用されます。ただし又貸し・間借りでは保護外になることが多く、借主との合意次第です。入居時に値上げの条件を確認し書面で残しておきましょう。",
      },
    ],
    phrases: [
      { en: "Could you put the rent increase in writing?", ja: "家賃の値上げを書面でいただけますか？" },
      { en: "When was the rent last increased?", ja: "前回の家賃値上げはいつでしたか？" },
      { en: "How much notice is required before the increase?", ja: "値上げまでにどれくらいの通知期間が必要ですか？" },
    ],
    sources: [
      { label: "NSW Government｜Renting a place to live", url: "https://www.nsw.gov.au/housing-and-construction/renting-a-place-to-live" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "NSW Government｜Renting a place to live（家賃値上げ 12か月に1回）",
        url: "https://www.nsw.gov.au/housing-and-construction/renting-a-place-to-live",
        accessedAt: "2026-07-19",
      },
      {
        label: "Residential Tenancies Authority (QLD)｜Rent increases",
        url: "https://www.rta.qld.gov.au/",
        accessedAt: "2026-07-19",
      },
      {
        label: "Consumer Affairs Victoria｜Renting（家賃・値上げ）",
        url: "https://www.consumer.vic.gov.au/housing/renting",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: [
      "rental-agreement-share-house",
      "share-house-conflict",
      "bond-rules-overview",
      "ending-tenancy-notice",
      "housing-guide",
    ],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a214",
    title: "Bondが返ってこないときの対応手順｜証拠・申請・州機関・紛争解決",
    slug: "bond-refund-dispute",
    category: "housing",
    hub: "housing",
    priority: "P0",
    searchIntent: "Bondが返金されないときの対処・紛争解決の手順",
    description:
      "退去後にBond（敷金）が返ってこない、または不当に差し引かれたときの対応手順。証拠の集め方、州の預託機関を通じた返金申請、話し合いで解決しない場合のトリブナル（NCAT/QCAT/VCAT）での紛争解決までを解説します。",
    content: [
      "結論から言うと、Bond（敷金）が返ってこない・不当に差し引かれたときは、①証拠を集める → ②相手（家主/借主）と記録の残る形で交渉する → ③解決しなければ州の預託機関やトリブナルに申し立てる、という順で進めます。正式な賃貸でBondが州の機関（NSW Rental Bonds Online / VIC RTBA / QLD RTA）に預託されていれば、返金は公的な手続きで請求でき、家主が勝手に全額を差し引くことはできません。",
      "まず集めるべき証拠は、①入居時のCondition Reportと写真、②退去時の部屋の写真、③家賃・Bondの支払い記録、④契約や条件のやり取り（メッセージ）です。特に入居時と退去時の写真を並べれば、『元からあった傷』か『通常使用による経年劣化（fair wear and tear）』かを示せます。経年劣化はあなたの負担にならないため、掃除の不足や実際の破損以外を理由に差し引かれた場合は反論できます。",
      "正式な賃貸の場合、返金は州の預託機関を通じて申請します。双方が返金額に合意すれば速やかに返金され、合意できなければ州のトリブナル（NSW＝NCAT / QLD＝QCAT / VIC＝VCAT）に判断を求めます。トリブナルは低コストで利用でき、証拠に基づいて公平に裁定します。手続きの詳細と申請先は、各州の賃貸当局の公式ページで確認してください。",
      "難しいのはシェアハウスの又貸し・間借りで、Bondが個人間でやり取りされ州の預託制度が使われていないケースです。この場合は州のトリブナルの賃貸手続きが使えないことが多く、少額訴訟（small claims）など別の手段になることがあります。だからこそ入居時に、Bondの金額・返金条件を書面で残し、支払いを銀行振込で行い、部屋の状態を写真で記録しておくことが最大の予防策になります。まずは冷静に、証拠を示して返金を求める交渉から始めましょう。",
    ],
    keyFacts: [
      { label: "対応の順序", value: "証拠収集 → 交渉 → 州機関/トリブナルへ申立て" },
      { label: "必要な証拠", value: "入居/退去時の写真・Condition Report・支払い記録・やり取り" },
      { label: "負担しない範囲", value: "通常使用による経年劣化（fair wear and tear）" },
      { label: "紛争解決先", value: "NSW=NCAT / QLD=QCAT / VIC=VCAT" },
      { label: "又貸し/間借り", value: "州の預託制度外だと少額訴訟等になる場合あり" },
    ],
    steps: [
      { title: "証拠を集める", description: "入居・退去時の写真、Condition Report、支払い記録、やり取りを整理します。" },
      { title: "書面で返金を求める", description: "差し引きの根拠を尋ね、経年劣化は負担外である旨を記録の残る形で伝えます。" },
      { title: "州機関に申請", description: "正式な賃貸なら州の預託機関を通じて返金を申請します。" },
      { title: "トリブナルへ", description: "合意できなければNCAT/QCAT/VCATに申し立て、証拠に基づく裁定を求めます。" },
    ],
    tips: [
      "退去前に部屋を掃除し、退去時の状態を写真・動画で残すと差し引きの口実を減らせます。",
      "交渉は感情的にならず、写真と契約条件を根拠に淡々と進めるのが効果的です。",
      "州のトリブナルは低コストで利用でき、英語のサポート情報も公式サイトにあります。",
    ],
    warnings: [
      "Bondが州の機関に預託されず個人口座に払われていた場合、公的な返金手続きが使えないことがあります。入居時の予防が重要です。",
      "退去時の掃除不足や無断の破損は正当な差し引き理由になります。原状回復してから退去しましょう。",
    ],
    faqs: [
      {
        question: "『掃除が不十分』を理由に差し引かれました。妥当ですか？",
        answer:
          "実際に汚れが残っていれば清掃費の差し引きは起こり得ますが、通常使用による経年劣化は負担外です。退去時に自分で撮った写真があれば、不当な差し引きに反論できます。",
      },
      {
        question: "又貸しでBondが返りません。どうすれば？",
        answer:
          "まず証拠を示して書面で返金を求めます。州の預託制度が使われていない場合、州のトリブナルの賃貸手続きが使えないことがあり、少額訴訟など別の手段になることがあります。州の消費者相談窓口に相談しましょう。",
      },
    ],
    phrases: [
      { en: "Could you explain the reason for the deductions from my bond?", ja: "Bondからの差し引きの理由を説明してもらえますか？" },
      { en: "This looks like fair wear and tear, not damage.", ja: "これは破損ではなく通常使用による経年劣化だと思います。" },
      { en: "I'd like to claim my bond refund through the bond authority.", ja: "預託機関を通じてBondの返金を請求したいです。" },
    ],
    sources: [
      { label: "NSW Government｜Renting a place to live", url: "https://www.nsw.gov.au/housing-and-construction/renting-a-place-to-live" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "NSW Government｜Renting a place to live（Bondの返金・NCAT）",
        url: "https://www.nsw.gov.au/housing-and-construction/renting-a-place-to-live",
        accessedAt: "2026-07-19",
      },
      {
        label: "Residential Tenancies Authority (QLD)｜Bonds・紛争解決",
        url: "https://www.rta.qld.gov.au/",
        accessedAt: "2026-07-19",
      },
      {
        label: "Consumer Affairs Victoria｜Renting（Bond返金・VCAT）",
        url: "https://www.consumer.vic.gov.au/housing/renting",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: [
      "bond-rules-overview",
      "condition-report-guide",
      "share-house-conflict",
      "ending-tenancy-notice",
      "housing-guide",
    ],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a215",
    title: "退去Noticeの出し方と英語メッセージ｜契約期間・鍵返却・後任探し",
    slug: "ending-tenancy-notice",
    category: "housing",
    hub: "housing",
    priority: "P0",
    searchIntent: "退去通知（notice）の出し方と英語テンプレート",
    description:
      "シェアハウスを退去するときのNotice（退去通知）の出し方を解説。通知期間の確認、書面で残す方法、鍵の返却とBond返金の段取り、そのまま使える英語メッセージのテンプレートをまとめました。",
    content: [
      "結論から言うと、シェアハウスを円満に退去してBond（敷金）を取り戻すには、①契約で決まった通知期間（notice）を守り、②退去の意思を書面（メッセージ）で残し、③鍵の返却とBond返金の段取りを事前に確認する、の3点が重要です。多くのシェアハウスでは退去の何週間前（例: 2週間・4週間）に伝える必要があり、通知が遅れると余分な家賃を請求されることがあります。まず自分の契約の通知期間を確認しましょう。",
      "退去通知は口頭だけでなく、必ずメッセージやメールなど記録に残る形で送ります。伝える内容は、①退去する意思、②退去予定日、③鍵の返却方法とBond返金の確認、の3点です。以下のテンプレートをコピーして日付を入れれば使えます。『Hi [Name], I'm writing to give notice that I'll be moving out of the room on [date], in line with our [number]-week notice. Please let me know how you'd like the keys returned and how the bond refund will be handled. Thank you for having me!』（[名前]さん、[数]週間前の通知として、[日付]に退去することをお知らせします。鍵の返却方法とBondの返金について教えてください。お世話になりました！）",
      "退去日までにやることは、①部屋を入居時の状態に戻す（掃除・私物の撤去）、②退去時の部屋の状態を写真・動画で記録する、③鍵を返却し、返却したことを記録に残す、④Bond返金の金額とタイミングを確認する、です。入居時のCondition Reportや写真と見比べられるよう、退去時も同じ箇所を撮影しておくと、Bond精算でもめにくくなります。最終の家賃・光熱費の精算も忘れずに確認しましょう。",
      "注意点として、最低滞在期間（minimum stay）の途中で出る場合や、契約で後任（replacement tenant）を自分で探す条件になっている場合は、余分な家賃負担が発生することがあります。早めに家主・借主と相談し、必要なら後任探しに協力するとスムーズです。感謝を伝えて円満に退去すれば、Bondの返金や次の家探しのリファレンスにもプラスになります。",
    ],
    keyFacts: [
      { label: "退去の3原則", value: "通知期間を守る・書面で残す・鍵/Bondの段取り確認" },
      { label: "通知期間", value: "契約で決まる（例: 2週間・4週間）。遅れると家賃負担" },
      { label: "伝える内容", value: "退去の意思・退去予定日・鍵返却/Bond返金の確認" },
      { label: "退去前にやること", value: "掃除・私物撤去・退去時の写真・鍵返却の記録" },
      { label: "途中退去の注意", value: "最低滞在期間内は後任探し・違約金が発生することも" },
    ],
    steps: [
      { title: "通知期間を確認", description: "契約で何週間前に伝える必要があるかを確認します。" },
      { title: "書面で通知", description: "退去の意思・予定日をメッセージで送り、記録を残します。" },
      { title: "部屋を原状回復", description: "掃除・私物撤去を行い、退去時の状態を写真・動画で残します。" },
      { title: "鍵返却とBond精算", description: "鍵を返却して記録に残し、Bond返金の金額とタイミングを確認します。" },
    ],
    tips: [
      "通知は早めに。ぎりぎりだと通知期間を満たせず余分な家賃がかかることがあります。",
      "鍵の返却は写真や受領メッセージで記録し、『返した／返していない』のトラブルを防ぎましょう。",
      "円満退去は次の家のリファレンスにもなります。感謝を一言添えると好印象です。",
    ],
    warnings: [
      "口頭だけの退去通知は『聞いていない』と言われることがあります。必ず書面で残してください。",
      "最低滞在期間の途中退去は、後任が決まるまでの家賃負担や違約金が発生することがあります。",
    ],
    faqs: [
      {
        question: "通知期間はどれくらい前に伝えればいいですか？",
        answer:
          "契約によって異なり、シェアハウスでは2週間・4週間前が一般的です。まず自分の契約や入居時の合意を確認し、書面で通知しましょう。正式な賃貸契約では州のルールで通知期間が定められている場合があります。",
      },
      {
        question: "後任を自分で探さないといけませんか？",
        answer:
          "契約や合意で『後任が決まるまで家賃を負担』『自分で後任を探す』と決まっている場合があります。最低滞在期間内の退去では特に起こりやすいので、早めに家主・借主と相談し、必要なら後任探しに協力しましょう。",
      },
    ],
    phrases: [
      { en: "I'm giving notice that I'll move out on [date].", ja: "[日付]に退去することをお知らせします。" },
      { en: "How would you like the keys returned?", ja: "鍵はどのように返却すればよいですか？" },
      { en: "How and when will the bond be refunded?", ja: "Bondはどのように、いつ返金されますか？" },
    ],
    sources: [
      { label: "Consumer Affairs Victoria｜Renting", url: "https://www.consumer.vic.gov.au/housing/renting" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Consumer Affairs Victoria｜Renting（退去・通知）",
        url: "https://www.consumer.vic.gov.au/housing/renting",
        accessedAt: "2026-07-19",
      },
      {
        label: "NSW Government｜Renting a place to live（退去通知・鍵返却）",
        url: "https://www.nsw.gov.au/housing-and-construction/renting-a-place-to-live",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: [
      "find-replacement-tenant",
      "bond-refund-dispute",
      "condition-report-guide",
      "rental-agreement-share-house",
      "housing-guide",
    ],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a216",
    title: "後任入居者を探す方法と名義変更の注意｜無断転貸を避ける",
    slug: "find-replacement-tenant",
    category: "housing",
    hub: "housing",
    priority: "P2",
    searchIntent: "退去時に後任入居者を探す方法・名義変更の注意",
    description:
      "シェアハウスを途中退去するときに後任入居者（replacement tenant）を探す方法と、名義変更・Bondの引き継ぎの注意点を解説。無断転貸（家主の許可なしの又貸し）を避け、Bond返金を確実にするための手順をまとめました。",
    content: [
      "結論から言うと、最低滞在期間の途中で退去したり、後任が決まるまで家賃を負担する契約だったりする場合は、後任入居者（replacement tenant）を自分で探すと余分な家賃負担を減らせます。ただし重要なのは、必ず家主・借主（head tenant）の許可を得てから進めることです。許可なく勝手に別の人を住まわせる『無断転貸（unauthorised sub-let）』は契約違反になり、Bondを失う原因になります。",
      "後任の探し方は、通常の家探しと同じくFlatmates.com.au、Facebookの賃貸グループ、Gumtree、日本人向け掲示板に募集を出します。募集文には、部屋の条件（家賃・bills・Bond・入居可能日）と同居人の情報を正直に書き、内見を受け付けます。後任候補が見つかったら、家主・借主に紹介し、承認を得てから入居手続きを進めてもらいます。あなたが勝手に契約するのではなく、あくまで家主・借主が新しい入居者を受け入れる形にするのが安全です。",
      "名義変更とBondの引き継ぎには注意が必要です。あなたのBondを新しい入居者から直接受け取って相殺する方法もありますが、正式な賃貸契約の当事者になっている場合は、州の預託機関でBondの名義変更（bond transfer）の手続きが必要になることがあります。個人間でBondを受け渡す場合は、金額と受け渡しを書面で残し、銀行振込で記録を残しましょう。退去時のCondition Reportと写真も引き継ぎの証拠として重要です。",
      "よくある失敗は、①家主の許可を得ずに後任を入れてしまう、②Bondの引き継ぎを口約束で済ませて後でもめる、③後任の入居日と自分の退去日がずれて二重に家賃を払う、の3つです。早めに家主・借主と段取りを相談し、入居日・家賃の精算・Bondの引き継ぎを数字で合意しておけば、余分な出費とトラブルを避けられます。円満に引き継げば、あなたのBondもスムーズに返ってきます。",
    ],
    keyFacts: [
      { label: "まず必要なこと", value: "家主・借主の許可を得てから後任を探す" },
      { label: "探す場所", value: "Flatmates・Facebook・Gumtree・日本人掲示板" },
      { label: "無断転貸のリスク", value: "契約違反となりBondを失う原因になる" },
      { label: "Bondの引き継ぎ", value: "名義変更の手続き or 書面＋銀行振込で記録" },
      { label: "よくある失敗", value: "無許可・口約束・入居日のずれによる二重家賃" },
    ],
    steps: [
      { title: "家主・借主に相談", description: "後任を探してよいか、条件（入居日・家賃）を確認し許可を得ます。" },
      { title: "募集を出す", description: "家賃・bills・Bond・入居可能日を明記して各サービスに募集します。" },
      { title: "後任を紹介・承認", description: "候補を家主・借主に紹介し、承認を得てから入居手続きを進めてもらいます。" },
      { title: "Bondと家賃を精算", description: "Bondの引き継ぎと家賃の精算を書面で合意し、記録を残します。" },
    ],
    tips: [
      "募集文は正直に。同居人・ルール・費用を明確にすると、入居後のトラブルが減ります。",
      "自分の退去日と後任の入居日を合わせると、二重家賃や空室期間の負担を避けられます。",
      "Bondの引き継ぎは必ず書面と銀行振込で。口約束は後日のもめ事の原因です。",
    ],
    warnings: [
      "家主・借主の許可なく後任を住まわせる無断転貸は契約違反です。Bondを失うリスクがあります。",
      "Bondの受け渡しを記録なしで行うと、返金や引き継ぎでトラブルになりやすいです。",
    ],
    faqs: [
      {
        question: "後任を探せば途中退去のペナルティはなくなりますか？",
        answer:
          "多くの場合、後任が決まって家主・借主が受け入れれば、後任の入居日以降の家賃負担はなくなります。ただし条件は契約や合意によるため、事前に『後任が決まったら自分の家賃負担は終わるか』を確認しておきましょう。",
      },
      {
        question: "Bondは後任から直接受け取っていいですか？",
        answer:
          "個人間で受け渡す方法もありますが、正式な賃貸契約では州の預託機関で名義変更が必要な場合があります。いずれの場合も金額と受け渡しを書面で残し、銀行振込で記録を残すのが安全です。",
      },
    ],
    phrases: [
      { en: "May I look for a replacement tenant for my room?", ja: "自分の部屋の後任入居者を探してもいいですか？" },
      { en: "Would you approve this person to move in after me?", ja: "この人を私の後任として入居させてもいいですか？" },
      { en: "How should we handle the bond transfer?", ja: "Bondの引き継ぎはどうすればいいですか？" },
    ],
    sources: [
      { label: "Consumer Affairs Victoria｜Renting", url: "https://www.consumer.vic.gov.au/housing/renting" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Consumer Affairs Victoria｜Renting（又貸し・名義変更）",
        url: "https://www.consumer.vic.gov.au/housing/renting",
        accessedAt: "2026-07-19",
      },
      {
        label: "NSW Government｜Renting a place to live（sub-letting）",
        url: "https://www.nsw.gov.au/housing-and-construction/renting-a-place-to-live",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: [
      "ending-tenancy-notice",
      "rental-agreement-share-house",
      "bond-rules-overview",
      "housing-message-templates",
      "housing-guide",
    ],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a217",
    title: "シェアハウスのルール｜掃除・騒音・ゲスト・共有物のトラブル予防",
    slug: "share-house-rules",
    category: "housing",
    hub: "housing",
    priority: "P1",
    searchIntent: "シェアハウスの生活ルール・トラブル予防の合意事項",
    description:
      "シェアハウスで気持ちよく暮らすためのルール（house rules）をまとめました。掃除当番・騒音・ゲストの宿泊・共有物・キッチンや冷蔵庫の使い方など、入居時に確認・合意しておくべき事項とトラブルを防ぐコツを解説します。",
    content: [
      "結論から言うと、シェアハウスのトラブルの大半は『掃除・騒音・ゲスト・共有物』の4つで起きるため、入居時にこれらのハウスルール（house rules）を確認し、あいまいな点は合意しておくことが快適に暮らす鍵です。国籍も生活リズムも違う人が同居するため、『当たり前』が人によって違います。最初にルールをすり合わせておけば、後の気まずさや衝突を大きく減らせます。",
      "確認・合意しておきたい主なルールは次の通りです。①掃除：共用部（キッチン・バス・トイレ・リビング）の掃除当番や頻度。②騒音：夜間の音・音楽・通話の時間帯（夜勤や早朝出勤の人への配慮）。③ゲスト：友人・恋人の訪問や宿泊の可否と頻度。④共有物：冷蔵庫のスペース、調味料・食材の共有/個人管理、食器・調理器具の扱い。⑤光熱費・消耗品：トイレットペーパーや洗剤などの共有品を誰が買うか。これらを入居前に聞いておくと、入居後のギャップが減ります。",
      "トラブルを防ぐコツは、①ルールを口約束にせず、住人の共有チャットやメモに書いておく、②自分のスペースと相手のスペースの境界を尊重する、③使ったらすぐ片づける・借りたら返す、④気になることは溜め込まず早めに穏やかに伝える、の4点です。特にキッチンと冷蔵庫は摩擦が起きやすいので、自分の食材にマークを付ける・共用の油や調味料のルールを決めるなど、小さな配慮が効きます。",
      "それでも合わないと感じたら、無理に我慢し続けるより、通知期間を守って別のシェアハウスに移るのも健全な選択です。ゲストの宿泊を勝手に増やす、共有品を使うだけで補充しない、深夜に騒ぐ、といった行為は関係を壊しやすいので自分も避けましょう。お互いを尊重し、ルールを明確にしておくことが、ワーホリのシェア生活を快適にする最大のコツです。",
    ],
    keyFacts: [
      { label: "トラブルの4大原因", value: "掃除・騒音・ゲスト・共有物" },
      { label: "掃除", value: "共用部の当番・頻度を決める" },
      { label: "騒音", value: "夜間の音・通話の時間帯（夜勤者への配慮）" },
      { label: "ゲスト", value: "訪問・宿泊の可否と頻度を確認" },
      { label: "共有物", value: "冷蔵庫スペース・調味料・消耗品の管理を明確化" },
    ],
    steps: [
      { title: "入居前にルールを確認", description: "掃除・騒音・ゲスト・共有物の扱いを内見時に聞きます。" },
      { title: "合意を記録", description: "住人の共有チャットやメモにルールを書いておきます。" },
      { title: "境界を尊重", description: "共有部は使ったら片づけ、他人のスペース・食材に触れないようにします。" },
      { title: "早めに穏やかに伝える", description: "気になることは溜め込まず、責めずに具体的に相談します。" },
    ],
    tips: [
      "自分の食材にマークを付ける・共用の調味料のルールを決めると冷蔵庫のもめ事を防げます。",
      "消耗品（トイレットペーパー・洗剤）を誰が買うかを最初に決めておきましょう。",
      "夜勤・早朝勤務の人がいる家では、静かにする時間帯を共有しておくと親切です。",
    ],
    warnings: [
      "ゲストの無断宿泊や共有品の使いっぱなしは関係を壊しやすいです。自分も相手も避けましょう。",
      "ルールを口約束だけにすると『言った・言わない』でもめます。書き残しておくのが無難です。",
    ],
    faqs: [
      {
        question: "ルールが合わないと感じたらどうすれば？",
        answer:
          "まずは穏やかに相談し、改善が難しければ通知期間を守って別のシェアハウスに移るのも健全な選択です。我慢し続けてストレスを溜めるより、早めに環境を変える方がワーホリ生活を楽しめます。",
      },
      {
        question: "共有の食材や調味料はどう扱うのが普通ですか？",
        answer:
          "家によって『完全に個人管理』『油や塩など基本の調味料だけ共有』などさまざまです。入居時に確認し、共有するものと個人管理のものを明確にしておくと、冷蔵庫まわりの摩擦を防げます。",
      },
    ],
    phrases: [
      { en: "Is there a cleaning roster for shared areas?", ja: "共用部の掃除当番はありますか？" },
      { en: "What are the rules about guests staying over?", ja: "ゲストの宿泊についてのルールはありますか？" },
      { en: "Which items in the fridge are shared or personal?", ja: "冷蔵庫のどれが共有で、どれが個人のものですか？" },
    ],
    sources: [
      { label: "Consumer Affairs Victoria｜Renting", url: "https://www.consumer.vic.gov.au/housing/renting" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Consumer Affairs Victoria｜Renting（シェア居住のルール）",
        url: "https://www.consumer.vic.gov.au/housing/renting",
        accessedAt: "2026-07-19",
      },
      {
        label: "NSW Government｜Renting a place to live（共同居住の基本）",
        url: "https://www.nsw.gov.au/housing-and-construction/renting-a-place-to-live",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: [
      "share-house-conflict",
      "rental-agreement-share-house",
      "rent-and-bills",
      "inspection-checklist",
      "housing-guide",
    ],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a218",
    title: "シェアメイト・オーナーとのトラブル対処｜記録・冷静な連絡・相談窓口",
    slug: "share-house-conflict",
    category: "housing",
    hub: "housing",
    priority: "P1",
    searchIntent: "シェアハウスの人間関係・オーナーとのトラブル解決",
    description:
      "シェアハウスでのシェアメイトやオーナーとのトラブル（騒音・掃除・お金・嫌がらせ）への対処法。記録の残し方、冷静な伝え方、州の賃貸当局やトリブナルなどの相談窓口、身の危険を感じたときの連絡先を解説します。",
    content: [
      "結論から言うと、シェアハウスのトラブルは『①記録を残す → ②冷静に、具体的に伝える → ③解決しなければ相談窓口や退去を検討する』の順で対処します。感情的に言い返すより、事実と記録に基づいて対応する方が解決に近づきます。まずは何が起きているか（日時・内容・金銭）をメモや写真、メッセージで残しておきましょう。この記録が、後で交渉や公的機関への相談の土台になります。",
      "トラブルの種類別の対処です。①掃除・騒音・生活習慣：まず本人に穏やかに、具体的に伝えます（『責める』より『お願い』の形が効果的）。②お金（家賃・光熱費・Bond）：支払い記録や合意のメッセージを示し、書面で解決を求めます。③オーナー/借主とのトラブル（Bondを返さない、勝手に部屋に入る等）：正式な賃貸なら州の賃貸当局やトリブナル（NSW＝NCAT / QLD＝QCAT / VIC＝VCAT）に相談できます。④嫌がらせ・差別・身の危険：安全を最優先し、必要なら警察に連絡します。",
      "相談窓口は状況で使い分けます。金銭・契約・Bondなど賃貸に関するトラブルは、州の賃貸当局（NSW Fair Trading / RTA QLD / Consumer Affairs Victoria）に相談し、解決しなければトリブナルで裁定を求めます。差別やハラスメントに関する相談窓口も各州にあります。緊急で身の危険があるとき（暴力・脅迫など）は、ためらわず000（警察・救急）に連絡してください。命や安全に関わることは我慢せず助けを求めましょう。",
      "又貸し・間借りでは州の賃貸法の保護が薄いことが多いため、トリブナルの賃貸手続きが使えない場合があります。それでも記録があれば少額訴訟や消費者相談で対応できることがあります。最終的に環境が改善しない、または安全でないと感じたら、無理に留まらず退去（適切な通知を出して転居）することも大切な選択です。健康と安全を最優先にしてください。",
    ],
    keyFacts: [
      { label: "対処の順序", value: "記録を残す → 冷静に伝える → 相談窓口/退去を検討" },
      { label: "伝え方", value: "責めずに具体的に。『お願い』の形が効果的" },
      { label: "賃貸トラブルの相談", value: "州の賃貸当局・トリブナル（NCAT/QCAT/VCAT）" },
      { label: "身の危険", value: "暴力・脅迫は迷わず000（警察）へ" },
      { label: "最終手段", value: "改善しない・安全でないなら通知を出して退去" },
    ],
    steps: [
      { title: "記録を残す", description: "日時・内容・金銭のやり取りをメモ・写真・メッセージで保存します。" },
      { title: "冷静に伝える", description: "本人に具体的に、責めずにお願いの形で改善を求めます。" },
      { title: "相談窓口へ", description: "解決しなければ州の賃貸当局・トリブナル・相談窓口に相談します。" },
      { title: "安全を優先", description: "身の危険があれば000へ。改善しなければ退去も検討します。" },
    ],
    tips: [
      "感情的なやり取りもスクリーンショットで残しておくと、後で状況を説明する証拠になります。",
      "金銭トラブルは口頭でなく書面で。支払い記録（銀行明細）は強力な証拠です。",
      "一人で抱え込まず、州の相談窓口や信頼できる人に早めに相談しましょう。",
    ],
    warnings: [
      "暴力・脅迫・ストーカー行為など身の危険を感じたら、我慢せず000（警察）に連絡してください。",
      "又貸し・間借りは州の賃貸法の保護外のことが多く、トリブナルの手続きが使えない場合があります。",
    ],
    faqs: [
      {
        question: "オーナーが勝手に部屋に入ってきます。違法ですか？",
        answer:
          "正式な賃貸では、家主が入室するには事前通知など一定のルールがあり、無断の立ち入りは問題になり得ます。州の賃貸当局に相談してください。間借り（lodger）では扱いが異なる場合があるため、まず記録を残し、安全に不安があれば警察に相談を。",
      },
      {
        question: "トラブルで退去したい。Bondは戻りますか？",
        answer:
          "適切な通知を出し、部屋を原状回復して退去すれば、Bondは原則返金されます。トラブルでもめている場合は、入居時・退去時の写真や支払い記録を揃え、返らないときは州の当局・トリブナルに相談しましょう。",
      },
    ],
    phrases: [
      { en: "Could we talk about the noise at night? It's affecting my sleep.", ja: "夜の音について話せますか？ 睡眠に影響しています。" },
      { en: "I'd like to sort this out calmly. Here's what happened.", ja: "冷静に解決したいです。状況はこうでした。" },
      { en: "I don't feel safe. I need help.", ja: "身の危険を感じます。助けが必要です。" },
    ],
    sources: [
      { label: "NSW Government｜Renting a place to live", url: "https://www.nsw.gov.au/housing-and-construction/renting-a-place-to-live" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "NSW Government｜Renting a place to live（賃貸トラブル・NCAT）",
        url: "https://www.nsw.gov.au/housing-and-construction/renting-a-place-to-live",
        accessedAt: "2026-07-19",
      },
      {
        label: "Consumer Affairs Victoria｜Renting（紛争・VCAT）",
        url: "https://www.consumer.vic.gov.au/housing/renting",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: [
      "share-house-rules",
      "bond-refund-dispute",
      "rent-increase-rules",
      "safety-emergency",
      "housing-guide",
    ],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a219",
    title: "長期の家が決まるまでの短期滞在先比較｜ホステル・Airbnb・ホテル・サブレット",
    slug: "short-term-accommodation",
    category: "housing",
    hub: "housing",
    priority: "P1",
    searchIntent: "到着後の短期滞在先（ホステル/Airbnb/ホテル/サブレット）比較",
    description:
      "オーストラリア到着後、長期のシェアハウスが決まるまでの短期滞在先を比較。バックパッカーホステル・Airbnb・ホテル・サブレット（短期又貸し）の費用・向き不向き・予約のコツと、内見して家を決めるまでの動き方を解説します。",
    content: [
      "結論から言うと、到着直後は『長期の家を焦って契約せず、まず短期滞在先に泊まって、落ち着いて内見してから決める』のが失敗しないコツです。短期滞在先の主な選択肢は、①バックパッカーホステル、②Airbnb、③ホテル、④サブレット（短期の又貸し）の4つ。費用と滞在のしやすさ、他のワーホリとの出会いやすさが異なるので、予算と目的で使い分けましょう。",
      "選択肢ごとの特徴です。①ホステル：最も安く、他のワーホリと情報交換しやすい。ドミトリー（相部屋）なら費用を抑えられ、長期割引がある宿も。荷物の安全（ロッカー）には注意。②Airbnb：一室〜一軒を借りられ、キッチン付きで自炊しやすい。1〜2週間単位だと割高になりがち。③ホテル：最も快適だが費用は高め。到着初日だけ利用する人が多い。④サブレット：誰かが不在の間に部屋を短期で借りる形。相場は物件次第だが、内見せず送金する詐欺に注意が必要です。",
      "使い分けの目安は、『到着初日はアクセスの良いホステルかホテル → 数日〜2週間ホステルやAirbnbに滞在しながら内見 → 良い長期物件が決まったら移動』という流れです。ホステルは他のワーホリから家探しやファーム求人の生きた情報が得られる利点もあります。荷物が多い・カップル・静かに過ごしたい場合はAirbnbや個室が向いています。",
      "予約と支払いのコツは、①最初の数泊だけ先に予約し、様子を見て延長する（長期を一括で払わない）、②サブレットやAirbnb以外の個人間取引では内見前に送金しない、③立地（駅・スーパー・治安）とレビューを必ず確認する、の3点です。短期滞在中に相場とエリアを把握し、内見を重ねてから長期の家を決めれば、家探し詐欺や『住んでみたら合わなかった』という失敗を避けられます。",
    ],
    keyFacts: [
      { label: "主な選択肢", value: "ホステル・Airbnb・ホテル・サブレット" },
      { label: "ホステル", value: "最安・情報交換しやすい・長期割引あり／荷物の安全に注意" },
      { label: "Airbnb", value: "キッチン付きで自炊向き／1-2週間だと割高" },
      { label: "ホテル", value: "最も快適だが高め／到着初日向き" },
      { label: "サブレット", value: "短期の又貸し／内見前送金の詐欺に注意" },
    ],
    steps: [
      { title: "初日の宿を確保", description: "アクセスの良いホステルかホテルを数泊だけ予約します。" },
      { title: "滞在しながら内見", description: "ホステル/Airbnbに滞在し、相場とエリアを把握しつつ内見します。" },
      { title: "延長は様子見で", description: "長期を一括で払わず、必要な分だけ延長します。" },
      { title: "長期物件へ移動", description: "内見で納得できる長期物件が決まったら移動します。" },
    ],
    tips: [
      "ホステルは他のワーホリから家探し・仕事の生きた情報が得られる貴重な場です。",
      "荷物が多い・カップル・静かに過ごしたいならAirbnbや個室が向いています。",
      "長期の家は焦らず、短期滞在中に複数内見してから決めると失敗しません。",
    ],
    warnings: [
      "サブレットや個人間の短期貸しでも、内見前の送金要求は詐欺の可能性が高いです。",
      "短期滞在を長期で一括前払いすると、合わなかったときに損をします。少しずつ延長を。",
    ],
    faqs: [
      {
        question: "到着後すぐ長期のシェアハウスを契約すべきですか？",
        answer:
          "おすすめしません。写真だけで決めると『住んでみたら合わなかった』となりがちです。まず短期滞在先に泊まり、相場とエリアを把握して複数内見してから長期を決めると失敗が減ります。",
      },
      {
        question: "いちばん安く済ませるには？",
        answer:
          "バックパッカーホステルのドミトリー（相部屋）が最も安く、長期割引がある宿もあります。自炊できるキッチン付きを選び、食費も抑えると節約になります。荷物はロッカーで管理しましょう。",
      },
    ],
    phrases: [
      { en: "Do you have a weekly rate or long-stay discount?", ja: "週料金や長期割引はありますか？" },
      { en: "Are lockers available for luggage?", ja: "荷物用のロッカーはありますか？" },
      { en: "Is there a kitchen I can use?", ja: "使えるキッチンはありますか？" },
    ],
    sources: [
      { label: "Scamwatch（ACCC）｜詐欺の種類・通報", url: "https://www.scamwatch.gov.au/" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Scamwatch（ACCC / National Anti-Scam Centre）｜宿泊・賃貸詐欺の注意",
        url: "https://www.scamwatch.gov.au/",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: [
      "hostel-guide",
      "homestay-guide",
      "housing-platforms-comparison",
      "rental-scam-examples",
      "housing-guide",
    ],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a220",
    title: "バックパッカーホステルの選び方｜安全・荷物・キッチン・長期割引",
    slug: "hostel-guide",
    category: "housing",
    hub: "housing",
    priority: "P2",
    searchIntent: "バックパッカーホステルの選び方・安全・長期割引",
    description:
      "ワーホリ到着直後に便利なバックパッカーホステルの選び方を解説。安全（ロッカー・立地）、荷物の管理、キッチン・洗濯設備、長期割引、仕事や家探しの情報収集まで、失敗しないホステル選びのポイントをまとめました。",
    content: [
      "結論から言うと、良いバックパッカーホステルを選ぶ基準は『①立地と治安、②荷物の安全（鍵付きロッカー）、③清潔さとレビュー、④キッチン・洗濯などの設備、⑤長期割引』の5点です。ホステルは最も安く泊まれるうえ、他のワーホリと情報交換できるため、到着直後の家探しや仕事探しの拠点として非常に便利です。予約サイトのレビュー（特に清潔さと安全性の評価）を必ず確認してから選びましょう。",
      "部屋のタイプは、ドミトリー（相部屋: 4〜12人など）と個室があります。ドミトリーは最も安く、人数が多いほど安くなる傾向ですが、その分プライバシーと荷物管理に注意が必要です。個室は割高ですが、荷物やカップルには安心です。長期滞在（1週間〜）だと割引（weekly rate）が効く宿が多いので、数泊試して良ければ延長する形が無難です。",
      "安全と荷物の管理はホステル選びで最重要です。①貴重品（パスポート・現金・PC）は必ず鍵付きロッカーへ（自分の南京錠を持参すると確実）、②ベッド周りに貴重品を放置しない、③夜間の出入りやセキュリティ（受付の有無・オートロック）を確認、④女性はwomen-onlyドミトリーがある宿も検討、が基本です。安いだけで治安の悪いエリアを選ぶと、盗難やトラブルのリスクが上がります。",
      "ホステルは情報収集の場としても優秀です。掲示板やSNSグループ、他の滞在者から、家探し（シェアハウスの空き）やファーム・ローカル求人の生きた情報が得られることがあります。一方で『仕事を紹介するから』と高額な手数料や前払いを求める話には注意（悪質な業者や詐欺の可能性）。キッチンで自炊すれば食費も抑えられます。まずは数泊泊まって様子を見て、長期割引を使いつつ次の家を探すのが賢い使い方です。",
    ],
    keyFacts: [
      { label: "選ぶ基準", value: "立地/治安・ロッカー・清潔さ/レビュー・設備・長期割引" },
      { label: "部屋タイプ", value: "ドミトリー(相部屋・最安)／個室(割高・安心)" },
      { label: "安全の基本", value: "貴重品は鍵付きロッカー・自分の南京錠を持参" },
      { label: "長期割引", value: "1週間〜のweekly rateで安くなる宿が多い" },
      { label: "情報収集", value: "家探し・仕事の情報が得やすい／手数料要求には注意" },
    ],
    steps: [
      { title: "レビューで絞る", description: "清潔さ・安全性・立地の評価を予約サイトで確認します。" },
      { title: "数泊だけ予約", description: "まず数泊試し、良ければ長期割引で延長します。" },
      { title: "貴重品を管理", description: "南京錠を持参し、パスポート・現金・PCをロッカーに保管します。" },
      { title: "情報を集める", description: "掲示板や他の滞在者から家探し・仕事の情報を集めます。" },
    ],
    tips: [
      "自分の南京錠（padlock）を1つ持っておくと、どのロッカーでも安心して使えます。",
      "キッチン付きの宿で自炊すると、食費を大きく節約できます。",
      "女性は women-only ドミトリーのある宿を選ぶと安心度が上がります。",
    ],
    warnings: [
      "ベッド周りに貴重品を放置しないでください。相部屋では盗難のリスクがあります。",
      "『仕事を紹介するから前払い』『手数料が必要』という勧誘は、悪質業者や詐欺の可能性があります。",
    ],
    faqs: [
      {
        question: "ホステルはどれくらい泊まるのが普通ですか？",
        answer:
          "到着後、家が決まるまでの数日〜2週間ほど利用する人が多いです。長期割引を使いながら、その間にシェアハウスを内見して決めるのが一般的な流れです。",
      },
      {
        question: "相部屋は危なくないですか？",
        answer:
          "多くのホステルは安全ですが、相部屋は不特定多数が出入りするため、貴重品は必ず鍵付きロッカーに。南京錠を持参し、パスポートや現金・PCをベッドに放置しなければ、リスクを大きく減らせます。",
      },
    ],
    phrases: [
      { en: "Do you have a weekly rate for long stays?", ja: "長期滞在向けの週料金はありますか？" },
      { en: "Are there lockers I can secure with my own padlock?", ja: "自分の南京錠で使えるロッカーはありますか？" },
      { en: "Is there a women-only dorm available?", ja: "女性専用ドミトリーはありますか？" },
    ],
    sources: [
      { label: "Scamwatch（ACCC）｜詐欺の種類・通報", url: "https://www.scamwatch.gov.au/" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Scamwatch（ACCC / National Anti-Scam Centre）｜求人・宿泊詐欺の注意",
        url: "https://www.scamwatch.gov.au/",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: [
      "short-term-accommodation",
      "homestay-guide",
      "housing-guide",
      "farm-accommodation-guide",
      "rental-scam-examples",
    ],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a221",
    title: "ホームステイのメリット・費用・ルール｜英語環境・食事・通学",
    slug: "homestay-guide",
    category: "housing",
    hub: "housing",
    priority: "P3",
    searchIntent: "ホームステイのメリット・費用・ルール",
    description:
      "オーストラリアのホームステイのメリットとデメリット、費用の目安、食事や門限などのルール、手配方法を解説。到着直後や語学学校期間に英語環境で生活したいワーホリ向けに、ホームステイの向き不向きをまとめました。",
    content: [
      "結論から言うと、ホームステイは『英語環境で生活しながら、食事や生活の基盤が整った状態で安心してスタートしたい人』に向いた滞在方法です。現地の家庭に滞在し、多くは食事付きで、生きた英語や文化に触れられるのが最大のメリット。一方で、シェアハウスより費用は高めで、家庭のルール（食事の時間・門限・ゲスト）に合わせる必要があるため、自由度は下がります。到着直後の数週間や語学学校の期間に利用する人が多いです。",
      "メリットは、①英語を日常的に使える環境、②食事が用意されることが多く生活が安定、③現地の生活習慣を学べる、④到着直後でも安心してスタートできる、の4点です。デメリットは、①費用がシェアハウスより高め、②家庭のルールに合わせる必要がある、③立地が郊外だと通学・通勤に時間がかかる、④相性が家庭によって大きく変わる、の4点。自由に生活したい人や費用を抑えたい人には、シェアハウスの方が向いています。",
      "費用は食事の有無（食事なし/朝夕食付き/3食付き）や地域、部屋タイプで変わるため、手配前に『週いくらで、何が含まれるか（食事・光熱費・洗濯）』を必ず確認しましょう。手配方法は、語学学校経由（入学時に斡旋してもらう）、ホームステイ手配会社、専用サイトなどがあります。学校経由は安心感がありますが、個人手配より割高なことも。契約前に滞在期間・最低週数・途中解約の条件も確認します。",
      "快適に過ごすコツは、①食事の時間・門限・シャワー・洗濯・ゲストなど家庭のルールを最初に確認する、②感謝と礼儀を大切にし、共用部をきれいに使う、③要望や困りごとは我慢せず丁寧に伝える、④相性が極端に合わない場合は手配元に相談して変更を検討する、です。ホームステイは『家族の一員として過ごす』意識でいると、英語も生活も充実しやすくなります。",
    ],
    keyFacts: [
      { label: "向いている人", value: "英語環境で安心してスタートしたい人・語学学校期間の人" },
      { label: "メリット", value: "英語漬け・食事付きが多い・生活が安定・現地文化を学べる" },
      { label: "デメリット", value: "費用高め・家庭のルールに従う・郊外だと通学に時間" },
      { label: "費用の確認", value: "週いくらで食事・光熱費・洗濯が含まれるか" },
      { label: "手配方法", value: "語学学校経由・手配会社・専用サイト" },
    ],
    steps: [
      { title: "条件を決める", description: "食事の有無・エリア・予算・滞在期間を決めます。" },
      { title: "手配元を選ぶ", description: "語学学校・手配会社・専用サイトから信頼できる手配元を選びます。" },
      { title: "含まれるものを確認", description: "週料金に食事・光熱費・洗濯が含まれるか、最低週数を確認します。" },
      { title: "ルールを確認", description: "食事時間・門限・ゲスト・シャワーなど家庭のルールを最初に確認します。" },
    ],
    tips: [
      "食事の好みやアレルギーは最初に伝えておくと、家庭も対応しやすくなります。",
      "英語を伸ばしたいなら、積極的に家族と会話する時間をつくりましょう。",
      "相性が極端に合わない場合は、我慢せず手配元に相談して変更を検討できます。",
    ],
    warnings: [
      "個人手配のホームステイでは、内見・実態確認ができないまま前払いを求める相手に注意しましょう。",
      "『週料金に何が含まれるか』を曖昧にしたまま契約すると、食事や光熱費で想定外の出費が出ます。",
    ],
    faqs: [
      {
        question: "ホームステイとシェアハウスはどちらがいい？",
        answer:
          "英語環境や食事付きの安定を重視するならホームステイ、費用を抑え自由に暮らしたいならシェアハウスが向いています。到着直後や語学学校の期間だけホームステイにして、慣れたらシェアハウスに移る人も多いです。",
      },
      {
        question: "費用はどのくらいかかりますか？",
        answer:
          "食事の有無・地域・部屋タイプで大きく変わります。手配前に『週いくらで、食事・光熱費・洗濯が含まれるか』を必ず確認しましょう。一般にシェアハウスより高めになります。",
      },
    ],
    phrases: [
      { en: "What is included in the weekly homestay fee?", ja: "ホームステイの週料金には何が含まれますか？" },
      { en: "Are meals included, and can you cater for allergies?", ja: "食事は含まれますか、アレルギーに対応できますか？" },
      { en: "What are the house rules about curfew and guests?", ja: "門限やゲストについての家のルールはありますか？" },
    ],
    sources: [
      { label: "Scamwatch（ACCC）｜詐欺の種類・通報", url: "https://www.scamwatch.gov.au/" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Scamwatch（ACCC / National Anti-Scam Centre）｜宿泊手配の前払い詐欺に注意",
        url: "https://www.scamwatch.gov.au/",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: [
      "short-term-accommodation",
      "hostel-guide",
      "housing-guide",
      "rental-scam-examples",
    ],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a222",
    title: "カップル部屋の探し方｜家賃・応募文・内見の注意点",
    slug: "couple-room-housing",
    category: "housing",
    hub: "housing",
    priority: "P1",
    searchIntent: "カップルでシェアハウスの部屋を探す方法・家賃・応募",
    description:
      "カップルでオーストラリアのシェアハウス（couple room）を探す方法を解説。二人入居可の部屋の探し方、家賃の考え方（一人あたりか部屋あたりか）、応募メッセージのコツ、内見で確認すべき点をまとめました。",
    content: [
      "結論から言うと、カップルで部屋を探すコツは『couple room / couple OK の物件を狙い、家賃が“部屋あたり”か“一人あたり”かを必ず確認する』ことです。カップル可の部屋は数が限られ、一人部屋より競争になりやすいため、条件を明確にして早めに複数へ応募するのが有効です。ダブルベッドが入る広さか、二人で使える収納があるかなど、二人暮らし特有のチェックも必要になります。",
      "探し方は通常の家探しと同じくFlatmates.com.au、Facebookの賃貸グループ、Gumtreeなどですが、検索時に『couple』『double room』『couple OK』などのキーワードを使うと絞り込めます。物件によっては『二人入居は家賃が割増』『光熱費が二人分』という条件があるため、家賃表示が部屋単位か一人単位か、二人で入る場合の総額はいくらかを最初に確認しましょう。二人分の家賃を払う分、個室より交渉の余地がある場合もあります。",
      "応募メッセージでは、二人であること・二人とも働いている（または働く予定）こと・生活リズムや喫煙/飲酒・清潔さを簡潔に伝えると、同居人が安心して受け入れやすくなります。例：『Hi, we're a couple from Japan on working holiday visas. We're both tidy, quiet non-smokers and both working. Is the room available for a couple, and is the rent per room or per person? Could we arrange an inspection?』（日本から来たワーホリのカップルです。二人とも清潔で静か、非喫煙で就労しています。この部屋はカップルで入居できますか、家賃は部屋単位ですか一人単位ですか？ 内見できますか？）",
      "内見では、①ダブルベッドが入る広さと二人分の収納、②他の同居人がカップル入居に納得しているか、③家賃・光熱費が二人でいくらになるか、④最低滞在期間と退去通知、を確認します。二人分の家賃・Bondを払うため、支払い条件は特にしっかり書面で残しましょう。内見前の送金要求は詐欺の可能性が高いので、必ず現地を見てから支払うのが鉄則です。",
    ],
    keyFacts: [
      { label: "狙う物件", value: "couple room / couple OK / double room" },
      { label: "最重要の確認", value: "家賃が“部屋あたり”か“一人あたり”か・二人の総額" },
      { label: "検索キーワード", value: "couple・double room・couple OK" },
      { label: "内見の追加チェック", value: "ダブルベッドの広さ・二人分の収納・同居人の同意" },
      { label: "支払い", value: "二人分の家賃/Bond。条件を書面で残す・内見後に振込" },
    ],
    steps: [
      { title: "キーワードで探す", description: "couple / double room などで二人入居可の物件を絞ります。" },
      { title: "家賃の単位を確認", description: "部屋単位か一人単位か、二人で入る総額を確認します。" },
      { title: "二人で応募", description: "二人とも就労・清潔・非喫煙などを簡潔に伝えて内見を依頼します。" },
      { title: "内見して契約", description: "広さ・収納・同居人の同意・費用を確認し、書面を残して支払います。" },
    ],
    tips: [
      "カップル可の部屋は少なめ。条件を絞って早めに複数応募すると決まりやすいです。",
      "二人分の家賃を払う分、最低滞在や光熱費で交渉できる場合があります。",
      "他の同居人がカップル入居に納得しているかを内見で確かめると、入居後の摩擦を防げます。",
    ],
    warnings: [
      "内見前に二人分のBondや家賃の送金を求められたら、詐欺を疑い応じないでください。",
      "『一人あたりの家賃』表示を部屋単位と勘違いすると、総額が想定の倍になることがあります。",
    ],
    faqs: [
      {
        question: "カップルだと家賃は高くなりますか？",
        answer:
          "部屋あたりの家賃なら二人で割れて割安になることもありますが、『一人あたり◯◯ドル』や『二人入居は割増』の物件もあります。二人で入る場合の総額を最初に確認しましょう。",
      },
      {
        question: "カップル可の部屋が見つかりません。どうすれば？",
        answer:
          "数が限られるため、couple / double room などのキーワードで検索しつつ、条件に合う複数の物件へ早めに応募するのが有効です。短期滞在先に泊まりながら内見を重ねると、良い部屋に出会いやすくなります。",
      },
    ],
    phrases: [
      { en: "Is the room available for a couple?", ja: "この部屋はカップルで入居できますか？" },
      { en: "Is the rent per room or per person?", ja: "家賃は部屋単位ですか、一人単位ですか？" },
      { en: "We're both working and non-smokers.", ja: "二人とも就労していて、非喫煙者です。" },
    ],
    sources: [
      { label: "Scamwatch（ACCC）｜詐欺の種類・通報", url: "https://www.scamwatch.gov.au/" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Scamwatch（ACCC / National Anti-Scam Centre）｜賃貸詐欺の注意",
        url: "https://www.scamwatch.gov.au/",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: [
      "housing-platforms-comparison",
      "housing-message-templates",
      "inspection-checklist",
      "rent-and-bills",
      "housing-guide",
    ],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a223",
    title: "地方・ファーム地域の家探し｜車・送迎・仕事とセットの契約の注意",
    slug: "regional-farm-housing",
    category: "housing",
    hub: "housing",
    priority: "P1",
    searchIntent: "地方・ファーム地域での住居探しと雇用連動のリスク",
    description:
      "セカンドビザ向けのファーム地域や地方での家探しを解説。ワーカーズアコモデーションやシェアハウスの探し方、車・送迎の必要性、仕事と住居がセットになった契約のリスク（雇用連動）と身を守るための確認事項をまとめました。",
    content: [
      "結論から言うと、地方・ファーム地域の家探しで最も注意すべきは『仕事と住居がセットになった契約（雇用連動）のリスク』です。ワーカーズアコモデーション（ファームやホステルが提供する滞在先）は仕事を紹介してもらえる利点がある一方、仕事を辞めると住む場所も失う、家賃が給料から天引きされる、相場より割高、といった問題が起きることがあります。契約前に、住居と雇用の条件を分けて確認することが身を守る第一歩です。",
      "地方の住居は、①ファーム/ホステルのワーカーズアコモデーション、②地元のシェアハウス、③個室・一軒家のシェア、などがあります。探し方は、Facebookの地域グループ、Gumtree、ワーカーズホステルの紹介、現地の口コミが中心です。都市部よりFlatmatesの掲載が少ないため、現地に着いてから宿（バックパッカー）に滞在しつつ情報を集める人が多いです。ファームの求人と住居がセットで案内されることも多く、その場合こそ条件の確認が重要になります。",
      "車・送迎は地方生活の大きなポイントです。地方は公共交通が乏しく、職場（ファーム）まで距離があるため、①自分の車を持つ、②ワーカーズアコモデーションの送迎（有料の場合あり）を使う、③相乗り（carpool）を組む、のいずれかが必要になります。送迎が有料の場合はその費用も生活費に加わります。車の有無で選べる仕事・住居の幅が大きく変わるため、事前に交通手段を想定しておきましょう。",
      "雇用連動のリスクから身を守るには、①家賃・送迎費が給料からいくら天引きされるかを書面で確認、②仕事を辞めても即退去にならないか、退去通知の条件を確認、③相場と比べて家賃が不当に高くないか確認、④劣悪な環境（過密・不衛生）や賃金・労働条件の搾取がないか、を確認します。労働条件に問題がある場合はFair Work Ombudsmanに、住居や契約のトラブルは州の賃貸当局に相談できます。少しでも搾取的だと感じたら、記録を残して早めに相談しましょう。",
    ],
    keyFacts: [
      { label: "最大の注意点", value: "仕事と住居がセット（雇用連動）のリスク" },
      { label: "住居の種類", value: "ワーカーズアコモデーション・地元シェア・一軒家シェア" },
      { label: "探し方", value: "Facebook地域グループ・Gumtree・ホステル紹介・口コミ" },
      { label: "交通", value: "車・有料送迎・相乗りのいずれかが必要（公共交通が乏しい）" },
      { label: "確認事項", value: "給料天引き額・退去条件・相場・労働環境" },
    ],
    steps: [
      { title: "現地で情報収集", description: "バックパッカーに滞在し、地域グループや口コミで住居情報を集めます。" },
      { title: "雇用と住居を分けて確認", description: "仕事を辞めたら退去か、家賃天引きの有無と金額を書面で確認します。" },
      { title: "交通手段を想定", description: "車・送迎(有料か)・相乗りのどれで通勤するかを決めます。" },
      { title: "条件を記録", description: "家賃・送迎費・退去通知を記録に残し、搾取的なら相談窓口へ。" },
    ],
    tips: [
      "車があると選べる仕事・住居が大きく広がります。地方では特に有利です。",
      "送迎が有料の場合、その費用も生活費に加えて実質の手取りを計算しましょう。",
      "ワーカーズアコモデーションはレビューや先に働いた人の口コミで質を見極めると失敗しにくいです。",
    ],
    warnings: [
      "仕事を辞めると即退去になる契約や、過密・不衛生な宿、相場より高い家賃の天引きに注意してください。",
      "賃金や労働条件の搾取が疑われる場合はFair Work Ombudsman、住居のトラブルは州の賃貸当局に相談を。",
    ],
    faqs: [
      {
        question: "仕事と住居がセットの案内は避けるべきですか？",
        answer:
          "一概に悪いわけではなく、仕事も住居も同時に確保できる利点があります。ただし『辞めたら即退去』『家賃が高く給料から天引き』などのリスクがあるため、条件を書面で確認し、相場と比べて不当でないかを見極めることが大切です。",
      },
      {
        question: "車がなくても地方で働けますか？",
        answer:
          "送迎付きのワーカーズアコモデーションや相乗りを使えば車なしでも可能ですが、選べる仕事・住居は限られます。送迎が有料のこともあるため、費用と利便性を確認して選びましょう。",
      },
    ],
    phrases: [
      { en: "Is rent deducted from my pay, and how much?", ja: "家賃は給料から天引きされますか、いくらですか？" },
      { en: "If I stop working, do I have to move out immediately?", ja: "仕事を辞めたら、すぐ退去しないといけませんか？" },
      { en: "Is transport to the farm provided, and is it free?", ja: "ファームへの送迎はありますか、無料ですか？" },
    ],
    sources: [
      { label: "Scamwatch（ACCC）｜詐欺の種類・通報", url: "https://www.scamwatch.gov.au/" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Consumer Affairs Victoria｜Renting（住居・契約の基本）",
        url: "https://www.consumer.vic.gov.au/housing/renting",
        accessedAt: "2026-07-19",
      },
      {
        label: "Scamwatch（ACCC / National Anti-Scam Centre）｜求人・住居に絡む搾取/詐欺",
        url: "https://www.scamwatch.gov.au/",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: [
      "farm-accommodation-guide",
      "farm-transport-car",
      "second-visa-guide",
      "rental-scam-examples",
      "housing-guide",
    ],
    updatedAt: "2026-07-19",
    published: true,
  },

  {
    id: "a224",
    title: "家探し詐欺の典型例｜内見前送金・偽契約・身分証悪用と被害時の対応",
    slug: "rental-scam-examples",
    category: "housing",
    hub: "housing",
    priority: "P0",
    searchIntent: "家探し・賃貸詐欺の典型例と被害時の対応",
    description:
      "オーストラリアの家探し詐欺の典型的な手口（内見前の送金要求・偽の物件広告・偽契約・身分証の悪用）と危険サイン、被害を防ぐ方法、被害に遭ったときの通報先（Scamwatch・銀行・警察）を解説します。",
    content: [
      "結論から言うと、家探し詐欺のほぼすべては『内見前にお金を払わせる』ことが目的です。ACCCのScamwatch（詐欺通報窓口）も、賃貸詐欺の典型として『現地を見ずに前払いを求める』手口を挙げています。したがって、どんなに条件が良くても、内見・契約確認をする前にBond（敷金）や前家賃を送金しないことが、被害を防ぐ最大の防御になります。以下の危険サインを覚えておきましょう。",
      "典型的な手口は次の通りです。①内見前送金：『海外にいるので内見できないが、Bondを振り込めば鍵を郵送する』と誘導する。②相場より極端に安い物件：好条件で気を引き、急いで送金させる。③偽の物件広告：他サイトの写真を無断使用し、実在しない/他人の物件を貸すふりをする。④偽契約：本物そっくりの契約書を送り信用させる。⑤身分証の悪用：入居確定前にパスポートや銀行情報を求め、なりすましに悪用する。⑥急かし：『他にも希望者がいるから今すぐ』とプレッシャーをかける。",
      "被害を防ぐには、①内見前に送金しない（これが最重要）、②支払いは記録の残る銀行振込で内見・契約確認の後に行う、③相手の身元（プロフィール・実在の物件か）を確認する、④相場より極端に安い物件を疑う、⑤入居確定前にパスポート番号や銀行情報を渡さない、⑥急かされても即決しない、の6点を徹底します。ギフトカードや暗号資産、海外送金で払えと言われたら、ほぼ確実に詐欺です。",
      "万一被害に遭ったら、①すぐ銀行に連絡して送金の停止・組み戻しを依頼、②Scamwatch（scamwatch.gov.au）に通報、③警察のサイバー犯罪窓口ReportCyberに報告、④身分証を渡してしまった場合はIDCARE（個人情報被害の相談機関）に相談、の順で動きます。早く動くほど資金を取り戻せる可能性が上がります。詐欺は誰でも巻き込まれ得るもので、恥ずかしがらず速やかに通報・相談することが大切です。",
    ],
    keyFacts: [
      { label: "詐欺の目的", value: "ほぼすべて『内見前に送金させる』こと" },
      { label: "危険サイン", value: "内見前送金・激安・海外オーナー・身分証の事前要求・急かし" },
      { label: "最大の防御", value: "内見・契約確認の前に送金しない" },
      { label: "怪しい支払い", value: "ギフトカード・暗号資産・海外送金はほぼ詐欺" },
      { label: "被害時", value: "銀行→Scamwatch→ReportCyber→(身分証はIDCARE)" },
    ],
    steps: [
      { title: "危険サインを確認", description: "内見前送金・激安・海外オーナー・急かしがないかチェックします。" },
      { title: "身元と物件を確認", description: "相手のプロフィールや、物件が実在するか（写真の使い回し）を確認します。" },
      { title: "内見後に振込", description: "現地を見て条件を確認し、記録の残る銀行振込で支払います。" },
      { title: "被害時はすぐ通報", description: "銀行・Scamwatch・ReportCyberへ。身分証を渡したらIDCAREへ相談します。" },
    ],
    tips: [
      "『内見できないが先に払って』は、丁寧な英語でも詐欺の典型です。例外なく送金を止めましょう。",
      "画像検索で物件写真が他サイトの使い回しでないか確認すると、偽広告を見抜けます。",
      "支払いは必ず記録の残る銀行振込で。ギフトカード・暗号資産の要求は即アウトです。",
    ],
    warnings: [
      "パスポート番号や銀行情報を入居確定前に渡さないでください。なりすましに悪用されます。",
      "『今すぐ払わないと他の人に決まる』という急かしは、冷静な判断をさせないための手口です。",
    ],
    faqs: [
      {
        question: "詐欺かどうか一番の見分け方は？",
        answer:
          "『内見せずに送金を求めるか』です。実在するまともな物件は、現地を見て条件を確認してから支払うのが普通です。内見前にBondや前家賃を要求されたら、条件がどれだけ良くても疑ってください。",
      },
      {
        question: "お金を振り込んでしまいました。どうすれば？",
        answer:
          "すぐに銀行へ連絡して送金の停止・組み戻しを依頼し、Scamwatchと警察のReportCyberに通報してください。パスポートなど身分証を渡してしまった場合はIDCAREに相談を。早く動くほど被害回復の可能性が上がります。",
      },
    ],
    phrases: [
      { en: "I'd like to inspect the property before paying anything.", ja: "何かを支払う前に、物件を内見したいです。" },
      { en: "I won't transfer money before an inspection.", ja: "内見の前に送金はしません。" },
      { en: "I'd like to report a rental scam.", ja: "賃貸詐欺を通報したいです。" },
    ],
    sources: [
      { label: "Scamwatch（ACCC）｜詐欺の種類・通報", url: "https://www.scamwatch.gov.au/" },
    ],
    verifiedAt: "2026-07-19",
    officialSources: [
      {
        label: "Scamwatch（ACCC / National Anti-Scam Centre）｜賃貸詐欺の手口と通報",
        url: "https://www.scamwatch.gov.au/",
        accessedAt: "2026-07-19",
      },
      {
        label: "NSW Government｜Renting a place to live（安全な家探し）",
        url: "https://www.nsw.gov.au/housing-and-construction/renting-a-place-to-live",
        accessedAt: "2026-07-19",
      },
    ],
    relatedSlugs: [
      "housing-platforms-comparison",
      "housing-message-templates",
      "bank-scam-security",
      "short-term-accommodation",
      "housing-guide",
    ],
    updatedAt: "2026-07-19",
    published: true,
  },
];
