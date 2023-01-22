import { Box, Button, Container, Typography } from "@mui/material";
import { FC } from "react";

import resume from "@/assets/documents/resume.pdf";
import SocialMedia from "@/components/SocialMedia";
import { HOME } from "@/constants/nav";
import { SectionProps } from "@/types";
import cx from "@/utils/cx";

import useSx from "./useSx";
import useTypewriterTitle from "./useTypewriterTitle";

const Hero: FC<SectionProps> = ({ sx: sxProp }) => {
  const sx = useSx();
  const { ref, strings } = useTypewriterTitle();

  return (
    <Container component="section" id={HOME.id} sx={cx(sx.root, sxProp)}>
      <Typography variant="h5" component="div" sx={sx.greetings}>
        Greetings
      </Typography>
      <Typography variant="h1" sx={sx.title}>
        {"I Am "}
        <Box ref={ref} component="span" sx={sx.typeIt}>
          {strings[strings.length - 1]}
        </Box>
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
