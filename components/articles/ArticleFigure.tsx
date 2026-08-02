import Image from "next/image";
import type { ArticleImage } from "@/types/article";

type ArticleFigureProps = {
  image: ArticleImage;
  /** ヒーロー画像など、ファーストビューに入る画像は優先読み込みする。 */
  priority?: boolean;
  /** レスポンシブ画像の sizes 指定。 */
  sizes?: string;
  className?: string;
};

const DEFAULT_WIDTH = 1200;
const DEFAULT_HEIGHT = 675;

/**
 * 記事内画像の共通表示コンポーネント。
 * - next/image による最適化・レスポンシブ配信（WebP/AVIF は Next の設定に従う）
 * - width/height（なければ 16:9 の既定値）でレイアウトシフトを防止
 * - priority 指定がなければ自動で遅延読み込み（lazy）
 * - caption / credit を figcaption に表示
 */
export function ArticleFigure({
  image,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 768px",
  className,
}: ArticleFigureProps) {
  return (
    <figure className={className}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width ?? DEFAULT_WIDTH}
        height={image.height ?? DEFAULT_HEIGHT}
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        className="h-auto w-full rounded-2xl border border-slate-200 bg-white"
      />
      {image.caption || image.credit ? (
        <figcaption className="mt-1.5 text-xs text-slate-500">
          {image.caption}
          {image.caption && image.credit ? " " : null}
          {image.credit ? (
            <span className="text-slate-400">（{image.credit}）</span>
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
