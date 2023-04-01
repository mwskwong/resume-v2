"use client";

import { Container, Stack } from "@mui/material";
import { CircleSlice2 } from "mdi-material-ui";
import Image from "next/image";
import { FC } from "react";

import personalPhoto from "@/assets/images/personal_photo.jpg";
import SectionHeader from "@/components/shared/section-header";
import { firstName, lastName } from "@/constants/name";

import styles from "./about.module.css";
import Message from "./message";
import Skills from "./skills";

const About: FC = () => (
  <Container>
    <Stack spacing={6} alignItems="center">
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

export default About;
