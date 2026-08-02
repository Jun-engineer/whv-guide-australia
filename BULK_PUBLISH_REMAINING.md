# BULK_PUBLISH_REMAINING

生成日: 2026-07-16（更新: 2026-07-19）

計画コンテンツ（planned）の残タスク一覧と、逐次公開の進捗を記録します。

## ✅ コンテンツ生成 完了（2026-08-02）: 全 planned アイテムを公開済み・最終監査の準備完了

**本サイクルのコンテンツ生成は完了しました。** マニフェスト（`whv-guide-content-plan/content-manifest.yaml`）内の `status: planned` は **0件**（`grep -c "status: planned"` = 0）。全ハブの計画コンテンツが `status: published`（または `existing`／`merged`）となり、逐次公開の残タスクはありません。

- **最終公開:** `news-scam-alert-template`（P1・/news/templates/scam-alert）を公開し、news ハブ `type: news-template` グループ（全6件）が完了。これによりグループB（news-template）が完結し、残 planned は 0 件。
- **状態:** これ以上の新規コンテンツは生成しません（追加生成の指示がない限り）。
- **次のステップ:** プロジェクトは**全体（サイト全体）最終監査の準備が整いました**。本実行では最終監査は行いません（別実行で実施）。

## チェックポイント（2026-08-02）: news-template マイクロバッチ #2・最終（1件公開・news-template グループ完了 / commit: feat: publish final remaining content micro-batch）

### 残項目インベントリ（本バッチ開始時 planned = 1件）

前回 news-template #1 で P0 5件を公開したため、開始時点の残 planned は **1件**（`news-scam-alert-template`・P1・news ハブ・`type: news-template`）。`grep -c "status: planned"` = 1 で確認。

### 本バッチで選定した一貫グループ（≤5・同一ハブ news・同一検索意図 news-template・記録順の最後の1件）
news ハブ `news-template` グループの最後に残っていた唯一の項目。前回 #1 で「5件以内」の制約により残していた P1 を処理し、グループB（news-template 全6件）を完結：
- `news-scam-alert-template`（P1, /news/templates/scam-alert）

### 実装結果（news-template マイクロバッチ #2・最終）
- **既存サブシステムへ追加（#1 で構築済みのため新規配線なし）:** #1 で新設した news-template サブシステム（`types/newsTemplate.ts`／`lib/newsTemplates.ts`／`app/news/templates/{page,[slug]/page}.tsx`／sitemap 連携）に、データ1件を追加するのみ。sitemap・一覧・詳細はレジストリ（`getPublishedNewsTemplates()`）駆動のため自動反映され、追加の配線変更は不要。
- **公開した1件（`hub: news`・`type: news-template`・`verifiedAt: 2026-08-02`・分類 create）:**
  - `news-scam-alert-template`（P1, /news/templates/scam-alert）— ワーホリを狙う詐欺・悪質求人（求職詐欺／キャッシュバック／ビザ・スポンサー詐欺／なりすまし／賃貸詐欺）の手口・危険サイン・被害防止・通報先を、公式リンク付きで注意喚起する編集テンプレート。
- **分類:** create（新規スラッグ）。統合/リダイレクト/レビュー/除外/分割は該当なし。
- **YMYL/可変情報の非断定:** 特定の企業・個人を名指しで「詐欺」と断定せず、一般的な手口・危険サインとして提示。キャッシュバックやビザ・スポンサー費用の請求が違法である旨は Fair Work の情報に基づき、金額・法的判断は断定しない。ビザ違反があっても賃金未払いは Fair Work に相談でき相談でビザは取り消されない保護にも言及。
- **公式ソース（2026-08-02 ライブ確認）:** Scamwatch（ACCC・National Anti-Scam Centre）｜Report a scam（https://www.scamwatch.gov.au/ ・ライブ確認）／Fair Work Ombudsman｜Visa holders and migrants（https://www.fairwork.gov.au/find-help-for/visa-holders-migrants ・キャッシュバック/ビザ・スポンサー費用の違法性・保護をライブ確認）／Australian Cyber Security Centre｜Report (ReportCyber)（https://www.cyber.gov.au/report-and-recover/report ・ライブ確認）。緊急時は Triple Zero（000）を案内。
- **孤立防止/内部リンク:** `/news` →「ニューステンプレート集」→ 一覧 → 詳細で到達可能。`relatedSlugs` は公開/既存 slug のみ参照（`online-scams-cybersecurity`／`bank-scam-security`／`rental-scam-examples`／`working-rights`／`underpayment-unpaid-wages`）で dangling 0。
- **mockData への記事追加なし。**
- **content-manifest.yaml:** `news-scam-alert-template` を `status: planned` → `status: published`。`manifest.generated.ts` 再生成。`status: planned` 残 0 件を確認。
- **検証（各1回・許可された項目のみ）:**
  - `validate:articles`: **errors なし**（`OK: no article data errors`）。
  - `validate:content`（dangling/重複）: **0 error / 66 warning**（dangling 0・`news::news-template` cannibalization は想定内・ベースライン据え置き）。
  - `tsc --noEmit`: **exit 0**。リペア・リトライなし。
- **変更ファイル:** `lib/newsTemplates.ts`（1件追加・計6件）／`whv-guide-content-plan/content-manifest.yaml`（1件 published）／`lib/content/manifest.generated.ts`（再生成）／各進捗・検証レポート。型/ページ/sitemap は #1 で整備済みのため変更なし。
- **範囲順守:** news-template の最後の1件のみ処理。全体最終監査・build/lint/test スイートは未実施（通常マイクロバッチ）。commit は `feat: publish final remaining content micro-batch` 1回のみ。
- **残りグループ（本バッチ後）:** **なし（planned 0 件）。コンテンツ生成は完了。プロジェクトは全体最終監査の準備完了。**
- **未解決の問題:** なし。

## チェックポイント（2026-08-02）: news-template マイクロバッチ #1（P0 5件公開 / commit: feat: publish final remaining content micro-batch）

### 残項目インベントリ（本バッチ開始時 planned = 6件）

gig-work ハブ完了後、開始時点の残 planned は **6件**（すべて news ハブ `type: news-template`・別実装タイプ）。内訳：

**グループB — news ハブ（6件・`type: news-template`・`/news/templates/*`）**
1. `news-visa-changes-template`（P0, /news/templates/visa-changes）
2. `news-minimum-wage-template`（P0, /news/templates/minimum-wage）
3. `news-tax-super-template`（P0, /news/templates/tax-super）
4. `news-visa-fee-template`（P0, /news/templates/visa-fee）
5. `news-disaster-alert-template`（P0, /news/templates/disaster-alert）
6. `news-scam-alert-template`（P1, /news/templates/scam-alert）

### 本バッチで選定した一貫グループ（≤5・同一ハブ news・同一検索意図 news-template・記録順の P0 全5件）
news ハブの `news-template` グループのうち、優先度 P0 の記録順先頭5件で結束。P1 の `news-scam-alert-template` は「5件以内」の制約により次バッチへ残す：
- `news-visa-changes-template`（P0）
- `news-minimum-wage-template`（P0）
- `news-tax-super-template`（P0）
- `news-visa-fee-template`（P0）
- `news-disaster-alert-template`（P0）

### 実装結果（news-template マイクロバッチ #1）
- **新サブシステム構築（tools パターンを踏襲）:** `type: news-template` は `/news/templates/*` という既存に無いルートを必要とするため、記事（article）とは別に専用サブシステムを新設。`types/newsTemplate.ts`（`NewsTemplate` 型）／`lib/newsTemplates.ts`（データ5件＋`getPublishedNewsTemplates()`／`getNewsTemplateBySlug()`）／`app/news/templates/page.tsx`（一覧）／`app/news/templates/[slug]/page.tsx`（詳細・`generateStaticParams`＋`generateMetadata`＋BreadcrumbList JSON-LD）を新規作成。詳細ページは共通 `OfficialSourceBox` を再利用し、過度な抽象化を避けて `[slug]` ページ内で直接描画。
- **公開した5件（すべて `hub: news`・`type: news-template`・`verifiedAt: 2026-08-02`・分類 create）:**
  - `news-visa-changes-template`（P0, /news/templates/visa-changes）— ビザ制度変更の発表日・適用開始日・対象ビザ/対象者・変更内容・経過措置・公式ソースを必須化した編集テンプレート。
  - `news-minimum-wage-template`（P0, /news/templates/minimum-wage）— 全国最低賃金・アワード改定の金額・適用開始日・確認方法。
  - `news-tax-super-template`（P0, /news/templates/tax-super）— 税率・しきい値・SG率の会計年度・変更前後・対象者。
  - `news-visa-fee-template`（P0, /news/templates/visa-fee）— サブクラス別のビザ申請料の旧/新料金と適用日。
  - `news-disaster-alert-template`（P0, /news/templates/disaster-alert）— 影響地域・警報レベル・とるべき行動・緊急連絡先（000）・更新時刻。
- **分類:** 5件すべて **create**。統合/リダイレクト/レビュー/除外/分割は該当なし。
- **YMYL/可変情報の非断定:** 各テンプレートは数値・日付・条件を断定せず、必須項目・執筆注意点・記入スケルトンとして「公式で最新を確認する」ことを促す構造。確認日 2026-08-02 を明記。
- **公式ソース（2026-08-02 ライブ確認）:** Home Affairs｜Working Holiday visa (417)／Work and Holiday visa (462)／Current visa pricing（ライブ確認）／Visa Pricing Estimator／Fair Work Ombudsman｜Minimum wages（ライブ確認）／Fair Work Commission｜Annual wage reviews／ATO｜Tax rates – Australian resident（ライブ確認）／ATO｜Individuals and families／Bureau of Meteorology｜Warnings and alerts（ライブ確認）／Australian Government｜Triple Zero（000）。
- **孤立防止/内部リンク:** `/news` ページから「ニューステンプレート集を見る」導線を追加。一覧→詳細→関連ガイド（`/guides/{slug}`）へ接続。`relatedSlugs` は公開/既存 slug のみ参照（`whv-complete-guide`／`second-visa-guide`／`working-rights`／`award-rates-penalty-rates`／`underpayment-unpaid-wages`／`tax-return-guide`／`super-guide`／`income-statement-tax-ready`／`payslip-guide`／`bushfire-safety`／`flood-cyclone-safety`）。
- **sitemap:** `/news/templates`（静的）＋公開テンプレート5パスを追加。
- **mockData への記事追加なし。**
- **content-manifest.yaml:** P0 5件を `status: planned` → `status: published`（`news-scam-alert-template` は planned のまま）。`manifest.generated.ts` 再生成。
- **検証（各1回・許可された項目のみ）:**
  - `validate:articles`: **errors なし**（`OK: no article data errors`・gig-work 12・duplicate slugs 0）。
  - `validate:content`（dangling/重複）: **0 error / 66 warning**（dangling 0・`news::news-template` の cannibalization 警告は想定内・ベースライン据え置き）。
  - `tsc --noEmit`: **exit 0**。リペア・リトライなし。
- **変更ファイル:** `types/newsTemplate.ts`（新規）／`lib/newsTemplates.ts`（新規・5件）／`app/news/templates/page.tsx`（新規）／`app/news/templates/[slug]/page.tsx`（新規）／`app/sitemap.ts`（news-template ルート追加）／`app/news/page.tsx`（導線追加）／`whv-guide-content-plan/content-manifest.yaml`（5件 published）／`lib/content/manifest.generated.ts`（再生成）／各進捗・検証レポート。
- **範囲順守:** news-template の P0 記録順5件のみ処理。全体最終監査・build/lint/test スイートは未実施（通常マイクロバッチ）。commit は `feat: publish final remaining content micro-batch` 1回のみ。
- **残りグループ（本バッチ後）:** news ハブ `type: news-template` の **`news-scam-alert-template`（P1・/news/templates/scam-alert・brief「手口、被害防止、通報先」）1件のみ**。**次グループ: news-template（`news-scam-alert-template`）でグループB完了予定。**
- **未解決の問題:** なし。

## チェックポイント（2026-08-02）: gig-work マイクロバッチ #3（2件公開・gig-work ハブ完了 / commit: feat: publish final remaining content micro-batch）

### 残項目インベントリ（本バッチ開始時 planned = 8件）

前回 gig-work #2 で5件を公開したため、開始時点の残 planned は **8件**（gig-work 2＋news-template 6）。ステータス集計＝published 323・existing 47・merged 7・review 0・excluded 0・draft 0・archived 0。8件の内訳：

**グループA — gig-work ハブ（残2件・`type: article`・記録順）**
1. `japan-remote-work-tax`（P1, tax）
2. `public-liability-insurance`（P2, insurance）

**グループB — news ハブ（6件・`type: news-template`・`/news/templates/*`・別実装タイプ・別グループ）**
`news-visa-changes-template`／`news-minimum-wage-template`／`news-tax-super-template`／`news-visa-fee-template`／`news-disaster-alert-template`／`news-scam-alert-template`。

### 本バッチで選定した一貫グループ（≤5・同一ハブ gig-work・記録順の残り全2件）
gig-work ハブに残っていた記録順の最後の2件。フリーランス/個人事業主の「税務」と「賠償責任保険」という近接した検索意図で結束し、これで gig-work ハブは全12件 published となり完了：
- `japan-remote-work-tax`（P1, tax, id a357）
- `public-liability-insurance`（P2, insurance, id a358）

### 実装結果（gig-work マイクロバッチ #3）
- **公開した2件（すべて `category: gig-work`・`hub: gig-work`・`verifiedAt: 2026-08-02`・完全公開・分類は全て create）:**
  - `japan-remote-work-tax`（P1, tax, id a357）— 豪州滞在中に日本のリモート副業を続ける場合の税務上の居住性（tax residency）・全世界所得・二重課税（日豪租税条約・外国税額控除）・契約・送金の論点整理。日豪双方の専門家確認前提で断定を回避。
  - `public-liability-insurance`（P2, insurance, id a358）— 個人事業主（sole trader）の賠償責任保険の基礎。第三者へのケガ・物損への備え、補償額/範囲/免責/除外の見方、義務性（一律必須でないが契約先が求めることが多い）を整理。自分のケガは別の保険である点も明記。
