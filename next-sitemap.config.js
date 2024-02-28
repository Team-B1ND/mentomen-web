/** @type {import('next-sitemap').IConfig} */

const url = process.env.NEXT_PUBLIC_SUB_DOMAIN_URL || "http://localhost:3000";

module.exports = {
  siteUrl: url,
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 7000,
  generateRobotsTxt: true,
  exclude: ["/callback/**", "/request-mentor/**"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/callback", "/request-mentor"],
      },
    ],
    additionalSitemaps: [
      `${url}/sitemap/detail-sitemap.xml`,
      `${url}/sitemap/tag-sitemap.xml`,
    ],
  },
};
