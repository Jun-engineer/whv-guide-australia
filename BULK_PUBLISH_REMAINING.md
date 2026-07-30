# BULK_PUBLISH_REMAINING

生成日: 2026-07-16（更新: 2026-07-19）

計画コンテンツ（planned）の残タスク一覧と、逐次公開の進捗を記録します。

## チェックポイント（2026-07-30）: area マイクロバッチ #3（5件公開 / commit: feat: publish area micro-batch）

area（都市・州・地域ガイド）ハブの次の5件を公開しました（マイクロバッチ運用）。開始時点で area は13件（>5）が残っていたため、通常のマイクロバッチとして記録順の先頭5件のみを処理し、最終ハブ監査は実施していません（残り8件のため次回以降に継続）。以下が確定状態です。

- **未完了 area 件数（開始時）:** 13件（6件 `area-*` ＋ 7件 `state-*`、すべて planned）。既に公開済みは既存6件＋マイクロバッチ #1・#2 の10件＝16件。
- **選定した5件（記録順の先頭5件）:** `area-townsville`, `area-newcastle`, `area-wollongong`, `area-mildura`, `area-shepparton`。いずれも開始時 `status: planned` で、published/merged/archived/review/excluded ではないことを確認済み。
- **分類:** 5件すべて **create**（新規スラッグ）。統合（merge）・リダイレクト・レビュー・除外・既存記事の分割は該当なし（本バッチは新規追加のみ）。
- **公開した5件（すべて `hub: area`・`category: area`・`verifiedAt: 2026-07-30`・完全公開・分類は全て create）:**
  `area-townsville`（P2, area-guide, id a307）, `area-newcastle`（P2, area-guide, id a308）,
  `area-wollongong`（P3, area-guide, id a309）, `area-mildura`（P2, area-guide, id a310）,
  `area-shepparton`（P2, area-guide, id a311）。
- **作成（created）slug:** 上記5件。**更新/分割（updated/split）slug: なし。統合（merged）slug: なし。リダイレクト: なし。レビュー/除外 slug: なし。**
- **統合しない理由:** 5件はいずれも新規スラッグで、地名クエリごとに検索意図が独立（タウンズビル＝北QLDの都市＋周辺ファーム拠点／ニューカッスル＝シドニー外NSWの都市・家賃控えめ／ウーロンゴン＝シドニー南の大学・通勤圏／ミルデューラ＝VIC北西のぶどう/柑橘ファーム・セカンドビザ拠点／シェパートン＝VIC北部の果物・食品加工地帯）。個別公開し `relatedSlugs` で相互リンク。
- **目的地モジュール:** `lib/content/articles/area.ts`（全て `category: "area"` / `hub: "area"`）。`mockData.ts` へは追加していない。
- **孤立記事なし:** area カテゴリページ（`app/area/page.tsx` の `GuideCategoryPage category="area"`）が公開 area 記事を自動列挙するため、5件はすべて `/area` から到達可能。各記事は一意のモジュールにのみ存在。`relatedSlugs` は公開/既存 slug と公開済み farm 地域ガイド（`region-bowen-ayr-farm`・`region-mildura-farm`・`region-shepparton-farm`）のみ参照（planned の `state-*-guide`・未公開 area slug 等は含めず dangling 回避）。
- **州ルールと現地条件の区別:** 免許・飲酒・賃貸法などは州単位、気候・交通・仕事・シーズンは都市/地域単位として記述。可変事項（家賃・時給・求人数・運賃・収穫シーズンの需要）は断定せず、最新は各公式・求人/物件サイトで確認するよう誘導。ファーム記事はセカンドビザ対象作業・地域の確認と悪質農園への注意を明示。
- **公式照合（記事反映済み・確認日 2026-07-30）:** Translink（QLD go card）／Transport for NSW（NSW Opal）／Public Transport Victoria（VIC V/Line・地域バス）／Bureau of Meteorology（気候平年値・雨季/サイクロン・低温）／Department of Home Affairs（417 Specified work）／各空港公式（Townsville/Newcastle Airport）。タウンズビルの雨季・サイクロン、NSW都市のシドニー通勤・家賃比較、VIC農業地域のセカンドビザ拠点性と夏の高温/冬の冷え込みを明示。
- **可変事項の断定回避:** 家賃・時給・求人数・運賃・収穫シーズンの需要は具体数値を断定せず、Flatmates・realestate.com.au・求人サイト・各公式で最新確認を促す。ファームは悪質農園・セカンドビザ対象確認を強調。
- **content-manifest.yaml:** 該当5件を `status: planned` → `status: published` に更新。`manifest.generated.ts` 再生成。
- **検証（マイクロバッチ範囲・各1回）:** `validate:articles`（重複 slug 0・area 21件・`OK: no article data errors`。ARTICLE_ORDER omission は既存仕様の warn のみ）、`tsc --noEmit` クリーン（exit 0）、`validate:content` 0 error / 66 warning（想定内の cannibalization のみ・dangling 0）、新規5件の `relatedSlugs` は全て公開/既存 slug に解決。
  ※フルビルド/テスト/lint/sitemap/構造化データ監査は area ハブ完了後（残り5件以下時の最終監査）にまとめて実施予定。
- **残り area slug（8件・すべて planned のまま）:** `area-griffith`, `state-nsw-guide`, `state-vic-guide`, `state-qld-guide`, `state-wa-guide`, `state-sa-guide`, `state-tas-guide`, `state-nt-guide`。
- **最初の未完了 area slug: `area-griffith`**（次回はここから再開）。
- **次のバッチ: area（`area-griffith` から継続）。** ※本セッションは area の次の5件のみ処理し、travel・その他カテゴリには着手しない。
- **変更ファイル（本チェックポイント）:** `lib/content/articles/area.ts`、`lib/content/manifest.generated.ts`（再生成）、`whv-guide-content-plan/content-manifest.yaml`、`CONTENT_MERGE_MAP.md`、`SOURCE_VERIFICATION_REPORT.md`、`BULK_PUBLISH_REPORT.md`、`BULK_PUBLISH_REMAINING.md`。
- **未解決の問題: なし。**

## チェックポイント（2026-07-30）: area マイクロバッチ #2（5件公開 / commit: feat: publish area micro-batch）

area（都市・州・地域ガイド）ハブの次の5件を公開しました（マイクロバッチ運用）。開始時点で area は18件（>5）が残っていたため、通常のマイクロバッチとして記録順の先頭5件のみを処理し、最終ハブ監査は実施していません（残り13件のため次回以降に継続）。以下が確定状態です。

- **未完了 area 件数（開始時）:** 18件（11件 `area-*` ＋ 7件 `state-*`、すべて planned）。既に公開済みは既存6件＋マイクロバッチ #1 の5件＝11件。
- **選定した5件（記録順の先頭5件）:** `area-darwin`, `area-sunshine-coast`, `area-toowoomba-gatton`, `area-bundaberg`, `area-stanthorpe`。いずれも開始時 `status: planned` で、published/merged/archived/review/excluded ではないことを確認済み。
- **分類:** 5件すべて **create**（新規スラッグ）。統合（merge）・リダイレクト・レビュー・除外・既存記事の分割は該当なし（本バッチは新規追加のみ）。
- **公開した5件（すべて `hub: area`・`category: area`・`verifiedAt: 2026-07-30`・完全公開・分類は全て create）:**
  `area-darwin`（P1, area-guide, id a302）, `area-sunshine-coast`（P2, area-guide, id a303）,
  `area-toowoomba-gatton`（P0, area-guide, id a304）, `area-bundaberg`（P1, area-guide, id a305）,
  `area-stanthorpe`（P2, area-guide, id a306）。
- **作成（created）slug:** 上記5件。**更新/分割（updated/split）slug: なし。統合（merged）slug: なし。リダイレクト: なし。レビュー/除外 slug: なし。**
- **統合しない理由:** 5件はいずれも新規スラッグで、地名クエリごとに検索意図が独立（ダーウィン＝熱帯北部の乾季/雨季・建設/季節労働／サンシャインコースト＝観光・ビーチ／トゥーンバ・ガトン＝内陸の野菜ファーム／バンダバーグ＝ワイドベイの農業・セカンドビザ拠点／スタンソープ＝グラニットベルトの寒冷な果樹地帯）。個別公開し `relatedSlugs` で相互リンク。
- **目的地モジュール:** `lib/content/articles/area.ts`（全て `category: "area"` / `hub: "area"`）。`mockData.ts` へは追加していない。
- **孤立記事なし:** area カテゴリページ（`app/area/page.tsx` の `GuideCategoryPage category="area"`）が公開 area 記事を自動列挙するため、5件はすべて `/area` から到達可能。各記事は一意のモジュールにのみ存在。`relatedSlugs` は公開/既存 slug と公開済み farm 地域ガイド（`region-gatton-lockyer`・`region-bundaberg-farm`・`region-stanthorpe-farm`）・`specified-work-postcodes`・`farm-work-clothing` のみ参照（planned の `state-*-guide`・未公開 area slug 等は含めず dangling 回避）。
- **州ルールと現地条件の区別:** 免許・飲酒・賃貸法などは州単位、気候・交通・仕事・シーズンは都市/地域単位として記述。可変事項（家賃・時給・求人数・運賃・収穫シーズンの需要）は断定せず、最新は各公式・求人/物件サイトで確認するよう誘導。ファーム記事はセカンドビザ対象作業・地域の確認と悪質農園への注意を明示。
- **公式照合（記事反映済み・確認日 2026-07-30）:** Translink（QLD go card）／Northern Territory Government（NT 公共交通）／Bureau of Meteorology（気候平年値・乾季/雨季・低温/霜・警報）／Department of Home Affairs（417 Specified work）／各空港公式（Darwin/Sunshine Coast Airport）。ダーウィンの乾季/雨季・サイクロン、トゥーンバ/スタンソープの内陸の冷え込み・霜、バンダバーグ/スタンソープのセカンドビザ拠点性を明示。
- **可変事項の断定回避:** 家賃・時給・求人数・運賃・収穫シーズンの需要は具体数値を断定せず、Flatmates・realestate.com.au・求人サイト・各公式で最新確認を促す。ファームは悪質農園・セカンドビザ対象確認を強調。
- **content-manifest.yaml:** 該当5件を `status: planned` → `status: published` に更新（`area-stanthorpe` はタイトルを記事に合わせ「…寒さ・果樹・季節労働」に統一）。`manifest.generated.ts` 再生成。
- **検証（マイクロバッチ範囲・各1回）:** `validate:articles`（重複 slug 0・area 16件・`OK: no article data errors`。ARTICLE_ORDER omission は既存仕様の warn のみ）、`tsc --noEmit` クリーン（exit 0）、`validate:content` 0 error / 66 warning（想定内の cannibalization のみ・dangling 0）、新規5件の `relatedSlugs` は全て公開/既存 slug に解決。
  ※フルビルド/テスト/lint/sitemap/構造化データ監査は area ハブ完了後（残り5件以下時の最終監査）にまとめて実施予定。
- **残り area slug（13件・すべて planned のまま）:** `area-townsville`, `area-newcastle`, `area-wollongong`, `area-mildura`, `area-shepparton`, `area-griffith`, `state-nsw-guide`, `state-vic-guide`, `state-qld-guide`, `state-wa-guide`, `state-sa-guide`, `state-tas-guide`, `state-nt-guide`。
- **最初の未完了 area slug: `area-townsville`**（次回はここから再開）。
- **次のバッチ: area（`area-townsville` から継続）。** ※本セッションは area の次の5件のみ処理し、travel・その他カテゴリには着手しない。
- **変更ファイル（本チェックポイント）:** `lib/content/articles/area.ts`、`lib/content/manifest.generated.ts`（再生成）、`whv-guide-content-plan/content-manifest.yaml`、`CONTENT_MERGE_MAP.md`、`SOURCE_VERIFICATION_REPORT.md`、`BULK_PUBLISH_REPORT.md`、`BULK_PUBLISH_REMAINING.md`。
- **未解決の問題: なし。**

## チェックポイント（2026-07-27）: area マイクロバッチ #1（5件公開 / commit: feat: publish area micro-batch）

area（都市・州・地域ガイド）ハブの最初の5件を公開しました（マイクロバッチ運用）。開始時点で area は23件（>5）が残っていたため、通常のマイクロバッチとして記録順の先頭5件のみを処理し、最終ハブ監査は実施していません（残り18件のため次回以降に継続）。以下が確定状態です。

- **未完了 area 件数（開始時）:** 23件（すべて planned）。既に公開済みは既存6件（`area-overview`・`area-sydney`・`area-melbourne`・`area-brisbane`・`area-perth-cairns`・`area-adelaide`、manifest `existing`）。
- **選定した5件（記録順の先頭5件）:** `area-gold-coast`, `area-perth`, `area-cairns`, `area-canberra`, `area-hobart`。いずれも開始時 `status: planned` で、published/merged/archived/review/excluded ではないことを確認済み。
- **分類:** 5件すべて **create**（新規スラッグ）。既存の結合記事2件は **split**（下記）。統合（merge）・リダイレクト・レビュー・除外は該当なし。
- **公開した5件（すべて `hub: area`・`category: area`・`verifiedAt: 2026-07-27`・完全公開・分類は全て create）:**
  `area-gold-coast`（P0, area-guide, id a297）, `area-perth`（P0, area-guide, id a298）,
  `area-cairns`（P0, area-guide, id a299）, `area-canberra`（P2, area-guide, id a300）,
  `area-hobart`（P2, area-guide, id a301）。
- **既存の結合記事の分割（split・公開URLは保持）:**
  - `area-brisbane`（旧「ブリスベン・ゴールドコースト」）→ **ブリスベン中心に再構成**。Gold Coast 部分を新規 `area-gold-coast` に独立させ、本文から相互リンク。URL は不変。`verifiedAt`・`officialSources` を追記。
  - `area-perth-cairns`（旧「パース・ケアンズ」結合）→ **「パース vs ケアンズ」比較・選択ガイドに再構成**（検索意図＝2都市の比較・選び方に分離）。Perth/Cairns の詳細は新規 `area-perth`・`area-cairns` に独立させ、双方向リンク。URL は保持し**リダイレクトは作成しない**（公開中URLの自動統合は行わない方針＝リポジトリの `redirects.ts`/`CONTENT_MERGE_MAP` 方針に準拠）。
- **トップページ:** `app/page.tsx` のエリアタイル「Perth / Cairns」→「Perth（`area-perth`）」に更新（結合ページを比較用に残したまま、P0 の新規専用ページを露出）。`area-perth-cairns` は `/area` 一覧・相互リンクから到達可能で孤立なし。
- **作成（created）slug:** 上記5件。**更新/分割（updated/split）slug:** `area-brisbane`・`area-perth-cairns`。**統合（merged）slug: なし。リダイレクト: なし。レビュー/除外 slug: なし。**
- **統合しない理由:** 5件はいずれも新規スラッグで、直接関連する地名どうしでも検索意図が分離（ゴールドコースト＝観光・ビーチ生活／ブリスベン＝都市生活、パース＝西海岸の都市生活／ケアンズ＝熱帯観光・ファーム拠点）。地名クエリごとに独立意図が強いため個別公開し、`relatedSlugs` で相互リンク。
- **目的地モジュール:** `lib/content/articles/area.ts`（全て `category: "area"` / `hub: "area"`）。`mockData.ts` へは追加していない。
- **孤立記事なし:** area カテゴリページ（`app/area/page.tsx` の `GuideCategoryPage category="area"`）が公開 area 記事を自動列挙するため、5件はすべて `/area` から到達可能。各記事は一意のモジュールにのみ存在。`relatedSlugs` は公開/既存 slug と公開済み farm 地域ガイド（`region-mareeba-atherton-farm`・`region-tasmania-farm`）のみ参照（planned の `state-*-guide`・`area-darwin` 等は含めず dangling 回避）。
- **州ルールと現地条件の区別:** 免許・飲酒・賃貸法などは州単位、気候・交通・仕事は都市単位として記述。可変事項（家賃・時給・求人数・運賃・シーズン需要）は断定せず、最新は各公式・求人/物件サイトで確認するよう誘導。
- **公式照合（記事反映済み・確認日 2026-07-27）:** Translink（QLD go card）／Transperth（WA SmartRider）／Transport Canberra（ACT MyWay・Light Rail）／Metro Tasmania（Greencard）／Bureau of Meteorology（気候平年値・警報）／Department of Home Affairs（417 Specified work）／各空港公式（Gold Coast/Perth/Cairns/Hobart Airport）。ケアンズの雨季・サイクロン、パースの時差（AWST）、内陸/冷涼地の防寒を明示。
- **可変事項の断定回避:** 家賃・時給・鉱業関連の賃金・運賃・求人数・収穫シーズンの需要は具体数値を断定せず、Flatmates・realestate.com.au・求人サイト・各公式で最新確認を促す。ファームは悪質農園・セカンドビザ対象確認を強調。
- **content-manifest.yaml:** 該当5件を `status: planned` → `status: published` に更新。`area-brisbane`・`area-perth-cairns` は `existing` のままタイトルのみ更新。`manifest.generated.ts` 再生成。
- **検証（マイクロバッチ範囲・各1回）:** `validate:articles`（重複 slug 0・重複パス 0・重複エクスポート 0・area 11件・`OK: no article data errors`。ARTICLE_ORDER omission は既存仕様の warn のみ）、`tsc --noEmit` クリーン（exit 0）、`validate:content` 0 error / 66 warning（想定内の cannibalization のみ・dangling 0）、新規5件の `relatedSlugs` は全て公開/既存 slug に解決。
  ※フルビルド/テスト/lint/sitemap/構造化データ監査は area ハブ完了後（残り5件以下時の最終監査）にまとめて実施予定。
