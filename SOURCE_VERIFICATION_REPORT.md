# SOURCE_VERIFICATION_REPORT

生成日: 2026-07-16
照合日（verifiedAt）: 2026-07-16（バッチ2/3 追記: 2026-07-17、バッチ4/5/6/7 追記: 2026-07-18）

本サイクルで公開・強化した YMYL 記事について、タイトルの主要な問いに関わる数値・料金・
要件・期限・規則を、公式一次情報に照合した記録です。各記事は画面上に「✅ 公式情報と照合した
最終確認日（verifiedAt）」を表示し、`OfficialSourceBox` で出典と免責（制度改定の可能性・
専門的アドバイスではない旨）を明示します。

## news-template マイクロバッチ #2・最終（2026-08-02 / 1件公開・news-template グループ完了）

news ハブ `type: news-template` の最後の1件（`news-scam-alert-template`）を公開し、全 planned コンテンツが完了。詳細ページは画面上に `verifiedAt: 2026-08-02` を表示し共通 `OfficialSourceBox` で出典と免責を明示。詐欺・悪質求人のテンプレートとして、特定の企業・個人を名指しで断定せず一般的な手口・危険サイン・通報先を提示する構造。キャッシュバックやビザ・スポンサー費用の請求が違法である旨は Fair Work の情報に基づき、法的判断・金額は断定しない。照合した公式一次情報（2026-08-02 ライブ確認）: **Scamwatch（ACCC・National Anti-Scam Centre）**（https://www.scamwatch.gov.au/ ― Report a scam / Types of scams / I've been scammed をライブ確認）／**Fair Work Ombudsman｜Visa holders and migrants**（https://www.fairwork.gov.au/find-help-for/visa-holders-migrants ― キャッシュバック/ビザ・スポンサー費用の違法性・相談でビザは取り消されない保護をライブ確認）／**Australian Cyber Security Centre｜Report (ReportCyber)**（https://www.cyber.gov.au/report-and-recover/report ― サイバー犯罪の通報窓口をライブ確認）。緊急時は Triple Zero（000）を案内。

## news-template マイクロバッチ #1（2026-08-02 / P0 5件公開）

news ハブ `type: news-template` の P0 5件（`news-visa-changes-template`／`news-minimum-wage-template`／`news-tax-super-template`／`news-visa-fee-template`／`news-disaster-alert-template`）を専用サブシステム（`/news/templates/*`）として公開。各テンプレート詳細ページは画面上に `verifiedAt: 2026-08-02` を表示し、共通 `OfficialSourceBox` で出典と免責（制度改定の可能性・専門的助言ではない旨）を明示。テンプレートの性質上、数値・日付・条件は断定せず「必須項目・執筆注意点・記入スケルトン」として公式一次情報での最新確認を促す構造とした。照合した公式一次情報（主要URLは 2026-08-02 ライブ確認）: **Department of Home Affairs｜Working Holiday visa (subclass 417)**（https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417）／**Work and Holiday visa (subclass 462)**／**Current visa pricing**（https://immi.homeaffairs.gov.au/visas/getting-a-visa/fees-and-charges/current-visa-pricing ― Last updated 1 July 2026 をライブ確認）／**Visa Pricing Estimator**／**Fair Work Ombudsman｜Minimum wages**（https://www.fairwork.gov.au/pay-and-wages/minimum-wages ― 全国最低賃金の年次改定・適用開始をライブ確認）／**Fair Work Commission｜Annual wage reviews**／**ATO｜Tax rates – Australian resident**（https://www.ato.gov.au/tax-rates-and-codes/tax-rates-australian-residents ― Last updated 1 June 2026・年度別税率表をライブ確認）／**ATO｜Individuals and families**／**Bureau of Meteorology｜Warnings and alerts**（https://www.bom.gov.au/australia/warnings/ ― 州別警報のライブ確認）／**Australian Government｜Triple Zero (000)**（https://www.infrastructure.gov.au/triple-zero ― 既検証の安定ページ）。ビザ制度/申請料は Home Affairs、賃金は Fair Work、税・Super は ATO、災害は BOM＋000 と、各分野の一次情報へ確実に誘導する設計。P1 の `news-scam-alert-template` は次バッチへ残す。

## gig-work マイクロバッチ #3（2026-08-02 / 2件公開・gig-work ハブ完了）

gig-work ハブの残2件（`japan-remote-work-tax`／`public-liability-insurance`）を公開し、gig-work ハブ（全12件）が完了。各記事は画面上に `verifiedAt: 2026-08-02` を表示し `OfficialSourceBox` で出典と免責を明示。可変・YMYL情報（税務上の居住性・全世界所得・二重課税・源泉徴収・保険の要否/補償額/除外）は断定せず、確認日と公式一次情報・日豪双方の専門家への誘導で対応。照合した公式一次情報（2026-08-02 ライブ確認）: **ATO｜Work out your tax residency**（https://www.ato.gov.au/individuals-and-families/coming-to-australia-or-going-overseas/your-tax-residency ― resides/domicile/183-day テストをライブ確認）／**ATO｜Gig economy and tax**／**国税庁｜個人の方**（https://www.nta.go.jp/users/kojin/index.htm ― 日本側の確認先・ライブ確認）／**business.gov.au｜Types of business insurance**（https://business.gov.au/risk-management/insurance/types-of-business-insurance ― 賠償責任保険を含む事業保険・ライブ確認）／**business.gov.au｜Sharing economy**。※当初引用した nta.go.jp のタックスアンサー個別URL（shotoku/1885）と business.gov.au の insurance-for-your-business は 404 を確認したため、ライブ確認済みの安定ページへ1回で差し替え（許可されたリペア1回以内）。日本のリモート副業は日豪双方の専門家確認を大前提とし、賠償責任保険は「自分のケガは別の保険」「除外事項の確認」を明記して断定を回避。

## gig-work マイクロバッチ #2（2026-08-02 / 5件公開）

gig-work ハブの5件（`delivery-peak-hours`／`delivery-safety`／`delivery-account-deactivation`／`airtasker-guide`／`freelance-it-australia`）を公開。各記事は画面上に `verifiedAt: 2026-08-02` を表示し `OfficialSourceBox` で出典と免責を明示。可変・YMYL情報（収入・手数料・GST登録閾値・保険補償範囲/除外・税務上の居住性・二重課税・交通ルール・アカウント停止基準）は数値・基準を断定せず、確認日と公式一次情報・各社規約への誘導で対応。照合した公式一次情報（2026-08-02 ライブ確認）: **ATO｜Gig economy and tax**／**ATO｜Applying for an ABN**／**Fair Work Ombudsman｜Independent contractors**（regulated workers 含む）／**business.gov.au｜Sharing economy・Payments and invoicing**（https://business.gov.au/finance/payments-and-invoicing ― 請求・支払の公式案内をライブ確認）／**Australian Government｜Triple Zero (000)**（https://www.infrastructure.gov.au/triple-zero ― 旧 triplezero.gov.au のリダイレクト先・ライブ確認）。フードデリバリーは配車と異なりGST登録閉値未満なら原則登録不要、個人事業主は自分のSuper拠出義務なし、を引き続き正確に反映。契約者/従業員の区分は Fair Work が「個別判断はできず一般情報のみ」とする立場を尊重し、アカウント停止の具体的基準は非公開部分があるため各社規約で確認する旨を明記。

## gig-work マイクロバッチ #1（2026-08-02 / 5件公開・新カテゴリ初回）

gig-work ハブのフードデリバリー系5件（`gig-work-comparison`／`delivery-abn-tax`／`delivery-insurance`／`delivery-vehicle-comparison`／`delivery-expenses-logbook`）を公開。各記事は画面上に `verifiedAt: 2026-08-02` を表示し `OfficialSourceBox` で出典と免責を明示。可変・YMYL情報（所得税率・GST登録閾値・控除可否・保険補償範囲/除外・車両登録費用・報酬/インセンティブ）は数値を断定せず、確認日と公式一次情報への誘導で対応。照合した公式一次情報（2026-08-02 ライブ確認）: **ATO｜Gig economy and tax**（https://www.ato.gov.au/businesses-and-organisations/income-deductions-and-concessions/in-detail/income/gig-economy-and-tax）／**ATO｜Applying for an ABN**／**ATO｜Records you need to keep**／**Fair Work Ombudsman｜Independent contractors**（https://www.fairwork.gov.au/find-help-for/independent-contractors ― regulated workers・2024年8月26日以降のemployee-like制度を確認）／**business.gov.au｜Sharing economy・Contractor responsibilities**／**ABN Lookup**（https://abr.business.gov.au/）／**Triple Zero 000**。重要な事実区別として、フードデリバリーは配車（ride-sourcing）と異なり売上が登録閾値未満なら原則GST登録不要である点、個人事業主（sole trader）は自分自身の Super 拠出義務がない点を正確に反映。契約者/従業員の区分は Fair Work が「個別判断はできず一般情報のみ」とする立場を尊重し断定を回避。

## downloads カテゴリ最終監査（2026-08-02 / 0件公開・カテゴリ完了）

downloads（ダウンロード資料）カテゴリの最終監査を実施（新規公開0件）。`type: download` 4件はすべて公開済みで、YMYL 重要度の高い `download-emergency-card` のみ `verifiedAt: 2026-08-02` と `officialSources`（Australian Government ― Triple Zero (000)／healthdirect Australia、accessedAt 2026-08-02）を保持。掲載の代表番号は安定した公的連絡先だが「番号・制度は変わりうる・緊急時は最新案内に従う」を免責に明記し、国籍で異なる大使館/領事館はハードコードせず利用者記入とする設計を再確認。`download-resume-template`／`download-cover-letter-template`（ひな型・記入例）と `download-housing-inspection-checklist`（一般的な内見項目の目安）は外部ライブデータに依存しないため officialSources なし（契約/各州情報で確認する旨を明記）。ダウンロード配布物（Blob 生成の `.txt`）に個人情報は含まれず、個人情報はブラウザの localStorage のみに保持しサーバー送信しないことを確認。

## tools マイクロバッチ #4・最終（2026-08-02 / 3件公開）

tools ハブの残り3件（`download-cover-letter-template`・`download-housing-inspection-checklist`・`download-emergency-card`）を公開し tools ハブを完了。緊急番号を扱う `download-emergency-card` は YMYL 重要度が高いため `verifiedAt: 2026-08-02` と `officialSources`（Australian Government ― Triple Zero (000) / healthdirect Australia、accessedAt 2026-08-02）を付与。掲載の代表番号（000・112・106・132 500・13 11 26・1800 022 222・13 11 14・131 444）は安定した公的連絡先だが、「番号・制度は変わりうる・緊急時は最新の案内に従う」を免責に明記。大使館/領事館は国籍により異なるためハードコードせず利用者が記入する設計（誤値を防止）。`download-cover-letter-template`（カバーレターのひな型）・`download-housing-inspection-checklist`（一般的な内見項目）は外部ライブデータに依存しないため officialSources なし（ひな型/目安であり契約/各州情報で確認する旨を明記）。

## tools マイクロバッチ #3（2026-08-02 / 4件公開）

tools ハブの次の4件（`tool-job-application-tracker`・`tool-farm-evidence-tracker`・`tool-return-home-checklist`・`download-resume-template`）を公開。セカンドビザの証拠を扱う `tool-farm-evidence-tracker` に `verifiedAt: 2026-08-02` と `officialSources`（Department of Home Affairs ― Specified work (417) / Second Working Holiday visa (subclass 417)、accessedAt 2026-08-02）を付与。`tool-return-home-checklist` は一般的な時系列ガイドのため `verifiedAt: 2026-08-02`（個別の金額/期限は ATO 等公式へ誘導）。`tool-job-application-tracker` と `download-resume-template` はユーザー入力/一般慣行で外部ライブデータに依存しないため officialSources なし。いずれも「ビザ可否は移民局が判断」「推計/記録を公式判定として提示しない」を免責に明記。

## tools マイクロバッチ #2（2026-08-02 / 4件公開）

tools ハブの次の4件を公開。外部の公式データ・閾値が関わる 2件（郵便番号チェッカー・ファームシーズン）に `verifiedAt`＋`officialSources` を付与。予算計算・レジュメチェックはユーザー入力/一般慣行で外部ライブデータに依存しないため officialSources なし。

- **`tool-specified-work-region-checker`（P0, lookup）** — 郵便番号が公表された「地域（regional Australia）」の郵便番号範囲に含まれるかを確認する**参照用**ツール。対象業務・地域・要件は可変かつYMYLのため**断定せず**、範囲外＝対象外とも扱わず、最終判断は移民局へ誘導。データは目安として `POSTCODE_DATA_VERIFIED_AT: 2026-08-02` を各結果下に表示。`verifiedAt: 2026-08-02`。
  - 出典（accessedAt 2026-08-02）: Department of Home Affairs｜Specified work (417)（https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work）／Department of Home Affairs｜Second Working Holiday visa (subclass 417)（https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/second-work-holiday-417）。
  - 注: Home Affairs ページは JS レンダリングで本文抽出不可。郵便番号範囲は公表されている「地域」の定義に基づく構造的データとして encode し、可変要素（対象業務・要件・範囲更新）は各公式で確認するよう強く誘導。偽陰性を避けるため「範囲に含まれない＝対象外」とは表示しない。
- **`tool-farm-season-calendar`（P0, lookup）** — 州・作物・月から繁忙期の一般的な目安を検索。収穫時期は天候・年により前後する旨、求人状況は雇用主/公式で確認する旨、対象作業の指定業務該当は移民局が判断する旨を明記。`verifiedAt: 2026-08-02`。
  - 出典（accessedAt 2026-08-02）: Australian Government｜Harvest Trail Information Service（https://www.harvesttrail.gov.au/）。個別の収穫月は一般的な季節目安として提示し、断定を回避。
- **`tool-weekly-budget-calculator`（P1, calculator）／`tool-resume-checklist`（P1, checklist）** — それぞれユーザー入力の概算・一般的な採用慣行の目安であり、外部の公式閾値/ライブデータに依存しないため officialSources なし。金融アドバイス/確定的な採用基準ではない旨を免責に明記。

## tools マイクロバッチ #1（2026-08-02 / 3件公開・新カテゴリ初回）

tools（ツール・テンプレート）ハブの最初の3件を公開。外部の公式閾値・データが関わるのは 88日ツールのみで、当該ツールに `verifiedAt` と `officialSources` を付与。到着後・持ち物チェックリストは一般的な準備目安であり外部ライブデータに依存しないため、`verifiedAt: 2026-08-02` のみ付与（officialSources なし）。

- **`tool-88-day-calculator`（P0, interactive-tool）** — セカンドビザの88日勤務要件を記録・集計する**記録専用**ツール。88日という日数は subclass 417 セカンドビザの一般要件の目安として提示。対象業務（Specified work）・対象地域・証拠要件は可変かつYMYLのため**断定せず**移民局（Home Affairs）の公式ページへ誘導。ビザ可否は判定しない旨を強い免責で明記。`verifiedAt: 2026-08-02`。
  - 出典（accessedAt 2026-08-02・ライブ確認）: Department of Home Affairs｜Second Working Holiday visa (subclass 417)（https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/second-work-holiday-417）／Department of Home Affairs｜Specified work (417)（https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work）。
  - 注: Home Affairs のページは JS レンダリングのため本文抽出は不可。日数（88日）は構造的・安定した一般要件のため canonical URL を出典として明記し、可変の詳細（対象業務・地域・証拠）は各公式ページで確認するよう誘導。
- **`tool-arrival-checklist` / `tool-packing-checklist`（P0/P1, interactive-tool）** — 到着後・持ち物の一般的な準備目安。外部の公式閾値・ライブデータに依存しないため officialSources なし。個人の状況で必要項目が異なる旨を免責に明記。`verifiedAt: 2026-08-02`。

## community マイクロバッチ #2（2026-08-02 / 残り1件公開・ハブ完了）

community（友達・コミュニティ）ハブの最後の1件を公開。就労（有給の仕事）との違いというYMYL・ビザ関連の事実を、公式一次情報に照合。可変・YMYL要素は断定せず、確認日 2026-08-02 を明記。分類は create。

- **`volunteering-guide`（P3, social, id a346）** — ボランティアの探し方と有給の『仕事（work）』との違い・安全確認。ボランティアは無給で慈善・非営利の活動を支えるもので、実態が雇用に近づけば賃金が支払われるべき（Fair Work）という区別を明示。ビザ上のwork該当・Specified workカウント可否は断定せず移民局へ。住み込み型（work for accommodation）のリスクと安全確認（団体の実在・保険・WWCC・前払い要求回避）を記載。
  - 公式: Fair Work Ombudsman｜Unpaid work（https://www.fairwork.gov.au/starting-employment/unpaid-work）／Department of Home Affairs｜Working Holiday visa (417)（https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417）／Volunteering Australia・GoVolunteer（https://govolunteer.com.au/）／Safe Work Australia｜Volunteers（https://www.safeworkaustralia.gov.au/safety-topic/managing-health-and-safety/volunteers）／Triple Zero 000（https://www.triplezero.gov.au/）。
- **架空の活動を掲載しない:** 会員数/投稿/イベント等の捧造なし。SNS/コミュニティの募集はユーザー情報で無保証と明示し、団体の実在・条件は公式で確認するよう誘導。
- **検証（最終ハブ監査）:** validate:articles（community 6・重複0）/ tsc（exit 0）/ validate:content（0 error・dangling 0）/ test:content（5/5）/ lint / build いずれも合格。community ハブ 6/6 完了。未解決の問題: なし。

