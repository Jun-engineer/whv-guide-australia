# CONTENT_MERGE_MAP

生成日: 2026-07-16

重複する検索意図を1つの強い記事へ統合するためのマップです。**公開中URLは原則保持**し、
統合は次の2種類に分けて扱います。

1. **実施済み統合（計画→既存公開記事）** — 未公開の計画slugを既存の公開記事へ寄せ、
   恒久リダイレクト（308）を登録。公開中ページを潰さないため安全。
2. **提案のみ（公開→公開）** — 生きているページ同士の統合は影響が大きいため、本サイクルでは
   実行せず提案として記録（Phase B で人手判断）。

### gig-work マイクロバッチ #2（2026-08-02 / 5件公開）

**統合（merged）: なし。リダイレクト: なし。分割（split）: なし。** gig-work ハブの5件（`delivery-peak-hours`／`delivery-safety`／`delivery-account-deactivation`／`airtasker-guide`／`freelance-it-australia`）はいずれも**新規スラッグの create**で、既存公開URLの統合・置換・分割・リダイレクトは一切発生しない。`relatedSlugs` は公開/既存 slug（`gig-work-comparison`／`delivery-abn-tax`／`delivery-insurance`／`delivery-vehicle-comparison`／`uber-eats-guide`／`doordash-guide`／`abn-guide`／`tax-return-guide`／`super-guide`／`license-guide`）のみ参照し dangling 0。未公開 plannedへのリンクは張らない。

### gig-work マイクロバッチ #1（2026-08-02 / 5件公開・新カテゴリ初回）

**統合（merged）: なし。リダイレクト: なし。分割（split）: なし。** gig-work ハブのフードデリバリー系5件（`gig-work-comparison`／`delivery-abn-tax`／`delivery-insurance`／`delivery-vehicle-comparison`／`delivery-expenses-logbook`）はいずれも**新規スラッグの create**で、既存公開URLの統合・置換・分割・リダイレクトは一切発生しない。`relatedSlugs` は公開/既存 slug（`uber-eats-guide`／`doordash-guide`／`abn-guide`／`tax-return-guide`／`super-guide`／`cars-guide`／`license-guide`）のみ参照し dangling 0。未公開 planned（`delivery-safety` 等）へのリンクは張らない。

### downloads カテゴリ最終監査（2026-08-02 / 0件公開・カテゴリ完了）

**統合（merged）: なし。リダイレクト: なし。分割（split）: なし。** downloads（ダウンロード資料）カテゴリの `type: download` 項目4件（`download-resume-template`／`download-cover-letter-template`／`download-housing-inspection-checklist`／`download-emergency-card`）は tools マイクロバッチ #3・#4 で公開済み。本チェックポイントは新規公開0件の**最終監査のみ**で、URLの統合・置換・分割・リダイレクトは一切発生しない。

- downloads は独立記事（`lib/content/articles`）ではなくレジストリ駆動の `/downloads/*` ページ。`/tools` ハブ・記事詳細の `RelatedToolsBox`・sitemap から到達可能で孤立なし。
- `validate:content` の cannibalization 警告（`tools::download` の同一ハブ内グルーピング）は設計上の想定内で許容。
- 監査で lint 修正1件（`components/tools/useLocalStorageState.ts` の `set-state-in-effect`）を実施。コンテンツ/URL への影響なし。

### tools マイクロバッチ #4・最終（2026-08-02 / 3件公開）

`download-cover-letter-template`・`download-housing-inspection-checklist`・`download-emergency-card` を新規公開し tools ハブを完了（全14件）。いずれも新規 URL（`/downloads/*`）で既存公開ページとの URL 衝突はなく、リダイレクト不要。レジストリ経由で `/tools` ハブ・`RelatedToolsBox`（関連記事）・サイトマップに自動連携。`validate:content` の cannibalization 警告（`tools::download` の同一ハブ内グルーピング）は設計上の想定内で許容。

### tools マイクロバッチ #3（2026-08-02 / 4件公開）

`tool-job-application-tracker`・`tool-farm-evidence-tracker`・`tool-return-home-checklist`・`download-resume-template` を新規公開（ツール・テンプレート）。いずれも新規 URL（`/tools/*`・`/downloads/*`）で既存公開ページとの URL 衝突はなく、リダイレクト不要。レジストリ経由で `/tools` ハブ・`RelatedToolsBox`（関連記事）・サイトマップに自動連携。`validate:content` の cannibalization 警告（`tools::interactive-tool`／`tools::download` の同一ハブ内グルーピング）は設計上の想定内で許容。

### tools マイクロバッチ #2（2026-08-02 / 4件公開）

- 統合・リダイレクトは**該当なし**。4件（`tool-specified-work-region-checker`, `tool-farm-season-calendar`, `tool-weekly-budget-calculator`, `tool-resume-checklist`）はすべて新規スラッグの新規追加（create）で、既存公開URLの統合・置換・分割は発生しない。
- ツールは記事（`lib/content/articles`）ではなく `/tools/*` の独立ページ。`/tools` ハブ・Header/Footer ナビ・記事詳細の `RelatedToolsBox`・sitemap から到達可能で孤立なし。
- 重複意図: 郵便番号/シーズン/予算/レジュメの各ツールは既存記事（`specified-work-postcodes`/`farm-season-calendar`/`australia-living-cost`/`resume-guide` 等）と主題が近いが、記事＝読み物、ツール＝操作/検索/計算機能として役割分担。相互リンクで補完（カニバリではなく補完関係）。

### tools マイクロバッチ #1（2026-08-02 / 3件公開・新カテゴリ初回）

- 統合・リダイレクトは**該当なし**。3件（`tool-arrival-checklist`, `tool-packing-checklist`, `tool-88-day-calculator`）はすべて新規スラッグの新規追加（create）で、既存公開URLの統合・置換・分割は発生しない。
- ツールは記事（`lib/content/articles`）ではなく `/tools/*` の独立ページ。`/tools` ハブ・Header/Footer ナビ・記事詳細の `RelatedToolsBox`・sitemap から到達可能で孤立なし。
- 重複意図: 到着後/持ち物チェックリストは既存記事（`arrival-checklist`/`packing-list` 等）と主題が近いが、記事＝読み物、ツール＝端末保存できる操作機能として役割分担。相互リンクで補完（カニバリではなく補完関係）。

### community マイクロバッチ #2（2026-08-02 / 残り1件公開・ハブ完了）

**統合（merged）: なし。リダイレクト: なし。分割（split）: なし。** community（友達・コミュニティ）ハブの
最後の1件（`volunteering-guide`）は**新規スラッグ**（`category: "community"` / `hub: "community"`）で、
既存公開記事との統合・URL潰しは発生しない。分類は create。

