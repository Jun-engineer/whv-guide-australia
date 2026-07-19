# BULK_PUBLISH_REMAINING

生成日: 2026-07-16（更新: 2026-07-19）

計画コンテンツ（planned）の残タスク一覧と、逐次公開の進捗を記録します。

## チェックポイント（2026-07-19）: transport サブバッチ #2（残り14件を公開/統合・transport ハブ完了）

transport（車・免許・公共交通）バッチの**残り14件を処理し、transport ハブを完了**しました。
サブバッチ #1（8件）に続き、免許・有料道路・駐車・事故・レンタカー・売却・地方運転などを公開し、
公共交通比較の重複1件を既存記事へ統合しました。以下が確定状態です。

- **transport ハブ最終状態: 全24件が最終ステータス確定。** 内訳＝既存公開2件（`transport-payment-guide` /
  `intercity-transport`、manifest `existing`）＋新規公開21件（サブバッチ #1 の8件 ＋ 本サブバッチ13件）
  ＋ 統合1件（`buy-used-car-guide` は既存で cars-guide へ merged）。**planned は 0件**。
- **本サブバッチで公開した13件（すべて `verifiedAt: 2026-07-19`・該当記事に `officialSources` 付き・完全公開）:**
  transport カテゴリ9件＝`mechanic-tyre-shop-english`（language）, `fuel-saving-apps`（finance）,
  `tolls-linkt-guide`（how-to）, `parking-fines-guide`（legal）, `car-accident-guide`（safety）,
  `rent-a-car-guide`（checklist）, `sell-car-before-leaving`（how-to）, `e-bike-e-scooter-rules`（legal）,
  `remote-driving-safety`（safety）。license カテゴリ4件＝`japanese-licence-state-rules`（legal）,
  `convert-japanese-licence`（how-to）, `motorcycle-licence-australia`（how-to）,
  `digital-driver-licence`（how-to）。
- **統合（merged）1件: `city-public-transport-comparison` → `transport-payment-guide`。**
  既存公開の公共交通・決済ガイドが Sydney(Opal)/Melbourne(myki)/Brisbane(go card)/Perth(SmartRider) の
  タッチ決済を既にカバーし、都市別の運賃・キャップ比較という検索意図が約70%重複（同一の次アクション）。
  `transport-payment-guide` を運賃制度・デイキャップ比較の段落＋keyFact で補強し、`redirectFrom` を付与。
  308恒久リダイレクトを `lib/content/redirects.ts` に追加（`from: city-public-transport-comparison`）。
- **既存記事の内部リンク:** `cars-guide` の `relatedSlugs` に `sell-car-before-leaving` を追加。
  `license-guide` の `relatedSlugs` を新規免許4件＋`international-driving-permit` へ接続。
  `transport-payment-guide` の `relatedSlugs` に `intercity-transport` を追加。孤立記事なし。
- **公式照合（記事反映済み）:** FuelCheck(NSW政府)・FuelWatch(WA政府)・Linkt(Transurban)・
  QLD Transport(overseas licence)・Service NSW(digital licence) を照合。可変な州別ルール（免許切替要件・
  RWC要否・駐車罰金・e-scooter規制）は断定せず各州交通当局へ誘導。詳細は `SOURCE_VERIFICATION_REPORT.md`。
- **content-manifest.yaml:** 本サブバッチ13件を `status: planned` → `status: published`、
  `city-public-transport-comparison` を `status: merged` ＋ `merged_into: transport-payment-guide` に更新。
- **検証（本サブバッチ）:** `validate:articles`（`OK: no article data errors`・ARTICLE_ORDER omission は既存仕様の
  warn のみ）、`tsc --noEmit` クリーン、`validate:content` 0 error / 66 warning（想定内の cannibalization のみ）、
  `test:content` 5/5 pass、`eslint` クリーン、`next build` 成功（299静的ページを prerender・新規13件含む）。
- **残り transport slug: 0件（ハブ完了）。**
- **次のバッチ: health（`gp-urgent-care-emergency` から・未着手）。** ※本セッションは transport のみ処理し、次カテゴリには着手しない。
- **変更ファイル（本チェックポイント）:** `lib/content/articles/transport.ts`、`lib/content/articles/license.ts`、
  `lib/content/articles/cars.ts`、`lib/content/redirects.ts`、`lib/content/manifest.generated.ts`（再生成）、
  `whv-guide-content-plan/content-manifest.yaml`、`CONTENT_MERGE_MAP.md`、`SOURCE_VERIFICATION_REPORT.md`、
  `BULK_PUBLISH_REPORT.md`、`BULK_PUBLISH_REMAINING.md`。
- **最後に成功した検証: 上記すべて（2026-07-19）。最後に成功したビルド: `next build` 成功（299静的ページ・新規13件を prerender）。**

## チェックポイント（2026-07-19）: transport サブバッチ #1（車の所有・購入・故障 8件公開）

transport（車・免許・公共交通）バッチの最初の8件（中古車の購入〜所有〜故障対応）を公開しました。
**前セッションでマニフェスト上 `published` にマークされ cars.ts から参照されていたが本文が
未作成だった8件を書き上げ、状態を整合**させました（中断からの継続）。以下が確定状態です。

- **本サブバッチで公開した8件（すべて `verifiedAt: 2026-07-19`・`officialSources` 付き・完全公開）:**
  `used-car-inspection-checklist`（checklist）, `ppsr-check-guide`（how-to）, `rego-ctp-rwc`（guide）,
  `vehicle-transfer-by-state`（how-to）, `car-insurance-comparison`（comparison）,
  `roadside-assistance`（comparison）, `car-breakdown-guide`（problem-solving）, `flat-tyre-guide`（problem-solving）。
- **完了した transport slug: 8 / 22。**
- **統合（merged）: なし。リダイレクト: なし。** 8件はいずれも新規スラッグで、既存公開記事
  `cars-guide`（車購入とRego総論）/ `license-guide`（免許総論）/ `transport-payment-guide` /
  `intercity-transport` とは検索意図が明確に異なる（現車確認・PPSR照会・Rego/CTP/車検の違い・
  州別名義変更・保険の種類・ロードサービス・故障/パンク対応）。個別公開し `relatedSlugs` で相互リンク。
- **既存記事の内部リンク:** `cars-guide` の `relatedSlugs` を新規6件（used-car-inspection-checklist /
  ppsr-check-guide / rego-ctp-rwc / vehicle-transfer-by-state / car-insurance-comparison /
  roadside-assistance）へ接続。孤立記事なし。※前セッションが残した `sell-car-before-leaving`（未公開・
  planned）への dangling 参照は削除して整合。
- **公式照合（記事反映済み）:** PPSR（ppsr.gov.au／AFSA — $2 VIN照会で残債・盗難・全損を確認）を
  直接照合。州別の名義変更・Rego/CTP/車検・保険・ロードサービスは可変のため断定せず州当局・
  自動車クラブ・moneysmart(ASIC)・Triple Zero(000)へ誘導。詳細は `SOURCE_VERIFICATION_REPORT.md`。