- **分類:** 2件すべて **create**（新規スラッグ）。統合（merge）・リダイレクト・レビュー・除外・分割は該当なし。
- **YMYL/可変情報の非断定:** 税務上の居住性・二重課税・源泉徴収・保険の要否/補償額/除外は断定せず、確認日 2026-08-02 を明記し ATO／国税庁／business.gov.au／登録税理士・保険会社・両国の専門家へ誘導。
- **公式ソース（2026-08-02 ライブ確認）:** ATO｜Work out your tax residency（ライブ確認）／ATO｜Gig economy and tax／国税庁｜個人の方（ライブ確認）／business.gov.au｜Types of business insurance（ライブ確認）／business.gov.au｜Sharing economy。※当初引用した nta.go.jp のタックスアンサー個別URLと business.gov.au の insurance-for-your-business は 404 を確認したため、ライブ確認済みの安定ページ（国税庁 個人の方・business.gov.au Types of business insurance）へ1回で差し替え（許可されたリペア1回以内）。
- **孤立記事なし / 内部リンク:** すべて公開中 `/gig-work` から自動列挙・到達可能。`relatedSlugs` は公開/既存 slug のみ参照（`gig-work-comparison`／`freelance-it-australia`／`delivery-abn-tax`／`tax-return-guide`／`super-guide`／`airtasker-guide`／`delivery-insurance`／`abn-guide`／`delivery-safety`）で dangling 0。
- **mockData への記事追加なし:** gig-work モジュールにのみ追記。
- **content-manifest.yaml:** 2件を `status: planned` → `status: published`。`manifest.generated.ts` 再生成。
- **検証（各1回・許可された項目のみ）:**
  - `validate:articles`（重複 slug/path/export・影響リンク）: **errors なし**（gig-work: 12・duplicate slugs 0・`OK: no article data errors`）。
  - `validate:content`（dangling/重複）: **0 error / 66 warning**（dangling 0・ベースライン据え置き）。
  - `tsc --noEmit`: **exit 0**。ソースURLの 404 差し替え（1回）以外にリペア・リトライなし。
- **変更ファイル:** `lib/content/articles/gig-work.ts`（2記事追記・計12件）／`whv-guide-content-plan/content-manifest.yaml`（2件 published）／`lib/content/manifest.generated.ts`（再生成）／各進捗・検証レポート。型/配線/ページ/sitemap/Footer は #1 で整備済みのため変更なし。
- **範囲順守:** gig-work 記録順の残り全2件のみ処理。news は別実装タイプのため未着手。全体最終監査・build/lint/test スイートは未実施（通常マイクロバッチ）。commit は `feat: publish final remaining content micro-batch` 1回のみ。
- **gig-work ハブ完了:** 全12件が published。残りは news ハブ `type: news-template` 6件のみ。
- **残りグループ（本バッチ後）:** news ハブ `type: news-template` 6件（`/news/templates/*`・別実装タイプ）。**次グループ: news-template（`news-visa-changes-template` から）。**
- **未解決の問題:** なし。

## チェックポイント（2026-08-02）: gig-work マイクロバッチ #2（5件公開 / commit: feat: publish final remaining content micro-batch）

### 残項目インベントリ（本バッチ開始時 planned = 13件）

前回 gig-work #1 で5件を公開したため、開始時点の残 planned は **13件**（gig-work 7＋news-template 6）。ステータス集計＝published 318・existing 47・merged 7・review 0・excluded 0・draft 0・archived 0。13件の内訳は次の2グループ。

**グループA — gig-work ハブ（7件・`type: article`・記録順）**
1. `delivery-peak-hours`（P1, strategy）
2. `delivery-safety`（P0, safety）
3. `delivery-account-deactivation`（P2, problem-solving）
4. `airtasker-guide`（P2, platform-guide）
5. `freelance-it-australia`（P1, career）
6. `japan-remote-work-tax`（P1, tax）
7. `public-liability-insurance`（P2, insurance）

**グループB — news ハブ（6件・`type: news-template`・`/news/templates/*`・別実装タイプ・別グループ）**
`news-visa-changes-template`／`news-minimum-wage-template`／`news-tax-super-template`／`news-visa-fee-template`／`news-disaster-alert-template`／`news-scam-alert-template`。

### 本バッチで選定した一貫グループ（≤5・同一ハブ gig-work・記録順先頭5件）
gig-work ハブの記録順で残っていた先頭5件。デリバリー稼働の戦略・安全・トラブル対応から、便利屋・フリーランスへと近接した検索意図で結束：
- `delivery-peak-hours`（P1, strategy, id a352）
- `delivery-safety`（P0, safety, id a353）
- `delivery-account-deactivation`（P2, problem-solving, id a354）
- `airtasker-guide`（P2, platform-guide, id a355）
- `freelance-it-australia`（P1, career, id a356）

### 実装結果（gig-work マイクロバッチ #2）
- **公開した5件（すべて `category: gig-work`・`hub: gig-work`・`verifiedAt: 2026-08-02`・完全公開・分類は全て create）:**
  - `delivery-peak-hours`（P1, strategy, id a352）— 需要が高まりやすい時間帯・天候・エリアの一般的な考え方と稼働戦略。収入保証は断定せず、手取り＝報酬−経費と安全優先を軸に説明。
  - `delivery-safety`（P0, safety, id a353）— 夜間・交通事故・盗難対策と事故時対応。視認性装備・交通ルール（州で異なる）・スマホ/車両の管理・緊急時 Triple Zero（000）。
  - `delivery-account-deactivation`（P2, problem-solving, id a354）— アカウント停止の主因（低評価・本人確認・規約違反・不正の疑い）と予防・証拠保存・異議申立て（appeal）。基準は各社規約で確認。
  - `airtasker-guide`（P2, platform-guide, id a355）— 応札→作業→支払いの流れ、ABN・手数料・記録、賠償責任保険、対面作業の安全。手数料・補償は公式で確認。
  - `freelance-it-australia`（P1, career, id a356）— IT/Web案件の探し方、契約・請求書（invoice）・ABN、海外クライアントの税務（居住性・海外収入・二重課税）は専門家確認前提。
- **分類:** 5件すべて **create**（新規スラッグ）。統合（merge）・リダイレクト・レビュー・除外・分割は該当なし。
- **YMYL/可変情報の非断定:** 収入・料率・手数料・GST閾値・保険補償範囲・税務上の居住性・二重課税は断定せず、確認日 2026-08-02 を明記し ATO／Fair Work／business.gov.au／各社・登録税理士・保険会社へ誘導。緊急時は Triple Zero（000）を案内。交通・アカウント基準は州・各社で変わりうる旨を明記。
- **公式ソース（2026-08-02 ライブ確認）:** ATO｜Gig economy and tax／ATO｜Applying for an ABN／Fair Work Ombudsman｜Independent contractors／business.gov.au｜Sharing economy・Payments and invoicing（ライブ確認）／Australian Government｜Triple Zero（infrastructure.gov.au/triple-zero・ライブ確認）。
- **孤立記事なし / 内部リンク:** すべて公開中 `/gig-work` から自動列挙・到達可能。`relatedSlugs` は公開/既存 slug のみ参照（`gig-work-comparison`／`delivery-abn-tax`／`delivery-insurance`／`delivery-vehicle-comparison`／`uber-eats-guide`／`doordash-guide`／`abn-guide`／`tax-return-guide`／`super-guide`／`license-guide`）で dangling 0。未公開 planned は参照せず。
- **mockData への記事追加なし:** gig-work モジュールにのみ追記。
- **content-manifest.yaml:** 5件を `status: planned` → `status: published`。`manifest.generated.ts` 再生成。
- **検証（各1回・許可された項目のみ）:**
  - `validate:articles`（重複 slug/path/export・影響リンク）: **errors なし**（gig-work: 10・duplicate slugs 0・`OK: no article data errors`）。
  - `validate:content`（dangling/重複）: **0 error / 66 warning**（dangling 0。warning は既存ハブ内カニバリ注意のみでベースライン据え置き）。
  - `tsc --noEmit`: **exit 0**。リペア・リトライなし（初回で全項目パス）。
- **変更ファイル:** `lib/content/articles/gig-work.ts`（5記事追記・計10件）／`whv-guide-content-plan/content-manifest.yaml`（5件 published）／`lib/content/manifest.generated.ts`（再生成）／各進捗・検証レポート。型/配線/ページ/sitemap/Footer は #1 で整備済みのため変更なし。
- **範囲順守:** gig-work 記録順先頭5件のみ処理。news・他カテゴリ未着手。全体最終監査・build/lint/test スイートは未実施（通常マイクロバッチ）。commit は `feat: publish final remaining content micro-batch` 1回のみ。
- **残りグループ（本バッチ後）:** gig-work #3（記録順先頭 `japan-remote-work-tax`）＝`japan-remote-work-tax`, `public-liability-insurance`（2件・ハブ最終監査）。その後 news ハブ `type: news-template` 6件（別実装タイプ）。
- **未解決の問題:** なし。

## チェックポイント（2026-08-02）: gig-work マイクロバッチ #1（5件公開・新カテゴリ初回 / commit: feat: publish final remaining content micro-batch）

### 最終残項目インベントリ（全 planned = 18件）

リポジトリ・マニフェスト・進捗ファイル・git 履歴を突き合わせ、まだ published/merged/archived/review/excluded になっていない**残項目は 18件**（すべて `status: planned`）。他ステータス集計＝published 313・existing 47・merged 7・review 0・excluded 0・draft 0・archived 0。18件をハブ・カテゴリ・検索意図・実装タイプで分類すると次の2グループ。

**グループA — gig-work ハブ（12件・`type: article`・記録順）**
1. `gig-work-comparison`（P0, comparison）
2. `delivery-abn-tax`（P0, tax）
3. `delivery-insurance`（P0, insurance）
4. `delivery-vehicle-comparison`（P1, comparison）
5. `delivery-expenses-logbook`（P1, tax）
6. `delivery-peak-hours`（P1, strategy）
7. `delivery-safety`（P0, safety）
8. `delivery-account-deactivation`（P2, problem-solving）
9. `airtasker-guide`（P2, platform-guide）
10. `freelance-it-australia`（P1, career）
11. `japan-remote-work-tax`（P1, tax）
12. `public-liability-insurance`（P2, insurance）

**グループB — news ハブ（6件・`type: news-template`・`/news/templates/*`・記録順）**
1. `news-visa-changes-template`（P0）
2. `news-minimum-wage-template`（P0）
3. `news-tax-super-template`（P0）
4. `news-visa-fee-template`（P0）
5. `news-disaster-alert-template`（P0）
6. `news-scam-alert-template`（P1）

> 補足: gig-work ハブは既に `uber-eats`・`doordash` カテゴリ（公開済み記事）が属する既存ハブだが、専用の一覧ページ `/gig-work` は未整備。上記12件は新カテゴリ `gig-work` として初回整備を伴う。news グループは実装タイプが `news-template`（記事ではなくニュース用テンプレート）で hub も異なるため、gig-work とは混在させない。

### 本バッチで選定した一貫グループ（≤5・同一ハブ gig-work・フードデリバリー検索意図）
記録順の先頭5件。いずれもフードデリバリー系ギグワークの「始め方・税金・保険・車両・経費」という近接した検索意図で結束：
- `gig-work-comparison`（P0, comparison）＝ハブの総論
- `delivery-abn-tax`（P0, tax）
- `delivery-insurance`（P0, insurance）
- `delivery-vehicle-comparison`（P1, comparison）
- `delivery-expenses-logbook`（P1, tax）

### 残りグループ（本バッチ後）
- gig-work #2（次グループ・記録順先頭 `delivery-peak-hours`）: `delivery-peak-hours`, `delivery-safety`, `delivery-account-deactivation`, `airtasker-guide`, `freelance-it-australia`。
- gig-work #3: `japan-remote-work-tax`, `public-liability-insurance`（2件・ハブ最終監査）。
- news ハブ: `type: news-template` 6件（別実装タイプ・別グループ）。

**次グループ: gig-work（`delivery-peak-hours` から継続）。** ※本バッチは gig-work 先頭5件のみ処理し、news・他カテゴリには着手しない。

（本チェックポイントの実装結果・統合/レビュー/除外・検証結果・変更ファイルは、下記「実装結果」に追記。）

### 実装結果（gig-work マイクロバッチ #1）
- **公開した5件（すべて `category: gig-work`・`hub: gig-work`・`verifiedAt: 2026-08-02`・完全公開・分類は全て create）:**
  - `gig-work-comparison`（P0, comparison, id a347）— 稼働中のギグ/デリバリー各サービス（Uber Eats・DoorDash・Menulog・Amazon Flex・Airtasker 等）の性質・向き不向き・共通の始め方（ABN・保険・税）を比較する総論。ライブ料率・報酬・キャンペーンは断定せず各社/公式へ。
  - `delivery-abn-tax`（P0, tax, id a348）— 配達収入のABN・所得税・GST（フードデリバリーは配車と異なり売上$75,000未満は原則GST登録不要）・Super（個人事業主は自分の分の拠出義務なし）・記録保存。税率/閾値は断定せず ATO へ。
  - `delivery-insurance`（P0, insurance, id a349）— 個人賠償・対人対物・CTP・所得補償とプラットフォーム補償の範囲/除外を確認。補償内容は変わりうるため各社/保険会社の約款で確認。
  - `delivery-vehicle-comparison`（P1, comparison, id a350）— 自転車・E-bike・スクーター/バイク・車の費用（購入/レンタル/維持/登録/保険）と地域適性の比較。金額はレンジ・例のみ。
  - `delivery-expenses-logbook`（P1, tax, id a351）— 経費区分（車両・通信・装備）と走行記録（logbook method）・案分・領収書保管で確定申告に備える方法。可否/割合は ATO・登録税理士へ。
- **分類:** 5件すべて **create**（新規スラッグ）。統合（merge）・リダイレクト・レビュー・除外・既存記事の分割は該当なし（新規追加のみ）。
- **YMYL/可変情報の非断定:** 税率・GST閾値・控除可否・保険補償範囲・登録費用・報酬は断定せず、確認日 2026-08-02 を明記し ATO／Fair Work／business.gov.au／各社・保険会社へ誘導。契約者/従業員の区分は Fair Work が「判断はできない・一般情報のみ」とする点、2024年8月26日以降の regulated worker（employee-like・デジタルプラットフォーム）制度を触れつつ断定を回避。
- **公式ソース（2026-08-02 ライブ確認）:** ATO｜Gig economy and tax／ATO｜Applying for an ABN／Fair Work Ombudsman｜Independent contractors（regulated workers 含む）／business.gov.au｜Sharing economy・Contractor responsibilities／ABN Lookup／Triple Zero 000。
- **新カテゴリ整備（community/return-home 前例に準拠）:** `ArticleCategory` に `gig-work` 追加、`lib/content/articles/gig-work.ts` 新規モジュール、`index.ts` 配線、`hubs.ts` の `CATEGORY_TO_HUB` に `"gig-work": "gig-work"`、`mockData.ts` にカテゴリラベル `ギグワーク・副業`（記事は追加せず）、`app/gig-work/page.tsx` 新設（既存ハブ route `/gig-work`）、`sitemap.ts`・Footer（仕事）に `/gig-work` 追加。
- **孤立記事なし / 内部リンク:** `/gig-work` が公開 gig-work 記事5件を自動列挙・Footer から到達可能。`relatedSlugs` は公開/既存 slug のみ参照（`uber-eats-guide`/`doordash-guide`/`abn-guide`/`tax-return-guide` 等）で dangling 0。未公開 planned（`delivery-safety` 等）は含めず。
- **mockData への記事追加なし:** カテゴリラベルのみ追加。記事本文は gig-work モジュールのみ。
- **content-manifest.yaml:** 5件を `status: planned` → `status: published`。`manifest.generated.ts` 再生成。
- **検証（各1回・許可された項目のみ）:**
  - `validate:articles`（重複 slug/path/export・影響リンク）: **errors なし**（gig-work: 5、`OK: no article data errors`）。
  - `validate:content`（dangling/重複）: **0 error / 66 warning**（dangling 0。warning は既存のハブ内カニバリ注意のみでベースライン据え置き）。
  - `tsc --noEmit`（型チェック）: **exit 0**。
  - リペア・リトライは発生せず（初回で全項目パス）。
