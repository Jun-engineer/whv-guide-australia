# SOURCE_VERIFICATION_REPORT

生成日: 2026-07-16
照合日（verifiedAt）: 2026-07-16

本サイクルで公開・強化した YMYL 記事について、タイトルの主要な問いに関わる数値・料金・
要件・期限・規則を、公式一次情報に照合した記録です。各記事は画面上に「✅ 公式情報と照合した
最終確認日（verifiedAt）」を表示し、`OfficialSourceBox` で出典と免責（制度改定の可能性・
専門的アドバイスではない旨）を明示します。

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

## 4. 免責の表示

すべての公開記事で `OfficialSourceBox` に以下を明記:
- 制度・料金は改定される可能性があるため、手続き前に必ず公式サイトで最新情報を確認すること。
- 本記事は一般的な情報提供であり、個別の法務・税務・医療等の専門的アドバイスではないこと。