- **content-manifest.yaml:** 該当8件は `status: published`（前セッションで更新済み・本文公開により整合）。
- **検証（本サブバッチ）:** `validate:articles`（ユニーク slug 232・重複0・重複パス0・transport 10件）、
  `tsc --noEmit` クリーン、`validate:content` 0 error / 66 warning（想定内の cannibalization のみ）、
  `test:content` 5/5 pass、`eslint` クリーン、`next build` 成功（全静的ページを prerender・新規8件含む）。
- **残り transport planned（14件・すべて planned のまま／次サブバッチ）:** `city-public-transport-comparison`,
  `mechanic-tyre-shop-english`, `fuel-saving-apps`, `tolls-linkt-guide`, `parking-fines-guide`,
  `car-accident-guide`, `rent-a-car-guide`, `sell-car-before-leaving`, `japanese-licence-state-rules`,
  `convert-japanese-licence`, `motorcycle-licence-australia`, `digital-driver-licence`,
  `e-bike-e-scooter-rules`, `remote-driving-safety`。
- **最初の未完了 transport slug: `city-public-transport-comparison`**（次回はここから再開）。
- **次のバッチ: transport（`city-public-transport-comparison` から継続）。** ※本セッションは transport の
  先頭8件のみ処理し、次サブバッチには着手しない。
- **変更ファイル（本チェックポイント）:** `lib/content/articles/transport.ts`、`lib/content/articles/cars.ts`、
  `lib/content/manifest.generated.ts`（再生成）、`whv-guide-content-plan/content-manifest.yaml`、
  `CONTENT_MERGE_MAP.md`、`SOURCE_VERIFICATION_REPORT.md`、`BULK_PUBLISH_REPORT.md`、`BULK_PUBLISH_REMAINING.md`。
- **最後に成功した検証: 上記すべて（2026-07-19）。最後に成功したビルド: `next build` 成功（新規8件を prerender）。**

## チェックポイント（2026-07-19）: housing バッチ完了（残り16件を公開・ハブ全21件完了）

housing（家探し・賃貸）ハブの**残り16件を公開し、housing バッチを完了**しました。以下が確定状態です。

- **housing ハブ最終状態: 全21件が最終ステータス確定。** 内訳＝既存公開2件（`housing-guide` /
  `share-house-finding`、manifest `existing`）＋新規公開19件（manifest `published`）。**planned・merged・review は 0件**。
- **本バッチで公開した16件（すべて `verifiedAt: 2026-07-19`・`officialSources` 付き・完全公開）:**
  `bond-rules-overview`, `condition-report-guide`, `rental-agreement-share-house`, `rent-and-bills`,
  `rent-increase-rules`, `bond-refund-dispute`, `ending-tenancy-notice`, `find-replacement-tenant`,
  `share-house-rules`, `share-house-conflict`, `short-term-accommodation`, `hostel-guide`,
  `homestay-guide`, `couple-room-housing`, `regional-farm-housing`, `rental-scam-examples`。
- **統合（merged）: なし。リダイレクト: なし。** 16件はいずれも新規スラッグで、既存公開記事
  （`housing-guide` 総論 / `share-house-finding` 探し方＋内見概要）およびマイクロバッチ3件とは
  検索意図が明確に異なるため、統合せず個別公開し `relatedSlugs` で相互リンクした（farm/jobs と同方針）。
- **既存記事の内部リンク:** 変更なし（既存2記事の本文・slug・URL は不変）。新規16件どうしと
  マイクロバッチ3件・既存2記事へ `relatedSlugs` で接続。孤立記事なし。
- **公式照合（記事反映済み）:** RTA(QLD)・NSW Government Renting・Consumer Affairs Victoria(RTBA)・
  Scamwatch(ACCC) を照合。Bond上限・値上げ頻度・預託機関・紛争解決（NCAT/QCAT/VCAT）・賃貸詐欺の
  典型手口。可変な上限額・州別ルールは断定せず各州当局へ誘導。詳細は `SOURCE_VERIFICATION_REPORT.md`。
- **content-manifest.yaml:** 該当16件を `status: planned` → `status: published` に更新済み。
- **検証（本バッチ）:** `validate:articles`（ユニーク slug 224・重複0・重複パス0・housing 21件）、
  `tsc --noEmit` クリーン、`validate:content` 0 error / 66 warning（想定内の cannibalization のみ）、
  `test:content` 5/5 pass、`eslint` クリーン、`next build` 成功（278静的ページ・新規16件を prerender）。
- **残り housing slug: 0件（ハブ完了）。**
- **次のバッチ: transport（22件・未着手）。** ※本セッションでは housing のみ処理し、次カテゴリは着手しない。

## チェックポイント（2026-07-19）: housing マイクロバッチ #1（3件公開）

housing（家探し・賃貸）バッチの最初の3件を公開しました（マイクロバッチ運用）。以下が確定状態です。

- **完了した housing slug: 3 / 19** — `housing-platforms-comparison`, `housing-message-templates`,
  `inspection-checklist`（すべて `verifiedAt: 2026-07-19`・`officialSources` 付き・完全公開）。
- **公開した housing slug: 上記3件。**
- **統合した housing slug: なし。リダイレクト: なし。**（3件とも新規スラッグで既存公開記事と
  検索意図が分離。詳細は `CONTENT_MERGE_MAP.md`）。
- **既存記事の内部リンク更新:** `housing-guide` / `share-house-finding` の `relatedSlugs` に
  新規3件を追記（本文・slug・URL は不変）。
- **最初の未完了 housing slug: `bond-rules-overview`**（次回はここから再開）。
- **残り housing slug（16件・すべて planned のまま）:** `bond-rules-overview`,
  `condition-report-guide`, `rental-agreement-share-house`, `rent-and-bills`,
  `rent-increase-rules`, `bond-refund-dispute`, `ending-tenancy-notice`,
  `find-replacement-tenant`, `share-house-rules`, `share-house-conflict`,
  `short-term-accommodation`, `hostel-guide`, `homestay-guide`, `couple-room-housing`,
  `regional-farm-housing`, `rental-scam-examples`。
- **統合方針（継続）:** 既存の公開記事 `housing-guide`（総論）/ `share-house-finding`
  （探し方＋内見概要）とは検索意図が異なるため、残り16件も原則**統合せず個別公開**して
  `relatedSlugs` で相互リンクする。60–70% 以上の重複かつ独立意図が乏しい項目が出た場合のみ統合を検討。
- **公式照合（本マイクロバッチ・記事反映済み）:** Scamwatch(ACCC)・NSW Government Renting・
  Consumer Affairs Victoria Renting を照合。詳細は `SOURCE_VERIFICATION_REPORT.md`「housing
  マイクロバッチ」節。
- **content-manifest.yaml:** 該当3件を `status: planned` → `status: published` に更新済み。
- **検証（マイクロバッチ範囲）:** `validate:articles`（ユニーク slug 208・重複0・重複パス0）、
  `tsc --noEmit` クリーン。変更 housing 記事の `relatedSlugs` は全て実在 slug に解決。
- **変更ファイル（本チェックポイント）:** `lib/content/articles/housing.ts`、
  `lib/content/manifest.generated.ts`（再生成）、`whv-guide-content-plan/content-manifest.yaml`、
  `CONTENT_MERGE_MAP.md`、`SOURCE_VERIFICATION_REPORT.md`、`BULK_PUBLISH_REPORT.md`、
  `BULK_PUBLISH_REMAINING.md`。
