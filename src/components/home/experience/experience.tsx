"use client";

import { Container, ContainerProps, Stack, Typography } from "@mui/material";
import { FC } from "react";

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

const Experience: FC<Props> = ({ experiences = [], ...props }) => {
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
                src: logo,
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
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          Experience
        </Typography>
        <Timeline data={data} />
      </Stack>
    </Container>
  );
};

export default Experience;
