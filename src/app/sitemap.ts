import { MetadataRoute } from "next";

import { getSupportingDocuments } from "@/api";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_URL;
  const supportingDocuments = await getSupportingDocuments();

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
    },
    ...supportingDocuments,
  ];
}
