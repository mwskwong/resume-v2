import { ServerRuntime } from "next";
import { getServerSideSitemap } from "next-sitemap";

import getCertificateUrls from "./get-certificate-urls";
import getSupportingDocumentUrls from "./get-supporting-document-urls";

export const GET = () => {
  const certificateUrls = getCertificateUrls();
  const supportingDocumentUrls = getSupportingDocumentUrls();

  return getServerSideSitemap(
    [...certificateUrls, ...supportingDocumentUrls].map((url) => ({
      loc: url,
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 0.7,
    }))
  );
};

export const runtime: ServerRuntime = "experimental-edge";
