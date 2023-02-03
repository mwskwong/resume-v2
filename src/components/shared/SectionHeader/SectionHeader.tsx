import { Box, Divider, Typography } from "@mui/material";
import { FC } from "react";

import SectionHeaderProps from "./SectionHeaderProps";
import useSx from "./useSx";

const SectionHeader: FC<SectionHeaderProps> = ({ heading, icon, ...props }) => {
  const sx = useSx();

  return (
    <Box component="header" sx={sx.root} {...props}>
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

if (process.env.NODE_ENV === "development") SectionHeader.whyDidYouRender = true;

export default SectionHeader;