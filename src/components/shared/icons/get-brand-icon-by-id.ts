import { Brand } from "@/types";

import DataCamp from "./datacamp";
import EnterpriseDB from "./enterprisedb";
import GitHub from "./github";
import Google from "./google";
import LinkedIn from "./linkedIn";
import Microsoft from "./microsoft";
import MongoDB from "./mongodb";
import Oracle from "./oracle";
import StackOverflow from "./stackoverflow";
import Udemy from "./udemy";

const getBrandIconById = (id: Brand["id"]) => {
  switch (id) {
    case "dataCamp":
      return DataCamp;
    case "enterpriseDb":
      return EnterpriseDB;
    case "gitHub":
      return GitHub;
    case "google":
      return Google;
    case "linkedIn":
      return LinkedIn;
    case "microsoft":
      return Microsoft;
    case "mongoDb":
      return MongoDB;
    case "oracle":
      return Oracle;
    case "stackOverflow":
      return StackOverflow;
    case "udemy":
      return Udemy;
  }
};

export default getBrandIconById;
