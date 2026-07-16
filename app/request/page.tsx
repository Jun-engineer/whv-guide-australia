import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { FeedbackForm } from "@/components/feedback/FeedbackForm";

export const metadata: Metadata = {
  title: "リクエスト・フィードバック",
  description: "記事リクエスト、情報の修正依頼、体験談の共有を受け付けています。",
};

type RequestPageProps = {
  searchParams: Promise<{ type?: string; url?: string }>;
};

export default async function RequestPage({ searchParams }: RequestPageProps) {
  const { type, url } = await searchParams;

  return (
    <Container className="py-10">
      <div className="mx-auto max-w-2xl space-y-4">
        <h1 className="text-3xl font-extrabold">リクエスト・フィードバック</h1>
        <p className="text-sm text-slate-600">
          知りたい情報、古くなった内容、あなたの体験談を共有してください。運営が確認します。
        </p>
        <FeedbackForm defaultType={type} defaultPageUrl={url} />
      </div>
    </Container>
  );
}
