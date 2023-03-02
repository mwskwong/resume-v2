import {
  TimelineItem as MuiTimelineItem,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
  TimelineSeparator
} from "@mui/lab";
import {
  Box,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from "@mui/material";
import { formatDistanceStrict } from "date-fns";
import { FC } from "react";

import dateTimeFormat from "@/utils/dateTimeFormat";

import SupportingDocumentListItem from "./SupportingDocumentListItem";
import TimelineItemProps from "./TimelineItemProps";
import useSx from "./useTimelineItemSx";

const TimelineItem: FC<TimelineItemProps> = ({ data }) => {
  const sx = useSx();
  const from = dateTimeFormat.format(data.from);
  const to = data.to === "Present" ? "Present" : dateTimeFormat.format(data.to);
  const period = `${from} — ${to}`;
  const duration = formatDistanceStrict(
    data.to === "Present" ? Date.now() : data.to,
    data.from
  );

  return (
    <MuiTimelineItem>
      <TimelineOppositeContent sx={sx.periodDesktop} data-cy="periodDesktop">
        {period}
        <br />
        {duration}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color="primary" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={sx.timelineContent}>
        <Typography
          sx={sx.periodMobile}
          component="div"
          gutterBottom
          data-cy="periodMobile"
        >
          {period} • {duration}
        </Typography>
        <Typography sx={sx.title} component="div" data-cy="title">
          {data.title}
        </Typography>
        <Typography sx={sx.subtitle} component="div" data-cy="subtitle">
          {data.subtitle}
        </Typography>
        {Boolean(data.contents?.length) && (
          <List component="ol" data-cy="contents">
            {data.contents?.map((content, index) => (
              <ListItem key={index} disableGutters>
                <ListItemIcon sx={sx.listItemIcon}>
                  <Typography component="span" sx={sx.listItemNumber}>
                    {`${index + 1 < 10 ? 0 : ""}${index + 1}`}
                  </Typography>
                </ListItemIcon>
                <ListItemText primary={content} />
              </ListItem>
            ))}
          </List>
        )}
        {Boolean(data.tags?.length) && (
          <Box sx={sx.tagsContainer} data-cy="tags">
            {data.tags?.map(tag => (
              <Chip key={tag} sx={sx.tag} label={tag} data-cy={tag} />
            ))}
          </Box>
        )}
        {Boolean(data.supportingDocuments?.length) && (
          <List sx={sx.supportingDocumentList}>
            {data.supportingDocuments?.map(supportingDocument => (
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
