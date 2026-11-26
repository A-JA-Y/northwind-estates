/** @type {import('next-sitemap').IConfig} */

const SITE_URL = "https://thenorthwindestates.com";

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
  "/super-built-up-area-vs-carpet-area": 0.7,
  "/garden-villa-vs-flat-greater-noida": 0.7,
  "/blogs": 0.6,
  "/news": 0.6,
  "/privacy-policy": 0.3,
};

// Lead-capture confirmation page — must never be indexed.
const EXCLUDED = ["/thank-you"];

// app/icon.png and app/apple-icon.png build as routes, but they are icons, not
// pages. Keep them out of the sitemap only: robots.txt must still let crawlers
// fetch them, or search results cannot show the favicon.
const ICON_ROUTES = ["/icon.png", "/apple-icon.png"];

module.exports = {
  siteUrl: SITE_URL,
  // Static export: `next build` has already copied public/ into out/ by the time this
  // runs, so write sitemap.xml (and robots.txt) straight into the deployed folder.
  outDir: "out",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: [...EXCLUDED, ...ICON_ROUTES],

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
