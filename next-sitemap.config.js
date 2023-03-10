const siteUrl = process.env.NEXT_PUBLIC_URL;

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ["/sitemap*.xml"],
  robotsTxtOptions: {
    additionalSitemaps: [`${siteUrl}/sitemap-documents.xml`],
  },
};
