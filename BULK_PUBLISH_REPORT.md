# BULK_PUBLISH_REPORT

生成日: 2026-07-16
ブランチ: main

## 0. 重要な方針判断（透明性のための明記）

マスタープランは「できる限り多くの計画コンテンツを1サイクルで公開する」ことを求めています。
一方、計画コンテンツ338件の**大半は YMYL（Your Money or Your Life: お金・ビザ・税・健康・法）**
に該当し、各記事のタイトルが問う主要な数値・料金・要件・期限・法規則を、**記事単位で最新の
公式一次情報に照合**しなければ、公開10条件（特に「現在の数値はすべて公式一次情報で裏付ける」
「一般的なAI要約を出さない」）を満たせません。

338件すべてに対する記事単位の公式照合は本サイクル1回では責任を持って完了できないため、
マスタープラン自身の逃げ道（"maximum valid publication, **not forced publication**"、
「検証不能なコンテンツは review/planned のまま残す」）に従い、次の方針で実行しました:

- **完全な基盤整備**（型・コンポーネント・検証・リダイレクト・レジストリ）
- **監査・統合計画・リダイレクト実装**
- **公式照合を実際に完了した限定セットのみ公開**（新規4 + 既存強化4）
- 残り328件は `BULK_PUBLISH_REMAINING.md` に slug 単位で記録し、未公開の理由を明示

**ページ数を増やす目的だけの公開は行っていません。**

## 1. 公開・更新した記事

### 新規公開（7件）
すべて `verifiedAt: 2026-07-16`、`officialSources` 付き、冒頭でタイトルの問いに直接回答、
`keyFacts`/`steps`/`tips`/`warnings`/`faqs`/`sources`/`relatedSlugs` を完備。

| slug | URL | ハブ | 優先度 |
| --- | --- | --- | --- |
| `working-holiday-budget` | /guides/working-holiday-budget | start-here | P0 |
| `working-holiday-timeline` | /guides/working-holiday-timeline | start-here | P0 |
| `first-30-days-roadmap` | /guides/first-30-days-roadmap | start-here | P0 |
| `whm-tax-rates` | /guides/whm-tax-rates | tax | P0 |
| `88-day-calculation` | /guides/88-day-calculation | farm | P0 |
| `specified-work-industries` | /guides/specified-work-industries | farm | P0 |
| `six-month-specified-work` | /guides/six-month-specified-work | farm | P0 |

> 追加バッチ（farm 3件）は、Department of Home Affairs の公式ページ
> 「Specified work」（ページ更新 2025-09-11、アクセス 2026-07-16）で、3か月=最低88暦日 /
> 6か月=最低179暦日、対象業種・数え方（フルタイム相当・悪天候の無給日は不算入・1暦日=最大1日）
> を実照合して作成。

### 既存記事の強化（4件）
`verifiedAt` + `officialSources` を付与し、`relatedSlugs` と `updatedAt` を更新。

| slug | URL |
| --- | --- |
| `visa-application` | /guides/visa-application |
| `second-visa-guide` | /guides/second-visa-guide |
| `visa-options` | /guides/visa-options |
| `tax-return-guide` | /guides/tax-return-guide |

詳細な照合内容は `SOURCE_VERIFICATION_REPORT.md` を参照。

### 追加バッチ 2/3: visa + preparation（2026-07-17、36件）

`visa` ハブ16件と `preparation` ハブ20件を、記事単位で公式一次情報に照合して新規公開。
すべて `verifiedAt: 2026-07-17`、`officialSources`（`accessedAt: 2026-07-17`）付き、
冒頭でタイトルの問いに回答、`keyFacts`/`steps`/`tips`/`warnings`/`faqs`/`sources`/`relatedSlugs` を完備。

- **visa（16件）:** `working-holiday-eligibility`, `visa-417-vs-462`, `visa-cost-processing-time`,
  `visa-proof-of-funds`, `visa-health-examination`, `visa-police-certificate`,
  `visa-after-passport-renewal`, `visa-grant-letter`, `visa-first-entry-deadline`,
  `visa-six-month-work-limitation`, `visa-study-limit`, `visa-travel-reentry`,
  `bridging-visa-basics`, `visa-refusal-cancellation`, `vevo-check`, `registered-migration-agent`
- **preparation（20件）:** `passport-validity-renewal`, `japan-moving-out-procedures`,
  `japan-tax-residency-before-departure`, `international-driving-permit`, `naati-licence-translation`,
  `pre-departure-health-check`, `medication-customs`, `vaccinations-before-australia`,
  `flight-booking-guide`, `arrival-airport-guide`, `temporary-accommodation-before-arrival`,
  `cards-and-cash-before-departure`, `keep-japanese-phone-number`, `mail-forwarding-and-address`,
  `document-backup`, `australia-customs-quarantine`, `baggage-packing-strategy`, `power-plug-voltage`,
  `farm-work-packing`, `send-luggage-to-australia`
