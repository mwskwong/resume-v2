"use client";

import { Experimental_CssVarsProvider as MuiCssVarsProvider } from "@mui/material";
import { ComponentProps, FC } from "react";


const CssVarsProvider: FC<ComponentProps<typeof MuiCssVarsProvider>> = ({ children, ...props }) => (
  <MuiCssVarsProvider {...props}>
    {children}
  </MuiCssVarsProvider>
);

export default CssVarsProvider;