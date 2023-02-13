import { Metadata } from "next";

import jobTitles from "@/constants/jobTitles";
import { firstName, lastName } from "@/constants/name";
import selfIntroduction from "@/constants/selfIntroduction";

const siteUrl = process.env.NEXT_PUBLIC_URL;
const fullName = `${firstName} ${lastName}`;
const title: Metadata["title"] = {
  default: `${fullName} - ${jobTitles.join(" & ")}`,
  template: `%s | ${fullName}`
};
const description = selfIntroduction;
const ogImage = `${siteUrl}/api/og`;

const metadata: Metadata = {
  title,
  description,
  // @ts-expect-error authors type is an object but it renders correctly only when a string is specified
  authors: fullName,
  themeColor: "#ffffff",
  openGraph: {
    title,
    description,
    type: "website",
    url: siteUrl,
    images: ogImage
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml"
      },
      {
        url: "/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32"
      },
      {
        url: "/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16"
      },
      {
        url: "/favicon-32x32.dark.png",
        type: "image/png",
        sizes: "32x32",
        // @ts-expect-error media is not a valid key
        media: "(prefers-color-scheme: dark)"
      },
      {
        url: "/favicon-16x16.dark.png",
        type: "image/png",
        sizes: "16x16",
        media: "(prefers-color-scheme: dark)"
      }
    ],
    apple: {
      url: "/apple-touch-icon.png",
      sizes: "180x180"
    },
    // FIXME: need proper manifest option
    other: {
      rel: "manifest",
      url: "/api/manifest"
    }
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ogImage
  }
};

export default  metadata;
