/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://mentomen.vercel.app/",
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 7000,
  generateRobotsTxt: true,
  exclude: ["/exclude/review", "/exclude/**"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/exclude"],
      },
    ],
  },
};
