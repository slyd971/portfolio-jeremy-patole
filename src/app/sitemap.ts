import type { MetadataRoute } from "next";
import { portfolioConfig, useCaseItems } from "@/data/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const siteUrl = portfolioConfig.seo.siteUrl;

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...useCaseItems.map((item) => ({
      url: `${siteUrl}/use-cases/${item.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.72,
    })),
  ];
}
