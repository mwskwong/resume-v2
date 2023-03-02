import {
  Unstable_Grid2 as Grid,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography
} from "@mui/material";
import { FC, MouseEvent, useState } from "react";

import getCertificateUrlById from "@/assets/getCertificateUrlById";
import CertificateCard from "@/components/shared/CertificateCard";
import categories from "@/constants/courseCategories";
import courses from "@/constants/courses";

import useSx from "./useCoursesSx";

const Courses: FC = () => {
  const sx = useSx();
  const [categorySelected, setCategorySelected] = useState("");

  const handleCategoryChange = (
    _: MouseEvent<HTMLElement>,
    category: string | null
  ) => {
    if (category !== null) {
      setCategorySelected(category);
    }
  };

  return (
    <Stack spacing={2} data-cy="courses">
      <Typography sx={sx.title} component="h3" data-cy="title">
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
        <ToggleButton value="" data-cy="category">
          All
        </ToggleButton>
        {categories.map(category => (
          <ToggleButton
            key={category.id}
            value={category.id}
            data-cy="category"
          >
            {category.name}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      <div>
        <Grid container spacing={2}>
          {courses
            .filter(
              ({ category }) =>
                !categorySelected || category.id === categorySelected
            )
            .map(({ id, name, institution }) => {
              const certificateUrl = getCertificateUrlById(id);

              return (
                <Grid key={name} xs={12} md={6}>
                  <CertificateCard
                    name={name}
                    organization={institution}
                    certificateUrl={certificateUrl}
                  />
                </Grid>
              );
            })}
        </Grid>
      </div>
    </Stack>
  );
};

export default Courses;