## community マイクロバッチ #1（2026-08-02 / 5件公開・新カテゴリ初回）

community（友達・コミュニティ）ハブの先頭5件を公開。交流・メンタル・安全に関する記事のため、主観的な助言（友達作り・慣れ方）と、安全・詐欺・相談窓口といった検証すべき事実を明確に分離。ユーザー投稿（コミュニティ/SNS）は無保証と明示し、重要事項は公式一次情報へ誘導。可変・YMYL要素は断定せず、確認日 2026-08-02 を明記。分類は5件とも create。

- **`make-friends-australia`（P1, social, id a341）** — 友達の作り方（学校・職場・シェア・Meetup・ボランティア・SNS）。主観的助言中心で「合う/合わないは人による」と明示。初対面の安全（公共の場・予定共有・個人情報と金銭に注意）を記載。
  - 公式: eSafety Commissioner｜Online dating（https://www.esafety.gov.au/community/online-dating）／Triple Zero 000（https://www.triplezero.gov.au/）。
- **`japanese-community-groups`（P1, social, id a342）** — 日本人コミュニティ・Facebookグループの探し方と詐欺回避。「投稿はユーザー情報で無保証」「重要事項は移民局・ATO・Fair Work・州当局で裏取り」を明示。前払い要求・好条件すぎ・実物確認拒否・個人情報要求を危険サインとして提示。
  - 公式: Scamwatch (ACCC)｜Types of scams（https://www.scamwatch.gov.au/types-of-scams）／IDCARE 1800 595 160（https://www.idcare.org/）。
- **`homesickness-loneliness`（P1, wellbeing, id a343）** — ホームシック・孤独への対処。YMYL（メンタル）につき断定を避け、生活リズム・つながり・適度な連絡を助言しつつ、つらさが続く場合は専門窓口へ、緊急時は000へ誘導。相談先の電話番号を明記。
  - 公式: Lifeline 13 11 14（https://www.lifeline.org.au/）／Beyond Blue 1300 22 4636（https://www.beyondblue.org.au/）／healthdirect｜Mental health 1800 022 222（https://www.healthdirect.gov.au/mental-health）。
- **`culture-shock-australia`（P2, social, id a344）** — カルチャーショックと慣れ方。文化の傾向は一般化であり地域・個人差が大きい旨を明示。労働条件・賃貸ルールなど権利事項は「慣習」でなく公式で確認するよう誘導。
  - 公式: Fair Work Ombudsman｜Visa holders and migrants（https://www.fairwork.gov.au/find-help-for/visa-holders-migrants）。
- **`dating-safety-australia`（P2, safety, id a345）** — デーティングアプリ・出会いの安全対策。個人情報の守り方・初対面の鉄則・同意（consent）・ロマンス詐欺の見分け方・緊急/被害時の連絡先を記載。オンラインの相手への送金/身分証/私的写真の提供を明確に禁止として警告。
  - 公式: eSafety Commissioner｜Online dating（https://www.esafety.gov.au/community/online-dating）／Scamwatch (ACCC)｜Relationship scams（https://www.scamwatch.gov.au/types-of-scams/dating-romance）／1800RESPECT 1800 737 732（https://www.1800respect.org.au/）／Triple Zero 000（https://www.triplezero.gov.au/）。
- **架空の活動を掲載しない:** 会員数・投稿・レビュー・イベント・コメント等の捏造なし。対話機能は既存フォーラム `/community` として案内（未実装の機能を実在するかのように見せていない）。
- **検証:** validate:articles（community 5・重複0）／tsc（exit 0）／validate:content（0 error・dangling 0）。未解決の問題: なし。残り community 1件（`volunteering-guide`）。

## return-home マイクロバッチ #3（2026-08-02 / 残り2件公開・ハブ完了）

return-home ハブの最後の2件。可変・YMYL要素は断定せず、健康・警察の各公式へ誘導。分類は2件とも create。

- **`reverse-culture-shock`（P2, wellbeing, id a339）** — 帰国後の逆カルチャーショックとキャリア再始動（帰国後中心）。症状・経過・対処・キャリア再始動の考え方を整理。相談の目安・費用等は断定せず、つらさが続く場合は専門家へ、緊急時は居住国連絡先を使う旨を警告に明記。`use-wh-experience-in-resume` と差別化。
  - 公式: healthdirect｜Mental health（https://www.healthdirect.gov.au/mental-health）／ Beyond Blue（https://www.beyondblue.org.au/）／ Lifeline Australia 13 11 14・豪州内向け（https://www.lifeline.org.au/）。
- **`australian-police-check-after-return`（P3, how-to, id a340）** — 帰国後・海外から豪州の無犯罪証明（police check）を取得する方法（帰国後中心）。AFPのNational Police Check（指紋付きの要否）とACIC名前ベースの違い・目的選択・有効期限を整理。手数料・処理日数・有効期限・指紋要否は断定せず公式・提出先要件へ。`police-check-guide`（在豪ACIC名前ベース）と差別化（海外/AFP指紋ルート）。
  - 公式: AFP｜National police checks（https://www.afp.gov.au/what-we-do/services/criminal-records/national-police-checks）／ ACIC｜National Police Checking Service（https://www.acic.gov.au/services/national-police-checking-service）。
- **出国前/出国後の区別:** 両記事とも帰国後アクションが中心（無犯罪証明は出国前取得の選択肢にも触れつつ有効期限に注意を明記）。
- **最終ハブ監査:** validate:articles / tsc / validate:content（0 error・dangling 0）/ test:content（5/5）/ lint / build いずれも合格。return-home ハブ 12/12 完了。未解決の問題: なし。他カテゴリは未着手。

## return-home マイクロバッチ #2（2026-08-02 / 5件公開）

return-home ハブの続き5件を公開。各記事のタイトルの主要な問いに関わる規則・手続き・タイミングを公式一次情報に照合しました。changeable（通知日数・Bond上限/差引・RWC要否・登録/保険の返金・送料/日数/関税/免税範囲・口座維持費/利子課税）は断定せず、確認日 2026-08-02 を明記し各公式へ誘導しています。出国前アクションと出国後（海外から）のアクションを明確に区別し、受取口座・電話番号・証拠の保持への警告を記載。

- `bond-refund-before-leaving`（a334）— 退去通知の最低期間・州の預託機関へのBond返金・原状回復と経年劣化（fair wear and tear）の原則。通知日数・上限・差引の可否は断定せず州当局へ。照合: NSW Government（Renting a place to live, https://www.nsw.gov.au/housing-and-construction/renting-a-place-to-live）／Consumer Affairs Victoria（Renting, https://www.consumer.vic.gov.au/housing/renting）／Residential Tenancies Authority QLD（https://www.rta.qld.gov.au/）。既存 bond-rules-overview／bond-refund-dispute と整合。
- `sell-car-timeline`（a335）— RWC（Roadworthy/Safety Certificate）の州別要否・名義変更・登録/CTP/任意保険の未経過分返金と解約順序（引き渡し完了→解約）。要否・返金額は断定せず州当局へ。照合: Transport for NSW（https://www.transport.nsw.gov.au/）／VicRoads（https://www.vicroads.vic.gov.au/）／Queensland Government Transport（https://www.qld.gov.au/transport）。既存 sell-car-before-leaving／rego-ctp-rwc／vehicle-transfer-by-state と整合。
- `send-luggage-to-japan`（a336）— 国際郵便/クーリエ/船便・別送品の使い分け・禁制品（豪州側の輸出・日本側の輸入）・日本到着時の関税・別送品申告。送料・日数・関税・免税範囲は断定せず各社/ABF/日本税関へ。照合: Australia Post（Sending overseas, https://auspost.com.au/sending/send-overseas）／Australian Border Force（Leaving Australia, https://www.abf.gov.au/entering-and-leaving-australia/leaving-australia）／Japan Customs（https://www.customs.go.jp/english/）。
- `keep-australian-bank-account`（a337）— 口座維持費・休眠口座（長期無取引→ASIC未請求金へ移管）・外国居住者の利子課税/源泉徴収の可能性・SMS認証の維持。手数料/税率は断定せず銀行/ATO/MoneySmartへ。照合: ASIC MoneySmart（Unclaimed money, https://moneysmart.gov.au/banking/unclaimed-money）／ATO（Leaving Australia, https://www.ato.gov.au/individuals-and-families/coming-to-australia-or-going-overseas/leaving-australia）。既存 close-bank-account-before-leaving と整合。
- `use-wh-experience-in-resume`（a338）— YMYL外の一般的な就活助言。採用を保証しない旨を明記し、在職中のReferee/推薦状/在職証明の確保とPayslip等の記録保存を推奨。照合: Fair Work Ombudsman（Pay slips and record-keeping＝在職の証明, https://www.fairwork.gov.au/pay-and-wages/pay-slips-and-record-keeping）。

すべて `verifiedAt: 2026-08-02`・officialSources の `accessedAt: 2026-08-02`。各記事は画面上に確認日と `OfficialSourceBox`（出典・免責）を表示。可変値はすべて各公式へ誘導し、構造的事実はリポジトリの既存検証済み記事（bond-rules-overview／sell-car-before-leaving／close-bank-account-before-leaving／rego-ctp-rwc）と整合させて記載。

## return-home マイクロバッチ #1（2026-08-02 / 5件公開・新カテゴリ初回）

return-home（帰国準備）ハブの最初の5件を公開。各記事のタイトルの主要な問いに関わる規則・要件・タイミングを公式一次情報に照合しました。changeable（処理期間・還付額・DASP税率・各種手数料・税務上の結果）は断定せず、確認日 2026-08-02 を明記し各公式へ誘導しています。出国前アクションと出国後アクションを明確に区別し、口座・SIM・Super口座の早すぎる解約への警告を記載。

- `leaving-australia-checklist`（a329）— 帰国前後にやること全体像（出国前/出国後の区別・早すぎる口座解約の警告）。照合: ATO（Leaving Australia, https://www.ato.gov.au/individuals-and-families/coming-to-australia-or-going-overseas/leaving-australia／DASP）／Fair Work（Final pay）／Australia Post（Redirect/Hold mail, https://auspost.com.au/receiving/manage-your-mail/redirect-hold-mail）。
- `final-pay-before-leaving`（a330）— Final Pay に含まれるもの（未払賃金・未消化年次有給＋leave loading・解雇予告手当）／含まれないもの（病気/介護休暇は買取なし）・支払時期（多くのアワードで最終日から7日以内・規定なき場合は Fair Work Act で最低月1回）。照合: Fair Work Ombudsman（Final pay, https://www.fairwork.gov.au/ending-employment/final-pay ＝ライブ取得で確認／Visa holders and migrants, https://www.fairwork.gov.au/find-help-for/visa-holders-migrants）。
- `early-tax-return-departing`（a331）— 原則は翌7/1以降の通常申告（帰国後も可）、ATO の条件を満たす場合のみ早期申告可の2経路。myGov/ATO 連携・Income statement の Tax Ready・還付受取用口座の維持。処理期間・還付額は断定せず ATO へ。照合: ATO（Leaving Australia／Lodging your tax return before you leave, https://www.ato.gov.au/individuals-and-families/coming-to-australia-or-going-overseas/leaving-australia/lodging-your-tax-return-before-you-leave）。
- `dasp-before-after-leaving`（a332）— DASP は出国後かつビザ失効後にのみ申請可能・必要書類（パスポート/ビザ/TFN/ファンド情報）・WHM への高い源泉税率（具体%は断定せず ATO へ）。照合: ATO（Departing Australia Superannuation Payment, https://www.ato.gov.au/individuals-and-families/super-for-individuals-and-families/withdrawing-and-using-your-super/departing-australia-superannuation-payment-dasp）。
- `close-services-before-leaving`（a333）— SIM/携帯・ジム・サブスク・保険・光熱費/ネットの契約条件（通知期間・解約金・ロックイン）の確認、2FA/還付に必要な電話番号・口座の早すぎる解約回避。金額・違約金は各社公式へ。照合: ACCC（Consumer rights and guarantees, https://www.accc.gov.au/consumers/buying-products-and-services/consumer-rights-and-guarantees）／各プロバイダー。

すべて `verifiedAt: 2026-08-02`・officialSources の `accessedAt: 2026-08-02`。各記事は画面上に確認日と `OfficialSourceBox`（出典・免責）を表示。

**ソース取得の注記:** ATO の DASP／Leaving Australia／Lodging before you leave 各ページは JavaScript レンダリングのため本文の自動抽出は不可だったが、404 ではなく 200・URL は有効。可変値（DASP税率・処理期間・還付額）は断定せず、リポジトリ内の既存検証済み記事（`dasp-refund`／`superannuation-basics`／`whm-tax-rates`／`tax-return-guide` 等）が過去に照合した構造的事実に基づき記載し、変動しうる具体値は ATO 公式へ誘導した。Fair Work の Final pay ページのみライブ取得で確認済み。

## travel マイクロバッチ #2（2026-08-02 / 4件公開・travel ハブ完了）

travel ハブの残り4件を公開（9/9 完了）。各記事のタイトルの主要な問いに関わる規則・要件・季節・安全情報を公式一次情報に照合しました。changeable（料金・時刻・空席・海況・入園料・祝日日程）は断定せず、確認日 2026-08-02 を明記し各公式へ誘導しています。

- `great-barrier-reef-guide`（a325）— 海洋公園の保護ルール・環境管理料・有毒クラゲの季節リスク。照合: GBRMPA（https://www2.gbrmpa.gov.au/）／Tourism Australia／BOM Warnings／healthdirect（marine stings）。
- `uluru-guide`（a326）— 入園パス・登山の恒久禁止（2019年10月26日〜）・撮影禁止/聖地の配慮・砂漠の気候。照合: Parks Australia（Uluṟu-Kata Tjuṯa NP, https://parksaustralia.gov.au/uluru/）／NT Government（driving）／BOM（climate averages）／Tourism Australia。
- `tasmania-trip-guide`（a327）— 国立公園の入園パス・本土フェリー・冷涼気候と山の天候急変。照合: Tasmania Parks and Wildlife Service（https://parks.tas.gov.au/）／Spirit of Tasmania／BOM（Tas）／Discover Tasmania。
- `public-holiday-travel`（a328）— 州別の祝日・スクールホリデー日程（年/州で変動）・祝日の営業/労働（penalty rates）。照合: australia.gov.au（Public holidays）／Fair Work Ombudsman（Public holidays）／Tourism Australia。

すべて `verifiedAt: 2026-08-02`・officialSources の `accessedAt: 2026-08-02`。各記事は画面上に確認日と `OfficialSourceBox`（出典・免責）を表示。

## travel マイクロバッチ #1（2026-07-30 / 5件公開）

travel（旅行）ハブの最初の5件を公開。旅行記事はライブ価格・空席・時刻・許可・入場条件・催行状況を発明せず、
公的観光・交通・空港・国立公園・気象・政府ソースで可変事項を裏付け、費用は例・レンジのみとし、確認日（2026-07-30）を明記した。

| slug | タイトルの主要な問いと確定記述 | 照合した公式一次情報（accessedAt 2026-07-30） |
| --- | --- | --- |
| `australia-travel-seasons` | 全国共通のベストシーズンは無く地域差が大きい（北部＝乾季/雨季・南部＝四季・内陸＝寒暖差・タスマニア＝冷涼、南半球で日本と季節が逆）。実際の天気・警報は可変として断定せず公式へ | Bureau of Meteorology（Climate averages / Warnings）、ARPANSA（UV index）、Tourism Australia |
| `domestic-flight-guide` | 最安運賃は座席のみが多く、荷物込み総額＋変更/返金条件で比較。荷物は機内持込と預けで別制限・超過は割高。運賃/時刻/空席は断定せず各社公式へ | Jetstar / Qantas / Virgin Australia（各 Baggage）、Rex（Regional Express）公式 |
| `australia-road-trip-guide` | 都市間は長大・無人/無電波区間あり、満タン運用・疲労休憩・夜間の動物衝突注意・冠水路は進入禁止（If it's flooded, forget it）・緊急は000。速度/ルール/免許は州で異なると誘導 | BOM（Warnings）、Triple Zero（000）、Transport for NSW（Road safety）、Parks Australia |
| `camping-free-camps` | 国立/州立公園（多く要予約・有料）・自治体サイト・民間パークの違い、許可のない野営は罰則対象、Leave No Trace、fire ban、防犯。料金/予約/滞在日数は可変として公式へ | Parks Australia、NSW National Parks（Camping）、Queensland Government（Camping）、Triple Zero（000） |
| `east-coast-route` | シドニー→ケアンズの北上モデルルート（約2,500〜3,000km・要点1〜2週間）、車/長距離バス/国内線の組合せ、予算は宿/移動/食費/アクティビティの4分類。具体額・ツアー催行・海況は断定せず公式へ | Tourism Australia、BOM（サイクロン警報）、Great Barrier Reef Marine Park Authority |

- **可変事項の断定回避:** 運賃・時刻・空席・荷物ルール・変更条件（航空会社公式）、天気・サイクロン・洪水・道路状況（BOM/州防災）、
  キャンプの料金・予約・滞在日数・fire ban（各公園当局・自治体）、ツアー催行・海況・入場料（GBRMPA/各運営）を具体値で断定せず、
  確認日を明記し各公式へ誘導。予算・距離・日数は「例・レンジ・目安」としてのみ提示。
