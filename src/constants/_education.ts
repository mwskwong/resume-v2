import { SupportingDocument } from "types";

export type EducationConstants = {
  from: Date,
  to: Date | "Present",
  degree: string,
  school: string,
  supportingDocuments?: Required<Omit<SupportingDocument, "url" | "thumbnail">>[]
}

const education: EducationConstants[] = [
  {
    from: new Date(2022, 7),
    to: "Present",
    degree: "MSc in Information Systems Management",
    school: "Hong Kong University of Science and Technology"
  },
  {
    from: new Date(2015, 8),
    to: new Date(2019, 6),
    degree: "BEng in Computer Science",
    school: "The University of Hong Kong",
    supportingDocuments: [
      {
        name: "Degree Certification"
      }
    ]
  }
];

export default education;