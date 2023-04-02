import { Box, Chip, Stack, Typography } from "@mui/material";
import { formatDistanceStrict } from "date-fns";
import { FC } from "react";

import cx from "@/utils/cx";
import dateTimeFormat from "@/utils/date-time-format";

import TimelineItemHeaderProps from "./timeline-item-header-props";

const TimelineItemHeader: FC<TimelineItemHeaderProps> = ({
  from,
  to,
  title,
  subtitle,
  sx,
  ...props
}) => {
  const period = `${dateTimeFormat.format(from)} — ${
    to === "Present" ? "Present" : dateTimeFormat.format(to)
  }`;
  const duration = formatDistanceStrict(
    to === "Present" ? Date.now() : to,
    from
  );

  return (
    <Box
      sx={cx(
        {
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: { sm: "space-between" },
        },
        sx
      )}
      {...props}
    >
      <div>
        <Typography variant="subtitle1" component="h2" data-cy="title">
          {title}
        </Typography>
        <Typography sx={{ color: "primary.main" }} data-cy="subtitle">
          {subtitle}
        </Typography>
      </div>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        {period} • {duration}
      </Typography>
    </Box>
  );
};

export default TimelineItemHeader;