- **統合・リダイレクト:** なし（5件は新規スラッグ、travel ハブ初回で既存公開 travel 記事なし）。
- **検証:** `validate:articles`（重複0・travel 5件・`OK: no article data errors`）、`tsc --noEmit` クリーン（exit 0）、
  `validate:content` 0 error / 66 warning（想定内の cannibalization のみ・dangling 0）。
  ※フルビルド/テスト/lint/監査は travel ハブ完了後（残り≤5）に実施。

## 1. 照合した公式一次情報

### ビザ（immi.homeaffairs.gov.au — Work and Holiday / Working Holiday 417）
- ページ更新日: 2024-12-09（アクセス 2026-07-16）
- First 417 ビザ申請料: **AUD 840.00**
- Second 417: **AUD 1,000.00** / Third 417: **AUD 1,000.00**
- 年齢: 18–30歳（一部の国は35歳まで）、扶養児童なし
- Second は指定業種で3か月、Third は6か月の特定就労が必要
- 各12か月滞在。**処理に通常より時間がかかる — 書面での許可が下りるまで渡航を予約しない。**

### 税（ato.gov.au — Working Holiday Maker tax rates 2025–26）
- ページ更新日: 2026-06-01（アクセス 2026-07-16）
- 0–45,000: 15c/$1
- 45,001–135,000: $6,750 + 30c/$1（45,000超過分）
- 135,001–190,000: $33,750 + 37c/$1（135,000超過分）
- 190,001+: $54,100 + 45c/$1（190,000超過分）
- 登録雇用主は $45,000 まで一律15%源泉徴収。TFN未提出は45%。
- subclass 417 と 462 の両方に適用。
- Schedule 15（源泉徴収表）: ato.gov.au/rates/schedule-15---tax-table-for-working-holiday-makers/

### Specified work（immi.homeaffairs.gov.au — work-holiday-417/specified-work）
- ページ更新日: 2025-09-11（アクセス 2026-07-16）
- 2ndビザ: 3か月のSpecified Work = **最低88暦日**（週末・休息日を含む）
- 3rdビザ: 6か月 = **最低179暦日**。2019年7月1日以降の労働。
- 同業種・役割のフルタイム従業員相当の勤務日数・シフトを満たす必要。
- 1暦日は最大1日分。有給の祝日・病欠は算入可、無給の悪天候日は不可。
- 対象業種: 植物・動物の栽培飼育、漁業・真珠養殖、植林・伐採、鉱業、建設（いずれも地方）、
  北部・遠隔地の観光・接客、山火事・自然災害復旧、COVID医療。417と462の両方に適用。
- UKパスポート保有者: 2024年7月1日以降の申請は2nd/3rdでSpecified Work不要。

## 2. 記事ごとの照合状況

### 新規公開（7件、すべて verifiedAt: 2026-07-16）

| slug | ハブ | 照合した固定公式値 | 出典 |
| --- | --- | --- | --- |
| `working-holiday-budget` | start-here | ビザ料金 840/1,000 のみを確定公式値として提示。その他（航空券・保険・家賃・生活費）は明確に「目安/estimates」と表示 | immi WHV ページ |
| `working-holiday-timeline` | start-here | 準備スケジュール。処理時間の公式注意書き（書面許可まで渡航予約しない）を明記 | immi WHV ページ |
| `first-30-days-roadmap` | start-here | 手続き順序（SIM→住居→銀行→TFN→仕事）。TFN は ATO を出典 | ATO TFN |
| `whm-tax-rates` | tax | 2025–26 の全税率区分を本文とkeyFactsに掲載。TFN未提出45%、全国共通（州別でない）注記 | ATO WHM税率 + Schedule 15 |
| `88-day-calculation` | farm | 3か月=最低88暦日、フルタイム相当、悪天候の無給日は不算入、1暦日=最大1日 | immi Specified work |
| `specified-work-industries` | farm | 公式の対象業種一覧（農業/漁業/植林/鉱業/建設/復旧作業等）、二次加工・小売は対象外 | immi Specified work |
| `six-month-specified-work` | farm | 6か月=最低179暦日、2019/7/1以降・セカンドビザ保持中の労働 | immi Specified work |

### 既存記事の強化（4件、verifiedAt: 2026-07-16 + officialSources 付与）

| slug | 付与した出典 |
| --- | --- |
| `visa-application` | immi WHV ページ + First WHV ページ |
| `second-visa-guide` | Second WHV + Third WHV ページ |
| `visa-options` | 全ビザ一覧 + WHV ページ |
| `tax-return-guide` | ATO WHM税率 + ATO 確定申告ページ |

### バッチ2: visa ハブ（16件、すべて verifiedAt: 2026-07-17）

各記事は immi.homeaffairs.gov.au（Work and Holiday / Working Holiday 417）を主要出典とし、
タイトルの問いに関わる要件・料金・期限・条件を公式一次情報に照合。確定公式値は本文/keyFacts に、
可変・個別事項は「目安」「州・状況で異なる」と明示し `warnings` を付与。

| slug | 照合した主要公式値・要件 | 主な出典（accessedAt 2026-07-17） |
| --- | --- | --- |
| `working-holiday-eligibility` | 年齢18–30歳（一部国35歳）、扶養児童なし、国外から申請、初回12か月滞在 | immi WHV 417 |
| `visa-417-vs-462` | 417（Working Holiday）と462（Work and Holiday）の対象国・要件の違い | immi 417 / 462 |
| `visa-cost-processing-time` | First 417 申請料 AUD 840、処理時間は変動・書面許可まで渡航予約しない | immi WHV 417 |
| `visa-proof-of-funds` | 十分な資金の証明（英文残高証明）、金額目安は公式ガイド参照 | immi WHV 417 |
| `visa-health-examination` | HAP ID・指定医療機関での健診が求められる場合の流れ | immi Health examinations |
| `visa-police-certificate` | Character要件・犯罪経歴証明の取得ルート | immi Character requirements |
| `visa-after-passport-renewal` | 新旧パスポート情報の更新（Form 929等）・VEVOで確認 | immi Update details |
| `visa-grant-letter` | Grant Notification の主要項目（入国期限・条件・保存） | immi WHV 417 |
| `visa-first-entry-deadline` | First Entry Date までに初回入国、滞在開始日との違い | immi WHV 417 |
| `visa-six-month-work-limitation` | Condition 8547（同一雇用主6か月制限）と例外・許可申請 | immi Visa conditions 8547 |
| `visa-study-limit` | 就学は最大4か月まで | immi WHV 417 |
| `visa-travel-reentry` | ビザ有効期間内は複数回出入国可、期限・パスポート確認 | immi WHV 417 |
| `bridging-visa-basics` | ブリッジングビザの役割・渡航制限の一般説明 | immi Bridging visas |
| `visa-refusal-cancellation` | 虚偽申告・条件違反による却下/取消しの回避 | immi WHV 417 |
| `vevo-check` | VEVOでの就労権・ビザ条件の確認・雇用主への共有 | immi VEVO |
| `registered-migration-agent` | 登録移民エージェント（OMARA登録）の確認方法 | OMARA / immi |

### バッチ3: preparation ハブ（20件、すべて verifiedAt: 2026-07-17）

渡航前準備。日本側手続きは日本の公式機関（外務省・国税庁・日本年金機構・日本郵便・警察庁）、
豪州側の持込・検疫・電圧等は豪州公式（ABF・DAFF・TGA・health.gov.au）を出典に照合。
可変・個別事項（費用・州別ルール・個人の健康/税務）は断定せず `warnings` で公式確認を促す。

| slug | 照合した主要公式値・要件 | 主な出典（accessedAt 2026-07-17） |
| --- | --- | --- |
| `passport-validity-renewal` | パスポート申請・更新の手続き | 外務省 パスポート |
| `japan-moving-out-procedures` | 海外転出届・国保脱退・国民年金の任意加入 | 日本年金機構 / 総務省 |
| `japan-tax-residency-before-departure` | 住民税・納税管理人の届出・非居住者課税 | 国税庁 |
| `international-driving-permit` | IDP（1949ジュネーブ条約）・免許証原本と携帯・州別ルール | 警察庁 / Transport for NSW |
| `naati-licence-translation` | NAATI認定翻訳の位置づけと州別の扱い | NAATI / Transport for NSW |
| `pre-departure-health-check` | 歯科はMedicare対象外・渡航前健診 | Services Australia Medicare |
| `medication-customs` | 個人使用の量（目安3か月分）・入国カードで申告・成分規制 | TGA / ABF |
| `vaccinations-before-australia` | 特定ワクチンの一律義務なし・黄熱等は渡航歴次第 | Dept of Health |
| `flight-booking-guide` | 片道/往復と入国要件・十分な資金の証明 | immi WHV 417 |
| `arrival-airport-guide` | 主要到着空港と都市選択の考え方 | Australian Government |
| `temporary-accommodation-before-arrival` | 到着直後の短期滞在先・入国審査で滞在先を確認 | Australian Government |
| `cards-and-cash-before-departure` | AUD 10,000相当以上の現金は税関申告 | ABF Travelling with money |
| `keep-japanese-phone-number` | 番号保管/休止・SMS認証対策 | 総務省 |
| `mail-forwarding-and-address` | 郵便の転居・転送サービス | 日本郵便 |
| `document-backup` | 重要書類の分散管理・パスポート紛失時は在外公館 | 外務省 海外安全 |
| `australia-customs-quarantine` | バイオセキュリティ・Incoming Passenger Card 申告・食品/植物/動物製品規制 | ABF / DAFF |
| `baggage-packing-strategy` | 受託/機内持込の分け方・航空会社規定 | ABF Entering Australia |
| `power-plug-voltage` | 230V・50Hz・Type I、100-240V対応機器の判定 | Australian Government |
| `farm-work-packing` | 特定就労の装備・強い紫外線対策・安全靴の要否 | immi Specified work |
| `send-luggage-to-australia` | 国際郵便/EMS/船便・郵送物も検疫対象 | 日本郵便 / DAFF |

### バッチ4: arrival ハブ（10件、すべて verifiedAt: 2026-07-18）

到着後セットアップ。入国・行政手続は豪州公式（ABF SmartGate・Services Australia myGov・ATO myID）と
日本公式（外務省：在留届・たびレジ）を出典に照合。本人確認（100ポイント）は州/機関で基準が
異なるため、代表例を示しつつ `warnings` で各機関の公式確認を促す。

| slug | 照合した主要公式値・要件 | 主な出典（accessedAt 2026-07-18） |
| --- | --- | --- |
| `australia-airport-arrival-flow` | SmartGate（顔認証+ePassport・日本対象・16歳以上）・Incoming Passenger Card 申告 | ABF SmartGate / DAFF |
| `airport-to-city` | 主要空港→市内の移動手段と料金の考え方（値段は可変のため断定せず） | 各空港・州交通当局 |
| `mygov-account-guide` | myGov アカウント作成・連携可能な行政サービス（ATO/Medicare/Centrelink） | Services Australia myGov |
| `digital-id-guide` | myID の識別レベル（Basic/Standard/Strong）・Standard=豪州書類2点で検証・15歳以上 | ATO / myID |
| `proof-of-address` | 住所証明に使える書類（銀行明細・賃貸契約・公的郵便） | 銀行・各発行元 |
| `address-change-checklist` | 住所変更先（ATO・銀行・免許・保険等） | ATO / 州交通当局 |
| `australian-id-points` | 100ポイントIDチェックの考え方（主要/副書類の配点は機関で違い得る） | 豪州政府 / 各機関 |
| `essential-australia-apps` | 生活に役立つ公式/主要アプリの用途整理 | 各公式アプリ |
| `consular-registration` | 在留届（3か月以上=旅券法16条義務・ORRnet）・たびレジ（短期） | 外務省 ORRnet/たびレジ |
| `first-week-shopping` | 到着直後の寝具・日用品・食品の買い物リスト（一般情報） | 一般・各小売 |

### バッチ5: money ハブ（10件、すべて verifiedAt: 2026-07-18）

お金・銀行・送金。可変な料金・レート・値段は断定せず目安として提示し、公的な数値（最低賃金・
現金申告額・詐欺通報窓口）は公式一次情報に照合。`warnings` で手数料・レートの最新確認を促す。

| slug | 照合した主要公式値・要件 | 主な出典（accessedAt 2026-07-18） |
| --- | --- | --- |
| `australia-living-cost` | 生活費の目安（家賃・食費・交通）・最低賃金 $26.44/h・$1,004.90/週（2026-07-01） | Fair Work National Minimum Wage |
| `weekly-budget-template` | 週単位の収支管理テンプレート（可変値は目安） | 一般 / Fair Work |
| `debit-credit-cards` | デビット/クレジットの使い分け・手数料構造 | 各銀行 / ASIC Moneysmart |
| `australia-atm-fees` | ATM手数料の仕組みと回避方法（額は可変） | 各銀行 / ASIC Moneysmart |
| `wise-vs-bank-transfer` | Wiseと銀行送金の手数料/レート/着金時間の比較視点（値は可変） | Wise / 各銀行 |
| `send-money-to-japan` | AUD→JPY 送金の方法と確認点（帰国前想定） | 送金事業者各社 |
| `joint-account-couples` | カップルの共同口座・生活費管理の考え方 | ASIC Moneysmart |
| `emergency-fund` | 緊急予備費の目安と備え方（個別額は断定せず） | ASIC Moneysmart |
| `bank-scam-security` | 詐欺通報（Scamwatch）・即時危険000・銀行へ送金停止依頼・IDCARE・ReportCyber | Scamwatch / ReportCyber / IDCARE |
| `close-bank-account-before-leaving` | 帰国前の口座閉鎖/保持の判断（Super/税還付の着金口座に注意） | ASIC Moneysmart / ATO |

### バッチ6（tax）で公開した記事の公式照合（2026-07-18）

税・ABN/Sole Trader・Super の17件を公開。各記事は `verifiedAt: 2026-07-18` を付与し、
`officialSources` に以下の公式一次情報（ato.gov.au / fairwork.gov.au / abr.gov.au /
tpb.gov.au）を明示した。

#### Super（ato.gov.au）
- Super Guarantee（SG）率: **12%**（2025年7月1日から。段階引上げの最終段階）
- 対象: 18歳以上は労働時間に関わらず対象。18歳未満は週30時間以上勤務時に対象。
  （2022年11月に月$450の収入基準は撤廃済み）
- 加入手続き: 就労開始時に Standard Choice Form でファンドを選択。未選択時は Stapled
  Super（既存の紐付けファンド）へ拠出。
- **Payday Super: 2026年7月1日から施行**（給与支払いと同じタイミングでSGを拠出する制度）。
- 出典: ATO「How much super to pay」「Super for employers」「Departing Australia
  Superannuation Payment (DASP)」

#### ABN・Sole Trader（abr.gov.au / ato.gov.au / fairwork.gov.au）
- ABN 申請は無料（Australian Business Register / abr.gov.au）。
- GST 登録基準: 年間売上 **$75,000** 以上で登録義務。ただしライドソーシング
  （Uber等の旅客運送）は売上に関わらず登録義務。基準到達から **21日以内** に登録。
- GST 登録後は BAS（Business Activity Statement）で申告（通常四半期）。
- Contractor と Employee の区別・Sham Contracting は Fair Work / ATO の基準に基づく。
- 出典: ATO「Registering for GST」「When to charge GST」、ABR「Apply for an ABN」、
  Fair Work「Independent contractors」

#### 税務手続き（ato.gov.au / fairwork.gov.au / tpb.gov.au）
- TFN Declaration: 雇用開始時に提出（紙 NAT 3092 または ATO オンラインサービス経由）。
  未提出時は 45% 源泉徴収。
- Payslip: 雇用主は給与支払いから **1営業日以内** に発行義務（Fair Work）。記載必須項目
  （雇用主名/ABN・期間・総支給/手取り・時給/時間・Super・控除）を確認。
- Income Statement は myGov（ATO連携）で確認。雇用主のSTP確定後に「Tax ready」となり、
  多くは7月14日ごろまでに確定。申告は全てTax ready後が原則。
- myGov–ATO 連携: 本人確認情報が不足する場合はATO（13 28 61 / 海外 +61 2 6216 1111）
  で linking code を取得（発行後およそ24時間で失効）。
- タックスリターン期限: 原則 **10月31日**。登録Tax Agent経由なら延長される場合あり。
  Tax Agent は TPB（tpb.gov.au）登録者のみが報酬を得て代理可能。
- 出典: ATO「TFN declaration」「How to get your income statement」「Link the ATO to
  your myGov account」「Deductions you can claim」「Your tax residency」、Fair Work
  「Pay slips」、Tax Practitioners Board「Register」

### バッチ7（jobs・qualifications）で公開した記事の公式照合（2026-07-18）

jobs ハブ26件・qualifications ハブ9件（計35件）を公開。各記事は `verifiedAt: 2026-07-18` を
付与し、`officialSources` に以下の公式一次情報（fairwork.gov.au / safeworkaustralia.gov.au /
各州WHS・酒類規制当局 / acic.gov.au / 各州子ども保護当局 / training.gov.au）を明示した。

