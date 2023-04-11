"use client";

import { Container, Stack } from "@mui/material";
import { CircleSlice4 } from "mdi-material-ui";
import { FC } from "react";

import getBrandLogoById from "@/assets/get-brand-logo-by-id";
import getSupportingDocumentById from "@/assets/get-supporting-document-by-id";
import SectionHeader from "@/components/shared/section-header";
import Timeline from "@/components/shared/timeline";
import experiences from "@/constants/experiences";
import { Brand } from "@/types";

// const getThumbnails = (company: Brand | [Brand, Brand]) => {
//   if (Array.isArray(company)) {
//     const thumbnailSrcs = company.map(({ id }) => getBrandLogoById(id));
//     const allThumbnailExist = thumbnailSrcs.every(Boolean);
//     if (allThumbnailExist) {
//       return [
//         {
//           src: thumbnailSrcs[0],
//           alt: company[0].name,
//           url: company[0].url,
//         },
//         {
//           src: thumbnailSrcs[1],
//           alt: company[1].name,
//           url: company[1].url,
//         },
//       ] as [IThumbnail, IThumbnail];
//     }
//   } else {
//     const thumbnailSrc = getBrandLogoById(company.id);
//     return (
//       thumbnailSrc && {
//         src: thumbnailSrc,
//         alt: company.name,
//         url: company.url,
//       }
//     );
//   }
// };

const Experience: FC = () => {
  // const data = experiences.map(
  //   ({
  //     jobTitle,
  //     company,
  //     companyTemplate,
  //     employmentType,
  //     jobDuties,
  //     supportingDocuments,
  //     relevantSkills: relevantSkills,
  //     ...elem
  //   }) => ({
  //     thumbnails: getThumbnails(company),
  //     title: jobTitle,
  //     subtitle: Array.isArray(company)
  //       ? companyTemplate
  //         ? companyTemplate
  //             .replace("{0}", company[0].name)
  //             .replace("{1}", company[1].name)
  //         : `${company[0].name} | ${company[1].name}`
  //       : company.name,
  //     type: employmentType,
  //     contents: jobDuties,
  //     supportingDocuments: supportingDocuments.map((id) =>
  //       getSupportingDocumentById(id)
  //     ),
  //     tags: relevantSkills,
  //     ...elem,
  //   })
  // );

  return (
    <Container>
      <Stack spacing={6}>
        <SectionHeader heading="Experience" icon={<CircleSlice4 />} />
        {/* <Timeline data={data} /> */}
      </Stack>
    </Container>
  );
};

export default Experience;
