type ReportButtonProps = {
  targetType: "post" | "comment";
  targetId: string;
};

export function ReportButton({ targetType, targetId }: ReportButtonProps) {
  return (
    <button
      type="button"
      className="rounded-full border border-rose-300 px-3 py-1 text-xs font-semibold text-rose-700"
      aria-label={`Report ${targetType} ${targetId}`}
    >
      通報
    </button>
  );
}
