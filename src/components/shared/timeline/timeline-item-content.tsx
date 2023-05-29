"use client";

import {
  Box,
  Chip,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  StackProps,
} from "@mui/material";
import { FC } from "react";

import Image from "@/components/shared/image";
import { thumIoLoader } from "@/utils/image-loaders";

import { TimelineItemData } from "./types";

type Props = StackProps &
  Pick<TimelineItemData, "contents" | "tags" | "supportingDocuments">;

const TimelineItemContent: FC<Props> = ({
  contents = [],
  tags = [],
  supportingDocuments = [],
  ...props
}) => (
  <Stack spacing={2} {...props}>
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
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {tags.map((tag) => (
          <Chip key={tag} label={tag} />
        ))}
      </Box>
    )}
    {Boolean(supportingDocuments.length) && (
      <List disablePadding>
        {supportingDocuments.map(({ title, url }, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              component="a"
              sx={{ pl: 0, gap: 2 }}
              href={url}
              target="_blank"
            >
              <Image
                loader={thumIoLoader}
                src={url}
                alt={title}
                width={100}
                height={56}
                sx={{
                  borderRadius: 1,
                  flexShrink: 0,
                  objectPosition: "top center",
                }}
              />
              <ListItemText
                primary={title}
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
        ))}
      </List>
    )}
  </Stack>
);

export default TimelineItemContent;
