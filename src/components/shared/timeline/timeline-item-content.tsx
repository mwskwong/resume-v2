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
// import { Suspense, lazy } from "react";

import { TimelineItemData } from "./types";

// const PdfThumbnail = lazy(() => import("./pdf-thumbnail"));

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
                sx={{ pl: 0 }}
                href={url}
                target="_blank"
              >
                {/* <Suspense>
                  <PdfThumbnail file={url} />
                </Suspense> */}
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
