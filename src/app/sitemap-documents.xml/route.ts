import { isString } from "lodash-es";
import { ServerRuntime } from "next";
import { getServerSideSitemap } from "next-sitemap";

import getCertificateUrlById from "@/assets/getCertificateUrlById";
import getSupportingDocumentById from "@/assets/getSupportingDocumentById";
import courses from "@/constants/courses";
import experiences from "@/constants/experiences";

export const GET = () => {
  const siteUrl = process.env.NEXT_PUBLIC_URL;

  const supportingDocumentsUrls = experiences
    .flatMap(({ supportingDocuments }) =>
      supportingDocuments.map((id) => getSupportingDocumentById(id).url)
    )
    .filter(isString);

  const courseCertificateUrls = courses
    .map(({ id }) => getCertificateUrlById(id))
    .filter(isString);

  return getServerSideSitemap(
    [...supportingDocumentsUrls, ...courseCertificateUrls].map((url) => ({
      loc: `${siteUrl}${url}`,
      lastmod: new Date().toISOString(),
    }))
  );
};

export const runtime: ServerRuntime = "experimental-edge";
