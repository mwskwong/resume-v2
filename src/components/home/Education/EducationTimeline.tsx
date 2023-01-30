import { FC } from "react";

import Timeline from "@/components/shared/Timeline";
import education from "@/constants/educations";

const EducationTimeline: FC = () => {
  const data = education
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