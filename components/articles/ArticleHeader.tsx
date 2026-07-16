import Image from "next/image";
import type { Article } from "@/types/article";
import { getCategoryLabel } from "@/lib/articles";

type ArticleHeaderProps = {
  article: Article;
};

export function ArticleHeader({ article }: ArticleHeaderProps) {
  return (
    <div className="space-y-4">
      <header className="rounded-3xl bg-gradient-to-br from-sky-700 to-cyan-700 p-8 text-white">
        <p className="text-sm font-semibold">{getCategoryLabel(article.category)}</p>
        <h1 className="mt-2 text-3xl font-extrabold leading-tight">{article.title}</h1>
        <p className="mt-3 max-w-2xl text-sky-50">{article.description}</p>
        <p className="mt-4 text-sm text-sky-100">最終更新日: {article.updatedAt}</p>
      </header>
      {article.heroImage ? (
        <figure>
          <Image
            src={article.heroImage.src}
            alt={article.heroImage.alt}
            width={1200}
            height={630}
            priority
            className="h-auto w-full rounded-2xl border border-slate-200 bg-white"
          />
          {article.heroImage.caption ? (
            <figcaption className="mt-1 text-xs text-slate-500">
              {article.heroImage.caption}
            </figcaption>
          ) : null}
        </figure>
      ) : null}
    </div>
  );
}
