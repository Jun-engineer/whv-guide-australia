import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { CommentList } from "@/components/forum/CommentList";
import { CommentForm } from "@/components/forum/CommentForm";
import { ReportButton } from "@/components/forum/ReportButton";
import { LikeButton } from "@/components/forum/LikeButton";
import { AdBanner } from "@/components/ads/AdBanner";
import { getCommentsByPostId, getForumPostById } from "@/lib/forum";
import { absoluteUrl } from "@/lib/siteConfig";

type PostPageProps = {
  params: Promise<{ id: string }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { id } = await params;
  const post = await getForumPostById(id);
  return {
    title: post ? post.title : "投稿詳細",
    description: post ? post.body.slice(0, 80) : "掲示板投稿の詳細とコメント。",
    alternates: {
      canonical: `/community/posts/${id}`,
    },
    openGraph: {
      type: "article",
      title: post ? post.title : "投稿詳細",
      description: post ? post.body.slice(0, 80) : "掲示板投稿の詳細とコメント。",
      url: `/community/posts/${id}`,
    },
  };
}

export default async function CommunityPostPage({ params }: PostPageProps) {
  const { id } = await params;
  const post = await getForumPostById(id);
  if (!post) {
    notFound();
  }

  const comments = await getCommentsByPostId(post.id);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DiscussionForumPosting",
    headline: post.title,
    text: post.body,
    url: absoluteUrl(`/community/posts/${post.id}`),
    datePublished: post.createdAt,
    inLanguage: "ja",
    author: { "@type": "Person", name: post.authorName },
    interactionStatistic: {
      "@type": "InteractionCounter",
      interactionType: "https://schema.org/LikeAction",
      userInteractionCount: post.likeCount,
    },
    commentCount: comments.length,
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
            <LikeButton postId={post.id} initialCount={post.likeCount} />
            <ReportButton targetType="post" targetId={post.id} />
            <ReportButton targetType="user" targetId={post.userId} label="ユーザーを通報" />
          </div>
        </div>
      </article>

      <CommentForm postId={post.id} />

      <section className="space-y-3">
        <h2 className="text-xl font-bold">コメント</h2>
        <CommentList comments={comments} />
      </section>

      <AdBanner slotName="掲示板詳細下部" />
    </Container>
  );
}
