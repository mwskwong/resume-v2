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
import { ImageLoader } from "next/image";

import Image from "@/components/shared/image";

import { TimelineItemData } from "./types";

const imageLoader: ImageLoader = ({ src, width }) =>
  `https://image.thum.io/get/pdfSource/width/${width}/page/1/${src}`;

export default function TimelineItemContent({
  contents = [],
  tags = [],
  supportingDocuments = [],
  ...props
}: StackProps &
  Pick<TimelineItemData, "contents" | "tags" | "supportingDocuments">) {
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
          {supportingDocuments.map(({ title, url }, index) => (
            <ListItem key={index} disablePadding data-cy={title}>
              <ListItemButton
                component="a"
                sx={{ pl: 0, gap: 2 }}
                href={url}
                target="_blank"
              >
                <Image
                  loader={imageLoader}
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
}
