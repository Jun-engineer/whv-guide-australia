# SOURCE_VERIFICATION_REPORT

生成日: 2026-07-16
照合日（verifiedAt）: 2026-07-16（バッチ2/3 追記: 2026-07-17、バッチ4/5/6/7 追記: 2026-07-18）

本サイクルで公開・強化した YMYL 記事について、タイトルの主要な問いに関わる数値・料金・
要件・期限・規則を、公式一次情報に照合した記録です。各記事は画面上に「✅ 公式情報と照合した
最終確認日（verifiedAt）」を表示し、`OfficialSourceBox` で出典と免責（制度改定の可能性・
専門的アドバイスではない旨）を明示します。

## 1. 照合した公式一次情報

### ビザ（immi.homeaffairs.gov.au — Work and Holiday / Working Holiday 417）
- ページ更新日: 2024-12-09（アクセス 2026-07-16）
- First 417 ビザ申請料: **AUD 840.00**
- Second 417: **AUD 1,000.00** / Third 417: **AUD 1,000.00**
- 年齢: 18–30歳（一部の国は35歳まで）、扶養児童なし
- Second は指定業種で3か月、Third は6か月の特定就労が必要
- 各12か月滞在。**処理に通常より時間がかかる — 書面での許可が下りるまで渡航を予約しない。**

### 税（ato.gov.au — Working Holiday Maker tax rates 2025–26）
- ページ更新日: 2026-06-01（アクセス 2026-07-16）
- 0–45,000: 15c/$1
- 45,001–135,000: $6,750 + 30c/$1（45,000超過分）
- 135,001–190,000: $33,750 + 37c/$1（135,000超過分）
- 190,001+: $54,100 + 45c/$1（190,000超過分）
- 登録雇用主は $45,000 まで一律15%源泉徴収。TFN未提出は45%。
- subclass 417 と 462 の両方に適用。
- Schedule 15（源泉徴収表）: ato.gov.au/rates/schedule-15---tax-table-for-working-holiday-makers/

### Specified work（immi.homeaffairs.gov.au — work-holiday-417/specified-work）
- ページ更新日: 2025-09-11（アクセス 2026-07-16）
- 2ndビザ: 3か月のSpecified Work = **最低88暦日**（週末・休息日を含む）
- 3rdビザ: 6か月 = **最低179暦日**。2019年7月1日以降の労働。
- 同業種・役割のフルタイム従業員相当の勤務日数・シフトを満たす必要。
- 1暦日は最大1日分。有給の祝日・病欠は算入可、無給の悪天候日は不可。
- 対象業種: 植物・動物の栽培飼育、漁業・真珠養殖、植林・伐採、鉱業、建設（いずれも地方）、
  北部・遠隔地の観光・接客、山火事・自然災害復旧、COVID医療。417と462の両方に適用。
- UKパスポート保有者: 2024年7月1日以降の申請は2nd/3rdでSpecified Work不要。

## 2. 記事ごとの照合状況

### 新規公開（7件、すべて verifiedAt: 2026-07-16）

| slug | ハブ | 照合した固定公式値 | 出典 |
| --- | --- | --- | --- |
| `working-holiday-budget` | start-here | ビザ料金 840/1,000 のみを確定公式値として提示。その他（航空券・保険・家賃・生活費）は明確に「目安/estimates」と表示 | immi WHV ページ |
| `working-holiday-timeline` | start-here | 準備スケジュール。処理時間の公式注意書き（書面許可まで渡航予約しない）を明記 | immi WHV ページ |
| `first-30-days-roadmap` | start-here | 手続き順序（SIM→住居→銀行→TFN→仕事）。TFN は ATO を出典 | ATO TFN |
| `whm-tax-rates` | tax | 2025–26 の全税率区分を本文とkeyFactsに掲載。TFN未提出45%、全国共通（州別でない）注記 | ATO WHM税率 + Schedule 15 |
| `88-day-calculation` | farm | 3か月=最低88暦日、フルタイム相当、悪天候の無給日は不算入、1暦日=最大1日 | immi Specified work |
| `specified-work-industries` | farm | 公式の対象業種一覧（農業/漁業/植林/鉱業/建設/復旧作業等）、二次加工・小売は対象外 | immi Specified work |
| `six-month-specified-work` | farm | 6か月=最低179暦日、2019/7/1以降・セカンドビザ保持中の労働 | immi Specified work |

### 既存記事の強化（4件、verifiedAt: 2026-07-16 + officialSources 付与）

| slug | 付与した出典 |
| --- | --- |
| `visa-application` | immi WHV ページ + First WHV ページ |
| `second-visa-guide` | Second WHV + Third WHV ページ |
| `visa-options` | 全ビザ一覧 + WHV ページ |
| `tax-return-guide` | ATO WHM税率 + ATO 確定申告ページ |

### バッチ2: visa ハブ（16件、すべて verifiedAt: 2026-07-17）

各記事は immi.homeaffairs.gov.au（Work and Holiday / Working Holiday 417）を主要出典とし、
タイトルの問いに関わる要件・料金・期限・条件を公式一次情報に照合。確定公式値は本文/keyFacts に、
可変・個別事項は「目安」「州・状況で異なる」と明示し `warnings` を付与。

| slug | 照合した主要公式値・要件 | 主な出典（accessedAt 2026-07-17） |
| --- | --- | --- |
| `working-holiday-eligibility` | 年齢18–30歳（一部国35歳）、扶養児童なし、国外から申請、初回12か月滞在 | immi WHV 417 |
| `visa-417-vs-462` | 417（Working Holiday）と462（Work and Holiday）の対象国・要件の違い | immi 417 / 462 |
| `visa-cost-processing-time` | First 417 申請料 AUD 840、処理時間は変動・書面許可まで渡航予約しない | immi WHV 417 |
| `visa-proof-of-funds` | 十分な資金の証明（英文残高証明）、金額目安は公式ガイド参照 | immi WHV 417 |
| `visa-health-examination` | HAP ID・指定医療機関での健診が求められる場合の流れ | immi Health examinations |
| `visa-police-certificate` | Character要件・犯罪経歴証明の取得ルート | immi Character requirements |
| `visa-after-passport-renewal` | 新旧パスポート情報の更新（Form 929等）・VEVOで確認 | immi Update details |
| `visa-grant-letter` | Grant Notification の主要項目（入国期限・条件・保存） | immi WHV 417 |
| `visa-first-entry-deadline` | First Entry Date までに初回入国、滞在開始日との違い | immi WHV 417 |
| `visa-six-month-work-limitation` | Condition 8547（同一雇用主6か月制限）と例外・許可申請 | immi Visa conditions 8547 |
| `visa-study-limit` | 就学は最大4か月まで | immi WHV 417 |
| `visa-travel-reentry` | ビザ有効期間内は複数回出入国可、期限・パスポート確認 | immi WHV 417 |
| `bridging-visa-basics` | ブリッジングビザの役割・渡航制限の一般説明 | immi Bridging visas |
| `visa-refusal-cancellation` | 虚偽申告・条件違反による却下/取消しの回避 | immi WHV 417 |
| `vevo-check` | VEVOでの就労権・ビザ条件の確認・雇用主への共有 | immi VEVO |
| `registered-migration-agent` | 登録移民エージェント（OMARA登録）の確認方法 | OMARA / immi |

### バッチ3: preparation ハブ（20件、すべて verifiedAt: 2026-07-17）

渡航前準備。日本側手続きは日本の公式機関（外務省・国税庁・日本年金機構・日本郵便・警察庁）、
豪州側の持込・検疫・電圧等は豪州公式（ABF・DAFF・TGA・health.gov.au）を出典に照合。
可変・個別事項（費用・州別ルール・個人の健康/税務）は断定せず `warnings` で公式確認を促す。

| slug | 照合した主要公式値・要件 | 主な出典（accessedAt 2026-07-17） |
| --- | --- | --- |
| `passport-validity-renewal` | パスポート申請・更新の手続き | 外務省 パスポート |
| `japan-moving-out-procedures` | 海外転出届・国保脱退・国民年金の任意加入 | 日本年金機構 / 総務省 |
| `japan-tax-residency-before-departure` | 住民税・納税管理人の届出・非居住者課税 | 国税庁 |
| `international-driving-permit` | IDP（1949ジュネーブ条約）・免許証原本と携帯・州別ルール | 警察庁 / Transport for NSW |
| `naati-licence-translation` | NAATI認定翻訳の位置づけと州別の扱い | NAATI / Transport for NSW |
| `pre-departure-health-check` | 歯科はMedicare対象外・渡航前健診 | Services Australia Medicare |
| `medication-customs` | 個人使用の量（目安3か月分）・入国カードで申告・成分規制 | TGA / ABF |
| `vaccinations-before-australia` | 特定ワクチンの一律義務なし・黄熱等は渡航歴次第 | Dept of Health |
| `flight-booking-guide` | 片道/往復と入国要件・十分な資金の証明 | immi WHV 417 |
| `arrival-airport-guide` | 主要到着空港と都市選択の考え方 | Australian Government |
| `temporary-accommodation-before-arrival` | 到着直後の短期滞在先・入国審査で滞在先を確認 | Australian Government |
| `cards-and-cash-before-departure` | AUD 10,000相当以上の現金は税関申告 | ABF Travelling with money |
| `keep-japanese-phone-number` | 番号保管/休止・SMS認証対策 | 総務省 |
| `mail-forwarding-and-address` | 郵便の転居・転送サービス | 日本郵便 |
| `document-backup` | 重要書類の分散管理・パスポート紛失時は在外公館 | 外務省 海外安全 |
| `australia-customs-quarantine` | バイオセキュリティ・Incoming Passenger Card 申告・食品/植物/動物製品規制 | ABF / DAFF |
| `baggage-packing-strategy` | 受託/機内持込の分け方・航空会社規定 | ABF Entering Australia |
| `power-plug-voltage` | 230V・50Hz・Type I、100-240V対応機器の判定 | Australian Government |
| `farm-work-packing` | 特定就労の装備・強い紫外線対策・安全靴の要否 | immi Specified work |
| `send-luggage-to-australia` | 国際郵便/EMS/船便・郵送物も検疫対象 | 日本郵便 / DAFF |

