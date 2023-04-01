import { ListItem, ListItemButton, ListItemText, Tooltip } from "@mui/material";
import Image from "next/image";
import { FC } from "react";

import SupportingDocumentListItemProps from "./supporting-document-list-item-props";
import styles from "./supporting-document-list-item.module.css";

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
          className={styles.thumbnail}
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
