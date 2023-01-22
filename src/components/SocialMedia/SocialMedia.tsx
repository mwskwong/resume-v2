import { IconButton, Stack } from "@mui/material";
import { ElementType, FC } from "react";

import * as socialMedia from "@/constants/socialMedia";

import GitHub from "../icons/GitHub";
import LinkedIn from "../icons/LinkedIn";
import StackOverflow from "../icons/StackOverflow";
import SocialMediaProps from "./SocialMediaProps";
import useStyles from "./useStyles";

const Icons: Record<string, ElementType> = {
  stackOverflow: StackOverflow,
  linkedIn: LinkedIn,
  gitHub: GitHub
};

const SocialMedia: FC<SocialMediaProps> = ({ className }) => {
  const { classes, cx } = useStyles();

  return (
    <Stack spacing={1} direction="row" className={cx(classes.root, className)}>
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

if (process.env.NODE_ENV === "development") {
  SocialMedia.whyDidYouRender = true;
}

export default SocialMedia;