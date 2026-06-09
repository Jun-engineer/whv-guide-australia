import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "利用規約",
  description: "WH Guide Australia 利用規約",
};

export default function TermsPage() {
  return (
    <Container className="py-10">
      <article className="prose max-w-3xl">
        <h1>利用規約</h1>
        <p>本サイトの情報は一般的な参考情報です。最終判断は公式情報に基づいて行ってください。</p>
        <p>掲示板投稿は法令と公序良俗を守って利用してください。</p>
      </article>
    </Container>
  );
}
