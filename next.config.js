const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE_BUNDLE === "true"
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    emotion: true
  },
  images: {
    formats: ["image/avif", "image/webp"]
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.pdf$/,
      type: "asset/resource"
    });
    return config;
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
    runtime: "experimental-edge",
    images: {
      allowFutureImage: true
    }
  }
};

module.exports = withBundleAnalyzer(nextConfig);
