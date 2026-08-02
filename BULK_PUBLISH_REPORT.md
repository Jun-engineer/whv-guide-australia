# BULK_PUBLISH_REPORT

生成日: 2026-07-16
ブランチ: main

## チェックポイント（2026-08-02）: tools マイクロバッチ #1（3件公開・新カテゴリ初回 / commit: feat: publish tools micro-batch）

tools（ツール・テンプレート）ハブの**最初の3件**を公開しました（新規カテゴリの初回・マイクロバッチ運用）。開始時の未完了 tools は14件（>3）だったため、**通常のマイクロバッチ**として記録順の先頭3件のみ処理し、**最終ハブ監査（フルビルド）は未実施**（残り11件・次回継続）。

- **選定・公開した3件（すべて `hub: tools`・完全実装）:** `tool-arrival-checklist`（P0）／`tool-packing-checklist`（P1）／`tool-88-day-calculator`（P0）。いずれも開始時 planned をマニフェストで確認。
  - `tool-arrival-checklist` — 到着後にやること（Day1／最初の1週間／落ち着いてから）を端末保存で管理・進捗率表示。
  - `tool-packing-checklist` — 気候・シーズン・仕事のファセットで絞り込める持ち物リスト。絞り込み後の可視項目に対して進捗計算。
  - `tool-88-day-calculator` — セカンドビザ88日の勤務日を記録・集計する**記録専用**ツール。ビザ可否・指定業務/地域の該当性は判定しない（強い免責）。
- **作成（created）slug:** 上記3件。**更新/分割・統合・リダイレクト・レビュー/除外: なし**（新規追加のみ）。
- **設計原則の遵守:** 計算ロジックを描画から分離（純粋ロジックを `lib/tools/logic/*.mjs` 化）。単体テスト `scripts/tools.test.mjs`（13ケース・全pass）を追加。公式閾値は出典明記、外部データが関わる 88日ツールに `verifiedAt`＋`officialSources`（Home Affairs 2件）。推計を公式判定（ビザ可否・税/法的助言）として提示しない旨を各免責に明記。モバイル対応・キーボード操作可能・結果は平易な日本語で説明。
- **発見性:** `/tools` ハブ新設、Header/Footer に `/tools` 追加、記事詳細に `RelatedToolsBox`（関連記事から相互リンク）、sitemap に `/tools`＋各ツールパス追加。
- **検証（通常バッチ・各1回）:** `test:tools`（13/13 pass）／`validate:content`（0 error / 66 warning・dangling 0）／`tsc --noEmit`（exit 0）／`validate:articles`（no article data errors）。フルビルドは通常バッチのため未実施。
- **content-manifest.yaml:** 3件を published 化・`manifest.generated.ts` 再生成。
- **未解決の問題:** なし。**次:** tools 継続（残り11件・次は `tool-specified-work-region-checker`（P0）。ただし公式郵便番号ライブデータに依存するため次回レビューで方針決定）。

## チェックポイント（2026-08-02）: community マイクロバッチ #2（残り1件公開・ハブ完了 / commit: feat: complete community content batch）

community（友達・コミュニティ）ハブの**最後の1件**を公開し、**community ハブを完了（6/6）**しました。開始時の未完了 community は1件（≤5）だったため残り全件を処理し、**最終ハブ監査（フルビルド／テスト／Lint）を実施**しました。

- **公開した1件（`category: community`・`hub: community`・`verifiedAt: 2026-08-02`・完全公開・分類は create）:**
  `volunteering-guide`（P3, social, id a346）— オーストラリアでのボランティアの探し方と有給の『仕事』との違い・安全確認。GoVolunteer（Volunteering Australia運営）・州センター・地域NPO/op shopでの探し方、無給であること、実態が雇用に近づけば賃金が必要になり得ること、ワーホリビザの就労条件/Specified workとの関係で確認すべき点、住み込み型（work for accommodation）や個人情報/前払い要求への注意を整理。
- **作成（created）slug:** 上記1件。**更新/分割（updated/split）slug: なし。統合（merged）slug: なし。リダイレクト: なし。レビュー/除外 slug: なし。**
- **就労との区別・UGC分離:** SNS/コミュニティ募集はユーザー情報で無保証と明示。『無給でこの業務を』は実質的な労働の可能性を警告しFair Work・移民局公式へ接続。ビザ上のwork/Specified work該当は断定せず移民局で確認するよう明記。可変・YMYL要素は断定せず確認日 2026-08-02 を明記。
- **公式ソース（2026-08-02 ライブ確認）:** Fair Work Ombudsman｜Unpaid work／Department of Home Affairs｜Working Holiday visa (417)／Volunteering Australia・GoVolunteer／Safe Work Australia｜Volunteers／Triple Zero 000。
- **孤立記事なし:** `/community-guide` が公開6件を自動列挙・Footer から到達可能。`relatedSlugs` は公開/既存 slug のみ（dangling 0）。
- **基盤変更なし:** community 基盤はバッチ#1で整備済み。本バッチは記事追加とマニフェスト status 更新のみ。`mockData.ts` への記事追加なし。
- **content-manifest.yaml:** `volunteering-guide` を `planned` → `published`。`manifest.generated.ts` 再生成。
- **最終ハブ監査（全て合格）:** `validate:articles`（community 6・重複0・errors なし）／`tsc --noEmit`（exit 0）／`validate:content`（0 error / 66 warning・dangling 0）／`test:content`（5/5 pass）／`lint`（クリーン）／`build`（成功・`/community-guide` 静的プリレンダー・`/guides/[slug]` SSG に `volunteering-guide` 収録・sitemap 収録）。
- **community ハブ状態:** 6件すべて published（planned/merged/review/excluded は 0）。薄い/下書きの公開ページなし。
- **未解決の問題:** なし。**次カテゴリ:** 他カテゴリは未着手。

## チェックポイント（2026-08-02）: community マイクロバッチ #1（5件公開・新カテゴリ初回 / commit: feat: publish community micro-batch）

community（友達・コミュニティ）ハブの**最初の5件**を公開しました（新規カテゴリの初回・マイクロバッチ運用）。開始時の未完了 community は6件（>5）だったため、記録順の先頭5件のみを処理し、最終ハブ監査は実施していません（残り1件のため次回に継続）。

- **公開した5件（すべて `category: community`・`hub: community`・`verifiedAt: 2026-08-02`・完全公開・分類は全て create）:**
  `make-friends-australia`（P1, social, id a341）, `japanese-community-groups`（P1, social, id a342）,
  `homesickness-loneliness`（P1, wellbeing, id a343）, `culture-shock-australia`（P2, social, id a344）,
  `dating-safety-australia`（P2, safety, id a345）。
- **作成（created）slug:** 上記5件。**更新/分割（updated/split）slug: なし。統合（merged）slug: なし。リダイレクト: なし。レビュー/除外 slug: なし。**
- **内容:** 友達作り＝出会い方（学校/職場/シェア/Meetup/ボランティア/SNS）＋初対面の安全。日本人コミュニティ＝グループの探し方＋「投稿は無保証・重要事項は公式で裏取り」＋詐欺の危険サイン。ホームシック＝生活リズム/つながり＋相談窓口（緊急は000）。カルチャーショック＝文化の一般化に注意＋権利事項は公式で確認。デーティング安全＝個人情報保護/同意/ロマンス詐欺/緊急連絡先＋送金・身分証・私的写真の提供禁止。可変・YMYL要素は断定せず確認日 2026-08-02 を明記し各公式へ誘導。
- **UGCと検証済みガイダンスの区別:** コミュニティ/SNS投稿はユーザー情報で無保証と明示し、法/ビザ/税/労働/賃貸は検証済み記事・公式一次情報へリンク。対話機能は既存フォーラム `/community` として案内。会員数/投稿/イベント等の架空の活動は掲載しない。
- **安全・プライバシー・詐欺・モデレーション:** 初対面の安全・個人情報最小化・ロマンス詐欺・同意・緊急/被害時連絡先（000／1800RESPECT／Scamwatch／IDCARE）を明記。
- **公式ソース:** eSafety（Online dating）／Triple Zero 000／Scamwatch（ACCC・Relationship scams）／IDCARE 1800 595 160／Lifeline 13 11 14／Beyond Blue 1300 22 4636／healthdirect Mental health 1800 022 222／Fair Work（Visa holders and migrants）／1800RESPECT 1800 737 732。
- **新カテゴリ整備（travel/return-home 前例に準拠）:** `ArticleCategory` に `community` 追加、`community.ts` 新規モジュール、`index.ts` 配線、`hubs.ts` に `community: "community"`、`mockData.ts` にラベル `友達・コミュニティ`（記事は追加せず）、`app/community-guide/page.tsx` 新設（フォーラム `/community` と衝突回避で `/community-guide`）、`GuideCategoryPage` に任意 `routePath` 追加、`sitemap.ts`・Footer に `/community-guide` 追加。
- **孤立記事なし:** `/community-guide` が公開5件を自動列挙・Footer から到達可能。`relatedSlugs` は公開/既存 slug のみ（`volunteering-guide` 未公開は除外・dangling 0）。既存の jobs.ts→`japanese-community-groups`・visa.ts→`dating-safety-australia` の参照が本公開で解決。
- **content-manifest.yaml:** 5件を `planned` → `published`（`volunteering-guide` は planned のまま）。`manifest.generated.ts` 再生成。`mockData.ts` への記事追加なし。
- **検証（マイクロバッチ範囲・各1回・リトライ0回）:** `validate:articles`（community 5・重複0・エラー0）、`tsc --noEmit`（exit 0）、`validate:content`（0 error / 66 warning・dangling 0）。フルビルド/テスト/lint/構造化データ監査はハブ完了時（残り5件以下）にまとめて実施予定。
- **残り community:** 1件（次回開始 = `volunteering-guide`・次回は最終ハブ監査）。**他カテゴリは未着手**（"Do not begin another category"）。

## チェックポイント（2026-08-02）: return-home マイクロバッチ #3（残り2件公開・ハブ完了 / commit: feat: complete return home content batch）

return-home（帰国準備）ハブの**最後の2件**を公開し、**return-home ハブを完了（12/12）**しました。開始時の未完了 return-home は2件（≤5）だったため残り全件を処理し、**最終ハブ監査（フルビルド／テスト／Lint）を実施**しました。

- **公開した2件（すべて `category: return-home`・`hub: return-home`・`verifiedAt: 2026-08-02`・完全公開・分類は全て create）:**
  `reverse-culture-shock`（P2, wellbeing, id a339）— 帰国後の逆カルチャーショックとキャリア再始動。現象理解・生活立て直し・つながり・経験の棚卸し・小さく再始動。相談先を明記。公式: healthdirect Mental health／Beyond Blue／Lifeline。`use-wh-experience-in-resume` と差別化（感情・ウェルビーイング＋キャリア再始動）。
  `australian-police-check-after-return`（P3, how-to, id a340）— 帰国後・海外から豪州の無犯罪証明を取得する方法。AFP（指紋付きの要否）とACIC名前ベースの違い・目的選択・有効期限。手数料/日数/有効期限は断定せず公式・提出先要件へ。公式: AFP National police checks／ACIC National Police Checking Service。`police-check-guide` と差別化（海外/AFP指紋ルート）。
- **ソース検証:** 変動しうる情報（相談の目安・取得手順・費用・処理日数・有効期限）は断定せず各公式へ誘導。緊急時は居住国連絡先を使う旨を警告に明記。
- **最終ハブ監査（全て合格）:** `validate:articles`（return-home 12・重複0・errors なし）／`tsc --noEmit`（exit 0）／`validate:content`（0 error / 66 warning・dangling 0）／`test:content`（5/5 pass）／`lint`（クリーン）／`build`（成功・`/return-home` 静的プリレンダー・sitemap 収録）。
- **return-home ハブ状態:** 12件すべて published（planned/merged/review/excluded は 0）。薄い/下書きの公開ページなし。
- **未解決の問題:** なし。**次カテゴリ:** 他カテゴリは未着手。

