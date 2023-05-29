/* eslint-disable @typescript-eslint/no-var-requires */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // FIXME: until emotion option supports /app dir
    // emotion: true,
    removeConsole: process.env.NODE_ENV === "production" && {
      exclude: ["error"],
    },
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { hostname: "images.ctfassets.net" },
      { hostname: "image.thum.io" },
    ],
  },
  webpack(config) {
    // load PDF files as assets
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    config.module.rules.push({
      test: /\.pdf$/i,
      type: "asset/resource",
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return config;
  },
  modularizeImports: {
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
      preventFullImport: true,
    },
    "date-fns": {
      transform: "date-fns/{{member}}",
      preventFullImport: true,
    },
    "mdi-material-ui": {
      transform: "mdi-material-ui/{{member}}",
      preventFullImport: true,
    },
  },
  headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
module.exports = withBundleAnalyzer(nextConfig);
