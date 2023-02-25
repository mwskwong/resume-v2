const siteUrl = process.env.NEXT_PUBLIC_URL;

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ["sitemap*.xml"],
  robotsTxtOptions: {
    additionalSitemaps: [`${siteUrl}/sitemap-documents.xml`]
  }
};

export default config;
