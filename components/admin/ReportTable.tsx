import type { Report } from "@/types/report";

const statusLabel: Record<Report["status"], string> = {
  pending: "未対応",
  in_progress: "対応中",
  resolved: "解決済み",
  rejected: "却下",
};

const targetTypeLabel: Record<Report["targetType"], string> = {
  post: "投稿",
  comment: "コメント",
  user: "ユーザー",
};

export function ReportTable({ reports }: { reports: Report[] }) {
  if (reports.length === 0) {
    return <p className="text-sm text-slate-600">通報はありません。</p>;
  }

  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
      <table className="w-full text-left text-sm">
        <thead className="bg-slate-50 text-slate-600">
          <tr>
            <th className="px-4 py-3">対象</th>
            <th className="px-4 py-3">理由</th>
            <th className="px-4 py-3">通報者</th>
            <th className="px-4 py-3">状態</th>
            <th className="px-4 py-3">操作</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id} className="border-t border-slate-100">
              <td className="px-4 py-3">
                {targetTypeLabel[report.targetType]} / {report.targetId}
              </td>
              <td className="px-4 py-3">{report.reason}</td>
              <td className="px-4 py-3">{report.reporterName}</td>
              <td className="px-4 py-3">{statusLabel[report.status]}</td>
              <td className="px-4 py-3">
                <div className="flex gap-2">
                  <button type="button" className="rounded-full border border-slate-300 px-2 py-1 text-xs">
                    非表示
                  </button>
                  <button type="button" className="rounded-full border border-rose-300 px-2 py-1 text-xs text-rose-700">
                    BAN
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
