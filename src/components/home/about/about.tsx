"use client";

import { Container, ContainerProps, Stack } from "@mui/material";
import { CircleSlice2 } from "mdi-material-ui";

import personalPhoto from "@/assets/images/personal_photo.jpg";
import Image from "@/components/shared/image";
import SectionHeader from "@/components/shared/section-header";
import { firstName, lastName } from "@/constants/name";

import Message from "./message";
import Skills from "./skills";

interface Props extends ContainerProps {
  skills?: {
    id: string;
    name: string;
    skills: string[];
  }[];
}

export default function About({ skills, ...props }: Props) {
  return (
    <Container {...props}>
      <Stack spacing={6} alignItems="center">
        <SectionHeader heading="About" icon={<CircleSlice2 />} />
        <Image
          src={personalPhoto}
          alt={`Picture of ${firstName} ${lastName}`}
          width={200}
          height={200}
          sx={{ borderRadius: 3.5 }}
          data-cy="profilePicture"
        />
        <Message />
        <Skills skills={skills} />
      </Stack>
    </Container>
  );
}
