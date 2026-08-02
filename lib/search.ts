import type { ArticleCategory } from "@/types/article";

/**
 * クライアント安全な検索コア（純粋関数のみ）。
 * このファイルは記事データ（lib/mockData 等）を import しない。
 * インデックス構築（記事データに依存）は lib/searchIndex.ts に分離している。
 */

/**
 * クライアントに渡す軽量な検索ドキュメント。
 * 記事本文（content）は含めず、検索に必要な最小限のフィールドのみを持つ。
 */
export type SearchDoc = {
  slug: string;
  title: string;
  description: string;
  category: ArticleCategory;
  categoryLabel: string;
  /** 別名・略称・表記ゆれ（表示にも使う）。 */
  aliases: string[];
  /** 追加のヒット用テキスト（ハブ・タグ・手順見出しなどを連結・正規化済み）。 */
  keywords: string;
};

export type SearchResult = SearchDoc & {
  score: number;
  /** マッチした別名（あれば表示に使う）。 */
  matchedAlias?: string;
};

/** 検索用の正規化：全角/半角の統一（NFKC）と小文字化。 */
export function normalize(value: string): string {
  return value.normalize("NFKC").toLowerCase().trim();
}

/**
 * インデックスに対してクエリを実行し、スコア順に並べて返す。
 * - 部分一致対応（各語が haystack のどこかに含まれれば AND でヒット）
 * - タイトル完全一致 > タイトル前方一致 > タイトル部分一致 > 別名 > 説明 > その他
 */
export function searchDocs(
  index: SearchDoc[],
  rawQuery: string,
  category?: ArticleCategory | "all",
): SearchResult[] {
  const query = normalize(rawQuery);
  if (query.length === 0) {
    return [];
  }

  const terms = query.split(/\s+/).filter(Boolean);

  const results: SearchResult[] = [];

  for (const doc of index) {
    if (category && category !== "all" && doc.category !== category) {
      continue;
    }

    const titleNorm = normalize(doc.title);
    const descNorm = normalize(doc.description);
    const categoryNorm = normalize(doc.categoryLabel);
    const aliasNormList = doc.aliases.map((a) => ({ raw: a, norm: normalize(a) }));
    const aliasHaystack = aliasNormList.map((a) => a.norm).join(" ");

    const haystack = `${titleNorm} ${descNorm} ${categoryNorm} ${aliasHaystack} ${doc.keywords}`;

    // すべての語がどこかにヒットしなければ対象外（AND 検索）。
    const allTermsMatch = terms.every((term) => haystack.includes(term));
    if (!allTermsMatch) {
      continue;
    }

    let score = 0;
    let matchedAlias: string | undefined;

    if (titleNorm === query) {
      score = 100;
    } else if (titleNorm.startsWith(query)) {
      score = 85;
    } else if (titleNorm.includes(query)) {
      score = 70;
    } else if (terms.every((term) => titleNorm.includes(term))) {
      score = 60;
    } else {
      const alias = aliasNormList.find((a) =>
        terms.some((term) => a.norm.includes(term) || term.includes(a.norm)),
      );
      if (alias) {
        score = 50;
        matchedAlias = alias.raw;
      } else if (terms.every((term) => categoryNorm.includes(term))) {
        score = 40;
      } else if (terms.every((term) => descNorm.includes(term))) {
        score = 30;
      } else {
        score = 15;
      }
    }

    results.push({ ...doc, score, matchedAlias });
  }

  return results.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return a.title.localeCompare(b.title, "ja");
  });
}
