import { Unstable_Grid2 as Grid, Stack, Typography } from "@mui/material";
import { LazyMotion, m } from "framer-motion";
import {
  ChangeEventHandler,
  FC,
  useDeferredValue,
  useMemo,
  useState,
} from "react";

import getCertificatePathById from "@/assets/getCertificatePathById";
import CertificateCard from "@/components/shared/CertificateCard";
import SearchField from "@/components/shared/SearchField/SearchField";
import courses from "@/constants/courses";
import loadFramerMotionFeatures from "@/utils/loadFramerMotionFeatures";

import useSx from "./useCoursesSx";

const MotionGrid = m(Grid);

const Courses: FC = () => {
  const sx = useSx();
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const filteredCourses = useMemo(
    () =>
      courses.filter(({ name, category, institution }) => {
        const queryRegex = new RegExp(
          deferredQuery.replace(/[#-.]|[[-^]|[?|{}]/g, "\\$&"),
          "i"
        );

        return (
          queryRegex.test(name) ||
          queryRegex.test(category.name) ||
          queryRegex.test(institution.name)
        );
      }),
    [deferredQuery]
  );

  const handleSearch: ChangeEventHandler<HTMLInputElement> = (event) =>
    setQuery(event.target.value);
  const handleSearchClear = () => setQuery("");

  return (
    <Stack spacing={2} data-cy="courses" alignItems="stretch">
      <Typography sx={sx.title} component="h3" data-cy="title">
        Courses & Training
      </Typography>
      <SearchField
        sx={sx.searchField}
        value={query}
        onChange={handleSearch}
        onClear={handleSearchClear}
        inputProps={{ "aria-label": "search courses and training" }}
      />
      <div>
        <Grid container spacing={2}>
          <LazyMotion strict features={loadFramerMotionFeatures}>
            {filteredCourses.map(({ id, name, institution }) => {
              const certificateUrl = getCertificatePathById(id);

              return (
                <MotionGrid key={name} xs={12} md={6} layout>
                  <CertificateCard
                    name={name}
                    organization={institution}
                    certificateUrl={certificateUrl}
                  />
                </MotionGrid>
              );
            })}
          </LazyMotion>
        </Grid>
      </div>
    </Stack>
  );
};

export default Courses;
