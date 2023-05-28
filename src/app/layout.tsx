import { Metadata } from "next";
import { PropsWithChildren } from "react";

import { getPlatformProfiles } from "@/api";
import Footer from "@/components/shared/footer";
import NavBar from "@/components/shared/navbar";
import ScrollToTopFab from "@/components/shared/scroll-to-top-fab";
import {
  firstName,
  jobTitles,
  lastName,
  selfIntroduction,
} from "@/constants/data";
import font from "@/theme/font";
// Group branding theme import in MUI v6
import ThemeProvider from "@/theme/theme-provider";

import Analytics from "./analytics";
import EmotionRegistry from "./emotion-registry";
import MotionConfig from "./motion-config";

export default async function RootLayout({ children }: PropsWithChildren) {
  const platformProfiles = await getPlatformProfiles();

  return (
    <html lang="en" className={font.className}>
      <body>
        <EmotionRegistry>
          <ThemeProvider>
            <MotionConfig reducedMotion="user">
              <NavBar />
              {children}
              <Footer platformProfiles={platformProfiles} />
              <ScrollToTopFab />
            </MotionConfig>
          </ThemeProvider>
        </EmotionRegistry>
        <Analytics />
      </body>
    </html>
  );
}

const fullName = `${firstName} ${lastName}`;
const title: Metadata["title"] = {
  default: `${fullName} - ${jobTitles.join(" & ")}`,
  template: `%s | ${fullName}`,
};
const description = selfIntroduction;

export const metadata: Metadata = {
  title,
  description,
  authors: { name: fullName },
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL),
  openGraph: {
    title,
    description,
    url: "/",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#ffffff",
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};