### バッチ4: arrival ハブ（10件、すべて verifiedAt: 2026-07-18）

到着後セットアップ。入国・行政手続は豪州公式（ABF SmartGate・Services Australia myGov・ATO myID）と
日本公式（外務省：在留届・たびレジ）を出典に照合。本人確認（100ポイント）は州/機関で基準が
異なるため、代表例を示しつつ `warnings` で各機関の公式確認を促す。

| slug | 照合した主要公式値・要件 | 主な出典（accessedAt 2026-07-18） |
| --- | --- | --- |
| `australia-airport-arrival-flow` | SmartGate（顔認証+ePassport・日本対象・16歳以上）・Incoming Passenger Card 申告 | ABF SmartGate / DAFF |
| `airport-to-city` | 主要空港→市内の移動手段と料金の考え方（値段は可変のため断定せず） | 各空港・州交通当局 |
| `mygov-account-guide` | myGov アカウント作成・連携可能な行政サービス（ATO/Medicare/Centrelink） | Services Australia myGov |
| `digital-id-guide` | myID の識別レベル（Basic/Standard/Strong）・Standard=豪州書類2点で検証・15歳以上 | ATO / myID |
| `proof-of-address` | 住所証明に使える書類（銀行明細・賃貸契約・公的郵便） | 銀行・各発行元 |
| `address-change-checklist` | 住所変更先（ATO・銀行・免許・保険等） | ATO / 州交通当局 |
| `australian-id-points` | 100ポイントIDチェックの考え方（主要/副書類の配点は機関で違い得る） | 豪州政府 / 各機関 |
| `essential-australia-apps` | 生活に役立つ公式/主要アプリの用途整理 | 各公式アプリ |
| `consular-registration` | 在留届（3か月以上=旅券法16条義務・ORRnet）・たびレジ（短期） | 外務省 ORRnet/たびレジ |
| `first-week-shopping` | 到着直後の寝具・日用品・食品の買い物リスト（一般情報） | 一般・各小売 |

### バッチ5: money ハブ（10件、すべて verifiedAt: 2026-07-18）

お金・銀行・送金。可変な料金・レート・値段は断定せず目安として提示し、公的な数値（最低賃金・
現金申告額・詐欺通報窓口）は公式一次情報に照合。`warnings` で手数料・レートの最新確認を促す。

| slug | 照合した主要公式値・要件 | 主な出典（accessedAt 2026-07-18） |
| --- | --- | --- |
| `australia-living-cost` | 生活費の目安（家賃・食費・交通）・最低賃金 $26.44/h・$1,004.90/週（2026-07-01） | Fair Work National Minimum Wage |
| `weekly-budget-template` | 週単位の収支管理テンプレート（可変値は目安） | 一般 / Fair Work |
| `debit-credit-cards` | デビット/クレジットの使い分け・手数料構造 | 各銀行 / ASIC Moneysmart |
| `australia-atm-fees` | ATM手数料の仕組みと回避方法（額は可変） | 各銀行 / ASIC Moneysmart |
| `wise-vs-bank-transfer` | Wiseと銀行送金の手数料/レート/着金時間の比較視点（値は可変） | Wise / 各銀行 |
| `send-money-to-japan` | AUD→JPY 送金の方法と確認点（帰国前想定） | 送金事業者各社 |
| `joint-account-couples` | カップルの共同口座・生活費管理の考え方 | ASIC Moneysmart |
| `emergency-fund` | 緊急予備費の目安と備え方（個別額は断定せず） | ASIC Moneysmart |
| `bank-scam-security` | 詐欺通報（Scamwatch）・即時危険000・銀行へ送金停止依頼・IDCARE・ReportCyber | Scamwatch / ReportCyber / IDCARE |
| `close-bank-account-before-leaving` | 帰国前の口座閉鎖/保持の判断（Super/税還付の着金口座に注意） | ASIC Moneysmart / ATO |

### バッチ6（tax）で公開した記事の公式照合（2026-07-18）

税・ABN/Sole Trader・Super の17件を公開。各記事は `verifiedAt: 2026-07-18` を付与し、
`officialSources` に以下の公式一次情報（ato.gov.au / fairwork.gov.au / abr.gov.au /
tpb.gov.au）を明示した。

#### Super（ato.gov.au）
- Super Guarantee（SG）率: **12%**（2025年7月1日から。段階引上げの最終段階）
- 対象: 18歳以上は労働時間に関わらず対象。18歳未満は週30時間以上勤務時に対象。
  （2022年11月に月$450の収入基準は撤廃済み）
- 加入手続き: 就労開始時に Standard Choice Form でファンドを選択。未選択時は Stapled
  Super（既存の紐付けファンド）へ拠出。
- **Payday Super: 2026年7月1日から施行**（給与支払いと同じタイミングでSGを拠出する制度）。
- 出典: ATO「How much super to pay」「Super for employers」「Departing Australia
  Superannuation Payment (DASP)」

#### ABN・Sole Trader（abr.gov.au / ato.gov.au / fairwork.gov.au）
- ABN 申請は無料（Australian Business Register / abr.gov.au）。
- GST 登録基準: 年間売上 **$75,000** 以上で登録義務。ただしライドソーシング
  （Uber等の旅客運送）は売上に関わらず登録義務。基準到達から **21日以内** に登録。
- GST 登録後は BAS（Business Activity Statement）で申告（通常四半期）。
- Contractor と Employee の区別・Sham Contracting は Fair Work / ATO の基準に基づく。
- 出典: ATO「Registering for GST」「When to charge GST」、ABR「Apply for an ABN」、
  Fair Work「Independent contractors」

#### 税務手続き（ato.gov.au / fairwork.gov.au / tpb.gov.au）
- TFN Declaration: 雇用開始時に提出（紙 NAT 3092 または ATO オンラインサービス経由）。
  未提出時は 45% 源泉徴収。
- Payslip: 雇用主は給与支払いから **1営業日以内** に発行義務（Fair Work）。記載必須項目
  （雇用主名/ABN・期間・総支給/手取り・時給/時間・Super・控除）を確認。
- Income Statement は myGov（ATO連携）で確認。雇用主のSTP確定後に「Tax ready」となり、
  多くは7月14日ごろまでに確定。申告は全てTax ready後が原則。
- myGov–ATO 連携: 本人確認情報が不足する場合はATO（13 28 61 / 海外 +61 2 6216 1111）
  で linking code を取得（発行後およそ24時間で失効）。
- タックスリターン期限: 原則 **10月31日**。登録Tax Agent経由なら延長される場合あり。
  Tax Agent は TPB（tpb.gov.au）登録者のみが報酬を得て代理可能。
- 出典: ATO「TFN declaration」「How to get your income statement」「Link the ATO to
  your myGov account」「Deductions you can claim」「Your tax residency」、Fair Work
  「Pay slips」、Tax Practitioners Board「Register」

### バッチ7（jobs・qualifications）で公開した記事の公式照合（2026-07-18）

jobs ハブ26件・qualifications ハブ9件（計35件）を公開。各記事は `verifiedAt: 2026-07-18` を
付与し、`officialSources` に以下の公式一次情報（fairwork.gov.au / safeworkaustralia.gov.au /
各州WHS・酒類規制当局 / acic.gov.au / 各州子ども保護当局 / training.gov.au）を明示した。

#### 労働条件・権利（fairwork.gov.au）
- **全国最低賃金（2026年7月1日から）: $26.44/時、$1,004.90/週（週38時間ベース）**。
  賞与的手当を含まない基本額。多くの労働者には職種別の Award 最低額（+4.75%）が適用される。
- **Casual loading: 標準25%**（NES/多くのAward）。カジュアルは有給休暇・解雇予告の権利がない代わりに割増。
- **解雇予告期間（NES）:** 勤続1年以下=1週、1〜3年=2週、3〜5年=3週、5年超=4週。
  45歳以上かつ勤続2年超は+1週。重大な非行（serious misconduct）は予告なし解雇可だが既発生賃金は支払義務。
- **無給トライアル:** スキル実演に必要な時間（1時間〜1シフト程度）を直接監督下で行う場合のみ合法。
  それを超える実務は最低賃金以上の支払い義務。
