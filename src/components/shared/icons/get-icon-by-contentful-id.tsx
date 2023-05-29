import {
  TerminalRounded as Backend,
  CloudRounded as Cloud,
  AllInclusiveRounded as DataOps,
  DashboardRounded as Frontend,
  DevicesOtherRounded as Mobile,
  BugReportRounded as QualityAssurance,
} from "@mui/icons-material";

import Database from "./database";
import DataCamp from "./datacamp";
import EnterpriseDB from "./enterprisedb";
import GitHub from "./github";
import Google from "./google";
import LinkedIn from "./linkedIn";
import MachineLearning from "./machine-learning";
import Microsoft from "./microsoft";
import MongoDB from "./mongodb";
import Oracle from "./oracle";
import StackOverflow from "./stackoverflow";
import Udemy from "./udemy";

const Icons = {
  "39xxsgQxQ8QkkLanehShwM": DataCamp,
  "2H5GgFU9w93zAuYJC9Ei77": EnterpriseDB,
  "5okHEYjphz0Ijf8buAc53L": GitHub,
  "7g52E2sWK3NrJrkHpo0FgM": Google,
  "1pixZwU07yhCdpEdkxGVof": LinkedIn,
  "3evl5GGoKX4ReIAqDHJOU5": Microsoft,
  "31rWywCQiI78yNjvDJBhgT": MongoDB,
  "7zGOgiIofeUxiotCfqQlxr": Oracle,
  "1VVUJjfmnMSqIYZcpbQVLI": StackOverflow,
  "1HehJlTFU3uyHsvibs0jGk": Udemy,
  "2FtEFXEYpFad3n0eE4CNyF": Backend,
  BZg9YwYqAGvFoarrIqk4M: Cloud,
  "1lgdoqAo3anMd8oMWkvou2": Database,
  "9zrJS3ggkoVadUxZTvwyc": DataOps,
  "3sdnCkE0j79D4kRSGuUjhp": Frontend,
  "4nOEnXVl1fCJGetHGVnsZ8": MachineLearning,
  "3biweEjbkRyZaII8ZgkQhI": Mobile,
  "119H1LBXMmT8xLTdnAq1PS": QualityAssurance,
};

const getIconByContentfulId = (id: string) => {
  if (Object.hasOwn(Icons, id)) {
    return Icons[id as keyof typeof Icons];
  }
};

export default getIconByContentfulId;
