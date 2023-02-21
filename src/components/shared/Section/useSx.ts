import { avatarClasses, cardClasses, filledInputClasses } from "@mui/material";
import deepRenameKeys from "deep-rename-keys-ts";

import makeSx from "@/utils/makeSx";

import getBgColor from "./getBgColor";
import getPaperBgColor from "./getPaperBgColor";
import SectionProps from "./SectionProps";

const useSx = ({ variant, fullHeight }: Pick<SectionProps, "variant" | "fullHeight">) => makeSx({
  root: theme => ({
    display: "flex",
    flexDirection: "column",
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
    minHeight: fullHeight && "100vh",
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
