import { BoxProps } from "@mui/material";

import TimelineItemData from "./timeline-item-data";

type TimelineItemHeaderProps = BoxProps &
  Pick<TimelineItemData, "from" | "to" | "title" | "subtitle">;

export default TimelineItemHeaderProps;