- **次のバッチ: housing（`bond-rules-overview` から再開）。**

## チェックポイント（2026-07-19）: housing バッチ中断

housing（家探し・賃貸）バッチの公開作業を開始しましたが、リクエストのタイムアウトが
繰り返し発生したため、**記事本文の生成を打ち切り、クリーンなチェックポイントを作成**
しました。以下が確定した状態です。

- **完了した housing slug: なし（0 / 19）** — 本文を書き上げて公開できた記事はありません。
- **公開した housing slug: なし。**
- **統合した housing slug: なし。**
- **部分作成・重複挿入: 削除済み。** 中断時、既存の公開記事 `housing-guide` /
  `share-house-finding` の `relatedSlugs` を未公開の計画 slug へ書き換える不完全な編集が
  作業ツリーに残っていましたが、対象記事が存在せず既存の有効リンク（`whv-complete-guide`）を
  失う内容だったため、`git checkout` で破棄しました。**既存の 2 記事は元の公開状態のまま保持。**
- **最初の未完了 housing slug: `housing-platforms-comparison`**（次回はここから再開）。
- **残り housing slug（19件・すべて planned のまま）:** `housing-platforms-comparison`,
  `housing-message-templates`, `inspection-checklist`, `bond-rules-overview`,
  `condition-report-guide`, `rental-agreement-share-house`, `rent-and-bills`,
  `rent-increase-rules`, `bond-refund-dispute`, `ending-tenancy-notice`,
  `find-replacement-tenant`, `share-house-rules`, `share-house-conflict`,
  `short-term-accommodation`, `hostel-guide`, `homestay-guide`, `couple-room-housing`,
  `regional-farm-housing`, `rental-scam-examples`。
- **統合方針（未実施・次回適用予定）:** 既存の公開記事 `housing-guide`（総論）/
  `share-house-finding`（探し方＋内見概要）とは検索意図が異なり、19件はいずれも個別の
  比較・テンプレート・チェックリスト・法規・問題解決記事のため、**統合せず個別公開**して
  `relatedSlugs` で相互リンクする方針（farm/jobs バッチと同様）。公開×公開の統合は行わない。
- **公式照合（実施済み・記事未反映）:** 本セッションで RTA(QLD)・NSW Fair Trading・
  Consumer Affairs Victoria(RTBA)・Scamwatch(ACCC) の最新情報を照合済み。詳細は
  `SOURCE_VERIFICATION_REPORT.md` の housing チェックポイント節を参照。
- **content-manifest.yaml: 変更なし**（housing 19件はすべて `status: planned` のままで正しい）。
- **最後に成功した検証: `validate:articles`（重複 slug 0）、`tsc --noEmit` クリーン**
  （本チェックポイントで再実行）。
- **最後に成功したビルド: farm バッチ時の `next build` 成功（205記事）。**
  本チェックポイントはコード変更を含まない（ドキュメント更新のみ）ため、ビルドは再実行不要。
- **変更ファイル（本チェックポイント）:** `BULK_PUBLISH_REMAINING.md`、
  `CONTENT_MERGE_MAP.md`、`SOURCE_VERIFICATION_REPORT.md`。
- **次のバッチ: housing（`housing-platforms-comparison` から再開）。** 続けて transport。

## アーキテクチャ移行（2026-07-18 完了）

記事データを確実に編集できるよう、単一の巨大配列（`lib/mockData.ts` の `articles`）を
**カテゴリ単位のモジュール**（`lib/content/articles/<category>.ts` + `index.ts`）へ
分割しました。**構成のみの変更で、記事の追加・本文/タイトル/slug/メタデータ/公開状態の
変更・URL の変更は一切ありません。**

- 記事数: 97 → 97（不変）、ユニーク slug: 97 → 97、重複 slug: 0
- `lib/mockData.ts` は後方互換のため `articles` を再エクスポート（既存 import は不変）
- 記事以外のモックデータ（forum/report/feedback）は `lib/mockData.ts` に残置
- 詳細・記事の追加場所: `docs/article-data-architecture.md`
- 検証: `npm run validate:articles`（重複 slug/パス・必須欠落・不正カテゴリ・重複エクスポート）
- 状態: `validate:content` 0 error / 66 warning、`tsc --noEmit` クリーン、`eslint`
  クリーン、`test:content` 5/5 pass、`next build` 成功（151静的ページ）— 移行前と同一

**次のコンテンツバッチ: gig-work（ギグワーク・副業）ハブ 12 件**（下記「ハブ別の残タスク一覧」参照）。

## 進捗（2026-07-19 時点）

325件の計画記事を、ハブ単位のバッチで公式照合しながら順次公開しています。

- **公開済み合計: 151 件**（残り 174 件）
- **現在のカテゴリ: visa（完了）・preparation（完了）・arrival（完了）・money（完了）・tax（完了）・jobs（完了）・qualifications（完了）・farm（完了・36件）**
- **次のカテゴリ: gig-work（未着手・12件）**
- **統合（merged）: なし**（farm バッチの 36 件はすべて新規スラッグで、既存記事との統合・リダイレクトは不要）
- **レビュー/除外（deferred）: `tool-specified-work-region-checker`・`tool-farm-season-calendar`**（hub: tools / type: interactive-tool のため farm バッチ対象外。planned のまま据え置き）
- **最終検証: `validate:articles` OK（ユニーク slug 205・重複 0）、`validate:content` 0 error / 66 warning（cannibalization の想定内警告のみ）、`tsc --noEmit` クリーン、`eslint` クリーン、`test:content` 5/5 pass、`next build` 成功**
- **最終ビルド: `next build` 成功（farm バッチ 36 件を含む全 205 記事を prerender）**
- **変更ファイル: `lib/content/articles/farm.ts`、`lib/content/manifest.generated.ts`（再生成）、`whv-guide-content-plan/content-manifest.yaml`、`CONTENT_MERGE_MAP.md`、`SOURCE_VERIFICATION_REPORT.md`、`BULK_PUBLISH_REPORT.md`、`BULK_PUBLISH_REMAINING.md`**

### 完了済み slug（バッチ1: start-here ハブ / commit 78a5e61）

- `working-holiday-model-plans`
- `working-holiday-common-mistakes`
- `working-holiday-with-low-english`
- `working-holiday-without-car`
- `working-holiday-couple`
- `working-holiday-solo-woman`
- `working-holiday-age-29-30`

### 完了済み slug（バッチ2: visa ハブ / 16件）

- `working-holiday-eligibility`
- `visa-417-vs-462`
- `visa-cost-processing-time`
- `visa-proof-of-funds`
- `visa-health-examination`
- `visa-police-certificate`
- `visa-after-passport-renewal`
- `visa-grant-letter`
- `visa-first-entry-deadline`
- `visa-six-month-work-limitation`
- `visa-study-limit`
- `visa-travel-reentry`
- `bridging-visa-basics`
- `visa-refusal-cancellation`
- `vevo-check`
- `registered-migration-agent`

### 完了済み slug（バッチ3: preparation ハブ / 20件）

