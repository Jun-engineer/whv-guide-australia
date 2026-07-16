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

### 新規公開（4件）
すべて `verifiedAt: 2026-07-16`、`officialSources` 付き、冒頭でタイトルの問いに直接回答、
`keyFacts`/`steps`/`tips`/`warnings`/`faqs`/`sources`/`relatedSlugs` を完備。

| slug | URL | ハブ | 優先度 |
| --- | --- | --- | --- |
| `working-holiday-budget` | /guides/working-holiday-budget | start-here | P0 |
| `working-holiday-timeline` | /guides/working-holiday-timeline | start-here | P0 |
| `first-30-days-roadmap` | /guides/first-30-days-roadmap | start-here | P0 |
| `whm-tax-rates` | /guides/whm-tax-rates | tax | P0 |

### 既存記事の強化（4件）
`verifiedAt` + `officialSources` を付与し、`relatedSlugs` と `updatedAt` を更新。

| slug | URL |
| --- | --- |
| `visa-application` | /guides/visa-application |
| `second-visa-guide` | /guides/second-visa-guide |
| `visa-options` | /guides/visa-options |
| `tax-return-guide` | /guides/tax-return-guide |

詳細な照合内容は `SOURCE_VERIFICATION_REPORT.md` を参照。

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
| コンテンツ検証（`npm run validate:content`） | エラー0 / 警告78 |
| コンテンツテスト（`npm run test:content`, node:test） | 5/5 パス |
| Lint（`npm run lint`） | エラー0 / 警告0 |
| ビルド（`npm run build`, Next.js 16.2.7 + TS） | 成功（型チェック通過） |

警告78の大半は、粒度の粗い検索意図クラスタの共食い候補（過検出）と、コードに存在するが
マニフェスト `existing_articles` 未登録である旨の情報提供です（`CONTENT_AUDIT.md` 参照）。

## 5. 非公開（review/planned のまま）

- 残り **328件** の計画コンテンツは未公開。slug 単位の一覧と理由は `BULK_PUBLISH_REMAINING.md`。
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
