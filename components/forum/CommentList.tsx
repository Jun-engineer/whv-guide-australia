import type { ForumComment } from "@/types/forum";
import { CommentItem } from "@/components/forum/CommentItem";
import { buildCommentTree } from "@/lib/forum";

type CommentListProps = {
  postId: string;
  comments: ForumComment[];
};

export function CommentList({ postId, comments }: CommentListProps) {
  if (comments.length === 0) {
    return <p className="text-sm text-slate-600">まだコメントがありません。</p>;
  }

  const tree = buildCommentTree(comments);

  return (
    <div className="space-y-3">
      {tree.map((node) => (
        <CommentItem key={node.id} node={node} postId={postId} />
      ))}
    </div>
  );
}
