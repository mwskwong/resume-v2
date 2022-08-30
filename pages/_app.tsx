import "utils/wdyr";

import { CssBaseline, ThemeProvider } from "@mui/material";

import { AppProps } from "next/app";
import { FC } from "react";
import brandingTheme from "brandingTheme";

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={brandingTheme}>
    <CssBaseline enableColorScheme />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
