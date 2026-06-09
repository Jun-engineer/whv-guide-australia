import { forumCategories, forumComments, forumPosts } from "@/lib/mockData";

export function getForumCategories() {
  return forumCategories;
}

export function getForumPostsByCategory(categorySlug: string) {
  return forumPosts.filter((post) => post.categorySlug === categorySlug && !post.isHidden);
}

export function getLatestForumPosts(limit = 5) {
  return forumPosts.filter((post) => !post.isHidden).slice(0, limit);
}

export function getForumPostById(postId: string) {
  return forumPosts.find((post) => post.id === postId && !post.isHidden);
}

export function getCommentsByPostId(postId: string) {
  return forumComments.filter((comment) => comment.postId === postId && !comment.isHidden);
}
