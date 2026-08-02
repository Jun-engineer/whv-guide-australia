/**
 * Central social-image + social-metadata helper.
 *
 * One maintainable hierarchy for every public page:
 *   1. category-specific social image  (/public/social/category/<key>.png)
 *   2. site-wide default social image  (siteConfig.ogImage)
 *
 * All generated cards are static 1200×630 PNGs (see
 * scripts/generate-social-images.mjs). Serving pre-rendered files from
 * /public guarantees crawlers (Facebook, Threads, X, LINE, …) always receive
 * a real image, unlike the previous dynamic edge route which returned an
 * empty 0-byte body for Japanese text.
 */
import type { Metadata } from "next";
import { siteConfig, absoluteUrl } from "@/lib/siteConfig";

const SOCIAL_IMAGE_SIZE = { width: 1200, height: 630 } as const;
const SOCIAL_IMAGE_TYPE = "image/png";

/** Site-wide default preview (homepage image + final fallback). */
export const DEFAULT_SOCIAL_IMAGE = siteConfig.ogImage;

/**
 * Category → dedicated 1200×630 preview. Keys match article categories and
 * the matching top-level route (e.g. `farm` → `/farm`).
 */
export const categorySocialImages: Partial<Record<string, string>> = {
  farm: "/social/category/farm.png",
  jobs: "/social/category/jobs.png",
  housing: "/social/category/housing.png",
  tools: "/social/category/tools.png",
  health: "/social/category/health.png",
  english: "/social/category/english.png",
  area: "/social/category/area.png",
  travel: "/social/category/travel.png",
  cars: "/social/category/cars.png",
  license: "/social/category/license.png",
};

/** Resolve a social image with the category → default fallback hierarchy. */
export function resolveSocialImage(category?: string | null): string {
  if (category && categorySocialImages[category]) {
    return categorySocialImages[category] as string;
  }
  return DEFAULT_SOCIAL_IMAGE;
}

type OgImages = NonNullable<NonNullable<Metadata["openGraph"]>["images"]>;

const RASTER_IMAGE_RE = /\.(png|jpe?g|webp)$/i;
const MIME_BY_EXT: Record<string, string> = {
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  webp: "image/webp",
};

function mimeForPath(path: string): string {
  const ext = path.split(".").pop()?.toLowerCase() ?? "";
  return MIME_BY_EXT[ext] ?? SOCIAL_IMAGE_TYPE;
}

type ImageSize = { width: number; height: number };

/**
 * Absolute-URL OG image objects (og:image, :secure_url, :width, :height, :type, :alt).
 * Dimensions default to the 1200×630 card size; pass a `size` for article hero
 * images whose real dimensions are known.
 */
export function ogImages(
  path: string,
  alt: string = siteConfig.name,
  size: ImageSize = SOCIAL_IMAGE_SIZE,
): OgImages {
  const url = absoluteUrl(path);
  return [{ url, secureUrl: url, ...size, type: mimeForPath(path), alt }];
}

/** Absolute-URL Twitter image objects (twitter:image, twitter:image:alt). */
export function twitterImages(path: string, alt: string = siteConfig.name) {
  return [{ url: absoluteUrl(path), alt }];
}

/**
 * Resolve the best social image for an article using the required hierarchy:
 *   1. article hero image  (raster src with known width & height)
 *   2. category card        (1200×630)
 *   3. site-wide default    (1200×630)
 * A hero image is only used when it is a raster format AND declares both
 * dimensions, so the emitted og:image:width/height always match the file.
 */
export function resolveArticleImage(article: {
  category?: string | null;
  heroImage?: { src: string; width?: number; height?: number } | null;
}): { path: string; size: ImageSize } {
  const hero = article.heroImage;
  if (hero?.src && RASTER_IMAGE_RE.test(hero.src) && hero.width && hero.height) {
    return { path: hero.src, size: { width: hero.width, height: hero.height } };
  }
  return { path: resolveSocialImage(article.category), size: SOCIAL_IMAGE_SIZE };
}

/** Complete metadata for a major category hub page. */
export function buildCategoryMetadata(
  category: string,
  opts: { title: string; description: string; path: string },
): Metadata {
  const image = resolveSocialImage(category);
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: opts.path },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      url: absoluteUrl(opts.path),
      title: opts.title,
      description: opts.description,
      images: ogImages(image, opts.title),
    },
    twitter: {
      card: "summary_large_image",
      site: siteConfig.twitter,
      creator: siteConfig.twitter,
      title: opts.title,
      description: opts.description,
      images: twitterImages(image, opts.title),
    },
  };
}
