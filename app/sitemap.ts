import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/visa",
    "/preparation",
    "/arrival",
    "/tfn",
    "/abn",
    "/super",
    "/tax-return",
    "/bank",
    "/sim",
    "/housing",
    "/jobs",
    "/farm",
    "/second-visa",
    "/uber-eats",
    "/doordash",
    "/cars",
    "/food",
    "/clothing",
    "/community",
    "/request",
    "/login",
    "/register",
    "/profile",
    "/terms",
    "/privacy",
  ];

  return routes.map((route) => ({
    url: `https://wh-guide-australia.vercel.app${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
