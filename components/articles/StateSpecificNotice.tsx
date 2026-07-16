import type { ReactNode } from "react";

type StateSpecificNoticeProps = {
  /** 対象の州・準州（例: NSW, VIC, QLD, 全国）。 */
  state: string;
  children: ReactNode;
};

/**
 * 州・準州によって異なるルールであることを明示するための注記ボックス。
 * 「全国共通ルール」と「州ごとのルール」を読者が混同しないようにする。
 */
export function StateSpecificNotice({ state, children }: StateSpecificNoticeProps) {
  return (
    <aside className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
      <p className="text-xs font-bold uppercase tracking-wide text-amber-700">
        📍 {state} の場合
      </p>
      <div className="mt-1 space-y-1 text-sm text-amber-900">{children}</div>
    </aside>
  );
}
