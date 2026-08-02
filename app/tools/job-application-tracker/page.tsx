import type { Metadata } from "next";
import { ToolShell } from "@/components/tools/ToolShell";
import { JobApplicationTracker } from "@/components/tools/JobApplicationTracker";
import { getToolBySlug } from "@/lib/tools/registry";

const tool = getToolBySlug("tool-job-application-tracker")!;

export const metadata: Metadata = {
  title: tool.title,
  description: tool.description,
  alternates: { canonical: tool.path },
};

export default function JobApplicationTrackerPage() {
  return (
    <ToolShell
      tool={tool}
      disclaimer={
        <>
          <p>
            応募した仕事の状況を自分で記録・管理するためのツールです。求人の紹介や採用の保証は行いません。
          </p>
          <p>入力した記録はお使いのブラウザにのみ保存され、サーバーには送信されません。端末やブラウザを変えると引き継がれません。</p>
        </>
      }
    >
      <JobApplicationTracker />
    </ToolShell>
  );
}
