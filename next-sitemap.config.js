/** @type {import('next-sitemap').IConfig} */

const SITE_URL = "https://www.northwindsanctuary.in";

// Routes that are live today (app/(site)/*). Anything not listed here still gets
// picked up automatically by next-sitemap from the build output — this map only
// controls the priority we hand to crawlers.
const PRIORITIES = {
  "/": 1.0,
  "/about-northwind-sanctuary": 0.9,
  "/apartments-configurations": 0.9,
  "/floor-plans": 0.9,
  "/price": 0.8,
  "/location-connectivity": 0.8,
  "/amenities": 0.8,
  "/contact-us": 0.8,
  "/about-northwind-estates": 0.7,
  "/blogs": 0.6,
  "/news": 0.6,
  "/privacy-policy": 0.3,
};

// Lead-capture confirmation page — must never be indexed.
const EXCLUDED = ["/thank-you"];

module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: EXCLUDED,

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: EXCLUDED,
      },
    ],
  },

  transform: async (config, path) => {
    if (EXCLUDED.includes(path)) return null;

    return {
      loc: path,
      changefreq: path === "/" ? "daily" : "weekly",
      priority: PRIORITIES[path] ?? 0.6,
      lastmod: new Date().toISOString(),
    };
  },
};