- **就労（公開→公開）のカニバリ回避:** `volunteering-guide` は有給の仕事系記事（`job-search-websites`/`facebook-job-groups` 等）と役割を分け、本記事は『無給のボランティアの探し方と就労との違い・安全確認』に限定。有給の求職手順は仕事系記事へ、ビザ上のwork/Specified work該当は断定せず公式（Home Affairs）へ誘導。
- 孤立記事なし: `/community-guide` が公開 community 記事6件を自動列挙・Footer からも到達可能。`relatedSlugs` は公開/既存 slug のみ参照（dangling 0）。
- **最終ハブ監査（全て合格）:** `validate:articles`（community 6・重複0）／`tsc`（exit 0）／`validate:content`（0 error / 66 warning・dangling 0）／`test:content`（5/5）／`lint`（クリーン）／`build`（成功）。
- **community ハブ完了:** 6/6 published・残り0件。他カテゴリは未着手。

### community マイクロバッチ #1（2026-08-02 / 5件公開・新カテゴリ初回）

**統合（merged）: なし。リダイレクト: なし。分割（split）: なし。** community（友達・コミュニティ）ハブの
先頭5件（`make-friends-australia` / `japanese-community-groups` / `homesickness-loneliness` /
`culture-shock-australia` / `dating-safety-australia`）はすべて**新規スラッグ**（`category: "community"` /
`hub: "community"`）で、既存公開記事との統合・URL潰しは発生しない。分類はいずれも create。

- 5件は検索意図が独立（友達の作り方／日本人コミュニティ・SNSグループの探し方と詐欺回避／ホームシック・孤独への対処／カルチャーショックと慣れ方／デーティングアプリの安全対策）。
- **ユーザー投稿（UGC）と検証済みガイダンスの区別:** 記事本文で「日本人コミュニティ・SNSグループの投稿はユーザーによる情報であり無保証」「重要事項は公式で裏取り」を明示。掲示板（`/community`）は実在の対話機能として案内し、法・ビザ・税・労働・賃貸などは検証済みエバーグリーン記事や公式一次情報へリンク。
- **安全・プライバシー・詐欺対策:** 初対面の安全（公共の場・予定共有・自分で帰る手段）、個人情報の最小化、ロマンス詐欺の見分け方、同意（consent）、緊急/被害時の連絡先（000／1800RESPECT／Scamwatch／IDCARE）を明記。架空の会員数・投稿・イベントは掲載していない。
- **新カテゴリ整備（travel/return-home の前例に準拠）:** `ArticleCategory` に `community` 追加、`lib/content/articles/community.ts` 新設、`index.ts` 配線、`hubs.ts` の `CATEGORY_TO_HUB` に `community: "community"`、`mockData.ts` にラベル「友達・コミュニティ」（記事は追加せず）、`app/community-guide/page.tsx` 新設（既存フォーラム `/community` と衝突しない `/community-guide` を採用）、`GuideCategoryPage` に任意 `routePath` を追加、`sitemap.ts`・Footer に `/community-guide` 追加。
- 孤立記事なし: `/community-guide` が公開 community 記事5件を自動列挙・Footer からも到達可能。`relatedSlugs` は公開/既存 slug のみ参照（`volunteering-guide` は未公開のため含めず dangling 0）。既存の `japanese-community-groups`（jobs.ts 参照）・`dating-safety-australia`（visa.ts 参照）へのグローバル dangling が本公開で解決。
- **検証（マイクロバッチ範囲・各1回・リトライ0回）:** `validate:articles`（community 5・重複 slug/パス/エクスポート 0・OK）／`tsc --noEmit`（exit 0）／`validate:content`（0 error / 66 warning・dangling 0）。
- **残り community:** 1件（`volunteering-guide` P3）。次回は ≤5 のため全件処理＋最終 community ハブ監査を実施。

### return-home マイクロバッチ #3（2026-08-02 / 残り2件公開・ハブ完了）

**統合（merged）: なし。リダイレクト: なし。分割（split）: なし。** return-home ハブの最後の2件
（`reverse-culture-shock` / `australian-police-check-after-return`）はすべて**新規スラッグ**
（`category: "return-home"` / `hub: "return-home"`）で、既存公開記事との統合・URL潰しは発生しない。分類はいずれも create。

- 2件は検索意図が独立（帰国後の逆カルチャーショック＋キャリア再始動／帰国後・海外からの豪州無犯罪証明取得）。
- **既存記事との差別化（公開→公開のカニバリ回避）:** `reverse-culture-shock` は `use-wh-experience-in-resume`（履歴書の書き方）と役割を分け、本記事は感情・ウェルビーイングとキャリア再始動の考え方に限定（履歴書手順は既存記事へリンク）。`australian-police-check-after-return` は `police-check-guide`（在豪中のACIC名前ベース）と役割を分け、本記事は海外/AFP指紋ルートに限定。いずれも既存URLは保持し `relatedSlugs` で接続。
- 孤立記事なし: `/return-home` が公開 return-home 記事12件を自動列挙。`relatedSlugs` は公開/既存 slug のみ参照（dangling 0）。
- **最終ハブ監査（全て合格）:** `validate:articles`（return-home 12・重複0）／`tsc`（exit 0）／`validate:content`（0 error / 66 warning・dangling 0）／`test:content`（5/5）／`lint`（クリーン）／`build`（成功）。
- **return-home ハブ完了:** 12/12 published・残り0件。他カテゴリは未着手。

### return-home マイクロバッチ #2（2026-08-02 / 5件公開）

**統合（merged）: なし。リダイレクト: なし。分割（split）: なし。** return-home ハブの続き5件
（`bond-refund-before-leaving` / `sell-car-timeline` / `send-luggage-to-japan` /
`keep-australian-bank-account` / `use-wh-experience-in-resume`）はすべて**新規スラッグ**（`category: "return-home"` / `hub: "return-home"`）で、既存公開記事との統合・URL潰しは発生しない。分類はいずれも create。

- 5件は検索意図が独立（Bond返金の段取り／車売却の出品時期／荷物送付の比較／口座維持の注意／履歴書での見せ方）。
- **既存記事との差別化（公開→公開のカニバリ回避）:** `sell-car-timeline` は `sell-car-before-leaving`（transport／売り方の手順）と役割を分け、本記事は「いつ出品するか」のスケジュールに限定（手順は既存記事へリンク）。`keep-australian-bank-account` は `close-bank-account-before-leaving`（money／閉じる/残すの判断）と役割を分け、本記事は「残す場合の注意点」に限定。いずれも既存のURLは保持し、相互に `relatedSlugs` で接続。
- 孤立記事なし: `/return-home` が公開 return-home 記事10件を自動列挙。`relatedSlugs` は公開/既存 slug のみ参照（dangling 0）。
- **return-home ハブ継続中:** 10/12 published・残り2件。次回開始 = `reverse-culture-shock`。次回は残り2件（≤5）のため最終ハブ監査を実施。他カテゴリは未着手。

