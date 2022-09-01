import { Unstable_Grid2 as Grid, Stack, Typography } from "@mui/material";

import CertAndCourseCard from "components/common/CertAndCourseCard";
import type { FC } from "react";
import certifications from "constants/certifications";
import dateTimeFormat from "utils/dateTimeFormat";
import useSx from "./useCertificationsSx";

const Certifications: FC = () => {
  const sx = useSx();

  return (
    <Stack spacing={2}>
      <Typography sx={sx.title} component="h3">
        Certifications
      </Typography>
      <div>
        <Grid container spacing={2} disableEqualOverflow>
          {certifications
            .map(({ name, organization, issuedDate, expirationDate, url }) => {
              const issued = issuedDate instanceof Date
                ? `Issued ${dateTimeFormat.format(issuedDate)}`
                : issuedDate;
              const expire = expirationDate instanceof Date
                ? `Expires ${dateTimeFormat.format(expirationDate)}`
                : expirationDate;

              return (
                <Grid key={name} xs={12} md={6}>
                  <CertAndCourseCard
                    name={name}
                    organization={organization}
                    status={issued === "In Progress" ? issued : `${issued} — ${expire}`}
                    certificationUrl={url}
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

if (process.env.NODE_ENV === "development") Certifications.whyDidYouRender = true;

export default Certifications;