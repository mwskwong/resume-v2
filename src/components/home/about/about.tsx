"use client";

import { Container, ContainerProps, Stack } from "@mui/material";
import { CircleSlice2 } from "mdi-material-ui";

import Image from "@/components/shared/image";
import SectionHeader from "@/components/shared/section-header";
import { firstName, lastName } from "@/constants/data";

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

export default function About({ skills, personalPhoto, ...props }: Props) {
  return (
    <Container {...props}>
      <Stack spacing={6} sx={{ alignItems: "center" }}>
        <SectionHeader heading="About" icon={<CircleSlice2 />} />
        {personalPhoto && (
          <Image
            src={personalPhoto}
            alt={`Picture of ${firstName} ${lastName}`}
            width={200}
            height={200}
            sx={{ borderRadius: 3.5 }}
            data-cy="profilePicture"
          />
        )}
        <Message />
        <Skills skills={skills} />
      </Stack>
    </Container>
  );
}