### return-home マイクロバッチ #1（2026-08-02 / 5件公開・新カテゴリ初回）

**統合（merged）: なし。リダイレクト: なし。分割（split）: なし。** return-home（帰国準備）ハブの最初の5件
（`leaving-australia-checklist` / `final-pay-before-leaving` / `early-tax-return-departing` /
`dasp-before-after-leaving` / `close-services-before-leaving`）はすべて**新規スラッグ**（`category: "return-home"` / `hub: "return-home"`）で、
本バッチが return-home ハブの初回のため既存の公開 return-home 記事は存在せず、統合・URL潰しは発生しない。分類はいずれも create。

- 5件は検索意図が独立（帰国前チェックリスト全体像／Final Pay・未払い給与／年度途中帰国のタックスリターン／DASP申請のタイミング／解約サービス一覧）。
  出国前アクションと出国後アクションを各記事内で分離し、可変情報（処理期間・還付額・DASP税率・手数料）は断定せず ATO/Fair Work/ACCC へ誘導。
- 孤立記事なし: `/return-home` が公開 return-home 記事5件を自動列挙。`relatedSlugs` は公開/既存 slug のみ参照（dangling 0）。
- **return-home ハブ継続中:** 5/12 published・残り7件。次回開始 = `bond-refund-before-leaving`。最終ハブ監査は残り5件以下時に実施。他カテゴリは未着手。

### travel マイクロバッチ #2（2026-08-02 / 4件公開・travel ハブ完了）

**統合（merged）: なし。リダイレクト: なし。分割（split）: なし。** travel ハブの残り4件
（`great-barrier-reef-guide` / `uluru-guide` / `tasmania-trip-guide` / `public-holiday-travel`）は
すべて**新規スラッグ**（`category: "travel"` / `hub: "travel"`）で、既存公開記事との統合・URL潰しは発生しない。分類はいずれも create。

- 4件は検索意図が独立（GBRのツアー選びと季節／ウルルのアクセス・入園・文化的配慮／タスマニア周遊／祝日・スクールホリデーの混雑対策）。
  旅程ガイダンス（itinerary/プランニング）と可変情報（料金・時刻・海況・入園料・祝日日程）を各記事内で分離し、可変情報は断定せず公式へ誘導。
- 孤立記事なし: `/travel` が公開 travel 記事9件を自動列挙。`relatedSlugs` は公開/既存 slug のみ参照（dangling 0）。
- **travel ハブ完了:** 9/9 published・残り0件。最終ハブ監査を実施（全件が最終状態・目的地/意図が一意・changeable の限定と確認日明記・`/travel` 列挙・薄い/下書き公開なし）。次カテゴリは未着手。

### travel マイクロバッチ #1（2026-07-30 / 5件公開）

**統合（merged）: なし。リダイレクト: なし。分割（split）: なし。** travel（旅行）ハブの最初の5件
（`australia-travel-seasons` / `domestic-flight-guide` / `australia-road-trip-guide` /
`camping-free-camps` / `east-coast-route`）はすべて**新規スラッグ**（`category: "travel"` / `hub: "travel"`）で、
本バッチが travel ハブの初回のため既存の公開 travel 記事は存在せず、統合・リダイレクトは発生しない。分類はいずれも create。

- 5件は検索意図が独立（季節・気候の選び方／国内線の安い予約／ロードトリップの計画と安全／キャンプ・Free Campのルール／
  東海岸のモデルルート）。旅程ガイダンス（itinerary/プランニング）と可変情報（運賃・時刻・天気・料金）を各記事内で分離し、
  可変情報は断定せず公式へ誘導。相互に `relatedSlugs` で接続。
- 新カテゴリ整備（area 前例に準拠）: `ArticleCategory` に `travel` 追加・`travel.ts` 新規・`index.ts`/`hubs.ts` 配線・
  `mockData.ts` にカテゴリラベル（記事は非追加）・`app/travel/page.tsx` 新設・`sitemap.ts`/Footer に `/travel`。
- 孤立記事なし: `/travel`（`GuideCategoryPage category="travel"`）が公開 travel 記事を自動列挙。`relatedSlugs` は公開/既存slug＋
  本バッチ新規のみ参照（未公開 planned の `great-barrier-reef-guide`/`uluru-guide`/`tasmania-trip-guide`/`public-holiday-travel`
  は含めず dangling 回避）。既存 `visa.ts` の `domestic-flight-guide` 参照が本公開で解決。
- 次の未完了 travel slug: `great-barrier-reef-guide`（残り4件＝次回は最終 travel ハブ監査）。

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
| `city-public-transport-comparison` | `transport-payment-guide` | `/guides/city-public-transport-comparison` → `/guides/transport-payment-guide` | 都市別の公共交通・運賃・決済比較が同一検索意図（約70%重複） |

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

### housing バッチ完了（2026-07-19 / 残り16件公開・ハブ全21件完了）

housing ハブの残り16件を公開し、housing バッチを完了した。

- **公開（16件）:** `bond-rules-overview`（legal）, `condition-report-guide`（how-to）,
  `rental-agreement-share-house`（checklist）, `rent-and-bills`（finance）, `rent-increase-rules`（legal）,
  `bond-refund-dispute`（problem-solving）, `ending-tenancy-notice`（template）,
  `find-replacement-tenant`（how-to）, `share-house-rules`（guide）, `share-house-conflict`（problem-solving）,
  `short-term-accommodation`（comparison）, `hostel-guide`（guide）, `homestay-guide`（guide）,
  `couple-room-housing`（how-to）, `regional-farm-housing`（housing）, `rental-scam-examples`（security）。
- **統合（merged）: なし。リダイレクト: なし。** 16件はいずれも新規スラッグで、既存の公開記事
  `housing-guide`（総論）/ `share-house-finding`（探し方＋内見概要）およびマイクロバッチ3件とは
  検索意図が明確に異なる（Bond法規・入居/退去手続き・契約チェック・光熱費・値上げ・トラブル解決・
  短期滞在比較・ホステル/ホームステイ・カップル/地方の家探し・詐欺）。有用コンテンツの重複は
  60–70% 未満で独立した強い意図があるため、**統合せず個別公開**し `relatedSlugs` で相互接続した。
- **検索意図の分離（cannibalization 警告への回答）:** `validate:content` は intent ラベル単位で
  近接記事を warning に挙げるが、いずれも実際の検索意図は分離している。例:
  housing::comparison（`housing-platforms-comparison`＝プラットフォーム比較 / `short-term-accommodation`
  ＝到着後の短期滞在先比較）、housing::legal（`bond-rules-overview`＝Bondの仕組み / `rent-increase-rules`
  ＝値上げ対応）、housing::guide（`share-house-rules`＝生活ルール / `hostel-guide` / `homestay-guide`）。
  過検出のため統合しない。
