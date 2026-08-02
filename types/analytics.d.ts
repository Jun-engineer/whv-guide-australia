/**
 * Global typings for the Google Analytics 4 `gtag.js` runtime.
 * The Measurement ID itself is public and configured in `lib/siteConfig.ts`.
 */
type GtagCommand = "config" | "set" | "js" | "event" | "consent" | "get";

interface Window {
  dataLayer?: unknown[];
  gtag?: (command: GtagCommand, ...args: unknown[]) => void;
}
