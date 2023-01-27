import { Button, Container, Typography } from "@mui/material";
import { FC } from "react";

import resume from "@/assets/documents/resume.pdf";
import SocialMedia from "@/components/SocialMedia";
import jobTitles from "@/constants/jobTitles";
import { HOME } from "@/constants/nav";
import { SectionProps } from "@/types";
import cx from "@/utils/cx";

import useSx from "./useSx";

const Hero: FC<SectionProps> = ({ sx: sxProp }) => {
  const sx = useSx();


  return (
    <Container component="section" id={HOME.id} sx={cx(sx.root, sxProp)}>
      <Typography variant="h1" sx={sx.title} gutterBottom>
        Matthew Kwong
      </Typography>
      <Typography variant="h6" component="p">
        {jobTitles.join(" & ")}
      </Typography>
      <SocialMedia sx={sx.socialMedia} />
      <Button
        variant="contained"
        size="large"
        component="a"
        href={resume}
        target="_blank"
        data-cy="resume"
      >
        Download Resume
      </Button>
    </Container>
  );
};

if (process.env.NODE_ENV === "development") {
  Hero.whyDidYouRender = true;
}

export default Hero;