- `passport-validity-renewal`
- `japan-moving-out-procedures`
- `japan-tax-residency-before-departure`
- `international-driving-permit`
- `naati-licence-translation`
- `pre-departure-health-check`
- `medication-customs`
- `vaccinations-before-australia`
- `flight-booking-guide`
- `arrival-airport-guide`
- `temporary-accommodation-before-arrival`
- `cards-and-cash-before-departure`
- `keep-japanese-phone-number`
- `mail-forwarding-and-address`
- `document-backup`
- `australia-customs-quarantine`
- `baggage-packing-strategy`
- `power-plug-voltage`
- `farm-work-packing`
- `send-luggage-to-australia`

### 完了済み slug（バッチ4: arrival ハブ / 10件）

- `australia-airport-arrival-flow`
- `airport-to-city`
- `mygov-account-guide`
- `digital-id-guide`
- `proof-of-address`
- `address-change-checklist`
- `australian-id-points`
- `essential-australia-apps`
- `consular-registration`
- `first-week-shopping`

### 完了済み slug（バッチ5: money ハブ / 10件）

- `australia-living-cost`
- `weekly-budget-template`
- `debit-credit-cards`
- `australia-atm-fees`
- `wise-vs-bank-transfer`
- `send-money-to-japan`
- `joint-account-couples`
- `emergency-fund`
- `bank-scam-security`
- `close-bank-account-before-leaving`

### 完了済み slug（バッチ6: tax ハブ / 17件 / commit `feat: publish tax content batch`）

- `tax-residency-australia`
- `tfn-declaration-form`
- `payslip-guide`
- `income-statement-tax-ready`
- `mygov-ato-linking`
- `tax-return-deductions`
- `tax-return-multiple-jobs`
- `tax-return-overseas-income`
- `tax-agent-guide`
- `abn-eligibility`
- `sole-trader-basics`
- `contractor-vs-employee`
- `invoice-template-australia`
- `abn-record-keeping`
- `gst-registration-basics`
- `bas-basics`
- `superannuation-basics`

**tax バッチ 統合（merged）: なし。** 既存の公開記事（`tfn-guide` / `tax-return-guide` / `tax-return-howto` / `whm-tax-rates` / `abn-guide` / `super-guide` / `dasp-refund`）と 17 件はいずれも検索意図が明確に異なるため、統合せず個別公開し `relatedSlugs` で相互リンクしました（`abn-application`→`abn-guide`、`find-lost-super`→`super-guide`、`dasp-guide`→`dasp-refund` は過去バッチで統合済み）。

### 完了済み slug（バッチ7: jobs + qualifications ハブ / 35件 / commit `feat: publish jobs-qualifications content batch`）

jobs（26件）:

- `job-search-websites`
- `facebook-job-groups`
- `walk-in-resume`
- `cover-letter-guide`
- `job-reference-guide`
- `job-application-follow-up`
- `employment-contract-checklist`
- `employment-types`
- `award-rates-penalty-rates`
- `unpaid-trial-rules`
- `underpayment-unpaid-wages`
- `cash-in-hand-jobs`
- `workplace-injury-workers-comp`
- `workplace-bullying-harassment`
- `resignation-notice`
- `termination-final-pay`
- `hospitality-jobs-guide`
- `barista-job-guide`
- `hotel-housekeeping-jobs`
- `cleaning-jobs-guide`
- `retail-jobs-guide`
- `warehouse-jobs-guide`
- `construction-jobs-guide`
- `office-admin-jobs-guide`
- `it-jobs-working-holiday`
- `recruitment-agency-guide`

qualifications（9件 / `category: "jobs"` + `hub: "qualifications"`）:

- `rsa-state-guide`
- `white-card-guide`
- `food-safety-certificate`
- `rcg-rsa-gaming`
- `forklift-licence-guide`
- `first-aid-cpr-guide`
- `police-check-guide`
- `working-with-children-check`
- `barista-course-guide`

**jobs+qualifications バッチ 統合（merged）: なし。** 既存の公開記事（`jobs-guide` / `resume-guide` / `interview-guide` / `certifications` / `working-rights`）はいずれも概要・総論であり、35 件は個別の職種ガイド・具体的な労働問題の手順・資格別の取得方法であって検索意図が明確に異なるため、統合せず個別公開し `relatedSlugs` で相互リンクしました。ファーム固有の就労記事は本バッチの対象外とし、支援リンク（`farm-*`）としてのみ参照しています。

### 統合（merged）済み slug（→ 統合先）

- `sim-esim-guide` → `sim-guide`
- `mobile-carrier-comparison` → `sim-guide`
- `abn-application` → `abn-guide`
- `dasp-guide` → `dasp-refund`
- `find-lost-super` → `super-guide`
- `buy-used-car-guide` → `cars-guide`

### 未完了（部分作成中）の slug

- なし（作業中の記事・カテゴリはありません。start-here / visa / preparation / arrival / money は完全に公開済み）

## 未公開の理由（残り全項目共通）

各記事は YMYL（お金・ビザ・税・健康・法）領域を含み、**タイトルの問いに答える主要な数値・料金・要件・期限・法規則を、記事単位で最新の公式一次情報に照合して確認する作業**が必要です。この照合はコンテンツ1件ずつ公式サイト（immi.homeaffairs.gov.au / ato.gov.au / fairwork.gov.au / servicesaustralia.gov.au / 各州政府等）にあたる必要があり、一度に全件を責任を持って完了できません。マスタープランの方針「maximum valid publication, not forced publication」「検証不能なコンテンツは review のままにする」に従い、未照合のものは公開せず計画（planned）状態で保持します。

- 残り合計: 245 件（status: planned）
- 公開条件: 記事単位の公式一次情報照合 + verifiedAt 付与 + 内部リンク整備 + 品質チェック通過

## ハブ別の残タスク一覧

### farm — ファーム・Specified Work (36件) ← ✅ 完了（2026-07-19 / commit: feat: publish farm content batch）

**全 36 件を公開済み**（`published: true`・`verifiedAt: 2026-07-19`・`officialSources` 付き）。既存記事 `farm-finding` / `farm-second-visa` と second-visa ハブ（`second-visa-guide` / `88-day-calculation` / `six-month-specified-work` / `specified-work-industries`）へ `relatedSlugs` で相互リンク済み。統合・リダイレクトなし。以下は公開した slug 一覧です。

