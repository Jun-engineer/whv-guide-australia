import { AdSenseUnit } from "@/components/ads/AdSenseUnit";

/**
 * In-article advertisement.
 *
 * Renders a real AdSense unit when the article slot env var is set, otherwise
 * renders nothing so articles read cleanly without placeholders.
 */
export function ArticleAd() {
  const slot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_ARTICLE;

  if (!slot) {
    return null;
  }

  return (
    <div aria-label="広告: 記事ページ下部" className="overflow-hidden">
      <AdSenseUnit slot={slot} format="fluid" />
    </div>
  );
}
