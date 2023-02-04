import { FC } from "react";

import jobTitles from "@/constants/jobTitles";
import { firstName, lastName } from "@/constants/name";
import platformProfiles from "@/constants/platformProfiles";
import selfIntroduction from "@/constants/selfIntroduction";

const Head: FC = () => {
  const siteUrl = process.env.NEXT_PUBLIC_URL;
  const fullName = `${firstName} ${lastName}`;
  const jobTitle = jobTitles.join(" & ");
  const siteTitle = `${fullName} - ${jobTitle}`;
  const profileUrls = Object.values(platformProfiles).map(({ url }) => url);

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
      <meta name="description" property="og:description" content={selfIntroduction} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta name="image" property="og:image" content={`${siteUrl}/api/og`} />
      {profileUrls.map(url =>
        <meta key={url} property="og:see_also" content={url} />
      )}

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={selfIntroduction} />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:image" content={`${siteUrl}/api/og`} />
    </>
  );
};

export default Head;