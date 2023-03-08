import { isString } from "lodash-es";

import getSupportingDocumentById from "@/assets/getSupportingDocumentById";
import educations from "@/constants/educations";
import experiences from "@/constants/experiences";

const getSupportingDocumentUrls = () => {
  const siteUrl = process.env.NEXT_PUBLIC_URL;
  const experienceSupportingDocumentPaths = experiences
    .flatMap(({ supportingDocuments }) =>
      supportingDocuments.map((id) => getSupportingDocumentById(id).path)
    )
    .filter(isString);

  const educationSupportingDocumentPaths = educations
    .flatMap(({ supportingDocuments }) =>
      supportingDocuments.map((id) => getSupportingDocumentById(id).path)
    )
    .filter(isString);

  const urls = [
    ...experienceSupportingDocumentPaths,
    ...educationSupportingDocumentPaths,
  ].map((path) => `${siteUrl}${path}`);

  return urls;
};

export default getSupportingDocumentUrls;
