import { FC } from "react";

import DividerSvg from "./divider-svg";
import SectionDividerProps from "./section-divider-props";
import useSectionDividerSx from "./use-section-divider-sx";

const WaveSmooth: FC<SectionDividerProps> = (props) => {
  const sx = useSectionDividerSx(props);

  return (
    <DividerSvg viewBox="0 0 1440 120" sx={sx}>
      <path
        d="M1440 21.21V120H0V21.21C120 35.07 240 42 360 42s240-6.93 360-20.79c88.328-8.794 154.574-14.333 198.738-16.618A3120.562 3120.562 0 0 1 1080 .42c120 0 240 6.93 360 20.79z"
        fill="currentColor"
      />
    </DividerSvg>
  );
};

export default WaveSmooth;
