import { ListItem, ListItemAvatar, ListItemButton, ListItemText, useTheme } from "@mui/material";

import { FC } from "react";
import Image from "next/future/image";
import SupportingDocument from "./SupportingDocument";
import styles from "./supportingDocumentListItem.module.css";
import useSx from "./useSupportingDocumentListItemSx";

type SupportingDocumentListItemProps = {
  supportingDocument: SupportingDocument
}

const SupportingDocumentListItem: FC<SupportingDocumentListItemProps> = ({ supportingDocument: { name, url, thumbnail } }) => {
  const sx = useSx();
  const theme = useTheme();

  return (
    <ListItem disablePadding>
      <ListItemButton component="a" href={url ?? undefined} target="_blank" sx={sx.button}>
        <ListItemAvatar sx={sx.avatar}>
          {thumbnail && (
            <Image
              src={thumbnail}
              alt={`Thumbnail of ${name}`}
              width={102}
              height={68}
              className={styles.thumbnail}
            />
          )}
        </ListItemAvatar>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );

};

if (process.env.NODE_ENV === "development") SupportingDocumentListItem.whyDidYouRender = true;

export default SupportingDocumentListItem;