import { Box, Divider, Typography } from "@mui/material";

import SectionHeaderProps from "./section-header-props";

export default function SectionHeader({ heading, icon }: SectionHeaderProps) {
  const dividerSx = { width: 32, mx: 1 };

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
}
