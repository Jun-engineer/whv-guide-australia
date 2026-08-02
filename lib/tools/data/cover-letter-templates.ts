/**
 * 職種別の英文カバーレター（志望動機）のひな型と、応募チャネル別の短文メッセージ。
 *
 * これは記入例のひな型です。実際の経歴・応募先に合わせて必ず書き換えてください。
 * 一般的な応募慣行に沿った構成の目安であり、最適な形は職種・企業・地域により異なります。
 */

export type CoverLetterTemplate = {
  id: string;
  label: string;
  /** ダウンロード用ファイル名（拡張子なし）。 */
  fileBaseName: string;
  /** プレーンテキストのひな型本文。 */
  body: string;
};

export type ChannelMessage = {
  id: string;
  label: string;
  /** チャネル別の短いメッセージ本文。 */
  body: string;
};

const HOSPITALITY = `[Your Full Name]
[Suburb, State] | [Phone] | [Email]

[Date]

Dear Hiring Manager,

I am writing to apply for the [role, e.g. wait staff / barista] position at
[Venue Name]. I am on a Working Holiday visa (subclass 417) with full working
rights and I am available for an immediate start, including weekends.

I have experience in [customer service / cafe / restaurant] and I hold a
current RSA ([State]). I work well in a fast-paced team, handle payments
accurately and enjoy giving friendly service to customers.

I would welcome the chance to meet you and show what I can bring to your team.
Thank you for considering my application.

Kind regards,
[Your Full Name]`;

const FARM = `[Your Full Name]
[Suburb, State] | [Phone] | [Email]

[Date]

Dear [Farm / Employer Name],

I am writing to apply for farm work at [Farm Name]. I am on a Working Holiday
visa (subclass 417) with full working rights and I am happy to work in regional
areas. I can start immediately and I am available for [dates].

I am hard-working, physically fit and comfortable with outdoor manual labour in
all weather. I have experience in [picking / packing / general farm work]
([Yes/No]). I have my own transport: [Yes/No].

I would appreciate the opportunity to work with you. Thank you for your time.

Kind regards,
[Your Full Name]`;

const WAREHOUSE = `[Your Full Name]
[Suburb, State] | [Phone] | [Email]

[Date]

Dear Hiring Manager,

I am writing to apply for the warehouse/logistics position at [Company Name].
I am on a Working Holiday visa (subclass 417) with full working rights and I am
available for an immediate start, including shift work.

I am reliable and safety-focused, and I am comfortable with physical work and
repetitive tasks. I hold a [Forklift Licence / White Card, if any] and have
experience with [picking, packing, RF scanners].

I would welcome the chance to discuss how I can contribute to your team.
Thank you for considering my application.

Kind regards,
[Your Full Name]`;

const GENERAL = `[Your Full Name]
[Suburb, State] | [Phone] | [Email]

[Date]

Dear Hiring Manager,

I am writing to express my interest in the [role] position at [Company Name].
I am on a Working Holiday visa (subclass 417) with full working rights and I am
available to start [when].

[One or two sentences about your relevant experience and skills, e.g. "I have
X years of experience in Y and I am confident with Z."]. I am reliable,
enthusiastic and a quick learner.

I have attached my resume and would welcome the opportunity to discuss my
application. Thank you for your time and consideration.

Kind regards,
[Your Full Name]`;

export const COVER_LETTER_TEMPLATES: CoverLetterTemplate[] = [
  { id: "hospitality", label: "接客・ホスピタリティ", fileBaseName: "cover-letter-hospitality", body: HOSPITALITY },
  { id: "farm", label: "ファーム・農作業", fileBaseName: "cover-letter-farm", body: FARM },
  { id: "warehouse", label: "倉庫・物流", fileBaseName: "cover-letter-warehouse", body: WAREHOUSE },
  { id: "general", label: "汎用（その他の職種）", fileBaseName: "cover-letter-general", body: GENERAL },
];

export const COVER_LETTER_SHORT_MESSAGES: ChannelMessage[] = [
  {
    id: "email",
    label: "メール（求人への返信）",
    body: `Subject: Application for [role] – [Your Name]

Hi [Name],

I saw your ad for the [role] and I would like to apply. I'm on a Working
Holiday visa (417) with full working rights and can start [when]. My resume is
attached. I'm available for a call or interview any time.

Thanks,
[Your Name] – [Phone]`,
  },
  {
    id: "in-person",
    label: "店頭で直接渡すとき（口頭＋一言メモ）",
    body: `Hi, I'm [Your Name]. I'm looking for [role] work and I'd love to join your
team. I'm on a Working Holiday visa with full working rights and can start
straight away. Here is my resume – could I leave it with you? Thank you!`,
  },
  {
    id: "facebook",
    label: "Facebookグループ／SNSのDM",
    body: `Hi, I'm interested in the [role] job you posted. I'm on a Working Holiday
visa (417) with full working rights and available from [when]. Happy to send my
resume and references. Is the position still open? Thanks!`,
  },
  {
    id: "online-form",
    label: "応募フォームの自由記述欄",
    body: `I am applying for the [role] position. I hold a Working Holiday visa
(subclass 417) with full working rights and I am available to start [when].
I have experience in [area] and I am reliable and hard-working. Please find my
resume attached. Thank you for considering my application.`,
  },
];
