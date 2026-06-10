import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { UserMenu } from "@/components/auth/UserMenu";
import { getViewerProfile } from "@/lib/auth";

export const metadata: Metadata = {
  title: "プロフィール",
  description: "ログインユーザーのプロフィール情報。",
};

export default async function ProfilePage() {
  const viewer = await getViewerProfile();

  return (
    <Container className="py-10">
      <div className="mx-auto max-w-xl space-y-4">
        <h1 className="text-3xl font-extrabold">プロフィール</h1>
        <p className="text-sm text-slate-600">
          ログイン中のアカウント情報と、掲示板での権限・利用ステータスを確認できます。
        </p>
        <UserMenu viewer={viewer} />
      </div>
    </Container>
  );
}