- housing ハブ最終状態: 全21件（既存2＋新規19）が最終ステータス確定。planned/merged/review は 0件。

### transport サブバッチ #1（2026-07-19 / 8件）

**統合（merged）: なし。リダイレクト: なし。** transport ハブの中古車購入〜所有〜故障対応 8件
（`used-car-inspection-checklist` / `ppsr-check-guide` / `rego-ctp-rwc` / `vehicle-transfer-by-state` /
`car-insurance-comparison` / `roadside-assistance` / `car-breakdown-guide` / `flat-tyre-guide`）はすべて
**新規スラッグ**で、既存の公開記事（`cars-guide` 車購入・Rego総論・`license-guide` 免許総論・
`transport-payment-guide` ・`intercity-transport`）とは**検索意図が明確に異なり（現車確認・PPSR照会・
Rego/CTP/車検の違い・州別名義変更・保険の種類・ロードサービス・故障/パンク対応）、全面重複はないため、
新規の統合・リダイレクトは発生せず**、`relatedSlugs` で相互接続した。

- 既存 `cars-guide`（車購入の総論）の `relatedSlugs` を拡張し、`used-car-inspection-checklist` /
  `ppsr-check-guide` / `rego-ctp-rwc` / `vehicle-transfer-by-state` / `car-insurance-comparison` /
  `roadside-assistance` へ接続。前セッションが残した `sell-car-before-leaving`（planned・未公開）への
  dangling 参照は削除して整合。
- `buy-used-car-guide`→`cars-guide` は過去バッチで統合済み（本サブバッチで変更なし）。
- 備考: transport ハブの残り planned 14件（公共交通比較・免許切替・トール/駐車・事故/売却等）は
  次サブバッチで扱う。`city-public-transport-comparison` から再開。

### transport サブバッチ #2（2026-07-19 / 13件公開・1件統合）

**統合（merged）1件: `city-public-transport-comparison` → `transport-payment-guide`。**
既存公開の公共交通・決済ガイドが Sydney(Opal)/Melbourne(myki)/Brisbane(go card)/Perth(SmartRider) の
タッチ決済を既にカバーし、都市別の運賃・キャップ比較という検索意図が約70%重複（同一の次アクション）
のため統合。`transport-payment-guide` を運賃制度・デイキャップ比較の段落＋keyFact で補強し、
`redirectFrom: ["city-public-transport-comparison"]` を付与。308恒久リダイレクトを `redirects.ts` に登録
（上記「1. 実施済み統合」表にも追加）。

公開13件はすべて**新規スラッグ**で、既存公開記事と検索意図が分離するため統合せず `relatedSlugs` で
相互接続した:

- transport カテゴリ9件: `mechanic-tyre-shop-english` / `fuel-saving-apps` / `tolls-linkt-guide` /
  `parking-fines-guide` / `car-accident-guide` / `rent-a-car-guide` / `sell-car-before-leaving` /
  `e-bike-e-scooter-rules` / `remote-driving-safety`。
- license カテゴリ4件（hub: transport）: `japanese-licence-state-rules` / `convert-japanese-licence` /
  `motorcycle-licence-australia` / `digital-driver-licence`。
- 内部リンク整合: `cars-guide` に `sell-car-before-leaving` を追加、`license-guide` を新規免許4件＋
  `international-driving-permit` へ接続、`transport-payment-guide` に `intercity-transport` を追加。孤立記事なし。
- 備考: これで transport ハブは全24件が最終ステータス確定（planned 0件・ハブ完了）。

### area マイクロバッチ #5 = area ハブ完了（2026-07-30 / 残り3件公開＋最終監査）

**統合（merged）: なし。リダイレクト: なし。分割（split）: なし（本バッチは新規追加のみ）。** area ハブの残り全3件
（州ガイド `state-sa-guide` / `state-tas-guide` / `state-nt-guide`）はすべて**新規スラッグ**（`hub: "area"`・`category: "area"`・`intent: state-guide`）で、
州名クエリごとに検索意図が独立するため個別公開し、`relatedSlugs` で相互接続した。分類はいずれも create。

- 州ガイドは「州の制度（免許・登録／賃貸・ボンド／公共交通カード）＋都市/農業の選び方」の州ハブとして構成し、州内の**公開済み記事**へ双方向リンク（`state-sa-guide` → `area-adelaide`、`state-tas-guide` → `area-hobart`・`region-tasmania-farm`、`state-nt-guide` → `area-darwin`・`safety-emergency`）。各都市/地域記事（`intent: area-guide`）と州ガイド（州制度の俯瞰）は次の行動が異なるため統合せず別記事として保持。
- 州の制度は公式一次情報に限定（免許・登録＝Service SA / Service Tasmania / NT Government MVR、公共交通＝Adelaide Metro / Metro Tasmania / NT Public transport、賃貸・ボンド＝CBS / CBOS / NT Consumer Affairs、気候・警報＝BOM）。免許切替・賃貸条件などの具体値は州で変わるため断定せず「各公式で最新確認」に誘導し、数値の創作はしない。
- `relatedSlugs` は公開/既存 slug と公開済み farm 地域ガイドのみ参照。dangling なし。
- 孤立記事なし: area ハブページ（`GuideCategoryPage category="area"`）が公開 area 記事を自動列挙するため、3件はすべてハブから到達可能。
- **最終 area ハブ監査（≤5 のため実施）:** `npm run build`（exit 0・`/sitemap.xml` 生成）／`npm run lint`（exit 0）／`npm run test:content`（5/5 pass）／`validate:articles`（area 29・重複0）／`validate:content`（0 error）。
- **area ハブ完了: 公開29件（既存6＋バッチ #1〜#4 の20件＋本バッチ3件）。planned/merged/review/excluded: 0件。travel には着手しない。**

### area マイクロバッチ #4（2026-07-30 / 5件公開）

**統合（merged）: なし。リダイレクト: なし。分割（split）: なし（本バッチは新規追加のみ）。** area ハブの次の5件
（`area-griffith`〔市/ファーム地域〕 ＋ 州ガイド4件 `state-nsw-guide` / `state-vic-guide` / `state-qld-guide` / `state-wa-guide`）はすべて**新規スラッグ**（`hub: "area"`・`category: "area"`）で、
地名・州名クエリごとに検索意図が独立するため個別公開し、`relatedSlugs` で相互接続した。分類はいずれも create。

