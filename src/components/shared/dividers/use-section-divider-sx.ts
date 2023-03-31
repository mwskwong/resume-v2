import { SxProps, Theme } from "@mui/material";

import getBgColor from "@/components/shared/Section/getBgColor";

import SectionDividerProps from "./section-divider-props";

const useSectionDividerSx = ({
  sectionVariants,
}: SectionDividerProps): SxProps<Theme> => ({
  bgcolor: `background.${getBgColor(sectionVariants.previous)}`,
  color: `background.${getBgColor(sectionVariants.next)}`,
});

export default useSectionDividerSx;
