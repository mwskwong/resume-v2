

import { Avatar, Box, Chip, Stack, Typography, Unstable_Grid2 as Grid } from "@mui/material";
import { FC } from "react";

import getSkillSetIcon from "@/components/shared/icons/getSkillSetIcon";
import skills from "@/constants/skills";

import useSx from "./useSkillsSx";

const Skills: FC = () => {
  const sx = useSx();

  return (
    <div data-cy="skills">
      <Typography component="h3" sx={sx.title} data-cy="title">
        Skills
      </Typography>
      <Grid container spacing={6} disableEqualOverflow sx={sx.grid}>
        {skills.map(({ id, name, skills }) => {
          const Icon = getSkillSetIcon(id);

          return (
            <Grid key={id} xs={12} sm={6} lg={4}>
              <Stack spacing={2} sx={sx.stack}>
                <Avatar sx={sx.avatar} variant="rounded">
                  <Icon fontSize="large" />
                </Avatar>
                <Typography component="h4" sx={sx.subtitle}>
                  {name}
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