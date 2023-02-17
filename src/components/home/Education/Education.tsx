"use client";

import { SchoolRounded as School } from "@mui/icons-material";
import { Container, Stack } from "@mui/material";
import { FC } from "react";

import SectionHeader from "@/components/shared/SectionHeader";

import Courses from "./Courses";
import EducationTimeline from "./EducationTimeline";

const Education: FC = () => (
  <Container>
    <Stack spacing={6}>
      <SectionHeader heading="Education" icon={<School />} />
      <EducationTimeline />
      <Courses />
    </Stack>
  </Container>
);

export default Education;
