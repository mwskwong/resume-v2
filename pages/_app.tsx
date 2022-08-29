import { CssBaseline, ThemeProvider } from "@mui/material";

import { AppProps } from "next/app";
import { FC } from "react";
import Head from "next/head";
import brandingTheme from "brandingTheme";
import icon from "assets/images/icon.svg";
import iconDark from "assets/images/icon-dark.svg";

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="icon" href={icon.src} type="image/svg+xml" />
      <link rel="icon" href={iconDark.src} type="image/svg+xml" media="(prefers-color-scheme: dark)" />
    </Head>
    <ThemeProvider theme={brandingTheme}>
      <CssBaseline enableColorScheme />
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default App;
