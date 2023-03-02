import {
  AllInclusiveRounded as AllInclusive,
  BugReportRounded as BugReport,
  DashboardRounded as Dashboard,
  DevicesOtherRounded as DevicesOther,
  CloudRounded as MuiCloud,
  TerminalRounded as Terminal
} from "@mui/icons-material";
import { SvgIconProps } from "@mui/material";
import { FC } from "react";

import { SkillSet } from "@/types";

import Database from "./Database";
import MachineLearning from "./MachineLearning";
import ProjectManagement from "./ProjectManagement";

const Backend: FC<SvgIconProps> = props => (
  <Terminal data-cy="beIcon" {...props} />
);
const Cloud: FC<SvgIconProps> = props => (
  <MuiCloud data-cy="cloudIcon" {...props} />
);
const DataOps: FC<SvgIconProps> = props => (
  <AllInclusive data-cy="dataOpsIcon" {...props} />
);
const Frontend: FC<SvgIconProps> = props => (
  <Dashboard data-cy="feIcon" {...props} />
);
const QualityAssurance: FC<SvgIconProps> = props => (
  <BugReport data-cy="qaIcon" {...props} />
);
const Mobile: FC<SvgIconProps> = props => (
  <DevicesOther data-cy="mobileIcon" {...props} />
);

const getSkillSetIconById = (id: SkillSet["id"]) => {
  switch (id) {
    case "be":
      return Backend;
    case "cloud":
      return Cloud;
    case "dataOps":
      return DataOps;
    case "db":
      return Database;
    case "fe":
      return Frontend;
    case "qa":
      return QualityAssurance;
    case "mobile":
      return Mobile;
    case "ml":
      return MachineLearning;
    case "pm":
      return ProjectManagement;
  }
};

export default getSkillSetIconById;
