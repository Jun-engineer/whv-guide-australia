import type { ForumComment } from "@/types/forum";
import { CommentItem } from "@/components/forum/CommentItem";

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
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
