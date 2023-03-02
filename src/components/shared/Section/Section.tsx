"use client";

import { Box } from "@mui/material";
import { FC } from "react";

import cx from "@/utils/cx";

import SectionProps from "./SectionProps";
import useSx from "./useSx";

const Section: FC<SectionProps> = ({
  variant = "default",
  fullHeight = false,
  children,
  sx: sxProp,
  ...props
}) => {
  const sx = useSx({ variant, fullHeight });
  return (
    <Box component="section" sx={cx(sx.root, sxProp)} {...props}>
      {children}
    </Box>
  );
};

export default Section;