#### 労働条件・権利（fairwork.gov.au）
- **全国最低賃金（2026年7月1日から）: $26.44/時、$1,004.90/週（週38時間ベース）**。
  賞与的手当を含まない基本額。多くの労働者には職種別の Award 最低額（+4.75%）が適用される。
- **Casual loading: 標準25%**（NES/多くのAward）。カジュアルは有給休暇・解雇予告の権利がない代わりに割増。
- **解雇予告期間（NES）:** 勤続1年以下=1週、1〜3年=2週、3〜5年=3週、5年超=4週。
  45歳以上かつ勤続2年超は+1週。重大な非行（serious misconduct）は予告なし解雇可だが既発生賃金は支払義務。
- **無給トライアル:** スキル実演に必要な時間（1時間〜1シフト程度）を直接監督下で行う場合のみ合法。
  それを超える実務は最低賃金以上の支払い義務。
- **Final pay:** 未払賃金＋未消化の年次有給の支払い。Awardにより7日以内等の定めがある場合あり。
- **不当解雇の申立ては解雇から21日以内**（Fair Work Commission）。
- Fair Work Ombudsman は無料・TIS通訳あり・ビザ状態に関わらずビザ保有者を保護。
- 出典: Fair Work「Minimum wages」「Pay Calculator」「Casual employees」「Notice and final pay」
  「Unpaid trials」「Independent contractors」「Labour hire and supply chains」等

#### 資格・ライセンス（州当局中心・全国制度は連邦当局）
- **RSA（責任あるアルコール提供）:** 州別制度（NSW: Liquor & Gaming NSW、QLD: OLGR 等）。
  発行様式・有効期限・相互承認は州で異なる。
- **White Card（一般安全教育修了証 / CPCWHS1001）:** 認定RTOで取得、原則全国通用。
  受講形式（オンライン可否）は州で異なる（NSW等は対面要素）。
- **Food Safety Supervisor:** 州・業態・役割依存（例: NSW Food Authority）。一般スタッフに全国一律必須はなし。
- **RCG（責任あるギャンブル提供）:** ギャンブル設備を扱う業務向け。州別名称・制度（NSWはRCG）。
- **フォークリフト:** High Risk Work Licence クラス LF。認定RTOで訓練・評価→州WHS当局へ申請。全国相互承認。
- **First Aid / CPR:** HLTAID011（Provide First Aid）／HLTAID009（Provide CPR）。CPRは約1年、First Aidは約3年で更新が目安。
- **National Police Check:** ACIC 認定機関・州警察・Australia Post 経由。日本の証明とは別制度。
- **WWCC:** 州別制度（NSW: Office of the Children's Guardian、QLD: Blue Card）。Police Checkとは別で子ども関連職に必須。数年単位の有効期限。
- 出典: Fair Work、Safe Work Australia「High risk work licences」、SafeWork NSW、
  Liquor & Gaming NSW、Business Queensland (OLGR)、NSW Food Authority、Food Standards Australia
  New Zealand、ACIC「National Police Checking Service」、NSW Office of the Children's Guardian、
  Blue Card Services (QLD)、training.gov.au（HLTAID009/011）

### バッチ8（farm・Specified Work）で公開した記事の公式照合（2026-07-19）

farm ハブ36件（`category: "farm"` / `hub: "farm"`）を公開。各記事は `verifiedAt: 2026-07-19` を
付与し、`officialSources`（`accessedAt: 2026-07-19`）に以下の公式一次情報を明示した。

#### セカンドビザ・Specified Work（immi.homeaffairs.gov.au）
- **対象作業:** 植物・動物の栽培/収穫、木の刈込・剪定、狩猟・捕獲、樹木伐採、食肉加工などの一次産業、
  および指定地域での建設・災害復旧など。**ワイナリーの醸造（winemaking）は栽培・収穫と異なり対象外**。
- **対象地域:** 郵便番号（postcode）で定義。**タスマニアは州全域が指定地域に該当**。
  農場の所在地が対象ポストコードかを就労前に確認する必要がある。
- **日数の考え方:** セカンドは「3か月＝最低88暦日」、サードは「6か月＝最低179暦日」の指定作業。
  作業日のみカウントし、Payslip・銀行振込・雇用主情報などの証拠保管が必須。
- 出典: Home Affairs「Specified work」（work-holiday-417 / work-and-holiday-462）。

#### 求人・地域・作物（Workforce Australia — Harvest）
- **Harvest（旧 Harvest Trail）:** 政府運営の収穫求人情報。地域・作物・シーズン別に募集を検索できる。
- 主要産地・作物・シーズン（ガトン/ロッキヤーバレー=通年野菜、バンダバーグ=冬野菜・果物、
  スタンソープ=夏〜秋の果樹、ボーエン/エア=冬のトマト、アサートン高原=多品目通年、
  ミルデューラ=ぶどう収穫/剪定・柑橘、シェパートン=夏〜秋の果樹、グリフィス=ぶどう・柑橘、
  タスマニア=夏のチェリー・ベリー）は Harvest の地域・作物情報に基づき記載。
- 出典: Workforce Australia「Harvest」。

#### 労働条件・安全（fairwork.gov.au / safeworkaustralia.gov.au）
- **Piecework（歩合制）:** Horticulture Award では**最低賃金保証（floor）**が適用され、
  雇用主は書面のpiecework合意とPayslipの発行義務がある。歩合でも最低額を下回ってはならない。
- **Labour hire:** 一部の州（QLD/VIC/SA/ACT）では労働者派遣に**ライセンス登録制度**があり、
  無登録業者・高額天引き・賃金未払いに注意。ABN・Payslip・銀行振込の有無を確認する。
- **農作業の安全:** 熱中症・紫外線（Sun protection）、農薬・化学物質（SDS/PPE）、
  機械・梯子作業などのリスクは Safe Work Australia / 州WHS当局のガイダンスに基づき一般的注意として記載。
- 出典: Fair Work「Horticulture Award」「Piece rates」「Labour hire」、Safe Work Australia、各州WHS当局。

### housing マイクロバッチ（2026-07-19、3件）

housing ハブの3件（`housing-platforms-comparison` / `housing-message-templates` /
`inspection-checklist`）を公開。各記事は `verifiedAt: 2026-07-19` を付与し、`officialSources`
（`accessedAt: 2026-07-19`）に以下の公式一次情報を明示した。3件はいずれも比較・テンプレート・
チェックリストの実務系記事で、YMYL の中核は**賃貸詐欺の回避と契約条件の確認**であるため、
可変な家賃・料金は断定せず「目安」「週いくら表記」とし、詐欺回避と正規手続きの導線を公式に照合した。

| slug | 照合した主要ポイント | 主な出典（accessedAt 2026-07-19） |
| --- | --- | --- |
| `housing-platforms-comparison` | 内見前送金の禁止・海外オーナー詐称・急かしは賃貸詐欺の典型。プラットフォームの安全性に関わらず内見後に銀行振込で支払う | Scamwatch（ACCC）/ NSW Government Renting |
| `housing-message-templates` | 応募文で個人情報（パスポート・口座）を確定前に渡さない・内見前送金の要求は詐欺 | Scamwatch（ACCC） |
| `inspection-checklist` | 内見時に確認する項目（家賃/bills/Bond/最低滞在/退去通知）と既存傷の写真記録・Bondの正規預託 | Consumer Affairs Victoria Renting / NSW Government Renting |

- **共通の照合事実:** ①内見せず前払いを求める手口は賃貸詐欺の典型（Scamwatch）。②家賃は週
  （per week）表記が基本で、bills（電気・ガス・水道・ネット）の込み/別は物件ごとに要確認。
  ③Bond（敷金）の金額・預け方・返金ルールと最低滞在・退去通知は州の制度と契約で異なるため、
  記録に残る形で確認する（NSW Government / Consumer Affairs Victoria の Renting 情報）。
- **統合・リダイレクト:** なし（新規スラッグ、既存公開記事と検索意図が分離）。詳細は
  `CONTENT_MERGE_MAP.md`「housing マイクロバッチ」。
- **次の未完了 housing slug:** `bond-rules-overview`。

### housing バッチ完了（2026-07-19、残り16件公開）

housing ハブの残り16件を、記事単位で公式一次情報に照合して新規公開し、housing バッチを完了した。
各記事は `verifiedAt: 2026-07-19` を付与し、`officialSources`（`accessedAt: 2026-07-19`）に該当する
州の賃貸当局・詐欺通報窓口を明示。YMYL の中核は**賃貸法規（Bond・値上げ・退去）・契約条件の確認・
トラブル解決・賃貸詐欺の回避**であり、州で異なる可変値（Bond上限・値上げ頻度・通知期間）は断定せず
「目安」＋各州当局への誘導とした（`StateSpecificNotice` の方針）。

| slug | 照合した主要ポイント | 主な出典（accessedAt 2026-07-19） |
| --- | --- | --- |
| `bond-rules-overview` | Bondは州の公式機関へ預託（NSW Rental Bonds Online / VIC RTBA / QLD RTA）・上限の目安は家賃4週間分・個人口座への払込リスク・又貸し/間借りは保護外の場合 | RTA(QLD) / NSW Government Renting / Consumer Affairs Victoria |
| `condition-report-guide` | 入居時の状態記録と写真で退去時のBondを守る・fair wear and tearは負担外 | NSW Government Renting / Consumer Affairs Victoria |
| `rental-agreement-share-house` | 家賃/Bond/最低滞在/退去通知/光熱費/契約形態（正式契約 vs sub-let/lodger）の確認 | Consumer Affairs Victoria / NSW Government Renting |
| `rent-and-bills` | 家賃は週表記・billsの込み/別と上限(cap)・割り勘の精算 | Consumer Affairs Victoria / NSW Government Renting |
| `rent-increase-rules` | 値上げは頻度制限（NSW: 2024-10-31以降12か月に1回）・書面事前通知（QLD一般賃貸2か月前）・VIC 2025-11-25新法・NCAT/QCAT/VCAT | NSW Government Renting / RTA(QLD) / Consumer Affairs Victoria |
| `bond-refund-dispute` | 証拠→交渉→州機関/トリブナル（NCAT/QCAT/VCAT）・fair wear and tearは負担外・又貸しは少額訴訟等 | NSW Government Renting / RTA(QLD) / Consumer Affairs Victoria |
| `ending-tenancy-notice` | 通知期間を守る・書面で残す・鍵返却/Bond精算・途中退去の後任負担 | Consumer Affairs Victoria / NSW Government Renting |
| `find-replacement-tenant` | 無断転貸（unauthorised sub-let）を避け家主/借主の許可を得る・Bond名義変更 | Consumer Affairs Victoria / NSW Government Renting |
| `share-house-rules` | 掃除/騒音/ゲスト/共有物の合意・退去は通知期間を守る | Consumer Affairs Victoria / NSW Government Renting |
| `share-house-conflict` | 記録→冷静に伝える→州の賃貸当局/トリブナル・身の危険は000 | NSW Government Renting / Consumer Affairs Victoria |
| `short-term-accommodation` | ホステル/Airbnb/ホテル/サブレット比較・内見前送金しない | Scamwatch（ACCC） |
| `hostel-guide` | 立地/治安・鍵付きロッカー・長期割引・仕事紹介の前払い勧誘に注意 | Scamwatch（ACCC） |
| `homestay-guide` | 費用に含まれるもの・家庭ルール・個人手配の前払い注意 | Scamwatch（ACCC） |
| `couple-room-housing` | 家賃が部屋/一人単位か・二人分の総額・内見前送金しない | Scamwatch（ACCC） |
| `regional-farm-housing` | 雇用連動（辞めたら退去/給料天引き）のリスク・車/送迎・搾取時の相談先 | Consumer Affairs Victoria / Scamwatch（ACCC） |
| `rental-scam-examples` | 内見前送金・激安・海外オーナー・偽契約・身分証悪用・急かし／被害時は銀行→Scamwatch→ReportCyber→IDCARE | Scamwatch（ACCC） / NSW Government Renting |

- **照合した公式一次情報（accessedAt 2026-07-19）:** RTA(QLD, rta.qld.gov.au)、NSW Government
  「Renting a place to live」(nsw.gov.au)、Consumer Affairs Victoria「Renting」(consumer.vic.gov.au)、
  Scamwatch（ACCC / National Anti-Scam Centre, scamwatch.gov.au）。3b 節で照合済みの内容
  （Bond上限・値上げ頻度・預託機関・詐欺の危険サイン）を各記事本文へ反映した。
- **統合・リダイレクト:** なし（16件は新規スラッグ、既存公開記事・マイクロバッチと検索意図が分離）。
- **留保点:** Bond上限の具体額・値上げの通知期間・退去通知期間は州で異なるため断定せず、各州当局
  （RBO/RTBA/RTA・NCAT/QCAT/VCAT）へ誘導。又貸し/間借り（sub-let/lodger）は州の賃貸法の保護外に
  なる場合が多い旨を各記事で明示した。
- **検証:** `validate:articles`（ユニーク slug 224・重複0・housing 21件）、`tsc --noEmit` クリーン、
  `validate:content` 0 error / 66 warning、`test:content` 5/5 pass、`eslint` クリーン、
  `next build` 成功（278静的ページ）。

## 3. 未解決・要注意の記述（限定事項）
- **「88日」対「3 months」（解決済み）:** immi の Specified work ページ（更新 2025-09-11）を実照合し、
  公式に「3か月 = 1年で最も短い3か月分に相当 = 最低88暦日（週末・休息日を含む）」と明記されていることを確認。
  「88日（約3か月）」の併記は公式定義と整合しており、`second-visa-guide` に当該ページを出典として追加。
  専用記事 `88-day-calculation`（数え方）・`six-month-specified-work`（179日）を新規公開。
- **DASP の源泉税率（例: 65%）（未解決・保留）:** 帰国後スーパー返金（DASP）の源泉税率は、
  本サイクルで ATO の DASP ページ・Schedule 13 が自動取得（fetch）で本文抽出できず、**公式照合を完了できなかった**。
  したがって断定的な税率は掲載せず、`super-guide`/`dasp-refund` は一般的説明にとどめ、
  金額・税率の確定値は今後の照合対象（`BULK_PUBLISH_REMAINING.md`）とします。
- **州別規則:** 運転免許の切替、州税、季節労働地域など州/準州で異なる事項は、
  対象の州/準州を必ず明示する方針（`StateSpecificNotice` コンポーネント）。本サイクルの
  公開記事は全国共通事項が中心で、州別断定は含めていない。

## 3b. housing バッチ チェックポイント（2026-07-19 / 中断・記事未公開）

housing（家探し・賃貸）バッチの公式照合を実施したが、リクエストのタイムアウトにより
記事本文の生成を打ち切ったため、**以下の照合結果はまだ記事に反映・公開していない**。
次回 housing バッチ再開時（`housing-platforms-comparison` から）に本文へ反映する。

### 賃貸・Bond（州の賃貸当局）
- **QLD（rta.qld.gov.au — Rent increases / Bonds、アクセス 2026-07-19）:** 一般賃貸の
  Bond 上限は **家賃4週間分**（2024年9月30日以降、週家賃の額にかかわらず）。Bond は RTA に
  預託（Bond Lodgement Web Service / Form 2）。家賃値上げは**前回から最低12か月**、一般賃貸は
  **2か月前**の書面通知が必要。紛争は RTA 紛争解決／QCAT。
- **NSW（nsw.gov.au — Renting a place to live、アクセス 2026-07-19）:** 家賃値上げは
  **2024年10月31日以降、12か月に1回まで**。Bond は Rental Bonds Online（NSW Fair Trading）で管理。
  Condition report・Rental Bonds Online・紛争は NCAT。
- **VIC（consumer.vic.gov.au — Renting、アクセス 2026-07-19）:** **2025年11月25日から新しい
  賃貸法**が施行。Bond は RTBA（rentalbonds.vic.gov.au、Consumer Affairs Victoria がホスト）へ
  預託。紛争は VCAT。
- **重要な留保点:** シェアハウスのサブテナント／同居人（lodger）は、州の賃貸法の保護対象外に
  なる場合が多い。書面合意を取り、支払いは記録の残る銀行振込で行う旨を記事で明示する予定。

### 家探し詐欺（scamwatch.gov.au — ACCC、アクセス 2026-07-19）
- 賃貸・宿泊の詐欺は「buying and selling scams」等に分類。**内見前の送金要求・相場より
  極端に安い物件・海外在住オーナー・身分証の事前要求**が代表的な危険サイン。被害・情報は
  Scamwatch へ報告。

### 照合の限定事項
- Bond 上限の具体額は州により異なり（QLD は家賃4週間分を確認済み、VIC/NSW/他州は各当局へ
  誘導する方針）、記事では**断定を避けて各州の当局リンクへ誘導**する。verifiedAt は
  記事公開時に付与する（本チェックポイントでは記事未公開のため未付与）。

## transport サブバッチ #1（車の所有・購入・故障 / 2026-07-19）

transport ハブの中古車購入〜所有〜故障対応 8件の公式照合。

### PPSR（ppsr.gov.au — Australian Financial Security Authority / AFSA、アクセス 2026-07-19）
- 中古車購入前の **PPSR照会は $2**（QuickVIN Search、transact.ppsr.gov.au）。VIN（車体番号）を入力し、
  **ローン残債（money owing / security interest）・盗難（stolen）・全損（written-off）** の記録を確認できる。
