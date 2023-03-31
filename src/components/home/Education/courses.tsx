import { Unstable_Grid2 as Grid, Stack, Typography } from "@mui/material";
import { LazyMotion, m } from "framer-motion";
import {
  ChangeEventHandler,
  FC,
  useDeferredValue,
  useMemo,
  useState,
} from "react";

import getCertificatePathById from "@/assets/get-certificate-path-by-id";
import SearchField from "@/components/shared/SearchField";
import CertificateCard from "@/components/shared/certificate-card";
import courses from "@/constants/courses";
import loadFramerMotionFeatures from "@/utils/loadFramerMotionFeatures";

const MotionGrid = m(Grid);

const Courses: FC = () => {
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
      <Typography
        variant="subtitle2"
        component="h3"
        color="primary.main"
        align="center"
        data-cy="title"
      >
        Courses & Training
      </Typography>
      <SearchField
        sx={{ alignSelf: "center", width: "100%" }}
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
