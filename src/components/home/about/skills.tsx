import {
  Avatar,
  Box,
  BoxProps,
  Chip,
  Unstable_Grid2 as Grid,
  Stack,
  Typography,
} from "@mui/material";

import { getIconByContentfulId } from "@/components/shared/icons";

interface Props extends BoxProps {
  skills?: {
    id: string;
    name: string;
    skills: string[];
  }[];
}

// TODO: fetch skills here directly once hitting MUI v6
export default function Skills({ skills = [], ...props }: Props) {
  return (
    <Box data-cy="skills" {...props}>
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
          const Icon = getIconByContentfulId(id);

          return (
            <Grid key={id} xs={12} sm={6} lg={4} data-cy={id}>
              <Stack spacing={2} alignItems="center">
                <Avatar
                  sx={{
                    width: 60,
                    height: 60,
                  }}
                >
                  {Icon && <Icon fontSize="large" />}
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
    </Box>
  );
}
