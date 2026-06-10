import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { RegisterForm } from "@/components/auth/RegisterForm";

export const metadata: Metadata = {
  title: "新規登録",
  description: "掲示板機能を利用するためのアカウント登録。",
};

export default function RegisterPage() {
  return (
    <Container className="py-10">
      <div className="mx-auto max-w-lg space-y-4">
        <h1 className="text-3xl font-extrabold">新規登録</h1>
        <p className="text-sm text-slate-600">
          メール認証と電話番号（SMS）認証により、安心して使えるコミュニティを保っています。
        </p>
        <RegisterForm />
      </div>
    </Container>
  );
}
