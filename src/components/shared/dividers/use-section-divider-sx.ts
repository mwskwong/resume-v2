import { SxProps, Theme } from "@mui/material";

import getBgColor from "@/components/shared/section/get-bgcolor";

import { SectionDividerProps } from "./types";

type UseSectionDividerSx = (props: SectionDividerProps) => SxProps<Theme>;

const useSectionDividerSx: UseSectionDividerSx = ({ sectionVariants }) => ({
  bgcolor: `background.${getBgColor(sectionVariants?.previous)}`,
  color: `background.${getBgColor(sectionVariants?.next)}`,
});

export default useSectionDividerSx;
