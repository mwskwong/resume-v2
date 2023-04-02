"use client";

import { Container, Stack } from "@mui/material";
import { CircleSlice4 } from "mdi-material-ui";
import { FC } from "react";

import getBrandLogoById from "@/assets/get-brand-logo-by-id";
import getSupportingDocumentById from "@/assets/get-supporting-document-by-id";
import SectionHeader from "@/components/shared/section-header";
import Timeline from "@/components/shared/timeline";
import IThumbnail from "@/components/shared/timeline/i-thumbnail";
import experiences from "@/constants/experiences";
import { Brand } from "@/types";

const getThumbnails = (companies: Brand | [Brand, Brand]) => {
  if (Array.isArray(companies)) {
    const thumbnailSrcs = companies.map(({ id }) => getBrandLogoById(id));
    const allThumbnailExist = thumbnailSrcs.every(Boolean);
    if (allThumbnailExist) {
      return [
        {
          src: thumbnailSrcs[0],
          alt: companies[0].name,
          url: companies[0].url,
        },
        {
          src: thumbnailSrcs[1],
          alt: companies[1].name,
          url: companies[1].url,
        },
      ] as [IThumbnail, IThumbnail];
    }
  } else {
    const thumbnailSrc = getBrandLogoById(companies.id);
    return (
      thumbnailSrc && {
        src: thumbnailSrc,
        alt: companies.name,
        url: companies.url,
      }
    );
  }
};

const Experience: FC = () => {
  const data = experiences.map(
    ({
      jobTitle,
      companies,
      companiesDescription,
      jobDuties,
      supportingDocuments,
      relevantSkills: relevantSkills,
      ...elem
    }) => ({
      thumbnails: getThumbnails(companies),
      title: jobTitle,
      subtitle:
        companiesDescription ??
        (Array.isArray(companies)
          ? `${companies[0].name} | ${companies[1].name}`
          : companies.name),
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
