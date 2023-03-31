"use client";

import { FavoriteRounded as Favorite } from "@mui/icons-material";
import { Box, Container, SxProps, Theme, Typography } from "@mui/material";
import { FC } from "react";

import PlatformProfiles from "@/components/shared/PlatformProfiles";
import FooterDivider from "@/components/shared/dividers/footer";
import { address } from "@/constants/contact";
import { firstName, lastName, middleName } from "@/constants/name";

const Footer: FC = () => {
  const year = new Date().getFullYear();
  const textSx: SxProps<Theme> = {
    color: "inherit",
    width: "100%",
    textAlign: "center",
    "@media (min-width: 1332px)": {
      textAlign: "unset",
    },
  };

  return (
    <>
      <FooterDivider />
      <Box
        component="footer"
        bgcolor="background.primary"
        color="text.secondary"
        py={4}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            "@media (min-width: 1332px)": {
              flexDirection: "row",
            },
          }}
        >
          <div>
            <Typography sx={textSx} variant="body2">
              {`Copyright © ${year} ${lastName.toUpperCase()}, ${firstName} ${middleName}`}
            </Typography>
            <Typography sx={textSx} variant="caption">
              {"Made with "}
              <Favorite
                color="error"
                fontSize="inherit"
                sx={{ verticalAlign: "middle" }}
              />
              {` in ${address}`}
            </Typography>
          </div>
          <PlatformProfiles />
        </Container>
      </Box>
    </>
  );
};

export default Footer;
