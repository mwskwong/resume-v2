import { avatarClasses, cardClasses, filledInputClasses } from "@mui/material";
import deepRenameKeys from "deep-rename-keys-ts";

import makeSx from "@/utils/makeSx";

import SectionProps from "./SectionProps";
import getBgColor from "./getBgColor";
import getPaperBgColor from "./getPaperBgColor";

const useSx = ({
  variant,
  fullHeight,
}: Pick<SectionProps, "variant" | "fullHeight">) =>
  makeSx({
    root: (theme) => ({
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
    }),
  });

export default useSx;
