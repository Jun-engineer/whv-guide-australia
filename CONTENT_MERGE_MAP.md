# CONTENT_MERGE_MAP

生成日: 2026-07-16

重複する検索意図を1つの強い記事へ統合するためのマップです。**公開中URLは原則保持**し、
統合は次の2種類に分けて扱います。

1. **実施済み統合（計画→既存公開記事）** — 未公開の計画slugを既存の公開記事へ寄せ、
   恒久リダイレクト（308）を登録。公開中ページを潰さないため安全。
2. **提案のみ（公開→公開）** — 生きているページ同士の統合は影響が大きいため、本サイクルでは
   実行せず提案として記録（Phase B で人手判断）。

## 1. 実施済み統合（計画 → 既存公開記事）

リダイレクトは `lib/content/redirects.ts` を単一の情報源とし、`next.config.ts` の
`redirects()` が 308（恒久）で転送します。マニフェスト側は該当エントリを
`status: merged` + `merged_into:` に更新済み。

| 旧 slug（計画・未公開） | 統合先（公開中） | リダイレクト | 理由 |
| --- | --- | --- | --- |
| `sim-esim-guide` | `sim-guide` | `/guides/sim-esim-guide` → `/guides/sim-guide` | SIM/eSIM導入手順が同一検索意図 |
| `mobile-carrier-comparison` | `sim-guide` | `/guides/mobile-carrier-comparison` → `/guides/sim-guide` | 主要キャリア比較は既存が網羅 |
| `abn-application` | `abn-guide` | `/guides/abn-application` → `/guides/abn-guide` | ABN申請手順が同一トピック |
| `dasp-guide` | `dasp-refund` | `/guides/dasp-guide` → `/guides/dasp-refund` | DASP申請手順が重複 |
| `find-lost-super` | `super-guide` | `/guides/find-lost-super` → `/guides/super-guide` | 紛失Super確認は既存の範囲 |
| `buy-used-car-guide` | `cars-guide` | `/guides/buy-used-car-guide` → `/guides/cars-guide` | 中古車購入は既存が網羅 |
| `city-public-transport-comparison` | `transport-payment-guide` | `/guides/city-public-transport-comparison` → `/guides/transport-payment-guide` | 都市別の公共交通・運賃・決済比較が同一検索意図（約70%重複） |

**検証:** すべての統合先は公開中の実記事。リダイレクトのチェーン・ループなし、
リダイレクト元が公開中ページを覆い隠していないことを `scripts/validate-content.mjs` が確認済み。

## 2. 統合しないと判断した「見かけの重複」（保持）

自動クラスタで共食い候補に挙がったが、検索意図が実質的に異なるため **別記事として保持**:

- 地域ガイド（`area::area-guide` 16件、`area::state-guide` 7件）: 地名/州名クエリごとに独立。
- ファーム関連（`farm::*` 39件、作物別）: 作物・シーズン・地域で内容が異なる。
- 英語フレーズ集（`english::language` 6件）: 利用シーンが異なる。
- ツール/ダウンロード（`tools::*`）: 別機能。
- ニューステンプレート（`news::news-template` 6件）: 用途別テンプレート。

## 3. 提案のみ（公開 → 公開、未実行）

現時点で明確な公開×公開の全面重複は検出されていません。将来、内容が接近した公開ページ
（例: 税還付系の複数記事、到着チェックリスト系）が出た場合は、本ファイルに提案として追記し、
人手レビューを経てから統合・リダイレクトを行う方針です。**公開中ページの自動統合は行いません。**

### バッチ2/3（visa・preparation）の統合判断（2026-07-17）

visa ハブ16件・preparation ハブ20件を公開。いずれも既存公開記事・バッチ内記事と
**検索意図が異なり全面重複はないため、新規の統合・リダイレクトは発生せず**。近接トピックは
別記事として保持し、内部リンク（`relatedSlugs`）で相互接続した。

- 既存 `visa-application` / `visa-options` と新規 visa 記事: 前者は申請フロー全体・選択肢の俯瞰、
  新規は個別論点（資金証明・健康診断・入国期限・6か月制限・VEVO等）で意図が分離。
- 既存 `preparation-checklist` / `packing-list` / `insurance-guide` と新規 preparation 記事:
  前者は総括チェックリスト、新規は個別手続き（海外転出・税・免許・薬・税関検疫等）で意図が分離。