- `farm-season-calendar` — オーストラリア農作物シーズンカレンダー｜州・月・作物別 _(優先度 P0、意図: database)_
- `harvest-trail-guide` — Harvest Trailでファーム求人を探す方法 _(優先度 P0、意図: how-to)_
- `piecework-vs-hourly` — 歩合制と時給制の違い｜Pieceworkの最低保証と確認事項 _(優先度 P0、意図: legal)_
- `farm-payslip-evidence` — セカンドビザ用の証拠書類｜Payslip・銀行明細・日数記録 _(優先度 P0、意図: checklist)_
- `specified-work-postcodes` — セカンドビザ対象地域・郵便番号の確認方法 _(優先度 P0、意図: how-to)_
- `farm-employer-verification` — ファーム・雇用主がセカンド対象か確認する方法 _(優先度 P0、意図: risk)_
- `farm-labour-hire-contractors` — コントラクター・Labour Hire経由で働く注意点 _(優先度 P0、意図: risk)_
- `farm-accommodation-guide` — ファームの宿・ワーカーズアコモデーションの確認事項 _(優先度 P0、意図: housing)_
- `farm-transport-car` — ファームに車は必要？送迎・相乗り・車なしの探し方 _(優先度 P0、意図: transport)_
- `farm-work-clothing` — ファームの服装完全ガイド｜暑さ・寒さ・雨・薬品対策 _(優先度 P0、意図: safety)_
- `farm-heat-sun-safety` — ファームの熱中症・紫外線対策 _(優先度 P0、意図: safety)_
- `farm-chemical-safety` — 農薬・薬品を扱う作業の安全確認 _(優先度 P1、意図: safety)_
- `farm-weather-no-work` — 雨・天候で仕事が休みになる場合の収入対策 _(優先度 P1、意図: finance)_
- `farm-job-english` — ファームで使う英語フレーズ｜作業指示・体調・給与確認 _(優先度 P1、意図: language)_
- `crop-blueberry` — ブルーベリーファームの仕事内容・シーズン・稼ぎ方 _(優先度 P2、意図: crop-guide)_
- `crop-strawberry` — いちごファームの仕事内容・シーズン・服装 _(優先度 P2、意図: crop-guide)_
- `crop-grape` — ぶどう・ワイナリーの仕事｜Picking・Pruning・Cellar _(優先度 P2、意図: crop-guide)_
- `crop-apple-cherry` — りんご・チェリーの仕事｜シーズンと梯子作業 _(優先度 P2、意図: crop-guide)_
- `crop-citrus` — オレンジ・マンダリンなど柑橘ファームの仕事 _(優先度 P3、意図: crop-guide)_
- `crop-mango-banana` — マンゴー・バナナファームの仕事と注意点 _(優先度 P2、意図: crop-guide)_
- `crop-avocado` — アボカドファームの仕事内容とシーズン _(優先度 P3、意図: crop-guide)_
- `crop-tomato-capsicum` — トマト・カプシカムの仕事｜温室・屋外・Packing _(優先度 P3、意図: crop-guide)_
- `crop-broccoli-broccolini` — ブロッコリー・ブロッコリーニの仕事｜Picking・Bunching・Packing _(優先度 P1、意図: crop-guide)_
- `farm-packing-shed` — Packing Shedの仕事｜選別・包装・品質管理 _(優先度 P1、意図: role-guide)_
- `meat-processing-specified-work` — 食肉加工の仕事とSpecified Workの確認ポイント _(優先度 P2、意図: role-guide)_
- `construction-specified-work` — 建設業でセカンドビザを狙う場合の条件 _(優先度 P1、意図: legal)_
- `disaster-recovery-specified-work` — 災害復旧作業でSpecified Workになる条件 _(優先度 P2、意図: legal)_
- `region-gatton-lockyer` — ガトン・ロッキヤーバレーのファーム仕事・生活ガイド _(優先度 P0、意図: area-farm)_
- `region-bundaberg-farm` — バンダバーグのファーム仕事・生活ガイド _(優先度 P1、意図: area-farm)_
- `region-stanthorpe-farm` — スタンソープのファーム仕事・生活ガイド _(優先度 P1、意図: area-farm)_
- `region-bowen-ayr-farm` — ボーエン・エアのファーム仕事ガイド _(優先度 P2、意図: area-farm)_
- `region-mareeba-atherton-farm` — マリーバ・アサートン高原のファームガイド _(優先度 P2、意図: area-farm)_
- `region-mildura-farm` — ミルデューラのファーム仕事・生活ガイド _(優先度 P2、意図: area-farm)_
- `region-shepparton-farm` — シェパートンのファーム仕事ガイド _(優先度 P2、意図: area-farm)_
- `region-griffith-farm` — グリフィスのファーム仕事ガイド _(優先度 P2、意図: area-farm)_
- `region-tasmania-farm` — タスマニアのファーム仕事・シーズンガイド _(優先度 P2、意図: area-farm)_

### gig-work — ギグワーク・副業 (12件) ← 次のカテゴリ

- `gig-work-comparison` — オーストラリアのギグワーク比較｜配達・清掃・便利屋・フリーランス _(優先度 P0、意図: comparison)_
- `delivery-abn-tax` — Uber Eats・DoorDashのABN・税金・Superの扱い _(優先度 P0、意図: tax)_
- `delivery-insurance` — フードデリバリーの保険｜自転車・車・スクーターの注意点 _(優先度 P0、意図: insurance)_
- `delivery-vehicle-comparison` — 配達は自転車・E-bike・車のどれがいい？費用比較 _(優先度 P1、意図: comparison)_
- `delivery-expenses-logbook` — 配達員の経費と走行記録｜確定申告に備える方法 _(優先度 P1、意図: tax)_
- `delivery-peak-hours` — 配達で稼ぎやすい時間帯・天候・エリアの考え方 _(優先度 P1、意図: strategy)_
- `delivery-safety` — 夜間配達・交通事故・盗難を防ぐ安全ガイド _(優先度 P0、意図: safety)_
- `delivery-account-deactivation` — 配達アカウント停止の主な原因と異議申立ての準備 _(優先度 P2、意図: problem-solving)_
- `airtasker-guide` — Airtaskerで仕事を受ける方法｜ABN・手数料・安全 _(優先度 P2、意図: platform-guide)_
- `freelance-it-australia` — ワーホリ中にIT・Webのフリーランス案件を取る方法 _(優先度 P1、意図: career)_
- `japan-remote-work-tax` — 日本のリモート副業を豪州から行う場合の税金と契約 _(優先度 P1、意図: tax)_
- `public-liability-insurance` — Sole TraderのPublic Liability Insurance基礎 _(優先度 P2、意図: insurance)_

### housing — 家探し・賃貸 (19件) ← ✅ 完了（2026-07-19 / commit: feat: complete housing content batch）

**全19件を公開済み**（既存公開2件を含め housing ハブ全21件が最終ステータス確定）。マイクロバッチ3件
（`housing-platforms-comparison` / `housing-message-templates` / `inspection-checklist`）＋本バッチ16件を
すべて `published: true`・`verifiedAt: 2026-07-19`・`officialSources` 付きで公開。統合・リダイレクトなし。
以下は公開した19 slug 一覧です。

