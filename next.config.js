/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE_BUNDLE === "true"
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    emotion: true
  }
};

module.exports = withBundleAnalyzer(nextConfig);
