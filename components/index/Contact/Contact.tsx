import { Alert, Box, Container, Unstable_Grid2 as Grid, Stack, Theme, useMediaQuery } from "@mui/material";
import { FC, useEffect } from "react";
import { SendRounded as SendIcon, CheckCircleRounded as SuccessIcon } from "@mui/icons-material";
import { object, string } from "nope-validator";

import { CONTACT } from "constants/nav";
import FormValues from "./FormValues";
import { LoadingButton } from "@mui/lab";
import PersonalInfo from "./PersonalInfo";
import SectionHeading from "components/common/SectionHeading";
import { SectionProps } from "types";
import TextField from "./TextField";
import { nopeResolver } from "@hookform/resolvers/nope";
import { useForm } from "react-hook-form";
import useFormspree from "./useFormspree";
import useSx from "./useContactSx";

const schema = object().shape({
  name: string().required(),
  email: string().email().required(),
  subject: string().required(),
  message: string().required()
});

const Contact: FC<SectionProps> = ({ sx: sxProp }) => {
  const sx = useSx(sxProp);
  const { control, handleSubmit, reset } = useForm<FormValues>({
    resolver: nopeResolver(schema),
    mode: "onChange",
    defaultValues: { name: "", email: "", subject: "", message: "" }
  });
  const [formState, handleFormspreeSubmit] = useFormspree(process.env.NEXT_PUBLIC_FORM);
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  useEffect(() => {
    if (formState.succeeded) reset();
  }, [formState.succeeded, reset]);

  return (
    <Box sx={sx.root} component="section" id={CONTACT.id}>
      <Container>
        <Stack spacing={6}>
          <SectionHeading heading="Contact" />
          <form onSubmit={handleSubmit(handleFormspreeSubmit)}>
            <Grid container spacing={6} disableEqualOverflow>
              <Grid xs={12} md={4}>
                <PersonalInfo />
              </Grid>
              <Grid container spacing={2} xs={12} md>
                <Grid xs={12} sm={6}>
                  <TextField
                    name="name"
                    control={control}
                    label="Name"
                    disabled={formState.submitting}
                  />
                </Grid>
                <Grid xs={12} sm={6}>
                  <TextField
                    name="email"
                    control={control}
                    label="Email"
                    disabled={formState.submitting}
                  />
                </Grid>
                <Grid xs={12}>
                  <TextField
                    name="subject"
                    control={control}
                    label="Subject"
                    disabled={formState.submitting}
                  />
                </Grid>
                <Grid xs={12}>
                  <TextField
                    name="message"
                    control={control}
                    label="Message"
                    multiline
                    rows={9}
                    disabled={formState.submitting}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Stack spacing={1} sx={sx.errorMessagesContainer}>
              {formState.errors.map(({ code, message }) => (
                <Alert key={code} severity="error">{message}</Alert>
              ))}
            </Stack>
            <LoadingButton
              loading={formState.submitting}
              loadingPosition="end"
              color={formState.succeeded ? "success" : "primary"}
              endIcon={formState.succeeded ? <SuccessIcon /> : <SendIcon />}
              sx={sx.submitButton}
              type="submit"
              variant="contained"
              size="large"
              fullWidth={smDown}
            >
              send message
            </LoadingButton>
          </form>
        </Stack>
      </Container>
    </Box>
  );
};

if (process.env.NODE_ENV === "development") Contact.whyDidYouRender = true;

export default Contact;