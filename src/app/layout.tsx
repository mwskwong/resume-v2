import { FC, PropsWithChildren } from "react";

// Group branding theme import in MUI v6
import BrandingThemeProvider from "@/brandingTheme/BrandingThemeProvider";
import rubik from "@/brandingTheme/rubik";
import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";
import ScrollToTopFab from "@/components/shared/ScrollToTopFab";

import Analytics from "./Analytics";
import EmotionRegistry from "./EmotionRegistry";
import MotionConfig from "./MotionConfig";

const RootLayout: FC<Required<PropsWithChildren>> = ({ children }) => (
  <html lang="en" className={rubik.className}>
    <head />
    <body>
      <EmotionRegistry>
        <BrandingThemeProvider>
          <MotionConfig reducedMotion="user">
            <NavBar />
            {children}
            <Footer />
            <ScrollToTopFab />
          </MotionConfig>
        </BrandingThemeProvider>
      </EmotionRegistry>
      <Analytics />
    </body>
  </html>
);

export { default as metadata } from "./metadata";
export default RootLayout;
