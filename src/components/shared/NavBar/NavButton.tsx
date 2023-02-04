import { Box, Button } from "@mui/material";
import { FC } from "react";

import NavElementProps from "./NavElementProps";
import useSx from "./useNavButtonSx";

const NavButton: FC<NavElementProps> = ({ label, id, active }) => {
  const sx = useSx({ active });

  return (
    <Button color={active ? "primary" : "inherit"} href={`#${id}`} data-cy={id}>
      {label}
      <Box component="span" sx={sx.active} />
    </Button>
  );
};

if (process.env.NODE_ENV === "development") NavButton.whyDidYouRender = true;

export default NavButton;
