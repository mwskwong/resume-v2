import * as socialMedia from "constants/socialMedia";

import type { BreadcrumbList, Graph, Person, WebPage } from "schema-dts";
import { address, email, phone } from "constants/contact";
import { firstName, lastName } from "constants/name";

import { ABOUT } from "constants/nav";
import type { FC } from "react";
import NextHead from "next/head";
import jobTitles from "constants/jobTitles";
import ogImage from "assets/images/og_image.png";
import selfIntro from "constants/selfIntro";

type HeadProps = {
  title?: string
}

const Head: FC<HeadProps> = ({ title }) => {
  const siteUrl = process.env.NEXT_PUBLIC_URL;
  const fullName = `${firstName} ${lastName}`;
  const jobTitle = jobTitles.join(" & ");
  const siteTitle = title ? `${title} | ${fullName}` : `${fullName} - ${jobTitle}`;
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
    image: `${siteUrl}${ogImage.src}`,
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
    image: `${siteUrl}${ogImage.src}`,
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
    <NextHead>
      <title>{siteTitle}</title>

      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.dark.png" media="(prefers-color-scheme: dark)" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.dark.png" media="(prefers-color-scheme: dark)" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.dark.png" media="(prefers-color-scheme: dark)" />
      <link rel="manifest" href="/site.webmanifest" />

      <meta name="author" content={fullName} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#ffffff" />

      <meta name="title" property="og:title" content={siteTitle} />
      <meta name="description" property="og:description" content={selfIntro} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta name="image" property="og:image" content={`${siteUrl}${ogImage.src}`} />
      {socialMediaLinks.map(link =>
        <meta key={link} property="og:see_also" content={link} />
      )}

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={selfIntro} />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:image" content={`${siteUrl}${ogImage.src}`} />

      <script type="application/ld+json">{JSON.stringify(graph)}</script>
    </NextHead>
  );
};

export default Head;