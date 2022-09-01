import * as skillSet from "constants/skillSet";

import {
  AllInclusiveRounded as AllInclusive,
  CloudRounded as Cloud,
  DashboardRounded as Dashboard,
  DevicesOtherRounded as DevicesOther,
  TerminalRounded as Terminal
} from "@mui/icons-material";
import { Box, Chip, Unstable_Grid2 as Grid, Stack, Typography } from "@mui/material";
import type { ElementType, FC } from "react";

import { Database } from "mdi-material-ui";
import type { SvgIconProps } from "@mui/material";
import { useMemo } from "react";
import useSx from "./useSkillSetSx";

const Icons: Record<string, ElementType<SvgIconProps>> = {
  backend: Terminal,
  cloud: Cloud,
  dataOps: AllInclusive,
  database: Database,
  frontend: Dashboard,
  mobile: DevicesOther
};

const SkillSet: FC = () => {
  const sx = useSx();
  const skillSetGroupedSorted = useMemo(
    () => Object.entries(skillSet)
      .sort(([, skillsInCat1], [, skillsInCat2]) => skillsInCat2.length - skillsInCat1.length),
    []
  );

  return (
    <div>
      <Typography component="h3" sx={sx.title}>
        Skills
      </Typography>
      <Grid container spacing={6} sx={sx.gridContainer} disableEqualOverflow>
        {skillSetGroupedSorted.map(([category, skills]) => {
          const Icon = Icons[category];

          return (
            <Grid key={category} xs={12} sm={6} lg={4}>
              <Stack spacing={2} sx={sx.stack}>
                <Icon sx={sx.icon} />
                <Typography component="h4" sx={sx.subtitle}>
                  {category}
                </Typography>
                <Box sx={sx.skillsContainer}>
                  {skills.map(skill => (
                    <Chip
                      key={skill}
                      sx={sx.skill}
                      label={skill}
                      variant="outlined"
                      color="primary"
                    />
                  ))}
                </Box>
              </Stack>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

if (process.env.NODE_ENV === "development") SkillSet.whyDidYouRender = true;

export default SkillSet;