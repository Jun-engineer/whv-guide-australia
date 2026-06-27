import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("有効なメールアドレスを入力してください。"),
  password: z.string().min(8, "パスワードは8文字以上にしてください。"),
});
export type LoginInput = z.infer<typeof loginSchema>;

export const registerSchema = z
  .object({
    displayName: z.string().min(2, "表示名は2文字以上にしてください。"),
    email: z.string().email("有効なメールアドレスを入力してください。"),
    phone: z
      .string()
      .regex(
        /^\+[1-9]\d{7,14}$/,
        "国番号付きの形式で入力してください（例: 日本 +819012345678 / 豪州 +61412345678）。",
      ),
    password: z.string().min(8, "パスワードは8文字以上にしてください。"),
    confirmPassword: z.string().min(8, "確認用パスワードを入力してください。"),
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: "パスワードが一致しません。",
    path: ["confirmPassword"],
  });
export type RegisterInput = z.infer<typeof registerSchema>;

export const otpSchema = z.object({
  token: z.string().regex(/^\d{6}$/, "6桁の認証コードを入力してください。"),
});
export type OtpInput = z.infer<typeof otpSchema>;

export const emailChangeSchema = z.object({
  email: z.string().email("有効なメールアドレスを入力してください。"),
});
export type EmailChangeInput = z.infer<typeof emailChangeSchema>;

export const passwordChangeSchema = z
  .object({
    password: z.string().min(8, "パスワードは8文字以上にしてください。"),
    confirm: z.string().min(8, "確認用パスワードを入力してください。"),
  })
  .refine((values) => values.password === values.confirm, {
    message: "パスワードが一致しません。",
    path: ["confirm"],
  });
export type PasswordChangeInput = z.infer<typeof passwordChangeSchema>;

export const phoneChangeSchema = z.object({
  phone: z
    .string()
    .regex(
      /^\+[1-9]\d{7,14}$/,
      "国番号付きの形式で入力してください（例: 日本 +819012345678 / 豪州 +61412345678）。",
    ),
});
export type PhoneChangeInput = z.infer<typeof phoneChangeSchema>;

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

export const reportSchema = z.object({
  reason: z.string().min(1, "通報理由を選択してください。"),
  detail: z.string().max(1000, "詳細が長すぎます。").optional().or(z.literal("")),
});
export type ReportInput = z.infer<typeof reportSchema>;
