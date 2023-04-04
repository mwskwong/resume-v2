import { Metadata } from "next";
import { FC, PropsWithChildren } from "react";

import Footer from "@/components/shared/footer";
import NavBar from "@/components/shared/navbar";
import ScrollToTopFab from "@/components/shared/scroll-to-top-fab";
import jobTitles from "@/constants/job-titles";
import { firstName, lastName } from "@/constants/name";
import selfIntroduction from "@/constants/self-introduction";
import font from "@/theme/font";
// Group branding theme import in MUI v6
import ThemeProvider from "@/theme/theme-provider";

import Analytics from "./analytics";
import EmotionRegistry from "./emotion-registry";
import MotionConfig from "./motion-config";

const RootLayout: FC<Required<PropsWithChildren>> = ({ children }) => (
  <html lang="en" className={font.className}>
    <body>
      <EmotionRegistry>
        <ThemeProvider>
          <MotionConfig reducedMotion="user">
            <NavBar />
            {children}
            <Footer />
            <ScrollToTopFab />
          </MotionConfig>
        </ThemeProvider>
      </EmotionRegistry>
      <Analytics />
    </body>
  </html>
);

const fullName = `${firstName} ${lastName}`;
const title: Metadata["title"] = {
  default: `${fullName} - ${jobTitles.join(" & ")}`,
  template: `%s | ${fullName}`,
};
const description = selfIntroduction;
const ogImage = "/og.png";

export const metadata: Metadata = {
  title,
  description,
  authors: { name: fullName },
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL),
  openGraph: {
    title,
    description,
    url: "/",
    images: ogImage,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
      },
      {
        url: "/favicon-32x32.dark.png",
        type: "image/png",
        sizes: "32x32",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/favicon-16x16.dark.png",
        type: "image/png",
        sizes: "16x16",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
    },
  },
  themeColor: "#ffffff",
  manifest: "/manifest.json",
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ogImage,
  },
};

export default RootLayout;
