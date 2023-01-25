"use client";

import { CssBaseline, Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material";
import { FC, PropsWithChildren } from "react";

import brandingTheme from "@/brandingTheme";

const MuiProvider: FC<PropsWithChildren> = ({ children }) => (
  <CssVarsProvider theme={brandingTheme} disableTransitionOnChange>
    <CssBaseline />
    {children}
  </CssVarsProvider>
);

export default MuiProvider;