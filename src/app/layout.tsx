import { Metadata } from "next";
import { FC, PropsWithChildren } from "react";

import BrandingThemeProvider from "@/brandingTheme/Provider";
import rubik from "@/brandingTheme/rubik";
import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";
import ScrollToTopFab from "@/components/shared/ScrollToTopFab";
import jobTitles from "@/constants/jobTitles";
import { firstName, lastName } from "@/constants/name";
import selfIntroduction from "@/constants/selfIntroduction";
import Analytics from "@/utils/Analytics";
import EmotionRegistry from "@/utils/EmotionRegistry";

const siteUrl = process.env.NEXT_PUBLIC_URL;
const fullName = `${firstName} ${lastName}`;
const title: Metadata["title"] = {
  default: `${fullName} - ${jobTitles.join(" & ")}`,
  template: `%s | ${fullName}`
};
const description = selfIntroduction;
const ogImage = `${siteUrl}/api/og`;

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: fullName }],
  themeColor: "#ffffff",
  openGraph: {
    title,
    description,
    type: "website",
    url: siteUrl,
    images: ogImage
    // FIXME: og:see_also alternative?
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
        sizes: "any"
      },
      {
        url: "/favicon.svg",
        type: "image/svg+xml"
      }
    ],
    apple: {
      url: "/apple-touch-icon.png",
      sizes: "192x192"
    }
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ogImage
  }
  // FIXME: sitemap link
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="en" className={rubik.className}>
    <head />
    <body>
      <EmotionRegistry>
        <BrandingThemeProvider>
          <NavBar />
          {children}
          <Footer />
          <ScrollToTopFab />
        </BrandingThemeProvider>
      </EmotionRegistry>
      <Analytics />
    </body>
  </html>
);

export default RootLayout;
