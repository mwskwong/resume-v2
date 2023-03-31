import { FC } from "react";

import DividerSvg from "./divider-svg";
import SectionDividerProps from "./section-divider-props";
import useSectionDividerSx from "./use-section-divider-sx";

const WaveSmoothFlat: FC<SectionDividerProps> = (props) => {
  const sx = useSectionDividerSx(props);

  return (
    <DividerSvg viewBox="0 0 1440 47" sx={sx}>
      <path
        d="M0 .058c117.505 18.386 269.602 22.114 456.294 11.185C562.076 5.051 730.784.911 885.297 3.273 1157.177 7.432 1386.981 21.329 1440 38.39v8.55H0V.058z"
        fill="currentColor"
      />
    </DividerSvg>
  );
};

export default WaveSmoothFlat;
