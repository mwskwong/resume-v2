import {
  ListItem,
  ListItemButton,
  ListItemText,
  Tooltip,
  TypographyProps,
} from "@mui/material";
import Image from "next/image";
import { FC } from "react";

import SupportingDocumentListItemProps from "./SupportingDocumentListItemProps";
import styles from "./supportingDocumentListItem.module.css";
import useSx from "./useSupportingDocumentListItemSx";

const SupportingDocumentListItem: FC<SupportingDocumentListItemProps> = ({
  supportingDocument,
  ...props
}) => {
  const sx = useSx({ private: supportingDocument.private });
  const PopperProps = { sx: sx.tooltip };
  const primaryTypographyProps: TypographyProps = { sx: sx.name };

  return (
    <Tooltip
      title="Private document; Contact me for access"
      PopperProps={PopperProps}
    >
      <ListItem disablePadding {...props}>
        <ListItemButton
          component="a"
          href={supportingDocument.path}
          target="_blank"
          sx={sx.button}
          disabled={supportingDocument.private}
        >
          <Image
            src={supportingDocument.thumbnail}
            alt={`Thumbnail of ${supportingDocument.name}`}
            width={114}
            height={64}
            className={styles.thumbnail}
            quality={100}
          />
          <ListItemText
            primary={supportingDocument.name}
            primaryTypographyProps={primaryTypographyProps}
          />
        </ListItemButton>
      </ListItem>
    </Tooltip>
  );
};

export default SupportingDocumentListItem;
