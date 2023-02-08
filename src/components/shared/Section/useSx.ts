import {  TypeBackground } from "@mui/material";
import { avatarClasses } from "@mui/material/Avatar";
import { cardClasses } from "@mui/material/Card";
import { filledInputClasses } from "@mui/material/FilledInput";
import deepRenameKeys from "deep-rename-keys-ts";

import makeSx from "@/utils/makeSx";

import SectionProps from "./SectionProps";

type UseSxArgs = Pick<SectionProps, "variant" | "fullHeight">

const getBgColor = (variant: UseSxArgs["variant"]): keyof TypeBackground => {
  switch (variant) {
    case "default":
      return "default";
    case "primary":
      return "sectionPrimary";
    case "secondary":
      return "sectionSecondary";
    case "tertiary":
      return "sectionTertiary";
    default:
      return "default";
  }
};

const getPaperBgColor = (variant: UseSxArgs["variant"]): keyof TypeBackground => {
  switch (variant) {
    case "default":
      return "sectionPrimary";
    case "primary":
      return "sectionSecondary";
    case "secondary":
      return "sectionTertiary";
    default:
      return "default";
  }
};

const useSx = ({ variant, fullHeight }: UseSxArgs) => makeSx({
  root: theme => ({
    bgcolor: `background.${getBgColor(variant)}`,
    ...deepRenameKeys(
      theme.mixins.toolbar,
      key => {
        if (key === "minHeight") {
          return "scrollPaddingTop";
        }

        return key;
      }
    ),
    py: 10,
    ...(fullHeight && {
      minHeight: "100vh",
      "@media screen and ( min-height: 476.45px )": {
        height: 0
      }
    }),
    [`& .${avatarClasses.root}`]: {
      bgcolor: `background.${getPaperBgColor(variant)}`
    },
    [`& .${cardClasses.root}`]: {
      bgcolor: `background.${getPaperBgColor(variant)}`
    },
    [`& .${filledInputClasses.root}`]: {
      bgcolor: `background.${getPaperBgColor(variant)}`,
      [`&:hover, &.${filledInputClasses.focused}`]: {
        bgcolor: `background.${getPaperBgColor(variant)}`
      },
      [`&.${filledInputClasses.disabled}`]: {
        bgcolor: "action.disabledBackground"
      }
    }
  })
});

export default useSx;
