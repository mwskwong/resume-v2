import Script from "next/script";
import { FC } from "react";
import { BreadcrumbList, Graph, Person, WebPage } from "schema-dts";

import { address, email, phone } from "@/constants/contact";
import jobTitles from "@/constants/jobTitles";
import { firstName, lastName } from "@/constants/name";
import { ABOUT } from "@/constants/nav";
import selfIntro from "@/constants/selfIntro";
import socialMedia from "@/constants/socialMedia";

const Head: FC = () => {
  const siteUrl = process.env.NEXT_PUBLIC_URL;
  const fullName = `${firstName} ${lastName}`;
  const jobTitle = jobTitles.join(" & ");
  const siteTitle = `${fullName} - ${jobTitle}`;
  const socialMediaLinks = Object.values(socialMedia);

  const personSchema: Person = {
    "@type": "Person",
    name: fullName,
    gender: "Male",
    jobTitle,
    description: selfIntro,
    address: {
      "@type": "PostalAddress",
      addressRegion: address
    },
    email,
    image: `${siteUrl}/api/og`,
    telephone: phone,
    url: siteUrl,
    sameAs: socialMediaLinks
  };

  const breadcrumbListSchema: BreadcrumbList = {
    "@type": "BreadcrumbList",
    name: "Breadcrumbs",
    itemListElement: [
      {
        "@type": "ListItem",
        item: {
          "@id": siteUrl,
          name: "Homepage"
        },
        position: 1
      }
    ]
  };

  const webpageSchema: WebPage = {
    "@type": "WebPage",
    author: `${siteUrl}/#${ABOUT.id}`,
    copyrightHolder: `${siteUrl}/#${ABOUT.id}`,
    copyrightYear: 2020,
    description: selfIntro,
    headline: siteTitle,
    image: `${siteUrl}/api/og`,
    inLanguage: "en",
    mainEntityOfPage: selfIntro,
    name: siteTitle,
    url: siteUrl
  };

  const graph: Graph = {
    "@context": "https://schema.org",
    "@graph": [
      personSchema,
      webpageSchema,
      breadcrumbListSchema
    ]
  };

  return (
    <>
      <title>{siteTitle}</title>

      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.dark.png" media="(prefers-color-scheme: dark)" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.dark.png" media="(prefers-color-scheme: dark)" />

      <meta name="author" content={fullName} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#ffffff" />

      <meta name="title" property="og:title" content={siteTitle} />
      <meta name="description" property="og:description" content={selfIntro} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta name="image" property="og:image" content={`${siteUrl}/api/og`} />
      {socialMediaLinks.map(link =>
        <meta key={link} property="og:see_also" content={link} />
      )}

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={selfIntro} />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:image" content={`${siteUrl}/api/og`} />

      {/* FIXME: application/ld+json + native <script> doesn't seem to be accepted by Next.js */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
    </>
  );
};

export default Head;