- **変更ファイル:** `types/article.ts`（ArticleCategory に gig-work 追加）／`lib/content/articles/gig-work.ts`（新規・5記事）／`lib/content/articles/index.ts`（配線）／`lib/content/hubs.ts`（CATEGORY_TO_HUB）／`lib/mockData.ts`（カテゴリラベルのみ）／`app/gig-work/page.tsx`（新規）／`app/sitemap.ts`（`/gig-work`）／`components/layout/Footer.tsx`（`/gig-work`）／`whv-guide-content-plan/content-manifest.yaml`（5件 published）／`lib/content/manifest.generated.ts`（再生成）／各進捗・検証レポート。
- **範囲順守:** gig-work 先頭5件のみ処理。news・他カテゴリ未着手。全体最終監査・build/lint/test スイートは未実施（本バッチは通常マイクロバッチでハブ完了監査ではない）。commit は `feat: publish final remaining content micro-batch` 1回のみ。
- **未解決の問題:** なし。

## チェックポイント（2026-08-02）: downloads カテゴリ最終監査（0件公開・カテゴリ完了確認 / commit: feat: complete downloads content batch）

**downloads（ダウンロード資料）カテゴリの最終ハブ監査**を実施しました。開始時点で downloads の未完了は**0件**（≤5）だったため、残り全件（＝なし）を処理し、最終監査＋フル検証スイートを1回実行しました。以下が確定状態です。

- **未完了 downloads 件数（開始時）:** **0件**。マニフェスト上の `type: download` 項目は4件（`download-resume-template` P0／`download-cover-letter-template` P1／`download-housing-inspection-checklist` P1／`download-emergency-card` P1）で、**すべて `status: published`**（tools マイクロバッチ #3・#4 で公開済み）。planned/merged/review/excluded は0件。新規作成・更新・統合・レビュー・除外はいずれも該当なし（既公開のため）。
- **注記（カテゴリ構造）:** downloads 項目はマニフェスト上 `hub: tools` に属し、公開ページは `/downloads/*`（4ページ）。専用の `hub: downloads`／`category: downloads` は存在しない。tools ハブ完了（14件）に downloads 4件が含まれる。
- **最終 downloads ハブ監査（9項目すべて合格）:**
  1. マニフェスト最終状態＝4件すべて published（正確）。
  2. 各公開ダウンロードページは実ファイルに接続＝ブラウザ内 Blob で `.txt` を生成（サーバー保管ファイル不要・リンク動作OK）。`download-emergency-card` は公式ソース（Triple Zero 000／healthdirect）も掲示。
  3. ダウンロードファイルに個人情報なし＝テンプレは汎用文面。個人情報は localStorage のみ（サーバー送信なし・配布物に含まれない）。
  4. 非公式テンプレは明確にラベル＝レジュメ/カバーレターは「ひな型（記入例）・そのまま提出用ではない」と明記。
  5. 公式フォームの不適切な複製なし＝政府フォームは複製しておらず、テンプレ/チェックリストのみ。
  6. ファイル名・説明・更新日が正確＝ダウンロード名は ASCII（`resume-*.txt`／`cover-letter-*.txt`／`housing-inspection-checklist.txt`／`emergency-card.txt`）、各ページに用途・使い方・免責を掲載、`verifiedAt`（emergency-card）付与。
  7. プレースホルダー/壊れたダウンロードの公開なし＝4件すべて完全実装。
  8. 孤立した公開リソースなし＝レジストリ（`lib/tools/registry.ts`）経由で `/tools` ハブ・`RelatedToolsBox`・sitemap に自動掲載。
  9. カテゴリ一覧が正確＝4件が `categoryLabel: テンプレート` で `/tools` に列挙。
- **フル検証スイート（各1回・カテゴリ完了監査）:** `node --test scripts/tools.test.mjs`（36/36 pass）／`node --test scripts/content.test.mjs`（5/5 pass）／`validate:content`（0 error / 66 warning・dangling 0・重複 slug/path なし）／`validate:articles`（no article data errors）／`tsc --noEmit`（exit 0）／`lint`（0 error）／`build`（成功・`/downloads/*` 4ルートすべて `○ (Static)` としてプリレンダー・sitemap/RSS/構造化データ生成）。
- **修正1回（リトライ枠内）:** `lint` が共有フック `components/tools/useLocalStorageState.ts`（emergency-card／housing-inspection-checklist のダウンロードが localStorage で使用）で `react-hooks/set-state-in-effect` エラー1件を検出。マウント後ハイドレーションの `setValue` を関数更新に変更し、意図的な SSR セーフ・ハイドレーションとして当該行のみ `eslint-disable-next-line` を付与、不要になった `exhaustive-deps` ディレクティブを除去して解消（0 error）。残る `EightyEightDayCalculator.tsx` の未使用変数 warning は既存・downloads と無関係のため据え置き。
- **未解決の問題:** なし。
- **次カテゴリ/次項目:** **downloads カテゴリは4件すべて公開済みで完了・監査済み。** 本指示の範囲（downloads）を完了したため、ここで停止（別カテゴリには着手しない）。
- **変更ファイル（本チェックポイント）:** `components/tools/useLocalStorageState.ts`（lint 修正）、`CONTENT_MERGE_MAP.md`、`SOURCE_VERIFICATION_REPORT.md`、`BULK_PUBLISH_REPORT.md`、`BULK_PUBLISH_REMAINING.md`。マニフェスト・記事・ダウンロード実装への変更なし（既に全件公開済みのため）。

## チェックポイント（2026-08-02）: tools マイクロバッチ #4・最終（3件公開＋ハブ監査完了 / commit: feat: publish tools micro-batch 4 (final)）

tools（ツール・テンプレート）ハブの**残り3件**を公開し、**tools ハブを完了**しました。開始時点で tools の未完了は3件（≤4）だったため、**全件処理＋最終ハブ監査（フルビルド）**を実施しました。以下が確定状態です。

- **未完了 tools 件数（開始時）:** 3件（すべて planned・すべて `hub: tools`・すべて `type: download`）。既存公開は11件（バッチ#1〜#3）。3 ≤ 4 のため**全件処理**。
- **処理した3件（残り全件）:** `download-cover-letter-template`(P1), `download-housing-inspection-checklist`(P1), `download-emergency-card`(P1)。いずれも開始時 `status: planned` をマニフェストで確認済み。
- **実装方針（前バッチと同一）:** テキスト生成（ダウンロード/コピー/印刷用の直列化）を描画から分離し純粋ロジック `lib/tools/logic/download.mjs` に実装。`node --test` と TSX 双方から import。単体テストを付与。推計・記入例を公式判定として提示しない旨を各免責に明記。モバイル対応・キーボード操作可能（`<label>`/`role="tab"`/`role="progressbar"`/`aria-live`/フォーカスリング）。ダウンロードはブラウザ内 Blob 生成（サーバー送信なし）。個人情報は localStorage のみ。
- **公開した3件（すべて `hub: tools`・`category: download`・完全実装・プレースホルダーではない）:**
  - `download-cover-letter-template`（P1, download）— 接客/ファーム/倉庫/汎用の英文カバーレターのひな型（タブ切替・コピー・`.txt` DL）＋応募チャネル別（メール/店頭/SNS/応募フォーム）の短文（各コピー）。データ `lib/tools/data/cover-letter-templates.ts`。ひな型でありそのまま送信用ではない旨を明記（外部データなし）。関連記事 `cover-letter-guide`/`resume-guide`/`walk-in-resume`/`job-application-follow-up`/`job-search-websites`。
  - `download-housing-inspection-checklist`（P1, download）— シェアハウス内見の確認項目（費用/部屋/設備/安全/周辺）を種類別に。現地でチェック可（localStorage）＋印刷（`window.print()`）＋`.txt` DL/コピー。テキスト生成 `buildChecklistText`（`download.mjs`）、進捗は既存 `computeProgress`/`countCompleted`（`checklist.mjs`）を再利用。データ `lib/tools/data/housing-inspection-checklist.ts`。契約/ボンド/費用は契約書・各州テナント情報で確認する旨を明記。関連記事 `inspection-checklist`/`condition-report-guide`/`bond-rules-overview`/`housing-message-templates`/`share-house-rules`/`rental-scam-examples`。
  - `download-emergency-card`（P1, download）— オーストラリアの主な緊急・相談窓口（000・112・106・132 500・13 11 26・1800 022 222・13 11 14・131 444）を固定表示し、本人情報（保険・連絡先・アレルギー等）を入力・保存（localStorage）。印刷＋`.txt` DL/コピー。テキスト生成 `buildEmergencyCardText`（`download.mjs`）。データ `lib/tools/data/emergency-card.ts`。`verifiedAt: 2026-08-02`、`officialSources`=Triple Zero (000)／healthdirect（accessedAt 2026-08-02）。番号・制度は変わりうる旨、大使館/領事館は国籍により異なるため各自記入する旨を明記。関連記事 `gp-urgent-care-emergency`/`ambulance-costs-insurance`/`overseas-insurance-claim`/`consular-registration`/`bites-stings-wildlife`。
- **YMYL/推計の扱い:** 緊急カードは公式の代表番号を提示しつつ「番号・制度は変わりうる／緊急時は最新案内に従う」を明記し `verifiedAt`＋`officialSources` を付与。内見チェックリストは一般的な目安・契約/各州情報で確認と明記。カバーレターはひな型で職種/企業により最適形は異なると明記。ダウンロード・入力はブラウザ内のみ・サーバー送信なし。
- **単体テスト:** `scripts/tools.test.mjs` に `buildChecklistText`/`buildEmergencyCardText` のテストを追加し **計36ケース**（前32＋新4）全pass。
- **発見性・内部リンク:** 3件は登録レジストリ（`lib/tools/registry.ts`）に追加され、`/tools` ハブ・`RelatedToolsBox`（記事詳細）・`app/sitemap.ts` の `toolRoutes`（`getPublishedTools()` から生成）に**自動反映**（ナビ/サイトマップの追加編集は不要）。`ToolCategory` は既存の `"download"` を使用（型変更なし）。
- **content-manifest.yaml:** 3件を `status: planned` → `status: published` に更新。`manifest.generated.ts` 再生成。
- **最終 tools ハブ監査（本バッチで実施）:** レジストリ公開 **14件**／ページ **14件**（`app/tools/*` 10・`app/downloads/*` 4）／マニフェスト tools **14件すべて published**（tools 範囲に planned 残りなし）。**`npm run build` 成功**（`✓ Compiled successfully`・全ツール/ダウンロードルートが `○ (Static)` としてプリレンダー: `/tools` ハブ＋`/tools/*` 10＋`/downloads/*` 4）。`validate:content`（0 error / 66 warning・dangling 0・重複 slug/path なし）／`tsc --noEmit`（exit 0）／`validate:articles`（no article data errors）／`node --test`（36/36 pass）。既存の cannibalization 警告（`tools::download`／`tools::interactive-tool` の同一ハブ内グルーピング）は設計上の想定内で許容。
- **未解決の問題:** なし。
- **次カテゴリ/次項目:** **tools ハブは全14件公開で完了。** 本指示の範囲（tools）を完了したため、ここで停止（別カテゴリには着手しない）。
- **変更ファイル（本チェックポイント）:** `lib/tools/logic/download.mjs`（新設）、`lib/tools/data/{cover-letter-templates,housing-inspection-checklist,emergency-card}.ts`（新設）、`components/tools/{CoverLetterTemplateDownload,HousingInspectionChecklist,EmergencyCard}.tsx`（新設）、`app/downloads/{cover-letter-template,housing-inspection-checklist,emergency-card}/page.tsx`（新設）、`lib/tools/registry.ts`、`scripts/tools.test.mjs`、`lib/content/manifest.generated.ts`（再生成）、`whv-guide-content-plan/content-manifest.yaml`、`CONTENT_MERGE_MAP.md`、`SOURCE_VERIFICATION_REPORT.md`、`BULK_PUBLISH_REPORT.md`、`BULK_PUBLISH_REMAINING.md`。

## チェックポイント（2026-08-02）: tools マイクロバッチ #3（4件公開 / commit: feat: publish tools micro-batch 3）

tools（ツール・テンプレート）ハブの**次の4件**を公開しました（マイクロバッチ運用）。開始時点で tools の未完了は7件（>4）だったため、**通常のマイクロバッチ**として記録順の先頭4件のみを処理し、**最終ハブ監査（フルビルド）は実施していません**（残り3件のため次回に継続）。以下が確定状態です。

- **未完了 tools 件数（開始時）:** 7件（すべて planned・すべて `hub: tools`）。既存公開は7件（バッチ#1の3件＋#2の4件）。7 > 4 のため記録順の先頭4件のみ処理。
- **選定した4件（記録順の先頭4件）:** `tool-job-application-tracker`, `tool-farm-evidence-tracker`, `tool-return-home-checklist`, `download-resume-template`。いずれも開始時 `status: planned` をマニフェストで確認済み。
- **実装方針（前バッチと同一）:** 計算・集計・並び替えロジックを描画から分離し純粋ロジックを `.mjs`（`lib/tools/logic/`）で実装。`node --test` と TSX 双方から import。単体テストを付与。DRY のため日付検証を `date.mjs` に単一化し `second-visa.mjs` から再輸出（既存テスト/コンポーネント互換）。推計を公式判定（ビザ可否・税/法的助言）として提示しない旨を各免責に明記。モバイル対応・キーボード操作可能（`<label>`/`role="tab"`/`role="progressbar"`/`aria-live`/フォーカスリング）。結果は平易な日本語で説明。入力・記録はブラウザにのみ保存・サーバー送信なし。
- **公開した4件（すべて `hub: tools`・完全実装・プレースホルダーではない）:**
  - `tool-job-application-tracker`（P2, tracker）— 応募先（会社・職種・応募日・進捗・メモ）を記録し、ステータス別（応募済/連絡あり/面接/採用/不採用）に集計・並び替え。ロジック `summarizeApplications`/`sortApplications`（`lib/tools/logic/applications.mjs`）＋日付検証 `isValidIsoDate`（`date.mjs`）。localStorage 保存。求人紹介・採用の保証はしない旨を明記（外部データなし）。関連記事 `job-search-websites`/`facebook-job-groups`/`walk-in-resume`/`job-application-follow-up`。
  - `tool-farm-evidence-tracker`（P0, tracker）— セカンドビザ指定業務の証拠書類（給与明細・銀行入金・契約・写真等）の保有状況を種類別に記録＋任意メモ。既存 `computeProgress`/`countCompleted`（`checklist.mjs`）を再利用し揃い具合を集計。データ `lib/tools/data/farm-evidence.ts`。`verifiedAt: 2026-08-02`、`officialSources`=Home Affairs（Specified work／Second WHV 417）2件。**ビザ可否・証拠の十分性は保証せず移民局が判断**する旨を強い免責で明示（%は記録割合のみ）。関連記事 `farm-payslip-evidence`/`farm-employer-verification`/`88-day-calculation`/`second-visa-guide`/`specified-work-industries`/`farm-second-visa`。
  - `tool-return-home-checklist`（P1, checklist）— 退職・退去・車売却・税金・スーパー（DASP）などを時系列（2〜3ヶ月前／1ヶ月前／出発直前／帰国後）で整理。既存 `ChecklistBoard` を再利用。データ `lib/tools/data/return-home-checklist.ts`。`verifiedAt: 2026-08-02`。**自動通知は行わない**・期限は各公式/契約で確認する旨を明記。関連記事 `leaving-australia-checklist`/`close-services-before-leaving`/`final-pay-before-leaving`/`dasp-before-after-leaving`/`sell-car-timeline`/`keep-australian-bank-account`。
  - `download-resume-template`（P0, download）— 接客/ファーム/倉庫/IT の職種別に英文レジュメのひな型をタブ切替でプレビューし、クリップボードコピー＋`.txt` ダウンロード（ブラウザ内 Blob 生成・サーバー送信なし）。データ `lib/tools/data/resume-templates.ts`。ひな型（記入例）でありそのまま提出用ではない旨を明記。パス接頭辞は `/downloads/`。関連記事 `resume-guide`/`cover-letter-guide`/`walk-in-resume`/`hospitality-jobs-guide`。
