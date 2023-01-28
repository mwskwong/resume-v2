import { FC, PropsWithChildren } from "react";

import rubik from "@/brandingTheme/rubik";
import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";
import ScrollToTopFab from "@/components/shared/ScrollToTopFab";

import Analytics from "./Analytics";
import MuiProvider from "./MuiProvider";
import RootStyleRegistry from "./RootStyleRegistry";

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="en" className={rubik.className}>
    <head />
    <body>
      <RootStyleRegistry>
        <MuiProvider>
          <NavBar />
          {children}
          <Footer />
          <ScrollToTopFab />
        </MuiProvider>
      </RootStyleRegistry>
      <Analytics />
    </body>
  </html>
);

export default RootLayout;