- **残り area slug（18件・すべて planned のまま）:** `area-darwin`, `area-sunshine-coast`, `area-toowoomba-gatton`, `area-bundaberg`, `area-stanthorpe`, `area-townsville`, `area-newcastle`, `area-wollongong`, `area-mildura`, `area-shepparton`, `area-griffith`, `state-nsw-guide`, `state-vic-guide`, `state-qld-guide`, `state-wa-guide`, `state-sa-guide`, `state-tas-guide`, `state-nt-guide`。
- **最初の未完了 area slug: `area-darwin`**（次回はここから再開）。
- **次のバッチ: area（`area-darwin` から継続）。** ※本セッションは area の先頭5件のみ処理し、english/travel・その他カテゴリには着手しない。
- **変更ファイル（本チェックポイント）:** `lib/content/articles/area.ts`、`app/page.tsx`、`lib/content/manifest.generated.ts`（再生成）、`whv-guide-content-plan/content-manifest.yaml`、`CONTENT_MERGE_MAP.md`、`SOURCE_VERIFICATION_REPORT.md`、`BULK_PUBLISH_REPORT.md`、`BULK_PUBLISH_REMAINING.md`。
- **未解決の問題: なし。**

## チェックポイント（2026-07-27）: english マイクロバッチ #3＝english ハブ完了（3件公開＋最終監査 / commit: feat: complete english content batch）

english（英語学習・会話）ハブの残り全3件を公開し、**ハブを完了**しました。開始時点で残りは3件（≤5）だったため、全3件を処理し、最終ハブ監査（フルビルド／lint／テスト／sitemap）を実施しました。以下が確定状態です。

- **未完了 english 件数（開始時）:** 3件（すべて planned）。既に公開済みは既存2件（`english-prep`・`language-school`）＋マイクロバッチ #1・#2 の10件。
- **処理した3件（残り全件）:** `listening-resources`, `language-exchange-meetup`, `ielts-pte-after-wh`。いずれも開始時 `status: planned` で、published/merged/archived/review/excluded ではないことを確認済み。
- **分類:** 3件すべて **create**（新規スラッグ）。統合（merge）・レビュー（review）・除外（exclude）・更新（update）は該当なし。
- **公開した3件（すべて `hub: english`・`category: english`・完全公開・分類は全て create）:**
  `listening-resources`（P2, learning, id a294）, `language-exchange-meetup`（P2, social, id a295）,
  `ielts-pte-after-wh`（P2, comparison, id a296）。
- **作成（created）slug:** 上記3件。**更新（updated）slug: なし。統合（merged）slug: なし。リダイレクト: なし。レビュー/除外 slug: なし。**
- **統合しない理由:** 3件はいずれも新規スラッグで、既存の公開記事とは検索意図が明確に異なる（リスニング教材の選び方・使い方／言語交換・Meetupで英語環境を作る方法／IELTS・PTEの試験選び）。各記事は独立した検索意図が強いため個別公開し、`relatedSlugs` で相互リンク。
- **目的地モジュール:** `lib/content/articles/english.ts`（全て `category: "english"` / `hub: "english"`）。`mockData.ts` へは追加していない。
- **孤立記事なし:** english カテゴリページ（`app/english/page.tsx` の `GuideCategoryPage category="english"`）が公開 english 記事を自動列挙するため、3件はすべて `/english` から到達可能。各記事は一意のモジュールにのみ存在。`make-friends-australia` 等は未公開（planned）のため `relatedSlugs` に含めず、公開/既存 slug のみ参照（dangling 回避）。
- **客観的事実と個人的推奨の区別:** 教材選び・学習法・言語交換の参加は「人により合う/合わない」「客観的な正解はない」と明示し推奨として提示。ビザの英語要件・受入試験・必要スコアなど変わりうる/公式判断が要る事項は断定せず公式へ誘導。
- **公式照合（記事反映済み・確認日 2026-07-27）:** `ielts-pte-after-wh`＝Department of Home Affairs「English language visa requirements」（2025年8月7日から受入試験が変更、オンライン自宅受験はビザ目的で不可、必要スコアはビザ subclass で異なる。最終更新 2026-02-02）＋IELTS 公式＋PTE Academic 公式。`listening-resources`・`language-exchange-meetup` は変わりうる数値・料金・法規の主張を含まないため公式ソースは付さず、`verifiedAt: 2026-07-27` のみ付与。
- **可変事項の断定回避:** ビザの必要英語スコア・受入試験は年度・subclass・目的で異なるとして移民局・各ビザ案内・登録移民代理人へ誘導。具体的なバンドスコアは記載せず。言語交換・Meetup参加時の安全（公共の場で会う・個人情報や金銭のやり取りに注意）を明示。
- **content-manifest.yaml:** 該当3件を `status: planned` → `status: published` に更新。`manifest.generated.ts` 再生成。
- **最終ハブ監査（english ハブ完了に伴い実施）:** `validate:articles`（重複 slug 0・重複パス 0・重複エクスポート 0・english 16件・`OK: no article data errors`）、`tsc --noEmit` クリーン（exit 0）、`validate:content` 0 error / 66 warning（想定内の cannibalization のみ・dangling 0）、`test:content` 5 pass / 0 fail、`eslint` エラーなし、`next build` フルビルド成功（`/guides/[slug]` SSGで3件を静的HTML生成、`/sitemap.xml`・`/robots.txt` 生成、型エラーなし）。
- **修正1回（リトライ枠内）:** 新規記事の本文に半角ダブルクオート（`"…"`）を混入させ tsc/パーサが構文エラー。該当箇所を和文引用符「…」に、英語フレーズは `\"…\"` にエスケープして解消（1回の修正で完了）。
- **english ハブ 13/13 完了。次の未完了 english slug: なし。**
- **次のバッチ: なし（english 完了）。** ※本セッションは english の残り全件のみ処理し、area/travel には着手しない。
- **変更ファイル（本チェックポイント）:** `lib/content/articles/english.ts`、`lib/content/manifest.generated.ts`（再生成）、`whv-guide-content-plan/content-manifest.yaml`、`CONTENT_MERGE_MAP.md`、`SOURCE_VERIFICATION_REPORT.md`、`BULK_PUBLISH_REPORT.md`、`BULK_PUBLISH_REMAINING.md`。
- **未解決の問題: なし。**

## チェックポイント（2026-07-27）: english マイクロバッチ #2（5件公開 / commit: feat: publish english micro-batch）

english（英語学習・会話）ハブの次の5件を公開しました（マイクロバッチ運用）。開始時点で english は8件（>5）が残っていたため、通常のマイクロバッチとして記録順の先頭5件のみを処理しました。以下が確定状態です。

- **未完了 english 件数（開始時）:** 8件（すべて planned）。既に公開済みは既存2件（`english-prep`・`language-school`）＋マイクロバッチ #1 の5件。
- **選定した5件（記録順の先頭5件）:** `bank-tax-english`, `medical-english`, `car-trouble-english`, `phone-call-english`, `email-message-templates`。いずれも開始時 `status: planned` で、published/merged/archived/review/excluded ではないことを確認済み。
- **分類:** 5件すべて **create**（新規スラッグ）。統合（merge）・レビュー（review）・除外（exclude）・更新（update, 内部リンクを除く）は該当なし。
- **公開した5件（すべて `hub: english`・`category: english`・完全公開・分類は全て create）:**
  `bank-tax-english`（P1, language, id a289）, `medical-english`（P0, language, id a290）,
  `car-trouble-english`（P1, language, id a291）, `phone-call-english`（P1, learning, id a292）,
  `email-message-templates`（P0, template, id a293）。
- **作成（created）slug:** 上記5件。**更新（updated）slug:** `workplace-english`（内部リンクのみ）。
  **統合（merged）slug: なし。リダイレクト: なし。レビュー/除外 slug: なし。**
- **統合しない理由:** 5件はいずれも新規スラッグで、既存の公開記事とは検索意図が明確に異なる（銀行・税・年金の問い合わせ英語／医療の症状伝達英語／車トラブル英語／電話英語の練習法／英文メール・SMSテンプレート集）。各記事は場面特化のフレーズ集・実務テンプレで独立意図が強いため個別公開し、`relatedSlugs` で相互リンク。
- **目的地モジュール:** `lib/content/articles/english.ts`（全て `category: "english"` / `hub: "english"`）。`mockData.ts` へは追加していない。
- **既存記事の内部リンク:** `workplace-english` の `relatedSlugs` に `bank-tax-english`・`phone-call-english` を追記（本文・slug・URL・公開状態は不変）。孤立記事なし。
- **孤立記事なし:** english カテゴリページ（`app/english/page.tsx` の `GuideCategoryPage category="english"`）が公開 english 記事を自動列挙するため、5件はすべて `/english` から到達可能。各記事は一意のモジュールにのみ存在。
- **客観的事実と個人的推奨の区別:** 学習法・電話練習・テンプレは「人により合う/合わない」「例であり調整前提」と明示し推奨として提示。税率・手数料・医療判断・事故の届出義務など変わりうる/専門判断が要る事項は断定せず公式・専門家へ誘導。
- **公式照合（記事反映済み・確認日 2026-07-27）:** `bank-tax-english`＝ATO Tax file number（TFNの申請は無料）。`medical-english`＝healthdirect（政府運営の無料健康相談・症状チェッカー／電話 1800 022 222）＋Triple Zero (000)。`car-trouble-english`＝Triple Zero (000)。`phone-call-english`・`email-message-templates` は変わりうる数値・料金・法規の主張を含まないため公式ソースは付さず、`verifiedAt: 2026-07-27` のみ付与。
- **可変事項の断定回避:** 税率・控除・申告可否は年度・個人差が大きいとして ATO・登録税理士へ。医療の診断・治療は医療者へ、緊急時は000、緊急でない相談は healthdirect へ誘導。事故の警察届出義務は州で異なるとして各州交通当局・警察へ。修理は事前見積もり（quote）を推奨。欠勤の診断書要否は雇用形態・職場・Award で異なるとして契約＋Fair Work へ誘導。
- **content-manifest.yaml:** 該当5件を `status: planned` → `status: published` に更新。`manifest.generated.ts` 再生成。
- **検証（マイクロバッチ範囲・各1回）:** `validate:articles`（重複 slug 0・重複パス 0・重複エクスポート 0・english 13件・`OK: no article data errors`。ARTICLE_ORDER omission は既存仕様の warn のみ）、`tsc --noEmit` クリーン（exit 0）、`validate:content` 0 error / 66 warning（想定内の cannibalization のみ・dangling 0）、新規5件の `relatedSlugs` は全て公開 slug に解決。
  ※フルビルド/テスト/lint/sitemap/RSS/構造化データ監査は english ハブ完了後（残り5件以下時の最終監査）にまとめて実施予定。
- **残り english slug（3件・すべて planned のまま）:** `listening-resources`, `language-exchange-meetup`, `ielts-pte-after-wh`。
- **最初の未完了 english slug: `listening-resources`**（次回はここから再開。残り3件＝次回は english ハブ最終監査を実施）。
- **次のバッチ: english（`listening-resources` から継続・残り3件で最終監査）。** ※本セッションは english の先頭5件のみ処理し、area/travel には着手しない。
- **変更ファイル（本チェックポイント）:** `lib/content/articles/english.ts`、`lib/content/manifest.generated.ts`（再生成）、`whv-guide-content-plan/content-manifest.yaml`、`CONTENT_MERGE_MAP.md`、`SOURCE_VERIFICATION_REPORT.md`、`BULK_PUBLISH_REPORT.md`、`BULK_PUBLISH_REMAINING.md`。
- **未解決の問題: なし。**

## チェックポイント（2026-07-27）: english マイクロバッチ #1（5件公開 / commit: feat: publish english micro-batch）

english（英語学習・会話）ハブの最初の5件を公開しました（マイクロバッチ運用）。開始時点で english は13件（>5）が残っていたため、通常のマイクロバッチとして記録順の先頭5件のみを処理しました。以下が確定状態です。

- **未完了 english 件数（開始時）:** 13件（すべて planned）。既存公開は `english-prep`・`language-school` の2件（manifest `existing`）。
- **選定した5件（記録順の先頭5件）:** `australian-english-accent`, `australian-slang`, `workplace-english`, `hospitality-english`, `housing-english`。いずれも開始時 `status: planned` で、published/merged/archived/review/excluded ではないことを確認済み。
- **分類:** 5件すべて **create**（新規スラッグ）。統合（merge）・レビュー（review）・除外（exclude）・更新（update, 内部リンクを除く）は該当なし。
- **公開した5件（すべて `hub: english`・`category: english`・完全公開・分類は全て create）:**
  `australian-english-accent`（P1, learning, id a284）, `australian-slang`（P1, reference, id a285）,
  `workplace-english`（P0, language, id a286）, `hospitality-english`（P1, language, id a287）,
  `housing-english`（P0, language, id a288）。
- **作成（created）slug:** 上記5件。**更新（updated）slug:** `english-prep`・`language-school`（内部リンクのみ）。
  **統合（merged）slug: なし。リダイレクト: なし。レビュー/除外 slug: なし。**
- **統合しない理由:** 5件はいずれも新規スラッグで、既存公開記事（`english-prep`＝渡航前準備の総論／`language-school`＝語学学校の選び方）とは検索意図が明確に異なる（豪州アクセントの聞き取り練習／スラングのリファレンス／職場英語フレーズ／接客英語フレーズ／家探し英語フレーズ）。各記事は場面特化のフレーズ集・学習法で独立意図が強いため個別公開し、`relatedSlugs` で相互リンク。
- **目的地モジュール:** `lib/content/articles/english.ts`（全て `category: "english"` / `hub: "english"`）。`mockData.ts` へは追加していない。
- **既存記事の内部リンク:** `english-prep` の `relatedSlugs` に `workplace-english`・`australian-english-accent`、`language-school` の `relatedSlugs` に `australian-english-accent`・`australian-slang` を追記（本文・slug・URL・公開状態は不変）。孤立記事なし。
- **孤立記事なし:** english カテゴリページ（`app/english/page.tsx` の `GuideCategoryPage category="english"`）が公開 english 記事を自動列挙するため、5件はすべて `/english` から到達可能。各記事は一意のモジュールにのみ存在。
- **客観的事実と個人的推奨の区別:** 学習法・教材選び・スラング使用は「人により合う/合わない」「客観的な正解はない」と明示し推奨として提示。労働条件・Bond・アレルギー表示など変わりうる制度事項は断定せず公式へ誘導。
- **公式照合（記事反映済み・確認日 2026-07-27）:** `workplace-english`＝Fair Work Ombudsman（労働条件・休暇・シフト／Visa holders and migrants）。`hospitality-english`＝Food Standards Australia New Zealand（Allergen labelling）＋Fair Work Ombudsman（Fast food, restaurants and cafés）。`housing-english`＝NSW Government Renting／Consumer Affairs Victoria／RTA (QLD)。`australian-english-accent`・`australian-slang` は変わりうる数値・料金・法規の主張を含まないため公式ソースは付さず、`verifiedAt: 2026-07-27` のみ付与。
- **可変事項の断定回避:** 病欠の診断書要否・有給病気休暇は雇用形態・職場・Award で異なるとして契約＋Fair Work へ誘導。祝日サーチャージ・チップは店・時期で異なるとして勤務先ルールへ。Bond の上限・預け先・通知期間は州で異なるとして各州当局（NSW/VIC/QLD 等）へ誘導。
- **content-manifest.yaml:** 該当5件を `status: planned` → `status: published` に更新。`manifest.generated.ts` 再生成。
- **検証（マイクロバッチ範囲・各1回）:** `validate:articles`（重複 slug 0・重複パス 0・重複エクスポート 0・english 8件・`OK: no article data errors`。ARTICLE_ORDER omission は既存仕様の warn のみ）、`tsc --noEmit` クリーン（exit 0）、`validate:content` 0 error / 66 warning（想定内の cannibalization のみ・dangling 0）、新規5件の `relatedSlugs` は全て公開 slug に解決。
  ※フルビルド/テスト/lint/sitemap/RSS/構造化データ監査は english ハブ完了後（残り5件以下時の最終監査）にまとめて実施予定。