- **YMYL/推計の扱い:** 証拠トラッカーは「記録割合のみ」「ビザ可否・証拠の十分性は保証しない」「移民局が判断」を明示。帰国前は目安・自動通知なし・期限は公式/契約で確認と明記。応募管理は求人紹介/採用の保証なし。レジュメはひな型で職種/企業により最適形は異なると明記。
- **単体テスト:** `scripts/tools.test.mjs` に applications/date のテストを追加し **計32ケース**（前26＋新6）全pass。
- **発見性・内部リンク:** 4件は登録レジストリ（`lib/tools/registry.ts`）に追加され、`/tools` ハブ・`RelatedToolsBox`（記事詳細）・`app/sitemap.ts` の `toolRoutes`（`getPublishedTools()` から生成）に**自動反映**（ナビ/サイトマップの追加編集は不要）。`ToolCategory` に `"tracker"`・`"download"` を追加。
- **content-manifest.yaml:** 4件を `status: planned` → `status: published` に更新。`manifest.generated.ts` 再生成（existing 47・planned 338）。
- **検証（通常バッチ・各1回）:** `node --test scripts/tools.test.mjs`（32/32 pass）／`validate:content`（0 error / 66 warning・dangling 0・重複 slug/path なし）／`tsc --noEmit`（exit 0）／`validate:articles`（no article data errors）。**フルビルドと最終ハブ監査は通常バッチのため未実施。** 既存の cannibalization 警告（`tools::interactive-tool`／`tools::download` 等の同一ハブ内グルーピング）は許容。
- **未解決の問題:** なし。
- **次カテゴリ/次項目:** tools 継続。**残り3件**（すべて `type: download`）: `download-cover-letter-template`(P1), `download-housing-inspection-checklist`(P1), `download-emergency-card`(P1)。次バッチは残り≤4のため**全件処理＋最終 tools ハブ監査（フルビルド）**を実施する。
- **変更ファイル（本チェックポイント）:** `lib/tools/logic/{date,applications}.mjs`（新設）、`lib/tools/logic/second-visa.mjs`（date.mjs へ委譲・再輸出）、`lib/tools/data/{farm-evidence,return-home-checklist,resume-templates}.ts`（新設）、`components/tools/{JobApplicationTracker,FarmEvidenceTracker,ResumeTemplateDownload}.tsx`（新設）、`app/tools/{job-application-tracker,farm-evidence-tracker,return-home-checklist}/page.tsx`＋`app/downloads/resume-template/page.tsx`（新設）、`lib/tools/{types.ts,registry.ts}`、`scripts/tools.test.mjs`、`lib/content/manifest.generated.ts`（再生成）、`whv-guide-content-plan/content-manifest.yaml`、`CONTENT_MERGE_MAP.md`、`SOURCE_VERIFICATION_REPORT.md`、`BULK_PUBLISH_REPORT.md`、`BULK_PUBLISH_REMAINING.md`。

## チェックポイント（2026-08-02）: tools マイクロバッチ #2（4件公開 / commit: feat: publish tools micro-batch 2）

tools（ツール・テンプレート）ハブの**次の4件**を公開しました（マイクロバッチ運用）。開始時点で tools の未完了は11件（>4）だったため、**通常のマイクロバッチ**として記録順の先頭4件のみを処理し、**最終ハブ監査（フルビルド）は実施していません**（残り7件のため次回に継続）。以下が確定状態です。

- **未完了 tools 件数（開始時）:** 11件（すべて planned・すべて `hub: tools`）。既存公開は3件（バッチ#1）。11 > 4 のため記録順の先頭4件のみ処理。
- **選定した4件（記録順の先頭4件）:** `tool-specified-work-region-checker`, `tool-farm-season-calendar`, `tool-weekly-budget-calculator`, `tool-resume-checklist`。いずれも開始時 `status: planned` をマニフェストで確認済み。
- **実装方針（前バッチと同一）:** 計算・判定・絞り込みロジックを描画から分離し純粋ロジックを `.mjs`（`lib/tools/logic/`）で実装。`node --test` と TSX 双方から import。単体テストを付与。公式閾値・データは出典明記、外部データが関わるものは `verifiedAt`＋`officialSources`。推計を公式判定（ビザ可否・税/法的助言）として提示しない旨を各免責に明記。モバイル対応・キーボード操作可能（`<label>`/`<fieldset>`/`role="progressbar"`/`aria-live`/フォーカスリング）。結果は平易な日本語で説明。
- **公開した4件（すべて `hub: tools`・完全実装・プレースホルダーではない）:**
  - `tool-specified-work-region-checker`（P0, lookup）— 郵便番号を入力し、公表されている「地域（regional Australia）」の郵便番号範囲に含まれるかを確認する**参照用**ツール。**ビザの可否・指定業務の該当性は判定しない**旨を強い免責で明示。範囲に含まれない＝対象外とは断定しない設計（誤った偽陰性を防止）。ロジック `checkPostcode`/`findPostcodeRegion`/`normalizePostcode`（`lib/tools/logic/postcode.mjs`）。データ `lib/tools/data/specified-work-postcodes.ts`（`POSTCODE_DATA_VERIFIED_AT: 2026-08-02`）。`verifiedAt: 2026-08-02`、`officialSources`=Home Affairs（Specified work／Second WHV 417）2件。関連記事 `specified-work-postcodes`/`specified-work-industries`/`88-day-calculation`/`second-visa-guide`/`farm-second-visa`/`six-month-specified-work`。
  - `tool-farm-season-calendar`（P0, lookup）— 州・作物・月からファームの繁忙期（収穫・作業が多い時期）の一般的な目安を検索。ロジック `filterSeasons`/`monthInSeason`（`lib/tools/logic/season.mjs`）。データ `lib/tools/data/farm-seasons.ts`。`verifiedAt: 2026-08-02`、`officialSources`=Harvest Trail Information Service。収穫時期は目安で年により前後する旨・求人は雇用主/公式で確認する旨を免責に明記。関連記事 `farm-season-calendar`/`harvest-trail-guide`/`specified-work-industries`/`crop-strawberry`/`crop-grape`/`farm-job-english`。
  - `tool-weekly-budget-calculator`（P1, calculator）— 家賃・交通・食費・通信・その他の週支出、無収入期間、初期費用を入力し、週/月の生活費と必要貯金額の目安を計算。ロジック `computeBudget`/`toAmount`/`toWholeNumber`（`lib/tools/logic/budget.mjs`・不正/負値を安全に0扱い）。入力は localStorage 保存。概算であり金融アドバイスではない旨を明記（外部公式データに依存しないため officialSources なし）。関連記事 `australia-living-cost`/`weekly-budget-template`/`emergency-fund`。
  - `tool-resume-checklist`（P1, checklist）— 英文レジュメの「入れるべき項目」と「入れないほうがよい項目（NG）」を自己チェック。既存 `ChecklistBoard`＋`computeProgress` を再利用。データ `lib/tools/data/resume-checklist.ts`。一般的な採用慣行の目安で職種/企業により異なる旨を明記（YMYL/外部データなし）。関連記事 `resume-guide`/`cover-letter-guide`/`walk-in-resume`/`job-search-websites`。
- **YMYL/推計の扱い:** 郵便番号チェッカーは「範囲に含まれるかの参照のみ」「ビザ可否・指定業務該当は判定しない」「範囲外＝対象外ではない」「対象は移民局が判断」を明示。ファームシーズンは目安・年変動あり・雇用主/公式で確認と明記。予算は概算・金融アドバイスではないと明記。全ツールで入力はブラウザにのみ保存・サーバー送信なし。
- **単体テスト:** `scripts/tools.test.mjs` に postcode/season/budget のテストを追加し **計26ケース**（前13＋新13）全pass。`package.json` の `test:tools` はバッチ#1で追加済み（変更なし）。
- **発見性・内部リンク:** 4件は登録レジストリ（`lib/tools/registry.ts`）に追加され、`/tools` ハブ・`RelatedToolsBox`（記事詳細）・`app/sitemap.ts` の `toolRoutes`（`getPublishedTools()` から生成）に**自動反映**（ナビ/サイトマップの追加編集は不要）。`ToolCategory` に `"lookup"` を追加。
- **content-manifest.yaml:** 4件を `status: planned` → `status: published` に更新。`manifest.generated.ts` 再生成（existing 47・planned 338）。
- **検証（通常バッチ・各1回）:** `test:tools`（26/26 pass）／`validate:content`（0 error / 66 warning・dangling 0・重複 slug/path なし）／`tsc --noEmit`（exit 0）／`validate:articles`（no article data errors）。**フルビルドと最終ハブ監査は通常バッチのため未実施。** 既存の cannibalization 警告（`tools::interactive-tool` 等の同一ハブ内グルーピング）は許容。
- **未解決の問題:** なし。
- **次カテゴリ/次項目:** tools 継続。**残り7件**。次は `tool-job-application-tracker`（P2）。以降の記録順: `tool-farm-evidence-tracker`(P0), `tool-return-home-checklist`(P1), `download-resume-template`(P0), `download-cover-letter-template`(P1), `download-housing-inspection-checklist`(P1), `download-emergency-card`(P1)。`download-*` の4件は `type: download` のため、実ファイル生成/配布方法の方針決定が前提。
- **変更ファイル（本チェックポイント）:** `lib/tools/logic/{postcode,season,budget}.mjs`（新設）、`lib/tools/data/{specified-work-postcodes,farm-seasons,resume-checklist}.ts`（新設）、`components/tools/{SpecifiedWorkRegionChecker,FarmSeasonSearch,WeeklyBudgetCalculator}.tsx`（新設）、`app/tools/{specified-work-region-checker,farm-season-calendar,weekly-budget-calculator,resume-checklist}/page.tsx`（新設）、`lib/tools/{types.ts,registry.ts}`、`scripts/tools.test.mjs`、`lib/content/manifest.generated.ts`（再生成）、`whv-guide-content-plan/content-manifest.yaml`、`CONTENT_MERGE_MAP.md`、`SOURCE_VERIFICATION_REPORT.md`、`BULK_PUBLISH_REPORT.md`、`BULK_PUBLISH_REMAINING.md`。

## チェックポイント（2026-08-02）: tools マイクロバッチ #1（3件公開・新カテゴリ初回 / commit: feat: publish tools micro-batch）

tools（ツール・テンプレート）ハブの**最初の3件**を公開しました（新規カテゴリの初回・マイクロバッチ運用）。開始時点で tools の未完了は14件（>3）だったため、**通常のマイクロバッチ**として記録順の先頭3件のみを処理し、**最終ハブ監査（フルビルド）は実施していません**（残り11件のため次回に継続）。本バッチは tools ハブの初回で、新カテゴリの基盤（logic/data/registry/共通コンポーネント/ページ/ナビ）整備を伴います。以下が確定状態です。

- **未完了 tools 件数（開始時）:** 14件（すべて planned・すべて `hub: tools`）。既存公開の tools は0件。14 > 3 のため記録順の先頭3件のみ処理。
- **選定した3件（記録順の先頭3件）:** `tool-arrival-checklist`, `tool-packing-checklist`, `tool-88-day-calculator`。いずれも開始時 `status: planned` であることをマニフェストで確認済み。
- **実装方針（各ツール）:** 計算・判定ロジックを描画から分離し、純粋ロジックは `.mjs`（`lib/tools/logic/`）として実装。`node --test` と TSX 双方から import。ロジックには単体テストを付与。公式閾値は出典を明記し、外部データが関わるものは `verifiedAt` と `officialSources` を付与。推計を公式判定（ビザ可否・税務助言・法的助言）として提示しない旨を各ツールの免責に明記。操作はモバイル対応・キーボード操作可能（`<label>`/`<fieldset>`/`role="progressbar"`/フォーカスリング）。結果は平易な日本語で説明。
- **公開した3件（すべて `hub: tools`・完全実装・プレースホルダーではない）:**
  - `tool-arrival-checklist`（P0, interactive-tool）— 到着後にやることを時系列（Day1／最初の1週間／落ち着いてから）で管理。完了状態を端末（localStorage）に保存し進捗率を表示。ロジック `computeProgress`/`countCompleted`（`lib/tools/logic/checklist.mjs`）。`verifiedAt: 2026-08-02`。関連記事 `arrival-checklist`/`first-30-days-roadmap`/`essential-australia-apps`。
  - `tool-packing-checklist`（P1, interactive-tool）— 気候・シーズン・仕事のファセットで項目を絞り込める持ち物リスト。絞り込み後の可視項目に対して進捗計算。ロジック `filterItems`/`itemMatchesFacets`。`verifiedAt: 2026-08-02`。関連記事 `packing-list`/`preparation-checklist`/`farm-work-packing`。
  - `tool-88-day-calculator`（P0, interactive-tool）— セカンドビザの勤務日を記録し、88日に対する進捗と証拠書類の有無を集計する**記録専用**ツール。ビザ可否・指定業務/地域の該当性は**判定しない**旨を強い免責で明示。ロジック `summarizeWorkDays`/`countWorkDays`/`isValidIsoDate`（`lib/tools/logic/second-visa.mjs`）。`verifiedAt: 2026-08-02`、`officialSources`=Home Affairs（Second WHV 417／Specified work）2件（accessedAt 2026-08-02）。関連記事 `88-day-calculation`/`six-month-specified-work`/`second-visa-guide`/`specified-work-industries`/`farm-second-visa`/`farm-payslip-evidence`。
