import Timeline from "components/common/Timeline";
import experiences from "constants/experiences";
import { FC } from "react";

const ExperienceTimeline: FC = () => {


  const data = experiences
    .map(({ jobTitle, company, jobDuties, ...node }) => ({
      title: jobTitle,
      subtitle: company,
      contents: jobDuties,
      ...node
    }));

  return <Timeline data={data} />;
};

if (process.env.NODE_ENV === "development") ExperienceTimeline.whyDidYouRender = true;

export default ExperienceTimeline;