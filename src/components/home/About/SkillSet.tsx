import {
  AllInclusiveRounded as AllInclusive,
  BugReportRounded as BugReport,
  CloudRounded as Cloud,
  DashboardRounded as Dashboard,
  DevicesOtherRounded as DevicesOther,
  TerminalRounded as Terminal
} from "@mui/icons-material";
import { Box, Chip, Stack, SvgIconProps, Typography, Unstable_Grid2 as Grid } from "@mui/material";
import { Database } from "mdi-material-ui";
import { ElementType, FC } from "react";

import skillSet from "@/constants/skillSet";
import { SkillSet } from "@/types";
import ObjectEntries from "@/utils/ObjectEntries";

import useSx from "./useSkillSetSx";

const Icons: Record<keyof SkillSet, ElementType<SvgIconProps>> = {
  backend: Terminal,
  cloud: Cloud,
  dataOps: AllInclusive,
  database: Database,
  frontend: Dashboard,
  qa: BugReport,
  mobile: DevicesOther
};

const SkillSet: FC = () => {
  const sx = useSx();

  return (
    <div>
      <Typography component="h3" sx={sx.title}>
        Skills
      </Typography>
      <Grid container spacing={6} disableEqualOverflow sx={sx.grid}>
        {ObjectEntries(skillSet).map(([category, { label, skills }]) => {
          const Icon = Icons[category as keyof SkillSet];

          return (
            <Grid key={category} xs={12} sm={6} lg={4}>
              <Stack spacing={2} sx={sx.stack}>
                <Icon sx={sx.icon} />
                <Typography component="h4" sx={sx.subtitle}>
                  {label}
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

if (process.env.NODE_ENV === "development") {
  SkillSet.whyDidYouRender = true;
}

export default SkillSet;