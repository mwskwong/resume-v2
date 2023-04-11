"use client";

import { Container, ContainerProps, Stack } from "@mui/material";
import { CircleSlice6 } from "mdi-material-ui";

import SectionHeader from "@/components/shared/section-header";
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

export default function Education({
  educations = [],
  courses,
  ...props
}: Props) {
  const data: TimelineItemData[] = educations.map(
    ({ from, to, program, school, mode, ...education }) => ({
      from: new Date(from),
      to: to ? new Date(to) : "Present",
      thumbnails: school && [
        {
          src: school.logo ? `https:${school.logo}` : "",
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
        <SectionHeader heading="Education" icon={<CircleSlice6 />} />
        <Timeline data={data} />
        <Courses courses={courses} />
      </Stack>
    </Container>
  );
}