## チェックポイント（2026-08-02）: return-home マイクロバッチ #2（5件公開 / commit: feat: publish return home micro-batch 2）

return-home（帰国準備）ハブの続き5件を公開しました（マイクロバッチ運用）。開始時の未完了 return-home は7件（>5）だったため、記録順の先頭5件のみを処理し、最終ハブ監査は実施していません（残り2件のため継続）。

- **公開した5件（すべて `category: return-home`・`hub: return-home`・`verifiedAt: 2026-08-02`・完全公開・分類は全て create）:**
  `bond-refund-before-leaving`（P1, housing, id a334）, `sell-car-timeline`（P1, transport, id a335）,
  `send-luggage-to-japan`（P2, comparison, id a336）, `keep-australian-bank-account`（P1, finance, id a337）,
  `use-wh-experience-in-resume`（P1, career, id a338）。
- **内容:** Bond返金＝退去通知の逆算・最終Inspection・州の預託機関への返金・間に合わない場合の備え。車売却＝出品時期の逆算・RWC/名義変更/着金の所要時間・保険/登録の解約順・売れ残り対策。荷物送付＝郵便/クーリエ/船便・別送品の使い分けと禁制品・日本の関税/別送品申告。口座維持＝維持費/休眠口座（ASIC）/外国居住者の利子課税/SMS認証の維持。履歴書＝英語就労・具体スキル・数字実績化・Referee確保。いずれも changeable（通知日数・Bond上限・RWC要否・登録/保険返金・送料/日数/関税・維持費/税率）は断定せず確認日 2026-08-02 を明記し各公式（州当局/ABF/日本税関/銀行/ATO/MoneySmart/Fair Work）へ誘導。
- **基盤変更なし:** return-home カテゴリ基盤はバッチ#1で整備済み。本バッチは記事追加とマニフェスト status 更新のみ。`mockData.ts` への記事追加なし。
- **カニバリ回避:** `sell-car-timeline` は既存 `sell-car-before-leaving`（売り方の手順）と差別化しスケジュールに限定。`keep-australian-bank-account` は既存 `close-bank-account-before-leaving`（閉じる/残すの判断）と差別化し「残すなら」の注意点に限定。
- **content-manifest.yaml:** 5件を `planned` → `published`。`manifest.generated.ts` 再生成。
- **検証（マイクロバッチ範囲・各1回・リトライ0回）:** `validate:articles`（return-home 10・重複0・エラー0）、`tsc --noEmit`（exit 0）、`validate:content`（0 error / 66 warning・dangling 0）。フルビルド/テスト/lint/構造化データ監査はハブ完了時（残り5件以下）にまとめて実施予定。
- **残り return-home:** 2件（次回開始 = `reverse-culture-shock`・次回は最終ハブ監査）。**他カテゴリは未着手**（"Do not begin another category"）。

## チェックポイント（2026-08-02）: return-home マイクロバッチ #1（5件公開 / commit: feat: publish return home micro-batch）

return-home（帰国準備）ハブの最初の5件を公開しました（新規カテゴリの初回・マイクロバッチ運用）。開始時点で return-home は12件（>5）残っていたため、通常のマイクロバッチとして記録順の先頭5件のみを処理し、最終ハブ監査は実施していません（残り7件のため継続）。本バッチは return-home ハブの初回で、新カテゴリの基盤整備を伴います。

- **公開した5件（すべて `category: return-home`・`hub: return-home`・`verifiedAt: 2026-08-02`・完全公開・分類は全て create）:**
  `leaving-australia-checklist`（P0, checklist, id a329）, `final-pay-before-leaving`（P0, finance, id a330）,
  `early-tax-return-departing`（P1, tax, id a331）, `dasp-before-after-leaving`（P0, how-to, id a332）,
  `close-services-before-leaving`（P1, checklist, id a333）。
- **作成（created）slug:** 上記5件。**更新/分割（updated/split）slug: なし。統合（merged）slug: なし。リダイレクト: なし。レビュー/除外 slug: なし。**
- **出国前/出国後アクションの区別:** 各記事で出国前（Final Pay確認・税務準備・解約手配・記録保管）と出国後（DASP申請・場合により帰国後のタックスリターン・口座/SIMの最終解約）を明確に分離。口座・SIM・Super口座の早すぎる解約が還付・DASP受取を妨げる点を warnings で注意喚起。
- **可変情報の非断定:** 処理期間・還付額・DASP税率・各種手数料・税務上の結果は断定せず、確認日 2026-08-02 を明記し ATO/Fair Work/ACCC 等の各公式へ誘導。DASP の WHM 源泉税率は具体%を出さず ATO へ。
- **公式ソース:** ATO（Departing Australia Superannuation Payment／Leaving Australia／Lodging your tax return before you leave）／Fair Work Ombudsman（Final pay／Visa holders and migrants）／ACCC（Consumer rights and guarantees）／Australia Post（Redirect/Hold mail）。Fair Work の Final pay ページはライブ取得で確認済み（含まれる/含まれない項目・支払時期）。
- **新カテゴリ整備（travel 前例に準拠）:** `ArticleCategory` に `return-home` 追加、`return-home.ts` 新規モジュール、`index.ts` 配線、`hubs.ts` の `CATEGORY_TO_HUB` に `"return-home": "return-home"`、`mockData.ts` にカテゴリラベル `帰国準備`（記事は追加せず）、`app/return-home/page.tsx` 新設、`sitemap.ts`・Footer に `/return-home` 追加。
- **content-manifest.yaml:** 5件を `planned` → `published`。`manifest.generated.ts` 再生成。
- **孤立記事なし:** `/return-home` カテゴリページが公開5件を自動列挙。`relatedSlugs` は公開/既存 slug のみ参照（dangling 0）。
- **検証（マイクロバッチ範囲・各1回・リトライ0回）:** `validate:articles`（return-home 5・重複0・エラー0）、`tsc --noEmit`（exit 0）、`validate:content`（0 error / 66 warning・dangling 0）。フルビルド/テスト/lint/構造化データ監査はハブ完了時（残り5件以下）にまとめて実施予定。
- **残り return-home:** 7件（次回開始 = `bond-refund-before-leaving`）。**他カテゴリは未着手**（"Do not begin another category"）。

## チェックポイント（2026-08-02）: travel マイクロバッチ #2 = travel ハブ完了（残り4件を全公開＋最終ハブ監査 / commit: feat: complete travel content batch）

travel（旅行）ハブの残り全4件を公開し、**travel ハブを完了**しました（9/9 published・残り0件）。開始時の未完了 travel は4件（≤5）だったため、残り全件を処理して**最終ハブ監査**を実施しました。

- **公開した4件（すべて `category: travel`・`hub: travel`・`intent: travel`・`verifiedAt: 2026-08-02`・完全公開・分類は全て create）:**
  `great-barrier-reef-guide`（P3, id a325）, `uluru-guide`（P3, id a326）, `tasmania-trip-guide`（P3, id a327）, `public-holiday-travel`（P2, id a328）。
- **内容:** GBR＝ケアンズ拠点のツアー選びと季節・海の安全・海洋公園ルール。ウルル＝アクセス/入園パス/文化的配慮（登山2019年恒久禁止）。タスマニア＝レンタカー周遊・日数・国立公園・冷涼気候。祝日旅行＝州別祝日/スクールホリデーの調べ方と混雑・料金対策。いずれも料金・時刻・空席・海況・入園料・祝日日程などの changeable は断定せず、確認日 2026-08-02 を明記し各公式（GBRMPA/Parks Australia/Tasmania PWS/Fair Work/BOM/Tourism Australia 等）へ誘導。
- **基盤変更なし:** travel カテゴリ基盤はバッチ#1で整備済み。本バッチは記事追加とマニフェスト status 更新のみ。`mockData.ts` への記事追加なし。
- **content-manifest.yaml:** 4件を `planned` → `published`。`manifest.generated.ts` 再生成。
- **最終 travel ハブ監査:** `hub: travel` 集計＝9 published・0 planned/その他。9件は目的地/意図が一意でカニバリなし。`/travel` が9件を列挙、sitemap に4新規 slug 含む。薄い/下書きの公開ページなし。
- **検証（全スイート各1回・リトライ0回）:** `validate:articles`（travel 9・エラー0）、`tsc --noEmit`（exit 0）、`validate:content`（0 error / 66 warning・dangling 0）、`test:content`（5/5 pass）、`lint`（クリーン）、`build`（exit 0・新規4 slug プリレンダー・sitemap 生成）。
- **残り travel:** 0件。**次カテゴリは未着手**（"Do not begin another category"）。

## チェックポイント（2026-07-30）: travel マイクロバッチ #1（5件公開 / commit: feat: publish travel micro-batch）

travel（旅行）ハブの最初の5件を公開しました（マイクロバッチ運用）。開始時点で travel は9件（>5）残っていたため、通常のマイクロバッチとして記録順の先頭5件のみを処理し、最終ハブ監査は実施していません（残り4件のため継続）。本バッチは travel ハブの初回で、新カテゴリの基盤整備を伴います。

- **公開した5件（すべて `category: travel`・`hub: travel`・`intent: travel`・`verifiedAt: 2026-07-30`・完全公開・分類は全て create）:**
  `australia-travel-seasons`（P1, travel, id a320）, `domestic-flight-guide`（P1, travel, id a321）,
  `australia-road-trip-guide`（P1, travel, id a322）, `camping-free-camps`（P2, travel, id a323）,
  `east-coast-route`（P2, travel, id a324）。
- **作成（created）slug:** 上記5件。**更新/分割（updated/split）slug: なし。統合（merged）slug: なし。リダイレクト: なし。レビュー/除外 slug: なし。**
- **目的地と対象読者の明示・旅程/可変情報の区別:** 各記事で目的地（豪州全域の季節／国内都市間／ロードトリップ全般／キャンプ地／東海岸シドニー→ケアンズ）と対象読者を明示。モデルルート・季節傾向・予約の考え方（itinerary/プランニング）と、実運賃・時刻・空席・天気・警報・ツアー催行・料金（changeable）を分離し、changeable は具体額・便・時刻を断定せず確認日を明記して公式へ誘導。予算は例・カテゴリ・レンジのみ。
- **公式ソース:** BOM（気候平年値・気象/サイクロン/洪水警報）／ARPANSA（UV）／Tourism Australia／Jetstar・Qantas・Virgin Australia の Baggage・Rex 公式／Triple Zero（000）／Transport for NSW（道路安全）／Parks Australia・NSW National Parks・Queensland Government（Camping）／Great Barrier Reef Marine Park Authority。
- **新カテゴリ整備（area 前例に準拠）:** `ArticleCategory` に `travel` 追加、`travel.ts` 新規モジュール、`index.ts` 配線、`hubs.ts` の `CATEGORY_TO_HUB` に `travel`、`mockData.ts` にカテゴリラベル（記事は追加せず）、`app/travel/page.tsx` 新設、`sitemap.ts`・Footer に `/travel` 追加。
- **孤立記事なし:** `/travel`（`GuideCategoryPage category="travel"`）が公開 travel 記事を自動列挙・Footer からも到達可能。`relatedSlugs` は公開/既存 slug と本バッチ新規5件のみ参照（未公開 planned は含めず dangling 回避）。既存 `visa.ts` の `domestic-flight-guide` 参照が本公開で解決。
- **manifest:** 該当5件を `status: planned` → `status: published`。`manifest.generated.ts` 再生成。
- **検証（マイクロバッチ範囲・各1回）:** `validate:articles`（重複 slug/パス/エクスポート 0・travel 5件・`OK: no article data errors`。ARTICLE_ORDER omission は既存仕様の warn のみ）、`tsc --noEmit` クリーン（exit 0）、`validate:content` 0 error / 66 warning（想定内の cannibalization のみ・dangling 0）。※フルビルド/テスト/lint はハブ完了時（残り≤5）の最終監査に回す。
- **修正1回（リトライ枠内）:** `hubs.ts` の `CATEGORY_TO_HUB` に `travel` が不足し tsc TS2741 → `travel: "travel"` 追記で解消（1回）。
- **残り travel 4件。次の未完了 travel slug: `great-barrier-reef-guide`（次回は ≤5 のため全件処理＋最終 travel ハブ監査）。** 本セッションは travel 先頭5件のみ処理し、他カテゴリには着手しない。

