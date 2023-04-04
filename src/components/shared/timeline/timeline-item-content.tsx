import {
  Box,
  Chip,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Tooltip,
} from "@mui/material";
import { FC } from "react";

import ListItemThumbnail from "@/components/shared/list-item-thumbnail";

import TimelineItemContentProps from "./timeline-item-content-props";

const TimelineItemContent: FC<TimelineItemContentProps> = ({
  contents = [],
  tags = [],
  supportingDocuments = [],
  ...props
}) => {
  return (
    <Stack spacing={2} {...props}>
      {Boolean(contents.length) && (
        <List disablePadding data-cy="contents">
          {contents.map((point, index) => (
            <ListItem key={index} disableGutters>
              <ListItemText primary={point} />
            </ListItem>
          ))}
        </List>
      )}
      {Boolean(tags.length) && (
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }} data-cy="tags">
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
                <ListItem disablePadding data-cy={id}>
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
  );
};

export default TimelineItemContent;
