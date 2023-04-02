import { Stack } from "@mui/material";
import { FC } from "react";

import TimelineItem from "./timeline-item";
import TimelineProps from "./timeline-props";

const Timeline: FC<TimelineProps> = ({ data = [], ...props }) => {
  return (
    <Stack spacing={6} {...props}>
      {data.map(
        (
          {
            thumbnails,
            title,
            subtitle,
            from,
            to,
            contents,
            tags,
            supportingDocuments,
          },
          index
        ) => (
          <TimelineItem
            key={index}
            thumbnails={thumbnails}
            title={title}
            subtitle={subtitle}
            from={from}
            to={to}
            contents={contents}
            tags={tags}
            supportingDocuments={supportingDocuments}
          />
        )
      )}
    </Stack>
  );
};

export default Timeline;