## チェックポイント（2026-07-30）: area マイクロバッチ #5 = area ハブ完了（3件公開＋最終監査 / commit: feat: publish area micro-batch）

area（都市・州・地域ガイド）ハブの残り全3件を公開し、**area ハブを完了**しました。開始時点で area は3件（≤5）残っていたため、全件を処理し、最終ハブ監査まで実施しました。

- **公開した3件（すべて `hub: area`・`category: area`・`intent: state-guide`・`verifiedAt: 2026-07-30`・完全公開・分類は全て create）:**
  `state-sa-guide`（P3, state-guide, id a317）, `state-tas-guide`（P2, state-guide, id a318）,
  `state-nt-guide`（P2, state-guide, id a319）。
- **作成（created）slug:** 上記3件。**更新/分割（updated/split）slug: なし。統合（merged）slug: なし。リダイレクト: なし。レビュー/除外 slug: なし。**
- **公式ソース:** Service SA (mySA GOV) / Adelaide Metro / Consumer and Business Services（SA）、Transport Tasmania / Metro Tasmania / CBOS / BOM（TAS）、NT Government (MVR) / NT Public transport / NT Consumer Affairs / BOM（NT）。
- **マイクロバッチ検証:** `validate:articles`（area 29・重複0・OK）／`tsc --noEmit`（exit 0）／`validate:content`（0 error / 66 warning・記録済み共食い warning のみ・dangling なし）。
- **最終 area ハブ監査:** `npm run build`（exit 0・全ルート prerender・`/sitemap.xml` 生成）／`npm run lint`（exit 0）／`npm run test:content`（5/5 pass）。
- **area ハブ完了: 公開29件（既存6＋計画23）。planned/merged/review/excluded: 0件。travel には着手しない。**

## チェックポイント（2026-07-30）: area マイクロバッチ #4（5件公開 / commit: feat: publish area micro-batch）

area（都市・州・地域ガイド）ハブの次の5件を公開しました（マイクロバッチ運用）。開始時点で area は8件（>5）残っていたため、通常のマイクロバッチとして記録順の先頭5件のみを処理し、最終ハブ監査は実施していません（残り3件のため継続）。

- **公開した5件（すべて `hub: area`・`category: area`・`verifiedAt: 2026-07-30`・完全公開・分類は全て create）:**
  `area-griffith`（P2, area-guide, id a312）, `state-nsw-guide`（P2, state-guide, id a313）,
  `state-vic-guide`（P2, state-guide, id a314）, `state-qld-guide`（P1, state-guide, id a315）,
  `state-wa-guide`（P2, state-guide, id a316）。
- **作成（created）slug:** 上記5件。**更新/分割（updated/split）slug: なし。統合（merged）slug: なし。リダイレクト: なし。レビュー/除外 slug: なし。**
- **公式ソース:** Transport for NSW / Service NSW / NSW Fair Trading（NSW）、VicRoads / Public Transport Victoria / Consumer Affairs Victoria（VIC）、Queensland Government (Transport and motoring) / Translink / RTA（QLD）、Department of Transport WA / Transperth / Consumer Protection WA（WA）、Home Affairs specified work・BOM（griffith）。
- **検証:** `validate:articles`（area 26・重複0・OK）／`tsc --noEmit`（exit 0）／`validate:content`（0 error / 66 warning・記録済み共食い warning のみ・dangling なし）。
- **残り area:** 3件（`state-sa-guide`・`state-tas-guide`・`state-nt-guide`）。次回は ≤5 のため全件処理＋最終 area ハブ監査を実施。次回開始: `state-sa-guide`。travel には着手しない。

## チェックポイント（2026-07-30）: area マイクロバッチ #3（5件公開 / commit: feat: publish area micro-batch）

area（都市・州・地域ガイド）ハブの次の5件を公開しました（マイクロバッチ運用）。開始時点で area は13件（>5）残っていたため、通常のマイクロバッチとして記録順の先頭5件のみを処理し、最終ハブ監査は実施していません（残り8件のため継続）。

- **公開した5件（すべて `hub: area`・`category: area`・`verifiedAt: 2026-07-30`・完全公開・分類は全て create）:**
  `area-townsville`（P2, area-guide, id a307）, `area-newcastle`（P2, area-guide, id a308）,
  `area-wollongong`（P3, area-guide, id a309）, `area-mildura`（P2, area-guide, id a310）,
  `area-shepparton`（P2, area-guide, id a311）。
- **作成（created）slug:** 上記5件。**更新/分割（updated/split）slug: なし。統合（merged）slug: なし。リダイレクト: なし。レビュー/除外 slug: なし。**
- **統合しない理由:** 5件はいずれも新規スラッグで、地名クエリごとに検索意図が独立（タウンズビル＝北QLDの都市＋周辺ファーム／ニューカッスル＝シドニー外NSWの都市・家賃控えめ／ウーロンゴン＝シドニー南の大学・通勤圏／ミルデューラ＝VIC北西のファーム・セカンドビザ拠点／シェパートン＝VIC北部の果物・食品加工）。個別公開し `relatedSlugs` で相互リンク。
- **公式照合（確認日 2026-07-30）:** Translink（QLD go card）／Transport for NSW（NSW Opal）／Public Transport Victoria（VIC V/Line・地域バス）／Bureau of Meteorology（気候・雨季/サイクロン・低温）／Department of Home Affairs（417 Specified work）／各空港公式（Townsville/Newcastle）。可変事項（家賃・時給・求人数・運賃・収穫シーズンの需要）は断定せず、Flatmates・realestate.com.au・求人/公式で最新確認を誘導。ファームはセカンドビザ対象確認・悪質農園への注意を明示。
- **manifest:** 該当5件を `status: planned` → `status: published`。`manifest.generated.ts` 再生成。
- **検証（マイクロバッチ範囲・各1回）:** `validate:articles`（重複 slug 0・area 21件・`OK: no article data errors`。ARTICLE_ORDER omission は既存仕様の warn のみ）、`tsc --noEmit` クリーン（exit 0）、`validate:content` 0 error / 66 warning（想定内の cannibalization のみ・dangling 0）。※フルビルド/テスト/lint はハブ完了時の最終監査に回す。
- **残り area 8件。次の未完了 area slug: `area-griffith`。** 本セッションは area の次の5件のみ処理し、travel には着手しない。

## チェックポイント（2026-07-30）: area マイクロバッチ #2（5件公開 / commit: feat: publish area micro-batch）

area（都市・州・地域ガイド）ハブの次の5件を公開しました（マイクロバッチ運用）。開始時点で area は18件（>5）残っていたため、通常のマイクロバッチとして記録順の先頭5件のみを処理し、最終ハブ監査は実施していません（残り13件のため継続）。

- **公開した5件（すべて `hub: area`・`category: area`・`verifiedAt: 2026-07-30`・完全公開・分類は全て create）:**
  `area-darwin`（P1, area-guide, id a302）, `area-sunshine-coast`（P2, area-guide, id a303）,
  `area-toowoomba-gatton`（P0, area-guide, id a304）, `area-bundaberg`（P1, area-guide, id a305）,
  `area-stanthorpe`（P2, area-guide, id a306）。
- **作成（created）slug:** 上記5件。**更新/分割（updated/split）slug: なし。統合（merged）slug: なし。リダイレクト: なし。レビュー/除外 slug: なし。**
- **統合しない理由:** 5件はいずれも新規スラッグで、地名クエリごとに検索意図が独立（ダーウィン＝熱帯北部／サンシャインコースト＝観光・ビーチ／トゥーンバ・ガトン＝内陸の野菜ファーム／バンダバーグ＝ワイドベイの農業・セカンドビザ拠点／スタンソープ＝グラニットベルトの寒冷な果樹地帯）。個別公開し `relatedSlugs` で相互リンク。
- **公式照合（確認日 2026-07-30）:** Translink（QLD go card）／Northern Territory Government（NT 公共交通）／Bureau of Meteorology（気候・乾季/雨季・低温/霜・警報）／Department of Home Affairs（417 Specified work）／各空港公式（Darwin/Sunshine Coast）。可変事項（家賃・時給・求人数・運賃・収穫シーズンの需要）は断定せず、Flatmates・realestate.com.au・求人/公式で最新確認を誘導。ファームはセカンドビザ対象確認・悪質農園への注意を明示。
- **manifest:** 該当5件を `status: planned` → `status: published`（`area-stanthorpe` はタイトルを記事に統一）。`manifest.generated.ts` 再生成。
- **検証（マイクロバッチ範囲・各1回）:** `validate:articles`（重複 slug 0・area 16件・`OK: no article data errors`。ARTICLE_ORDER omission は既存仕様の warn のみ）、`tsc --noEmit` クリーン（exit 0）、`validate:content` 0 error / 66 warning（想定内の cannibalization のみ・dangling 0）。※フルビルド/テスト/lint はハブ完了時の最終監査に回す。
- **残り area 13件。次の未完了 area slug: `area-townsville`。** 本セッションは area の次の5件のみ処理し、travel には着手しない。

## チェックポイント（2026-07-27）: area マイクロバッチ #1（5件公開 / commit: feat: publish area micro-batch）

area（都市・州・地域ガイド）ハブの先頭5件を公開しました（マイクロバッチ運用）。開始時点で area は23件（>5）残っていたため、通常のマイクロバッチとして記録順の先頭5件のみを処理し、最終ハブ監査は実施していません（残り18件のため継続）。

- **公開した5件（すべて `hub: area`・`category: area`・`verifiedAt: 2026-07-27`・完全公開・分類は全て create）:**
  `area-gold-coast`（P0, area-guide, id a297）, `area-perth`（P0, area-guide, id a298）,
  `area-cairns`（P0, area-guide, id a299）, `area-canberra`（P2, area-guide, id a300）,
  `area-hobart`（P2, area-guide, id a301）。
- **既存の結合記事2件を分割（split・公開URL保持・リダイレクトなし）:**
  `area-brisbane`（旧「ブリスベン・ゴールドコースト」→ ブリスベン中心に再構成、新規 `area-gold-coast` に相互リンク）、
  `area-perth-cairns`（旧「パース・ケアンズ」結合 → 「パース vs ケアンズ」比較ガイドに再構成、新規 `area-perth`・`area-cairns` に相互リンク）。**公開中URLの自動統合・リダイレクトは行わない**方針に準拠。
- **作成（created）slug:** 上記5件。**更新/分割（updated/split）slug:** `area-brisbane`・`area-perth-cairns`。**統合（merged）slug: なし。リダイレクト: なし。レビュー/除外 slug: なし。**
- **統合しない理由:** 5件はいずれも新規スラッグで、地名クエリごとに検索意図が独立（ゴールドコースト＝観光・ビーチ／ブリスベン＝都市生活、パース＝西海岸の都市生活／ケアンズ＝熱帯観光・ファーム拠点）。個別公開し `relatedSlugs` で相互リンク。
- **トップページ:** `app/page.tsx` のエリアタイル「Perth / Cairns」→「Perth（`area-perth`）」に更新。`area-perth-cairns` は `/area` 一覧・相互リンクから到達可能で孤立なし。
- **公式照合（確認日 2026-07-27）:** Translink（QLD go card）／Transperth（WA SmartRider・CAT）／Transport Canberra（ACT MyWay・Light Rail）／Metro Tasmania（Greencard）／Bureau of Meteorology（気候・警報）／Department of Home Affairs（417 Specified work）／各空港公式（Gold Coast/Perth/Cairns/Hobart）。可変事項（家賃・時給・鉱業賃金・運賃・シーズン需要）は断定せず、Flatmates・realestate.com.au・求人/公式で最新確認を誘導。
- **manifest:** 該当5件を `status: planned` → `status: published`。`area-brisbane`・`area-perth-cairns` は `existing` のままタイトルのみ更新。`manifest.generated.ts` 再生成。
- **検証（マイクロバッチ範囲・各1回）:** `validate:articles`（重複 slug/パス/エクスポート 0・area 11件・`OK: no article data errors`。ARTICLE_ORDER omission は既存仕様の warn のみ）、`tsc --noEmit` クリーン（exit 0）、`validate:content` 0 error / 66 warning（想定内の cannibalization のみ・dangling 0）。※フルビルド/テスト/lint はハブ完了時の最終監査に回す。
- **残り area 18件。次の未完了 area slug: `area-darwin`。** 本セッションは area 先頭5件のみ処理し、travel には着手しない。

