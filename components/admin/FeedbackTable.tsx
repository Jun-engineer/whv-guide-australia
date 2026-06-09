import type { FeedbackRequest } from "@/types/feedback";

const statusLabel: Record<FeedbackRequest["status"], string> = {
  pending: "未対応",
  in_progress: "対応中",
  resolved: "解決済み",
  rejected: "却下",
};

const typeLabel: Record<FeedbackRequest["type"], string> = {
  correction: "修正依頼",
  article_request: "記事リクエスト",
  experience: "体験談",
  question: "質問",
  other: "その他",
};

export function FeedbackTable({ requests }: { requests: FeedbackRequest[] }) {
  if (requests.length === 0) {
    return <p className="text-sm text-slate-600">リクエストはありません。</p>;
  }

  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
      <table className="w-full text-left text-sm">
        <thead className="bg-slate-50 text-slate-600">
          <tr>
            <th className="px-4 py-3">種類</th>
            <th className="px-4 py-3">タイトル</th>
            <th className="px-4 py-3">投稿者</th>
            <th className="px-4 py-3">状態</th>
            <th className="px-4 py-3">操作</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id} className="border-t border-slate-100">
              <td className="px-4 py-3">{typeLabel[request.type]}</td>
              <td className="px-4 py-3">{request.title}</td>
              <td className="px-4 py-3">{request.authorName}</td>
              <td className="px-4 py-3">{statusLabel[request.status]}</td>
              <td className="px-4 py-3">
                <div className="flex gap-2">
                  <button type="button" className="rounded-full border border-slate-300 px-2 py-1 text-xs">
                    対応中
                  </button>
                  <button type="button" className="rounded-full border border-emerald-300 px-2 py-1 text-xs text-emerald-700">
                    解決
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
