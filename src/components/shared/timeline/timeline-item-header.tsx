import { Box, BoxProps, Chip, ChipProps, Typography } from "@mui/material";
import { formatDistance } from "date-fns";
import { camelCase } from "lodash-es";

import cx from "@/utils/cx";
import dateTimeFormat from "@/utils/date-time-format";

import { TimelineItemData } from "./types";

export default function TimelineItemHeader({
  from,
  to,
  title,
  subtitle,
  type,
  sx,
  ...props
}: BoxProps &
  Pick<TimelineItemData, "from" | "to" | "title" | "subtitle" | "type">) {
  const period = `${dateTimeFormat.format(from)} — ${
    to === "Present" ? "Present" : dateTimeFormat.format(to)
  }`;
  const duration = formatDistance(to === "Present" ? Date.now() : to, from);

  return (
    <Box
      sx={cx(
        {
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "flex-start",
          justifyContent: { sm: "space-between" },
          gap: 1,
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
        <Typography
          variant="body2"
          sx={{ color: "text.secondary" }}
          data-cy="period"
        >
          {period} • {duration}
        </Typography>
      </div>
      {type && (
        <Chip
          label={type}
          variant="filled"
          color={camelCase(type) as ChipProps["color"]}
          size="small"
          data-cy="type"
        />
      )}
    </Box>
  );
}
