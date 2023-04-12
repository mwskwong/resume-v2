import { MetadataRoute } from "next";

export const runtime = "edge";

export default function manifest(): MetadataRoute.Manifest {
  const siteUrl = process.env.NEXT_PUBLIC_URL;

  return {
    name: "todo",
  };
}
