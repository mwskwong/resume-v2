import { MetadataRoute } from "next";

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: "*",
    allow: "/",
  },
  host: process.env.NEXT_PUBLIC_URL,
});

export const runtime = "edge";

export default robots;
