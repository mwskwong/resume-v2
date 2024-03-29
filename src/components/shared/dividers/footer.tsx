import { useTheme } from "@mui/material";
import { FC } from "react";

import DividerSvg from "./divider-svg";

const Footer: FC = () => {
  const theme = useTheme();

  return (
    <DividerSvg viewBox="0 0 1920 250">
      <path
        d="M1920 250H0V0s126.707 78.536 349.975 80.05c177.852 1.203 362.805-63.874 553.803-63.874 290.517 0 383.458 57.712 603.992 61.408 220.527 3.696 278.059-61.408 412.23-17.239"
        fill={theme.vars.palette.background.tertiary}
      />
      <path
        d="M1920 144s-467.917 116.857-1027.243-17.294C369.986 1.322 0 45.578 0 45.578V250h1920V144z"
        fill={theme.vars.palette.background.secondary}
      />
      <path
        d="M0 195.553s208.547-75.581 701.325-20.768c376.707 41.908 520.834-67.962 722.545-67.962 222.926 0 311.553 83.523 496.129 86.394V250H0v-54.447z"
        fill={theme.vars.palette.background.primary}
      />
    </DividerSvg>
  );
};

export default Footer;
