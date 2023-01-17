import { Stack, ToggleButton, ToggleButtonGroup, Typography, Unstable_Grid2 as Grid } from "@mui/material";
import CertAndCourseCard from "components/common/CertAndCourseCard";
import courses, { categories } from "constants/courses";
import { FC, MouseEvent, useState } from "react";

import useSx from "./useCoursesSx";

const Courses: FC = () => {
  const sx = useSx();
  const [categorySelected, setCategorySelected] = useState("All");

  const handleCategoryChange = (_: MouseEvent<HTMLElement>, category: string | null) => category && setCategorySelected(category);

  return (
    <Stack spacing={2}>
      <Typography sx={sx.title} component="h3">
        Courses & Training
      </Typography>
      <ToggleButtonGroup
        color="primary"
        size="small"
        value={categorySelected}
        onChange={handleCategoryChange}
        exclusive
        aria-label="course categories"
      >
        <ToggleButton value="All" data-cy="All">All</ToggleButton>
        {categories.map(category =>
          <ToggleButton key={category} value={category} data-cy={category}>
            {category}
          </ToggleButton>
        )}
      </ToggleButtonGroup>
      <div>
        <Grid container spacing={2}>
          {courses
            .filter(({ category }) => categorySelected === "All" || category === categorySelected)
            .map(({ name, institution, certificationUrl }) => (
              <Grid key={name} xs={12} md={6}>
                <CertAndCourseCard
                  name={name}
                  organization={institution}
                  certificationUrl={certificationUrl}
                  sx={sx.card}
                />
              </Grid>
            ))}
        </Grid>
      </div>
    </Stack>
  );
};

if (process.env.NODE_ENV === "development") Courses.whyDidYouRender = true;

export default Courses;