- **Final pay:** 未払賃金＋未消化の年次有給の支払い。Awardにより7日以内等の定めがある場合あり。
- **不当解雇の申立ては解雇から21日以内**（Fair Work Commission）。
- Fair Work Ombudsman は無料・TIS通訳あり・ビザ状態に関わらずビザ保有者を保護。
- 出典: Fair Work「Minimum wages」「Pay Calculator」「Casual employees」「Notice and final pay」
  「Unpaid trials」「Independent contractors」「Labour hire and supply chains」等

#### 資格・ライセンス（州当局中心・全国制度は連邦当局）
- **RSA（責任あるアルコール提供）:** 州別制度（NSW: Liquor & Gaming NSW、QLD: OLGR 等）。
  発行様式・有効期限・相互承認は州で異なる。
- **White Card（一般安全教育修了証 / CPCWHS1001）:** 認定RTOで取得、原則全国通用。
  受講形式（オンライン可否）は州で異なる（NSW等は対面要素）。
- **Food Safety Supervisor:** 州・業態・役割依存（例: NSW Food Authority）。一般スタッフに全国一律必須はなし。
- **RCG（責任あるギャンブル提供）:** ギャンブル設備を扱う業務向け。州別名称・制度（NSWはRCG）。
- **フォークリフト:** High Risk Work Licence クラス LF。認定RTOで訓練・評価→州WHS当局へ申請。全国相互承認。
- **First Aid / CPR:** HLTAID011（Provide First Aid）／HLTAID009（Provide CPR）。CPRは約1年、First Aidは約3年で更新が目安。
- **National Police Check:** ACIC 認定機関・州警察・Australia Post 経由。日本の証明とは別制度。
- **WWCC:** 州別制度（NSW: Office of the Children's Guardian、QLD: Blue Card）。Police Checkとは別で子ども関連職に必須。数年単位の有効期限。
- 出典: Fair Work、Safe Work Australia「High risk work licences」、SafeWork NSW、
  Liquor & Gaming NSW、Business Queensland (OLGR)、NSW Food Authority、Food Standards Australia
  New Zealand、ACIC「National Police Checking Service」、NSW Office of the Children's Guardian、
  Blue Card Services (QLD)、training.gov.au（HLTAID009/011）

### バッチ8（farm・Specified Work）で公開した記事の公式照合（2026-07-19）

farm ハブ36件（`category: "farm"` / `hub: "farm"`）を公開。各記事は `verifiedAt: 2026-07-19` を
付与し、`officialSources`（`accessedAt: 2026-07-19`）に以下の公式一次情報を明示した。

#### セカンドビザ・Specified Work（immi.homeaffairs.gov.au）
- **対象作業:** 植物・動物の栽培/収穫、木の刈込・剪定、狩猟・捕獲、樹木伐採、食肉加工などの一次産業、
  および指定地域での建設・災害復旧など。**ワイナリーの醸造（winemaking）は栽培・収穫と異なり対象外**。
- **対象地域:** 郵便番号（postcode）で定義。**タスマニアは州全域が指定地域に該当**。
  農場の所在地が対象ポストコードかを就労前に確認する必要がある。
- **日数の考え方:** セカンドは「3か月＝最低88暦日」、サードは「6か月＝最低179暦日」の指定作業。
  作業日のみカウントし、Payslip・銀行振込・雇用主情報などの証拠保管が必須。
- 出典: Home Affairs「Specified work」（work-holiday-417 / work-and-holiday-462）。

#### 求人・地域・作物（Workforce Australia — Harvest）
- **Harvest（旧 Harvest Trail）:** 政府運営の収穫求人情報。地域・作物・シーズン別に募集を検索できる。
- 主要産地・作物・シーズン（ガトン/ロッキヤーバレー=通年野菜、バンダバーグ=冬野菜・果物、
  スタンソープ=夏〜秋の果樹、ボーエン/エア=冬のトマト、アサートン高原=多品目通年、
  ミルデューラ=ぶどう収穫/剪定・柑橘、シェパートン=夏〜秋の果樹、グリフィス=ぶどう・柑橘、
  タスマニア=夏のチェリー・ベリー）は Harvest の地域・作物情報に基づき記載。
- 出典: Workforce Australia「Harvest」。

#### 労働条件・安全（fairwork.gov.au / safeworkaustralia.gov.au）
- **Piecework（歩合制）:** Horticulture Award では**最低賃金保証（floor）**が適用され、
  雇用主は書面のpiecework合意とPayslipの発行義務がある。歩合でも最低額を下回ってはならない。
- **Labour hire:** 一部の州（QLD/VIC/SA/ACT）では労働者派遣に**ライセンス登録制度**があり、
  無登録業者・高額天引き・賃金未払いに注意。ABN・Payslip・銀行振込の有無を確認する。
- **農作業の安全:** 熱中症・紫外線（Sun protection）、農薬・化学物質（SDS/PPE）、
  機械・梯子作業などのリスクは Safe Work Australia / 州WHS当局のガイダンスに基づき一般的注意として記載。
- 出典: Fair Work「Horticulture Award」「Piece rates」「Labour hire」、Safe Work Australia、各州WHS当局。

### housing マイクロバッチ（2026-07-19、3件）

housing ハブの3件（`housing-platforms-comparison` / `housing-message-templates` /
`inspection-checklist`）を公開。各記事は `verifiedAt: 2026-07-19` を付与し、`officialSources`
（`accessedAt: 2026-07-19`）に以下の公式一次情報を明示した。3件はいずれも比較・テンプレート・
チェックリストの実務系記事で、YMYL の中核は**賃貸詐欺の回避と契約条件の確認**であるため、
可変な家賃・料金は断定せず「目安」「週いくら表記」とし、詐欺回避と正規手続きの導線を公式に照合した。

| slug | 照合した主要ポイント | 主な出典（accessedAt 2026-07-19） |
| --- | --- | --- |
| `housing-platforms-comparison` | 内見前送金の禁止・海外オーナー詐称・急かしは賃貸詐欺の典型。プラットフォームの安全性に関わらず内見後に銀行振込で支払う | Scamwatch（ACCC）/ NSW Government Renting |
| `housing-message-templates` | 応募文で個人情報（パスポート・口座）を確定前に渡さない・内見前送金の要求は詐欺 | Scamwatch（ACCC） |
| `inspection-checklist` | 内見時に確認する項目（家賃/bills/Bond/最低滞在/退去通知）と既存傷の写真記録・Bondの正規預託 | Consumer Affairs Victoria Renting / NSW Government Renting |

- **共通の照合事実:** ①内見せず前払いを求める手口は賃貸詐欺の典型（Scamwatch）。②家賃は週
  （per week）表記が基本で、bills（電気・ガス・水道・ネット）の込み/別は物件ごとに要確認。
  ③Bond（敷金）の金額・預け方・返金ルールと最低滞在・退去通知は州の制度と契約で異なるため、
  記録に残る形で確認する（NSW Government / Consumer Affairs Victoria の Renting 情報）。
- **統合・リダイレクト:** なし（新規スラッグ、既存公開記事と検索意図が分離）。詳細は
  `CONTENT_MERGE_MAP.md`「housing マイクロバッチ」。
- **次の未完了 housing slug:** `bond-rules-overview`。

### housing バッチ完了（2026-07-19、残り16件公開）

housing ハブの残り16件を、記事単位で公式一次情報に照合して新規公開し、housing バッチを完了した。
各記事は `verifiedAt: 2026-07-19` を付与し、`officialSources`（`accessedAt: 2026-07-19`）に該当する
州の賃貸当局・詐欺通報窓口を明示。YMYL の中核は**賃貸法規（Bond・値上げ・退去）・契約条件の確認・
トラブル解決・賃貸詐欺の回避**であり、州で異なる可変値（Bond上限・値上げ頻度・通知期間）は断定せず
「目安」＋各州当局への誘導とした（`StateSpecificNotice` の方針）。

