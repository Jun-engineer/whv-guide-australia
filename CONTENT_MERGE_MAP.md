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

## 4. リダイレクト運用ルール

- `to`（転送先）は必ず公開中（`published`）の実記事 slug。
- チェーン（A→B→C）禁止。`to` を別の `from` にしない。
- 308（恒久）。
- 追加・変更は `lib/content/redirects.ts` のみを編集し、ビルド時検証を通すこと。
