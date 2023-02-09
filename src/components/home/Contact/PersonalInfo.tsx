import { EmailRounded as Email, LocationOnRounded as Location, SmartphoneRounded as Mobile } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";

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
    <Stack spacing={3} sx={sx.root} data-cy="personalInfo">
      {contactUiTemplates.map(({ id, Icon, title, url }) => (
        <Box key={id} sx={sx.itemContainer} data-cy={id}>
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
      ))}
    </Stack>
  );
};

if (process.env.NODE_ENV === "development") {
  PersonalInfo.whyDidYouRender = true;
}

export default PersonalInfo;
