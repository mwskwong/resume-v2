import { Head, Html, Main, NextScript } from "next/document";
import { FC } from "react";

import rubik from "@/brandingTheme/rubik";

const Document: FC = () => (
  <Html lang="en" className={rubik.className}>
    <Head />
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;