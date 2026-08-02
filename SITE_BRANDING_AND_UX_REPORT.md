# サイト・ブランディング／UX 改善レポート

日付: 2026-08-02
対象: オーストラリアワーホリコンパス（旧 WH Guide Australia / whv-guide-australia.com）

このバッチでは、サイト名のリブランド、記事検索、可読性、画像対応、トップページの
改善をまとめて実施した。記事の新規生成・事実の書き換え・公開 URL やドメインの変更は
行っていない。

---

## 1. ブランディング（旧名 → 新名）

| 項目 | 旧 | 新 |
| --- | --- | --- |
| 正式名称 | WH Guide Australia | オーストラリアワーホリコンパス |
| 短縮名 | WH Guide | ワーホリコンパス |
| タグライン | （なし） | ビザ・仕事・生活を、渡航前から帰国まで。 |
| ドメイン | https://whv-guide-australia.com/ | 変更なし |
| 旧英語名 | — | alternateName / 運営者情報にレガシー表記として保持 |

### 旧サイト名が使われていた箇所と対応

| ファイル | 対応 |
| --- | --- |
| `lib/siteConfig.ts` | `name` / `shortName` を新名に更新。`legacyName` / `tagline` / `alternateNames` / `homeTitle` / 新しい `description` を追加 |
| `app/layout.tsx` | title default（= homeTitle）、OG、Twitter、WebSite/Organization 構造化データを更新 |
| `app/page.tsx` | H1・ヒーロー・ItemList JSON-LD を更新（重複していた WebSite JSON-LD は削除） |
| `components/layout/Logo.tsx` | レスポンシブ表記に変更（後述）。アクセシブル名は正式名称 |
| `components/layout/Footer.tsx` | © 表記・タグライン・説明文を更新 |
| `app/opengraph-image.tsx` | OG 画像内テキスト・alt を更新 |
| `app/manifest.ts` | `siteConfig` 経由で自動更新（PWA name / short_name） |
| `app/about/page.tsx` `app/privacy/page.tsx` `app/terms/page.tsx` | 本文・メタ説明を新名に更新（about はレガシー名を併記） |
| `whv-guide-content-plan/content-manifest.yaml` → `lib/content/manifest.generated.ts` | `siteName` を更新し再生成（`npm run generate:content`） |
| `app/icon.svg` `public/logo.svg` | `aria-label` を新名に更新 |

> 保持したもの: `lib/newsData.ts` の過去ニュース記事タイトル（「WH Guide Australia を
> 公開しました」）は履歴的な公開コンテンツのため変更していない。DB マイグレーションの
> SQL コメント等の非公開箇所も変更していない。

### レスポンシブなテキストロゴ

- 通常幅（`min-[400px]` 以上）: `オーストラリアワーホリコンパス`
- 狭いモバイル（`< 400px`）: `ワーホリコンパス`
- スクリーンリーダー向けの名称（`aria-label`）: 正式名称 `オーストラリアワーホリコンパス ホームへ`

---

## 2. 記事検索

### アーキテクチャ

- **ビルド時インデックス**: `lib/searchIndex.ts` の `buildSearchIndex()` が
  `getAllArticles()`（= 公開記事のみ）から軽量な `SearchDoc[]` を生成。
  記事本文（`content`）はインデックスに含めないため、クライアントへ全文が
  送られない。
- **純粋な検索コア**: `lib/search.ts`（`normalize` / `searchDocs`）は記事データを
  import しないクライアント安全モジュール。サーバー専用のインデックス生成と分離。
- **UI**: `/search`（`app/search/page.tsx`, サーバー）がインデックスを生成し、
  クライアントの `components/search/SearchClient.tsx` に渡してライブ絞り込み。
- **入口**: トップページの大きな検索フィールド（`components/search/SearchBox.tsx`）、
  グローバルヘッダーの検索アイコン、モバイルナビ内の検索フォーム。
- 外部検索サービスは不要（クライアント側の軽量フィルタ）。

### 検索対象フィールド

タイトル / 説明（description）/ カテゴリラベル / ハブ（hub）/ タグ（tags）/
手順の見出し（steps.title）/ summary / searchIntent / 別名（aliases）。

### ランキング

タイトル完全一致 (100) > タイトル前方一致 (85) > タイトル部分一致 (70) >
全語タイトル包含 (60) > 別名一致 (50) > カテゴリ一致 (40) > 説明一致 (30) > その他 (15)。
複数語は AND（部分一致）。全角/半角は NFKC 正規化、大文字小文字は無視。