- `arrival-airport-guide`（hub: preparation、到着空港の選択）は、arrival ハブの
  `australia-airport-arrival-flow`（入国審査の流れ）とはテーマが別。重複なし。

### バッチ4/5（arrival・money）の統合判断（2026-07-18）

arrival ハブ10件・money ハブ10件を公開。いずれも既存公開記事・バッチ内記事と
**検索意図が異なり全面重複はないため、新規の統合・リダイレクトは発生せず**。近接
トピックは別記事として保持し、内部リンク（`relatedSlugs`）で相互接続した。

- 新規 `wise-vs-bank-transfer`（比較意図）と既存公開 `money-transfer-wise`（Wise
  送金の手順・how-to）は意図が分離。統合せず双方向リンクで接続。
- 新規 `send-money-to-japan`（AUD→JPY・帰国前送金）は上記2件と対象が異なるため独立。
- 新規 `australia-airport-arrival-flow`（arrival: 入国審査の流れ）と既存
  `arrival-airport-guide`（preparation: 到着空港の選択）はテーマが別で重複なし。
- 既存公開記事（`arrival-checklist` / `first-30-days-roadmap` / `opening-hours-holidays` /
  `money-transfer-wise` / `bank-account-guide`）に新記事への内部リンクを追加し、孤立を防止。

### バッチ6（tax）の統合判断（2026-07-18）

tax ハブ17件（税・ABN/Sole Trader・Super）を公開。既存の公開記事
（`tfn-guide` / `tax-return-guide` / `tax-return-howto` / `whm-tax-rates` /
`abn-guide` / `super-guide` / `dasp-refund`）およびバッチ内17件は、いずれも
**検索意図が明確に異なり全面重複はないため、新規の統合・リダイレクトは発生せず**。
近接トピックは別記事として保持し、内部リンク（`relatedSlugs`）で相互接続した。

- 既存 `abn-guide`（ABN取得の全体像）と新規 `abn-eligibility`（誰に必要か）/
  `sole-trader-basics`（責任・税）/ `contractor-vs-employee`（Sham Contracting）/
  `invoice-template-australia`（請求書）/ `abn-record-keeping`（記帳）/
  `gst-registration-basics`（GST登録条件）/ `bas-basics`（BAS申告）は、対象問題・
  次の行動が異なるため意図が分離。統合せず双方向リンクで接続。
- 既存 `super-guide` / `dasp-refund` と新規 `superannuation-basics`（仕組み・口座選び・
  Standard Choice Form）は、前者が引き出し/返金、後者が就労中の基礎で意図が分離。
- 既存 `tax-return-guide` / `tax-return-howto` / `whm-tax-rates` と新規の
  `tax-residency-australia`（居住性判定）/ `payslip-guide`（給与明細）/
  `income-statement-tax-ready`（Tax Ready）/ `mygov-ato-linking`（連携）/
  `tax-return-deductions`（控除）/ `tax-return-multiple-jobs`（掛け持ち）/
  `tax-return-overseas-income`（海外所得）/ `tax-agent-guide`（税理士）は、
  それぞれ個別論点で意図が分離。統合せず内部リンクで接続。
- 既存 `abn-application`→`abn-guide`、`find-lost-super`→`super-guide`、
  `dasp-guide`→`dasp-refund` は過去バッチで統合済み（本バッチで変更なし）。

### バッチ7（jobs・qualifications）の統合判断（2026-07-18）

jobs ハブ26件・qualifications ハブ9件（`category: "jobs"` + `hub: "qualifications"`）の
計35件を公開。既存の公開記事（`jobs-guide` / `resume-guide` / `interview-guide` /
`certifications` / `working-rights`）およびバッチ内35件は、いずれも
**検索意図が明確に異なり全面重複はないため、新規の統合・リダイレクトは発生せず**。
近接トピックは別記事として保持し、内部リンク（`relatedSlugs`）で相互接続した。

- 既存 `jobs-guide`（仕事探しの総論）と新規 `job-search-websites`（求人サイト比較）/
  `facebook-job-groups` / `walk-in-resume` / `recruitment-agency-guide` などは、
  総論 vs 具体的な探し方・手段で意図が分離。統合せず双方向リンクで接続。
- 既存 `working-rights`（労働者の権利の総論）と新規 `award-rates-penalty-rates` /
  `unpaid-trial-rules` / `underpayment-unpaid-wages` / `cash-in-hand-jobs` /
  `workplace-injury-workers-comp` / `resignation-notice` / `termination-final-pay` は、
  総論 vs 個別の権利・問題解決手順で意図が分離。統合せず内部リンクで接続。
