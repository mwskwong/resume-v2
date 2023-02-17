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

  authors: { name: fullName },

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

    }

  },

  twitter: {

    card: "summary_large_image",

    title,

    description,

    images: ogImage

  },

  manifest: "/api/manifest"

};



export default metadata;

