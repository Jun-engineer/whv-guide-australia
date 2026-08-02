import type { NextConfig } from "next";
import { toNextRedirects } from "./lib/content/redirects";

const nextConfig: NextConfig = {
  images: {
    // 記事の写真・スクリーンショットを次世代フォーマットで配信する。
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return toNextRedirects();
  },
};

export default nextConfig;