- 既存 `certifications`（資格の概観）と新規 qualifications 9件（`rsa-state-guide` /
  `white-card-guide` / `food-safety-certificate` / `rcg-rsa-gaming` /
  `forklift-licence-guide` / `first-aid-cpr-guide` / `police-check-guide` /
  `working-with-children-check` / `barista-course-guide`）は、概観 vs 資格別の
  取得方法・州別要件で意図が分離。統合せず内部リンクで接続。
- 既存 `resume-guide` / `interview-guide` と新規 `cover-letter-guide` /
  `job-reference-guide` / `job-application-follow-up` は、応募書類・面接の各論点で
  意図が分離。統合せず相互リンク。
- **ファーム固有の就労記事（`farm-*`）は本バッチの対象外**とし、支援的な内部リンク
  （例: 建設のSpecified Work参照）としてのみ言及した。ファームは次バッチで扱う。

### farm バッチ（2026-07-19 / 36件）

**統合（merged）: なし。リダイレクト: なし。** farm ハブ 36 件（`category: "farm"` / `hub: "farm"`）は
すべて**新規スラッグ**で、既存の公開記事（`farm-finding` 総論・`farm-second-visa` 総論、
および second-visa ハブの `second-visa-guide` / `88-day-calculation` / `six-month-specified-work` /
`specified-work-industries`）とは**検索意図が明確に異なり（作物別・地域別・手続き別・業種別）、
全面重複はないため、新規の統合・リダイレクトは発生せず**、`relatedSlugs` で相互接続した。

- 既存 `farm-finding`（仕事の探し方総論）の `relatedSlugs` を拡張し、`harvest-trail-guide` /
  `farm-season-calendar` / `piecework-vs-hourly` / `farm-employer-verification` などの具体ガイドへ接続。
- 既存 `farm-second-visa` ・ second-visa ハブの各記事から `specified-work-postcodes` /
  `farm-payslip-evidence` / `farm-employer-verification` / `construction-specified-work` /
  `meat-processing-specified-work` / `disaster-recovery-specified-work` など新規記事へ相互リンク。
- 作物ガイド（`crop-*`）・地域ガイド（`region-*`）は共食い候補として `validate:content` の
  warning に現れるが、各々異なる作物・地域・シーズンを対象とする固有の検索意図のため統合しない。
- 備考: ツール系（`tool-specified-work-region-checker` / `tool-farm-season-calendar`）は
  hub: tools / type: interactive-tool のため本バッチ対象外。planned のまま据え置き。

### housing バッチ チェックポイント（2026-07-19 / 中断）

housing（家探し・賃貸）バッチは公開作業を開始したものの、リクエストのタイムアウトが
繰り返し発生したため中断し、記事は未公開のままチェックポイントを作成した。

- **統合（merged）: なし。リダイレクト: なし。** 記事本文を公開していないため、統合・
  リダイレクトの実施もない。作業ツリーに残っていた不完全な `relatedSlugs` 編集は破棄した。
- **次回の統合方針（未実施）:** 既存の公開記事 `housing-guide`（総論）/ `share-house-finding`
  （探し方＋内見概要）と計画中の 19件は、比較・テンプレート・チェックリスト・法規・
  問題解決といった個別の検索意図で分離するため、**統合せず個別公開**して `relatedSlugs`
  で相互リンクする（farm/jobs と同方針）。公開×公開の全面統合は行わない。
- 最初の未完了 slug: `housing-platforms-comparison`。詳細は `BULK_PUBLISH_REMAINING.md`。

### housing マイクロバッチ（2026-07-19 / 3件公開）

housing ハブの最初の3件を公開した（マイクロバッチ運用）。

- **公開（3件）:** `housing-platforms-comparison`（comparison）, `housing-message-templates`
  （template）, `inspection-checklist`（checklist）。
- **統合（merged）: なし。リダイレクト: なし。** 3件はいずれも新規スラッグで、既存の公開記事
  `housing-guide`（総論）/ `share-house-finding`（探し方＋内見概要）とは検索意図が明確に
  異なる（比較・英語テンプレート・内見チェックリスト）。有用コンテンツの重複は 60–70% 未満で
  独立した強い意図があるため、**統合せず個別公開**し `relatedSlugs` で相互接続した。
