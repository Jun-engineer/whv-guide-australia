import type { OfficialSource } from "@/types/content";

type OfficialSourceBoxProps = {
  sources: OfficialSource[];
  /** 見出し（既定: 公式情報源） */
  title?: string;
};

/**
 * 記事内の数値・条件の裏付けとなる公式（政府・公的機関）情報源を明示する。
 * accessedAt を持つ場合はいつ確認したかも示す。
 */
export function OfficialSourceBox({ sources, title = "公式情報源" }: OfficialSourceBoxProps) {
  if (!sources || sources.length === 0) {
    return null;
  }

  return (
    <section className="rounded-2xl border border-sky-200 bg-sky-50 p-6">
      <h2 className="text-base font-bold text-sky-900">{title}</h2>
      <p className="mt-1 text-xs text-sky-800/80">
        本記事の料金・条件・法的ルールは、以下の公式情報を確認して作成しています。
      </p>
      <ul className="mt-3 space-y-2">
        {sources.map((source) => (
          <li key={source.url} className="text-sm">
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-sky-700 underline-offset-2 hover:underline"
            >
              {source.label} ↗
            </a>
            {source.accessedAt ? (
              <span className="ml-2 text-xs text-sky-800/70">
                （確認日：{source.accessedAt}）
              </span>
            ) : null}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-sky-800/70">
        ※ 制度・料金・税率は改定されることがあります。手続き前に必ず公式サイトで最新情報をご確認ください。
        本記事は一般的な情報提供であり、個別の法律・移民・税務・医療・保険・雇用に関する専門的助言ではありません。
      </p>
    </section>
  );
}
