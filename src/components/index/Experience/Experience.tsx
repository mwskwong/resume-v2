import { Box, Container, Stack } from "@mui/material";

import { EXPERIENCE } from "constants/nav";
import ExperienceTimeline from "./ExperienceTimeline";
import { FC } from "react";
import SectionHeading from "components/common/SectionHeading";
import { SectionProps } from "types";
import { WorkRounded as Work } from "@mui/icons-material";

const Experience: FC<SectionProps> = ({ sx }) => (
  <Box sx={sx} component="section" id={EXPERIENCE.id}>
    <Container>
      <Stack spacing={6}>
        <SectionHeading heading="Experience" icon={<Work />} />
        <ExperienceTimeline />
      </Stack>
    </Container>
  </Box>
);

if (process.env.NODE_ENV === "development") Experience.whyDidYouRender = true;

export default Experience;