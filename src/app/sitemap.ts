import type { MetadataRoute } from "next";
import { PRACTICE_AREAS, ATTORNEYS, INSIGHTS } from "@/lib/constants";

const BASE_URL = "https://meridianlaw.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL,                          lastModified: now, priority: 1.0,  changeFrequency: "weekly" },
    { url: `${BASE_URL}/about/our-firm`,      lastModified: now, priority: 0.8,  changeFrequency: "monthly" },
    { url: `${BASE_URL}/practice-areas`,      lastModified: now, priority: 0.9,  changeFrequency: "monthly" },
    { url: `${BASE_URL}/attorneys`,           lastModified: now, priority: 0.8,  changeFrequency: "monthly" },
    { url: `${BASE_URL}/case-results`,        lastModified: now, priority: 0.7,  changeFrequency: "monthly" },
    { url: `${BASE_URL}/insights`,            lastModified: now, priority: 0.8,  changeFrequency: "weekly" },
    { url: `${BASE_URL}/careers`,             lastModified: now, priority: 0.5,  changeFrequency: "monthly" },
    { url: `${BASE_URL}/contact`,             lastModified: now, priority: 0.9,  changeFrequency: "yearly" },
  ];

  const practiceAreaPages: MetadataRoute.Sitemap = PRACTICE_AREAS.map((area) => ({
    url: `${BASE_URL}/practice-areas/${area.slug}`,
    lastModified: now,
    priority: 0.85,
    changeFrequency: "monthly" as const,
  }));

  const attorneyPages: MetadataRoute.Sitemap = ATTORNEYS.map((attorney) => ({
    url: `${BASE_URL}/attorneys/${attorney.slug}`,
    lastModified: now,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  const insightPages: MetadataRoute.Sitemap = INSIGHTS.map((insight) => ({
    url: `${BASE_URL}/insights/${insight.slug}`,
    lastModified: new Date(insight.date),
    priority: 0.7,
    changeFrequency: "yearly" as const,
  }));

  return [...staticPages, ...practiceAreaPages, ...attorneyPages, ...insightPages];
}
