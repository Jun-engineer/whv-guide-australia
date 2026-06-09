import type { ForumComment } from "@/types/forum";
import { ReportButton } from "@/components/forum/ReportButton";

type CommentListProps = {
  comments: ForumComment[];
};

export function CommentList({ comments }: CommentListProps) {
  if (comments.length === 0) {
    return <p className="text-sm text-slate-600">まだコメントがありません。</p>;
  }

  return (
    <div className="space-y-3">
      {comments.map((comment) => (
        <div key={comment.id} className="rounded-xl border border-slate-200 bg-white p-3">
          <p className="text-sm text-slate-700">{comment.body}</p>
          <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
            <span>
              {comment.authorName} / {comment.createdAt}
            </span>
            <ReportButton targetType="comment" targetId={comment.id} />
          </div>
        </div>
      ))}
    </div>
  );
}
