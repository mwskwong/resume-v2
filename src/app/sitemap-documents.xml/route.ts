import endent from "endent";
import { isString, orderBy } from "lodash-es";
import { ServerRuntime } from "next";
import { NextResponse } from "next/server";

import getCertificateUrlById from "@/assets/getCertificateUrlById";
import getSupportingDocumentById from "@/assets/getSupportingDocumentById";
import courses from "@/constants/courses";
import experiences from "@/constants/experiences";

import toUrl from "./toUrl";
import toXml from "./toXml";

export const GET = () => {
  const siteUrl = process.env.NEXT_PUBLIC_URL;

  const supportingDocumentsUrls = experiences
    .flatMap(({ supportingDocuments }) =>
      supportingDocuments.map(id => getSupportingDocumentById(id).url)
    )
    .filter(isString)
    .map(url => toUrl(`${siteUrl}${url}`));

  const courseCertificateUrls = courses
    .map(({ id }) => getCertificateUrlById(id))
    .filter(isString)
    .map(url => toUrl(`${siteUrl}${url}`));

  const urls = orderBy(
    [...supportingDocumentsUrls, ...courseCertificateUrls],
    ["loc"]
  );

  return new NextResponse(
    endent`
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
      >
        ${urls.map(toXml).join("\n")}
      </urlset>
    `,
    {
      headers: {
        "Content-Type": "application/xml"
      }
    }
  );
};

export const runtime: ServerRuntime = "experimental-edge";
