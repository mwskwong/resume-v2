import { StackProps } from "@mui/material";

import TimelineItemData from "./timeline-item-data";

type TimelineItemContentProps = StackProps &
  Pick<TimelineItemData, "contents" | "tags" | "supportingDocuments">;

export default TimelineItemContentProps;
