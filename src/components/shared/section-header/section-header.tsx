import { Box, BoxProps, Divider, Typography } from "@mui/material";
import { ReactNode } from "react";

interface Props extends BoxProps {
  heading?: string;
  icon?: ReactNode;
}

export default function SectionHeader({ heading, icon, ...props }: Props) {
  const dividerSx = { width: 32, mx: 1 };

  return (
    <Box component="header" data-cy="sectionHeader" {...props}>
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
