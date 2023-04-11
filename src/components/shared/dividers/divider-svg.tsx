"use client";

import { Box, BoxProps } from "@mui/material";

import cx from "@/utils/cx";

export default function DividerSvg({ sx, ...props }: BoxProps<"svg">) {
  return (
    <Box
      component="svg"
      xmlns="http://www.w3.org/2000/svg"
      sx={cx({ display: "block" }, sx)}
      {...props}
    />
  );
}
