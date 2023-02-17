import { ListItem, ListItemAvatar, ListItemButton, ListItemText, Tooltip } from "@mui/material";
import Image from "next/image";
import { FC } from "react";

import styles from "./supportingDocumentListItem.module.css";
import SupportingDocumentListItemProps from "./SupportingDocumentListItemProps";
import useSx from "./useSupportingDocumentListItemSx";

const SupportingDocumentListItem: FC<SupportingDocumentListItemProps> = ({ supportingDocument, ...props }) => {
  const sx = useSx({ private: supportingDocument.private });
  const PopperProps = { sx: sx.tooltip };

  return (
    <Tooltip title="Private document; Contact me for access" PopperProps={PopperProps}>
      <ListItem disablePadding {...props}>
        <ListItemButton
          component="a"
          href={supportingDocument.url}
          target="_blank"
          sx={sx.button}
          disabled={supportingDocument.private}
        >
          <ListItemAvatar sx={sx.avatar}>
            <Image
              src={supportingDocument.thumbnail}
              alt={`Thumbnail of ${supportingDocument.name}`}
              width={102}
              height={68}
              className={styles.thumbnail}
            />
          </ListItemAvatar>
          <ListItemText primary={supportingDocument.name} />
        </ListItemButton>
      </ListItem>
    </Tooltip>
  );
};

export default SupportingDocumentListItem;
