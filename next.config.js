const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE_BUNDLE === "true"
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
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
  experimental: {
    runtime: "experimental-edge"
  }
};

module.exports = withBundleAnalyzer(nextConfig);