## チェックポイント（2026-07-27）: english マイクロバッチ #3＝english ハブ完了（3件公開＋最終監査 / commit: feat: complete english content batch）

english（英語学習・会話）ハブの残り全3件を公開し、**ハブを完了**しました。開始時点で残りは3件（≤5）だったため、全3件を処理し、最終ハブ監査（フルビルド／lint／テスト／sitemap）を実施しました。

- **公開した3件（すべて `hub: english`・`category: english`・`verifiedAt: 2026-07-27`・完全公開・分類は全て create）:**
  `listening-resources`（P2, learning, id a294）, `language-exchange-meetup`（P2, social, id a295）,
  `ielts-pte-after-wh`（P2, comparison, id a296）。
- **作成（created）slug:** 上記3件。**更新（updated）slug: なし。統合（merged）slug: なし。リダイレクト: なし。レビュー/除外 slug: なし。**
- **統合しない理由:** 3件はいずれも新規スラッグで、既存の公開記事とは検索意図が明確に異なる（リスニング教材の選び方・使い方／言語交換・Meetupで英語環境を作る方法／IELTS・PTEの試験選び）。各記事は独立した検索意図が強いため個別公開し、`relatedSlugs` で相互リンク。
- **孤立記事なし:** english カテゴリページ（`/english` の `GuideCategoryPage category="english"`）が公開 english 記事を自動列挙するため、3件はすべて到達可能。各記事は一意のモジュール（`lib/content/articles/english.ts`）にのみ存在。`mockData.ts` へは追加していない。未公開（planned）の `make-friends-australia` 等は `relatedSlugs` に含めず公開/既存 slug のみ参照（dangling 回避）。
- **公式照合（記事反映済み・確認日 2026-07-27）:** `ielts-pte-after-wh`＝Department of Home Affairs「English language visa requirements」（2025年8月7日から受入試験が変更、オンライン自宅受験はビザ目的で不可、必要スコアはビザ subclass で異なる。https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/english-language ／最終更新 2026-02-02）＋IELTS 公式（https://ielts.org/ ）＋PTE Academic 公式（https://www.pearsonpte.com/pte-academic ）。`listening-resources`・`language-exchange-meetup` は変わりうる数値・料金・法規の主張を含まないため公式ソースは付さず、`verifiedAt: 2026-07-27` のみ付与。
- **客観的事実と個人的推奨の区別:** 教材選び・学習法・言語交換の参加は「人により合う/合わない」「客観的な正解はない」と明示。ビザの英語要件・受入試験・必要スコアなど変わりうる/公式判断が要る事項は断定せず公式・専門家へ誘導。
- **可変事項の断定回避:** ビザの必要英語スコア・受入試験は年度・subclass・目的で異なるとして移民局・各ビザ案内・登録移民代理人へ誘導（具体的バンドスコアは記載せず）。言語交換・Meetup参加時の安全（公共の場で会う・個人情報や金銭のやり取りに注意）を明示。
- **content-manifest.yaml:** 該当3件を `status: planned` → `status: published` に更新。`manifest.generated.ts` 再生成。
- **最終ハブ監査:** `validate:articles`（重複 slug 0・english 16件・`OK: no article data errors`）、`tsc --noEmit` クリーン（exit 0）、`validate:content` 0 error / 66 warning（想定内の cannibalization のみ・dangling 0）、`test:content` 5 pass / 0 fail、`eslint` エラーなし、`next build` フルビルド成功（`/guides/[slug]` SSGで3件を静的HTML生成、`/sitemap.xml`・`/robots.txt` 生成、型エラーなし）。**english ハブ 13/13 完了。**
- **修正1回（リトライ枠内）:** 新規記事本文に半角ダブルクオートを混入させ tsc/パーサが構文エラー → 該当箇所を和文引用符「…」に、英語フレーズは `\"…\"` にエスケープして解消（1回で完了）。
- **残り english: なし（ハブ完了）。**
- **変更ファイル:** `lib/content/articles/english.ts`、`lib/content/manifest.generated.ts`（再生成）、`whv-guide-content-plan/content-manifest.yaml`、`CONTENT_MERGE_MAP.md`、`SOURCE_VERIFICATION_REPORT.md`、`BULK_PUBLISH_REPORT.md`、`BULK_PUBLISH_REMAINING.md`。
- **未解決の問題: なし。**

## チェックポイント（2026-07-27）: english マイクロバッチ #2（5件公開 / commit: feat: publish english micro-batch）

english（英語学習・会話）ハブの次の5件を公開しました。開始時点で english は8件（>5）が残っていたため、**通常のマイクロバッチ**として記録順の先頭5件のみを処理し、最終ハブ監査（フルビルド／lint／テスト／sitemap）は実施していません（残り3件のため次回に実施）。

- **公開した5件（すべて `hub: english`・`category: english`・`verifiedAt: 2026-07-27`・完全公開・分類は全て create）:**
  `bank-tax-english`（P1, language, id a289）, `medical-english`（P0, language, id a290）,
  `car-trouble-english`（P1, language, id a291）, `phone-call-english`（P1, learning, id a292）,
  `email-message-templates`（P0, template, id a293）。
- **作成（created）slug:** 上記5件。**更新（updated）slug:** `workplace-english`（内部リンクのみ）。**統合（merged）slug: なし。リダイレクト: なし。レビュー/除外 slug: なし。**
- **統合しない理由:** 5件はいずれも新規スラッグで、既存の公開記事とは検索意図が明確に異なる（銀行・税・年金の問い合わせ英語／医療の症状伝達英語／車トラブル英語／電話英語の練習法／英文メール・SMSテンプレート集）。各記事は場面特化のフレーズ集・実務テンプレで独立意図が強いため個別公開し、`relatedSlugs` で相互リンク。
- **既存記事の内部リンク:** `workplace-english` に `bank-tax-english`・`phone-call-english` を追記（本文・slug・URL・公開状態は不変）。
- **孤立記事なし:** english カテゴリページ（`/english` の `GuideCategoryPage category="english"`）が公開 english 記事を自動列挙するため、5件はすべて到達可能。各記事は一意のモジュール（`lib/content/articles/english.ts`）にのみ存在。`mockData.ts` へは追加していない。
- **公式照合（記事反映済み・確認日 2026-07-27）:** `bank-tax-english`＝ATO「Tax file number」（TFNの申請は無料。https://www.ato.gov.au/individuals-and-families/tax-file-number ）。`medical-english`＝healthdirect（政府運営の無料健康相談・症状チェッカー／電話 1800 022 222。https://www.healthdirect.gov.au/ ）＋Triple Zero (000)（https://www.triplezero.gov.au/ ）。`car-trouble-english`＝Triple Zero (000)。`phone-call-english`・`email-message-templates` は変わりうる数値・料金・法規の主張を含まないため公式ソースは付さず、`verifiedAt: 2026-07-27` のみ付与。
- **客観的事実と個人的推奨の区別:** 学習法・電話練習・テンプレは「人により合う/合わない」「例であり調整前提」と明示。税率・手数料・医療判断・事故の届出義務など変わりうる/専門判断が要る事項は断定せず公式・専門家へ誘導。
- **可変事項の断定回避:** 税率・控除・申告可否は年度・個人差が大きいとして ATO・登録税理士へ。医療の診断・治療は医療者へ、緊急時は000、緊急でない相談は healthdirect（1800 022 222）へ。事故の警察届出義務は州で異なるとして各州交通当局・警察へ。修理は事前見積もり（quote）を推奨。欠勤の診断書要否は雇用形態・職場・Award で異なるとして契約＋Fair Work へ誘導。
- **content-manifest.yaml:** 該当5件を `status: planned` → `status: published` に更新。`manifest.generated.ts` 再生成。
- **検証（マイクロバッチ範囲・各1回）:** `validate:articles`（重複 slug 0・重複パス 0・重複エクスポート 0・english 13件・`OK: no article data errors`。ARTICLE_ORDER omission は既存仕様の warn のみ）、`tsc --noEmit` クリーン（exit 0）、`validate:content` 0 error / 66 warning（想定内の cannibalization のみ・dangling 0）、新規5件の `relatedSlugs` は全て公開 slug に解決。
- **残り english（3件・planned）:** `listening-resources`, `language-exchange-meetup`, `ielts-pte-after-wh`。次の先頭 = `listening-resources`（残り3件のため次回は english ハブ最終監査を実施）。
- **変更ファイル:** `lib/content/articles/english.ts`、`lib/content/manifest.generated.ts`（再生成）、`whv-guide-content-plan/content-manifest.yaml`、`CONTENT_MERGE_MAP.md`、`SOURCE_VERIFICATION_REPORT.md`、`BULK_PUBLISH_REPORT.md`、`BULK_PUBLISH_REMAINING.md`。
- **未解決の問題: なし。**

## チェックポイント（2026-07-27）: english マイクロバッチ #1（5件公開 / commit: feat: publish english micro-batch）

english（英語学習・会話）ハブの最初の5件を公開しました。開始時点で english は13件（>5）が残っていたため、**通常のマイクロバッチ**として記録順の先頭5件のみを処理し、最終ハブ監査（フルビルド／lint／テスト／sitemap）は実施していません（残り8件のため）。

- **公開した5件（すべて `hub: english`・`category: english`・`verifiedAt: 2026-07-27`・完全公開・分類は全て create）:**
  `australian-english-accent`（P1, learning, id a284）, `australian-slang`（P1, reference, id a285）,
  `workplace-english`（P0, language, id a286）, `hospitality-english`（P1, language, id a287）,
  `housing-english`（P0, language, id a288）。
