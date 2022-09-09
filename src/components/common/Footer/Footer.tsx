import { Box, Container, Unstable_Grid2 as Grid, Typography } from "@mui/material";
import { firstName, lastName, middleName } from "constants/name";

import type { FC } from "react";
import { FavoriteRounded as Favorite } from "@mui/icons-material";
import type { SectionProps } from "types";
import SocialMedia from "components/common/SocialMedia";
import { address } from "constants/contact";
import useSx from "./useFooterSx";

const Footer: FC<SectionProps> = ({ sx: sxProp }) => {
  const sx = useSx(sxProp);
  const year = new Date().getFullYear();

  return (
    <Box component="footer" sx={sx.root}>
      <Container>
        <Grid container spacing={1} sx={sx.gridContainer}>
          <Grid xs={12} lg="auto">
            <Typography sx={sx.text} variant="body2">
              {`Copyright © ${year} ${lastName.toUpperCase()}, ${firstName} ${middleName}`}
            </Typography>
            <Typography sx={sx.text} variant="caption">
              {"Made with "}
              <Favorite sx={sx.loveIcon} color="error" fontSize="inherit" />
              {` in ${address}`}
            </Typography>
          </Grid>
          <Grid xs={12} lg="auto">
            <SocialMedia />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

if (process.env.NODE_ENV === "development") Footer.whyDidYouRender = true;

export default Footer;