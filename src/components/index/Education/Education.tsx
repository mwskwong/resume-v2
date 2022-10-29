import { Box, Container, Stack } from "@mui/material";

import Courses from "./Courses";
import { EDUCATION } from "constants/nav";
import EducationTimeline from "./EducationTimeline";
import { FC } from "react";
import { SchoolRounded as School } from "@mui/icons-material";
import SectionHeading from "components/common/SectionHeading";
import { SectionProps } from "types";

const Education: FC<SectionProps> = ({ sx }) => (
  <Box component="section" id={EDUCATION.id} sx={sx}>
    <Container>
      <Stack spacing={6}>
        <SectionHeading heading="Education" icon={<School />} />
        <EducationTimeline />
        <Courses />
      </Stack>
    </Container>
  </Box>
);

if (process.env.NODE_ENV === "development") Education.whyDidYouRender = true;

export default Education;