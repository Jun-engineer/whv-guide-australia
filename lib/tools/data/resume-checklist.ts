import type { ChecklistGroup } from "@/lib/tools/types";

/**
 * 英文レジュメ（Resume / CV）の自己チェックリスト。
 *
 * オーストラリアの一般的な採用慣行に沿った「入れるべき項目」と「入れないほうがよい項目
 * （NG）」を確認できます。あくまで一般的な目安で、職種・企業により最適な形は異なります。
 *
 * NG グループはチェックを入れる＝「その項目を載せていない（削除できている）」ことの確認
 * として使います。
 */
export const RESUME_CHECKLIST_GROUPS: ChecklistGroup[] = [
  {
    id: "must-have",
    title: "入れるべき項目",
    items: [
      { id: "name-contact", label: "氏名・電話番号・メールアドレス（豪州の番号があれば記載）" },
      { id: "location", label: "現在地（都市・州。詳細な住所は不要）" },
      { id: "summary", label: "冒頭の自己PR（Professional summary / 2〜3行）" },
      { id: "work-rights", label: "就労資格（例: Working Holiday visa, full working rights）" },
      { id: "experience", label: "職歴（新しい順・役割・期間・実績を箇条書き）" },
      { id: "skills", label: "スキル（接客・レジ・英語・資格など具体的に）" },
      { id: "certifications", label: "関連資格（RSA・White Card・Barista・運転免許など）" },
      { id: "availability", label: "勤務可能時期・曜日（Availability）" },
      { id: "references", label: "推薦者（References）または『Available on request』" },
      { id: "action-verbs", label: "実績を動詞で始める（例: Served, Managed, Increased）" },
      { id: "one-two-pages", label: "全体で1〜2ページに収める" },
      { id: "pdf", label: "PDF 形式で保存（レイアウト崩れ防止）" },
    ],
  },
  {
    id: "avoid",
    title: "入れないほうがよい項目（NG・チェックで『削除済み』を確認）",
    items: [
      { id: "no-photo", label: "顔写真を載せていない", note: "豪州では差別防止の観点から通常は不要。" },
      { id: "no-dob", label: "生年月日・年齢を載せていない" },
      { id: "no-gender", label: "性別・国籍・宗教・配偶者の有無を載せていない" },
      { id: "no-japanese-only", label: "日本語のみの内容が残っていない（英語で統一）" },
      { id: "no-typos", label: "スペル・文法ミスがない（英語ネイティブ/ツールで確認）" },
      { id: "no-long", label: "3ページ以上の長すぎる内容になっていない" },
      { id: "no-fancy", label: "過度な装飾・読みにくいフォント/色を使っていない" },
      { id: "no-fake", label: "虚偽・誇張した経歴を書いていない" },
    ],
  },
];
