"use client";

import { useForm as useFormspree } from "@formspree/react";
import { nopeResolver } from "@hookform/resolvers/nope";
import { CheckCircleRounded as SuccessIcon, PhoneRounded as Phone, SendRounded as SendIcon } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Alert, Container, Stack, Unstable_Grid2 as Grid } from "@mui/material";
import { FC, useEffect } from "react";
import { FormContainer, TextFieldElement, useForm as useHookForm } from "react-hook-form-mui";

import SectionHeader from "@/components/shared/SectionHeader";

import formSchema, { defaultValues } from "./formSchema";
import PersonalInfo from "./PersonalInfo";
import useSx from "./useContactSx";

// TODO: TextField causes hydration errors and refuse to work if clicked top early. Issue start showing in c0c8f858cc0939741ab81e7cf043d8b6dff9591d
// May be related to @formspree/react
const Contact: FC = () => {
  const sx = useSx();
  const hookFormContext = useHookForm({
    resolver: nopeResolver(formSchema),
    mode:"onChange",
    defaultValues
  });
  const [state, handleFormspreeSubmit, resetFormspree] = useFormspree(process.env.NEXT_PUBLIC_FORM);

  useEffect(() => {
    if (state.succeeded) {
      const resetFormTimeout = setTimeout(() => {
        hookFormContext.reset();
        resetFormspree();
      }, 5000);

      return () => clearTimeout(resetFormTimeout);
    }
  }, [hookFormContext, resetFormspree, state.succeeded]);

  return (
    <Container>
      <Stack spacing={6}>
        <SectionHeader heading="Contact" icon={<Phone />} />
        <FormContainer
          formContext={hookFormContext}
          onSuccess={handleFormspreeSubmit}
        >
          <Grid container spacing={6} disableEqualOverflow>
            <Grid xs={12} md={4}>
              <PersonalInfo />
            </Grid>
            <Grid container spacing={2} xs={12} md={8}>
              <Grid xs={12} sm={6}>
                <TextFieldElement
                  name="name"
                  label="Name"
                  fullWidth={true}
                  helperText={"\u200B"}
                  disabled={state.submitting}
                />
              </Grid>
              <Grid xs={12} sm={6}>
                <TextFieldElement
                  name="email"
                  label="Email"
                  fullWidth={true}
                  helperText={"\u200B"}
                  disabled={state.submitting}
                />
              </Grid>
              <Grid xs={12}>
                <TextFieldElement
                  name="subject"
                  label="Subject"
                  fullWidth={true}
                  helperText={"\u200B"}
                  disabled={state.submitting}
                />
              </Grid>
              <Grid xs={12}>
                <TextFieldElement
                  name="message"
                  label="Message"
                  fullWidth={true}
                  multiline
                  rows={9}
                  helperText={"\u200B"}
                  disabled={state.submitting}
                />
              </Grid>
            </Grid>
            <Grid xs={12} md={8} mdOffset={4} sx={sx.alertContainer}>
              <Stack spacing={1}>
                {state.errors.map(({ code, message }) => (
                  <Alert key={code} severity="error">{message}</Alert>
                ))}
              </Stack>
            </Grid>
            <Grid xs={12} sm="auto" smOffset="auto">
              <LoadingButton
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                loading={state.submitting}
                loadingPosition="end"
                color={state.succeeded ? "success" : "primary"}
                endIcon={state.succeeded ? <SuccessIcon /> : <SendIcon />}
              >
                send message
              </LoadingButton>
            </Grid>
          </Grid>
        </FormContainer>
      </Stack>
    </Container>
  );
};

if (process.env.NODE_ENV === "development") {
  Contact.whyDidYouRender = true;
}

export default Contact;
