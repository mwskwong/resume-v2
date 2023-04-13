import { SxProps, Theme } from "@mui/material";

import getBgColor from "@/components/shared/section/get-bgcolor";

import { SectionDividerProps } from "./types";

export default function useSectionDividerSx({
  sectionVariants = {},
}: SectionDividerProps): SxProps<Theme> {
  return {
    bgcolor: `background.${getBgColor(sectionVariants.previous)}`,
    color: `background.${getBgColor(sectionVariants.next)}`,
  };
}
