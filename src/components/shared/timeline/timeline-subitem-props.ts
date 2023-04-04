import { BoxProps } from "@mui/material";

import TimelineItemData from "./timeline-item-data";

interface TimelineSubitemProps
  extends BoxProps,
    Omit<TimelineItemData, "subtitle"> {
  disableConnector?: boolean;
}

export default TimelineSubitemProps;
