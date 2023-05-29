import { MetadataRoute } from "next";

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: process.env.NEXT_PUBLIC_URL,
    sitemap: `${process.env.NEXT_PUBLIC_URL}/sitemap.xml`,
  };
};

export const runtime = "edge";

export default robots;
