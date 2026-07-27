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

  {
    id: "a281",
    title: "シェアハウスのWi-Fi・ホームインターネット基礎",
    slug: "home-internet-guide",
    category: "sim",
    hub: "daily-life",
    description:
      "オーストラリアのホームインターネット（nbn / モバイル回線）の基礎を解説。シェアハウスでのWi-Fiの仕組み、回線の選び方、契約の縛り、費用分担のコツまで、短期滞在のワーホリ向けにまとめました。",
    content: [
      "オーストラリアの固定インターネットは、多くの家庭が「nbn（National Broadband Network）」という全国的な卸売ネットワークを使っています。nbn自体は回線網で、実際の契約は Telstra・Optus・TPG・Aussie Broadband などの小売業者（retail provider）と結びます。プランは通信速度（例: nbn 50 / nbn 100）で分かれ、料金や速度は業者・プランで異なります。まず住所が nbn 対応か、どのタイプの接続かを確認してから申し込みます。",
      "シェアハウスでは、すでにWi-Fiが用意されていることが多く、その場合は家賃に含まれるか、住人で費用を分担（split）します。自分で新規契約する場合は、開通までに数日〜数週間かかることがあり、モデム（modem）が必要な場合もあります。短期滞在なら、縛りのない「no lock-in（月々契約）」のプランや、工事不要ですぐ使える『ホームワイヤレス（home wireless / 5G）』やモバイルデータのテザリングも選択肢です。",
      "契約前に、①最低契約期間・解約条件、②モデム代の有無、③速度と月額、④名義（誰の名前で契約するか）、⑤退去時の解約手続きを確認しましょう。料金・速度・提供状況は業者と住所によって異なり変わるため、断定はできません。最新情報は nbn および各小売業者の公式で確認してください（本記事の確認日: 2026-07-27）。",
    ],
    keyFacts: [
      { label: "固定回線", value: "nbn（全国の卸売網）＋小売業者と契約" },
      { label: "主な小売業者", value: "Telstra / Optus / TPG / Aussie Broadband 等" },
      { label: "プラン", value: "速度別（nbn 50 / 100 等）。料金は業者で差" },
      { label: "工事不要の選択肢", value: "ホームワイヤレス(5G)・モバイルデータのテザリング" },
      { label: "シェアハウス", value: "Wi-Fi込み or 費用を住人で分担するのが一般的" },
    ],
    steps: [
      { title: "住所の対応を確認", description: "住所が nbn 対応か、接続タイプを nbn／小売業者の公式で確認します。" },
      { title: "プランを選ぶ", description: "速度・月額・最低契約期間・モデム代を比較し、短期なら no lock-in を検討します。" },
      { title: "申し込み・開通", description: "小売業者に申し込み、モデム設定をして開通します。数日〜数週間かかることがあります。" },
      { title: "費用分担を決める", description: "シェアハウスでは名義と支払い分担を住人で明確にしておきます。" },
    ],
    tips: [
      "滞在が短いなら、工事や縛りのないホームワイヤレス（5G）やモバイルデータのテザリングが手軽です。",
      "シェアハウスのWi-Fiは、家賃込みか別で分担かを入居前に確認しておくとトラブルを防げます。",
      "自分名義で契約する場合は、退去時の解約手続きと違約金の有無を必ず確認しましょう。",
    ],
    faqs: [
      {
        question: "短期滞在でも固定インターネットを契約できますか？",
        answer:
          "できますが、最低契約期間のあるプランは短期滞在に不向きです。縛りのない no lock-in（月々契約）や、工事不要のホームワイヤレス（5G）、モバイルデータのテザリングを検討すると柔軟です。料金や提供状況は業者と住所で異なるため、各社の公式で確認してください。",
      },
      {
        question: "シェアハウスのWi-Fiが遅いときは？",
        answer:
          "利用人数が多い時間帯は遅くなりがちです。ルーターの近くで使う、有線接続を使う、契約速度（nbn 50/100 等）を管理者に確認する、といった対処があります。契約内容の変更はシェアハウスの管理者・契約者と相談してください。",
      },
    ],
    warnings: [
      "料金・速度・提供状況は業者と住所によって異なり変わります。断定せず、nbn および各小売業者の公式で最新を確認してください（確認日: 2026-07-27）。",
    ],
    verifiedAt: "2026-07-27",
    officialSources: [
      {
        label: "NBN Co（nbn）｜公式サイト（全国ブロードバンドネットワーク）",
        url: "https://www.nbnco.com.au/",
        accessedAt: "2026-07-27",
      },
    ],
    relatedSlugs: [
      "sim-guide",
      "library-guide",
      "online-scams-cybersecurity",
      "buy-furniture-household-items",
    ],
    updatedAt: "2026-07-27",
    published: true,
  },

  {
    id: "a283",
    title: "スマホを紛失・盗難された場合の対応",
    slug: "phone-lost-stolen",
    category: "sim",
    hub: "daily-life",
    description:
      "オーストラリアでスマホを紛失・盗難されたときの対応を解説。SIMの停止、端末の追跡・ロック・データ消去、パスワード変更、銀行・本人確認の保護、警察への届け出まで、被害を最小限にする手順をまとめました。",
    content: [
      "スマホを失くしたり盗まれたりしたら、被害を広げないために「すぐに動く」ことが大切です。スマホには銀行アプリ・メール・SNSに加え、SMSで届く認証コード（ワンタイムパスワード）が入っているため、放置すると不正ログインや乗っ取りにつながります。まずは通信会社（telco）に連絡してSIMを一時停止し、SMS認証を悪用されないようにしましょう。",
      "次に、別の端末から「iPhoneを探す（Find My）」や「デバイスを探す（Find My Device）」で位置確認・遠隔ロック・データ消去を行い、メール・銀行・SNSのパスワードを変更し、可能なら多要素認証（MFA）を有効にします。オーストラリア政府の Australian Cyber Security Centre（ACSC）は、アカウント保護のために MFA を推奨しています。盗難の場合は警察に届け出て、レポート番号（保険請求に使えることがあります）を控えます。銀行にも連絡して、モバイルバンキングやカードの保護措置を確認しましょう。",
      "本人確認書類の情報が漏れた可能性がある場合は、IDCARE（1800 595 160）に相談すると、無料で被害を抑えるための対応計画を立ててくれます。サイバー犯罪は cyber.gov.au から報告できます。手続きや必要書類は、通信会社・銀行・保険・警察によって異なるため、各機関の公式案内で確認してください（本記事の確認日: 2026-07-27）。",
    ],
    keyFacts: [
      { label: "最優先", value: "通信会社に連絡しSIMを一時停止（SMS認証の悪用防止）" },
      { label: "端末対策", value: "Find My で位置確認・遠隔ロック・データ消去" },
      { label: "アカウント", value: "メール・銀行・SNSのパスワード変更＋MFA有効化" },
      { label: "届け出", value: "警察に届け出てレポート番号を控える（保険用）" },
      { label: "相談先", value: "IDCARE 1800 595 160／cyber.gov.au（サイバー犯罪報告）" },
    ],
    steps: [
      { title: "SIMを止める", description: "通信会社に連絡してSIMを一時停止し、SMS認証コードの悪用を防ぎます。" },
      { title: "端末を探す・ロックする", description: "別端末から Find My で位置確認・遠隔ロック・必要ならデータ消去を行います。" },
      { title: "パスワードを変える", description: "メール・銀行・SNSのパスワードを変更し、可能ならMFAを有効化します。" },
      { title: "届け出・相談する", description: "警察に届け出てレポート番号を控え、銀行に連絡。ID漏えいの疑いは IDCARE に相談します。" },
    ],
    tips: [
      "普段からロック画面のパスコードと Find My（探す機能）を有効にしておくと、いざというとき被害を抑えられます。",
      "SMS認証だけに頼らず、認証アプリやパスキーなど強いMFAを併用すると、SIM停止までの間も乗っ取られにくくなります。",
      "盗難時のレポート番号は、旅行保険や端末保険の請求で必要になることがあるため必ず控えましょう。",
    ],
    faqs: [
      {
        question: "まず最初に何をすればいいですか？",
        answer:
          "最優先は通信会社に連絡してSIMを一時停止することです。SMSで届く認証コードの悪用を防げます。その後、別端末から Find My で端末をロック・追跡し、メールや銀行のパスワードを変更してください。盗難なら警察にも届け出ましょう。",
      },
      {
        question: "本人確認書類の情報も入っていたかもしれません。",
        answer:
          "身分証の写真やパスポート情報などが漏れた可能性がある場合は、IDCARE（1800 595 160）に無料で相談できます。被害を最小限にする対応計画を一緒に立ててくれます。サイバー犯罪は cyber.gov.au から報告できます。銀行にも連絡して口座・カードの保護措置を確認してください。",
      },
    ],
    warnings: [
      "手続き・必要書類・対応は通信会社・銀行・保険・警察によって異なります。断定せず、各機関の公式案内で最新を確認してください（確認日: 2026-07-27）。",
      "緊急で身の危険がある場合は 000（警察・救急・消防）に連絡してください。盗難の届け出は最寄りの警察（police）で行います。",
    ],
    verifiedAt: "2026-07-27",
    officialSources: [
      {
        label: "Australian Cyber Security Centre｜How to secure your devices（端末とアカウントの保護）",
        url: "https://www.cyber.gov.au/protect-yourself/securing-your-devices/how-secure-your-devices",
        accessedAt: "2026-07-27",
      },
      {
        label: "Scamwatch｜What to do if you've been scammed（被害後の対応・IDCARE 1800 595 160）",
        url: "https://www.scamwatch.gov.au/protect-yourself/what-to-do-if-youve-been-scammed",
        accessedAt: "2026-07-27",
      },
    ],
    relatedSlugs: [
      "online-scams-cybersecurity",
      "sim-guide",
      "home-internet-guide",
      "library-guide",
    ],
    updatedAt: "2026-07-27",
    published: true,
  },
];