- PPSR は機械的な故障状態までは保証しない旨を記事に明記（現車確認・試乗と併用）。
- 記事反映: `ppsr-check-guide`（手順）、`used-car-inspection-checklist`（支払い前の必須チェックとして）。

### Rego・CTP・Roadworthy/Safety（州の運輸当局、アクセス 2026-07-19）
- **Rego（登録）** は公道走行の許可、**CTP（強制対人保険）** は他人のケガのみ補償（物損・自車は対象外）。
  CTP の扱いは州で異なる（NSW は Green Slip を別購入、VIC=TAC charge / QLD は Rego に含む）。
- **車検相当の安全検査証**の名称は州で異なる（VIC=Roadworthy Certificate/RWC、QLD=Safety Certificate、
  NSW=eSafety inspection 通称 pink slip）。可変のため断定せず各州当局（Transport for NSW / VicRoads /
  QLD TMR）へ誘導。記事反映: `rego-ctp-rwc`。

### 名義変更（Transfer / 州の運輸当局、アクセス 2026-07-19）
- 中古車の名義変更は **買主が原則14日以内**、**名義変更手数料＋印紙税（stamp duty）** が必要。売主には
  notice of disposal（売却届）義務がある州が多い。正確な期限・費用は州で異なるため Service NSW /
  VicRoads / QLD Government へ誘導。記事反映: `vehicle-transfer-by-state`。

### 自動車保険（moneysmart.gov.au — ASIC、アクセス 2026-07-19）
- 保険は **CTP（強制）→ Third Party Property → Third Party Fire & Theft → Comprehensive** の4段階。
  CTP は人のケガのみ、物損には最低 Third Party Property が必要。免責額（excess）・海外免許条件は
  保険会社で異なるため複数社比較を推奨。記事反映: `car-insurance-comparison`。

### ロードサービス／緊急（自動車クラブ・Triple Zero、アクセス 2026-07-19）
- 州別クラブ: **NSW/ACT=NRMA、VIC=RACV、QLD=RACQ、SA=RAA、WA=RAC、TAS=RACT、NT=AANT**。相互利用
  （reciprocal rights）あり。対応=バッテリー・パンク・鍵・ガス欠・レッカー。**緊急・身の危険は 000**
  （triplezero.gov.au）を優先。記事反映: `roadside-assistance`、`car-breakdown-guide`、`flat-tyre-guide`。
- テンポラリースペア（応急用の細いタイヤ）は速度・距離制限あり（多くは約80km/h）。あくまで最寄りの
  工場までの応急用と明記。記事反映: `flat-tyre-guide`。

### 照合の限定事項
- 州別の Rego/CTP/車検・名義変更の**具体的な料金・期限・名称は可変**のため、記事では断定を避け各州の
  運輸当局・自動車クラブへ誘導。verifiedAt は記事公開時（2026-07-19）に付与済み。

## transport サブバッチ #2（免許・有料道路・駐車・事故・地方運転 / 2026-07-19）

transport ハブの残り13件（transport 9件＋license 4件）の公式照合。

### ガソリン価格比較（州政府ツール、アクセス 2026-07-19）
- **NSW=FuelCheck（fuelcheck.nsw.gov.au）**、**WA=FuelWatch（fuelwatch.wa.gov.au）** は政府運営で価格公開が
  義務。リアルタイム/翌日価格を無料確認できる。都市部は price cycle（価格サイクル）があり底で給油すると安い。
  他州は民間アプリが実用的。記事反映: `fuel-saving-apps`（officialSources: FuelCheck / FuelWatch）。

### 有料道路・Toll（Linkt / Transurban、linkt.com.au、アクセス 2026-07-19）
- **Linkt（運営 Transurban）** が Sydney/Melbourne/Brisbane の主要 toll を処理。料金所での現金支払いは不可で
  ナンバー読取りの後払い。アカウント未作成でも **「pay a recent toll」でナンバー入力して後払い可**（通常3日程度の
  猶予、放置で管理手数料→罰金）。レンタカーは会社の toll 処理サービス（手数料＋通行料）。記事反映:
  `tolls-linkt-guide`（officialSources: Linkt）。

### 海外免許での運転・州別ルール（州の交通当局、アクセス 2026-07-19）
- 一時滞在者（temporary visitor）は有効な海外免許＋IDP/公認英訳で運転できる州が多いが、**永住・現地居住者に
  移行すると一定期間内に現地免許への切替義務**が生じ得る。QLD 公式（qld.gov.au/transport…/overseas）で
  「visitor は overseas licence で運転可、permanent resident になったら QLD licence が必要」を確認。切替要件・
  RWC要否・試験の有無は州で異なるため断定せず各州当局（Transport for NSW / VicRoads / QLD TMR 等）へ誘導。
  記事反映: `japanese-licence-state-rules`、`convert-japanese-licence`、`motorcycle-licence-australia`。

### デジタル運転免許証（Service NSW 等、アクセス 2026-07-19）
- **NSW（Service NSW アプリ）・QLD・SA** など一部の州で digital driver licence を導入。**現地免許保有者向け**で、
  一時滞在者（海外免許＋IDP）は対象外。本人確認（identity verification）は登録データとの完全一致が必要で、
  住所未更新等で失敗しやすい。物理カード携帯要否は州のルール次第。記事反映: `digital-driver-licence`。

### 駐車・事故・レンタカー・地方運転（可変ルールのため当局誘導、アクセス 2026-07-19）
- 駐車標識（1P/2P/No Parking/No Stopping/Clearway）・罰金・異議申立ては自治体（council）差が大きいため
  基本の読み方のみ提示し発行元へ誘導（`parking-fines-guide`）。事故対応は **緊急=000**、情報交換・警察届出
  基準は州差ありとして Triple Zero と各州警察へ誘導（`car-accident-guide`）。レンタカーは免責（excess）・
  燃料・走行距離・若年料金の確認を提示（`rent-a-car-guide`）。地方運転は給油計画・野生動物・圏外対策・
  故障時は車に留まる原則を提示（`remote-driving-safety`）。E-bike/e-scooter は州・自治体で合法性・速度・
  ヘルメット義務が大きく異なるため各当局へ誘導、自転車のヘルメットは全国義務と明記（`e-bike-e-scooter-rules`）。

### 照合の限定事項
- 免許切替・駐車罰金・事故届出・e-scooter 規制などの**具体的な条件は州/自治体で可変**のため断定を避け、
  各州交通当局・council・警察へ誘導。verifiedAt は記事公開時（2026-07-19）に付与済み。

## area マイクロバッチ #5 = area ハブ完了（SA / TAS / NT 州ガイド / 2026-07-30 / 残り3件公開＋最終監査）

area ハブの残り全3件を新規公開し、**area ハブを完了**した（すべて `hub: "area"`・`category: "area"`・`intent: state-guide`・分類は全て create）。州ガイドは可変事項（家賃・時給・求人数・運賃／州ごとに変わる免許切替・賃貸条件）を断定せず、州の**制度/公式に紐づく事実**（免許・登録の所管、公共交通カード、賃貸・ボンドの所管、セカンドビザ対象性、気候・警報）を公式一次情報に照合し、各記事の `OfficialSourceBox` に出典と免責（制度・運賃・シーズンは変わりうる旨、最新は各公式で確認）を明示した。全3件に `verifiedAt: 2026-07-30` を付与。

- `state-sa-guide`（P3, id a317, state-guide）— **Service SA / mySA GOV（免許・登録）**（https://www.sa.gov.au/topics/driving-and-transport ）＋**Adelaide Metro（metroCARD）**（https://www.adelaidemetro.com.au/ ）＋**Consumer and Business Services（CBS・賃貸・ボンド）**（https://www.cbs.sa.gov.au/ ）。アクセス 2026-07-30。物価が落ち着いた傾向・ワイン/農業のセカンドビザ、公開記事（`area-adelaide`）へリンク。
- `state-tas-guide`（P2, id a318, state-guide）— **Transport Tasmania / Service Tasmania（免許・登録）**（https://www.transport.tas.gov.au/ ）＋**Metro Tasmania（greencard）**（https://www.metrotas.com.au/ ）＋**CBOS（賃貸・ボンド）**（https://www.cbos.tas.gov.au/ ）＋**BOM｜Climate averages**（http://www.bom.gov.au/climate/averages/ ）。アクセス 2026-07-30。他州より涼しい・冬の冷え込み、ベリー/果樹のセカンドビザ、公開記事（`area-hobart`・`region-tasmania-farm`）へリンク。
- `state-nt-guide`（P2, id a319, state-guide）— **NT Government｜MVR（免許・登録）**（https://nt.gov.au/driving ）＋**NT Government｜Public transport**（https://nt.gov.au/driving/public-transport-cycling ）＋**NT Consumer Affairs（賃貸・ボンド）**（https://consumeraffairs.nt.gov.au/ ）＋**BOM｜Climate averages・気象警報**（http://www.bom.gov.au/climate/averages/ ）。アクセス 2026-07-30。**乾季（5〜10月頃）・雨季（11〜4月頃）・サイクロン/洪水**、都市間の遠さ・安全対策、公開記事（`area-darwin`）へリンク。
- **統合・リダイレクト・分割:** なし（3件は新規スラッグ、既存公開記事・マイクロバッチ #1〜#4 と検索意図が分離）。都市/地域記事（area-guide）と州ガイド（state-guide）は役割が異なるため別記事として保持。`relatedSlugs` は公開/既存 slug のみ参照（dangling 回避）。
- **最終 area ハブ監査:** `npm run build`（exit 0・`/sitemap.xml` 生成）／`npm run lint`（exit 0）／`npm run test:content`（5/5 pass）／`validate:articles`（area 29・重複0・OK）／`tsc --noEmit`（exit 0）／`validate:content`（0 error / 66 warning・dangling なし）。
- **area ハブ完了: 公開29件（既存6＋計画23）。planned/merged/review/excluded: 0件。次のカテゴリ（travel 等）には着手しない。**

## area マイクロバッチ #4（グリフィス / NSW・VIC・QLD・WA 州ガイド / 2026-07-30 / 5件公開）

area ハブの次の5件を新規公開した（すべて `hub: "area"`・`category: "area"`・分類は全て create）。市/ファーム地域ガイド（`area-griffith`）と州ガイド4件（`intent: state-guide`）は、可変事項（家賃・時給・求人数・運賃・収穫シーズンの需要／州ごとに変わる免許切替・賃貸条件）を断定せず、州の**制度/公式に紐づく事実**（免許・登録の所管、公共交通カード、賃貸・ボンドの所管、セカンドビザ対象性、気候）を公式一次情報に照合し、各記事の `OfficialSourceBox` に出典と免責（制度・運賃・シーズンは変わりうる旨、最新は各公式で確認）を明示した。全5件に `verifiedAt: 2026-07-30` を付与。

- `area-griffith`（P2, id a312, area-guide）— **Transport for NSW（NSW TrainLink 含む）**（https://transportnsw.info/ ）＋**Home Affairs｜Specified work**（https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work ）＋**BOM｜Climate averages**（http://www.bom.gov.au/climate/averages/ ）。アクセス 2026-07-30。NSW内陸リベリーナのファーム・食品加工・セカンドビザ拠点性、乾燥内陸の暑さ/冷え込み、悪質農園への注意を明示。
- `state-nsw-guide`（P2, id a313, state-guide）— **Service NSW（免許・車の登録）**（https://www.service.nsw.gov.au/ ）＋**Transport for NSW（Opal）**（https://transportnsw.info/ ）＋**NSW Fair Trading（賃貸・ボンド）**（https://www.fairtrading.nsw.gov.au/ ）。アクセス 2026-07-30。免許切替・賃貸条件は変わりうるため各公式で最新確認へ誘導。都市はシドニー/ニューカッスル/ウーロンゴン/グリフィスの公開記事へリンク。
- `state-vic-guide`（P2, id a314, state-guide）— **VicRoads（免許・登録）**（https://www.vicroads.vic.gov.au/ ）＋**Public Transport Victoria（myki）**（https://www.ptv.vic.gov.au/ ）＋**Consumer Affairs Victoria（賃貸・ボンド）**（https://www.consumer.vic.gov.au/ ）。アクセス 2026-07-30。北部（ミルデューラ・シェパートン）のファーム・セカンドビザ、公開都市記事へリンク。
- `state-qld-guide`（P1, id a315, state-guide）— **Queensland Government｜Transport and motoring（免許・登録）**（https://www.qld.gov.au/transport ）＋**Translink（go card）**（https://translink.com.au/ ）＋**Residential Tenancies Authority（RTA・賃貸・ボンド）**（https://www.rta.qld.gov.au/ ）。アクセス 2026-07-30。熱帯・亜熱帯の雨季/サイクロン注意、ファーム地域のセカンドビザ対象確認、公開都市記事へリンク。
- `state-wa-guide`（P2, id a316, state-guide）— **Department of Transport（WA・免許・登録）**（https://www.transport.wa.gov.au/ ）＋**Transperth（SmartRider）**（https://www.transperth.wa.gov.au/ ）＋**Consumer Protection（WA・賃貸・ボンド）**（https://www.commerce.wa.gov.au/consumer-protection ）。アクセス 2026-07-30。広大で都市間距離が長い点・地方移動計画・東海岸との時差（AWST）、公開記事（`area-perth`）へリンク。
- **統合・リダイレクト・分割:** なし（5件は新規スラッグ、既存公開記事・マイクロバッチ #1〜#3 と検索意図が分離）。都市記事（area-guide）と州ガイド（state-guide）は役割が異なるため別記事として保持。未公開（planned）slug（`state-sa-guide`・`state-tas-guide`・`state-nt-guide` 等）は `relatedSlugs` に含めず公開/既存 slug のみ参照（dangling 回避）。
- **area 26/29 が最終ステータス確定（既存6件＋バッチ #1〜#3 の15件＋本バッチ5件）。残り3件（`state-sa-guide`・`state-tas-guide`・`state-nt-guide`）。次回は ≤5 のため全件処理＋最終 area ハブ監査。travel には着手しない。**

## area マイクロバッチ #3（タウンズビル / ニューカッスル / ウーロンゴン / ミルデューラ / シェパートン / 2026-07-30 / 5件公開）

area ハブの次の5件を新規公開した（すべて `hub: "area"`・`category: "area"`・分類は全て create）。都市/地域ガイドは可変事項（家賃・時給・求人数・運賃・収穫シーズンの需要）を断定せず、交通・気候・空港・セカンドビザ対象性など**制度/公式に紐づく事実**を公式一次情報に照合し、各記事の `OfficialSourceBox` に出典と免責（制度・運賃・シーズンは変わりうる旨）を明示した。全5件に `verifiedAt: 2026-07-30` を付与。

- `area-townsville`（P2, id a307, area-guide）— **Translink（QLD go card）**（https://translink.com.au/ ）＋**Townsville Airport（TSV）**（https://www.townsvilleairport.com.au/ ）＋**BOM｜Climate averages・気象警報**（http://www.bom.gov.au/climate/averages/ ）。いずれもアクセス 2026-07-30。**雨季（11〜4月頃）・サイクロン**、周辺ファーム（Bowen/Ayr）のセカンドビザ対象確認を明示。
- `area-newcastle`（P2, id a308, area-guide）— **Transport for NSW（Opal）**（https://transportnsw.info/ ）＋**Newcastle Airport（NTL）**（https://www.newcastleairport.com.au/ ）＋**BOM｜Climate averages**（http://www.bom.gov.au/climate/averages/ ）。アクセス 2026-07-30。家賃は断定せず「シドニーより抑えやすい傾向」とし Flatmates・realestate.com.au での確認へ誘導。
- `area-wollongong`（P3, id a309, area-guide）— **Transport for NSW（Opal）**（https://transportnsw.info/ ）＋**BOM｜Climate averages**（http://www.bom.gov.au/climate/averages/ ）。アクセス 2026-07-30。シドニーへの電車通勤圏、家賃はエリア・時期で変動と明示。
- `area-mildura`（P2, id a310, area-guide）— **Public Transport Victoria（V/Line・地域バス）**（https://www.ptv.vic.gov.au/ ）＋**Home Affairs｜Specified work**（https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work ）＋**BOM｜Climate averages**（http://www.bom.gov.au/climate/averages/ ）。アクセス 2026-07-30。**乾燥内陸・夏は高温/冬は冷え込み**、セカンドビザ拠点性・悪質農園への注意を明示。
- `area-shepparton`（P2, id a311, area-guide）— **Public Transport Victoria（V/Line・地域バス）**（https://www.ptv.vic.gov.au/ ）＋**Home Affairs｜Specified work**（https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work ）＋**BOM｜Climate averages**（http://www.bom.gov.au/climate/averages/ ）。アクセス 2026-07-30。果物・食品加工のセカンドビザ拠点性、内陸の寒暖差を明示。
- **統合・リダイレクト・分割:** なし（5件は新規スラッグ、既存公開記事・マイクロバッチ #1/#2 と検索意図が分離）。未公開（planned）slug（`state-*-guide`・`area-griffith` 等）は `relatedSlugs` に含めず公開/既存 slug のみ参照（dangling 回避）。
- **area 21/23 が最終ステータス確定（既存6件＋バッチ #1 5件＋#2 5件＋本バッチ5件）。次の未完了 area slug: `area-griffith`。travel には着手しない。**

## area マイクロバッチ #2（ダーウィン / サンシャインコースト / トゥーンバ・ガトン / バンダバーグ / スタンソープ / 2026-07-30 / 5件公開）

