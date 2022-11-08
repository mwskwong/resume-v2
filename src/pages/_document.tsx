import { rubik } from "brandingTheme";
import { Head, Html, Main, NextScript } from "next/document";
import { FC } from "react";

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