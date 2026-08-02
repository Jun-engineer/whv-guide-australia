# BULK_PUBLISH_REMAINING

生成日: 2026-07-16 / 最終更新: 2026-08-02（最終 whole-site 監査完了）

## ✅ 完了ステートメント: 残タスクなし

Working Holiday コンテンツライブラリのバルク公開プロジェクトは **完了** しました。
最終 whole-site 監査（2026-08-02）の時点で、マニフェスト
（`whv-guide-content-plan/content-manifest.yaml`）に **未処理の項目はありません**。

- `status: planned` = **0 件**（`grep -c "status: planned"` = 0）
- `status: draft` / `review` / `archived` / `excluded` = **0 件**
- 全項目が最終ステータス確定: **published 331** / **existing 47** / **merged 7**（管理対象 385 件）

これ以上の逐次公開の残タスクはありません。追加のコンテンツ生成は、明示的な新規指示が
ない限り行いません。

## 最終集計（マニフェストが真実の情報源）

| 区分 | 件数 |
| --- | --- |
| 既存記事（保持・status: existing） | 47 |
| 新規公開（status: published） | 331 |
| ├ 記事（type: article） | 311 |
| ├ インタラクティブツール（type: interactive-tool） | 10 |
| ├ ダウンロード（type: download） | 4 |
| └ ニューステンプレート（type: news-template） | 6 |
| 統合（status: merged・308 恒久リダイレクト） | 7 |
| リダイレクト総数 | 7 |
| レビュー／除外／下書き／アーカイブ／planned | 0 |
| ツール公開総数（interactive 10＋download 4） | 14 |
| ダウンロード公開総数 | 4 |
| 管理対象総数 | 385 |

## 最終検証結果（各 1 回・修正 1 回）

- validate:content: **0 error / 66 warning**（warning は粗い intent ラベルの過検出カニバリ・dangling 0）
- validate:articles: **OK: no article data errors**（ARTICLE_ORDER omission は既存仕様の warn）
- test:content: **5/5 pass** ／ test:tools: **36/36 pass**
- tsc --noEmit: **exit 0**
- lint: **0 problems**（未使用 import 1 件を除去して解消）
- **production build**（next build）: **✓ Compiled successfully・438 静的ページ生成・prebuild 0 error**

## 未解決の問題

**なし。**

## デプロイ状況・次のステップ

最終チェックポイントコミット `feat: complete working holiday content library audit` を
ローカル main に作成済み。**main へは直接 push していません**（CI・ブランチ保護・
確立済みデプロイワークフローを迂回しない）。**次のデプロイ手順:** 利用者が
`git push origin main`（または新規ブランチから Pull Request を作成）を実行することで
CI とデプロイがトリガーされます。

## 推奨する将来の改善

- validate-content.mjs の意図クラスタをサブ intent 粒度に細分化し、66 件の過検出
  カニバリ警告を削減する。
- ARTICLE_ORDER に末尾追記される 261 slug を明示登録し、記事の表示順を制御する。
- 全文サイト内検索インデックス（記事）の導入（現状はハブ／カテゴリ／sitemap による発見）。
- 自動アクセシビリティテスト（axe / Playwright）を CI に追加する。
- YMYL 記事の verifiedAt を定期的に再照合するカデンスの確立。