- **統合/リダイレクト:** このバッチでは新規の全面重複がなく、統合・リダイレクトは発生せず
  （近接トピックは `relatedSlugs` で相互接続）。`content-manifest.yaml` の該当36件を
  `status: planned` → `status: published` に更新。
- **照合出典:** immi.homeaffairs.gov.au（ビザ）、ABF/DAFF（税関・検疫）、TGA（薬）、
  health.gov.au（予防接種）、外務省・国税庁・日本年金機構・日本郵便・警察庁・NAATI 等。
  詳細は `SOURCE_VERIFICATION_REPORT.md` の「バッチ2/3」。

### 追加バッチ 4/5: arrival + money（2026-07-18、20件）

`arrival` ハブ10件と `money` ハブ10件を、記事単位で公式一次情報に照合して新規公開。
すべて `verifiedAt: 2026-07-18`、`officialSources`（`accessedAt: 2026-07-18`）付き、
冒頭でタイトルの問いに回答、`keyFacts`/`steps`/`tips`/`warnings`/`faqs`/`sources`/`relatedSlugs` を完備。

- **arrival（10件）:** `australia-airport-arrival-flow`, `airport-to-city`, `mygov-account-guide`,
  `digital-id-guide`, `proof-of-address`, `address-change-checklist`, `australian-id-points`,
  `essential-australia-apps`, `consular-registration`, `first-week-shopping`
- **money（10件）:** `australia-living-cost`, `weekly-budget-template`, `debit-credit-cards`,
  `australia-atm-fees`, `wise-vs-bank-transfer`, `send-money-to-japan`, `joint-account-couples`,
  `emergency-fund`, `bank-scam-security`, `close-bank-account-before-leaving`
- **統合/リダイレクト:** このバッチでは新規の全面重複がなく、統合・リダイレクトは発生せず。
  `wise-vs-bank-transfer`（比較意図）は既存 `money-transfer-wise`（Wise 送金の手順）と
  意図が異なるため統合せず相互リンクで接続。`content-manifest.yaml` の該当20件を
  `status: planned` → `status: published` に更新。既存記事（`arrival-checklist`,
  `first-30-days-roadmap`, `opening-hours-holidays`, `money-transfer-wise`, `bank-account-guide`）に
  新記事への内部リンクを追加し孤立を防止。
- **照合出典:** ABF SmartGate、Services Australia（myGov）、ATO/myID（Digital ID）、
  Fair Work（最低賃金 2026-07-01: $26.44/h・$1,004.90/週）、Home Affairs（WHV 417 費用 AUD 840）、
  Scamwatch/ReportCyber/IDCARE（詐欺対策）、外務省（在留届・たびレジ）等。
  詳細は `SOURCE_VERIFICATION_REPORT.md` の「バッチ4/5」。

### 追加バッチ 6: tax（2026-07-18、17件）

`tax` ハブ17件（税・ABN/Sole Trader・Super）を、記事単位で公式一次情報に照合して新規公開。
すべて `verifiedAt: 2026-07-18`、`officialSources`（`accessedAt: 2026-07-18`）付き、
冒頭でタイトルの問いに回答、`keyFacts`/`steps`/`tips`/`warnings`/`faqs`/`sources`/`relatedSlugs` を完備。
記事は該当カテゴリモジュール（`lib/content/articles/{tfn,super,abn,tax-return}.ts`）にのみ追加
（`mockData.ts` へは追加せず）。

- **税・手続き（9件、tax-return/tfn）:** `tax-residency-australia`, `tfn-declaration-form`,
  `payslip-guide`, `income-statement-tax-ready`, `mygov-ato-linking`, `tax-return-deductions`,
  `tax-return-multiple-jobs`, `tax-return-overseas-income`, `tax-agent-guide`
- **ABN/Sole Trader（7件、abn）:** `abn-eligibility`, `sole-trader-basics`, `contractor-vs-employee`,
  `invoice-template-australia`, `abn-record-keeping`, `gst-registration-basics`, `bas-basics`
- **Super（1件、super）:** `superannuation-basics`
- **統合/リダイレクト:** このバッチでは新規の全面重複がなく、統合・リダイレクトは発生せず。
  既存公開記事（`tfn-guide`, `tax-return-guide`, `tax-return-howto`, `whm-tax-rates`,
  `abn-guide`, `super-guide`, `dasp-refund`）とは検索意図が明確に異なるため統合せず、
  `relatedSlugs` で相互接続。`content-manifest.yaml` の該当17件を
  `status: planned` → `status: published` に更新。
