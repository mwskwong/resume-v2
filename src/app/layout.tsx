import { FC, PropsWithChildren } from "react";
import { NextAppDirEmotionCacheProvider } from "tss-react/next";

import rubik from "@/brandingTheme/rubik";

import Analytics from "./components/Analytics";
import MuiProvider from "./components/MuiProvider";


const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" className={rubik.className}>
      <head />
      <body>
        <NextAppDirEmotionCacheProvider options={{ key: "css" }}>
          <MuiProvider>
            {children}
          </MuiProvider>
        </NextAppDirEmotionCacheProvider>
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;