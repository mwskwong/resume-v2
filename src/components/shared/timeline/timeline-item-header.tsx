import { Box, BoxProps, Chip, ChipProps, Typography } from "@mui/material";
import { formatDistance } from "date-fns";
import { camelCase } from "lodash-es";
import { FC } from "react";

import cx from "@/utils/cx";
import dateTimeFormat from "@/utils/date-time-format";

import { TimelineItemData } from "./types";

type Props = BoxProps &
  Pick<TimelineItemData, "from" | "to" | "title" | "subtitle" | "type">;

const TimelineItemHeader: FC<Props> = ({
  from,
  to,
  title,
  subtitle,
  type,
  sx,
  ...props
}) => {
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
        <Typography variant="subtitle1" component="h2">
          {title}
        </Typography>
        <Typography sx={{ color: "primary.main" }}>{subtitle}</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {period} • {duration}
        </Typography>
      </div>
      {type && (
        <Chip
          label={type}
          variant="filled"
          color={camelCase(type) as ChipProps["color"]}
          size="small"
        />
      )}
    </Box>
  );
};

export default TimelineItemHeader;
