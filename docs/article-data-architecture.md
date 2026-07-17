# 記事データアーキテクチャ

記事本文データ（`Article`）は、以前は単一の巨大な配列（`lib/mockData.ts` の
`articles`）で管理していましたが、確実に編集できるようカテゴリ単位のモジュール
に分割しました。**本ドキュメントはアーキテクチャの説明のみ**で、記事の内容・
タイトル・slug・メタデータ・公開状態には一切変更を加えていません。

## ディレクトリ構成

```
lib/content/articles/
├── types.ts        # 記事パッケージ共通型（types/article.ts の再エクスポート）
├── visa.ts         # category: "visa" の記事配列（visaArticles）
├── preparation.ts  # category: "preparation"（preparationArticles）
├── arrival.ts      # category: "arrival"（arrivalArticles）
├── tfn.ts          # category: "tfn"（tfnArticles）
├── abn.ts          # category: "abn"（abnArticles）
├── super.ts        # category: "super"（superArticles）
├── tax-return.ts   # category: "tax-return"（taxReturnArticles）
├── bank.ts         # category: "bank"（bankArticles）
├── money.ts        # category: "money"（moneyArticles）
├── sim.ts          # category: "sim"（simArticles）
├── transport.ts    # category: "transport"（transportArticles）
├── license.ts      # category: "license"（licenseArticles）
├── housing.ts      # category: "housing"（housingArticles）
├── jobs.ts         # category: "jobs"（jobsArticles）
├── farm.ts         # category: "farm"（farmArticles）
├── second-visa.ts  # category: "second-visa"（secondVisaArticles）
├── uber-eats.ts    # category: "uber-eats"（uberEatsArticles）
├── doordash.ts     # category: "doordash"（doordashArticles）
├── cars.ts         # category: "cars"（carsArticles）
├── food.ts         # category: "food"（foodArticles）
├── clothing.ts     # category: "clothing"（clothingArticles）
├── area.ts         # category: "area"（areaArticles）
├── english.ts      # category: "english"（englishArticles）
├── health.ts       # category: "health"（healthArticles）
└── index.ts        # 全カテゴリ配列を結合し `articles` を公開
```

- **ファイル = カテゴリ**：ファイル名は `ArticleCategory`（`types/article.ts`）の
  値と 1:1 で対応します。各記事の `category` は所属モジュールと一致していなければ
  なりません（`validate:articles` が検証）。
- **共通型は 1 か所**：型は `types/article.ts` が唯一の定義元で、
  `lib/content/articles/types.ts` はそれを再エクスポートするだけです。

## カテゴリ配列の結合方法（index.ts）

1. 各カテゴリモジュールが `export const <camel>Articles: Article[]` を公開します。
2. `index.ts` がそれらを `categoryArticleGroups` に集約し、`flat()` で連結します。
3. トップページの注目記事など**配列順に依存する UI の挙動を維持**するため、
   歴史的な並び順を `ARTICLE_ORDER`（slug のリスト）で保持し、その順に再構成します。
   `ARTICLE_ORDER` に無い slug（新規記事）は末尾に追加されます。
4. 最終的に `export const articles: Article[]` として公開します。

`lib/mockData.ts` は後方互換のため `articles` をこの index から再エクスポート
します（`import { articles } from "@/lib/mockData"` は従来どおり動作します）。
フォーラム／通報／フィードバックなど**記事以外のモックデータは引き続き
`lib/mockData.ts`** に置かれています。

## 新しい記事を追加する場所

1. 記事の `category` に対応するモジュール（例: `arrival` なら
   `lib/content/articles/arrival.ts`）の配列に、`Article` オブジェクトを追加します。
2. 新規カテゴリを増やす場合のみ:
   - `types/article.ts` の `ArticleCategory` に値を追加
   - `lib/content/articles/<category>.ts` を新規作成
   - `index.ts` に import と `categoryArticleGroups` への追加
   - 表示名を `lib/mockData.ts` の `articleCategories` に追加
3. 新規記事は通常、配列（およびグローバル順）の末尾に追加されます。既存の並び順を
   意図的に変えたい場合のみ `ARTICLE_ORDER` を編集してください。

## 検証（重複 slug などの検出）

```bash
npm run validate:articles
```

`scripts/validate-articles.mjs` が以下を検出します:

- 重複 slug / 重複パス（`/guides/<slug>`）
- 重複する記事 id
- 必須フィールドの欠落
- 不正なカテゴリ参照（未宣言カテゴリ、モジュールと不一致）
- 同一カテゴリ配列が index で複数回結合されていないか
- `ARTICLE_ORDER` の重複・未知 slug

あわせて既存のチェックも実行してください:

```bash
npm run validate:content   # マニフェスト整合・内部リンク（記事モジュールを走査）
npm run test:content       # マニフェスト検証テスト
npx tsc --noEmit           # 型（必須フィールド・カテゴリ union）
```
