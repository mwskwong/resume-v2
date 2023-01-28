"use client";

import { FavoriteRounded as Favorite } from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";
import { FC } from "react";

import FooterDivider from "@/components/shared/dividers/Footer";
import SocialMedia from "@/components/shared/SocialMedia";
import { address } from "@/constants/contact";
import { firstName, lastName, middleName } from "@/constants/name";
import cx from "@/utils/cx";
import { SectionProps } from "@/types";

import useSx from "./useSx";

const Footer: FC<SectionProps> = ({ sx: sxProp }) => {
  const sx = useSx();
  const year = new Date().getFullYear();

  return (
    <>
      <FooterDivider sx={sx.footerDivider} />
      <Box component="footer" sx={cx(sx.footer, sxProp)}>
        <Container sx={sx.container}>
          <div>
            <Typography sx={sx.text} variant="body2">
              {`Copyright © ${year} ${lastName.toUpperCase()}, ${firstName} ${middleName}`}
            </Typography>
            <Typography sx={sx.text} variant="caption">
              {"Made with "}
              <Favorite sx={sx.loveIcon} color="error" fontSize="inherit" />
              {` in ${address}`}
            </Typography>
          </div>
          <SocialMedia />
        </Container>
      </Box>
    </>
  );
};

if (process.env.NODE_ENV === "development") Footer.whyDidYouRender = true;

export default Footer;