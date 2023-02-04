import { PlatformProfile } from "@/types";

import GitHub from "./GitHub";
import LinkedIn from "./LinkedIn";
import StackOverflow from "./StackOverflow";

const getBrandIcon = (id: PlatformProfile["id"]) => {
  switch (id) {
    case "gitHub":
      return GitHub;
    case "linkedIn":
      return LinkedIn;
    case "stackOverflow":
      return StackOverflow;
  }
};

export default getBrandIcon;