- **作成（created）slug:** 上記5件。**更新（updated）slug:** `english-prep`・`language-school`（内部リンクのみ）。**統合（merged）slug: なし。リダイレクト: なし。レビュー/除外 slug: なし。**
- **統合しない理由:** 5件はいずれも新規スラッグで、既存公開記事（`english-prep`＝渡航前の英語準備の総論／`language-school`＝語学学校の選び方）とは検索意図が明確に異なる（豪州アクセントの聞き取り練習／スラング・リファレンス／職場英語フレーズ／接客英語フレーズ／家探し英語フレーズ）。各記事は場面特化のフレーズ集・学習法で独立意図が強いため個別公開し、`relatedSlugs` で相互リンク。
- **既存記事の内部リンク:** `english-prep` に `workplace-english`・`australian-english-accent`、`language-school` に `australian-english-accent`・`australian-slang` を追記（本文・slug・URL・公開状態は不変）。
- **孤立記事なし:** english カテゴリページ（`/english` の `GuideCategoryPage category="english"`）が公開 english 記事を自動列挙するため、5件はすべて到達可能。各記事は一意のモジュール（`lib/content/articles/english.ts`）にのみ存在。`mockData.ts` へは追加していない。
- **公式照合（記事反映済み・確認日 2026-07-27）:** `workplace-english`＝Fair Work Ombudsman（労働条件・休暇・シフト／Visa holders and migrants）。`hospitality-english`＝Food Standards Australia New Zealand（Allergen labelling）＋Fair Work Ombudsman（Fast food, restaurants and cafés）。`housing-english`＝NSW Government Renting／Consumer Affairs Victoria／RTA (QLD)。`australian-english-accent`・`australian-slang` は変わりうる数値・料金・法規の主張を含まないため公式ソースは付さず、`verifiedAt: 2026-07-27` のみ付与。
- **客観的事実と個人的推奨の区別:** 学習法・教材選び・スラング使用は「人により合う/合わない」「客観的な正解はない」と明示し推奨として提示。労働条件・Bond・アレルギー表示など変わりうる制度事項は断定せず公式へ誘導。
- **可変事項の断定回避:** 病欠の診断書要否・有給病気休暇は雇用形態・職場・Award で異なるとして契約＋Fair Work へ誘導。祝日サーチャージ・チップは店・時期で異なるとして勤務先ルールへ。Bond の上限・預け先・通知期間は州で異なるとして各州当局（NSW/VIC/QLD 等）へ誘導。
- **content-manifest.yaml:** 該当5件を `status: planned` → `status: published` に更新。`manifest.generated.ts` 再生成。
- **検証（マイクロバッチ範囲・各1回）:** `validate:articles`（重複 slug 0・重複パス 0・重複エクスポート 0・english 8件・`OK: no article data errors`。ARTICLE_ORDER omission は既存仕様の warn のみ）、`tsc --noEmit` クリーン（exit 0）、`validate:content` 0 error / 66 warning（想定内の cannibalization のみ・dangling 0）、新規5件の `relatedSlugs` は全て公開 slug に解決。
- **残り english（8件・planned）:** `bank-tax-english`, `medical-english`, `car-trouble-english`, `phone-call-english`, `email-message-templates`, `listening-resources`, `language-exchange-meetup`, `ielts-pte-after-wh`。次の先頭 = `bank-tax-english`。
- **変更ファイル:** `lib/content/articles/english.ts`、`lib/content/manifest.generated.ts`（再生成）、`whv-guide-content-plan/content-manifest.yaml`、`CONTENT_MERGE_MAP.md`、`SOURCE_VERIFICATION_REPORT.md`、`BULK_PUBLISH_REPORT.md`、`BULK_PUBLISH_REMAINING.md`。
- **未解決の問題: なし。**

## チェックポイント（2026-07-27）: daily-life マイクロバッチ #4 = 最終（6件公開・ハブ完了 / commit: feat: complete daily life content batch）

daily-life（日常生活・食事・買い物）ハブの残り全件を公開し、**ハブを完了**しました。開始時点で残りは6件（≤7）だったため、全6件を処理し、最終ハブ監査（フルビルド／lint／テスト／sitemap）を実施しました。

- **公開した6件（すべて `verifiedAt: 2026-07-27`・`officialSources` 付き・完全公開・分類は全て create）:**
  `gym-fitness-guide`（health, P2, checklist, id a278）, `haircut-barber-english`（english, P3, language, id a279）,
  `public-toilets-showers`（transport, P3, guide, id a280）, `home-internet-guide`（sim, P2, guide, id a281）,
  `online-scams-cybersecurity`（money, P0, security, id a282）, `phone-lost-stolen`（sim, P1, problem-solving, id a283）。
  `hub` は全て `daily-life`、`category` は health/english/transport/sim/money に分散配置。
- **作成（created）slug:** 上記6件。**更新（updated）slug: なし。統合（merged）slug: なし。リダイレクト: なし。レビュー/除外 slug: なし。**
- **統合しない理由:** 6件はいずれも新規スラッグで、既存公開記事とは検索意図が明確に異なる（ジム契約／美容院・バーバー英語／無料トイレ・シャワー／ホームインターネット／オンライン詐欺対策／スマホ紛失盗難対応）。新規6件どうしは意図の近い組を双方向リンク（`online-scams-cybersecurity` ↔ `phone-lost-stolen` 等）。
- **孤立記事なし:** 各カテゴリページ（`/health`・`/english`・`/transport`・`/sim`・`/money` の `GuideCategoryPage`）が公開記事を自動列挙するため到達可能。
- **公式照合（記事反映済み・確認日 2026-07-27）:** ACCC（Consumer rights and guarantees）／National Public Toilet Map（Australian Government Dept of Health, Disability and Ageing・National Continence Program・全国23,000か所以上）／NBN Co（nbn 公式）／Scamwatch（Jobs and employment scams）／Australian Cyber Security Centre（Multi-factor authentication・How to secure your devices）。IDCARE 1800 595 160／ACSC 1300 CYBER1（1300 292 371）を記載。
- **可変事項の断定回避:** ジムの解約・クーリングオフは契約・州で異なるため断定せず契約書＋各州 Fair Trading／ACCC へ誘導。美容院の料金・チップは店で異なる旨を明示（チップは義務でなく一般的に不要）。トイレ・シャワーの設備/開館/料金は場所で異なるため公式マップ確認へ誘導。nbn の料金・速度・提供状況は業者・住所で異なるとして断定回避。詐欺の手口・連絡先は変わりうるため公式確認へ誘導し、前払い要求の求人・偽SMSのリンクを開かない等の行動指針を提示。特定金額・法規・罰則は断定せず。
- **content-manifest.yaml:** 該当6件を `status: planned` → `status: published` に更新。`manifest.generated.ts` 再生成。
- **検証（マイクロバッチ範囲）:** `validate:articles`（重複0・`OK: no article data errors`）、`tsc --noEmit` クリーン（exit 0）、`validate:content` 0 error / 66 warning（想定内の cannibalization のみ・dangling 0）。
- **最終ハブ監査（残り≤7のため実施）:** `test:content` 5 pass / 0 fail、`eslint` エラーなし、`next build` フルビルド成功（`/guides/[slug]` を SSG 生成、`/sitemap.xml`・`/robots.txt` 生成、型エラーなし）。RSS ルートは本プロジェクトに無し（N/A）。
- **daily-life ハブ: 21/21 件すべて公開完了 ✅。残り daily-life slug: なし。次の未完了 daily-life slug: なし（ハブ完了）。**
- **変更ファイル:** `lib/content/articles/health.ts`、`lib/content/articles/english.ts`、`lib/content/articles/transport.ts`、`lib/content/articles/sim.ts`、`lib/content/articles/money.ts`、`lib/content/manifest.generated.ts`（再生成）、`whv-guide-content-plan/content-manifest.yaml`、`CONTENT_MERGE_MAP.md`、`SOURCE_VERIFICATION_REPORT.md`、`BULK_PUBLISH_REPORT.md`、`BULK_PUBLISH_REMAINING.md`。
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
- **公式照合（記事反映済み・確認日 2026-07-27）:** ARPANSA（Ultraviolet radiation index）＋Bureau of Meteorology（Climate averages）／ACCC Scamwatch（Buying and selling scams、IDCARE 1800 595 160）／Australia Post（Receiving＝追跡・PO Box・MyPost・Parcel Locker、配達目安おおむね5営業日）／St Vincent de Paul Society（Vinnies）／State Library of NSW（Public library services）。
- **可変事項の断定回避:** 服装は都市・季節・UVで変わるため断定せず BOM・ARPANSA の確認へ誘導（UV3以上で日焼け対策・皮膚がんリスクを警告）。個人売買の詐欺対策は Scamwatch に準拠（実物確認・PayID/振込先の名義一致・安全な決済、被害時は銀行連絡＋IDCARE＋Scamwatch通報）。郵便の配達目安・PO Box年会費・図書館の印刷料金/貸出ルール/開館時間は地域・機関で異なる旨を明示し、特定金額は断定せず公式確認へ誘導。偽AusPost SMS/メールへの注意も記載。
- **content-manifest.yaml:** 該当5件を `status: planned` → `status: published` に更新。`manifest.generated.ts` 再生成。
- **検証（マイクロバッチ範囲・各1回）:** `validate:articles`（重複0・`OK: no article data errors`。ARTICLE_ORDER omission は既存仕様の warn のみ）、`tsc --noEmit` クリーン（exit 0）、`validate:content` 0 error / 66 warning（想定内の cannibalization のみ）、新規5件の `relatedSlugs` は全て公開 slug に解決（dangling 0）。
  ※フルビルド/テスト/lint/sitemap/RSS/構造化データ監査は daily-life ハブ完了後（残り5件以下時の最終監査）にまとめて実施予定。
- **残り daily-life slug（6件）:** `gym-fitness-guide`（次の先頭）, `haircut-barber-english`, `public-toilets-showers`, `home-internet-guide`, `online-scams-cybersecurity`, `phone-lost-stolen`。
- **最初の未完了 daily-life slug: `gym-fitness-guide`**（次回はここから再開）。
- **変更ファイル:** `lib/content/articles/clothing.ts`、`lib/content/articles/housing.ts`、`lib/content/articles/arrival.ts`、`lib/content/manifest.generated.ts`（再生成）、`whv-guide-content-plan/content-manifest.yaml`、`CONTENT_MERGE_MAP.md`、`SOURCE_VERIFICATION_REPORT.md`、`BULK_PUBLISH_REPORT.md`、`BULK_PUBLISH_REMAINING.md`。
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
- **既存記事の内部リンク:** `food-guide` の `relatedSlugs` に新規3件（`food-storage-share-house` / `tap-water-drinking` / `alcohol-id-rules`）、`clothing-guide` の `relatedSlugs` に `laundry-guide` を追記（本文・slug・URL・公開状態は不変）。孤立記事なし。
- **孤立記事なし:** 各カテゴリページ（`/food`・`/money`・`/clothing` の `GuideCategoryPage`）が公開記事を自動列挙するため、5件はすべて到達可能。
- **公式照合（記事反映済み・確認日 2026-07-27）:** Food Standards Australia New Zealand（Food safety basics）／healthdirect（Drinking water and your health）＋NHMRC（Australian Drinking Water Guidelines）＋NSW Health（What to do during a boil water alert）／ACCC（Card surcharges）／NHMRC（Alcohol guidelines）＋NSW Liquor & Gaming（Alcohol and young people）／ACCC Product Safety（Care labelling of clothing & textiles）。
- **可変事項の断定回避:** ACCC のカードサーチャージ制度は**2026年10月1日から Visa/Mastercard/eftpos がサーチャージ禁止予定**であることを日付付きで明記し「変更されうる制度」と警告（禁止は現金・BPAY・PayPal・Diners・Amex・タクシー料金には非適用、日祝割増・予約手数料は別物と区別）。飲酒は法定18歳（全国一律）だが受け入れID・二次供給（secondary supply）・営業時間は**州で異なる**として各州当局へ誘導し、具体的な金額・罰則は断定せず。水道水は原則安全だが雨水タンク・井戸水・災害時（boil water alert）の例外と、水質管理は州・準州の責任である点を明示。
- **content-manifest.yaml:** 該当5件を `status: planned` → `status: published` に更新。`manifest.generated.ts` 再生成（existing 47 / planned 338）。
- **検証（マイクロバッチ範囲・各1回）:** `validate:articles`（重複0・重複パス0・重複エクスポート0・`OK: no article data errors`。ARTICLE_ORDER omission は既存仕様の warn のみ）、`tsc --noEmit` クリーン（exit 0）、`validate:content` 0 error / 66 warning（想定内の cannibalization のみ）、新規5件の `relatedSlugs` は全て公開 slug に解決（dangling 0）。
  ※フルビルド/テスト/lint/sitemap/RSS/構造化データ監査は daily-life ハブ完了後（残り5件以下時の最終監査）にまとめて実施予定。
- **残り daily-life slug（11件）:** `australia-clothing-seasons`（次の先頭）, `buy-furniture-household-items`, `op-shop-guide`, `post-office-courier`, `library-guide`, `gym-fitness-guide`, `haircut-barber-english`, `public-toilets-showers`, `home-internet-guide`, `online-scams-cybersecurity`, `phone-lost-stolen`。
- **最初の未完了 daily-life slug: `australia-clothing-seasons`**（次回はここから再開）。
- **変更ファイル:** `lib/content/articles/food.ts`、`lib/content/articles/money.ts`、`lib/content/articles/clothing.ts`、`lib/content/manifest.generated.ts`（再生成）、`whv-guide-content-plan/content-manifest.yaml`、`CONTENT_MERGE_MAP.md`、`SOURCE_VERIFICATION_REPORT.md`、`BULK_PUBLISH_REPORT.md`、`BULK_PUBLISH_REMAINING.md`。
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
- **既存記事の内部リンク:** `food-guide` の `relatedSlugs` に新規4件（`supermarket-comparison` / `grocery-saving-tips` /
  `cheap-meal-prep` / `asian-japanese-groceries`）を追記（本文・slug・URL・公開状態は不変）。孤立記事なし。
