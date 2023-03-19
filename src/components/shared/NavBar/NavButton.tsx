import { Box, Button } from "@mui/material";
import { FC } from "react";

import NavElementProps from "./NavElementProps";
import useSx from "./useNavButtonSx";

const NavButton: FC<NavElementProps> = ({ label, id, active }) => {
  const sx = useSx();
  const handleClick = () => {
    const section = document.getElementById(id);
    section?.scrollIntoView();
  };

  return (
    <Button
      color={active ? "primary" : "inherit"}
      onClick={handleClick}
      data-cy={id}
    >
      {label}
      {active && <Box component="span" sx={sx.dot} />}
    </Button>
  );
};

export default NavButton;
