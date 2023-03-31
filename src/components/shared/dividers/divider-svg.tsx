"use client";

import { Box, BoxProps } from "@mui/material";
import { FC } from "react";

const DividerSvg: FC<BoxProps<"svg">> = (props) => (
  <Box
    component="svg"
    xmlns="http://www.w3.org/2000/svg"
    display="block"
    {...props}
  />
);

export default DividerSvg;