- **孤立記事なし:** food カテゴリページ（`app/food/page.tsx` の `GuideCategoryPage category="food"`）が公開 food 記事を
  自動列挙するため、5件はすべて `/food` から到達可能。
- **公式照合（記事反映済み）:** Everyday Rewards（Woolworths 公式・無料会員）／Flybuys（Coles 公式・無料会員）／
  ALDI Australia（公式）／Food Standards Australia New Zealand｜Food safety basics（保存・冷却・再加熱）／
  Moneysmart（ASIC・家計テンプレート）／Department of Agriculture, Fisheries and Forestry（食品の持込・郵送ルール）／
  Energy Safe Victoria（家庭のガス機器の安全）。
- **可変事項の断定回避:** スーパーの価格・特売・会員特典は変動するため特定金額を断定せず「確認日 2026-07-27」を明記し
  各社アプリ・店頭確認へ誘導。ALDI の店舗網（NT 無し・地方は IGA 中心）、食品持込の可否（DAFF）、ガス機器操作（機種差）は
  地域・機種で異なる旨を明示。
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
- **統合（merged）: なし。リダイレクト: なし。** 2件はいずれも新規スラッグで、既存公開記事とは検索意図が明確に異なる（洪水・サイクロンへの備えと避難／熱波・激しい悪天候の警報確認）。独立意図が強いため個別公開し `relatedSlugs` で相互接続。
- **既存3記事の内部リンク/メタ更新（updated）:** `medicare-oshc`／`safety-emergency`／`mental-health` に `hub: "health"`・`verifiedAt: "2026-07-27"`・`officialSources` を追記（最終監査の「公開記事はすべて公式ソースと `verifiedAt` を持つ」要件のため）。本文・タイトル・slug・公開状態・URL は不変。
- **孤立記事なし:** health ハブページ（`GuideCategoryPage category="health"`）が公開 health 記事を自動列挙するため到達可能。
- **公式照合（新規2件・記事反映済み）:** Bureau of Meteorology（洪水・サイクロン・熱波・悪天候の Watch/Warning）、State Emergency Service（132 500）、Triple Zero（000）。「If it's flooded, forget it」・サイクロンシーズン（QLD/NT/WA北部・11〜4月）・雷雨ぜんそくを反映。
- **可変事項の断定回避:** 警報カテゴリ・避難指示・道路閉鎖は州・時期で変わるため州別公式（BOM／州 SES／VicEmergency 等）へ誘導。
- **content-manifest.yaml:** 該当2件を `status: planned` → `status: published` に更新済み。`manifest.generated.ts` 再生成。

### 最終 health ハブ監査結果（2026-07-27）

- **公開 health 記事: 20 件**（計画公開 17＋既存 3）。planned/merged/review/excluded: 0。
- `verifiedAt`・`officialSources`: 公開 20 件すべてに付与（欠落 0）。
- 内部リンク: health `relatedSlugs` dangling 0・重複タイトル 0・重複 slug 0。
- 孤立記事: 0（ハブ自動列挙）。ドラフト/レビュー/薄い記事の露出: 0。
- 統合/リダイレクト: なし。RSS: 本プロジェクトに RSS ルート無し（N/A）。
- **フル検証（一括）:** `validate:articles`（ユニーク slug 262・重複 0・health 20・`OK: no article data errors`）、`tsc --noEmit`（exit 0）、`validate:content` 0 error / 66 warning、`test:content` 5/5 pass、`eslint` クリーン、`next build` 成功（**316 静的ページ**・`BUILD_EXIT=0`）。sitemap に新規2 slug を確認。JSON-LD Article・canonical はビルドで検証済み。
- **範囲外（health 由来でない既存事項）:** jobs/tax など非 health 記事に、planned のままの slug を指す 23 件のグローバル dangling リンクが既存として残存（レンダリング時フィルタ・ビルド成功）。本バッチ範囲外。
- **health ハブ: 完了。次のカテゴリ: gig-work（未着手・12件）、その後 daily-life（21件）。本バッチでは着手しない。**
- **変更ファイル（本チェックポイント）:** `lib/content/articles/health.ts`、`lib/content/manifest.generated.ts`（再生成）、`whv-guide-content-plan/content-manifest.yaml`、`CONTENT_MERGE_MAP.md`、`SOURCE_VERIFICATION_REPORT.md`、`BULK_PUBLISH_REPORT.md`、`BULK_PUBLISH_REMAINING.md`。
- **未解決の問題: なし（health ハブ範囲内）。**

## チェックポイント（2026-07-27）: health マイクロバッチ #3（5件公開 / commit: feat: publish health micro-batch）

health（医療・健康・安全）ハブの次の5件を公開しました（マイクロバッチ #3）。

- **公開した5件（すべて `verifiedAt: 2026-07-27`・`officialSources` 付き・完全公開・分類は全て create）:**
  `heatstroke-guide`（safety, P0, id a256）, `bites-stings-wildlife`（safety, P1, id a257）,
  `food-allergy-eating-out`（language, P1, id a258）, `work-injury-medical`（health, P1, id a259）,
  `bushfire-safety`（disaster, P0, id a260）。
- **統合（merged）: なし。リダイレクト: なし。** 5件はいずれも新規スラッグで、既存公開記事（`medicare-oshc`／
  `safety-emergency`／`mental-health` ＋ #1・#2 の10件）とは検索意図が明確に異なる（熱中症の応急対応／咬傷・刺傷の応急処置／
  食物アレルギーの英語伝達／仕事中の怪我と労災／山火事への備え）。独立意図が強いため個別公開し `relatedSlugs` で相互接続。
- **既存記事の内部リンク更新: なし。** 新規5件は相互リンク＋既存記事（`workplace-injury-workers-comp`〔jobs〕・
  `farm-weather-no-work`〔farm〕・`farm-heat-sun-safety`〔farm〕・`sunburn-skin-cancer-prevention`・
  `gp-urgent-care-emergency`・`safety-emergency`・`pharmacy-guide`・`overseas-insurance-claim`・`medicare-oshc`）へリンク。
- **孤立記事なし:** health ハブページ（`GuideCategoryPage category="health"`）が公開 health 記事を自動列挙するため、
  5件はすべてハブから到達可能。
- **公式照合（記事反映済み）:** healthdirect（Heat-related illness／Bites and stings／Snake bites／Food allergies／
  Anaphylaxis）、Bureau of Meteorology（Heatwave service）、Food Standards Australia New Zealand（Allergen labelling）、
  Safe Work Australia（Workers' compensation）、Fair Work Ombudsman、Australian Fire Danger Rating System、
  NSW Rural Fire Service／CFA Victoria、Triple Zero（000）。
- **可変事項の断定回避:** 応急処置（咬傷・刺傷は種類で正解が異なる）は公式最新情報へ誘導。労災制度は州で窓口・範囲が異なるため
  州当局へ誘導。山火事の警報アプリは州別（NSW=Hazards Near Me／VIC=VicEmergency等）と明示。
- **content-manifest.yaml:** 該当5件を `status: planned` → `status: published` に更新済み。`manifest.generated.ts` 再生成。
- **検証（マイクロバッチ範囲・各1回）:** `validate:articles`（ユニーク slug 260・重複0・重複パス0・重複エクスポート0・
  health 18件・`OK: no article data errors`）、`tsc --noEmit` クリーン（exit 0）、`validate:content` 0 error / 66 warning、
  health の `relatedSlugs` は全て実在 slug に解決（dangling 0）。
  ※フルビルド/テスト/lint/sitemap/RSS/構造化データ監査は health ハブ完了後（残り5件以下時の最終監査）にまとめて実施予定。
- **残り health slug: 2件（`flood-cyclone-safety`／`heatwave-severe-weather`）。次の未完了 health slug: `flood-cyclone-safety`。**
  残り2件（≤5）のため、次回は残り全件処理＋最終 health ハブ監査を実施予定。
- **変更ファイル（本チェックポイント）:** `lib/content/articles/health.ts`、
  `lib/content/manifest.generated.ts`（再生成）、`whv-guide-content-plan/content-manifest.yaml`、
  `CONTENT_MERGE_MAP.md`、`SOURCE_VERIFICATION_REPORT.md`、`BULK_PUBLISH_REPORT.md`、`BULK_PUBLISH_REMAINING.md`。
- **未解決の問題: なし。**

## チェックポイント（2026-07-27）: health マイクロバッチ #2（5件公開 / commit: feat: publish health micro-batch）

health（医療・健康・安全）ハブの次の5件を公開しました（マイクロバッチ #2）。

- **公開した5件（すべて `verifiedAt: 2026-07-27`・`officialSources` 付き・完全公開・分類は全て create）:**
  `eye-care-optometrist`（health, P2, id a251）, `sexual-health-clinics`（health, P1, id a252）,
  `womens-health-guide`（health, P1, id a253）, `ambulance-costs-insurance`（current-info, P0, id a254）,
  `sunburn-skin-cancer-prevention`（safety, P0, id a255）。
- **統合（merged）: なし。リダイレクト: なし。** 5件はいずれも新規スラッグで、既存公開記事（`medicare-oshc`／
  `safety-emergency`／`mental-health` ＋ #1 の5件）とは検索意図が明確に異なる（眼鏡・検眼／性の健康・STI検査／
  女性の健康・検診／救急車費用と保険／紫外線・皮膚がん対策）。独立意図が強いため個別公開し `relatedSlugs` で相互接続。
- **既存記事の内部リンク更新: なし。** `medicare-oshc` はマイクロバッチ #1 で更新済み・本バッチでは不変。
  新規5件は相互リンク＋既存 health 記事（`gp-urgent-care-emergency`／`pharmacy-guide`／`overseas-insurance-claim`／
  `safety-emergency`／`medicare-oshc`）と `farm-heat-sun-safety` へリンク。
- **孤立記事なし:** health ハブページ（`app/health/page.tsx` の `GuideCategoryPage category="health"`）が
  公開 health 記事を自動列挙するため、5件はすべてハブから到達可能。
- **公式照合（記事反映済み）:** healthdirect（Eye health / Sexual health / STIs / Women's health /
  Emergency contraception）、Services Australia（Medicare／RHCA = **日本は対象外でワーホリはMedicare非適用**）、
  Department of Health（National Cervical Screening Program）、各州救急サービス（Queensland Ambulance Service／
  NSW Ambulance／Ambulance Victoria）、Triple Zero（000）、ARPANSA（UV Index・**取得確認済み**）、
  SunSmart / Cancer Council（UV3+で対策・Slip Slop Slap Seek Slide）、Bureau of Meteorology（UV forecast）。
- **可変事項の断定回避:** 救急車費用は州・搬送内容・改定で大きく変わるため**特定金額を断定せず**、州の救急サービス公式へ誘導。
  QLD・TAS は住民負担／他州は原則有料／ワーホリは州制度対象外になりやすい／000通報は無料、という構造事実のみ確定記述。
  詳細と web fetch の制約は `SOURCE_VERIFICATION_REPORT.md`。
- **content-manifest.yaml:** 該当5件を `status: planned` → `status: published` に更新済み。
  `manifest.generated.ts` を再生成（existing 47・planned 338）。
- **検証（マイクロバッチ範囲・各1回）:** `validate:articles`（ユニーク slug 255・重複0・重複パス0・
  重複エクスポート0・health 13件・`OK: no article data errors`）、`tsc --noEmit` クリーン（exit 0）、
  `validate:content` 0 error / 66 warning、health の `relatedSlugs` は全て実在 slug に解決（dangling 0）。
  ※フルビルド/テスト/lint/sitemap/RSS/構造化データ監査は health ハブ完了後（残り5件以下時の最終監査）にまとめて実施予定。
