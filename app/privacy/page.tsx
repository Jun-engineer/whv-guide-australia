import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "WH Guide Australia プライバシーポリシー",
};

export default function PrivacyPage() {
  return (
    <Container className="py-10">
      <article className="prose max-w-3xl">
        <h1>プライバシーポリシー</h1>
        <p>ユーザー登録時の情報は認証・運用目的で使用し、適切に管理します。</p>
        <p>掲示板運営のため、通報対応や不正利用防止の目的でログを利用する場合があります。</p>
      </article>
    </Container>
  );
}