- 既存2記事（`housing-guide` / `share-house-finding`）の `relatedSlugs` に新規3件を追記
  （内部リンク更新のみ、本文・slug・URL は不変）。
- 次の未完了 housing slug: `bond-rules-overview`。

### housing バッチ完了（2026-07-19 / 残り16件公開・ハブ全21件完了）

housing ハブの残り16件を公開し、housing バッチを完了した。

- **公開（16件）:** `bond-rules-overview`（legal）, `condition-report-guide`（how-to）,
  `rental-agreement-share-house`（checklist）, `rent-and-bills`（finance）, `rent-increase-rules`（legal）,
  `bond-refund-dispute`（problem-solving）, `ending-tenancy-notice`（template）,
  `find-replacement-tenant`（how-to）, `share-house-rules`（guide）, `share-house-conflict`（problem-solving）,
  `short-term-accommodation`（comparison）, `hostel-guide`（guide）, `homestay-guide`（guide）,
  `couple-room-housing`（how-to）, `regional-farm-housing`（housing）, `rental-scam-examples`（security）。
- **統合（merged）: なし。リダイレクト: なし。** 16件はいずれも新規スラッグで、既存の公開記事
  `housing-guide`（総論）/ `share-house-finding`（探し方＋内見概要）およびマイクロバッチ3件とは
  検索意図が明確に異なる（Bond法規・入居/退去手続き・契約チェック・光熱費・値上げ・トラブル解決・
  短期滞在比較・ホステル/ホームステイ・カップル/地方の家探し・詐欺）。有用コンテンツの重複は
  60–70% 未満で独立した強い意図があるため、**統合せず個別公開**し `relatedSlugs` で相互接続した。
- **検索意図の分離（cannibalization 警告への回答）:** `validate:content` は intent ラベル単位で
  近接記事を warning に挙げるが、いずれも実際の検索意図は分離している。例:
  housing::comparison（`housing-platforms-comparison`＝プラットフォーム比較 / `short-term-accommodation`
  ＝到着後の短期滞在先比較）、housing::legal（`bond-rules-overview`＝Bondの仕組み / `rent-increase-rules`
  ＝値上げ対応）、housing::guide（`share-house-rules`＝生活ルール / `hostel-guide` / `homestay-guide`）。
  過検出のため統合しない。
- housing ハブ最終状態: 全21件（既存2＋新規19）が最終ステータス確定。planned/merged/review は 0件。

### transport サブバッチ #1（2026-07-19 / 8件）

**統合（merged）: なし。リダイレクト: なし。** transport ハブの中古車購入〜所有〜故障対応 8件
（`used-car-inspection-checklist` / `ppsr-check-guide` / `rego-ctp-rwc` / `vehicle-transfer-by-state` /
`car-insurance-comparison` / `roadside-assistance` / `car-breakdown-guide` / `flat-tyre-guide`）はすべて
**新規スラッグ**で、既存の公開記事（`cars-guide` 車購入・Rego総論・`license-guide` 免許総論・
`transport-payment-guide` ・`intercity-transport`）とは**検索意図が明確に異なり（現車確認・PPSR照会・
Rego/CTP/車検の違い・州別名義変更・保険の種類・ロードサービス・故障/パンク対応）、全面重複はないため、
新規の統合・リダイレクトは発生せず**、`relatedSlugs` で相互接続した。

- 既存 `cars-guide`（車購入の総論）の `relatedSlugs` を拡張し、`used-car-inspection-checklist` /
  `ppsr-check-guide` / `rego-ctp-rwc` / `vehicle-transfer-by-state` / `car-insurance-comparison` /
  `roadside-assistance` へ接続。前セッションが残した `sell-car-before-leaving`（planned・未公開）への
  dangling 参照は削除して整合。
- `buy-used-car-guide`→`cars-guide` は過去バッチで統合済み（本サブバッチで変更なし）。
- 備考: transport ハブの残り planned 14件（公共交通比較・免許切替・トール/駐車・事故/売却等）は
  次サブバッチで扱う。`city-public-transport-comparison` から再開。

### transport サブバッチ #2（2026-07-19 / 13件公開・1件統合）