- `housing-platforms-comparison` — Flatmates・Facebook・Gumtreeなど家探しサービス比較 _(優先度 P0、意図: comparison)_
- `housing-message-templates` — シェアハウス応募メッセージの英語テンプレート _(優先度 P0、意図: template)_
- `inspection-checklist` — シェアハウス内見チェックリスト｜部屋・設備・同居人 _(優先度 P0、意図: checklist)_
- `bond-rules-overview` — Bondの仕組みと正規の預け方｜州ごとの確認先 _(優先度 P0、意図: legal)_
- `condition-report-guide` — 入居時Condition Reportと写真記録の残し方 _(優先度 P0、意図: how-to)_
- `rental-agreement-share-house` — シェアハウス契約書で確認する項目 _(優先度 P0、意図: checklist)_
- `rent-and-bills` — 家賃に光熱費込み？電気・ガス・水道・ネットの分担 _(優先度 P1、意図: finance)_
- `rent-increase-rules` — 家賃値上げを通知された場合の確認事項 _(優先度 P1、意図: legal)_
- `bond-refund-dispute` — Bondが返ってこない場合の対応手順 _(優先度 P0、意図: problem-solving)_
- `ending-tenancy-notice` — 退去Noticeの出し方と英語メッセージ _(優先度 P0、意図: template)_
- `find-replacement-tenant` — 後任入居者を探す方法と名義変更の注意 _(優先度 P2、意図: how-to)_
- `share-house-rules` — シェアハウスのルール｜掃除・騒音・ゲスト・共有物 _(優先度 P1、意図: guide)_
- `share-house-conflict` — シェアメイト・オーナーとのトラブル対処 _(優先度 P1、意図: problem-solving)_
- `short-term-accommodation` — 長期の家が決まるまでの短期滞在先比較 _(優先度 P1、意図: comparison)_
- `hostel-guide` — バックパッカーホステルの選び方｜安全・荷物・長期割引 _(優先度 P2、意図: guide)_
- `homestay-guide` — ホームステイのメリット・費用・ルール _(優先度 P3、意図: guide)_
- `couple-room-housing` — カップル部屋の探し方｜家賃・応募文・注意点 _(優先度 P1、意図: how-to)_
- `regional-farm-housing` — 地方・ファーム地域の家探し｜車・送迎・仕事とのセット契約 _(優先度 P1、意図: housing)_
- `rental-scam-examples` — 家探し詐欺の典型例｜内見前送金・偽契約・身分証悪用 _(優先度 P0、意図: security)_

### transport — 交通・車・免許 (22件)

- `city-public-transport-comparison` — 主要都市の公共交通比較｜カード・タッチ決済・運賃 _(優先度 P1、意図: comparison)_
- `used-car-inspection-checklist` — 中古車の現車確認チェックリスト｜試乗・整備記録・故障 _(優先度 P0、意図: checklist)_
- `ppsr-check-guide` — PPSRチェックの方法｜盗難車・ローン残債を確認 _(優先度 P0、意図: how-to)_
- `rego-ctp-rwc` — Rego・CTP・Roadworthy/Safety Certificateの違い _(優先度 P0、意図: guide)_
- `vehicle-transfer-by-state` — 中古車の名義変更｜州別の手続きと期限 _(優先度 P0、意図: how-to)_
- `car-insurance-comparison` — CTP・Third Party・Comprehensive保険の違い _(優先度 P0、意図: comparison)_
- `roadside-assistance` — ロードサービス比較と呼び方｜故障・バッテリー・パンク _(優先度 P1、意図: comparison)_
- `car-breakdown-guide` — 車が故障したときの対応｜安全確保・牽引・修理 _(優先度 P0、意図: problem-solving)_
- `flat-tyre-guide` — タイヤがパンクしたとき｜スペアタイヤ・修理・交換 _(優先度 P1、意図: problem-solving)_
- `mechanic-tyre-shop-english` — 整備工場・タイヤショップで使う英語フレーズ _(優先度 P1、意図: language)_
- `fuel-saving-apps` — ガソリン価格を比較して節約する方法 _(優先度 P2、意図: finance)_
- `tolls-linkt-guide` — 有料道路・Toll・Linktの支払いと未払い対策 _(優先度 P0、意図: how-to)_
- `parking-fines-guide` — 駐車ルールと罰金｜標識の読み方・異議申立て _(優先度 P1、意図: legal)_
- `car-accident-guide` — 交通事故に遭ったときの対応｜情報交換・警察・保険 _(優先度 P0、意図: safety)_
- `rent-a-car-guide` — レンタカー・長期レンタカーの契約チェックリスト _(優先度 P0、意図: checklist)_
- `sell-car-before-leaving` — 帰国前に車を売る方法｜広告・RWC・名義変更 _(優先度 P1、意図: how-to)_
- `japanese-licence-state-rules` — 日本の免許で運転できる期間｜州別ルールの確認方法 _(優先度 P0、意図: legal)_
- `convert-japanese-licence` — 日本の免許から豪州免許へ切り替える方法｜州別入口 _(優先度 P0、意図: how-to)_
- `motorcycle-licence-australia` — 日本のバイク免許をオーストラリアで使う・切り替える方法 _(優先度 P2、意図: how-to)_
- `digital-driver-licence` — デジタル運転免許証の登録と本人確認エラー対策 _(優先度 P2、意図: how-to)_
- `e-bike-e-scooter-rules` — E-bike・電動キックボードの交通ルールとヘルメット _(優先度 P1、意図: legal)_
- `remote-driving-safety` — アウトバック・地方を運転する前の安全準備 _(優先度 P1、意図: safety)_

### health — 健康・保険・安全 (17件)

- `gp-urgent-care-emergency` — GP・Urgent Care・Emergencyの使い分け _(優先度 P0、意図: comparison)_
- `overseas-insurance-claim` — 海外保険を使う流れ｜キャッシュレス・立替・請求書類 _(優先度 P0、意図: how-to)_
- `pharmacy-guide` — オーストラリアの薬局（Pharmacy）の使い方 _(優先度 P0、意図: how-to)_
- `common-medicines-australia` — 風邪・痛み・アレルギーなど一般薬の探し方 _(優先度 P1、意図: health)_
- `dental-care-australia` — 歯医者に行く方法と費用・保険の確認 _(優先度 P1、意図: health)_
- `eye-care-optometrist` — 眼鏡・コンタクト・Optometristの利用方法 _(優先度 P2、意図: health)_
- `sexual-health-clinics` — 性の健康・検査・避妊の相談先 _(優先度 P1、意図: health)_
- `womens-health-guide` — 女性の健康ガイド｜生理用品・GP・検査・相談 _(優先度 P1、意図: health)_
- `ambulance-costs-insurance` — 救急車は有料？州別の費用と保険確認 _(優先度 P0、意図: current-info)_
- `sunburn-skin-cancer-prevention` — 紫外線・日焼け・皮膚がん対策｜豪州のSun Safety _(優先度 P0、意図: safety)_
- `heatstroke-guide` — 熱中症の症状と応急対応｜仕事・旅行・ファーム _(優先度 P0、意図: safety)_
- `bites-stings-wildlife` — 虫・クラゲ・ヘビ・クモに刺された／噛まれた場合 _(優先度 P1、意図: safety)_
- `food-allergy-eating-out` — 食物アレルギーを英語で伝える方法 _(優先度 P1、意図: language)_
- `work-injury-medical` — 仕事中の怪我で病院へ行く流れと書類 _(優先度 P1、意図: health)_
- `bushfire-safety` — 山火事（Bushfire）への備えと警報アプリ _(優先度 P0、意図: disaster)_
- `flood-cyclone-safety` — 洪水・サイクロンへの備え｜クイーンズランド・北部 _(優先度 P0、意図: disaster)_
- `heatwave-severe-weather` — 熱波・雷雨・雹など悪天候の情報確認方法 _(優先度 P1、意図: disaster)_

