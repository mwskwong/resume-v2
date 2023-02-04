"use client";

import { PersonRounded as Person } from "@mui/icons-material";
import { Box, Container, Stack } from "@mui/material";
import Image from "next/image";
import { FC } from "react";

import personalPhoto from "@/assets/images/personal_photo.jpg";
import SectionHeader from "@/components/shared/SectionHeader";
import { firstName, lastName } from "@/constants/name";
import { ABOUT } from "@/constants/nav";
import { SectionProps } from "@/types";

import styles from "./about.module.css";
import Message from "./Message";
import Skills from "./Skills";
import useSx from "./useAboutSx";

const About: FC<SectionProps> = ({ sx: sxProp }) => {
  const sx = useSx();

  return (
    <Box sx={sxProp} component="section" id={ABOUT.id} data-cy="about">
      <Container>
        <Stack sx={sx.stack} spacing={6}>
          <SectionHeader
            heading="About"
            icon={<Person />}
          />
          <Image
            src={personalPhoto}
            alt={`Picture of ${firstName} ${lastName}`}
            width={200}
            height={200}
            className={styles.picture}
            data-cy="profilePicture"
          />
          <Message />
          <Skills />
        </Stack>
      </Container>
    </Box>
  );
};

if (process.env.NODE_ENV === "development") {
  About.whyDidYouRender = true;
}

export default About;