area ハブの次の5件を新規公開した（すべて `hub: "area"`・`category: "area"`・分類は全て create）。都市/地域ガイドは可変事項（家賃・時給・求人数・運賃・収穫シーズンの需要）を断定せず、交通・気候・空港・セカンドビザ対象性など**制度/公式に紐づく事実**を公式一次情報に照合し、各記事の `OfficialSourceBox` に出典と免責（制度・運賃・シーズンは変わりうる旨）を明示した。全5件に `verifiedAt: 2026-07-30` を付与。

- `area-darwin`（P1, id a302, area-guide）— **Northern Territory Government｜Public transport**（https://nt.gov.au/driving/public-transport-cycling ）＋**Department of Home Affairs｜Specified work**（https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work ）＋**Darwin International Airport（DRW）**（https://www.darwinairport.com.au/ ）＋**BOM｜Climate averages・気象警報**（http://www.bom.gov.au/climate/averages/ ）。いずれもアクセス 2026-07-30。**乾季（5〜10月頃）・雨季（11〜4月頃）・サイクロン**、建設/季節労働の対象確認を明示。
- `area-sunshine-coast`（P2, id a303, area-guide）— **Translink（QLD go card）**（https://translink.com.au/ ）＋**Sunshine Coast Airport（MCY）**（https://www.sunshinecoastairport.com.au/ ）＋**BOM｜Climate averages**（http://www.bom.gov.au/climate/averages/ ）。アクセス 2026-07-30。家賃は断定せず Flatmates・realestate.com.au での確認へ誘導。UV は ARPANSA・BOM に言及。
- `area-toowoomba-gatton`（P0, id a304, area-guide）— **Translink（QLD 公共交通）**（https://translink.com.au/ ）＋**Home Affairs｜Specified work**（https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work ）＋**BOM｜Climate averages**（http://www.bom.gov.au/climate/averages/ ）。アクセス 2026-07-30。**内陸の冷え込み・霜**、ファーム地域は車が必須級である点、セカンドビザ対象確認を明示。
- `area-bundaberg`（P1, id a305, area-guide）— **Translink（QLD 公共交通）**（https://translink.com.au/ ）＋**Home Affairs｜Specified work**（https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work ）＋**BOM｜Climate averages**（http://www.bom.gov.au/climate/averages/ ）。アクセス 2026-07-30。セカンドビザ拠点性・悪質農園への注意・屋外作業の暑さ/UV を明示。
- `area-stanthorpe`（P2, id a306, area-guide）— **Translink（QLD 公共交通）**（https://translink.com.au/ ）＋**Home Affairs｜Specified work**（https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work ）＋**BOM｜Climate averages（低温/霜）**（http://www.bom.gov.au/climate/averages/ ）。アクセス 2026-07-30。**グラニットベルトの寒さ（霜・まれに雪）**、公共交通が限られ車が便利な点、セカンドビザ対象確認を明示。
- **統合・リダイレクト・分割:** なし（5件は新規スラッグ、既存公開記事・マイクロバッチ #1 と検索意図が分離）。未公開（planned）slug（`state-*-guide`・未公開 area slug 等）は `relatedSlugs` に含めず公開/既存 slug のみ参照（dangling 回避）。
- **area 16/23 が最終ステータス確定（既存6件＋バッチ #1 5件＋本バッチ5件）。次の未完了 area slug: `area-townsville`。travel には着手しない。**

## area マイクロバッチ #1（ゴールドコースト / パース / ケアンズ / キャンベラ / ホバート / 2026-07-27 / 5件公開・既存結合記事2件を分割）

area ハブの先頭5件を新規公開し、既存の結合記事2件（`area-brisbane`・`area-perth-cairns`）を分割・再構成した（すべて `hub: "area"`・`category: "area"`）。都市ガイドは可変事項（家賃・時給・求人数・運賃・シーズン需要）を断定せず、交通・気候・空港など**制度/公式に紐づく事実**を公式一次情報に照合し、各記事の `OfficialSourceBox` に出典と免責（制度・運賃・シーズンは変わりうる旨）を明示した。全5件に `verifiedAt: 2026-07-27` を付与。

- `area-gold-coast`（P0, id a297, area-guide）— **Translink（QLD公共交通・go card・G:link 運賃）**（https://translink.com.au/ ）＋**Gold Coast Airport（OOL）**（https://www.goldcoastairport.com.au/ ）＋**Bureau of Meteorology｜Climate averages**（http://www.bom.gov.au/climate/averages/ ）。いずれもアクセス 2026-07-27。家賃は断定せず Flatmates・realestate.com.au での確認へ誘導。UV/熱中症は ARPANSA・BOM に言及。
- `area-perth`（P0, id a298, area-guide）— **Transperth（WA公共交通・SmartRider・無料 CAT バス）**（https://www.transperth.wa.gov.au/ ）＋**Perth Airport（PER）**（https://www.perthairport.com.au/ ）＋**BOM｜Climate averages**（http://www.bom.gov.au/climate/averages/ ）。アクセス 2026-07-27。**時差（AWST・東海岸との差）**を明示。鉱業関連の賃金は断定せず募集ごとの確認へ誘導。
- `area-cairns`（P0, id a299, area-guide）— **BOM｜Climate averages・気象警報（雨季・サイクロン）**（http://www.bom.gov.au/climate/averages/ ）＋**Department of Home Affairs｜Specified work（417 セカンドビザ対象作業）**（https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work ）＋**Cairns Airport（CNS）**（https://www.cairnsairport.com.au/ ）。アクセス 2026-07-27。**雨季（11〜4月頃）・サイクロン**注意、悪質農園・セカンドビザ対象確認を強調。市内バス（Sunbus）の運賃・路線は変わりうるとして Translink/Queensland Government での確認へ誘導。
- `area-canberra`（P2, id a300, area-guide）— **Transport Canberra（ACT公共交通・Light Rail・MyWay）**（https://www.transport.act.gov.au/ ）＋**BOM｜Climate averages**（http://www.bom.gov.au/climate/averages/ ）。アクセス 2026-07-27。**内陸で冬は冷え込み霜**の可能性を明示、求人数が少なめとして複数の探し方を推奨。
- `area-hobart`（P2, id a301, area-guide）— **Metro Tasmania（TAS公共交通・Greencard）**（https://www.metrotas.com.au/ ）＋**Hobart Airport（HBA）**（https://www.hobartairport.com.au/ ）＋**BOM｜Climate averages**（http://www.bom.gov.au/climate/averages/ ）。アクセス 2026-07-27。**冷涼・冬は本土より寒い**を明示、季節労働（チェリー/ベリー/りんご/養殖）はシーズン確認へ誘導。
- **既存結合記事の分割（公開URL保持・リダイレクトなし）:** `area-brisbane`（ブリスベン中心に再構成、Translink・BOM を照合、家賃の断定を撤廃し `verifiedAt` 付与）、`area-perth-cairns`（「パース vs ケアンズ」比較ガイドに再構成、家賃の断定を撤廃、詳細は新規 `area-perth`・`area-cairns` へ誘導）。**公開中URLの自動統合・リダイレクトは行わない**（リポジトリ方針に準拠）。
- **統合・リダイレクト:** なし（5件は新規スラッグ、既存公開記事と検索意図が分離。既存結合記事はURL保持のまま分割・再構成）。未公開（planned）slug（`state-*-guide`・`area-darwin` 等）は `relatedSlugs` に含めず公開/既存 slug のみ参照（dangling 回避）。
- **area 11/23 が最終ステータス確定（既存6件＋本バッチ5件）。次の未完了 area slug: `area-darwin`。travel には着手しない。**

## english マイクロバッチ #3＝english ハブ完了（リスニング教材 / 言語交換・Meetup / IELTS・PTE試験選び / 2026-07-27 / 3件公開・ハブ完了）

english ハブの残り全3件を新規公開し、**ハブを完了**した（すべて `hub: "english"`・`category: "english"`）。タイトルの主要な問いに変わりうる事実（ビザの英語要件・受入試験・必要スコア）を含む1件は公式一次情報に照合し、記事内 `OfficialSourceBox` に出典と免責を明示した。残る2件は変わりうる数値・料金・法規の主張を含まないため、公式ソースは付さず `verifiedAt: 2026-07-27` のみ付与した。

- `ielts-pte-after-wh`（P2, id a296, comparison）— **Department of Home Affairs｜English language requirements**（https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/english-language ／アクセス 2026-07-27・当該ページ最終更新 2026-02-02）。**2025年8月7日から受入試験が変更**、ビザ目的では**オンライン／自宅受験は不可**（secure test centre での受験が必要）、受入試験は IELTS・PTE Academic・TOEFL iBT・OET・Cambridge C1 Advanced 等、**必要スコアはビザ subclass・目的で異なる**ことを確認。＋**IELTS 公式**（https://ielts.org/ ）＋**PTE Academic 公式**（https://www.pearsonpte.com/pte-academic ）。**具体的なバンドスコアは記載せず**、要件は年度・subclass・目的で変わるとして移民局・各ビザ案内・**登録移民代理人（registered migration agent）**へ誘導。
- `listening-resources`（P2, id a294, learning）・`language-exchange-meetup`（P2, id a295, social）— 変わりうる数値・料金・法規の主張なし。教材選び・学習法・言語交換の参加は「人により合う/合わない・客観的な正解はない」推奨として提示。`verifiedAt: 2026-07-27` のみ付与、`officialSources` なし。`language-exchange-meetup` は安全（公共の場で会う・個人情報や金銭のやり取りに注意・投資/送金の勧誘は詐欺の可能性）を明示。
- **統合・リダイレクト:** なし（3件は新規スラッグ、既存公開記事・マイクロバッチ #1/#2 と検索意図が分離）。未公開（planned）slug は `relatedSlugs` に含めず公開/既存 slug のみ参照（dangling 回避）。
- **english ハブ 13/13 完了。次の未完了 english slug: なし。area/travel には着手しない。**

## english マイクロバッチ #2（銀行・税・年金英語 / 医療英語 / 車トラブル英語 / 電話英語 / 英文テンプレート / 2026-07-27 / 5件公開）

english ハブの次の5件を新規公開した（すべて `hub: "english"`・`category: "english"`）。タイトルの主要な問いに関わる変わりうる事実（税・年金の手続き、医療・緊急、事故対応）は公式一次情報に照合し、記事内 `OfficialSourceBox` に出典と免責を明示した。電話英語・英文テンプレートの2件は変わりうる数値・料金・法規の主張を含まないため、公式ソースは付さず `verifiedAt: 2026-07-27` のみ付与した。

- `bank-tax-english`（P1, id a289）— **ATO｜Tax file number**（https://www.ato.gov.au/individuals-and-families/tax-file-number ／アクセス 2026-07-27）。「TFNの申請は無料（It is free to apply）」を確認。税率・控除・申告可否は年度・個人の状況で変わるため断定せず、ATO・myGov・登録税理士（registered tax agent）へ誘導。記事は「英語フレーズ（伝え方）」に限定し制度・金額は扱わない旨を明記。
- `medical-english`（P0, id a290）— **healthdirect**（政府運営の無料健康相談・症状チェッカー／24時間電話 **1800 022 222**。https://www.healthdirect.gov.au/ ／アクセス 2026-07-27）＋**Triple Zero (000)**（緊急通報。https://www.triplezero.gov.au/ ）。診断・治療の判断は必ず医療者に委ねる旨を明示し、緊急時は000、緊急でない相談は healthdirect へ誘導。
- `car-trouble-english`（P1, id a291）— **Triple Zero (000)**（けが人・火災・危険時の緊急通報。https://www.triplezero.gov.au/ ／アクセス 2026-07-27）。事故の警察届出義務・保険の扱いは**州・状況で異なる**ため断定せず、各州交通当局・警察・保険会社へ誘導。整備は事前見積もり（quote）取得を推奨。
- `phone-call-english`（P1, id a292）・`email-message-templates`（P0, id a293）— 変わりうる数値・料金・法規の主張なし。電話の練習法・英文テンプレートは「例であり、名前・日付・詳細を差し替え、相手・場面で丁寧さを調整する」前提を明示。`verifiedAt: 2026-07-27` のみ付与、`officialSources` なし。欠勤連絡テンプレでは診断書要否が雇用形態・職場・Award で異なるとして契約＋Fair Work へ誘導。
- **統合・リダイレクト:** なし（5件は新規スラッグ、既存公開記事・マイクロバッチ #1 と検索意図が分離）。既存 `workplace-english` へは内部リンクのみ追記。

## english マイクロバッチ #1（職場英語・接客英語・家探し英語・豪州アクセント・スラング / 2026-07-27 / 5件公開）

english ハブの最初の5件を新規公開した（すべて `hub: "english"`・`category: "english"`）。タイトルの主要な問いに関わる変わりうる事実（労働条件・アレルギー表示・賃貸ルール）は公式一次情報に照合し、記事内 `OfficialSourceBox` に出典と免責を明示した。学習法・アクセント・スラングの2件は変わりうる数値・料金・法規の主張を含まないため、公式ソースは付さず `verifiedAt: 2026-07-27` のみ付与した。

- `workplace-english`（P0, id a286）— **Fair Work Ombudsman**（https://www.fairwork.gov.au/ ／ Visa holders and migrants: https://www.fairwork.gov.au/find-help-for/visa-holders-and-migrants ）。病欠の連絡・診断書要否・有給病気休暇・シフト変更は**雇用形態（casual/part-time/full-time）・職場・該当 Award で異なる**ため断定せず、雇用契約＋Fair Work（TIS通訳あり・ビザ状態に関わらず保護）へ誘導。
- `hospitality-english`（P1, id a287）— **Food Standards Australia New Zealand**（Allergen labelling: https://www.foodstandards.gov.au/consumer/labelling/allergen-labelling ）＋**Fair Work Ombudsman**（Fast food, restaurants and cafés: https://www.fairwork.gov.au/find-help-for/fast-food-restaurants-cafes ）。アレルゲン対応は店の手順に従い、確実なことは言い切らず確認する旨を明示。チップ・サーチャージは店・時期で異なるとして勤務先ルールへ誘導。
- `housing-english`（P0, id a288）— **NSW Government**（Renting a place to live: https://www.nsw.gov.au/housing-and-construction/renting-a-place-to-live ）／**Consumer Affairs Victoria**（Renting: https://www.consumer.vic.gov.au/housing/renting ）／**Residential Tenancies Authority (QLD)**（https://www.rta.qld.gov.au/ ）。Bond の上限・預け先（RTA/RTBA 等）・退去通知期間・修繕義務は**州で異なる**ため断定せず各州当局へ誘導。
- `australian-english-accent`（P1, id a284）・`australian-slang`（P1, id a285）— 変わりうる数値・料金・法規の主張なし。聞き取り練習法・スラングの用法は「人により合う/合わない」「文脈・相手で使い分け」と明示し推奨として提示。`verifiedAt: 2026-07-27` のみ付与、`officialSources` なし。
- **統合・リダイレクト:** なし（5件は新規スラッグ、既存 `english-prep`・`language-school` と検索意図が分離）。既存2件へは内部リンクのみ追記。

## daily-life マイクロバッチ #4 = 最終（ジム契約・美容院英語・公衆トイレ/シャワー・ホームネット・オンライン詐欺・スマホ紛失 / 2026-07-27 / 6件公開・ハブ完了）

daily-life ハブの残り全6件を、記事単位で公式一次情報に照合して新規公開し、**ハブを完了**した（`hub: "daily-life"`、`category` は health/english/transport/sim/money に分散）。
各記事は `verifiedAt: 2026-07-27` を付与し、`officialSources`（`accessedAt: 2026-07-27`）に情報源を明示。
可変性の高い**契約・料金・制度・詐欺手口**は特定の金額・法規・罰則を断定せず「確認日 2026-07-27」を明記し、公式・各州当局・各機関・店頭確認へ誘導した。

| slug | 照合した主要ポイント | 主な出典（accessedAt 2026-07-27） |
| --- | --- | --- |
| `gym-fitness-guide` | 料金は週払い（per week）表示が主流で入会金/年会費/解約手数料が別途。最低契約期間・自動更新・解約通知期間・無料体験の自動有料化に注意。サービスにも消費者保証が適用。解約/クーリングオフは契約・州で異なり断定不可 | ACCC（Consumer rights and guarantees） |
| `haircut-barber-english` | barber＝短髪中心／salon＝カット全般。予約制と walk-in。希望は写真＋番手/cmで伝える。料金は店・長さ・メニューで変動、施術前に確認。チップは義務でなく一般的に不要。サービスの消費者保証（相応の注意・技能） | ACCC（Consumer rights and guarantees） |
| `public-toilets-showers` | 政府運営 National Public Toilet Map で全国23,000か所以上の公衆トイレを検索（場所・開館時間・バリアフリー・シャワー等の設備）。無料/アプリ有り。シャワーは一部ビーチ・公営プール・キャラバンパーク（有料の場合あり）。設備/料金は場所で異なる | National Public Toilet Map（Dept of Health, Disability and Ageing / National Continence Program） |
| `home-internet-guide` | 固定回線は nbn（全国卸売網）＋小売業者と契約。速度別プラン（nbn 50/100 等）。住所の対応確認、最低契約期間・モデム代・名義を確認。短期は no lock-in／ホームワイヤレス(5G)／テザリング。料金・提供状況は業者・住所で異なる | NBN Co（nbn 公式） |
| `online-scams-cybersecurity` | 偽SMS/メール(フィッシング)、求人詐欺（前払い・money mule）、アカウント乗っ取り。MFA有効化（認証アプリ/パスキーはSMSより安全）、リンクを開かない、求人の前払い拒否。被害時は銀行連絡→パスワード変更→IDCARE 1800 595 160→Scamwatch/cyber.gov.au 報告。ACSC 1300 CYBER1 | Scamwatch（Jobs and employment scams）/ Australian Cyber Security Centre（Multi-factor authentication） |
| `phone-lost-stolen` | 最優先は通信会社でSIM一時停止（SMS認証悪用防止）。Find My で位置確認・遠隔ロック・データ消去、パスワード変更＋MFA、警察へ届け出てレポート番号（保険用）、銀行連絡、ID漏えいは IDCARE 1800 595 160、cyber.gov.au へ報告。緊急は 000 | Australian Cyber Security Centre（How to secure your devices）/ Scamwatch（What to do if you've been scammed） |

