/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const withBundleAnalyzer = require("@next/bundle-analyzer")({ enabled: process.env.ANALYZE_BUNDLE === "true" });

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // FIXME: until emotion option supports /app dir
    // emotion: true,
    removeConsole: {
      exclude: ["error"]
    },
    reactRemoveProperties: process.env.VERCEL_ENV === "production" && {
      properties: ["^data-cy$"]
    }
  },
  images: {
    formats: ["image/avif", "image/webp"]
  },
  webpack: (config, { dev, isServer }) => {
    // import PDF as file url
    config.module.rules.push({
      test: /\.pdf$/,
      type: "asset/resource"
    });

    // import SVG as component
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"]
    });

    // why-did-you-render setup
    if (dev && !isServer) {
      const originalEntry = config.entry;
      config.entry = async () => {
        const wdrPath = path.resolve(__dirname, "src/utils/wdyr.ts");
        const entries = await originalEntry();

        if (entries["main.js"] && !entries["main.js"].includes(wdrPath)) {
          entries["main.js"].push(wdrPath);
        }
        return entries;
      };
    }

    return config;
  },
  modularizeImports: {
    // FIXME: until simple-icons tree shaking works again 
    "simple-icons": {
      transform: "simple-icons/icons",
      preventFullImport: true,
      skipDefaultConversion: true
    },
    "@mui/lab": {
      transform: "@mui/lab/{{member}}",
      preventFullImport: true
    },
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
      preventFullImport: true
    },
    "mdi-material-ui": {
      transform: "mdi-material-ui/{{member}}",
      preventFullImport: true
    }
  },
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        { key: "X-DNS-Prefetch-Control", value: "on" },
        { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        { key: "X-XSS-Protection", value: "1; mode=block" },
        { key: "X-Frame-Options", value: "SAMEORIGIN" },
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "no-referrer-when-downgrade" }
      ]
    }
  ],
  experimental: {
    appDir: true
  }
};

module.exports = withBundleAnalyzer(nextConfig);
