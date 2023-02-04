import {
  AllInclusiveRounded as AllInclusive,
  BugReportRounded as BugReport,
  CloudRounded as Cloud,
  DashboardRounded as Dashboard,
  DevicesOtherRounded as DevicesOther,
  TerminalRounded as Terminal
} from "@mui/icons-material";
import { Avatar, Box, Chip, Stack, SvgIconProps, Typography, Unstable_Grid2 as Grid } from "@mui/material";
import { Database } from "mdi-material-ui";
import { ElementType, FC } from "react";

import skills from "@/constants/skills";
import { Skills } from "@/types";
import ObjectEntries from "@/utils/ObjectEntries";

import useSx from "./useSkillsSx";

const Icons: Record<keyof Skills, ElementType<SvgIconProps>> = {
  backend: Terminal,
  cloud: Cloud,
  dataOps: AllInclusive,
  database: Database,
  frontend: Dashboard,
  qa: BugReport,
  mobile: DevicesOther
};

const Skills: FC = () => {
  const sx = useSx();

  return (
    <div data-cy="skills">
      <Typography component="h3" sx={sx.title} data-cy="title">
        Skills
      </Typography>
      <Grid container spacing={6} disableEqualOverflow sx={sx.grid}>
        {ObjectEntries(skills).map(([category, { label, skills }]) => {
          const Icon = Icons[category as keyof Skills];

          return (
            <Grid key={category} xs={12} sm={6} lg={4}>
              <Stack spacing={2} sx={sx.stack}>
                <Avatar sx={sx.avatar} variant="rounded">
                  <Icon fontSize="large" />
                </Avatar>
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
  Skills.whyDidYouRender = true;
}

export default Skills;