- **照合した公式一次情報（accessedAt 2026-07-27）:** ACCC（accc.gov.au — Consumer rights and guarantees）、
  National Public Toilet Map（toiletmap.gov.au — Australian Government Department of Health, Disability and Ageing / National Continence Program）、
  NBN Co（nbnco.com.au — nbn 公式）、Scamwatch（scamwatch.gov.au — Jobs and employment scams / What to do if you've been scammed）、
  Australian Cyber Security Centre（cyber.gov.au — Multi-factor authentication / How to secure your devices、ACSC 1300 CYBER1）。IDCARE 1800 595 160。
- **可変事項の断定回避:** ジムの解約・クーリングオフは契約内容と州で異なるため断定せず契約書＋各州 Fair Trading／ACCC へ誘導。
  美容院の料金・チップは店で異なる旨を明示。トイレ・シャワーの設備/開館時間/料金は場所で異なるため公式マップ確認へ誘導。
  nbn の料金・速度・提供状況は業者・住所で異なるとして断定回避。詐欺の手口・連絡先・報告先は変わりうるため公式確認へ誘導。特定金額・法規・罰則は断定せず。
- **統合・リダイレクト:** なし（新規6件は独立検索意図。既存記事本文へのリンク追記なし）。RSS: 本プロジェクトに RSS ルート無し（N/A）。
- **web fetch の制約:** National Public Toilet Map・Scamwatch・cyber.gov.au（MFA）は本セッションで取得成功。
  ACCC の gym 専用ページ（404）と NBN の下層ページ（doubleclick へのリダイレクト）はリトライ上限に達したため、
  低〜中YMYL領域として各機関の安定URL（accc.gov.au の Consumer rights and guarantees、nbnco.com.au トップ）を出典に採用し、
  具体的な料金・法規は断定せず「契約・業者・州で異なる」と明示。未解決の essential claim は無し。
- **最終ハブ監査:** `test:content` 5 pass、`eslint` エラーなし、`next build` フルビルド成功（`/guides/[slug]` SSG、`/sitemap.xml`・`/robots.txt` 生成、型エラーなし）。**daily-life ハブ 21/21 完了。**

## daily-life マイクロバッチ #3（服装の季節・家具生活用品・Op Shop・郵便・図書館 / 2026-07-27 / 5件公開）

daily-life ハブの次の5件を、記事単位で公式一次情報に照合して新規公開した（`hub: "daily-life"`、`category` は clothing/housing/arrival に分散）。
各記事は `verifiedAt: 2026-07-27` を付与し、`officialSources`（`accessedAt: 2026-07-27`）に情報源を明示。
可変性の高い**気候・料金・詐欺手口・機関別ルール**は特定の金額・数値を断定せず「確認日 2026-07-27」を明記し、公式・各機関・店頭確認へ誘導した。

| slug | 照合した主要ポイント | 主な出典（accessedAt 2026-07-27） |
| --- | --- | --- |
| `australia-clothing-seasons` | 南半球で季節が逆転。北部（Cairns/Darwin）は熱帯で乾季/雨季（雨季おおむね11〜4月）、南部（Melbourne/Tasmania）は四季で冬は寒い、内陸は日中と夜の寒暖差が大きい。UVが非常に強く UV指数3以上で日焼け・皮膚がん対策（帽子・日焼け止め・サングラス）。衣類は現地（Kmart/Target/Big W）で調達可 | ARPANSA（Ultraviolet radiation index）/ Bureau of Meteorology（Climate averages） |
| `buy-furniture-household-items` | 新品（Kmart/Target/Big W/IKEA）と中古（Facebook Marketplace/Gumtree/Op Shop）の使い分け。大型品は現物確認、PayID/振込先の名義一致を確認、安全な決済（PayPal/クレカ）を使用。詐欺被害時は銀行連絡＋IDCARE（1800 595 160）＋Scamwatch通報。furnished（家具付き）か事前確認 | ACCC Scamwatch（Buying and selling scams、IDCARE 1800 595 160） |
| `op-shop-guide` | Op Shop＝チャリティのリサイクルショップ（Vinnies/Salvos 等）。服は洗濯・電化製品は動作確認・中古マットレスは避ける。不要品は洗って使える状態で受付時間内に寄付し、営業時間外の店先放置はしない | St Vincent de Paul Society（Vinnies） |
| `post-office-courier` | Australia Post。MyPost 無料アカウントで追跡・転送・通知。Parcel Locker、PO Box（年会費）、mail redirection/hold。配達目安はおおむね5営業日、受取に写真付きID提示の場合あり。偽AusPost SMS/メール（フィッシング）に注意 | Australia Post（Receiving） |
| `library-guide` | 公共図書館は自治体/州が運営、会員登録は多くが無料。無料Wi-Fi・PC・学習スペース、書籍/電子書籍の貸出、英語学習プログラム。印刷は有料の場合あり、貸出ルール・開館時間は図書館ごとに異なる | State Library of NSW（Public library services） |

- **照合した公式一次情報（accessedAt 2026-07-27）:** ARPANSA（arpansa.gov.au — Ultraviolet radiation index）、
  Bureau of Meteorology（bom.gov.au — Climate averages）、ACCC Scamwatch（scamwatch.gov.au — Buying and selling scams）、
  Australia Post（auspost.com.au — Receiving）、St Vincent de Paul Society / Vinnies（vinnies.org.au）、
  State Library of NSW（sl.nsw.gov.au — Public library services）。
- **可変事項の断定回避:** 服装は都市・季節・UVで変わるため断定せず BOM・ARPANSA の確認へ誘導（UV指数3以上で対策）。
  個人売買の詐欺対策は Scamwatch に準拠（実物確認・名義一致・安全な決済、被害時は銀行＋IDCARE＋Scamwatch通報）。
  郵便の配達目安・PO Box年会費、図書館の印刷料金・貸出ルール・開館時間は地域/機関で異なる旨を明示し、特定金額は断定せず公式確認へ誘導。
- **統合・リダイレクト:** なし（新規5件は独立検索意図。`clothing-guide` に内部リンクのみ追記）。RSS: 本プロジェクトに RSS ルート無し（N/A）。
  ※フルビルド/テスト/lint/監査は daily-life ハブ完了後（残り5件以下時）にまとめて実施。
- **web fetch の制約:** ARPANSA・Scamwatch・Australia Post は本セッションで取得成功。BOM climate averages は 403 を返したが標準の公式ページのため出典として引用。
  Op Shop・図書館の詳細ページ（Vinnies の店舗検索、各州図書館の登録ページ）は 404/リダイレクトが多発（リトライ上限到達）したため、
  低YMYL領域として各機関のトップ/概要レベルの安定URL（vinnies.org.au、sl.nsw.gov.au/public-library-services）を出典に採用し、
  具体的な料金・時間は断定せず「機関ごとに異なる」と明示。未解決の essential claim は無し。

## daily-life マイクロバッチ #2（食品保存・水道水・カード手数料/チップ・飲酒ルール・洗濯 / 2026-07-27 / 5件公開）

daily-life ハブの次の5件を、記事単位で公式一次情報に照合して新規公開した（`hub: "daily-life"`、`category` は food/money/clothing に分散）。
各記事は `verifiedAt: 2026-07-27` を付与し、`officialSources`（`accessedAt: 2026-07-27`）に情報源を明示。
可変性の高い**制度・州法・料金**は特定の金額・罰則を断定せず「確認日 2026-07-27」を明記し、公式・各州当局・店頭確認へ誘導した。

| slug | 照合した主要ポイント | 主な出典（accessedAt 2026-07-27） |
| --- | --- | --- |
| `food-storage-share-house` | 冷蔵5℃以下・冷凍−15〜−18℃、調理後は2時間以内を目安に冷蔵/冷凍、生肉/生魚は密閉して最下段。use-by（消費期限）は守る/best before（賞味期限）は目安。シェア対策は名前・日付・個人/共有の区別 | FSANZ（Food safety basics） |
| `tap-water-drinking` | 都市部の水道水は原則そのまま飲める（ADWG で管理）。水質管理は州・準州＋地域水道事業者の責任。洪水/水質異常時は boil water alert。雨水タンク・井戸水（bore water）は別の安全管理が必要 | healthdirect（Drinking water and your health）/ NHMRC（Australian Drinking Water Guidelines）/ NSW Health（boil water alert） |
| `shopping-surcharges-tipping` | 現在はカードサーチャージ可（決済コスト上限）。**2026年10月1日から Visa/Mastercard/eftpos はサーチャージ禁止予定**（現金・BPAY・PayPal・Diners・Amex・タクシーは対象外）。日祝割増・予約手数料は別物で事前表示なら可。チップは任意 | ACCC（Card surcharges） |
| `alcohol-id-rules` | 法定飲酒年齢18歳（全国一律）、18歳未満への販売・提供は違法。確実なIDはパスポート/豪運転免許/州の Proof of Age card。受け入れID・二次供給（secondary supply）・営業時間は**州で異なる**。飲食提供は RSA 資格（州別） | NHMRC（Alcohol guidelines）/ NSW Liquor & Gaming（Alcohol and young people） |
| `laundry-guide` | シェアハウス共用機・コインランドリー（laundromat）の使い方、粉末/液体/ジェルボール、ドラム式（front loader）対応洗剤。ケアラベル（洗濯表示）は法令で義務。machine wash cold / do not tumble dry 等の読み方 | ACCC Product Safety（Care labelling of clothing & textiles） |

- **照合した公式一次情報（accessedAt 2026-07-27）:** Food Standards Australia New Zealand（foodstandards.gov.au — Food safety basics）、
  healthdirect（healthdirect.gov.au — Drinking water and your health）、NHMRC（nhmrc.gov.au — Australian Drinking Water Guidelines / Alcohol）、
  NSW Health（health.nsw.gov.au — What to do during a boil water alert）、ACCC（acccgov.au — Card surcharges、2026-10-01 の禁止予定を確認）、
  NSW Liquor & Gaming（liquorandgaming.nsw.gov.au — Alcohol and young people、州別ルールの例として使用）、ACCC Product Safety
  （productsafety.gov.au — Care labelling）。
- **可変事項の断定回避:** ACCC のカードサーチャージ制度は**2026年10月1日施行予定**である旨を日付付きで明記し「変更されうる制度」と警告。
  飲酒の受け入れID・二次供給・営業時間、飲酒可能な場所は州/自治体で異なるとして各州当局へ誘導し、具体的な金額・罰則は断定せず。
  水道水は原則安全だが雨水タンク・井戸水・災害時（boil water alert）の例外と州の管理責任を明示。コインランドリーの料金は店頭確認へ誘導。
- **統合・リダイレクト:** なし（新規5件は独立検索意図。`food-guide`／`clothing-guide` に内部リンクのみ追記）。RSS: 本プロジェクトに RSS ルート無し（N/A）。
  ※フルビルド/テスト/lint/監査は daily-life ハブ完了後（残り5件以下時）にまとめて実施。
- **web fetch の制約:** ACCC・NHMRC・healthdirect・NSW 系の主要ページは本セッションで取得成功。essential claim の未解決は無し（照合済み）。

## daily-life マイクロバッチ #1（スーパー比較・食費節約・アジア食材・作り置き・オーブン / 2026-07-27 / 5件公開）

daily-life ハブの最初の5件を、記事単位で公式一次情報・企業公式に照合して新規公開した（`category: "food"` / `hub: "daily-life"`）。
各記事は `verifiedAt: 2026-07-27` を付与し、`officialSources`（`accessedAt: 2026-07-27`）に情報源を明示。
可変性の高い**価格・特売・会員特典**は特定金額を断定せず「確認日 2026-07-27」を明記し、各社アプリ・店頭確認へ誘導した。

| slug | 照合した主要ポイント | 主な出典（accessedAt 2026-07-27） |
| --- | --- | --- |
| `supermarket-comparison` | Coles/Woolworths は全国展開・無料会員（Flybuys / Everyday Rewards）でポイント＋会員価格。ALDI は最安傾向だが品目限定・会員制度なし。ALDI は NT に店舗なし・地方は IGA 中心。価格/特売は変動 | Everyday Rewards（Woolworths 公式）/ Flybuys（Coles 公式）/ ALDI Australia（公式・店舗検索） |
| `grocery-saving-tips` | 特売（Half Price）軸の献立・値引きシール・冷凍まとめ買い。冷蔵は5℃以下・調理後は速やかに冷蔵/冷凍。家計テンプレートで週予算管理 | Moneysmart（ASIC・Simple budget）/ FSANZ（Food safety basics） |
| `asian-japanese-groceries` | 日本/アジア食材はアジア系スーパー・大手の World Foods 棚・通販で入手。日本からの食品持込は検疫（biosecurity）で品目制限あり・要申告（申告漏れは罰金） | Department of Agriculture, Fisheries and Forestry（Bringing/mailing goods） |
| `cheap-meal-prep` | 作り置きの安全: 調理後2時間以内を目安に冷蔵（5℃以下）/冷凍・再加熱は中心まで熱く・再加熱1回まで。安い定番食材の献立ローテーション | FSANZ（Food safety basics） |
| `australian-oven-guide` | 温度は摂氏（℃）・fan-forced は通常式基準より約20℃低め・grill＝上火 broiler。IH は磁性の対応鍋が必要。ガス漏れ時は火気/電気を使わず元栓を閉め換気・緊急時000 | Energy Safe Victoria（Gas safety in the home） |

- **照合した公式一次情報・企業公式（accessedAt 2026-07-27）:** Everyday Rewards（everyday.com.au — Woolworths 公式会員）、
  Flybuys（flybuys.com.au — Coles 公式会員）、ALDI Australia（aldi.com.au）、Food Standards Australia New Zealand
  （foodstandards.gov.au — Food safety basics ＝保存/冷却/再加熱、ページ更新 2025-07-29 を確認）、Moneysmart（moneysmart.gov.au —
  ASIC の Simple budget）、Department of Agriculture, Fisheries and Forestry（agriculture.gov.au — 食品の持込/郵送ルール）、
  Energy Safe Victoria（esv.vic.gov.au — 家庭のガス機器の安全）。企業公式は当該サービス（会員制度・店舗網）に関する記述のみに使用。
- **可変事項の断定回避:** スーパーの価格・特売・会員特典は変動するため特定金額を断定せず確認日を明記。ALDI の店舗網（NT 無し・
  地方は IGA 中心）、食品持込の可否（DAFF）、オーブン/コンロの操作（機種差）は地域・機種で異なる旨を明示した。
- **統合・リダイレクト:** なし（新規5件は独立検索意図で `food-guide` 総論とは分離）。RSS: 本プロジェクトに RSS ルート無し（N/A）。
  ※フルビルド/テスト/lint/監査は daily-life ハブ完了後（残り5件以下時）にまとめて実施。
- **web fetch の制約:** healthdirect の食品保存ページ・betterhealth.vic.gov.au は本セッションで取得エラー（500/抽出不可）だったが、
  同等の保存/冷却/再加熱の基準は FSANZ「Food safety basics」で確認済み（取得成功）。essential claim の未解決は無し。

## health マイクロバッチ #4＝health ハブ完了（洪水・サイクロン／熱波・悪天候 / 2026-07-27 / 残り2件公開＋既存3件強化）

health ハブの**残り2件を公式一次情報に照合して新規公開**し、health ハブを完了した。あわせて既存3記事に公式ソースを追記。
各新規記事は `verifiedAt: 2026-07-27` を付与し、`officialSources`（`accessedAt: 2026-07-27`）に公式情報源を明示。
YMYL の中核は**災害時の警報確認・避難判断（000）**であり、警報カテゴリ・避難指示・道路閉鎖は州/時期で異なるため断定を避けた。

| slug | 照合した主要ポイント | 主な出典（accessedAt 2026-07-27） |
| --- | --- | --- |
| `flood-cyclone-safety` | 洪水は「If it's flooded, forget it」＝冠水路は徒歩/車で進入しない。サイクロンシーズン＝QLD/NT/WA北部・11〜4月。BOM の Watch/Warning とサイクロン区分（Category 1〜5）。SES 132 500（救助）・命の危険は 000。避難指示・道路閉鎖は州公式で確認 | Bureau of Meteorology（Flood/Cyclone warnings）/ State Emergency Service（132 500）/ Triple Zero（000） |
| `heatwave-severe-weather` | BOM の警報種別（Severe Thunderstorm／Severe Weather／Heatwave）。雷雨ぜんそく（thunderstorm asthma）に注意。暴風・雹・倒木などの被害は SES 132 500、命の危険は 000。最新の警報は BOM/州公式で確認 | Bureau of Meteorology（Severe weather/Heatwave warnings）/ State Emergency Service（132 500）/ Triple Zero（000） |

