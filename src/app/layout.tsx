import { FC, PropsWithChildren } from "react";

import rubik from "@/brandingTheme/rubik";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import ScrollToTopFab from "@/components/ScrollToTopFab";

import Analytics from "./components/Analytics";
import MuiProvider from "./components/MuiProvider";
import RootStyleRegistry from "./components/RootStyleRegistry";

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