- **残り english slug（8件・すべて planned のまま）:** `bank-tax-english`, `medical-english`, `car-trouble-english`, `phone-call-english`, `email-message-templates`, `listening-resources`, `language-exchange-meetup`, `ielts-pte-after-wh`。
- **最初の未完了 english slug: `bank-tax-english`**（次回はここから再開）。
- **次のバッチ: english（`bank-tax-english` から継続）。** ※本セッションは english の先頭5件のみ処理し、area/travel には着手しない。
- **変更ファイル（本チェックポイント）:** `lib/content/articles/english.ts`、`lib/content/manifest.generated.ts`（再生成）、`whv-guide-content-plan/content-manifest.yaml`、`CONTENT_MERGE_MAP.md`、`SOURCE_VERIFICATION_REPORT.md`、`BULK_PUBLISH_REPORT.md`、`BULK_PUBLISH_REMAINING.md`。
- **未解決の問題: なし。**

## チェックポイント（2026-07-27）: daily-life マイクロバッチ #4 = 最終（6件公開・ハブ完了 / commit: feat: complete daily life content batch）

daily-life（日常生活・食事・買い物）ハブの残り全件を公開し、**ハブを完了**しました。開始時点で残りは6件（≤7）だったため、全6件を処理し、最終ハブ監査（フルビルド／lint／テスト／sitemap）を実施しました。以下が確定状態です。

- **公開した6件（すべて `verifiedAt: 2026-07-27`・`officialSources` 付き・完全公開・分類は全て create）:**
  `gym-fitness-guide`（health, P2, checklist, id a278）, `haircut-barber-english`（english, P3, language, id a279）,
  `public-toilets-showers`（transport, P3, guide, id a280）, `home-internet-guide`（sim, P2, guide, id a281）,
  `online-scams-cybersecurity`（money, P0, security, id a282）, `phone-lost-stolen`（sim, P1, problem-solving, id a283）。
  `hub` は全て `daily-life`、`category` は health/english/transport/sim/money に分散配置。
- **作成（created）slug:** 上記6件。**更新（updated）slug: なし（本文リンクの追記なし）。**
  **統合（merged）slug: なし。リダイレクト: なし。レビュー/除外 slug: なし。**
- **統合しない理由:** 6件はいずれも新規スラッグで、既存公開記事とは検索意図が明確に異なる（ジム契約／美容院・バーバー英語／無料トイレ・シャワー／ホームインターネット／オンライン詐欺対策／スマホ紛失盗難対応）。新規6件どうしは意図の近い組を双方向リンク（`online-scams-cybersecurity` ↔ `phone-lost-stolen`、`home-internet-guide` ↔ `sim-guide` 等）。
- **孤立記事なし:** 各カテゴリページ（`/health`・`/english`・`/transport`・`/sim`・`/money` の `GuideCategoryPage`）が公開記事を自動列挙するため、6件はすべて到達可能。
- **公式照合（記事反映済み・確認日 2026-07-27）:** ACCC（Consumer rights and guarantees）／National Public Toilet Map（Dept of Health, Disability and Ageing・National Continence Program）／NBN Co（nbn 公式）／Scamwatch（Jobs and employment scams）／Australian Cyber Security Centre（Multi-factor authentication・How to secure your devices）。IDCARE 1800 595 160／ACSC 1300 CYBER1（1300 292 371）を記載。
- **可変事項の断定回避:** ジムの解約・クーリングオフは契約・州で異なるため断定せず契約書＋各州 Fair Trading／ACCC へ誘導。美容院の料金・チップは店で異なる旨を明示。トイレ・シャワーの設備/開館/料金は場所で異なるため公式マップ確認へ誘導。nbn の料金・速度・提供状況は業者・住所で異なるとして断定回避。詐欺の手口・連絡先は変わりうるため Scamwatch/cyber.gov.au 確認へ誘導。特定金額・法規・罰則は断定せず。
- **content-manifest.yaml:** 該当6件を `status: planned` → `status: published` に更新。`manifest.generated.ts` 再生成。
- **検証（マイクロバッチ範囲）:** `validate:articles`（重複0・`OK: no article data errors`）、`tsc --noEmit` クリーン（exit 0）、`validate:content` 0 error / 66 warning（想定内の cannibalization のみ・dangling 0）。
- **最終ハブ監査（残り≤7のため実施）:** `test:content`（5 pass / 0 fail）、`eslint`（エラーなし）、`next build`（フルビルド成功。`/guides/[slug]` を SSG で生成、`/sitemap.xml`・`/robots.txt` 生成、型エラーなし）。RSS: 本プロジェクトに RSS ルートは無し（N/A）。構造化データはビルド成功で健全性を確認。
- **daily-life ハブ: 21/21 件すべて公開完了 ✅。残り daily-life slug: なし。次の未完了 daily-life slug: なし（ハブ完了）。**
- **次のバッチ: なし（daily-life 完了）。※本セッションは daily-life のみを処理し、他カテゴリは未着手。**
- **変更ファイル（本チェックポイント）:** `lib/content/articles/health.ts`、`lib/content/articles/english.ts`、
  `lib/content/articles/transport.ts`、`lib/content/articles/sim.ts`、`lib/content/articles/money.ts`、
  `lib/content/manifest.generated.ts`（再生成）、`whv-guide-content-plan/content-manifest.yaml`、
  `CONTENT_MERGE_MAP.md`、`SOURCE_VERIFICATION_REPORT.md`、`BULK_PUBLISH_REPORT.md`、`BULK_PUBLISH_REMAINING.md`。
- **未解決の問題: なし。**

## チェックポイント（2026-07-27）: daily-life マイクロバッチ #3（5件公開 / commit: feat: publish daily life micro-batch）

daily-life（日常生活・食事・買い物）ハブの次の5件を公開しました（マイクロバッチ運用）。開始時点で daily-life は11件（>5）が残っていたため、通常のマイクロバッチとして記録順の先頭5件のみを処理しました。以下が確定状態です。

- **公開した5件（すべて `verifiedAt: 2026-07-27`・`officialSources` 付き・完全公開・分類は全て create）:**
  `australia-clothing-seasons`（clothing, P0, guide, id a273）, `buy-furniture-household-items`（housing, P1, comparison, id a274）,
  `op-shop-guide`（clothing, P3, guide, id a275）, `post-office-courier`（arrival, P1, how-to, id a276）,
  `library-guide`（arrival, P1, guide, id a277）。`hub` は全て `daily-life`、`category` は clothing/housing/arrival に分散配置。
- **選定 slug:** 上記5件（`BULK_PUBLISH_REMAINING.md` / manifest の記録順の先頭5件）。
- **作成（created）slug:** 上記5件。**更新（updated）slug:** `clothing-guide`（内部リンクのみ）。
  **統合（merged）slug: なし。リダイレクト: なし。レビュー/除外 slug: なし。**
- **統合しない理由:** 5件はいずれも新規スラッグで、既存公開記事とは検索意図が明確に異なる（都市・季節別の服装／家具・生活用品の新品中古比較と詐欺対策／Op Shopの使い方・寄付／Australia Postの使い方／図書館の活用）。`australia-clothing-seasons` は既存 `clothing-guide`（服装・気候の総論＋持ち物）に対し、季節・地域別の詳細（雨季・寒暖差・UV・重ね着）に深掘りする各論のため統合せず、双方向リンクで接続。
- **既存記事の内部リンク:** `clothing-guide` の `relatedSlugs` に `australia-clothing-seasons` を追記（本文・slug・URL・公開状態は不変）。孤立記事なし。
- **孤立記事なし:** 各カテゴリページ（`/clothing`・`/housing`・`/arrival` の `GuideCategoryPage`）が公開記事を自動列挙するため、5件はすべて到達可能。
- **公式照合（記事反映済み・確認日 2026-07-27）:** ARPANSA（Ultraviolet radiation index）＋Bureau of Meteorology（Climate averages）／ACCC Scamwatch（Buying and selling scams、IDCARE 1800 595 160）／Australia Post（Receiving＝追跡・PO Box・MyPost・Parcel Locker）／St Vincent de Paul Society（Vinnies）／State Library of NSW（Public library services）。
- **可変事項の断定回避:** 服装は都市・季節・UVで変わるため断定せず BOM・ARPANSA の確認へ誘導（UV3以上で日焼け対策）。家具・生活用品は新品/中古の使い分けを示し、個人売買の詐欺対策は Scamwatch に準拠（実物確認・名義一致・安全な決済）。郵便の配達目安（おおむね5営業日）・PO Box年会費・図書館の印刷料金/貸出ルール/開館時間は地域・機関で異なる旨を明示し、特定金額は断定せず公式確認へ誘導。
- **content-manifest.yaml:** 該当5件を `status: planned` → `status: published` に更新。`manifest.generated.ts` 再生成。
- **検証（マイクロバッチ範囲・各1回）:** `validate:articles`（重複0・`OK: no article data errors`。ARTICLE_ORDER omission は既存仕様の warn のみ）、`tsc --noEmit` クリーン（exit 0）、`validate:content` 0 error / 66 warning（想定内の cannibalization のみ）、新規5件の `relatedSlugs` は全て公開 slug に解決（dangling 0）。
  ※フルビルド/テスト/lint/sitemap/RSS/構造化データ監査は daily-life ハブ完了後（残り5件以下時の最終監査）にまとめて実施予定。
- **残り daily-life slug（6件・すべて planned のまま）:** `gym-fitness-guide`, `haircut-barber-english`, `public-toilets-showers`,
  `home-internet-guide`, `online-scams-cybersecurity`, `phone-lost-stolen`。
- **最初の未完了 daily-life slug: `gym-fitness-guide`**（次回はここから再開）。
- **次のバッチ: daily-life（`gym-fitness-guide` から継続）。** ※本セッションは daily-life の次の5件のみ処理。
- **変更ファイル（本チェックポイント）:** `lib/content/articles/clothing.ts`、`lib/content/articles/housing.ts`、
  `lib/content/articles/arrival.ts`、`lib/content/manifest.generated.ts`（再生成）、
  `whv-guide-content-plan/content-manifest.yaml`、`CONTENT_MERGE_MAP.md`、`SOURCE_VERIFICATION_REPORT.md`、
  `BULK_PUBLISH_REPORT.md`、`BULK_PUBLISH_REMAINING.md`。
- **未解決の問題: なし。**

## チェックポイント（2026-07-27）: daily-life マイクロバッチ #2（5件公開 / commit: feat: publish daily life micro-batch）

daily-life（日常生活・食事・買い物）ハブの次の5件を公開しました（マイクロバッチ運用）。開始時点で daily-life は16件（>5）が残っていたため、通常のマイクロバッチとして記録順の先頭5件のみを処理しました。以下が確定状態です。

- **公開した5件（すべて `verifiedAt: 2026-07-27`・`officialSources` 付き・完全公開・分類は全て create）:**
  `food-storage-share-house`（food, P2, guide, id a268）, `tap-water-drinking`（food, P2, faq, id a269）,
  `shopping-surcharges-tipping`（money, P0, guide, id a270）, `alcohol-id-rules`（food, P1, legal, id a271）,
  `laundry-guide`（clothing, P2, how-to, id a272）。`hub` は全て `daily-life`、`category` は food/money/clothing に分散配置。
- **選定 slug:** 上記5件（`BULK_PUBLISH_REMAINING.md` / manifest の記録順の先頭5件）。
- **作成（created）slug:** 上記5件。**更新（updated）slug:** `food-guide`・`clothing-guide`（内部リンクのみ）。
  **統合（merged）slug: なし。リダイレクト: なし。レビュー/除外 slug: なし。**
- **統合しない理由:** 5件はいずれも新規スラッグで、既存公開記事とは検索意図が明確に異なる（シェアハウスの食品保存／水道水の可否・災害時確認／カード追加料金・チップ／飲酒の身分証・州法差／洗濯・コインランドリー）。独立意図が強いため個別公開し `relatedSlugs` で相互リンク。
- **既存記事の内部リンク:** `food-guide` の `relatedSlugs` に新規3件（`food-storage-share-house`／`tap-water-drinking`／`alcohol-id-rules`）、`clothing-guide` の `relatedSlugs` に `laundry-guide` を追記（本文・slug・URL・公開状態は不変）。孤立記事なし。
- **孤立記事なし:** 各カテゴリページ（`/food`・`/money`・`/clothing` の `GuideCategoryPage`）が公開記事を自動列挙するため、5件はすべて到達可能。
- **公式照合（記事反映済み・確認日 2026-07-27）:** Food Standards Australia New Zealand（Food safety basics）／healthdirect（Drinking water and your health）＋NHMRC（Australian Drinking Water Guidelines）＋NSW Health（boil water alert）／ACCC（Card surcharges）／NHMRC（Alcohol guidelines）＋NSW Liquor & Gaming／ACCC Product Safety（Care labelling）。
- **可変事項の断定回避:** ACCC のカードサーチャージ制度は**2026年10月1日から Visa/Mastercard/eftpos がサーチャージ禁止予定**であることを日付付きで明記し「変更されうる制度」と警告。飲酒は法定18歳（全国一律）だが受け入れID・二次供給・営業時間は**州で異なる**として各州当局へ誘導し、具体的な金額・罰則は断定せず。水道水は原則安全だが雨水タンク・井戸水・災害時（boil water alert）の例外と州の管理責任を明示。
- **content-manifest.yaml:** 該当5件を `status: planned` → `status: published` に更新。`manifest.generated.ts` 再生成（existing 47 / planned 338）。
- **検証（マイクロバッチ範囲・各1回）:** `validate:articles`（重複0・重複パス0・重複エクスポート0・`OK: no article data errors`。ARTICLE_ORDER omission は既存仕様の warn のみ）、`tsc --noEmit` クリーン（exit 0）、`validate:content` 0 error / 66 warning（想定内の cannibalization のみ）、新規5件の `relatedSlugs` は全て公開 slug に解決（dangling 0）。
  ※フルビルド/テスト/lint/sitemap/RSS/構造化データ監査は daily-life ハブ完了後（残り5件以下時の最終監査）にまとめて実施予定。
- **残り daily-life slug（11件・すべて planned のまま）:** `australia-clothing-seasons`, `buy-furniture-household-items`,
  `op-shop-guide`, `post-office-courier`, `library-guide`, `gym-fitness-guide`, `haircut-barber-english`,
  `public-toilets-showers`, `home-internet-guide`, `online-scams-cybersecurity`, `phone-lost-stolen`。
- **最初の未完了 daily-life slug: `australia-clothing-seasons`**（次回はここから再開）。
- **次のバッチ: daily-life（`australia-clothing-seasons` から継続）。** ※本セッションは daily-life の次の5件のみ処理。
- **変更ファイル（本チェックポイント）:** `lib/content/articles/food.ts`、`lib/content/articles/money.ts`、
  `lib/content/articles/clothing.ts`、`lib/content/manifest.generated.ts`（再生成）、
  `whv-guide-content-plan/content-manifest.yaml`、`CONTENT_MERGE_MAP.md`、`SOURCE_VERIFICATION_REPORT.md`、
  `BULK_PUBLISH_REPORT.md`、`BULK_PUBLISH_REMAINING.md`。
- **未解決の問題: なし。**

