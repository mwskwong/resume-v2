import { Box, BoxProps, Stack } from "@mui/material";
import { FC } from "react";

import cx from "@/utils/cx";

import OrganizationThumbnail from "./organization-thumbnail";
import TimelineItemContent from "./timeline-item-content";
import TimelineItemHeader from "./timeline-item-header";
import { TimelineItemData } from "./types";

const TimelineItem: FC<BoxProps & TimelineItemData> = ({
  thumbnails,
  title,
  subtitle,
  from,
  to,
  type,
  contents,
  tags,
  supportingDocuments,
  sx,
  ...props
}) => (
  <Box sx={cx({ display: "flex", gap: 2, pb: 6 }, sx)} {...props}>
    <OrganizationThumbnail images={thumbnails} />
    <Stack spacing={2} sx={{ flex: 1 }}>
      <TimelineItemHeader
        title={title}
        subtitle={subtitle}
        from={from}
        to={to}
        type={type}
      />
      {Boolean(
        contents?.length ?? tags?.length ?? supportingDocuments?.length
      ) && (
        <TimelineItemContent
          contents={contents}
          tags={tags}
          supportingDocuments={supportingDocuments}
        />
      )}
    </Stack>
  </Box>
);

export default TimelineItem;
