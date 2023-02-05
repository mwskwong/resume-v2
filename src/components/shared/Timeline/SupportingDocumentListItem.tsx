import { ListItem, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material";
import Image from "next/image";
import { FC } from "react";

import styles from "./supportingDocumentListItem.module.css";
import SupportingDocumentListItemProps from "./SupportingDocumentListItemProps";
import useSx from "./useSupportingDocumentListItemSx";

const SupportingDocumentListItem: FC<SupportingDocumentListItemProps> = ({ supportingDocument: { name, url, thumbnail }, ...props }) => {
  const sx = useSx();

  return (
    <ListItem disablePadding {...props}>
      <ListItemButton component="a" href={url} target="_blank" sx={sx.button}>
        <ListItemAvatar sx={sx.avatar}>
          <Image
            src={thumbnail}
            alt={`Thumbnail of ${name}`}
            width={102}
            height={68}
            className={styles.thumbnail}
          />
        </ListItemAvatar>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem >
  );

};

if (process.env.NODE_ENV === "development") SupportingDocumentListItem.whyDidYouRender = true;

export default SupportingDocumentListItem;