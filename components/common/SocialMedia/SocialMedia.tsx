import * as socialMedia from "constants/socialMedia";

import type { ElementType, FC } from "react";
import { IconButton, Stack } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";

import GitHub from "../icons/GitHub";
import LinkedIn from "../icons/LinkedIn";
import StackOverflow from "../icons/StackOverflow";
import useSx from "./useSx";

type SocialMediaProps = {
  sx?: SxProps<Theme>
}

const Icons: Record<string, ElementType> = {
  stackOverflow: StackOverflow,
  linkedIn: LinkedIn,
  gitHub: GitHub
};

const SocialMedia: FC<SocialMediaProps> = ({ sx: sxProp }) => {
  const sx = useSx(sxProp);

  return (
    <Stack spacing={1} direction="row" sx={sx.root}>
      {Object.entries(socialMedia).map(([name, link]) => {
        const Icon = Icons[name];

        return (
          <IconButton key={name} color="inherit" href={link} target="_blank" aria-label={name} data-cy={name}>
            <Icon />
          </IconButton>
        );
      })}
    </Stack>
  );
};

if (process.env.NODE_ENV === "development") SocialMedia.whyDidYouRender = true;

export default SocialMedia;