## チェックポイント（2026-07-27）: daily-life マイクロバッチ #1（5件公開 / commit: feat: publish daily life micro-batch）

daily-life（日常生活・食事・買い物）ハブの最初の5件を公開しました（マイクロバッチ運用）。開始時点で daily-life は21件（>5）が残っていたため、通常のマイクロバッチとして先頭5件のみを処理しました。以下が確定状態です。

- **公開した5件（すべて `verifiedAt: 2026-07-27`・`officialSources` 付き・完全公開・分類は全て create）:**
  `supermarket-comparison`（food, P0, comparison, id a263）, `grocery-saving-tips`（food, P0, finance, id a264）,
  `asian-japanese-groceries`（food, P1, guide, id a265）, `cheap-meal-prep`（food, P1, food, id a266）,
  `australian-oven-guide`（food, P2, how-to, id a267）。すべて `category: "food"` / `hub: "daily-life"`。
- **選定 slug:** 上記5件（`BULK_PUBLISH_REMAINING.md` / manifest の記録順の先頭5件）。
- **作成（created）slug:** 上記5件。**更新（updated）slug:** `food-guide`（内部リンクのみ）。
  **統合（merged）slug: なし。リダイレクト: なし。レビュー/除外 slug: なし。**
- **統合しない理由:** 5件はいずれも新規スラッグで、既存公開の `food-guide`（食費・自炊・スーパー・外食の総論）とは
  検索意図が明確に異なる（3大スーパー比較／食費節約テク／日本・アジア食材の入手先／作り置きレシピ／オーブン・コンロの使い方）。
  総論に対する各論の深掘りで有用コンテンツの重複は 60–70% 未満、独立意図が強いため個別公開し `relatedSlugs` で相互リンク。
- **既存記事の内部リンク:** `food-guide` の `relatedSlugs` に新規4件（`supermarket-comparison`／`grocery-saving-tips`／
  `cheap-meal-prep`／`asian-japanese-groceries`）を追記（本文・slug・URL・公開状態は不変）。孤立記事なし。
- **孤立記事なし:** food カテゴリページ（`app/food/page.tsx` の `GuideCategoryPage category="food"`）が公開 food 記事を
  自動列挙するため、5件はすべて `/food` から到達可能。
- **公式照合（記事反映済み）:** Everyday Rewards（Woolworths 公式）／Flybuys（Coles 公式）／ALDI Australia／
  Food Standards Australia New Zealand（Food safety basics）／Moneysmart（ASIC）／Department of Agriculture,
  Fisheries and Forestry（食品の持込・郵送）／Energy Safe Victoria（家庭のガス機器の安全）。企業公式は当該サービスの
  記述のみに使用。
- **可変事項の断定回避:** スーパーの価格・特売・会員特典は変動するため特定金額を断定せず「確認日 2026-07-27」を明記し
  各社アプリ・店頭確認へ誘導。ALDI の店舗網（NT 無し・地方は IGA 中心）、食品持込の可否（DAFF）、ガス機器操作（機種差）を明示。
- **content-manifest.yaml:** 該当5件を `status: planned` → `status: published` に更新。`manifest.generated.ts` 再生成。
- **検証（マイクロバッチ範囲・各1回）:** `validate:articles`（ユニーク slug 267・重複0・重複パス0・重複エクスポート0・
  food 6件・`OK: no article data errors`。ARTICLE_ORDER omission は既存仕様の warn のみ）、`tsc --noEmit` クリーン（exit 0）、
  `validate:content` 0 error / 66 warning（想定内の cannibalization のみ）、新規5件の `relatedSlugs` は全て公開 slug に解決（dangling 0）。
  ※フルビルド/テスト/lint/sitemap/RSS/構造化データ監査は daily-life ハブ完了後（残り5件以下時の最終監査）にまとめて実施予定。
- **残り daily-life slug（16件・すべて planned のまま）:** `food-storage-share-house`, `tap-water-drinking`,
  `shopping-surcharges-tipping`, `alcohol-id-rules`, `laundry-guide`, `australia-clothing-seasons`,
  `buy-furniture-household-items`, `op-shop-guide`, `post-office-courier`, `library-guide`, `gym-fitness-guide`,
  `haircut-barber-english`, `public-toilets-showers`, `home-internet-guide`, `online-scams-cybersecurity`, `phone-lost-stolen`。
- **最初の未完了 daily-life slug: `food-storage-share-house`**（次回はここから再開）。
- **次のバッチ: daily-life（`food-storage-share-house` から継続）。** ※本セッションは daily-life の先頭5件のみ処理。
- **変更ファイル（本チェックポイント）:** `lib/content/articles/food.ts`、`lib/content/manifest.generated.ts`（再生成）、
  `whv-guide-content-plan/content-manifest.yaml`、`CONTENT_MERGE_MAP.md`、`SOURCE_VERIFICATION_REPORT.md`、
  `BULK_PUBLISH_REPORT.md`、`BULK_PUBLISH_REMAINING.md`。
- **未解決の問題: なし。**

## チェックポイント（2026-07-27）: health マイクロバッチ #4＝**health ハブ完了**（残り2件公開＋最終ハブ監査 / commit: feat: complete health content batch）

health（医療・健康・安全）ハブの**残り2件を公開し、health ハブを完了**しました（マイクロバッチ #4）。残り2件（≤5）だったため全件処理し、続けて**最終 health ハブ監査**を実施しました。

- **公開した2件（すべて `verifiedAt: 2026-07-27`・`officialSources` 付き・完全公開・分類は全て create）:**
  `flood-cyclone-safety`（health, P0, id a261）, `heatwave-severe-weather`（health, P1, id a262）。
- **選定 slug:** 上記2件（`BULK_PUBLISH_REMAINING.md` / manifest の記録順の残り全件）。
- **作成（created）slug:** 上記2件。**統合（merged）slug: なし。リダイレクト: なし。レビュー/除外 slug: なし。**
- **統合しない理由:** 2件はいずれも新規スラッグで、既存公開記事とは検索意図が明確に異なる（洪水・サイクロンへの備えと警報・避難／熱波・激しい悪天候の警報確認）。独立意図が強いため個別公開し `relatedSlugs` で相互リンク。
- **既存3記事（`medicare-oshc`／`safety-emergency`／`mental-health`）の強化（updated）:** 最終監査の要件（公開 health 記事はすべて `verifiedAt` と最新の公式ソースを持つ）を満たすため、3件に `hub: "health"`・`verifiedAt: "2026-07-27"`・`officialSources` を追記。本文・タイトル・slug・公開状態・URL は不変。
  - `medicare-oshc`: Services Australia（RHCA）／healthdirect（Going to a GP）／privatehealth.gov.au（OVHC）。
  - `safety-emergency`: Triple Zero（000）／Police Assistance Line（131 444）／Smartraveller。
  - `mental-health`: healthdirect（Mental health）／Lifeline（13 11 14）／Beyond Blue。
- **公式照合（新規2件・記事反映済み）:** Bureau of Meteorology（洪水・サイクロン・熱波・悪天候の Watch/Warning）・State Emergency Service（SES 132 500）・Triple Zero（000）。「If it's flooded, forget it」、サイクロンシーズン（QLD/NT/WA北部・11〜4月）、雷雨ぜんそくなどを反映。
- **可変事項の断定回避:** 警報カテゴリ・避難指示・道路閉鎖は州・時期で変わるため、BOM／州 SES／VicEmergency 等の州別公式へ誘導し断定を避けた。
- **content-manifest.yaml:** 該当2件を `status: planned` → `status: published` に更新。`manifest.generated.ts` 再生成。

### 最終 health ハブ監査（2026-07-27・全件対象）

- **公開 health 記事: 20 件**（計画公開 17 件＋既存/オリジナル 3 件）。**planned/merged/review/excluded: 0 件。**
- **manifest 整合:** health は published 17＋existing 3＝20。残 planned 0。
- **`verifiedAt`・公式ソース:** 公開 20 件すべてに `verifiedAt` と `officialSources` あり（欠落 0）。
- **内部リンク（canonical）:** health 記事の `relatedSlugs` は全て実在 slug に解決（health dangling 0）。重複タイトル 0・重複 slug 0。
- **孤立記事なし:** `app/health/page.tsx` の `GuideCategoryPage category="health"` が公開 health 記事を自動列挙。全 20 件がハブから到達可能。
- **ドラフト/レビュー/薄い記事の露出なし:** 非公開・planned は一覧/検索/sitemap に非出力（`lib/content/registry.ts` の設計どおり）。
- **州・準州ルールの明示:** 労災・警報アプリ・救急費用など州で異なる事項は州当局へ誘導済み。
- **統合/リダイレクト: なし（health では統合対象なし）。RSS: 本プロジェクトに RSS フィードのルートは存在しない（N/A）。**
- **カテゴリ一覧の正確性:** `validate:articles` の health 件数 = 20 で一致。
- **フル検証（ハブ完了時に一括実施）:** `validate:articles`（ユニーク slug 262・重複 0・重複パス 0・重複エクスポート 0・health 20・`OK: no article data errors`）、`tsc --noEmit` クリーン（exit 0）、`validate:content` 0 error / 66 warning、`test:content` 5/5 pass、`eslint` クリーン、`next build` 成功（**316 静的ページ**・`BUILD_EXIT=0`）。sitemap に `/guides/flood-cyclone-safety`・`/guides/heatwave-severe-weather` を確認。構造化データ（JSON-LD Article）・canonical（`/guides/<slug>`）はビルドで検証済み。
- **既知の範囲外事項（health 由来ではない）:** jobs/tax など**非 health** 記事に、まだ planned のままの slug（`keep-australian-bank-account`・`workplace-english`・`hospitality-english`・`supermarket-comparison` 等）を指す 23 件のグローバル dangling リンクが**既存**として残存。レンダリング時にフィルタされビルドは成功。health バッチの範囲外・本バッチでは未対応。

- **health ハブ: 完了。残り health slug: 0 件。**
- **次のカテゴリ: gig-work（ギグワーク・副業ハブ・未着手・12件）**（下記「ハブ別の残タスク一覧」参照）。**その後 daily-life（21件）。本バッチでは着手しない。**
- **変更ファイル（本チェックポイント）:** `lib/content/articles/health.ts`、`lib/content/manifest.generated.ts`（再生成）、`whv-guide-content-plan/content-manifest.yaml`、`CONTENT_MERGE_MAP.md`、`SOURCE_VERIFICATION_REPORT.md`、`BULK_PUBLISH_REPORT.md`、`BULK_PUBLISH_REMAINING.md`。
- **未解決の問題: なし（health ハブ範囲内）。**

## チェックポイント（2026-07-27）: health マイクロバッチ #3（5件公開 / commit: feat: publish health micro-batch）

health（医療・健康・安全）ハブの次の5件を公開しました（マイクロバッチ #3）。以下が確定状態です。

- **公開した5件（すべて `verifiedAt: 2026-07-27`・`officialSources` 付き・完全公開・分類は全て create）:**
  `heatstroke-guide`（safety, P0, id a256）, `bites-stings-wildlife`（safety, P1, id a257）,
  `food-allergy-eating-out`（language, P1, id a258）, `work-injury-medical`（health, P1, id a259）,
  `bushfire-safety`（disaster, P0, id a260）。
- **選定 slug:** 上記5件（`BULK_PUBLISH_REMAINING.md` / manifest の記録順の先頭5件＝残り7件のうち先頭5件）。
- **作成（created）slug:** 上記5件。**更新（updated）slug: なし**（既存記事は本バッチでは変更せず）。
  **統合（merged）slug: なし。リダイレクト: なし。レビュー/除外 slug: なし。**
- **統合しない理由:** 5件はいずれも新規スラッグで、既存公開記事（`medicare-oshc`／`safety-emergency`／`mental-health`
  ＋ #1・#2 の10件）とは検索意図が明確に異なる（熱中症の応急対応／咬傷・刺傷の応急処置／食物アレルギーの英語伝達／
  仕事中の怪我と労災／山火事への備え）。独立意図が強いため個別公開し `relatedSlugs` で相互リンク。
- **孤立記事なし:** health ハブページ（`app/health/page.tsx` の `GuideCategoryPage category="health"`）が
  公開 health 記事を自動列挙するため、5件はすべてハブから到達可能。新規5件は相互リンク＋既存記事へリンク
  （`workplace-injury-workers-comp`〔jobs〕・`farm-weather-no-work`〔farm〕・`farm-heat-sun-safety`〔farm〕・
  `sunburn-skin-cancer-prevention`・`gp-urgent-care-emergency`・`safety-emergency`・`pharmacy-guide`・
  `overseas-insurance-claim`・`medicare-oshc` — 全て公開済みを確認）。
- **公式照合（記事反映済み）:** healthdirect（Heat-related illness／Bites and stings／Snake bites／Food allergies／
  Anaphylaxis）・Bureau of Meteorology（Heatwave service・気象情報）・Food Standards Australia New Zealand
  （Allergen labelling＝主要アレルゲンの義務表示）・Safe Work Australia（Workers' compensation）・
  Fair Work Ombudsman・Australian Fire Danger Rating System・NSW Rural Fire Service／CFA Victoria・Triple Zero（000）。
- **可変事項の断定回避:** 応急処置の手順（咬傷・刺傷は種類で正解が異なる）は公式最新情報へ誘導し断定を避けた。
  労災制度は州ごとに窓口・範囲が異なるため州当局へ誘導。山火事の警報アプリも州別（NSW=Hazards Near Me／VIC=VicEmergency等）と明示。
- **content-manifest.yaml:** 該当5件を `status: planned` → `status: published` に更新。`manifest.generated.ts` 再生成。
- **検証（マイクロバッチ範囲・各1回）:** `validate:articles`（ユニーク slug 260・重複0・重複パス0・重複エクスポート0・
  health 18件・`OK: no article data errors`）、`tsc --noEmit` クリーン（exit 0）、`validate:content` 0 error / 66 warning、
  health の `relatedSlugs` は全て実在 slug に解決（dangling 0）。
  ※フルビルド/テスト/lint/sitemap/RSS/構造化データ監査は health ハブ完了後（残り5件以下時の最終監査）にまとめて実施予定。
- **残り health slug（2件・すべて planned のまま）:** `flood-cyclone-safety`, `heatwave-severe-weather`。
- **最初の未完了 health slug: `flood-cyclone-safety`**（次回はここから再開）。
- **次のバッチ: health（`flood-cyclone-safety` から継続）。残り2件（≤5）のため次回は最終 health ハブ監査を実施予定。**
- **変更ファイル（本チェックポイント）:** `lib/content/articles/health.ts`、`lib/content/manifest.generated.ts`（再生成）、
  `whv-guide-content-plan/content-manifest.yaml`、`CONTENT_MERGE_MAP.md`、`SOURCE_VERIFICATION_REPORT.md`、
  `BULK_PUBLISH_REPORT.md`、`BULK_PUBLISH_REMAINING.md`。
- **未解決の問題: なし。**

## チェックポイント（2026-07-27）: health マイクロバッチ #2（5件公開 / commit: feat: publish health micro-batch）

health（医療・健康・安全）ハブの次の5件を公開しました（マイクロバッチ #2）。以下が確定状態です。

- **公開した5件（すべて `verifiedAt: 2026-07-27`・`officialSources` 付き・完全公開・分類は全て create）:**
  `eye-care-optometrist`（health, P2, id a251）, `sexual-health-clinics`（health, P1, id a252）,
  `womens-health-guide`（health, P1, id a253）, `ambulance-costs-insurance`（current-info, P0, id a254）,
  `sunburn-skin-cancer-prevention`（safety, P0, id a255）。
- **選定 slug:** 上記5件（`BULK_PUBLISH_REMAINING.md` / manifest の記録順の先頭5件＝残り12件のうち先頭5件）。
- **作成（created）slug:** 上記5件。**更新（updated）slug: なし**（既存記事は本バッチでは変更せず。
  `medicare-oshc` はマイクロバッチ #1 で更新済み・本バッチでは不変）。
  **統合（merged）slug: なし。リダイレクト: なし。レビュー/除外 slug: なし。**
- **統合しない理由:** 5件はいずれも新規スラッグで、既存公開記事（`medicare-oshc`／`safety-emergency`／`mental-health`
  ＋ #1 の5件）とは検索意図が明確に異なる（眼鏡・検眼／性の健康・STI検査／女性の健康・検診／救急車費用と保険／
  紫外線・皮膚がん対策）。重複は独立意図が強いため個別公開し `relatedSlugs` で相互リンク。
