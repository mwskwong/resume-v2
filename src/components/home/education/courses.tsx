import {
  Unstable_Grid2 as Grid,
  Stack,
  StackProps,
  Typography,
} from "@mui/material";
import { LazyMotion, m } from "framer-motion";
import { ChangeEventHandler, useDeferredValue, useMemo, useState } from "react";

import CertificateCard from "@/components/shared/certificate-card";
import SearchField from "@/components/shared/search-field";
import cx from "@/utils/cx";
import loadFramerMotionFeatures from "@/utils/load-framer-motion-features";

interface Props extends StackProps {
  courses?: {
    name: string;
    institution?: {
      id: string;
      name: string;
    };
    certificate?: string;
  }[];
}

const MotionGrid = m(Grid);

// TODO: fetch courses here directly once hitting MUI v6
export default function Courses({ courses = [], sx, ...props }: Props) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const filteredCourses = useMemo(
    () =>
      courses.filter(({ name, institution }) => {
        const queryRegex = new RegExp(
          deferredQuery.replace(/[#-.]|[[-^]|[?|{}]/g, "\\$&"),
          "i"
        );

        return (
          queryRegex.test(name) ||
          (institution && queryRegex.test(institution.name))
        );
      }),
    [courses, deferredQuery]
  );

  const handleSearch: ChangeEventHandler<HTMLInputElement> = (event) =>
    setQuery(event.target.value);
  const handleSearchClear = () => setQuery("");

  return (
    <Stack spacing={2} sx={cx({ alignItems: "stretch" }, sx)} {...props}>
      <Typography
        variant="subtitle2"
        component="h3"
        sx={{ color: "primary.main", textAlign: "center" }}
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
            {filteredCourses.map(({ name, institution, certificate }) => {
              return (
                <MotionGrid key={name} xs={12} md={6} layout>
                  <CertificateCard
                    name={name}
                    organization={institution}
                    certificateUrl={certificate}
                  />
                </MotionGrid>
              );
            })}
          </LazyMotion>
        </Grid>
      </div>
    </Stack>
  );
}
