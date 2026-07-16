# WH Guide Australia コンテンツ全体計画 / Claude Code 実装指示

> 対象サイト: https://whv-guide-australia.com  
> 監査日: 2026-07-16  
> 機械可読データ: `content-manifest.yaml`

## 1. Claude Codeへの実行指示

このリポジトリで、まず既存のコンテンツ管理方式・ルーティング・型定義・カテゴリ定義を調査してください。
次に `content-manifest.yaml` を読み込み、以下のルールでコードへ反映してください。

1. **既存記事を削除・上書きしない。** `status: existing` のslugとURLを保持する。
2. **一度に全記事本文を生成しない。** まずカテゴリ、型、下書き管理、一覧表示、検索、内部リンクの基盤を実装する。
3. `planned_content` はデフォルトで `draft` または `planned` とし、未検証の記事を公開・sitemap登録しない。
4. P0から段階的に実装する。P0完了後にP1、P2、P3へ進む。
5. ビザ、税金、労働法、医療、賃貸、運転免許などのYMYL情報は、**公式情報を確認できない場合は数値・条件を生成しない。**
6. 既存のデータ構造がmanifestと異なる場合、manifestを直接コードに固定せず、変換スクリプトまたはadapterを作る。
7. 既存slugとの衝突、タイトル重複、検索意図の重複をCIまたはbuild時に検知する。
8. 各記事は `publishedAt`, `updatedAt`, `verifiedAt`, `officialSources`, `status`, `priority`, `hub`, `summary` を持てるようにする。
9. `status !== published` の記事は、公開一覧、サイト内検索、sitemap、RSS、構造化データから除外する。
10. P0記事について、本文が未作成でも公開用の薄いページを量産しない。カテゴリ一覧では「準備中」として表示するか、管理画面だけに保持する。

## 2. 推奨コンテンツ型

```ts
type ContentStatus = "planned" | "draft" | "review" | "published" | "archived";
type Priority = "P0" | "P1" | "P2" | "P3" | "keep";

type ContentItem = {
  slug: string;
  path: string;
  title: string;
  hub: string;
  type: "article" | "interactive-tool" | "download" | "news-template";
  status: ContentStatus;
  priority: Priority;
  intent?: string;
  summary?: string;
  publishedAt?: string;
  updatedAt?: string;
  verifiedAt?: string;
  officialSources?: Array<{ label: string; url: string }>;
  relatedSlugs?: string[];
};
```

## 3. 現状監査サマリー

サイト上で確認できた既存ガイド記事は **39件** です。  
追加候補は **338件**、合計管理対象は **377件** です。

現在の主要カテゴリは、ビザ、渡航前、渡航後、エリア、仕事、ファーム、英語、健康・安全、セカンドビザ、Uber Eats、DoorDash、送金、銀行、TFN、タックスリターン、家探し、交通です。

### 現在大きく不足しているトップレベル領域

- ABN・Sole Trader・Invoice・GST
- Superannuation・DASP
- SIM/eSIM・通信会社・インターネット
- 車購入・Rego・CTP・保険・免許切替
- 日常生活・食費・スーパー・料理
- 帰国前手続き
- 州別制度ページ
- ファーム作物別・地域別・88日記録
- 労働トラブル・未払い・怪我
- ダウンロードテンプレートと計算/記録ツール

## 4. 重複・カニバリゼーションの整理候補

既存記事は削除せず、検索意図を分離するか、統合後に301リダイレクトを検討してください。

| 既存記事 | 問題 | 推奨 |
|---|---|---|
| `farm-second-visa` / `farm-finding` / `second-visa-guide` | ファーム探し・88日・セカンド条件が重複 | `second-visa-guide`を制度ハブ、`farm-finding`を求人/詐欺、`farm-second-visa`を証拠・日数の実務に分離 |
| `housing-guide` / `share-house-finding` | 内見・Bond・詐欺が重複 | 前者を契約/Bond/詐欺、後者を検索/応募/内見に分離 |
| `tax-return-guide` / `tax-return-howto` | 基礎と実践の境界が弱い | 前者を税率・期限・対象者、後者をmyGov画面手順に限定 |
| `area-brisbane` | BrisbaneとGold Coastを同一記事化 | 既存URLをBrisbane中心にし、Gold Coastを新規独立 |
| `area-perth-cairns` | 地理も検索意図も異なる | PerthとCairnsを独立し、既存URLを比較記事またはリダイレクト候補にする |
| `certifications` | RSAとWhite Cardが一記事 | 総合ハブとして残し、州別RSA・White Card詳細へ分割 |

