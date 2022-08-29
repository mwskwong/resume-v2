import { CSSProperties, FC } from "react";
import { ListItem, ListItemAvatar, ListItemButton, ListItemText, useTheme } from "@mui/material";

import Image from "next/image";
import SupportDocument from "./SupportDocument";
import useSx from "./useSupportDocumentListItemSx";

type SupportDocumentListItemProps = {
  supportDocument: SupportDocument
}

const SupportDocumentListItem: FC<SupportDocumentListItemProps> = ({ supportDocument: { title, url, thumbnail } }) => {
  const sx = useSx();
  const theme = useTheme();
  const thumbnailStyle: CSSProperties = { borderRadius: theme.shape.borderRadius };

  return (
    <ListItem disablePadding>
      <ListItemButton component="a" href={url ?? undefined} target="_blank" sx={sx.button}>
        <ListItemAvatar sx={sx.avatar}>
          {thumbnail && (
            <Image
              src={thumbnail}
              alt={`Thumbnail of ${title}`}
              style={thumbnailStyle}
            />
          )}
        </ListItemAvatar>
        <ListItemText primary={title} />
      </ListItemButton>
    </ListItem>
  );

};

if (process.env.NODE_ENV === "development") SupportDocumentListItem.whyDidYouRender = true;

export default SupportDocumentListItem;