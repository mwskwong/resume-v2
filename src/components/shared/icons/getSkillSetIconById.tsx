import {
  AllInclusiveRounded as AllInclusive,
  BugReportRounded as BugReport,
  CloudRounded as MuiCloud,
  DashboardRounded as Dashboard,
  DevicesOtherRounded as DevicesOther,
  TerminalRounded as Terminal
} from "@mui/icons-material";
import { SvgIconProps } from "@mui/material";
import { Database as MdiDatabase } from "mdi-material-ui";
import { FC } from "react";

import { SkillSet } from "@/types";

import MachineLearning from "./MachineLearning";

const Backend: FC<SvgIconProps> = props => <Terminal data-cy="beIcon" {...props} />;
const Cloud: FC<SvgIconProps> = props => <MuiCloud data-cy="cloudIcon" {...props} />;
const DataOps: FC<SvgIconProps> = props => <AllInclusive data-cy="dataOpsIcon" {...props} />;
const Database: FC<SvgIconProps> = props => <MdiDatabase data-cy="dbIcon" {...props} />;
const Frontend: FC<SvgIconProps> = props => <Dashboard data-cy="feIcon" {...props} />;
const QualityAssurance: FC<SvgIconProps> = props => <BugReport data-cy="qaIcon" {...props} />;
const Mobile: FC<SvgIconProps> = props => <DevicesOther data-cy="mobileIcon" {...props} />;


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
  }
};

export default getSkillSetIconById;
