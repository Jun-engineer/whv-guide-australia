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

## 4. 免責の表示

すべての公開記事で `OfficialSourceBox` に以下を明記:
- 制度・料金は改定される可能性があるため、手続き前に必ず公式サイトで最新情報を確認すること。
- 本記事は一般的な情報提供であり、個別の法務・税務・医療等の専門的アドバイスではないこと。
