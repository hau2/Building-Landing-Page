/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://binhdoanhcons.vn",
  generateRobotsTxt: true,
  changefreq: "monthly",
  priority: 0.8,
  sitemapSize: 5000,
  exclude: ["/login", "/register"],
  alternateRefs: [
    {
      href: "https://binhdoanhcons.vn/vi",
      hreflang: "vi"
    },
    {
      href: "https://binhdoanhcons.vn/en",
      hreflang: "en"
    }
  ]
};
