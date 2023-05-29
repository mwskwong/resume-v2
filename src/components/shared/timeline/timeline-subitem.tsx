import { TimelineConnector, TimelineDot, TimelineSeparator } from "@mui/lab";
import { Box, BoxProps, Stack } from "@mui/material";

import cx from "@/utils/cx";

import TimelineItemContent from "./timeline-item-content";
import TimelineItemHeader from "./timeline-item-header";
import { TimelineItemData } from "./types";

interface Props extends BoxProps, Omit<TimelineItemData, "subtitle"> {
  hideConnector?: boolean;
}

export default function TimelineSubitem({
  from,
  to,
  title,
  type,
  contents,
  tags,
  supportingDocuments,
  hideConnector,
  sx,
  ...props
}: Props) {
  return (
    <Box sx={cx({ display: "flex", gap: 2 }, sx)} {...props}>
      <Box sx={{ display: "flex", justifyContent: "center", width: 56 }}>
        <TimelineSeparator>
          <TimelineDot />
          {!hideConnector && <TimelineConnector />}
        </TimelineSeparator>
      </Box>
      <Stack spacing={2} sx={{ flex: 1, pt: "5px", pb: 6 }}>
        <TimelineItemHeader from={from} to={to} title={title} type={type} />
        <TimelineItemContent
          contents={contents}
          tags={tags}
          supportingDocuments={supportingDocuments}
        />
      </Stack>
    </Box>
  );
}
