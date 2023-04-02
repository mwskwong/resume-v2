import { TimelineConnector, TimelineDot, TimelineSeparator } from "@mui/lab";
import { Box, Stack } from "@mui/material";
import { FC } from "react";

import cx from "@/utils/cx";

import TimelineItemContent from "./timeline-item-content";
import TimelineItemHeader from "./timeline-item-header";
import TimelineSubitemProps from "./timeline-subitem-props";

const TimelineSubitem: FC<TimelineSubitemProps> = ({
  from,
  to,
  title,
  contents,
  tags,
  supportingDocuments,
  disableConnector,
  sx,
  ...props
}) => {
  return (
    <Box sx={cx({ display: "flex", gap: 2 }, sx)} {...props}>
      <Box sx={{ display: "flex", justifyContent: "center", width: 56 }}>
        <TimelineSeparator>
          <TimelineDot />
          {!disableConnector && <TimelineConnector />}
        </TimelineSeparator>
      </Box>
      <Stack spacing={2} sx={{ flex: 1, pt: "5px", pb: 6 }}>
        <TimelineItemHeader from={from} to={to} title={title} />
        <TimelineItemContent
          contents={contents}
          tags={tags}
          supportingDocuments={supportingDocuments}
        />
      </Stack>
    </Box>
  );
};

export default TimelineSubitem;
