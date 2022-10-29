import { Box, Divider, Typography } from "@mui/material";
import { FC, ReactNode } from "react";

import useSx from "./useSx";

type SectionHeadingProps = {
  heading: string,
  icon?: ReactNode
}

const SectionHeading: FC<SectionHeadingProps> = ({ heading, icon }) => {
  const sx = useSx();

  return (
    <Box component="header" sx={sx.root}>
      <Typography sx={sx.heading} variant="h2" gutterBottom>
        {heading}
      </Typography>
      <Box sx={sx.separatorContainer}>
        <Divider sx={sx.divider} />
        {icon}
        <Divider sx={sx.divider} />
      </Box>
    </Box>
  );
};

if (process.env.NODE_ENV === "development") SectionHeading.whyDidYouRender = true;

export default SectionHeading;