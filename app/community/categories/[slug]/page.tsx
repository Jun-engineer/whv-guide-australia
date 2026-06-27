import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { PostCard } from "@/components/forum/PostCard";
import { PostForm } from "@/components/forum/PostForm";
import { getForumCategories, getForumPostsByCategory } from "@/lib/forum";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const categories = await getForumCategories();
  const category = categories.find((item) => item.slug === slug);
  return {
    title: category ? `掲示板: ${category.name}` : "掲示板カテゴリ",
    description: category?.description ?? "カテゴリ別の掲示板投稿一覧。",
    alternates: {
      canonical: `/community/categories/${slug}`,
    },
    openGraph: {
      type: "website",
      title: category ? `掲示板: ${category.name}` : "掲示板カテゴリ",
      description: category?.description ?? "カテゴリ別の掲示板投稿一覧。",
      url: `/community/categories/${slug}`,
    },
  };
}

export default async function CommunityCategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const categories = await getForumCategories();
  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }

  const posts = await getForumPostsByCategory(slug);

  return (
    <Container className="space-y-8 py-10">
      <section>
        <h1 className="text-3xl font-extrabold text-slate-900">{category.name}</h1>
        <p className="mt-2 text-slate-600">{category.description}</p>
      </section>

      <PostForm categoryId={category.id} />

      <section className="space-y-4">
        {posts.length === 0 ? (
          <p className="text-sm text-slate-600">このカテゴリにはまだ投稿がありません。</p>
        ) : (
          posts.map((post) => <PostCard key={post.id} post={post} />)
        )}
      </section>
    </Container>
  );
}
