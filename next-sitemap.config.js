const fs = require("fs/promises");

/** @type {import('next-sitemap').IConfig} */
const nextSitemapConfig = {
  siteUrl: process.env.NEXT_PUBLIC_URL,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  additionalPaths: async config => {
    const prefix = "/_next/static/media/";
    const files = await fs.readdir(`${__dirname}/.next/static/media`);

    return await Promise.all(
      files
        .filter(file => file.endsWith(".pdf"))
        .map(file => config.transform(config, encodeURI(`${prefix}${file}`)))
    );
  }
};

module.exports = nextSitemapConfig;