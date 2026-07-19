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
];