## 5. 推奨サイト情報設計

- `/start-here` — はじめに・ロードマップ
- `/visa` — ビザ・移民手続き
- `/preparation` — 渡航前準備
- `/arrival` — 到着後セットアップ
- `/money` — お金・銀行・送金
- `/tax` — 税金・ABN・Super
- `/jobs` — 仕事探し・労働条件
- `/qualifications` — 資格・ライセンス
- `/farm` — ファーム・Specified Work
- `/gig-work` — ギグワーク・副業
- `/housing` — 家探し・賃貸
- `/transport` — 交通・車・免許
- `/health` — 健康・保険・安全
- `/daily-life` — 日常生活・食事・買い物
- `/english` — 英語学習・会話
- `/area` — 都市・州・地域ガイド
- `/travel` — 旅行・ロードトリップ
- `/community-guide` — 友達・コミュニティ
- `/return-home` — 帰国準備・次のキャリア
- `/news` — ニュース・制度更新
- `/tools` — ツール・テンプレート

## 6. 実装フェーズ

### Phase A: コンテンツ基盤
- manifest取込
- ContentItem型
- hub/category設定
- draft/published制御
- sitemap/RSS/検索の公開制御
- slug重複検知
- `verifiedAt` と公式ソース表示
- 関連記事自動生成

### Phase B: P0
- P0記事の構成・下書き
- ABN、Super、SIM、車、帰国、労働トラブル、ファーム記録
- チェックリスト・88日ツール
- 既存重複記事の検索意図分離

### Phase C: P1
- 職種別、都市別、生活、英語フレーズ
- 内部リンク・パンくず・FAQ Schema
- テンプレート配布

### Phase D: P2/P3
- 作物別、地方都市、旅行、ニッチ資格
- ユーザーリクエストと検索データを基に優先順位を再評価

## 7. 記事生成ルール

各記事は最低限、以下の構造を持つこと。

1. 結論・対象者
2. 最終確認日
3. この記事で分かること
4. 手順または比較
5. 費用・期限・必要書類
6. よくある失敗
7. 公式情報の確認方法
8. FAQ
9. 関連記事
10. 情報修正リクエストへの導線

### YMYL記事の追加要件
- 公式ソースを2次情報より優先
- 「発表日」「適用開始日」「最終確認日」を分離
- 州ごとに異なる制度を全国共通として断定しない
- 法律・税務・医療の個別判断を行わない
- 金額や条件をコードへハードコードする場合、出典と確認日を同じデータに保存
- 自動生成した本文は `review` 状態にし、人の確認後のみ公開

## 8. 優先度集計

- P0: 124件
- P1: 120件
- P2: 78件
- P3: 16件

## 9. ハブ別の追加件数

- `area`: 23件
- `arrival`: 12件
- `community`: 6件
- `daily-life`: 21件
- `english`: 13件
- `farm`: 39件
- `gig-work`: 12件
- `health`: 17件
- `housing`: 19件
- `jobs`: 26件
- `money`: 10件
- `news`: 6件
- `preparation`: 20件
- `qualifications`: 9件
- `return-home`: 12件
- `start-here`: 10件
- `tax`: 21件
- `tools`: 14件
- `transport`: 23件
- `travel`: 9件
- `visa`: 16件

## 10. Claude Code向け短縮プロンプト

```text
Read WHV_CONTENT_MASTERPLAN.md and content-manifest.yaml.
Audit the existing repository before editing.
Preserve all existing slugs and published pages.
Implement the content registry, hub taxonomy, status/priority fields, draft exclusion,
verifiedAt/officialSources support, and duplicate-slug validation.
Import the manifest through an adapter matching the repository's current architecture.
Do not publish generated or unverified YMYL content.
Start with Phase A only, then report changed files, migrations, tests, and remaining risks.
```
