import { FC } from "react";

import getSupportingDocumentById from "@/assets/getSupportingDocumentById";
import Timeline from "@/components/shared/Timeline";
import TimelineProps from "@/components/shared/Timeline/TimelineProps";
import experiences from "@/constants/experiences";

const ExperienceTimeline: FC = () => {
  const data: TimelineProps["data"] = experiences
    .map(({ jobTitle, company, jobDuties, supportingDocuments, relevantSkills: relevantSkills, ...elem }) => ({
      title: jobTitle,
      subtitle: company,
      contents: jobDuties,
      supportingDocuments: supportingDocuments.map(id => getSupportingDocumentById(id)),
      tags: relevantSkills,
      ...elem
    }));

  return <Timeline data={data} />;
};

if (process.env.NODE_ENV === "development") {
  ExperienceTimeline.whyDidYouRender = true;
}

export default ExperienceTimeline;