- **孤立記事なし:** health ハブページ（`app/health/page.tsx` の `GuideCategoryPage category="health"`）が
  公開 health 記事を自動列挙するため、5件はすべてハブから到達可能。新規5件は相互リンク＋既存 health 記事へリンク。
- **公式照合（記事反映済み）:** healthdirect（Eye health / Sexual health / STIs / Women's health / Emergency contraception）・
  Services Australia（Medicare／Reciprocal Health Care Agreements＝**日本は対象外でワーホリはMedicare非適用**）・
  Department of Health（National Cervical Screening Program）・各州救急サービス（QAS/NSW Ambulance/Ambulance Victoria）・
  Triple Zero（000）・ARPANSA（UV Index・**取得確認済み**）・SunSmart（Cancer Council）・Bureau of Meteorology（UV forecast）。
- **可変事項の断定回避:** 救急車費用は州・搬送内容・改定で大きく変わるため**特定金額を断定せず**、州の救急サービス公式へ誘導
  （QLD・TAS は住民負担・他州は原則有料・ワーホリは州制度対象外になりやすい・000通報は無料、という構造事実のみ確定記述）。
  詳細と web fetch の制約は `SOURCE_VERIFICATION_REPORT.md` に記載。
- **content-manifest.yaml:** 該当5件を `status: planned` → `status: published` に更新。`manifest.generated.ts` 再生成。
- **検証（マイクロバッチ範囲・各1回）:** `validate:articles`（ユニーク slug 255・重複0・重複パス0・重複エクスポート0・
  health 13件・`OK: no article data errors`。ARTICLE_ORDER omission は既存仕様の warn のみ）、
  `tsc --noEmit` クリーン（exit 0）、`validate:content` 0 error / 66 warning、
  health の `relatedSlugs` は全て実在 slug に解決（dangling 0・`farm-heat-sun-safety` 含め確認済み）。
  ※フルビルド/テスト/lint/sitemap/RSS/構造化データ監査は health ハブ完了後（残り5件以下時の最終監査）にまとめて実施予定。
- **残り health slug（7件・すべて planned のまま）:** `heatstroke-guide`, `bites-stings-wildlife`,
  `food-allergy-eating-out`, `work-injury-medical`, `bushfire-safety`, `flood-cyclone-safety`, `heatwave-severe-weather`。
- **最初の未完了 health slug: `heatstroke-guide`**（次回はここから再開）。
- **次のバッチ: health（`heatstroke-guide` から継続）。** ※本セッションは health の次の5件のみ処理。
- **変更ファイル（本チェックポイント）:** `lib/content/articles/health.ts`、`lib/content/manifest.generated.ts`（再生成）、
  `whv-guide-content-plan/content-manifest.yaml`、`CONTENT_MERGE_MAP.md`、`SOURCE_VERIFICATION_REPORT.md`、
  `BULK_PUBLISH_REPORT.md`、`BULK_PUBLISH_REMAINING.md`。
- **未解決の問題: なし。**

## チェックポイント（2026-07-27）: health マイクロバッチ #1（5件公開 / commit: feat: publish health micro-batch 1）

health（医療・健康・安全）ハブの最初の5件を公開しました（マイクロバッチ運用）。以下が確定状態です。

- **公開した5件（すべて `verifiedAt: 2026-07-27`・`officialSources` 付き・完全公開・分類は全て create）:**
  `gp-urgent-care-emergency`（comparison, P0）, `overseas-insurance-claim`（how-to, P0）,
  `pharmacy-guide`（how-to, P0）, `common-medicines-australia`（health, P1）,
  `dental-care-australia`（health, P1）。
- **選定 slug:** 上記5件（`BULK_PUBLISH_REMAINING.md` / manifest の記録順の先頭5件）。
- **作成（created）slug:** 上記5件。**更新（updated）slug:** `medicare-oshc`（内部リンクのみ）。
  **統合（merged）slug: なし。レビュー/除外 slug: なし。**
- **統合（merged）: なし。リダイレクト: なし。** 5件はいずれも新規スラッグで、既存の公開記事
  `medicare-oshc`（医療総論）/ `safety-emergency`（緊急・安全総論）/ `mental-health`（メンタル）とは
  検索意図が明確に異なる（受診先の使い分け・保険請求手順・薬局の使い方・成分別の一般薬・歯科の費用）。
  重複は 60–70% 未満で独立意図が強いため統合せず個別公開し `relatedSlugs` で相互リンクした。
- **既存記事の内部リンク:** `medicare-oshc` の `relatedSlugs` に新規4件（`gp-urgent-care-emergency` /
  `overseas-insurance-claim` / `pharmacy-guide` / `dental-care-australia`）を追記（本文・slug・URL は不変）。孤立記事なし。
- **公式照合（記事反映済み）:** Medicare Urgent Care Clinics（health.gov.au）・healthdirect・
  Services Australia（Reciprocal Health Care Agreements＝**日本は対象外でワーホリはMedicare非適用**・PBS）・
  TGA（Scheduling: S2/S3/S4）・Triple Zero（000）。可変事項（保険補償範囲・歯科費用・州別相談窓口）は
  断定せず公式・証券確認へ誘導。詳細は `SOURCE_VERIFICATION_REPORT.md`。
- **content-manifest.yaml:** 該当5件を `status: planned` → `status: published` に更新。`manifest.generated.ts` 再生成。
- **検証（マイクロバッチ範囲・各1回）:** `validate:articles`（ユニーク slug 250・重複0・重複パス0・
  重複エクスポート0・health 8件・`OK: no article data errors`。ARTICLE_ORDER omission は既存仕様の warn のみ）、
  `tsc --noEmit` クリーン（exit 0）、health の `relatedSlugs` 11件は全て実在 slug に解決（dangling 0）。
  ※フルビルド/テスト/lint/sitemap/RSS/構造化データ監査は health ハブ完了後にまとめて実施予定。
- **残り health slug（12件・すべて planned のまま）:** `eye-care-optometrist`, `sexual-health-clinics`,
  `womens-health-guide`, `ambulance-costs-insurance`, `sunburn-skin-cancer-prevention`, `heatstroke-guide`,
  `bites-stings-wildlife`, `food-allergy-eating-out`, `work-injury-medical`, `bushfire-safety`,
  `flood-cyclone-safety`, `heatwave-severe-weather`。
- **最初の未完了 health slug: `eye-care-optometrist`**（次回はここから再開）。
- **次のバッチ: health（`eye-care-optometrist` から継続）。** ※本セッションは health の先頭5件のみ処理。
- **変更ファイル（本チェックポイント）:** `lib/content/articles/health.ts`、`lib/content/manifest.generated.ts`（再生成）、
  `whv-guide-content-plan/content-manifest.yaml`、`CONTENT_MERGE_MAP.md`、`SOURCE_VERIFICATION_REPORT.md`、
  `BULK_PUBLISH_REPORT.md`、`BULK_PUBLISH_REMAINING.md`。
- **未解決の問題: なし。**

## チェックポイント（2026-07-19）: transport サブバッチ #2（残り14件を公開/統合・transport ハブ完了）

transport（車・免許・公共交通）バッチの**残り14件を処理し、transport ハブを完了**しました。
サブバッチ #1（8件）に続き、免許・有料道路・駐車・事故・レンタカー・売却・地方運転などを公開し、
公共交通比較の重複1件を既存記事へ統合しました。以下が確定状態です。

- **transport ハブ最終状態: 全24件が最終ステータス確定。** 内訳＝既存公開2件（`transport-payment-guide` /
  `intercity-transport`、manifest `existing`）＋新規公開21件（サブバッチ #1 の8件 ＋ 本サブバッチ13件）
  ＋ 統合1件（`buy-used-car-guide` は既存で cars-guide へ merged）。**planned は 0件**。
- **本サブバッチで公開した13件（すべて `verifiedAt: 2026-07-19`・該当記事に `officialSources` 付き・完全公開）:**
  transport カテゴリ9件＝`mechanic-tyre-shop-english`（language）, `fuel-saving-apps`（finance）,
  `tolls-linkt-guide`（how-to）, `parking-fines-guide`（legal）, `car-accident-guide`（safety）,
  `rent-a-car-guide`（checklist）, `sell-car-before-leaving`（how-to）, `e-bike-e-scooter-rules`（legal）,
  `remote-driving-safety`（safety）。license カテゴリ4件＝`japanese-licence-state-rules`（legal）,
  `convert-japanese-licence`（how-to）, `motorcycle-licence-australia`（how-to）,
  `digital-driver-licence`（how-to）。
- **統合（merged）1件: `city-public-transport-comparison` → `transport-payment-guide`。**
  既存公開の公共交通・決済ガイドが Sydney(Opal)/Melbourne(myki)/Brisbane(go card)/Perth(SmartRider) の
  タッチ決済を既にカバーし、都市別の運賃・キャップ比較という検索意図が約70%重複（同一の次アクション）。
  `transport-payment-guide` を運賃制度・デイキャップ比較の段落＋keyFact で補強し、`redirectFrom` を付与。
  308恒久リダイレクトを `lib/content/redirects.ts` に追加（`from: city-public-transport-comparison`）。
- **既存記事の内部リンク:** `cars-guide` の `relatedSlugs` に `sell-car-before-leaving` を追加。
  `license-guide` の `relatedSlugs` を新規免許4件＋`international-driving-permit` へ接続。
  `transport-payment-guide` の `relatedSlugs` に `intercity-transport` を追加。孤立記事なし。
- **公式照合（記事反映済み）:** FuelCheck(NSW政府)・FuelWatch(WA政府)・Linkt(Transurban)・
  QLD Transport(overseas licence)・Service NSW(digital licence) を照合。可変な州別ルール（免許切替要件・
  RWC要否・駐車罰金・e-scooter規制）は断定せず各州交通当局へ誘導。詳細は `SOURCE_VERIFICATION_REPORT.md`。
- **content-manifest.yaml:** 本サブバッチ13件を `status: planned` → `status: published`、
  `city-public-transport-comparison` を `status: merged` ＋ `merged_into: transport-payment-guide` に更新。
- **検証（本サブバッチ）:** `validate:articles`（`OK: no article data errors`・ARTICLE_ORDER omission は既存仕様の
  warn のみ）、`tsc --noEmit` クリーン、`validate:content` 0 error / 66 warning（想定内の cannibalization のみ）、
  `test:content` 5/5 pass、`eslint` クリーン、`next build` 成功（299静的ページを prerender・新規13件含む）。
- **残り transport slug: 0件（ハブ完了）。**
- **次のバッチ: health（`gp-urgent-care-emergency` から・未着手）。** ※本セッションは transport のみ処理し、次カテゴリには着手しない。
- **変更ファイル（本チェックポイント）:** `lib/content/articles/transport.ts`、`lib/content/articles/license.ts`、
  `lib/content/articles/cars.ts`、`lib/content/redirects.ts`、`lib/content/manifest.generated.ts`（再生成）、
  `whv-guide-content-plan/content-manifest.yaml`、`CONTENT_MERGE_MAP.md`、`SOURCE_VERIFICATION_REPORT.md`、
  `BULK_PUBLISH_REPORT.md`、`BULK_PUBLISH_REMAINING.md`。
- **最後に成功した検証: 上記すべて（2026-07-19）。最後に成功したビルド: `next build` 成功（299静的ページ・新規13件を prerender）。**

## チェックポイント（2026-07-19）: transport サブバッチ #1（車の所有・購入・故障 8件公開）

transport（車・免許・公共交通）バッチの最初の8件（中古車の購入〜所有〜故障対応）を公開しました。
**前セッションでマニフェスト上 `published` にマークされ cars.ts から参照されていたが本文が
未作成だった8件を書き上げ、状態を整合**させました（中断からの継続）。以下が確定状態です。

- **本サブバッチで公開した8件（すべて `verifiedAt: 2026-07-19`・`officialSources` 付き・完全公開）:**
  `used-car-inspection-checklist`（checklist）, `ppsr-check-guide`（how-to）, `rego-ctp-rwc`（guide）,
  `vehicle-transfer-by-state`（how-to）, `car-insurance-comparison`（comparison）,
  `roadside-assistance`（comparison）, `car-breakdown-guide`（problem-solving）, `flat-tyre-guide`（problem-solving）。
- **完了した transport slug: 8 / 22。**
- **統合（merged）: なし。リダイレクト: なし。** 8件はいずれも新規スラッグで、既存公開記事
  `cars-guide`（車購入とRego総論）/ `license-guide`（免許総論）/ `transport-payment-guide` /
  `intercity-transport` とは検索意図が明確に異なる（現車確認・PPSR照会・Rego/CTP/車検の違い・
  州別名義変更・保険の種類・ロードサービス・故障/パンク対応）。個別公開し `relatedSlugs` で相互リンク。
- **既存記事の内部リンク:** `cars-guide` の `relatedSlugs` を新規6件（used-car-inspection-checklist /
  ppsr-check-guide / rego-ctp-rwc / vehicle-transfer-by-state / car-insurance-comparison /
  roadside-assistance）へ接続。孤立記事なし。※前セッションが残した `sell-car-before-leaving`（未公開・
  planned）への dangling 参照は削除して整合。
- **公式照合（記事反映済み）:** PPSR（ppsr.gov.au／AFSA — $2 VIN照会で残債・盗難・全損を確認）を
  直接照合。州別の名義変更・Rego/CTP/車検・保険・ロードサービスは可変のため断定せず州当局・
  自動車クラブ・moneysmart(ASIC)・Triple Zero(000)へ誘導。詳細は `SOURCE_VERIFICATION_REPORT.md`。
- **content-manifest.yaml:** 該当8件は `status: published`（前セッションで更新済み・本文公開により整合）。
- **検証（本サブバッチ）:** `validate:articles`（ユニーク slug 232・重複0・重複パス0・transport 10件）、
  `tsc --noEmit` クリーン、`validate:content` 0 error / 66 warning（想定内の cannibalization のみ）、
  `test:content` 5/5 pass、`eslint` クリーン、`next build` 成功（全静的ページを prerender・新規8件含む）。
- **残り transport planned（14件・すべて planned のまま／次サブバッチ）:** `city-public-transport-comparison`,
  `mechanic-tyre-shop-english`, `fuel-saving-apps`, `tolls-linkt-guide`, `parking-fines-guide`,
  `car-accident-guide`, `rent-a-car-guide`, `sell-car-before-leaving`, `japanese-licence-state-rules`,
  `convert-japanese-licence`, `motorcycle-licence-australia`, `digital-driver-licence`,
  `e-bike-e-scooter-rules`, `remote-driving-safety`。
- **最初の未完了 transport slug: `city-public-transport-comparison`**（次回はここから再開）。
- **次のバッチ: transport（`city-public-transport-comparison` から継続）。** ※本セッションは transport の
  先頭8件のみ処理し、次サブバッチには着手しない。
- **変更ファイル（本チェックポイント）:** `lib/content/articles/transport.ts`、`lib/content/articles/cars.ts`、
  `lib/content/manifest.generated.ts`（再生成）、`whv-guide-content-plan/content-manifest.yaml`、
  `CONTENT_MERGE_MAP.md`、`SOURCE_VERIFICATION_REPORT.md`、`BULK_PUBLISH_REPORT.md`、`BULK_PUBLISH_REMAINING.md`。
- **最後に成功した検証: 上記すべて（2026-07-19）。最後に成功したビルド: `next build` 成功（新規8件を prerender）。**

## チェックポイント（2026-07-19）: housing バッチ完了（残り16件を公開・ハブ全21件完了）

housing（家探し・賃貸）ハブの**残り16件を公開し、housing バッチを完了**しました。以下が確定状態です。

- **housing ハブ最終状態: 全21件が最終ステータス確定。** 内訳＝既存公開2件（`housing-guide` /
  `share-house-finding`、manifest `existing`）＋新規公開19件（manifest `published`）。**planned・merged・review は 0件**。
- **本バッチで公開した16件（すべて `verifiedAt: 2026-07-19`・`officialSources` 付き・完全公開）:**
  `bond-rules-overview`, `condition-report-guide`, `rental-agreement-share-house`, `rent-and-bills`,
  `rent-increase-rules`, `bond-refund-dispute`, `ending-tenancy-notice`, `find-replacement-tenant`,
  `share-house-rules`, `share-house-conflict`, `short-term-accommodation`, `hostel-guide`,
  `homestay-guide`, `couple-room-housing`, `regional-farm-housing`, `rental-scam-examples`。
