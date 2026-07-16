type ComparisonTableProps = {
  title?: string;
  headers: string[];
  rows: string[][];
  /** 表の下に添える注記（出典や前提など）。 */
  caption?: string;
};

/**
 * 料金・条件などを比較するための表。モバイルでは横スクロール。
 */
export function ComparisonTable({ title, headers, rows, caption }: ComparisonTableProps) {
  if (!rows || rows.length === 0) {
    return null;
  }

  return (
    <section className="space-y-2">
      {title ? <h2 className="text-base font-bold text-slate-900">{title}</h2> : null}
      <div className="overflow-x-auto rounded-2xl border border-slate-200">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100 text-left">
              {headers.map((header) => (
                <th key={header} className="whitespace-nowrap px-4 py-2 font-semibold text-slate-800">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.join("|")} className="border-t border-slate-200">
                {row.map((cell, index) => (
                  <td key={index} className="px-4 py-2 align-top text-slate-700">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {caption ? <p className="text-xs text-slate-500">{caption}</p> : null}
    </section>
  );
}
