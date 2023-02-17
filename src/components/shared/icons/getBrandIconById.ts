import { Brand } from "@/types";

import DataCamp from "./DataCamp";
import EnterpriseDB from "./EnterpriseDB";
import GitHub from "./GitHub";
import Google from "./Google";
import LinkedIn from "./LinkedIn";
import Microsoft from "./Microsoft";
import MongoDB from "./MongoDB";
import Oracle from "./Oracle";
import StackOverflow from "./StackOverflow";
import Udemy from "./Udemy";

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
