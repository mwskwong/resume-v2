import { CssBaseline, getInitColorSchemeScript } from "@mui/material";
import { FC, PropsWithChildren } from "react";

import brandingTheme from "@/brandingTheme";
import rubik from "@/brandingTheme/rubik";
import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";
import ScrollToTopFab from "@/components/shared/ScrollToTopFab";
import Analytics from "@/utils/Analytics";
import MuiThemeProvider from "@/utils/CssVarsProvider";
import EmotionRegistry from "@/utils/EmotionRegistry";

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="en" className={rubik.className}>
    <head />
    <body>
      {getInitColorSchemeScript()}
      <EmotionRegistry>
        <MuiThemeProvider theme={brandingTheme} disableTransitionOnChange>
          <CssBaseline />
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