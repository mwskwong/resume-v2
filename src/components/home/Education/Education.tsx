"use client";

import { Container, Stack } from "@mui/material";
import { CircleSlice6 } from "mdi-material-ui";
import { FC } from "react";

import SectionHeader from "@/components/shared/SectionHeader";

import Courses from "./Courses";
import EducationTimeline from "./EducationTimeline";

const Education: FC = () => (
  <Container>
    <Stack spacing={6}>
      <SectionHeader heading="Education" icon={<CircleSlice6 />} />
      <EducationTimeline />
      <Courses />
    </Stack>
  </Container>
);

export default Education;