- **YMYL/推計の扱い:** 88日ツールは「記録・集計のみ」「移民局が可否を判断」「正式な証拠にはならない」を明記。88日は構造的な一般要件の目安として提示し、対象業務・地域・証拠要件は各公式へ誘導（断定を回避）。全ツールで入力はブラウザにのみ保存・サーバー送信なしを明示。
- **単体テスト:** `scripts/tools.test.mjs`（13ケース）を追加し全pass。`package.json` に `test:tools` を追加。
- **発見性・内部リンク:** `/tools` ハブ（`getPublishedTools()` をカード列挙・ItemList/BreadcrumbList JSON-LD）を新設。Header ナビと Footer（便利ツール）に `/tools` を追加。記事詳細 `app/guides/[slug]/page.tsx` に `RelatedToolsBox`（`getToolsForArticle(slug)`）を追加し、関連記事から各ツールへ相互リンク。`app/sitemap.ts` に `/tools` と各ツールパスを追加。
- **基盤変更（新カテゴリ初回）:** `lib/tools/{types.ts,registry.ts,logic/*.mjs,data/*.ts}`、`components/tools/{ToolShell,ChecklistBoard,PackingChecklistTool,EightyEightDayCalculator,RelatedToolsBox,useLocalStorageState}`、`app/tools/{page,arrival-checklist,packing-checklist,88-day-calculator}` を新設。ツールは記事（`lib/content/articles`）ではないため `validate:articles` の対象外。
- **content-manifest.yaml:** 3件を `status: planned` → `status: published` に更新。`manifest.generated.ts` 再生成（existing 47・planned 338）。
- **検証（通常バッチ・各1回）:** `test:tools`（13/13 pass）／`validate:content`（0 error / 66 warning・dangling 0・重複 slug/path なし）／`tsc --noEmit`（exit 0）／`validate:articles`（no article data errors）。**フルビルドと最終ハブ監査は通常バッチのため未実施。** 既存の cannibalization 警告（`tools::interactive-tool` 等の同一ハブ内グルーピング）は許容。
- **未解決の問題:** なし。
- **次カテゴリ/次項目:** tools 継続。**残り11件**。次は `tool-specified-work-region-checker`（P0）。ただし本項目は**公式の郵便番号ライブデータ**に依存するため、データ源・更新日・出典の確保が前提（次回レビューで方針決定）。以降の記録順: `tool-farm-season-calendar`(P0), `tool-weekly-budget-calculator`(P1), `tool-resume-checklist`(P1), `tool-job-application-tracker`(P2), `tool-farm-evidence-tracker`(P0), `tool-return-home-checklist`(P1), `download-resume-template`(P0), `download-cover-letter-template`(P1), `download-housing-inspection-checklist`(P1), `download-emergency-card`(P1)。
- **変更ファイル（本チェックポイント）:** `lib/tools/*`（新設）、`components/tools/*`（新設）、`app/tools/*`（新設）、`scripts/tools.test.mjs`（新設）、`app/sitemap.ts`、`app/guides/[slug]/page.tsx`、`components/layout/{Header,Footer}.tsx`、`package.json`、`lib/content/manifest.generated.ts`（再生成）、`whv-guide-content-plan/content-manifest.yaml`、`CONTENT_MERGE_MAP.md`、`SOURCE_VERIFICATION_REPORT.md`、`BULK_PUBLISH_REPORT.md`、`BULK_PUBLISH_REMAINING.md`。

## チェックポイント（2026-08-02）: community マイクロバッチ #2（残り1件公開・ハブ完了 / commit: feat: complete community content batch）

community（友達・コミュニティ）ハブの**最後の1件**を公開し、**community ハブを完了（6/6）**しました。開始時点で community の未完了は1件（≤5）だったため、残り全件を処理し、**最終ハブ監査（フルビルド／テスト／Lint）を実施**しました。以下が確定状態です。

- **未完了 community 件数（開始時）:** 1件（`volunteering-guide`・planned・`hub: community`）。既存公開の community 記事は5件（バッチ#1）。1 ≤ 5 のため残り全件を処理。
- **分類:** 1件 **create**（新規スラッグ）。統合（merge）・リダイレクト・レビュー・除外・既存記事の分割は該当なし（新規追加のみ）。
- **公開した1件（`category: community`・`hub: community`・`verifiedAt: 2026-08-02`・完全公開・分類は create）:**
  - `volunteering-guide`（P3, social, id a346）— 意図＝オーストラリアでのボランティアの探し方と有給の『仕事（work）』との違い・安全確認／対象＝英語実践・友達づくり・地域参加を目的にボランティアを探す人。GoVolunteer（Volunteering Australia運営）・州のボランティアセンター・地域NPO/op shopでの探し方、ボランティアが無給であること、実態が雇用に近づくと賃金が必要になり得ること（Fair Work）、ワーホリビザの就労条件・Specified workとの関係で確認すべき点、住み込み型（work for accommodation）や個人情報/前払い要求への注意を整理。
- **就労との区別（ユーザー投稿と検証済みガイダンスの分離）:** SNS/コミュニティの募集はユーザー情報で無保証と明示し、団体の実在・条件は公式で確認するよう誘導。『無給でこの業務を』は実質的な労働（ただ働き）の可能性がある旨を警告し、Fair Work・移民局の公式へ接続。ビザ上のwork該当・Specified work該当は**断定せず**移民局（Home Affairs）で確認するよう明記。
- **ソース検証（公式一次情報・2026-08-02 ライブ確認）:** Fair Work Ombudsman｜Unpaid work（https://www.fairwork.gov.au/starting-employment/unpaid-work）／Department of Home Affairs｜Working Holiday visa (417)（https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417）／Volunteering Australia・GoVolunteer（https://govolunteer.com.au/）／Safe Work Australia｜Volunteers（https://www.safeworkaustralia.gov.au/safety-topic/managing-health-and-safety/volunteers）／Triple Zero 000。可変・YMYL要素（ビザ上の扱い・指定業務カウント可否・有給/無給の線引き）は断定せず各公式へ誘導。
- **孤立記事なし / 内部リンク:** `relatedSlugs` は公開/既存 slug のみ参照（`make-friends-australia`/`japanese-community-groups`/`culture-shock-australia`/`workplace-english`/`online-scams-cybersecurity`/`safety-emergency`）で dangling 0。`/community-guide` が公開 community 記事6件を自動列挙・Footer から到達可能。
- **基盤変更なし:** community カテゴリ基盤はバッチ#1で整備済み。本バッチは記事追加とマニフェスト status 更新のみ（`mockData.ts` への記事追加なし）。
- **content-manifest.yaml:** `volunteering-guide` を `status: planned` → `status: published` に更新。`manifest.generated.ts` 再生成。
- **最終ハブ監査（全て合格）:** `validate:articles`（community 6件・重複0・article data errors なし）／`tsc --noEmit`（exit 0）／`validate:content`（0 error / 66 warning・dangling 0）／`test:content`（5/5 pass）／`lint`（クリーン）／`build`（成功・`/community-guide` を静的プリレンダー・`/guides/[slug]` SSG に `volunteering-guide` 収録・sitemap に `/community-guide` 含む）。既存の cannibalization 警告（`community::social` 等の同一ハブ内グルーピング）は許容。
- **community ハブ状態:** 6件すべて published（planned/merged/review/excluded は 0）。`/community-guide` に全6件が表示され、薄い/下書きの公開ページなし。
- **未解決の問題:** なし。
- **次カテゴリ:** 他カテゴリは未着手（本タスクは community ハブ完了で終了）。
- **変更ファイル（本チェックポイント）:** `lib/content/articles/community.ts`、`lib/content/manifest.generated.ts`（再生成）、`whv-guide-content-plan/content-manifest.yaml`、`CONTENT_MERGE_MAP.md`、`SOURCE_VERIFICATION_REPORT.md`、`BULK_PUBLISH_REPORT.md`、`BULK_PUBLISH_REMAINING.md`。

## チェックポイント（2026-08-02）: community マイクロバッチ #1（5件公開・新カテゴリ初回 / commit: feat: publish community micro-batch）

community（友達・コミュニティ）ハブの**最初の5件**を公開しました（新規カテゴリの初回・マイクロバッチ運用）。開始時点で community の未完了は6件（>5）だったため、通常のマイクロバッチとして記録順の先頭5件のみを処理し、最終ハブ監査は実施していません（残り1件のため次回に継続）。本バッチは community ハブの初回で、新カテゴリの基盤整備を伴います。以下が確定状態です。

- **未完了 community 件数（開始時）:** 6件（すべて planned・すべて `hub: community`）。既存公開の community 記事は0件。6 > 5 のため記録順の先頭5件のみ処理。
- **選定した5件（記録順の先頭5件）:** `make-friends-australia`, `japanese-community-groups`, `homesickness-loneliness`, `culture-shock-australia`, `dating-safety-australia`。いずれも開始時 `status: planned` で、published/merged/archived/review/excluded ではないことをマニフェストで確認済み。
- **分類:** 5件すべて **create**（新規スラッグ）。統合（merge）・リダイレクト・レビュー・除外・既存記事の分割は該当なし（新規追加のみ）。
- **公開した5件（すべて `category: community`・`hub: community`・`verifiedAt: 2026-08-02`・完全公開・分類は全て create）:**
  - `make-friends-australia`（P1, social, id a341）— 意図＝ワーホリ中に友達を作る方法／対象＝新生活で人とのつながりが欲しい人。学校・職場・シェアハウス・Meetup・ボランティア・SNS等の出会い方と、初対面の安全（公共の場・予定共有・個人情報/金銭に注意）を整理。主観的助言中心で「合う/合わないは人による」と明示。公式: eSafety（Online dating）／Triple Zero 000。
  - `japanese-community-groups`（P1, social, id a342）— 意図＝日本人コミュニティ・Facebookグループの探し方と安全な使い方／対象＝日本語で情報交換したい人。「投稿はユーザー情報で無保証」「重要事項は移民局/ATO/Fair Work/州当局で裏取り」を明示。前払い要求・好条件すぎ・実物確認拒否・個人情報要求を危険サインとして提示。公式: Scamwatch（ACCC）／IDCARE 1800 595 160。
  - `homesickness-loneliness`（P1, wellbeing, id a343）— 意図＝ホームシック・孤独への対処／対象＝海外生活でつらさを感じる人。生活リズム・つながり・適度な連絡を助言しつつ、つらさが続く場合は専門窓口へ、緊急時は000へ誘導。相談先の電話番号を明記（YMYL＝断定を回避）。公式: Lifeline 13 11 14／Beyond Blue 1300 22 4636／healthdirect Mental health 1800 022 222。
  - `culture-shock-australia`（P2, social, id a344）— 意図＝カルチャーショックと慣れ方／対象＝豪州生活の違いに戸惑う人。文化の傾向は一般化で地域・個人差が大きい旨を明示。労働条件・賃貸ルールなど権利事項は「慣習」でなく公式・検証済み記事で確認するよう誘導。公式: Fair Work Ombudsman（Visa holders and migrants）。
  - `dating-safety-australia`（P2, safety, id a345）— 意図＝デーティングアプリ・出会いの安全対策／対象＝豪州で恋愛・出会いを探す人。個人情報の守り方・初対面の鉄則・同意（consent）・ロマンス詐欺の見分け方・緊急/被害時の連絡先を記載。オンラインの相手への送金/身分証/私的写真の提供を明確に禁止として警告。公式: eSafety（Online dating）／Scamwatch（Relationship scams）／1800RESPECT 1800 737 732／Triple Zero 000。
- **UGCと検証済みガイダンスの区別:** コミュニティ/SNSの投稿はユーザー情報で無保証と明示し、法・ビザ・税・労働・賃貸などは検証済みエバーグリーン記事や公式一次情報へリンク。対話機能は既存フォーラム `/community` として案内（未実装機能を実在するかのように見せない）。会員数・投稿・レビュー・イベント等の架空の活動は掲載しない。
- **安全・プライバシー・詐欺対策・モデレーション:** 初対面の安全、個人情報の最小化、ロマンス詐欺、同意、緊急/被害時の連絡先（000／1800RESPECT／Scamwatch／IDCARE）を各記事に明記。
- **新カテゴリ整備（travel/return-home 前例に準拠）:** `ArticleCategory` に `community` 追加、`lib/content/articles/community.ts` 新規モジュール、`index.ts` 配線、`hubs.ts` の `CATEGORY_TO_HUB` に `community: "community"`、`mockData.ts` にカテゴリラベル `友達・コミュニティ`（記事は追加せず）、`app/community-guide/page.tsx` 新設（既存フォーラム `/community` と衝突回避のため `/community-guide` を採用）、`GuideCategoryPage` に任意 `routePath` prop 追加（パンくず/canonical を正しく `/community-guide` に）、`sitemap.ts`・Footer に `/community-guide` 追加。
- **孤立記事なし / 内部リンク:** `/community-guide` が公開 community 記事5件を自動列挙・Footer からも到達可能。`relatedSlugs` は公開/既存 slug のみ参照（未公開の `volunteering-guide` は含めず dangling 回避）。既存の `japanese-community-groups`（jobs.ts 参照）・`dating-safety-australia`（visa.ts 参照）への未解決参照が本公開で解決。
- **content-manifest.yaml:** 該当5件を `status: planned` → `status: published` に更新。`volunteering-guide` は `planned` のまま。`manifest.generated.ts` 再生成（planned 5件減）。
- **mockData への記事追加なし:** カテゴリラベルのみ追加。記事本文は Community モジュールのみに追加。
- **検証（マイクロバッチ範囲・各1回・リトライ0回）:** `validate:articles`（重複 slug/パス/エクスポート 0・community 5件・`OK: no article data errors`。ARTICLE_ORDER omission は既存仕様の warn のみ）、`tsc --noEmit` クリーン（exit 0）、`validate:content` 0 error / 66 warning（想定内の cannibalization のみ・dangling 0）。
  ※フルビルド/テスト/lint/構造化データ監査は community ハブ完了時（残り5件以下の最終監査）にまとめて実施予定。
- **残り community slug（1件・planned のまま）:** `volunteering-guide`（P3, social）。
- **最初の未完了 community slug: `volunteering-guide`**（次回はここから再開。残り1件 ≤ 5 ＝次回は community ハブ最終監査を実施）。
- **次のバッチ: community（`volunteering-guide` から継続・残り1件で最終監査）。** ※本セッションは community の先頭5件のみ処理し、他カテゴリには着手しない。
- **変更ファイル（本チェックポイント）:** `lib/content/articles/community.ts`（新規）、`lib/content/articles/index.ts`、`types/article.ts`、`lib/content/hubs.ts`、`lib/mockData.ts`、`components/articles/GuideCategoryPage.tsx`、`app/community-guide/page.tsx`（新規）、`app/sitemap.ts`、`components/layout/Footer.tsx`、`lib/content/manifest.generated.ts`（再生成）、`whv-guide-content-plan/content-manifest.yaml`、`CONTENT_MERGE_MAP.md`、`SOURCE_VERIFICATION_REPORT.md`、`BULK_PUBLISH_REPORT.md`、`BULK_PUBLISH_REMAINING.md`。

