import { Timeline as MuiTimeline } from "@mui/lab";
import { FC } from "react";

import TimelineItem from "./TimelineItem";
import TimelineItemProps from "./TimelineItemData";

type TimelineProps = {
  data: TimelineItemProps[]
}

const Timeline: FC<TimelineProps> = ({ data }) => (
  <MuiTimeline position="right" >
    {data.map((datum, index) => (
      <TimelineItem key={index} data={datum} />
    ))}
  </MuiTimeline>
);

if (process.env.NODE_ENV === "development") Timeline.whyDidYouRender = true;

export default Timeline;
