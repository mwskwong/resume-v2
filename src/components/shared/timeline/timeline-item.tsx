import {
  Avatar,
  Box,
  Chip,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { formatDistanceStrict } from "date-fns";
import { FC } from "react";

import ListItemThumbnail from "@/components/shared/list-item-thumbnail";
import cx from "@/utils/cx";
import dateTimeFormat from "@/utils/date-time-format";

import Thumbnail from "./thumbnail";
import TimelineItemProps from "./timeline-item-props";

const TimelineItem: FC<TimelineItemProps> = ({
  thumbnails,
  title,
  subtitle,
  from,
  to,
  tags = [],
  contents = [],
  supportingDocuments = [],
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
    <Box sx={cx({ display: "flex", gap: 2 }, sx)} {...props}>
      <Thumbnail images={thumbnails} />
      <Stack spacing={2} sx={{ flex: 1 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: { sm: "space-between" },
          }}
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
        {Boolean(contents.length) && (
          <List disablePadding>
            {contents.map((point, index) => (
              <ListItem key={index} disableGutters>
                <ListItemText primary={point} />
              </ListItem>
            ))}
          </List>
        )}
        {Boolean(tags.length) && (
          <Box
            sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}
            data-cy="tags"
          >
            {tags.map((tag) => (
              <Chip key={tag} label={tag} data-cy={tag} />
            ))}
          </Box>
        )}
        {Boolean(supportingDocuments.length) && (
          <List disablePadding>
            {supportingDocuments.map(
              ({ id, name, path, thumbnail, private: isPrivate }) => (
                <Tooltip
                  key={id}
                  title="Private document; Contact me for access"
                  PopperProps={{
                    sx: {
                      display: isPrivate ? "unset" : "none",
                    },
                  }}
                >
                  <ListItem disablePadding>
                    <ListItemButton
                      component="a"
                      sx={{ pl: 0 }}
                      href={path}
                      target="_blank"
                      disabled={isPrivate}
                    >
                      <ListItemThumbnail
                        src={thumbnail}
                        alt={`Thumbnail of ${name}`}
                        sx={{ objectPosition: "top" }}
                      />
                      <ListItemText
                        primary={name}
                        primaryTypographyProps={{
                          sx: {
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 2,
                            overflow: "hidden",
                          },
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                </Tooltip>
              )
            )}
          </List>
        )}
      </Stack>
    </Box>
  );
};

export default TimelineItem;