## チェックポイント（2026-08-02）: return-home マイクロバッチ #3（残り2件公開・ハブ完了 / commit: feat: complete return home content batch）

return-home（帰国準備）ハブの**最後の2件**を公開し、**return-home ハブを完了（12/12）**しました。開始時点で return-home の未完了は2件（≤5）だったため、残り全件を処理し、**最終ハブ監査（フルビルド／テスト／Lint）を実施**しました。以下が確定状態です。

- **未完了 return-home 件数（開始時）:** 2件（すべて planned・すべて `hub: return-home`）。既存公開の return-home 記事は10件（バッチ#1＝5件、バッチ#2＝5件）。2 ≤ 5 のため残り全件を処理。
- **分類:** 2件とも **create**（新規スラッグ）。統合（merge）・リダイレクト・レビュー・除外・既存記事の分割は該当なし（新規追加のみ）。
- **公開した2件（すべて `category: return-home`・`hub: return-home`・`verifiedAt: 2026-08-02`・完全公開・分類は全て create）:**
  - `reverse-culture-shock`（P2, wellbeing, id a339）— 意図＝帰国後の逆カルチャーショックの乗り越え方とキャリア再始動（帰国後中心）／対象＝帰国後に居心地の悪さ・無気力を感じる人。現象の理解・症状/経過・生活立て直し・つながり・経験の棚卸し・小さく再始動を整理。つらさが続く場合の相談を明記。処理日数・費用等の断定なし。公式: healthdirect Mental health／Beyond Blue／Lifeline。`use-wh-experience-in-resume`（履歴書の書き方）とは差別化（本記事は感情・ウェルビーイング＋キャリア再始動の考え方）。
  - `australian-police-check-after-return`（P3, how-to, id a340）— 意図＝帰国後・海外から豪州の無犯罪証明（police check）を取得する方法（帰国後中心）／対象＝他国のビザ・移住・就労で豪州の警察証明が必要な人。海外申請ルート（AFPのNational Police Check、指紋付きの要否）とACIC名前ベースとの違い・目的選択・有効期限を整理。手数料・処理日数・有効期限は断定せずAFP/ACIC公式と提出先要件へ。公式: AFP National police checks／ACIC National Police Checking Service。`police-check-guide`（在豪中のACIC名前ベース）とは差別化（本記事は海外/AFP指紋ルート）。
- **ソース検証:** 帰国後に変動しうる情報（相談の目安・取得手順・費用・処理日数・有効期限）は断定せず、健康・警察の各公式（healthdirect／Beyond Blue／Lifeline／AFP／ACIC）へ誘導。緊急時は居住国の連絡先を使う旨を警告に明記。
- **最終ハブ監査（全て合格）:** `validate:articles`（return-home 12件・重複0・article data errors なし）／`tsc --noEmit`（exit 0）／`validate:content`（0 error / 66 warning・dangling 0）／`test:content`（5/5 pass）／`lint`（クリーン）／`build`（成功・`/return-home` を静的プリレンダー・sitemap に `/return-home` 含む）。既存の cannibalization 警告（return-home::how-to 等の同一ハブ内グルーピング）は許容。
- **return-home ハブ状態:** 12件すべて published（planned/merged/review/excluded は 0）。`/return-home` に全12件が表示され、薄い/下書きの公開ページなし。
- **未解決の問題:** なし。
- **次カテゴリ:** 他カテゴリは未着手（本タスクは return-home ハブ完了で終了）。

## チェックポイント（2026-08-02）: return-home マイクロバッチ #2（5件公開 / commit: feat: publish return home micro-batch 2）

return-home（帰国準備）ハブの続き5件を公開しました（マイクロバッチ運用）。開始時点で return-home の未完了は7件（>5）だったため、通常のマイクロバッチとして記録順の先頭5件のみを処理し、最終ハブ監査は実施していません（残り2件のため次回に継続）。以下が確定状態です。

- **未完了 return-home 件数（開始時）:** 7件（すべて planned・すべて `hub: return-home`）。既存公開の return-home 記事は5件（バッチ#1）。
- **選定した5件（記録順の先頭5件）:** `bond-refund-before-leaving`, `sell-car-timeline`, `send-luggage-to-japan`, `keep-australian-bank-account`, `use-wh-experience-in-resume`。いずれも開始時 `status: planned` で、published/merged/archived/review/excluded ではないことをマニフェストで確認済み。
- **分類:** 5件すべて **create**（新規スラッグ）。統合（merge）・リダイレクト・レビュー・除外・既存記事の分割は該当なし（新規追加のみ）。
- **公開した5件（すべて `category: return-home`・`hub: return-home`・`verifiedAt: 2026-08-02`・完全公開・分類は全て create）:**
  - `bond-refund-before-leaving`（P1, housing, id a334）— 意図＝退去とBond返金を出国に間に合わせる段取り（出国前中心）／対象＝帰国前に賃貸を退去する人。退去通知の逆算・原状回復と最終Inspection・州の預託機関（RBO/RTBA/RTA）への返金申請・間に合わない場合に海外から手続きする備えを整理。通知日数・上限・差引の可否は断定せず州当局へ。公式: NSW Government（Renting）／Consumer Affairs Victoria／RTA QLD。
  - `sell-car-timeline`（P1, transport, id a335）— 意図＝車を売り切る出品時期の逆算（出国前）／対象＝帰国前に車を手放す人。出品開始の目安（3〜4週間前）・RWC/名義変更/着金の所要時間・保険/登録の解約と返金の順番（引き渡し完了→解約）・売れ残り時の買取/下取りへの切替締切。RWC要否・返金額は断定せず州当局へ。売り方の手順は既存 `sell-car-before-leaving` に接続（カニバリ回避＝本記事はスケジュールに限定）。公式: Transport for NSW／VicRoads／Queensland Government。
  - `send-luggage-to-japan`（P2, comparison, id a336）— 意図＝荷物を日本へ送る方法の比較／対象＝帰国時に荷物を送る人。預け荷物/国際郵便/クーリエ/船便・別送品の使い分け、禁制品（豪州側＝ABF・日本側＝税関）、日本到着時の関税・別送品申告を整理。送料・日数・関税・免税範囲は断定せず各社/ABF/日本税関へ。公式: Australia Post（Sending overseas）／Australian Border Force（Leaving Australia）／Japan Customs。
  - `keep-australian-bank-account`（P1, finance, id a337）— 意図＝帰国後に口座を『残す』場合の注意点／対象＝再渡航・受取待ちで口座を維持する人。維持費・休眠口座（ASIC未請求金への移管）・外国居住者としての利子課税/源泉徴収・海外住所とSMS認証手段の維持を整理。手数料/税率は断定せず銀行/ATO/MoneySmartへ。既存 `close-bank-account-before-leaving`（閉じる/残すの判断）と差別化＝本記事は『残すなら』の注意点に限定。公式: ASIC MoneySmart（Unclaimed money）／ATO（Leaving Australia）。
  - `use-wh-experience-in-resume`（P1, career, id a338）— 意図＝ワーホリ経験を帰国後の就活で活かす／対象＝帰国後に就職・転職する人。英語での就労・具体スキル・数字の実績・適応力の見せ方、在職中のReferee/推薦状/在職証明の確保（出国前アクション）、Payslip等の記録保存、面接での『課題→行動→結果』化。採用を保証しない旨を明記（YMYL外の一般的助言）。公式: Fair Work Ombudsman（Pay slips and record-keeping＝在職の証明）。
- **出国前/出国後アクションの区別:** 退去通知・清掃・車の引き渡し・解約手配・Referee確保・記録保存は出国前、Bond返金や紛争処理・車の保険/登録の返金・荷物の到着通関・口座の維持管理は出国後（または海外から）と明確に分離。受取口座・電話番号・証拠・連絡先を残す重要性を warnings で注意喚起。
- **可変情報の非断定:** 通知日数・Bond上限/差引・RWC要否・登録/保険の返金・送料/日数/関税・口座維持費/利子課税は断定せず、確認日 2026-08-02 を明記し州当局/ABF/日本税関/銀行/ATO/MoneySmart/Fair Work へ誘導。構造的事実（休眠口座→ASIC移管、名義変更完了後に保険解約 等）はリポジトリの既存検証済み記事（`bond-rules-overview`/`sell-car-before-leaving`/`close-bank-account-before-leaving`/`rego-ctp-rwc`）と整合。
- **孤立記事なし / 内部リンク:** `relatedSlugs` は公開/既存 slug と本バッチ・バッチ#1の公開 slug のみ参照（未公開 planned の `reverse-culture-shock`/`australian-police-check-after-return` は含めず dangling 回避）。参照先（`bond-rules-overview`/`bond-refund-dispute`/`condition-report-guide`/`ending-tenancy-notice`/`housing-guide`/`sell-car-before-leaving`/`vehicle-transfer-by-state`/`rego-ctp-rwc`/`car-insurance-comparison`/`cars-guide`/`post-office-courier`/`send-money-to-japan`/`close-bank-account-before-leaving`/`bank-account-guide`/`job-reference-guide`/`cover-letter-guide`/`workplace-english`/`ielts-pte-after-wh` など）は全て公開/既存で解決。`/return-home` カテゴリページが公開10件を自動列挙し Footer からも到達可能。
- **基盤変更なし:** return-home カテゴリ基盤はバッチ#1で整備済み。本バッチは記事追加とマニフェスト status 更新のみ（`mockData.ts` への記事追加なし）。
- **content-manifest.yaml:** 該当5件を `status: planned` → `status: published` に更新。`manifest.generated.ts` 再生成。
- **検証（マイクロバッチ範囲・各1回）:** `validate:articles`（重複 slug/パス/エクスポート 0・return-home 10件・`OK: no article data errors`。ARTICLE_ORDER omission は既存仕様の warn のみ）、`tsc --noEmit` クリーン（exit 0）、`validate:content` 0 error / 66 warning（想定内の cannibalization のみ・dangling 0）。修正リトライは発生せず（0回）。
  ※フルビルド/テスト/lint/構造化データ監査は return-home ハブ完了時（残り5件以下の最終監査）にまとめて実施予定。
- **残り return-home slug（2件・すべて planned のまま）:** `reverse-culture-shock`（P2, wellbeing）, `australian-police-check-after-return`（P3, how-to）。
- **最初の未完了 return-home slug: `reverse-culture-shock`**（次回はここから再開。残り2件＝次回は return-home ハブ最終監査を実施）。
- **次のバッチ: return-home（`reverse-culture-shock` から継続・残り2件で最終監査）。** ※本セッションは return-home の続き5件のみ処理し、他カテゴリには着手しない。
- **変更ファイル（本チェックポイント）:** `lib/content/articles/return-home.ts`、`lib/content/manifest.generated.ts`（再生成）、`whv-guide-content-plan/content-manifest.yaml`、`CONTENT_MERGE_MAP.md`、`SOURCE_VERIFICATION_REPORT.md`、`BULK_PUBLISH_REPORT.md`、`BULK_PUBLISH_REMAINING.md`。
- **未解決の問題: なし。** （ATO の DASP/Leaving Australia、ABF、Australia Post、日本税関の各ページは可変情報の一次情報として引用。具体額・日数・税率・要否は断定せず各公式へ誘導。構造的事実はリポジトリの既存検証済み記事と整合させて記載。）

## チェックポイント（2026-08-02）: return-home マイクロバッチ #1（5件公開 / commit: feat: publish return home micro-batch）

return-home（帰国準備）ハブの最初の5件を公開しました（新規カテゴリの初回・マイクロバッチ運用）。開始時点で return-home は12件（>5）が残っていたため、通常のマイクロバッチとして記録順の先頭5件のみを処理し、最終ハブ監査は実施していません（残り7件のため次回以降に継続）。以下が確定状態です。

- **未完了 return-home 件数（開始時）:** 12件（すべて planned・すべて `hub: return-home`）。既存公開の return-home 記事は0件（本バッチが return-home ハブの初回）。
- **選定した5件（記録順の先頭5件）:** `leaving-australia-checklist`, `final-pay-before-leaving`, `early-tax-return-departing`, `dasp-before-after-leaving`, `close-services-before-leaving`。いずれも開始時 `status: planned` で、published/merged/archived/review/excluded ではないことを確認済み。
- **分類:** 5件すべて **create**（新規スラッグ）。統合（merge）・リダイレクト・レビュー・除外・既存記事の分割は該当なし（本バッチは新規追加のみ）。
- **公開した5件（すべて `category: return-home`・`hub: return-home`・`verifiedAt: 2026-08-02`・完全公開・分類は全て create）:**
  - `leaving-australia-checklist`（P0, checklist, id a329）— 意図＝帰国前後にやること全体の俯瞰／対象＝帰国が決まったワーホリ。仕事・住居・車・税金・Super・銀行・通信・郵便を**出国前 / 出国後**に分けて時系列で整理。口座やSIMの早すぎる解約を警告（税金還付・DASPの受取に必要）。処理期間・還付額・税額は断定せず各公式へ。公式: ATO（税・DASP・Leaving Australia）／Fair Work（Final Pay）／Australia Post（郵便転送）。
  - `final-pay-before-leaving`（P0, finance, id a330）— 意図＝退職時の最終給与の確認（**出国前**アクション）／対象＝帰国前に退職する人。Final Pay に含まれるもの（未払賃金・未消化の年次有給＋leave loading・解雇予告手当）と含まれないもの（病気/介護休暇は買取なし）、支払時期（多くのアワードで最終日から7日以内・規定なき場合は Fair Work Act で最低月1回）。未払いは Fair Work へ。金額は断定せず公式へ。公式: Fair Work（Final pay／Visa holders and migrants）。
  - `early-tax-return-departing`（P1, tax, id a331）— 意図＝年度途中帰国のタックスリターンの選択肢／対象＝6/30を待たず帰国する人。原則は翌7/1以降に通常申告（帰国後も可）、ATO の条件を満たす場合のみ早期申告が可能という2経路を提示。myGov/ATO 連携・Income statement の Tax Ready・還付受取用の豪州口座維持が必要。口座を早く閉じない旨を警告。金額・処理期間は断定せず ATO へ。公式: ATO（Leaving Australia／Lodging before you leave）。
  - `dasp-before-after-leaving`（P0, how-to, id a332）— 意図＝DASP申請のタイミング／対象＝Super を払い戻したい人。DASP は**出国後かつビザ失効後**にのみ申請可能（＝出国後アクション）と明確化。出国前は Super の把握・記録保管・口座解約回避を、出国後は ATO の DASP オンラインで申請（必要書類：パスポート・ビザ・TFN・ファンド情報）。WHM への高い源泉税率は具体%を断定せず ATO へ誘導。公式: ATO（DASP）。
  - `close-services-before-leaving`（P1, checklist, id a333）— 意図＝解約・変更するサービスの一覧（**出国前**中心）／対象＝帰国準備中の人。SIM/携帯・ジム・サブスク・保険（OSHC/OVHC・自動車）・光熱費/インターネットの契約条件（通知期間・解約金・ロックイン）を確認。銀行2FAやATOに必要な電話番号・還付受取用口座は早すぎる解約を警告。金額・違約金は各社公式へ。公式: ACCC（消費者保証）／各プロバイダー。
