"use client";

import { Container, ContainerProps, Stack, Typography } from "@mui/material";
import { FC } from "react";

import Timeline, { TimelineItemData } from "@/components/shared/timeline";

import Courses from "./courses";

interface Props extends ContainerProps {
  educations?: {
    from: string;
    to?: string;
    program: string;
    school?: {
      name: string;
      logo?: string;
      url?: string;
    };
    mode: string;
    supportingDocuments?: {
      title: string;
      url: string;
    }[];
  }[];
  courses?: {
    name: string;
    institution?: {
      id: string;
      name: string;
    };
    certificate?: string;
  }[];
}

const Education: FC<Props> = ({ educations = [], courses, ...props }) => {
  const data: TimelineItemData[] = educations.map(
    ({ from, to, program, school, mode, ...education }) => ({
      from: new Date(from),
      to: to ? new Date(to) : "Present",
      thumbnails: school && [
        {
          src: school.logo ?? "",
          alt: school.name,
          url: school.url,
        },
      ],
      title: program,
      subtitle: school?.name,
      type: mode,
      ...education,
    })
  );

  return (
    <Container {...props}>
      <Stack spacing={6}>
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          Education
        </Typography>
        <Timeline data={data} />
        <Courses courses={courses} />
      </Stack>
    </Container>
  );
};

export default Education;
