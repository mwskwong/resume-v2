import getBgColor from "@/components/shared/Section/getBgColor";
import makeSx from "@/utils/makeSx";

import SectionDividerProps from "./SectionDividerProps";

const useSx = ({ previousSectionVariant, nextSectionVariant }: SectionDividerProps) => makeSx({
  root: {
    bgcolor: previousSectionVariant && `background.${getBgColor(previousSectionVariant)}`,
    color: nextSectionVariant && `background.${getBgColor(nextSectionVariant)}`
  }
});

export default useSx;
