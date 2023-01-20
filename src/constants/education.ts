import hkuCsCert from "@/assets/documents/hku_cs.pdf";
import hkuCsCertThumbnail from "@/assets/images/hku_cs_thumbnail.jpg";
import { SupportingDocument } from "types";

import educationConstants, { EducationConstants } from "./_education";

type Education = EducationConstants & {
  supportingDocuments?: Required<SupportingDocument>[]
}

const supportingDocuments: Record<string, Required<Omit<SupportingDocument, "name">>> = {
  "BEng in Computer Science-Degree Certification": {
    url: hkuCsCert,
    thumbnail: hkuCsCertThumbnail
  }
};

const education: Education[] = educationConstants.map(({ supportingDocuments: sd, ...education }) => ({
  ...education,
  supportingDocuments: sd?.map(({ name }) => ({
    name,
    ...supportingDocuments[`${education.degree}-${name}`]
  }))
}));

export default education;