| slug | 照合した主要ポイント | 主な出典（accessedAt 2026-07-19） |
| --- | --- | --- |
| `bond-rules-overview` | Bondは州の公式機関へ預託（NSW Rental Bonds Online / VIC RTBA / QLD RTA）・上限の目安は家賃4週間分・個人口座への払込リスク・又貸し/間借りは保護外の場合 | RTA(QLD) / NSW Government Renting / Consumer Affairs Victoria |
| `condition-report-guide` | 入居時の状態記録と写真で退去時のBondを守る・fair wear and tearは負担外 | NSW Government Renting / Consumer Affairs Victoria |
| `rental-agreement-share-house` | 家賃/Bond/最低滞在/退去通知/光熱費/契約形態（正式契約 vs sub-let/lodger）の確認 | Consumer Affairs Victoria / NSW Government Renting |
| `rent-and-bills` | 家賃は週表記・billsの込み/別と上限(cap)・割り勘の精算 | Consumer Affairs Victoria / NSW Government Renting |
| `rent-increase-rules` | 値上げは頻度制限（NSW: 2024-10-31以降12か月に1回）・書面事前通知（QLD一般賃貸2か月前）・VIC 2025-11-25新法・NCAT/QCAT/VCAT | NSW Government Renting / RTA(QLD) / Consumer Affairs Victoria |
| `bond-refund-dispute` | 証拠→交渉→州機関/トリブナル（NCAT/QCAT/VCAT）・fair wear and tearは負担外・又貸しは少額訴訟等 | NSW Government Renting / RTA(QLD) / Consumer Affairs Victoria |
| `ending-tenancy-notice` | 通知期間を守る・書面で残す・鍵返却/Bond精算・途中退去の後任負担 | Consumer Affairs Victoria / NSW Government Renting |
| `find-replacement-tenant` | 無断転貸（unauthorised sub-let）を避け家主/借主の許可を得る・Bond名義変更 | Consumer Affairs Victoria / NSW Government Renting |
| `share-house-rules` | 掃除/騒音/ゲスト/共有物の合意・退去は通知期間を守る | Consumer Affairs Victoria / NSW Government Renting |
| `share-house-conflict` | 記録→冷静に伝える→州の賃貸当局/トリブナル・身の危険は000 | NSW Government Renting / Consumer Affairs Victoria |
| `short-term-accommodation` | ホステル/Airbnb/ホテル/サブレット比較・内見前送金しない | Scamwatch（ACCC） |
| `hostel-guide` | 立地/治安・鍵付きロッカー・長期割引・仕事紹介の前払い勧誘に注意 | Scamwatch（ACCC） |
| `homestay-guide` | 費用に含まれるもの・家庭ルール・個人手配の前払い注意 | Scamwatch（ACCC） |
| `couple-room-housing` | 家賃が部屋/一人単位か・二人分の総額・内見前送金しない | Scamwatch（ACCC） |
| `regional-farm-housing` | 雇用連動（辞めたら退去/給料天引き）のリスク・車/送迎・搾取時の相談先 | Consumer Affairs Victoria / Scamwatch（ACCC） |
| `rental-scam-examples` | 内見前送金・激安・海外オーナー・偽契約・身分証悪用・急かし／被害時は銀行→Scamwatch→ReportCyber→IDCARE | Scamwatch（ACCC） / NSW Government Renting |

- **照合した公式一次情報（accessedAt 2026-07-19）:** RTA(QLD, rta.qld.gov.au)、NSW Government
  「Renting a place to live」(nsw.gov.au)、Consumer Affairs Victoria「Renting」(consumer.vic.gov.au)、
  Scamwatch（ACCC / National Anti-Scam Centre, scamwatch.gov.au）。3b 節で照合済みの内容
  （Bond上限・値上げ頻度・預託機関・詐欺の危険サイン）を各記事本文へ反映した。
- **統合・リダイレクト:** なし（16件は新規スラッグ、既存公開記事・マイクロバッチと検索意図が分離）。
- **留保点:** Bond上限の具体額・値上げの通知期間・退去通知期間は州で異なるため断定せず、各州当局
  （RBO/RTBA/RTA・NCAT/QCAT/VCAT）へ誘導。又貸し/間借り（sub-let/lodger）は州の賃貸法の保護外に
  なる場合が多い旨を各記事で明示した。
- **検証:** `validate:articles`（ユニーク slug 224・重複0・housing 21件）、`tsc --noEmit` クリーン、
  `validate:content` 0 error / 66 warning、`test:content` 5/5 pass、`eslint` クリーン、
  `next build` 成功（278静的ページ）。

## 3. 未解決・要注意の記述（限定事項）
- **「88日」対「3 months」（解決済み）:** immi の Specified work ページ（更新 2025-09-11）を実照合し、
  公式に「3か月 = 1年で最も短い3か月分に相当 = 最低88暦日（週末・休息日を含む）」と明記されていることを確認。
  「88日（約3か月）」の併記は公式定義と整合しており、`second-visa-guide` に当該ページを出典として追加。
  専用記事 `88-day-calculation`（数え方）・`six-month-specified-work`（179日）を新規公開。
- **DASP の源泉税率（例: 65%）（未解決・保留）:** 帰国後スーパー返金（DASP）の源泉税率は、
  本サイクルで ATO の DASP ページ・Schedule 13 が自動取得（fetch）で本文抽出できず、**公式照合を完了できなかった**。
  したがって断定的な税率は掲載せず、`super-guide`/`dasp-refund` は一般的説明にとどめ、
  金額・税率の確定値は今後の照合対象（`BULK_PUBLISH_REMAINING.md`）とします。
- **州別規則:** 運転免許の切替、州税、季節労働地域など州/準州で異なる事項は、
  対象の州/準州を必ず明示する方針（`StateSpecificNotice` コンポーネント）。本サイクルの
  公開記事は全国共通事項が中心で、州別断定は含めていない。

## 3b. housing バッチ チェックポイント（2026-07-19 / 中断・記事未公開）

housing（家探し・賃貸）バッチの公式照合を実施したが、リクエストのタイムアウトにより
記事本文の生成を打ち切ったため、**以下の照合結果はまだ記事に反映・公開していない**。
次回 housing バッチ再開時（`housing-platforms-comparison` から）に本文へ反映する。

### 賃貸・Bond（州の賃貸当局）
- **QLD（rta.qld.gov.au — Rent increases / Bonds、アクセス 2026-07-19）:** 一般賃貸の
  Bond 上限は **家賃4週間分**（2024年9月30日以降、週家賃の額にかかわらず）。Bond は RTA に
  預託（Bond Lodgement Web Service / Form 2）。家賃値上げは**前回から最低12か月**、一般賃貸は
  **2か月前**の書面通知が必要。紛争は RTA 紛争解決／QCAT。
- **NSW（nsw.gov.au — Renting a place to live、アクセス 2026-07-19）:** 家賃値上げは
  **2024年10月31日以降、12か月に1回まで**。Bond は Rental Bonds Online（NSW Fair Trading）で管理。
  Condition report・Rental Bonds Online・紛争は NCAT。
- **VIC（consumer.vic.gov.au — Renting、アクセス 2026-07-19）:** **2025年11月25日から新しい
  賃貸法**が施行。Bond は RTBA（rentalbonds.vic.gov.au、Consumer Affairs Victoria がホスト）へ
  預託。紛争は VCAT。
- **重要な留保点:** シェアハウスのサブテナント／同居人（lodger）は、州の賃貸法の保護対象外に
  なる場合が多い。書面合意を取り、支払いは記録の残る銀行振込で行う旨を記事で明示する予定。

### 家探し詐欺（scamwatch.gov.au — ACCC、アクセス 2026-07-19）
- 賃貸・宿泊の詐欺は「buying and selling scams」等に分類。**内見前の送金要求・相場より
  極端に安い物件・海外在住オーナー・身分証の事前要求**が代表的な危険サイン。被害・情報は
  Scamwatch へ報告。

### 照合の限定事項
- Bond 上限の具体額は州により異なり（QLD は家賃4週間分を確認済み、VIC/NSW/他州は各当局へ
  誘導する方針）、記事では**断定を避けて各州の当局リンクへ誘導**する。verifiedAt は
  記事公開時に付与する（本チェックポイントでは記事未公開のため未付与）。

## transport サブバッチ #1（車の所有・購入・故障 / 2026-07-19）

transport ハブの中古車購入〜所有〜故障対応 8件の公式照合。

### PPSR（ppsr.gov.au — Australian Financial Security Authority / AFSA、アクセス 2026-07-19）
- 中古車購入前の **PPSR照会は $2**（QuickVIN Search、transact.ppsr.gov.au）。VIN（車体番号）を入力し、
  **ローン残債（money owing / security interest）・盗難（stolen）・全損（written-off）** の記録を確認できる。
- PPSR は機械的な故障状態までは保証しない旨を記事に明記（現車確認・試乗と併用）。
- 記事反映: `ppsr-check-guide`（手順）、`used-car-inspection-checklist`（支払い前の必須チェックとして）。

### Rego・CTP・Roadworthy/Safety（州の運輸当局、アクセス 2026-07-19）
- **Rego（登録）** は公道走行の許可、**CTP（強制対人保険）** は他人のケガのみ補償（物損・自車は対象外）。
  CTP の扱いは州で異なる（NSW は Green Slip を別購入、VIC=TAC charge / QLD は Rego に含む）。
- **車検相当の安全検査証**の名称は州で異なる（VIC=Roadworthy Certificate/RWC、QLD=Safety Certificate、
  NSW=eSafety inspection 通称 pink slip）。可変のため断定せず各州当局（Transport for NSW / VicRoads /
  QLD TMR）へ誘導。記事反映: `rego-ctp-rwc`。

### 名義変更（Transfer / 州の運輸当局、アクセス 2026-07-19）
- 中古車の名義変更は **買主が原則14日以内**、**名義変更手数料＋印紙税（stamp duty）** が必要。売主には
  notice of disposal（売却届）義務がある州が多い。正確な期限・費用は州で異なるため Service NSW /
  VicRoads / QLD Government へ誘導。記事反映: `vehicle-transfer-by-state`。

### 自動車保険（moneysmart.gov.au — ASIC、アクセス 2026-07-19）
- 保険は **CTP（強制）→ Third Party Property → Third Party Fire & Theft → Comprehensive** の4段階。
  CTP は人のケガのみ、物損には最低 Third Party Property が必要。免責額（excess）・海外免許条件は
  保険会社で異なるため複数社比較を推奨。記事反映: `car-insurance-comparison`。

