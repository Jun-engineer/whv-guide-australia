import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "ログイン",
  description: "掲示板投稿に必要なログインページ。",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <Container className="py-10">
      <div className="mx-auto max-w-lg space-y-4">
        <h1 className="text-3xl font-extrabold">ログイン</h1>
        <p className="text-sm text-slate-600">
          メールアドレスでログインできます。アカウントをお持ちでない方は新規登録へお進みください。
        </p>
        <LoginForm />
      </div>
    </Container>
  );
}
