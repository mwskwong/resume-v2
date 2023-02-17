import { Box, Divider, Typography } from "@mui/material";
import { FC } from "react";

import SectionHeaderProps from "./SectionHeaderProps";
import useSx from "./useSx";

const SectionHeader: FC<SectionHeaderProps> = ({ heading, icon }) => {
  const sx = useSx();

  return (
    <Box component="header" sx={sx.root} data-cy="sectionHeader">
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

export default SectionHeader;
