import { FC } from "react";

import getSupportingDocument from "@/assets/getSupportingDocument";
import Timeline from "@/components/shared/Timeline";
import experiences from "@/constants/experiences";

const ExperienceTimeline: FC = () => {
  const data = experiences
    .map(({ jobTitle, company, jobDuties, supportingDocuments, ...elem }) => ({
      title: jobTitle,
      subtitle: company,
      contents: jobDuties,
      supportingDocuments: supportingDocuments.map(id => getSupportingDocument(id)),
      ...elem
    }));

  return <Timeline data={data} />;
};

if (process.env.NODE_ENV === "development") {
  ExperienceTimeline.whyDidYouRender = true;
}

export default ExperienceTimeline;