"use client";

import {
  CssBaseline,
  Experimental_CssVarsProvider as CssVarsProvider,
  getInitColorSchemeScript,
} from "@mui/material";
import { ComponentProps, FC } from "react";

import theme from "./theme";

const ThemeProvider: FC<ComponentProps<typeof CssVarsProvider>> = ({
  children,
  ...props
}) => (
  <>
    {getInitColorSchemeScript()}
    <CssVarsProvider
      theme={theme}
      defaultMode="light"
      disableTransitionOnChange
      {...props}
    >
      <CssBaseline />
      {children}
    </CssVarsProvider>
  </>
);

export default ThemeProvider;