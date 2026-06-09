"use client";

import { useEffect, useRef } from "react";
import { siteConfig } from "@/lib/siteConfig";

type AdSenseUnitProps = {
  /** AdSense ad unit slot id (data-ad-slot). */
  slot?: string;
  /** Ad layout format. Defaults to responsive auto. */
  format?: string;
  /** Whether the unit should expand to full width on mobile. */
  fullWidthResponsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

/**
 * Renders a real Google AdSense display unit.
 *
 * When no slot id is configured the component renders nothing, so visitors
 * never see an empty or placeholder ad box.
 */
export function AdSenseUnit({
  slot,
  format = "auto",
  fullWidthResponsive = true,
  className,
  style,
}: AdSenseUnitProps) {
  const pushed = useRef(false);

  useEffect(() => {
    if (!slot || pushed.current) {
      return;
    }
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      // AdSense not ready yet; it will retry on next mount.
    }
  }, [slot]);

  if (!slot) {
    return null;
  }

  return (
    <ins
      className={`adsbygoogle block ${className ?? ""}`}
      style={{ display: "block", ...style }}
      data-ad-client={siteConfig.adsenseClient}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={fullWidthResponsive ? "true" : "false"}
    />
  );
}