### ロードサービス／緊急（自動車クラブ・Triple Zero、アクセス 2026-07-19）
- 州別クラブ: **NSW/ACT=NRMA、VIC=RACV、QLD=RACQ、SA=RAA、WA=RAC、TAS=RACT、NT=AANT**。相互利用
  （reciprocal rights）あり。対応=バッテリー・パンク・鍵・ガス欠・レッカー。**緊急・身の危険は 000**
  （triplezero.gov.au）を優先。記事反映: `roadside-assistance`、`car-breakdown-guide`、`flat-tyre-guide`。
- テンポラリースペア（応急用の細いタイヤ）は速度・距離制限あり（多くは約80km/h）。あくまで最寄りの
  工場までの応急用と明記。記事反映: `flat-tyre-guide`。

### 照合の限定事項
- 州別の Rego/CTP/車検・名義変更の**具体的な料金・期限・名称は可変**のため、記事では断定を避け各州の
  運輸当局・自動車クラブへ誘導。verifiedAt は記事公開時（2026-07-19）に付与済み。

## transport サブバッチ #2（免許・有料道路・駐車・事故・地方運転 / 2026-07-19）

transport ハブの残り13件（transport 9件＋license 4件）の公式照合。

### ガソリン価格比較（州政府ツール、アクセス 2026-07-19）
- **NSW=FuelCheck（fuelcheck.nsw.gov.au）**、**WA=FuelWatch（fuelwatch.wa.gov.au）** は政府運営で価格公開が
  義務。リアルタイム/翌日価格を無料確認できる。都市部は price cycle（価格サイクル）があり底で給油すると安い。
  他州は民間アプリが実用的。記事反映: `fuel-saving-apps`（officialSources: FuelCheck / FuelWatch）。

### 有料道路・Toll（Linkt / Transurban、linkt.com.au、アクセス 2026-07-19）
- **Linkt（運営 Transurban）** が Sydney/Melbourne/Brisbane の主要 toll を処理。料金所での現金支払いは不可で
  ナンバー読取りの後払い。アカウント未作成でも **「pay a recent toll」でナンバー入力して後払い可**（通常3日程度の
  猶予、放置で管理手数料→罰金）。レンタカーは会社の toll 処理サービス（手数料＋通行料）。記事反映:
  `tolls-linkt-guide`（officialSources: Linkt）。

### 海外免許での運転・州別ルール（州の交通当局、アクセス 2026-07-19）
- 一時滞在者（temporary visitor）は有効な海外免許＋IDP/公認英訳で運転できる州が多いが、**永住・現地居住者に
  移行すると一定期間内に現地免許への切替義務**が生じ得る。QLD 公式（qld.gov.au/transport…/overseas）で
  「visitor は overseas licence で運転可、permanent resident になったら QLD licence が必要」を確認。切替要件・
  RWC要否・試験の有無は州で異なるため断定せず各州当局（Transport for NSW / VicRoads / QLD TMR 等）へ誘導。
  記事反映: `japanese-licence-state-rules`、`convert-japanese-licence`、`motorcycle-licence-australia`。

### デジタル運転免許証（Service NSW 等、アクセス 2026-07-19）
- **NSW（Service NSW アプリ）・QLD・SA** など一部の州で digital driver licence を導入。**現地免許保有者向け**で、
  一時滞在者（海外免許＋IDP）は対象外。本人確認（identity verification）は登録データとの完全一致が必要で、
  住所未更新等で失敗しやすい。物理カード携帯要否は州のルール次第。記事反映: `digital-driver-licence`。

### 駐車・事故・レンタカー・地方運転（可変ルールのため当局誘導、アクセス 2026-07-19）
- 駐車標識（1P/2P/No Parking/No Stopping/Clearway）・罰金・異議申立ては自治体（council）差が大きいため
  基本の読み方のみ提示し発行元へ誘導（`parking-fines-guide`）。事故対応は **緊急=000**、情報交換・警察届出
  基準は州差ありとして Triple Zero と各州警察へ誘導（`car-accident-guide`）。レンタカーは免責（excess）・
  燃料・走行距離・若年料金の確認を提示（`rent-a-car-guide`）。地方運転は給油計画・野生動物・圏外対策・
  故障時は車に留まる原則を提示（`remote-driving-safety`）。E-bike/e-scooter は州・自治体で合法性・速度・
  ヘルメット義務が大きく異なるため各当局へ誘導、自転車のヘルメットは全国義務と明記（`e-bike-e-scooter-rules`）。

### 照合の限定事項
- 免許切替・駐車罰金・事故届出・e-scooter 規制などの**具体的な条件は州/自治体で可変**のため断定を避け、
  各州交通当局・council・警察へ誘導。verifiedAt は記事公開時（2026-07-19）に付与済み。

## daily-life マイクロバッチ #3（服装の季節・家具生活用品・Op Shop・郵便・図書館 / 2026-07-27 / 5件公開）

daily-life ハブの次の5件を、記事単位で公式一次情報に照合して新規公開した（`hub: "daily-life"`、`category` は clothing/housing/arrival に分散）。
各記事は `verifiedAt: 2026-07-27` を付与し、`officialSources`（`accessedAt: 2026-07-27`）に情報源を明示。
可変性の高い**気候・料金・詐欺手口・機関別ルール**は特定の金額・数値を断定せず「確認日 2026-07-27」を明記し、公式・各機関・店頭確認へ誘導した。

| slug | 照合した主要ポイント | 主な出典（accessedAt 2026-07-27） |
| --- | --- | --- |
| `australia-clothing-seasons` | 南半球で季節が逆転。北部（Cairns/Darwin）は熱帯で乾季/雨季（雨季おおむね11〜4月）、南部（Melbourne/Tasmania）は四季で冬は寒い、内陸は日中と夜の寒暖差が大きい。UVが非常に強く UV指数3以上で日焼け・皮膚がん対策（帽子・日焼け止め・サングラス）。衣類は現地（Kmart/Target/Big W）で調達可 | ARPANSA（Ultraviolet radiation index）/ Bureau of Meteorology（Climate averages） |
| `buy-furniture-household-items` | 新品（Kmart/Target/Big W/IKEA）と中古（Facebook Marketplace/Gumtree/Op Shop）の使い分け。大型品は現物確認、PayID/振込先の名義一致を確認、安全な決済（PayPal/クレカ）を使用。詐欺被害時は銀行連絡＋IDCARE（1800 595 160）＋Scamwatch通報。furnished（家具付き）か事前確認 | ACCC Scamwatch（Buying and selling scams、IDCARE 1800 595 160） |
| `op-shop-guide` | Op Shop＝チャリティのリサイクルショップ（Vinnies/Salvos 等）。服は洗濯・電化製品は動作確認・中古マットレスは避ける。不要品は洗って使える状態で受付時間内に寄付し、営業時間外の店先放置はしない | St Vincent de Paul Society（Vinnies） |
| `post-office-courier` | Australia Post。MyPost 無料アカウントで追跡・転送・通知。Parcel Locker、PO Box（年会費）、mail redirection/hold。配達目安はおおむね5営業日、受取に写真付きID提示の場合あり。偽AusPost SMS/メール（フィッシング）に注意 | Australia Post（Receiving） |
| `library-guide` | 公共図書館は自治体/州が運営、会員登録は多くが無料。無料Wi-Fi・PC・学習スペース、書籍/電子書籍の貸出、英語学習プログラム。印刷は有料の場合あり、貸出ルール・開館時間は図書館ごとに異なる | State Library of NSW（Public library services） |

- **照合した公式一次情報（accessedAt 2026-07-27）:** ARPANSA（arpansa.gov.au — Ultraviolet radiation index）、
  Bureau of Meteorology（bom.gov.au — Climate averages）、ACCC Scamwatch（scamwatch.gov.au — Buying and selling scams）、
  Australia Post（auspost.com.au — Receiving）、St Vincent de Paul Society / Vinnies（vinnies.org.au）、
  State Library of NSW（sl.nsw.gov.au — Public library services）。
- **可変事項の断定回避:** 服装は都市・季節・UVで変わるため断定せず BOM・ARPANSA の確認へ誘導（UV指数3以上で対策）。
  個人売買の詐欺対策は Scamwatch に準拠（実物確認・名義一致・安全な決済、被害時は銀行＋IDCARE＋Scamwatch通報）。
  郵便の配達目安・PO Box年会費、図書館の印刷料金・貸出ルール・開館時間は地域/機関で異なる旨を明示し、特定金額は断定せず公式確認へ誘導。
- **統合・リダイレクト:** なし（新規5件は独立検索意図。`clothing-guide` に内部リンクのみ追記）。RSS: 本プロジェクトに RSS ルート無し（N/A）。
  ※フルビルド/テスト/lint/監査は daily-life ハブ完了後（残り5件以下時）にまとめて実施。
