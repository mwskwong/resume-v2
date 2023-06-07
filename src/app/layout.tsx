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
import theme, { font } from "@/theme";

import Analytics from "./analytics";
import CssBaseline from "./css-baseline";
import CssVarsProvider from "./css-vars-provider";
import MotionConfig from "./motion-config";

const RootLayout = async ({ children }: PropsWithChildren) => {
  const platformProfiles = await getPlatformProfiles();

  return (
    <html lang="en" className={font.className}>
      <body>
        <MotionConfig reducedMotion="user">
          <CssVarsProvider theme={theme}>
            <CssBaseline />
            <NavBar />
            {children}
            <Footer platformProfiles={platformProfiles} />
            <ScrollToTopFab />
          </CssVarsProvider>
        </MotionConfig>
        <Analytics />
      </body>
    </html>
  );
};

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

export default RootLayout;
