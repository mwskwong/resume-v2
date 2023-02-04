import { BreadcrumbList, Graph, Person, WebPage } from "schema-dts";

import { address, email, phone } from "@/constants/contact";
import jobTitles from "@/constants/jobTitles";
import { firstName, lastName } from "@/constants/name";
import { ABOUT } from "@/constants/nav";
import platformProfiles from "@/constants/platformProfiles";
import selfIntroduction from "@/constants/selfIntroduction";

const useStructuredData = () => {
  const siteUrl = process.env.NEXT_PUBLIC_URL;
  const fullName = `${firstName} ${lastName}`;
  const jobTitle = jobTitles.join(" & ");
  const siteTitle = `${fullName} - ${jobTitle}`;
  const profileUrls = platformProfiles.map(({ url }) => url);

  const personSchema: Person = {
    "@type": "Person",
    name: fullName,
    gender: "Male",
    jobTitle,
    description: selfIntroduction,
    address: {
      "@type": "PostalAddress",
      addressRegion: address
    },
    email,
    image: `${siteUrl}/api/og`,
    telephone: phone,
    url: siteUrl,
    sameAs: profileUrls
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
    description: selfIntroduction,
    headline: siteTitle,
    image: `${siteUrl}/api/og`,
    inLanguage: "en",
    mainEntityOfPage: selfIntroduction,
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

  return graph;
};

export default useStructuredData;