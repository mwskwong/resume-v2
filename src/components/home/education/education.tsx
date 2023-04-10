"use client";

import { Container, ContainerProps, Stack } from "@mui/material";
import { CircleSlice6 } from "mdi-material-ui";

import getBrandLogoById from "@/assets/get-brand-logo-by-id";
import getSupportingDocumentById from "@/assets/get-supporting-document-by-id";
import SectionHeader from "@/components/shared/section-header";
import Timeline from "@/components/shared/timeline";
import educations from "@/constants/educations";

import Courses from "./courses";

interface Props extends ContainerProps {
  experiences?: {
    from: Date;
    to?: Date;
    companies: {
      name: string;
      logo?: string;
      url?: string;
    }[];
    supportingDocuments?: {
      title: string;
      url: string;
    }[];
    skills: (string | undefined)[];
    jobTitle: string;
    employmentType: string;
    jobDuties?: string[];
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

export default function Education({ courses, ...props }: Props) {
  const data = educations.map(
    ({ degree, school, mode, supportingDocuments, ...elem }) => {
      const thumbnailSrc = getBrandLogoById(school.id);

      return {
        thumbnails: thumbnailSrc && {
          src: thumbnailSrc,
          alt: school.name,
          url: school.url,
        },
        title: degree,
        subtitle: school.name,
        type: mode,
        supportingDocuments: supportingDocuments.map((id) =>
          getSupportingDocumentById(id)
        ),
        ...elem,
      };
    }
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
