# BULK_PUBLISH_REMAINING

生成日: 2026-07-16（更新: 2026-07-18）

計画コンテンツ（planned）の残タスク一覧と、逐次公開の進捗を記録します。

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

**次のコンテンツバッチ: jobs（仕事探し・労働条件）ハブ 26 件**（下記「ハブ別の残タスク一覧」参照）。

## 進捗（2026-07-18 時点）

325件の計画記事を、ハブ単位のバッチで公式照合しながら順次公開しています。

- **公開済み合計: 80 件**（残り 245 件）
- **現在のカテゴリ: visa（完了）・preparation（完了）・arrival（完了）・money（完了）・tax（完了）**
- **次のカテゴリ: jobs（未着手・26件）**
- **最終検証: `validate:articles` OK（ユニーク slug 134・重複 0）、`validate:content` 0 error / 66 warning（cannibalization の想定内警告のみ）、`tsc --noEmit` クリーン、`eslint` クリーン、`test:content` 5/5 pass、`next build` 成功**
- **最終ビルド: `next build` 成功（tax バッチ 17 件を含む全 134 記事を prerender）**
- **変更ファイル: `lib/content/articles/{tfn,super,abn,tax-return}.ts`、`lib/content/manifest.generated.ts`（再生成）、`whv-guide-content-plan/content-manifest.yaml`、`CONTENT_MERGE_MAP.md`、`SOURCE_VERIFICATION_REPORT.md`、`BULK_PUBLISH_REPORT.md`、`BULK_PUBLISH_REMAINING.md`**

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

### jobs — 仕事探し・労働条件 (26件) ← 次のカテゴリ

- `job-search-websites` — SEEK・Indeed・Jora・Gumtreeの使い分け _(優先度 P0、意図: comparison)_
- `facebook-job-groups` — Facebookで仕事を探す方法｜求人グループと怪しい投稿の見分け方 _(優先度 P1、意図: how-to)_
- `walk-in-resume` — レジュメを直接配る方法｜時間帯・服装・英語フレーズ _(優先度 P0、意図: how-to)_
- `cover-letter-guide` — 英文カバーレターの書き方｜職種別テンプレート _(優先度 P1、意図: template)_
- `job-reference-guide` — Referenceの頼み方と書き方｜推薦者がいない場合 _(優先度 P1、意図: how-to)_
- `job-application-follow-up` — 応募後のFollow-upメッセージ例文 _(優先度 P1、意図: template)_
- `employment-contract-checklist` — 雇用契約書で確認する項目｜時給・雇用形態・勤務条件 _(優先度 P0、意図: checklist)_
- `employment-types` — Casual・Part-time・Full-timeの違い _(優先度 P0、意図: comparison)_
- `award-rates-penalty-rates` — Award RateとPenalty Rateの調べ方｜土日・祝日・夜間 _(優先度 P0、意図: legal)_
- `unpaid-trial-rules` — 無給トライアルは合法？Fair Workの考え方 _(優先度 P0、意図: legal)_
- `underpayment-unpaid-wages` — 給料未払い・最低賃金違反への対応手順 _(優先度 P0、意図: problem-solving)_
- `cash-in-hand-jobs` — Cash in Handの仕事は違法？税金と労働リスク _(優先度 P0、意図: risk)_
- `workplace-injury-workers-comp` — 仕事中に怪我をした場合｜報告・治療・Workers Compensation _(優先度 P0、意図: safety)_
- `workplace-bullying-harassment` — 職場のいじめ・差別・ハラスメントへの対処 _(優先度 P1、意図: safety)_
- `resignation-notice` — 仕事を辞める英語とNotice Period｜退職メッセージ例 _(優先度 P0、意図: template)_
- `termination-final-pay` — 解雇されたときの確認事項｜Final Payと権利 _(優先度 P1、意図: legal)_
- `hospitality-jobs-guide` — レストラン・カフェの仕事ガイド｜職種・英語・時給の見方 _(優先度 P1、意図: career)_
- `barista-job-guide` — バリスタの仕事を取る方法｜必要スキルとトライアル _(優先度 P2、意図: career)_
- `hotel-housekeeping-jobs` — ホテル・ハウスキーピングの仕事ガイド _(優先度 P1、意図: career)_
- `cleaning-jobs-guide` — クリーニングの仕事ガイド｜住宅・ホテル・商業施設 _(優先度 P2、意図: career)_
- `retail-jobs-guide` — リテール・販売の仕事ガイド｜接客英語と応募方法 _(優先度 P2、意図: career)_
- `warehouse-jobs-guide` — 倉庫・ピッキング・フォークリフトの仕事ガイド _(優先度 P1、意図: career)_
- `construction-jobs-guide` — 建設現場の仕事ガイド｜White Card・PPE・求人 _(優先度 P1、意図: career)_
- `office-admin-jobs-guide` — オフィス・事務職を探す方法｜英語・PCスキル・派遣会社 _(優先度 P2、意図: career)_
- `it-jobs-working-holiday` — ワーホリでIT職を探す方法｜英文職務経歴・LinkedIn・契約形態 _(優先度 P1、意図: career)_
- `recruitment-agency-guide` — 人材紹介・派遣会社の使い方｜登録からシフトまで _(優先度 P1、意図: how-to)_

### qualifications — 資格・ライセンス (9件)

- `rsa-state-guide` — RSAは州ごとに違う｜取得方法・相互承認・更新 _(優先度 P0、意図: qualification)_
- `white-card-guide` — White Cardの取得方法｜オンライン可否と州ごとの注意 _(優先度 P0、意図: qualification)_
- `food-safety-certificate` — Food Safety Certificateは必要？飲食店の資格ガイド _(優先度 P2、意図: qualification)_
- `rcg-rsa-gaming` — RCG/RSGとは？バー・クラブ・カジノで必要な資格 _(優先度 P2、意図: qualification)_
- `forklift-licence-guide` — フォークリフト免許の取得方法と倉庫求人 _(優先度 P2、意図: qualification)_
- `first-aid-cpr-guide` — First Aid・CPR資格の選び方と有効期限 _(優先度 P2、意図: qualification)_
- `police-check-guide` — National Police Checkの取り方｜仕事応募で必要な場合 _(優先度 P1、意図: qualification)_
- `working-with-children-check` — WWCC/Blue Cardなど子ども関連チェックの州別概要 _(優先度 P2、意図: qualification)_
- `barista-course-guide` — バリスタコースは受けるべき？費用と選び方 _(優先度 P3、意図: qualification)_

### farm — ファーム・Specified Work (36件)

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

### gig-work — ギグワーク・副業 (12件)

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

### housing — 家探し・賃貸 (19件)

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

