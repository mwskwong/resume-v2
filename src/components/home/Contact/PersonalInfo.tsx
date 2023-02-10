import { EmailRounded as Email, LocationOnRounded as Location, SmartphoneRounded as Mobile } from "@mui/icons-material";
import { Box, Typography, Unstable_Grid2 as Grid } from "@mui/material";

import contact from "@/constants/contact";

import ContactUiTemplate from "./ContactUiTemplate";
import useSx from "./usePersonalInfoSx";

const contactUiTemplates: ContactUiTemplate[] = [
  {
    id: "phone",
    Icon: Mobile,
    title: "Call Me On",
    url: `tel:${contact.phone}`
  },
  {
    id: "email",
    Icon: Email,
    title: "Email Me At",
    url: `mailto:${contact.email}`
  },
  {
    id: "address",
    Icon: Location,
    title: "Find Me At",
    url: "https://www.google.com/maps/place/Hong+Kong"
  }
];

const PersonalInfo = () => {
  const sx = useSx();

  return (
    <Grid container spacing={3} xs={12} md={4} data-cy="personalInfo">
      {contactUiTemplates.map(({ id, Icon, title, url }) => (
        <Grid key={id} xs={12} sm={4} md={12}>
          <Box sx={sx.itemContainer} data-cy={id}>
            <Icon fontSize="large" />
            <Typography sx={sx.title} gutterBottom>
              {title}
            </Typography>
            <Typography
              sx={sx.value}
              component="a"
              href={url}
              target={url.startsWith("http") ? "_blank" : undefined}
            >
              {contact[id]}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

if (process.env.NODE_ENV === "development") {
  PersonalInfo.whyDidYouRender = true;
}

export default PersonalInfo;
