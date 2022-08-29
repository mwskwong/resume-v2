import React, { FC } from "react";

import { BoxProps } from "@mui/material";
import DividerSvg from "./DividerSvg";

const WaveRoaring: FC<BoxProps<"svg">> = props => (
  <DividerSvg {...props} viewBox="0 0 2000 242" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2000 75.463c-230.631 73.429-431.99 108.499-604.064 105.196-293.434-5.632-485.998-145.823-954.537-150.568C272.956 28.385 125.825 50.689 0 96.996V242h2000V75.463z"
      fill="currentColor"
    />
  </DividerSvg>
);

if (process.env.NODE_ENV === "development") WaveRoaring.whyDidYouRender = true;

export default WaveRoaring;