- **出国前/出国後アクションの区別:** 各記事で「出国前にやること（Final Pay確認・税務準備・解約手配・記録保管）」と「出国後にやること（DASP申請・場合により帰国後のタックスリターン・口座/SIMの最終解約）」を明確に分離。早すぎる口座/SIM/Super口座の解約が還付・DASP受取を妨げる点を warnings で注意喚起。
- **可変情報の非断定:** 処理期間・還付額・DASP税率・各種手数料・税務上の結果は断定せず、確認日 2026-08-02 を明記し ATO/Fair Work/ACCC 等の各公式へ誘導。Fair Work の Final pay（含まれる/含まれない項目・支払時期）はライブ取得で確認済みの構造的事実として記載。
- **孤立記事なし / 内部リンク:** `relatedSlugs` は公開/既存 slug と本バッチの新規5件のみ参照（未公開 planned の `bond-refund-before-leaving`/`sell-car-timeline`/`keep-australian-bank-account` 等は含めず dangling 回避）。参照先（`tax-return-guide`/`dasp-refund`/`sim-guide`/`super-guide`/`termination-final-pay`/`underpayment-unpaid-wages`/`working-rights`/`payslip-guide`/`whm-tax-rates`/`income-statement-tax-ready`/`mygov-ato-linking`/`superannuation-basics`/`send-money-to-japan`/`bank-account-guide`/`opening-hours-holidays` など）は全て公開/既存で解決。`/return-home` カテゴリページが公開5件を自動列挙し Footer からも到達可能。
- **新カテゴリ整備（travel の前例に準拠）:** `types/article.ts` の `ArticleCategory` に `"return-home"` 追加、`lib/content/articles/index.ts` に import と配列追加、`lib/content/hubs.ts` の `CATEGORY_TO_HUB` に `"return-home": "return-home"` 追加、`lib/mockData.ts` の `articleCategories` にラベル `帰国準備` 追加、`app/return-home/page.tsx`（`GuideCategoryPage category="return-home"`）新設、`app/sitemap.ts` staticRoutes に `/return-home` 追加、`components/layout/Footer.tsx` に「帰国準備・次のキャリア」リンク追加。
- **content-manifest.yaml:** 該当5件を `status: planned` → `status: published` に更新。`manifest.generated.ts` 再生成。
- **検証（マイクロバッチ範囲・各1回）:** `validate:articles`（重複 slug/パス/エクスポート 0・return-home 5件・`OK: no article data errors`。ARTICLE_ORDER omission は既存仕様の warn のみ）、`tsc --noEmit` クリーン（exit 0）、`validate:content` 0 error / 66 warning（想定内の cannibalization のみ・dangling 0）。修正リトライは発生せず（0回）。
  ※フルビルド/テスト/lint/sitemap/構造化データ監査は return-home ハブ完了後（残り5件以下時の最終監査）にまとめて実施予定。
- **残り return-home slug（7件・すべて planned のまま）:** `bond-refund-before-leaving`（P1）, `sell-car-timeline`（P1）, `send-luggage-to-japan`（P2）, `keep-australian-bank-account`（P1）, `use-wh-experience-in-resume`（P1）, `reverse-culture-shock`（P2）, `australian-police-check-after-return`（P3）。
- **最初の未完了 return-home slug: `bond-refund-before-leaving`**（次回はここから再開）。
- **次のバッチ: return-home（`bond-refund-before-leaving` から継続・残り7件）。** ※本セッションは return-home の先頭5件のみ処理し、他カテゴリには着手しない。
- **変更ファイル（本チェックポイント）:** `lib/content/articles/return-home.ts`（新規）、`lib/content/articles/index.ts`、`lib/content/hubs.ts`、`types/article.ts`、`lib/mockData.ts`、`app/return-home/page.tsx`（新規）、`app/sitemap.ts`、`components/layout/Footer.tsx`、`lib/content/manifest.generated.ts`（再生成）、`whv-guide-content-plan/content-manifest.yaml`、`CONTENT_MERGE_MAP.md`、`SOURCE_VERIFICATION_REPORT.md`、`BULK_PUBLISH_REPORT.md`、`BULK_PUBLISH_REMAINING.md`。
- **未解決の問題: なし。** （ATO の DASP/Leaving Australia 各ページは JS レンダリングで本文抽出不可だったが 404 ではなく 200・URL は有効。可変情報は断定せずリポジトリの既存検証済み事実に基づき記載し、変動値は ATO へ誘導。）

## チェックポイント（2026-08-02）: travel マイクロバッチ #2 = travel ハブ完了（残り4件を全公開＋最終ハブ監査 / commit: feat: complete travel content batch）

travel（旅行）ハブの残り全4件を公開し、**travel ハブを完了**しました（9/9 published・残り0件）。開始時点で未完了の travel は4件（≤5）だったため、通常のマイクロバッチではなく残り全件を処理し、**最終ハブ監査**を実施しました。以下が確定状態です。

- **未完了 travel 件数（開始時）:** 4件（すべて planned・すべて `hub: travel`）。既存公開 travel 記事は5件（バッチ#1）。
- **処理した4件（残り全件）:** `great-barrier-reef-guide`（P3）, `uluru-guide`（P3）, `tasmania-trip-guide`（P3）, `public-holiday-travel`（P2）。いずれも開始時 `status: planned` で、published/merged/archived/review/excluded でないことを確認済み。
- **分類:** 4件すべて **create**（新規スラッグ）。統合（merge）・リダイレクト・レビュー・除外・既存記事の分割は該当なし（新規追加のみ）。
- **公開した4件（すべて `category: travel`・`hub: travel`・`intent: travel`・`verifiedAt: 2026-08-02`・完全公開・分類は全て create）:**
  - `great-barrier-reef-guide`（P3, travel, id a325）— 目的地＝グレートバリアリーフ（ケアンズ拠点）／対象＝リーフ旅行を計画する人。玄関口・日帰りツアーの選び方・ベストシーズン（乾季）・海の安全（有毒クラゲ/サイクロン）・海洋公園の保護ルール。料金・催行・海況は断定せず公式へ。公式: GBRMPA／Tourism Australia／BOM（警報）／healthdirect（marine stings）。
  - `uluru-guide`（P3, travel, id a326）— 目的地＝ウルル・カタジュタ国立公園（NT）／対象＝ウルルへ行く人。空路/車のアクセス・入園パス・砂漠の季節と安全・文化的配慮（登山は2019年恒久禁止・撮影禁止エリア）。料金・開園は断定せず国立公園公式へ。公式: Parks Australia（Uluṟu）／NT Government（運転）／BOM（気候）／Tourism Australia。
  - `tasmania-trip-guide`（P3, travel, id a327）— 目的地＝タスマニア周遊／対象＝島を車で周遊する人。玄関口（ホバート/ローンセストン）・レンタカー中心・周遊日数・国立公園パス・冷涼な気候と山の天候急変。料金・空席・道路状況は断定せず公式へ。公式: Tasmania Parks and Wildlife Service／Spirit of Tasmania／BOM（Tas）／Discover Tasmania。
  - `public-holiday-travel`（P2, travel, id a328）— 意図＝州別の祝日・スクールホリデーの調べ方／対象＝混雑期を避けたい/備えたい人。州でバラバラの日程・混雑期（夏休み/連休/学期間）・宿/航空券/レンタカーの高騰・祝日の営業短縮・対策（時期を外す/早期予約）。日付は年/州で変動と明記し公式へ。公式: australia.gov.au（Public holidays）／Fair Work Ombudsman／Tourism Australia。
- **旅程ガイダンスと可変情報の区別:** 各記事で「モデルルート・季節傾向・予約や計画の考え方（itinerary/プランニング）」と「実際の料金・時刻・空席・海況・天気・警報・ツアー催行・入園料・祝日日程（changeable）」を明確に分離。changeable は具体額・便・時刻・許可・入場条件を断定せず、確認日 2026-08-02 を明記し各公式へ誘導。費用は「例・レンジ」としてのみ提示。
- **旅行記事の要件充足:** 目的地と対象読者の明示／主要な問いへの冒頭回答／推奨日数・移動手段・ルート順・主要スポット・季節・予約リスク・運転距離・安全の該当項目を記載／ライブ価格・空席・時刻・許可・入場条件は不記載（公式へ）。
- **孤立記事なし / 内部リンク:** `relatedSlugs` は公開/既存 slug のみ参照（`area-cairns`/`east-coast-route`/`australia-travel-seasons`/`safety-emergency`/`state-nt-guide`/`australia-road-trip-guide`/`camping-free-camps`/`state-tas-guide`/`area-hobart`/`cars-guide`/`opening-hours-holidays`/`domestic-flight-guide`/`working-holiday-budget`）。dangling 0。travel カテゴリページ（`app/travel/page.tsx`）が公開 travel 記事9件を自動列挙し、Footer からも到達可能。
- **content-manifest.yaml:** 該当4件を `status: planned` → `status: published` に更新。`manifest.generated.ts` 再生成（planned 338）。
- **最終 travel ハブ監査（残り≤5のため実施）:**
  - **全 travel 項目が最終状態:** マニフェストの `hub: travel` 集計＝**9 published・0 planned/merged/review/excluded**。
  - **一意の目的地/旅程インテント:** 9件は季節・国内線・ロードトリップ・キャンプ・東海岸・GBR・ウルル・タスマニア・祝日混雑と、それぞれ異なる目的地/意図でカニバリなし（`travel::travel` の warn は同一ハブ集約であり許容）。
  - **可変情報の限定と確認日:** 全記事で changeable を断定せず公式へ誘導し `verifiedAt` を明記。
  - **内部リンク/カテゴリ列挙:** `/travel` が9件を列挙。sitemap に4新規 slug を含む（`grep -c` = 4）。
  - **薄い/下書きの公開ページなし:** 全9件が完全公開（content/steps/keyFacts/tips/warnings/officialSources 揃い）。
- **検証（全スイート各1回）:** `validate:articles`（travel 9・重複0・`OK: no article data errors`。ARTICLE_ORDER omission は既存仕様の warn）、`tsc --noEmit` クリーン（exit 0）、`validate:content` 0 error / 66 warning（想定内の cannibalization のみ・dangling 0）、`test:content` 5/5 pass、`lint` クリーン、`build` exit 0（`/guides/[slug]` に新規4 slug をプリレンダー・`/sitemap.xml` 生成）。修正リトライは発生せず（0回）。
- **残り travel slug:** **0件**（travel ハブ完了）。
- **次カテゴリは未着手:** 指示どおり別カテゴリには着手していない（"Do not begin another category"）。

## チェックポイント（2026-07-30）: travel マイクロバッチ #1（5件公開 / commit: feat: publish travel micro-batch）

travel（旅行）ハブの最初の5件を公開しました（マイクロバッチ運用）。開始時点で travel は9件（>5）が残っていたため、通常のマイクロバッチとして記録順の先頭5件のみを処理し、最終ハブ監査は実施していません（残り4件のため次回以降に継続）。以下が確定状態です。

- **未完了 travel 件数（開始時）:** 9件（すべて planned・すべて `hub: travel`）。既存公開の travel 記事は0件（本バッチが travel ハブの初回）。
- **選定した5件（記録順の先頭5件）:** `australia-travel-seasons`, `domestic-flight-guide`, `australia-road-trip-guide`, `camping-free-camps`, `east-coast-route`。いずれも開始時 `status: planned` で、published/merged/archived/review/excluded ではないことを確認済み。
- **分類:** 5件すべて **create**（新規スラッグ）。統合（merge）・リダイレクト・レビュー・除外・既存記事の分割は該当なし（本バッチは新規追加のみ）。
- **公開した5件（すべて `category: travel`・`hub: travel`・`intent: travel`・`verifiedAt: 2026-07-30`・完全公開・分類は全て create）:**
  - `australia-travel-seasons`（P1, travel, id a320）— 目的地＝豪州全域／対象＝これから旅程を組むワーホリ。地域別の気候（熱帯の乾季/雨季・南部の四季・内陸の寒暖差・タスマニアの冷涼）で「いつ・どこへ」を決める旅行計画（プランニング）。可変の天気・警報・料金は断定せず公式へ誘導。公式: BOM（気候平年値・警報）／ARPANSA（UV）／Tourism Australia。
  - `domestic-flight-guide`（P1, travel, id a321）— 目的地＝国内都市間／対象＝国内線を安く予約したいワーホリ。予約の考え方（荷物込み総額・変更条件で比較）と当日空港・IDを整理。運賃・時刻・空席・荷物ルールは変わるため断定せず各社公式へ。公式: Jetstar/Qantas/Virgin Australia の Baggage・Rex 公式。
  - `australia-road-trip-guide`（P1, travel, id a322）— 目的地＝豪州のロードトリップ全般／対象＝車で長距離を走る人。距離感・車と保険・宿・通信・緊急時（水/燃料/000・冠水回避）を安全重視で整理。速度/ルール/免許は州で異なるとして各州公式へ。公式: BOM（警報）／Triple Zero（000）／Transport for NSW（道路安全）／Parks Australia。
  - `camping-free-camps`（P2, travel, id a323）— 目的地＝キャンプ地全般／対象＝Free Camp/キャンプで節約したい人。国立/州立公園・自治体サイト・民間パークの違い、設備差、Leave No Trace、fire ban、防犯を整理。許可のない野営は罰則対象と警告し公式へ。公式: Parks Australia／NSW National Parks／Queensland Government（Camping）／Triple Zero（000）。
  - `east-coast-route`（P2, travel, id a324）— 目的地＝東海岸（シドニー→ケアンズ）／対象＝東海岸周遊を計画する人。日数・移動手段（車/長距離バス/国内線）・ルート順・主要スポット・予算4分類（宿/移動/食費/アクティビティ）のモデルルート（itinerary）。料金・催行・海況は断定せず公式へ。公式: Tourism Australia／BOM（サイクロン警報）／GBRMPA（リーフ）。
