"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { ArticleImage } from "@/types/article";

type ArticleImageGalleryProps = {
  images: ArticleImage[];
  /** 見出し（任意）。 */
  title?: string;
};

const DEFAULT_WIDTH = 1200;
const DEFAULT_HEIGHT = 675;

/**
 * 記事本文・手順スクリーンショット向けの画像ギャラリー。
 * 画像をタップ／クリックすると拡大表示（tap-to-enlarge）できる。
 * モバイルでも読みやすいよう、拡大時は画面幅に合わせて表示する。
 */
export function ArticleImageGallery({ images, title }: ArticleImageGalleryProps) {
  const [active, setActive] = useState<ArticleImage | null>(null);

  useEffect(() => {
    if (!active) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  if (!images || images.length === 0) return null;

  return (
    <section className="space-y-3">
      {title ? <h2 className="text-base font-bold text-slate-900">{title}</h2> : null}
      <div className="grid gap-4 sm:grid-cols-2">
        {images.map((image) => (
          <figure key={image.src} className="space-y-1.5">
            <button
              type="button"
              onClick={() => setActive(image)}
              aria-label={`画像を拡大: ${image.alt}`}
              className="block w-full overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:border-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-300"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width ?? DEFAULT_WIDTH}
                height={image.height ?? DEFAULT_HEIGHT}
                sizes="(max-width: 640px) 100vw, 384px"
                loading="lazy"
                className="h-auto w-full"
              />
            </button>
            {image.caption || image.credit ? (
              <figcaption className="text-xs text-slate-500">
                {image.caption}
                {image.credit ? (
                  <span className="text-slate-400">（{image.credit}）</span>
                ) : null}
              </figcaption>
            ) : null}
          </figure>
        ))}
      </div>

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 p-4"
        >
          <button
            type="button"
            aria-label="拡大表示を閉じる"
            onClick={() => setActive(null)}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-800"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <div className="max-h-[90vh] max-w-4xl overflow-auto" onClick={(e) => e.stopPropagation()}>
            <Image
              src={active.src}
              alt={active.alt}
              width={active.width ?? DEFAULT_WIDTH}
              height={active.height ?? DEFAULT_HEIGHT}
              sizes="90vw"
              className="h-auto w-full rounded-lg bg-white"
            />
            {active.caption ? (
              <p className="mt-2 text-center text-sm text-white/90">{active.caption}</p>
            ) : null}
          </div>
        </div>
      ) : null}
    </section>
  );
}
