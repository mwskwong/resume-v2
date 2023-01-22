import { Box, Button, Container, Typography } from "@mui/material";
import { FC } from "react";

import resume from "@/assets/documents/resume.pdf";
import SocialMedia from "@/components/SocialMedia";
import { HOME } from "@/constants/nav";
import { SectionProps } from "@/types";

import useStyles from "./useStyles";
import useTypewriterTitle from "./useTypewriterTitle";

const Hero: FC<SectionProps> = ({ className }) => {
  const { classes, cx } = useStyles();
  const { ref, strings } = useTypewriterTitle();

  return (
    <Container component="section" id={HOME.id} className={cx(classes.root, className)}>
      <Typography variant="h5" component="div" className={classes.greetings}>
        Greetings
      </Typography>
      <Typography variant="h1" className={classes.title}>
        {"I Am "}
        <Box ref={ref} component="span" className={classes.typeIt}>
          {strings[strings.length - 1]}
        </Box>
      </Typography>
      <SocialMedia className={classes.socialMedia} />
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