- **統合（merged）: なし。リダイレクト: なし。** 16件はいずれも新規スラッグで、既存公開記事
  （`housing-guide` 総論 / `share-house-finding` 探し方＋内見概要）およびマイクロバッチ3件とは
  検索意図が明確に異なるため、統合せず個別公開し `relatedSlugs` で相互リンクした（farm/jobs と同方針）。
- **既存記事の内部リンク:** 変更なし（既存2記事の本文・slug・URL は不変）。新規16件どうしと
  マイクロバッチ3件・既存2記事へ `relatedSlugs` で接続。孤立記事なし。
- **公式照合（記事反映済み）:** RTA(QLD)・NSW Government Renting・Consumer Affairs Victoria(RTBA)・
  Scamwatch(ACCC) を照合。Bond上限・値上げ頻度・預託機関・紛争解決（NCAT/QCAT/VCAT）・賃貸詐欺の
  典型手口。可変な上限額・州別ルールは断定せず各州当局へ誘導。詳細は `SOURCE_VERIFICATION_REPORT.md`。
- **content-manifest.yaml:** 該当16件を `status: planned` → `status: published` に更新済み。
- **検証（本バッチ）:** `validate:articles`（ユニーク slug 224・重複0・重複パス0・housing 21件）、
  `tsc --noEmit` クリーン、`validate:content` 0 error / 66 warning（想定内の cannibalization のみ）、
  `test:content` 5/5 pass、`eslint` クリーン、`next build` 成功（278静的ページ・新規16件を prerender）。
- **残り housing slug: 0件（ハブ完了）。**
- **次のバッチ: transport（22件・未着手）。** ※本セッションでは housing のみ処理し、次カテゴリは着手しない。

## チェックポイント（2026-07-19）: housing マイクロバッチ #1（3件公開）

housing（家探し・賃貸）バッチの最初の3件を公開しました（マイクロバッチ運用）。以下が確定状態です。

- **完了した housing slug: 3 / 19** — `housing-platforms-comparison`, `housing-message-templates`,
  `inspection-checklist`（すべて `verifiedAt: 2026-07-19`・`officialSources` 付き・完全公開）。
- **公開した housing slug: 上記3件。**
- **統合した housing slug: なし。リダイレクト: なし。**（3件とも新規スラッグで既存公開記事と
  検索意図が分離。詳細は `CONTENT_MERGE_MAP.md`）。
- **既存記事の内部リンク更新:** `housing-guide` / `share-house-finding` の `relatedSlugs` に
  新規3件を追記（本文・slug・URL は不変）。
- **最初の未完了 housing slug: `bond-rules-overview`**（次回はここから再開）。
- **残り housing slug（16件・すべて planned のまま）:** `bond-rules-overview`,
  `condition-report-guide`, `rental-agreement-share-house`, `rent-and-bills`,
  `rent-increase-rules`, `bond-refund-dispute`, `ending-tenancy-notice`,
  `find-replacement-tenant`, `share-house-rules`, `share-house-conflict`,
  `short-term-accommodation`, `hostel-guide`, `homestay-guide`, `couple-room-housing`,
  `regional-farm-housing`, `rental-scam-examples`。
- **統合方針（継続）:** 既存の公開記事 `housing-guide`（総論）/ `share-house-finding`
  （探し方＋内見概要）とは検索意図が異なるため、残り16件も原則**統合せず個別公開**して
  `relatedSlugs` で相互リンクする。60–70% 以上の重複かつ独立意図が乏しい項目が出た場合のみ統合を検討。
- **公式照合（本マイクロバッチ・記事反映済み）:** Scamwatch(ACCC)・NSW Government Renting・
  Consumer Affairs Victoria Renting を照合。詳細は `SOURCE_VERIFICATION_REPORT.md`「housing
  マイクロバッチ」節。
- **content-manifest.yaml:** 該当3件を `status: planned` → `status: published` に更新済み。
- **検証（マイクロバッチ範囲）:** `validate:articles`（ユニーク slug 208・重複0・重複パス0）、
  `tsc --noEmit` クリーン。変更 housing 記事の `relatedSlugs` は全て実在 slug に解決。
- **変更ファイル（本チェックポイント）:** `lib/content/articles/housing.ts`、
  `lib/content/manifest.generated.ts`（再生成）、`whv-guide-content-plan/content-manifest.yaml`、
  `CONTENT_MERGE_MAP.md`、`SOURCE_VERIFICATION_REPORT.md`、`BULK_PUBLISH_REPORT.md`、
  `BULK_PUBLISH_REMAINING.md`。
- **次のバッチ: housing（`bond-rules-overview` から再開）。**

## チェックポイント（2026-07-19）: housing バッチ中断

housing（家探し・賃貸）バッチの公開作業を開始しましたが、リクエストのタイムアウトが
繰り返し発生したため、**記事本文の生成を打ち切り、クリーンなチェックポイントを作成**
しました。以下が確定した状態です。

- **完了した housing slug: なし（0 / 19）** — 本文を書き上げて公開できた記事はありません。
- **公開した housing slug: なし。**
- **統合した housing slug: なし。**
- **部分作成・重複挿入: 削除済み。** 中断時、既存の公開記事 `housing-guide` /
  `share-house-finding` の `relatedSlugs` を未公開の計画 slug へ書き換える不完全な編集が
  作業ツリーに残っていましたが、対象記事が存在せず既存の有効リンク（`whv-complete-guide`）を
  失う内容だったため、`git checkout` で破棄しました。**既存の 2 記事は元の公開状態のまま保持。**
- **最初の未完了 housing slug: `housing-platforms-comparison`**（次回はここから再開）。
- **残り housing slug（19件・すべて planned のまま）:** `housing-platforms-comparison`,
  `housing-message-templates`, `inspection-checklist`, `bond-rules-overview`,
  `condition-report-guide`, `rental-agreement-share-house`, `rent-and-bills`,
  `rent-increase-rules`, `bond-refund-dispute`, `ending-tenancy-notice`,
  `find-replacement-tenant`, `share-house-rules`, `share-house-conflict`,
  `short-term-accommodation`, `hostel-guide`, `homestay-guide`, `couple-room-housing`,
  `regional-farm-housing`, `rental-scam-examples`。
- **統合方針（未実施・次回適用予定）:** 既存の公開記事 `housing-guide`（総論）/
  `share-house-finding`（探し方＋内見概要）とは検索意図が異なり、19件はいずれも個別の
  比較・テンプレート・チェックリスト・法規・問題解決記事のため、**統合せず個別公開**して
  `relatedSlugs` で相互リンクする方針（farm/jobs バッチと同様）。公開×公開の統合は行わない。
- **公式照合（実施済み・記事未反映）:** 本セッションで RTA(QLD)・NSW Fair Trading・
  Consumer Affairs Victoria(RTBA)・Scamwatch(ACCC) の最新情報を照合済み。詳細は
  `SOURCE_VERIFICATION_REPORT.md` の housing チェックポイント節を参照。
- **content-manifest.yaml: 変更なし**（housing 19件はすべて `status: planned` のままで正しい）。
- **最後に成功した検証: `validate:articles`（重複 slug 0）、`tsc --noEmit` クリーン**
  （本チェックポイントで再実行）。
- **最後に成功したビルド: farm バッチ時の `next build` 成功（205記事）。**
  本チェックポイントはコード変更を含まない（ドキュメント更新のみ）ため、ビルドは再実行不要。
- **変更ファイル（本チェックポイント）:** `BULK_PUBLISH_REMAINING.md`、
  `CONTENT_MERGE_MAP.md`、`SOURCE_VERIFICATION_REPORT.md`。
- **次のバッチ: housing（`housing-platforms-comparison` から再開）。** 続けて transport。

## アーキテクチャ移行（2026-07-18 完了）

記事データを確実に編集できるよう、単一の巨大配列（`lib/mockData.ts` の `articles`）を
**カテゴリ単位のモジュール**（`lib/content/articles/<category>.ts` + `index.ts`）へ
分割しました。**構成のみの変更で、記事の追加・本文/タイトル/slug/メタデータ/公開状態の
変更・URL の変更は一切ありません。**

- 記事数: 97 → 97（不変）、ユニーク slug: 97 → 97、重複 slug: 0
- `lib/mockData.ts` は後方互換のため `articles` を再エクスポート（既存 import は不変）
- 記事以外のモックデータ（forum/report/feedback）は `lib/mockData.ts` に残置
- 詳細・記事の追加場所: `docs/article-data-architecture.md`
- 検証: `npm run validate:articles`（重複 slug/パス・必須欠落・不正カテゴリ・重複エクスポート）
- 状態: `validate:content` 0 error / 66 warning、`tsc --noEmit` クリーン、`eslint`
  クリーン、`test:content` 5/5 pass、`next build` 成功（151静的ページ）— 移行前と同一

**次のコンテンツバッチ: gig-work（ギグワーク・副業）ハブ 12 件**（下記「ハブ別の残タスク一覧」参照）。

## 進捗（2026-07-19 時点）

325件の計画記事を、ハブ単位のバッチで公式照合しながら順次公開しています。

- **公開済み合計: 151 件**（残り 174 件）
- **現在のカテゴリ: visa（完了）・preparation（完了）・arrival（完了）・money（完了）・tax（完了）・jobs（完了）・qualifications（完了）・farm（完了・36件）**
- **次のカテゴリ: gig-work（未着手・12件）**
- **統合（merged）: なし**（farm バッチの 36 件はすべて新規スラッグで、既存記事との統合・リダイレクトは不要）
- **レビュー/除外（deferred）: `tool-specified-work-region-checker`・`tool-farm-season-calendar`**（hub: tools / type: interactive-tool のため farm バッチ対象外。planned のまま据え置き）
- **最終検証: `validate:articles` OK（ユニーク slug 205・重複 0）、`validate:content` 0 error / 66 warning（cannibalization の想定内警告のみ）、`tsc --noEmit` クリーン、`eslint` クリーン、`test:content` 5/5 pass、`next build` 成功**
- **最終ビルド: `next build` 成功（farm バッチ 36 件を含む全 205 記事を prerender）**
- **変更ファイル: `lib/content/articles/farm.ts`、`lib/content/manifest.generated.ts`（再生成）、`whv-guide-content-plan/content-manifest.yaml`、`CONTENT_MERGE_MAP.md`、`SOURCE_VERIFICATION_REPORT.md`、`BULK_PUBLISH_REPORT.md`、`BULK_PUBLISH_REMAINING.md`**

### 完了済み slug（バッチ1: start-here ハブ / commit 78a5e61）

- `working-holiday-model-plans`
- `working-holiday-common-mistakes`
- `working-holiday-with-low-english`
- `working-holiday-without-car`
- `working-holiday-couple`
- `working-holiday-solo-woman`
- `working-holiday-age-29-30`

### 完了済み slug（バッチ2: visa ハブ / 16件）

- `working-holiday-eligibility`
- `visa-417-vs-462`
- `visa-cost-processing-time`
- `visa-proof-of-funds`
- `visa-health-examination`
- `visa-police-certificate`
- `visa-after-passport-renewal`
- `visa-grant-letter`
- `visa-first-entry-deadline`
- `visa-six-month-work-limitation`
- `visa-study-limit`
- `visa-travel-reentry`
- `bridging-visa-basics`
- `visa-refusal-cancellation`
- `vevo-check`
- `registered-migration-agent`

### 完了済み slug（バッチ3: preparation ハブ / 20件）

- `passport-validity-renewal`
- `japan-moving-out-procedures`
- `japan-tax-residency-before-departure`
- `international-driving-permit`
- `naati-licence-translation`
- `pre-departure-health-check`
- `medication-customs`
- `vaccinations-before-australia`
- `flight-booking-guide`
- `arrival-airport-guide`
- `temporary-accommodation-before-arrival`
- `cards-and-cash-before-departure`
- `keep-japanese-phone-number`
- `mail-forwarding-and-address`
- `document-backup`
- `australia-customs-quarantine`
- `baggage-packing-strategy`
- `power-plug-voltage`
- `farm-work-packing`
- `send-luggage-to-australia`

### 完了済み slug（バッチ4: arrival ハブ / 10件）

- `australia-airport-arrival-flow`
- `airport-to-city`
- `mygov-account-guide`
- `digital-id-guide`
- `proof-of-address`
- `address-change-checklist`
- `australian-id-points`
- `essential-australia-apps`
- `consular-registration`
- `first-week-shopping`

### 完了済み slug（バッチ5: money ハブ / 10件）

- `australia-living-cost`
- `weekly-budget-template`
- `debit-credit-cards`
- `australia-atm-fees`
- `wise-vs-bank-transfer`
- `send-money-to-japan`
- `joint-account-couples`
- `emergency-fund`
- `bank-scam-security`
- `close-bank-account-before-leaving`

### 完了済み slug（バッチ6: tax ハブ / 17件 / commit `feat: publish tax content batch`）

- `tax-residency-australia`
- `tfn-declaration-form`
- `payslip-guide`
- `income-statement-tax-ready`
- `mygov-ato-linking`
- `tax-return-deductions`
- `tax-return-multiple-jobs`
- `tax-return-overseas-income`
- `tax-agent-guide`
- `abn-eligibility`
- `sole-trader-basics`
- `contractor-vs-employee`
- `invoice-template-australia`
- `abn-record-keeping`
- `gst-registration-basics`
- `bas-basics`
- `superannuation-basics`

**tax バッチ 統合（merged）: なし。** 既存の公開記事（`tfn-guide` / `tax-return-guide` / `tax-return-howto` / `whm-tax-rates` / `abn-guide` / `super-guide` / `dasp-refund`）と 17 件はいずれも検索意図が明確に異なるため、統合せず個別公開し `relatedSlugs` で相互リンクしました（`abn-application`→`abn-guide`、`find-lost-super`→`super-guide`、`dasp-guide`→`dasp-refund` は過去バッチで統合済み）。

### 完了済み slug（バッチ7: jobs + qualifications ハブ / 35件 / commit `feat: publish jobs-qualifications content batch`）

jobs（26件）:

- `job-search-websites`
- `facebook-job-groups`
- `walk-in-resume`
- `cover-letter-guide`
- `job-reference-guide`
- `job-application-follow-up`
- `employment-contract-checklist`
- `employment-types`
- `award-rates-penalty-rates`
- `unpaid-trial-rules`
- `underpayment-unpaid-wages`
- `cash-in-hand-jobs`
- `workplace-injury-workers-comp`
- `workplace-bullying-harassment`
- `resignation-notice`
- `termination-final-pay`
- `hospitality-jobs-guide`
- `barista-job-guide`
- `hotel-housekeeping-jobs`
- `cleaning-jobs-guide`
- `retail-jobs-guide`
- `warehouse-jobs-guide`
- `construction-jobs-guide`
- `office-admin-jobs-guide`
- `it-jobs-working-holiday`
- `recruitment-agency-guide`

qualifications（9件 / `category: "jobs"` + `hub: "qualifications"`）:

- `rsa-state-guide`
- `white-card-guide`
- `food-safety-certificate`
- `rcg-rsa-gaming`
- `forklift-licence-guide`
- `first-aid-cpr-guide`
- `police-check-guide`
- `working-with-children-check`
- `barista-course-guide`

**jobs+qualifications バッチ 統合（merged）: なし。** 既存の公開記事（`jobs-guide` / `resume-guide` / `interview-guide` / `certifications` / `working-rights`）はいずれも概要・総論であり、35 件は個別の職種ガイド・具体的な労働問題の手順・資格別の取得方法であって検索意図が明確に異なるため、統合せず個別公開し `relatedSlugs` で相互リンクしました。ファーム固有の就労記事は本バッチの対象外とし、支援リンク（`farm-*`）としてのみ参照しています。

### 統合（merged）済み slug（→ 統合先）

- `sim-esim-guide` → `sim-guide`
- `mobile-carrier-comparison` → `sim-guide`
- `abn-application` → `abn-guide`
- `dasp-guide` → `dasp-refund`
- `find-lost-super` → `super-guide`
- `buy-used-car-guide` → `cars-guide`

### 未完了（部分作成中）の slug

- なし（作業中の記事・カテゴリはありません。start-here / visa / preparation / arrival / money は完全に公開済み）

## 未公開の理由（残り全項目共通）

