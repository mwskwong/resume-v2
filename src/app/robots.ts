import { MetadataRoute } from "next";

export const runtime = "edge";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: process.env.NEXT_PUBLIC_URL,
    sitemap: `${process.env.NEXT_PUBLIC_URL}/sitemap.xml`,
  };
}
