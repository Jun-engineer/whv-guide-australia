type WarningBoxProps = {
  items: string[];
};

export function WarningBox({ items }: WarningBoxProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <aside className="rounded-2xl border border-rose-200 bg-rose-50 p-4">
      <h3 className="font-semibold text-rose-800">注意事項</h3>
      <ul className="mt-2 space-y-1 text-sm text-rose-700">
        {items.map((item) => (
          <li key={item}>- {item}</li>
        ))}
      </ul>
    </aside>
  );
}
