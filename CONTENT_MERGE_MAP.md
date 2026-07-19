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

## 4. リダイレクト運用ルール

- `to`（転送先）は必ず公開中（`published`）の実記事 slug。
- チェーン（A→B→C）禁止。`to` を別の `from` にしない。
- 308（恒久）。
- 追加・変更は `lib/content/redirects.ts` のみを編集し、ビルド時検証を通すこと。
