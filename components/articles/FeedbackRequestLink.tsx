import Link from "next/link";

type FeedbackRequestLinkProps = {
  /** 対象記事のパス（例: /guides/working-holiday-budget）。 */
  pageUrl?: string;
};

/**
 * 記事末尾などに置く「情報の訂正・追加リクエスト」への導線。
 */
export function FeedbackRequestLink({ pageUrl }: FeedbackRequestLinkProps) {
  const href = pageUrl
    ? `/request?type=correction&url=${encodeURIComponent(pageUrl)}`
    : "/request";

  return (
    <p className="text-sm text-slate-600">
      情報が古い・間違っていると感じたら、
      <Link href={href} className="font-semibold text-sky-700 underline-offset-2 hover:underline">
        訂正・追加のリクエスト
      </Link>
      から教えてください。公式情報を確認して更新します。
    </p>
  );
}