各記事は YMYL（お金・ビザ・税・健康・法）領域を含み、**タイトルの問いに答える主要な数値・料金・要件・期限・法規則を、記事単位で最新の公式一次情報に照合して確認する作業**が必要です。この照合はコンテンツ1件ずつ公式サイト（immi.homeaffairs.gov.au / ato.gov.au / fairwork.gov.au / servicesaustralia.gov.au / 各州政府等）にあたる必要があり、一度に全件を責任を持って完了できません。マスタープランの方針「maximum valid publication, not forced publication」「検証不能なコンテンツは review のままにする」に従い、未照合のものは公開せず計画（planned）状態で保持します。

- 残り合計: 245 件（status: planned）
- 公開条件: 記事単位の公式一次情報照合 + verifiedAt 付与 + 内部リンク整備 + 品質チェック通過

## ハブ別の残タスク一覧

### farm — ファーム・Specified Work (36件) ← ✅ 完了（2026-07-19 / commit: feat: publish farm content batch）

**全 36 件を公開済み**（`published: true`・`verifiedAt: 2026-07-19`・`officialSources` 付き）。既存記事 `farm-finding` / `farm-second-visa` と second-visa ハブ（`second-visa-guide` / `88-day-calculation` / `six-month-specified-work` / `specified-work-industries`）へ `relatedSlugs` で相互リンク済み。統合・リダイレクトなし。以下は公開した slug 一覧です。

- `farm-season-calendar` — オーストラリア農作物シーズンカレンダー｜州・月・作物別 _(優先度 P0、意図: database)_
- `harvest-trail-guide` — Harvest Trailでファーム求人を探す方法 _(優先度 P0、意図: how-to)_
- `piecework-vs-hourly` — 歩合制と時給制の違い｜Pieceworkの最低保証と確認事項 _(優先度 P0、意図: legal)_
- `farm-payslip-evidence` — セカンドビザ用の証拠書類｜Payslip・銀行明細・日数記録 _(優先度 P0、意図: checklist)_
- `specified-work-postcodes` — セカンドビザ対象地域・郵便番号の確認方法 _(優先度 P0、意図: how-to)_
- `farm-employer-verification` — ファーム・雇用主がセカンド対象か確認する方法 _(優先度 P0、意図: risk)_
- `farm-labour-hire-contractors` — コントラクター・Labour Hire経由で働く注意点 _(優先度 P0、意図: risk)_
- `farm-accommodation-guide` — ファームの宿・ワーカーズアコモデーションの確認事項 _(優先度 P0、意図: housing)_
- `farm-transport-car` — ファームに車は必要？送迎・相乗り・車なしの探し方 _(優先度 P0、意図: transport)_
- `farm-work-clothing` — ファームの服装完全ガイド｜暑さ・寒さ・雨・薬品対策 _(優先度 P0、意図: safety)_
- `farm-heat-sun-safety` — ファームの熱中症・紫外線対策 _(優先度 P0、意図: safety)_
- `farm-chemical-safety` — 農薬・薬品を扱う作業の安全確認 _(優先度 P1、意図: safety)_
- `farm-weather-no-work` — 雨・天候で仕事が休みになる場合の収入対策 _(優先度 P1、意図: finance)_
- `farm-job-english` — ファームで使う英語フレーズ｜作業指示・体調・給与確認 _(優先度 P1、意図: language)_
- `crop-blueberry` — ブルーベリーファームの仕事内容・シーズン・稼ぎ方 _(優先度 P2、意図: crop-guide)_
- `crop-strawberry` — いちごファームの仕事内容・シーズン・服装 _(優先度 P2、意図: crop-guide)_
- `crop-grape` — ぶどう・ワイナリーの仕事｜Picking・Pruning・Cellar _(優先度 P2、意図: crop-guide)_
- `crop-apple-cherry` — りんご・チェリーの仕事｜シーズンと梯子作業 _(優先度 P2、意図: crop-guide)_
- `crop-citrus` — オレンジ・マンダリンなど柑橘ファームの仕事 _(優先度 P3、意図: crop-guide)_
- `crop-mango-banana` — マンゴー・バナナファームの仕事と注意点 _(優先度 P2、意図: crop-guide)_
- `crop-avocado` — アボカドファームの仕事内容とシーズン _(優先度 P3、意図: crop-guide)_
- `crop-tomato-capsicum` — トマト・カプシカムの仕事｜温室・屋外・Packing _(優先度 P3、意図: crop-guide)_
- `crop-broccoli-broccolini` — ブロッコリー・ブロッコリーニの仕事｜Picking・Bunching・Packing _(優先度 P1、意図: crop-guide)_
- `farm-packing-shed` — Packing Shedの仕事｜選別・包装・品質管理 _(優先度 P1、意図: role-guide)_
- `meat-processing-specified-work` — 食肉加工の仕事とSpecified Workの確認ポイント _(優先度 P2、意図: role-guide)_
- `construction-specified-work` — 建設業でセカンドビザを狙う場合の条件 _(優先度 P1、意図: legal)_
- `disaster-recovery-specified-work` — 災害復旧作業でSpecified Workになる条件 _(優先度 P2、意図: legal)_
- `region-gatton-lockyer` — ガトン・ロッキヤーバレーのファーム仕事・生活ガイド _(優先度 P0、意図: area-farm)_
- `region-bundaberg-farm` — バンダバーグのファーム仕事・生活ガイド _(優先度 P1、意図: area-farm)_
- `region-stanthorpe-farm` — スタンソープのファーム仕事・生活ガイド _(優先度 P1、意図: area-farm)_
- `region-bowen-ayr-farm` — ボーエン・エアのファーム仕事ガイド _(優先度 P2、意図: area-farm)_
- `region-mareeba-atherton-farm` — マリーバ・アサートン高原のファームガイド _(優先度 P2、意図: area-farm)_
- `region-mildura-farm` — ミルデューラのファーム仕事・生活ガイド _(優先度 P2、意図: area-farm)_
- `region-shepparton-farm` — シェパートンのファーム仕事ガイド _(優先度 P2、意図: area-farm)_
- `region-griffith-farm` — グリフィスのファーム仕事ガイド _(優先度 P2、意図: area-farm)_
- `region-tasmania-farm` — タスマニアのファーム仕事・シーズンガイド _(優先度 P2、意図: area-farm)_

### gig-work — ギグワーク・副業 (12件) ← 次のカテゴリ

- `gig-work-comparison` — オーストラリアのギグワーク比較｜配達・清掃・便利屋・フリーランス _(優先度 P0、意図: comparison)_
- `delivery-abn-tax` — Uber Eats・DoorDashのABN・税金・Superの扱い _(優先度 P0、意図: tax)_
- `delivery-insurance` — フードデリバリーの保険｜自転車・車・スクーターの注意点 _(優先度 P0、意図: insurance)_
- `delivery-vehicle-comparison` — 配達は自転車・E-bike・車のどれがいい？費用比較 _(優先度 P1、意図: comparison)_
- `delivery-expenses-logbook` — 配達員の経費と走行記録｜確定申告に備える方法 _(優先度 P1、意図: tax)_
- `delivery-peak-hours` — 配達で稼ぎやすい時間帯・天候・エリアの考え方 _(優先度 P1、意図: strategy)_
- `delivery-safety` — 夜間配達・交通事故・盗難を防ぐ安全ガイド _(優先度 P0、意図: safety)_
- `delivery-account-deactivation` — 配達アカウント停止の主な原因と異議申立ての準備 _(優先度 P2、意図: problem-solving)_
- `airtasker-guide` — Airtaskerで仕事を受ける方法｜ABN・手数料・安全 _(優先度 P2、意図: platform-guide)_
- `freelance-it-australia` — ワーホリ中にIT・Webのフリーランス案件を取る方法 _(優先度 P1、意図: career)_
- `japan-remote-work-tax` — 日本のリモート副業を豪州から行う場合の税金と契約 _(優先度 P1、意図: tax)_
- `public-liability-insurance` — Sole TraderのPublic Liability Insurance基礎 _(優先度 P2、意図: insurance)_

### housing — 家探し・賃貸 (19件) ← ✅ 完了（2026-07-19 / commit: feat: complete housing content batch）

**全19件を公開済み**（既存公開2件を含め housing ハブ全21件が最終ステータス確定）。マイクロバッチ3件
（`housing-platforms-comparison` / `housing-message-templates` / `inspection-checklist`）＋本バッチ16件を
すべて `published: true`・`verifiedAt: 2026-07-19`・`officialSources` 付きで公開。統合・リダイレクトなし。
以下は公開した19 slug 一覧です。

- `housing-platforms-comparison` — Flatmates・Facebook・Gumtreeなど家探しサービス比較 _(優先度 P0、意図: comparison)_
- `housing-message-templates` — シェアハウス応募メッセージの英語テンプレート _(優先度 P0、意図: template)_
- `inspection-checklist` — シェアハウス内見チェックリスト｜部屋・設備・同居人 _(優先度 P0、意図: checklist)_
- `bond-rules-overview` — Bondの仕組みと正規の預け方｜州ごとの確認先 _(優先度 P0、意図: legal)_
- `condition-report-guide` — 入居時Condition Reportと写真記録の残し方 _(優先度 P0、意図: how-to)_
- `rental-agreement-share-house` — シェアハウス契約書で確認する項目 _(優先度 P0、意図: checklist)_
- `rent-and-bills` — 家賃に光熱費込み？電気・ガス・水道・ネットの分担 _(優先度 P1、意図: finance)_
- `rent-increase-rules` — 家賃値上げを通知された場合の確認事項 _(優先度 P1、意図: legal)_
- `bond-refund-dispute` — Bondが返ってこない場合の対応手順 _(優先度 P0、意図: problem-solving)_
- `ending-tenancy-notice` — 退去Noticeの出し方と英語メッセージ _(優先度 P0、意図: template)_
- `find-replacement-tenant` — 後任入居者を探す方法と名義変更の注意 _(優先度 P2、意図: how-to)_
- `share-house-rules` — シェアハウスのルール｜掃除・騒音・ゲスト・共有物 _(優先度 P1、意図: guide)_
- `share-house-conflict` — シェアメイト・オーナーとのトラブル対処 _(優先度 P1、意図: problem-solving)_
- `short-term-accommodation` — 長期の家が決まるまでの短期滞在先比較 _(優先度 P1、意図: comparison)_
- `hostel-guide` — バックパッカーホステルの選び方｜安全・荷物・長期割引 _(優先度 P2、意図: guide)_
- `homestay-guide` — ホームステイのメリット・費用・ルール _(優先度 P3、意図: guide)_
- `couple-room-housing` — カップル部屋の探し方｜家賃・応募文・注意点 _(優先度 P1、意図: how-to)_
- `regional-farm-housing` — 地方・ファーム地域の家探し｜車・送迎・仕事とのセット契約 _(優先度 P1、意図: housing)_
- `rental-scam-examples` — 家探し詐欺の典型例｜内見前送金・偽契約・身分証悪用 _(優先度 P0、意図: security)_

### transport — 交通・車・免許 (22件)

- `city-public-transport-comparison` — 主要都市の公共交通比較｜カード・タッチ決済・運賃 _(優先度 P1、意図: comparison)_
- `used-car-inspection-checklist` — 中古車の現車確認チェックリスト｜試乗・整備記録・故障 _(優先度 P0、意図: checklist)_
- `ppsr-check-guide` — PPSRチェックの方法｜盗難車・ローン残債を確認 _(優先度 P0、意図: how-to)_
- `rego-ctp-rwc` — Rego・CTP・Roadworthy/Safety Certificateの違い _(優先度 P0、意図: guide)_
- `vehicle-transfer-by-state` — 中古車の名義変更｜州別の手続きと期限 _(優先度 P0、意図: how-to)_
- `car-insurance-comparison` — CTP・Third Party・Comprehensive保険の違い _(優先度 P0、意図: comparison)_
- `roadside-assistance` — ロードサービス比較と呼び方｜故障・バッテリー・パンク _(優先度 P1、意図: comparison)_
- `car-breakdown-guide` — 車が故障したときの対応｜安全確保・牽引・修理 _(優先度 P0、意図: problem-solving)_
- `flat-tyre-guide` — タイヤがパンクしたとき｜スペアタイヤ・修理・交換 _(優先度 P1、意図: problem-solving)_
- `mechanic-tyre-shop-english` — 整備工場・タイヤショップで使う英語フレーズ _(優先度 P1、意図: language)_
- `fuel-saving-apps` — ガソリン価格を比較して節約する方法 _(優先度 P2、意図: finance)_
- `tolls-linkt-guide` — 有料道路・Toll・Linktの支払いと未払い対策 _(優先度 P0、意図: how-to)_
- `parking-fines-guide` — 駐車ルールと罰金｜標識の読み方・異議申立て _(優先度 P1、意図: legal)_
- `car-accident-guide` — 交通事故に遭ったときの対応｜情報交換・警察・保険 _(優先度 P0、意図: safety)_
- `rent-a-car-guide` — レンタカー・長期レンタカーの契約チェックリスト _(優先度 P0、意図: checklist)_
- `sell-car-before-leaving` — 帰国前に車を売る方法｜広告・RWC・名義変更 _(優先度 P1、意図: how-to)_
- `japanese-licence-state-rules` — 日本の免許で運転できる期間｜州別ルールの確認方法 _(優先度 P0、意図: legal)_
- `convert-japanese-licence` — 日本の免許から豪州免許へ切り替える方法｜州別入口 _(優先度 P0、意図: how-to)_
- `motorcycle-licence-australia` — 日本のバイク免許をオーストラリアで使う・切り替える方法 _(優先度 P2、意図: how-to)_
- `digital-driver-licence` — デジタル運転免許証の登録と本人確認エラー対策 _(優先度 P2、意図: how-to)_
- `e-bike-e-scooter-rules` — E-bike・電動キックボードの交通ルールとヘルメット _(優先度 P1、意図: legal)_
- `remote-driving-safety` — アウトバック・地方を運転する前の安全準備 _(優先度 P1、意図: safety)_

### health — 健康・保険・安全 (17件)

- `gp-urgent-care-emergency` — GP・Urgent Care・Emergencyの使い分け _(優先度 P0、意図: comparison)_
- `overseas-insurance-claim` — 海外保険を使う流れ｜キャッシュレス・立替・請求書類 _(優先度 P0、意図: how-to)_
- `pharmacy-guide` — オーストラリアの薬局（Pharmacy）の使い方 _(優先度 P0、意図: how-to)_
- `common-medicines-australia` — 風邪・痛み・アレルギーなど一般薬の探し方 _(優先度 P1、意図: health)_
- `dental-care-australia` — 歯医者に行く方法と費用・保険の確認 _(優先度 P1、意図: health)_
- `eye-care-optometrist` — 眼鏡・コンタクト・Optometristの利用方法 _(優先度 P2、意図: health)_
- `sexual-health-clinics` — 性の健康・検査・避妊の相談先 _(優先度 P1、意図: health)_
- `womens-health-guide` — 女性の健康ガイド｜生理用品・GP・検査・相談 _(優先度 P1、意図: health)_
- `ambulance-costs-insurance` — 救急車は有料？州別の費用と保険確認 _(優先度 P0、意図: current-info)_
- `sunburn-skin-cancer-prevention` — 紫外線・日焼け・皮膚がん対策｜豪州のSun Safety _(優先度 P0、意図: safety)_
- `heatstroke-guide` — 熱中症の症状と応急対応｜仕事・旅行・ファーム _(優先度 P0、意図: safety)_
- `bites-stings-wildlife` — 虫・クラゲ・ヘビ・クモに刺された／噛まれた場合 _(優先度 P1、意図: safety)_
- `food-allergy-eating-out` — 食物アレルギーを英語で伝える方法 _(優先度 P1、意図: language)_
- `work-injury-medical` — 仕事中の怪我で病院へ行く流れと書類 _(優先度 P1、意図: health)_
- `bushfire-safety` — 山火事（Bushfire）への備えと警報アプリ _(優先度 P0、意図: disaster)_
- `flood-cyclone-safety` — 洪水・サイクロンへの備え｜クイーンズランド・北部 _(優先度 P0、意図: disaster)_
- `heatwave-severe-weather` — 熱波・雷雨・雹など悪天候の情報確認方法 _(優先度 P1、意図: disaster)_

### daily-life — 日常生活・食事・買い物 (21件・全21件公開済み ✅ 完了)

