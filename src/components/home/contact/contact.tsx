"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  SendRounded as SendIcon,
  CheckCircleRounded as SuccessIcon,
} from "@mui/icons-material";
import {
  EmailRounded as Email,
  LocationOnRounded as Location,
  SmartphoneRounded as Mobile,
} from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Alert, Container, Unstable_Grid2 as Grid, Stack } from "@mui/material";
import { LazyMotion, m } from "framer-motion";
import { CircleSlice8 } from "mdi-material-ui";
import { useEffect } from "react";
import {
  FormContainer,
  TextFieldElement,
  useForm as useHookForm,
} from "react-hook-form-mui";

import SectionHeader from "@/components/shared/section-header";
import { address, email, phone } from "@/constants/data";
import loadFramerMotionFeatures from "@/utils/load-framer-motion-features";

import FormSchema from "./form-schema";
import PersonalInfo from "./personal-info";
import useFormspree from "./use-formspree";

const personalInfo = [
  {
    Icon: Mobile,
    title: "Call Me On",
    value: phone,
    url: `tel:${phone}`,
  },
  {
    Icon: Email,
    title: "Email Me At",
    value: email,
    url: `mailto:${email}`,
  },
  {
    Icon: Location,
    title: "Find Me At",
    value: address,
    url: "https://www.google.com/maps/place/Hong+Kong",
  },
];

const MotionAlert = m(Alert);

export default function Contact() {
  const hookFormContext = useHookForm({
    resolver: zodResolver(FormSchema),
    mode: "onChange",
  });
  const [state, handleFormspreeSubmit, resetFormspree] = useFormspree(
    process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID
  );

  useEffect(() => {
    if (state.succeeded) {
      hookFormContext.reset();
    }
  }, [hookFormContext, state.succeeded]);

  useEffect(() => {
    if (state.succeeded) {
      const resetFormspreeTimeout = setTimeout(() => {
        resetFormspree();
      }, 5000);

      return () => clearTimeout(resetFormspreeTimeout);
    }
  }, [resetFormspree, state.succeeded]);

  return (
    <Container>
      <Stack spacing={6}>
        <SectionHeader heading="Contact" icon={<CircleSlice8 />} />
        <FormContainer
          formContext={hookFormContext}
          onSuccess={handleFormspreeSubmit}
        >
          <Grid
            container
            spacing={6}
            sx={{ alignItems: "center" }}
            disableEqualOverflow
          >
            <Grid component="address" container xs={12} md={4} spacing={3}>
              {personalInfo.map((info) => (
                <Grid key={info.title} xs={12} sm={4} md={12}>
                  <PersonalInfo {...info} />
                </Grid>
              ))}
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
            <Grid xs={12} md={8} mdOffset="auto" pt={2}>
              <Stack spacing={1}>
                <LazyMotion features={loadFramerMotionFeatures}>
                  {state.errors.map(({ message }, index) => (
                    <MotionAlert
                      key={message}
                      severity="error"
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      {message}
                    </MotionAlert>
                  ))}
                </LazyMotion>
              </Stack>
            </Grid>
            <Grid xs={12} sm="auto" smOffset="auto">
              <LoadingButton
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                loading={state.submitting}
                loadingPosition="start"
                color={state.succeeded ? "success" : "primary"}
                startIcon={state.succeeded ? <SuccessIcon /> : <SendIcon />}
              >
                {state.succeeded ? "message sent" : "send message"}
              </LoadingButton>
            </Grid>
          </Grid>
        </FormContainer>
      </Stack>
    </Container>
  );
}