**統合（merged）1件: `city-public-transport-comparison` → `transport-payment-guide`。**
既存公開の公共交通・決済ガイドが Sydney(Opal)/Melbourne(myki)/Brisbane(go card)/Perth(SmartRider) の
タッチ決済を既にカバーし、都市別の運賃・キャップ比較という検索意図が約70%重複（同一の次アクション）
のため統合。`transport-payment-guide` を運賃制度・デイキャップ比較の段落＋keyFact で補強し、
`redirectFrom: ["city-public-transport-comparison"]` を付与。308恒久リダイレクトを `redirects.ts` に登録
（上記「1. 実施済み統合」表にも追加）。

公開13件はすべて**新規スラッグ**で、既存公開記事と検索意図が分離するため統合せず `relatedSlugs` で
相互接続した:

- transport カテゴリ9件: `mechanic-tyre-shop-english` / `fuel-saving-apps` / `tolls-linkt-guide` /
  `parking-fines-guide` / `car-accident-guide` / `rent-a-car-guide` / `sell-car-before-leaving` /
  `e-bike-e-scooter-rules` / `remote-driving-safety`。
- license カテゴリ4件（hub: transport）: `japanese-licence-state-rules` / `convert-japanese-licence` /
  `motorcycle-licence-australia` / `digital-driver-licence`。
- 内部リンク整合: `cars-guide` に `sell-car-before-leaving` を追加、`license-guide` を新規免許4件＋
  `international-driving-permit` へ接続、`transport-payment-guide` に `intercity-transport` を追加。孤立記事なし。
- 備考: これで transport ハブは全24件が最終ステータス確定（planned 0件・ハブ完了）。

### english マイクロバッチ #1（2026-07-27 / 5件公開）

**統合（merged）: なし。リダイレクト: なし。** english ハブの最初の5件
（`australian-english-accent` / `australian-slang` / `workplace-english` /
`hospitality-english` / `housing-english`）はすべて**新規スラッグ**（`hub: "english"`・`category: "english"`）で、
既存の公開記事（`english-prep`＝渡航前の英語準備の総論／`language-school`＝語学学校の選び方）とは
**検索意図が明確に異なり（豪州アクセントの聞き取り練習／スラング・リファレンス／職場英語フレーズ／
接客英語フレーズ／家探し英語フレーズ）、全面重複はないため、新規の統合・リダイレクトは発生せず**、
`relatedSlugs` で相互接続した。分類はいずれも create。

- 新規5件どうしを意図の近い組で双方向リンク（`workplace-english` ↔ `hospitality-english`、
  `australian-english-accent` ↔ `australian-slang` 等）。
- 既存記事本文への内部リンク追記（更新）: `english-prep` に `workplace-english`・`australian-english-accent`、
  `language-school` に `australian-english-accent`・`australian-slang` を追加（本文・slug・URL・公開状態は不変）。
- `workplace-english`（職場英語フレーズ）と `hospitality-english`（接客英語フレーズ）は近接するが、前者は
  「確認・報告・欠勤・シフト等の一般的な職場コミュニケーション」、後者は「レストラン・カフェ接客の定型」で
  場面が異なるため別記事として保持し双方向リンク。
- 孤立記事なし: english ハブページ（`GuideCategoryPage category="english"`）が公開 english 記事を
  自動列挙するため、5件はすべてハブから到達可能。
- 次の未完了 english slug: `bank-tax-english`（残り8件・english ハブは継続）。

### health マイクロバッチ #1（2026-07-27 / 5件公開）

**統合（merged）: なし。リダイレクト: なし。** health ハブの最初の5件
（`gp-urgent-care-emergency` / `overseas-insurance-claim` / `pharmacy-guide` /
`common-medicines-australia` / `dental-care-australia`）はすべて**新規スラッグ**で、既存の公開記事
`medicare-oshc`（医療・保険・病院のかかり方の総論）/ `safety-emergency`（緊急・安全の総論）/
`mental-health`（メンタルヘルス）とは**検索意図が明確に異なり（受診先の使い分け・海外保険の請求手順・
薬局の使い方・成分別の一般薬探し・歯科の費用と保険）、全面重複はないため、新規の統合・リダイレクトは
発生せず**、`relatedSlugs` で相互接続した。分類はいずれも create。

- 既存 `medicare-oshc`（医療総論）の `relatedSlugs` を拡張し、`gp-urgent-care-emergency` /
  `overseas-insurance-claim` / `pharmacy-guide` / `dental-care-australia` へ接続（本文・slug・URL は不変）。
