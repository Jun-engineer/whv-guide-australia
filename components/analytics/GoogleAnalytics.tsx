"use client";

import { Suspense, useEffect } from "react";
import Script from "next/script";
import { siteConfig } from "@/lib/siteConfig";
import { RouteChangeTracker } from "./RouteChangeTracker";

/**
 * Google Analytics 4 (gtag.js) integration.
 *
 * Design notes:
 * - The Measurement ID is centralized in `lib/siteConfig.ts` and can be
 *   overridden or disabled with `NEXT_PUBLIC_GA_MEASUREMENT_ID`.
 * - Loads once globally (rendered from the root layout) via `next/script`.
 * - Only runs in production builds so local development and automated tests
 *   (NODE_ENV="test") never send events.
 * - `send_page_view: false` disables gtag's automatic first page view; the
 *   single source of page views is `RouteChangeTracker`, which prevents
 *   duplicate events and correctly tracks client-side route changes.
 * - Rendering degrades gracefully: if the script is blocked by the browser or
 *   an extension, `window.gtag` is simply undefined and nothing throws.
 */

// Lightweight development guard against accidental double initialization.
let hasInitialized = false;

export function GoogleAnalytics() {
  const gaId = siteConfig.gaMeasurementId;
  const enabled = process.env.NODE_ENV === "production" && Boolean(gaId);

  useEffect(() => {
    if (!enabled) {
      return;
    }
    if (hasInitialized && process.env.NODE_ENV !== "production") {
      console.warn(
        "[analytics] GoogleAnalytics mounted more than once; GA4 should be initialized a single time from the root layout.",
      );
    }
    hasInitialized = true;
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <Script
        id="ga4-src"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', { send_page_view: false });
        `}
      </Script>
      <Suspense fallback={null}>
        <RouteChangeTracker />
      </Suspense>
    </>
  );
}
