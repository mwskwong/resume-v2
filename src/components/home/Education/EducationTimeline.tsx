import { FC } from "react";

import Timeline from "@/components/shared/Timeline";
import educations from "@/constants/educations";

const EducationTimeline: FC = () => {
  const data = educations
    .map(({ degree, school, ...node }) => ({
      title: degree,
      subtitle: school,
      ...node
    }));

  return <Timeline data={data} />;
};

if (process.env.NODE_ENV === "development") {
  EducationTimeline.whyDidYouRender = true;
}

export default EducationTimeline;