- **残り health slug: 7件。次の未完了 health slug: `heatstroke-guide`。**
- **変更ファイル（本チェックポイント）:** `lib/content/articles/health.ts`、
  `lib/content/manifest.generated.ts`（再生成）、`whv-guide-content-plan/content-manifest.yaml`、
  `CONTENT_MERGE_MAP.md`、`SOURCE_VERIFICATION_REPORT.md`、`BULK_PUBLISH_REPORT.md`、
  `BULK_PUBLISH_REMAINING.md`。
- **未解決の問題: なし**（救急車の州別具体額と一部 healthdirect ページは自動取得に失敗したが、
  構造的事実は公式で照合済み。金額は各州公式へ誘導する方針で公開可能と判断）。

## チェックポイント（2026-07-27）: health マイクロバッチ #1（5件公開 / commit: feat: publish health micro-batch 1）

health（医療・健康・安全）ハブの最初の5件を公開しました（マイクロバッチ運用）。

- **公開した5件（すべて `verifiedAt: 2026-07-27`・`officialSources` 付き・完全公開・分類は全て create）:**
  `gp-urgent-care-emergency`（comparison, P0）, `overseas-insurance-claim`（how-to, P0）,
  `pharmacy-guide`（how-to, P0）, `common-medicines-australia`（health, P1）,
  `dental-care-australia`（health, P1）。
- **統合（merged）: なし。リダイレクト: なし。** 5件はいずれも新規スラッグで、既存の公開記事
  `medicare-oshc`（医療総論）/ `safety-emergency`（緊急・安全総論）/ `mental-health`（メンタル）とは
  検索意図が明確に異なる（受診先の使い分け・保険請求手順・薬局の使い方・成分別の一般薬・歯科の費用）。
  有用コンテンツの重複は 60–70% 未満で独立した強い意図があるため、統合せず個別公開し
  `relatedSlugs` で相互接続した。
- **既存記事の内部リンク更新:** `medicare-oshc` の `relatedSlugs` に新規4件
  （`gp-urgent-care-emergency` / `overseas-insurance-claim` / `pharmacy-guide` / `dental-care-australia`）を
  追記（本文・slug・URL は不変、`updatedAt` を 2026-07-27 に更新）。孤立記事なし。
- **公式照合（記事反映済み）:** Medicare Urgent Care Clinics（health.gov.au — bulk billed・walk-in・
  対象症状／命に関わる場合は000・ED）、healthdirect（無料健康相談・受診先の目安）、Services Australia
  （Reciprocal Health Care Agreements = **日本は対象外でワーホリはMedicare非適用**／PBS）、TGA
  （医薬品のScheduling: S2/S3/S4）、Triple Zero（000）を照合。可変・個別事項（保険の補償範囲・歯科費用・
  州別窓口）は断定せず公式・証券確認へ誘導。詳細は `SOURCE_VERIFICATION_REPORT.md`。
- **content-manifest.yaml:** 該当5件を `status: planned` → `status: published` に更新済み。
  `manifest.generated.ts` を再生成（planned 338、health 記事はコード側で 8 件）。
- **検証（マイクロバッチ範囲・各1回）:** `validate:articles`（ユニーク slug 250・重複0・重複パス0・
  重複エクスポート0・health 8件）、`tsc --noEmit` クリーン（exit 0）、health の `relatedSlugs` 11件は
  全て実在 slug に解決（dangling 0）。※フルビルド/テスト/lint/sitemap/RSS/構造化データ監査は
  health ハブ完了後にまとめて実施予定。
- **残り health slug: 12件。次の未完了 health slug: `eye-care-optometrist`。**
- **変更ファイル（本チェックポイント）:** `lib/content/articles/health.ts`、
  `lib/content/manifest.generated.ts`（再生成）、`whv-guide-content-plan/content-manifest.yaml`、
  `CONTENT_MERGE_MAP.md`、`SOURCE_VERIFICATION_REPORT.md`、`BULK_PUBLISH_REPORT.md`、
  `BULK_PUBLISH_REMAINING.md`。
- **未解決の問題: なし**（healthdirect の解説ページは自動取得に失敗したが、Medicare UCC・
  RHCA・Scheduling 等の主要事実は公式で照合済み。healthdirect は無料相談窓口として公式サイトへ誘導）。

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

### 新規公開（7件）
すべて `verifiedAt: 2026-07-16`、`officialSources` 付き、冒頭でタイトルの問いに直接回答、
`keyFacts`/`steps`/`tips`/`warnings`/`faqs`/`sources`/`relatedSlugs` を完備。

| slug | URL | ハブ | 優先度 |
| --- | --- | --- | --- |
| `working-holiday-budget` | /guides/working-holiday-budget | start-here | P0 |
| `working-holiday-timeline` | /guides/working-holiday-timeline | start-here | P0 |
| `first-30-days-roadmap` | /guides/first-30-days-roadmap | start-here | P0 |
| `whm-tax-rates` | /guides/whm-tax-rates | tax | P0 |
| `88-day-calculation` | /guides/88-day-calculation | farm | P0 |
| `specified-work-industries` | /guides/specified-work-industries | farm | P0 |
| `six-month-specified-work` | /guides/six-month-specified-work | farm | P0 |

> 追加バッチ（farm 3件）は、Department of Home Affairs の公式ページ
> 「Specified work」（ページ更新 2025-09-11、アクセス 2026-07-16）で、3か月=最低88暦日 /
> 6か月=最低179暦日、対象業種・数え方（フルタイム相当・悪天候の無給日は不算入・1暦日=最大1日）
> を実照合して作成。

### 既存記事の強化（4件）
`verifiedAt` + `officialSources` を付与し、`relatedSlugs` と `updatedAt` を更新。

| slug | URL |
| --- | --- |
| `visa-application` | /guides/visa-application |
| `second-visa-guide` | /guides/second-visa-guide |
| `visa-options` | /guides/visa-options |
| `tax-return-guide` | /guides/tax-return-guide |

詳細な照合内容は `SOURCE_VERIFICATION_REPORT.md` を参照。

### 追加バッチ 2/3: visa + preparation（2026-07-17、36件）

`visa` ハブ16件と `preparation` ハブ20件を、記事単位で公式一次情報に照合して新規公開。
すべて `verifiedAt: 2026-07-17`、`officialSources`（`accessedAt: 2026-07-17`）付き、
冒頭でタイトルの問いに回答、`keyFacts`/`steps`/`tips`/`warnings`/`faqs`/`sources`/`relatedSlugs` を完備。

- **visa（16件）:** `working-holiday-eligibility`, `visa-417-vs-462`, `visa-cost-processing-time`,
  `visa-proof-of-funds`, `visa-health-examination`, `visa-police-certificate`,
  `visa-after-passport-renewal`, `visa-grant-letter`, `visa-first-entry-deadline`,
  `visa-six-month-work-limitation`, `visa-study-limit`, `visa-travel-reentry`,
  `bridging-visa-basics`, `visa-refusal-cancellation`, `vevo-check`, `registered-migration-agent`
- **preparation（20件）:** `passport-validity-renewal`, `japan-moving-out-procedures`,
  `japan-tax-residency-before-departure`, `international-driving-permit`, `naati-licence-translation`,
  `pre-departure-health-check`, `medication-customs`, `vaccinations-before-australia`,
  `flight-booking-guide`, `arrival-airport-guide`, `temporary-accommodation-before-arrival`,
  `cards-and-cash-before-departure`, `keep-japanese-phone-number`, `mail-forwarding-and-address`,
  `document-backup`, `australia-customs-quarantine`, `baggage-packing-strategy`, `power-plug-voltage`,
  `farm-work-packing`, `send-luggage-to-australia`
- **統合/リダイレクト:** このバッチでは新規の全面重複がなく、統合・リダイレクトは発生せず
  （近接トピックは `relatedSlugs` で相互接続）。`content-manifest.yaml` の該当36件を
  `status: planned` → `status: published` に更新。
- **照合出典:** immi.homeaffairs.gov.au（ビザ）、ABF/DAFF（税関・検疫）、TGA（薬）、
  health.gov.au（予防接種）、外務省・国税庁・日本年金機構・日本郵便・警察庁・NAATI 等。
  詳細は `SOURCE_VERIFICATION_REPORT.md` の「バッチ2/3」。

### 追加バッチ 4/5: arrival + money（2026-07-18、20件）

`arrival` ハブ10件と `money` ハブ10件を、記事単位で公式一次情報に照合して新規公開。
すべて `verifiedAt: 2026-07-18`、`officialSources`（`accessedAt: 2026-07-18`）付き、
冒頭でタイトルの問いに回答、`keyFacts`/`steps`/`tips`/`warnings`/`faqs`/`sources`/`relatedSlugs` を完備。

- **arrival（10件）:** `australia-airport-arrival-flow`, `airport-to-city`, `mygov-account-guide`,
  `digital-id-guide`, `proof-of-address`, `address-change-checklist`, `australian-id-points`,
  `essential-australia-apps`, `consular-registration`, `first-week-shopping`
- **money（10件）:** `australia-living-cost`, `weekly-budget-template`, `debit-credit-cards`,
  `australia-atm-fees`, `wise-vs-bank-transfer`, `send-money-to-japan`, `joint-account-couples`,
  `emergency-fund`, `bank-scam-security`, `close-bank-account-before-leaving`
- **統合/リダイレクト:** このバッチでは新規の全面重複がなく、統合・リダイレクトは発生せず。
  `wise-vs-bank-transfer`（比較意図）は既存 `money-transfer-wise`（Wise 送金の手順）と
  意図が異なるため統合せず相互リンクで接続。`content-manifest.yaml` の該当20件を
  `status: planned` → `status: published` に更新。既存記事（`arrival-checklist`,
  `first-30-days-roadmap`, `opening-hours-holidays`, `money-transfer-wise`, `bank-account-guide`）に
  新記事への内部リンクを追加し孤立を防止。
- **照合出典:** ABF SmartGate、Services Australia（myGov）、ATO/myID（Digital ID）、
  Fair Work（最低賃金 2026-07-01: $26.44/h・$1,004.90/週）、Home Affairs（WHV 417 費用 AUD 840）、
  Scamwatch/ReportCyber/IDCARE（詐欺対策）、外務省（在留届・たびレジ）等。
  詳細は `SOURCE_VERIFICATION_REPORT.md` の「バッチ4/5」。

### 追加バッチ 6: tax（2026-07-18、17件）

`tax` ハブ17件（税・ABN/Sole Trader・Super）を、記事単位で公式一次情報に照合して新規公開。
すべて `verifiedAt: 2026-07-18`、`officialSources`（`accessedAt: 2026-07-18`）付き、
冒頭でタイトルの問いに回答、`keyFacts`/`steps`/`tips`/`warnings`/`faqs`/`sources`/`relatedSlugs` を完備。
記事は該当カテゴリモジュール（`lib/content/articles/{tfn,super,abn,tax-return}.ts`）にのみ追加
（`mockData.ts` へは追加せず）。

- **税・手続き（9件、tax-return/tfn）:** `tax-residency-australia`, `tfn-declaration-form`,
  `payslip-guide`, `income-statement-tax-ready`, `mygov-ato-linking`, `tax-return-deductions`,
  `tax-return-multiple-jobs`, `tax-return-overseas-income`, `tax-agent-guide`
- **ABN/Sole Trader（7件、abn）:** `abn-eligibility`, `sole-trader-basics`, `contractor-vs-employee`,
  `invoice-template-australia`, `abn-record-keeping`, `gst-registration-basics`, `bas-basics`
- **Super（1件、super）:** `superannuation-basics`
- **統合/リダイレクト:** このバッチでは新規の全面重複がなく、統合・リダイレクトは発生せず。
  既存公開記事（`tfn-guide`, `tax-return-guide`, `tax-return-howto`, `whm-tax-rates`,
  `abn-guide`, `super-guide`, `dasp-refund`）とは検索意図が明確に異なるため統合せず、
  `relatedSlugs` で相互接続。`content-manifest.yaml` の該当17件を
  `status: planned` → `status: published` に更新。
