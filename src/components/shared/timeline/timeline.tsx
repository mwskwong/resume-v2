import { Stack } from "@mui/material";
import { FC, Fragment } from "react";

import TimelineItem from "./timeline-item";
import TimelineProps from "./timeline-props";
import TimelineSubitem from "./timeline-subitem";

const Timeline: FC<TimelineProps> = ({ data = [], ...props }) => {
  return (
    <Stack {...props}>
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
        ) => {
          const prevSubtitle = data[index - 1]?.subtitle;
          const nextSubtitle = data[index + 1]?.subtitle;

          const merge = prevSubtitle === subtitle || subtitle === nextSubtitle;
          if (merge) {
            const first = prevSubtitle !== subtitle;
            const last = subtitle !== nextSubtitle;
            const earliestFrom = data.findLast(
              ({ subtitle: currSubtitle }) => currSubtitle === subtitle
            )?.from;

            return (
              <Fragment key={index}>
                {first && (
                  <TimelineItem
                    thumbnails={thumbnails}
                    title={subtitle}
                    from={earliestFrom ?? new Date()}
                    to={to}
                    sx={{ pb: 2 }}
                  />
                )}
                <TimelineSubitem
                  title={title}
                  from={from}
                  to={to}
                  contents={contents}
                  tags={tags}
                  supportingDocuments={supportingDocuments}
                  disableConnector={last}
                />
              </Fragment>
            );
          }

          return (
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
          );
        }
      )}
    </Stack>
  );
};

export default Timeline;
