import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "ログイン",
  description: "掲示板投稿に必要なログインページ。",
};

export default function LoginPage() {
  return (
    <Container className="py-10">
      <div className="mx-auto max-w-lg space-y-4">
        <h1 className="text-3xl font-extrabold">ログイン</h1>
        <p className="text-sm text-slate-600">メールログインとGoogleログインに対応しています。</p>
        <LoginForm />
      </div>
    </Container>
  );
}
