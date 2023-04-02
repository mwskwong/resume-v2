import { Education } from "@/types";

import { getBrandById } from "./brands";

const educations: Education[] = [
  {
    from: new Date(2022, 7),
    to: "Present",
    degree: "MSc in Information Systems Management",
    school: getBrandById("hkust"),
    supportingDocuments: [],
  },
  {
    from: new Date(2015, 8),
    to: new Date(2019, 6),
    degree: "BEng in Computer Science",
    school: getBrandById("hku"),
    supportingDocuments: ["hkuCsCertOfGrad"],
  },
];

export default educations;