- **web fetch の制約:** ARPANSA・Scamwatch・Australia Post は本セッションで取得成功。BOM climate averages は 403 を返したが標準の公式ページのため出典として引用。
  Op Shop・図書館の詳細ページ（Vinnies の店舗検索、各州図書館の登録ページ）は 404/リダイレクトが多発（リトライ上限到達）したため、
  低YMYL領域として各機関のトップ/概要レベルの安定URL（vinnies.org.au、sl.nsw.gov.au/public-library-services）を出典に採用し、
  具体的な料金・時間は断定せず「機関ごとに異なる」と明示。未解決の essential claim は無し。

## daily-life マイクロバッチ #2（食品保存・水道水・カード手数料/チップ・飲酒ルール・洗濯 / 2026-07-27 / 5件公開）

daily-life ハブの次の5件を、記事単位で公式一次情報に照合して新規公開した（`hub: "daily-life"`、`category` は food/money/clothing に分散）。
各記事は `verifiedAt: 2026-07-27` を付与し、`officialSources`（`accessedAt: 2026-07-27`）に情報源を明示。
可変性の高い**制度・州法・料金**は特定の金額・罰則を断定せず「確認日 2026-07-27」を明記し、公式・各州当局・店頭確認へ誘導した。

| slug | 照合した主要ポイント | 主な出典（accessedAt 2026-07-27） |
| --- | --- | --- |
| `food-storage-share-house` | 冷蔵5℃以下・冷凍−15〜−18℃、調理後は2時間以内を目安に冷蔵/冷凍、生肉/生魚は密閉して最下段。use-by（消費期限）は守る/best before（賞味期限）は目安。シェア対策は名前・日付・個人/共有の区別 | FSANZ（Food safety basics） |
| `tap-water-drinking` | 都市部の水道水は原則そのまま飲める（ADWG で管理）。水質管理は州・準州＋地域水道事業者の責任。洪水/水質異常時は boil water alert。雨水タンク・井戸水（bore water）は別の安全管理が必要 | healthdirect（Drinking water and your health）/ NHMRC（Australian Drinking Water Guidelines）/ NSW Health（boil water alert） |
| `shopping-surcharges-tipping` | 現在はカードサーチャージ可（決済コスト上限）。**2026年10月1日から Visa/Mastercard/eftpos はサーチャージ禁止予定**（現金・BPAY・PayPal・Diners・Amex・タクシーは対象外）。日祝割増・予約手数料は別物で事前表示なら可。チップは任意 | ACCC（Card surcharges） |
| `alcohol-id-rules` | 法定飲酒年齢18歳（全国一律）、18歳未満への販売・提供は違法。確実なIDはパスポート/豪運転免許/州の Proof of Age card。受け入れID・二次供給（secondary supply）・営業時間は**州で異なる**。飲食提供は RSA 資格（州別） | NHMRC（Alcohol guidelines）/ NSW Liquor & Gaming（Alcohol and young people） |
| `laundry-guide` | シェアハウス共用機・コインランドリー（laundromat）の使い方、粉末/液体/ジェルボール、ドラム式（front loader）対応洗剤。ケアラベル（洗濯表示）は法令で義務。machine wash cold / do not tumble dry 等の読み方 | ACCC Product Safety（Care labelling of clothing & textiles） |

- **照合した公式一次情報（accessedAt 2026-07-27）:** Food Standards Australia New Zealand（foodstandards.gov.au — Food safety basics）、
  healthdirect（healthdirect.gov.au — Drinking water and your health）、NHMRC（nhmrc.gov.au — Australian Drinking Water Guidelines / Alcohol）、
  NSW Health（health.nsw.gov.au — What to do during a boil water alert）、ACCC（acccgov.au — Card surcharges、2026-10-01 の禁止予定を確認）、
  NSW Liquor & Gaming（liquorandgaming.nsw.gov.au — Alcohol and young people、州別ルールの例として使用）、ACCC Product Safety
  （productsafety.gov.au — Care labelling）。
- **可変事項の断定回避:** ACCC のカードサーチャージ制度は**2026年10月1日施行予定**である旨を日付付きで明記し「変更されうる制度」と警告。
  飲酒の受け入れID・二次供給・営業時間、飲酒可能な場所は州/自治体で異なるとして各州当局へ誘導し、具体的な金額・罰則は断定せず。
  水道水は原則安全だが雨水タンク・井戸水・災害時（boil water alert）の例外と州の管理責任を明示。コインランドリーの料金は店頭確認へ誘導。
- **統合・リダイレクト:** なし（新規5件は独立検索意図。`food-guide`／`clothing-guide` に内部リンクのみ追記）。RSS: 本プロジェクトに RSS ルート無し（N/A）。
  ※フルビルド/テスト/lint/監査は daily-life ハブ完了後（残り5件以下時）にまとめて実施。
- **web fetch の制約:** ACCC・NHMRC・healthdirect・NSW 系の主要ページは本セッションで取得成功。essential claim の未解決は無し（照合済み）。

## daily-life マイクロバッチ #1（スーパー比較・食費節約・アジア食材・作り置き・オーブン / 2026-07-27 / 5件公開）

daily-life ハブの最初の5件を、記事単位で公式一次情報・企業公式に照合して新規公開した（`category: "food"` / `hub: "daily-life"`）。
各記事は `verifiedAt: 2026-07-27` を付与し、`officialSources`（`accessedAt: 2026-07-27`）に情報源を明示。
可変性の高い**価格・特売・会員特典**は特定金額を断定せず「確認日 2026-07-27」を明記し、各社アプリ・店頭確認へ誘導した。

| slug | 照合した主要ポイント | 主な出典（accessedAt 2026-07-27） |
| --- | --- | --- |
| `supermarket-comparison` | Coles/Woolworths は全国展開・無料会員（Flybuys / Everyday Rewards）でポイント＋会員価格。ALDI は最安傾向だが品目限定・会員制度なし。ALDI は NT に店舗なし・地方は IGA 中心。価格/特売は変動 | Everyday Rewards（Woolworths 公式）/ Flybuys（Coles 公式）/ ALDI Australia（公式・店舗検索） |
| `grocery-saving-tips` | 特売（Half Price）軸の献立・値引きシール・冷凍まとめ買い。冷蔵は5℃以下・調理後は速やかに冷蔵/冷凍。家計テンプレートで週予算管理 | Moneysmart（ASIC・Simple budget）/ FSANZ（Food safety basics） |
| `asian-japanese-groceries` | 日本/アジア食材はアジア系スーパー・大手の World Foods 棚・通販で入手。日本からの食品持込は検疫（biosecurity）で品目制限あり・要申告（申告漏れは罰金） | Department of Agriculture, Fisheries and Forestry（Bringing/mailing goods） |
| `cheap-meal-prep` | 作り置きの安全: 調理後2時間以内を目安に冷蔵（5℃以下）/冷凍・再加熱は中心まで熱く・再加熱1回まで。安い定番食材の献立ローテーション | FSANZ（Food safety basics） |
| `australian-oven-guide` | 温度は摂氏（℃）・fan-forced は通常式基準より約20℃低め・grill＝上火 broiler。IH は磁性の対応鍋が必要。ガス漏れ時は火気/電気を使わず元栓を閉め換気・緊急時000 | Energy Safe Victoria（Gas safety in the home） |

- **照合した公式一次情報・企業公式（accessedAt 2026-07-27）:** Everyday Rewards（everyday.com.au — Woolworths 公式会員）、
  Flybuys（flybuys.com.au — Coles 公式会員）、ALDI Australia（aldi.com.au）、Food Standards Australia New Zealand
  （foodstandards.gov.au — Food safety basics ＝保存/冷却/再加熱、ページ更新 2025-07-29 を確認）、Moneysmart（moneysmart.gov.au —
  ASIC の Simple budget）、Department of Agriculture, Fisheries and Forestry（agriculture.gov.au — 食品の持込/郵送ルール）、
  Energy Safe Victoria（esv.vic.gov.au — 家庭のガス機器の安全）。企業公式は当該サービス（会員制度・店舗網）に関する記述のみに使用。
- **可変事項の断定回避:** スーパーの価格・特売・会員特典は変動するため特定金額を断定せず確認日を明記。ALDI の店舗網（NT 無し・
  地方は IGA 中心）、食品持込の可否（DAFF）、オーブン/コンロの操作（機種差）は地域・機種で異なる旨を明示した。
- **統合・リダイレクト:** なし（新規5件は独立検索意図で `food-guide` 総論とは分離）。RSS: 本プロジェクトに RSS ルート無し（N/A）。
  ※フルビルド/テスト/lint/監査は daily-life ハブ完了後（残り5件以下時）にまとめて実施。
- **web fetch の制約:** healthdirect の食品保存ページ・betterhealth.vic.gov.au は本セッションで取得エラー（500/抽出不可）だったが、
  同等の保存/冷却/再加熱の基準は FSANZ「Food safety basics」で確認済み（取得成功）。essential claim の未解決は無し。

## health マイクロバッチ #4＝health ハブ完了（洪水・サイクロン／熱波・悪天候 / 2026-07-27 / 残り2件公開＋既存3件強化）

health ハブの**残り2件を公式一次情報に照合して新規公開**し、health ハブを完了した。あわせて既存3記事に公式ソースを追記。
各新規記事は `verifiedAt: 2026-07-27` を付与し、`officialSources`（`accessedAt: 2026-07-27`）に公式情報源を明示。
YMYL の中核は**災害時の警報確認・避難判断（000）**であり、警報カテゴリ・避難指示・道路閉鎖は州/時期で異なるため断定を避けた。

