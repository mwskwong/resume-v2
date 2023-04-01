"use client";

import { Container, Stack } from "@mui/material";
import { CircleSlice4 } from "mdi-material-ui";
import { FC } from "react";

import getSupportingDocumentById from "@/assets/get-supporting-document-by-id";
import SectionHeader from "@/components/shared/section-header";
import Timeline from "@/components/shared/timeline";
import TimelineProps from "@/components/shared/timeline/timeline-props";
import experiences from "@/constants/experiences";

const Experience: FC = () => {
  const data: TimelineProps["data"] = experiences.map(
    ({
      jobTitle,
      company,
      jobDuties,
      supportingDocuments,
      relevantSkills: relevantSkills,
      ...elem
    }) => ({
      title: jobTitle,
      subtitle: company,
      contents: jobDuties,
      supportingDocuments: supportingDocuments.map((id) =>
        getSupportingDocumentById(id)
      ),
      tags: relevantSkills,
      ...elem,
    })
  );

  return (
    <Container>
      <Stack spacing={6}>
        <SectionHeader heading="Experience" icon={<CircleSlice4 />} />
        <Timeline data={data} />
      </Stack>
    </Container>
  );
};

export default Experience;
