"use client";

import {
  Box,
  BoxProps,
  TypeBackground,
  avatarClasses,
  cardClasses,
  filledInputClasses,
  inputBaseClasses,
} from "@mui/material";
import deepRenameKeys from "deep-rename-keys-ts";
import { FC } from "react";

import cx from "@/utils/cx";

import getBgColor from "./get-bgcolor";
import getPaperBgColor from "./get-paper-bgcolor";

interface Props extends BoxProps {
  variant?: keyof TypeBackground;
  fullHeight?: boolean;
}

const Section: FC<Props> = ({
  variant = "default",
  fullHeight = false,
  sx,
  ...props
}) => {
  return (
    <Box
      component="section"
      sx={cx(
        (theme) => ({
          display: "flex",
          flexDirection: "column",
          bgcolor: `background.${getBgColor(variant)}`,
          ...(deepRenameKeys(theme.mixins.toolbar, (key) => {
            if (key === "minHeight") {
              return "scrollPaddingTop";
            }

            return key;
          }) as typeof theme.mixins.toolbar),
          py: 10,
          minHeight: fullHeight ? "100vh" : undefined,
          [`& .${avatarClasses.root}`]: {
            bgcolor: `background.${getPaperBgColor(variant)}`,
          },
          [`& .${cardClasses.root}`]: {
            bgcolor: `background.${getPaperBgColor(variant)}`,
          },
          [`& .${filledInputClasses.root}`]: {
            bgcolor: `background.${getPaperBgColor(variant)}`,
            [`&:hover, &.${filledInputClasses.focused}`]: {
              bgcolor: `background.${getPaperBgColor(variant)}`,
            },
            [`&.${filledInputClasses.disabled}`]: {
              bgcolor: "action.disabledBackground",
            },
          },
          [`& .${inputBaseClasses.root}`]: {
            bgcolor: `background.${getPaperBgColor(variant)}`,
          },
        }),
        sx
      )}
      {...props}
    />
  );
};

export default Section;
