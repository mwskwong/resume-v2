import { IconButton, Stack } from "@mui/material";
import { FC } from "react";

import getBrandIconById from "@/components/shared/icons/getBrandIconById";
import { firstName } from "@/constants/name";
import platformProfiles from "@/constants/platformProfiles";
import cx from "@/utils/cx";

import PlatformProfilesProps from "./PlatformProfilesProps";
import useSx from "./useSx";

const PlatformProfiles: FC<PlatformProfilesProps> = ({ sx: sxProp }) => {
  const sx = useSx();

  return (
    <Stack spacing={1} direction="row" sx={cx(sx.root, sxProp)}>
      {platformProfiles.map(({ platform, url }) => {
        const Icon = getBrandIconById(platform.id);

        return (
          <IconButton
            key={platform.id}
            color="inherit"
            href={url}
            target="_blank"
            data-cy={`${platform.id}Button`}
            aria-label={`${platform.name} profile of ${firstName}`}
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
