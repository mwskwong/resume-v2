import { FC, PropsWithChildren } from "react";

import BrandingThemeProvider from "@/brandingTheme/Provider";
import rubik from "@/brandingTheme/rubik";
import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";
import ScrollToTopFab from "@/components/shared/ScrollToTopFab";
import Analytics from "@/utils/Analytics";
import EmotionRegistry from "@/utils/EmotionRegistry";

const RootLayout: FC<Required<PropsWithChildren>> = ({ children }) => (
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
export default RootLayout;
