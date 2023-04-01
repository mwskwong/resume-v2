import {
  TimelineItem as MuiTimelineItem,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import {
  Box,
  Chip,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { formatDistanceStrict } from "date-fns";
import { FC } from "react";

import dateTimeFormat from "@/utils/date-time-format";

import SupportingDocumentListItem from "./supporting-document-list-item";
import TimelineItemProps from "./timeline-item-props";

const TimelineItem: FC<TimelineItemProps> = ({ data }) => {
  const from = dateTimeFormat.format(data.from);
  const to = data.to === "Present" ? "Present" : dateTimeFormat.format(data.to);
  const period = `${from} — ${to}`;
  const duration = formatDistanceStrict(
    data.to === "Present" ? Date.now() : data.to,
    data.from
  );

  return (
    <MuiTimelineItem>
      <TimelineOppositeContent
        variant="body2"
        sx={{
          color: "text.secondary",
          display: { xs: "none", md: "unset" },
          flex: 0.28,
          pt: "7px",
        }}
        data-cy="periodDesktop"
      >
        {period}
        <br />
        {duration}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color="primary" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ pt: { xs: "7px", md: "5px" } }}>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            display: { md: "none" },
          }}
          gutterBottom
          data-cy="periodMobile"
        >
          {period} • {duration}
        </Typography>
        <Typography variant="subtitle1" data-cy="title">
          {data.title}
        </Typography>
        <Typography sx={{ color: "primary.main" }} data-cy="subtitle">
          {data.subtitle}
        </Typography>
        {Boolean(data.contents?.length) && (
          <List component="ol" data-cy="contents">
            {data.contents?.map((content, index) => (
              <ListItem key={index} sx={{ gap: 2 }} disableGutters>
                <Box
                  sx={{
                    my: 0.5,
                    alignSelf: "flex-start",
                    display: "flex",
                    alignItems: "center",
                    height: 24,
                  }}
                >
                  <Typography
                    variant="overline"
                    component="span"
                    sx={{ color: "text.secondary", userSelect: "none" }}
                  >
                    {`${index + 1 < 10 ? 0 : ""}${index + 1}`}
                  </Typography>
                </Box>
                <ListItemText primary={content} />
              </ListItem>
            ))}
          </List>
        )}
        {Boolean(data.tags?.length) && (
          <Box
            sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}
            data-cy="tags"
          >
            {data.tags?.map((tag) => (
              <Chip key={tag} label={tag} data-cy={tag} />
            ))}
          </Box>
        )}
        {Boolean(data.supportingDocuments?.length) && (
          <List sx={{ pt: 2, pb: 0 }}>
            {data.supportingDocuments?.map((supportingDocument) => (
              <SupportingDocumentListItem
                key={supportingDocument.id}
                supportingDocument={supportingDocument}
                data-cy={supportingDocument.id}
              />
            ))}
          </List>
        )}
      </TimelineContent>
    </MuiTimelineItem>
  );
};

export default TimelineItem;
