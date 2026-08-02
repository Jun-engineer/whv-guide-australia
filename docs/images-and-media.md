# 記事の写真・スクリーンショットの追加ガイド

このドキュメントは、オリジナルの写真・スクリーンショットを記事に追加するための
手順とルールをまとめたものです。実装は Next.js の `next/image` による最適化を
利用しており、記事データ（`lib/content/articles/*.ts`）にメタ情報を書くだけで
表示できます。

> 重要な方針
> - 写真やスクリーンショットを **捏造しない**（生成画像で実物を偽装しない）。
> - 無関係なストック画像を自動でダウンロードして使わない。
> - 空のプレースホルダ画像を公開ページに出さない（画像が無いときは何も表示しない）。
> - 例示画像に個人情報（氏名・住所・パスポート番号・口座番号など）を写さない。

---

## 1. 画像ファイルの保存場所

すべての画像は `public/` 配下に置きます。カテゴリごとにフォルダを分けると
管理しやすくなります。

```
public/
  guides/
    farm/
      australia-farm-work-clothes.webp
      farm-work-gloves-example.webp
    license/
      qld-driver-licence-example.webp
    housing/
      share-house-room-inspection.webp
```

記事データの `src` には `public/` を除いた絶対パスを書きます。

```ts
src: "/guides/farm/australia-farm-work-clothes.webp"
```

## 2. 推奨ファイル名

内容が分かる、英小文字・ハイフン区切りの名前にします。

- `australia-farm-work-clothes.webp`
- `farm-work-gloves-example.webp`
- `qld-driver-licence-example.webp`
- `share-house-room-inspection.webp`

## 3. 推奨サイズ・フォーマット

| 用途 | 推奨サイズ（px） | 備考 |
| --- | --- | --- |
| ヒーロー画像（hero） | 1200 × 675（16:9） | 記事上部。`priority` で優先読み込み |
| 本文中の画像（inline） | 1200 × 675 程度 | 横幅は本文幅に自動フィット |
| 手順スクリーンショット | 実画面の解像度のまま | 文字が読めることを優先 |

- フォーマットは元画像を **WebP**（または PNG/JPEG）で用意すれば十分です。
  配信時に Next.js が AVIF/WebP へ自動変換します（`next.config.ts` で設定済み）。
- `width` / `height` を指定するとレイアウトシフト（CLS）を防げます。未指定の
  場合は 16:9 の既定値で表示されます。

## 4. alt テキストとキャプション

- `alt` は **必須**。画像の内容が分かる説明を日本語で書きます（装飾目的でも
  空にしない）。
- `caption` は画像の下に表示する補足説明（任意）。
- `credit` は撮影者・出典（任意）。キャプションの後ろに `（…）` 付きで表示されます。

## 5. ヒーロー画像を追加する

記事オブジェクトに `heroImage` を設定します。

```ts
{
  slug: "farm-second-visa",
  // ...
  heroImage: {
    src: "/guides/farm/australia-farm-work-clothes.webp",
    alt: "オーストラリアのファームで働くときの服装の例",
    caption: "長袖・帽子・厚手の手袋が基本",
    credit: "編集部撮影",
    width: 1200,
    height: 675,
    position: "hero",
  },
}
```

## 6. 本文中・ギャラリー画像を追加する

`images` 配列に追加します。`position` を `inline` または `gallery` にすると
本文下のギャラリーにまとめて表示され、タップで拡大できます。

```ts
{
  slug: "share-house-finding",
  // ...
  images: [
    {
      src: "/guides/housing/share-house-room-inspection.webp",
      alt: "シェアハウス内見時に確認するポイント（水回り・採光）",
      caption: "内見では水回りと日当たりを必ず確認",
      position: "inline",
      width: 1200,
      height: 675,
    },
  ],
}
```

手順（`steps`）の各ステップにも `image` を設定できます（`StepBlock` が表示）。

```ts
steps: [
  {
    title: "ATOのTFN申請ページを開く",
    description: "...",
    image: {
      src: "/guides/tfn/ato-apply-screen.webp",
      alt: "ATOのTFN申請フォームの画面",
    },
  },
]
```

## 7. 画像を差し替える・削除する

- **差し替え**: `public/` の画像ファイルを同名で置き換えるか、`src` を新しい
  パスに変更します。
- **削除**: 記事データから該当の `heroImage` / `images` / `steps[].image` を
  取り除きます。参照が無くなったファイルは `public/` から削除して構いません。
  画像が無い状態でもプレースホルダは表示されないため、公開ページに影響は
  ありません。

## 8. 表示コンポーネント（参考）

| コンポーネント | 役割 |
| --- | --- |
| `components/articles/ArticleFigure.tsx` | ヒーロー・単体画像の表示（caption/credit 対応） |
| `components/articles/ArticleImageGallery.tsx` | 本文中画像・スクリーンショットのギャラリー（タップ拡大） |
| `components/articles/StepBlock.tsx` | 手順ステップ内の画像表示 |

すべて `next/image` を使用し、`loading="lazy"`（ヒーローを除く）と
`sizes` によるレスポンシブ配信に対応しています。