- 有用コンテンツの重複は 60–70% 未満（`medicare-oshc` は総論で受診の流れ・GP・Medicare非対象・薬を概説、
  新規5件は各論の手順・比較）。独立した強い検索意図があるため統合しない。
- `pharmacy-guide`（薬局の使い方・制度）と `common-medicines-australia`（成分別の一般薬の探し方）は
  近接するが、前者は「どこで・どう買うか（S2/S3/S4・PBS）」、後者は「何を選ぶか（成分名・用量）」で
  次の行動が異なるため別記事として保持し双方向リンク。
- 次の未完了 health slug: `eye-care-optometrist`。

### health マイクロバッチ #2（2026-07-27 / 5件公開）

**統合（merged）: なし。リダイレクト: なし。** health ハブの次の5件
（`eye-care-optometrist` / `sexual-health-clinics` / `womens-health-guide` /
`ambulance-costs-insurance` / `sunburn-skin-cancer-prevention`）はすべて**新規スラッグ**で、既存の公開記事
（`medicare-oshc` / `safety-emergency` / `mental-health` ＋ マイクロバッチ #1 の5件）とは
**検索意図が明確に異なり（眼鏡・検眼／性の健康・STI検査・避妊／女性の健康・生理用品・検診／
救急車の費用と保険／紫外線・日焼け・皮膚がん対策）、全面重複はないため統合・リダイレクトは発生せず**、
`relatedSlugs` で相互接続した。分類はいずれも create。

- 既存記事の内部リンク変更なし（`medicare-oshc` は #1 で更新済み・本バッチでは不変）。
  新規5件は相互リンク＋既存 health 記事（`gp-urgent-care-emergency` / `pharmacy-guide` /
  `overseas-insurance-claim` / `safety-emergency` / `medicare-oshc`）と `farm-heat-sun-safety` へ接続。
- 孤立記事なし: health ハブページ（`GuideCategoryPage category="health"`）が公開 health 記事を
  自動列挙するため、5件はすべてハブから到達可能。
- `sexual-health-clinics` と `womens-health-guide` は近接するが、前者は「STI検査・避妊・相談先」、
  後者は「生理用品・婦人科・検診」で次の行動が異なるため別記事として保持し双方向リンク。
- 次の未完了 health slug: `heatstroke-guide`。

### health マイクロバッチ #4＝health ハブ完了（2026-07-27 / 残り2件公開＋最終監査）

**統合（merged）: なし。リダイレクト: なし。** health ハブの残り2件
（`flood-cyclone-safety` / `heatwave-severe-weather`）はすべて**新規スラッグ**で、既存の公開記事とは
**検索意図が明確に異なり（洪水・サイクロンへの備えと避難／熱波・激しい悪天候の警報確認）、
全面重複はないため統合・リダイレクトは発生せず**、`relatedSlugs` で相互接続した。分類はいずれも create。

- **既存3記事の強化（updated）:** `medicare-oshc` / `safety-emergency` / `mental-health` に
  `hub: "health"`・`verifiedAt: "2026-07-27"`・`officialSources` を追記（最終監査の公式ソース要件のため）。
  **本文・タイトル・slug・公開状態・URL は不変**のため統合/リダイレクトには該当しない。
- 孤立記事なし: health ハブページ（`GuideCategoryPage category="health"`）が公開 health 記事を自動列挙。
- `flood-cyclone-safety` と `heatwave-severe-weather` は近接する災害テーマだが、前者=洪水/サイクロンの避難判断、
  後者=熱波/雷雨/雹などの悪天候警報の確認方法で次の行動が異なるため別記事として保持し双方向リンク。
  既存の `bushfire-safety`（#3）とも災害系として相互リンク。
- **health ハブ完了: 公開20件（計画17＋既存3）。merged/redirect: なし。review/excluded: なし。**
  次のカテゴリ: gig-work（未着手・12件）、その後 daily-life（21件）。

### health マイクロバッチ #3（2026-07-27 / 5件公開）

**統合（merged）: なし。リダイレクト: なし。** health ハブの次の5件
（`heatstroke-guide` / `bites-stings-wildlife` / `food-allergy-eating-out` /
`work-injury-medical` / `bushfire-safety`）はすべて**新規スラッグ**で、既存の公開記事
（`medicare-oshc` / `safety-emergency` / `mental-health` ＋ #1・#2 の10件）とは
**検索意図が明確に異なり（熱中症の応急対応／咬傷・刺傷の応急処置／食物アレルギーの英語伝達／
仕事中の怪我と労災の導線／山火事への備えと警報）、全面重複はないため統合・リダイレクトは発生せず**、
`relatedSlugs` で相互接続した。分類はいずれも create。

