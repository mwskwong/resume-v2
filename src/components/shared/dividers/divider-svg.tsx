"use client";

import { Box, BoxProps } from "@mui/material";
import { FC } from "react";

import cx from "@/utils/cx";

const DividerSvg: FC<BoxProps<"svg">> = ({ sx, ...props }) => (
  <Box
    component="svg"
    xmlns="http://www.w3.org/2000/svg"
    sx={cx({ display: "block" }, sx)}
    {...props}
  />
);

export default DividerSvg;
