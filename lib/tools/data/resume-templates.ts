/**
 * 職種別の英文レジュメテンプレート（サンプル）。
 *
 * これは記入例のひな型です。実際の経歴・スキルに合わせて必ず書き換えてください。
 * 一般的な採用慣行に沿った構成の目安であり、最適な形は職種・企業により異なります。
 */

export type ResumeTemplate = {
  id: string;
  label: string;
  /** ダウンロード用ファイル名（拡張子なし）。 */
  fileBaseName: string;
  /** プレーンテキストのテンプレート本文。 */
  body: string;
};

const HOSPITALITY = `[Your Full Name]
[Suburb, State] | [Phone] | [Email]
Working Holiday visa (subclass 417) – full working rights

PROFESSIONAL SUMMARY
Friendly and reliable hospitality worker with experience in fast-paced venues.
Strong customer service, teamwork and cash-handling skills. Available for
immediate start, flexible hours including weekends.

CERTIFICATIONS
- Responsible Service of Alcohol (RSA) – [State]
- Food Safety / Barista course (if any)

SKILLS
- Customer service and table service
- POS / cash handling
- Coffee making (specify machine, if any)
- Basic food preparation and cleaning

WORK EXPERIENCE
[Job Title] – [Venue], [City] ([Month Year] – [Month Year])
- Served customers and processed payments accurately.
- Maintained clean and safe work areas to health standards.

EDUCATION
[Course / School], [Year]

AVAILABILITY
[Days / hours available]

REFERENCES
Available on request.`;

const FARM = `[Your Full Name]
[Suburb, State] | [Phone] | [Email]
Working Holiday visa (subclass 417) – full working rights

PROFESSIONAL SUMMARY
Hard-working and physically fit farm worker, comfortable with outdoor manual
labour in all weather. Reliable, punctual and happy to work in regional areas.
Available for immediate start, own transport: [Yes/No].

SKILLS
- Fruit and vegetable picking / packing
- Working at speed (piece rate experience: [Yes/No])
- Following WHS and chemical safety instructions
- Manual handling and repetitive tasks

WORK EXPERIENCE
[Role] – [Farm / Employer], [Region] ([Month Year] – [Month Year])
- Picked and packed [crop] to quality standards.
- Followed safety procedures in the field and shed.

OTHER INFORMATION
- Location flexibility: willing to relocate to regional areas
- Driver licence: [Yes/No], Car: [Yes/No]

REFERENCES
Available on request.`;

const WAREHOUSE = `[Your Full Name]
[Suburb, State] | [Phone] | [Email]
Working Holiday visa (subclass 417) – full working rights

PROFESSIONAL SUMMARY
Dependable warehouse and logistics worker with attention to detail and a strong
safety focus. Comfortable with physical work, shifts and repetitive tasks.
Available for immediate start.

CERTIFICATIONS
- Forklift Licence (LF) – [if any]
- White Card – [if any]

SKILLS
- Picking, packing and dispatch
- Scanning / basic warehouse systems (RF scanner)
- Manual handling and stock control
- WHS awareness

WORK EXPERIENCE
[Role] – [Company], [City] ([Month Year] – [Month Year])
- Picked and packed orders accurately to daily targets.
- Kept the work area clean and followed safety procedures.

AVAILABILITY
[Shifts / days available]

REFERENCES
Available on request.`;

const IT = `[Your Full Name]
[Suburb, State] | [Phone] | [Email] | [LinkedIn / GitHub]
Working Holiday visa (subclass 417) – full working rights

PROFESSIONAL SUMMARY
[Role, e.g. Front-end Developer] with [X] years of experience building [what].
Strong in [key skills]. Seeking a role in Australia during a working holiday.

TECHNICAL SKILLS
- Languages: [e.g. JavaScript, TypeScript, Python]
- Frameworks/Tools: [e.g. React, Node.js, Git]
- Other: [databases, cloud, testing]

WORK EXPERIENCE
[Job Title] – [Company], [Location] ([Month Year] – [Month Year])
- [Achievement with impact, e.g. "Built X, reducing Y by Z%"].
- [Responsibility / technology used].

PROJECTS (optional)
[Project name] – [Short description and link]

EDUCATION
[Degree / Course], [School], [Year]

REFERENCES
Available on request.`;

export const RESUME_TEMPLATES: ResumeTemplate[] = [
  { id: "hospitality", label: "接客・ホスピタリティ", fileBaseName: "resume-hospitality", body: HOSPITALITY },
  { id: "farm", label: "ファーム・農作業", fileBaseName: "resume-farm", body: FARM },
  { id: "warehouse", label: "倉庫・物流", fileBaseName: "resume-warehouse", body: WAREHOUSE },
  { id: "it", label: "IT・専門職", fileBaseName: "resume-it", body: IT },
];