### エイリアス（別名・略称・表記ゆれ）実装

- 一元管理ファイル: `lib/searchConfig.ts`
  - `categoryAliases`: カテゴリ単位（例 `tfn` → TFN / Tax File Number /
    タックスファイルナンバー）
  - `slugAliases`: 特定記事単位（例 `farm-second-visa` → 88日 / セカンドビザ）
  - `popularTopics`: 人気トピック（ゼロ件時・トップページで再利用）
- 記事個別: `Article.searchAliases` / `Article.tags`（`types/article.ts` に追加）
- 要件で挙げられた TFN / Tax File Number / タックスファイルナンバー / Bond / ボンド /
  敷金 / Rego / Registration / 車両登録 / Super / Superannuation /
  スーパーアニュエーション / ABN / Australian Business Number / セカンドビザ / 88日 を
  カバー。**追加方法は `lib/searchConfig.ts` 冒頭のコメントに記載。**

### 除外・状態対応

`getAllArticles()` が `published !== true` および
`status ∈ {draft, review, archived, merged, ...}` を除外するため、下書き・レビュー・
アーカイブ・統合元・計画中コンテンツは検索に出ない。

### ゼロ件時の表示

スペル/表記変更の提案、略称の案内、カテゴリ絞り込みリセットの案内、人気トピック、
関連カテゴリ、記事リクエスト/フィードバックへのリンクを表示。

---

## 3. 可読性コンポーネント

記事データに任意フィールドを追加し、**設定された記事だけ**表示する方式
（本文の一括書き換えを避け、事実を変えない）。

新規コンポーネント（`components/articles/`）:

| コンポーネント | フィールド | 用途 |
| --- | --- | --- |
| `AnswerBox` | `answer` | 冒頭の結論・直接回答 |
| `ArticlePoints` | `points` | この記事のポイント |
| `AudienceBox` | `audience` | この記事が必要な人 |
| `CommonMistakes` | `commonMistakes` | よくある間違い |

既存コンポーネントを継続活用: `KeyFacts`（費用・条件サマリ）、`TableOfContents`、
`StepBlock`（番号付き手順）、`RequirementsChecklist`、`ComparisonTable`（横スクロール対応）、
`WarningBox`、`StateSpecificNotice`、`FaqList`（アコーディオン）、`OfficialSourceBox`、
`VerifiedDate`、`RelatedArticles`、`FeedbackRequestLink`。

本文の可読性: 段落の行間を `leading-8` に調整し、長文をスキャンしやすくした
（本文テキスト自体は変更していない）。記事の描画順は要件の推奨フローに合わせた。

---

## 4. 画像・スクリーンショット対応

- `types/article.ts` の `ArticleImage` を拡張: `credit` / `width` / `height` /
  `position("hero" | "inline" | "gallery")` を追加。`Article.images` を追加。
- `components/articles/ArticleFigure.tsx`: `next/image` によるレスポンシブ表示・
  レイアウトシフト防止（width/height）・遅延読み込み（hero を除く）・caption/credit。
- `components/articles/ArticleImageGallery.tsx`: 本文・スクリーンショット用ギャラリー。
  タップで拡大（tap-to-enlarge, キーボード Esc / 閉じるボタン対応）。
- `ArticleHeader` はヒーロー画像を `ArticleFigure` で表示。手順画像は `StepBlock`。
- `next.config.ts` に `images.formats: ["image/avif", "image/webp"]` を追加。
- 空プレースホルダは公開ページに出さない（画像未設定なら非表示）。
- ドキュメント: `docs/images-and-media.md`（保存場所・命名・寸法・alt/caption・
  ヒーロー/インライン追加・差し替え/削除手順）。

---

## 5. トップページ改善（ファーストビュー）

1. サイト名バッジ「オーストラリアワーホリコンパス」
2. H1「オーストラリアのワーホリ情報を、準備から帰国まで」
3. 一文の説明
4. 大きな記事検索フィールド
5. 主要 CTA「渡航準備から始める」（/preparation）
6. 副次 CTA「オーストラリア到着後にやること」（/arrival）
7. 人気トピックのショートカット（ビザ / 仕事 / ファーム / 税金 / 家探し / 車・免許）

モバイルファーストで、ファーストビューを詰め込みすぎないレイアウト。

---

## 6. 構造化データの変更

- `layout.tsx` の WebSite 構造化データに `alternateName`（ワーホリコンパス /
  WH Guide Australia / オーストラリアワーホリガイド）を追加し、`url` を末尾スラッシュ付き
  `https://whv-guide-australia.com/` に統一。