- **照合出典:** ato.gov.au（Super Guarantee 12%（2025-07-01〜）、Payday Super（2026-07-01〜）、
  GST登録基準 $75,000・ライドソーシングは全件登録・21日以内、TFN declaration、Income Statement/
  Tax ready、myGov連携、控除、居住性）、fairwork.gov.au（Payslip 1営業日以内・記載項目）、
  abr.gov.au（ABN無料申請）、tpb.gov.au（Tax Agent登録）。
  詳細は `SOURCE_VERIFICATION_REPORT.md` の「バッチ6」。

### 追加バッチ 7: jobs + qualifications（2026-07-18、35件）

`jobs` ハブ26件と `qualifications` ハブ9件（`category: "jobs"` + `hub: "qualifications"`）の
計35件を、記事単位で公式一次情報に照合して新規公開。すべて `verifiedAt: 2026-07-18`、
`officialSources`（`accessedAt: 2026-07-18`）付き、冒頭でタイトルの問いに回答、
`keyFacts`/`steps`/`tips`/`warnings`/`faqs`/`sources`/`relatedSlugs` を完備。記事は
カテゴリモジュール（`lib/content/articles/jobs.ts`）にのみ追加（`mockData.ts` へは追加せず）。

- **仕事探し・応募（6件）:** `job-search-websites`, `facebook-job-groups`, `walk-in-resume`,
  `cover-letter-guide`, `job-reference-guide`, `job-application-follow-up`
- **労働条件・権利・問題解決（10件）:** `employment-contract-checklist`, `employment-types`,
  `award-rates-penalty-rates`, `unpaid-trial-rules`, `underpayment-unpaid-wages`, `cash-in-hand-jobs`,
  `workplace-injury-workers-comp`, `workplace-bullying-harassment`, `resignation-notice`, `termination-final-pay`
- **職種別ガイド（10件）:** `hospitality-jobs-guide`, `barista-job-guide`, `hotel-housekeeping-jobs`,
  `cleaning-jobs-guide`, `retail-jobs-guide`, `warehouse-jobs-guide`, `construction-jobs-guide`,
  `office-admin-jobs-guide`, `it-jobs-working-holiday`, `recruitment-agency-guide`
- **資格・ライセンス（9件、hub: qualifications）:** `rsa-state-guide`, `white-card-guide`,
  `food-safety-certificate`, `rcg-rsa-gaming`, `forklift-licence-guide`, `first-aid-cpr-guide`,
  `police-check-guide`, `working-with-children-check`, `barista-course-guide`
- **統合/リダイレクト:** このバッチでは新規の全面重複がなく、統合・リダイレクトは発生せず。
  既存公開記事（`jobs-guide`, `resume-guide`, `interview-guide`, `certifications`, `working-rights`）は
  概要・総論であり、35件は個別の探し方・労働問題の手順・資格別取得方法で意図が明確に異なるため
  統合せず `relatedSlugs` で相互接続。`content-manifest.yaml` の該当35件を
  `status: planned` → `status: published` に更新。**ファーム固有の就労記事（`farm-*`）は対象外**とし、
  支援的な内部リンクとしてのみ参照。
- **照合出典:** fairwork.gov.au（全国最低賃金 2026-07-01: $26.44/h・$1,004.90/週、Casual loading 25%、
  NES解雇予告、無給トライアル、Final pay、不当解雇21日、Pay Calculator、Independent contractors、
  Labour hire）、safeworkaustralia.gov.au / SafeWork NSW（High Risk Work Licence LF、White Card）、
  Liquor & Gaming NSW / OLGR（RSA・RCG）、NSW Food Authority / FSANZ（Food Safety）、
  acic.gov.au（National Police Check）、NSW OCG / Blue Card Services（WWCC）、training.gov.au（HLTAID009/011）。
  詳細は `SOURCE_VERIFICATION_REPORT.md` の「バッチ7」。

### 追加バッチ 8: housing マイクロバッチ（2026-07-19、3件）

`housing` ハブ3件を、記事単位で公式一次情報に照合して新規公開（マイクロバッチ運用）。
すべて `verifiedAt: 2026-07-19`、`officialSources`（`accessedAt: 2026-07-19`）付き、
冒頭でタイトルの問いに回答、`keyFacts`/`steps`/`tips`/`warnings`/`faqs`/`phrases`/`sources`/
`relatedSlugs` を完備。記事はカテゴリモジュール（`lib/content/articles/housing.ts`）にのみ
追加（`mockData.ts` へは追加せず）。

- **公開（3件）:** `housing-platforms-comparison`（家探しサービス比較）,
  `housing-message-templates`（英語応募テンプレート）, `inspection-checklist`（内見チェックリスト）
- **統合/リダイレクト:** なし。既存公開記事 `housing-guide`（総論）/ `share-house-finding`
  （探し方＋内見概要）とは検索意図が明確に異なる（比較・テンプレート・チェックリスト）ため
  統合せず、`relatedSlugs` で相互接続。既存2記事の `relatedSlugs` に新規3件を追記
  （内部リンク更新のみ）。`content-manifest.yaml` の該当3件を `status: planned` →
  `status: published` に更新。
- **照合出典:** Scamwatch（ACCC / National Anti-Scam Centre）、NSW Government「Renting a
  place to live」、Consumer Affairs Victoria「Renting」。詳細は `SOURCE_VERIFICATION_REPORT.md`
  の「housing マイクロバッチ」。
- **検証（マイクロバッチ範囲）:** `validate:articles`（ユニーク slug 208・重複0）、
  `tsc --noEmit` クリーン。変更 housing 記事の `relatedSlugs` は全て実在 slug に解決。
- **次の未完了 housing slug:** `bond-rules-overview`。

### 追加バッチ 9: housing（2026-07-19、16件・ハブ完了）

`housing` ハブの残り16件を、記事単位で公式一次情報に照合して新規公開し、**housing バッチを完了**。
すべて `verifiedAt: 2026-07-19`、`officialSources`（`accessedAt: 2026-07-19`）付き、冒頭でタイトルの
問いに回答、`keyFacts`/`steps`/`tips`/`warnings`/`faqs`/`phrases`/`sources`/`relatedSlugs` を完備。
記事はカテゴリモジュール（`lib/content/articles/housing.ts`）にのみ追加（`mockData.ts` へは追加せず）。

- **公開（16件）:** `bond-rules-overview`, `condition-report-guide`, `rental-agreement-share-house`,
  `rent-and-bills`, `rent-increase-rules`, `bond-refund-dispute`, `ending-tenancy-notice`,
  `find-replacement-tenant`, `share-house-rules`, `share-house-conflict`, `short-term-accommodation`,
  `hostel-guide`, `homestay-guide`, `couple-room-housing`, `regional-farm-housing`, `rental-scam-examples`。
- **統合/リダイレクト:** なし。16件はいずれも新規スラッグで、既存公開記事 `housing-guide`（総論）/
  `share-house-finding`（探し方＋内見概要）およびマイクロバッチ3件とは検索意図が明確に異なる
  （Bond法規・入居/退去手続き・契約チェック・光熱費・値上げ・トラブル解決・短期滞在・
  ホステル/ホームステイ・カップル/地方の家探し・詐欺）ため統合せず、`relatedSlugs` で相互接続。
  `content-manifest.yaml` の該当16件を `status: planned` → `status: published` に更新。
- **housing ハブ最終状態:** 全21件が最終ステータス確定（既存公開2件＋新規公開19件、
  planned/merged/review は 0件）。
- **照合出典:** RTA(QLD)、NSW Government「Renting a place to live」、Consumer Affairs Victoria
  「Renting」（RTBA）、Scamwatch（ACCC）。可変な上限額・州別ルール・通知期間は断定せず各州当局へ
  誘導。詳細は `SOURCE_VERIFICATION_REPORT.md` の「housing バッチ完了」。
- **検証:** `validate:articles`（ユニーク slug 224・重複0・重複パス0・housing 21件）、
  `tsc --noEmit` クリーン、`validate:content` 0 error / 66 warning、`test:content` 5/5 pass、
  `eslint` クリーン、`next build` 成功（278静的ページ・新規16件を prerender 確認）。

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
| コンテンツ検証（`npm run validate:content`） | エラー0 / 警告66 |
| 型チェック（`npx tsc --noEmit`） | エラー0 |
| コンテンツテスト（`npm run test:content`, node:test） | 5/5 パス |
| Lint（`npm run lint`） | エラー0 / 警告0 |
| ビルド（`npm run build`, Next.js 16.2.7 + TS） | 成功（housing バッチ完了後、全 278 静的ページを prerender） |

> **追記（2026-07-19）transport サブバッチ #1（車の所有・購入・故障 8件公開）:**
> `used-car-inspection-checklist` / `ppsr-check-guide` / `rego-ctp-rwc` / `vehicle-transfer-by-state` /
> `car-insurance-comparison` / `roadside-assistance` / `car-breakdown-guide` / `flat-tyre-guide` を8件を
> 公開（前セッションでマニフェスト `published` 化済みだが本文未作成だった中断分を書き上げ、状態を整合）。
> すべて `verifiedAt: 2026-07-19` ・ `officialSources` 付き。統合・リダイレクトなし。
> 公式照合: PPSR（$2 VIN照会）・州の運輸当局・自動車クラブ（NRMA/RACV/RACQ等）・moneysmart(ASIC)・Triple Zero(000)。
> 検証: `validate:articles`（ユニーク slug 232・重複0・transport 10件）、`tsc --noEmit` クリーン、
> `validate:content` 0 error / 66 warning、`test:content` 5/5 pass、`eslint` クリーン、`next build` 成功（新規8件を prerender）。

> **追記（2026-07-19）transport サブバッチ #2（残り14件を処理・transport ハブ完了）:**
> 公開13件＝transport 9件（`mechanic-tyre-shop-english` / `fuel-saving-apps` / `tolls-linkt-guide` /
> `parking-fines-guide` / `car-accident-guide` / `rent-a-car-guide` / `sell-car-before-leaving` /
> `e-bike-e-scooter-rules` / `remote-driving-safety`）＋ license 4件（`japanese-licence-state-rules` /
> `convert-japanese-licence` / `motorcycle-licence-australia` / `digital-driver-licence`）。
> 統合1件＝`city-public-transport-comparison` → `transport-payment-guide`（約70%重複・308恒久リダイレクト登録・
> `redirectFrom` 付与・運賃/キャップ比較段落で補強）。すべて `verifiedAt: 2026-07-19`・該当記事に `officialSources`。
> 内部リンク整合: `cars-guide` に `sell-car-before-leaving`、`license-guide` に免許4件＋`international-driving-permit`、
> `transport-payment-guide` に `intercity-transport` を追加。孤立記事なし。
> 公式照合: FuelCheck(NSW)・FuelWatch(WA)・Linkt(Transurban)・QLD Transport(overseas licence)・Service NSW(digital licence)。
> 検証: `validate:articles`（`OK: no article data errors`）、`tsc --noEmit` クリーン、
> `validate:content` 0 error / 66 warning、`test:content` 5/5 pass、`eslint` クリーン、`next build` 成功（299静的ページ・新規13件を prerender）。
> これで transport ハブは全24件が最終確定（planned 0件）。次バッチは health（`gp-urgent-care-emergency` から・未着手）。

警告66の大半は、粒度の粗い検索意図クラスタの共食い候補（過検出）と、コードに存在するが
マニフェスト `existing_articles` 未登録である旨の情報提供です（`CONTENT_AUDIT.md` 参照）。

## 5. 非公開（review/planned のまま）

- 残り **155件** の計画コンテンツは未公開。slug 単位の一覧と理由は `BULK_PUBLISH_REMAINING.md`。
  （start-here 7件 + visa 16件 + preparation 20件 + arrival 10件 + money 10件 + tax 17件 + jobs 26件 + qualifications 9件 + farm 36件 + housing 19件を公開済み。次バッチは transport ハブ。）
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
