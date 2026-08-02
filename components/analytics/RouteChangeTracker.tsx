"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

/**
 * Sends a single GA4 `page_view` event whenever the App Router pathname or
 * query string changes. The initial page view is also sent here (not by the
 * `gtag('config')` call) so that hard loads and client-side navigations use one
 * consistent code path and never double-count.
 *
 * Must be rendered inside a `<Suspense>` boundary because `useSearchParams`
 * opts the subtree into client-side rendering.
 */
export function RouteChangeTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.gtag !== "function") {
      return;
    }

    const query = searchParams.toString();
    const path = query ? `${pathname}?${query}` : pathname;

    window.gtag("event", "page_view", {
      page_path: path,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname, searchParams]);

  return null;
}