- **照合出典:** ato.gov.au（Super Guarantee 12%（2025-07-01〜）、Payday Super（2026-07-01〜）、
  GST登録基準 $75,000・ライドソーシングは全件登録・21日以内、TFN declaration、Income Statement/
  Tax ready、myGov連携、控除、居住性）、fairwork.gov.au（Payslip 1営業日以内・記載項目）、
  abr.gov.au（ABN無料申請）、tpb.gov.au（Tax Agent登録）。
  詳細は `SOURCE_VERIFICATION_REPORT.md` の「バッチ6」。

### 追加バッチ 7: jobs + qualifications（2026-07-18、35件）

`jobs` ハブ26件と `qualifications` ハブ9件（`category: "jobs"` + `hub: "qualifications"`）の
計35件を、記事単位で公式一次情報に照合して新規公開。すべて `verifiedAt: 2026-07-18`、
`officialSources`（`accessedAt: 2026-07-18`）付き、冒頭でタイトルの問いに回答、
`keyFacts`/`steps`/`tips`/`warnings`/`faqs`/`sources`/`relatedSlugs` を完備。記事は
カテゴリモジュール（`lib/content/articles/jobs.ts`）にのみ追加（`mockData.ts` へは追加せず）。

- **仕事探し・応募（6件）:** `job-search-websites`, `facebook-job-groups`, `walk-in-resume`,
  `cover-letter-guide`, `job-reference-guide`, `job-application-follow-up`
- **労働条件・権利・問題解決（10件）:** `employment-contract-checklist`, `employment-types`,
  `award-rates-penalty-rates`, `unpaid-trial-rules`, `underpayment-unpaid-wages`, `cash-in-hand-jobs`,
  `workplace-injury-workers-comp`, `workplace-bullying-harassment`, `resignation-notice`, `termination-final-pay`
- **職種別ガイド（10件）:** `hospitality-jobs-guide`, `barista-job-guide`, `hotel-housekeeping-jobs`,
  `cleaning-jobs-guide`, `retail-jobs-guide`, `warehouse-jobs-guide`, `construction-jobs-guide`,
  `office-admin-jobs-guide`, `it-jobs-working-holiday`, `recruitment-agency-guide`
- **資格・ライセンス（9件、hub: qualifications）:** `rsa-state-guide`, `white-card-guide`,
  `food-safety-certificate`, `rcg-rsa-gaming`, `forklift-licence-guide`, `first-aid-cpr-guide`,
  `police-check-guide`, `working-with-children-check`, `barista-course-guide`
- **統合/リダイレクト:** このバッチでは新規の全面重複がなく、統合・リダイレクトは発生せず。
  既存公開記事（`jobs-guide`, `resume-guide`, `interview-guide`, `certifications`, `working-rights`）は
  概要・総論であり、35件は個別の探し方・労働問題の手順・資格別取得方法で意図が明確に異なるため
  統合せず `relatedSlugs` で相互接続。`content-manifest.yaml` の該当35件を
  `status: planned` → `status: published` に更新。**ファーム固有の就労記事（`farm-*`）は対象外**とし、
  支援的な内部リンクとしてのみ参照。
- **照合出典:** fairwork.gov.au（全国最低賃金 2026-07-01: $26.44/h・$1,004.90/週、Casual loading 25%、
  NES解雇予告、無給トライアル、Final pay、不当解雇21日、Pay Calculator、Independent contractors、
  Labour hire）、safeworkaustralia.gov.au / SafeWork NSW（High Risk Work Licence LF、White Card）、
  Liquor & Gaming NSW / OLGR（RSA・RCG）、NSW Food Authority / FSANZ（Food Safety）、
  acic.gov.au（National Police Check）、NSW OCG / Blue Card Services（WWCC）、training.gov.au（HLTAID009/011）。
  詳細は `SOURCE_VERIFICATION_REPORT.md` の「バッチ7」。

### 追加バッチ 8: housing マイクロバッチ（2026-07-19、3件）

`housing` ハブ3件を、記事単位で公式一次情報に照合して新規公開（マイクロバッチ運用）。
すべて `verifiedAt: 2026-07-19`、`officialSources`（`accessedAt: 2026-07-19`）付き、
冒頭でタイトルの問いに回答、`keyFacts`/`steps`/`tips`/`warnings`/`faqs`/`phrases`/`sources`/
`relatedSlugs` を完備。記事はカテゴリモジュール（`lib/content/articles/housing.ts`）にのみ
追加（`mockData.ts` へは追加せず）。

- **公開（3件）:** `housing-platforms-comparison`（家探しサービス比較）,
  `housing-message-templates`（英語応募テンプレート）, `inspection-checklist`（内見チェックリスト）