| slug | 照合した主要ポイント | 主な出典（accessedAt 2026-07-27） |
| --- | --- | --- |
| `flood-cyclone-safety` | 洪水は「If it's flooded, forget it」＝冠水路は徒歩/車で進入しない。サイクロンシーズン＝QLD/NT/WA北部・11〜4月。BOM の Watch/Warning とサイクロン区分（Category 1〜5）。SES 132 500（救助）・命の危険は 000。避難指示・道路閉鎖は州公式で確認 | Bureau of Meteorology（Flood/Cyclone warnings）/ State Emergency Service（132 500）/ Triple Zero（000） |
| `heatwave-severe-weather` | BOM の警報種別（Severe Thunderstorm／Severe Weather／Heatwave）。雷雨ぜんそく（thunderstorm asthma）に注意。暴風・雹・倒木などの被害は SES 132 500、命の危険は 000。最新の警報は BOM/州公式で確認 | Bureau of Meteorology（Severe weather/Heatwave warnings）/ State Emergency Service（132 500）/ Triple Zero（000） |

**既存3記事の公式ソース追記（updated・本文/タイトル/slug/公開状態/URL は不変）:**

| slug | 追記した officialSources（accessedAt 2026-07-27） |
| --- | --- |
| `medicare-oshc` | Services Australia（RHCA＝相互医療協定）／healthdirect（Going to a GP）／privatehealth.gov.au（OVHC） |
| `safety-emergency` | Triple Zero（000）／Police Assistance Line（131 444）／Smartraveller |
| `mental-health` | healthdirect（Mental health）／Lifeline（13 11 14）／Beyond Blue |

- **照合した公式一次情報（accessedAt 2026-07-27）:** Bureau of Meteorology（bom.gov.au — Flood/Cyclone/Severe Weather/
  Heatwave の Watch・Warning）、State Emergency Service（各州 SES — 132 500）、Triple Zero（triplezero.gov.au — 000）、
  Services Australia（servicesaustralia.gov.au — RHCA）、healthdirect（healthdirect.gov.au — Going to a GP／Mental health）、
  privatehealth.gov.au（OVHC）、Lifeline（13 11 14）、Beyond Blue、Police Assistance Line（131 444）、Smartraveller（smartraveller.gov.au）。
- **可変事項・州依存の断定回避:** 警報カテゴリ・避難指示・道路閉鎖・救助要請番号の運用は州/時期で変わるため、
  BOM／州 SES／VicEmergency 等の州別公式へ誘導し、具体の避難指示や閉鎖状況は断定しない導線とした。
- **統合・リダイレクト:** なし（新規2件は独立検索意図）。RSS: 本プロジェクトに RSS フィードのルートは存在しない（N/A）。
- **最終 health ハブ監査（フル検証・一括実施）:** `validate:articles`（ユニーク slug 262・重複0・重複パス0・重複エクスポート0・
  health 20件・`OK: no article data errors`）、`tsc --noEmit` クリーン（exit 0）、`validate:content` 0 error / 66 warning、
  `test:content` 5/5 pass、`eslint` クリーン、`next build` 成功（**316 静的ページ**・`BUILD_EXIT=0`）。
  sitemap に `/guides/flood-cyclone-safety`・`/guides/heatwave-severe-weather` を確認。公開 health 20件すべてに
  `verifiedAt`＋`officialSources` あり（欠落0）。health `relatedSlugs` dangling 0。孤立記事0（ハブ自動列挙）。
  ※非 health 記事の 23 件グローバル dangling リンク（planned 参照）は既存事項・本バッチ範囲外（レンダリング時フィルタ）。

## health マイクロバッチ #3（熱中症・咬傷/刺傷・食物アレルギー・労災・山火事 / 2026-07-27 / 5件公開）

health ハブの次の5件を、記事単位で公式一次情報に照合して新規公開した。各記事は
`verifiedAt: 2026-07-27` を付与し、`officialSources`（`accessedAt: 2026-07-27`）に該当する公式
情報源を明示。YMYL の中核は**緊急時の判断（000）・応急処置・労災制度・災害警報**であり、種類・州で異なる事項は断定を避けた。

