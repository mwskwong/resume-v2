import { IconButton, Stack } from "@mui/material";
import { ElementType, FC } from "react";

import socialMedia from "@/constants/socialMedia";
import cx from "@/utils/cx";

import GitHub from "../icons/GitHub";
import LinkedIn from "../icons/LinkedIn";
import StackOverflow from "../icons/StackOverflow";
import SocialMediaProps from "./SocialMediaProps";
import useSx from "./useSx";

const Icons: Record<string, ElementType> = {
  stackOverflow: StackOverflow,
  linkedIn: LinkedIn,
  gitHub: GitHub
};

const SocialMedia: FC<SocialMediaProps> = ({ sx: sxProp }) => {
  const sx = useSx();

  return (
    <Stack spacing={1} direction="row" sx={cx(sx.root, sxProp)}>
      {Object.entries(socialMedia).map(([name, link]) => {
        const Icon = Icons[name];

        return (
          <IconButton key={name} color="inherit" href={link} target="_blank" aria-label={name} data-cy={`${name}Button`}>
            <Icon />
          </IconButton>
        );
      })}
    </Stack>
  );
};

if (process.env.NODE_ENV === "development") {
  SocialMedia.whyDidYouRender = true;
}

export default SocialMedia;