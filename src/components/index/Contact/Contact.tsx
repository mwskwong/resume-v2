import { nopeResolver } from "@hookform/resolvers/nope";
import { CheckCircleRounded as SuccessIcon, PhoneRounded as Phone, SendRounded as SendIcon } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Alert, Box, Container, Stack, Unstable_Grid2 as Grid } from "@mui/material";
import { object, string } from "nope-validator";
import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";

import SectionHeading from "@/components/common/SectionHeading";
import { CONTACT } from "@/constants/nav";
import { SectionProps } from "@/types";

import FormValues from "./FormValues";
import PersonalInfo from "./PersonalInfo";
import TextField from "./TextField";
import useSx from "./useContactSx";
import useFormspree from "./useFormspree";

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

  useEffect(() => {
    if (formState.succeeded) reset();
  }, [formState.succeeded, reset]);

  return (
    <Box sx={sx.root} component="section" id={CONTACT.id}>
      <Container>
        <Stack spacing={6}>
          <SectionHeading heading="Contact" icon={<Phone />} />
          <form onSubmit={handleSubmit(handleFormspreeSubmit)} data-cy="contact">
            <Grid container spacing={6} disableEqualOverflow>
              <Grid xs={12} md={4}>
                <PersonalInfo />
              </Grid>
              <Grid container spacing={2} xs={12} md={8}>
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
              <Grid xs={12} md={8} mdOffset={4} sx={sx.alertContainer}>
                <Stack spacing={1}>
                  {formState.errors.map(({ code, message }) => (
                    <Alert key={code} severity="error" data-cy="alert">{message}</Alert>
                  ))}
                </Stack>
              </Grid>
              <Grid xs={12} sm="auto" smOffset="auto">
                <LoadingButton
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  loading={formState.submitting}
                  loadingPosition="end"
                  color={formState.succeeded ? "success" : "primary"}
                  endIcon={formState.succeeded ? <SuccessIcon /> : <SendIcon />}
                >
                  send message
                </LoadingButton>
              </Grid>
            </Grid>
          </form>
        </Stack>
      </Container>
    </Box>
  );
};

if (process.env.NODE_ENV === "development") Contact.whyDidYouRender = true;

export default Contact;