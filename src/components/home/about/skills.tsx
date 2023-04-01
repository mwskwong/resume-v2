import {
  Avatar,
  Box,
  Chip,
  Unstable_Grid2 as Grid,
  Stack,
  Typography,
} from "@mui/material";
import { FC } from "react";

import getSkillSetIconById from "@/components/shared/icons/get-skill-set-icon-by-id";
import skills from "@/constants/skills";

const Skills: FC = () => (
  <div data-cy="skills">
    <Typography
      variant="subtitle2"
      component="h3"
      sx={{ color: "primary.main", textAlign: "center", mb: 2 }}
      data-cy="title"
    >
      Skills
    </Typography>
    <Grid container spacing={6} justifyContent="center" disableEqualOverflow>
      {skills.map(({ id, name, skills }) => {
        const Icon = getSkillSetIconById(id);

        return (
          <Grid key={id} xs={12} sm={6} lg={4} data-cy={id}>
            <Stack spacing={2} alignItems="center">
              <Avatar
                sx={{
                  width: 60,
                  height: 60,
                }}
                variant="rounded"
              >
                <Icon fontSize="large" />
              </Avatar>
              <Typography
                variant="subtitle1"
                component="h4"
                sx={{ color: "primary.main" }}
                data-cy="subtitle"
              >
                {name}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  gap: 1,
                }}
              >
                {skills.map((skill) => (
                  <Chip key={skill} label={skill} data-cy={skill} />
                ))}
              </Box>
            </Stack>
          </Grid>
        );
      })}
    </Grid>
  </div>
);

export default Skills;
