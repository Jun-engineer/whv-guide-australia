type AnswerBoxProps = {
  /** 結論・要点の一言回答。 */
  answer: string;
};

/**
 * 記事冒頭に置く「結論・直接的な回答」ボックス。
 * 長い記事でも最初に結論が分かるようにして直帰を防ぐ。
 */
export function AnswerBox({ answer }: AnswerBoxProps) {
  if (!answer) return null;
  return (
    <section
      aria-label="結論"
      className="rounded-2xl border-l-4 border-sky-500 bg-sky-50/70 px-5 py-4"
    >
      <p className="text-xs font-bold uppercase tracking-wide text-sky-700">結論</p>
      <p className="mt-1 text-base font-medium leading-relaxed text-slate-800">{answer}</p>
    </section>
  );
}