### daily-life — 日常生活・食事・買い物 (21件)

- `supermarket-comparison` — Coles・Woolworths・ALDI比較｜安く買うコツ _(優先度 P0、意図: comparison)_
- `grocery-saving-tips` — オーストラリアの食費を節約する方法｜特売・冷凍・自炊 _(優先度 P0、意図: finance)_
- `asian-japanese-groceries` — 日本食材・アジア食材を買える場所と代用品 _(優先度 P1、意図: guide)_
- `cheap-meal-prep` — ワーホリ向け安い作り置きレシピと1週間献立 _(優先度 P1、意図: food)_
- `australian-oven-guide` — オーストラリアのオーブン・コンロの使い方 _(優先度 P2、意図: how-to)_
- `food-storage-share-house` — シェアハウスでの食品保存・冷蔵庫ルール _(優先度 P2、意図: guide)_
- `tap-water-drinking` — オーストラリアの水道水は飲める？地域・災害時の確認 _(優先度 P2、意図: faq)_
- `shopping-surcharges-tipping` — カード手数料・日祝サーチャージ・チップの習慣 _(優先度 P0、意図: guide)_
- `alcohol-id-rules` — お酒を買う・飲むときの身分証とルール _(優先度 P1、意図: legal)_
- `laundry-guide` — シェアハウス・コインランドリーの使い方と洗剤 _(優先度 P2、意図: how-to)_
- `australia-clothing-seasons` — 都市・季節別の服装ガイド｜暑さ・寒暖差・雨 _(優先度 P0、意図: guide)_
- `buy-furniture-household-items` — 家具・生活用品を安く揃える方法｜Kmart・Marketplace・Op Shop _(優先度 P1、意図: comparison)_
- `op-shop-guide` — Op Shopの使い方｜服・家具・寄付 _(優先度 P3、意図: guide)_
- `post-office-courier` — Australia Postの使い方｜郵便・荷物・Parcel Locker _(優先度 P1、意図: how-to)_
- `library-guide` — 図書館を活用する方法｜無料Wi-Fi・印刷・英語学習 _(優先度 P1、意図: guide)_
- `gym-fitness-guide` — ジム契約の注意点｜週払い・解約・無料体験 _(優先度 P2、意図: checklist)_
- `haircut-barber-english` — 美容院・バーバーで使う英語と料金の見方 _(優先度 P3、意図: language)_
- `public-toilets-showers` — 無料トイレ・シャワー・給水場所を探す方法 _(優先度 P3、意図: guide)_
- `home-internet-guide` — シェアハウスのWi-Fi・ホームインターネット基礎 _(優先度 P2、意図: guide)_
- `online-scams-cybersecurity` — 偽SMS・求人詐欺・アカウント乗っ取り対策 _(優先度 P0、意図: security)_
- `phone-lost-stolen` — スマホを紛失・盗難された場合の対応 _(優先度 P1、意図: problem-solving)_

### english — 英語学習・会話 (13件)

- `australian-english-accent` — オーストラリア英語の発音・アクセントに慣れる方法 _(優先度 P1、意図: learning)_
- `australian-slang` — ワーホリでよく聞くオーストラリア英語・スラング _(優先度 P1、意図: reference)_
- `workplace-english` — 職場で使う英語フレーズ｜確認・報告・欠勤・シフト _(優先度 P0、意図: language)_
- `hospitality-english` — レストラン・カフェ接客英語フレーズ _(優先度 P1、意図: language)_
- `housing-english` — 家探し・内見・退去で使う英語フレーズ _(優先度 P0、意図: language)_
- `bank-tax-english` — 銀行・ATO・Superの問い合わせ英語 _(優先度 P1、意図: language)_
- `medical-english` — 病院・薬局で症状を伝える英語フレーズ _(優先度 P0、意図: language)_
- `car-trouble-english` — 車の故障・事故・修理で使う英語フレーズ _(優先度 P1、意図: language)_
- `phone-call-english` — 英語の電話が怖い人向け｜聞き返し・保留・予約 _(優先度 P1、意図: learning)_
- `email-message-templates` — ワーホリ生活の英文メール・SMSテンプレート集 _(優先度 P0、意図: template)_
- `listening-resources` — ワーホリ準備におすすめのリスニング教材と使い方 _(優先度 P2、意図: learning)_
- `language-exchange-meetup` — Language Exchange・Meetupで友達と英語環境を作る方法 _(優先度 P2、意図: social)_
- `ielts-pte-after-wh` — IELTS・PTEは必要？学生・就労・永住を考える人の試験選び _(優先度 P2、意図: comparison)_

### area — 都市・州・地域ガイド (23件)

- `area-gold-coast` — ゴールドコースト エリアガイド｜仕事・家賃・交通・ビーチ生活 _(優先度 P0、意図: area-guide)_
- `area-perth` — パース エリアガイド｜仕事・家賃・車・西海岸生活 _(優先度 P0、意図: area-guide)_
- `area-cairns` — ケアンズ エリアガイド｜観光業・気候・ファームへの移動 _(優先度 P0、意図: area-guide)_
- `area-canberra` — キャンベラ エリアガイド｜仕事・家賃・交通 _(優先度 P2、意図: area-guide)_
- `area-hobart` — ホバート エリアガイド｜タスマニアの仕事と暮らし _(優先度 P2、意図: area-guide)_
- `area-darwin` — ダーウィン エリアガイド｜乾季・雨季・仕事・北部条件 _(優先度 P1、意図: area-guide)_
- `area-sunshine-coast` — サンシャインコースト エリアガイド _(優先度 P2、意図: area-guide)_
- `area-toowoomba-gatton` — トゥーンバ・ガトン エリアガイド｜地方生活・ファーム・車 _(優先度 P0、意図: area-guide)_
- `area-bundaberg` — バンダバーグ エリアガイド｜ファーム・家・交通 _(優先度 P1、意図: area-guide)_
- `area-stanthorpe` — スタンソープ エリアガイド｜寒さ・果樹・生活 _(優先度 P2、意図: area-guide)_
- `area-townsville` — タウンズビル エリアガイド｜北QLDの仕事と暮らし _(優先度 P2、意図: area-guide)_
- `area-newcastle` — ニューカッスル エリアガイド｜シドニー外の仕事と家賃 _(優先度 P2、意図: area-guide)_
- `area-wollongong` — ウーロンゴン エリアガイド｜大学・ビーチ・通勤 _(優先度 P3、意図: area-guide)_
- `area-mildura` — ミルデューラ エリアガイド｜ファームと地方生活 _(優先度 P2、意図: area-guide)_
- `area-shepparton` — シェパートン エリアガイド｜農業地域での生活 _(優先度 P2、意図: area-guide)_
- `area-griffith` — グリフィス エリアガイド｜農業・食品加工・生活 _(優先度 P2、意図: area-guide)_
- `state-nsw-guide` — ニューサウスウェールズ州ガイド｜制度・都市・仕事 _(優先度 P2、意図: state-guide)_
- `state-vic-guide` — ビクトリア州ガイド｜制度・都市・仕事 _(優先度 P2、意図: state-guide)_
- `state-qld-guide` — クイーンズランド州ガイド｜制度・都市・ファーム _(優先度 P1、意図: state-guide)_
- `state-wa-guide` — 西オーストラリア州ガイド｜制度・都市・地方移動 _(優先度 P2、意図: state-guide)_
- `state-sa-guide` — 南オーストラリア州ガイド｜制度・都市・農業 _(優先度 P3、意図: state-guide)_
- `state-tas-guide` — タスマニア州ガイド｜制度・都市・ファーム _(優先度 P2、意図: state-guide)_
- `state-nt-guide` — ノーザンテリトリーガイド｜気候・仕事・安全 _(優先度 P2、意図: state-guide)_

