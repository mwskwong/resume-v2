"use client";

import { Container, ContainerProps, Stack, Typography } from "@mui/material";
import { FC } from "react";

import Image from "@/components/shared/image";
import { firstName, lastName } from "@/constants/data";
import { contentfulLoader } from "@/utils/image-loaders";

import Message from "./message";
import Skills from "./skills";

interface Props extends ContainerProps {
  personalPhoto?: string;
  skills?: {
    id: string;
    name: string;
    skills: string[];
  }[];
}

const About: FC<Props> = ({ skills, personalPhoto, ...props }) => (
  <Container {...props}>
    <Stack spacing={6} sx={{ alignItems: "center" }}>
      <Typography variant="h2">About</Typography>
      {personalPhoto && (
        <Image
          loader={contentfulLoader}
          src={personalPhoto}
          alt={`Picture of ${firstName} ${lastName}`}
          width={200}
          height={200}
          sx={{ borderRadius: 3.5 }}
        />
      )}
      <Message />
      <Skills skills={skills} />
    </Stack>
  </Container>
);

export default About;
