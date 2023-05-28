"use client";

import { Container, ContainerProps, Stack } from "@mui/material";
import { CircleSlice4 } from "mdi-material-ui";

import SectionHeader from "@/components/shared/section-header";
import Timeline, { TimelineItemData } from "@/components/shared/timeline";

interface Props extends ContainerProps {
  experiences?: {
    from: string;
    to?: string;
    jobTitle: string;
    companies: {
      name: string;
      logo?: string;
      url?: string;
    }[];
    companyTemplate?: string;
    employmentType: string;
    jobDuties?: string[];
    skills: string[];
    supportingDocuments?: {
      title: string;
      url: string;
    }[];
  }[];
}

export default function Experience({ experiences = [], ...props }: Props) {
  const data: TimelineItemData[] = experiences.map(
    ({
      from,
      to,
      jobTitle,
      companies,
      companyTemplate,
      employmentType,
      jobDuties,
      skills,
      ...experience
    }) => ({
      from: new Date(from),
      to: to ? new Date(to) : "Present",
      thumbnails:
        companies.length === 0
          ? undefined
          : (companies
              .map(({ logo, name, url }) => ({
                src: logo ? `https:${logo}` : "",
                alt: name,
                url: url,
              }))
              .slice(0, 2) as TimelineItemData["thumbnails"]),
      title: jobTitle,
      subtitle: companyTemplate
        ? companyTemplate
            .replace("[1]", companies[0].name)
            .replace("[2]", companies[1].name)
        : companies[0].name,
      type: employmentType,
      contents: jobDuties,
      tags: skills,
      ...experience,
    })
  );

  return (
    <Container {...props}>
      <Stack spacing={6}>
        <SectionHeader heading="Experience" icon={<CircleSlice4 />} />
        <Timeline data={data} />
      </Stack>
    </Container>
  );
}
