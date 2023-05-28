"use client";

import {
  CssBaseline,
  Experimental_CssVarsProvider as CssVarsProvider,
  getInitColorSchemeScript,
} from "@mui/material";
import { ComponentProps } from "react";

import theme from "./theme";

export default function ThemeProvider({
  children,
  ...props
}: ComponentProps<typeof CssVarsProvider>) {
  return (
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
}