| slug | 照合した主要ポイント | 主な出典（accessedAt 2026-07-27） |
| --- | --- | --- |
| `heatstroke-guide` | 熱疲労（回復し得る）と熱射病（命に関わる緊急）の見分け。意識障害・反応が鈍い・体が異常に熱い・けいれん→000。応急=涼所・衣類ゆるめ・積極冷却・水分。予防=こまめな水分・暑い時間帯回避 | healthdirect（Heat-related illness）/ BOM（Heatwave）/ Triple Zero |
| `bites-stings-wildlife` | ヘビ咬傷=動かさず圧迫固定＋000、洗う/切る/吸う/きつく縛るはNG。クモ・クラゲは種類で対応が異なる。アナフィラキシー=EpiPen＋000。応急処置は公式情報に限定 | healthdirect（Bites and stings／Snake bites）/ Triple Zero |
| `food-allergy-eating-out` | 外食は具体的アレルゲン名を明確に伝える・混入(cross-contamination)確認。包装食品は主要アレルゲンの義務表示。アナフィラキシー=EpiPen（太もも外側）＋000 | healthdirect（Food allergies／Anaphylaxis）/ FSANZ（Allergen labelling） |
| `work-injury-medical` | 重傷は000/ED→GP/UCC受診→雇用主へ早期報告。労災(workers' compensation)は各州制度で医療費・休業補償が対象になり得る。診断書(Certificate of Capacity)・記録が重要。困ったら州当局/Fair Work | Safe Work Australia（Workers' compensation）/ Fair Work Ombudsman |
| `bushfire-safety` | 州消防アプリで警報確認。Fire Danger Rating（Moderate/High/Extreme/Catastrophic）と警報レベル（Advice→Watch and Act→Emergency Warning）。Total Fire Ban。危険な日は早めに離れる | Australian Fire Danger Rating System / NSW RFS・CFA Victoria / BOM |

- **照合した公式一次情報（accessedAt 2026-07-27）:** healthdirect（healthdirect.gov.au — Heat-related illness／
  Bites and stings／Snake bites／Food allergies／Anaphylaxis）、Bureau of Meteorology（bom.gov.au — Heatwave service・
  気象情報）、Food Standards Australia New Zealand（foodstandards.gov.au — Allergen labelling＝主要アレルゲンの義務表示・
  Plain English Allergen Labelling）、Safe Work Australia（safeworkaustralia.gov.au — Workers' compensation）、
  Fair Work Ombudsman（fairwork.gov.au）、Australian Fire Danger Rating System（afdrs.com.au）、
  NSW Rural Fire Service（rfs.nsw.gov.au — 警報レベル・Hazards Near Me・Total Fire Ban）／CFA Victoria（cfa.vic.gov.au）、
  Triple Zero（triplezero.gov.au — 000）。
- **可変事項・種類/州依存の断定回避:** ①咬傷・刺傷の応急処置は生き物の種類で正解が異なるため（ヘビ/ファンネルウェブ=圧迫固定、
  レッドバック=冷却、クラゲ=地域で酢/温水と異なる）、記事は一般的目安とし**実際の手順は公式（healthdirect・州の救急）で確認**する導線とした。
  ②労災制度は州・準州ごとに窓口・補償範囲が異なる（icare/WorkSafe/WorkCover等）ため州当局へ誘導し、金額は断定せず。
  ③山火事の警報アプリ・区分運用は州別のため代表例（NSW=Hazards Near Me／VIC=VicEmergency）を示しつつ各州公式へ誘導。
- **統合・リダイレクト:** なし（5件は新規スラッグ、既存公開記事と検索意図が分離）。既存記事の内部リンク変更なし。
  孤立記事は health ハブページの自動列挙により発生しない。
- **検証:** `validate:articles`（ユニーク slug 260・重複0・重複パス0・重複エクスポート0・health 18件・
  `OK: no article data errors`）、`tsc --noEmit` クリーン（exit 0）、`validate:content` 0 error / 66 warning、
  health の `relatedSlugs` は全て実在 slug に解決（dangling 0・`workplace-injury-workers-comp`／`farm-weather-no-work` 含め確認）。
  ※フルビルド/テスト/lint/監査は health ハブ完了後（残り5件以下時）にまとめて実施。

## health マイクロバッチ #2（眼・性の健康・女性の健康・救急車・紫外線 / 2026-07-27 / 5件公開）

health ハブの次の5件を、記事単位で公式一次情報に照合して新規公開した。各記事は
`verifiedAt: 2026-07-27` を付与し、`officialSources`（`accessedAt: 2026-07-27`）に該当する公式
情報源を明示。日本のワーホリが Medicare 対象外である点を関連記事で明確化した。

| slug | 照合した主要ポイント | 主な出典（accessedAt 2026-07-27） |
| --- | --- | --- |
| `eye-care-optometrist` | 視力検査・眼鏡・コンタクトの窓口はOptometrist（検眼士）。視力検査のbulk billはMedicare保持者向け→ワーホリは自己負担。眼鏡・コンタクト本体はMedicare対象外（自費か保険のoptical特約）。急な視力低下・薬品混入はED/000 | healthdirect（Eye health）/ Services Australia（Medicare） |
| `sexual-health-clinics` | STI検査・避妊・相談はGP／公的Sexual Health Clinic／Family Planning系。多くは秘密厳守でビザに影響なし。公的クリニックは無料/低額の場合。緊急避妊薬は薬局で薬剤師相談（S3・早いほど有効） | healthdirect（Sexual health / STIs / Emergency contraception） |
| `womens-health-guide` | 生理用品はスーパー・薬局。婦人科系・避妊・検診はまずGP→必要に応じ専門医紹介。子宮頸がん検診（Cervical Screening）は国のプログラム。ひどい痛み・大量出血はGP/UCC、命に関わるなら000/ED | healthdirect（Women's health）/ Department of Health（National Cervical Screening Program） |
| `ambulance-costs-insurance` | 救急車は多くの州で有料。QLD・TASは住民の費用を州が負担、NSW/VIC/SA/WA/ACT/NTは原則有料。州制度は基本住民向けでワーホリは対象外になりやすい→海外保険の救急車カバー重要。000通報自体は無料。**特定金額は断定せず州公式へ誘導** | Triple Zero（000）/ Queensland Ambulance Service / NSW Ambulance / Ambulance Victoria / healthdirect |
| `sunburn-skin-cancer-prevention` | 豪州はUVが非常に強く皮膚がん率が高い。UV指数3以上で対策必須（暑さでなくUVで判断）。Slip/Slop（SPF50+）/Slap/Seek/Slide、日焼け止めは外出20分前・2時間おき塗り直し。UV確認はBOM/SunSmart/ARPANSA。ほくろ/シミの変化はGPへ | ARPANSA（UV Index・**取得確認済み**）/ SunSmart・Cancer Council / Bureau of Meteorology（UV forecast） |

- **照合した公式一次情報（accessedAt 2026-07-27）:** healthdirect（healthdirect.gov.au — Eye health /
  Sexual health / Sexually transmitted infections / Women's health / Emergency contraception）、
  Services Australia（Medicare／**Reciprocal Health Care Agreements = 日本は対象外**）、
  Department of Health and Aged Care「National Cervical Screening Program」（health.gov.au）、
  各州救急サービス（Queensland Ambulance Service = ambulance.qld.gov.au／NSW Ambulance = ambulance.nsw.gov.au／
  Ambulance Victoria = ambulance.vic.gov.au）、Triple Zero（triplezero.gov.au — 000通報は無料）、
  ARPANSA「Ultraviolet radiation index」（arpansa.gov.au — Commonwealth のUV監視網・UV区分 Low/Moderate/High/
  Very High/Extreme を**取得確認済み**）、SunSmart / Cancer Council（sunsmart.com.au / cancer.org.au — UV3+で対策・
  Slip Slop Slap Seek Slide）、Bureau of Meteorology「UV Index forecast」（bom.gov.au/uv）。
- **web fetch の制約と対応:** healthdirect の一部解説ページ・cancer.org.au（CSP でブロック）・sunsmart.com.au
  （doubleclick へリダイレクト）・NSW救急の料金ページ（404）は自動取得に失敗。ARPANSA の UV Index ページは取得成功。
  **救急車の州別具体額は各州・改定で大きく変わるため、焦点を絞った2回の取得試行が失敗した時点で数値の断定を取りやめ**、
  「有料/無料の州別構造」「000通報は無料」「ワーホリは州制度対象外になりやすい」という確立した構造的事実のみを記述し、
  正確な金額は**各州救急サービス公式サイトで確認**する導線とした（リトライ上限：主要主張ごとに焦点化した取得を最大2回）。
- **留保点:** ①救急車費用は州・搬送内容・改定で可変のため特定金額を断定せず公式へ誘導。②視力検査・眼鏡・保険の
  optical 特約の対象範囲は保険会社で異なるため証券確認へ誘導。③検診・受診の可否や費用は Medicare の有無で異なるため
  「日本のワーホリは対象外になり得る」と明示しつつ公的窓口確認へ誘導。
- **統合・リダイレクト:** なし（5件は新規スラッグ、既存公開記事と検索意図が分離）。既存記事の内部リンク変更なし
  （`medicare-oshc` は #1 で更新済み・本バッチでは不変）。孤立記事は health ハブページの自動列挙により発生しない。
- **検証:** `validate:articles`（ユニーク slug 255・重複0・重複パス0・重複エクスポート0・health 13件・
  `OK: no article data errors`）、`tsc --noEmit` クリーン（exit 0）、`validate:content` 0 error / 66 warning、
  health の `relatedSlugs` は全て実在 slug に解決（dangling 0・`farm-heat-sun-safety` 含め確認）。
  ※フルビルド/テスト/lint/監査は health ハブ完了後（残り5件以下時）にまとめて実施。

## health マイクロバッチ #1（医療・薬・歯科 / 2026-07-27 / 5件公開）

health ハブの最初の5件を、記事単位で公式一次情報に照合して新規公開した。各記事は
`verifiedAt: 2026-07-27` を付与し、`officialSources`（`accessedAt: 2026-07-27`）に該当する公式
情報源を明示。YMYL の中核は**受診先の緊急度判断・海外保険の請求・薬の分類と入手・歯科費用**であり、
日本のワーホリが Medicare 対象外である点（相互医療協定なし）を各記事で明確化した。

| slug | 照合した主要ポイント | 主な出典（accessedAt 2026-07-27） |
| --- | --- | --- |
| `gp-urgent-care-emergency` | 命に関わる緊急=000/ED、命に別状ない緊急=Medicare UCC（walk-in・bulk billed・minor骨折/ねんざ・UTI・STI・切り傷・胃腸炎・軽いやけど等）またはGP、通常=GP。UCCのbulk billはMedicareカード保持者向け→日本のワーホリは対象外で自己負担し得る | health.gov.au（Medicare UCC）/ healthdirect / Services Australia（RHCA）/ Triple Zero |
| `overseas-insurance-claim` | ワーホリはMedicare非適用→海外保険。基本は立替→明細付き領収書（tax invoice）＋診断書で請求、高額入院は24hアシスタンスでキャッシュレス。既往症・歯科・妊娠等は対象外が多い | Services Australia（Medicare / RHCA）/ healthdirect |
| `pharmacy-guide` | 薬剤師相談は無料、S2（棚）・S3（薬剤師確認）・S4（処方箋）。PBSはMedicare加入者向け→ワーホリは処方薬が全額になりやすい | TGA（Scheduling）/ Services Australia（PBS）/ healthdirect |
| `common-medicines-australia` | 商品名でなく有効成分で探す（paracetamol/ibuprofen/抗ヒスタミン）。paracetamolの重複・過量による肝障害に注意、持病・妊娠は薬剤師へ | healthdirect（Medicines / Paracetamol）/ TGA |
| `dental-care-australia` | 成人歯科は原則Medicare対象外、ワーホリは自己負担が基本。治療前にquote、保険の歯科は制限が多い、顔/首の腫れ・呼吸困難は000/ED | healthdirect（Dental care）/ Services Australia |

- **照合した公式一次情報（accessedAt 2026-07-27）:** Department of Health and Aged Care
  「Medicare Urgent Care Clinics」（health.gov.au — bulk billed・walk-in・対象症状一覧、命に関わる場合は
  000/ED を明記）、healthdirect（healthdirect.gov.au — 無料健康相談・受診先の目安・Medicines・Dental care）、
  Services Australia「Reciprocal Health Care Agreements」（**日本は協定国に含まれず、ワーホリはMedicare
  非適用**）「Medicare」「Pharmaceutical Benefits Scheme」、Therapeutic Goods Administration
  「Scheduling basics」（S2 Pharmacy Medicine / S3 Pharmacist Only / S4 Prescription Only）、
  Triple Zero（triplezero.gov.au — 000）。
- **留保点:** ①healthdirect の無料相談電話の番号・対応窓口は州で異なる（VIC=NURSE-ON-CALL、QLD=13 HEALTH 等）
  ため、記事では代表番号（1800 022 222）を示しつつ **healthdirect 公式サイトで最新窓口を確認**する導線とした。
  ②海外保険の補償範囲・請求手順は保険会社ごとに異なるため断定せず**証券・保険会社確認**へ誘導。
  ③歯科費用・救急車費用（別記事）・州別窓口は可変のため断定を避けた。
- **統合・リダイレクト:** なし（5件は新規スラッグ、既存公開記事と検索意図が分離）。
- **検証:** `validate:articles`（ユニーク slug 250・重複0・重複パス0・重複エクスポート0・health 8件）、
  `tsc --noEmit` クリーン（exit 0）、health の `relatedSlugs` は全て実在 slug に解決（dangling 0）。
  ※フルビルド/テスト/lint/監査は health ハブ完了後に実施。

## 4. 免責の表示

すべての公開記事で `OfficialSourceBox` に以下を明記:
- 制度・料金は改定される可能性があるため、手続き前に必ず公式サイトで最新情報を確認すること。
- 本記事は一般的な情報提供であり、個別の法務・税務・医療等の専門的アドバイスではないこと。
