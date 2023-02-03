"use client";

import { SchoolRounded as School } from "@mui/icons-material";
import { Box, Container, Stack } from "@mui/material";
import { FC } from "react";

import SectionHeader from "@/components/shared/SectionHeader";
import { EDUCATION } from "@/constants/nav";
import { SectionProps } from "@/types";

import Courses from "./Courses";
import EducationTimeline from "./EducationTimeline";

const Education: FC<SectionProps> = ({ sx }) => (
  <Box component="section" id={EDUCATION.id} sx={sx}>
    <Container>
      <Stack spacing={6}>
        <SectionHeader heading="Education" icon={<School />} />
        <EducationTimeline />
        <Courses />
      </Stack>
    </Container>
  </Box>
);

if (process.env.NODE_ENV === "development") {
  Education.whyDidYouRender = true;
}

export default Education;