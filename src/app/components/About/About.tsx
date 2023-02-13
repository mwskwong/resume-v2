"use client";

import { PersonRounded as Person } from "@mui/icons-material";
import { Container, Stack } from "@mui/material";
import Image from "next/image";
import { FC } from "react";

import personalPhoto from "@/assets/images/personal_photo.jpg";
import SectionHeader from "@/components/SectionHeader";
import { firstName, lastName } from "@/constants/name";

import styles from "./about.module.css";
import Message from "./Message";
import Skills from "./Skills";
import useSx from "./useAboutSx";

const About: FC = () => {
  const sx = useSx();

  return (
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
  );
};

export default About;
