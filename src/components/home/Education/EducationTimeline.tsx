import { FC } from "react";

import getSupportingDocumentById from "@/assets/getSupportingDocumentById";
import Timeline from "@/components/shared/Timeline";
import educations from "@/constants/educations";

const EducationTimeline: FC = () => {
  const data = educations
    .map(({ degree, school, supportingDocuments, ...elem }) => ({
      title: degree,
      subtitle: school,
      supportingDocuments: supportingDocuments.map(id => getSupportingDocumentById(id)),
      ...elem
    }));

  return <Timeline data={data} />;
};

if (process.env.NODE_ENV === "development") {
  EducationTimeline.whyDidYouRender = true;
}

export default EducationTimeline;
