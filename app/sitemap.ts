import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { getAllArticles, getArticleCategories } from "@/lib/articles";
import { getAllForumPosts, getForumCategories } from "@/lib/forum";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = (
    [
      { path: "", priority: 1, changeFrequency: "daily" },
      { path: "/visa", priority: 0.9, changeFrequency: "weekly" },
      { path: "/preparation", priority: 0.9, changeFrequency: "weekly" },
      { path: "/arrival", priority: 0.9, changeFrequency: "weekly" },
      { path: "/tfn", priority: 0.8, changeFrequency: "weekly" },
      { path: "/abn", priority: 0.8, changeFrequency: "weekly" },
      { path: "/super", priority: 0.8, changeFrequency: "weekly" },
      { path: "/tax-return", priority: 0.8, changeFrequency: "weekly" },
      { path: "/bank", priority: 0.8, changeFrequency: "weekly" },
      { path: "/money", priority: 0.8, changeFrequency: "weekly" },
      { path: "/sim", priority: 0.8, changeFrequency: "weekly" },
      { path: "/transport", priority: 0.8, changeFrequency: "weekly" },
      { path: "/license", priority: 0.8, changeFrequency: "weekly" },
      { path: "/housing", priority: 0.8, changeFrequency: "weekly" },
      { path: "/jobs", priority: 0.8, changeFrequency: "weekly" },
      { path: "/farm", priority: 0.8, changeFrequency: "weekly" },
      { path: "/second-visa", priority: 0.8, changeFrequency: "weekly" },
      { path: "/uber-eats", priority: 0.8, changeFrequency: "weekly" },
      { path: "/doordash", priority: 0.8, changeFrequency: "weekly" },
      { path: "/cars", priority: 0.8, changeFrequency: "weekly" },
      { path: "/food", priority: 0.7, changeFrequency: "weekly" },
      { path: "/clothing", priority: 0.7, changeFrequency: "weekly" },
      { path: "/community", priority: 0.9, changeFrequency: "daily" },
      { path: "/request", priority: 0.5, changeFrequency: "monthly" },
      { path: "/about", priority: 0.4, changeFrequency: "yearly" },
      { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
      { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    ] as const
  ).map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const categoryRoutes: MetadataRoute.Sitemap = getArticleCategories().map((category) => ({
    url: `${siteConfig.url}/${category.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const articleRoutes: MetadataRoute.Sitemap = getAllArticles().map((article) => ({
    url: `${siteConfig.url}/guides/${article.slug}`,
    lastModified: new Date(article.updatedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const forumCategoryRoutes: MetadataRoute.Sitemap = getForumCategories().map((category) => ({
    url: `${siteConfig.url}/community/categories/${category.slug}`,
    lastModified: now,
    changeFrequency: "daily",
    priority: 0.6,
  }));

  const forumPostRoutes: MetadataRoute.Sitemap = getAllForumPosts().map((post) => ({
    url: `${siteConfig.url}/community/posts/${post.id}`,
    lastModified: new Date(post.createdAt),
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  const seen = new Set<string>();
  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...articleRoutes,
    ...forumCategoryRoutes,
    ...forumPostRoutes,
  ].filter((entry) => {
    if (seen.has(entry.url)) {
      return false;
    }
    seen.add(entry.url);
    return true;
  });
}
