"use client";

import { WorkRounded as Work } from "@mui/icons-material";
import { Container, Stack } from "@mui/material";
import { FC } from "react";

import SectionHeader from "@/components/shared/SectionHeader";

import ExperienceTimeline from "./ExperienceTimeline";

const Experience: FC = () => (
  <Container>
    <Stack spacing={6}>
      <SectionHeader
        heading="Experience"
        icon={<Work />}
      />
      <ExperienceTimeline />
    </Stack>
  </Container>
);

if (process.env.NODE_ENV === "development") {
  Experience.whyDidYouRender = true;
}

export default Experience;
