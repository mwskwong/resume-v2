import "utils/wdyr";

import { CssBaseline, Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material";

import { AppProps } from "next/app";
import { FC } from "react";
import brandingTheme from "brandingTheme";

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <CssVarsProvider theme={brandingTheme} disableTransitionOnChange>
    <CssBaseline />
    <Component {...pageProps} />
  </CssVarsProvider>
);

export default App;
