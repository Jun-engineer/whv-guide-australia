type VerifiedDateProps = {
  /** 最終確認日（ISO 文字列, 例: 2026-07-16） */
  verifiedAt: string;
  /** 併せて示す更新日（任意） */
  updatedAt?: string;
};

/**
 * YMYL 記事向け。内容を公式情報と照合した最終確認日を明示する。
 */
export function VerifiedDate({ verifiedAt, updatedAt }: VerifiedDateProps) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-800">
      <span className="inline-flex items-center gap-1 font-semibold">
        <span aria-hidden>✅</span>
        公式情報と照合した最終確認日：
        <time dateTime={verifiedAt}>{verifiedAt}</time>
      </span>
      {updatedAt ? (
        <span className="text-emerald-700/80">
          記事更新日：<time dateTime={updatedAt}>{updatedAt}</time>
        </span>
      ) : null}
    </div>
  );
}
