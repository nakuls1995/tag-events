import { SITE_URL } from "@/lib/seo";

interface SitemapRoute {
  path: string;
  changefreq?: "daily" | "weekly" | "monthly" | "yearly";
  priority?: number;
}

/** Public routes to publish in sitemap.xml. Add a new page's route here to include it. */
export const sitemapRoutes: SitemapRoute[] = [
  { path: "/", changefreq: "weekly", priority: 1.0 },
  { path: "/about", changefreq: "monthly", priority: 0.8 },
  { path: "/services", changefreq: "monthly", priority: 0.8 },
  { path: "/portfolio", changefreq: "weekly", priority: 0.8 },
  { path: "/contact", changefreq: "monthly", priority: 0.6 },
];

export function buildSitemapXml(
  routes: SitemapRoute[] = sitemapRoutes,
): string {
  const urls = routes
    .map(({ path, changefreq, priority }) =>
      [
        "  <url>",
        `    <loc>${SITE_URL}${path}</loc>`,
        changefreq ? `    <changefreq>${changefreq}</changefreq>` : null,
        priority !== undefined ? `    <priority>${priority}</priority>` : null,
        "  </url>",
      ]
        .filter(Boolean)
        .join("\n"),
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}
