import { IconButton, Stack, StackProps } from "@mui/material";
import { FC } from "react";

import { firstName } from "@/constants/data";
import cx from "@/utils/cx";

import { getIconByContentfulId } from "../icons";

interface Props extends StackProps {
  platformProfiles?: {
    platform?: {
      id: string;
      name: string;
    };
    url: string;
  }[];
}

// TODO: fetch platformProfiles here directly once hitting MUI v6
const PlatformProfiles: FC<Props> = ({
  platformProfiles = [],
  sx,
  ...props
}) => {
  return (
    <Stack
      spacing={1}
      direction="row"
      sx={cx({ justifyContent: "center" }, sx)}
      {...props}
    >
      {platformProfiles.map(({ platform, url }) => {
        if (platform) {
          const Icon = getIconByContentfulId(platform.id);

          return (
            <IconButton
              key={platform.id}
              color="inherit"
              href={url}
              target="_blank"
              aria-label={`${platform.name} profile of ${firstName}`}
            >
              {Icon && <Icon />}
            </IconButton>
          );
        }
      })}
    </Stack>
  );
};

export default PlatformProfiles;
