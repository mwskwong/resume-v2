import { Education } from "@/types";

const educations: Education[] = [
  {
    from: new Date(2022, 7),
    to: "Present",
    degree: "MSc in Information Systems Management",
    school: "Hong Kong University of Science and Technology",
    supportingDocuments: []
  },
  {
    from: new Date(2015, 8),
    to: new Date(2019, 6),
    degree: "BEng in Computer Science",
    school: "The University of Hong Kong",
    supportingDocuments: [
      "hkuCsCertOfGrad"
    ]
  }
];

export default educations;