- 州ガイド（`intent: state-guide`）は「州の制度（免許・登録／賃貸・ボンド／公共交通カード）＋都市の選び方」の州ハブとして構成し、州内の**公開済み都市記事**へ双方向リンク（`state-nsw-guide` → `area-sydney`・`area-newcastle`・`area-wollongong`、`state-vic-guide` → `area-melbourne`・`area-mildura`・`area-shepparton`、`state-qld-guide` → `area-brisbane`・`area-gold-coast`・`area-cairns`、`state-wa-guide` → `area-perth`）。各都市記事（`intent: area-guide`＝都市の生活/仕事の詳細）と州ガイド（州制度の俯瞰）は次の行動が異なるため統合せず別記事として保持。
- `area-griffith`（NSW内陸リベリーナ）↔ `region-griffith-farm`・`area-mildura`・`farm-second-visa`。
- 州の制度は公式一次情報に限定（免許・登録＝Service NSW / VicRoads / Queensland Government (Transport and motoring) / Department of Transport WA、公共交通＝Transport for NSW / PTV / Translink / Transperth、賃貸・ボンド＝NSW Fair Trading / Consumer Affairs Victoria / RTA / Consumer Protection WA）。免許切替・賃貸条件などの具体値は州で変わるため断定せず「各公式で最新確認」に誘導し、数値の創作はしない。
- `relatedSlugs` は公開/既存 slug と公開済み farm 地域ガイドのみ参照。未公開（planned）の `state-sa-guide`・`state-tas-guide`・`state-nt-guide` 等は含めず dangling 回避。
- 孤立記事なし: area ハブページ（`GuideCategoryPage category="area"`）が公開 area 記事を自動列挙するため、5件はすべてハブから到達可能。
- **area 26/29 が最終ステータス確定（既存6件＋バッチ #1〜#3 の15件＋本バッチ5件）。残り3件（`state-sa-guide`・`state-tas-guide`・`state-nt-guide`）。次回は ≤5 のため全件処理＋最終 area ハブ監査。travel には着手しない。**

### area マイクロバッチ #3（2026-07-30 / 5件公開）

**統合（merged）: なし。リダイレクト: なし。分割（split）: なし（本バッチは新規追加のみ）。** area ハブの次の5件
（`area-townsville` / `area-newcastle` / `area-wollongong` / `area-mildura` / `area-shepparton`）はすべて**新規スラッグ**（`hub: "area"`・`category: "area"`）で、
地名クエリごとに検索意図が独立するため個別公開し、`relatedSlugs` で相互接続した。分類はいずれも create。

- 5件と既存/公開記事を意図の近い組で双方向リンク（`area-townsville` ↔ `area-cairns`・`region-bowen-ayr-farm`、`area-newcastle` ↔ `area-sydney`、`area-wollongong` ↔ `area-sydney`・`area-newcastle`、`area-mildura` ↔ `region-mildura-farm`・`farm-second-visa`、`area-shepparton` ↔ `region-shepparton-farm`・`area-mildura`）。
- 既存記事本文への更新（統合・リダイレクトなし・slug/URL/公開状態は不変）: なし。
- `relatedSlugs` は公開/既存 slug と公開済み farm 地域ガイドのみ参照。未公開（planned）の `state-*-guide`・`area-griffith` 等は含めず dangling 回避。
- 孤立記事なし: area ハブページ（`GuideCategoryPage category="area"`）が公開 area 記事を自動列挙するため、5件はすべてハブから到達可能。
- **area 21/23 が最終ステータス確定（既存6件＋バッチ #1 5件＋#2 5件＋本バッチ5件）。次の未完了 area slug: `area-griffith`。travel には着手しない。**

### area マイクロバッチ #2（2026-07-30 / 5件公開）

**統合（merged）: なし。リダイレクト: なし。分割（split）: なし（本バッチは新規追加のみ）。** area ハブの次の5件
（`area-darwin` / `area-sunshine-coast` / `area-toowoomba-gatton` / `area-bundaberg` / `area-stanthorpe`）はすべて**新規スラッグ**（`hub: "area"`・`category: "area"`）で、
地名クエリごとに検索意図が独立するため個別公開し、`relatedSlugs` で相互接続した。分類はいずれも create。

- 5件と既存/公開記事を意図の近い組で双方向リンク（`area-darwin` ↔ `area-cairns`・`specified-work-postcodes`・`farm-second-visa`、`area-sunshine-coast` ↔ `area-brisbane`・`area-gold-coast`、`area-toowoomba-gatton` ↔ `region-gatton-lockyer`・`farm-finding`、`area-bundaberg` ↔ `region-bundaberg-farm`・`farm-second-visa`、`area-stanthorpe` ↔ `region-stanthorpe-farm`・`area-toowoomba-gatton`・`farm-work-clothing`）。
- 既存記事本文への更新（統合・リダイレクトなし・slug/URL/公開状態は不変）: なし。
- `relatedSlugs` は公開/既存 slug と公開済み farm 地域ガイドのみ参照。未公開（planned）の `state-*-guide`・未公開 area slug 等は含めず dangling 回避。
- 孤立記事なし: area ハブページ（`GuideCategoryPage category="area"`）が公開 area 記事を自動列挙するため、5件はすべてハブから到達可能。
- **area 16/23 が最終ステータス確定（既存6件＋バッチ #1 5件＋本バッチ5件）。次の未完了 area slug: `area-townsville`。travel には着手しない。**

### area マイクロバッチ #1（2026-07-27 / 5件公開・既存結合記事2件を分割）

**統合（merged）: なし。リダイレクト: なし。** area ハブの先頭5件
（`area-gold-coast` / `area-perth` / `area-cairns` / `area-canberra` / `area-hobart`）はすべて**新規スラッグ**（`hub: "area"`・`category: "area"`）で、
地名クエリごとに検索意図が独立するため個別公開し、`relatedSlugs` で相互接続した。分類はいずれも create。

- **既存の結合記事2件を「分割（split）」として扱い、公開URLは保持（リダイレクトなし）:**
  - `area-brisbane`（旧「ブリスベン・ゴールドコースト」）→ **ブリスベン中心に再構成**。Gold Coast の内容は新規 `area-brisbane` から独立させ、本文で `area-gold-coast` に相互リンク。**親URLは存続（split）。**
  - `area-perth-cairns`（旧「パース・ケアンズ」結合）→ **「パース vs ケアンズ」の比較・選択ガイドに再構成**（検索意図＝2都市の比較・選び方に分離）。詳細は新規 `area-perth`・`area-cairns` に独立させ双方向リンク。**URLは保持し、公開中URLの自動統合・リダイレクトは行わない**（本ファイル §3「提案のみ（公開→公開）」・`lib/content/redirects.ts` の方針＝生きているURLを潰さない、に準拠）。WHV_CONTENT_MASTERPLAN が「既存URLを比較記事にする」選択肢を明示していることに沿う。