- 既存記事の内部リンク変更なし。新規5件は相互リンク＋既存記事（`workplace-injury-workers-comp`〔jobs〕・
  `farm-weather-no-work`〔farm〕・`farm-heat-sun-safety`〔farm〕・`sunburn-skin-cancer-prevention`・
  `gp-urgent-care-emergency`・`safety-emergency`・`pharmacy-guide`・`overseas-insurance-claim`・`medicare-oshc`）へ接続。
- 孤立記事なし: health ハブページ（`GuideCategoryPage category="health"`）が公開 health 記事を
  自動列挙するため、5件はすべてハブから到達可能。
- `heatstroke-guide`（熱中症の応急対応）と `sunburn-skin-cancer-prevention`（#2・紫外線/皮膚がん予防）は
  近接するが、前者は「暑さによる急性症状の応急対応・000判断」、後者は「UV・日焼け・皮膚がんの予防」で
  次の行動が異なるため別記事として保持し双方向リンク。
- `work-injury-medical`（health・受診と書類の流れ）と `workplace-injury-workers-comp`（jobs・労災制度の詳細）は
  役割が異なる（前者=医療受診の導線、後者=補償制度の詳細）ため別記事として保持し双方向リンク。
- 次の未完了 health slug: `flood-cyclone-safety`（残り2件・次回は最終 health ハブ監査を実施）。

### daily-life マイクロバッチ #4 = 最終（2026-07-27 / 6件公開・ハブ完了）

**統合（merged）: なし。リダイレクト: なし。** daily-life ハブの残り全6件
（`gym-fitness-guide` / `haircut-barber-english` / `public-toilets-showers` /
`home-internet-guide` / `online-scams-cybersecurity` / `phone-lost-stolen`）はすべて**新規スラッグ**
（`hub: "daily-life"`、`category` は health/english/transport/sim/money に分散）で、既存の公開記事とは
**検索意図が明確に異なり（ジム契約の注意／美容院・バーバー英語／無料トイレ・シャワー・給水／ホームインターネット／
オンライン詐欺・セキュリティ／スマホ紛失盗難対応）、全面重複はないため、新規の統合・リダイレクトは発生せず**、
`relatedSlugs` で相互接続した。分類はいずれも create。既存記事本文への内部リンク追記は無し。

- 新規6件どうしを意図の近い組で双方向リンク（`online-scams-cybersecurity` ↔ `phone-lost-stolen`、
  `home-internet-guide` ↔ `sim-guide`、`gym-fitness-guide` ↔ `public-toilets-showers` 等）。
- `online-scams-cybersecurity`（詐欺・アカウント保護）と既存 `buy-furniture-household-items`（個人売買の詐欺対策）は
  近接するが、対象範囲が異なる（オンライン詐欺全般・MFA vs 中古品売買の取引安全）ため別記事として保持しリンク接続。
- 孤立記事なし: 各カテゴリページ（`/health`・`/english`・`/transport`・`/sim`・`/money` の `GuideCategoryPage`）が
  公開記事を自動列挙するため到達可能。
- **daily-life ハブ 21/21 完了。次の未完了 daily-life slug: なし。**

### daily-life マイクロバッチ #3（2026-07-27 / 5件公開）

**統合（merged）: なし。リダイレクト: なし。** daily-life ハブの次の5件
（`australia-clothing-seasons` / `buy-furniture-household-items` / `op-shop-guide` /
`post-office-courier` / `library-guide`）はすべて**新規スラッグ**（`hub: "daily-life"`、`category` は
clothing/housing/arrival に分散）で、既存の公開記事とは**検索意図が明確に異なり
（都市・季節別の服装／家具・生活用品の新品中古比較と詐欺対策／Op Shopの使い方・寄付／Australia Postの使い方／図書館の活用）、
全面重複はないため、新規の統合・リダイレクトは発生せず**、`relatedSlugs` で相互接続した。分類はいずれも create。

