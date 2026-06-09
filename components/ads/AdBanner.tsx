import { AdSenseUnit } from "@/components/ads/AdSenseUnit";

type AdBannerProps = {
  /** Human readable placement label (used for analytics / accessibility). */
  slotName: string;
  /** AdSense ad unit slot id. Falls back to the shared banner slot env var. */
  slot?: string;
};

/**
 * Horizontal advertisement banner.
 *
 * Renders a real AdSense unit when a slot id is available, otherwise renders
 * nothing so the layout stays clean for every visitor.
 */
export function AdBanner({ slotName, slot }: AdBannerProps) {
  const resolvedSlot = slot ?? process.env.NEXT_PUBLIC_ADSENSE_SLOT_BANNER;

  if (!resolvedSlot) {
    return null;
  }

  return (
    <div aria-label={`広告: ${slotName}`} className="overflow-hidden">
      <AdSenseUnit slot={resolvedSlot} />
    </div>
  );
}