- SearchAction の `urlTemplate` を `/community?q=` から `/search?q={search_term_string}`
  に変更。
- 重複していたトップページの WebSite JSON-LD を削除（サイト全体で 1 つに統一）。
- Article / HowTo / FAQPage / BreadcrumbList 構造化データは `siteConfig.name` 経由で
  新名に自動追従。

---

## 7. アクセシビリティ配慮

- ロゴのアクセシブル名は正式名称（視覚表示が短縮名でも `aria-label` は完全名）。
- 検索フォームは `role="search"` + `<label>`（sr-only）、`aria-live="polite"` で
  件数を通知。キーボード操作可能。
- 画像拡大ダイアログは `role="dialog"` `aria-modal` `aria-label`、Esc で閉じる、
  閉じるボタンに `aria-label`。
- すべての画像 `alt` を必須化。ヘッダー検索アイコン・モバイルメニューに `aria-label`。

---

## 8. 検証結果

| 検証 | コマンド | 結果 |
| --- | --- | --- |
| コンテンツ検証（重複 slug/title・リダイレクト・未公開露出） | `npm run validate:content` | 0 errors / 66 warnings（既存のカニバリ警告のみ、今回の変更起因なし） |
| 型チェック | `npx tsc --noEmit` | 成功（0 エラー） |
| Lint | `npx eslint` | 成功（0 エラー / 0 警告） |
| テスト | `node --test scripts/content.test.mjs scripts/tools.test.mjs` | 41 pass / 0 fail |
| 本番ビルド | `npm run build` | 成功（`/search` を含む全ルート生成） |

記事数: 公開記事 358 件（`published: true`, draft/review/archived なし）。

---

## 9. 残っている手動タスク

- OG 画像（`/opengraph-image`）は現状テキストベース。必要ならデザインを更新。
- 実写真・スクリーンショットの追加（`docs/images-and-media.md` の手順に従う）。
- 記事ごとの `answer` / `points` / `audience` / `commonMistakes` / `tags` /
  `searchAliases` は任意。優先度の高い記事から順次付与すると検索・可読性が向上。
- 旧名の外部被リンク・SNS プロフィール名の更新（サイト外作業）。

---

## 10. 推奨する写真リスト（例）

実際に撮影・作成する際の候補（捏造・無断ストックは不可）:

- `public/guides/farm/australia-farm-work-clothes.webp` — ファーム作業の服装
- `public/guides/farm/farm-work-gloves-example.webp` — 作業用手袋の例
- `public/guides/license/qld-driver-licence-example.webp` — QLD 運転免許の例
- `public/guides/housing/share-house-room-inspection.webp` — シェアハウス内見
- `public/guides/tfn/ato-apply-screen.webp` — ATO の TFN 申請画面（個人情報を伏せる）
- `public/guides/super/mygov-super-screen.webp` — myGov のスーパー画面（同上）

---

## 11. カテゴリ・ナビゲーション改善（発見性の3層化）

フッター頼みだったカテゴリ導線を、ヘッダー／トップページ／フッターの3層で
再設計し、重要ハブ（健康・安全 / 英語学習 / エリア / 旅行 / 帰国準備 / ツール
/ コミュニティ）をフッターに到達しなくても発見できるようにした。

### 11.1 以前の制限
- デスクトップヘッダーは10個のフラットなリンクで、健康・英語・旅行・帰国準備・
  ツール・ダウンロードなどが欠落。これらは実質フッターからしか辿れなかった。
- モバイルメニューはヘッダーと同じフラットリストで、グループ化なし。
- トップページにカテゴリ一覧の面がなく、検索語を知らないと目的のハブに届かない。
- フッターは `/news` が本文カラムから漏れ、`/transport` `/cars` `/license`
  `/sim` `/food` `/clothing` `/arrival` などのハブが未掲載だった。

### 11.2 特定した公開ハブ（canonical URL）
検証: `app/<hub>/page.tsx` が存在し、かつ各カテゴリに公開記事が1件以上あること
を確認。
`/visa` `/preparation` `/arrival` `/jobs` `/farm` `/second-visa` `/gig-work`
`/uber-eats` `/doordash` `/bank` `/money` `/tfn` `/abn` `/super` `/tax-return`
`/housing` `/health` `/english` `/sim` `/food` `/clothing` `/area` `/travel`
`/cars` `/license` `/transport` `/return-home` `/tools` `/community`
`/community-guide` `/news`

