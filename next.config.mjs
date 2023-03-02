import NextBundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = NextBundleAnalyzer({
  enabled: process.env.ANALYZE_BUNDLE === "true",
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
    reactRemoveProperties: process.env.VERCEL_ENV === "production" && {
      properties: ["^data-cy$"],
    },
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  webpack: (config) => {
    // import PDF as file url
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    config.module.rules.push({
      test: /\.pdf$/i,
      type: "asset/resource",
    });

    // import SVG as component
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return config;
  },
  modularizeImports: {
    "@mui/lab": {
      transform: "@mui/lab/{{member}}",
      preventFullImport: true,
    },
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
      preventFullImport: true,
    },
    "date-fns": {
      transform: "date-fns/{{member}}",
      preventFullImport: true,
    },
  },
  headers: () => [
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
          value: "no-referrer-when-downgrade",
        },
      ],
    },
  ],
  experimental: {
    appDir: true,
    // FIXME: see if v13.2.4 fixes it
    // typedRoutes: true
  },
};

export default withBundleAnalyzer(nextConfig);
