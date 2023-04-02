import { Brand } from "@/types";

const brands: Brand[] = [
  {
    id: "dataCamp",
    name: "DataCamp",
  },
  {
    id: "enterpriseDb",
    name: "EnterpriseDB",
  },
  {
    id: "gitHub",
    name: "GitHub",
  },
  {
    id: "google",
    name: "Google",
  },
  {
    id: "linkedIn",
    name: "LinkedIn",
  },
  {
    id: "microsoft",
    name: "Microsoft",
  },
  {
    id: "mongoDb",
    name: "MongoDB",
  },
  {
    id: "oracle",
    name: "Oracle",
  },
  {
    id: "stackOverflow",
    name: "StackOverflow",
  },
  {
    id: "udemy",
    name: "Udemy",
  },
  {
    id: "hkust",
    name: "Hong Kong University of Science and Technology",
    url: "https://hkust.edu.hk/",
  },
  {
    id: "hku",
    name: "The University of Hong Kong",
    url: "https://www.hku.hk/",
  },
  {
    id: "tecpal",
    name: "TecPal Ltd.",
    url: "https://www.tecpal.com/",
  },
  {
    id: "edps",
    name: "EDPS Systems Limited",
    url: "http://www.edps.com.hk/",
  },
  {
    id: "ha",
    name: "Hospital Authority",
    url: "https://www.ha.org.hk/",
  },
  {
    id: "versitech",
    name: "Versitech Limited",
    url: "https://www.versitech.hku.hk/",
  },
  {
    id: "publicHealthHku",
    name: "School of Public Health, HKU",
    url: "https://sph.hku.hk/",
  },
  {
    id: "engineeringHku",
    name: "Faculty of Engineering, HKU",
    url: "https://engg.hku.hk/",
  },
];

export const getBrandById = (brandId: Brand["id"]) => {
  const brand = brands.find(({ id }) => id === brandId);
  if (!brand) {
    throw new TypeError(`${brandId} must be present`);
  }

  return brand;
};

export default brands;