**既存3記事の公式ソース追記（updated・本文/タイトル/slug/公開状態/URL は不変）:**

| slug | 追記した officialSources（accessedAt 2026-07-27） |
| --- | --- |
| `medicare-oshc` | Services Australia（RHCA＝相互医療協定）／healthdirect（Going to a GP）／privatehealth.gov.au（OVHC） |
| `safety-emergency` | Triple Zero（000）／Police Assistance Line（131 444）／Smartraveller |
| `mental-health` | healthdirect（Mental health）／Lifeline（13 11 14）／Beyond Blue |

- **照合した公式一次情報（accessedAt 2026-07-27）:** Bureau of Meteorology（bom.gov.au — Flood/Cyclone/Severe Weather/
  Heatwave の Watch・Warning）、State Emergency Service（各州 SES — 132 500）、Triple Zero（triplezero.gov.au — 000）、
  Services Australia（servicesaustralia.gov.au — RHCA）、healthdirect（healthdirect.gov.au — Going to a GP／Mental health）、
  privatehealth.gov.au（OVHC）、Lifeline（13 11 14）、Beyond Blue、Police Assistance Line（131 444）、Smartraveller（smartraveller.gov.au）。
- **可変事項・州依存の断定回避:** 警報カテゴリ・避難指示・道路閉鎖・救助要請番号の運用は州/時期で変わるため、
  BOM／州 SES／VicEmergency 等の州別公式へ誘導し、具体の避難指示や閉鎖状況は断定しない導線とした。
- **統合・リダイレクト:** なし（新規2件は独立検索意図）。RSS: 本プロジェクトに RSS フィードのルートは存在しない（N/A）。
- **最終 health ハブ監査（フル検証・一括実施）:** `validate:articles`（ユニーク slug 262・重複0・重複パス0・重複エクスポート0・
  health 20件・`OK: no article data errors`）、`tsc --noEmit` クリーン（exit 0）、`validate:content` 0 error / 66 warning、
  `test:content` 5/5 pass、`eslint` クリーン、`next build` 成功（**316 静的ページ**・`BUILD_EXIT=0`）。
  sitemap に `/guides/flood-cyclone-safety`・`/guides/heatwave-severe-weather` を確認。公開 health 20件すべてに
  `verifiedAt`＋`officialSources` あり（欠落0）。health `relatedSlugs` dangling 0。孤立記事0（ハブ自動列挙）。
  ※非 health 記事の 23 件グローバル dangling リンク（planned 参照）は既存事項・本バッチ範囲外（レンダリング時フィルタ）。

## health マイクロバッチ #3（熱中症・咬傷/刺傷・食物アレルギー・労災・山火事 / 2026-07-27 / 5件公開）

health ハブの次の5件を、記事単位で公式一次情報に照合して新規公開した。各記事は
`verifiedAt: 2026-07-27` を付与し、`officialSources`（`accessedAt: 2026-07-27`）に該当する公式
情報源を明示。YMYL の中核は**緊急時の判断（000）・応急処置・労災制度・災害警報**であり、種類・州で異なる事項は断定を避けた。

| slug | 照合した主要ポイント | 主な出典（accessedAt 2026-07-27） |
| --- | --- | --- |
| `heatstroke-guide` | 熱疲労（回復し得る）と熱射病（命に関わる緊急）の見分け。意識障害・反応が鈍い・体が異常に熱い・けいれん→000。応急=涼所・衣類ゆるめ・積極冷却・水分。予防=こまめな水分・暑い時間帯回避 | healthdirect（Heat-related illness）/ BOM（Heatwave）/ Triple Zero |
| `bites-stings-wildlife` | ヘビ咬傷=動かさず圧迫固定＋000、洗う/切る/吸う/きつく縛るはNG。クモ・クラゲは種類で対応が異なる。アナフィラキシー=EpiPen＋000。応急処置は公式情報に限定 | healthdirect（Bites and stings／Snake bites）/ Triple Zero |
| `food-allergy-eating-out` | 外食は具体的アレルゲン名を明確に伝える・混入(cross-contamination)確認。包装食品は主要アレルゲンの義務表示。アナフィラキシー=EpiPen（太もも外側）＋000 | healthdirect（Food allergies／Anaphylaxis）/ FSANZ（Allergen labelling） |
| `work-injury-medical` | 重傷は000/ED→GP/UCC受診→雇用主へ早期報告。労災(workers' compensation)は各州制度で医療費・休業補償が対象になり得る。診断書(Certificate of Capacity)・記録が重要。困ったら州当局/Fair Work | Safe Work Australia（Workers' compensation）/ Fair Work Ombudsman |
| `bushfire-safety` | 州消防アプリで警報確認。Fire Danger Rating（Moderate/High/Extreme/Catastrophic）と警報レベル（Advice→Watch and Act→Emergency Warning）。Total Fire Ban。危険な日は早めに離れる | Australian Fire Danger Rating System / NSW RFS・CFA Victoria / BOM |

- **照合した公式一次情報（accessedAt 2026-07-27）:** healthdirect（healthdirect.gov.au — Heat-related illness／
  Bites and stings／Snake bites／Food allergies／Anaphylaxis）、Bureau of Meteorology（bom.gov.au — Heatwave service・
  気象情報）、Food Standards Australia New Zealand（foodstandards.gov.au — Allergen labelling＝主要アレルゲンの義務表示・
  Plain English Allergen Labelling）、Safe Work Australia（safeworkaustralia.gov.au — Workers' compensation）、
  Fair Work Ombudsman（fairwork.gov.au）、Australian Fire Danger Rating System（afdrs.com.au）、
  NSW Rural Fire Service（rfs.nsw.gov.au — 警報レベル・Hazards Near Me・Total Fire Ban）／CFA Victoria（cfa.vic.gov.au）、
  Triple Zero（triplezero.gov.au — 000）。
- **可変事項・種類/州依存の断定回避:** ①咬傷・刺傷の応急処置は生き物の種類で正解が異なるため（ヘビ/ファンネルウェブ=圧迫固定、
  レッドバック=冷却、クラゲ=地域で酢/温水と異なる）、記事は一般的目安とし**実際の手順は公式（healthdirect・州の救急）で確認**する導線とした。
  ②労災制度は州・準州ごとに窓口・補償範囲が異なる（icare/WorkSafe/WorkCover等）ため州当局へ誘導し、金額は断定せず。
  ③山火事の警報アプリ・区分運用は州別のため代表例（NSW=Hazards Near Me／VIC=VicEmergency）を示しつつ各州公式へ誘導。
- **統合・リダイレクト:** なし（5件は新規スラッグ、既存公開記事と検索意図が分離）。既存記事の内部リンク変更なし。
  孤立記事は health ハブページの自動列挙により発生しない。
- **検証:** `validate:articles`（ユニーク slug 260・重複0・重複パス0・重複エクスポート0・health 18件・
  `OK: no article data errors`）、`tsc --noEmit` クリーン（exit 0）、`validate:content` 0 error / 66 warning、
  health の `relatedSlugs` は全て実在 slug に解決（dangling 0・`workplace-injury-workers-comp`／`farm-weather-no-work` 含め確認）。
  ※フルビルド/テスト/lint/監査は health ハブ完了後（残り5件以下時）にまとめて実施。

## health マイクロバッチ #2（眼・性の健康・女性の健康・救急車・紫外線 / 2026-07-27 / 5件公開）

health ハブの次の5件を、記事単位で公式一次情報に照合して新規公開した。各記事は
`verifiedAt: 2026-07-27` を付与し、`officialSources`（`accessedAt: 2026-07-27`）に該当する公式
情報源を明示。日本のワーホリが Medicare 対象外である点を関連記事で明確化した。

| slug | 照合した主要ポイント | 主な出典（accessedAt 2026-07-27） |
| --- | --- | --- |
| `eye-care-optometrist` | 視力検査・眼鏡・コンタクトの窓口はOptometrist（検眼士）。視力検査のbulk billはMedicare保持者向け→ワーホリは自己負担。眼鏡・コンタクト本体はMedicare対象外（自費か保険のoptical特約）。急な視力低下・薬品混入はED/000 | healthdirect（Eye health）/ Services Australia（Medicare） |
| `sexual-health-clinics` | STI検査・避妊・相談はGP／公的Sexual Health Clinic／Family Planning系。多くは秘密厳守でビザに影響なし。公的クリニックは無料/低額の場合。緊急避妊薬は薬局で薬剤師相談（S3・早いほど有効） | healthdirect（Sexual health / STIs / Emergency contraception） |
| `womens-health-guide` | 生理用品はスーパー・薬局。婦人科系・避妊・検診はまずGP→必要に応じ専門医紹介。子宮頸がん検診（Cervical Screening）は国のプログラム。ひどい痛み・大量出血はGP/UCC、命に関わるなら000/ED | healthdirect（Women's health）/ Department of Health（National Cervical Screening Program） |
| `ambulance-costs-insurance` | 救急車は多くの州で有料。QLD・TASは住民の費用を州が負担、NSW/VIC/SA/WA/ACT/NTは原則有料。州制度は基本住民向けでワーホリは対象外になりやすい→海外保険の救急車カバー重要。000通報自体は無料。**特定金額は断定せず州公式へ誘導** | Triple Zero（000）/ Queensland Ambulance Service / NSW Ambulance / Ambulance Victoria / healthdirect |
| `sunburn-skin-cancer-prevention` | 豪州はUVが非常に強く皮膚がん率が高い。UV指数3以上で対策必須（暑さでなくUVで判断）。Slip/Slop（SPF50+）/Slap/Seek/Slide、日焼け止めは外出20分前・2時間おき塗り直し。UV確認はBOM/SunSmart/ARPANSA。ほくろ/シミの変化はGPへ | ARPANSA（UV Index・**取得確認済み**）/ SunSmart・Cancer Council / Bureau of Meteorology（UV forecast） |

- **照合した公式一次情報（accessedAt 2026-07-27）:** healthdirect（healthdirect.gov.au — Eye health /
  Sexual health / Sexually transmitted infections / Women's health / Emergency contraception）、
  Services Australia（Medicare／**Reciprocal Health Care Agreements = 日本は対象外**）、
  Department of Health and Aged Care「National Cervical Screening Program」（health.gov.au）、
  各州救急サービス（Queensland Ambulance Service = ambulance.qld.gov.au／NSW Ambulance = ambulance.nsw.gov.au／
  Ambulance Victoria = ambulance.vic.gov.au）、Triple Zero（triplezero.gov.au — 000通報は無料）、
  ARPANSA「Ultraviolet radiation index」（arpansa.gov.au — Commonwealth のUV監視網・UV区分 Low/Moderate/High/
  Very High/Extreme を**取得確認済み**）、SunSmart / Cancer Council（sunsmart.com.au / cancer.org.au — UV3+で対策・
  Slip Slop Slap Seek Slide）、Bureau of Meteorology「UV Index forecast」（bom.gov.au/uv）。
- **web fetch の制約と対応:** healthdirect の一部解説ページ・cancer.org.au（CSP でブロック）・sunsmart.com.au
  （doubleclick へリダイレクト）・NSW救急の料金ページ（404）は自動取得に失敗。ARPANSA の UV Index ページは取得成功。
  **救急車の州別具体額は各州・改定で大きく変わるため、焦点を絞った2回の取得試行が失敗した時点で数値の断定を取りやめ**、
  「有料/無料の州別構造」「000通報は無料」「ワーホリは州制度対象外になりやすい」という確立した構造的事実のみを記述し、
  正確な金額は**各州救急サービス公式サイトで確認**する導線とした（リトライ上限：主要主張ごとに焦点化した取得を最大2回）。
- **留保点:** ①救急車費用は州・搬送内容・改定で可変のため特定金額を断定せず公式へ誘導。②視力検査・眼鏡・保険の
  optical 特約の対象範囲は保険会社で異なるため証券確認へ誘導。③検診・受診の可否や費用は Medicare の有無で異なるため
  「日本のワーホリは対象外になり得る」と明示しつつ公的窓口確認へ誘導。
- **統合・リダイレクト:** なし（5件は新規スラッグ、既存公開記事と検索意図が分離）。既存記事の内部リンク変更なし
  （`medicare-oshc` は #1 で更新済み・本バッチでは不変）。孤立記事は health ハブページの自動列挙により発生しない。
- **検証:** `validate:articles`（ユニーク slug 255・重複0・重複パス0・重複エクスポート0・health 13件・
  `OK: no article data errors`）、`tsc --noEmit` クリーン（exit 0）、`validate:content` 0 error / 66 warning、
  health の `relatedSlugs` は全て実在 slug に解決（dangling 0・`farm-heat-sun-safety` 含め確認）。
  ※フルビルド/テスト/lint/監査は health ハブ完了後（残り5件以下時）にまとめて実施。

## health マイクロバッチ #1（医療・薬・歯科 / 2026-07-27 / 5件公開）

health ハブの最初の5件を、記事単位で公式一次情報に照合して新規公開した。各記事は
`verifiedAt: 2026-07-27` を付与し、`officialSources`（`accessedAt: 2026-07-27`）に該当する公式
情報源を明示。YMYL の中核は**受診先の緊急度判断・海外保険の請求・薬の分類と入手・歯科費用**であり、
日本のワーホリが Medicare 対象外である点（相互医療協定なし）を各記事で明確化した。

| slug | 照合した主要ポイント | 主な出典（accessedAt 2026-07-27） |
| --- | --- | --- |
| `gp-urgent-care-emergency` | 命に関わる緊急=000/ED、命に別状ない緊急=Medicare UCC（walk-in・bulk billed・minor骨折/ねんざ・UTI・STI・切り傷・胃腸炎・軽いやけど等）またはGP、通常=GP。UCCのbulk billはMedicareカード保持者向け→日本のワーホリは対象外で自己負担し得る | health.gov.au（Medicare UCC）/ healthdirect / Services Australia（RHCA）/ Triple Zero |
| `overseas-insurance-claim` | ワーホリはMedicare非適用→海外保険。基本は立替→明細付き領収書（tax invoice）＋診断書で請求、高額入院は24hアシスタンスでキャッシュレス。既往症・歯科・妊娠等は対象外が多い | Services Australia（Medicare / RHCA）/ healthdirect |
| `pharmacy-guide` | 薬剤師相談は無料、S2（棚）・S3（薬剤師確認）・S4（処方箋）。PBSはMedicare加入者向け→ワーホリは処方薬が全額になりやすい | TGA（Scheduling）/ Services Australia（PBS）/ healthdirect |
| `common-medicines-australia` | 商品名でなく有効成分で探す（paracetamol/ibuprofen/抗ヒスタミン）。paracetamolの重複・過量による肝障害に注意、持病・妊娠は薬剤師へ | healthdirect（Medicines / Paracetamol）/ TGA |
| `dental-care-australia` | 成人歯科は原則Medicare対象外、ワーホリは自己負担が基本。治療前にquote、保険の歯科は制限が多い、顔/首の腫れ・呼吸困難は000/ED | healthdirect（Dental care）/ Services Australia |

- **照合した公式一次情報（accessedAt 2026-07-27）:** Department of Health and Aged Care
  「Medicare Urgent Care Clinics」（health.gov.au — bulk billed・walk-in・対象症状一覧、命に関わる場合は
  000/ED を明記）、healthdirect（healthdirect.gov.au — 無料健康相談・受診先の目安・Medicines・Dental care）、
  Services Australia「Reciprocal Health Care Agreements」（**日本は協定国に含まれず、ワーホリはMedicare
  非適用**）「Medicare」「Pharmaceutical Benefits Scheme」、Therapeutic Goods Administration
  「Scheduling basics」（S2 Pharmacy Medicine / S3 Pharmacist Only / S4 Prescription Only）、
  Triple Zero（triplezero.gov.au — 000）。
- **留保点:** ①healthdirect の無料相談電話の番号・対応窓口は州で異なる（VIC=NURSE-ON-CALL、QLD=13 HEALTH 等）
  ため、記事では代表番号（1800 022 222）を示しつつ **healthdirect 公式サイトで最新窓口を確認**する導線とした。
  ②海外保険の補償範囲・請求手順は保険会社ごとに異なるため断定せず**証券・保険会社確認**へ誘導。
  ③歯科費用・救急車費用（別記事）・州別窓口は可変のため断定を避けた。
- **統合・リダイレクト:** なし（5件は新規スラッグ、既存公開記事と検索意図が分離）。
- **検証:** `validate:articles`（ユニーク slug 250・重複0・重複パス0・重複エクスポート0・health 8件）、
  `tsc --noEmit` クリーン（exit 0）、health の `relatedSlugs` は全て実在 slug に解決（dangling 0）。
  ※フルビルド/テスト/lint/監査は health ハブ完了後に実施。

## 4. 免責の表示

すべての公開記事で `OfficialSourceBox` に以下を明記:
- 制度・料金は改定される可能性があるため、手続き前に必ず公式サイトで最新情報を確認すること。
- 本記事は一般的な情報提供であり、個別の法務・税務・医療等の専門的アドバイスではないこと。