- 新規5件と既存/公開記事を意図の近い組で双方向リンク（`area-gold-coast` ↔ `area-brisbane`、`area-perth`/`area-cairns` ↔ `area-perth-cairns`（比較）、`area-cairns` ↔ `region-mareeba-atherton-farm`・`farm-second-visa`、`area-hobart` ↔ `region-tasmania-farm`・`area-melbourne`、`area-canberra` ↔ `area-sydney`）。
- トップページ（`app/page.tsx`）のエリアタイル「Perth / Cairns」→「Perth（`area-perth`）」に更新。`area-perth-cairns` は `/area` 一覧・相互リンクから到達可能で孤立なし。
- `relatedSlugs` は公開/既存 slug と公開済み farm 地域ガイドのみ参照。未公開（planned）の `state-*-guide`・`area-darwin` 等は含めず dangling 回避。
- 孤立記事なし: area ハブページ（`GuideCategoryPage category="area"`）が公開 area 記事を自動列挙するため、5件はすべてハブから到達可能。
- **area 11/23 が最終ステータス確定（既存6件＋本バッチ5件）。次の未完了 area slug: `area-darwin`。travel には着手しない。**

### english マイクロバッチ #3＝english ハブ完了（2026-07-27 / 3件公開・ハブ完了）

**統合（merged）: なし。リダイレクト: なし。** english ハブの残り全3件
（`listening-resources` / `language-exchange-meetup` / `ielts-pte-after-wh`）はすべて**新規スラッグ**（`hub: "english"`・`category: "english"`）で、
既存の公開記事（マイクロバッチ #1・#2 の10件・`english-prep`・`language-school`）とは
**検索意図が明確に異なり（リスニング教材の選び方・使い方／言語交換・Meetupで英語環境を作る方法／
IELTS・PTEの試験選び）、全面重複はないため、新規の統合・リダイレクトは発生せず**、
`relatedSlugs` で相互接続した。分類はいずれも create。

- 新規3件と既存記事を意図の近い組で双方向リンク（`listening-resources` ↔ `australian-english-accent`・`english-prep`・`phone-call-english`、
  `language-exchange-meetup` ↔ `australian-slang`・`workplace-english`・`english-prep`、
  `ielts-pte-after-wh` ↔ `english-prep`・`language-school`・`second-visa-guide`・`listening-resources`）。
- 既存記事本文への更新（統合・リダイレクトなし・slug/URL/公開状態は不変）: なし（本バッチは新規追加のみ）。
- `ielts-pte-after-wh`（IELTS・PTEの試験選び）と既存のビザ・進路記事は役割が異なる（前者＝試験の選び方・比較、
  後者＝ビザ制度の解説）ため別記事として保持し双方向リンク。未公開（planned）の `make-friends-australia` 等は
  `relatedSlugs` に含めず、公開/既存 slug のみ参照（dangling 回避）。
- 孤立記事なし: english ハブページ（`GuideCategoryPage category="english"`）が公開 english 記事を
  自動列挙するため、3件はすべてハブから到達可能。
- **english ハブ 13/13 完了。次の未完了 english slug: なし。area/travel には着手しない。**

### english マイクロバッチ #2（2026-07-27 / 5件公開）

**統合（merged）: なし。リダイレクト: なし。** english ハブの次の5件
（`bank-tax-english` / `medical-english` / `car-trouble-english` /
`phone-call-english` / `email-message-templates`）はすべて**新規スラッグ**（`hub: "english"`・`category: "english"`）で、
既存の公開記事（マイクロバッチ #1 の5件・`english-prep`・`language-school`）とは
**検索意図が明確に異なり（銀行・税・年金の問い合わせ英語／医療の症状伝達英語／車トラブル英語／
電話英語の練習法／英文メール・SMSテンプレート集）、全面重複はないため、新規の統合・リダイレクトは発生せず**、
`relatedSlugs` で相互接続した。分類はいずれも create。

- 新規5件どうしを意図の近い組で双方向リンク（`phone-call-english` ↔ `bank-tax-english`・`medical-english`、
  `email-message-templates` ↔ `bank-tax-english`・`workplace-english` 等）。
- 既存記事本文への内部リンク追記（更新）: `workplace-english` に `bank-tax-english`・`phone-call-english` を追加
  （本文・slug・URL・公開状態は不変）。
- `bank-tax-english`（銀行・税・年金の問い合わせ英語）と既存の金融・税カテゴリ記事（`bank-account-guide` /
  `mygov-ato-linking` / `superannuation-basics`）は役割が異なる（前者＝英語フレーズの伝え方、後者＝制度・手続きの解説）
  ため別記事として保持し双方向リンク。同様に `medical-english`／`car-trouble-english` も既存の医療・車ガイドとは
  「英語の伝え方」と「制度・手続き」で意図が分離。
- 孤立記事なし: english ハブページ（`GuideCategoryPage category="english"`）が公開 english 記事を
  自動列挙するため、5件はすべてハブから到達可能。
- 次の未完了 english slug: `listening-resources`（残り3件・次回は english ハブ最終監査を実施）。

### english マイクロバッチ #1（2026-07-27 / 5件公開）

**統合（merged）: なし。リダイレクト: なし。** english ハブの最初の5件
（`australian-english-accent` / `australian-slang` / `workplace-english` /
`hospitality-english` / `housing-english`）はすべて**新規スラッグ**（`hub: "english"`・`category: "english"`）で、
既存の公開記事（`english-prep`＝渡航前の英語準備の総論／`language-school`＝語学学校の選び方）とは
**検索意図が明確に異なり（豪州アクセントの聞き取り練習／スラング・リファレンス／職場英語フレーズ／
接客英語フレーズ／家探し英語フレーズ）、全面重複はないため、新規の統合・リダイレクトは発生せず**、
`relatedSlugs` で相互接続した。分類はいずれも create。

- 新規5件どうしを意図の近い組で双方向リンク（`workplace-english` ↔ `hospitality-english`、
  `australian-english-accent` ↔ `australian-slang` 等）。
- 既存記事本文への内部リンク追記（更新）: `english-prep` に `workplace-english`・`australian-english-accent`、
  `language-school` に `australian-english-accent`・`australian-slang` を追加（本文・slug・URL・公開状態は不変）。
- `workplace-english`（職場英語フレーズ）と `hospitality-english`（接客英語フレーズ）は近接するが、前者は
  「確認・報告・欠勤・シフト等の一般的な職場コミュニケーション」、後者は「レストラン・カフェ接客の定型」で
  場面が異なるため別記事として保持し双方向リンク。
- 孤立記事なし: english ハブページ（`GuideCategoryPage category="english"`）が公開 english 記事を
  自動列挙するため、5件はすべてハブから到達可能。
- 次の未完了 english slug: `bank-tax-english`（残り8件・english ハブは継続）。

### health マイクロバッチ #1（2026-07-27 / 5件公開）

**統合（merged）: なし。リダイレクト: なし。** health ハブの最初の5件
（`gp-urgent-care-emergency` / `overseas-insurance-claim` / `pharmacy-guide` /
`common-medicines-australia` / `dental-care-australia`）はすべて**新規スラッグ**で、既存の公開記事
`medicare-oshc`（医療・保険・病院のかかり方の総論）/ `safety-emergency`（緊急・安全の総論）/
`mental-health`（メンタルヘルス）とは**検索意図が明確に異なり（受診先の使い分け・海外保険の請求手順・
薬局の使い方・成分別の一般薬探し・歯科の費用と保険）、全面重複はないため、新規の統合・リダイレクトは
発生せず**、`relatedSlugs` で相互接続した。分類はいずれも create。

