import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { UserMenu } from "@/components/auth/UserMenu";
import { AccountSettings } from "@/components/auth/AccountSettings";

export const metadata: Metadata = {
  title: "プロフィール",
  description: "ログインユーザーのプロフィール情報。",
  robots: { index: false, follow: false },
};

export default function ProfilePage() {
  return (
    <Container className="py-10">
      <div className="mx-auto max-w-xl space-y-4">
        <h1 className="text-3xl font-extrabold">プロフィール</h1>
        <p className="text-sm text-slate-600">
          ログイン中のアカウント情報の確認と、各種設定の変更ができます。
        </p>
        <UserMenu />
        <h2 className="pt-4 text-xl font-bold">アカウント設定</h2>
        <AccountSettings />
      </div>
    </Container>
  );
}
