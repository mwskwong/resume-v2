import hkuEngTaRefLetter from "@/assets/documents/hku_eng_ta.pdf";
import hkuMedRaRefLetter from "@/assets/documents/hku_med_ra.pdf";
import lunchAndLearnCert from "@/assets/documents/lunch_and_learn.pdf";
import hkuEngTaRefLetterThumbnail from "@/assets/images/hku_eng_ta_thumbnail.jpg";
import hkuMedRaRefLetterThumbnail from "@/assets/images/hku_med_ra_thumbnail.jpg";
import lunchAndLearnCertThumbnail from "@/assets/images/lunch_and_learn_thumbnail.jpg";
import { SupportingDocument } from "@/types";

import experiencesConstants, { ExperienceConstants } from "./_experiences";

type Experience = ExperienceConstants & {
  supportingDocuments?: Required<SupportingDocument>[]
}

const supportingDocuments: Record<string, Required<Omit<SupportingDocument, "name">>> = {
  "Programmer (Database Management System)-Knowledge-sharing session certificate of appreciation": {
    url: lunchAndLearnCert,
    thumbnail: lunchAndLearnCertThumbnail
  },
  "Student Research Assistant-Reference letter": {
    url: hkuMedRaRefLetter,
    thumbnail: hkuMedRaRefLetterThumbnail
  },
  "Teaching Assistant-Reference letter": {
    url: hkuEngTaRefLetter,
    thumbnail: hkuEngTaRefLetterThumbnail
  }
};

const experiences: Experience[] = experiencesConstants.map(({ supportingDocuments: sd, ...experience }) => ({
  ...experience,
  supportingDocuments: sd?.map(({ name }) => ({
    name,
    ...supportingDocuments[`${experience.jobTitle}-${name}`]
  }))
}));

export default experiences;