import {
  ListItem,
  ListItemButton,
  ListItemText,
  Tooltip,
  styled,
} from "@mui/material";
import NextImage from "next/image";
import { FC } from "react";

import SupportingDocumentListItemProps from "./supporting-document-list-item-props";

const Image = styled(NextImage)``;

const SupportingDocumentListItem: FC<SupportingDocumentListItemProps> = ({
  supportingDocument,
  ...props
}) => (
  <Tooltip
    title="Private document; Contact me for access"
    PopperProps={{
      sx: {
        display: supportingDocument.private ? "unset" : "none",
      },
    }}
  >
    <ListItem disablePadding {...props}>
      <ListItemButton
        component="a"
        sx={{ pl: 0 }}
        href={supportingDocument.path}
        target="_blank"
        disabled={supportingDocument.private}
      >
        <Image
          src={supportingDocument.thumbnail}
          alt={`Thumbnail of ${supportingDocument.name}`}
          width={100}
          height={56}
          sx={{
            borderRadius: 1,
            mr: 2,
            objectPosition: "top",
            aspectRatio: "100 / 56",
          }}
        />
        <ListItemText
          primary={supportingDocument.name}
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
);

export default SupportingDocumentListItem;
