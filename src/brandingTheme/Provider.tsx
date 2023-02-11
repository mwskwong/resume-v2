"use client";

import { CssBaseline, Experimental_CssVarsProvider as CssVarsProvider, getInitColorSchemeScript } from "@mui/material";
import { ComponentProps, FC } from "react";

import brandingTheme from "./brandingTheme";

const Provider: FC<ComponentProps<typeof CssVarsProvider>> = ({ children, ...props }) => (
  <>
    {/* FIXME: Hydration warning show up in develop build when using this script */}
    {getInitColorSchemeScript()}
    <CssVarsProvider
      theme={brandingTheme}
      defaultMode="light"
      disableTransitionOnChange
      {...props}
    >
      <CssBaseline />
      {children}
    </CssVarsProvider>
  </>
);

export default Provider;
