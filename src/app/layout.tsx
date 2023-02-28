import { FC, PropsWithChildren } from "react";

import BrandingThemeProvider from "@/brandingTheme/Provider";
import rubik from "@/brandingTheme/rubik";
import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";
import ScrollToTopFab from "@/components/shared/ScrollToTopFab";
import Analytics from "@/utils/Analytics";
import EmotionRegistry from "@/utils/EmotionRegistry";

import metadata from "./metadata";

const RootLayout: FC<Required<PropsWithChildren>> = ({ children }) => (
  <html lang="en" className={rubik.className}>
    <head>
      {/* Fallback of og:image:url, which some website is not able to recognize */}
      <meta property="og:image" content={metadata.openGraph?.images as string} />
    </head>
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

export { default as metadata } from "./metadata";
export default RootLayout;
