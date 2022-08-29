import { Box, Container, Stack } from "@mui/material";
import React, { FC, memo } from "react";

import Certifications from "./Certifications";
import { EXPERIENCE } from "constants/nav";
import ExperienceTimeline from "./ExperienceTimeline";
import SectionHeading from "components/common/SectionHeading";
import { SectionProps } from "types";
import useSx from "./useSx";

const Experience: FC<SectionProps> = ({ sx: sxProp }) => {
  const sx = useSx(sxProp);

  return (
    <Box sx={sx.root} component="section" id={EXPERIENCE.id}>
      <Container>
        <Stack spacing={6}>
          <SectionHeading heading="Experience" />
          <ExperienceTimeline />
          <Certifications />
        </Stack>
      </Container>
    </Box>
  );
};

if (process.env.NODE_ENV === "development") Experience.whyDidYouRender = true;

export default memo(Experience);