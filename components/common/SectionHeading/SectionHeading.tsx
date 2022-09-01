import { Box, Divider, Typography } from "@mui/material";

import type { FC } from "react";
import { AcUnitRounded as Snow } from "@mui/icons-material";
import useSx from "./useSx";

type SectionHeadingProps = {
  heading: string
}

const SectionHeading: FC<SectionHeadingProps> = ({ heading }) => {
  const sx = useSx();

  return (
    <Box component="header" sx={sx.root}>
      <Typography sx={sx.heading} variant="h2" gutterBottom>
        {heading}
      </Typography>
      <Box sx={sx.separatorContainer}>
        <Divider sx={sx.divider} />
        <Snow />
        <Divider sx={sx.divider} />
      </Box>
    </Box>
  );
};

if (process.env.NODE_ENV === "development") SectionHeading.whyDidYouRender = true;

export default SectionHeading;