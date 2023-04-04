import { StackProps } from "@mui/material";

import TimelineItemData from "./timeline-item-data";

interface TimelineProps extends StackProps {
  data?: TimelineItemData[];
}

export default TimelineProps;
