import { IconButton, Stack } from "@mui/material";
import { FC } from "react";

import getBrandIcon from "@/components/shared/icons/getBrandIcon";
import { firstName } from "@/constants/name";
import platformProfiles from "@/constants/platformProfiles";
import cx from "@/utils/cx";

import PlatformProfilesProps from "./PlatformProfilesProps";
import useSx from "./useSx";

const PlatformProfiles: FC<PlatformProfilesProps> = ({ sx: sxProp }) => {
  const sx = useSx();

  return (
    <Stack spacing={1} direction="row" sx={cx(sx.root, sxProp)}>
      {platformProfiles.map(({ id, name, url }) => {
        const Icon = getBrandIcon(id);

        return (
          <IconButton
            key={id}
            color="inherit"
            href={url}
            target="_blank"
            aria-label={`${name} profile of ${firstName}`}
          >
            <Icon />
          </IconButton>
        );
      })}
    </Stack>
  );
};

if (process.env.NODE_ENV === "development") {
  PlatformProfiles.whyDidYouRender = true;
}

export default PlatformProfiles;