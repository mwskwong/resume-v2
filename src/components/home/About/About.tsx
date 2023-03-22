"use client";

import { Container, Stack } from "@mui/material";
import { CircleSlice2 } from "mdi-material-ui";
import Image from "next/image";
import { FC } from "react";

import personalPhoto from "@/assets/images/personal_photo.jpg";
import SectionHeader from "@/components/shared/SectionHeader";
import { firstName, lastName } from "@/constants/name";

import Message from "./Message";
import Skills from "./Skills";
import styles from "./about.module.css";
import useSx from "./useAboutSx";

const About: FC = () => {
  const sx = useSx();

  return (
    <Container>
      <Stack sx={sx.stack} spacing={6}>
        <SectionHeader heading="About" icon={<CircleSlice2 />} />
        <Image
          src={personalPhoto}
          alt={`Picture of ${firstName} ${lastName}`}
          width={200}
          height={200}
          className={styles.image}
          data-cy="profilePicture"
        />
        <Message />
        <Skills />
      </Stack>
    </Container>
  );
};

export default About;
