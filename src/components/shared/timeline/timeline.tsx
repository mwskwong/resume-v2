import { Stack, StackProps } from "@mui/material";
import { Fragment } from "react";

import TimelineItem from "./timeline-item";
import TimelineSubitem from "./timeline-subitem";
import { TimelineItemData } from "./types";

interface Props extends StackProps {
  data?: TimelineItemData[];
}

export default function Timeline({ data = [], ...props }: Props) {
  return (
    <Stack {...props}>
      {data.map(({ thumbnails, subtitle, from, to, ...rest }, index) => {
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
                from={from}
                to={to}
                {...rest}
                hideConnector={last}
              />
            </Fragment>
          );
        }

        return (
          <TimelineItem
            key={index}
            thumbnails={thumbnails}
            subtitle={subtitle}
            from={from}
            to={to}
            {...rest}
          />
        );
      })}
    </Stack>
  );
}
