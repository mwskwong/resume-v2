

import {
  AllInclusiveRounded as AllInclusive,
  BugReportRounded as BugReport,
  CloudRounded as Cloud,
  DashboardRounded as Dashboard,
  DevicesOtherRounded as DevicesOther,
  TerminalRounded as Terminal
} from "@mui/icons-material";
import { Brain, Database } from "mdi-material-ui";

import { SkillSet } from "@/types";

const getSkillSetIconById = (id: SkillSet["id"]) => {
  switch (id) {
    case "be":
      return Terminal;
    case "cloud":
      return Cloud;
    case "dataOps":
      return AllInclusive;
    case "db":
      return Database;
    case "fe":
      return Dashboard;
    case "qa":
      return BugReport;
    case "mobile":
      return DevicesOther;
    case "ml":
      return Brain;
  }
};

export default getSkillSetIconById;