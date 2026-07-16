import type { NextConfig } from "next";
import { toNextRedirects } from "./lib/content/redirects";

const nextConfig: NextConfig = {
  async redirects() {
    return toNextRedirects();
  },
};

export default nextConfig;
