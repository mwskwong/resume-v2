"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import { FC } from "react";

import resume from "@/assets/documents/resume.pdf";
import PlatformProfiles from "@/components/shared/PlatformProfiles";
import jobTitles from "@/constants/jobTitles";
import { firstName } from "@/constants/name";

const Hero: FC = () => (
  <Container
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
      textAlign: "center",
    }}
  >
    <Typography variant="subtitle1" component="p">
      Hello,
    </Typography>
    <Typography variant="h1" data-cy="title">
      {"I'm "}
      <Box component="span" color="primary.main">
        {firstName}
      </Box>
    </Typography>
    <Typography variant="h6" component="p" data-cy="subtitle">
      {jobTitles.join(" & ")}
    </Typography>
    <PlatformProfiles my={4} />
    <Button
      variant="contained"
      size="large"
      component="a"
      href={resume}
      target="_blank"
      data-cy="downloadResume"
    >
      Download Resume
    </Button>
  </Container>
);

export default Hero;
