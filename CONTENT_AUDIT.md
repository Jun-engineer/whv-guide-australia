# CONTENT_AUDIT

生成日: 2026-07-16
対象: WH Guide Australia（whv-guide-australia）

## 1. サマリー

| 区分 | 件数 |
| --- | --- |
| コード内の実記事（`lib/mockData.ts` の `articles`） | 54（すべて `published: true`） |
| うち公式照合済み（`verifiedAt` 付き） | 11 |
| マニフェスト `existing_articles` | 47 |
| マニフェスト `planned_content` | 338（内訳: planned 325 / published 7 / merged 6） |
| ハブ数 | 21 |
| 計画総数（existing + planned） | 385 |

> 注: マニフェストの `existing_articles`（47）には、以前未登録だった既存公開記事
> （`abn-guide`, `super-guide`, `dasp-refund`, `cars-guide`, `license-guide`, `sim-guide`,
> `food-guide`, `clothing-guide`）を本サイクルで追加登録済み。本サイクルで新規公開した7件は
> `planned_content` 内で `status: published` として扱います（検証はこれを既登録と見なします）。

## 2. 検索意図（search intent）クラスタリング分析

`scripts/validate-content.mjs` は、同一ハブ内で同じ `intent` を持つ計画コンテンツを
「共食い（cannibalization）候補」として警告します。ただし **`intent` ラベルは粒度が粗く、
過検出（false positive）が大量に発生します。** 例:

- `area::area-guide`（16件）: `area-gold-coast`, `area-perth`, `area-cairns` …
  → **別記事として妥当。** 各都市/地域は独立した検索意図（地名クエリ）を持つ。統合すべきでない。
- `area::state-guide`（7件）: `state-nsw-guide` … `state-nt-guide`
  → **別記事として妥当。** 州ごとに規則（運転免許・州税・季節労働地域）が異なる。
- `farm::*`（39件）, 作物別ガイド（9作物）
  → **別記事として妥当。** 作物・シーズン・地域で情報が異なる。
- `tools::interactive-tool`（10件） / `tools::download`（4件）
  → 種類の異なるツール群。共食いではない。
- `english::language`（6件: workplace/hospitality/housing/bank-tax/medical/car-trouble）
  → シーン別フレーズ集。別記事として妥当。

**結論:** 粗い `intent` ラベルによる自動クラスタは統合判断の一次スクリーニングにのみ使用し、
実際の統合は「タイトルの主要検索意図が実質的に同一」の狭いケースに限定しました
（→ `CONTENT_MERGE_MAP.md`）。

### 真に重複と判断した狭いケース（統合実施）

| 計画slug | 統合先（公開中） | 理由 |
| --- | --- | --- |
| `sim-esim-guide` | `sim-guide` | SIM/eSIM導入手順が同一意図 |
| `mobile-carrier-comparison` | `sim-guide` | 主要キャリア比較は既存が網羅 |
| `abn-application` | `abn-guide` | ABN申請手順が同一トピック |
| `dasp-guide` | `dasp-refund` | DASP申請手順が重複 |
| `find-lost-super` | `super-guide` | 紛失Super確認は既存の範囲 |
| `buy-used-car-guide` | `cars-guide` | 中古車購入は既存が網羅 |

これらは **計画（未公開）** だったため、公開中URLを潰すことなく統合でき、恒久リダイレクト
（308）を `lib/content/redirects.ts` に登録しました。

## 3. 孤立（orphan）記事の点検

内部リンク整合性は `scripts/validate-content.mjs` が検証します（`relatedSlugs` が実在の
記事 slug または登録済みリダイレクト元を指すこと）。本サイクルで:

- 新規4記事は既存のピラー記事から相互リンクを追加（下記）。
- ピラー記事 → 新規記事のリンクを追加:
  - `whv-complete-guide` → `working-holiday-budget`, `working-holiday-timeline`, `first-30-days-roadmap`
  - `arrival-checklist` → `first-30-days-roadmap`
  - `tfn-guide` → `whm-tax-rates`
  - `jobs-guide` → `first-30-days-roadmap`
  - `preparation-checklist` → `working-holiday-timeline`, `working-holiday-budget`

検証結果: `relatedSlugs` の壊れたリンク **0件**。

## 4. 情報アーキテクチャ

- 21ハブ構成（`start-here`, `visa`, `preparation`, `arrival`, `money`, `tax`, `jobs`,
  `qualifications`, `farm`, `gig-work`, `housing`, `transport`, `health`, `daily-life`,
  `english`, `area`, `travel`, `community`, `return-home`, `news`, `tools`）。
- 記事カテゴリ（`ArticleCategory`, 24種）→ ハブ（`HubId`, 21種）への写像は
  `lib/content/hubs.ts` の `categoryToHub` が担う。
- 公開判定は `isPublishedArticle`（`published === true` かつ `status` が未設定か `"published"`）。
  draft/review/merged/archived はリスト・サイトマップ・`generateStaticParams`・関連記事から自動除外。

## 5. 品質・公開状態

- ビルド: 成功（Next.js 16.2.7 Turbopack、TypeScript 型チェック通過）。
- Lint: エラー0・警告0。
- コンテンツ検証: エラー0・警告66（大半は上記の粗い意図クラスタの過検出）。
- コンテンツテスト（`node:test`）: 5/5 パス。
