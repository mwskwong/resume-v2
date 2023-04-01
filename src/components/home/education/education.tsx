"use client";

import { Container, Stack } from "@mui/material";
import { CircleSlice6 } from "mdi-material-ui";
import { FC } from "react";

import getSupportingDocumentById from "@/assets/get-supporting-document-by-id";
import SectionHeader from "@/components/shared/section-header";
import Timeline from "@/components/shared/timeline";
import educations from "@/constants/educations";

import Courses from "./courses";

const Education: FC = () => {
  const data = educations.map(
    ({ degree, school, supportingDocuments, ...elem }) => ({
      title: degree,
      subtitle: school,
      supportingDocuments: supportingDocuments.map((id) =>
        getSupportingDocumentById(id)
      ),
      ...elem,
    })
  );

  return (
    <Container>
      <Stack spacing={6}>
        <SectionHeader heading="Education" icon={<CircleSlice6 />} />
        <Timeline data={data} />
        <Courses />
      </Stack>
    </Container>
  );
};

export default Education;