除外（索引ページが未実装のため導線を張らない）:
`/tax` `/start-here` `/qualifications` `/daily-life`（manifest 上のみ）、
`/downloads` 索引（ダウンロードは `/tools` から到達）。

### 11.3 デスクトップ・グローバルナビ（コンパクトなグループ化）
トップレベル5項目のドロップダウン（`components/layout/PrimaryNav.tsx`）:
- はじめる: ビザ / 渡航前準備 / 到着後の手続き
- 仕事・ビザ: 仕事探し / ファーム・88日 / セカンド・サードビザ / ギグワーク・配達
- 生活・お金: 銀行・送金 / 税金・TFN・ABN / 家探し / 健康・安全 / 英語学習 / SIM・通信
- エリア・旅行: 都市・地域ガイド / 国内旅行 / 交通・決済 / 車・免許
- その他のガイド: 帰国準備 / 便利ツール・ダウンロード / 友達・コミュニティ / 掲示板 / ニュース

記事検索アイコンはヘッダー右側に常時表示。入れ子は1段まで。

### 11.4 モバイルナビ（アコーディオン）
`components/layout/MobileNav.tsx` をグループ・アコーディオン化。先頭に「記事を検索」、
続けて上記5グループを `aria-expanded` / `aria-controls` 付きで展開。

### 11.5 トップページ「カテゴリから探す」
`app/page.tsx` のヒーロー直下（スクロール上部）に14枚のカードを追加
（`categoryDirectory` in `lib/navigation.ts`）。2列(モバイル)→3→4列(ワイド)。
ビザ・渡航準備 / 到着後の手続き / 仕事探し / ファーム・セカンドビザ / お金・送金 /
税金・TFN・ABN / 家探し / 健康・安全 / 英語学習 / 車・免許・交通 / 都市・地域ガイド /
国内旅行 / 帰国準備 / 便利ツール・ダウンロード。各カードは canonical ハブへリンクし
短い説明付き。個別記事は載せない。

### 11.6 フッター変更
`footerNavGroups`（`lib/navigation.ts`）で6グループのサイトマップ化。全公開ハブを
掲載し、重複を排除。信頼・法務リンク（運営者情報 / 編集方針 / Privacy Policy /
Terms / お問い合わせ・フィードバック）は別行に分離。既存の有効なカテゴリリンクは
すべて維持。

### 11.7 アクセシビリティ
- ドロップダウン／アコーディオンは click とキーボードで操作可、hover 依存にしない。
- `aria-haspopup` / `aria-expanded` / `aria-controls` を付与。
- Escape で閉じ、フォーカスがグループ外へ出たら閉じる（デスクトップ）。
- 全画面モバイルメニュー展開中は背面スクロールを停止、横スクロール抑止
  （`overflow-x-hidden`）。宛先選択で自動的に閉じる。
- カードは `focus-visible` のアウトラインで可視フォーカスを確保。ネストした
  無効な `<a>` は使わずカード全体を1つの `Link` に。
- アイコンが読み込めなくてもテキストラベルだけで意味が通る。

### 11.8 canonical・整合性
- ヘッダー／トップ／フッターはすべて `lib/navigation.ts` の単一定義を参照し、
  ラベルと遷移先を一元管理（並行ナビの排除）。
- 関連記事（`getAutoRelatedArticles`）・関連ツール（registry）は公開エントリのみを
  返すため、削除・非正規ページを指さない。
- リダイレクト元 slug へは一切リンクしていない。

### 11.9 変更ファイル
- `lib/navigation.ts`（新規・単一の情報源）
- `components/layout/PrimaryNav.tsx`（新規・デスクトップドロップダウン）
- `components/layout/MobileNav.tsx`（アコーディオン化）
- `components/layout/Header.tsx`（グループナビへ差し替え）
- `components/layout/Footer.tsx`（サイトマップ化）
- `app/page.tsx`（カテゴリから探すセクション追加）

### 11.10 検証結果
- `tsc --noEmit`: exit 0
- `npm run lint`: 0 error
- `npm run test:content`: 5/5 pass
- `npm run test:tools`: 36/36 pass
- `npm run build`: 成功（全ハブルートが静的プリレンダー ○/●）

### 11.11 残る手動確認（推奨）
- 実機ブラウザでのスクリーンリーダー読み上げ（VoiceOver / NVDA）。
- キーボードのみでのドロップダウン往復とフォーカストラップ挙動。
- iOS Safari / Android Chrome でのモバイルメニュー横溢れの最終目視。
