import { EmailRounded as Email, LocationOnRounded as Location, SmartphoneRounded as Mobile } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";

import contact from "@/constants/contact";

import useSx from "./usePersonalInfoSx";

const contactTemplate = {
  phone: {
    Icon: Mobile,
    title: "Call Me On",
    urlPrefix: "tel:"
  },
  email: {
    Icon: Email,
    title: "Email Me At",
    urlPrefix: "mailto:"
  },
  address: {
    Icon: Location,
    title: "Find Me At",
    urlPrefix: undefined
  }
};

const PersonalInfo = () => {
  const sx = useSx();

  return (
    <Stack spacing={3} sx={sx.root}>
      {
        (
          Object.entries(contactTemplate) as
          [
            keyof typeof contactTemplate,
            typeof contactTemplate[keyof typeof contactTemplate]
          ][]
        ).map(([key, { Icon, title, urlPrefix }]) => (
          <Box key={key} sx={sx.itemContainer}>
            <Icon fontSize="large" />
            <Typography component="div" sx={sx.title} gutterBottom>
              {title}
            </Typography>
            <Typography
              sx={sx.value}
              component={urlPrefix ? "a" : "div"}
              href={urlPrefix && `${urlPrefix}${contact?.[key]}`}
            >
              {contact?.[key]}
            </Typography>
          </Box>
        ))
      }
    </Stack>
  );
};

if (process.env.NODE_ENV === "development") PersonalInfo.whyDidYouRender = true;

export default PersonalInfo;