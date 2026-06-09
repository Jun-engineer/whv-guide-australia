import Link from "next/link";
import type { ForumPost } from "@/types/forum";

type PostCardProps = {
  post: ForumPost;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">{post.title}</h3>
      <p className="mt-2 line-clamp-2 text-sm text-slate-600">{post.body}</p>
      <div className="mt-3 flex items-center justify-between text-sm text-slate-500">
        <span>
          {post.authorName} / {post.createdAt}
        </span>
        <span className="flex items-center gap-3">
          <span aria-label="likes">♥ {post.likeCount}</span>
          <Link href={`/community/posts/${post.id}`} className="font-semibold text-sky-700">
            詳細
          </Link>
        </span>
      </div>
    </article>
  );
}
