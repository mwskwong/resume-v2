"use client";

import { WorkRounded as Work } from "@mui/icons-material";
import { Box, Container, Stack } from "@mui/material";
import { FC } from "react";

import SectionHeader from "@/components/shared/SectionHeader";
import { EXPERIENCE } from "@/constants/nav";
import { SectionProps } from "@/types";

import ExperienceTimeline from "./ExperienceTimeline";

const Experience: FC<SectionProps> = ({ sx }) => (
  <Box sx={sx} component="section" id={EXPERIENCE.id} data-cy={EXPERIENCE.id}>
    <Container>
      <Stack spacing={6}>
        <SectionHeader
          heading="Experience"
          icon={<Work />}
        />
        <ExperienceTimeline />
      </Stack>
    </Container>
  </Box>
);

if (process.env.NODE_ENV === "development") {
  Experience.whyDidYouRender = true;
}

export default Experience;