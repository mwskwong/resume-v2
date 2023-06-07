import { Box, BoxProps, Button } from "@mui/material";
import Link from "next/link";
import { FC } from "react";

import nav from "@/constants/nav";
import useActiveSection from "@/utils/use-active-section";

const NavList: FC<BoxProps> = (props) => {
  const activeSection = useActiveSection();
  const dotSize = 6;

  return (
    <Box component="nav" {...props}>
      <Box component="ul" sx={{ display: "flex" }}>
        {nav.map(({ id, name, href }) => (
          <Button
            key={id}
            component={Link}
            href={href}
            color={activeSection.id === id ? "primary" : "inherit"}
          >
            {name}
            {activeSection.id === id && (
              <Box
                component="span"
                sx={{
                  width: dotSize,
                  height: dotSize,
                  bgcolor: "primary.main",
                  borderRadius: "50%",
                  position: "absolute",
                  bottom: 0,
                  left: `calc(50% - ${dotSize}px / 2)`,
                }}
              />
            )}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default NavList;
