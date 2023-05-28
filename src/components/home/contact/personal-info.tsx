import {
  EmailRounded as Email,
  LocationOnRounded as Location,
  SmartphoneRounded as Mobile,
} from "@mui/icons-material";
import { Box, Unstable_Grid2 as Grid, Link, Typography } from "@mui/material";

import { address, email, phone } from "@/constants/data";

const personalInfo = [
  {
    id: "phone",
    Icon: Mobile,
    title: "Call Me On",
    value: phone,
    url: `tel:${phone}`,
  },
  {
    id: "email",
    Icon: Email,
    title: "Email Me At",
    value: email,
    url: `mailto:${email}`,
  },
  {
    id: "address",
    Icon: Location,
    title: "Find Me At",
    value: address,
    url: "https://www.google.com/maps/place/Hong+Kong",
  },
];

export default function PersonalInfo() {
  return (
    <Grid
      component="address"
      container
      spacing={3}
      xs={12}
      md={4}
      sx={{ textAlign: "center" }}
      data-cy="personalInfo"
    >
      {personalInfo.map(({ id, Icon, title, value, url }) => (
        <Grid key={id} xs={12} sm={4} md={12}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            data-cy={id}
          >
            <Icon fontSize="large" />
            <Typography
              sx={{
                color: "primary.main",
                mt: 2,
              }}
              gutterBottom
            >
              {title}
            </Typography>
            <Link
              color="inherit"
              underline="hover"
              sx={{ zIndex: 1 }}
              href={url}
              target={url.startsWith("http") ? "_blank" : undefined}
            >
              {value}
            </Link>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
