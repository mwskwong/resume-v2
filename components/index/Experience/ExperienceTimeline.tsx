import React, { FC } from "react";

import Timeline from "components/common/Timeline";
import experiences from "constants/experiences";

const ExperienceTimeline: FC = () => {


  const data = experiences
    .map(({ jobTitle, company, jobDuties, supportingDocuments, ...node }) => ({
      title: jobTitle,
      subtitle: company,
      contents: jobDuties,
      supportingDocuments,
      ...node
    }));

  return <Timeline data={data} />;
};

if (process.env.NODE_ENV === "development") ExperienceTimeline.whyDidYouRender = true;

export default ExperienceTimeline;