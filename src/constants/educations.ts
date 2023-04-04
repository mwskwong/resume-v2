import { Education } from "@/types";

import { getBrandById } from "./brands";
import { getEmploymentTypeById } from "./employmentTypes";

const educations: Education[] = [
  {
    from: new Date(2022, 7),
    to: "Present",
    degree: "MSc in Information Systems Management",
    school: getBrandById("hkust"),
    mode: getEmploymentTypeById("partTime"),
    supportingDocuments: [],
  },
  {
    from: new Date(2015, 8),
    to: new Date(2019, 6),
    degree: "BEng in Computer Science",
    school: getBrandById("hku"),
    mode: getEmploymentTypeById("fullTime"),
    supportingDocuments: ["hkuCsCertOfGrad"],
  },
  {
    from: new Date(2016, 6),
    to: new Date(2016, 7),
    degree: "Vancouver Summer Program (Communication and Digital Systems)",
    school: getBrandById("ubc"),
    supportingDocuments: [],
  },
];

export default educations;
