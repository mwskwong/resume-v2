

import {
  AllInclusiveRounded as AllInclusive,
  BugReportRounded as BugReport,
  CloudRounded as MuiCloud,
  DashboardRounded as Dashboard,
  DevicesOtherRounded as DevicesOther,
  TerminalRounded as Terminal
} from "@mui/icons-material";
import { SvgIconProps } from "@mui/material";
import { Brain, Database as MdiDatabase } from "mdi-material-ui";
import { FC } from "react";

import { SkillSet } from "@/types";

const Backend: FC<SvgIconProps> = props => <Terminal data-cy="beIcon" {...props} />;
const Cloud: FC<SvgIconProps> = props => <MuiCloud data-cy="cloudIcon" {...props} />;
const DataOps: FC<SvgIconProps> = props => <AllInclusive data-cy="dataOpsIcon" {...props} />;
const Database: FC<SvgIconProps> = props => <MdiDatabase data-cy="dbIcon" {...props} />;
const Frontend: FC<SvgIconProps> = props => <Dashboard data-cy="feIcon" {...props} />;
const Qa: FC<SvgIconProps> = props => <BugReport data-cy="qaIcon" {...props} />;
const Mobile: FC<SvgIconProps> = props => <DevicesOther data-cy="mobileIcon" {...props} />;
const Ml: FC<SvgIconProps> = props => <Brain data-cy="mlIcon" {...props} />;

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
      return Qa;
    case "mobile":
      return Mobile;
    case "ml":
      return Ml;
  }
};

export default getSkillSetIconById;