- ✅ `supermarket-comparison` — Coles・Woolworths・ALDI比較｜安く買うコツ _(優先度 P0、意図: comparison)_ **公開済み（2026-07-27）**
- ✅ `grocery-saving-tips` — オーストラリアの食費を節約する方法｜特売・冷凍・自炊 _(優先度 P0、意図: finance)_ **公開済み（2026-07-27）**
- ✅ `asian-japanese-groceries` — 日本食材・アジア食材を買える場所と代用品 _(優先度 P1、意図: guide)_ **公開済み（2026-07-27）**
- ✅ `cheap-meal-prep` — ワーホリ向け安い作り置きレシピと1週間献立 _(優先度 P1、意図: food)_ **公開済み（2026-07-27）**
- ✅ `australian-oven-guide` — オーストラリアのオーブン・コンロの使い方 _(優先度 P2、意図: how-to)_ **公開済み（2026-07-27）**
- ✅ `food-storage-share-house` — シェアハウスでの食品保存・冷蔵庫ルール _(優先度 P2、意図: guide)_ **公開済み（2026-07-27）**
- ✅ `tap-water-drinking` — オーストラリアの水道水は飲める？地域・災害時の確認 _(優先度 P2、意図: faq)_ **公開済み（2026-07-27）**
- ✅ `shopping-surcharges-tipping` — カード手数料・日祝サーチャージ・チップの習慣 _(優先度 P0、意図: guide)_ **公開済み（2026-07-27）**
- ✅ `alcohol-id-rules` — お酒を買う・飲むときの身分証とルール _(優先度 P1、意図: legal)_ **公開済み（2026-07-27）**
- ✅ `laundry-guide` — シェアハウス・コインランドリーの使い方と洗剤 _(優先度 P2、意図: how-to)_ **公開済み（2026-07-27）**
- ✅ `australia-clothing-seasons` — 都市・季節別の服装ガイド｜暑さ・寒暖差・雨 _(優先度 P0、意図: guide)_ **公開済み（2026-07-27）**
- ✅ `buy-furniture-household-items` — 家具・生活用品を安く揃える方法｜Kmart・Marketplace・Op Shop _(優先度 P1、意図: comparison)_ **公開済み（2026-07-27）**
- ✅ `op-shop-guide` — Op Shopの使い方｜服・家具・寄付 _(優先度 P3、意図: guide)_ **公開済み（2026-07-27）**
- ✅ `post-office-courier` — Australia Postの使い方｜郵便・荷物・Parcel Locker _(優先度 P1、意図: how-to)_ **公開済み（2026-07-27）**
- ✅ `library-guide` — 図書館を活用する方法｜無料Wi-Fi・印刷・英語学習 _(優先度 P1、意図: guide)_ **公開済み（2026-07-27）**
- ✅ `gym-fitness-guide` — ジム契約の注意点｜週払い・解約・無料体験 _(優先度 P2、意図: checklist)_ **公開済み（2026-07-27）**
- ✅ `haircut-barber-english` — 美容院・バーバーで使う英語と料金の見方 _(優先度 P3、意図: language)_ **公開済み（2026-07-27）**
- ✅ `public-toilets-showers` — 無料トイレ・シャワー・給水場所を探す方法 _(優先度 P3、意図: guide)_ **公開済み（2026-07-27）**
- ✅ `home-internet-guide` — シェアハウスのWi-Fi・ホームインターネット基礎 _(優先度 P2、意図: guide)_ **公開済み（2026-07-27）**
- ✅ `online-scams-cybersecurity` — 偽SMS・求人詐欺・アカウント乗っ取り対策 _(優先度 P0、意図: security)_ **公開済み（2026-07-27）**
- ✅ `phone-lost-stolen` — スマホを紛失・盗難された場合の対応 _(優先度 P1、意図: problem-solving)_ **公開済み（2026-07-27）**

### english — 英語学習・会話 (13件・**全13件公開済み / ハブ完了**)

- ✅ `australian-english-accent` — オーストラリア英語の発音・アクセントに慣れる方法 _(優先度 P1、意図: learning)_ **公開済み（2026-07-27）**
- ✅ `australian-slang` — ワーホリでよく聞くオーストラリア英語・スラング _(優先度 P1、意図: reference)_ **公開済み（2026-07-27）**
- ✅ `workplace-english` — 職場で使う英語フレーズ｜確認・報告・欠勤・シフト _(優先度 P0、意図: language)_ **公開済み（2026-07-27）**
- ✅ `hospitality-english` — レストラン・カフェ接客英語フレーズ _(優先度 P1、意図: language)_ **公開済み（2026-07-27）**
- ✅ `housing-english` — 家探し・内見・退去で使う英語フレーズ _(優先度 P0、意図: language)_ **公開済み（2026-07-27）**
- ✅ `bank-tax-english` — 銀行・ATO・Superの問い合わせ英語 _(優先度 P1、意図: language)_ **公開済み（2026-07-27）**
- ✅ `medical-english` — 病院・薬局で症状を伝える英語フレーズ _(優先度 P0、意図: language)_ **公開済み（2026-07-27）**
- ✅ `car-trouble-english` — 車の故障・事故・修理で使う英語フレーズ _(優先度 P1、意図: language)_ **公開済み（2026-07-27）**
- ✅ `phone-call-english` — 英語の電話が怖い人向け｜聞き返し・保留・予約 _(優先度 P1、意図: learning)_ **公開済み（2026-07-27）**
- ✅ `email-message-templates` — ワーホリ生活の英文メール・SMSテンプレート集 _(優先度 P0、意図: template)_ **公開済み（2026-07-27）**
- ✅ `listening-resources` — ワーホリ準備におすすめのリスニング教材と使い方 _(優先度 P2、意図: learning)_ **公開済み（2026-07-27）**
- ✅ `language-exchange-meetup` — Language Exchange・Meetupで友達と英語環境を作る方法 _(優先度 P2、意図: social)_ **公開済み（2026-07-27）**
- ✅ `ielts-pte-after-wh` — IELTS・PTEは必要？学生・就労・永住を考える人の試験選び _(優先度 P2、意図: comparison)_ **公開済み（2026-07-27）**

### area — 都市・州・地域ガイド (23件、残り8件)

- ✅ `area-gold-coast` — ゴールドコースト エリアガイド｜仕事・家賃・交通・ビーチ生活 _(優先度 P0、意図: area-guide)_ **[公開済 2026-07-27]**
- ✅ `area-perth` — パース エリアガイド｜仕事・家賃・車・西海岸生活 _(優先度 P0、意図: area-guide)_ **[公開済 2026-07-27]**
- ✅ `area-cairns` — ケアンズ エリアガイド｜観光業・気候・ファームへの移動 _(優先度 P0、意図: area-guide)_ **[公開済 2026-07-27]**
- ✅ `area-canberra` — キャンベラ エリアガイド｜仕事・家賃・交通 _(優先度 P2、意図: area-guide)_ **[公開済 2026-07-27]**
- ✅ `area-hobart` — ホバート エリアガイド｜タスマニアの仕事と暮らし _(優先度 P2、意図: area-guide)_ **[公開済 2026-07-27]**
- ✅ `area-darwin` — ダーウィン エリアガイド｜乾季・雨季・仕事・北部条件 _(優先度 P1、意図: area-guide)_ **[公開済 2026-07-30]**
- ✅ `area-sunshine-coast` — サンシャインコースト エリアガイド _(優先度 P2、意図: area-guide)_ **[公開済 2026-07-30]**
- ✅ `area-toowoomba-gatton` — トゥーンバ・ガトン エリアガイド｜地方生活・ファーム・車 _(優先度 P0、意図: area-guide)_ **[公開済 2026-07-30]**
- ✅ `area-bundaberg` — バンダバーグ エリアガイド｜ファーム・家・交通 _(優先度 P1、意図: area-guide)_ **[公開済 2026-07-30]**
- ✅ `area-stanthorpe` — スタンソープ エリアガイド｜寒さ・果樹・生活 _(優先度 P2、意図: area-guide)_ **[公開済 2026-07-30]**
- ✅ `area-townsville` — タウンズビル エリアガイド｜北QLDの仕事と暮らし _(優先度 P2、意図: area-guide)_ **[公開済 2026-07-30]**
- ✅ `area-newcastle` — ニューカッスル エリアガイド｜シドニー外の仕事と家賃 _(優先度 P2、意図: area-guide)_ **[公開済 2026-07-30]**
- ✅ `area-wollongong` — ウーロンゴン エリアガイド｜大学・ビーチ・通勤 _(優先度 P3、意図: area-guide)_ **[公開済 2026-07-30]**
- ✅ `area-mildura` — ミルデューラ エリアガイド｜ファームと地方生活 _(優先度 P2、意図: area-guide)_ **[公開済 2026-07-30]**
- ✅ `area-shepparton` — シェパートン エリアガイド｜農業地域での生活 _(優先度 P2、意図: area-guide)_ **[公開済 2026-07-30]**
- `area-griffith` — グリフィス エリアガイド｜農業・食品加工・生活 _(優先度 P2、意図: area-guide)_ ← **次回開始**
- `state-nsw-guide` — ニューサウスウェールズ州ガイド｜制度・都市・仕事 _(優先度 P2、意図: state-guide)_
- `state-vic-guide` — ビクトリア州ガイド｜制度・都市・仕事 _(優先度 P2、意図: state-guide)_
- `state-qld-guide` — クイーンズランド州ガイド｜制度・都市・ファーム _(優先度 P1、意図: state-guide)_
- `state-wa-guide` — 西オーストラリア州ガイド｜制度・都市・地方移動 _(優先度 P2、意図: state-guide)_
- `state-sa-guide` — 南オーストラリア州ガイド｜制度・都市・農業 _(優先度 P3、意図: state-guide)_
- `state-tas-guide` — タスマニア州ガイド｜制度・都市・ファーム _(優先度 P2、意図: state-guide)_
- `state-nt-guide` — ノーザンテリトリーガイド｜気候・仕事・安全 _(優先度 P2、意図: state-guide)_

### travel — 旅行・ロードトリップ (9件)

- `australia-travel-seasons` — オーストラリア旅行のベストシーズン｜地域別の気候 _(優先度 P1、意図: travel)_
- `domestic-flight-guide` — 国内線を安く予約する方法｜荷物・空港・変更条件 _(優先度 P1、意図: travel)_
- `australia-road-trip-guide` — オーストラリアロードトリップの計画と安全 _(優先度 P1、意図: travel)_
- `camping-free-camps` — キャンプ・Free Campの探し方とルール _(優先度 P2、意図: travel)_
- `east-coast-route` — 東海岸周遊モデルルート｜シドニーからケアンズ _(優先度 P2、意図: travel)_
- `great-barrier-reef-guide` — グレートバリアリーフ旅行ガイド｜ケアンズ・周辺島 _(優先度 P3、意図: travel)_
- `uluru-guide` — ウルル旅行ガイド｜アクセス・費用・文化への配慮 _(優先度 P3、意図: travel)_
- `tasmania-trip-guide` — タスマニア周遊ガイド｜車・日数・季節 _(優先度 P3、意図: travel)_
- `public-holiday-travel` — 祝日・スクールホリデーの旅行混雑と料金対策 _(優先度 P2、意図: travel)_

### community — 友達・コミュニティ (6件)

- `make-friends-australia` — ワーホリで友達を作る方法｜学校・職場・Meetup・趣味 _(優先度 P1、意図: social)_
- `japanese-community-groups` — 日本人コミュニティ・Facebookグループの探し方と注意 _(優先度 P1、意図: social)_
- `homesickness-loneliness` — ホームシック・孤独への現実的な対処法 _(優先度 P1、意図: wellbeing)_
- `culture-shock-australia` — オーストラリア生活のカルチャーショックと慣れ方 _(優先度 P2、意図: social)_
- `dating-safety-australia` — 海外での出会い・デーティングアプリの安全対策 _(優先度 P2、意図: safety)_
- `volunteering-guide` — ボランティアの探し方｜英語・友達・地域参加 _(優先度 P3、意図: social)_

### return-home — 帰国準備・次のキャリア (12件)

- `leaving-australia-checklist` — 帰国前チェックリスト｜仕事・家・車・税金・Super _(優先度 P0、意図: checklist)_
- `final-pay-before-leaving` — 帰国前に確認するFinal Pay・未払い給与・有給 _(優先度 P0、意図: finance)_
- `early-tax-return-departing` — 年度途中で帰国する場合のタックスリターン _(優先度 P1、意図: tax)_
- `dasp-before-after-leaving` — DASP申請はいつする？出国・ビザ失効・必要書類 _(優先度 P0、意図: how-to)_
- `close-services-before-leaving` — 帰国前に解約・変更するサービス一覧 _(優先度 P1、意図: checklist)_
- `bond-refund-before-leaving` — 帰国前の退去・Bond返金を間に合わせる方法 _(優先度 P1、意図: housing)_
- `sell-car-timeline` — 帰国前の車売却スケジュール｜いつ出品する？ _(優先度 P1、意図: transport)_
- `send-luggage-to-japan` — オーストラリアから日本へ荷物を送る方法 _(優先度 P2、意図: comparison)_
- `keep-australian-bank-account` — 帰国後も豪州銀行口座を残す場合の注意点 _(優先度 P1、意図: finance)_
- `use-wh-experience-in-resume` — ワーホリ経験を帰国後の履歴書・面接で伝える方法 _(優先度 P1、意図: career)_
- `reverse-culture-shock` — 帰国後の逆カルチャーショックとキャリア再始動 _(優先度 P2、意図: wellbeing)_
- `australian-police-check-after-return` — 帰国後に豪州の無犯罪証明が必要になった場合 _(優先度 P3、意図: how-to)_

### news — ニュース・制度更新 (6件)

- `news-visa-changes-template` — ビザ制度変更ニュース用テンプレート _(優先度 P0、意図: news-template)_
- `news-minimum-wage-template` — 最低賃金・Award改定ニュース用テンプレート _(優先度 P0、意図: news-template)_
- `news-tax-super-template` — 税率・Super・タックスリターン変更ニュース用テンプレート _(優先度 P0、意図: news-template)_
- `news-visa-fee-template` — ビザ申請料改定ニュース用テンプレート _(優先度 P0、意図: news-template)_
- `news-disaster-alert-template` — 洪水・山火事・サイクロン情報用テンプレート _(優先度 P0、意図: news-template)_
- `news-scam-alert-template` — ワーホリ向け詐欺・悪質求人注意喚起テンプレート _(優先度 P1、意図: news-template)_

### tools — ツール・テンプレート (14件)

- `tool-arrival-checklist` — 到着後チェックリスト（保存・完了管理） _(優先度 P0、意図: interactive-tool)_
- `tool-packing-checklist` — 持ち物チェックリスト（都市・季節・仕事別） _(優先度 P1、意図: interactive-tool)_
- `tool-88-day-calculator` — セカンドビザ88日カレンダー・勤務記録ツール _(優先度 P0、意図: interactive-tool)_
- `tool-specified-work-region-checker` — Specified Work対象地域・郵便番号確認ツール _(優先度 P0、意図: interactive-tool)_
- `tool-farm-season-calendar` — 州・地域・作物別ファームシーズン検索 _(優先度 P0、意図: interactive-tool)_
- `tool-weekly-budget-calculator` — 週間生活費・必要貯金シミュレーター _(優先度 P1、意図: interactive-tool)_
- `tool-resume-checklist` — 英文レジュメ自己チェックツール _(優先度 P1、意図: interactive-tool)_
- `tool-job-application-tracker` — 仕事応募管理表｜応募日・連絡・面接・結果 _(優先度 P2、意図: interactive-tool)_
- `tool-farm-evidence-tracker` — セカンドビザ証拠書類トラッカー _(優先度 P0、意図: interactive-tool)_
- `tool-return-home-checklist` — 帰国前チェックリスト（期限通知つき） _(優先度 P1、意図: interactive-tool)_
- `download-resume-template` — 英文レジュメテンプレート（職種別） _(優先度 P0、意図: download)_
- `download-cover-letter-template` — カバーレターテンプレート集 _(優先度 P1、意図: download)_
- `download-housing-inspection-checklist` — シェアハウス内見チェックリストPDF/印刷版 _(優先度 P1、意図: download)_
- `download-emergency-card` — 緊急連絡先カード｜000・保険・領事館・本人情報 _(優先度 P1、意図: download)_

