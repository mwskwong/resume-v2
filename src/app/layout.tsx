import { FC, PropsWithChildren } from "react";

import rubik from "@/brandingTheme/rubik";
import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";
import ScrollToTopFab from "@/components/shared/ScrollToTopFab";
import Analytics from "@/lib/Analytics";
import EmotionRegistry from "@/lib/EmotionRegistry";
import MuiThemeProvider from "@/lib/MuiThemeProvider";

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="en" className={rubik.className}>
    <head />
    <body>
      <EmotionRegistry>
        <MuiThemeProvider>
          <NavBar />
          {children}
          <Footer />
          <ScrollToTopFab />
        </MuiThemeProvider>
      </EmotionRegistry>
      <Analytics />
    </body>
  </html>
);

export default RootLayout;