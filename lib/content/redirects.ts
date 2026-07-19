/**
 * 統合（マージ）に伴う恒久リダイレクトの単一の情報源。
 *
 * ここに登録された旧 slug は、next.config.ts が 308（恒久）リダイレクトとして
 * primary の記事へ転送します。ここで扱うのは「計画中（未公開）だった重複トピック
 * を既存の公開記事へ統合したもの」で、公開中URLを潰すものではありません。
 *
 * ルール:
 * - `to` は必ず公開中（published）の実記事 slug を指すこと。
 * - リダイレクトのチェーン（A→B→C）を作らないこと（`to` を別の `from` にしない）。
 * - 検証は scripts/validate-content.mjs が build/CI 時に行う。
 */
export type ContentRedirect = {
  /** 旧 slug（/guides/{from}）。 */
  from: string;
  /** 統合先の公開記事 slug（/guides/{to}）。 */
  to: string;
  /** 統合の理由（監査用）。 */
  reason: string;
};

export const contentRedirects: ContentRedirect[] = [
  {
    from: "sim-esim-guide",
    to: "sim-guide",
    reason: "SIM/eSIMの導入手順は既存のSIM・通信ガイドと同一の検索意図。",
  },
  {
    from: "mobile-carrier-comparison",
    to: "sim-guide",
    reason: "主要キャリア比較は既存のSIM・通信ガイドが網羅。",
  },
  {
    from: "abn-application",
    to: "abn-guide",
    reason: "ABN申請手順は既存のABNガイドと同一トピック。",
  },
  {
    from: "dasp-guide",
    to: "dasp-refund",
    reason: "DASP申請の手順は既存のDASP還付記事と重複。",
  },
  {
    from: "find-lost-super",
    to: "super-guide",
    reason: "紛失Superの確認・統合は既存のSuperガイドの範囲。",
  },
  {
    from: "buy-used-car-guide",
    to: "cars-guide",
    reason: "中古車購入は既存の車・交通ガイドが網羅。",
  },
  {
    from: "city-public-transport-comparison",
    to: "transport-payment-guide",
    reason: "都市別の公共交通・運賃・決済比較は既存の公共交通・決済ガイドと同一の検索意図。",
  },
];

/** next.config 用のリダイレクト定義を生成（308 恒久）。 */
export function toNextRedirects() {
  return contentRedirects.map((redirect) => ({
    source: `/guides/${redirect.from}`,
    destination: `/guides/${redirect.to}`,
    permanent: true,
  }));
}
