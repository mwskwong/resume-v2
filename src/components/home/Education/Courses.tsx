import { Stack, ToggleButton, ToggleButtonGroup, Typography, Unstable_Grid2 as Grid } from "@mui/material";
import { FC, MouseEvent, useState } from "react";

import getCertificateUrl from "@/assets/getCertificateUrl";
import CertificateCard from "@/components/shared/CertificateCard";
import categories from "@/constants/courseCategories";
import courses from "@/constants/courses";

import useSx from "./useCoursesSx";

const Courses: FC = () => {
  const sx = useSx();
  const [categorySelected, setCategorySelected] = useState("");

  const handleCategoryChange = (_: MouseEvent<HTMLElement>, category: string | null) => {
    if (category !== null) {
      setCategorySelected(category);
    }
  };

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
        <ToggleButton value="" data-cy="All">All</ToggleButton>
        {categories.map(category =>
          <ToggleButton key={category.id} value={category.id} data-cy={category.id}>
            {category.name}
          </ToggleButton>
        )}
      </ToggleButtonGroup>
      <div>
        <Grid container spacing={2}>
          {courses
            .filter(({ category }) => !categorySelected || category.id === categorySelected)
            .map(({ id, name, institution }) => {
              const certificateUrl = getCertificateUrl(id);

              return (
                <Grid key={name} xs={12} md={6}>
                  <CertificateCard
                    name={name}
                    organization={institution}
                    certificateUrl={certificateUrl}
                    sx={sx.card}
                  />
                </Grid>
              );
            })}
        </Grid>
      </div>
    </Stack>
  );
};

if (process.env.NODE_ENV === "development") {
  Courses.whyDidYouRender = true;
}

export default Courses;