- 既存 `medicare-oshc`（医療総論）の `relatedSlugs` を拡張し、`gp-urgent-care-emergency` /
  `overseas-insurance-claim` / `pharmacy-guide` / `dental-care-australia` へ接続（本文・slug・URL は不変）。
- 有用コンテンツの重複は 60–70% 未満（`medicare-oshc` は総論で受診の流れ・GP・Medicare非対象・薬を概説、
  新規5件は各論の手順・比較）。独立した強い検索意図があるため統合しない。
- `pharmacy-guide`（薬局の使い方・制度）と `common-medicines-australia`（成分別の一般薬の探し方）は
  近接するが、前者は「どこで・どう買うか（S2/S3/S4・PBS）」、後者は「何を選ぶか（成分名・用量）」で
  次の行動が異なるため別記事として保持し双方向リンク。
- 次の未完了 health slug: `eye-care-optometrist`。

### health マイクロバッチ #2（2026-07-27 / 5件公開）

**統合（merged）: なし。リダイレクト: なし。** health ハブの次の5件
（`eye-care-optometrist` / `sexual-health-clinics` / `womens-health-guide` /
`ambulance-costs-insurance` / `sunburn-skin-cancer-prevention`）はすべて**新規スラッグ**で、既存の公開記事
（`medicare-oshc` / `safety-emergency` / `mental-health` ＋ マイクロバッチ #1 の5件）とは
**検索意図が明確に異なり（眼鏡・検眼／性の健康・STI検査・避妊／女性の健康・生理用品・検診／
救急車の費用と保険／紫外線・日焼け・皮膚がん対策）、全面重複はないため統合・リダイレクトは発生せず**、
`relatedSlugs` で相互接続した。分類はいずれも create。

- 既存記事の内部リンク変更なし（`medicare-oshc` は #1 で更新済み・本バッチでは不変）。
  新規5件は相互リンク＋既存 health 記事（`gp-urgent-care-emergency` / `pharmacy-guide` /
  `overseas-insurance-claim` / `safety-emergency` / `medicare-oshc`）と `farm-heat-sun-safety` へ接続。
- 孤立記事なし: health ハブページ（`GuideCategoryPage category="health"`）が公開 health 記事を
  自動列挙するため、5件はすべてハブから到達可能。
- `sexual-health-clinics` と `womens-health-guide` は近接するが、前者は「STI検査・避妊・相談先」、
  後者は「生理用品・婦人科・検診」で次の行動が異なるため別記事として保持し双方向リンク。
- 次の未完了 health slug: `heatstroke-guide`。

### health マイクロバッチ #4＝health ハブ完了（2026-07-27 / 残り2件公開＋最終監査）

**統合（merged）: なし。リダイレクト: なし。** health ハブの残り2件
（`flood-cyclone-safety` / `heatwave-severe-weather`）はすべて**新規スラッグ**で、既存の公開記事とは
**検索意図が明確に異なり（洪水・サイクロンへの備えと避難／熱波・激しい悪天候の警報確認）、
全面重複はないため統合・リダイレクトは発生せず**、`relatedSlugs` で相互接続した。分類はいずれも create。

- **既存3記事の強化（updated）:** `medicare-oshc` / `safety-emergency` / `mental-health` に
  `hub: "health"`・`verifiedAt: "2026-07-27"`・`officialSources` を追記（最終監査の公式ソース要件のため）。
  **本文・タイトル・slug・公開状態・URL は不変**のため統合/リダイレクトには該当しない。
- 孤立記事なし: health ハブページ（`GuideCategoryPage category="health"`）が公開 health 記事を自動列挙。
- `flood-cyclone-safety` と `heatwave-severe-weather` は近接する災害テーマだが、前者=洪水/サイクロンの避難判断、
  後者=熱波/雷雨/雹などの悪天候警報の確認方法で次の行動が異なるため別記事として保持し双方向リンク。
  既存の `bushfire-safety`（#3）とも災害系として相互リンク。
- **health ハブ完了: 公開20件（計画17＋既存3）。merged/redirect: なし。review/excluded: なし。**
  次のカテゴリ: gig-work（未着手・12件）、その後 daily-life（21件）。

### health マイクロバッチ #3（2026-07-27 / 5件公開）

**統合（merged）: なし。リダイレクト: なし。** health ハブの次の5件
（`heatstroke-guide` / `bites-stings-wildlife` / `food-allergy-eating-out` /
`work-injury-medical` / `bushfire-safety`）はすべて**新規スラッグ**で、既存の公開記事
（`medicare-oshc` / `safety-emergency` / `mental-health` ＋ #1・#2 の10件）とは
**検索意図が明確に異なり（熱中症の応急対応／咬傷・刺傷の応急処置／食物アレルギーの英語伝達／
仕事中の怪我と労災の導線／山火事への備えと警報）、全面重複はないため統合・リダイレクトは発生せず**、
`relatedSlugs` で相互接続した。分類はいずれも create。

- 既存記事の内部リンク変更なし。新規5件は相互リンク＋既存記事（`workplace-injury-workers-comp`〔jobs〕・
  `farm-weather-no-work`〔farm〕・`farm-heat-sun-safety`〔farm〕・`sunburn-skin-cancer-prevention`・
  `gp-urgent-care-emergency`・`safety-emergency`・`pharmacy-guide`・`overseas-insurance-claim`・`medicare-oshc`）へ接続。
- 孤立記事なし: health ハブページ（`GuideCategoryPage category="health"`）が公開 health 記事を
  自動列挙するため、5件はすべてハブから到達可能。
- `heatstroke-guide`（熱中症の応急対応）と `sunburn-skin-cancer-prevention`（#2・紫外線/皮膚がん予防）は
  近接するが、前者は「暑さによる急性症状の応急対応・000判断」、後者は「UV・日焼け・皮膚がんの予防」で
  次の行動が異なるため別記事として保持し双方向リンク。
- `work-injury-medical`（health・受診と書類の流れ）と `workplace-injury-workers-comp`（jobs・労災制度の詳細）は
  役割が異なる（前者=医療受診の導線、後者=補償制度の詳細）ため別記事として保持し双方向リンク。
- 次の未完了 health slug: `flood-cyclone-safety`（残り2件・次回は最終 health ハブ監査を実施）。

### daily-life マイクロバッチ #4 = 最終（2026-07-27 / 6件公開・ハブ完了）