### travel — 旅行・ロードトリップ (9件)

- `australia-travel-seasons` — オーストラリア旅行のベストシーズン｜地域別の気候 _(優先度 P1、意図: travel)_
- `domestic-flight-guide` — 国内線を安く予約する方法｜荷物・空港・変更条件 _(優先度 P1、意図: travel)_
- `australia-road-trip-guide` — オーストラリアロードトリップの計画と安全 _(優先度 P1、意図: travel)_
- `camping-free-camps` — キャンプ・Free Campの探し方とルール _(優先度 P2、意図: travel)_
- `east-coast-route` — 東海岸周遊モデルルート｜シドニーからケアンズ _(優先度 P2、意図: travel)_
- `great-barrier-reef-guide` — グレートバリアリーフ旅行ガイド｜ケアンズ・周辺島 _(優先度 P3、意図: travel)_
- `uluru-guide` — ウルル旅行ガイド｜アクセス・費用・文化への配慮 _(優先度 P3、意図: travel)_
- `tasmania-trip-guide` — タスマニア周遊ガイド｜車・日数・季節 _(優先度 P3、意図: travel)_
- `public-holiday-travel` — 祝日・スクールホリデーの旅行混雑と料金対策 _(優先度 P2、意図: travel)_

### community — 友達・コミュニティ (6件)

- `make-friends-australia` — ワーホリで友達を作る方法｜学校・職場・Meetup・趣味 _(優先度 P1、意図: social)_
- `japanese-community-groups` — 日本人コミュニティ・Facebookグループの探し方と注意 _(優先度 P1、意図: social)_
- `homesickness-loneliness` — ホームシック・孤独への現実的な対処法 _(優先度 P1、意図: wellbeing)_
- `culture-shock-australia` — オーストラリア生活のカルチャーショックと慣れ方 _(優先度 P2、意図: social)_
- `dating-safety-australia` — 海外での出会い・デーティングアプリの安全対策 _(優先度 P2、意図: safety)_
- `volunteering-guide` — ボランティアの探し方｜英語・友達・地域参加 _(優先度 P3、意図: social)_

### return-home — 帰国準備・次のキャリア (12件)

- `leaving-australia-checklist` — 帰国前チェックリスト｜仕事・家・車・税金・Super _(優先度 P0、意図: checklist)_
- `final-pay-before-leaving` — 帰国前に確認するFinal Pay・未払い給与・有給 _(優先度 P0、意図: finance)_
- `early-tax-return-departing` — 年度途中で帰国する場合のタックスリターン _(優先度 P1、意図: tax)_
- `dasp-before-after-leaving` — DASP申請はいつする？出国・ビザ失効・必要書類 _(優先度 P0、意図: how-to)_
- `close-services-before-leaving` — 帰国前に解約・変更するサービス一覧 _(優先度 P1、意図: checklist)_
- `bond-refund-before-leaving` — 帰国前の退去・Bond返金を間に合わせる方法 _(優先度 P1、意図: housing)_
- `sell-car-timeline` — 帰国前の車売却スケジュール｜いつ出品する？ _(優先度 P1、意図: transport)_
- `send-luggage-to-japan` — オーストラリアから日本へ荷物を送る方法 _(優先度 P2、意図: comparison)_
- `keep-australian-bank-account` — 帰国後も豪州銀行口座を残す場合の注意点 _(優先度 P1、意図: finance)_
- `use-wh-experience-in-resume` — ワーホリ経験を帰国後の履歴書・面接で伝える方法 _(優先度 P1、意図: career)_
- `reverse-culture-shock` — 帰国後の逆カルチャーショックとキャリア再始動 _(優先度 P2、意図: wellbeing)_
- `australian-police-check-after-return` — 帰国後に豪州の無犯罪証明が必要になった場合 _(優先度 P3、意図: how-to)_

### news — ニュース・制度更新 (6件)

- `news-visa-changes-template` — ビザ制度変更ニュース用テンプレート _(優先度 P0、意図: news-template)_
- `news-minimum-wage-template` — 最低賃金・Award改定ニュース用テンプレート _(優先度 P0、意図: news-template)_
- `news-tax-super-template` — 税率・Super・タックスリターン変更ニュース用テンプレート _(優先度 P0、意図: news-template)_
- `news-visa-fee-template` — ビザ申請料改定ニュース用テンプレート _(優先度 P0、意図: news-template)_
- `news-disaster-alert-template` — 洪水・山火事・サイクロン情報用テンプレート _(優先度 P0、意図: news-template)_
- `news-scam-alert-template` — ワーホリ向け詐欺・悪質求人注意喚起テンプレート _(優先度 P1、意図: news-template)_

### tools — ツール・テンプレート (14件)

- `tool-arrival-checklist` — 到着後チェックリスト（保存・完了管理） _(優先度 P0、意図: interactive-tool)_
- `tool-packing-checklist` — 持ち物チェックリスト（都市・季節・仕事別） _(優先度 P1、意図: interactive-tool)_
- `tool-88-day-calculator` — セカンドビザ88日カレンダー・勤務記録ツール _(優先度 P0、意図: interactive-tool)_
- `tool-specified-work-region-checker` — Specified Work対象地域・郵便番号確認ツール _(優先度 P0、意図: interactive-tool)_
- `tool-farm-season-calendar` — 州・地域・作物別ファームシーズン検索 _(優先度 P0、意図: interactive-tool)_
- `tool-weekly-budget-calculator` — 週間生活費・必要貯金シミュレーター _(優先度 P1、意図: interactive-tool)_
- `tool-resume-checklist` — 英文レジュメ自己チェックツール _(優先度 P1、意図: interactive-tool)_
- `tool-job-application-tracker` — 仕事応募管理表｜応募日・連絡・面接・結果 _(優先度 P2、意図: interactive-tool)_
- `tool-farm-evidence-tracker` — セカンドビザ証拠書類トラッカー _(優先度 P0、意図: interactive-tool)_
- `tool-return-home-checklist` — 帰国前チェックリスト（期限通知つき） _(優先度 P1、意図: interactive-tool)_
- `download-resume-template` — 英文レジュメテンプレート（職種別） _(優先度 P0、意図: download)_
- `download-cover-letter-template` — カバーレターテンプレート集 _(優先度 P1、意図: download)_
- `download-housing-inspection-checklist` — シェアハウス内見チェックリストPDF/印刷版 _(優先度 P1、意図: download)_
- `download-emergency-card` — 緊急連絡先カード｜000・保険・領事館・本人情報 _(優先度 P1、意図: download)_

