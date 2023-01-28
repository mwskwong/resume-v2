"use client";

import { PersonRounded as Person } from "@mui/icons-material";
import { Box, Container, Stack } from "@mui/material";
import Image from "next/image";
import { FC } from "react";

import personalPhoto from "@/assets/images/personal_photo.jpg";
import SectionHeading from "@/components/shared/SectionHeading";
import { firstName, lastName } from "@/constants/name";
import { ABOUT } from "@/constants/nav";
import { SectionProps } from "@/types";

import styles from "./about.module.css";
import Message from "./Message";
import SkillSet from "./SkillSet";
import useSx from "./useAboutSx";

const About: FC<SectionProps> = ({ sx: sxProp }) => {
  const sx = useSx();

  return (
    <Box sx={sxProp} component="section" id={ABOUT.id}>
      <Container>
        <Stack sx={sx.stack} spacing={6}>
          <SectionHeading heading="About" icon={<Person />} />
          <Image
            src={personalPhoto}
            alt={`Picture of ${firstName} ${lastName}`}
            width={200}
            height={200}
            className={styles.picture}
          />
          <Message />
          <SkillSet />
        </Stack>
      </Container>
    </Box>
  );
};

if (process.env.NODE_ENV === "development") {
  About.whyDidYouRender = true;
}

export default About;