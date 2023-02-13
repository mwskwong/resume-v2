import { ServerRuntime } from "next";
import { FC, PropsWithChildren } from "react";

import BrandingThemeProvider from "@/brandingTheme/Provider";
import rubik from "@/brandingTheme/rubik";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import ScrollToTopFab from "@/components/ScrollToTopFab";
import Analytics from "@/utils/Analytics";
import EmotionRegistry from "@/utils/EmotionRegistry";

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

export { default as metadata } from "./metadata";
export const runtime: ServerRuntime = "experimental-edge";

export default RootLayout;
