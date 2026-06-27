import { forumCategories, forumComments, forumPosts } from "@/lib/mockData";
import { getSupabaseServerClient } from "@/lib/supabaseServer";
import type { ForumCategory, ForumComment, ForumPost } from "@/types/forum";

type PostRow = {
  id: string;
  category_id: string | null;
  user_id: string | null;
  title: string;
  body: string;
  is_hidden: boolean;
  created_at: string | null;
  profiles: { display_name: string | null } | null;
  forum_categories: { slug: string | null } | null;
  likes: { count: number }[] | null;
};

type CommentRow = {
  id: string;
  post_id: string;
  user_id: string | null;
  body: string;
  is_hidden: boolean;
  created_at: string | null;
  profiles: { display_name: string | null } | null;
};

const POST_SELECT =
  "id, category_id, user_id, title, body, is_hidden, created_at, profiles(display_name), forum_categories(slug), likes(count)";

function toDateString(value: string | null): string {
  return value ? value.slice(0, 10) : "";
}

function mapPostRow(row: PostRow): ForumPost {
  return {
    id: row.id,
    categorySlug: row.forum_categories?.slug ?? "",
    userId: row.user_id ?? "",
    authorName: row.profiles?.display_name ?? "匿名ユーザー",
    title: row.title,
    body: row.body,
    isHidden: row.is_hidden,
    likeCount: row.likes?.[0]?.count ?? 0,
    createdAt: toDateString(row.created_at),
  };
}

function mapCommentRow(row: CommentRow): ForumComment {
  return {
    id: row.id,
    postId: row.post_id,
    userId: row.user_id ?? "",
    authorName: row.profiles?.display_name ?? "匿名ユーザー",
    body: row.body,
    isHidden: row.is_hidden,
    createdAt: toDateString(row.created_at),
  };
}

export async function getForumCategories(): Promise<ForumCategory[]> {
  const client = getSupabaseServerClient();
  if (!client) return forumCategories;

  const { data, error } = await client
    .from("forum_categories")
    .select("id, name, slug, description, sort_order")
    .order("sort_order", { ascending: true });

  if (error || !data || data.length === 0) return forumCategories;

  return data.map((row) => ({
    id: row.id as string,
    name: row.name as string,
    slug: row.slug as string,
    description: (row.description as string | null) ?? "",
  }));
}

export async function getForumPostsByCategory(categorySlug: string): Promise<ForumPost[]> {
  const client = getSupabaseServerClient();
  if (!client) {
    return forumPosts.filter((post) => post.categorySlug === categorySlug && !post.isHidden);
  }

  const { data, error } = await client
    .from("forum_posts")
    .select(POST_SELECT)
    .eq("is_hidden", false)
    .order("created_at", { ascending: false });

  if (error || !data) return [];

  return (data as unknown as PostRow[])
    .map(mapPostRow)
    .filter((post) => post.categorySlug === categorySlug);
}

export async function getLatestForumPosts(limit = 5): Promise<ForumPost[]> {
  const client = getSupabaseServerClient();
  if (!client) return forumPosts.filter((post) => !post.isHidden).slice(0, limit);

  const { data, error } = await client
    .from("forum_posts")
    .select(POST_SELECT)
    .eq("is_hidden", false)
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error || !data) return [];

  return (data as unknown as PostRow[]).map(mapPostRow);
}

export async function getAllForumPosts(): Promise<ForumPost[]> {
  const client = getSupabaseServerClient();
  if (!client) return forumPosts.filter((post) => !post.isHidden);

  const { data, error } = await client
    .from("forum_posts")
    .select(POST_SELECT)
    .eq("is_hidden", false)
    .order("created_at", { ascending: false });

  if (error || !data) return [];

  return (data as unknown as PostRow[]).map(mapPostRow);
}

export async function searchForumPosts(query: string): Promise<ForumPost[]> {
  const all = await getAllForumPosts();
  const keyword = query.trim().toLowerCase();
  if (!keyword) return all;
  return all.filter(
    (post) =>
      post.title.toLowerCase().includes(keyword) ||
      post.body.toLowerCase().includes(keyword) ||
      post.authorName.toLowerCase().includes(keyword),
  );
}

export async function getForumPostById(postId: string): Promise<ForumPost | undefined> {
  const client = getSupabaseServerClient();
  if (!client) {
    return forumPosts.find((post) => post.id === postId && !post.isHidden);
  }

  const { data, error } = await client
    .from("forum_posts")
    .select(POST_SELECT)
    .eq("id", postId)
    .eq("is_hidden", false)
    .maybeSingle();

  if (error || !data) return undefined;

  return mapPostRow(data as unknown as PostRow);
}

export async function getCommentsByPostId(postId: string): Promise<ForumComment[]> {
  const client = getSupabaseServerClient();
  if (!client) {
    return forumComments.filter((comment) => comment.postId === postId && !comment.isHidden);
  }

  const { data, error } = await client
    .from("forum_comments")
    .select("id, post_id, user_id, body, is_hidden, created_at, profiles(display_name)")
    .eq("post_id", postId)
    .eq("is_hidden", false)
    .order("created_at", { ascending: true });

  if (error || !data) return [];

  return (data as unknown as CommentRow[]).map(mapCommentRow);
}
