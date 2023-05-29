"use client";

import { FavoriteRounded as Favorite } from "@mui/icons-material";
import {
  Box,
  BoxProps,
  Container,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import { FC } from "react";

import FooterDivider from "@/components/shared/dividers/footer";
import PlatformProfiles from "@/components/shared/platform-profiles";
import { address, firstName, lastName, middleName } from "@/constants/data";
import cx from "@/utils/cx";

interface Props extends BoxProps {
  platformProfiles?: {
    platform?: {
      id: string;
      name: string;
    };
    url: string;
  }[];
}

const Footer: FC<Props> = ({ platformProfiles, sx, ...props }) => {
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
        sx={cx(
          { bgcolor: "background.primary", color: "text.secondary", py: 4 },
          sx
        )}
        {...props}
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
            <Typography variant="body2" sx={textSx}>
              {`Copyright © ${year} ${lastName.toUpperCase()}, ${firstName} ${middleName}`}
            </Typography>
            <Typography variant="caption" sx={textSx}>
              {"Made with "}
              <Favorite
                color="error"
                fontSize="inherit"
                sx={{ verticalAlign: "middle" }}
              />
              {` in ${address}`}
            </Typography>
          </div>
          <PlatformProfiles platformProfiles={platformProfiles} />
        </Container>
      </Box>
    </>
  );
};

export default Footer;