**統合（merged）: なし。リダイレクト: なし。** daily-life ハブの残り全6件
（`gym-fitness-guide` / `haircut-barber-english` / `public-toilets-showers` /
`home-internet-guide` / `online-scams-cybersecurity` / `phone-lost-stolen`）はすべて**新規スラッグ**
（`hub: "daily-life"`、`category` は health/english/transport/sim/money に分散）で、既存の公開記事とは
**検索意図が明確に異なり（ジム契約の注意／美容院・バーバー英語／無料トイレ・シャワー・給水／ホームインターネット／
オンライン詐欺・セキュリティ／スマホ紛失盗難対応）、全面重複はないため、新規の統合・リダイレクトは発生せず**、
`relatedSlugs` で相互接続した。分類はいずれも create。既存記事本文への内部リンク追記は無し。

- 新規6件どうしを意図の近い組で双方向リンク（`online-scams-cybersecurity` ↔ `phone-lost-stolen`、
  `home-internet-guide` ↔ `sim-guide`、`gym-fitness-guide` ↔ `public-toilets-showers` 等）。
- `online-scams-cybersecurity`（詐欺・アカウント保護）と既存 `buy-furniture-household-items`（個人売買の詐欺対策）は
  近接するが、対象範囲が異なる（オンライン詐欺全般・MFA vs 中古品売買の取引安全）ため別記事として保持しリンク接続。
- 孤立記事なし: 各カテゴリページ（`/health`・`/english`・`/transport`・`/sim`・`/money` の `GuideCategoryPage`）が
  公開記事を自動列挙するため到達可能。
- **daily-life ハブ 21/21 完了。次の未完了 daily-life slug: なし。**

### daily-life マイクロバッチ #3（2026-07-27 / 5件公開）

**統合（merged）: なし。リダイレクト: なし。** daily-life ハブの次の5件
（`australia-clothing-seasons` / `buy-furniture-household-items` / `op-shop-guide` /
`post-office-courier` / `library-guide`）はすべて**新規スラッグ**（`hub: "daily-life"`、`category` は
clothing/housing/arrival に分散）で、既存の公開記事とは**検索意図が明確に異なり
（都市・季節別の服装／家具・生活用品の新品中古比較と詐欺対策／Op Shopの使い方・寄付／Australia Postの使い方／図書館の活用）、
全面重複はないため、新規の統合・リダイレクトは発生せず**、`relatedSlugs` で相互接続した。分類はいずれも create。

- 既存 `clothing-guide` の `relatedSlugs` に `australia-clothing-seasons` を追加（本文・slug・URL・公開状態は不変）。
- `australia-clothing-seasons`（季節・地域別の服装＝雨季・寒暖差・UV・重ね着）と既存 `clothing-guide`
  （服装・気候の総論＋持ち物）は近接するが、次の行動が異なる（各論の着こなし判断 vs 総論・持ち物準備）ため
  別記事として保持し双方向リンク。
- 新規5件どうしは意図の近い組を双方向リンク（`op-shop-guide` ↔ `buy-furniture-household-items`、
  `post-office-courier` ↔ `library-guide`）。
- 孤立記事なし: 各カテゴリページ（`/clothing`・`/housing`・`/arrival` の `GuideCategoryPage`）が公開記事を
  自動列挙するため到達可能。
- 次の未完了 daily-life slug: `gym-fitness-guide`。

### daily-life マイクロバッチ #2（2026-07-27 / 5件公開）

**統合（merged）: なし。リダイレクト: なし。** daily-life ハブの次の5件
（`food-storage-share-house` / `tap-water-drinking` / `shopping-surcharges-tipping` /
`alcohol-id-rules` / `laundry-guide`）はすべて**新規スラッグ**（`hub: "daily-life"`、`category` は
food/money/clothing に分散）で、既存の公開記事とは**検索意図が明確に異なり
（シェアハウスの食品保存／水道水の可否・災害時確認／カード追加料金・チップ／飲酒の身分証・州法差／洗濯・コインランドリー）、
全面重複はないため、新規の統合・リダイレクトは発生せず**、`relatedSlugs` で相互接続した。分類はいずれも create。

- 既存 `food-guide` の `relatedSlugs` を拡張し、`food-storage-share-house` / `tap-water-drinking` /
  `alcohol-id-rules` へ接続。既存 `clothing-guide` の `relatedSlugs` に `laundry-guide` を追加
  （いずれも本文・slug・URL・公開状態は不変）。
- `food-storage-share-house`（食品保存の安全＝FSANZ）と `cheap-meal-prep`（作り置きレシピ）は近接するが、
  次の行動が異なる（保存・衛生 vs 献立・調理）ため別記事として保持し双方向リンク。
- 孤立記事なし: 各カテゴリページ（`/food`・`/money`・`/clothing` の `GuideCategoryPage`）が公開記事を
  自動列挙するため到達可能。
- 次の未完了 daily-life slug: `australia-clothing-seasons`。

### daily-life マイクロバッチ #1（2026-07-27 / 5件公開）

**統合（merged）: なし。リダイレクト: なし。** daily-life ハブの最初の5件
（`supermarket-comparison` / `grocery-saving-tips` / `asian-japanese-groceries` /
`cheap-meal-prep` / `australian-oven-guide`）はすべて**新規スラッグ**（`category: "food"` / `hub: "daily-life"`）で、
既存の公開記事 `food-guide`（食費・自炊・スーパー・外食の総論）とは**検索意図が明確に異なり
（3大スーパー比較／食費節約テク／日本・アジア食材の入手先／作り置きレシピ／オーブン・コンロの使い方）、
全面重複はないため、新規の統合・リダイレクトは発生せず**、`relatedSlugs` で相互接続した。分類はいずれも create。

- 既存 `food-guide`（総論）の `relatedSlugs` を拡張し、`supermarket-comparison` / `grocery-saving-tips` /
  `cheap-meal-prep` / `asian-japanese-groceries` へ接続（本文・slug・URL・公開状態は不変）。
- 有用コンテンツの重複は 60–70% 未満（`food-guide` は総論でスーパー・自炊・外食を概説、新規5件は各論の比較・
  節約テク・入手先・レシピ・機器操作）。独立した強い検索意図があるため統合しない。
- `supermarket-comparison`（どの店で買うか＝価格・会員・店舗網の比較）と `grocery-saving-tips`（どう買えば安いか＝
  特売・値引き・冷凍・自炊）は近接するが次の行動が異なるため別記事として保持し双方向リンク。
- 孤立記事なし: food カテゴリページ（`GuideCategoryPage category="food"`）が公開 food 記事を自動列挙するため到達可能。
- 次の未完了 daily-life slug: `food-storage-share-house`。

## 4. リダイレクト運用ルール

- `to`（転送先）は必ず公開中（`published`）の実記事 slug。
- チェーン（A→B→C）禁止。`to` を別の `from` にしない。
- 308（恒久）。
- 追加・変更は `lib/content/redirects.ts` のみを編集し、ビルド時検証を通すこと。