- 既存 `clothing-guide` の `relatedSlugs` に `australia-clothing-seasons` を追加（本文・slug・URL・公開状態は不変）。
- `australia-clothing-seasons`（季節・地域別の服装＝雨季・寒暖差・UV・重ね着）と既存 `clothing-guide`
  （服装・気候の総論＋持ち物）は近接するが、次の行動が異なる（各論の着こなし判断 vs 総論・持ち物準備）ため
  別記事として保持し双方向リンク。
- 新規5件どうしは意図の近い組を双方向リンク（`op-shop-guide` ↔ `buy-furniture-household-items`、
  `post-office-courier` ↔ `library-guide`）。
- 孤立記事なし: 各カテゴリページ（`/clothing`・`/housing`・`/arrival` の `GuideCategoryPage`）が公開記事を
  自動列挙するため到達可能。
- 次の未完了 daily-life slug: `gym-fitness-guide`。

### daily-life マイクロバッチ #2（2026-07-27 / 5件公開）

**統合（merged）: なし。リダイレクト: なし。** daily-life ハブの次の5件
（`food-storage-share-house` / `tap-water-drinking` / `shopping-surcharges-tipping` /
`alcohol-id-rules` / `laundry-guide`）はすべて**新規スラッグ**（`hub: "daily-life"`、`category` は
food/money/clothing に分散）で、既存の公開記事とは**検索意図が明確に異なり
（シェアハウスの食品保存／水道水の可否・災害時確認／カード追加料金・チップ／飲酒の身分証・州法差／洗濯・コインランドリー）、
全面重複はないため、新規の統合・リダイレクトは発生せず**、`relatedSlugs` で相互接続した。分類はいずれも create。

- 既存 `food-guide` の `relatedSlugs` を拡張し、`food-storage-share-house` / `tap-water-drinking` /
  `alcohol-id-rules` へ接続。既存 `clothing-guide` の `relatedSlugs` に `laundry-guide` を追加
  （いずれも本文・slug・URL・公開状態は不変）。
- `food-storage-share-house`（食品保存の安全＝FSANZ）と `cheap-meal-prep`（作り置きレシピ）は近接するが、
  次の行動が異なる（保存・衛生 vs 献立・調理）ため別記事として保持し双方向リンク。
- 孤立記事なし: 各カテゴリページ（`/food`・`/money`・`/clothing` の `GuideCategoryPage`）が公開記事を
  自動列挙するため到達可能。
- 次の未完了 daily-life slug: `australia-clothing-seasons`。

### daily-life マイクロバッチ #1（2026-07-27 / 5件公開）

**統合（merged）: なし。リダイレクト: なし。** daily-life ハブの最初の5件
（`supermarket-comparison` / `grocery-saving-tips` / `asian-japanese-groceries` /
`cheap-meal-prep` / `australian-oven-guide`）はすべて**新規スラッグ**（`category: "food"` / `hub: "daily-life"`）で、
既存の公開記事 `food-guide`（食費・自炊・スーパー・外食の総論）とは**検索意図が明確に異なり
（3大スーパー比較／食費節約テク／日本・アジア食材の入手先／作り置きレシピ／オーブン・コンロの使い方）、
全面重複はないため、新規の統合・リダイレクトは発生せず**、`relatedSlugs` で相互接続した。分類はいずれも create。

- 既存 `food-guide`（総論）の `relatedSlugs` を拡張し、`supermarket-comparison` / `grocery-saving-tips` /
  `cheap-meal-prep` / `asian-japanese-groceries` へ接続（本文・slug・URL・公開状態は不変）。
- 有用コンテンツの重複は 60–70% 未満（`food-guide` は総論でスーパー・自炊・外食を概説、新規5件は各論の比較・
  節約テク・入手先・レシピ・機器操作）。独立した強い検索意図があるため統合しない。
- `supermarket-comparison`（どの店で買うか＝価格・会員・店舗網の比較）と `grocery-saving-tips`（どう買えば安いか＝
  特売・値引き・冷凍・自炊）は近接するが次の行動が異なるため別記事として保持し双方向リンク。
- 孤立記事なし: food カテゴリページ（`GuideCategoryPage category="food"`）が公開 food 記事を自動列挙するため到達可能。
- 次の未完了 daily-life slug: `food-storage-share-house`。

## 4. リダイレクト運用ルール

- `to`（転送先）は必ず公開中（`published`）の実記事 slug。
- チェーン（A→B→C）禁止。`to` を別の `from` にしない。
- 308（恒久）。
- 追加・変更は `lib/content/redirects.ts` のみを編集し、ビルド時検証を通すこと。
