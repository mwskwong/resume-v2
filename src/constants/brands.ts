import { Brand } from "@/types";

const brands: Brand[] = [
  {
    id: "dataCamp",
    name: "DataCamp"
  },
  {
    id: "enterpriseDb",
    name: "EnterpriseDB"
  },
  {
    id: "gitHub",
    name: "GitHub"
  },
  {
    id: "google",
    name: "Google"
  },
  {
    id: "linkedIn",
    name: "LinkedIn"
  },
  {
    id: "microsoft",
    name: "Microsoft"
  },
  {
    id: "mongoDb",
    name: "MongoDB"
  },
  {
    id: "oracle",
    name: "Oracle"
  },
  {
    id: "stackOverflow",
    name: "StackOverflow"
  },
  {
    id: "udemy",
    name: "Udemy"
  }
];

export const getBrandById = (brandId: Brand["id"]) => {
  const brand = brands.find(({ id }) => id === brandId);
  if (!brand) {
    throw new TypeError(`${brandId} must be present`);
  }

  return brand;
};

export default brands;
