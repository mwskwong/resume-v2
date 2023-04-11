"use client";

import {
  Box,
  Button,
  Container,
  ContainerProps,
  Typography,
} from "@mui/material";

import PlatformProfiles from "@/components/shared/platform-profiles";
import { firstName, jobTitles } from "@/constants/data";
import cx from "@/utils/cx";

interface Props extends ContainerProps {
  platformProfiles?: {
    platform?: {
      id: string;
      name: string;
    };
    url: string;
  }[];
  resume?: string;
}

export default function Hero({
  platformProfiles,
  resume,
  sx,
  ...props
}: Props) {
  return (
    <Container
      sx={cx(
        {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          textAlign: "center",
        },
        sx
      )}
      {...props}
    >
      <Typography variant="subtitle1" component="p">
        Hello,
      </Typography>
      <Typography variant="h1" data-cy="title">
        {"I'm "}
        <Box component="span" sx={{ color: "primary.main" }}>
          {firstName}
        </Box>
      </Typography>
      <Typography variant="h6" component="p" data-cy="subtitle">
        {jobTitles.join(" & ")}
      </Typography>
      <PlatformProfiles platformProfiles={platformProfiles} my={4} />
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
}