- **統合/リダイレクト:** なし。既存公開記事 `housing-guide`（総論）/ `share-house-finding`
  （探し方＋内見概要）とは検索意図が明確に異なる（比較・テンプレート・チェックリスト）ため
  統合せず、`relatedSlugs` で相互接続。既存2記事の `relatedSlugs` に新規3件を追記
  （内部リンク更新のみ）。`content-manifest.yaml` の該当3件を `status: planned` →
  `status: published` に更新。
- **照合出典:** Scamwatch（ACCC / National Anti-Scam Centre）、NSW Government「Renting a
  place to live」、Consumer Affairs Victoria「Renting」。詳細は `SOURCE_VERIFICATION_REPORT.md`
  の「housing マイクロバッチ」。
- **検証（マイクロバッチ範囲）:** `validate:articles`（ユニーク slug 208・重複0）、
  `tsc --noEmit` クリーン。変更 housing 記事の `relatedSlugs` は全て実在 slug に解決。
- **次の未完了 housing slug:** `bond-rules-overview`。

## 2. 統合とリダイレクト

計画（未公開）の重複トピック6件を既存公開記事へ統合し、308恒久リダイレクトを登録
（`lib/content/redirects.ts` → `next.config.ts`）。詳細は `CONTENT_MERGE_MAP.md`。

- `sim-esim-guide`, `mobile-carrier-comparison` → `sim-guide`
- `abn-application` → `abn-guide`
- `dasp-guide` → `dasp-refund`
- `find-lost-super` → `super-guide`
- `buy-used-car-guide` → `cars-guide`

公開中ページ同士の統合は行っていません（影響が大きいため提案のみ）。

## 3. 実装した基盤

- **型拡張:** `types/content.ts`（`ContentStatus` に `merged` 追加、`ManifestItem.mergedInto`、
  `OfficialSource.accessedAt`、`ContentItem` の `searchIntent`/`mergedInto`/`redirectFrom`）、
  `types/article.ts`（`hub`/`status`/`priority`/`verifiedAt`/`officialSources`/`searchIntent` 等）。
- **UIコンポーネント（`components/articles/`）:** `VerifiedDate`, `OfficialSourceBox`,
  `StateSpecificNotice`, `RequirementsChecklist`, `ComparisonTable`, `FeedbackRequestLink`,
  `RelatedArticles`。記事ページ（`app/guides/[slug]/page.tsx`）に verifiedAt・出典・関連記事・
  フィードバック導線を配線。
- **リダイレクト:** `lib/content/redirects.ts`（単一の情報源）+ `next.config.ts`。
- **検証拡張（`scripts/`）:** merged 状態の受理、`merged_into`/リダイレクトの整合
  （転送先が公開中・チェーン/ループなし・公開ページを覆わない）、`relatedSlugs` の
  内部リンク整合を追加。

## 4. 検証結果

| チェック | 結果 |
| --- | --- |
| コンテンツ検証（`npm run validate:content`） | エラー0 / 警告66 |
| 型チェック（`npx tsc --noEmit`） | エラー0 |
| コンテンツテスト（`npm run test:content`, node:test） | 5/5 パス |
| Lint（`npm run lint`） | エラー0 / 警告0 |
| ビルド（`npm run build`, Next.js 16.2.7 + TS） | 成功（farm バッチ 36 件を含む全 205 記事を prerender、バッチ8公開後） |

警告66の大半は、粒度の粗い検索意図クラスタの共食い候補（過検出）と、コードに存在するが
マニフェスト `existing_articles` 未登録である旨の情報提供です（`CONTENT_AUDIT.md` 参照）。

## 5. 非公開（review/planned のまま）

- 残り **174件** の計画コンテンツは未公開。slug 単位の一覧と理由は `BULK_PUBLISH_REMAINING.md`。
  （start-here 7件 + visa 16件 + preparation 20件 + arrival 10件 + money 10件 + tax 17件 + jobs 26件 + qualifications 9件 + farm 36件を公開済み。次バッチは gig-work ハブ。）
- 非公開コンテンツは公開一覧・サイトマップ・構造化データ・内部リンクに露出していません
  （`isPublishedArticle` により自動除外）。

## 6. リスクと注意

- **YMYL 断定の回避:** 公式照合が未完の数値・税率・期限は本サイクルで公開していません。
- **「88日/3 months」「DASP税率」** など未解決事項は `SOURCE_VERIFICATION_REPORT.md` に明記。
- 公開記事は一般的情報提供であり、個別の専門的アドバイスではない旨を全記事で表示。

## 7. デプロイ

- 変更はコミットして `main` にプッシュ。`*:Zone.Identifier` はコミット対象外。
- 次のサイクルでの拡張手順: `BULK_PUBLISH_REMAINING.md` の高優先度（P0）から、
  記事単位で公式照合 → `verifiedAt`/`officialSources` 付与 → `published: true` 化 →
  検証・ビルド通過を繰り返す。
