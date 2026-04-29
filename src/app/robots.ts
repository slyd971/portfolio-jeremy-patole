import type { MetadataRoute } from "next";
import { portfolioConfig } from "@/data/config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${portfolioConfig.seo.siteUrl}/sitemap.xml`,
  };
}
