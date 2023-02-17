import { Timeline as MuiTimeline } from "@mui/lab";
import { FC } from "react";

import TimelineItem from "./TimelineItem";
import TimelineProps from "./TimelineProps";

const Timeline: FC<TimelineProps> = ({ data }) => (
  <MuiTimeline position="right" data-cy="timeline">
    {data.map((datum, index) => (
      <TimelineItem key={index} data={datum} />
    ))}
  </MuiTimeline>
);

export default Timeline;
