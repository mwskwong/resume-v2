import { SvgIcon, SvgIconProps } from "@mui/material";
import { FC } from "react";

const Database: FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path d="M 6 2 C 4.895 2 4 2.895 4 4 L 4 6 C 4 6.552 4.448 7 5 7 L 19 7 C 19.552 7 20 6.552 20 6 L 20 4 C 20 2.895 19.105 2 18 2 L 6 2 z M 5 9 C 4.448 9 4 9.448 4 10 L 4 14 C 4 14.552 4.448 15 5 15 L 19 15 C 19.552 15 20 14.552 20 14 L 20 10 C 20 9.448 19.552 9 19 9 L 5 9 z M 5 17 C 4.448 17 4 17.448 4 18 L 4 20 C 4 21.105 4.895 22 6 22 L 18 22 C 19.105 22 20 21.105 20 20 L 20 18 C 20 17.448 19.552 17 19 17 L 5 17 z" />
  </SvgIcon>
);

export default Database;
