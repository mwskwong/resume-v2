"use client";

import { Box, BoxProps } from "@mui/material";
import { FC } from "react";

import cx from "@/utils/cx";

import useSx from "./useDividerSvgSx";

const DividerSvg: FC<BoxProps<"svg">> = ({ sx: sxProp, ...props }) => {
  const sx = useSx();

  return <Box component="svg" sx={cx(sx.root, sxProp)} {...props} />;
};

export default DividerSvg;
