import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("有効なメールアドレスを入力してください。"),
  password: z.string().min(8, "パスワードは8文字以上にしてください。"),
});
export type LoginInput = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
  displayName: z.string().min(2, "表示名は2文字以上にしてください。"),
  email: z.string().email("有効なメールアドレスを入力してください。"),
  password: z.string().min(8, "パスワードは8文字以上にしてください。"),
});
export type RegisterInput = z.infer<typeof registerSchema>;

export const feedbackSchema = z.object({
  type: z.enum(["correction", "article_request", "experience", "question", "other"]),
  pageUrl: z
    .string()
    .max(300, "URLが長すぎます。")
    .optional()
    .or(z.literal("")),
  title: z.string().min(3, "タイトルは3文字以上にしてください。").max(120, "タイトルが長すぎます。"),
  body: z.string().min(10, "本文は10文字以上にしてください。").max(2000, "本文が長すぎます。"),
});
export type FeedbackInput = z.infer<typeof feedbackSchema>;

export const postSchema = z.object({
  title: z.string().min(3, "タイトルは3文字以上にしてください。").max(120, "タイトルが長すぎます。"),
  body: z.string().min(5, "本文は5文字以上にしてください。").max(5000, "本文が長すぎます。"),
});
export type PostInput = z.infer<typeof postSchema>;

export const commentSchema = z.object({
  body: z.string().min(1, "コメントを入力してください。").max(2000, "コメントが長すぎます。"),
});
export type CommentInput = z.infer<typeof commentSchema>;
