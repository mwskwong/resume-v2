import { SupportingDocument } from "@/types";

import hkuCsCert from "./documents/hku_cs.pdf";
import hkuEngTaRefLetter from "./documents/hku_eng_ta.pdf";
import hkuMedRaRefLetter from "./documents/hku_med_ra.pdf";
import lunchAndLearnCert from "./documents/lunch_and_learn.pdf";
import haSc3RefThumbnailBlur from "./images/ha_sc3_ref_thumbnail_blur.jpg";
import hkuCsCertThumbnail from "./images/hku_cs_thumbnail.jpg";
import hkuEngTaRefLetterThumbnail from "./images/hku_eng_ta_thumbnail.jpg";
import hkuMedRaRefLetterThumbnail from "./images/hku_med_ra_thumbnail.jpg";
import lunchAndLearnCertThumbnail from "./images/lunch_and_learn_thumbnail.jpg";

const supportingDocuments: SupportingDocument[] = [
  {
    id: "haSc3RefLetter",
    name: "Reference Letter",
    thumbnail: haSc3RefThumbnailBlur,
    private: true
  },
  {
    id: "lunchAndLearn",
    name: "Knowledge-sharing session certificate of appreciation",
    url: lunchAndLearnCert,
    thumbnail: lunchAndLearnCertThumbnail
  },
  {
    id: "hkuMedRaRefLetter",
    name: "Reference Letter",
    url: hkuMedRaRefLetter,
    thumbnail: hkuMedRaRefLetterThumbnail
  },
  {
    id: "hkuEngTaRefLetter",
    name: "Reference Letter",
    url: hkuEngTaRefLetter,
    thumbnail: hkuEngTaRefLetterThumbnail
  },
  {
    id: "hkuCsCertOfGrad",
    name: "Degree Certificate",
    url: hkuCsCert,
    thumbnail: hkuCsCertThumbnail
  }
];

const getSupportingDocumentById = (supportingDocumentId: SupportingDocument["id"]) => {
  const supportingDocument = supportingDocuments.find(({ id }) => id === supportingDocumentId);
  if (!supportingDocument) {
    throw new TypeError(`Supporting document ${supportingDocumentId} must be present`);
  }

  return supportingDocument;
};

export default getSupportingDocumentById;