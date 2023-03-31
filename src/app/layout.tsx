import { FC, PropsWithChildren } from "react";

import NavBar from "@/components/shared/NavBar";
import ScrollToTopFab from "@/components/shared/ScrollToTopFab";
import Footer from "@/components/shared/footer";
// Group branding theme import in MUI v6
import ThemeProvider from "@/theme/ThemeProvider";
import rubik from "@/theme/rubik";

import Analytics from "./analytics";
import EmotionRegistry from "./emotion-registry";
import MotionConfig from "./motion-config";

const RootLayout: FC<Required<PropsWithChildren>> = ({ children }) => (
  <html lang="en" className={rubik.className}>
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

export { default as metadata } from "./metadata";
export default RootLayout;
