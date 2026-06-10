type TipsBoxProps = {
  tips: string[];
};

export function TipsBox({ tips }: TipsBoxProps) {
  if (tips.length === 0) {
    return null;
  }

  return (
    <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
      <h2 className="flex items-center gap-2 text-lg font-bold text-emerald-900">
        <span aria-hidden="true">💡</span>
        知っておくと得するポイント
      </h2>
      <ul className="mt-3 space-y-2">
        {tips.map((tip) => (
          <li key={tip} className="flex gap-2 text-sm text-emerald-900">
            <span aria-hidden="true" className="mt-0.5 text-emerald-600">
              ✓
            </span>
            <span>{tip}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
