import { Box, Container, Stack } from "@mui/material";
import React, { FC, memo } from "react";

import Courses from "./Courses";
import { EDUCATION } from "constants/nav";
import EducationTimeline from "./EducationTimeline";
import SectionHeading from "components/common/SectionHeading";
import { SectionProps } from "types";
import useSx from "./useEducationSx";

const Education: FC<SectionProps> = ({ sx: sxProp }) => {
  const sx = useSx(sxProp);

  return (
    <Box component="section" id={EDUCATION.id} sx={sx.root}>
      <Container>
        <Stack spacing={6}>
          <SectionHeading heading="Education" />
          <EducationTimeline />
          <Courses />
        </Stack>
      </Container>
    </Box>
  );
};

if (process.env.NODE_ENV === "development") Education.whyDidYouRender = true;

export default memo(Education);