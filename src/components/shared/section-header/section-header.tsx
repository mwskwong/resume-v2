import { Box, Divider, SxProps, Theme, Typography } from "@mui/material";
import { FC } from "react";

import SectionHeaderProps from "./section-header-props";

const SectionHeader: FC<SectionHeaderProps> = ({ heading, icon }) => {
  const dividerSx: SxProps<Theme> = {
    width: 32,
    mx: 1,
  };

  return (
    <Box component="header" data-cy="sectionHeader">
      <Typography
        variant="h2"
        sx={{ textAlign: "center", textTransform: "capitalize" }}
        gutterBottom
      >
        {heading}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Divider sx={dividerSx} />
        {icon}
        <Divider sx={dividerSx} />
      </Box>
    </Box>
  );
};

export default SectionHeader;