- **旅程ガイダンスと可変情報の区別:** 各記事で「モデルルート・季節傾向・予約の考え方（itinerary/プランニング）」と「実際の運賃・時刻・空席・天気・警報・ツアー催行・料金（changeable）」を明確に分離。changeable は具体額・便・時刻を断定せず、確認日 2026-07-30 を明記し各公式（航空会社・空港・BOM・国立公園・GBRMPA・Tourism Australia）へ誘導。予算は「例・カテゴリ・レンジ」としてのみ提示。
- **旅行記事の要件充足:** 目的地と対象読者の明示／主要な問いへの冒頭回答／推奨日数・移動手段・ルート順・主要スポット・予算カテゴリ・宿泊・季節・予約リスク・運転距離・安全の該当項目を記載／ライブ価格・空席・時刻・許可・入場条件は不記載（公式へ）。
- **目的地モジュール:** 新規 `lib/content/articles/travel.ts`（全て `category: "travel"` / `hub: "travel"`）。`mockData.ts` へ記事は追加していない（カテゴリラベル `travel: 旅行` のみ `articleCategories` に追記＝新カテゴリの必須整備）。
- **新カテゴリ整備（area の前例に準拠）:** `types/article.ts` の `ArticleCategory` に `"travel"` 追加、`lib/content/articles/index.ts` に import と配列追加、`lib/content/hubs.ts` の `CATEGORY_TO_HUB` に `travel: "travel"` 追加、`lib/mockData.ts` の `articleCategories` にラベル追加、`app/travel/page.tsx`（`GuideCategoryPage category="travel"`）新設、`app/sitemap.ts` staticRoutes に `/travel` 追加、`components/layout/Footer.tsx` に旅行リンク追加。
- **孤立記事なし:** travel カテゴリページ（`app/travel/page.tsx`）が公開 travel 記事を自動列挙し、Footer からも到達可能。各記事は一意のモジュールにのみ存在。`relatedSlugs` は公開/既存 slug と本バッチの新規5件のみ参照（未公開 planned の `great-barrier-reef-guide`/`uluru-guide`/`tasmania-trip-guide`/`public-holiday-travel` は含めず dangling 回避）。既存 `visa.ts` の `domestic-flight-guide` 参照が本公開で解決（グローバル dangling が1件減）。
- **内部リンク:** area（`area-sydney`/`area-gold-coast`/`area-brisbane`/`area-cairns`/`area-hobart`）・交通（`intercity-transport`/`transport-payment-guide`は未使用、`flight-booking-guide`/`arrival-airport-guide`）・車（`cars-guide`）・免許（`license-guide`）・安全（`safety-emergency`）・通信（`sim-guide`）・服装（`clothing-guide`）へ接続。すべて公開/既存 slug に解決。
- **content-manifest.yaml:** 該当5件を `status: planned` → `status: published` に更新。`manifest.generated.ts` 再生成。
- **検証（マイクロバッチ範囲・各1回）:** `validate:articles`（重複 slug/パス/エクスポート 0・travel 5件・`OK: no article data errors`。ARTICLE_ORDER omission は既存仕様の warn のみ）、`tsc --noEmit` クリーン（exit 0）、`validate:content` 0 error / 66 warning（想定内の cannibalization のみ・dangling 0）、新規5件の `relatedSlugs` は全て公開/既存 slug に解決。
  ※フルビルド/テスト/lint/sitemap/構造化データ監査は travel ハブ完了後（残り5件以下時の最終監査）にまとめて実施予定。
- **修正1回（リトライ枠内）:** 新カテゴリ追加に伴い `lib/content/hubs.ts` の `CATEGORY_TO_HUB` に `travel` が不足し tsc が TS2741。`travel: "travel"` を追記して解消（1回で完了）。
- **残り travel slug（4件・すべて planned のまま）:** `great-barrier-reef-guide`（P3）, `uluru-guide`（P3）, `tasmania-trip-guide`（P3）, `public-holiday-travel`（P2）。
- **最初の未完了 travel slug: `great-barrier-reef-guide`**（次回はここから再開。残り4件＝次回は travel ハブ最終監査を実施）。
- **次のバッチ: travel（`great-barrier-reef-guide` から継続・残り4件で最終監査）。** ※本セッションは travel の先頭5件のみ処理し、english/area・その他カテゴリには着手しない。
- **変更ファイル（本チェックポイント）:** `lib/content/articles/travel.ts`（新規）、`lib/content/articles/index.ts`、`lib/content/hubs.ts`、`types/article.ts`、`lib/mockData.ts`、`app/travel/page.tsx`（新規）、`app/sitemap.ts`、`components/layout/Footer.tsx`、`lib/content/manifest.generated.ts`（再生成）、`whv-guide-content-plan/content-manifest.yaml`、`CONTENT_MERGE_MAP.md`、`SOURCE_VERIFICATION_REPORT.md`、`BULK_PUBLISH_REPORT.md`、`BULK_PUBLISH_REMAINING.md`。
- **未解決の問題: なし。**

## チェックポイント（2026-07-30）: area マイクロバッチ #5 = area ハブ完了（3件公開＋最終監査 / commit: feat: publish area micro-batch）

area（都市・州・地域ガイド）ハブの残り全3件を公開し、**area ハブを完了**しました。開始時点で area は3件（≤5）が残っていたため、全件を処理し、最終ハブ監査（フルビルド・lint・test:content・sitemap/構造化データ）まで実施しました。以下が確定状態です。

- **未完了 area 件数（開始時）:** 3件（すべて `state-*`・すべて planned）。既に公開済みは既存6件＋マイクロバッチ #1〜#4 の20件＝26件。
- **処理した3件（残り全件）:** `state-sa-guide`, `state-tas-guide`, `state-nt-guide`。いずれも開始時 `status: planned` で、published/merged/archived/review/excluded ではないことを確認済み。
- **分類:** 3件すべて **create**（新規スラッグ）。統合（merge）・リダイレクト・レビュー・除外・既存記事の分割は該当なし（本バッチは新規追加のみ）。
- **公開した3件（すべて `hub: area`・`category: area`・`intent: state-guide`・`verifiedAt: 2026-07-30`・完全公開・分類は全て create）:**
  - `state-sa-guide`（a317）— SA 州ガイド（制度＝metroCARD/Service SA/CBS、拠点＝アデレード、農業・ワイン）。公式ソース: Service SA (mySA GOV) / Adelaide Metro / Consumer and Business Services。
  - `state-tas-guide`（a318）— TAS 州ガイド（制度＝greencard/Service Tasmania/CBOS、拠点＝ホバート、ファーム・寒さ）。公式ソース: Transport Tasmania / Metro Tasmania / CBOS / BOM。
  - `state-nt-guide`（a319）— NT 準州ガイド（制度＝MVR/NT Consumer Affairs、拠点＝ダーウィン、乾季/雨季・サイクロン・安全）。公式ソース: NT Government (MVR) / NT Public transport / NT Consumer Affairs / BOM。
- **マイクロバッチ検証:** `validate:articles`（area 29件・重複0・OK）／`tsc --noEmit`（exit 0）／`validate:content`（0 error / 66 warning・記録済み共食い warning のみ・dangling なし）。
- **最終 area ハブ監査（≤5 のため実施）:** `npm run build`（exit 0・`/guides/[slug]` を含む全ルートを prerender・`/sitemap.xml` 生成）／`npm run lint`（exit 0）／`npm run test:content`（5/5 pass）。エラーなし。
- **内部リンク:** `relatedSlugs` は公開/既存 slug と公開済み farm 地域ガイドのみ参照（`area-adelaide`/`area-hobart`/`area-darwin`/`region-tasmania-farm`/`safety-emergency`/`housing-guide`/`license-guide`/`farm-second-visa`/`second-visa-guide` 等）。dangling なし。
- **area ハブ完了: 公開29件（既存6＋計画23）。planned/merged/review/excluded: 0件。次のカテゴリ（travel 等）には着手しない。**

## チェックポイント（2026-07-30）: area マイクロバッチ #4（5件公開 / commit: feat: publish area micro-batch）

area（都市・州・地域ガイド）ハブの次の5件を公開しました（マイクロバッチ運用）。開始時点で area は8件（>5）が残っていたため、通常のマイクロバッチとして記録順の先頭5件のみを処理し、最終ハブ監査は実施していません（残り3件のため次回以降に継続）。以下が確定状態です。

- **未完了 area 件数（開始時）:** 8件（1件 `area-*` ＋ 7件 `state-*`、すべて planned）。既に公開済みは既存6件＋マイクロバッチ #1・#2・#3 の15件＝21件。
- **選定した5件（記録順の先頭5件）:** `area-griffith`, `state-nsw-guide`, `state-vic-guide`, `state-qld-guide`, `state-wa-guide`。いずれも開始時 `status: planned` で、published/merged/archived/review/excluded ではないことを確認済み。
- **分類:** 5件すべて **create**（新規スラッグ）。統合（merge）・リダイレクト・レビュー・除外・既存記事の分割は該当なし（本バッチは新規追加のみ）。
- **公開した5件（すべて `hub: area`・`category: area`・`verifiedAt: 2026-07-30`・完全公開・分類は全て create）:**
  - `area-griffith`（a312）— NSW内陸リベリーナのファーム・食品加工・セカンドビザ拠点。公式ソース: Transport for NSW / Home Affairs specified work / BOM。
  - `state-nsw-guide`（a313）— NSW 州ガイド（制度＝Opal/Service NSW/NSW Fair Trading、都市＝シドニー/ニューカッスル/ウーロンゴン/グリフィス）。公式ソース: Service NSW / Transport for NSW / NSW Fair Trading。
  - `state-vic-guide`（a314）— VIC 州ガイド（制度＝myki/VicRoads/Consumer Affairs Victoria、地域＝メルボルン/ミルデューラ/シェパートン）。公式ソース: VicRoads / Public Transport Victoria / Consumer Affairs Victoria。
  - `state-qld-guide`（a315）— QLD 州ガイド（制度＝go card/Transport and motoring/RTA、地域＝ブリスベン/ゴールドコースト/ケアンズ 他）。公式ソース: Queensland Government (Transport and motoring) / Translink / RTA。
  - `state-wa-guide`（a316）— WA 州ガイド（制度＝SmartRider/Department of Transport WA/Consumer Protection WA、拠点＝パース、地方移動・AWST）。公式ソース: Department of Transport WA / Transperth / Consumer Protection WA。
- **検証:** `npm run generate:content` 再生成後、`validate:articles`（area 26件・重複0・OK）／`tsc --noEmit`（exit 0）／`validate:content`（0 error / 66 warning・記録済みの共食い warning のみ・dangling なし）。
- **内部リンク:** `relatedSlugs` は公開/既存 slug と公開済み farm 地域ガイドのみ参照（州ガイドは州内の公開都市記事・`housing-guide`/`license-guide`/`jobs-guide`/`farm-second-visa`/`second-visa-guide` 等へ接続）。未公開（planned）slug は含めず dangling 回避。
- **残り area:** 3件（`state-sa-guide` P3・`state-tas-guide` P2・`state-nt-guide` P2）。次回は ≤5 のため全件処理＋最終 area ハブ監査を実施。**次回開始: `state-sa-guide`。travel には着手しない。**

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

### area — 都市・州・地域ガイド (23件、残り0件—ハブ完了)

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
- ✅ `area-griffith` — グリフィス エリアガイド｜農業・食品加工・生活 _(優先度 P2、意図: area-guide)_ **[公開済 2026-07-30]**
- ✅ `state-nsw-guide` — ニューサウスウェールズ州ガイド｜制度・都市・仕事 _(優先度 P2、意図: state-guide)_ **[公開済 2026-07-30]**
- ✅ `state-vic-guide` — ビクトリア州ガイド｜制度・都市・仕事 _(優先度 P2、意図: state-guide)_ **[公開済 2026-07-30]**
- ✅ `state-qld-guide` — クイーンズランド州ガイド｜制度・都市・ファーム _(優先度 P1、意図: state-guide)_ **[公開済 2026-07-30]**
- ✅ `state-wa-guide` — 西オーストラリア州ガイド｜制度・都市・地方移動 _(優先度 P2、意図: state-guide)_ **[公開済 2026-07-30]**
- ✅ `state-sa-guide` — 南オーストラリア州ガイド｜制度・都市・農業 _(優先度 P3、意図: state-guide)_ **[公開済 2026-07-30]**
- ✅ `state-tas-guide` — タスマニア州ガイド｜制度・都市・ファーム _(優先度 P2、意図: state-guide)_ **[公開済 2026-07-30]**
- ✅ `state-nt-guide` — ノーザンテリトリーガイド｜気候・仕事・安全 _(優先度 P2、意図: state-guide)_ **[公開済 2026-07-30]**

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

### return-home — 帰国準備・次のキャリア (残り2件 / 10件公開済み)

- ~~`leaving-australia-checklist` — 帰国前チェックリスト｜仕事・家・車・税金・Super _(優先度 P0、意図: checklist)_~~ ✅ 公開済み（2026-08-02 バッチ#1）
- ~~`final-pay-before-leaving` — 帰国前に確認するFinal Pay・未払い給与・有給 _(優先度 P0、意図: finance)_~~ ✅ 公開済み（2026-08-02 バッチ#1）
- ~~`early-tax-return-departing` — 年度途中で帰国する場合のタックスリターン _(優先度 P1、意図: tax)_~~ ✅ 公開済み（2026-08-02 バッチ#1）
- ~~`dasp-before-after-leaving` — DASP申請はいつする？出国・ビザ失効・必要書類 _(優先度 P0、意図: how-to)_~~ ✅ 公開済み（2026-08-02 バッチ#1）
- ~~`close-services-before-leaving` — 帰国前に解約・変更するサービス一覧 _(優先度 P1、意図: checklist)_~~ ✅ 公開済み（2026-08-02 バッチ#1）
- ~~`bond-refund-before-leaving` — 帰国前の退去・Bond返金を間に合わせる方法 _(優先度 P1、意図: housing)_~~ ✅ 公開済み（2026-08-02 バッチ#2）
- ~~`sell-car-timeline` — 帰国前の車売却スケジュール｜いつ出品する？ _(優先度 P1、意図: transport)_~~ ✅ 公開済み（2026-08-02 バッチ#2）
- ~~`send-luggage-to-japan` — オーストラリアから日本へ荷物を送る方法 _(優先度 P2、意図: comparison)_~~ ✅ 公開済み（2026-08-02 バッチ#2）
- ~~`keep-australian-bank-account` — 帰国後も豪州銀行口座を残す場合の注意点 _(優先度 P1、意図: finance)_~~ ✅ 公開済み（2026-08-02 バッチ#2）
- ~~`use-wh-experience-in-resume` — ワーホリ経験を帰国後の履歴書・面接で伝える方法 _(優先度 P1、意図: career)_~~ ✅ 公開済み（2026-08-02 バッチ#2）
- ~~`reverse-culture-shock` — 帰国後の逆カルチャーショックとキャリア再始動 _(優先度 P2、意図: wellbeing)_~~ ✅ 公開済み（2026-08-02 バッチ#3）
- ~~`australian-police-check-after-return` — 帰国後に豪州の無犯罪証明が必要になった場合 _(優先度 P3、意図: how-to)_~~ ✅ 公開済み（2026-08-02 バッチ#3）

**→ return-home ハブ完了（12/12 公開・残り0件）。**

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

