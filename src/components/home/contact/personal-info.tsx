import { Box, BoxProps, Link, SvgIconProps, Typography } from "@mui/material";
import { ElementType, FC } from "react";

import cx from "@/utils/cx";

interface Props extends BoxProps {
  Icon?: ElementType<SvgIconProps>;
  title?: string;
  value?: string;
  url?: string;
}

const PersonalInfo: FC<Props> = ({ Icon, title, value, url, sx, ...props }) => {
  return (
    <Box
      sx={cx(
        {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        },
        sx
      )}
      {...props}
    >
      {Icon && <Icon fontSize="large" />}
      <Typography
        sx={{
          color: "primary.main",
          mt: 2,
        }}
        gutterBottom
      >
        {title}
      </Typography>
      <Link
        color="inherit"
        underline="hover"
        sx={{ zIndex: 1 }}
        href={url}
        target={url?.startsWith("http") ? "_blank" : undefined}
      >
        {value}
      </Link>
    </Box>
  );
};

export default PersonalInfo;
