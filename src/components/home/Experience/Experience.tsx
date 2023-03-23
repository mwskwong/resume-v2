"use client";

import { Container, Stack } from "@mui/material";
import { CircleSlice4 } from "mdi-material-ui";
import { FC } from "react";

import SectionHeader from "@/components/shared/SectionHeader";

import ExperienceTimeline from "./ExperienceTimeline";

const Experience: FC = () => (
  <Container>
    <Stack spacing={6}>
      <SectionHeader heading="Experience" icon={<CircleSlice4 />} />
      <ExperienceTimeline />
    </Stack>
  </Container>
);

export default Experience;
