/**
 * 緊急連絡先カードのデータ。
 *
 * オーストラリアの主な緊急・相談窓口（固定の公式番号）と、利用者が記入する
 * 個人情報の項目定義を分離しています。番号は公的機関の代表的な連絡先ですが、
 * 制度・番号は変わることがあるため、緊急時は必ず最新の案内に従ってください。
 * 個人情報はブラウザ内にのみ保存され、サーバーには送信されません。
 */

/** オーストラリアの主な緊急・相談連絡先（固定）。 */
export type EmergencyContact = {
  id: string;
  label: string;
  number: string;
  note?: string;
};

export const EMERGENCY_CONTACTS: EmergencyContact[] = [
  { id: "triple-zero", label: "警察・消防・救急（緊急）", number: "000", note: "命に関わる緊急時。オペレーターに Police / Fire / Ambulance を伝える。" },
  { id: "mobile-112", label: "携帯からの緊急（GSM）", number: "112", note: "000 につながらないとき携帯から。000 につながる。" },
  { id: "text-106", label: "聴覚・発話に困難がある人の緊急（テキスト）", number: "106", note: "TTY からのテキスト経由の緊急通報。" },
  { id: "ses", label: "州緊急サービス SES（洪水・暴風）", number: "132 500", note: "生命の危機がない自然災害の支援。" },
  { id: "poisons", label: "中毒情報センター（Poisons）", number: "13 11 26", note: "誤飲・中毒の相談（24時間）。" },
  { id: "healthdirect", label: "healthdirect（医療相談）", number: "1800 022 222", note: "緊急でない健康の相談（24時間・地域により異なる）。" },
  { id: "lifeline", label: "Lifeline（こころの危機相談）", number: "13 11 14", note: "つらいとき・危機のときの相談（24時間）。" },
  { id: "police-line", label: "警察相談ライン（非緊急）", number: "131 444", note: "緊急でない事件・相談。" },
];

/** 利用者が記入する個人情報の項目定義（値は保存されるが定義はここで一元管理）。 */
export type EmergencyField = {
  id: string;
  label: string;
  placeholder?: string;
  /** 複数行入力にするか。 */
  multiline?: boolean;
};

export const EMERGENCY_FIELDS: EmergencyField[] = [
  { id: "fullName", label: "氏名（Full name）", placeholder: "例: Taro Yamada" },
  { id: "dob", label: "生年月日（Date of birth）", placeholder: "例: 1998-04-15" },
  { id: "nationality", label: "国籍（Nationality）", placeholder: "例: Japan" },
  { id: "passportNo", label: "パスポート番号（Passport no.）" },
  { id: "bloodType", label: "血液型（Blood type）", placeholder: "例: A+" },
  { id: "allergies", label: "アレルギー（Allergies）", placeholder: "例: peanuts, penicillin", multiline: true },
  { id: "medicalConditions", label: "持病・服薬（Medical conditions / medication）", multiline: true },
  { id: "insurer", label: "保険会社（Insurance company）" },
  { id: "policyNo", label: "保険証券番号（Policy no.）" },
  { id: "insurerPhone", label: "保険の緊急連絡先（Insurer emergency phone）" },
  { id: "contactAuName", label: "オーストラリアの緊急連絡先・氏名" },
  { id: "contactAuPhone", label: "オーストラリアの緊急連絡先・電話" },
  { id: "contactHomeName", label: "母国の緊急連絡先・氏名" },
  { id: "contactHomePhone", label: "母国の緊急連絡先・電話（国番号つき）", placeholder: "例: +81 90-xxxx-xxxx" },
  { id: "consulate", label: "自国の大使館・領事館（Embassy / Consulate）", placeholder: "国により異なるため各自で記入", multiline: true },
];
