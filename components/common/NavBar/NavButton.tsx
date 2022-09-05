import { Box, Button } from "@mui/material";

import type { FC } from "react";
import type { SectionId } from "types";
import useSx from "./useNavButtonSx";

type NavButtonProps = {
  label: string,
  id: SectionId,
  active?: boolean
}

const NavButton: FC<NavButtonProps> = ({ label, id, active }) => {
  const sx = useSx(active);

  return (
    <Button color={active ? "primary" : "inherit"} href={`#${id}`}>
      {label}
      <Box component="span" sx={sx.active} />
    </Button>
  );
};

if (process.env.NODE_ENV === "development") NavButton.whyDidYouRender = true;

export default NavButton;
