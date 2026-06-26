import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { CategoryCard } from "@/components/forum/CategoryCard";
import { PostCard } from "@/components/forum/PostCard";
import { PostForm } from "@/components/forum/PostForm";
import { ForumSearch } from "@/components/forum/ForumSearch";
import { AdBanner } from "@/components/ads/AdBanner";
import { getAllForumPosts, getForumCategories, getLatestForumPosts } from "@/lib/forum";

export const metadata: Metadata = {
  title: "掲示板",
  description: "家探し、仕事探し、生活相談のコミュニティ掲示板。",
};

export default function CommunityPage() {
  const categories = getForumCategories();
  const latestPosts = getLatestForumPosts();
  const allPosts = getAllForumPosts();

  return (
    <Container className="space-y-8 py-10">
      <section className="rounded-3xl bg-slate-900 p-8 text-white">
        <h1 className="text-3xl font-extrabold">コミュニティ掲示板</h1>
        <p className="mt-2 text-slate-300">閲覧は誰でも可能。投稿・コメントはログイン済みのactiveユーザーのみ可能です。</p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </section>

      <PostForm />

      <section className="space-y-4">
        <h2 className="text-xl font-bold">投稿を検索</h2>
        <ForumSearch posts={allPosts} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold">最新投稿</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {latestPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      <AdBanner slotName="掲示板一覧下部" />
    </Container>
  );
}
