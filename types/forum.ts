export type ForumCategory = {
  id: string;
  name: string;
  slug: string;
  description: string;
};

export type ForumPost = {
  id: string;
  categorySlug: string;
  userId: string;
  authorName: string;
  title: string;
  body: string;
  isHidden: boolean;
  likeCount: number;
  createdAt: string;
  editedAt?: string | null;
};

export type ForumComment = {
  id: string;
  postId: string;
  userId: string;
  authorName: string;
  body: string;
  isHidden: boolean;
  createdAt: string;
  editedAt?: string | null;
  parentId?: string | null;
};

export type ForumCommentNode = ForumComment & {
  replies: ForumCommentNode[];
};

export type Like = {
  id: string;
  userId: string;
  postId: string;
};
