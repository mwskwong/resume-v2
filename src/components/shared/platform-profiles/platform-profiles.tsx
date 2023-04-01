import { IconButton, Stack } from "@mui/material";
import { FC } from "react";

import getBrandIconById from "@/components/shared/icons/get-brand-icon-by-id";
import { firstName } from "@/constants/name";
import platformProfiles from "@/constants/platform-profiles";
import cx from "@/utils/cx";

import PlatformProfilesProps from "./platform-profiles-props";

const PlatformProfiles: FC<PlatformProfilesProps> = ({ sx, ...props }) => (
  <Stack
    spacing={1}
    direction="row"
    sx={cx({ justifyContent: "center" }, sx)}
    {...props}
  >
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

export default PlatformProfiles;
