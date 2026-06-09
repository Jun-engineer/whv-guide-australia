import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { CommentList } from "@/components/forum/CommentList";
import { CommentForm } from "@/components/forum/CommentForm";
import { ReportButton } from "@/components/forum/ReportButton";
import { LikeButton } from "@/components/forum/LikeButton";
import { AdBanner } from "@/components/ads/AdBanner";
import { getCommentsByPostId, getForumPostById } from "@/lib/forum";
import { canUserPost, getViewerProfile } from "@/lib/auth";

type PostPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { id } = await params;
  const post = getForumPostById(id);
  return {
    title: post ? post.title : "投稿詳細",
    description: post ? post.body.slice(0, 80) : "掲示板投稿の詳細とコメント。",
  };
}

export default async function CommunityPostPage({ params }: PostPageProps) {
  const { id } = await params;
  const post = getForumPostById(id);
  if (!post) {
    notFound();
  }

  const comments = getCommentsByPostId(post.id);
  const viewer = await getViewerProfile();
  const canPost = canUserPost(viewer);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DiscussionForumPosting",
    headline: post.title,
    text: post.body,
    datePublished: post.createdAt,
    author: { "@type": "Person", name: post.authorName },
  };

  return (
    <Container className="space-y-8 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="rounded-2xl border border-slate-200 bg-white p-6">
        <h1 className="text-2xl font-bold text-slate-900">{post.title}</h1>
        <p className="mt-3 text-slate-700">{post.body}</p>
        <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
          <span>
            {post.authorName} / {post.createdAt}
          </span>
          <div className="flex items-center gap-2">
            <LikeButton initialCount={post.likeCount} disabled={!canPost} />
            <ReportButton targetType="post" targetId={post.id} />
          </div>
        </div>
      </article>

      <CommentForm canPost={canPost} viewer={viewer} />

      <section className="space-y-3">
        <h2 className="text-xl font-bold">コメント</h2>
        <CommentList comments={comments} />
      </section>

      <AdBanner slotName="掲示板詳細下部" />
    </Container>
  );
}
