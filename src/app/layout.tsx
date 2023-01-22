import { FC, PropsWithChildren } from "react";
import { NextAppDirEmotionCacheProvider } from "tss-react/next";

import rubik from "@/brandingTheme/rubik";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

import Analytics from "./components/Analytics";
import MuiProvider from "./components/MuiProvider";


const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" className={rubik.className}>
      <head />
      <body>
        <NextAppDirEmotionCacheProvider options={{ key: "css" }}>
          <MuiProvider>
            <NavBar />
            {children}
            <Footer />
          </MuiProvider>
        </NextAppDirEmotionCacheProvider>
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;